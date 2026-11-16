// @vitest-environment node
// Flaunt, Sweet Nothings' place in Silver round II (Cory, Nov 11: "i like 1.", then "lets remove the 'if you hold the most'").
// Its own file: cards-silver puts Sweet Nothings back in this slot for its older tests.
import { describe, it, expect } from 'vitest';
import { take } from './helpers.js';
import { sceneQ, linesNaming } from './cards-helpers.js';
import { quadrant } from '../../../engine/v4/content/index.js';

const Q = ['gold', 'red', 'silver', 'green'];
const sc = o => sceneQ({ quadrants: Q, ...o });
const named = (s, name) => linesNaming(s.log, name);
const S = (s, i = 0) => s.players[i].res.silver;

describe('Flaunt', () => {
  it('is on the wheel in round II in place of Sweet Nothings', () => {
    const names = quadrant('silver').actions.map(a => a.name);
    expect(names).toContain('Flaunt');
    expect(names).not.toContain('Sweet Nothings');
  });
  it('Flaunt (Cory, Nov 11): +1 of each other color per 3 silver you hold, up to 3 each, from the bank; you keep your silver; +1 silver', () => {
    let s = take(sc({ round: 2, res: [{ silver: 7 }] }), 'silver.flaunt');
    expect([S(s), s.players[0].res.gold, s.players[0].res.red, s.players[0].res.green]).toEqual([8, 2, 2, 2]);
    expect(named(s, 'Flaunt').length).toBeGreaterThan(0);
    s = take(sc({ round: 2, res: [{ silver: 14 }] }), 'silver.flaunt');
    expect([S(s), s.players[0].res.gold, s.players[0].res.red, s.players[0].res.green]).toEqual([15, 3, 3, 3]);
    s = take(sc({ round: 2, res: [{ silver: 2 }] }), 'silver.flaunt');
    expect([S(s), s.players[0].res.gold, s.players[0].res.red, s.players[0].res.green]).toEqual([3, 0, 0, 0]);
  });
});
