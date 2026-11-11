// @vitest-environment node
// Idea pipeline pool 4 (Nov 7; scripts/ideas/README.md): bot-only candidates, never dealt in a real game. One test per
// sentence of each card's text, through real moves, with the log naming the card.
import { describe, it, expect } from 'vitest';
import { take, move, uidOf } from './helpers.js';
import { sceneQ, linesNaming } from './cards-helpers.js';
import { usePool, price, total, still, go, discard, twoCosts } from './pool-helpers.js';

usePool(['purple.stagehands', 'red.resurrectionists', 'red.nightdiggers', 'trading.nextofkin', 'trading.secondcousins']);
const named = (s, name) => linesNaming(s.log, name);
const RICH = { blue: 30, yellow: 30, white: 30, purple: 30, red: 30 };
const cardBuys = s => s.pending?.kind === 'buy' && s.pending.options.some(o => o.kind === 'card');

describe('Stagehands (Purple)', () => {
  const Q = ['purple', 'market', 'yellow', 'trading'];
  const turns = [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }];
  it('Whenever you take the Goes Last token, recruit: an extra recruit this turn', () => {
    let s = sceneQ({ quadrants: Q, members: [['purple.stagehands']], res: [RICH], queue: turns });
    s = take(s, 'purple.skip'); // Sleep In: take the Goes Last token
    expect(named(s, 'Stagehands')).toEqual(["P1's Stagehands: P1 recruits an extra time."]);
    s = move(s, s.pending.options.find(o => o.kind === 'card').id);
    expect(cardBuys(s)).toBe(true); // a second recruit
    s = move(s, s.pending.options.find(o => o.kind === 'card').id);
    expect(s.players[0].members).toHaveLength(3);
  });
  it('keeping the token you already hold is not taking it; without the card, one recruit', () => {
    let s = sceneQ({ quadrants: Q, members: [['purple.stagehands']], res: [RICH], queue: turns });
    s.goesLast = { round: 1, pid: 0 };
    s = take(s, 'purple.skip');
    expect(named(s, 'Stagehands')).toEqual([]);
    s = move(s, s.pending.options.find(o => o.kind === 'card').id);
    expect(cardBuys(s)).toBe(false);
  });
});

describe('Resurrectionists and Night Diggers (Red)', () => {
  const Q = ['red', 'market', 'purple', 'yellow'];
  for (const [id, name, when] of [['red.resurrectionists', 'Resurrectionists', 'Round Start'], ['red.nightdiggers', 'Night Diggers', 'Round End']]) {
    const run = s => go(s, when === 'Round Start' ? [{ t: 'round', r: 2 }] : [{ t: 'allPlaced' }]);
    it(`${when}: you may swap one of your members with one in the discard pile`, () => {
      let s = still({ quadrants: Q, round: when === 'Round Start' ? 1 : 2, members: [[id, 'market.stylist']] });
      const [lo, hi] = twoCosts(s);
      const [b] = discard(s, [hi]);
      const mine = uidOf(s, 'market.stylist', 0);
      s = run(s);
      expect(s.pending.prompt).toMatch(new RegExp(name));
      s = move(s, `trade:${mine}:${b}`);
      expect(s.players[0].members).toContain(b);
      expect(s.players[0].members).not.toContain(mine);
      expect(s.discard).toContain(mine);
      expect(s.discard).not.toContain(b);
      expect(named(s, name)[0]).toMatch(new RegExp(`^P1's ${name}: swaps Stylist for .* from the discard pile\\.$`));
      void lo;
    });
    it(`${name}: "may": Don't swap keeps everything`, () => {
      let s = still({ quadrants: Q, round: when === 'Round Start' ? 1 : 2, members: [[id, 'market.stylist']] });
      const [, hi] = twoCosts(s);
      const [b] = discard(s, [hi]);
      s = run(s);
      s = move(s, 'none');
      expect(s.players[0].members).toHaveLength(2);
      expect(s.discard).toContain(b);
    });
  }
});

describe('Next of Kin and Second Cousins (White)', () => {
  const Q = ['trading', 'red', 'purple', 'market'];
  for (const [id, name, fits] of [['trading.nextofkin', 'Next of Kin', (k, c) => k <= c], ['trading.secondcousins', 'Second Cousins', (k, c) => k < c]]) {
    it(`${name}: whenever this member leaves your cult, recruit a shop member costing ${name === 'Next of Kin' ? 'up to' : 'less than'} its cost, for free`, () => {
      let s = sceneQ({ quadrants: Q, round: 2, members: [[id]], res: [{ white: 1 }] });
      const u = uidOf(s, id, 0), c = price(s, u);
      s = take(s, 'red.hireup'); // Promote: it leaves, swapped for a shop member
      s = move(s, s.pending.options.find(o => o.kind === 'trade' && o.value[0] === u).id);
      expect(s.pending.kind).toBe('choose');
      const offered = s.pending.options.map(o => o.value);
      const shopFit = s.shop.filter(x => x !== u && fits(price(s, x), c));
      expect(offered.filter(x => x !== u).sort()).toEqual(shopFit.sort());
      expect(offered.every(x => fits(price(s, x), c))).toBe(true);
      const pick = offered.find(x => x !== u);
      const before = total(s.players[0].res);
      s = move(s, `card:${pick}`);
      expect(s.players[0].members).toContain(pick);
      expect(named(s, name).at(-1)).toMatch(/recruits .* for free/);
      expect(total(s.players[0].res)).toBe(before); // free
    });
  }
});
