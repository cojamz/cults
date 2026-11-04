// @vitest-environment node
// Quality loop lane B (Nov 4; /mnt/project-files/quality/pitches/B-*.md), the REPLACE8=1 bot-test switch and the
// CATERER=follower Silver Cloak candidate: a test per sentence of each new card, the turn played in its pitch, and the
// old card no longer dealt. The switches are read when the engine loads, so they are set before the engine is imported
// (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE8 = '1';
process.env.CATERER = 'follower';
const { resume, contextFor } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { move, take } = await import('./helpers.js');
const { sceneQ, linesNaming } = await import('./cards-helpers.js');
const { uidIn } = await import('./cards-helpers-b.js');
delete process.env.REPLACE8;
delete process.env.CATERER;

const sc = o => sceneQ({ quadrants: ['gold', 'red', 'silver', 'green'], ...o });
const pass = s => move(s, s.pending.options.find(o => o.kind === 'pass').id);
const opt = (s, re) => s.pending.options.find(o => re.test(o.id) || re.test(o.label || ''));

describe('REPLACE8: the switch', () => {
  it("keeps the old cards' prices, worth and count, and retires the old cards", () => {
    const card = id => { const d = defById(id); return [d.s, d.w, d.f, d.n]; };
    expect(card('silver.wellwishers')).toEqual(card('silver.debtcollector'));
    for (const id of ['silver.debtcollector']) expect(defById(id).retired).toBe(true);
    expect(defById('silver.gala').retired).toBeFalsy();
    expect(defById('silver.caterer').text).toBe('Whenever silver is gifted, +1 follower.');
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

describe('Silver Cloak, CATERER=follower: "Whenever silver is gifted, +1 follower."', () => {
  it('a gift reaching every rival pays the wearer once', () => {
    let s = sc({ n: 4, round: 2, members: [[], [], ['silver.caterer']], queue: [{ t: 'turn', p: 0 }] });
    s = take(s, 'silver.toast');
    expect(s.players[2].bonus).toBe(1);
    expect(linesNaming(s.log, 'Caterer')).toContain("P3's Caterer: +1 follower (silver was gifted).");
  });
});
