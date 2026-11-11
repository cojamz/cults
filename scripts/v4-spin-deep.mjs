// Play into a game (bots quick, the person clicking options), then spin the wheel by keys and by mouse drags,
// measuring every frame gap and how long each input waited. node deep.mjs <url> [--firefox] [--round=3] [--cpu=4]
import { launchBrowser, browserPath, DESK } from '../e2e/v4/lib/browser.mjs';
import { firefox } from 'playwright';
const argv = process.argv.slice(2);
const flag = (n, d) => { const a = argv.find(x => x === `--${n}` || x.startsWith(`--${n}=`)); if (!a) return d; return a.includes('=') ? a.slice(a.indexOf('=') + 1) : true; };
const url = argv.find(a => !a.startsWith('--'));
const FF = !!flag('firefox', false), ROUND = Number(flag('round', 3)), CPU = Number(flag('cpu', 4));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const GECKO = flag('gecko', '');
const browser = FF ? await firefox.launch({ firefoxUserPrefs: DESK, ...(GECKO ? { env: { ...process.env, MOZ_PROFILER_STARTUP: '1', MOZ_PROFILER_SHUTDOWN: GECKO, MOZ_PROFILER_STARTUP_FEATURES: 'js,stackwalk,cpu', MOZ_PROFILER_STARTUP_FILTERS: 'GeckoMain,Compositor,Renderer,RenderBackend', MOZ_PROFILER_STARTUP_ENTRIES: '50000000', MOZ_PROFILER_STARTUP_INTERVAL: '1' } } : {}) }) : await launchBrowser({ executablePath: browserPath, args: ['--disable-gpu', '--disable-gpu-compositing', '--autoplay-policy=no-user-gesture-required'] });
const [VW, VH] = String(flag('size', '1512x945')).split('x').map(Number);
const ctx = await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: Number(flag('dpr', FF ? 2 : 1)) });
await ctx.addInitScript(() => {
  const F = (window.__sp = { ev: [], long: [] });
  try { new PerformanceObserver(l => { for (const e of l.getEntries()) F.ev.push([e.name, Math.round(e.duration)]); }).observe({ type: 'event', durationThreshold: 16, buffered: true }); } catch {}
  try { new PerformanceObserver(l => { for (const e of l.getEntries()) F.long.push(Math.round(e.duration)); }).observe({ type: 'longtask', buffered: true }); } catch {}
  F.watch = ms => new Promise(done => { const fr = []; const t0 = performance.now(); let last = t0; const tick = t => { fr.push(t - last); last = t; if (t - t0 < ms) requestAnimationFrame(tick); else done(fr); }; requestAnimationFrame(tick); });
});
await ctx.addInitScript(() => { let a = Number(new URLSearchParams(location.search).get('seed') || 20261104); Math.random = () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; });
if (flag('noidle', false)) await ctx.addInitScript(() => { delete window.requestIdleCallback; window.requestIdleCallback = undefined; });
if (flag('timeidle', false)) await ctx.addInitScript(() => { const ric = window.requestIdleCallback; window.__idle = []; window.requestIdleCallback = (fn, o) => ric(d => { const t = performance.now(); try { fn(d); } finally { const ms = performance.now() - t; if (ms > 20) window.__idle.push(Math.round(ms)); } }, o); });
const page = await ctx.newPage();
page.on('pageerror', e => console.error('PAGEERR', e.message));
const cdp = FF ? null : await ctx.newCDPSession(page);
await page.goto(`${url}/?intro=0&botDelay=30${flag('sound', true) === 'off' ? '&sound=off' : ''}${flag('q', '')}`);
await page.click('[data-home="local"]'); await page.waitForSelector('[data-start]'); await page.click('[data-start]'); await page.waitForSelector('.app.game');
const t0 = Date.now(); let clicks = 0;
const st = () => page.evaluate(() => { const e = document.querySelector('.app.game'); return e ? { round: Number(e.dataset.round), yours: e.dataset.yours, phase: e.dataset.phase, anim: e.dataset.animating === 'true', lit: document.querySelectorAll('.lt-wheel [data-slot][data-option]').length } : null; }).catch(() => null);
for (;;) {
  const s = await st();
  if (s && s.round >= ROUND && s.yours === '1' && s.phase === 'place' && !s.anim && s.lit) break;
  if (flag('trace', false) && clicks % 10 === 0) console.log(Math.round((Date.now() - t0) / 1000), JSON.stringify(s));
  if (Date.now() - t0 > Number(flag('maxs', 600)) * 1000) { console.log('never reached round', ROUND, s); await page.screenshot({ path: '/tmp/claude-0/stuck.png' }); console.log(await page.evaluate(() => [...document.querySelectorAll('[data-option]')].map(e => `${e.dataset.option}${e.disabled ? '(off)' : ''}`).join(' '))); process.exit(1); }
  // every sixth try, pass if the table offers it (a random clicker can circle a buy or a long choice forever)
  const pass = clicks % 6 === 5 ? await page.$('[data-option="pass"]:not([disabled])') : null;
  if (pass) { await pass.click({ timeout: 1500 }).catch(() => {}); clicks++; await sleep(150); continue; }
  const els = await page.$$('.lt-wheel [data-slot][data-option], [data-option]:not([data-slot])');
  if (els.length) { await els[(clicks * 7) % els.length].click({ timeout: 1500 }).catch(() => {}); clicks++; }
  else { const b = await page.$('[data-next-round], .round-end button, button.primary'); if (b) await b.click({ timeout: 800 }).catch(() => {}); }
  await sleep(150);
}
console.log(`reached round ${ROUND} in ${Math.round((Date.now() - t0) / 1000)} s, ${clicks} clicks; elements ${await page.evaluate(() => document.querySelectorAll('*').length)}`);
await sleep(Number(flag('wait', 2500)));
if (flag('shot', false)) await page.screenshot({ path: flag('shot') });
await page.mouse.move(5, 5);
if (flag('css', '')) { await page.addStyleTag({ content: String(flag('css', '')) }); await sleep(500); }
const ONLY = String(flag('only', 'keys,fast,drags'));
if (cdp) await cdp.send('Emulation.setCPUThrottlingRate', { rate: CPU });
await page.evaluate(() => { window.__sp.ev = []; window.__sp.long = []; });
if (cdp && flag('profile', false)) { await cdp.send('Profiler.enable'); await cdp.send('Profiler.setSamplingInterval', { interval: 200 }); await cdp.send('Profiler.start'); }
const report = (tag, fr) => { let t = 0; const big = fr.map(x => { t += x; return x > 50 ? `${Math.round(x)}@${Math.round(t)}` : null; }).filter(Boolean); console.log(`${tag}: ${fr.length} frames in ${Math.round(t)} ms, worst ${Math.round(Math.max(...fr))} ms, over 50 ms ${big.length}  ${big.join(' ')}`); };
// two presses 700 ms apart, with what the board did and when (keys, turning on and off, React's commit of the angle)
if (ONLY.includes('two')) for (let k = 0; k < 3; k++) {
  await page.evaluate(() => { const st = document.querySelector('.lt-wheel .stage'); const L = (window.__mo = []); const t0 = (window.__t0 = performance.now());
    addEventListener('keydown', () => L.push(`key@${Math.round(performance.now() - t0)}`), { capture: true, once: false });
    new MutationObserver(ms => { for (const m of ms) { const el = m.target; const what = el === st ? `stage.${st.classList.contains('turning') ? 'turning' : 'still'}` : el.classList.contains('turn-layer') ? `layer:${el.style.transform || '-'}` : el.dataset.slot ? 'slot-move' : null; if (what && L[L.length - 1]?.split('@')[0] !== what) L.push(`${what}@${Math.round(performance.now() - t0)}`); } }).observe(st, { attributes: true, subtree: true, attributeFilter: ['class', 'style'] }); });
  const w = page.evaluate(ms => window.__sp.watch(ms), 2200);
  if (flag('nopress', false)) await sleep(700); else { await page.keyboard.press('ArrowRight'); await sleep(700); await page.keyboard.press('ArrowRight'); }
  const fr = await w; let t = 0; const big = fr.map(x => { t += x; return x > 34 ? `${Math.round(x)}ms@${Math.round(t)}` : null; }).filter(Boolean);
  console.log(`two presses ${k + 1}: long frames ${big.join(' ') || 'none'} idle>20ms: ${await page.evaluate(() => (window.__idle || []).splice(0).join(','))} | ${(await page.evaluate(() => window.__mo)).filter(x => !x.startsWith('slot-move') || true).slice(0, 30).join(' ')}`);
  await sleep(1500);
}
// one press, then the board left still: the spin and its landing's redraw (the commit 350 ms after it lands)
if (ONLY.includes('land')) for (let k = 0; k < 5; k++) { const w = page.evaluate(ms => window.__sp.watch(ms), 1400); await sleep(20); await page.keyboard.press(k % 2 ? 'ArrowLeft' : 'ArrowRight'); report(`one press ${k + 1}, watched 1.4 s`, await w); await sleep(400); }
// keys: one press per 700 ms
if (ONLY.includes('keys')) { const w = page.evaluate(ms => window.__sp.watch(ms), 8 * 700 + 600); for (let k = 0; k < 8; k++) { await page.keyboard.press(k % 2 ? 'ArrowLeft' : 'ArrowRight'); await sleep(700); } report('keys, 1 per 700 ms', await w); }
await sleep(800);
// keys round and round
if (ONLY.includes('fast')) { const w = page.evaluate(ms => window.__sp.watch(ms), 12 * 250 + 600); for (let k = 0; k < 12; k++) { await page.keyboard.press(k % 4 < 2 ? 'ArrowRight' : 'ArrowLeft'); await sleep(250); } report('keys, 1 per 250 ms', await w); }
await sleep(800);
// mouse drags along the rim
const box0 = 0;
const box = await page.locator('.lt-wheel .stage').boundingBox();
const cx = box.x + box.width / 2, cy = box.y + box.height / 2, R = box.width * 0.42;
if (ONLY.includes('drags')) { const w = page.evaluate(ms => window.__sp.watch(ms), 6 * 900 + 600);
  for (let k = 0; k < 6; k++) {
    const dir = k % 2 ? -1 : 1; let a = -Math.PI / 2;
    await page.mouse.move(cx + R * Math.cos(a), cy + R * Math.sin(a)); await page.mouse.down();
    for (let j = 0; j < 20; j++) { a += dir * 0.06; await page.mouse.move(cx + R * Math.cos(a), cy + R * Math.sin(a)); await sleep(16); }
    await page.mouse.up(); await sleep(560);
  }
  report('mouse drags', await w); }
