// @vitest-environment node
// Quality loop lane D (Nov 4): Mug the Leader in Stash's slot, under REPLACE10=mug (its own file: Inside Job takes the
// same slot under REPLACE10=insidejob). The switch is read when the engine loads, so it is set before the import.
import { describe, it, expect } from 'vitest';

process.env.REPLACE10 = 'mug';
const { applyMove } = await import('../../../engine/v4/core.js');
const { table, named } = await import('./cards-helpers-b.js');
const { take } = await import('./helpers.js');
delete process.env.REPLACE10;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const total = p => Object.values(p.res).reduce((a, b) => a + b, 0);

describe('REPLACE10: Mug the Leader (Stash\'s slot)', () => {
  it('steals 2 in round I from the rival with the most followers, +1 magenta; Stash is gone', () => {
    let s = table(['red', 'thieves', 'trading', 'yellow'], { n: 4, round: 1, res: [{}, { red: 3 }, { white: 3 }, { yellow: 3 }], bonus: [0, 2, 9, 5] });
    expect(s.pending.options.some(o => o.label === 'Stash')).toBe(false);
    s = take(s, 'thieves.mug');
    expect(s.players[2].res.white).toBe(1);
    expect(s.players[1].res.red).toBe(3);
    expect(s.players[0].res.white).toBe(2);
    expect(s.players[0].res.magenta).toBe(1);
    expect(named(s, 'Mug the Leader')).toContain("P1's Mug the Leader: took 2 from P3.");
  });

  it('round III steals 4; tied leaders: you choose', () => {
    let s = table(['red', 'thieves', 'trading', 'yellow'], { n: 3, round: 3, left: 5, res: [{}, { red: 6 }, { white: 6 }], bonus: [0, 9, 9] });
    s = take(s, 'thieves.mug');
    expect(s.pending.prompt).toBe('Mug the Leader: steal from which tied leader?');
    s = answer(s, 'player:1');
    expect(s.players[1].res.red).toBe(2);
    expect(total(s.players[0])).toBe(5);
  });

  it('the pitched turn: round II, Ana leads with 24: you take 3 of hers, +1 magenta', () => {
    let s = table(['red', 'thieves', 'trading', 'yellow'], { n: 4, round: 2, left: 4, res: [{}, { red: 5, white: 2 }, { white: 4 }, { yellow: 4 }], bonus: [10, 23, 15, 18] });
    s = take(s, 'thieves.mug');
    expect(total(s.players[1])).toBe(4);
    expect(total(s.players[0])).toBe(4);
  });
});
