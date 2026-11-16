// Purple's "Went last" mid-round names who places the round's last minion as the turns stand, not whoever placed most
// recently (Cory, Nov 14: "the 'leading' on the purple contest is weird and misleading").
import { describe, it, expect } from 'vitest';
import { createGame, applyMove } from '../../engine/v4/index.js';
import { chooseBotMove } from '../../engine/v4/bots.js';
import { standings, turnSequence } from '../../v4/format.js';

const rng = seed => () => { seed = (seed + 0x6D2B79F5) | 0; let x = Math.imul(seed ^ (seed >>> 15), 1 | seed); x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x; return ((x ^ (x >>> 14)) >>> 0) / 4294967296; };
const seats = ['You', 'Bo', 'Cy', 'Di'].map(name => ({ name, kind: 'human' }));
const purple = s => standings(s).find(x => x.qid === 'purple');

describe('Went last while minions are still to place', () => {
  it('names the player whose turn is last, the Goes Last token holder when it has minions on it', () => {
    let checked = 0, token = 0;
    for (let seed = 1; seed <= 12; seed++) {
      let g = createGame({ seats, seed, quadrants: ['purple', 'red', 'echo', 'thieves'], rules: { contests: 'byColor', deck: 10, roundDecks: 2 } });
      const rand = rng(seed);
      for (let i = 0; i < 600 && g.pending && !g.over; i++) {
        g = applyMove(g, chooseBotMove(g, rand));
        if (!(g.round >= 1)) continue;
        const left = turnSequence(g).filter(t => t.at !== 'done');
        const st = purple(g);
        if (!left.length) { expect(st.forecast).toBeUndefined(); continue; }
        const last = left[left.length - 1].pid;
        expect(st.leaders).toEqual([last]);
        expect(st.forecast.pid).toBe(last);
        expect(st.forecast.token).toBe(!!(g.goesLast && g.goesLast.round === g.round && g.goesLast.pid === last));
        if (st.forecast.token) token++;
        checked++;
      }
    }
    expect(checked).toBeGreaterThan(100);
    expect(token).toBeGreaterThan(0);
  });
});
