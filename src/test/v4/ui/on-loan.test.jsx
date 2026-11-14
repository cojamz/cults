// Borrow's member is on loan (Cory, Nov 11: "we need to visually distinguish in the player cards that the mmeber is on
// loan, for the red action"): the seat's chip, the seat's hover list and the member's card each say so (a borrowed card never
// shares a chip with a kept copy: the chip key carries it).
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { sceneQ } from '../../engine/v4/cards-helpers.js';
import { memberChips, onLoan } from '../../../v4/format.js';
import { RivalCard } from '../../../v4/game/RivalCard.jsx';
import { MemberCard } from '../../../v4/game/Info.jsx';

afterEach(cleanup);
const scene = () => {
  const s = sceneQ({ quadrants: ['gold', 'red', 'yellow', 'green'], members: [['yellow.bigtent', 'red.intern']] });
  const lent = s.players[0].members[1];
  s.borrowed = [{ uid: lent, pid: 0, round: s.round }];
  return { s, lent };
};

describe('on loan from Borrow', () => {
  it('the seat marks the borrowed member’s chip, and only that one', () => {
    const { s, lent } = scene();
    const chips = memberChips(s, s.players[0]);
    const loan = chips.filter(g => g.loan);
    expect(loan).toHaveLength(1);
    expect(loan[0].uids).toEqual([lent]);
    expect(chips.filter(g => !g.loan)).toHaveLength(1);
  });
  it('only this round, only while the borrower holds it, never at game end', () => {
    const { s, lent } = scene();
    expect(onLoan(s, lent)).toBe(true);
    expect(onLoan({ ...s, borrowed: [{ uid: lent, pid: 0, round: s.round - 1 }] }, lent)).toBe(false);
    expect(onLoan({ ...s, borrowed: [{ uid: lent, pid: 1, round: s.round }] }, lent)).toBe(false);
    expect(onLoan({ ...s, over: true }, lent)).toBe(false);
  });
  it('the seat hover list and the member card say on loan', () => {
    const { s, lent } = scene();
    const { container } = render(<RivalCard state={s} pid={0} who="You" />);
    expect(container.querySelectorAll('[data-on-loan]')).toHaveLength(1);
    cleanup();
    const card = render(<MemberCard state={s} uid={lent} />).container;
    expect(card.querySelector('[data-on-loan]').textContent).toContain('back to the shop at round end');
    cleanup();
    const kept = render(<MemberCard state={s} uid={s.players[0].members[0]} />).container;
    expect(kept.querySelector('[data-on-loan]')).toBeNull();
  });
});
