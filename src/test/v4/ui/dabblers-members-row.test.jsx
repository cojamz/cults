// Dabblers ("Counts as 2 wild members.") counts as every color in the rules, but a seat's Members row shows it once,
// on its own, with "counts as any color" under it, so the colors add up to the total (Claude, under Cory's "use your
// best judgement", 2026-11-03; he'd seen 12 members split as 2+2+4+10+2).
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { sceneQ } from '../../engine/v4/cards-helpers.js';
import { memberCount } from '../../../engine/v4/index.js';
import { RivalCard } from '../../../v4/game/RivalCard.jsx';

afterEach(cleanup);
const row = s => {
  const { container } = render(<RivalCard state={s} pid={0} who="You" />);
  const box = container.querySelector('[data-rival-num="members"]');
  const parts = [...box.querySelectorAll('.rc-bust')].map(b => [b.querySelector('[data-member-glyph]').getAttribute('data-member-glyph'), Number(b.querySelector('.num').textContent)]);
  return { box, parts };
};

describe('Members row with Dabblers', () => {
  it('shows Dabblers once as 2 any, and the colors add up to the total', () => {
    const s = sceneQ({ quadrants: ['gold', 'red', 'yellow', 'green'], members: [['red.intern', 'yellow.bigtent', 'benders.dabblers']] });
    const { box, parts } = row(s);
    expect(parts).toEqual([['red', 1], ['yellow', 1], ['any', 2]]);
    expect(parts.reduce((t, [, n]) => t + n, 0)).toBe(memberCount(s, s.players[0]));
    expect(box.textContent).toContain('counts as any color');
  });
  it('without Dabblers, no any-color part and no note', () => {
    const s = sceneQ({ quadrants: ['gold', 'red', 'yellow', 'green'], members: [['red.intern', 'yellow.bigtent']] });
    const { box, parts } = row(s);
    expect(parts).toEqual([['red', 1], ['yellow', 1]]);
    expect(box.textContent).not.toContain('any color');
  });
});
