// @vitest-environment node
// Contest-win members (REPLACE15, Nov 4; Cory: "when you win a contest, get x y z", "the member should give resources
// for winning contests") added to the grey deck. One test per sentence.
import { describe, it, expect } from 'vitest';

process.env.REPLACE15 = '1';
const { applyMove } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { table, named } = await import('./cards-helpers-b.js');
delete process.env.REPLACE15;

// P1 wins Red and Blue in round II (+6 each), P3 wins White
const scene = (member, extra = {}) => table(['red', 'market', 'trading', 'yellow'], { n: 3, round: 2, res: [{ red: 4, blue: 3 }, { red: 2, blue: 1 }, { white: 2, red: 1 }], members: [[member]], queue: [{ t: 'endRound' }], ...extra });

describe('REPLACE15: contest-win members added to the grey deck', () => {
  it('all are dealt; Spoilsport stays; Dabblers stays (Cory, Nov 4)', () => {
    expect(defById('benders.cheerleaders').text).toBe('Whenever you win a contest, +2 followers.');
    expect(defById('benders.victors').text).toBe('Whenever you win a contest, +2 of its color.');
    expect(defById('benders.warchest').text).toBe('Whenever you win a contest, +3 resources in any colors.');
    expect(defById('benders.gloaters').text).toBe('Whenever you win a contest, take 1 of its color from each rival.');
    expect(defById('benders.spoilsports').retired).toBeFalsy(); // Spoilsport stays (Cory, Nov 4)
    expect(defById('benders.dabblers').retired).toBeFalsy();
  });

  it('Cheerleaders: +2 followers per contest won', () => {
    const s = scene('benders.cheerleaders');
    expect(s.players[0].bonus).toBe(12 + 4);
    expect(named(s, 'Cheerleaders')).toContain("P1's Cheerleaders: +2 followers.");
  });

  it("Victors: +2 of each won contest's color", () => {
    const s = scene('benders.victors');
    expect(s.players[0].res.red).toBe(6);
    expect(s.players[0].res.blue).toBe(5);
  });

  it('War Chest: +3 in colors you choose, per contest won', () => {
    let s = scene('benders.warchest');
    let picked = 0;
    while (s.pending?.prompt?.startsWith('War Chest')) { s = applyMove(s, { player: 0, option: 'color:white' }); picked++; }
    expect(picked).toBe(6);
    expect(s.players[0].res.white).toBe(6);
  });

  it("Gloaters: 1 of the won contest's color from each rival who has it", () => {
    const s = scene('benders.gloaters');
    expect(s.players[0].res.red).toBe(4 + 2);
    expect(s.players[0].res.blue).toBe(3 + 1);
    expect(s.players[1].res.red).toBe(1);
    expect(s.players[2].res.red).toBe(0);
  });
});
