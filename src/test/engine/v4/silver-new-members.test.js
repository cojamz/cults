// @vitest-environment node
// Silver's new members (Cory, Nov 11 7:33pm and 7:38pm Eastern): Paupers and Loan Officers.
import { describe, it, expect } from 'vitest';
import { resume } from '../../../engine/v4/core.js';
import { table, uidIn } from './cards-helpers-b.js';
import { move } from './helpers.js';

const Q = ['silver', 'red', 'market', 'thieves'];
const atEnd = s => resume({ ...s, queue: [{ t: 'allPlaced' }], pending: null });
const withRes = (s, i, res) => ({ ...s, players: s.players.map((p, k) => (k === i ? { ...p, res: { ...p.res, ...res } } : p)) });

describe('Paupers: "Round End: if you hold no silver, +3 followers."', () => {
  it('pays 3 at round end with no silver', () => {
    let s = table(Q, { n: 3, round: 2, members: [['silver.paupers']], queue: [] });
    const before = s.players[0].bonus;
    s = atEnd(withRes(s, 0, { silver: 0 }));
    expect(s.players[0].bonus - before).toBe(3);
    expect(s.log).toContain("P1's Paupers: no silver, +3 followers.");
  });
  it('pays nothing while you hold silver', () => {
    let s = table(Q, { n: 3, round: 2, members: [['silver.paupers']], queue: [] });
    const before = s.players[0].bonus;
    s = atEnd(withRes(s, 0, { silver: 1 }));
    expect(s.players[0].bonus - before).toBe(0);
  });
});

describe('Loan Officers: "On Use, once per round: give a rival up to 5 of your silver, then take as many of their resources, you choose which."', () => {
  it('gives the silver, then takes as many of their resources as you choose', () => {
    let s = table(Q, { n: 3, round: 2, members: [['silver.loanofficers']] });
    s = withRes(withRes(s, 0, { silver: 7, red: 0 }), 1, { silver: 0, red: 2, magenta: 3 });
    const u = uidIn(s, 'silver.loanofficers', 0);
    s = move(s, `use:${u}`);
    s = move(s, 'player:1');
    expect(s.pending.options.map(o => o.id)).toEqual(['n:5', 'n:4', 'n:3', 'n:2', 'n:1']);
    s = move(s, 'n:3');
    expect(s.players[0].res.silver).toBe(4);
    expect(s.players[1].res.silver).toBe(3);
    s = move(s, 'color:red');
    s = move(s, 'color:red');
    s = move(s, 'color:magenta');
    expect(s.players[0].res.red).toBe(2);
    expect(s.players[0].res.magenta).toBe(1);
    expect(s.players[1].res.red).toBe(0);
    expect(s.players[1].res.magenta).toBe(2);
    expect(s.cards[u].used).toBe(true);
  });
  it('gives at most 5, and takes no more than the rival has', () => {
    let s = table(Q, { n: 2, round: 2, members: [['silver.loanofficers']] });
    s = withRes(withRes(s, 0, { silver: 9 }), 1, { silver: 0, red: 1, blue: 0, magenta: 0 });
    const u = uidIn(s, 'silver.loanofficers', 0);
    s = move(s, `use:${u}`);
    if (s.pending?.options?.some(o => o.id === 'player:1')) s = move(s, 'player:1');
    expect(s.pending.options[0].id).toBe('n:5');
    s = move(s, 'n:5');
    // they now hold 5 silver and 1 red: 5 picks, any of their colors (silver too)
    for (let i = 0; i < 5; i++) s = move(s, s.pending.options[0].id);
    expect(s.players[0].res.silver + s.players[0].res.red).toBe(4 + 5);
  });
  it('with no silver, nothing happens and it stays ready', () => {
    let s = table(Q, { n: 2, round: 2, members: [['silver.loanofficers']] });
    s = withRes(s, 0, { silver: 0 });
    const u = uidIn(s, 'silver.loanofficers', 0);
    s = move(s, `use:${u}`);
    expect(s.cards[u].used).toBe(false);
  });
});
