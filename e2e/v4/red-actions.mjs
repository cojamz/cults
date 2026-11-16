// Focused real clicks: Red swaps can involve two rivals or the shop; Green copying Promote asks afresh (Echo copies
// the rival's Promote just placed; Sample copied it until it became "Copy the On Recruit of a rival's member").
import { chromium, devices } from 'playwright';
import { mkdirSync } from 'node:fs';
import { browserPath, launchBrowser } from './lib/browser.mjs';
import { buildStamp } from './lib/stamp.mjs';
import { seedSave } from './lib/seed.mjs';
import { createGame, applyMove, quadrant } from '../../src/engine/v4/index.js';
import { resume } from '../../src/engine/v4/core.js';
import { takeCard } from './lib/take.mjs';

const base = (process.env.V4_URL || 'http://localhost:5317').replace(/\/$/, '');
const out = `${process.env.V4_SHOTS || '/tmp/patrons-shots/v4'}/red-actions`;
mkdirSync(out, { recursive: true });
const quads = ['gold', 'red', 'purple', 'echo'];
const stamp = buildStamp();
const seats = [{ name: 'You', kind: 'human' }, { name: 'Bo', kind: 'human' }, { name: 'Cy', kind: 'human' }];
const slot = (q, k) => `${quads.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.key === k)}`;
const move = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const pass = s => s.pending?.kind === 'buy' ? move(s, 'pass') : s;
const uid = (s, def, where) => {
  const found = (where === 'shop' ? s.shop : s.players[where].members).find(u => s.cards[u].def === def);
  if (found == null) throw new Error(`Missing ${def} in ${where}`);
  return found;
};
function fixture() {
  const s = createGame({ seats, seed: 53, quadrants: quads });
  Object.assign(s, { round: 2, queue: [], pending: null, slots: {}, squats: {}, order: [], log: [] });
  delete s.echo;
  s.pile = [...s.shop, ...s.pile]; s.shop = [];
  s.players.forEach(p => { p.res = Object.fromEntries(s.resources.map(r => [r, 0])); p.left = 5; });
  const deal = (def, where) => {
    (where === 'shop' ? s.shop : s.players[where].members).push(takeCard(s, def));
  };
  for (const [who, def] of [[0, 'red.host'], [1, 'gold.prospector'], [2, 'echo.evergreen'], ['shop', 'red.recruiter'], ['shop', 'red.bigfamily'], ['shop', 'red.twins'], ['shop', 'echo.muse'], ['shop', 'gold.banker']]) deal(def, who);
  return s;
}
function scenario(name) {
  let s = fixture();
  s.queue = (name === 'copy-promote' ? [1, 0, 0] : [0, 0]).map(p => ({ t: 'turn', p }));
  s = resume(s);
  let action = 'hireup';
  if (name === 'copy-promote') {
    s = move(s, `slot:${slot('red', 'hireup')}`);
    // P2's own Promote first (any pair it's offered that leaves Recruiter in the shop for P1's copy): costs move with
    // the balance calls, so the pair is read off the offer rather than named (Prospector to Muse stopped being one, Nov 1)
    const own = `trade:${uid(s, 'gold.prospector', 1)}:`, keep = `:${uid(s, 'red.recruiter', 'shop')}`;
    const pick = s.pending.options.find(o => o.id.startsWith(own) && !o.id.endsWith(keep) && s.shop.includes(Number(o.id.split(':')[2])));
    if (!pick) throw new Error(`${name}: P2 has no Promote pair; offered ${s.pending.options.map(o => o.id).join(' ')}`);
    s = pass(move(s, pick.id));
    action = 'echo';
  }
  s.build = stamp;
  const save = { config: { seats, speed: 'fast' }, state: s, undo: null, savedAt: Date.now() };
  let expected = move(s, `slot:${slot(name === 'copy-promote' ? 'echo' : 'red', action)}`);
  const picks = [];
  if (name === 'copy-promote') {
    // Echo copies the previous action outright; a pick shows only if the engine asks
    const copy = expected.pending?.kind !== 'buy' && expected.pending.options.find(o => o.value === slot('red', 'hireup'));
    if (copy) { picks.push(copy.id); expected = move(expected, copy.id); }
  }
  // Host (cost 4) up to Recruiter (cost 5): Promote reaches a member costing up to 2 more (Recruiter 4+1 since Nov 1)
  const a = uid(expected, 'red.host', 0);
  const b = uid(expected, 'red.recruiter', 'shop');
  const pair = `trade:${a}:${b}`;
  if (!expected.pending.options.some(o => o.id === pair)) throw new Error(`${name}: missing swap ${pair}; offered ${expected.pending.options.map(o => o.id).join(" ")}; prompt ${expected.pending.prompt}`);
  expected = move(expected, pair);
  if (expected.pending?.kind !== 'buy') throw new Error(`${name}: did not return to buying`);
  return { save, action: `slot:${slot(name === 'copy-promote' ? 'echo' : 'red', action)}`, picks, a, b, pair, expected };
}
// Borrow (Cory, Nov 10, in Tryout's old slot): "Recruit the cheapest shop member, for free. Discard it at round end,
// before scoring. +1 red." Triplets and Copyist both cost 5, the cheapest, so you pick one on the board; it joins your
// cult for free and is noted to go at round end.
function borrowScenario() {
  let s = fixture();
  s.shop.push(takeCard(s, 'echo.copyist'));
  s.queue = [0, 0].map(p => ({ t: 'turn', p }));
  s = resume(s);
  s.build = stamp;
  const save = { config: { seats, speed: 'fast' }, state: s, undo: null, savedAt: Date.now() };
  const action = `slot:${slot('red', 'borrow')}`;
  let expected = move(s, action);
  const twins = uid(expected, 'red.twins', 'shop'), copyist = uid(expected, 'echo.copyist', 'shop');
  const ids = expected.pending?.options.map(o => o.id) || [];
  if (JSON.stringify([...ids].sort()) !== JSON.stringify([`card:${twins}`, `card:${copyist}`].sort())) throw new Error(`borrow: offered ${ids}, want the two cheapest`);
  expected = move(expected, `card:${twins}`);
  if (expected.pending?.kind !== 'buy') throw new Error('borrow: did not return to buying');
  const me = expected.players[0], was = s.players[0];
  if (me.res.red !== was.res.red + 1) throw new Error(`borrow: red ${was.res.red} -> ${me.res.red}`);
  if (JSON.stringify(Object.entries(me.res).filter(([r]) => r !== 'red')) !== JSON.stringify(Object.entries(was.res).filter(([r]) => r !== 'red'))) throw new Error('borrow: paid for a free member');
  if (!me.members.includes(twins) || expected.shop.includes(twins)) throw new Error('borrow: Triplets not recruited');
  if (!(expected.borrowed || []).some(b => b.uid === twins && b.pid === 0)) throw new Error('borrow: not noted to go at round end');
  return { save, action, twins, copyist, was, expected };
}
const comparable = s => ({ players: s.players.map(p => ({ members: p.members, res: p.res, bonus: p.bonus })), shop: s.shop, cards: s.cards });
if (process.argv.includes('--fixtures-only')) {
  // (rival-swap went with Even Swap: Tryout took its space in the round I rework, Cory Oct 27; Borrow took Tryout's Nov 10)
  for (const name of ['promote', 'copy-promote']) { scenario(name); console.log(`${name}: fixture resolves to buying.`); }
  borrowScenario(); console.log('borrow: the two cheapest offered; Triplets recruited free, +1 red, noted for round end.');
  process.exit(0);
}
const browser = await launchBrowser({ executablePath: browserPath });
let currentPage, currentTag;
try {
  for (const [tag, options] of [['desktop', { viewport: { width: 1270, height: 700 } }], ['phone', devices['iPhone 13']]]) {
    for (const name of ['promote', 'copy-promote']) {
      // A fresh context prevents the previous local game’s auto-resume flag from bypassing Home.
      const ctx = await browser.newContext(options);
      const page = await ctx.newPage(); currentPage = page; currentTag = `${tag}-${name}`;
      page.setDefaultTimeout(10000);
      const errors = []; page.on('pageerror', e => errors.push(e.message));
      const test = scenario(name);
      await seedSave(page, test.save);
      await page.goto(`${base}/?intro=0&botDelay=50`);
      await page.locator('[data-home="resume"]').click();
      const hand = page.locator('[data-handoff]');
      if (await hand.isVisible()) await hand.click();
      const press = async id => {
        const el = page.locator(`[data-option=${JSON.stringify(id)}]:not([disabled]):not([aria-disabled="true"])`).first();
        await el.waitFor(); if (tag === 'phone') await el.tap(); else await el.click();
        const place = page.getByRole('button', { name: 'Place here', exact: true });
        if (await place.isVisible()) await place.click();
      };
      await press(test.action);
      for (const pick of test.picks) await press(pick);
      const card = page.locator('.gift-card[data-gift="trade"]');
      await card.waitFor();
      await page.locator(`.gift-card .gc-row[data-row="1"] [data-uid="${test.a}"]`).click();
      const choose = page.locator(`.gift-card .gc-row[data-row="2"] [data-option=${JSON.stringify(test.pair)}]:not([disabled])`);
      await choose.waitFor();
      await page.screenshot({ path: `${out}/${tag}-${name}-choice.png` });
      if (tag === 'phone') await choose.tap(); else await choose.click();
      await page.waitForFunction(expected => {
        try { const s = JSON.parse(localStorage.getItem('patrons.v4.local')).state;
          return s.pending?.kind === 'buy' && JSON.stringify({ players: s.players.map(p => ({ members: p.members, res: p.res, bonus: p.bonus })), shop: s.shop, cards: s.cards }) === JSON.stringify(expected);
        } catch { return false; }
      }, comparable(test.expected), { timeout: 15000 });
      await page.locator('.app.game[data-phase="buy"]:not([data-animating])').waitFor({ timeout: 15000 });
      await page.screenshot({ path: `${out}/${tag}-${name}-settled.png` });
      console.log(`${tag}: ${name}; exact owners, resources, cards, shop and restored buy phase.`);
      if (errors.length) throw new Error(`${tag}: ${errors.join('; ')}`);
      await ctx.close();
    }
    {
      const ctx = await browser.newContext(options);
      const page = await ctx.newPage(); currentPage = page; currentTag = `${tag}-borrow`;
      page.setDefaultTimeout(10000);
      const errors = []; page.on('pageerror', e => errors.push(e.message));
      const test = borrowScenario();
      await seedSave(page, test.save);
      await page.goto(`${base}/?intro=0&botDelay=50`);
      await page.locator('[data-home="resume"]').click();
      const hand = page.locator('[data-handoff]');
      if (await hand.isVisible()) await hand.click();
      const live = id => page.locator(`[data-option=${JSON.stringify(id)}]:not([disabled]):not([aria-disabled="true"])`);
      const tapOrClick = async el => { if (tag === 'phone') await el.tap(); else await el.click(); };
      await tapOrClick(live(test.action).first());
      const place = page.getByRole('button', { name: 'Place here', exact: true });
      if (await place.isVisible()) await place.click();
      const pick = live(`card:${test.twins}`).first();
      await pick.waitFor();
      if (!(await live(`card:${test.copyist}`).count())) throw new Error(`${tag}: Borrow doesn't offer Copyist (tied cheapest)`);
      await page.screenshot({ path: `${out}/${tag}-borrow-choice.png` });
      await tapOrClick(pick);
      // on touch the tap pins the card's sheet; its button makes the pick
      if (tag === 'phone') await page.locator(`[data-recruit="${test.twins}"]`).click();
      await page.waitForFunction(({ want, recruits }) => {
        try { const s = JSON.parse(localStorage.getItem('patrons.v4.local')).state;
          return s.pending?.kind === 'buy' && s.recruits === recruits && JSON.stringify({ players: s.players.map(p => ({ members: p.members, res: p.res, bonus: p.bonus })), shop: s.shop, cards: s.cards }) === JSON.stringify(want);
        } catch { return false; }
      }, { want: comparable(test.expected), recruits: test.expected.recruits }, { timeout: 15000 });
      await page.locator('.app.game[data-phase="buy"]:not([data-animating])').waitFor({ timeout: 15000 });
      await page.screenshot({ path: `${out}/${tag}-borrow-settled.png` });
      console.log(`${tag}: borrow; the two cheapest offered, Triplets recruited free, +1 red, nothing paid.`);
      if (errors.length) throw new Error(`${tag}: ${errors.join('; ')}`);
      await ctx.close();
    }
  }
} catch (error) {
  if (currentPage && !currentPage.isClosed()) {
    await currentPage.screenshot({ path: `${out}/${currentTag}-failure.png` });
    console.error((await currentPage.locator('body').innerText()).slice(-2000));
  }
  throw error;
} finally { await browser.close(); }
