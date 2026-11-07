// Out of Style's pick ("send which color to the discard pile?") counts shop members, so each choice shows a member
// figure in its color and how many go, not a bare resource dot (picky run, Nov 7: three dots, one "grey", no counts).
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { createGame, resume } from '../../../engine/v4/core.js';
import { install } from '../../../engine/v4/content/market.js';
import { take } from '../../engine/v4/helpers.js';
import { giftPick } from '../../../v4/game/boardPick.js';
import GiftCard from '../../../v4/game/GiftCard.jsx';

install();
afterEach(cleanup);

function scene() {
  const s = createGame({ seats: Array.from({ length: 3 }, (_, i) => ({ name: `P${i + 1}`, kind: 'human' })), seed: 7, quadrants: ['gold', 'red', 'market', 'green'] });
  s.queue = []; s.pending = null; s.round = 1; s.slots = {}; s.order = []; s.log = [];
  s.players.forEach(p => { for (const r of s.resources) p.res[r] = 0; p.left = 3; });
  s.queue = [{ t: 'turn', p: 0 }];
  return resume(s);
}

describe('Out of Style on the pick card', () => {
  it('shows each color as a member figure, its name and its count in the shop', () => {
    const s = take(scene(), 'market.restock');
    expect(s.pending.prompt).toMatch(/Out of Style/);
    const g = giftPick(s, s.pending);
    const { container } = render(<GiftCard state={s} gift={g} onFirst={() => {}} onAnswer={() => {}} busy={false} />);
    const items = [...container.querySelectorAll('.gc-sent')];
    expect(items.length).toBe(s.pending.options.length);
    for (const o of s.pending.options) {
      const el = container.querySelector(`.gc-sent[data-res="${o.value}"]`);
      expect(el.querySelector('.num').textContent).toBe(String(o.hint));
      expect(el.querySelector('.gc-word').textContent).toBe(o.value === 'neutral' ? 'grey' : o.value);
      if (o.value !== 'neutral') expect(el.querySelector(`[data-member-glyph="${o.value}"]`)).not.toBeNull();
    }
  });
});