if (cdp && flag('profile', false)) {
  const { profile } = await cdp.send('Profiler.stop');
  const byId = new Map(profile.nodes.map(n => [n.id, n])), parent = new Map();
  for (const n of profile.nodes) for (const c of n.children || []) parent.set(c, n.id);
  const key = n => `${n.callFrame.functionName || '(anon)'} ${n.callFrame.url.split('/').pop()}:${n.callFrame.lineNumber}`;
  const incl = new Map();
  profile.samples.forEach((id, i) => { const d = (profile.timeDeltas[i + 1] ?? profile.timeDeltas[i]) / 1000; const seen = new Set(); let cur = id; while (cur != null) { const k = key(byId.get(cur)); if (!seen.has(k)) { seen.add(k); incl.set(k, (incl.get(k) || 0) + d); } cur = parent.get(cur); } });
  console.log([...incl].sort((a, b) => b[1] - a[1]).filter(([k]) => !/^\((idle|root|program)\)/.test(k)).slice(0, Number(flag('top', 50))).map(([k, v]) => `${Math.round(v).toString().padStart(6)} ${k}`).join('\n'));
}
// the mouse sweeping across the wheel with no button down (hovering one space after another), and keys with it resting there
if (ONLY.includes('sweep')) { const w = page.evaluate(ms => window.__sp.watch(ms), 4000); for (let j = 0; j < 120; j++) { const a = -Math.PI / 2 + j * 0.05; await page.mouse.move(cx + R * 0.8 * Math.cos(a), cy + R * 0.8 * Math.sin(a)); await sleep(25); } report('mouse sweep over spaces', await w); }
if (ONLY.includes('restkeys')) { await page.mouse.move(cx, cy - R * 0.75); await sleep(1200); const w = page.evaluate(ms => window.__sp.watch(ms), 8 * 700 + 600); for (let k = 0; k < 8; k++) { await page.keyboard.press(k % 2 ? 'ArrowLeft' : 'ArrowRight'); await sleep(700); } report('keys, mouse resting on the wheel', await w); }
const sp = await page.evaluate(() => window.__sp);
const evs = sp.ev.filter(e => /key|pointer|mouse|click/.test(e[0]));
console.log('inputs over 16 ms (name ms):', evs.map(e => `${e[0]} ${e[1]}`).join(', ') || 'none', '| long tasks:', sp.long.join(' ') || 'none');
await browser.close();
