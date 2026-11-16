// @vitest-environment node
// Place Keepers (Cory, Nov 12: "Place Keepers is good"): "Round Start: choose your place in this round's turn order."
import { describe, expect, it } from 'vitest';
import { applyMove } from '../../../engine/v4/core.js';
import { defById } from '../../../engine/v4/content/index.js';
import { STRAYS } from './stray.js';

const seats = [{ name: 'A', kind: 'bot' }, { name: 'B', kind: 'bot' }, { name: 'C', kind: 'bot' }];

describe('Place Keepers', () => {
  it('prints its text and replaces Gossip', () => {
    expect(defById('purple.placekeepers').text).toBe("Round Start: choose your place in this round's turn order.");
    expect(defById('purple.gossip').retired).toBe(true);
    expect(STRAYS.has('purple.gossip')).toBe(true);
  });
  it('lets its owner pick a place, and the round\'s turns follow it', async () => {
    const { table } = await import('./cards-helpers-b.js');
    let s = table(['purple', 'red', 'yellow'], { n: 3, round: 1, members: [[], [], ['purple.placekeepers']], queue: [{ t: 'round', r: 2 }] });
    expect(s.pending.prompt).toMatch(/^Place Keepers: choose your place/);
    expect(s.pending.player).toBe(2);
    const before = s.order.slice(0, 3);
    s = applyMove(s, { player: 2, option: s.pending.options.find(o => o.value === 0).id });
    expect(s.order[0]).toBe(2);
    expect(new Set(s.order.slice(0, 3))).toEqual(new Set(before));
    const turns = [s.pending.player, ...s.queue.filter(t => t.t === 'turn').map(t => t.p)];
    expect(turns[0]).toBe(2);
    expect(turns.slice(3, 6)).toEqual(turns.slice(0, 3).reverse());
    expect(s.log.some(l => /Place Keepers: P3 takes place 1/.test(l))).toBe(true);
  });
});
