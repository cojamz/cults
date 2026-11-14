// A chair re-renders when the Goes Last token leaves it (picky bot, Nov 4: after a rival took it, the old holder's
// chair kept its moon, so two seats showed the token at once).
import { expect, it } from 'vitest';
import { sameSeat } from '../../../v4/game/seatMemo.js';
import { sceneQ } from '../../engine/v4/cards-helpers.js';

it('redraws the old holder when the Goes Last token moves', () => {
  const a = sceneQ({ quadrants: ['gold', 'silver'] });
  const was = { ...a, goesLast: { pid: 1, round: a.round } };
  const now = { ...a, goesLast: { pid: 0, round: a.round }, moves: a.moves + 1 };
  expect(sameSeat({ state: was, pid: 1, me: 0 }, { state: now, pid: 1, me: 0 })).toBe(false);
  expect(sameSeat({ state: was, pid: 1, me: 0 }, { state: { ...was, moves: a.moves + 1 }, pid: 1, me: 0 })).toBe(true);
});
