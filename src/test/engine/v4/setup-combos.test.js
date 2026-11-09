// @vitest-environment node
// Every setup option works with every other (Cory, Nov 9: "why is there no deck in richer economy. you told me all the
// options would work together"). Economy (Today / Richer) x Cards (Live / Test) x swap card x tables and seat counts:
// each table deals a full round I shop, keeps the same members in each round as Today, and plays to the end with bots.
// And under Richer every named member cost moves up with the prices (Cory, Nov 9: "if you meddle with member prices
// you have to tweak everything that references them, including deck limit").
import { describe, it, expect } from 'vitest';
import { createGame, cardDef, shopSize, spacesOf, actionAt } from '../../../engine/v4/core.js';
import { defById, quadrant } from '../../../engine/v4/content/index.js';
import { shiftCosts, RICH_UP, MORE } from '../../../engine/v4/content/price.js';
import { runGame } from './fuzz-runner.js';
import { sceneQ, settle } from './cards-helpers.js';
import { take } from './helpers.js';

// every color on some table, and every color the Test cards change
const TABLES = [['gold', 'red', 'market', 'echo'], ['purple', 'silver', 'yellow', 'thieves'], ['trading', 'red', 'echo', 'purple']];
const ECON = [{}, { econ: 'rich' }];
const CARDS = [{}, { testSet: true }];
const SWAP = [{}, { swapCard: true }];
const base = { deck: 10, roundDecks: 2, contests: 'byColor' };
const combos = [];
for (const e of ECON) for (const c of CARDS) for (const w of SWAP) combos.push({ ...base, ...e, ...c, ...w });
const label = r => [r.econ === 'rich' ? 'Richer' : 'Today', r.testSet ? 'Test cards' : 'Live cards', r.swapCard ? 'swap card' : 'no swap'].join(', ');
const deal = (quadrants, rules, seed = 7) => createGame({ seats: quadrants.map((_, i) => ({ name: `P${i + 1}`, kind: 'bot' })), seed, quadrants, rules });
const ids = (s, us) => us.map(u => s.cards[u].def).sort();
const byRound = s => ({ 1: ids(s, [...s.pile, ...s.shop]), 2: ids(s, s.waiting[2] || []), 3: ids(s, s.waiting[3] || []) });

describe('every setup combination deals a real game', () => {
  for (const rules of combos) {
    it(label(rules), () => {
      for (const t of TABLES) for (const n of [2, 3, 4]) {
        const q = t.slice(0, n), s = deal(q, rules);
        // a full round I shop, from a deck with members left to refill it
        expect(s.shop.length, `${q} ${n}p shop`).toBe(shopSize({ ...s, round: 1 }));
        expect(s.pile.length, `${q} ${n}p deck`).toBeGreaterThan(0);
        // the same members join each round as at Today's prices (round decks go by the printed price)
        expect(byRound(s), `${q} ${n}p rounds`).toEqual(byRound(deal(q, { ...rules, econ: undefined })));
      }
    });
  }
});

describe('every setup combination plays to the end', () => {
  for (const rules of combos) {
    it(label(rules), () => {
      let seed = 1;
      for (const t of TABLES) for (const n of [2, 4]) {
        const { state } = runGame({ n, seed: seed++, kind: 'bot', full: false, quadrants: t.slice(0, n), rules });
        expect(state.over).toBe(true);
      }
    });
  }
});

describe('Richer moves every named member cost', () => {
  it('every space and member that names a cost says 2 more', () => {
    for (const t of TABLES) for (const test of [false, true]) {
      const today = deal(t, { ...base, ...(test ? { testSet: true } : {}) }), rich = deal(t, { ...base, econ: 'rich', ...(test ? { testSet: true } : {}) });
      for (const q of t) spacesOf(today, q).forEach((a, i) => expect(spacesOf(rich, q)[i].text).toBe(shiftCosts(a.text, RICH_UP)));
      for (const u of Object.keys(today.cards)) if (!Object.values(today.artifacts || {}).includes(Number(u))) expect(cardDef(rich, Number(u)).text).toBe(shiftCosts(cardDef(today, Number(u)).text, RICH_UP));
    }
    // the words that move, and the ones that don't
    expect(shiftCosts('Recruit a shop member costing 10 or less, for free.', 2)).toBe('Recruit a shop member costing 12 or less, for free.');
    expect(shiftCosts('Whenever a rival recruits a member costing 7 or more', 2)).toBe('Whenever a rival recruits a member costing 9 or more');
    expect(shiftCosts('Swap any member for one costing up to 3 more', 2)).toBe('Swap any member for one costing up to 3 more');
    expect(shiftCosts('a shop member costing at most 2 less', 2)).toBe('a shop member costing at most 2 less');
  });
  it('Initiation offers exactly the shop members its words allow, at both prices', () => {
    for (const econ of [undefined, 'rich']) {
      // members around the cap: Initiation's cap is 9 + MORE as printed, 2 more under Richer
      const s0 = sceneQ({ round: 3, rules: { ...base, econ }, quadrants: ['gold', 'red', 'market', 'echo'] });
      const cap = Number(/costing (\d+) or less/.exec(spacesOf(s0, 'red').find(a => a.key === 'take').text)[1]);
      expect(cap).toBe(9 + MORE + (econ ? RICH_UP : 0));
      const s = take(s0, 'red.take');
      const offered = (s.pending?.options || []).filter(o => o.kind === 'card').map(o => o.value).sort();
      const fits = s0.shop.filter(u => { const d = cardDef(s0, u); return d.s + d.w <= cap; }).sort();
      expect(offered, econ || 'today').toEqual(fits);
      void settle; void actionAt; void defById; void quadrant;
    }
  });
});
