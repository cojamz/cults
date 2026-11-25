// The two decks (Cory, 2026-10-31): rules.deck = 10 deals 10 members per 2.0 color and 10 grey, 4 joining in round I
// (Blue 5: it has only 4 later members; Yellow 5 since Jack-of-All-Trades, a round I member, took round II Tastemaker's
// place, Nov 4); without it, the 15-card decks.
import { describe, it, expect } from 'vitest';
import { createGame } from '../../../engine/v4/index.js';
import { defById } from '../../../engine/v4/content/index.js';
import { joinsRound } from '../../../engine/v4/core.js';

const COLORS = ['red', 'echo', 'thieves', 'purple', 'market', 'trading', 'yellow'];
const deal = (quadrants, deck) => createGame({ seats: quadrants.map(() => ({ kind: 'bot' })), seed: 7, quadrants, rules: { cull: true, artifacts: true, roundDecks: 2, ...(deck ? { deck } : {}) } });
const count = (s, color) => {
  const all = [...s.pile, ...s.shop, ...Object.values(s.waiting).flat()].map(u => defById(s.cards[u].def));
  const mine = all.filter(d => (color === 'grey' ? !s.quadrants.includes(d.quadrant) : d.quadrant === color));
  return { n: mine.length, r1: mine.filter(d => joinsRound(s, d) === 1).length };
};

// round I members by color since Nov 5 (only members at 3 or less before the +1 wild)
// round I is up to 5 as a player sees it (printed 3 plus the 2 every member adds; Cory, Nov 5 10:22pm UTC: "move it to 5")
const R1 = { red: 6 /* Innkeeper and Wet Nurse in round I (Nov 25) */, red4: 4 /* Bannermen, round I (Cory, Nov 11); Deprogrammers out (Nov 12) */, echo: 3 /* Lackey, Nov 24 */, echo2: 2, /* Gardeners (Nov 11); Copyist to round II at its pricier cost (Cory, Nov 13) */ thieves: 1 /* Tax Men to round II at 7 (Cory, Nov 26: "Tax Men can go to 7") */, purple: 5 /* Shirker, Nov 25 */, market: 3 /* Bargainer, Nov 25 */, market2: 2 /* Blue's Nov 11 members cost more than 3 printed */, trading: 5 /* Mendicant, Nov 24 */, yellow: 2 /* Drifters, Nov 25 */, yellow1: 1 /* Dawn Traders only: Cory's Nov 11 Yellow members all cost more than 3 printed */ }; // red 4: Abbess back in round I (Cory, Nov 6: "lower")
// fewer than 10 where Cory's Nov 5 cuts left holes (Grifter, Cutpurse; Early Birds; Shopaholics; Raiders; Meddler, Gardeners), until he picks their replacements
const N = { red: 13 /* Innkeeper, Wet Nurse, Chapman in (Nov 25, toward 15) */, red10: 10 /* Mob and Proselytizers out, Guild Master and Bannermen in, Nov 11; Dyer in for Deprogrammers (Nov 12) */, echo: 11 /* Lackey (Cory, Nov 24: "lets get everything to 12"); Packed House out at 10:17pm */, echo10: 10 /* Buskers out, Nov 11 */, thieves: 12 /* Hoarder, Cutthroats, Nov 25 */, purple: 12 /* Night Porter, Shirker, Nov 25 */, purple10: 10 /* Usher in for Gossip (Nov 12) */, market: 12 /* Bargainer, Nov 25; Doorbusters, Nov 24 10:11pm */, trading: 12 /* Mendicant, Evictors (Nov 24 10:11pm) */, yellow: 12 /* Pilgrims, Drifters, Nov 25 */ }; // purple 10: Night Watch and Night Owls out, Sleepyheads and Hurriers in (Cory, Nov 6)

describe('10-card decks', () => {
  it('deals 10 of each 2.0 color and 11 grey (Trumpeters in Nov 4; Victors out Nov 6); round I gets only the cheap ones (Cory, Nov 5)', () => {
    for (let i = 0; i < COLORS.length; i += 4) {
      const table = COLORS.slice(i, i + 4).concat(COLORS.slice(0, Math.max(0, 4 - COLORS.slice(i, i + 4).length)));
      const s = deal(table, 10);
      for (const q of table) expect(count(s, q), q).toEqual({ n: N[q], r1: R1[q] });
      expect(count(s, 'grey')).toEqual({ n: 11, r1: 2 });
    }
  });
  it('without the rule a table deals the bigger decks', () => {
    const s = deal(['red', 'echo', 'thieves', 'purple']);
    expect(count(s, 'echo').n).toBeGreaterThan(10);
    expect(count(s, 'grey').n).toBe(16);
  });
});
