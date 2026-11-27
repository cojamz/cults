// Probe (Spoilsport cameo, Nov 12): a rival holds Spoilsport at round I's end; plays the human's last minion, lets the
// bots finish, and screenshots the Reckoning as Spoilsport pops up on the spoiled contest. Server: $V4_URL; shots: $OUT.
import { mkdirSync } from 'node:fs';
import { browserPath, launchBrowser } from './lib/browser.mjs';
import { createGame, applyMove, chooseBotMove } from '../../src/engine/v4/index.js';
import { seededRandom } from '../../src/engine/v4/rng.js';
import { buildStamp } from './lib/stamp.mjs';
import { seedSave } from './lib/seed.mjs';
import { answerChoice } from './lib/answer.mjs';

const base = process.env.V4_URL, OUT = process.env.OUT || '/tmp/spoil-cameo';
mkdirSync(OUT, { recursive: true });
const seats = Array.from({ length: 4 }, (_, i) => ({ name: `P${i + 1}`, kind: i ? 'bot' : 'human' }));
let s = createGame({ seats, seed: Number(process.env.SEED || 5) });
s.build = buildStamp();
const rand = seededRandom(5);
const atLast = x => x.round === 1 && x.pending && x.pending.kind === 'place' && x.pending.player === 0 && x.players[0].left === 1;
for (let n = 0; n < 20000 && !atLast(s); n++) s = applyMove(s, chooseBotMove(s, rand));
s = JSON.parse(JSON.stringify(s));
const uid = Object.keys(s.cards).map(Number).find(u => s.cards[u].def === 'benders.spoilsports');
if (uid == null) throw new Error('no Spoilsport in this deck');
for (const list of [s.shop, s.pile, ...s.players.map(p => p.members)]) { const k = list.indexOf(uid); if (k >= 0) list.splice(k, 1); }
s.players[1].members.push(uid);
const browser = await launchBrowser({ executablePath: browserPath });
const errs = [];
const page = await browser.newPage({ viewport: { width: 1270, height: 700 }, deviceScaleFactor: 2 });
page.on('pageerror', e => errs.push(e.message));
await seedSave(page, { config: { seats: seats.map(x => ({ kind: x.kind, name: x.name })) }, state: s, undo: null, savedAt: Date.now() });
await page.goto(`${base}/?intro=0&botDelay=20${process.env.SPEED ? `&speed=${process.env.SPEED}` : ''}`);
await (await page.waitForSelector('[data-home="resume"]', { timeout: 15000 })).click();
await page.waitForSelector('.app.game', { timeout: 15000 });
await page.evaluate(() => {
  window.__mehAt = null;
  new MutationObserver(() => { if (!window.__mehAt && document.querySelector('[data-spoil-cameo]')) window.__mehAt = performance.now(); }).observe(document.body, { childList: true, subtree: true });
});
const t0 = Date.now();
let shown = false;
while (Date.now() - t0 < 120000) {
  if (await page.$('[data-spoil-cameo]')) {
    shown = true;
    let at = 0;
    for (const ms of [60, 200, 450]) { await page.waitForTimeout(ms - at); at = ms; await page.screenshot({ path: `${OUT}/cameo-${ms}ms.png` }); }
    await page.waitForSelector('[data-spoil-cameo]', { state: 'detached', timeout: 15000 }).catch(() => {});
    const held = await page.evaluate(() => performance.now() - window.__mehAt);
    console.log('cameo shown for about', Math.round(held), 'ms; sounds asked', JSON.stringify(await page.evaluate(() => window.__patronsSounds)));
    break;
  }
  if (await page.$('[data-next-round]')) { console.log('round ended with no cameo'); break; }
  if (await page.$('.lt-reckon')) { await page.waitForTimeout(40); continue; }
  if (await answerChoice(page, { timeout: 600, avoid: [/^release:/] }).catch(() => null)) continue;
  let ok = false;
  for (const el of await page.$$('.slot.can, [data-option]:not([disabled])')) {
    const id = await el.getAttribute('data-option').catch(() => null);
    if (id && (id.startsWith('toggle:') || id === 'back' || id.startsWith('release:'))) continue;
    try { await el.click({ timeout: 600 }); ok = true; break; } catch { /* gone */ }
  }
  if (!ok) await page.waitForTimeout(80);
}
console.log('CAMEO', shown ? 'shown' : 'missing', 'ERRS', errs.join(' ; ') || 'none');
await browser.close();
process.exit(shown && !errs.length ? 0 : 1);
