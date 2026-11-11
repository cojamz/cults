// Films your own Sweet Talk on the card (Cory, Nov 9: all the choices first, then one animation).
//   node scripts/v4-sweet-film.mjs <url> <outDir> [speed=steady]
import { mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { browserPath, launchBrowser } from '../e2e/v4/lib/browser.mjs';
import { sweetTalkSave } from '../e2e/v4/lib/dialog-save.mjs';
import { seedSave } from '../e2e/v4/lib/seed.mjs';

const [url, out, speed = 'steady'] = process.argv.slice(2);
mkdirSync(out, { recursive: true });
const { save, slot } = sweetTalkSave(2);
const browser = await launchBrowser({ executablePath: browserPath });
const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 } });
const page = await ctx.newPage();
const errs = [];
page.on('pageerror', e => errs.push(e.message));
await seedSave(page, save);
await page.goto(`${url}/?speed=${speed}&intro=0`);
await page.click('[data-home="resume"]');
await page.waitForSelector('.lt-seat[data-pid]');
await page.waitForSelector(`[data-option="${slot}"], .slot.can`, { timeout: 10000 });
const key = slot.slice(5);
const base = await page.$(`[data-slot="${key}"] .base`);
const bb = await base.boundingBox();
await page.mouse.click(bb.x + bb.width / 2, bb.y + bb.height / 2);
await page.waitForTimeout(300);
const conf = await page.$('[data-place]');
if (conf) await conf.click();
const card = await page.waitForSelector('[data-gift="convert"]', { timeout: 8000 }).catch(() => null);
if (!card) { await page.screenshot({ path: `${out}/no-card.png` }); console.log('no convert card', errs); await browser.close(); process.exit(1); }
await page.waitForTimeout(1200);
await page.screenshot({ path: `${out}/a-card.png` });
for (const c of ['gold', 'gold', 'red', 'white']) { const b = await page.$(`[data-convert-add="${c}"]`); if (b) { await b.click(); await page.waitForTimeout(150); } }
await page.screenshot({ path: `${out}/b-set.png` });
await page.click('.convert-card .pay-go');
const t0 = Date.now(); let n = 0;
while (Date.now() - t0 < 3000) { await page.screenshot({ path: `${out}/f${String(n++).padStart(3, '0')}.png` }); await page.waitForTimeout(40); }
const flights = await page.evaluate(() => window.__patronsFlights || 0);
await browser.close();
console.log(`${n} frames; page errors: ${errs.join(' | ') || 'none'}; flights ${flights}`);
try { execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(Math.round(n / 3)), '-i', `${out}/f%03d.png`, '-vf', 'scale=900:-1:flags=lanczos,split[a][b];[a]palettegen[p];[b][p]paletteuse', `${out}/sweet.gif`]); } catch (e) { console.error(e.message); }
