// @vitest-environment node
// Allowance left the wheel Nov 11 (Modest Means took its slot); its card checks stay here, on the retired space.
// Card-by-card verifier, White (trading): every action and member against its printed text at the doubled
// member costs, through real legal moves, plus cross-sphere cases. Every number a card changes must
// show up in a log line that names the card.
import { describe, it, expect } from 'vitest';
import { followers } from '../../../engine/v4/core.js';
import { quadrant } from '../../../engine/v4/content/index.js';
import { take, move, ids, useRetired } from './helpers.js';
import { table, useCosts, named, uidIn, owns } from './cards-helpers-b.js';

const Q = ['gold', 'red', 'trading', 'thieves'];
const QE = ['gold', 'red', 'trading', 'echo'];
useCosts({
  'gold.tycoon': [8, 4], 'gold.midas': [4, 4], 'red.bigfamily': [4, 4], 'red.twins': [2, 2], 'red.intern': [2, 0],
  'echo.doppel': [4, 2],
  'trading.shopkeeper': [2, 2], 'trading.heiress': [4, 4], 'trading.bulkbuyer': [2, 2], 'trading.broker': [2, 0],
  'trading.exporter': [2, 2], 'trading.raider': [4, 2], 'trading.cashier': [2, 2], 'trading.undertaker': [2, 2],
  'trading.appraiser': [2, 2], 'trading.changer': [2, 2], 'trading.martyr': [2, 2], 'trading.hoarder': [4, 4],
});
const ROW = ['gold.tycoon', 'red.bigfamily', 'red.twins', 'red.intern'];
const R = (s, i = 0) => s.players[i].res;
const B = (s, i = 0) => s.players[i].bonus;
const buy = { queue: [{ t: 'buy', p: 0 }] };
const cardOpt = (s, def, who) => `card:${uidIn(s, def, who)}`;
const use = (s, def) => move(s, `use:${uidIn(s, def, 0)}`);
const W = quadrant('trading');
const text = k => [...W.actions, ...W.members].find(c => c.key === k).text;

useRetired(['trading.stipend']);

describe('White: Allowance (retired Nov 11)', () => {
  it('Allowance (Oct 31, Gather\'s shape): round II pays +4 white, and +2 followers on a member recruit that turn (named)', () => {
    let s = take(table(Q, { round: 2, res: [{ red: 2 }], shop: ROW }), 'trading.stipend');
    expect([B(s), R(s).white]).toEqual([0, 4]);
    s = move(s, cardOpt(s, 'red.intern', 'shop'));
    expect(B(s)).toBe(2);
    expect(named(s, 'Allowance')).toContain("P1's Allowance: +2 followers for recruiting a member.");
  });

  it('× Doppelganger copying Brokers: two Brokers, +4 on Allowance', () => {
    let s = table(QE, { members: [['trading.broker', 'echo.doppel']], shop: ROW });
    s.cards[uidIn(s, 'echo.doppel', 0)].copy = 'trading.broker';
    s.players[0].res.red = 2;
    s = take(s, 'trading.stipend');
    s = move(s, cardOpt(s, 'red.intern', 'shop'));
    expect(B(s)).toBe(1 + 4);
  });

});
