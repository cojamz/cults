// @vitest-environment node
// Actions lane r4 batch (Nov 4): Royalties (Build Up's place), No Thanks (Walk-In's).
import { describe, it, expect } from 'vitest';

process.env.REPLACE11 = 'royalties,nothanks';
const { applyMove } = await import('../../../engine/v4/core.js');
const { quadrant } = await import('../../../engine/v4/content/index.js');
const { table } = await import('./cards-helpers-b.js');
delete process.env.REPLACE11;

const slotOf = (s, qid, name) => `slot:${s.quadrants.indexOf(qid)}-${quadrant(qid).actions.findIndex(a => a.name === name)}`;
const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });

describe('REPLACE11 r4 spaces, b', () => {
  it('No Thanks: give the top member away for +3 red', () => {
    let s = table(['red', 'echo'], { n: 2, round: 1 });
    const me = s.pending.player, top = s.pile[0], r0 = s.players[me].res.red || 0;
    s = answer(s, slotOf(s, 'red', 'No Thanks'));
    s = answer(s, 'give');
    s = answer(s, s.pending.options[0].id);
    expect(s.players[1 - me].members).toContain(top);
    expect(s.players[me].res.red - r0).toBe(4);
  });
  it('Royalties is on the wheel and opens a tab', () => {
    let s = table(['echo', 'red'], { n: 2, round: 1 });
    const me = s.pending.player;
    s = answer(s, slotOf(s, 'echo', 'Royalties'));
    expect(s.royalties).toEqual([{ pid: s.players[me].id, round: 1 }]);
  });
});
