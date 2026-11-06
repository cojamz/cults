// The "since your last turn" strip says who got what (picky bot, Nov 4, first-time readers): "P4 Walk-In: you +1 red ·
// +1 red" read as yours twice, "P2 Heist: +1 magenta +3 followers" never said from whom, and Potluck's "P2 took 1 of
// your blue" came after the reader chose to give it.
import { describe, expect, it } from 'vitest';
import { applyMove, actionAt } from '../../../engine/v4/index.js';
import { sceneQ } from '../../engine/v4/cards-helpers.js';
import { actionName } from '../../engine/v4/helpers.js';
import { createTrail, feed, sinceYourTurn } from '../../../v4/game/trail.js';

// P2 (pid 1) plays one placement while P1 (pid 0) watches; every choice is answered with its first option
function rivalTurn(opts, space) {
  let s = sceneQ({ n: 3, left: 2, ...opts, queue: [{ t: 'turn', p: 1 }, { t: 'turn', p: 0 }] });
  const t = createTrail(0);
  feed(t, s);
  const mv = o => { s = applyMove(s, { player: s.pending.player, option: o }, { effects: true }); feed(t, s); };
  mv(s.pending.options.find(x => x.kind === 'slot' && actionAt(s, x.q, x.i).name === actionName(space)).id);
  while (s.pending && !(s.pending.kind === 'place' && s.pending.player === 0)) mv(s.pending.kind === 'buy' ? 'pass' : s.pending.options[0].id);
  return sinceYourTurn(t, [0])[0];
}

describe('strip lines name who got what', () => {
  it('beside what you got, the mover\'s own gain names the mover', () => {
    const st = rivalTurn({ quadrants: ['silver', 'thieves', 'market', 'red'] }, 'silver.toast');
    expect(st.short).toBe('you +1 silver · P2 +3 silver');
  });
  it('followers taken say whose they were', () => {
    const st = rivalTurn({ quadrants: ['silver', 'thieves', 'market', 'red'], round: 2, bonus: [0, 0, 5] }, 'thieves.rob');
    expect(st.lines[0]).toMatch(/^\+1 magenta \+3 followers from P3$/);
  });
});
