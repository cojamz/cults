// @vitest-environment node
// Contest-win members (REPLACE15, Nov 4; Cory: "when you win a contest, get x y z"). One test per sentence.
import { describe, it, expect } from 'vitest';

process.env.REPLACE15 = '1';
const { defById } = await import('../../../engine/v4/content/index.js');
const { table, named } = await import('./cards-helpers-b.js');
delete process.env.REPLACE15;

describe('REPLACE15: contest-win members in Dabblers\' place', () => {
  it('both are dealt; Dabblers is retired', () => {
    expect(defById('benders.cheerleaders').text).toBe('Whenever you win a contest, +2 followers.');
    expect(defById('benders.gloaters').text).toBe('Whenever you win a contest, steal 1 follower from each rival.');
    expect(defById('benders.dabblers').retired).toBeFalsy(); // Dabblers is protected (Cory, Nov 4)
  });

  it('Cheerleaders: +2 followers per contest won', () => {
    // P1 wins Red and Blue (+6 each in round II), P3 wins White
    const s = table(['red', 'market', 'trading', 'yellow'], { n: 3, round: 2, res: [{ red: 4, blue: 3 }, {}, { white: 2 }], members: [['benders.cheerleaders']], queue: [{ t: 'endRound' }] });
    expect(s.players[0].bonus).toBe(12 + 4);
    expect(named(s, 'Cheerleaders')).toContain("P1's Cheerleaders: +2 followers.");
  });

  it('Gloaters: steal 1 follower from each rival per contest won', () => {
    const s = table(['red', 'market', 'trading', 'yellow'], { n: 3, round: 2, res: [{ red: 4, blue: 3 }, {}, { white: 2 }], bonus: [0, 5, 5], members: [['benders.gloaters']], queue: [{ t: 'endRound' }] });
    expect(s.players[0].bonus).toBe(12 + 4);
    expect(s.players[1].bonus).toBe(5 - 2);
    expect(s.players[2].bonus).toBe(5 + 6 - 2);
  });

  it('Gloaters: a rival with no loose followers gives nothing', () => {
    const s = table(['red', 'market', 'trading', 'yellow'], { n: 3, round: 1, res: [{ red: 4 }], bonus: [0, 0, 0], members: [['benders.gloaters']], queue: [{ t: 'endRound' }] });
    expect(s.players[1].bonus).toBe(0);
  });
});
