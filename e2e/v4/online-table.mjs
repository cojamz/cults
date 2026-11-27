// E2E: a whole online game at a table of 2, 3 or 4 people, each in their own browser, over the Firebase RTDB emulator
// (Cory, Nov 14: "wait does multiplayer work? we've made so many changes. can you make sure????").
//   V4_PLAYERS=2|3|4 (default 4). The host and every guest play varied legal answers (not always the first), so games
//   reach members, contests and cloaks the first-option driver of online.mjs never touches.
//   Every few seconds the driver reads every screen's game record: the seed and colors must match, and each screen's move
//   list must be a prefix of the longest (a screen may lag, never disagree). Where two screens show the same move count,
//   their scores must match too.
//   Mid-game: a guest reloads; the last guest closes the tab, the host lets a bot sit in, and the guest comes back by the
//   invite link; the host reloads (the host role moves and comes back). At the end every screen must show the same
//   winner, the same scores and the same move list, and no screen may log an error.
// Server: $V4_URL (e.g. a `vite preview` of the commit under test) or `npx vite` on a free port.
import { browserPath, launchBrowser } from './lib/browser.mjs';
import { spawn, spawnSync } from 'node:child_process';
import { mkdirSync, existsSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:net';
import { homedir } from 'node:os';
import { answerChoice } from './lib/answer.mjs';

const N = Math.max(2, Math.min(4, Number(process.env.V4_PLAYERS) || 4));
const SEED = Number(process.env.V4_SEED) || (Date.now() % 100000);
const SHOTS = process.env.V4_SHOTS || '/tmp/patrons-shots/v4';
mkdirSync(SHOTS, { recursive: true });
let rnd = SEED; const rand = n => { rnd = (rnd * 1103515245 + 12345) % 2147483648; return rnd % n; };

const EMU_VERSION = '4.11.2';
const EMU_NS = 'cornycolonies-default-rtdb';
const freePort = () => new Promise((res, rej) => { const s = createServer(); s.listen(0, '127.0.0.1', () => { const { port } = s.address(); s.close(() => res(port)); }); s.on('error', rej); });
async function startEmulator() {
  if (process.env.V4_RTDB) return { host: process.env.V4_RTDB, stop() {} };
  if (spawnSync('java', ['-version'], { stdio: 'ignore' }).status !== 0) throw new Error('no java: this gate needs the RTDB emulator');
  const jar = process.env.V4_RTDB_JAR || `${homedir()}/.cache/patrons/firebase-database-emulator-v${EMU_VERSION}.jar`;
  if (!existsSync(jar)) {
    mkdirSync(jar.slice(0, jar.lastIndexOf('/')), { recursive: true });
    const r = spawnSync('curl', ['-sSfL', '--max-time', '180', '-o', `${jar}.part`, `https://storage.googleapis.com/firebase-preview-drop/emulator/firebase-database-emulator-v${EMU_VERSION}.jar`], { stdio: 'ignore' });
    if (r.status !== 0) throw new Error('could not fetch the RTDB emulator');
    renameSync(`${jar}.part`, jar);
  }
  const port = await freePort();
  const proc = spawn('java', ['-jar', jar, '--host', '127.0.0.1', '--port', String(port)], { stdio: 'ignore' });
  const stop = () => { try { proc.kill('SIGKILL'); } catch { /* gone */ } };
  const at = `http://127.0.0.1:${port}`;
  for (let k = 0; k < 120; k++) {
    await new Promise(r => setTimeout(r, 500));
    if (await fetch(`${at}/.json?ns=${EMU_NS}`).then(r => r.status < 500, () => false)) {
      const rules = readFileSync(new URL('../../database.rules.json', import.meta.url), 'utf8');
      if (await fetch(`${at}/.settings/rules.json?ns=${EMU_NS}`, { method: 'PUT', headers: { Authorization: 'Bearer owner' }, body: rules }).then(r => r.ok, () => false)) return { host: `127.0.0.1:${port}`, stop };
    }
  }
  stop();
  throw new Error('the RTDB emulator did not start');
}
const emu = await startEmulator();
let server = null;
let base = process.env.V4_URL;
if (!base) {
  const port = await freePort();
  base = `http://localhost:${port}`;
  server = spawn('npx', ['vite', '--port', String(port), '--strictPort'], { stdio: 'pipe' });
  let up = false;
  for (let k = 0; k < 60 && !up; k++) { await new Promise(r => setTimeout(r, 500)); up = await fetch(base).then(r => r.ok, () => false); }
  if (!up) { server.kill(); emu.stop(); console.error('vite did not start'); process.exit(1); }
}

const NAMES = ['Hana', 'Gus', 'Pia', 'Ola'].slice(0, N);
const tag = `${N}p seed ${SEED}`;
const log = (...a) => console.log(`[table ${tag}]`, ...a);
const errors = [];
const browser = await launchBrowser({ executablePath: browserPath });
const laptop = { viewport: { width: 1270, height: 700 } };
const ctxs = {}; for (const n of NAMES) ctxs[n] = await browser.newContext(laptop);
const pages = {};
const watch = (page, who) => {
  page.on('console', m => { if (m.type() === 'error') errors.push(`${who} console: ${m.text()}`); });
  page.on('pageerror', e => errors.push(`${who} pageerror: ${e.message}`));
  page.on('requestfailed', r => errors.push(`${who} request failed: ${r.url().slice(0, 160)} ${r.failure()?.errorText}`));
  return page;
};
const GAME = '.app.game';
const url = `${base}/?rtdb=${emu.host}&botDelay=30&subAfter=1500&intro=0`;

// what one screen says: its record and the scores it shows
const read = page => page.evaluate(() => {
  let r = null; try { r = JSON.parse(window.patronsRecord()); } catch { /* none yet */ }
  const scores = [...document.querySelectorAll('.lt-seat[data-pid]')].map(s => [s.getAttribute('data-pid'), s.querySelector('[data-followers]')?.getAttribute('data-followers')]).sort().map(x => x.join(':')).join(' ');
  return r && { seed: r.seed, quadrants: (r.quadrants || []).join(','), moves: r.moves || [], scores, round: r.at?.round, over: r.at?.over };
}).catch(() => null);
let checks = 0, maxMoves = 0;
async function checkSync(final = false) {
  const live = Object.entries(pages).filter(([, p]) => p && !p.isClosed());
  const views = [];
  for (const [who, p] of live) { const v = await read(p); if (v) views.push([who, v]); }
  if (views.length < 2) return;
  const [w0, v0] = views[0];
  for (const [w, v] of views) {
    if (v.seed !== v0.seed || v.quadrants !== v0.quadrants) throw new Error(`${w} and ${w0} are playing different tables: ${v.seed}/${v.quadrants} vs ${v0.seed}/${v0.quadrants}`);
  }
  const longest = views.reduce((a, b) => (b[1].moves.length > a[1].moves.length ? b : a));
  const L = JSON.stringify(longest[1].moves);
  for (const [w, v] of views) {
    const mine = JSON.stringify(v.moves);
    if (!L.startsWith(mine.slice(0, -1))) {
      const k = v.moves.findIndex((m, i) => JSON.stringify(m) !== JSON.stringify(longest[1].moves[i]));
      throw new Error(`${w} disagrees with ${longest[0]} at move ${k}: ${JSON.stringify(v.moves[k])} vs ${JSON.stringify(longest[1].moves[k])}`);
    }
    if (final && v.moves.length !== longest[1].moves.length) throw new Error(`at the end ${w} has ${v.moves.length} moves, ${longest[0]} has ${longest[1].moves.length}`);
  }
  // same move count and no animation in flight: same scores (scores tick up, so only compare once settled)
  if (final) for (const [w, v] of views) if (v.scores !== v0.scores) throw new Error(`final scores differ: ${w} ${v.scores} vs ${w0} ${v0.scores}`);
  checks++; maxMoves = Math.max(maxMoves, longest[1].moves.length);
}

const stuck = new Map();
async function step(page) {
  if (!page || page.isClosed()) return false;
  const next = await page.$('[data-next-round]');
  if (next) { await next.click().catch(() => {}); return true; }
  const place = await page.$('[data-place]');
  if (place) { await place.click({ timeout: 1500 }).catch(() => {}); return true; }
  // Makeover's rearrange card (LaunderCard): a person presses Done on the mix it offers
  const launder = await page.$('[data-launder-done]:not([disabled])');
  if (launder) { await launder.click({ timeout: 1500 }).catch(() => {}); return true; }
  if (!(await page.$('[data-option]:not([disabled]), [data-share-give]:not([disabled]), [data-split-take]:not([disabled]), [data-spend-take]:not([disabled]), [data-convert-take]:not([disabled]), [data-swap-done]:not([disabled])'))) return false;
  const now = await page.evaluate(() => ({
    key: `${document.querySelector('.app.game')?.dataset.moves}|${document.querySelector('[data-prompt]')?.textContent}`,
    flying: !!document.querySelector('.lt-wheel [data-slot].sel, .lt-wheel [data-cell].sel') && !document.querySelector('[data-place]') && !document.querySelector('.error'),
  })).catch(() => ({ key: '', flying: false }));
  if (now.flying) return false;
  const st = stuck.get(page);
  const tries = st && st.key === now.key ? st.tries : 0;
  const since = st && st.key === now.key ? st.at : Date.now();
  if (Date.now() - since > 60000) throw new Error(`${Object.keys(pages).find(k => pages[k] === page)}: stuck on "${now.key}" for 60s (${tries} answers tried)`);
  if (Date.now() - since < 500 || (st && st.key === now.key && Date.now() - st.last < 400)) { stuck.set(page, { key: now.key, tries, at: since, last: st?.last || 0 }); return false; }
  stuck.set(page, { key: now.key, tries: tries + 1, at: since, last: Date.now() });
  // varied play: a random answer among the first few, so members get recruited and contests contested
  const res = await answerChoice(page, { panelFirst: true, skip: tries + rand(4), domFallback: true, last: [/pass/i] });
  return !!res;
}
async function playUntil(done, ms, what) {
  const t0 = Date.now();
  let over = false, failure = null, lastSync = 0;
  const nap = n => new Promise(r => setTimeout(r, n));
  const loop = async who => { while (!over) { const p = pages[who]; const acted = p && !p.isClosed() ? await step(p).catch(e => { if (!p.isClosed()) { failure ||= e; over = true; } return false; }) : false; if (!acted) await nap(80); } };
  const loops = Object.keys(pages).map(loop);
  try {
    while (!failure && !(await done())) {
      if (Date.now() - t0 > ms) throw new Error(`timed out playing until ${what} (moves ${await moves(pages[NAMES[0]])})`);
      if (Date.now() - lastSync > 3000) { await checkSync(); lastSync = Date.now(); }
      await nap(150);
    }
  } finally { over = true; await Promise.all(loops); }
  if (failure) throw failure;
}
const moves = page => page.evaluate(() => { try { return JSON.parse(window.patronsRecord()).moves?.length ?? 0; } catch { return 0; } }).catch(() => 0);
const atResults = async () => { for (const p of Object.values(pages)) if (!p || p.isClosed() || !(await p.$('.results'))) return false; return true; };

let ok = false, summary = '';
try {
  const host = NAMES[0];
  pages[host] = watch(await ctxs[host].newPage(), host);
  await pages[host].goto(url);
  await pages[host].fill('input[placeholder="Name"]', host);
  await pages[host].click('text=Host online game');
  await pages[host].waitForSelector('.code');
  const code = (await pages[host].$eval('.code', e => e.firstChild.textContent)).trim();
  const invite = await pages[host].$eval('[data-invite]', e => e.value);
  log('room', code);
  for (const who of NAMES.slice(1)) {
    pages[who] = watch(await ctxs[who].newPage(), who);
    await pages[who].goto(`${invite}&intro=0`);
    await pages[who].waitForSelector('input[aria-label="Room code"]');
    await pages[who].fill('input[placeholder="Name"]', who);
    await pages[who].click('text=Join with code');
    await pages[who].waitForSelector('.code');
  }
  await pages[host].waitForFunction(n => document.querySelectorAll('.seats li').length === n && document.querySelectorAll('.seats [data-presence="here"]').length === n, N, { timeout: 20000 });
  // V4_TABLE=echo,trading,...: the host picks a Custom table of those colors, in that order
  if (process.env.V4_TABLE) {
    const want = process.env.V4_TABLE.split(',');
    await pages[host].click('[role="radiogroup"][aria-label="Table"] >> text=Custom');
    if (await pages[host].$('[data-table-clear]')) await pages[host].click('[data-table-clear]');
    for (const id of want) await pages[host].click(`[data-sphere="${id}"]`);
    for (const who of NAMES) await pages[who].waitForFunction(t => document.querySelector(`[data-table="${t}"]`), want.join(','), { timeout: 15000 });
    log('table', want.join(' '));
  }
  await pages[host].screenshot({ path: `${SHOTS}/table-${N}p-lobby.png` });
  await pages[host].click('text=Start game');
  await Promise.all(Object.values(pages).map(p => p.waitForSelector(GAME, { timeout: 30000 })));
  log('started');
  const g = NAMES[1], last = NAMES[N - 1];

  await playUntil(async () => (await moves(pages[host])) >= 10, 120000, 'a few moves');
  await pages[g].reload(); await pages[g].waitForSelector(GAME, { timeout: 20000 });
  log(`${g} reloaded`);
  await checkSync();

  await playUntil(async () => (await moves(pages[host])) >= 25, 120000, 'more moves');
  await pages[last].goto('about:blank'); await pages[last].close(); pages[last] = null;
  await pages[host].waitForSelector(`[data-online-sub="${N - 1}"]`, { timeout: 30000 });
  await pages[host].click(`[data-online-sub="${N - 1}"]`);
  const before = await moves(pages[host]);
  log(`${last} left; a bot sits in at move ${before}`);
  await playUntil(async () => (await moves(pages[host])) >= before + 4 * N, 120000, 'play with the bot in');
  pages[last] = watch(await ctxs[last].newPage(), last);
  await pages[last].goto(`${invite}&intro=0`);
  await pages[last].waitForSelector(GAME, { timeout: 30000 });
  log(`${last} back`);
  await checkSync();

  await playUntil(async () => (await moves(pages[host])) >= before + 8 * N, 180000, 'a few more moves');
  await pages[host].reload(); await pages[host].waitForSelector(GAME, { timeout: 20000 });
  log(`${host} (host) reloaded`);

  await playUntil(atResults, 900000, 'final results');
  await pages[host].waitForTimeout(2500); // scores finish ticking
  await checkSync(true);
  const wins = await Promise.all(Object.values(pages).map(p => p.$eval('.results .win', e => ({ winners: e.dataset.winners, top: e.dataset.top, text: e.textContent.trim() }))));
  if (wins.some(w => !w.winners || !w.top) || new Set(wins.map(w => `${w.winners}|${w.top}`)).size !== 1) throw new Error(`players disagree on the result: ${JSON.stringify(wins)}`);
  const rec = JSON.parse(await pages[host].evaluate(() => window.patronsRecord()));
  if (rec.seats.length !== N) throw new Error(`record has ${rec.seats.length} seats, want ${N}`);
  writeFileSync(`${SHOTS}/table-${N}p-${SEED}.json`, JSON.stringify(rec));
  for (const [who, p] of Object.entries(pages)) await p.screenshot({ path: `${SHOTS}/table-${N}p-results-${who}.png` });
  summary = `${rec.moves.length} moves, ${checks} sync checks, colors ${rec.quadrants.join(' ')}; ${wins[0].text}`;
  ok = errors.length === 0;
} catch (e) {
  errors.push(`run: ${e.stack || e.message}`);
  for (const [who, pg] of Object.entries(pages)) if (pg && !pg.isClosed()) errors.push(`${who} options: ${JSON.stringify(await pg.$$eval('[data-option], [data-split-take], [data-spend-take], [data-convert-take], [data-swap-done]', els => els.map(e => (e.getAttribute('data-option') || e.outerHTML.slice(0, 80)) + (e.disabled ? '(off)' : ''))).catch(() => '-'))} error: ${await pg.$eval('.error', e => e.textContent).catch(() => '-')}`);
  for (const [who, pg] of Object.entries(pages)) if (pg && !pg.isClosed()) { const r = await pg.evaluate(() => window.patronsRecord()).catch(() => null); if (r) writeFileSync(`${SHOTS}/zz-table-${N}p-${who}-record.json`, r); }
  for (const [who, pg] of Object.entries(pages)) if (pg && !pg.isClosed()) await pg.screenshot({ path: `${SHOTS}/zz-table-${N}p-${who}-failure.png` }).catch(() => {});
} finally {
  await browser.close();
  if (server) server.kill();
  emu.stop();
}
if (errors.length) console.error(errors.join('\n'));
log(summary);
console.log(ok ? `PASS online-table (${tag})` : `FAIL online-table (${tag})`);
process.exit(ok ? 0 : 1);
