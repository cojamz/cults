// @vitest-environment node
// Idea pipeline pool 9, Encore Crowd (Headliners' variation): its own file, since both take Green's one round III spot.
import { describe, it, expect } from 'vitest';
import { take, move } from './helpers.js';
import { sceneQ, passBuys } from './cards-helpers.js';
import { usePool } from './pool-helpers.js';

usePool([], ['echo.encorecrowd']);
const Q = ['echo', 'gold', 'purple', 'market'];

describe('Encore Crowd (Green, round III)', () => {
  it('Copy a round III action a rival has a minion on. +1 green.', () => {
    let s = sceneQ({ quadrants: Q, round: 3, res: [{}, { gold: 5 }], queue: [1, 0].map(p => ({ t: 'turn', p })) });
    s = passBuys(take(s, 'gold.strike')); // P2: Double Down
    s = take(s, 'echo.encorecrowd');
    expect(s.players[0].res.green).toBe(1);
    // the one rival round III space is offered (or copied straight away when it is the only one)
    if (s.pending?.kind === 'choose' && s.pending.prompt.startsWith('Encore Crowd')) {
      expect(s.pending.options.every(o => o.label.includes('(P2)'))).toBe(true);
      s = move(s, s.pending.options.find(o => o.label.startsWith('Double Down')).id);
    }
    expect(s.players[0].res.gold).toBeGreaterThan(0);
  });
  it('an open round III action is not offered', () => {
    let s = sceneQ({ quadrants: Q, round: 3, res: [{ gold: 4 }] });
    s = take(s, 'echo.encorecrowd');
    expect(s.players[0].res.gold).toBe(4);
    expect(s.players[0].res.green).toBe(1);
  });
});
