// @vitest-environment node
// Lane F (REPLACE13=mugging, Nov 4; quality/pitches/F-batch1.md): a candidate for Shake Down's slot (Magenta round II).
// One test per sentence, plus the pitched turn.
import { describe, it, expect } from 'vitest';

process.env.REPLACE13 = 'mugging';
// trial cards are tested at the Nov 5 afternoon prices (every member 2 more than its card file); the live price is
// 4 more since Nov 5 evening, and these tests check what the cards do, not their price
process.env.MEMBER_UP = '2';
const core = await import('../../../engine/v4/core.js');
const idx = await import('../../../engine/v4/content/index.js');
const helpers = await import('./cards-helpers-b.js');
delete process.env.REPLACE13;
delete process.env.MEMBER_UP;
const G = { ...core, ...idx, ...helpers };
const total = p => Object.values(p.res).reduce((a, b) => a + b, 0);
const answer = (G, s, id) => G.applyMove(s, { player: s.pending.player, option: id });
const slot = (G, s, name) => `${s.quadrants.indexOf('thieves')}-${G.quadrant('thieves').actions.findIndex(a => a.name === name)}`;
// answer every pick of an interactive steal with the first offered option
const drain = (G, s, word) => { while (s.pending && s.pending.prompt?.includes(word)) s = answer(G, s, s.pending.options[0].id); return s; };
describe('REPLACE13=mugging: Mugging' , () => {
  it("is on the wheel in Shake Down's place", () => {
    const names = G.quadrant('thieves').actions.map(x => x.name);
    expect(names).toContain('Mugging');
    expect(names).not.toContain('Shake Down');
  });
  it("steals half of the chosen rival's resources, rounded down, +1 magenta", () => {
    let s = G.table(['silver', 'thieves'], { n: 3, round: 2, res: [{}, { silver: 6, red: 5 }, { blue: 2 }] });
    s = answer(G, s, `slot:${slot(G, s, 'Mugging')}`);
    s = answer(G, s, 'player:1');
    s = drain(G, s, 'Mugging');
    expect(total(s.players[1])).toBe(6); // 11 -> 6: 5 taken
    expect(total(s.players[0])).toBe(5 + 1);
    expect(total(s.players[2])).toBe(2);
  });
  it('a rival with 1 resource cannot be mugged (half of 1 is 0)', () => {
    let s = G.table(['silver', 'thieves'], { n: 2, round: 2, res: [{}, { red: 1 }] });
    s = answer(G, s, `slot:${slot(G, s, 'Mugging')}`);
    expect(s.log.join('\n')).toContain('found no one worth mugging');
    expect(s.players[1].res.red).toBe(1);
  });
});
