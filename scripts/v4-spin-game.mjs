// The wheel spin through a whole game, as a person feels it (wheel pass, Nov 8): plays a hot-seat game against three
// bots and, on each round's first placing turn of yours, spins the board the three ways a person does (arrow keys round
// and round, a mouse drag, a flick), counting the frames that actually paint and how long each press waits.
//   node scripts/v4-spin-game.mjs <url> [--firefox] [--size=1512x945] [--dpr=2] [--cpu=4] [--rounds=3] [--label=x] [--profile]
// Reports per round: frames painted while turning, the worst gap, gaps over 50 and 100 ms, and the stall (ms spent in
// gaps over 34 ms), plus the keydown and pointer waits (Event Timing). --profile (Chrome) writes a CPU profile of each
// round's spin bursts to design/eval/perf/spin-<label>-r<n>.cpuprofile. --firefox: Playwright's Firefox (Cory's
// browser), at a 14-inch MacBook's window and pixel density by default, no throttle (the box's own speed).
import { writeFileSync, mkdirSync } from 'node:fs';
import { browserPath, launchBrowser, cdpOk, DESK } from '../e2e/v4/lib/browser.mjs';
import { answerChoice } from '../e2e/v4/lib/answer.mjs';
import { firefox } from 'playwright';

const argv = process.argv.slice(2);
const flag = (n, d) => { const a = argv.find(x => x === `--${n}` || x.startsWith(`--${n}=`)); if (!a) return d; return a.includes('=') ? a.slice(a.indexOf('=') + 1) : true; };
const url = argv.find(a => !a.startsWith('--'));
if (!url) { console.error('usage: node scripts/v4-spin-game.mjs <url> [--firefox] [--size=WxH] [--dpr=n] [--cpu=n] [--rounds=n] [--label=x] [--profile]'); process.exit(2); }
const CPU = Number(flag('cpu', 4)), ROUNDS = Number(flag('rounds', 3)), LABEL = String(flag('label', 'spin'));
const EVERY = Number(flag('every', 280));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const FF = !!flag('firefox', false) || !cdpOk;
const browser = FF ? await firefox.launch({ firefoxUserPrefs: DESK }) : await launchBrowser({ executablePath: browserPath, args: flag('gpu', false) ? [] : ['--disable-gpu', '--disable-gpu-compositing'] });
const [VW, VH] = String(flag('size', FF ? '1512x945' : '1270x700')).split('x').map(Number);
const DPR = Number(flag('dpr', FF ? 2 : 1));
const ctx = await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: DPR });
await ctx.addInitScript(() => {
  const F = (window.__sp = { ev: [] });
  try { new PerformanceObserver(l => { for (const e of l.getEntries()) if (F.on) F.ev.push([e.name, Math.round(e.duration)]); }).observe({ type: 'event', durationThreshold: 16, buffered: false }); } catch { /* no Event Timing */ }
  F.watch = () => new Promise(done => { const fr = []; const t0 = performance.now(); let last = t0; F.stopAt = Infinity; const tick = t => { fr.push(t - last); last = t; if (t < F.stopAt) requestAnimationFrame(tick); else done(fr); }; requestAnimationFrame(tick); });
  F.stop = () => { F.stopAt = 0; };
});
await ctx.addInitScript(() => { let a = 20261108; Math.random = () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; });
const page = await ctx.newPage();
const cdp = FF ? null : await ctx.newCDPSession(page);
const errors = [];
page.on('pageerror', e => errors.push(e.message));
await page.goto(`${url.replace(/\/$/, '')}/?intro=0&sound=off${flag('q', '')}`);
await page.click('[data-home="local"]');
await page.waitForSelector('[data-start]');
await page.click('[data-start]');
await page.waitForSelector('.app.game');
if (cdp) { await cdp.send('Emulation.setCPUThrottlingRate', { rate: CPU }); if (flag('profile', false)) { await cdp.send('Profiler.enable'); await cdp.send('Profiler.setSamplingInterval', { interval: 500 }); } }

