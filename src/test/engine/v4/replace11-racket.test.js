// @vitest-environment node
// Racket (REPLACE11=racket, Actions lane, Nov 4): Cory's Oct 31 standing pick for Stash's slot, in Members D's reword:
// "Steal 1 resource from the leader of each contest you aren't leading. +1 magenta."
import { describe, it, expect } from 'vitest';

process.env.REPLACE11 = 'racket';
const { applyMove } = await import('../../../engine/v4/core.js');
const { quadrant } = await import('../../../engine/v4/content/index.js');
const { table } = await import('./cards-helpers-b.js');
delete process.env.REPLACE11;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const slot = (s, name) => `${s.quadrants.indexOf('thieves')}-${quadrant('thieves').actions.findIndex(a => a.name === name)}`;
const total = p => Object.values(p.res).reduce((a, b) => a + b, 0);

describe('REPLACE11: Racket', () => {
  it("is on the wheel in Stash's place", () => {
    const names = quadrant('thieves').actions.map(a => a.name);
    expect(names).toContain('Racket');
    expect(names).not.toContain('Stash');
  });
  it('steals 1 from the leader of each contest you are not leading, then +1 magenta', () => {
    let s = table(['red', 'thieves'], { n: 2, round: 1, res: [{}, { red: 5, magenta: 3 }] });
    s = answer(s, `slot:${slot(s, 'Racket')}`);
    // P2 leads both contests: 2 steals, plus the +1 magenta
    expect(total(s.players[0])).toBe(3);
    expect(total(s.players[1])).toBe(6);
    expect(s.log.join('\n')).toContain("P1's Racket: took 2 from P2.");
  });
  it('nothing from a contest you lead', () => {
    let s = table(['red', 'thieves'], { n: 2, round: 1, res: [{ red: 9 }, { red: 5, magenta: 3 }] });
    s = answer(s, `slot:${slot(s, 'Racket')}`);
    expect(s.log.join('\n')).toContain("P1's Racket: took 1 from P2.");
  });
});
