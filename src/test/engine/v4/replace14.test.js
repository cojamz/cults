// @vitest-environment node
// Members E lane (REPLACE14, Nov 4; /mnt/project-files/quality/pitches/E-*.md): one test per sentence of each card,
// plus the turn from its pitch.
import { describe, it, expect } from 'vitest';

process.env.REPLACE14 = 'grandtour,pawnshop';
// trial cards are tested at the Nov 5 afternoon prices (every member 2 more than its card file); the live price is
// 4 more since Nov 5 evening, and these tests check what the cards do, not their price
process.env.MEMBER_UP = '2';
const { applyMove } = await import('../../../engine/v4/core.js');
const { quadrant } = await import('../../../engine/v4/content/index.js');
const { table } = await import('./cards-helpers-b.js');
delete process.env.REPLACE14;
delete process.env.MEMBER_UP;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const slot = (s, q, name) => `${s.quadrants.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.name === name)}`;
const log = s => s.log.join('\n');

describe('REPLACE14: Grand Tour ("+2 yellow. Choose a rival: gain 1 of each color among their members.")', () => {
  const quads = ['red', 'yellow', 'market', 'silver', 'thieves'];
  it("is on the wheel in Melting Pot's place", () => {
    const names = quadrant('yellow').actions.map(a => a.name);
    expect(names).toContain('Grand Tour');
    expect(names).not.toContain('Melting Pot');
  });
  it('+2 yellow, even when no rival has members (then nothing to choose)', () => {
    let s = table(quads, { n: 3, round: 2 });
    s = answer(s, `slot:${slot(s, 'yellow', 'Grand Tour')}`);
    expect(s.players[0].res.yellow).toBe(2);
    expect(log(s)).toContain("P1's Grand Tour: no rival has members yet, so only the yellow.");
  });
  it('choose a rival: +1 of each color among their members (the pitched turn: narrow you, wide leader)', () => {
    let s = table(quads, {
      n: 3, round: 2,
      members: [['red.recruiter'], ['red.volunteer', 'market.regular', 'silver.toastmaster', 'thieves.cutpurse'], ['market.trendsetter']],
    });
    s = answer(s, `slot:${slot(s, 'yellow', 'Grand Tour')}`);
    expect(s.players[0].res.yellow).toBe(2);
    expect(s.pending.options.map(o => o.id)).toEqual(['player:1', 'player:2']);
    s = answer(s, 'player:1');
    const r = s.players[0].res;
    expect([r.red, r.blue, r.silver, r.magenta, r.yellow]).toEqual([1, 1, 1, 1, 2]);
    expect(log(s)).toContain("P1's Grand Tour: P2's members: +1 red, +1 blue, +1 silver, +1 magenta.");
  });
  it('two members of one color still give 1 of it; rivals lose nothing', () => {
    let s = table(quads, { n: 2, round: 2, members: [[], ['red.volunteer', 'red.recruiter']], res: [{}, { red: 3 }] });
    s = answer(s, `slot:${slot(s, 'yellow', 'Grand Tour')}`);
    s = answer(s, 'player:1');
    expect(s.players[0].res.red).toBe(1);
    expect(s.players[1].res.red).toBe(3);
  });
});

describe('REPLACE14: Pawn Shop ("Turn all of one color you hold into followers, one for one. +1 white.")', () => {
  const quads = ['red', 'trading', 'market'];
  it("is on the wheel in Exchange's place", () => {
    const names = quadrant('trading').actions.map(a => a.name);
    expect(names).toContain('Pawn Shop');
    expect(names).not.toContain('Exchange');
  });
  it('turns all of the chosen color into as many followers, then +1 white (the pitched round I turn)', () => {
    let s = table(quads, { n: 2, round: 1, res: [{ red: 4, blue: 2, white: 1 }] });
    s = answer(s, `slot:${slot(s, 'trading', 'Pawn Shop')}`);
    expect(s.pending.options.map(o => o.id)).toEqual(['color:red', 'color:white', 'color:blue', 'done']);
    s = answer(s, 'color:red');
    const p = s.players[0];
    expect(p.res.red).toBe(0);
    expect(p.res.blue).toBe(2);
    expect(p.res.white).toBe(2);
    expect(p.bonus).toBe(4);
    expect(log(s)).toContain("P1's Pawn Shop: 4 red became 4 followers.");
  });
  it('turning nothing in still gives +1 white; an empty hand gives +1 white with no choice', () => {
    let s = table(quads, { n: 2, round: 1, res: [{ red: 2 }] });
    s = answer(s, `slot:${slot(s, 'trading', 'Pawn Shop')}`);
    s = answer(s, 'done');
    expect(s.players[0].res).toMatchObject({ red: 2, white: 1 });
    expect(s.players[0].bonus).toBe(0);
    let t = table(quads, { n: 2, round: 1 });
    t = answer(t, `slot:${slot(t, 'trading', 'Pawn Shop')}`);
    expect(t.players[0].res.white).toBe(1);
    expect(log(t)).toContain("P1's Pawn Shop: nothing to turn in.");
  });
  it('the new white comes after the turn-in, so it is not cashed', () => {
    let s = table(quads, { n: 2, round: 1, res: [{ white: 3 }] });
    s = answer(s, `slot:${slot(s, 'trading', 'Pawn Shop')}`);
    s = answer(s, 'color:white');
    expect(s.players[0].bonus).toBe(3);
    expect(s.players[0].res.white).toBe(1);
  });
});
