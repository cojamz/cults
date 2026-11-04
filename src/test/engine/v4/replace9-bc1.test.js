// @vitest-environment node
// Members C, batch bC1 (Nov 4 scale-up): Power Shoppers (Snobs' place) and Stand-In (Extra Hand's place), under REPLACE9.
import { describe, it, expect } from 'vitest';

process.env.REPLACE9 = 'powershoppers,standin';
const { applyMove } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { move } = await import('./helpers.js');
const { table, named, uidIn } = await import('./cards-helpers-b.js');
delete process.env.REPLACE9;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const pay = s => { while (s.pending?.kind === 'pay' || s.pending?.prompt?.includes('choose how to pay')) s = answer(s, s.pending.options[0].id); return s; };
const Q4 = ['red', 'yellow', 'market', 'purple'];

describe('Power Shoppers: "Whenever you recruit your second member in a turn, +2 followers."', () => {
  it('price, and Snobs retired', () => {
    const d = defById('market.powershoppers');
    expect([d.s, d.w]).toEqual([4, 3]);
    expect(defById('market.snob').retired).toBe(true);
  });
  it('the second member of a turn pays +2, the first and third do not', () => {
    let s = table(Q4, { n: 2, round: 2, res: [{ red: 20, yellow: 20, blue: 20, purple: 20 }], members: [['market.powershoppers']],
      shop: ['red.volunteer', 'yellow.gardener', 'purple.crew'], queue: [{ t: 'buy', p: 0 }, { t: 'buy', p: 0, extra: true }, { t: 'buy', p: 0, extra: true }] });
    s.players[0].buyTwiceNow = true;
    const b0 = s.players[0].bonus;
    s = pay(move(s, `card:${uidIn(s, 'red.volunteer', 'shop')}`));
    expect(s.players[0].bonus).toBe(b0);
    s = pay(move(s, `card:${uidIn(s, 'yellow.gardener', 'shop')}`));
    expect(s.players[0].bonus).toBe(b0 + 2);
    expect(named(s, 'Power Shoppers')).toContain("P1's Power Shoppers: a second member this turn, +2 followers.");
    if (s.pending?.options?.some(o => o.id === `card:${uidIn(s, 'purple.crew', 'shop')}`)) {
      s = pay(move(s, `card:${uidIn(s, 'purple.crew', 'shop')}`));
      expect(s.players[0].bonus).toBe(b0 + 2);
    }
  });
});

describe('Stand-In: "Round Start: if you have the fewest followers (ties count), +1 minion this round."', () => {
  it('price, and Extra Hand retired', () => {
    const d = defById('benders.standin');
    expect(d.s + d.w).toBe(6);
    expect(defById('benders.extrahand').retired).toBe(true);
  });
  const start = bonus => {
    const s = table(Q4, { n: 3, round: 1, bonus, members: [['benders.standin']], queue: [{ t: 'round', r: 2 }] });
    return s;
  };
  it('fewest followers at round II start: one more minion this round', () => {
    const s = start([1, 4, 6]);
    expect(named(s, 'Stand-In').join(' ')).toContain('1 more minion');
  });
  it('tied for fewest counts (its own worth counts toward followers)', () => {
    const s = start([2, 3, 6]); // Stand-In is worth 1: 3 followers, tied with P2
    expect(named(s, 'Stand-In').join(' ')).toContain('1 more minion');
  });
  it('not the fewest: nothing', () => {
    const s = start([5, 3, 6]);
    expect(named(s, 'Stand-In')).toEqual([]);
  });
});
