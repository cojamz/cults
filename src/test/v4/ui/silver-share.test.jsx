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

function scene(round = 1) {
  const s = createGame({ seats: Array.from({ length: 3 }, (_, i) => ({ name: `P${i + 1}`, kind: 'human' })), seed: 7, quadrants: ['gold', 'red', 'blue', 'silver'] });
  s.queue = []; s.pending = null; s.round = round; s.slots = {}; s.order = []; s.log = [];
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

describe('Largesse on the gift card (Cory, Nov 6: "should have to give 12. And give 10 followers.")', () => {
  it('asks for all 12, offers no way out, and says +10 followers once all are given', () => {
    const s = move(take(scene(3), 'silver.largesse'), 'player:1');
    const { container } = view(s);
    expect(container.querySelector('.gc-title').textContent).toBe('Largesse · 1 given · 11 left');
    expect(container.querySelector('.gc-rest')).toBeNull();
    expect(container.querySelector('.gc-sub').textContent).toBe('One per click, from the bank. +10 followers once all 12 are given.');
  });
});

describe('Party Gifts set whole and given in one move (Cory, Nov 13: "they should make that decision all at once")', () => {
  it('clicks on faces only set the split; Give sends every pick, then Done, in one answer', async () => {
    const { fireEvent } = await import('@testing-library/react');
    const { applyMove } = await import('../../../engine/v4/core.js');
    const s = take(scene(), 'silver.partygifts');
    const answered = [], sent = [];
    const { container } = render(<GiftCard state={s} gift={giftPick(s, s.pending)} onFirst={() => {}} onAnswer={id => answered.push(id)} onAnswerAll={ids => { sent.push(ids); return ids.length; }} busy={false} />);
    fireEvent.click(container.querySelector('.gc-share[data-pid="1"]'));
    fireEvent.click(container.querySelector('.gc-share[data-pid="2"]'));
    expect(answered).toEqual([]);
    expect(container.querySelector('.gc-title').textContent).toBe('Party Gifts · 2 given · 1 left');
    fireEvent.click(container.querySelector('[data-share-give]'));
    expect(sent).toEqual([['player:1', 'player:2', 'done']]);
    // the engine takes it as one move: each rival +1 silver
    const next = applyMove(s, { player: 0, option: 'player:1', then: ['player:2', 'done'] });
    expect([next.players[1].res.silver, next.players[2].res.silver]).toEqual([1, 1]);
  });
});
