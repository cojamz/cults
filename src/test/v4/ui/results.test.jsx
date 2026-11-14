// The final results name the same winners as the game-over cults: both come from format.js finalWinners (most
// followers, members breaking a follower tie).
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { createGame, applyMove, chooseBotMove } from '../../../engine/v4/index.js';
import { seededRandom } from '../../../engine/v4/rng.js';
import Results from '../../../v4/game/Results.jsx';
import { finalWinners, breakdown } from '../../../v4/format.js';
import { followers } from '../../../engine/v4/index.js';

afterEach(cleanup);
const finish = seed => {
  const rand = seededRandom(seed);
  let s = createGame({ seats: [{ name: 'Ana', kind: 'bot' }, { name: 'Bo', kind: 'bot' }, { name: 'Cy', kind: 'bot' }], seed });
  for (let k = 0; k < 3000 && !s.over; k++) s = applyMove(s, chooseBotMove(s, rand));
  return s;
};

describe('Results winners', () => {
  it('name exactly finalWinners in finished games', () => {
    for (const seed of [3, 5, 8, 13]) {
      const s = finish(seed);
      expect(s.over).toBe(true);
      const { container } = render(<Results state={s} onPlayAgain={() => {}} onHome={() => {}} />);
      const named = container.querySelector('.results .win span').textContent;
      expect(named).toBe(finalWinners(s).map(id => s.players[id].name).join(' & '));
      cleanup();
    }
  });

  it('every cult\'s bar adds up to its followers, by kind, and every part opens what it\'s made of (Cory, 2026-11-03)', () => {
    for (const seed of [3, 5, 8]) {
      const s = finish(seed);
      const { container } = render(<Results state={s} onPlayAgain={() => {}} onHome={() => {}} />);
      const rows = [...container.querySelectorAll('[data-src-row]')];
      expect(rows.map(r => Number(r.dataset.srcRow))).toEqual(s.ranking);
      for (const row of rows) {
        const p = s.players[Number(row.dataset.srcRow)];
        const b = breakdown(s, p);
        const segs = [...row.querySelectorAll('[data-seg]')];
        // members (with the leader's 1), prizes, bought, play, game end: the parts are the total
        expect(segs.reduce((t, e) => t + Number(e.dataset.n), 0)).toBe(followers(s, p));
        expect(Number(row.dataset.total)).toBe(followers(s, p));
        expect(segs.find(e => e.dataset.seg === 'members')?.dataset.n).toBe(String(b.members + b.self));
        // no game colors on the bar (Cory: "i don't like that they seem to correspond to existing colors")
        for (const e of segs) expect(e.getAttribute('style') || '').not.toMatch(/var\(--(red|gold|blue|green|silver|magenta|yellow|purple|white)\)/);
        // every part is a hover (Tip)
        for (const e of segs) expect(e.getAttribute('aria-label')).toBeTruthy();
      }
      expect(container.querySelector('.results .hint').textContent).not.toMatch(/raid|sale/);
      cleanup();
    }
  });
});
