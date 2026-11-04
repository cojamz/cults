// @vitest-environment node
// Members E lane (REPLACE14, Nov 4): paper passers sent to play under "paper filters, play ranks". One test per sentence.
import { describe, it, expect } from 'vitest';

process.env.REPLACE14 = 'ragpicker,shopcolor,shoptwo,openhouse';
const { applyMove } = await import('../../../engine/v4/core.js');
const { quadrant, defById } = await import('../../../engine/v4/content/index.js');
const { table, uidIn } = await import('./cards-helpers-b.js');
delete process.env.REPLACE14;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const slot = (s, q, name) => `${s.quadrants.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.name === name)}`;
const log = s => s.log.join('\n');
const payAll = s => { while (s.pending && s.pending.player === 0 && s.pending.prompt?.includes('pay')) s = answer(s, s.pending.options[0].id); return s; };

describe('REPLACE14: Ragpicker ("You may recruit the bottom member of the pile as if it were in the shop.")', () => {
  it("is dealt in Patroness' place", () => {
    expect(defById('market.ragpicker').name).toBe('Ragpicker');
    expect(defById('market.patroness').retired).toBe(true);
  });
  it('offers the bottom card of the pile beside the shop, and recruits it at its price', () => {
    let s = table(['red', 'market'], { n: 2, round: 2, res: [{ red: 9, blue: 9, gold: 9 }], members: [['market.ragpicker']] });
    s = answer(s, `slot:${slot(s, 'red', 'Gather')}`);
    const b = s.pile[s.pile.length - 1];
    const o = s.pending.options.find(x => x.id === `card:${b}`);
    expect(o?.label).toContain('(bottom of the pile)');
    s = payAll(answer(s, o.id));
    expect(s.players[0].members).toContain(b);
    expect(log(s)).toContain("from the bottom of the pile with P1's Ragpicker");
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
