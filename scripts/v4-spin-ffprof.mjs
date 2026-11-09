// A Gecko profile of the board turning in Firefox (wheel pass, Nov 8): the one way to see what Firefox itself does in a
// slow frame (Playwright's Firefox has no devtools timeline). Starts Firefox with its profiler on, reaches your first
// placing turn, turns the board round and round (or drags), and on close Firefox writes the profile; this prints, for the
// main thread of the game's process and for the compositor/renderer threads, the categories and the heaviest leaf
// functions during the spins (between the first and last wheel mark), and saves the raw profile for profiler.firefox.com.
//   node scripts/v4-spin-ffprof.mjs <url> [--size=1512x945] [--dpr=2] [--spins=10] [--every=280] [--drag] [--label=x]
import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { DESK } from '../e2e/v4/lib/browser.mjs';
import { firefox } from 'playwright';

const argv = process.argv.slice(2);
const flag = (n, d) => { const a = argv.find(x => x === `--${n}` || x.startsWith(`--${n}=`)); if (!a) return d; return a.includes('=') ? a.slice(a.indexOf('=') + 1) : true; };
const url = argv.find(a => !a.startsWith('--'));
if (!url) { console.error('usage: node scripts/v4-spin-ffprof.mjs <url> [--spins=10] [--every=280] [--drag] [--label=x]'); process.exit(2); }
const SPINS = Number(flag('spins', 10)), EVERY = Number(flag('every', 280)), LABEL = String(flag('label', 'ff'));
const sleep = ms => new Promise(r => setTimeout(r, ms));
mkdirSync('design/eval/perf', { recursive: true });
const OUT = `${process.cwd()}/design/eval/perf/spin-ffprof-${LABEL}.json`;
if (!flag('analyze', false) && existsSync(OUT)) unlinkSync(OUT);
// --analyze=<profile.json>: only read a profile written earlier
if (!flag('analyze', false)) {
// --gl: a headed Firefox on a virtual screen (run under `xvfb-run -a -s "-screen 0 3024x1890x24"`) with WebRender on
// software OpenGL (llvmpipe) instead of headless Firefox's software compositor: much closer to a Mac's picture-cached,
// GPU-composited frames (the headless compositor redraws the whole screen for any change, ~200 ms at a Retina size)
const GL = !!flag('gl', false);
const GL_PREFS = { 'gfx.webrender.software': false, 'gfx.webrender.all': true, 'layers.acceleration.force-enabled': true, 'gfx.webrender.enabled': true, 'layers.gpu-process.enabled': false };
const browser = await firefox.launch({
  headless: !GL,
  firefoxUserPrefs: GL ? { ...DESK, ...GL_PREFS } : DESK,
  env: { ...process.env, ...(GL ? { LIBGL_ALWAYS_SOFTWARE: '1', MOZ_WEBRENDER: '1', MOZ_X11_EGL: '1', MOZ_ACCELERATED: '1' } : {}), MOZ_PROFILER_STARTUP: '1', MOZ_PROFILER_SHUTDOWN: OUT, MOZ_PROFILER_STARTUP_FEATURES: 'js,stackwalk,cpu,markers', MOZ_PROFILER_STARTUP_FILTERS: 'GeckoMain,Compositor,Renderer,WRRenderBackend,WRWorker,ImgDecoder,StyleThread', MOZ_PROFILER_STARTUP_INTERVAL: '1', MOZ_PROFILER_STARTUP_ENTRIES: '67108864' },
});
const [VW, VH] = String(flag('size', '1512x945')).split('x').map(Number);
const ctx = await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: Number(flag('dpr', 2)) });
await ctx.addInitScript(() => { let a = 20261028; Math.random = () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; });
const page = await ctx.newPage();
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
// --css="<rules>": a stylesheet added before the spins (an experiment: what a layer rule changes)
if (flag('css', '')) { await page.addStyleTag({ content: String(flag('css')) }); await sleep(600); }
await page.evaluate(() => performance.mark('probe:start'));
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
} else if (flag('poke', false)) {
  // --poke: no spin at all; a one-pixel change somewhere else on the page every --every ms (a control: what any content
  // paint costs here, wheel or not)
  // --poke="<js with k>" runs that instead (an experiment on one change: `document.querySelector('.turn-layer').style.transform = ...`)
  const js = flag('poke') === true ? "document.body.style.paddingBottom = `${k % 2}px`" : String(flag('poke'));
  for (let k = 0; k < SPINS; k++) { await page.evaluate(([k, js]) => { performance.mark('wheel:poke'); new Function('k', js)(k); }, [k, js]); await sleep(EVERY); }
} else {
  for (let k = 0; k < SPINS; k++) { await page.keyboard.press(k % 4 < 2 ? 'ArrowRight' : 'ArrowLeft'); await sleep(EVERY); }
}
await sleep(1200);
await page.evaluate(() => performance.mark('probe:end'));
await sleep(200);
await browser.close();
for (let i = 0; i < 60 && !existsSync(OUT); i++) await sleep(500);
if (!existsSync(OUT)) { console.error('Firefox wrote no profile (MOZ_PROFILER_SHUTDOWN)'); process.exit(1); }
}
const PROF = flag('analyze', false) ? String(flag('analyze')) : OUT;
let raw = readFileSync(PROF);
if (raw[0] === 0x1f && raw[1] === 0x8b) raw = gunzipSync(raw);
const prof = JSON.parse(raw.toString());

