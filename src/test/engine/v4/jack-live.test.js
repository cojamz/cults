// @vitest-environment node
// Jack-of-All-Trades is live (Nov 4, quality loop): no switch needed, Tastemaker retired.
import { describe, it, expect } from 'vitest';
import { defById } from '../../../engine/v4/content/index.js';
import { table } from './cards-helpers-b.js';

describe('Jack-of-All-Trades, live: "Your yellow counts as any color in your full sets."', () => {
  const Q4 = ['red', 'yellow', 'market', 'purple'];
  it('dealt without any switch, in Tastemaker\'s place', () => {
    expect(defById('yellow.jack').retired).toBeFalsy();
    expect(defById('yellow.tastemaker').retired).toBe(true);
  });
  it('wins Most full sets with yellow filling the missing purple', () => {
    const won = jack => {
      const s = table(Q4, { n: 2, round: 1, rules: { contests: 'byColor' }, res: [{ red: 2, yellow: 4, blue: 2 }, { red: 1, yellow: 1, blue: 1, purple: 1 }], members: [[jack]], queue: [{ t: 'endRound' }] });
      return (s.contests || []).at(-1).results.find(c => c.qid === 'yellow').winners;
    };
    expect(won('yellow.jack')).toEqual([0]);
    expect(won('yellow.gardener')).toEqual([1]);
  });
});
