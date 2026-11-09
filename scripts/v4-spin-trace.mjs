// What a spin's slow frames are made of, by Chrome's own timeline (wheel pass, Nov 8): reaches your first placing turn,
// turns the board round and round (a press every --every ms, --spins presses) under --cpu throttle, records a
// devtools trace, and prints the longest tasks with their style, layout, paint and script parts, plus the top scripts.
//   node scripts/v4-spin-trace.mjs <url> [--cpu=4] [--spins=8] [--every=280] [--drag] [--label=x]
// Writes design/eval/perf/spin-trace-<label>.json (the raw trace: open in chrome://tracing or DevTools Performance).
import { writeFileSync, mkdirSync } from 'node:fs';
import { browserPath, launchBrowser, cdpOk } from '../e2e/v4/lib/browser.mjs';

const argv = process.argv.slice(2);
const flag = (n, d) => { const a = argv.find(x => x === `--${n}` || x.startsWith(`--${n}=`)); if (!a) return d; return a.includes('=') ? a.slice(a.indexOf('=') + 1) : true; };
const url = argv.find(a => !a.startsWith('--'));
if (!url || !cdpOk) { console.error('usage: node scripts/v4-spin-trace.mjs <url> (Chrome only)'); process.exit(2); }
const CPU = Number(flag('cpu', 4)), SPINS = Number(flag('spins', 8)), EVERY = Number(flag('every', 280)), LABEL = String(flag('label', 'trace'));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const browser = await launchBrowser({ executablePath: browserPath, args: ['--disable-gpu', '--disable-gpu-compositing'] });
const [VW, VH] = String(flag('size', '1270x700')).split('x').map(Number);
const ctx = await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: Number(flag('dpr', 1)) });
await ctx.addInitScript(() => { let a = 20261028; Math.random = () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; });
const page = await ctx.newPage();
const cdp = await ctx.newCDPSession(page);
await page.goto(`${url.replace(/\/$/, '')}/?intro=0&sound=off${flag('q', '')}`);
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
const nodes = await page.evaluate(() => ({ stage: document.querySelector('.lt-wheel .stage')?.querySelectorAll('*').length, page: document.querySelectorAll('*').length, slots: document.querySelectorAll('.lt-wheel .stage > [data-slot]').length }));
console.log(`DOM: ${nodes.page} elements on the page, ${nodes.stage} inside the board, ${nodes.slots} spaces`);
await cdp.send('Emulation.setCPUThrottlingRate', { rate: CPU });
const events = [];
cdp.on('Tracing.dataCollected', ({ value }) => events.push(...value));
const done = new Promise(r => cdp.on('Tracing.tracingComplete', r));
await cdp.send('Tracing.start', { traceConfig: { includedCategories: ['devtools.timeline', 'disabled-by-default-devtools.timeline', 'disabled-by-default-devtools.timeline.frame', 'blink.user_timing', 'v8.execute', 'disabled-by-default-v8.cpu_profiler'], recordMode: 'recordContinuously' }, transferMode: 'ReportEvents' });
await sleep(200);
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
await cdp.send('Tracing.end');
await done;
await browser.close();
mkdirSync('design/eval/perf', { recursive: true });
writeFileSync(`design/eval/perf/spin-trace-${LABEL}.json`, JSON.stringify({ traceEvents: events }));

// ---- summary: the longest tasks and what filled them ----
const main = events.filter(e => e.ph === 'X' && e.dur != null);
const tasks = main.filter(e => e.name === 'RunTask' || e.name === 'ThreadControllerImpl::RunTask').sort((a, b) => b.dur - a.dur);
const t0 = Math.min(...main.map(e => e.ts));
const inside = (e, t) => e.ts >= t.ts && e.ts + e.dur <= t.ts + t.dur && e !== t;
const KINDS = { UpdateLayoutTree: 'style', Layout: 'layout', Paint: 'paint', PrePaint: 'prepaint', UpdateLayerTree: 'layers', FunctionCall: 'script', EventDispatch: 'event', 'v8.callFunction': 'script', 'V8.Execute': 'script', HitTest: 'hittest', Animation: 'anim' };
console.log(`\nlongest tasks (ms from the trace's start · total · parts):`);
for (const t of tasks.slice(0, 12)) {
  const parts = {};
  const kids = main.filter(e => inside(e, t) && KINDS[e.name]);
  // top-level kids only (no double counting): a child whose parent of the same kind is also inside
  for (const k of kids) { if (kids.some(p => p !== k && inside(k, p) && KINDS[p.name] === KINDS[k.name])) continue; parts[KINDS[k.name]] = (parts[KINDS[k.name]] || 0) + k.dur / 1000; }
  const ev = main.filter(e => inside(e, t) && e.name === 'EventDispatch').map(e => e.args?.data?.type).filter(Boolean);
  const fns = main.filter(e => inside(e, t) && e.name === 'FunctionCall').map(e => `${e.args?.data?.functionName || '?'}@${(e.args?.data?.url || '').split('/').pop()}:${e.args?.data?.lineNumber}`).slice(0, 3);
  console.log(`  ${Math.round((t.ts - t0) / 1000)} · ${Math.round(t.dur / 1000)} ms · ${Object.entries(parts).map(([k, v]) => `${k} ${Math.round(v)}`).join(', ')}${ev.length ? ` · events ${[...new Set(ev)].join(',')}` : ''}${fns.length ? ` · ${fns.join(' ')}` : ''}`);
}
// style recalcs: how many elements each touched
const styles = main.filter(e => e.name === 'UpdateLayoutTree').sort((a, b) => b.dur - a.dur).slice(0, 6);
console.log(`\nbiggest style recalcs: ${styles.map(e => `${Math.round(e.dur / 1000)} ms (${e.args?.endData?.elementCount ?? e.args?.data?.elementCount ?? '?'} elements)`).join(', ')}`);
const layouts = main.filter(e => e.name === 'Layout').sort((a, b) => b.dur - a.dur).slice(0, 6);
console.log(`biggest layouts: ${layouts.map(e => `${Math.round(e.dur / 1000)} ms (${e.args?.beginData?.dirtyObjects ?? '?'} dirty of ${e.args?.beginData?.totalObjects ?? '?'})`).join(', ')}`);
const paints = main.filter(e => e.name === 'Paint').sort((a, b) => b.dur - a.dur).slice(0, 6);
console.log(`biggest paints: ${paints.map(e => `${Math.round(e.dur / 1000)} ms`).join(', ')}`);
// the CPU profile's heaviest self-time functions, from ProfileChunk samples
const chunks = events.filter(e => e.name === 'ProfileChunk');
const nodesById = new Map(); const self = new Map(); let total = 0;
for (const c of chunks) { for (const n of c.args?.data?.cpuProfile?.nodes || []) nodesById.set(n.id, n); }
for (const c of chunks) { const d = c.args?.data; if (!d?.cpuProfile?.samples) continue; const td = d.timeDeltas || []; d.cpuProfile.samples.forEach((id, i) => { const n = nodesById.get(id); const dt = (td[i] || 0) / 1000; total += dt; if (!n) return; const f = n.callFrame; const k = `${f.functionName || '(anon)'} ${(f.url || '').split('/').pop()}:${f.lineNumber}`; self.set(k, (self.get(k) || 0) + dt); }); }
console.log(`\nheaviest script self time (ms of ${Math.round(total)}): ${[...self.entries()].sort((a, b) => b[1] - a[1]).slice(0, 14).map(([k, v]) => `${k} ${Math.round(v)}`).join(' · ')}`);
