// Which step of a turn a slow frame falls in (wheel pass, Nov 8): runs the board round and round on your first placing
// turn with ?wheelmarks=1 (Wheel.jsx marks press, pressed, land, apply, render, commit) and prints one timeline: every
// frame gap over 34 ms beside the marks that fell in it. Firefox by default (Cory's browser), at a MacBook's window.
//   node scripts/v4-spin-marks.mjs <url> [--chrome] [--cpu=4] [--size=1512x945] [--dpr=2] [--spins=10] [--every=280] [--drag]
import { browserPath, launchBrowser, cdpOk, DESK } from '../e2e/v4/lib/browser.mjs';
import { firefox } from 'playwright';

const argv = process.argv.slice(2);
const flag = (n, d) => { const a = argv.find(x => x === `--${n}` || x.startsWith(`--${n}=`)); if (!a) return d; return a.includes('=') ? a.slice(a.indexOf('=') + 1) : true; };
const url = argv.find(a => !a.startsWith('--'));
if (!url) { console.error('usage: node scripts/v4-spin-marks.mjs <url> [--chrome] [--cpu=4] [--spins=10] [--every=280] [--drag]'); process.exit(2); }
const FF = !flag('chrome', false) || !cdpOk;
const CPU = Number(flag('cpu', 4)), SPINS = Number(flag('spins', 10)), EVERY = Number(flag('every', 280));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const browser = FF ? await firefox.launch({ firefoxUserPrefs: DESK }) : await launchBrowser({ executablePath: browserPath, args: ['--disable-gpu', '--disable-gpu-compositing'] });
const [VW, VH] = String(flag('size', FF ? '1512x945' : '1270x700')).split('x').map(Number);
const ctx = await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: Number(flag('dpr', FF ? 2 : 1)) });
await ctx.addInitScript(() => {
  const F = (window.__sp = {});
  F.watch = () => new Promise(done => { const fr = []; let last = performance.now(); F.stopAt = Infinity; const tick = t => { fr.push([t, t - last]); last = t; if (t < F.stopAt) requestAnimationFrame(tick); else done(fr); }; requestAnimationFrame(tick); });
  F.stop = () => { F.stopAt = 0; };
});
await ctx.addInitScript(() => { let a = 20261028; Math.random = () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; });
const page = await ctx.newPage();
const cdp = FF ? null : await ctx.newCDPSession(page);
await page.goto(`${url.replace(/\/$/, '')}/?intro=0&sound=off&wheelmarks=1${flag('q', '')}`);
await page.click('[data-home="local"]');
await page.waitForSelector('[data-start]');
await page.click('[data-start]');
await page.waitForSelector('.app.game');
for (let i = 0; i < 400; i++) {
  const g = await page.evaluate(() => { const e = document.querySelector('.app.game'); return e && e.dataset.yours === '1' && e.dataset.phase === 'place' && e.dataset.animating !== 'true' && document.querySelectorAll('.lt-wheel [data-slot][data-option]').length; });
  if (g) break;
  const opt = await page.$('[data-option^="color:"]'); if (opt) { await opt.click().catch(() => {}); }
  await sleep(250);
}
await sleep(1500);
await page.mouse.move(5, 5);
if (cdp) await cdp.send('Emulation.setCPUThrottlingRate', { rate: CPU });
await page.evaluate(() => performance.clearMarks());
const w = page.evaluate(() => window.__sp.watch());
await sleep(30);
if (flag('drag', false)) {
  const b = await page.$eval('.lt-wheel .stage', el => { const r = el.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
  const cx = b.x + b.w / 2, cy = b.y + b.h / 2, r = b.w * 0.42;
  const at = a => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)];
  for (let k = 0; k < Math.max(1, Math.floor(SPINS / 2)); k++) {
    const a0 = 200, sweep = k % 2 ? -100 : 100;
    let [x, y] = at(a0); await page.mouse.move(x, y); await page.mouse.down();
    for (let i = 1; i <= 14; i++) { [x, y] = at(a0 + (sweep * i) / 14); await page.mouse.move(x, y); await sleep(30); }
    await page.mouse.up(); await sleep(600);
  }
} else {
  for (let k = 0; k < SPINS; k++) { await page.keyboard.press(k % 4 < 2 ? 'ArrowRight' : 'ArrowLeft'); await sleep(EVERY); }
}
await sleep(1200);
await page.evaluate(() => window.__sp.stop());
const fr = await w;
const marks = await page.evaluate(() => performance.getEntriesByType('mark').map(m => [m.name.replace('wheel:', ''), m.startTime]));
const lab = await page.evaluate(() => (window.__spinLab ? { records: window.__spinLab.records.length, cur: !!window.__spinLab.cur, last: window.__spinLab.records.at(-1) } : null));
await browser.close();
const t0 = fr[0][0];
const f = t => `${Math.round(t - t0)}`;
console.log(`${url} ${FF ? 'firefox' : `chrome ${CPU}x`} ${VW}x${VH}@${flag('dpr', FF ? 2 : 1)}: ${fr.length} frames in ${Math.round(fr.at(-1)[0] - t0)} ms, worst gap ${Math.round(Math.max(...fr.map(x => x[1])))} ms, gaps over 50 ms ${fr.filter(x => x[1] > 50).length}, over 100 ms ${fr.filter(x => x[1] > 100).length}`);
console.log('slow frames (gap ended at ms · gap · marks inside, with their ms):');
for (const [t, gap] of fr) {
  if (gap <= 34) continue;
  const inside = marks.filter(([, mt]) => mt > t - gap - 1 && mt <= t + 1).map(([n, mt]) => `${n}@${f(mt)}`);
  console.log(`  ${f(t)} · ${Math.round(gap)} · ${inside.join(' ') || '(no wheel step: something else)'}`);
}
const steps = {};
for (const [n] of marks) steps[n] = (steps[n] || 0) + 1;
console.log(`marks: ${Object.entries(steps).map(([k, v]) => `${k} ${v}`).join(', ')}`);
if (lab) console.log(`spin recorder: ${lab.records} records${lab.cur ? ', one still timing' : ''}${lab.last ? `; last: ${lab.last.how} worst ${lab.last.worst} gaps ${lab.last.gaps.join(' ')}` : ''}`);
