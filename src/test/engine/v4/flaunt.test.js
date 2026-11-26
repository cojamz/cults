// @vitest-environment node
// Flaunt, Sweet Nothings' place in Silver round II (Cory, Nov 11: "i like 1.", then "lets remove the 'if you hold the most'").
// Its own file: cards-silver puts Sweet Nothings back in this slot for its older tests.
import { describe, it, expect } from 'vitest';
import { take, useRetired } from './helpers.js';
import { sceneQ, linesNaming } from './cards-helpers.js';
import { quadrant } from '../../../engine/v4/content/index.js';
import { memberPrice, paymentChoices } from '../../../engine/v4/core.js';

const Q = ['yellow', 'red', 'silver', 'green'];
const sc = o => sceneQ({ quadrants: Q, ...o });
const named = (s, name) => linesNaming(s.log, name);
const S = (s, i = 0) => s.players[i].res.silver;

describe('Pay in Coin (Cory, Nov 26: "your silver counts double for recruiting")', () => {
  it('is on the wheel in round II in place of Flaunt', () => {
    const names = quadrant('silver').actions.map(a => a.name);
    expect(names).toContain('Pay in Coin');
    expect(names).not.toContain('Flaunt');
  });
  it('gives each rival 2 silver and +1 silver, and silver pays 2 toward a member for this turn only', () => {
    const s = take(sc({ round: 2, res: [{ silver: 3 }, {}, {}, {}] }), 'silver.payincoin');
    expect(s.players.map(p => p.res.silver)).toEqual([4, ...s.players.slice(1).map(() => 2)]);
    expect(s.players[0].silverDouble).toBe(true);
    expect(named(s, 'Pay in Coin').length).toBeGreaterThan(0);
  });
  it('each silver pays 2 of a member\'s any part while the flag is on', () => {
    const s = sc({ round: 2, res: [{}, {}, {}, {}] });
    const p = s.players[0];
    const uid = s.shop.find(u => { const pr = memberPrice(s, p, u); return pr.total - pr.colored >= 4 && pr.color && pr.color !== 'silver'; });
    expect(uid).toBeDefined();
    const pr = memberPrice(s, p, uid);
    p.res = { ...p.res, [pr.color]: pr.colored, silver: Math.ceil((pr.total - pr.colored) / 2) };
    expect(memberPrice(s, p, uid).afford).toBe(false);
    p.silverDouble = true;
    expect(memberPrice(s, p, uid).afford).toBe(true);
    expect(paymentChoices(s, p, uid).length).toBeGreaterThan(0);
  });
});

describe('Flaunt (off the wheel since Nov 26)', () => {
  useRetired(['silver.flaunt']);
  it('Flaunt (Cory, Nov 11): +1 of each other color per 3 silver you hold, up to 3 each, from the bank; you keep your silver; +1 silver', () => {
    let s = take(sc({ round: 2, res: [{ silver: 7 }] }), 'silver.flaunt');
    expect([S(s), s.players[0].res.yellow, s.players[0].res.red, s.players[0].res.green]).toEqual([8, 2, 2, 2]);
    expect(named(s, 'Flaunt').length).toBeGreaterThan(0);
    s = take(sc({ round: 2, res: [{ silver: 14 }] }), 'silver.flaunt');
    expect([S(s), s.players[0].res.yellow, s.players[0].res.red, s.players[0].res.green]).toEqual([15, 3, 3, 3]);
    s = take(sc({ round: 2, res: [{ silver: 2 }] }), 'silver.flaunt');
    expect([S(s), s.players[0].res.yellow, s.players[0].res.red, s.players[0].res.green]).toEqual([3, 0, 0, 0]);
  });
});
