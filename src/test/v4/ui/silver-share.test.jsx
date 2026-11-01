// Rivals gain silver one click at a time (Party Gifts, Largesse; Cory, 2026-11-01: "not clear how many times you've
// clicked / what's remaining"): the gift card says how many are given and left, and each rival's face shows its tally.
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { createGame, resume } from '../../../engine/v4/core.js';
import { registerQuadrant } from '../../../engine/v4/content/index.js';
import silver from '../../../engine/v4/content/silver.js';
import { take, move } from '../../engine/v4/helpers.js';
import { giftPick } from '../../../v4/game/boardPick.js';
import GiftCard from '../../../v4/game/GiftCard.jsx';

registerQuadrant(silver);
afterEach(cleanup);

function scene() {
  const s = createGame({ seats: Array.from({ length: 3 }, (_, i) => ({ name: `P${i + 1}`, kind: 'human' })), seed: 7, quadrants: ['gold', 'red', 'blue', 'silver'] });
  s.queue = []; s.pending = null; s.round = 1; s.slots = {}; s.order = []; s.log = [];
  s.players.forEach(p => { for (const r of s.resources) p.res[r] = 0; p.left = 3; });
  s.queue = [{ t: 'turn', p: 0 }];
  return resume(s);
}
const view = s => render(<GiftCard state={s} gift={giftPick(s, s.pending)} onFirst={() => {}} onAnswer={() => {}} busy={false} />);

describe('Party Gifts on the gift card', () => {
  it('opens with 0 given, 3 left, a face per rival and Give nothing', () => {
    const s = take(scene(), 'silver.partygifts');
    const g = giftPick(s, s.pending);
    expect(g.kind).toBe('share');
    expect([g.total, g.left]).toEqual([0, 3]);
    const { container } = view(s);
    expect(container.querySelector('.gc-title').textContent).toBe('Party Gifts · 0 given · 3 left');
    expect(container.querySelectorAll('.gc-share')).toHaveLength(2);
    expect(container.querySelector('.gc-tally')).toBeNull();
    expect(container.querySelector('.gc-rest').textContent).toBe('Give nothing');
  });
  it('after two clicks: 2 given, 1 left, the tally on each face, Done: give 2', () => {
    const s = move(move(take(scene(), 'silver.partygifts'), 'player:1'), 'player:1');
    const g = giftPick(s, s.pending);
    expect([g.total, g.left, g.given[1]]).toEqual([2, 1, 2]);
    const { container } = view(s);
    expect(container.querySelector('.gc-title').textContent).toBe('Party Gifts · 2 given · 1 left');
    expect(container.querySelector('.gc-share[data-pid="1"] .gc-tally').textContent).toBe('+2');
    expect(container.querySelector('.gc-share[data-pid="2"] .gc-tally')).toBeNull();
    expect(container.querySelector('.gc-sub').textContent).toContain('+4 so far');
    expect(container.querySelector('.gc-rest').textContent).toBe('Done: give 2');
  });
});
