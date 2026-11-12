// @vitest-environment node
// Cory's Nov 11 member calls for White and Purple (design/decisions.md, 9:10pm and 9:12pm Eastern):
// Leavetakers replaces Undertaker, Minimalists fills White's last slot, Last Callers fills Purple's open slot.
import { describe, it, expect } from 'vitest';
import { contextFor } from '../../../engine/v4/core.js';
import { defById } from '../../../engine/v4/content/index.js';
import { CUT } from '../../../engine/v4/content/cull.js';
import { take, move } from './helpers.js';
import { sceneQ } from './cards-helpers.js';
import { table, named, uidIn } from './cards-helpers-b.js';

const turns = (...ps) => ps.map(p => ({ t: 'turn', p }));

describe('White: Leavetakers and Minimalists', () => {
  it('print his text; Undertaker and Barker leave the deck', () => {
    expect(defById('trading.leavetakers').text).toBe('Whenever one of your members leaves your cult, +2 white.');
    expect(defById('trading.minimalists').text).toBe('Game End: +2 followers per member you have costing 6 or more.');
    expect(CUT.has('trading.undertaker') && CUT.has('trading.barker')).toBe(true);
    expect(CUT.has('trading.leavetakers') || CUT.has('trading.minimalists')).toBe(false);
  });
  it('Leavetakers: a member discarded on Downsizers pays +2 white (with Downsizers\' +4)', () => {
    let s = table(['gold', 'red', 'trading', 'thieves'], { members: [['trading.moneylender', 'trading.leavetakers', 'red.twins']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'trading.moneylender', 0)}`);
    s = move(s, `card:${uidIn(s, 'red.twins', 0)}`);
    expect(s.players[0].res.white).toBe(6);
    expect(named(s, 'Leavetakers')).toEqual(["P1's Leavetakers: Triplets left: +2 white."]);
  });
  it('Minimalists: +2 per member costing 6 or more at Game End', () => {
    const s = table(['gold', 'red', 'trading', 'thieves'], { members: [['trading.minimalists', 'trading.heiress', 'gold.tycoon', 'red.twins']] });
    const ctx = contextFor(s), cost = d => d.s + d.w;
    const big = s.players[0].members.filter(u => cost(defById(s.cards[u].def)) >= 6).length;
    expect(defById('trading.minimalists').onGameEnd(ctx, s.players[0])).toBe(2 * big);
  });
});

describe('Purple: Last Callers', () => {
  it('prints his text; Sleepyheads\' price', () => {
    const d = defById('purple.lastcallers');
    expect(d.text).toBe('On Use, once per round: take the Goes Last token.');
    expect([d.s, d.w]).toEqual([defById('purple.sleepyheads').s, defById('purple.sleepyheads').w]);
  });
  it('On Use takes the Goes Last token from a rival, once a round', () => {
    let s = sceneQ({ quadrants: ['gold', 'red', 'purple', 'echo'], round: 2, left: 3, members: [['purple.lastcallers']], queue: [...turns(0, 1, 0, 1, 0, 1), { t: 'allPlaced' }] });
    s.goesLast = { round: 2, pid: 1 };
    s = take(s, 'gold.rush');
    const opt = `use:${s.players[0].members.find(u => s.cards[u].def === 'purple.lastcallers')}`;
    s = move(s, opt);
    expect(s.goesLast).toEqual({ round: 2, pid: 0 });
    expect(named(s, 'Last Callers').length).toBeGreaterThan(0);
  });
});