// ---- the gecko format: processes[].threads[] with samples/stackTable/frameTable/stringTable, markers. Native frames carry
// no category: a sample's category and label are the nearest label frame up its stack (Gecko's own, like
// "PresShell::DoFlushPendingNotifications" under Layout, "nsDisplayListBuilder" under Graphics).
const procs = [prof, ...(prof.processes || [])];
const col = (tbl, name) => tbl.schema[name];
const cats = prof.meta.categories || [];
const labelOf = (th, stack) => {
  const ST = th.stackTable, FT = th.frameTable, strs = th.stringTable;
  const stPrefix = col(ST, 'prefix'), stFrame = col(ST, 'frame'), fLoc = col(FT, 'location'), fCat = col(FT, 'category'), fSub = col(FT, 'subcategory');
  let k = stack, hops = 0, js = null, label = null, cat = null, sub = null;
  while (k != null && hops < 120) {
    const f = FT.data[ST.data[k][stFrame]];
    if (f[fCat] != null) {
      const c = cats[f[fCat]];
      if (!label) { label = strs[f[fLoc]]; cat = c ? c.name : '?'; sub = c && c.subcategories ? c.subcategories[f[fSub]] || '' : ''; }
      if (c && c.name === 'JavaScript' && !js) js = strs[f[fLoc]];
    }
    k = ST.data[k][stPrefix]; hops++;
  }
  return { label: label || '(native)', cat: cat || '?', sub, js };
};
const pct = (m, n, top) => [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, top).map(([k, v]) => `${k} ${Math.round((100 * v) / n)}%`).join(' · ');
const summarize = (th, t0, t1, top = 12) => {
  const S = th.samples, sTime = col(S, 'time'), sStack = col(S, 'stack'), sCpu = col(S, 'threadCPUDelta');
  const leaf = new Map(), cat = new Map(), sub = new Map();
  let n = 0, busy = 0, cpu = 0;
  for (const s of S.data) {
    const t = s[sTime];
    if (t < t0 || t > t1) continue;
    n++;
    if (sCpu != null && s[sCpu]) cpu += s[sCpu];
    if (s[sStack] == null) continue;
    const L = labelOf(th, s[sStack]);
    if (L.cat === 'Idle') continue;
    busy++;
    cat.set(L.cat, (cat.get(L.cat) || 0) + 1);
    sub.set(`${L.cat}: ${L.sub}`, (sub.get(`${L.cat}: ${L.sub}`) || 0) + 1);
    leaf.set(L.js && L.cat !== 'JavaScript' ? `${L.label} ← ${L.js.replace(/https?:\/\/[^ )]*\//, '')}` : L.label.replace(/https?:\/\/[^ )]*\//, ''), (leaf.get(L.js && L.cat !== 'JavaScript' ? `${L.label} ← ${L.js.replace(/https?:\/\/[^ )]*\//, '')}` : L.label.replace(/https?:\/\/[^ )]*\//, '')) || 0) + 1);
  }
  return { n, busy, cpuMs: Math.round(cpu / 1e6), cats: pct(cat, busy, 8), subs: pct(sub, busy, 10), leaf: pct(leaf, busy, top) };
};
// the game's content process: the GeckoMain thread that has the wheel marks
let window = null, mainTh = null, mainProc = null;
for (const p of procs) for (const th of p.threads || []) {
  if (th.name !== 'GeckoMain' || !th.markers) continue;
  const M = th.markers, mName = col(M, 'name'), mTime = col(M, 'startTime'), mData = col(M, 'data');
  const marks = M.data.map(m => ({ name: th.stringTable[m[mName]], t: m[mTime], d: m[mData] })).filter(m => m.name === 'UserTiming' && m.d && /^(wheel:|probe:)/.test(m.d.name));
  if (!marks.length) continue;
  const ps = marks.find(m => m.d.name === 'probe:start'), pe = marks.find(m => m.d.name === 'probe:end');
  window = [ps ? ps.t : Math.min(...marks.map(m => m.t)) - 50, pe ? pe.t : Math.max(...marks.map(m => m.t)) + 1200];
  mainTh = th; mainProc = p;
  console.log(`wheel marks on the game's main thread: ${marks.filter(m => m.d.name.startsWith('wheel:')).length}; window ${Math.round(window[1] - window[0])} ms (profile interval ${prof.meta.interval} ms)`);
}
if (!window) { console.error('no wheel marks found in the profile (is ?wheelmarks=1 honoured by this build?)'); process.exit(1); }
const report = [];
for (const p of procs) for (const th of p.threads || []) {
  if (!th.samples || !th.samples.data.length) continue;
  if (th.name === 'GeckoMain' && th !== mainTh) continue; // other processes' main threads: not the game's
  const s = summarize(th, window[0], window[1]);
  if (s.busy < 20) continue;
  report.push(`\n== ${th.name} (${p === mainProc ? 'the game' : p.meta?.processType ?? 'parent'}): ${s.busy} of ${s.n} samples busy (~${s.busy * prof.meta.interval} ms, CPU ${s.cpuMs} ms)\n  categories: ${s.cats}\n  parts: ${s.subs}\n  heaviest: ${s.leaf}`);
}
console.log(report.join('\n'));
// Gecko's own markers on the game's main thread during the window, summed by name (Styles, Reflow, DisplayList, Rasterize…)
{
  const th = mainTh, M = th.markers, mName = col(M, 'name'), mT0 = col(M, 'startTime'), mT1 = col(M, 'endTime'), mData = col(M, 'data');
  const sum = new Map(), cnt = new Map(), max = new Map();
  for (const m of M.data) {
    const t0 = m[mT0], t1 = m[mT1];
    if (t0 == null || t1 == null || t1 < window[0] || t0 > window[1]) continue;
    const d = m[mData] || {};
    const name = `${th.stringTable[m[mName]]}${d.type && d.type !== th.stringTable[m[mName]] ? `/${d.type}` : ''}${d.category ? ` (${d.category})` : ''}`;
    const dur = t1 - t0;
    sum.set(name, (sum.get(name) || 0) + dur); cnt.set(name, (cnt.get(name) || 0) + 1); max.set(name, Math.max(max.get(name) || 0, dur));
  }
  console.log(`\nGecko's markers on the game's main thread in the window (total ms · count · longest):`);
  for (const [k, v] of [...sum.entries()].sort((a, b) => b[1] - a[1]).slice(0, 18)) console.log(`  ${k}: ${Math.round(v)} ms · ${cnt.get(k)} · ${Math.round(max.get(k))} ms`);
}
// the main thread's long busy stretches: runs of consecutive non-idle samples over 40 ms, with what filled them
{
  const th = mainTh, S = th.samples, sTime = col(S, 'time'), sStack = col(S, 'stack');
  const rows = S.data.filter(s => s[sTime] >= window[0] && s[sTime] <= window[1]);
  const stretches = []; let cur = null;
  for (const s of rows) {
    const L = s[sStack] == null ? { cat: 'Idle' } : labelOf(th, s[sStack]);
    if (L.cat !== 'Idle') { if (!cur) cur = { t0: s[sTime], t1: s[sTime], L: [] }; cur.t1 = s[sTime]; cur.L.push(L); }
    else if (cur) { stretches.push(cur); cur = null; }
  }
  if (cur) stretches.push(cur);
  const long = stretches.filter(x => x.t1 - x.t0 > 40).sort((a, b) => a.t0 - b.t0);
  console.log(`\nmain thread's busy stretches over 40 ms in the window: ${long.length}`);
  for (const x of long.slice(0, 14)) {
    const m = new Map(), lf = new Map();
    for (const L of x.L) { m.set(`${L.cat}: ${L.sub}`, (m.get(`${L.cat}: ${L.sub}`) || 0) + 1); const k = L.js && L.cat !== 'JavaScript' ? `${L.label} ← ${L.js.replace(/https?:\/\/[^ )]*\//, '')}` : L.label.replace(/https?:\/\/[^ )]*\//, ''); lf.set(k, (lf.get(k) || 0) + 1); }
    console.log(`  +${Math.round(x.t0 - window[0])} ms · ${Math.round(x.t1 - x.t0)} ms · ${pct(m, x.L.length, 4)}\n      ${pct(lf, x.L.length, 5)}`);
  }
}
// The compositor's own account: CONTENT_FRAME_TIME is each content paint's time from the page's paint to the screen, which
// in Firefox includes WebRender's scene build and the CPU rasterizing of SVG "blobs"; the frames a person sees drop.
{
  const rows = [];
  for (const p of procs) for (const th of p.threads || []) {
    if (th.name !== 'Compositor' || !th.markers) continue;
    const M = th.markers, S = M.schema;
    for (const m of M.data) { if (m[S.phase] !== 1) continue; const t0 = m[S.startTime], t1 = m[S.endTime]; if (t1 < window[0] || t0 > window[1]) continue; if (th.stringTable[m[S.name]] === 'CONTENT_FRAME_TIME') rows.push(Math.round(t1 - t0)); }
  }
  rows.sort((a, b) => b - a);
  console.log(`\ncontent paints shown in the window: ${rows.length}; paint-to-screen ms (compositor's CONTENT_FRAME_TIME) total ${rows.reduce((a, b) => a + b, 0)}, worst ${rows[0] ?? 0}, over 100 ms ${rows.filter(x => x > 100).length}: ${rows.slice(0, 12).join(' ')}`);
}
console.log(`\nraw profile: ${PROF} (open at https://profiler.firefox.com)`);
