import { browserPath, launchBrowser } from './lib/browser.mjs';
// E2E dialogs gate (dialogs pod, 2026-10-15), at laptop size (1270×700):
//  (p1) Paying: the coins lifted off your stacks pay the engine's price (memberPrice), shown once (stacks + Pay, no
//       second row), the printed cost reads as on the card, the default way
//       is already in (Pay names it), a stack click swaps a coin in (Pay moves to a legal way with one more of that
//       color) and the coins visibly move, and Enter pays.
//  (p2) A follower buy uses the same sheet: the lifted coins add up to what the tier costs.
//  (p3) Only one way to pay: no sheet, it pays at once, and the coins fly from your stack.
//  (p4) Wave-2 testers A#4, B#2: only one way to pay, but it gives up a lead you hold (3 gold leading Most gold, the
//       price takes all 3): the sheet asks (with no lost-lead prose since Cory's #32, 2026-10-17), and Cancel goes back
//       with nothing paid.
//  ((g1)-(g3), Good Deed on the gift card, went with Good Deed in Silver's Oct 31 rework.)
//  (c1) Polish's color (Goody Bags' until Silver's Oct 31 rework) and (c2) Cheap Seats' "pay 1 for 1 follower" on the card at the space (Cory, 2026-10-15:
//       choices come to where you act), not on your seat's stacks: the engine's colors and ids, Cheap Seats' counts,
//       "N left" and its Done/Trade nothing; a pick answers, Cheap Seats' card stays at the space until Done.
//  (w1) Promote on the same card (Even Swap's until the round I rework): your members are the first row; one picked, the shop members it pairs with light
//       (each opens its own card when pointed at: w3a A3); a click swaps.
//  (w2) Swap Sides in round III with a crowd (blind panel: "Theirs" ran off the card over the shop cards): the card
//       stays inside the wheel's region and clear of the shop, nothing in it draws outside it, every row shows whole
//       with nothing to scroll to (live panel round 1: the bottom rows were cut), each member shows its printed cost,
//       and the last rival member swaps.
//  (s0) Wave f4: the "since your last turn" strip with nothing to tell says nothing ("No moves since yours yet." went),
//       and no strip line is ever clamped with an ellipsis ("took your Tax…").
//  (k1) The keyboard list: absent for the mouse; Tab from the caption opens it with every pick.
//  Wave-2 tester B: (s8) a recruit outside the buy step (Talent Scout's) pays through the sheet; (t1) Talent Scout's top 5 as cards; ((y1) Your Call
//  went with White's rework); (r1) Release stays gone (no release anywhere, Cory 2026-10-17); (d1) Double Agent's forced swap explained.
// Saves: e2e/v4/lib/dialog-save.mjs. Server: $V4_URL if set, else its own `npx vite` on a free port from 5390.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { createServer } from 'node:net';
import { paySave, swapSave, swapCrowdSave, momentSave, colorSave } from './lib/dialog-save.mjs';
import { stealSave } from './lib/steal-save.mjs';
import { memberPrice, TIERS, cardDef } from '../../src/engine/v4/index.js';
import { costParts } from '../../src/v4/format.js';
import { seedSave } from './lib/seed.mjs';
import { HOVER_DELAY_MS } from '../../src/v4/game/hoverDelay.js';

const SHOTS = (process.env.V4_SHOTS || '/tmp/patrons-shots/v4') + '/pay';
mkdirSync(SHOTS, { recursive: true });
let server = null;
let base = process.env.V4_URL;
if (!base) {
  const free = port => new Promise(res => { const srv = createServer().once('error', () => res(false)).once('listening', () => srv.close(() => res(true))).listen(port, 'localhost'); });
  let port = 5390;
  while (!(await free(port))) port++;
  base = `http://localhost:${port}`;
  server = spawn('npx', ['vite', '--port', String(port), '--strictPort'], { stdio: 'pipe' });
  let up = false;
  for (let k = 0; k < 120 && !up; k++) { await new Promise(r => setTimeout(r, 500)); up = await fetch(base).then(r => r.ok, () => false); }
  if (!up) { server.kill(); console.error('vite did not start'); process.exit(1); }
}
const errors = [];
const browser = await launchBrowser({ executablePath: browserPath });

