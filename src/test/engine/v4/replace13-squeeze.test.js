// @vitest-environment node
// Lane F (REPLACE13=squeeze, Nov 4; quality/pitches/F-batch1.md): a candidate for Shake Down's slot (Magenta round II).
// One test per sentence, plus the pitched turn.
import { describe, it, expect } from 'vitest';

process.env.REPLACE13 = 'squeeze';
const core = await import('../../../engine/v4/core.js');
const idx = await import('../../../engine/v4/content/index.js');
const helpers = await import('./cards-helpers-b.js');
delete process.env.REPLACE13;
const G = { ...core, ...idx, ...helpers };
const total = p => Object.values(p.res).reduce((a, b) => a + b, 0);
const answer = (G, s, id) => G.applyMove(s, { player: s.pending.player, option: id });
const slot = (G, s, name) => `${s.quadrants.indexOf('thieves')}-${G.quadrant('thieves').actions.findIndex(a => a.name === name)}`;
// answer every pick of an interactive steal with the first offered option
const drain = (G, s, word) => { while (s.pending && s.pending.prompt?.includes(word)) s = answer(G, s, s.pending.options[0].id); return s; };
describe('REPLACE13=squeeze: Squeeze' , () => {
  it("is on the wheel in Shake Down's place", () => {
    const names = G.quadrant('thieves').actions.map(x => x.name);
    expect(names).toContain('Squeeze');
    expect(names).not.toContain('Shake Down');
  });
  it('steals 2 from each rival with more members than you, none from the rest, +1 magenta', () => {
    // P1 has 1 member; P2 has 2, P3 has 3 (more: squeezed); P4 has none
    let s = G.table(['red', 'thieves'], { n: 4, round: 2, members: [['red.volunteer'], ['red.recruiter', 'red.patriarch'], ['red.sponsor', 'red.host', 'red.crowd'], []],
      res: [{}, { red: 4 }, { blue: 4 }, { silver: 4 }] });
    s = answer(G, s, `slot:${slot(G, s, 'Squeeze')}`);
    s = drain(G, s, 'Squeeze');
    expect(total(s.players[1])).toBe(2);
    expect(total(s.players[2])).toBe(2);
    expect(total(s.players[3])).toBe(4);
    expect(total(s.players[0])).toBe(4 + 1);
  });
  it('nobody with more members: just the magenta', () => {
    let s = G.table(['red', 'thieves'], { n: 2, round: 2, members: [['red.volunteer'], []], res: [{}, { red: 4 }] });
    s = answer(G, s, `slot:${slot(G, s, 'Squeeze')}`);
    expect(s.players[0].res.magenta).toBe(1);
    expect(s.players[1].res.red).toBe(4);
  });
});
