import { launchBrowser, browserPath, cdpOk } from '../e2e/v4/lib/browser.mjs';
// The round-end contests' lag (Cory, Nov 6: "the end of round contests are a bit laggy, in terms of the count up and
// the followers flowing to the players"). From a save at P1's last placement of a round, P1 places and passes; while
// the scoring card plays, the probe records every long task (50 ms+) and every frame gap over 50 ms, each tagged with
// the rim and beat it fell in, at a CPU slowdown (4x by default, Chrome only).
//   node scripts/v4-reckon-lag.mjs <base url> [--cpu=4] [--seed=5] [--round=1] [--speed=steady]
// Exits 1 when the worst long task passes --bar (default 100 ms).
import { createGame, applyMove, chooseBotMove } from '../src/engine/v4/index.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { buildStamp } from '../e2e/v4/lib/stamp.mjs';

const args = process.argv.slice(2);
const opt = (k, d) => { const a = args.find(x => x.startsWith(`--${k}=`)); return a ? a.slice(k.length + 3) : d; };
const base = args.find(a => !a.startsWith('--'));
const CPU = Number(opt('cpu', 4)), SEED = Number(opt('seed', 5)), ROUND = Number(opt('round', 1)), speed = opt('speed', 'steady'), BAR = Number(opt('bar', 100));
const SEATS = [{ name: 'P1', kind: 'human' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }, { name: 'P4', kind: 'bot' }];
let s = createGame({ seats: SEATS, seed: SEED });
const rand = seededRandom(SEED);
const there = () => s.round === ROUND && s.pending && s.pending.player === 0 && s.pending.kind === 'place' && s.players[0].left === 1;
for (let n = 0; n < 4000 && !there() && !s.over; n++) s = applyMove(s, chooseBotMove(s, rand));
s.build = buildStamp();
const save = { config: { seats: SEATS.map(x => ({ kind: x.kind, name: x.name })), speed: 'normal' }, state: s, undo: null, savedAt: Date.now() };

