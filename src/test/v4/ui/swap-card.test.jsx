// Night Traders' swaps (Cory, Nov 5: the swapping "is also clunky"): the Launderers card with a cap. Set the colors with
// − and +, up to 3 swaps; Done (Swap N) answers the engine's one-for-one swaps for that mix, one after another.
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup, act } from '@testing-library/react';
import { applyMove } from '../../../engine/v4/index.js';
import { table as scene } from '../../engine/v4/cards-helpers-b.js';
import SwapCard, { swapChoice } from '../../../v4/game/SwapCard.jsx';

afterEach(() => { cleanup(); vi.useRealTimers(); });

// Early Traders (Nov 11: Night Traders at Round Start, Cory)
const traders = res => { let s = scene(['red', 'market', 'purple', 'yellow'], { round: 1, res: [res, { blue: 4 }], members: [['yellow.nightmarket']], queue: [{ t: 'round', r: 2 }] });
  while (s.pending && !/^Early Traders/.test(s.pending.prompt)) s = applyMove(s, { player: s.pending.player, option: s.pending.options[0].id });
  return s; };

function table(s) {
  const picks = [];
  let view;
  const onPick = id => { picks.push(id); s = applyMove(s, { player: s.pending.player, option: id }); view.rerender(ui()); };
  const ui = () => (swapChoice(s, s.pending) ? <SwapCard key="sw" state={s} onPick={onPick} busy={false} /> : <p>after</p>);
  view = render(ui());
  return { picks, now: () => s };
}
const row = c => document.querySelector(`[data-swap="${c}"]`);
const press = (c, step) => fireEvent.click(row(c).querySelector(`[data-step="${step}"]`));
const settle = () => { for (let k = 0; k < 8; k++) act(() => { vi.advanceTimersByTime(200); }); };

describe('Early Traders swap card', () => {
  it('answers the swap question', () => {
    const s = traders({ blue: 7, purple: 2 });
    expect(s.pending.prompt).toMatch(/^Early Traders: swap one for one/);
    expect(swapChoice(s, s.pending)).toBe(true);
  });
  it('four presses of + and one Done make four swaps (Cory, Nov 6: up to 4)', () => {
    vi.useFakeTimers();
    const t = table(traders({ blue: 7, purple: 2 }));
    press('purple', '+'); press('purple', '+'); press('purple', '+'); press('purple', '+');
    expect(row('purple').dataset.n).toBe('6');
    expect(row('blue').dataset.n).toBe('3');
    expect(screen.getByRole('status').textContent).toMatch(/4 of 4 swaps used/);
    // out of swaps: + on another color moves one of those four over, never a fifth swap
    press('red', '+');
    expect([row('blue').dataset.n, row('purple').dataset.n, row('red').dataset.n]).toEqual(['3', '5', '1']);
    press('red', '-'); press('purple', '+');
    fireEvent.click(screen.getByRole('button', { name: 'Swap 4' }));
    settle();
    expect(t.now().players[0].res.blue).toBe(3);
    expect(t.now().players[0].res.purple).toBe(6);
    expect(t.picks).toEqual(['swap:blue:purple', 'swap:blue:purple', 'swap:blue:purple', 'swap:blue:purple']);
    expect(screen.getByText('after')).toBeTruthy();
  });
  it('a mix of colors, stopping early with Done', () => {
    vi.useFakeTimers();
    const t = table(traders({ blue: 7, purple: 2 }));
    press('red', '+'); press('purple', '+');
    fireEvent.click(screen.getByRole('button', { name: 'Swap 2' }));
    settle();
    const r = t.now().players[0].res;
    expect([r.blue, r.purple, r.red]).toEqual([5, 3, 1]);
    expect(t.picks.at(-1)).toBe('done');
  });
  it('− past the cap is off, and a raised color comes back down', () => {
    vi.useFakeTimers();
    table(traders({ blue: 7, purple: 2 }));
    press('blue', '-'); press('blue', '-'); press('blue', '-'); press('blue', '-');
    expect(row('blue').querySelector('[data-step="-"]').disabled).toBe(true);
    expect(document.querySelector('[data-swap-done]').disabled).toBe(true);
    press('red', '+'); press('red', '+'); press('red', '+'); press('red', '+');
    press('red', '-');
    expect(row('red').dataset.n).toBe('3');
    press('purple', '+');
    expect(row('purple').dataset.n).toBe('3');
  });
  it('Swap nothing answers Done', () => {
    vi.useFakeTimers();
    const t = table(traders({ blue: 7, purple: 2 }));
    fireEvent.click(screen.getByRole('button', { name: 'Swap nothing' }));
    settle();
    expect(t.picks).toEqual(['done']);
    expect(t.now().players[0].res.blue).toBe(7);
  });
});
