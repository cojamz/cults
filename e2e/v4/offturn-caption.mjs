// A rival's round-start card never takes the headline over your own turn (Cory, Nov 9: "bot got frozen after Seat
// Filler triggered"). P2's Seat Filler traded itself at round II's start while Cory picked first; the story card stayed
// up into his turn, so the headline kept reading "P2, round start ···", dotted as if P2 were still thinking, and the
// table looked frozen though it was waiting on him. Here: bots play round I to its last move (seeded), P2 holds Seat
// Filler, you hold the fewest followers (so you pick first in round II); you finish round I, start round II, and once
// your turn is on screen the headline must be yours.
import { browserPath, launchBrowser } from './lib/browser.mjs';
import { seedSave } from './lib/seed.mjs';
import { buildStamp } from './lib/stamp.mjs';
import { takeCard } from './lib/take.mjs';
import { createGame, applyMove, chooseBotMove } from '../../src/engine/v4/index.js';
import { seededRandom } from '../../src/engine/v4/rng.js';
const base = (process.env.V4_URL || 'http://localhost:5325').replace(/\/$/, '');
const out = `${process.env.V4_SHOTS || '/tmp/cults-offturn-caption'}`;

function fixture(seed = 7) {
  const seats = ['You', 'P2', 'P3', 'P4'].map(name => ({ name, kind: 'bot' }));
  let s = createGame({ seats, seed, quadrants: ['red', 'purple', 'thieves', 'echo'] });
  const rand = seededRandom(seed);
  for (let g = 0; g < 600 && s.pending; g++) {
    const n = applyMove(s, chooseBotMove(s, rand));
    if (s.round === 1 && n.round === 2) break;
    s = n;
  }
  s = JSON.parse(JSON.stringify(s));
  if (s.round !== 1 || !s.pending) throw Error(`fixture: no last move of round I (round ${s.round})`);
  if (!s.players[1].members.some(u => s.cards[u].def === 'red.seatfiller')) s.players[1].members.push(takeCard(s, 'red.seatfiller'));
  s.players[0].bonus = -5; // fewest followers: you pick first in round II
  s.players[0].kind = 'human';
  if (s.pending.player !== 0) throw Error(`fixture: round I's last move is P${s.pending.player + 1}'s, not yours`);
  s.build = buildStamp();
  return { config: { seats: s.players.map((p, i) => ({ name: p.name, kind: i ? 'bot' : 'human' })), speed: 'steady' }, state: s, undo: null, savedAt: Date.now() };
}

const browser = await launchBrowser({ executablePath: browserPath });
let page;
try {
  page = await (await browser.newContext({ viewport: { width: 1270, height: 700 } })).newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await seedSave(page, fixture());
  await page.goto(`${base}/?intro=0&speed=steady`);
  await page.locator('[data-home="resume"]').click();
  if (await page.locator('[data-handoff]').isVisible().catch(() => false)) await page.locator('[data-handoff]').click();
  // round I's last move is yours (a follower payment the screen confirms itself when it has one plan); answer it if asked
  await page.waitForTimeout(1500);
  const opts = await page.locator('[data-option]').evaluateAll(els => els.map(e => e.getAttribute('data-option')));
  const first = opts.find(o => o.startsWith('pay:')) || opts.find(o => o === 'done' || o === 'pass');
  if (first) await page.locator(`[data-option="${first}"]`).first().click();
  await page.getByRole('button', { name: /Start round II/ }).click({ timeout: 30000 });
  // Seat Filler asks P2 at round II's start; then it's your move, on screen once the table has caught up
  let sawSeatFiller = false;
  const t0 = Date.now();
  for (;;) {
    if (Date.now() - t0 > 60000) throw Error('your round II turn never reached the screen');
    await page.waitForTimeout(250);
    const w = await page.evaluate(() => {
      const s = JSON.parse(localStorage.getItem('patrons.v4.local') || 'null')?.state;
      const tw = window.__tableWait ? window.__tableWait() : null;
      return { round: s?.round, pend: s?.pending?.player, log: (s?.log || []).slice(-30).join('\n'), idle: !!tw && !tw.queue && tw.waiting == null && tw.timer == null };
    });
    if (/Seat Filler goes to the shop|keeps Seat Filler/.test(w.log)) sawSeatFiller = true;
    if (w.round === 2 && w.pend === 0 && w.idle && await page.locator('[data-option^="slot:"]:not([disabled])').count()) break;
  }
  if (!sawSeatFiller) throw Error('fixture: Seat Filler never acted at round II start');
  await page.waitForTimeout(1500);
  const caption = (await page.locator('[data-prompt]').first().textContent()).trim();
  if (!/^Your turn/.test(caption)) throw Error(`headline over your own turn reads "${caption}", not "Your turn …"`);
  if (errors.length) throw Error(`page errors: ${errors.join(' | ')}`);
  console.log(`offturn-caption: ok ("${caption}")`);
} catch (err) {
  try { const { mkdirSync } = await import('node:fs'); mkdirSync(out, { recursive: true }); await page?.screenshot({ path: `${out}/offturn-caption-fail.png` }); } catch { /* no shot */ }
  console.error(err.message);
  process.exitCode = 1;
} finally {
  await browser.close();
}
