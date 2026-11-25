// @vitest-environment node
// Cory, 2026-11-24 10:04pm: "yeah i guess we add from the maybes", then 10:11pm "lets get everything to 12": Green, Blue and White reach 12 from the maybes. Footman and Rabble-Rouser are built but not dealt.
import { describe, it, expect } from 'vitest';
import { contextFor } from '../../../engine/v4/core.js';
import { defById, quadrant } from '../../../engine/v4/content/index.js';
import { CUT, CUT10 } from '../../../engine/v4/content/cull.js';
import { table, uidIn } from './cards-helpers-b.js';

const fixture = (quads, opts) => { const s = table(quads, opts); s.queue = []; s.pending = null; return s; };

describe('the maybes are dealt in the 10-card decks', () => {
  for (const id of ['echo.lackey', 'market.doorbusters', 'trading.mendicant', 'trading.evictors']) {
    it(id, () => {
      const d = defById(id);
      expect(d.retired).toBeFalsy();
      expect(CUT.has(id) || CUT10.has(id)).toBe(false);
      expect(quadrant(id.split('.')[0]).members.some(x => x.id === id)).toBe(true);
    });
  }
});

describe('Lackey: "Whenever you place a minion on the same color as the minion placed just before yours, +2 green."', () => {
  it('pays once for a same-color placement', () => {
    const s = fixture(['red', 'echo', 'purple', 'silver'], { members: [['echo.lackey']] });
    const p = s.players[0], c = contextFor(s), d = defById('echo.lackey');
    p.sameColorAsPrev = true;
    d.afterAction(c, p);
    expect(p.res.green).toBe(2);
    d.afterAction(c, p);
    expect(p.res.green).toBe(2);
  });
});

describe('Mendicant: "Round End: +1 follower per color of resource you hold none of."', () => {
  it('counts each table color you hold none of', () => {
    const s = fixture(['red', 'trading', 'purple', 'silver'], { members: [['trading.mendicant']] });
    const p = s.players[0], c = contextFor(s), d = defById('trading.mendicant');
    const colors = s.resources;
    p.res = Object.fromEntries(colors.map(k => [k, 0]));
    p.res[colors[0]] = 2;
    d.onRoundEnd(c, p);
    expect(p.bonus).toBe(colors.length - 1);
  });
});
