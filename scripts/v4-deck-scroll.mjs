// Deck browser scroll probe (Cory, Nov 5: "deck scrollin gis super laggy"): opens the member browser on a late game and
// wheel-scrolls it down and back at 4x CPU, reporting frame gaps and the browser's work per scroll.
// node scripts/v4-deck-scroll.mjs [url] [--trace=file]
import { launchBrowser, browserPath, cdpOk } from '../e2e/v4/lib/browser.mjs';
import { seedSave } from '../e2e/v4/lib/seed.mjs';
import { lateSave } from '../e2e/v4/lib/late-save.mjs';
const url = process.argv.find(a => a.startsWith('http')) || 'http://localhost:5391';
const tracePath = process.argv.find(a => a.startsWith('--trace='))?.slice(8);
const rate = Number(process.env.RATE || 4);
const browser = await launchBrowser({ executablePath: browserPath });
const page = await browser.newPage({ viewport: { width: Number(process.env.W || 1280), height: Number(process.env.H || 720) }, deviceScaleFactor: Number(process.env.DPR || 1) });
const save = lateSave(21, 2);
// BOTS=1: every seat a bot, so the table keeps playing (moves, flights, re-renders) under the open browser
if (process.env.BOTS) { save.config.seats[0].kind = 'bot'; for (const p of save.state.players) if ('kind' in p) p.kind = 'bot'; save.state.seats && save.state.seats.forEach(x => { x.kind = 'bot'; }); }
await seedSave(page, save);
await page.goto(`${url}/?intro=0`);
await page.click('[data-home="resume"]');
await page.waitForSelector(process.env.BOTS ? 'button.lt-deck' : '.slot.can .base', { timeout: 30000 });
await page.waitForTimeout(1500);
if (process.env.CSS) await page.addStyleTag({ content: process.env.CSS });
await page.click('button.lt-deck', { force: !!process.env.BOTS });
await page.waitForSelector('.deck-browser-scroll [data-deck-member]');
if (process.env.PNG) await page.evaluate(async () => { for (const img of document.querySelectorAll('.deck-browser img.sprite')) { const i = new Image(); i.src = img.src; await i.decode(); const c = document.createElement('canvas'); c.width = img.width * 2; c.height = img.height * 2; const x = c.getContext('2d'); x.imageSmoothingEnabled = false; x.drawImage(i, 0, 0, c.width, c.height); img.src = c.toDataURL(); } });
await page.waitForTimeout(800);
const box = await page.locator('.deck-browser-scroll').boundingBox();
await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
const cdp = cdpOk ? await page.context().newCDPSession(page) : { send: async () => ({ metrics: [] }), on() {} };
await cdp.send('LayerTree.enable'); let layers = 0; cdp.on('LayerTree.layerTreeDidChange', e => { if (e.layers) layers = e.layers.length; });
await page.waitForTimeout(300);
await cdp.send('Emulation.setCPUThrottlingRate', { rate });
await cdp.send('Performance.enable');
if (tracePath && cdpOk) await browser.startTracing(page, { path: tracePath, categories: ['devtools.timeline', 'disabled-by-default-devtools.timeline', ...(process.env.INV ? ['disabled-by-default-devtools.timeline.invalidationTracking'] : [])] });
await page.evaluate(() => { const m = window.__mut = {}; new MutationObserver(ms => { for (const x of ms) { const k = x.type + ':' + (x.attributeName || '') + ':' + (x.target.className?.baseVal ?? x.target.className ?? x.target.nodeName); m[k] = (m[k] || 0) + 1; } }).observe(document.querySelector('.deck-browser'), { subtree: true, attributes: true, childList: true, characterData: true }); });
const before = (await cdp.send('Performance.getMetrics')).metrics;
await page.evaluate(() => { const p = window.__f = { gaps: [], run: true }; let last = performance.now(); const f = t => { p.gaps.push(t - last); last = t; if (p.run) requestAnimationFrame(f); }; requestAnimationFrame(f); });
if (process.env.IDLE) await page.waitForTimeout(2800); else {
  for (let i = 0; i < 30; i++) { await page.mouse.wheel(0, 120); await page.waitForTimeout(40); }
  for (let i = 0; i < 30; i++) { await page.mouse.wheel(0, -120); await page.waitForTimeout(40); }
}
await page.waitForTimeout(300);
const after = (await cdp.send('Performance.getMetrics')).metrics;
if (tracePath && cdpOk) await browser.stopTracing();
const r = await page.evaluate(() => { const g = window.__f.gaps.slice(1); window.__f.run = false; g.sort((a, b) => a - b); return { frames: g.length, p50: g[g.length >> 1], p95: g[Math.floor(g.length * .95)], worst: g[g.length - 1], over50: g.filter(x => x > 50).length, els: document.querySelectorAll('*').length, cards: document.querySelectorAll('[data-deck-member]').length, inBrowser: document.querySelectorAll('.deck-browser *').length, scrollH: document.querySelector('.deck-browser-scroll').scrollHeight }; });
for (const n of ['LayoutCount', 'RecalcStyleCount', 'TaskDuration', 'ScriptDuration', 'LayoutDuration', 'RecalcStyleDuration']) if (cdpOk) r[n] = +(after.find(m => m.name === n).value - before.find(m => m.name === n).value).toFixed(3);
if (tracePath && cdpOk) { const { readFileSync } = await import('node:fs'); const t = JSON.parse(readFileSync(tracePath)); const m = {}; for (const e of t.traceEvents || t) if (e.ph === 'X' && e.dur) m[e.name] = (m[e.name] || 0) + e.dur; for (const n of ['Layerize', 'Paint', 'HitTest', 'Commit', 'PrePaint', 'RasterTask']) r[n] = Math.round((m[n] || 0) / 1000); }
console.log(JSON.stringify({ rate, layers, ...r }));
if (process.env.MUT) console.log(JSON.stringify(await page.evaluate(() => window.__mut)));
await browser.close();
