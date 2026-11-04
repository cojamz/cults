// @vitest-environment node
// Loan (REPLACE11=loan, Actions lane r4 batch, Nov 4): Exchange's place.
import { describe, it, expect } from 'vitest';

process.env.REPLACE11 = 'loan';
const { applyMove, resume } = await import('../../../engine/v4/core.js');
const { quadrant } = await import('../../../engine/v4/content/index.js');
const { table } = await import('./cards-helpers-b.js');
delete process.env.REPLACE11;

const slotOf = (s, qid, name) => `slot:${s.quadrants.indexOf(qid)}-${quadrant(qid).actions.findIndex(a => a.name === name)}`;

describe('REPLACE11: Loan', () => {
  it('+4 white in round I and a debt that falls due after the last placement', () => {
    let s = table(['trading', 'red'], { n: 2, round: 1, left: 1 });
    const me = s.pending.player, w0 = s.players[me].res.white || 0;
    s = applyMove(s, { player: me, option: slotOf(s, 'trading', 'Loan') });
    expect(s.players[me].res.white - w0).toBe(4);
    expect(s.loans).toEqual([{ pid: s.players[me].id, round: 1 }]);
    s.pending = null; s.queue = [{ t: 'allPlaced' }]; resume(s);
    expect(s.pending?.prompt).toMatch(/Loan: pay back 3 white/);
    s = applyMove(s, { player: me, option: 'pay' });
    expect(s.players[me].res.white).toBe(w0 + 1);
  });
});
