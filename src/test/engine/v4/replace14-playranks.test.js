// @vitest-environment node
// Members E lane (REPLACE14, Nov 4): paper passers sent to play under "paper filters, play ranks". One test per sentence.
import { describe, it, expect } from 'vitest';

process.env.REPLACE14 = 'ragpicker,shopcolor,shoptwo,openhouse,thrifty,hostesstwo,patronesses';
// trial cards are tested at the Nov 5 afternoon prices (every member 2 more than its card file); the live price is
// 4 more since Nov 5 evening, and these tests check what the cards do, not their price
process.env.MEMBER_UP = '2';
const { applyMove } = await import('../../../engine/v4/core.js');
const { quadrant, defById } = await import('../../../engine/v4/content/index.js');
const { table, uidIn } = await import('./cards-helpers-b.js');
const { useRetired } = await import('./helpers.js');
useRetired(['red.turnout', 'thieves.hideout']);
delete process.env.REPLACE14;
delete process.env.MEMBER_UP;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const slot = (s, q, name) => `${s.quadrants.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.name === name)}`;
const log = s => s.log.join('\n');
const payAll = s => { while (s.pending && s.pending.player === 0 && s.pending.prompt?.includes('pay')) s = answer(s, s.pending.options[0].id); return s; };

describe('REPLACE14: Ragpicker ("You may recruit the top member of the discard pile as if it were in the shop.")', () => {
  it("is dealt in Patroness' place", () => {
    expect(defById('market.ragpicker').name).toBe('Ragpicker');
    expect(defById('market.patroness').retired).toBe(true);
  });
  it("offers the discard pile's top card beside the shop, and recruits it at its price", () => {
    let s = table(['red', 'market'], { n: 2, round: 2, res: [{ red: 9, blue: 9, gold: 9 }], members: [['market.ragpicker']] });
    const b = s.pile.pop(); s.discard.push(b); // the discard pile's top card (Nov 6: the pile's bottom became the discard pile)
    s = answer(s, `slot:${slot(s, 'red', 'Gather')}`);
    const o = s.pending.options.find(x => x.id === `card:${b}`);
    expect(o?.label).toContain('(top of the discard pile)');
    s = payAll(answer(s, o.id));
    expect(s.players[0].members).toContain(b);
    expect(log(s)).toContain("from the discard pile with P1's Ragpicker");
  });
});

describe('REPLACE14: Shoplifter, its color', () => {
  it('recruiting a red member steals 1 red from each rival who has red', () => {
    let s = table(['red', 'thieves'], { n: 3, round: 2, res: [{ red: 9, magenta: 9 }, { red: 2 }, { blue: 2 }], members: [['thieves.shopcolor']], shop: ['red.mentor'] });
    s = answer(s, `slot:${slot(s, 'thieves', 'Lie Low')}`);
    while (s.pending?.player === 0 && s.pending.kind !== 'buy') s = answer(s, s.pending.options[0].id);
    s = payAll(answer(s, `card:${uidIn(s, 'red.mentor', 'shop')}`));
    expect(log(s)).toContain("P1's Shoplifter: took 1 red from P2.");
    expect(log(s)).not.toContain('from P3.');
  });
});

describe('REPLACE14: Shoplifter, steal 2', () => {
  it('recruiting a member starts a steal of 2', () => {
    let s = table(['red', 'thieves'], { n: 2, round: 2, res: [{ red: 9, magenta: 9 }, { gold: 5 }], members: [['thieves.shoptwo']], shop: ['thieves.crew'] });
    s = answer(s, `slot:${slot(s, 'red', 'Gather')}`);
    s = payAll(answer(s, `card:${uidIn(s, 'thieves.crew', 'shop')}`));
    while (s.pending?.player === 0 && s.pending.prompt?.includes('Shoplifter')) s = answer(s, s.pending.options[0].id);
    expect(s.players[1].res.gold).toBe(3);
  });
});

describe('REPLACE14: Open House', () => {
  it("is on the wheel in Melting Pot's place", () => {
    const names = quadrant('yellow').actions.map(a => a.name);
    expect(names).toContain('Open House');
    expect(names).not.toContain('Melting Pot');
  });
  it('+2 yellow, then a free recruit costing up to 2 per member color', () => {
    let s = table(['red', 'yellow', 'market'], { n: 2, round: 2, members: [['red.mentor', 'market.windowshopper']] });
    s = answer(s, `slot:${slot(s, 'yellow', 'Open House')}`);
    expect(s.players[0].res.yellow).toBe(2);
    const opts = (s.pending?.options || []).filter(o => o.kind === 'card');
    for (const o of opts) expect(defById(s.cards[o.value].def).s + defById(s.cards[o.value].def).w).toBeLessThanOrEqual(4);
    if (opts.length) { const u = opts[0].value; s = answer(s, opts[0].id); expect(s.players[0].members).toContain(u); expect(log(s)).toContain("Open House: recruits"); }
  });
});

describe('REPLACE14 (thrifty): Misers, "Game End: +1 follower per white you hold."', () => {
  it("is dealt in Misers' place and pays 1 per white", async () => {
    expect(defById('trading.thrifty').text).toBe('Game End: +1 follower per white you hold.');
    expect(defById('trading.heirs').retired).toBe(true);
    expect(defById('trading.thrifty').onGameEnd(null, { res: { white: 7 } })).toBe(7);
  });
});

describe('REPLACE14: Hostesses ("Round Start: give each rival 2 silver. +2 followers for each.")', () => {
  it('3 rivals: each +2 silver, +6 followers', () => {
    const s = table(['red', 'silver'], { n: 4, queue: [{ t: 'round', r: 2 }], bonus: [0, 0, 0, 0], members: [['silver.hostesstwo']] });
    expect([1, 2, 3].map(i => s.players[i].res.silver)).toEqual([2, 2, 2]);
    expect(log(s)).toContain("P1's Hostesses: P2, P3, P4 +2 silver each; P1 +6 followers.");
  });
});

describe('REPLACE14: Patronesses ("Round End: you may give rivals any of your silver, split as you choose. +1 follower per silver you give.")', () => {
  it('gives 2 of your own 3 silver, +2 followers; or nothing', () => {
    let s = table(['red', 'silver'], { n: 3, round: 1, queue: [{ t: 'allPlaced' }], res: [{ silver: 3 }, {}, {}], members: [['silver.patronesses']] });
    const b = s.players[0].bonus;
    s = answer(s, 'player:1'); s = answer(s, 'player:2'); s = answer(s, 'done');
    expect(s.players[0].res.silver).toBe(1);
    expect([s.players[1].res.silver, s.players[2].res.silver]).toEqual([1, 1]);
    expect(s.players[0].bonus).toBe(b + 2);
    let t = table(['red', 'silver'], { n: 2, round: 1, queue: [{ t: 'allPlaced' }], res: [{ silver: 3 }, {}], members: [['silver.patronesses']] });
    t = answer(t, 'done');
    expect(t.players[0].res.silver).toBe(3);
  });
});
