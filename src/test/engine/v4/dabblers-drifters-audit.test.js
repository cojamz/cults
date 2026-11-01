// Dabblers ("Counts as 2 wild members.") and Drifters always work in their owner's favor (Cory, Nov 1): cards that
// read a member's color never get blocked by them, and Drifters counts once its color is chosen.
import { describe, it, expect } from 'vitest';
import { take, move, uidOf } from './helpers.js';
import { sceneQ, linesNaming } from './cards-helpers.js';
import { cardDef, contextFor, resume } from '../../../engine/v4/core.js';

const rich = { gold: 30, red: 30, yellow: 30, green: 30, blue: 30 };
const named = (s, name) => linesNaming(s.log, name);

describe('Dabblers and Drifters audit', () => {
  it('Big Tent: Dabblers never knocks a color off "exactly one"', () => {
    const s = sceneQ({ quadrants: ['gold', 'red', 'yellow', 'green'], members: [['yellow.bigtent', 'red.intern', 'benders.dabblers']] });
    // yellow (Big Tent) and red have exactly one member each; Dabblers used to make them 3
    expect(cardDef(s, uidOf(s, 'yellow.bigtent', 0)).onGameEnd(contextFor(s), s.players[0])).toBe(4);
  });
  it('Matchmaker: Dabblers never blocks a new color, and recruiting Dabblers pays while a color is missing', () => {
    const run = (members, buyDef) => {
      let s = sceneQ({ quadrants: ['gold', 'red', 'yellow', 'green'], round: 3, res: [rich], members, shop: [buyDef] });
      s = move(take(s, 'red.take'), `card:${uidOf(s, buyDef, 'shop')}`);
      return named(s, 'Matchmaker').filter(l => /new color/.test(l)).length;
    };
    expect(run([['yellow.matchmaker', 'benders.dabblers']], 'red.intern')).toBe(1);
    expect(run([['yellow.matchmaker', 'red.volunteer']], 'red.intern')).toBe(0);
    expect(run([['yellow.matchmaker']], 'benders.dabblers')).toBe(1);
  });
  it('Matchmaker: Drifters pays once its color is chosen, only for a new color', () => {
    const run = pick => {
      let s = sceneQ({ quadrants: ['gold', 'red', 'yellow', 'green'], round: 3, res: [rich], members: [['yellow.matchmaker', 'red.intern']], shop: ['yellow.drifters'] });
      s = move(take(s, 'red.take'), `card:${uidOf(s, 'yellow.drifters', 'shop')}`);
      expect(named(s, 'Matchmaker')).toHaveLength(0);
      s = move(s, pick);
      return named(s, 'Matchmaker').filter(l => /new color/.test(l)).length;
    };
    expect(run('color:green')).toBe(1);
    expect(run('color:red')).toBe(0);
  });
  it('Connoisseurs: recruiting your own Dabblers counts as a blue member; Drifters once it picks Blue', () => {
    const q = ['market', 'red', 'yellow', 'green'];
    let s = sceneQ({ quadrants: q, round: 3, res: [rich], members: [['market.connoisseur']], shop: ['benders.dabblers'] });
    const b0 = s.players[0].res.blue;
    s = move(take(s, 'red.take'), `card:${uidOf(s, 'benders.dabblers', 'shop')}`);
    expect(s.players[0].res.blue - b0).toBe(1);
    for (const [pick, want] of [['color:market', 1], ['color:red', 0]]) {
      let t = sceneQ({ quadrants: q, round: 3, res: [rich], members: [['market.connoisseur']], shop: ['yellow.drifters'] });
      const c0 = t.players[0].res.blue;
      t = move(take(t, 'red.take'), `card:${uidOf(t, 'yellow.drifters', 'shop')}`);
      t = move(t, pick);
      expect(t.players[0].res.blue - c0).toBe(want);
    }
  });
  it('Bargain Bin: pays +1 blue when Bury sends a shop member down, and its hover counts it', () => {
    let s = sceneQ({ quadrants: ['market', 'red', 'yellow', 'green'], round: 2, res: [rich], shop: ['red.intern', 'red.volunteer'] });
    const art = Math.max(...Object.keys(s.cards).map(Number)) + 1;
    s.cards[art] = { uid: art, def: 'market.bargainbin' }; s.players[0].artifact = art;
    const b0 = s.players[0].res.blue;
    s = move(take(s, 'market.pricecheck'), `card:${uidOf(s, 'red.intern', 'shop')}`);
    expect(named(s, 'Bargain Bin')).toHaveLength(1);
    expect(s.cards[art].made?.blue).toBe(1);
    expect(s.players[0].res.blue - b0).toBeGreaterThanOrEqual(2); // Bury's +1 and Bargain Bin's +1
  });
  it('Bargain Bin: the shop refresh at a round start pays +1 blue (Cory, Nov 1: "you count the refreshes")', () => {
    let s = sceneQ({ quadrants: ['market', 'red', 'yellow', 'green'], round: 1 });
    const art = Math.max(...Object.keys(s.cards).map(Number)) + 1;
    s.cards[art] = { uid: art, def: 'market.bargainbin' }; s.players[1].artifact = art;
    const b0 = s.players[1].res.blue;
    s.pending = null; s.queue = [{ t: 'round', r: 2 }];
    s = resume(s);
    expect(s.players[1].res.blue - b0).toBe(1);
    expect(named(s, 'Bargain Bin')).toHaveLength(1);
  });
});