const per = {}; // round -> [burst stats]
const stat = fr => ({ frames: fr.length, ms: Math.round(fr.reduce((a, b) => a + b, 0)), worst: Math.round(Math.max(...fr)), over50: fr.filter(x => x > 50).length, over100: fr.filter(x => x > 100).length, stall: Math.round(fr.filter(x => x > 34).reduce((a, b) => a + b - 17, 0)) });
const wheelBox = async () => page.$eval('.lt-wheel .stage', el => { const r = el.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
// a mouse drag around the ring: from `a0` degrees, `sweep` degrees in `steps` moves over about `ms`
const drag = async (a0, sweep, steps, ms) => {
  const b = await wheelBox();
  const cx = b.x + b.w / 2, cy = b.y + b.h / 2, r = b.w * 0.42;
  const at = a => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)];
  let [x, y] = at(a0);
  await page.mouse.move(x, y); await page.mouse.down();
  for (let i = 1; i <= steps; i++) { [x, y] = at(a0 + (sweep * i) / steps); await page.mouse.move(x, y); await sleep(ms / steps); }
  await page.mouse.up();
};
const burst = async (round, kind) => {
  await page.evaluate(() => { window.__sp.ev = []; window.__sp.on = true; });
  const w = page.evaluate(() => window.__sp.watch());
  await sleep(30);
  const t0 = Date.now();
  if (kind === 'keys') { for (let k = 0; k < 6; k++) { await page.keyboard.press(k < 4 ? 'ArrowRight' : 'ArrowLeft'); await sleep(EVERY); } }
  else if (kind === 'drag') { await drag(200, 100, 14, 420); await sleep(500); await drag(300, -100, 14, 420); }
  else if (kind === 'flick') { await drag(200, 40, 4, 60); await sleep(500); await drag(240, -40, 4, 60); }
  await sleep(900); // the landing and its commit (350 ms still, then the re-lay)
  await page.evaluate(() => window.__sp.stop());
  const fr = await w;
  const ev = await page.evaluate(() => { window.__sp.on = false; return window.__sp.ev; });
  const s = stat(fr);
  s.kind = kind; s.wall = Date.now() - t0;
  s.events = ev.length ? ev.map(([n, d]) => `${n.replace('pointer', 'p')} ${d}`).join(' ') : '';
  (per[round] ||= []).push(s);
  console.log(`round ${round} ${kind}: ${s.frames} frames in ${s.ms} ms, worst gap ${s.worst} ms, over 50: ${s.over50}, over 100: ${s.over100}, stall ${s.stall} ms${ev.length ? ` · slow events: ${s.events}` : ''}`);
  if (flag('frames', false)) console.log('  gaps over 34 ms: ' + fr.map(Math.round).filter(x => x > 34).join(' '));
};

let placeAt = -1, lastRound = 0, dead = 0, profiling = false;
const t00 = Date.now();
for (let i = 0; i < 3000 && Date.now() - t00 < 480000; i++) {
  const next = await page.$('[data-next-round]');
  if (next) { await next.click().catch(() => {}); await sleep(300); continue; }
  const hand = await page.$('[data-handoff]');
  if (hand) { await hand.click().catch(() => {}); await sleep(200); continue; }
  const g = await page.evaluate(() => {
    const e = document.querySelector('.app.game');
    if (!e) return null;
    const hub = (document.querySelector('.hub-label b')?.textContent || '').trim();
    return { yours: e.dataset.yours === '1', phase: e.dataset.phase, anim: e.dataset.animating === 'true', moves: Number(e.dataset.moves), round: Number(e.dataset.round || 0) || (hub === 'III' ? 3 : hub === 'II' ? 2 : 1) };
  }).catch(() => null);
  if (!g) { await sleep(100); if (await page.$('.app.game') == null && i > 50) break; continue; }
  if (!g.yours || g.anim) { await sleep(60); continue; }
  const round = g.round;
  if (round > ROUNDS) break;
  if (g.phase === 'place') {
    if (g.moves !== placeAt) {
      placeAt = g.moves;
      if (round !== lastRound) {
        lastRound = round;
        await sleep(1200);
        await page.mouse.move(5, 5);
        if (cdp && flag('profile', false)) { await cdp.send('Profiler.start'); profiling = true; }
        for (const kind of ['keys', 'drag', 'flick']) await burst(round, kind);
        if (profiling) { const { profile } = await cdp.send('Profiler.stop'); profiling = false; mkdirSync('design/eval/perf', { recursive: true }); writeFileSync(`design/eval/perf/spin-${LABEL}-r${round}.cpuprofile`, JSON.stringify(profile)); }
        await sleep(300);
      }
    }
    const legal = await page.$$('.lt-wheel [data-slot][data-option]');
    if (legal.length) { const el = legal[(g.moves * 3) % legal.length]; await el.click({ timeout: 1500 }).catch(() => {}); dead = 0; } else dead++;
    const confirm = await page.waitForSelector('[data-place]', { timeout: 400 }).catch(() => null);
    if (confirm) await confirm.click().catch(() => {});
  } else if (g.phase === 'buy') {
    const card = await page.$('.lt-shop .card[data-option]');
    const rates = await page.$$('.lt-rates [data-rate][data-option]');
    const pick = card || rates[rates.length - 1] || await page.$('[data-option="pass"]');
    if (pick) await pick.click({ timeout: 1500 }).catch(() => {});
  } else {
    const a = await answerChoice(page, { last: ['pass'] }).catch(() => null);
    if (!a) { dead++; await sleep(200); } else dead = 0;
  }
  if (dead > 40) { console.log(`stuck in ${g.phase} at round ${round}`); break; }
  await sleep(80);
}
await browser.close();
const med = xs => [...xs].sort((a, b) => a - b)[Math.floor(xs.length / 2)];
const all = Object.values(per).flat();
if (all.length) console.log(`${url} ${FF ? `firefox ${VW}x${VH}@${DPR}` : `chrome cpu ${CPU}x`}: worst gap max ${Math.max(...all.map(s => s.worst))} ms, median ${med(all.map(s => s.worst))} ms; gaps over 100 ms ${all.reduce((a, s) => a + s.over100, 0)}; stall total ${all.reduce((a, s) => a + s.stall, 0)} ms over ${all.length} bursts`);
if (errors.length) console.log(`page errors: ${errors.slice(0, 3).join(' | ')}`);
mkdirSync('design/eval/perf', { recursive: true });
writeFileSync(`design/eval/perf/spin-${LABEL}.json`, JSON.stringify({ url, firefox: FF, size: [VW, VH], dpr: DPR, cpu: FF ? null : CPU, per, errors }, null, 1));
