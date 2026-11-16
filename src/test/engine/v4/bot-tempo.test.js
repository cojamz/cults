import { describe, it, expect } from 'vitest';
import { createGame, applyMove, actionAt, contextFor } from '../../../engine/v4/core.js';
import { chooseBotMove, tempoGain, scoreOptions } from '../../../engine/v4/bots.js';
import { seededRandom } from '../../../engine/v4/rng.js';

// Bot audit, Nov 11 (Cory: "crunch time is good. your bots suck"). Moving your own turns up (Crunch Time, Right Away)
// was worth 0 to the bots: the copy a placement is judged on has no turn queue. With tempo on, it's worth the better
// spaces those turns get by coming before rivals' turns, and nothing once you have no turns left to move.
const roundTwoPurple = seed => {
  const rand = seededRandom(seed);
  let s = createGame({ seats: Array.from({ length: 4 }, () => ({ kind: 'bot' })), seed, quadrants: ['purple', 'red', 'echo', 'trading'], rules: { deck: 10 } });
  for (let k = 0; k < 4000 && !s.over; k++) {
    if (s.round === 2 && s.pending?.kind === 'place') return s;
    s = applyMove(s, chooseBotMove(s, rand, { level: 'normal' }));
  }
  return null;
};
const rally = s => s.pending.options.find(o => o.kind === 'slot' && actionAt(s, o.q, o.i)?.key === 'rally');
const ranked = s => s.pending.options.filter(o => o.kind === 'slot').map(o => ({ key: `${o.q}-${o.i}`, v: actionAt(s, o.q, o.i).estimate(contextFor(s), s.players[s.pending.player]) || 0 })).sort((a, b) => b.v - a.v);

describe('bots value moving their turns up', () => {
  it('credits Crunch Time with first picks on a round II first minion, and nothing for other spaces', () => {
    const s = roundTwoPurple(5);
    expect(s).toBeTruthy();
    const o = rally(s);
    expect(o).toBeTruthy();
    expect(tempoGain(s, o, ranked(s))).toBeGreaterThan(0);
    const other = s.pending.options.find(x => x.kind === 'slot' && x !== o && !['again', 'rally'].includes(actionAt(s, x.q, x.i)?.key));
    expect(tempoGain(s, other, ranked(s))).toBe(0);
  });
  it('raises Crunch Time in the ranking only when tempo is on', () => {
    const s = roundTwoPurple(5);
    const o = rally(s);
    const v = on => scoreOptions(s, () => 0, { tempo: on }).find(r => r.o.id === o.id).v;
    expect(v(true)).toBeGreaterThan(v(false));
  });
});
