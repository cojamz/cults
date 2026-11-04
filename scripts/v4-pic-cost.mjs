// How often the rim pictures are drawn in a real game, and the long tasks around them (rimPictures.js).
//   node scripts/v4-pic-cost.mjs <url> [--secs=60] [--cpu=4]
import { launchBrowser, browserPath } from '../e2e/v4/lib/browser.mjs';
const argv = process.argv.slice(2);
const flag = (n, d) => { const a = argv.find(x => x.startsWith(`--${n}=`)); return a ? a.slice(n.length + 3) : d; };
const [url] = argv.filter(a => !a.startsWith('--'));
const browser = await launchBrowser({ executablePath: browserPath });
const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 } });
await ctx.addInitScript(() => {
  let a = 7; Math.random = () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  window.__pics = 0; window.__long = [];
  const o = URL.createObjectURL; URL.createObjectURL = function (b) { if (b && b.type === 'image/png') window.__pics++; return o.call(URL, b); };
  new PerformanceObserver(l => { for (const e of l.getEntries()) window.__long.push(Math.round(e.duration)); }).observe({ type: 'longtask', buffered: true });
});
const page = await ctx.newPage();
const cdp = await ctx.newCDPSession(page);
await cdp.send('Emulation.setCPUThrottlingRate', { rate: Number(flag('cpu', 4)) });
await page.goto(`${url}/?intro=0&sound=off&botDelay=30`);
await page.click('[data-home="local"]'); await page.waitForSelector('[data-start]'); await page.click('[data-start]'); await page.waitForSelector('.app.game');
const end = Date.now() + Number(flag('secs', 60)) * 1000;
let n = 0;
while (Date.now() < end) {
  const o = await page.$('.slot.can .base') || await page.$('[data-option]:not([data-slot])');
  if (o) { await o.click({ timeout: 800 }).catch(() => {}); n++; }
  await new Promise(r => setTimeout(r, 250));
}
const r = await page.evaluate(() => ({ T: window.__picT, pics: window.__pics, round: document.querySelector('.app.game')?.dataset.round, long: window.__long }));
const sum = r.long.reduce((a, b) => a + b, 0);
if (r.T) { const g = {}; for (const [k, v] of r.T) (g[k] = g[k] || []).push(Math.round(v)); console.log(JSON.stringify(g)); }
console.log(`${url}: ${n} clicks, round ${r.round}, ${r.pics} pictures drawn, long tasks ${r.long.length} (${sum} ms, worst ${Math.max(0, ...r.long)})`);
await browser.close();
