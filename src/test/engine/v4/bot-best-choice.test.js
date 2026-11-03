import { describe, it, expect } from 'vitest';
import { createGame, applyMove } from '../../../engine/v4/core.js';
import { chooseBotMove, botInternals } from '../../../engine/v4/bots.js';
import { seededRandom } from '../../../engine/v4/rng.js';

// Cory, Nov 2: "so bots are interpreting text instead of doing best thing possible?" Every "you choose" a bot answers
// (a rival, a color, a resource, a member, a trade) is played out on a copy of the game over every option, and the
// bot takes the best. Until Nov 2 most followed the card's hint and trades looked only at a top-16 shortlist, so
// Doormen never sent a rival's 10-cost member away for a 1-cost one, and the hint chose worse in 1 Party Favors pick
// of 2 (scripts/v4-bot-choice-audit.mjs).
describe('bots answer every choice with the best option', () => {
  it('picks the best-rated option at every choice, over every option (silver, thieves, yellow, market)', () => {
    let checked = 0, big = 0, fails = 0;
    for (const seed of [2, 3]) {
      const rand = seededRandom(seed);
      let s = createGame({ seats: Array.from({ length: 4 }, () => ({ kind: 'bot' })), seed, quadrants: ['silver', 'thieves', 'yellow', 'market'], rules: { deck: 10 } });
      let k = 0;
      while (!s.over && k++ < 4000) {
        const pend = s.pending;
        const mv = chooseBotMove(s, rand, { level: 'normal' });
        if (pend.kind === 'choose' && pend.options.length > 1) {
          const trade = pend.options.some(o => o.kind === 'trade') && pend.options.every(o => o.kind === 'trade' || o.kind === 'pass');
          const opts = trade ? pend.options.filter(o => o.kind === 'trade') : pend.options.every(o => o.kind === 'member') ? pend.options : botInternals.avoidUndo(s, pend);
          globalThis.__swapFail = 0;
          const rated = botInternals.rateOnCopy(s, pend, opts);
          fails += globalThis.__swapFail;
          const top = Math.max(...rated.map(r => r.v));
          const mine = rated.find(r => r.o.id === mv.option);
          // a lone take-back trade is skipped with "Don't swap" (not in the rated list)
          if (mine) { expect(mine.v).toBeGreaterThanOrEqual(top - 0.01); checked++; if (opts.length > 16) big++; }
        }
        s = applyMove(s, mv);
      }
    }
    expect(checked).toBeGreaterThan(20);
    expect(fails).toBe(0);
  }, 120000);
});
