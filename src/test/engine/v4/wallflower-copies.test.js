// @vitest-environment node
// Wallflower: "Whenever you copy an action, double the resources it gives you." Every way of copying an action
// (Cory, Nov 3: "copying Polish didnt double with Wallflower. gotta audit what wallflower works with").
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

describe('Wallflower doubles every copied action', () => {
  it('Echo copying a rival\'s Polish: 2 silver into 8, not 4', () => {
    const run = members => {
      let s = table(['silver', 'red', 'market', 'echo'], { members: [members], res: [{ silver: 2 }, { silver: 2 }], queue: turns(1, 0) });
      s = go(s, 'silver.polish', red, red, red, red);
      const before = { ...R(s) };
      s = take(s, 'echo.echo');
      s = play(s, sp('silver.polish'));
      while (s.pending?.options?.some(red)) s = play(s, red);
      s = pass(s);
      return { gained: R(s).red - (before.red || 0), silver: R(s).silver };
    };
    expect(run([])).toEqual({ gained: 4, silver: 0 });
    expect(run(['echo.wallflower'])).toEqual({ gained: 8, silver: 0 });
  });

  // Cover does the empty action itself: Golden Years (+4 gold in round II) doubled to 8
  it('Cover copying an empty action is doubled', () => {
    const run = members => {
      let s = table(['gold', 'red', 'market', 'echo'], { round: 2, members: [members], queue: turns(1, 0) });
      s = go(s, 'echo.chant');
      s = pass(play(take(s, 'echo.hum'), o => o.label.startsWith('Golden Years')));
      return R(s);
    };
    expect(run([])).toMatchObject({ gold: 4, green: 1 });
    expect(run(['echo.wallflower'])).toMatchObject({ gold: 8, green: 1 }); // Cover's own +1 isn't a copy
  });
  // Cover copying an empty Echo: Echo's +1 doubled, and the Build Up it copies doubled once, never twice
  it('a copy inside a copy is doubled once', () => {
    let s = table(['gold', 'red', 'market', 'echo'], { round: 2, members: [['echo.wallflower']], queue: turns(1, 0) });
    s = go(s, 'echo.chant');
    s = take(s, 'echo.hum');
    s = play(s, o => o.label.startsWith(actionName('echo.echo')));
    s = pass(play(s, sp('echo.chant')));
    expect(R(s).green).toBe(1 + 2 + 8); // Cover +1, Echo's +1 doubled, Build Up's +4 doubled
  });
  it('Translator turns a copied Polish green', () => {
    let s = table(['silver', 'red', 'market', 'echo'], { members: [['echo.translator']], res: [{ silver: 2 }, { silver: 2 }], queue: turns(1, 0) });
    s = go(s, 'silver.polish', red, red, red, red);
    s = take(s, 'echo.echo');
    s = play(s, sp('silver.polish'));
    while (s.pending?.options?.some(red)) s = play(s, red);
    s = pass(s);
    expect(R(s)).toMatchObject({ red: 0, silver: 0, green: 1 + 4 }); // Echo's +1, Polish's 4 as green
  });
  it('an Impersonator holding a rival\'s Wallflower doubles a copy', () => {
    let s = table(['gold', 'red', 'market', 'echo'], { members: [['echo.impersonators'], ['echo.wallflower']], queue: turns(1, 0) });
    s.cards[s.players[0].members[0]].ability = 'echo.wallflower';
    s = go(s, 'echo.chant');
    s = go(s, 'echo.echo', sp('echo.chant'));
    expect(R(s).green).toBe(1 + 6);
  });
});
