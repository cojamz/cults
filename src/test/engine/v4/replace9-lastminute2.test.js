// @vitest-environment node
// REPLACE9=lastminute2: the alternate Last-Minute Shopper (director, Nov 4), "Round End: +2 of any colors, then you may
// recruit a shop member, paying its cost." Not part of REPLACE9=1, so it has its own file and switch.
import { describe, it, expect } from 'vitest';

process.env.REPLACE9 = 'lastminute2';
const { applyMove } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { table, named, owns } = await import('./cards-helpers-b.js');
delete process.env.REPLACE9;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const Q4 = ['red', 'market', 'purple', 'silver'];

describe('Last-Minute Shopper (alternate): "Round End: +2 of any colors, then you may recruit a shop member, paying its cost."', () => {
  it('same price, retires Critic, and the first version is off', () => {
    const d = defById('market.lastminute2');
    expect([d.s, d.w, d.f, d.n, d.round]).toEqual([3, 1, 1, 1, 1]);
    expect(defById('market.critic').retired).toBe(true);
    expect(() => defById('market.lastminute')).toThrow();
  });
  it('Round End: two colors, one at a time, then the recruit offer, which the 2 can pay for', () => {
    let s = table(Q4, { n: 3, round: 1, res: [{ red: 1 }], members: [['market.lastminute2']], shop: ['red.volunteer'], queue: [{ t: 'allPlaced' }] });
    expect(s.pending.prompt).toBe('Last-Minute Shopper: +1 of which color (1 of 2)?');
    s = answer(s, 'color:red');
    expect(s.pending.prompt).toBe('Last-Minute Shopper: +1 of which color (2 of 2)?');
    s = answer(s, 'color:red');
    expect(s.players[0].res.red).toBe(3);
    expect(named(s, 'Last-Minute Shopper')).toEqual(expect.arrayContaining(["P1's Last-Minute Shopper: +1 red."]));
    expect(s.pending.prompt).toBe('Last-Minute Shopper: before contests are scored, recruit a shop member, paying its cost?');
    s = answer(s, s.pending.options.find(o => o.label.startsWith('Volunteer')).id);
    while (s.pending?.prompt?.startsWith('Last-Minute Shopper: how do you pay')) s = answer(s, s.pending.options[0].id);
    expect(owns(s, 0, 'red.volunteer')).toBe(true);
  });
});
