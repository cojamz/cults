// @vitest-environment node
// Seamstress is live (Nov 4, quality loop): no switch needed, Harmonist retired.
import { describe, it, expect } from 'vitest';
import { defById } from '../../../engine/v4/content/index.js';
import { move } from './helpers.js';
import { table, uidIn } from './cards-helpers-b.js';

describe('Seamstress, live: "On Use, once per game: double your full sets."', () => {
  const Q4 = ['red', 'yellow', 'market', 'purple'];
  it("dealt without any switch, in Harmonist's place, 4 yellow + 2 any", () => {
    const d = defById('yellow.seamstress');
    expect(d.retired).toBeFalsy();
    expect([d.s, d.w]).toEqual([4, 2]);
    expect(defById('yellow.harmonist').retired).toBe(true);
  });
  it('two full sets: +2 of each color', () => {
    let s = table(Q4, { n: 2, round: 3, res: [{ red: 2, yellow: 2, blue: 2, purple: 3 }], members: [['yellow.seamstress']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'yellow.seamstress', 0)}`);
    expect(s.players[0].res).toMatchObject({ red: 4, yellow: 4, blue: 4, purple: 5 });
  });
});
