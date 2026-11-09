// Godparent's "give which of your members to which rival?" was a wall of "Kingmakers (8) to bee" buttons, one per
// member per rival (Cory, Nov 9: "this can be way better"). It's the gift card now: your members as pictures with
// their cost, then the rivals' faces; tap a member, then a rival. The other walls (a grey member's color, Spoilsport's
// contest, Heist Crew's pile) went to the card too.
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { scene, uidOf, move } from '../../engine/v4/helpers.js';
import { giftPick } from '../../../v4/game/boardPick.js';
import GiftCard from '../../../v4/game/GiftCard.jsx';

afterEach(cleanup);

const godparent = () => {
  const s = scene({ n: 3, round: 3, quadrants: ['red', 'silver', 'market', 'trading'], members: [['silver.godparents', 'trading.martyr', 'red.crowd']], queue: [{ t: 'buy', p: 0 }] });
  return move(s, `use:${uidOf(s, 'silver.godparents', 0)}`);
};

describe('a member to a rival, on the gift card', () => {
  it('Godparent: members first, then the rivals light for the picked one', () => {
    const s = godparent();
    expect(s.pending.prompt).toMatch(/Godparent/);
    const g = giftPick(s, s.pending);
    expect(g.kind).toBe('handover');
    expect(g.firsts.map(f => f.a).sort()).toEqual([...s.players[0].members].sort());
    expect(g.others).toEqual([1, 2]);
    const picks = [];
    const { container, rerender } = render(<GiftCard state={s} gift={g} onFirst={a => picks.push(a)} onAnswer={() => {}} busy={false} />);
    // one tile per member (not one button per member per rival), and the rivals wait
    expect(container.querySelectorAll('.gc-row[data-row="1"] .gc-member').length).toBe(3);
    expect(container.querySelectorAll('.gc-row[data-row="2"] .gc-face:disabled').length).toBe(2);
    const martyr = uidOf(s, 'trading.martyr', 0);
    fireEvent.click(container.querySelector(`.gc-member[data-uid="${martyr}"]`));
    expect(picks).toEqual([martyr]);
    const answers = [];
    rerender(<GiftCard state={s} gift={giftPick(s, s.pending, martyr)} onFirst={() => {}} onAnswer={id => answers.push(id)} busy={false} />);
    expect(container.querySelector('.gc-what').textContent).toMatch(/^Give Martyrs? to/);
    fireEvent.click(container.querySelector('.gc-face[data-pid="2"]'));
    expect(answers).toEqual([`give:${martyr}:2`]);
  });

  it('Guest of Honor and Nosy Neighbors take the same card', () => {
    let s = scene({ n: 3, round: 2, quadrants: ['red', 'silver', 'market', 'trading'], members: [['silver.guestofhonor', 'red.crowd']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidOf(s, 'silver.guestofhonor', 0)}`);
    const g = giftPick(s, s.pending);
    expect(g.kind).toBe('handover');
    expect(g.sub).toBe('+4 followers.');
  });
});
