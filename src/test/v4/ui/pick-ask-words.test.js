// A member's pick says what it's for in the caption, from the question's own words (picky bot, Nov 4: "Window Shopper:
// pick a member", for what?).
import { expect, it } from 'vitest';
import { askWords } from '../../../v4/game/boardPick.js';

it('turns "which" questions into a few plain words, or leaves them alone', () => {
  expect(askWords('send which member to the bottom? (2 to go)')).toBe('send a member to the bottom');
  expect(askWords('send which member to the bottom?')).toBe('send a member to the bottom');
  expect(askWords('copy which space?')).toBe('copy a space');
  expect(askWords('give P2 1 resource, then you gain 2 silver')).toBeNull();
  expect(askWords('put which member of yours at the bottom of the pile, for a very long reason?')).toBeNull();
});
