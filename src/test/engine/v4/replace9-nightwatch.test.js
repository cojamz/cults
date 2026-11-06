// @vitest-environment node
// Members C, batch bC12 (Nov 4): Night Watch reworked, "Whenever any player takes the Goes Last token, +1 follower
// per minion on it.", under REPLACE9=nightwatch9 (set before the engine loads, then cleared).
import { describe, it, expect } from 'vitest';

process.env.REPLACE9 = 'nightwatch9';
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

describe('REPLACE9: Night Watch (any player)', () => {
  it('same price, the old card retired', () => {
    const d = defById('purple.nightwatch9'), o = defById('purple.nightwatch');
    expect([d.s, d.w, d.f]).toEqual([o.s, o.w, o.f]);
    expect(o.retired).toBe(true);
  });
  it('a rival takes the token with Last Call: +1 follower per minion on it', () => {
    const s = take(sceneQ({ quadrants: Q, round: 2, left: 3, members: [[], ['purple.nightwatch9']], queue: [...turns(0, 1, 0, 1, 0, 1), { t: 'allPlaced' }] }), 'purple.lastcall');
    expect(s.players[1].bonus).toBe(2);
    expect(named(s, 'Night Watch')).toHaveLength(1);
  });
  it('its owner takes the token: pays its owner too', () => {
    const s = take(sceneQ({ quadrants: Q, round: 2, left: 3, members: [['purple.nightwatch9']], queue: [...turns(0, 1, 0, 1, 0, 1), { t: 'allPlaced' }] }), 'purple.lastcall');
    expect(s.goesLast).toEqual({ round: 2, pid: 0 });
    expect(named(s, 'Night Watch')).toEqual(["P1's Night Watch: +2 followers (P1 took the Goes Last token with 2 minions on it)."]);
  });
});
