// @vitest-environment node
// Lane F (REPLACE13=cleanout, Nov 4; quality/pitches/F-batch1.md): a candidate for Shake Down's slot (Magenta round II).
// One test per sentence, plus the pitched turn.
import { describe, it, expect } from 'vitest';

process.env.REPLACE13 = 'cleanout';
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
describe('REPLACE13=cleanout: Clean Out' , () => {
  it("is on the wheel in Shake Down's place, round II", () => {
    const a = G.quadrant('thieves').actions;
    expect(a.map(x => x.name)).toContain('Clean Out');
    expect(a.map(x => x.name)).not.toContain('Shake Down');
    expect(a.find(x => x.name === 'Clean Out').ring).toBe(2);
  });
  it('steals all of one color from one rival when they hold 5 or less, +1 magenta', () => {
    let s = G.table(['silver', 'thieves'], { n: 3, round: 2, res: [{}, { silver: 4, red: 3 }, { blue: 2 }] });
    s = answer(G, s, `slot:${slot(G, s, 'Clean Out')}`);
    s = answer(G, s, 'take:1:silver');
    expect(s.players[1].res.silver || 0).toBe(0);
    expect(s.players[1].res.red).toBe(3);
    expect(s.players[0].res.silver).toBe(4);
    expect(s.players[0].res.magenta).toBe(1);
    expect(s.log.join('\n')).toContain("P1's Clean Out: stole 4 silver from P2.");
  });
  it('takes at most 5 of the color', () => {
    let s = G.table(['silver', 'thieves'], { n: 2, round: 2, res: [{}, { silver: 8 }] });
    s = answer(G, s, `slot:${slot(G, s, 'Clean Out')}`);
    s = answer(G, s, 'take:1:silver');
    expect(s.players[1].res.silver).toBe(3);
    expect(s.players[0].res.silver).toBe(5);
  });
  it('pitched turn: Ben holds 6 silver for the Silver contest; Ana takes 5 and Ben drops to 1', () => {
    let s = G.table(['silver', 'thieves'], { n: 4, round: 2, res: [{ silver: 2 }, { silver: 6, blue: 2 }, { silver: 3 }, {}] });
    s = answer(G, s, `slot:${slot(G, s, 'Clean Out')}`);
    s = answer(G, s, 'take:1:silver');
    expect(s.players[0].res.silver).toBe(7);
    expect(s.players[1].res.silver).toBe(1);
  });
});