async function open(tag, save, ready) {
  const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 } });
  const page = await ctx.newPage();
  page.on('pageerror', e => errors.push(`[${tag}] pageerror: ${e.message}`));
  await seedSave(page, save); // before the app runs (lib/seed.mjs)
  // at Steady, the speed this gate's waits were written for (the default became Relaxed, Cory 2026-10-16: a sheet or
  // card stands until its chain has played, about 2.3x longer there)
  await page.goto(`${base}/?intro=0&speed=steady`, { timeout: 90000 });
  await page.waitForSelector('[data-home="resume"]', { timeout: 60000 });
  await page.click('[data-home="resume"]');
  await page.waitForSelector(ready, { timeout: 60000 });
  await page.mouse.move(640, 695);
  await page.waitForTimeout(300);
  return { ctx, page };
}
const moves = page => page.$eval('.app.game', e => Number(e.dataset.moves));
// the answer's chain has played (a card that asked stands, its buttons off, until then: every move plays out whole
// before the next view, decisions 2026-10-15 22:40), then two frames for the view to move on
const chainDone = page => page.waitForFunction(() => !document.querySelector('.app.game[data-chain="1"]'), null, { timeout: 8000 }).then(() => page.waitForTimeout(120), () => {});
const lastMove = page => page.evaluate(() => { try { return (JSON.parse(window.patronsRecord()).moves || []).slice(-1).map(m => m[1])[0]; } catch { return null; } });
async function click(page, sel) {
  const el = await page.waitForSelector(sel, { timeout: 8000 });
  const b = await el.boundingBox();
  await page.mouse.click(b.x + b.width / 2, b.y + b.height / 2);
}
const vec = (res, id) => Object.fromEntries(id.slice(4).split('-').map((n, i) => [res[i], Number(n)]));

