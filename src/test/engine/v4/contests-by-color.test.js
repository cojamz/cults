// @vitest-environment node
// The By color contests setting (Cory, Nov 3: "yellow should be sets of colors. purple should be whoever went last.").
import { describe, it, expect } from 'vitest';
import { createGame, applyMove, chooseBotMove } from '../../../engine/v4/index.js';
import { scoringOf, contextFor } from '../../../engine/v4/core.js';
import { seededRandom } from '../../../engine/v4/rng.js';

const game = () => createGame({ seats: Array.from({ length: 4 }, () => ({ kind: 'bot' })), seed: 4, quadrants: ['purple', 'yellow', 'red', 'echo'], rules: { contests: 'byColor' } });

describe('By color contests', () => {
  it('Purple: whoever placed the round\'s last minion scores, nobody else', () => {
    let s = game();
    const rand = seededRandom(4);
    const placed = () => s.log.some(l => / took | joined /.test(l));
    while (!s.over && !(placed() && !s.queue.some(t => t.t === 'turn' || t.t === 'place') && s.pending?.kind !== 'place')) s = applyMove(s, chooseBotMove(s, rand));
    const last = [...s.log].reverse().find(l => / took | joined /.test(l));
    const sc = scoringOf(s, 'purple');
    expect(sc.label).toBe('Went last');
    const ctx = contextFor(s);
    const scores = s.players.map(p => sc.score(ctx, p));
    expect(scores.filter(n => n === 1)).toHaveLength(1);
    expect(last.startsWith(`${s.players[scores.indexOf(1)].name} `)).toBe(true);
  });
  it('Yellow: full sets of one of every color in play', () => {
    const s = game();
    const p = s.players[0];
    for (const r of s.resources) p.res[r] = 3;
    p.res[s.resources[0]] = 2;
    expect(scoringOf(s, 'yellow').score(contextFor(s), p)).toBe(2);
    p.res[s.resources[1]] = 0;
    expect(scoringOf(s, 'yellow').score(contextFor(s), p)).toBe(0);
  });
});

describe('By color: Green and White (Cory, Nov 3)', () => {
  it('Green: a tie on minions stays a tie ("ties are split… like they already were…"); White: fewest followers', () => {
    const s = game();
    const ctx = contextFor(s);
    const g = scoringOf(s, 'echo'), w = scoringOf(s, 'trading');
    const qi = s.quadrants.indexOf('echo');
    s.slots[`${qi}-0`] = 0; s.slots[`${qi}-1`] = 1;
    s.players[0].res.green = 2; s.players[1].res.green = 5;
    expect(g.score(ctx, s.players[1])).toBe(g.score(ctx, s.players[0]));
    expect(g.tiebreak).toBeUndefined();
    expect(g.score(ctx, s.players[2])).toBe(0);
    expect(w.label).toBe('Fewest followers');
    s.players[3].bonus -= 1; s.players[0].bonus += 3;
    const best = Math.max(...s.players.map(p => w.score(ctx, p)));
    expect(s.players.filter(p => w.score(ctx, p) === best).map(p => p.id)).toEqual([3]);
  });
});
