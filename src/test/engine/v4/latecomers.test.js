// @vitest-environment node
// Latecomers (Cory, Nov 7: "Yes"): Bouncers' place. "On Recruit: take the Goes Last token: your next minion is placed
// after everyone else's." Same price as Bouncers; Bouncers retired. Weeders back in Trespasser's place.
import './fixtures/gold-on.js'; // Gold's cards, a test-only fixture since Gold left the game (Cory, Nov 24)
import { describe, it, expect } from 'vitest';
import { defById } from '../../../engine/v4/content/index.js';
import { CUT } from '../../../engine/v4/content/cull.js';
import { take } from './helpers.js';
import { sceneQ, buy } from './cards-helpers.js';
import { named } from './cards-helpers-b.js';

const turns = (...ps) => ps.map(p => ({ t: 'turn', p }));
const Q = ['gold', 'red', 'purple', 'echo'];

describe('Latecomers and Weeders (Nov 7)', () => {
  it('Latecomers takes Bouncers\' price; Bouncers and Trespasser are cut, Weeders is in', () => {
    const d = defById('purple.latecomers'), o = defById('purple.bouncer');
    expect([d.s, d.w, d.f]).toEqual([o.s, o.w, o.f]);
    expect(CUT.has('purple.bouncer') && CUT.has('benders.squatter')).toBe(true);
    expect(defById('benders.scout').retired).toBeFalsy();
  });
  it('recruiting Latecomers takes the Goes Last token', () => {
    let s = sceneQ({ quadrants: Q, round: 2, left: 3, res: [{ gold: 20, purple: 20 }], shop: ['purple.latecomers'], queue: [...turns(0, 1, 0, 1, 0, 1), { t: 'allPlaced' }] });
    s = buy(take(s, 'gold.rush'), 'purple.latecomers');
    expect(s.goesLast).toEqual({ round: 2, pid: 0 });
    expect(named(s, 'Latecomers').length).toBeGreaterThan(0);
  });
  // Cory, Nov 12: "your next minion" was wrong; the token holds every minion you have left, as Lie Abed's does
  it('Latecomers puts every minion you have left on the token, and says so', () => {
    expect(defById('purple.latecomers').text).toMatch(/your other minions are placed after everyone else/);
    let s = sceneQ({ quadrants: Q, round: 2, left: 3, res: [{ gold: 20, purple: 20 }], shop: ['purple.latecomers'], queue: [...turns(0, 1, 0, 1, 0, 1), { t: 'allPlaced' }] });
    s = buy(take(s, 'gold.rush'), 'purple.latecomers');
    expect(s.log.join('\n')).toMatch(/2 minions wait on the Goes Last token/);
  });
});
