// Films your own recruit, frame by frame, for a look and a clip (Cory, Nov 9: the recruit flight's picture/card/picture).
//   node scripts/v4-recruit-film.mjs <url> <outDir> [speed=steady]
// Resumes the rich save (P1 holds 6 of every color), places on a plain gain space, recruits the first affordable member,
// then screenshots every 100 ms for 6.5 s and writes recruit.gif (ffmpeg) beside the frames.
import { mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { browserPath, launchBrowser } from '../e2e/v4/lib/browser.mjs';
import { richSave } from '../e2e/v4/lib/rich-save.mjs';
import { seedSave } from '../e2e/v4/lib/seed.mjs';

const [url, out, speed = 'steady'] = process.argv.slice(2);
if (!url || !out) { console.error('usage: node scripts/v4-recruit-film.mjs <url> <outDir> [speed]'); process.exit(2); }
mkdirSync(out, { recursive: true });
const browser = await launchBrowser({ executablePath: browserPath });
const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 } });
const page = await ctx.newPage();
const errs = [];
page.on('pageerror', e => errs.push(e.message));
await seedSave(page, richSave());
await page.goto(`${url}/?speed=${speed}&intro=0`);
await page.click('[data-home="resume"]');
await page.waitForSelector('.lt-seat[data-pid]');
await page.waitForSelector('.slot.can .base', { timeout: 10000 });
const slot = await (await page.evaluateHandle(() => { const s = [...document.querySelectorAll('.slot.can')].find(e => /: \+\d+ \w+\.( Open)/.test(e.getAttribute('aria-label') || '')) || document.querySelector('.slot.can'); return s.querySelector('.base'); })).asElement();
const bb = await slot.boundingBox();
await page.mouse.click(bb.x + bb.width / 2, bb.y + bb.height / 2);
await page.waitForTimeout(300);
const conf = await page.$('[data-place]');
if (conf) await conf.click();
for (let k = 0; k < 12 && !(await page.$('.lt[data-phase="buy"][data-yours="1"]')); k++) {
  const opt = await page.$('.prompt.choice button[data-option]:not([disabled])');
  if (opt) await opt.click().catch(() => {});
  await page.waitForTimeout(300);
}
await page.waitForTimeout(1500);
const card = await page.waitForSelector('.lt-shop .card.can[data-uid][data-option]', { timeout: 8000 });
await card.click();
const pay = await page.waitForSelector('.dialog.pay .pay-go[data-option], .dialog.pay .btn.pri[data-option]', { timeout: 2500 }).catch(() => null);
if (pay) { await page.waitForTimeout(450); await pay.click(); }
const t0 = Date.now();
let n = 0;
while (Date.now() - t0 < 6500) {
  await page.screenshot({ path: `${out}/f${String(n++).padStart(3, '0')}.png` });
  await page.waitForTimeout(60);
}
await browser.close();
console.log(`${n} frames in ${out}${errs.length ? `; page errors: ${errs.join(' | ')}` : ''}`);
try {
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(Math.round(n / 6.5)), '-i', `${out}/f%03d.png`, '-vf', 'scale=900:-1:flags=lanczos,split[a][b];[a]palettegen[p];[b][p]paletteuse', `${out}/recruit.gif`]);
  console.log(`${out}/recruit.gif`);
} catch (e) { console.error('ffmpeg failed', e.message); }
