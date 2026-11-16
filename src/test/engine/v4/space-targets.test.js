// @vitest-environment node
// The members a space acts on (previewSpace's `targets`), which the screen lights while the space's hover is up
// (Cory, 2026-10-16: "hovering over Free Recruit should highlight the cheapest recruit(s) in the shop").
// Read off the engine's own options, so the light always matches what the space really does.
import { describe, it, expect } from 'vitest';
import { previewSpace } from '../../../engine/v4/preview.js';
import { quadrant } from '../../../engine/v4/content/index.js';
import { table, useCosts, uidIn } from './cards-helpers-b.js';

const Q = ['gold', 'red', 'market', 'thieves'];
useCosts({
  'gold.tycoon': [8, 4], 'gold.taxman': [2, 2], 'red.bigfamily': [2, 2], 'red.twins': [1, 1],
  'red.intern': [1, 0], 'red.reserve': [1, 0], 'red.volunteer': [2, 2], 'red.mentor': [6, 4],
});
const spot = (s, key) => {
  for (let q = 0; q < s.quadrants.length; q++) {
    const i = quadrant(s.quadrants[q]).actions.findIndex(a => a.key === key);
    if (i >= 0) return [q, i];
  }
  throw new Error(`no ${key}`);
};
const targetsAt = (s, key, pid = 0) => { const [q, i] = spot(s, key); return previewSpace(s, pid, q, i).targets; };
const sorted = a => [...a].sort((x, y) => x - y);

describe('space targets', () => {
  // Gather took Walk-In's slot (Cory, Nov 10): its bonus rides on whatever you recruit, so no shop member lights
  it('Gather: lights no shop member, since any recruit of a color you have pays', () => {
    const s = table(Q, { shop: ['gold.tycoon', 'red.bigfamily', 'red.intern', 'gold.taxman'] });
    expect(targetsAt(s, 'gather')).toBe(null);
  });
  // Open House left with the Red redesign (v0.8.0); round II's hireup space is Promote
  it('Promote: the pairs of a member (yours or a rival\'s) for a shop or other cult\'s member costing up to 3 more (Cory, Nov 5)', () => {
    const s = table(Q, { round: 2, members: [['red.twins'], ['red.intern']], shop: ['gold.tycoon', 'red.bigfamily', 'gold.taxman', 'red.reserve', 'red.mentor'] });
    const t = targetsAt(s, 'hireup');
    const key = ([a, b]) => `${a}:${b}`;
    const twins = uidIn(s, 'red.twins', 0), intern = uidIn(s, 'red.intern', 1);
    expect(t.pairs.map(key).sort()).toEqual([
      [twins, uidIn(s, 'red.bigfamily', 'shop')], [twins, uidIn(s, 'gold.taxman', 'shop')],
      [intern, uidIn(s, 'red.reserve', 'shop')], [intern, uidIn(s, 'red.bigfamily', 'shop')], [intern, uidIn(s, 'gold.taxman', 'shop')],
      // with a rival too (Cory, 2026-10-29), either way round; never cheaper (Cory, Nov 4 night), so not twins for intern
      [intern, twins],
    ].map(key).sort());
  });
  it('Initiation: every face-up member costing 11 or less (8 on Oct 25; up with the price since Nov 5)', () => {
    const s = table(Q, { round: 3, shop: ['gold.tycoon', 'red.intern', 'red.bigfamily', 'gold.taxman', 'red.sponsor'] });
    const t = targetsAt(s, 'take');
    expect(sorted(t.shop)).toEqual(sorted(['red.intern', 'red.bigfamily', 'gold.taxman'].map(d => uidIn(s, d, 'shop'))));
  });
  it('Test Drive and Out of Style: no member is lit up front, since the player picks which go to the discard pile', () => {
    const defs = ['gold.tycoon', 'red.intern', 'red.bigfamily'];
    expect(targetsAt(table(Q, { shop: defs }), 'testdrive')).toBe(null);
    expect(targetsAt(table(Q, { shop: defs }), 'restock')).toBe(null);
  });
  // Borrow took Tryout's slot (Cory, Nov 10): "Recruit the cheapest shop member, for free", so the cheapest lights
  it('Borrow: lights the cheapest shop member, for sure', () => {
    const s = table(Q, { members: [['gold.taxman'], ['red.intern']], shop: ['gold.tycoon', 'red.bigfamily', 'red.reserve'] });
    expect(targetsAt(s, 'borrow')).toEqual({ shop: [uidIn(s, 'red.reserve', 'shop')], seats: [], pairs: [], sure: true });
  });
  it('a space that touches no particular member lights nothing', () => {
    const s = table(Q, { round: 2, shop: ['gold.tycoon', 'red.intern'] });
    for (const key of ['markdown', 'wordofmouth'] /* Trending left Nov 11 */) expect(targetsAt(s, key)).toBe(null);
  });
});
