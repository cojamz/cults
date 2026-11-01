import { browserPath, launchBrowser } from './lib/browser.mjs';
// E2E gate: giving silver one click at a time (Party Gifts; Cory, 2026-11-01: "giving out silver when you're choosing -
// not clear how many times you've clicked / what's remaining"). At 1270x700 the gift card by the space says
// "0 given · 3 left", each click moves it (1 · 2, 2 · 1) and puts "+1" on that rival's face, Done says how many it
// gives ("Done: give 2"), and at Done the rivals' silver goes up by their tallies.
// Server: $V4_URL if set, else its own `npx vite` on a free port from 5420.
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { createServer } from 'node:net';
import { createGame, applyMove, chooseBotMove, quadrant } from '../../src/engine/v4/index.js';
import { seededRandom } from '../../src/engine/v4/rng.js';
import { buildStamp } from './lib/stamp.mjs';
import { seedSave } from './lib/seed.mjs';

const SHOTS = (process.env.V4_SHOTS || '/tmp/patrons-shots/v4') + '/silver-share';
mkdirSync(SHOTS, { recursive: true });
const TABLE = ['gold', 'red', 'blue', 'silver'];

function save() {
  const q = TABLE.indexOf('silver'), i = quadrant('silver').actions.findIndex(a => a.key === 'partygifts');
  const seats = [{ name: 'P1', kind: 'human' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }, { name: 'P4', kind: 'bot' }];
  for (let seed = 1; seed < 400; seed++) {
    let s = createGame({ seats, seed, quadrants: TABLE });
    const rand = seededRandom(seed);
    const ready = st => st.pending && st.pending.player === 0 && st.pending.kind === 'place' && st.pending.options.some(o => o.id === `slot:${q}-${i}`);
    for (let n = 0; n < 1500 && !ready(s) && !s.over; n++) s = applyMove(s, chooseBotMove(s, rand));
    if (!ready(s)) continue;
    s = applyMove(s, { player: 0, option: `slot:${q}-${i}` });
    if (!(s.pending && s.pending.kind === 'choose' && s.queue[0]?.h === 'silver.share')) continue;
    s.build = buildStamp();
    return { config: { seats: seats.map(x => ({ kind: x.kind, name: x.name })), speed: 'normal' }, state: s, undo: null, savedAt: Date.now() };
  }
  throw new Error('silver-share save: never reached P1 on Party Gifts');
}

let server = null;
let base = process.env.V4_URL;
if (!base) {
  const free = port => new Promise(res => { const srv = createServer().once('error', () => res(false)).once('listening', () => srv.close(() => res(true))).listen(port, 'localhost'); });
  let port = 5420;
  while (!(await free(port))) port++;
  base = `http://localhost:${port}`;
  server = spawn('npx', ['vite', '--port', String(port), '--strictPort'], { stdio: 'pipe' });
  let up = false;
  for (let k = 0; k < 120 && !up; k++) { await new Promise(r => setTimeout(r, 500)); up = await fetch(base).then(r => r.ok, () => false); }
  if (!up) { server.kill(); console.error('vite did not start'); process.exit(1); }
}

const errors = [];
const browser = await launchBrowser({ executablePath: browserPath });
try {
  const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 } });
  const page = await ctx.newPage();
  page.on('pageerror', e => errors.push(`pageerror: ${e.message}`));
  const sv = save();
  await seedSave(page, sv);
  await page.goto(`${base}/?intro=0`, { timeout: 90000 });
  await page.waitForSelector('[data-home="resume"]', { timeout: 60000 });
  await page.click('[data-home="resume"]');
  const card = '.gift-card[data-gift="share"]';
  await page.waitForSelector(card, { timeout: 90000 });
  const title = () => page.$eval(`${card} .gc-title`, e => e.textContent.replace(/\s+/g, ' ').trim()).catch(() => '');
  const done = () => page.$eval(`${card} .gc-rest`, e => e.textContent.replace(/\s+/g, ' ').trim()).catch(() => '');
  const tally = pid => page.$eval(`${card} .gc-share[data-pid="${pid}"] .gc-tally`, e => e.textContent).catch(() => '');
  if ((await title()) !== 'Party Gifts · 0 given · 3 left') errors.push(`opens with "${await title()}", want "Party Gifts · 0 given · 3 left"`);
  if ((await done()) !== 'Give nothing') errors.push(`opens with "${await done()}", want "Give nothing"`);
  await page.screenshot({ path: `${SHOTS}/0-open.png` });
  const silver = pid => sv.state.players[pid].res.silver || 0;
  // two clicks, then Done (a third would give the last one and close the card on its own)
  const want = [[1, 'Party Gifts · 1 given · 2 left', { 1: '+1' }], [2, 'Party Gifts · 2 given · 1 left', { 1: '+1', 2: '+1' }]];
  for (const [k, [pid, t, tallies]] of want.entries()) {
    await page.waitForTimeout(250); // a person's pace between clicks
    await page.click(`${card} .gc-share[data-pid="${pid}"]:not([disabled])`, { timeout: 8000 }).catch(() => errors.push(`click ${k + 1}: P${pid + 1}'s face not clickable`));
    await page.waitForFunction(([sel, t]) => (document.querySelector(sel)?.textContent || '').replace(/\s+/g, ' ').trim() === t, [`${card} .gc-title`, t], { timeout: 8000 })
      .catch(async () => errors.push(`after click ${k + 1}: "${await title()}", want "${t}"`));
    for (const [p, v] of Object.entries(tallies)) if ((await tally(p)) !== v) errors.push(`after click ${k + 1}: P${Number(p) + 1} shows "${await tally(p)}", want "${v}"`);
    await page.screenshot({ path: `${SHOTS}/${k + 1}-given.png` });
  }
  if ((await done()) !== 'Done: give 2') errors.push(`at 2 given the button reads "${await done()}", want "Done: give 2"`);
  await page.click(`${card} .gc-rest button`);
  await page.waitForFunction(() => !document.querySelector('.gift-card[data-gift="share"]'), null, { timeout: 8000 }).catch(() => errors.push('Done never closed the card'));
  await page.waitForTimeout(1500);
  const after = pid => page.$eval(`.lt-seat[data-pid="${pid}"] .cs-stack[data-res="silver"] b`, e => Number(e.textContent)).catch(() => NaN);
  for (const [pid, n] of [[1, 1], [2, 1]]) {
    const got = await after(pid);
    if (got < silver(pid) + n) errors.push(`P${pid + 1}'s silver reads ${got} after Done, want at least ${silver(pid) + n}`);
  }
  await page.screenshot({ path: `${SHOTS}/4-after.png` });
  await ctx.close();
} catch (e) { errors.push(String(e && e.stack || e)); }
await browser.close();
if (server) server.kill();
if (errors.length) { console.error('silver-share gate: FAIL\n  ' + errors.join('\n  ')); process.exit(1); }
console.log(`silver-share gate: ok (count and tally on Party Gifts' card; shots in ${SHOTS})`);
process.exit(0);
