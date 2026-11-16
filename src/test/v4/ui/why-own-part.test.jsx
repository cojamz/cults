// The hover's Why row leads with the space's own part when a member or cloak adds to it, so the lines add up to
// "You'd get" (Cory, Nov 11: On a Roll said +6 with only "Purple Cloak: +2" under it, and read as counting future turns).
import { it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { cachedPreview } from '../../../v4/game/Info.jsx';
import { SpaceCard } from '../../../v4/game/HoverCards.jsx';
import { sceneQ, spaceOf } from '../../engine/v4/cards-helpers.js';

afterEach(cleanup);

it('On a Roll on your second turn in a row with Purple Cloak: Why shows the 2 turns (+4) and the cloak (+2)', () => {
  const s = sceneQ({ quadrants: ['gold', 'red', 'purple', 'echo'] });
  const art = Math.max(...Object.keys(s.cards).map(Number)) + 1;
  s.cards[art] = { uid: art, def: 'purple.pocketwatch' }; s.players[0].artifact = art;
  s.turns = [1, 0, 0]; s.current = 0;
  const [q, i] = spaceOf(s, 'On a Roll').split('-').map(Number);
  cachedPreview(s, 0, q, i);
  const c = render(<SpaceCard state={s} me={0} spaceKey={`${q}-${i}`} />).container;
  const why = c.querySelector('[data-reasons]').textContent;
  expect(why).toMatch(/On a Roll: 2 turns in a row, \+4/);
  expect(why).toMatch(/(Purple Cloak|Pocket Watch): \+2/);
  expect(why.indexOf('On a Roll')).toBeLessThan(why.search(/Purple Cloak|Pocket Watch/));
});
