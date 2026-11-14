// @vitest-environment node
// Idea pipeline pool 1 (Nov 7; scripts/ideas/README.md): bot-only candidates, never dealt in a real game. Temps' "+4 of
// any colors" is the owner's pick, one color at a time (judge games, Nov 7: a judge lost a contest when it picked for them).
import { describe, it, expect } from 'vitest';
import { move, uidOf } from './helpers.js';
import { linesNaming } from './cards-helpers.js';
import { usePool, still, go } from './pool-helpers.js';

usePool(['market.temps']);
const named = (s, name) => linesNaming(s.log, name);
const Q = ['market', 'yellow', 'red', 'purple'];

describe("Temps (Blue)", () => {
  it('On Use: discard one of your members, then the owner picks each of +4 of any colors, and recruits an extra time', () => {
    let s = still({ quadrants: Q, members: [['market.temps', 'market.stylist']], round: 2 });
    s = go(s, [{ t: 'turn', p: 0 }]);
    s = move(s, `use:${uidOf(s, 'market.temps', 0)}`);
    const sty = uidOf(s, 'market.stylist', 0);
    s = move(s, `card:${sty}`);
    expect(s.players[0].members).not.toContain(sty);
    const picks = ['purple', 'purple', 'red', 'yellow'];
    for (const [i, c] of picks.entries()) {
      expect(s.pending.prompt).toBe(`Temps: +1 of which color (${i + 1} of 4)?`);
      s = move(s, `color:${c}`);
    }
    expect(s.players[0].res).toMatchObject({ purple: 2, red: 1, yellow: 1 });
    expect(named(s, 'Temps').filter(l => /: \+1 /.test(l))).toEqual(picks.map(c => `P1's Temps: +1 ${c}.`));
  });
});

