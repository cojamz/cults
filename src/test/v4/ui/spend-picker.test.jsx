// Exchange's turn-in is picked whole, like a payment, on the same card as Harvest's (Cory left the call to Claude, Nov 4:
// "you make it happen"): a TURNING IN row already picked, a stack per color, and a button that answers the engine's
// one-coin questions in turn, then Done when you stop early.
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import { createGame, resume } from '../../../engine/v4/core.js';
import { take, move } from '../../engine/v4/helpers.js';
import { giftPick } from '../../../v4/game/boardPick.js';
import GiftCard from '../../../v4/game/GiftCard.jsx';

afterEach(cleanup);

function scene(round) {
  const s = createGame({ seats: Array.from({ length: 3 }, (_, i) => ({ name: `P${i + 1}`, kind: 'human' })), seed: 7, quadrants: ['trading', 'red', 'blue', 'purple'] });
  s.queue = []; s.pending = null; s.round = round; s.slots = {}; s.order = []; s.log = [];
  s.players.forEach(p => { for (const r of s.resources) p.res[r] = 0; p.left = 3; });
  s.players[0].res.red = 3; s.players[0].res.blue = 1;
  s.queue = [{ t: 'turn', p: 0 }];
  return resume(s);
}

describe('Exchange on the spend card', () => {
  it('opens with the round\'s limit picked from the biggest pile, and a click keeps a coin', () => {
    const s = take(scene(2), 'Exchange');
    const g = giftPick(s, s.pending);
    expect([g.kind, g.left, g.per]).toEqual(['spend', 2, 2]);
    const { container } = render(<GiftCard state={s} gift={g} onFirst={() => {}} onAnswer={() => {}} busy={false} />);
    const plan = () => container.querySelector('[data-spend-take]').dataset.spendTake;
    expect(plan()).toBe('2red');
    fireEvent.click(container.querySelector('[data-spend-coin="red"]'));
    fireEvent.click(container.querySelector('[data-spend-add="blue"]'));
    expect(plan()).toBe('1red 1blue');
    expect(container.querySelector('.pay-go').textContent).toContain('4');
  });
  it('the button answers each coin, then Done when you stop early', async () => {
    vi.useFakeTimers();
    try {
      let s = take(scene(3), 'Exchange');
      const answers = [];
      const before = s.players[0].res.red;
      const onAnswer = id => { answers.push(id); s = move(s, id); const g2 = s.pending && giftPick(s, s.pending); if (g2) view.rerender(<GiftCard state={s} gift={g2} onFirst={() => {}} onAnswer={onAnswer} busy={false} />); };
      const view = render(<GiftCard state={s} gift={giftPick(s, s.pending)} onFirst={() => {}} onAnswer={onAnswer} busy={false} />);
      // round III: up to 3; keep it to two reds
      for (const c of ['red', 'red', 'red', 'white', 'blue']) { const b = view.container.querySelector(`[data-spend-coin="${c}"]`); if (b) fireEvent.click(b); }
      fireEvent.click(view.container.querySelector('[data-spend-add="red"]'));
      fireEvent.click(view.container.querySelector('[data-spend-add="red"]'));
      expect(view.container.querySelector('[data-spend-take]').dataset.spendTake).toBe('2red');
      fireEvent.click(view.container.querySelector('[data-spend-take]'));
      for (let k = 0; k < 5; k++) await act(async () => { vi.advanceTimersByTime(200); });
      expect(answers).toEqual(['color:red', 'color:red', 'done']);
      expect(s.players[0].res.red).toBe(before - 2);
      expect(s.pending && s.pending.kind).not.toBe('choose');
    } finally { vi.useRealTimers(); }
  });
});
