// Probe (in-turn follower gains, Nov 12; from probe-roundend-token): a follower buy or a space's followers, caught
// mid-flight. Seeds a game at the human's turn in round $ROUND with plenty of resources, buys the biggest follower rate it
// can on each of your recruit steps, lets bots play on, and catches every follower flight it sees mid-air. Server: $V4_URL; shots: $OUT; $DPR (default 2).
import { mkdirSync } from 'node:fs';
import { browserPath, launchBrowser } from './lib/browser.mjs';
import { createGame, applyMove, chooseBotMove } from '../../src/engine/v4/index.js';
import { seededRandom } from '../../src/engine/v4/rng.js';
import { buildStamp } from './lib/stamp.mjs';
import { seedSave } from './lib/seed.mjs';
import { answerChoice } from './lib/answer.mjs';

const base = process.env.V4_URL, OUT = process.env.OUT || '/tmp/follower-gain';
const ROUND = Number(process.env.ROUND || 2), SHOTS = Number(process.env.SHOTS || 6);
mkdirSync(OUT, { recursive: true });
const seats = Array.from({ length: 4 }, (_, i) => ({ name: `P${i + 1}`, kind: i ? 'bot' : 'human' }));
let s = createGame({ seats, seed: Number(process.env.SEED || 5) });
s.build = buildStamp();
const rand = seededRandom(5);
const atStart = x => x.round === ROUND && x.pending && x.pending.kind === 'place' && x.pending.player === 0;
for (let n = 0; n < 20000 && !atStart(s); n++) s = applyMove(s, chooseBotMove(s, rand));
s = JSON.parse(JSON.stringify(s));
for (const r of s.resources) s.players[0].res[r] = (s.players[0].res[r] || 0) + 6;
const browser = await launchBrowser({ executablePath: browserPath });
const errs = [];
const page = await browser.newPage({ viewport: { width: 1270, height: 700 }, deviceScaleFactor: Number(process.env.DPR || 2) });
page.on('pageerror', e => errs.push(e.message));
await seedSave(page, { config: { seats: seats.map(x => ({ kind: x.kind, name: x.name })) }, state: s, undo: null, savedAt: Date.now() });
await page.goto(`${base}/?intro=0&sound=off&botDelay=20`);
await (await page.waitForSelector('[data-home="resume"]', { timeout: 15000 })).click();
await page.waitForSelector('.app.game', { timeout: 15000 });
await page.waitForTimeout(1200);
// what flies: several follower pieces at once, a bundle, or the new token. An observer in the page freezes every
// animation $MID ms after one starts (window.__fgFrozen), so the shot catches it mid-air; the probe then lets go.
await page.evaluate((mid) => {
  const isMulti = () => document.querySelector('.piece-flight.fol-token') || document.querySelector('.piece-flight.piece-fol .bundle-n')
    || [...document.querySelectorAll('.piece-flight.piece-fol')].filter(e => !e.classList.contains('pay')).length >= 2;
  let armed = true;
  // while frozen, a flight's safety timer can't take it off the page (it goes when the probe lets go)
  const rm = Element.prototype.remove, held = [];
  // and no timer runs while frozen (a flight's safety timer would take it down under the shot)
  const st = window.setTimeout.bind(window);
  window.setTimeout = (fn, ms, ...args) => st(function go() { if (window.__fgFrozen) return st(go, 30); if (typeof fn === 'function') fn(...args); }, ms);
  Element.prototype.remove = function () { if (window.__fgFrozen && this.classList && this.classList.contains('piece-flight')) { held.push(this); return; } return rm.call(this); };
  window.__fgThaw = () => { window.__fgFrozen = false; for (const a of document.getAnimations()) try { a.play(); } catch { /* gone */ } held.splice(0).forEach(e => rm.call(e)); };
  window.__fgArm = () => { armed = true; };
  new MutationObserver(() => {
    if (!armed || !isMulti()) return;
    armed = false;
    setTimeout(() => { for (const a of document.getAnimations()) try { a.pause(); } catch { /* gone */ } window.__fgFrozen = true; }, mid);
  }).observe(document.body, { childList: true });
}, Number(process.env.MID || 120));
let shot = 0;
const watch = async (ms) => {
  const t0 = Date.now();
  while (Date.now() - t0 < ms && shot < SHOTS) {
    if (await page.evaluate(() => !!window.__fgFrozen)) {
      await page.screenshot({ path: `${OUT}/fly${shot}.png` });
      console.log('shot', shot, await page.evaluate(() => [...document.querySelectorAll('.piece-flight.piece-fol, .piece-flight.fol-token')].map(e => { const r = e.getBoundingClientRect(), cs = getComputedStyle(e); return e.className + ' :: ' + e.textContent + ' @' + [r.left, r.top, r.width, r.height].map(Math.round) + ' op' + cs.opacity + ' ' + cs.transform + ' anims:' + e.getAnimations().map(a => a.playState + ':' + Math.round(a.currentTime)).join(','); }).join(' | ')));
      shot++;
      await page.evaluate(() => window.__fgThaw());
      await page.waitForTimeout(900);
      await page.evaluate(() => window.__fgArm());
    } else await page.waitForTimeout(20);
  }
};
const t0 = Date.now();
while (shot < SHOTS && Date.now() - t0 < 120000) {
  await watch(400);
  // on your own recruit step, buy the biggest follower rate you can afford
  const rate = (await page.$$('.lt-rate:not([disabled]):not([aria-disabled="true"])')).pop();
  if (rate && /recruit a member or followers/.test(await page.textContent('body'))) { await rate.click({ timeout: 600 }).catch(() => {}); await watch(600); }
  if (await answerChoice(page, { timeout: 300, avoid: [/^release:/] }).catch(() => null)) continue;
  for (const el of await page.$$('.slot.can, [data-option]:not([disabled])')) {
    const id = await el.getAttribute('data-option').catch(() => null);
    if (id && (id.startsWith('toggle:') || id === 'back' || id.startsWith('release:'))) continue;
    try { await el.click({ timeout: 600 }); break; } catch { /* gone */ }
  }
}
console.log('SHOTS', shot, 'ERRS', errs.join(' ; ') || 'none');
await browser.close();
