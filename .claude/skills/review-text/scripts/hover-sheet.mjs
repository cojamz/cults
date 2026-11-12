// Every space's hover card as a player sees it (rule, badge, You'd get, Why), text plus a picture of each, at 1270×700.
//   node .claude/skills/review-text/scripts/hover-sheet.mjs --round 2 --out file.md [--shots dir]
// Server: $V4_URL if set, else its own `npx vite` on a free port from 5310.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { writeFileSync, mkdirSync } from 'node:fs';
import { createGame, applyMove, chooseBotMove, quadrant } from '../../../../src/engine/v4/index.js';
import { seededRandom } from '../../../../src/engine/v4/rng.js';
import { browserPath } from '../../../../e2e/v4/lib/browser.mjs';
import { buildStamp } from '../../../../e2e/v4/lib/stamp.mjs';
import { seedSave } from '../../../../e2e/v4/lib/seed.mjs';

const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i < 0 ? d : argv[i + 1]; };
const out = arg('--out', null), shots = arg('--shots', null), round = Number(arg('--round', 2));
if (shots) mkdirSync(shots, { recursive: true });
let base = process.env.V4_URL, server = null;
if (!base) {
  const free = port => new Promise(res => { const srv = createServer().once('error', () => res(false)).once('listening', () => srv.close(() => res(true))).listen(port, 'localhost'); });
  let port = 5310;
  while (!(await free(port))) port++;
  base = `http://localhost:${port}`;
  server = spawn('npx', ['vite', '--port', String(port), '--strictPort'], { stdio: 'pipe', detached: true });
  let up = false;
  for (let k = 0; k < 60 && !up; k++) { await new Promise(r => setTimeout(r, 500)); up = await fetch(base).then(r => r.ok, () => false); }
  if (!up) { server.kill(); console.error('vite did not start'); process.exit(1); }
}
function save(quadrants) {
  const seats = [{ name: 'P1', kind: 'human' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }, { name: 'P4', kind: 'bot' }];
  for (let seed = 1; seed < 80; seed++) {
    let s = createGame({ seats, seed, quadrants });
    s.build = buildStamp();
    const rand = seededRandom(seed);
    const ready = x => x.round === round && x.pending && x.pending.player === 0 && x.pending.kind === 'place';
    for (let n = 0; n < 3000 && !ready(s) && !(s.round > round) && !s.over; n++) s = applyMove(s, chooseBotMove(s, rand));
    if (!ready(s)) continue;
    for (const r of s.resources) s.players[0].res[r] = 5;
    return { config: { seats: seats.map(x => ({ kind: x.kind, name: x.name })), speed: 'normal' }, state: s, undo: null, savedAt: Date.now() };
  }
  throw new Error(`no position for ${quadrants.join('/')}`);
}
const TABLES = [['gold', 'red', 'purple', 'silver'], ['yellow', 'market', 'thieves', 'trading'], ['echo', 'red', 'trading', 'purple']];
const browser = await chromium.launch({ executablePath: browserPath });
const rows = [], done = new Set();
try {
  for (const quads of TABLES) {
    const sv = save(quads);
    const page = await browser.newPage({ viewport: { width: 1270, height: 700 } });
    await seedSave(page, sv);
    await page.goto(`${base}/?botDelay=40`);
    await page.click('[data-home="resume"]');
    await page.waitForTimeout(400);
    { const skip = await page.$('[data-intro-skip]'); if (skip) await skip.click(); }
    await page.waitForSelector('.lt[data-yours="1"][data-phase="place"] .lt-wheel .slot[data-option]', { timeout: 15000 });
    await page.waitForTimeout(500);
    const keys = await page.$$eval('.lt-wheel .slot[data-slot]', els => els.map(e => e.dataset.slot));
    for (const key of keys) {
      const [q, i] = key.split('-').map(Number), qid = sv.state.quadrants[q], a = quadrant(qid).actions[i];
      if (done.has(`${qid}.${a.key}`)) continue;
      done.add(`${qid}.${a.key}`);
      await page.mouse.move(5, 5); await page.waitForTimeout(150);
      await page.hover(`.lt-wheel .slot[data-slot="${key}"]`, { force: true });
      const card = await page.waitForSelector(`[data-space-card="${key}"]`, { timeout: 4000 }).catch(() => null);
      if (!card) { rows.push(`### ${a.name} (${qid})\n(no hover)\n`); continue; }
      await page.waitForTimeout(700);
      const text = (await card.innerText()).replace(/\n+/g, ' ⏎ ');
      rows.push(`### ${a.name} (${qid}, ring ${a.ring})\n- rule: ${a.text}\n- hover: ${text}\n`);
      if (shots) await card.screenshot({ path: `${shots}/${qid}-${a.key}.png` }).catch(() => {});
    }
    await page.close();
  }
} finally { await browser.close(); if (server) try { process.kill(-server.pid); } catch { server.kill(); } }
const text = `# Hover cards, round ${round}\n\n${rows.join('\n')}`;
if (out) { writeFileSync(out, text); console.log(`wrote ${out} (${rows.length} spaces)`); } else process.stdout.write(text);
process.exit(0);
