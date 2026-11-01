import { cleanup, render } from '@testing-library/react';
import { afterEach, expect, it } from 'vitest';
import { sceneQ } from '../../engine/v4/cards-helpers.js';
import { take, move } from '../../engine/v4/helpers.js';
import { currentTurn, promptFor } from '../../../v4/format.js';
import Chronicle from '../../../v4/game/Chronicle.jsx';
import { useRetiredRollCall } from '../../engine/v4/retired-overtime.js';

useRetiredRollCall(); // Roll Call, a plain purple space, kept for these tests (it left the board 2026-10-22)

afterEach(cleanup);
it('keeps Night Owls named in the visible log through its granted extra placement', () => {
  let state = sceneQ({ quadrants: ['gold', 'red', 'purple', 'green'], round: 2, left: 1,
    members: [['purple.nightowl']], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
  // The scene starts with P1's last planned turn followed by P2's. Extra turns
  // are inserted between them; the view must distinguish that from a snake end.
  state.order = [0, 1];
  state = take(state, 'purple.windup');
  expect(state.log).toContain("P1's Night Owls: P1 takes the Goes Last token with 1 more minion on it.");
  // the minion on the token places once every hand is empty (Cory, Nov 1 2:35pm): P2 first
  while (state.pending.kind !== 'place') state = move(state, 'pass');
  expect(state.pending.player).toBe(1);
  state = take(state, 'gold.rush');
  while (state.pending.kind !== 'place') state = move(state, 'pass');
  expect(state.pending.player).toBe(0);
  expect(currentTurn(state)).toMatchObject({ kind: 'extra', why: 'Night Owls' });
  // not back to back any more (P2 placed in between), so the prompt needs no "+1 minion" lead
  state = take(state, 'purple.lastcall');
  const { getByRole } = render(<Chronicle state={state} onClose={() => {}} />);
  expect(getByRole('dialog').textContent).toContain("P1's Night Owls: P1 takes the Goes Last token with 1 more minion on it.");
});
