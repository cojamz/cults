// Gate for the picky bot's Promote catch (Nov 4): while a choice sheet is up, the space card waiting on the hub
// (ActionStage) must not be drawn over it. Plays as one seat until a sheet is open with a stage card on screen, then
// checks the card is hidden and saves a picture.   node scripts/picky/sheet-stage.mjs <base url> <out.png>
import { chromium } from 'playwright';
import { answerChoice } from '../../e2e/v4/lib/answer.mjs';
import { browserPath } from '../../e2e/v4/lib/browser.mjs';

const [base, out] = process.argv.slice(2);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const browser = await chromium.launch({ executablePath: browserPath });
const page = await browser.newPage({ viewport: { width: 1270, height: 700 } });
await page.goto(`${base.replace(/\/?$/, '/')}?intro=0&sound=off&speed=quick&table=red,echo,thieves,purple`);
await page.click('[data-home="local"]'); await page.waitForSelector('[data-start]'); await page.click('[data-start]');
await page.waitForSelector('.app.game');
const t0 = Date.now();
let verdict = null;
while (!verdict && Date.now() - t0 < 6 * 60000) {
  if (await page.$('.results')) break;
  const next = await page.$('[data-next-round]'); if (next) { await next.click().catch(() => {}); await sleep(500); continue; }
  const s = await page.evaluate(() => { const e = document.querySelector('.app.game'); return e ? { yours: e.dataset.yours === '1', phase: e.dataset.phase, anim: e.dataset.animating === 'true', moves: Number(e.dataset.moves) } : null; });
  if (!s || !s.yours || s.anim) { await sleep(100); continue; }
  const seen = await page.evaluate(() => {
    const sheet = document.querySelector('.prompt.choice.gift-card'), card = document.querySelector('.action-stage .as-card');
    if (!sheet || !card) return null;
    const a = sheet.getBoundingClientRect(), b = card.getBoundingClientRect();
    const overlap = b.right > a.left && b.left < a.right && b.bottom > a.top && b.top < a.bottom;
    return { overlap, shown: getComputedStyle(card).visibility !== 'hidden', title: sheet.textContent.slice(0, 40) };
  });
  if (seen) { await sleep(300); await page.screenshot({ path: out }); verdict = seen; break; }
  if (s.phase === 'place') {
    const legal = await page.$$('.lt-wheel [data-slot][data-option]');
    if (legal.length) await legal[(s.moves * 5) % legal.length].click({ timeout: 1500 }).catch(() => {});
    const c = await page.waitForSelector('[data-place]', { timeout: 500 }).catch(() => null); if (c) await c.click().catch(() => {});
  } else if (s.phase === 'buy') {
    const p = (await page.$$('.lt-shop .card[data-option]'))[0] || await page.$('[data-option="pass"]'); if (p) await p.click({ timeout: 1500 }).catch(() => {});
  } else await answerChoice(page, { last: ['pass'] }).catch(() => null);
  await sleep(200);
}
await browser.close();
if (!verdict) { console.log('no sheet with a stage card came up'); process.exit(2); }
console.log(JSON.stringify(verdict));
process.exit(verdict.shown && verdict.overlap ? 1 : 0);
