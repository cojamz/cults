// @vitest-environment node
// Members C (bC11, Nov 4): Lamplighters, "Whenever you take the Goes Last token, +1 follower per color you have a minion
// on.", Night Watch's place under REPLACE9=lamplighters.
import { describe, it, expect } from 'vitest';

process.env.REPLACE9 = 'lamplighters';
// trial cards are tested at the Nov 5 afternoon prices (every member 2 more than its card file); the live price is
// 4 more since Nov 5 evening, and these tests check what the cards do, not their price
process.env.MEMBER_UP = '2';
const { defById } = await import('../../../engine/v4/content/index.js');
const { take } = await import('./helpers.js');
const { named } = await import('./cards-helpers-b.js');
const { sceneQ } = await import('./cards-helpers.js');
delete process.env.REPLACE9;
delete process.env.MEMBER_UP;

const turns = (...ps) => ps.map(p => ({ t: 'turn', p }));
const Q = ['gold', 'red', 'purple', 'echo'];

describe('REPLACE9: Lamplighters', () => {
  it('same price as Night Watch, which is retired under the switch', () => {
    const d = defById('purple.lamplighters'), o = defById('purple.nightwatch');
    expect([d.s, d.w, d.f]).toEqual([o.s, o.w, o.f]);
    expect(o.retired).toBe(true);
  });
  it('Last Call with minions on Red and Purple: +2 followers', () => {
    const s0 = sceneQ({ quadrants: Q, round: 2, left: 3, members: [['purple.lamplighters']], slots: { '1-0': 0 }, queue: [...turns(0, 1, 0, 1, 0, 1), { t: 'allPlaced' }] });
    const b = s0.players[0].bonus;
    const s = take(s0, 'purple.lastcall');
    expect(named(s, 'Lamplighters')).toEqual(["P1's Lamplighters: +2 followers (minions on 2 colors)."]);
    expect(s.players[0].bonus - b).toBeGreaterThanOrEqual(2);
  });
  it('a rival taking the token pays nothing', () => {
    const s = take(sceneQ({ quadrants: Q, round: 2, left: 3, members: [[], ['purple.lamplighters']], queue: [...turns(0, 1, 0, 1, 0, 1), { t: 'allPlaced' }] }), 'purple.lastcall');
    expect(named(s, 'Lamplighters')).toEqual([]);
  });
});
