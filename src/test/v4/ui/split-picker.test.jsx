// Harvest's colors are picked whole, like a payment (Cory, Nov 4: "all the other purchasing selectors are solid and
// elegant. This one doesnt meet the bar"): a GETTING row already split, a stack per color, and Take, which answers the
// engine's one-coin questions in turn.
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import { createGame, resume } from '../../../engine/v4/core.js';
import { take, move } from '../../engine/v4/helpers.js';
import { giftPick } from '../../../v4/game/boardPick.js';
import GiftCard from '../../../v4/game/GiftCard.jsx';

afterEach(cleanup);

function scene() {
  const s = createGame({ seats: Array.from({ length: 3 }, (_, i) => ({ name: `P${i + 1}`, kind: 'human' })), seed: 7, quadrants: ['yellow', 'red', 'blue', 'purple'] });
  s.queue = []; s.pending = null; s.round = 1; s.slots = {}; s.order = []; s.log = [];
  s.players.forEach(p => { for (const r of s.resources) p.res[r] = 0; p.left = 3; });
  s.players[0].res.red = 2;
  s.queue = [{ t: 'turn', p: 0 }];
  return resume(s);
}

describe('Harvest on the split card', () => {
  it('opens split the way the engine suggests (fewest held first), and a stack click moves a coin to its color', () => {
    const s = take(scene(), 'yellow.harvest');
    const g = giftPick(s, s.pending);
    expect([g.kind, g.toPick]).toEqual(['color', 3]);
    const { container } = render(<GiftCard state={s} gift={g} onFirst={() => {}} onAnswer={() => {}} busy={false} />);
    const takeBtn = () => container.querySelector('[data-split-take]').dataset.splitTake;
    expect(container.querySelector('.gc-what').textContent).toBe('+3 in colors you choose');
    expect(takeBtn()).toBe('1yellow 1blue 1purple');
    fireEvent.click(container.querySelector('[data-split-add="red"]'));
    fireEvent.click(container.querySelector('[data-split-add="red"]'));
    fireEvent.click(container.querySelector('[data-split-add="red"]'));
    expect(takeBtn()).toBe('3red');
  });
  it('Take answers each question in turn, one coin each', async () => {
    vi.useFakeTimers();
    try {
      let s = take(scene(), 'yellow.harvest');
      const answers = [];
      const onAnswer = id => { answers.push(id); s = move(s, id); const g2 = s.pending && giftPick(s, s.pending); if (g2) view.rerender(<GiftCard state={s} gift={giftPick(s, s.pending)} onFirst={() => {}} onAnswer={onAnswer} busy={false} />); };
      const view = render(<GiftCard state={s} gift={giftPick(s, s.pending)} onFirst={() => {}} onAnswer={onAnswer} busy={false} />);
      fireEvent.click(view.container.querySelector('[data-split-add="yellow"]'));
      fireEvent.click(view.container.querySelector('[data-split-add="yellow"]'));
      fireEvent.click(view.container.querySelector('[data-split-take]'));
      for (let k = 0; k < 4; k++) await act(async () => { vi.advanceTimersByTime(200); });
      expect(answers).toEqual(['color:yellow', 'color:yellow', 'color:yellow']);
      expect(s.players[0].res.yellow).toBe(3);
    } finally { vi.useRealTimers(); }
  });
});

// Matchmaker (Cory, Nov 6: "Matchmaker resource selection is slow"): a member's "+2 in colors you choose" took one click on
// your stacks per coin; it takes the same split card as Harvest, one Take for the whole gain.
describe("Matchmaker's colors on the split card", () => {
  it('a yellow recruit opens the split card, and Take answers both coins (Nov 11: +2 wild)', async () => {
    const { sceneQ } = await import('../../engine/v4/cards-helpers.js');
    const { uidOf } = await import('../../engine/v4/helpers.js');
    const rich = { gold: 30, red: 30, yellow: 30, green: 30 };
    let s = sceneQ({ quadrants: ['gold', 'red', 'yellow', 'green'], round: 3, res: [rich], members: [['yellow.matchmaker']], shop: ['yellow.dyer'] });
    s = move(take(s, 'red.take'), `card:${uidOf(s, 'yellow.dyer', 'shop')}`);
    const g = giftPick(s, s.pending);
    expect([g.title, g.kind, g.toPick]).toEqual(['Matchmaker', 'color', 2]);
    vi.useFakeTimers();
    try {
      const answers = [];
      const onAnswer = id => { answers.push(id); s = move(s, id); const g2 = s.pending && giftPick(s, s.pending); if (g2) view.rerender(<GiftCard state={s} gift={g2} onFirst={() => {}} onAnswer={onAnswer} busy={false} />); };
      const view = render(<GiftCard state={s} gift={g} onFirst={() => {}} onAnswer={onAnswer} busy={false} />);
      expect(view.container.querySelector('.gc-what').textContent).toBe('+2 in colors you choose');
      fireEvent.click(view.container.querySelector('[data-split-add="gold"]'));
      fireEvent.click(view.container.querySelector('[data-split-add="gold"]'));
      fireEvent.click(view.container.querySelector('[data-split-take]'));
      for (let k = 0; k < 4; k++) await act(async () => { vi.advanceTimersByTime(200); });
      expect(answers).toEqual(['color:gold', 'color:gold']);
    } finally { vi.useRealTimers(); }
  });
});
