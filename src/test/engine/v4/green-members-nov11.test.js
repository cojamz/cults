// @vitest-environment node
// Green's new members from Cory's Nov 11 member pass: Mimics (replaces Impersonator), Regulars (Tribute Band's slot),
// Die-Hards (the 10th). Each fires once in a small hand-built position.
import { describe, it, expect } from 'vitest';
import { contextFor } from '../../../engine/v4/core.js';
import { defById } from '../../../engine/v4/content/index.js';
import { CUT } from '../../../engine/v4/content/cull.js';
import { take, move, play } from './helpers.js';
import { table, useCosts, uidIn, named } from './cards-helpers-b.js';

const Q = ['gold', 'red', 'market', 'echo'];
useCosts({ 'echo.mimics': [1, 1], 'gold.banker': [1, 1] });
const ROW = ['gold.tycoon', 'red.twins', 'red.intern', 'gold.taxman'];
const pass = s => s.pending?.kind === 'buy' ? move(s, 'pass') : s;

describe('Green members, Nov 11', () => {
  it('Mimics is dealt and Impersonator is out', () => {
    expect(CUT.has('echo.impersonators')).toBe(true);
    expect(CUT.has('echo.mimics')).toBe(false);
    expect(defById('echo.mimics').text).toBe('On Recruit: use the On Recruit of any member in play.');
  });

  it("Mimics uses a rival's member's On Recruit (Banker: +3 gold)", () => {
    let s = table(Q, { shop: ['echo.mimics', ...ROW], res: [{ green: 2, red: 2 }], members: [[], ['gold.banker']] });
    s = take(s, 'gold.rush');
    const g = s.players[0].res.gold;
    s = move(s, 'card:' + uidIn(s, 'echo.mimics', 'shop'));
    expect(s.pending.prompt).toMatch(/^Mimics:/);
    expect(s.pending.options.map(o => o.label)).toEqual([expect.stringMatching(/^P2's Banker/)]);
    s = move(s, s.pending.options[0].id);
    expect(s.players[0].res.gold).toBe(g + 3); // Banker's On Recruit
    expect(s.players[1].members).toContain(uidIn(s, 'gold.banker', 1)); // the rival keeps it
  });

  it('Mimics can use one of your own members, never itself', () => {
    let s = table(Q, { shop: ['echo.mimics', ...ROW], res: [{ green: 2, red: 2 }], members: [['gold.banker']] });
    s = take(s, 'gold.rush');
    s = move(s, 'card:' + uidIn(s, 'echo.mimics', 'shop'));
    expect(s.pending.options.map(o => o.label)).toEqual([expect.stringMatching(/^Your Banker/)]);
  });

  it('Mimics with no On Recruit in play says so and asks nothing', () => {
    let s = table(Q, { shop: ['echo.mimics', ...ROW], res: [{ green: 2, red: 2 }] });
    s = take(s, 'gold.rush');
    s = pass(move(s, 'card:' + uidIn(s, 'echo.mimics', 'shop')));
    expect(s.log.some(l => /Mimics: no member in play/.test(l))).toBe(true);
  });

  it('Regulars: at round end, +1 follower per minion you have on Green spaces', () => {
    let s = table(Q, { members: [['echo.regulars']], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }] });
    s = pass(play(take(s, 'echo.chant')));
    s = pass(play(take(s, 'echo.refrain')));
    const ctx = contextFor(s), p = s.players[0], b = p.bonus;
    defById('echo.regulars').onRoundEnd(ctx, p);
    expect(p.bonus).toBe(b + 2);
  });

  it('Die-Hards: +6 at game end with the most green members, ties count, none with no green member', () => {
    const s = table(Q, { n: 3, members: [['echo.diehards', 'echo.encore'], ['echo.copyist', 'echo.hourglass'], ['gold.taxman']] });
    const ctx = contextFor(s), d = defById('echo.diehards');
    expect(d.onGameEnd(ctx, s.players[0])).toBe(6); // 2 to 2: a tie counts
    s.players[1].members.push(s.pile.find(u => s.cards[u].def === 'echo.wallflower'));
    expect(d.onGameEnd(ctx, s.players[0])).toBe(0); // the rival has 3
    expect(d.onGameEnd(ctx, s.players[2])).toBe(0);
  });
});
