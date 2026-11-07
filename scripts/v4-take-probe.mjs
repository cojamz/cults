// How long your own Take on a pick-your-colors card plays (Harvest's +3/+4/+5, Polish's 4), from the click to a
// settled table, at each speed. Cory, Nov 7: "harvest animation is so slow" / "it was mine that felt slow".
// Usage: node scripts/v4-take-probe.mjs [harvest|polish] [--speeds=relaxed,steady] [--url=http://localhost:5173]
// Without --url it starts its own `npx vite`. Prints one line per speed: ms to the last coin landed and to the table's
// next question, plus how many steps the table showed.
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { createServer } from 'node:net';
import { browserPath, launchBrowser } from '../e2e/v4/lib/browser.mjs';
import { colorSave } from '../e2e/v4/lib/dialog-save.mjs';
import { seedSave } from '../e2e/v4/lib/seed.mjs';

const args = process.argv.slice(2);
const space = args.find(a => !a.startsWith('--')) || 'harvest';
const opt = k => (args.find(a => a.startsWith(`--${k}=`)) || '').split('=')[1];
const speeds = (opt('speeds') || 'relaxed,steady').split(',');
let base = opt('url'), server = null;
if (!base) {
  const free = port => new Promise(res => { const srv = createServer().once('error', () => res(false)).once('listening', () => srv.close(() => res(true))).listen(port, 'localhost'); });
  let port = 5460;
  while (!(await free(port))) port++;
  base = `http://localhost:${port}`;
  server = spawn('npx', ['vite', '--port', String(port), '--strictPort'], { stdio: 'pipe' });
  let up = false;
  for (let k = 0; k < 120 && !up; k++) { await new Promise(r => setTimeout(r, 500)); up = await fetch(base).then(r => r.ok, () => false); }
  if (!up) { server.kill(); console.error('vite did not start'); process.exit(1); }
}
const browser = await launchBrowser({ executablePath: browserPath });
// --place: start one step earlier, place on the space, and click Take the moment it can be clicked (as a quick player
// does, while the placement still plays)
const placeFirst = args.includes('--place');
const pre = placeFirst ? colorSave(space, undefined, true) : null;
const save = pre ? pre.save : colorSave(space);
const n = save.state.round + 2;
for (const speed of speeds) {
  const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 } });
  const page = await ctx.newPage();
  await seedSave(page, save);
  await page.goto(`${base}/?intro=0&speed=${speed}`, { timeout: 90000 });
  await page.click('[data-home="resume"]', { timeout: 60000 });
  if (pre) {
    const key = pre.slot.slice(5);
    const el = await page.waitForSelector(`.lt-wheel [data-slot="${key}"]`, { timeout: 60000 });
    await page.waitForTimeout(1500);
    const r = await el.boundingBox();
    await page.mouse.click(r.x + r.width / 2, r.y + r.height / 2);
  }
  await page.waitForSelector('.lt-wheel .gift-card[data-gift="split"] [data-split-take]:not([disabled])', { timeout: 60000 });
  if (!pre) { await page.mouse.move(640, 695); await page.waitForTimeout(800); }
  // watch: each time the shown move count changes, and when the chain flag clears
  await page.evaluate(() => {
    const app = document.querySelector('.app.game');
    window.__tp = { t0: 0, shown: [], chainOff: null, card: null };
    new MutationObserver(() => {
      const w = window.__tp; if (!w.t0) return;
      const t = performance.now() - w.t0;
      const m = app.dataset.moves;
      if (!w.shown.length || w.shown[w.shown.length - 1].m !== m) w.shown.push({ m, t: Math.round(t) });
      if (app.dataset.chain !== '1' && w.shown.length) w.chainOff = Math.round(t);
      if (!document.querySelector('.gift-card[data-gift="split"]') && w.card == null) w.card = Math.round(t);
    }).observe(document.body, { attributes: true, subtree: true, childList: true });
  });
  const b = await (await page.$('.gift-card [data-split-take]')).boundingBox();
  await page.evaluate(() => { window.__tp.t0 = performance.now(); });
  await page.mouse.click(b.x + b.width / 2, b.y + b.height / 2);
  // --frames=<dir>: a screenshot about every 120 ms for 3 s after the click
  if (opt('frames')) { mkdirSync(opt('frames'), { recursive: true }); for (let k = 0; k < 25; k++) { await page.screenshot({ path: `${opt('frames')}/${speed}-${String(k).padStart(2, '0')}.png` }); } }
  await page.waitForFunction(() => window.__tp.shown.length && !document.querySelector('.app.game[data-chain="1"]') && performance.now() - window.__tp.t0 > 300, null, { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(1500);
  const w = await page.evaluate(() => window.__tp);
  console.log(`${space} +${n} ${speed}: card gone ${w.card}ms, last chain off ${w.chainOff}ms, steps shown ${w.shown.map(s => `${s.m}@${s.t}`).join(' ')}`);
  await ctx.close();
}
await browser.close();
if (server) server.kill();