const b = await launchBrowser({ executablePath: browserPath });
const ctx = await b.newContext({ viewport: { width: 1270, height: 700 } });
await ctx.addInitScript(() => {
  const R = window.__lag = { tasks: [], gaps: [], on: false, tag: '', tags: [] };
  const tagNow = () => {
    const rk = document.querySelector('.lt-reckon:not(.waiting)');
    if (!rk) return '';
    const v = document.querySelector('.reckon-verdict.on');
    return `${rk.dataset.reckon || rk.dataset.bonusMember || '?'}${v ? ' verdict' : ' count'}`;
  };
  try {
    new PerformanceObserver(l => { for (const e of l.getEntries()) if (R.on) R.tasks.push([Math.round(e.startTime), Math.round(e.duration), R.tag]); }).observe({ type: 'longtask', buffered: false });
  } catch { /* firefox: no longtask; frame gaps only */ }
  let last = 0;
  const tick = t => {
    const tag = tagNow();
    if (tag) { R.on = true; if (tag !== R.tag) R.tags.push([Math.round(t), tag]); R.tag = tag; } else if (R.on && document.querySelector('[data-next-round]')) R.on = false;
    if (R.on && last && t - last > 50) R.gaps.push([Math.round(last), Math.round(t - last), R.tag]);
    last = t;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
});
const p = await ctx.newPage();
await p.goto(`${base}/?intro=0&sound=off&speed=${speed}`);
await p.evaluate(v => localStorage.setItem('patrons.v4.local', JSON.stringify(v)), save);
await p.reload();
await (await p.waitForSelector('[data-home="resume"]', { timeout: 20000 })).click();
await p.waitForSelector('.lt[data-phase="place"][data-yours="1"] .slot.can .base', { timeout: 20000 });
await p.waitForTimeout(800);
const PROFILE = args.includes('--profile') && cdpOk, TRACE = args.includes('--trace') && cdpOk;
let cdp = null;
if (cdpOk) cdp = await ctx.newCDPSession(p);
if (CPU > 1 && cdp) await cdp.send('Emulation.setCPUThrottlingRate', { rate: CPU });
await (await p.$('.slot.can .base')).click();
for (let k = 0; k < 60 && !(await p.$('.lt[data-phase="buy"][data-yours="1"]')); k++) {
  const o = await p.$('.lt[data-phase="choose"] .prompt.choice button[data-option]:not([disabled]):not([data-option="pass"]):not(.undo)');
  if (o) await o.click().catch(() => {});
  await p.waitForTimeout(200);
}
const pass = await p.waitForSelector('.lt[data-phase="buy"][data-yours="1"] [data-option="pass"]', { timeout: 20000 }).catch(() => null);
if (pass) await pass.click();
if (PROFILE) {
  await p.waitForSelector('.lt-reckon:not(.waiting)', { timeout: 120000 });
  if (TRACE) {
    globalThis.__ev = [];
    cdp.on('Tracing.dataCollected', d => globalThis.__ev.push(...d.value));
    await cdp.send('Tracing.start', { traceConfig: { includedCategories: ['devtools.timeline', 'disabled-by-default-devtools.timeline', 'blink', 'v8.execute', 'disabled-by-default-devtools.timeline.invalidationTracking'] }, transferMode: 'ReportEvents' });
  } else {
  await cdp.send('Profiler.enable'); await cdp.send('Profiler.setSamplingInterval', { interval: 200 }); await cdp.send('Profiler.start');
  }
}
const next = await p.waitForSelector('[data-next-round]', { timeout: 240000 }).catch(() => null);
let prof = null;
if (PROFILE && !TRACE) prof = (await cdp.send('Profiler.stop')).profile;
if (PROFILE && TRACE) {
  const done = new Promise(r => cdp.once('Tracing.tracingComplete', r));
  await cdp.send('Tracing.end'); await done;
  const ev = globalThis.__ev.filter(e => e.ph === 'X' && e.dur);
  const main = ev.find(e => e.name === 'RunTask') ? ev.filter(e => e.name === 'RunTask').reduce((m, e) => (m[e.tid] = (m[e.tid] || 0) + e.dur, m), {}) : {};
  const tid = Number(Object.entries(main).sort((a, b) => b[1] - a[1])[0]?.[0]);
  const by = new Map();
  for (const e of ev) if (e.tid === tid) by.set(e.name, (by.get(e.name) || [0, 0, 0]).map((v, i) => i === 0 ? v + e.dur / 1000 : i === 1 ? v + 1 : Math.max(v, e.dur / 1000)));
  console.log('\ntrace, main thread, by event (total ms, count, worst ms):');
  for (const [k, v] of [...by].sort((a, b) => b[1][0] - a[1][0]).slice(0, 30)) console.log(`${v[0].toFixed(0).padStart(7)} ${String(v[1]).padStart(5)} ${v[2].toFixed(0).padStart(5)}  ${k}`);
  // what asked for style and layout work
  const inv = new Map();
  for (const e of globalThis.__ev) if (/InvalidationTracking/.test(e.name)) {
    const d = e.args && e.args.data || {};
    const k = `${e.name.replace('InvalidationTracking', '')} ${d.reason || ''} ${d.nodeName || ''} ${d.extraData || ''}`.slice(0, 140);
    inv.set(k, (inv.get(k) || 0) + 1);
  }
  console.log('\ninvalidations (count):');
  for (const [k, v] of [...inv].sort((a, b) => b[1] - a[1]).slice(0, 40)) console.log(`${String(v).padStart(6)}  ${k}`);
  // the long tasks, with what filled each
  const tasks = ev.filter(e => e.tid === tid && e.name === 'RunTask' && e.dur > 50000);
  for (const t of tasks) {
    const inside = new Map();
    for (const e of ev) if (e.tid === tid && e !== t && e.ts >= t.ts && e.ts + e.dur <= t.ts + t.dur && ['Layout', 'UpdateLayoutTree', 'Paint', 'PrePaint', 'Layerize', 'FunctionCall', 'TimerFire', 'FireAnimationFrame', 'EventDispatch', 'Commit', 'ParseHTML', 'RunMicrotasks', 'HitTest', 'UpdateLayer', 'CompositeLayers', 'Decode Image', 'PaintImage'].includes(e.name)) inside.set(e.name, (inside.get(e.name) || 0) + e.dur / 1000);
    console.log(`task ${(t.dur / 1000).toFixed(0)}ms: ${[...inside].sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v.toFixed(0)}`).join(', ')}`);
  }
}
const R = await p.evaluate(() => window.__lag);
await ctx.close(); await b.close();
const fmt = a => a.map(([t, d, tag]) => { const at = R.tags.filter(x => x[0] <= t + 20).pop(); return `${String(d).padStart(4)}ms  ${tag} +${at ? t - at[0] : '?'}ms`; }).join('\n');
const worst = Math.max(0, ...R.tasks.map(x => x[1]), ...(R.tasks.length ? [] : R.gaps.map(x => x[1])));
console.log(`cpu ${CPU}x, seed ${SEED}, round ${ROUND}, ${speed}${next ? '' : ' (no summary reached!)'}`);
console.log(`long tasks during the contests: ${R.tasks.length}, total ${R.tasks.reduce((n, x) => n + x[1], 0)} ms, worst ${Math.max(0, ...R.tasks.map(x => x[1]))} ms`);
console.log(fmt(R.tasks));
console.log(`beats: ${R.tags.map(x => x[1]).join(' > ')}`);
console.log(`frame gaps over 50 ms: ${R.gaps.length}, worst ${Math.max(0, ...R.gaps.map(x => x[1]))} ms`);
console.log(fmt(R.gaps));
if (prof) {
  // self time by function, and inclusive time for the top frames under each task
  const byId = new Map(prof.nodes.map(n => [n.id, n]));
  const parent = new Map(); for (const n of prof.nodes) for (const c of n.children || []) parent.set(c, n.id);
  const self = new Map(), incl = new Map();
  const dt = prof.timeDeltas; let total = 0;
  prof.samples.forEach((id, k) => {
    const d = (dt[k + 1] ?? 0) / 1000; total += d;
    const n = byId.get(id); const key = f => `${f.callFrame.functionName || '(anon)'} ${f.callFrame.url.split('/').pop()}:${f.callFrame.lineNumber}`;
    self.set(key(n), (self.get(key(n)) || 0) + d);
    const seen = new Set();
    for (let x = id; x != null; x = parent.get(x)) { const k2 = key(byId.get(x)); if (!seen.has(k2)) { seen.add(k2); incl.set(k2, (incl.get(k2) || 0) + d); } }
  });
  const top = (m, n) => [...m].sort((a, b) => b[1] - a[1]).slice(0, n).map(([k, v]) => `${v.toFixed(0).padStart(6)}ms  ${k}`).join('\n');
  console.log(`\nprofile ${total.toFixed(0)} ms\nself:\n${top(self, 30)}\ninclusive:\n${top(incl, 400)}`);
}
process.exit(next && worst <= BAR ? 0 : 1);