try {
  // (p1) a member: Prospector, 3 gold + 2 any (the color cost, Nov 2), with several ways to pay
  {
    const save = paySave();
    const st = save.state, p = st.players[0], res = st.resources;
    const { ctx, page } = await open('p1', save, '.dialog.pay');
    const price = memberPrice(st, p, st.pending.uid);
    const lifted = await page.$$eval('.dialog.pay .ps-out .ps-coin', els => els.length);
    if (lifted !== price.total) errors.push(`(p1) ${lifted} coins lifted for a price of ${price.total}`);
    const liftedColor = await page.$$eval(`.dialog.pay .pay-row.paying [data-pay-coin="${price.color}"] .ps-coin`, els => els.length);
    if (price.color && liftedColor < price.colored) errors.push(`(p1) ${liftedColor} ${price.color} lifted, the engine asks ${price.colored}`);
    if (await page.$('.dialog.pay [data-socket], .dialog.pay .pay-sockets')) errors.push('(p1) the payment shows a second row of coins');
    const printed = costParts(cardDef(st, st.pending.uid), res).map(c => `${c.n}${c.color}`).join(' ');
    const shown = await page.$eval('[data-pay-cost]', e => e.dataset.payCost);
    if (shown !== printed) errors.push(`(p1) the cost reads "${shown}", the card prints "${printed}"`);
    const ways = st.pending.options.filter(o => o.kind === 'pay');
    const def = ways.find(o => o.default);
    if (await page.$eval('.pay-go', e => e.dataset.option) !== def.id) errors.push('(p1) Pay does not start on the suggested way');
    const coins = await page.$$eval('.dialog.pay .ps-out .ps-coin', els => els.length);
    if (coins !== res.reduce((n, r) => n + def.spend[r], 0)) errors.push(`(p1) ${coins} coins in the cost for the suggested ${def.label}`);
    if (!(await page.evaluate(() => document.querySelector('.dialog.pay').contains(document.activeElement)))) errors.push('(p1) the pay sheet does not hold focus');
    await page.screenshot({ path: `${SHOTS}/p1-sheet.png` });
    // a stack click: one more of that color goes in, a coin moves
    const r = res.find(c => p.res[c] > def.spend[c] && ways.some(o => o.spend[c] > def.spend[c]));
    await page.evaluate(() => { window.__payAnims = 0; const t = () => { window.__payAnims = Math.max(window.__payAnims, document.querySelectorAll('.dialog.pay [data-coin]').length && document.getAnimations().filter(a => a.effect && a.effect.target && a.effect.target.closest && a.effect.target.closest('.dialog.pay')).length); if (document.querySelector('.dialog.pay')) requestAnimationFrame(t); }; requestAnimationFrame(t); });
    await click(page, `[data-pay-add="${r}"]`);
    await page.waitForTimeout(120);
    const now = await page.$eval('.pay-go', e => e.dataset.option);
    if (!ways.some(o => o.id === now) || vec(res, now)[r] !== def.spend[r] + 1) errors.push(`(p1) clicking ${r} left Pay on ${now}`);
    if (!(await page.evaluate(() => window.__payAnims))) errors.push('(p1) no coin moved when a stack was clicked');
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${SHOTS}/p1-swapped.png` });
    const m0 = await moves(page);
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => !document.querySelector('.dialog.pay'), null, { timeout: 4000 }).catch(() => errors.push('(p1) Enter did not pay'));
    await page.waitForFunction(m => Number(document.querySelector('.app.game').dataset.moves) > m, m0, { timeout: 4000 }).catch(() => {});
    const rec = await lastMove(page);
    if (rec && rec !== now) errors.push(`(p1) paid ${rec}, the sheet showed ${now}`);
    await ctx.close();
  }
  // (p2) a follower buy: 4 → 3
  {
    const save = paySave({ tier: 'mid', res: { gold: 2, red: 3, blue: 1, green: 2 } });
    const { ctx, page } = await open('p2', save, '.dialog.pay');
    const n = await page.$$eval('.dialog.pay .ps-out .ps-coin', els => els.length);
    const want = TIERS.find(t => t.key === 'mid').cost;
    if (n !== want) errors.push(`(p2) ${n} coins lifted for a ${want}-cost follower buy`);
    await page.screenshot({ path: `${SHOTS}/p2-followers.png` });
    await ctx.close();
  }
  // (p3) one way to pay: straight through, coins flying
  {
    // the rivals hold more gold and green, so the one way gives up no lead (p4: the one way that does asks)
    const save = paySave({ res: { gold: 3, red: 0, blue: 0, green: 2 }, rivals: { gold: 4, green: 4 } });
    if (save.state.pending.options.filter(o => o.kind === 'pay').length !== 1) errors.push('(p3) the save has more than one way to pay');
    if (save.state.pending.options.some(o => o.breaks)) errors.push('(p3) the one way gives up a lead (the save should keep every lead)');
    const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 } });
    const page = await ctx.newPage();
    page.on('pageerror', e => errors.push(`[p3] pageerror: ${e.message}`));
    await seedSave(page, save); // before the app runs (lib/seed.mjs)
    await page.goto(`${base}/?intro=0&speed=steady`, { timeout: 90000 });
    await page.waitForSelector('[data-home="resume"]', { timeout: 60000 });
    await page.evaluate(() => { window.__sheet = 0; window.__payPieces = 0; const t = () => { if (document.querySelector('.dialog.pay')) window.__sheet++; for (const g of document.querySelectorAll('.piece-flight.pay')) if (!g.dataset.seen) { g.dataset.seen = '1'; window.__payPieces++; } requestAnimationFrame(t); }; requestAnimationFrame(t); });
    await page.click('[data-home="resume"]');
    await page.waitForFunction(m => Number(document.querySelector('.app.game')?.dataset.moves) > m, save.state.moves, { timeout: 10000 }).catch(() => errors.push('(p3) a single way to pay was not paid'));
    // the director plays the payment as a beat of its chain (the card lifts first), so wait for the coins themselves
    await page.waitForFunction(() => window.__payPieces >= 5, null, { timeout: 3000 }).catch(() => {});
    if (await page.evaluate(() => window.__sheet)) errors.push('(p3) the pay sheet showed for a single way to pay');
    const flown = await page.evaluate(() => window.__payPieces);
    if (flown < 5) errors.push(`(p3) ${flown} coins flew for a 5-coin payment`);
    await ctx.close();
  }
  // (p4) one way to pay that gives up a lead: the sheet asks, and says why
  {
    const save = paySave({ res: { gold: 3, red: 2, blue: 0, green: 0 }, rivals: { gold: 1 } });
    const ways = save.state.pending.options.filter(o => o.kind === 'pay');
    if (ways.length !== 1 || !(ways[0].breaks || []).includes('gold')) errors.push(`(p4) the save is not one way that gives up the gold lead (${ways.map(o => o.id).join(' ')})`);
    const { ctx, page } = await open('p4', save, '.dialog.pay');
    // the sheet asks, without the lost-lead prose (Cory, 2026-10-17 #32: "You lose your tie for silver" is unnecessary)
    const prose = await page.$eval('.dialog.pay', e => (e.querySelector('[data-pay-lead]') ? 'data-pay-lead' : '') + (/gives up your (lead|tie)|lose your (lead|tie)/i.test(e.innerText) ? ' prose' : '')).catch(() => '');
    if (prose) errors.push(`(p4) the sheet still carries the lost-lead line (${prose.trim()})`);
    if (await page.$eval('.pay-go', e => e.dataset.option).catch(() => null) !== ways[0].id) errors.push('(p4) Pay is not on the one way');
    await page.screenshot({ path: `${SHOTS}/p4-lead.png` });
    if (await moves(page) !== save.state.moves) errors.push('(p4) something was paid before the player answered');
    await click(page, '.pay-cancel');
    await page.waitForFunction(() => !document.querySelector('.dialog.pay'), null, { timeout: 4000 }).catch(() => errors.push('(p4) Cancel left the sheet up'));
    await page.waitForTimeout(300);
    const left = await page.$eval('.lt-seat[data-pid="0"] .cs-stack[data-res="gold"] b', e => Number(e.textContent)).catch(() => NaN);
    if (left !== 3) errors.push(`(p4) after Cancel P1 holds ${left} gold, want 3`);
    await ctx.close();
  }
  // ((g1) and (g2), Good Deed's gift card and lit seats, went with Good Deed: Silver's rework cut it, Cory Oct 31)
  // (w2) a crowded round-III Swap Sides: everything stays on the card
  {
    const save = swapCrowdSave();
    const st = save.state;
    const { ctx, page } = await open('w2', save, '.lt-wheel .gift-card[data-gift="trade"]');
    const contained = () => page.evaluate(() => {
      const card = document.querySelector('.gift-card'), c = card.getBoundingClientRect();
      const w = document.querySelector('.lt-wheel').getBoundingClientRect();
      const shop = [...document.querySelectorAll('.lt-card.card, .lt-deck, .lt-rates')].map(e => e.getBoundingClientRect()).filter(b => b.width);
      const hitShop = shop.filter(b => Math.min(b.right, c.right) - Math.max(b.left, c.left) > 1 && Math.min(b.bottom, c.bottom) - Math.max(b.top, c.top) > 1).length;
      // what the eye sees just outside the card's edges is never part of the card
      const probes = [];
      for (let y = c.top + 8; y < c.bottom; y += 24) probes.push([c.right + 3, y], [c.left - 3, y]);
      for (let x = c.left + 8; x < c.right; x += 24) probes.push([x, c.bottom + 3]);
      const leak = probes.filter(([x, y]) => x >= 0 && y >= 0 && x < innerWidth && y < innerHeight).filter(([x, y]) => { const e = document.elementFromPoint(x, y); return e && e.closest('.gift-card'); }).length;
      const sc = card.querySelector('.gc-row[data-row="2"] > .gc-items');
      return { inWheel: c.left >= w.left - 1 && c.right <= w.right + 1 && c.top >= w.top - 1 && c.bottom <= w.bottom + 1, hitShop, leak,
        wide: card.scrollWidth > card.clientWidth + 1 || (sc && sc.scrollWidth > sc.clientWidth + 1), box: [c.left, c.top, c.right, c.bottom].map(Math.round) };
    });
    const a = await contained();
    if (!a.inWheel) errors.push(`(w2) the crowded swap card leaves the wheel's region ${JSON.stringify(a.box)}`);
    if (a.hitShop) errors.push(`(w2) the crowded swap card covers ${a.hitShop} shop card(s)`);
    if (a.leak) errors.push(`(w2) the crowded swap card draws outside its own edges at ${a.leak} point(s)`);
    if (a.wide) errors.push('(w2) the crowded swap card runs wider than itself (a row that doesn\'t wrap)');
    // live panel round 1: every row shows whole (nothing cut off at the card's foot, nothing to scroll to), and every
    // member shows what it costs (Even Swap is "equal cost", Swap Sides "no more than yours +2")
    await page.screenshot({ path: `${SHOTS}/w2-open.png` });
    const whole = await page.evaluate(() => {
      const card = document.querySelector('.gift-card'), c = card.getBoundingClientRect();
      const sc = card.querySelector('.gc-row[data-row="2"] > .gc-items');
      const tiles = [...card.querySelectorAll('.gc-member')];
      const cut = tiles.filter(t => { const r = t.getBoundingClientRect(); return r.top < c.top - 1 || r.bottom > c.bottom + 1 || r.left < c.left - 1 || r.right > c.right + 1; }).length;
      return { over: sc ? sc.scrollHeight - sc.clientHeight : 0, more: sc ? sc.dataset.more || null : null, cut, tiles: tiles.length,
        costs: tiles.map(t => [Number(t.dataset.uid), Number(t.querySelector('.gc-cost')?.dataset.cost)]) };
    });
    if (whole.over > 1 || whole.more) errors.push(`(w2) the crowded swap card hides rows behind a scroll (${whole.over}px, fade ${whole.more})`);
    if (whole.cut) errors.push(`(w2) ${whole.cut} of ${whole.tiles} members are cut by the card's edge`);
    const { defById } = await import('../../src/engine/v4/index.js');
    for (const [uid, c] of whole.costs) { const d = defById(st.cards[uid].def); if (c !== d.s + d.w) errors.push(`(w2) ${d.name} shows cost ${Number.isNaN(c) ? 'none' : c}, printed ${d.s + d.w}`); }
    const mine = await page.$$eval('.gift-card .gc-row[data-row="1"] .gc-member:not([disabled])', els => els.map(e => Number(e.dataset.uid)));
    await click(page, `.gift-card .gc-row[data-row="1"] .gc-member[data-uid="${mine[0]}"]`);
    await page.mouse.move(4, 690); await page.waitForTimeout(300);
    const b = await contained();
    if (b.leak || b.wide || !b.inWheel || b.hitShop) errors.push(`(w2) once yours is picked, the card spills: ${JSON.stringify(b)}`);
    await page.screenshot({ path: `${SHOTS}/w2-crowd.png` });
    // the last live rival member, scrolled into view inside the card, swaps
    const last = page.locator('.gift-card .gc-row[data-row="2"] .gc-member:not([disabled])').last();
    const want = await last.getAttribute('data-option');
    await last.scrollIntoViewIfNeeded();
    const lb = await last.boundingBox();
    const cb = await page.locator('.gift-card').boundingBox();
    if (!lb || lb.y < cb.y || lb.y + lb.height > cb.y + cb.height + 1) errors.push('(w2) the last rival member can\'t be brought into view inside the card');
    else {
      await page.mouse.click(lb.x + lb.width / 2, lb.y + lb.height / 2);
      await page.waitForFunction(m => Number(document.querySelector('.app.game').dataset.moves) > m, st.moves, { timeout: 6000 }).catch(() => errors.push('(w2) clicking a scrolled-to rival member did not swap'));
      const rec = await lastMove(page);
      if (rec && rec !== want) errors.push(`(w2) recorded ${rec}, clicked ${want}`);
    }
    // (s0) the strip: nothing to tell says nothing; no line clamped
    const strip = await page.evaluate(() => {
      const s = document.querySelector('[data-since]');
      if (!s) return null;
      const rows = [...s.querySelectorAll('.since-row')];
      return { rows: rows.length, text: s.textContent, clamped: rows.filter(r => { const cs = getComputedStyle(r); return (cs.webkitLineClamp && cs.webkitLineClamp !== 'none') || cs.textOverflow === 'ellipsis'; }).length };
    });
    if (strip && !strip.rows && /No moves|Since your last turn/i.test(strip.text)) errors.push(`(s0) the strip with nothing to tell still reads "${strip.text.trim()}"`);
    if (strip && strip.clamped) errors.push(`(s0) ${strip.clamped} strip line(s) clamped with an ellipsis`);
    await ctx.close();
  }
  // ((g3) went with Good Deed: Silver's rework cut it, Cory Oct 31; no space gives a color to a rival you pick)
  // (c1) Goody Bags' color opens on the card at the space (Cory, 2026-10-15: choices come to where you act), never on
  // your seat's stacks ~500 px away: one row of the engine's colors, each the engine's own id. (c2, Cheap Seats' old
  // "pay 1 for 1 follower" card, went with that rule: Cheap Seats is now "+1 follower per 3 white you hold", no pick.)
  for (const [tag, space] of [['c1', 'polish']]) {
    const save = colorSave(space);
    const st = save.state, slot = st.players[0].lastSlot && st.players[0].lastSlot.key;
    const { ctx, page } = await open(tag, save, '.lt-wheel .gift-card[data-gift="split"]');
    await page.waitForTimeout(300);
    const where = await page.evaluate(key => {
      const c = document.querySelector('.gift-card').getBoundingClientRect();
      const s = key && document.querySelector(`.lt-wheel [data-slot="${key}"]`);
      const r = s && s.getBoundingClientRect();
      return { gap: r ? Math.max(0, r.left - c.right, c.left - r.right) + Math.max(0, r.top - c.bottom, c.top - r.bottom) : null, placed: document.querySelector('.gift-card').classList.contains('at-space') };
    }, slot);
    if (!where.placed || where.gap == null || where.gap > 40) errors.push(`(${tag}) the card is not beside the space just taken (${slot}: ${where.gap == null ? 'not found' : `${Math.round(where.gap)}px away`})`);
    if (await page.$('.lt-seat .cs-stack.pick-on, .lt-seat .cs-pick-seat, .seat-pick.docked')) errors.push(`(${tag}) the seats or the header still take the pick`);
    const chips = await page.$$eval('.pick-key, .prompt.choice .opts .btn', els => els.filter(e => e.getBoundingClientRect().width > 2).length);
    if (chips) errors.push(`(${tag}) ${chips} chips show`);
    // Polish's 4 coins are picked whole on the split card, like a payment (Harvest's picker, Cory Nov 4: "all the other
    // purchasing selectors are solid and elegant"): a stack per engine color, Take answers the engine's four questions
    const want = st.pending.options.filter(o => o.target).map(o => o.target.res);
    const stacks = await page.$$eval('.gift-card [data-split-stack]', els => els.map(e => e.dataset.splitStack));
    if (stacks.slice().sort().join() !== want.slice().sort().join()) errors.push(`(${tag}) the card's colors ${stacks.join(' ')} ≠ the engine's ${want.join(' ')}`);
    const title = await page.$eval('.gift-card .gc-title', e => e.textContent.replace(/\s+/g, ' ').trim()).catch(() => '');
    const head = await page.$eval('.gift-card .gc-what', e => e.textContent.replace(/\s+/g, ' ').trim()).catch(() => '');
    await page.screenshot({ path: `${SHOTS}/${tag}-card.png` });
    if (title !== 'Polish' || head !== '+4 in colors you choose') errors.push(`(c1) the card reads "${title}" / "${head}"`);
    const pick = want.includes('red') ? 'red' : want[0];
    const before = st.players[0].res[pick] || 0;
    for (let k = 0; k < 4; k++) await click(page, `.gift-card [data-split-add="${pick}"]`);
    const plan = await page.$eval('[data-split-take]', e => e.dataset.splitTake).catch(() => '');
    if (plan !== `4${pick}`) errors.push(`(c1) four clicks on ${pick} planned "${plan}"`);
    await click(page, '.gift-card [data-split-take]');
    await page.waitForFunction(m => Number(document.querySelector('.app.game').dataset.moves) >= m + 4, st.moves, { timeout: 10000 }).catch(() => errors.push('(c1) Take did not answer all four'));
    let got = NaN;
    for (let k = 0; k < 40 && got !== before + 4; k++) { got = await page.$eval(`.lt-seat[data-pid="0"] .cs-stack[data-res="${pick}"] b`, e => Number(e.textContent)).catch(() => NaN); await page.waitForTimeout(100); }
    if (got !== before + 4) errors.push(`(c1) you hold ${got} ${pick}, want ${before + 4}`);
    await ctx.close();
  }
  // (w1) Promote (Even Swap until the round I rework, Cory Oct 27): yours, then the shop's, on the same card
  {
    const save = swapSave('hireup');
    const st = save.state;
    const { ctx, page } = await open('w1', save, '.lt-wheel .gift-card[data-gift="trade"]');
    const head = await page.$eval('.gift-card .gc-what', e => e.textContent.replace(/\s+/g, ' ').trim());
    // the heading says the space's rule
    if (head !== 'Promote a member') errors.push(`(w1) the card's heading reads "${head}"`);
    if (await page.$('.lt-seat .cs-member.pick-on')) errors.push('(w1) members light on the seats');
    if (await page.$('.gift-card .gc-row[data-row="2"] .gc-member:not([disabled])')) errors.push('(w1) a rival member is live before yours is picked');
    const mine = await page.$$eval('.gift-card .gc-row[data-row="1"] .gc-member:not([disabled])', els => els.map(e => Number(e.dataset.uid)));
    const engineMine = [...new Set(st.pending.options.filter(o => o.kind === 'trade').map(o => o.value[0]))];
    if (mine.slice().sort().join() !== engineMine.slice().sort().join()) errors.push(`(w1) your members on the card ${mine.join(' ')} ≠ the engine's ${engineMine.join(' ')}`);
    await page.screenshot({ path: `${SHOTS}/w1-step1.png` });
    const a = mine[0];
    await click(page, `.gift-card .gc-row[data-row="1"] .gc-member[data-uid="${a}"]`);
    await page.waitForSelector(`.gift-card .gc-member.chosen[data-uid="${a}"]`, { timeout: 4000 }).catch(() => errors.push('(w1) your picked member does not show as picked'));
    const headB = await page.$eval('.gift-card .gc-what', e => e.textContent.replace(/\s+/g, ' ').trim());
    if (!headB.includes(cardDef(st, a).name)) errors.push(`(w1) step two reads "${headB}"`);
    const want = st.pending.options.filter(o => o.kind === 'trade' && o.value[0] === a).map(o => o.id).sort();
    const lit = await page.$$eval('.gift-card .gc-row[data-row="2"] .gc-member:not([disabled])', els => els.map(e => e.dataset.option).sort());
    if (lit.join() !== want.join()) errors.push(`(w1) live rival members ${lit.join(' ')} ≠ the engine's pairs ${want.join(' ')}`);
    await page.mouse.move(4, 690); await page.waitForTimeout(200);
    await page.screenshot({ path: `${SHOTS}/w1-step2.png` });
    // w3a A3 (blocker): a live member opens its own card when pointed at (name, cost, whose)
    {
      const t = page.locator('.gift-card .gc-row[data-row="2"] .gc-member:not([disabled])').first();
      const bb = await t.boundingBox();
      await page.mouse.move(bb.x + bb.width / 2, bb.y + bb.height / 2); await page.waitForTimeout(500);
      const want1 = await t.getAttribute('data-uid');
      const shown = await page.evaluate(() => document.querySelector('[data-hover-layer][data-open="1"] [data-card-hover]')?.dataset.cardHover || null);
      if (shown !== want1) errors.push(`(w1) pointing at a live rival member opens ${shown ? `card ${shown}` : 'no card'}, not its own (${want1}): a blind swap (w3a A3)`);
      await page.mouse.move(4, 690); await page.waitForTimeout(200);
    }
    await click(page, '.gift-card .gc-row[data-row="2"] .gc-member:not([disabled])');
    await page.waitForFunction(m => Number(document.querySelector('.app.game').dataset.moves) > m, st.moves, { timeout: 6000 }).catch(() => errors.push('(w1) clicking their member did not swap'));
    const rec = await lastMove(page);
    if (rec && !want.includes(rec)) errors.push(`(w1) recorded ${rec}`);
    await ctx.close();
  }
  // (k1) the keyboard list: only for the keyboard
  {
    // (a member pick on the seats: steals now ask on the card by the space, whose own buttons take the keyboard)
    const save = stealSave('shakedown');
    const { ctx, page } = await open('k1', save, '.seat-pick.docked');
    if (await page.$('.pick-key')) errors.push('(k1) the list is in the page before any Tab');
    await page.focus('.seat-pick.docked');
    let opened = false;
    for (let k = 0; k < 6 && !opened; k++) { await page.keyboard.press('Tab'); opened = !!(await page.$('.pick-keys .pick-key')); }
    if (!opened) errors.push('(k1) Tab never opened the list');
    else {
      const n = await page.$$eval('.pick-keys .pick-key', els => els.length);
      const want = save.state.pending.options.filter(o => o.target).length;
      if (n !== want) errors.push(`(k1) ${n} list picks for ${want} options`);
      await page.screenshot({ path: `${SHOTS}/k1-list.png` });
      await page.keyboard.press('Tab');
      const m0 = await moves(page);
      await page.keyboard.press('Enter');
      await page.waitForFunction(m => Number(document.querySelector('.app.game').dataset.moves) > m, m0, { timeout: 4000 }).catch(() => errors.push('(k1) Enter on a list pick did nothing'));
    }
    await ctx.close();
  }
  // (s8) a recruit outside the buy step (Talent Scout's) uses the same sheet: the lifted coins pay its price, Enter pays
  {
    const save = momentSave('scoutpay');
    const st = save.state, w = st.pending.options[0];
    const { ctx, page } = await open('s8', save, '.dialog.pay');
    const n = await page.$$eval('.dialog.pay .ps-out .ps-coin', els => els.length);
    if (n !== memberPrice(st, st.players[0], w.uid, w.how).total) errors.push(`(s8) ${n} coins lifted for Talent Scout's price ${memberPrice(st, st.players[0], w.uid, w.how).total}`);
    if (await page.$('.prompt.choice .opts')) errors.push('(s8) Talent Scout still shows a list of ways to pay');
    await page.screenshot({ path: `${SHOTS}/s8-scout-pay.png` });
    const want = await page.$eval('.pay-go', e => e.dataset.option);
    await page.keyboard.press('Enter');
    await page.waitForFunction(m => Number(document.querySelector('.app.game').dataset.moves) > m, st.moves, { timeout: 5000 }).catch(() => errors.push('(s8) Enter did not pay'));
    const rec = await lastMove(page);
    if (rec && rec !== want) errors.push(`(s8) paid ${rec}, the sheet showed ${want}`);
    await ctx.close();
  }
  // (t1) Talent Scout: the top 5 of the pile as cards in the strip, the ones you can pay for lit; a click picks
  {
    const save = momentSave('scout');
    const st = save.state;
    const { ctx, page } = await open('t1', save, '.lt-shop-cards[data-tray="pile"]');
    const shown = await page.$$eval('.lt-shop .lt-card[data-uid]', els => els.map(e => e.dataset.uid));
    if (shown.join() !== st.pile.slice(0, 5).join()) errors.push(`(t1) the tray shows ${shown.join(' ')}, the top 5 are ${st.pile.slice(0, 5).join(' ')}`);
    const lit = await page.$$eval('.lt-shop .lt-card.lit[data-uid]', els => els.map(e => e.dataset.uid).sort());
    const want = st.pending.options.filter(o => o.kind === 'card').map(o => String(o.value)).sort();
    if (lit.join() !== want.join()) errors.push(`(t1) lit ${lit.join(' ')} ≠ the engine's ${want.join(' ')}`);
    if (await page.$$eval('.lt-shop .lt-card.recede[data-uid]', els => els.length) !== 5 - want.length) errors.push('(t1) the ones you can’t pay for don’t recede');
    // the costs, not a member's own words ("+1 per magenta member" since shop cards print their text)
    const costText = await page.$$eval('.lt-shop .lt-cards .lt-cost, .lt-shop .lt-cards .lt-corner-cost, .lt-shop .lt-cards .cost-now', els => els.map(e => e.innerText).join(' '));
    if (/magenta|any\b/.test(costText)) errors.push('(t1) a cost is written in words');
    await page.screenshot({ path: `${SHOTS}/t1-scout-tray.png` });
    await click(page, `.lt-shop .lt-card.lit[data-uid="${want[0]}"]`);
    await page.waitForFunction(m => Number(document.querySelector('.app.game').dataset.moves) > m, st.moves, { timeout: 5000 }).catch(() => errors.push('(t1) clicking a lit card did nothing'));
    await ctx.close();
  }
  // ((y1) and (y3), Your Call's tiles, went with Your Call: White's rework cut it, Cory 2026-10-22)
  // (r1) Release is gone (Cory, 2026-10-17 #40/#57; rules.release false): in a buy step holding members recruited
  // earlier, nothing offers a release, not the engine, not a member's card, not the header
  {
    const save = momentSave('release');
    const st = save.state;
    const { ctx, page } = await open('r1', save, '.lt[data-phase="buy"][data-yours="1"]');
    if (st.pending.options.some(x => x.kind === 'release' || /^release:/.test(x.id))) errors.push('(r1) the engine offers a release');
    if (await page.$('.lt-prompt .rel-toggle, .lt-prompt .release-row')) errors.push('(r1) the header still has a Release dropdown');
    const uid = st.players[0].members[0];
    await page.hover(`.lt-seat.mine .cs-member[data-uids~="${uid}"] .fig`);
    await page.waitForTimeout(400 + HOVER_DELAY_MS);
    if (!(await page.$('.popover:not([data-prep]) .card-face'))) errors.push('(r1) your member opens no card to check');
    if (await page.$('[data-release]')) errors.push('(r1) a member’s card still offers Release');
    await page.screenshot({ path: `${SHOTS}/r1-no-release.png` });
    await ctx.close();
  }
  // (d1) Double Agent's forced swap: asked on the board, its rule under the headline, its figure marked as asking
  {
    const save = momentSave('doubleagent');
    const { ctx, page } = await open('d1', save, '.seat-pick.docked');
    const how = await page.$eval('.lt-prompt .pick-how', e => e.textContent).catch(() => '');
    if (!/On Recruit:/.test(how)) /* "When recruited:" became "On Recruit:" (Cory, Oct 27) */ errors.push(`(d1) the line under the headline reads "${how}"`);
    if (!(await page.$('.lt-seat.mine .cs-member.pick-asker'))) errors.push('(d1) your Double Agent is not marked as the one asking');
    const lit = await page.$$eval('.lt-seat:not(.mine) .cs-member.pick-on', els => els.length);
    if (!lit) errors.push('(d1) no rival member is lit');
    await page.screenshot({ path: `${SHOTS}/d1-double-agent.png` });
    await ctx.close();
  }
  // (h1) w3a #14: Hustler's long question gives way to what to do ("Hustler: pick a color") and where to click, whole
  {
    const save = paySave({ def: 'gold.hustler', res: { gold: 5, red: 2, blue: 2, green: 3 } }); // (Hustler costs 5 gold since the color cost, Nov 2; cut from the deck, so minted)
    const { applyMove } = await import('../../src/engine/v4/index.js');
    const way = save.state.pending.options.find(o => o.default) || save.state.pending.options.find(o => o.kind === 'pay');
    save.state = applyMove(save.state, { player: 0, option: way.id });
    const { ctx, page } = await open('h1', save, '.seat-pick.docked');
    const got = await page.evaluate(() => {
      const sub = document.querySelector('.lt-prompt .pick-how');
      return { cap: document.querySelector('.seat-pick.docked .pick-cap').textContent.replace(/\s+/g, ' ').trim(), how: sub ? sub.textContent : '', cut: sub ? sub.scrollWidth > sub.clientWidth + 1 : true };
    });
    if (got.cap !== 'Hustler: pick a color') errors.push(`(h1) the caption reads "${got.cap}"`);
    if (!/^Click one of your lit stacks/.test(got.how) || got.cut) errors.push(`(h1) the line under it reads "${got.how}"${got.cut ? ' (cut)' : ''}`);
    await ctx.close();
  }
  // (a1) Wave-2 tester A: an instant buy flies its coins and closes the hover. The hover says the cost and nothing else
  //      about paying (Cory, 03:40: cut "You pay"; info.mjs (q) holds it too)
  {
    const save = paySave({ res: { gold: 3, red: 0, blue: 0, green: 2 }, rivals: { gold: 4, green: 4 } }); // (no lead lost: p3)
    const st = save.state;
    st.queue[0] = { t: 'buy', p: 0 }; // back to the buy step: the card is clicked from the shop
    const { resume } = await import('../../src/engine/v4/core.js');
    resume(st);
    const uid = st.shop.find(u => st.cards[u].def === 'gold.prospector');
    const { ctx, page } = await open('a1', save, `.lt-shop .card[data-uid="${uid}"]`);
    await page.hover(`.lt-shop .card[data-uid="${uid}"]`);
    await page.waitForSelector(`[data-hover-layer][data-open="1"] [data-card-hover="${uid}"]`, { timeout: 3000 }).catch(() => errors.push('(a1) the card opened no hover'));
    const said = await page.evaluate(() => (document.querySelector('[data-hover-layer][data-open="1"]')?.innerText.match(/You pay|^Pays |Choose how to pay/m) || [])[0]);
    if (said) errors.push(`(a1) the hover says "${said}" (Cory: the cost and nothing else about payment)`);
    await page.evaluate(() => { window.__a1 = 0; const t = () => { for (const g of document.querySelectorAll('.piece-flight.pay')) if (!g.dataset.a1) { g.dataset.a1 = '1'; window.__a1++; } requestAnimationFrame(t); }; requestAnimationFrame(t); });
    const box = await (await page.$(`.lt-shop .card[data-uid="${uid}"]`)).boundingBox();
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    await page.waitForFunction(m => Number(document.querySelector('.app.game').dataset.moves) > m, st.moves, { timeout: 5000 }).catch(() => errors.push('(a1) the one-way card did not buy at once'));
    if (await page.$('.dialog.pay')) errors.push('(a1) a one-way card opened the pay sheet');
    if (!(await page.waitForFunction(() => window.__a1 > 0, null, { timeout: 2500 }).then(() => true, () => false))) errors.push('(a1) no coins flew on the instant buy');
    if (await page.$('[data-hover-layer][data-open="1"]')) errors.push('(a1) the hover stayed open after the buy');
    await ctx.close();
  }
} catch (e) {
  errors.push(`crashed: ${e.stack || e.message}`);
} finally {
  await browser.close();
  if (server) server.kill();
}
if (errors.length) { console.error(`dialogs gate: ${errors.length} problem(s)\n - ${errors.join('\n - ')}`); process.exit(1); }
console.log('dialogs gate: ok (pay sheet, follower buy, single way, Good Deed (card and seats), Goody Bags and Cheap Seats on the card, Promote, keyboard list, Talent Scout pay, Talent Scout tray, no Release, Double Agent, Hustler)');
