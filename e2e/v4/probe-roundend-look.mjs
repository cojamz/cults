// Probe (round-end look, Nov 9): plays a round to its end with bots (seats from $SEATS, default 4; round from $ROUND),
// skips the Reckoning, and screenshots the round card at laptop (1270×700) and phone (390×844) size.
// Server: $V4_URL; shots: $OUT.
import { mkdirSync } from 'node:fs';
import { browserPath, launchBrowser } from './lib/browser.mjs';
import { createGame, applyMove, chooseBotMove } from '../../src/engine/v4/index.js';
import { seededRandom } from '../../src/engine/v4/rng.js';
import { buildStamp } from './lib/stamp.mjs';
import { seedSave } from './lib/seed.mjs';
import { answerChoice } from './lib/answer.mjs';

const base = process.env.V4_URL, OUT = process.env.OUT || '/tmp/roundend-look';
const N = Number(process.env.SEATS || 4), ROUND = Number(process.env.ROUND || 1);
mkdirSync(OUT, { recursive: true });
const seats = Array.from({ length: N }, (_, i) => ({ name: `P${i + 1}`, kind: i ? 'bot' : 'human' }));
let s = createGame({ seats, seed: Number(process.env.SEED || 5) });
s.build = buildStamp();
const rand = seededRandom(5);
const atStart = x => x.round === ROUND && x.pending && x.pending.kind === 'place' && x.pending.player === 0;
for (let n = 0; n < 20000 && !atStart(s); n++) s = applyMove(s, chooseBotMove(s, rand));
s = JSON.parse(JSON.stringify(s));
const browser = await launchBrowser({ executablePath: browserPath });
const errs = [];
const sizes = (process.env.SIZES || 'laptop').split(',');
const VP = { laptop: { width: 1270, height: 700 }, phone: { width: 390, height: 844 } };
for (const tag of sizes) {
  const page = await browser.newPage({ viewport: VP[tag], deviceScaleFactor: 2 });
  page.on('pageerror', e => errs.push(e.message));
  await seedSave(page, { config: { seats: seats.map(x => ({ kind: x.kind, name: x.name })) }, state: s, undo: null, savedAt: Date.now() });
  await page.goto(`${base}/?intro=0&sound=off&botDelay=20`);
  await (await page.waitForSelector('[data-home="resume"]', { timeout: 15000 })).click();
  await page.waitForSelector('.app.game', { timeout: 15000 });
  const t0 = Date.now();
  while (!(await page.$('[data-next-round]')) && Date.now() - t0 < 200000) {
    const sk = await page.$('[data-reckon-skip]');
    if (sk) { await sk.click().catch(() => {}); await page.waitForTimeout(150); continue; }
    if (await answerChoice(page, { timeout: 600, avoid: [/^release:/] }).catch(() => null)) continue;
    let ok = false;
    for (const el of await page.$$('.slot.can, [data-option]:not([disabled])')) {
      const id = await el.getAttribute('data-option').catch(() => null);
      if (id && (id.startsWith('toggle:') || id === 'back' || id.startsWith('release:'))) continue;
      try { await el.click({ timeout: 600 }); ok = true; break; } catch { /* gone */ }
    }
    if (!ok) await page.waitForTimeout(80);
  }
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${OUT}/${tag}.png` });
  const card = await page.$('.dialog.roundend');
  if (card) await card.screenshot({ path: `${OUT}/${tag}-card.png` });
  else console.log('NO CARD', tag);
  // the same card at phone width (the table itself isn't laid out for phones yet; the card is)
  await page.setViewportSize(VP.phone);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/${tag}-as-phone.png` });
  await page.close();
}
console.log('ERRS', errs.join(' ; ') || 'none');
await browser.close();
