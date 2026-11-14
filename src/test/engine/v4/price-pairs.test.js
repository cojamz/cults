// Members Cory wants priced together (Cory, Nov 12 7:04pm Eastern: "ghost and loyalists should always be same price").
// Any price change to one moves the other; this fails the check until it does.
import { describe, it, expect } from 'vitest';
import { defById } from '../../../engine/v4/content/index.js';

const PAIRS = [['benders.saboteur', 'red.loyalists']]; // Ghost, Loyalists
const price = id => { const d = defById(id); return d.s + d.w; };

describe('members that always cost the same', () => {
  for (const [a, b] of PAIRS) it(`${defById(a).name} and ${defById(b).name} cost the same (${price(a)})`, () => {
    expect(price(a)).toBe(price(b));
  });
});
