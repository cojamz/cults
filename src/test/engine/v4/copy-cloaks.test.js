// @vitest-environment node
// Cloaks on copied actions (Cory, Nov 6: "copying toast didnt trigger silver cloak"). A copied steal is done again,
// so it is your steal. A copied Toast hands only its printed silver (rulebook: gifts to others are not copied), so no
// A copied gift space gifts the rivals again (Cory, Nov 6: "yes."), so the copier's Silver Cloak pays.
import { describe, it, expect } from 'vitest';
import { take, move, play, actionName } from './helpers.js';
import { table } from './cards-helpers-b.js';

const pass = s => s.pending?.kind === 'buy' ? move(s, 'pass') : s;
const turns = (...p) => p.map(id => ({ t: 'turn', p: id }));
const go = (s, name, ...then) => pass(play(take(s, name), ...then));
// take the first option of every choice until the buy step or the next placement
const auto = s => { while (s.pending && s.pending.kind !== 'place' && s.pending.kind !== 'buy' && !s.over) s = move(s, s.pending.options[0].id); return pass(s); };
const sp = id => o => o.kind === 'space' && o.label.startsWith(actionName(id));
const withCloak = (s, def, i = 0) => {
  const art = Math.max(...Object.keys(s.cards).map(Number)) + 1;
  s.cards[art] = { uid: art, def }; s.players[i].artifact = art;
  return s;
};

describe('cloaks on copied actions', () => {
  it('Magenta Cloak: Echo copying Help Yourself is your steal, +1 magenta', () => {
    const run = cloak => {
      let s = table(['gold', 'thieves', 'market', 'echo'], { queue: turns(1, 0, 1, 0), res: [{ gold: 5 }, { gold: 5 }] });
      if (cloak) s = withCloak(s, 'thieves.fence', 0);
      s = auto(take(s, 'thieves.pickpocket'));
      s = auto(play(take(s, 'echo.echo'), sp('thieves.pickpocket')));
      return s;
    };
    const base = run(false), s = run(true);
    expect(s.players[0].res.magenta).toBe(base.players[0].res.magenta + 1);
  });
  it('Silver Cloak: Echo copying Toast gifts each rival again, +2 silver', () => {
    const run = cloak => {
      let s = table(['gold', 'silver', 'market', 'echo'], { queue: turns(1, 0, 1, 0) });
      if (cloak) s = withCloak(s, 'silver.caterer', 0);
      s = auto(take(s, 'silver.toast'));
      s = auto(play(take(s, 'echo.echo'), sp('silver.toast')));
      return s;
    };
    const base = run(false), s = run(true);
    expect(base.players[1].res.silver).toBe(5 + 2); // P2's Toast, then P1's copy gives P2 2
    expect(s.players[0].res.silver).toBe(base.players[0].res.silver + 2);
  });
});
