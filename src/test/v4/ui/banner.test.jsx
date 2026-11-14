// The top banner's lines (Cory, Nov 7): the Goes Last token on the space's own line, cults as emoji, a recruit as
// "🎅 −3 −3 for Member 1 follower", a cloak by its tile.
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BannerLine, joinGoesLast } from '../../../v4/game/Banner.jsx';
import { cardDef } from '../../../engine/v4/index.js';
const require_def = (s, u) => cardDef(s, u).name;
import { createGame } from '../../../engine/v4/core.js';
import { makeTables } from '../../engine/v4/fuzz-tables-runner.js';

describe('banner lines', () => {
  it('puts the Goes Last token on the space line', () => {
    expect(joinGoesLast(['+5 purple', 'recruited Dyer (paid 5 yellow 4 purple)', 'Sleep In: took the Goes Last token'], 'Sleep In'))
      .toEqual(['+5 purple · Goes Last token', 'recruited Dyer (paid 5 yellow 4 purple)']);
    expect(joinGoesLast(['recruited Dyer (free)', 'Sleep In: took the Goes Last token'], 'Sleep In')).toHaveLength(2);
  });

  it('draws cults, members and the recruit line from the game\'s own words', () => {
    const { tables } = makeTables(4242, 1);
    const s = createGame({ seats: [1, 2, 3].map(i => ({ name: i === 1 ? 'You' : `P${i}`, kind: i === 1 ? 'human' : 'bot' })), seed: 7, quadrants: tables[0] });
    const name = Object.keys(s.cards).map(u => { try { return s.cards[u] && require_def(s, u); } catch { return null; } }).find(Boolean);
    const say = (line, i = 1) => render(<span><BannerLine line={line} i={i} state={s} pid={1} you={0} space="Walk-In" /></span>).container.textContent;
    expect(say('+1 red', 0)).toMatch(/^Walk-In: P2 /);
    expect(say('you +1 red')).toMatch(/^You /);
    expect(say('P3 +1 red')).toMatch(/^P3 /);
    expect(name).toBeTruthy();
    if (name) {
      const t = say(`recruited ${name} (paid 2 blue, 1 red)`);
      expect(t).toContain(`for ${name}`);
      expect(t).not.toMatch(/\+\d+ ?$/);
      expect(t).toMatch(/−2/);
    }
  });
});
