// @vitest-environment node
// Tall-Tale Teller: "Whenever you copy an action, double the resources it gives you." Every way of copying an action
// (Cory, Nov 3: "copying Melt Down didnt double with Tall-Tale Teller. gotta audit what wallflower works with").
import { describe, it, expect } from 'vitest';
import { take, move, play, actionName } from './helpers.js';
import { table } from './cards-helpers-b.js';

const R = (s, i = 0) => s.players[i].res;
const pass = s => s.pending?.kind === 'buy' ? move(s, 'pass') : s;
const turns = (...p) => p.map(id => ({ t: 'turn', p: id }));
const go = (s, name, ...then) => pass(play(take(s, name), ...then));
const sp = id => o => o.kind === 'space' && o.label.startsWith(actionName(id));
const red = o => o.id === 'color:red';
const sum = r => Object.values(r).reduce((a, b) => a + b, 0);

describe('Tall-Tale Teller doubles every copied action', () => {
  // Melt Down (Nov 24): "+3 silver. Turn all your silver into one other color. Each rival +1 silver." Tall-Tale Teller doubles the
  // silver gained, not the turn (Cory, Nov 11: "just the +3 should double"). The rival's Melt Down first gave the copier
  // +1 silver: 3 held + 3 = 6 red, or + 6 doubled = 9 red
  it('Follow Suit copying a rival\'s Melt Down: the silver gained doubled, the turn not', () => {
    const run = members => {
      let s = table(['silver', 'red', 'market', 'echo'], { members: [members], res: [{ silver: 2 }, { silver: 2 }], queue: turns(1, 0) });
      s = go(s, 'silver.polish', red);
      const before = { ...R(s) };
      s = take(s, 'echo.echo');
      s = play(s, sp('silver.polish'));
      while (s.pending?.options?.some(red)) s = play(s, red);
      s = pass(s);
      return { gained: R(s).red - (before.red || 0), silver: R(s).silver };
    };
    expect(run([])).toEqual({ gained: 6, silver: 0 });
    expect(run(['echo.wallflower'])).toEqual({ gained: 9, silver: 0 });
  });

  // Imitate copies an action with a rival's minion on it (Cory, Nov 10): a rival's Let It Grow (+4 gold in round II) doubled
  it('Imitate copying a rival\'s action is doubled', () => {
    const run = members => {
      let s = table(['gold', 'red', 'market', 'echo'], { round: 2, members: [members], queue: turns(1, 0) });
      s = go(s, 'gold.rush');
      s = pass(play(take(s, 'echo.hum'), sp('gold.rush')));
      return R(s);
    };
    expect(run([])).toMatchObject({ gold: 4, green: 1 });
    expect(run(['echo.wallflower'])).toMatchObject({ gold: 8, green: 1 }); // Imitate's own +1 isn't a copy
  });
  // Follow Suit copying a rival's Imitate: Imitate's +1 doubled, and the Flock Together the copied Imitate picks again doubled once, never twice
  it('a copy inside a copy is doubled once', () => {
    let s = table(['gold', 'red', 'market', 'echo'], { n: 3, round: 2, members: [['echo.wallflower']], queue: turns(1, 2, 0) });
    s = go(s, 'echo.chant'); // P2: +1 for its minion, +1
    s = go(s, 'echo.hum', sp('echo.chant')); // P3's Imitate copies P2's Flock Together
    s = take(s, 'echo.echo');
    s = play(s, sp('echo.hum'));
    s = pass(play(s, sp('echo.chant')));
    expect(R(s).green).toBe(1 + 2 + 4); // Follow Suit +1, Imitate's +1 doubled, Flock Together's +2 doubled
  });
  it('Translator turns a copied Melt Down green', () => {
    let s = table(['silver', 'red', 'market', 'echo'], { members: [['echo.translator']], res: [{ silver: 2 }, { silver: 2 }], queue: turns(1, 0) });
    s = go(s, 'silver.polish', red);
    s = take(s, 'echo.echo');
    s = play(s, sp('silver.polish'));
    while (s.pending?.options?.some(red)) s = play(s, red);
    s = pass(s);
    expect(R(s)).toMatchObject({ red: 0, silver: 0, green: 1 + 6 }); // Follow Suit's +1, Melt Down's 3 held (2 + the rival's gift) + 3 turned, as green
  });
  it('an Impersonator holding a rival\'s Tall-Tale Teller doubles a copy', () => {
    let s = table(['gold', 'red', 'market', 'echo'], { members: [['echo.impersonators'], ['echo.wallflower']], queue: turns(1, 0) });
    s.cards[s.players[0].members[0]].ability = 'echo.wallflower';
    s = go(s, 'echo.chant');
    s = go(s, 'echo.echo', sp('echo.chant'));
    expect(R(s).green).toBe(1 + 4); // Follow Suit's +1, Flock Together's +2 (one minion, +1) doubled
  });
});
