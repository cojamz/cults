// Several answers to one question in one move (Cory, Nov 13: "they should make that decision all at once"; steals stay
// one at a time: "for stealing it should still be one at a time"). core applyRun / runnable / runLength.
import { describe, it, expect } from 'vitest';
import { createGame, applyMove, runnable, runLength } from '../../../engine/v4/core.js';
import { chooseBotMove } from '../../../engine/v4/bots.js';
import { seededRandom } from '../../../engine/v4/rng.js';
import { step } from '../../../v4/session/record.js';

const COLORS = ['market', 'red', 'yellow', 'purple', 'echo', 'thieves', 'silver', 'trading'];
// play bot games until the first state where `want(state)` holds
function find(want, games = 120) {
  for (let g = 0; g < games; g++) {
    const rand = seededRandom(1000 + g);
    const qs = [...COLORS].sort(() => rand() - 0.5).slice(0, 4);
    let s = createGame({ seats: [0, 1, 2, 3].map(i => ({ name: `P${i + 1}`, kind: 'bot' })), seed: 1000 + g, quadrants: qs });
    for (let m = 0; m < 2000 && s.pending && !s.over; m++) {
      if (want(s)) return s;
      s = applyMove(s, chooseBotMove(s, rand));
    }
  }
  return null;
}
const h = s => s.queue[0] && s.queue[0].h;
const strip = s => JSON.parse(JSON.stringify(s));

describe('answer runs', () => {
  const harvest = find(s => h(s) === 'yellow.wild' && s.queue[0].data.left >= 3);
  it('a Harvest-style split takes all its picks in one move, the same as one by one', () => {
    expect(harvest).toBeTruthy();
    const p = harvest.pending.player;
    expect(runnable(harvest)).toBe(true);
    expect(runLength(harvest)).toBe(harvest.queue[0].data.left);
    const ids = harvest.pending.options.slice(0, 2).map(o => o.id);
    const picks = [ids[0], ids[1], ids[0]];
    let one = harvest;
    for (const id of picks) one = applyMove(one, { player: p, option: id });
    const run = applyMove(harvest, { player: p, option: picks[0], then: picks.slice(1) }, { effects: true });
    expect(strip(run)).toEqual(strip(one));
    // the table gets one step: each stack's coins summed into one flight
    const gains = run.effects.filter(e => e.type === 'gain');
    expect(gains.reduce((n, e) => n + e.what.n, 0)).toBe(3);
    expect(new Set(gains.map(e => e.to.r)).size).toBe(gains.length);
  });
  it('records keep one entry per pick, so a replay plays it pick by pick', () => {
    const p = harvest.pending.player, id = harvest.pending.options[0].id;
    const st = { ...harvest, history: [] };
    const next = step(st, { player: p, option: id, then: [id, id] });
    expect(next.history).toEqual([[p, id], [p, id], [p, id]]);
  });
  it('a run longer than the question is refused whole', () => {
    const p = harvest.pending.player, id = harvest.pending.options[0].id;
    const n = harvest.queue[0].data.left;
    expect(() => applyMove(harvest, { player: p, option: id, then: Array(n).fill(id) })).toThrow(/no question left/);
  });
  it('steals stay one at a time', () => {
    const steal = find(s => h(s) === 'thieves.take');
    expect(steal).toBeTruthy();
    expect(runnable(steal)).toBe(false);
    expect(runLength(steal)).toBe(0);
    const p = steal.pending.player, id = steal.pending.options[0].id;
    expect(() => applyMove(steal, { player: p, option: id, then: [id] })).toThrow();
  });
  it('a steal hidden behind a player pick (Heist) is refused too', () => {
    const heist = find(s => h(s) === 'thieves.heistSplit' && s.queue[0].data && s.queue[0].data.left >= 2);
    if (!heist) return;
    expect(runLength(heist)).toBe(0);
    const p = heist.pending.player, id = heist.pending.options[0].id;
    expect(() => applyMove(heist, { player: p, option: id, then: [id] })).toThrow(/one at a time/);
  });
  it('Party Gifts hands out its silver in one move', () => {
    const share = find(s => h(s) === 'silver.share');
    expect(share).toBeTruthy();
    expect(runLength(share)).toBeGreaterThan(1);
    const p = share.pending.player, rival = share.pending.options.find(o => o.kind === 'player');
    const done = () => applyMove(share, { player: p, option: rival.id, then: [rival.id] });
    expect(done).not.toThrow();
  });
});
