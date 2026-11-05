import { memberRound } from '../../../engine/v4/core.js';
// @vitest-environment node
// Duty Collector is live (Nov 4, quality loop): no switch needed, Customs Officer retired.
import { describe, it, expect } from 'vitest';
import { defById } from '../../../engine/v4/content/index.js';

describe('Duty Collector, live: "Whenever a rival recruits a member of a color you have a member of, +1 of that color."', () => {
  it("dealt without any switch, in Customs Officer's place, round I", () => {
    const d = defById('yellow.dutycollector');
    expect(d.retired).toBeFalsy();
    expect([d.s, d.w, memberRound(d)]).toEqual([3, 4, 3]); // joins by cost (Cory, Nov 5)
    expect(defById('yellow.customs').retired).toBe(true);
  });
});
