// @vitest-environment node
// Cory, 2026-11-25: the likely-ins from the new member ideas go into the decks, toward 15 a color (design/decisions.md).
import { describe, it, expect } from 'vitest';
import { contextFor } from '../../../engine/v4/core.js';
import { defById, quadrant } from '../../../engine/v4/content/index.js';
import { CUT, CUT10 } from '../../../engine/v4/content/cull.js';
import { table, uidIn } from './cards-helpers-b.js';

const fixture = (quads, opts) => { const s = table(quads, opts); s.queue = []; s.pending = null; return s; };
const R = ['red', 'market', 'purple', 'silver'];

describe('the new members are dealt in the 10-card decks', () => {
  for (const id of ['red.innkeeper', 'red.wetnurse', 'red.chapman', 'thieves.hoarder', 'market.bargainer', 'silver.beggar', 'purple.nightporter', 'yellow.pilgrims']) {
    it(id, () => {
      const d = defById(id);
      expect(d.retired).toBeFalsy();
      expect(CUT.has(id) || CUT10.has(id)).toBe(false);
      expect(quadrant(id.split('.')[0]).members.some(x => x.id === id)).toBe(true);
    });
  }
});

describe('Innkeeper: "Whenever one of your members goes back to the shop, +3 red."', () => {
  it('a swap with the shop and a member put back in the shop pay; one sent to the discard pile does not', () => {
    const s = fixture(R, { members: [['red.innkeeper', 'red.twins', 'red.intern', 'red.bigfamily']], shop: ['red.volunteer'] });
    const p = s.players[0], c = contextFor(s);
    expect(c.swapMembers(p, uidIn(s, 'red.twins', 0), uidIn(s, 'red.volunteer', 'shop'))).toBe(true);
    expect(p.res.red).toBe(3);
    c.buryMember(p, uidIn(s, 'red.intern', 0), p, { shop: true });
    expect(p.res.red).toBe(6);
    c.buryMember(p, uidIn(s, 'red.bigfamily', 0), p);
    expect(p.res.red).toBe(6);
  });
  it("a rival's member going to the shop pays nothing", () => {
    const s = fixture(R, { members: [['red.innkeeper'], ['red.intern']] });
    contextFor(s).buryMember(s.players[1], uidIn(s, 'red.intern', 1), s.players[1], { shop: true });
    expect(s.players[0].res.red || 0).toBe(0);
  });
});

describe('Wet Nurse: "Whenever you recruit the cheapest member in the shop, +3 red."', () => {
  it('the cheapest pays, a dearer one does not', () => {
    const s = fixture(R, { members: [['red.wetnurse']], shop: ['red.volunteer', 'red.bodysnatchers'] });
    const p = s.players[0], c = contextFor(s);
    const cost = d => defById(d).s + defById(d).w;
    expect(cost('red.volunteer')).toBeLessThan(cost('red.bodysnatchers'));
    c.recruit(p, uidIn(s, 'red.bodysnatchers', 'shop'), { free: true });
    expect(p.res.red || 0).toBe(0);
    s.shop = s.shop.filter(u => s.cards[u].def === 'red.volunteer');
    c.recruit(p, uidIn(s, 'red.volunteer', 'shop'), { free: true });
    expect(p.res.red).toBe(3);
  });
});

describe('Chapman: "Whenever one of your members is swapped, +2 followers."', () => {
  it('a swap of yours pays +2, by you or by a rival', () => {
    const s = fixture(R, { members: [['red.chapman', 'red.twins', 'red.intern'], ['red.bigfamily']], shop: ['red.volunteer'] });
    const [p, o] = s.players, c = contextFor(s);
    c.swapMembers(p, uidIn(s, 'red.twins', 0), uidIn(s, 'red.volunteer', 'shop'));
    expect(p.bonus).toBe(2);
    c.swapMembers(o, uidIn(s, 'red.intern', 0), uidIn(s, 'red.bigfamily', 1));
    expect(p.bonus).toBe(4);
  });
});

describe('Hoarder: "Round End: if you hold 10 or more resources, +3 followers."', () => {
  it('10 pays, 9 does not', () => {
    const s = fixture(['red', 'thieves', 'purple', 'silver'], { members: [['thieves.hoarder']], res: [{ red: 6, thieves: 0, magenta: 4 }] });
    const d = defById('thieves.hoarder'), c = contextFor(s), p = s.players[0];
    p.res = { ...p.res, red: 6, magenta: 4 };
    d.onRoundEnd(c, p);
    expect(p.bonus).toBe(3);
    p.res.red = 5;
    d.onRoundEnd(c, p);
    expect(p.bonus).toBe(3);
  });
});

describe('Bargainer: "Game End: +1 follower per member you have costing 5 or less."', () => {
  it('counts members printed at 5 or less', () => {
    const s = fixture(R, { members: [['market.bargainer', 'red.volunteer', 'red.bodysnatchers']] });
    const p = s.players[0], c = contextFor(s);
    const want = c.membersOf(p).filter(x => x.def.s + x.def.w <= 5).length;
    expect(want).toBeGreaterThan(0);
    expect(defById('market.bargainer').onGameEnd(c, p)).toBe(want);
  });
});

describe('Beggar: "Whenever a rival gives you silver, +1 follower."', () => {
  it("a rival's gift of silver pays; your own or another color does not", () => {
    const s = fixture(R, { members: [['silver.beggar']] });
    const [p, o] = s.players, c = contextFor(s), d = defById('silver.beggar');
    d.onGiven(c, p, null, o, 'silver', 2);
    d.onGiven(c, p, null, p, 'silver', 2);
    d.onGiven(c, p, null, o, 'red', 2);
    expect(p.bonus).toBe(1);
  });
});
