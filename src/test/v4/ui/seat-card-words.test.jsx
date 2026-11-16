// The seat card's words (picky bot, Nov 4, first-time readers): Cory's column headings (mockup 13) with empty ones left out, a
// "Round End:" card filed under its own word, "no game-end bonus" rather than "nothing", and each member row's count
// so the rows add up to the Members total.
import { afterEach, expect, it } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { sceneQ } from '../../engine/v4/cards-helpers.js';
import { memberCount } from '../../../engine/v4/index.js';
import { RivalCard } from '../../../v4/game/RivalCard.jsx';

afterEach(cleanup);

it('no empty columns, filed by timing word, counts that add up', () => {
  const s = sceneQ({ quadrants: ['gold', 'red', 'yellow', 'green'], members: [['red.mob', 'red.intern', 'yellow.bigtent']] });
  const { container } = render(<RivalCard state={s} pid={0} who="You" />);
  // no empty column: every heading stands over at least one member
  for (const col of container.querySelectorAll('.rc-col')) expect(col.querySelector('[data-member-row]')).not.toBeNull();
  // Mob ("Round End: …") under Round End, never Always
  const mob = container.querySelector('[data-member-row="red.mob"]').closest('.rc-group');
  expect(mob.querySelector('.rc-gh').textContent).toBe('Round End');
  const counts = [...container.querySelectorAll('[data-member-count]')].reduce((t, e) => t + Number(e.dataset.memberCount), 0);
  expect(counts).toBe(memberCount(s, s.players[0]));
  expect(container.querySelector('[data-rival-num="end"]').textContent).not.toMatch(/nothing/);
});
