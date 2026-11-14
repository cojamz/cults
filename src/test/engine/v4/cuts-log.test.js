// @vitest-environment node
// design/cuts.md is the lasting list of members Cory cut (Cory, Nov 12: "we didnt do a very good job cleaning up these
// members"). Every id listed under "## Cut" must never be dealt: today's rules, the 10- and 15-card decks, the Test cards.
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { createGame } from '../../../engine/v4/core.js';
import { allQuadrantIds, defById } from '../../../engine/v4/content/index.js';
import { FULL_DECK } from '../../../engine/v4/content/cull.js';

const text = readFileSync(new URL('../../../../design/cuts.md', import.meta.url), 'utf8');
const cutPart = text.split('## Cut')[1].split('\n## ')[0];
const CUTS = [...cutPart.matchAll(/^- `([a-z0-9.-]+)`/gm)].map(m => m[1]);

describe('cut members stay cut (design/cuts.md)', () => {
  it('lists real member ids', () => {
    expect(CUTS.length).toBeGreaterThanOrEqual(20);
    for (const id of CUTS) expect(defById(id), id).toBeTruthy();
  });
  it('no cut member is dealt, in any deck setting', () => {
    const was = FULL_DECK.tests; FULL_DECK.tests = false; // deal as a real table does
    try {
      const ids = allQuadrantIds();
      for (const rules of [{}, { deck: 10 }, { deck: 15 }, { testSet: true }, { deck: 10, testSet: true }]) {
        for (let i = 0; i < ids.length; i += 2) {
          const qs = [ids[i], ids[(i + 1) % ids.length]];
          const g = createGame({ seats: [{}, {}], quadrants: qs, rules });
          const dealt = new Set(Object.values(g.cards).map(c => c.def));
          for (const id of CUTS) expect(dealt.has(id), `${id} dealt with ${qs} ${JSON.stringify(rules)}`).toBe(false);
        }
      }
    } finally { FULL_DECK.tests = was; }
  });
});
