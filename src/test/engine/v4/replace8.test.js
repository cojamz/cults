// @vitest-environment node
// Quality loop lane B (Nov 4; /mnt/project-files/quality/pitches/B-*.md), the REPLACE8=1 bot-test switch: a test per sentence of each new card, the turn played in its pitch, and the
// old card no longer dealt. The switches are read when the engine loads, so they are set before the engine is imported
// (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE8 = '1';
const { resume, contextFor } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { move, take } = await import('./helpers.js');
const { sceneQ, linesNaming } = await import('./cards-helpers.js');
const { uidIn } = await import('./cards-helpers-b.js');
delete process.env.REPLACE8;

const sc = o => sceneQ({ quadrants: ['gold', 'red', 'silver', 'green'], ...o });
const pass = s => move(s, s.pending.options.find(o => o.kind === 'pass').id);
const opt = (s, re) => s.pending.options.find(o => re.test(o.id) || re.test(o.label || ''));

describe('REPLACE8: the switch', () => {
  it("keeps the old cards' prices, worth and count, and retires the old cards", () => {
    const card = id => { const d = defById(id); return [d.s, d.w, d.f, d.n]; };
    expect(card('silver.wellwishers')).toEqual(card('silver.debtcollector'));
    expect(card('silver.usher')).toEqual(card('silver.polisher'));
    for (const id of ['silver.debtcollector', 'silver.polisher']) expect(defById(id).retired).toBe(true);
    expect(defById('silver.gala').retired).toBeFalsy();
  });
});

describe('Well-Wishers: "Whenever one of your members goes to a rival\'s cult, +3 followers."', () => {
  it("a member moved into a rival's cult by anyone: +3; Well-Wishers itself leaving pays nothing", () => {
    let s = sc({ n: 3, members: [['silver.wellwishers', 'silver.toastmaster']], queue: [] });
    const ctx = contextFor(s);
    ctx.moveMember(uidIn(s, 'silver.toastmaster', 0), s.players[0], s.players[1], { actor: s.players[1], recruit: true });
    expect(s.players[0].bonus).toBe(3);
    expect(linesNaming(s.log, 'Well-Wishers')).toContain("P1's Well-Wishers: Toastmaster goes to P2: +3 followers.");
    ctx.moveMember(uidIn(s, 'silver.wellwishers', 0), s.players[0], s.players[2], { actor: s.players[2], recruit: true });
    expect(s.players[0].bonus).toBe(3);
  });
  it('a member sent to the bottom of the pile is not a rival\'s cult: nothing', () => {
    let s = sc({ n: 3, members: [['silver.wellwishers', 'silver.toastmaster']], queue: [] });
    contextFor(s).buryMember(s.players[0], uidIn(s, 'silver.toastmaster', 0));
    expect(s.players[0].bonus).toBe(0);
  });
  it('the pitched turn: Godparent gives your Hostesses to Ben: its cost from Godparent, +3 from Well-Wishers', () => {
    let s = sc({ n: 4, round: 2, members: [['silver.godparents', 'silver.wellwishers', 'silver.hostesses']], queue: [{ t: 'buy', p: 0 }] });
    const host = uidIn(s, 'silver.hostesses', 0), d = defById('silver.hostesses');
    s = move(s, `use:${uidIn(s, 'silver.godparents', 0)}`);
    s = move(s, `give:${host}:1`);
    expect(s.players[1].members).toContain(host);
    expect(s.players[0].bonus).toBe(d.s + d.w + 3);
  });
});

describe('Usher: "On Recruit: give a rival 2 silver. +3 followers."', () => {
  it('on recruit you choose a rival; they gain 2 silver from the bank and you +3 followers (the pitched turn, round I)', () => {
    let s = sc({ n: 4, res: [{ silver: 2, gold: 1 }], shop: ['silver.usher'], queue: [{ t: 'buy', p: 0 }] });
    const before = s.players[0].res.silver;
    s = move(s, s.pending.options.find(o => /Usher/.test(o.label || '')).id);
    if (s.pending?.prompt?.startsWith('Pay')) s = move(s, s.pending.options[0].id);
    expect(s.pending.prompt).toBe('Usher: which rival gains 2 silver? You get 3 followers');
    s = move(s, 'player:2');
    expect(s.players[2].res.silver).toBe(2);
    expect(s.players[0].bonus).toBe(3);
    expect(s.players[0].res.silver).toBeLessThan(before);
    expect(linesNaming(s.log, 'Usher')).toContain("P1's Usher: gives P3 2 silver: +3 followers.");
  });
});
