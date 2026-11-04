// @vitest-environment node
// Quality loop lane D (Nov 4): Turf, Cory's idea for Stash's slot, under REPLACE10=turf (its own file: Inside Job and
// Mug the Leader take the same slot under their own values). The switch is read when the engine loads.
import { describe, it, expect } from 'vitest';

process.env.REPLACE10 = 'turf';
const { table, named } = await import('./cards-helpers-b.js');
const { take } = await import('./helpers.js');
delete process.env.REPLACE10;

describe('REPLACE10: Turf (Stash\'s slot, Cory\'s idea)', () => {
  it('steals 1 resource from each rival per minion they have on Magenta spaces, +1 magenta; Lie Low blocks it', () => {
    // thieves is quadrant 1; round II: Help Yourself 1-0, Turf 1-1, Lie Low 1-2, Heist 1-3, Shake Down 1-4
    let s = table(['red', 'thieves', 'trading', 'yellow'], { n: 4, round: 2, left: 4, res: [{}, { red: 5 }, { white: 5 }, { yellow: 5 }] });
    s.slots = { '1-0': 1, '1-3': 1, '1-4': 2, '1-2': 3, '0-0': 2 };
    s.players[3].hideout = 2;
    expect(s.pending.options.some(o => o.label === 'Stash')).toBe(false);
    s = take(s, 'thieves.turf');
    expect(s.players[1].res.red).toBe(3); // two minions on Magenta
    expect(s.players[2].res.white).toBe(4); // one (its Red minion doesn't count)
    expect(s.players[3].res.yellow).toBe(5); // lying low
    expect(s.players[0].res.magenta).toBe(1);
    expect(named(s, 'Turf')).toEqual(["P1's Turf: took 2 from P2.", "P1's Turf: took 1 from P3."]);
  });

  it('with nobody on Magenta it is just +1 magenta', () => {
    let s = table(['red', 'thieves', 'trading', 'yellow'], { n: 3, round: 1, res: [{}, { red: 5 }] });
    s = take(s, 'thieves.turf');
    expect(s.players[0].res.magenta).toBe(1);
    expect(named(s, 'Turf')).toContain("P1's Turf: no rival on a Magenta space to steal from.");
  });

  it('when the only rival there is lying low, the log says they can\'t be stolen from (Lab, seed 143)', () => {
    let s = table(['red', 'thieves', 'trading', 'yellow'], { n: 3, round: 2, left: 4, res: [{}, { red: 5 }, {}] });
    s.slots = { '1-2': 1 };
    s.players[1].hideout = 2;
    s = take(s, 'thieves.turf');
    expect(s.players[1].res.red).toBe(5);
    expect(named(s, 'Turf')).toContain("P1's Turf: P2 can't be stolen from right now.");
  });
});
