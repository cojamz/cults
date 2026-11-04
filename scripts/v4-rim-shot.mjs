// The rim's words as the board shows them, live text against its picture (rimPictures.js): a round I table, close up,
// with ?rimpics=0 (words drawn as text) and without (pictures), plus how many rims show a picture.
//   node scripts/v4-rim-shot.mjs <url> <out-dir> [--firefox] [--dpr=2]
import { launchBrowser, browserPath, DESK } from '../e2e/v4/lib/browser.mjs';
import { firefox } from 'playwright';
import { mkdirSync } from 'node:fs';
const argv = process.argv.slice(2);
const flag = (n, d) => { const a = argv.find(x => x === `--${n}` || x.startsWith(`--${n}=`)); if (!a) return d; return a.includes('=') ? a.slice(a.indexOf('=') + 1) : true; };
const [url, out] = argv.filter(a => !a.startsWith('--'));
mkdirSync(out, { recursive: true });
const FF = !!flag('firefox', false);
const browser = FF ? await firefox.launch({ firefoxUserPrefs: DESK }) : await launchBrowser({ executablePath: browserPath });
for (const pics of ['0', '1']) {
  const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 }, deviceScaleFactor: Number(flag('dpr', 2)) });
  await ctx.addInitScript(() => { let a = 7; Math.random = () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; });
  const page = await ctx.newPage();
  page.on('pageerror', e => console.error('PAGEERR', e.message));
  await page.goto(`${url}/?intro=0&sound=off&botDelay=30${pics === '0' ? '&rimpics=0' : ''}`);
  await page.click('[data-home="local"]'); await page.waitForSelector('[data-start]'); await page.click('[data-start]'); await page.waitForSelector('.app.game');
  for (let i = 0; i < 200; i++) {
    const ok = await page.evaluate(() => { const e = document.querySelector('.app.game'); return e && e.dataset.yours === '1' && e.dataset.phase === 'place' && e.dataset.animating !== 'true'; });
    if (ok) break;
    const o = await page.$('[data-option]:not([data-slot])'); if (o) await o.click({ timeout: 800 }).catch(() => {});
    await new Promise(r => setTimeout(r, 200));
  }
  await page.mouse.move(5, 5);
  for (const [k, key] of [[0, null], [1, 'ArrowRight']]) {
    if (key) { await page.keyboard.press(key); }
    await new Promise(r => setTimeout(r, 3000));
    const n = await page.evaluate(() => document.querySelectorAll('.rim-pics image').length);
    const box = await page.locator('.lt-wheel .stage').boundingBox();
    await page.screenshot({ path: `${out}/rim-${pics === '0' ? 'text' : 'pics'}-${k}.png`, clip: { x: box.x, y: box.y, width: box.width, height: box.height * 0.32 } });
    console.log(`${pics === '0' ? 'text' : 'pictures'} facing ${k}: ${n} rims as pictures`);
  }
  await ctx.close();
}
await browser.close();
