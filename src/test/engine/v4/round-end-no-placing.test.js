// @vitest-environment node
// Cory, Nov 26: "you can't play again when round end is reached". In a bot game Dusk Buyer ("Round End: +3 blue, then
// you may recruit from the discard pile.") recruited Extra Hand ("On Recruit: +1 minion this round.") and the new minion
// was placed before scoring. Once the last minion is placed, nothing more is placed that round.
import { describe, it, expect } from 'vitest';
import { applyMove } from '../../../engine/v4/core.js';
import { still, go } from './pool-helpers.js';

const Q = ['market', 'purple', 'red', 'silver'];

describe('a minion gained at Round End is never placed', () => {
  it('Dusk Buyer recruits Extra Hand from the discard pile: no extra minion, nothing placed', () => {
    let s = still({ quadrants: Q, n: 3, members: [['market.lastminute'], []] });
    s.round = 2;
    const k = s.pile.findIndex(u => s.cards[u].def === 'benders.extrahand');
    expect(k).toBeGreaterThanOrEqual(0);
    const uid = s.pile.splice(k, 1)[0];
    (s.discard ||= []).push(uid);
    const p = s.players[0];
    for (const c of Object.keys(p.res)) p.res[c] = 9;
    p.left = 0;
    s = go(s, [{ t: 'allPlaced' }]);
    for (let g = 0; g < 12 && s.pending; g++) {
      const o = s.pending.options.find(x => /Extra Hand/.test(`${x.id} ${x.label}`)) || s.pending.options[0];
      s = applyMove(s, { player: s.pending.player, option: o.id });
    }
    const P = s.players[0];
    expect(P.members.some(u => s.cards[u].def === 'benders.extrahand')).toBe(true);
    expect(s.log.some(l => /Extra Hand: Round End has been reached, so no extra minion/.test(l))).toBe(true);
    expect(P.left).toBe(0);
    expect(s.queue.some(t => t.t === 'turn')).toBe(false);
  });

  it('the next round places again: the flag clears at Round Start', () => {
    let s = still({ quadrants: Q, n: 3, members: [[], []] });
    s.placingOver = true;
    s = go(s, [{ t: 'round', r: 2 }]);
    expect(s.placingOver).toBeUndefined();
  });
});
