// @vitest-environment node
// Quality loop lane B (Nov 4; /mnt/project-files/quality/pitches/B-*.md), the REPLACE8=1 bot-test switch and the
// CATERER=follower Silver Cloak candidate: a test per sentence of each new card, the turn played in its pitch, and the
// old card no longer dealt. The switches are read when the engine loads, so they are set before the engine is imported
// (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE8 = '1';
process.env.CATERER = 'follower';
const { resume } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { move, take } = await import('./helpers.js');
const { sceneQ, linesNaming } = await import('./cards-helpers.js');
delete process.env.REPLACE8;
delete process.env.CATERER;

const sc = o => sceneQ({ quadrants: ['gold', 'red', 'silver', 'green'], ...o });
const pass = s => move(s, s.pending.options.find(o => o.kind === 'pass').id);
const opt = (s, re) => s.pending.options.find(o => re.test(o.id) || re.test(o.label || ''));

describe('REPLACE8: the switch', () => {
  it("keeps the old cards' prices, worth and count, and retires the old cards", () => {
    const card = id => { const d = defById(id); return [d.s, d.w, d.f, d.n]; };
    expect(card('silver.patronesses')).toEqual(card('silver.debtcollector'));
    expect(card('silver.freeloader')).toEqual(card('silver.polisher'));
    for (const id of ['silver.debtcollector', 'silver.polisher']) expect(defById(id).retired).toBe(true);
    expect(defById('silver.gala').retired).toBeFalsy();
    expect(defById('silver.caterer').text).toBe('Whenever silver is gifted, +1 follower.');
  });
});

describe('Patronesses: "Round End: you may give rivals any of your silver, split as you choose. +1 follower per silver you give."', () => {
  const end = o => sc({ n: 3, members: [['silver.patronesses']], queue: [{ t: 'allPlaced' }, { t: 'endRound' }], ...o });
  it('at round end, before contests: you may give any of your silver, split as you choose, from your own pile', () => {
    let s = end({ res: [{ silver: 3 }, { silver: 2 }, {}] });
    expect(s.pending.player).toBe(0);
    expect(s.pending.prompt).toMatch(/^Patronesses: which rival gains 1 silver of yours\?/);
    s = move(s, 'player:2'); s = move(s, 'player:2'); s = move(s, 'player:1');
    expect(s.players.map(p => p.res.silver)).toEqual([0, 3, 2]);
  });
  it('+1 follower per silver you give', () => {
    let s = end({ res: [{ silver: 3 }, {}, {}] });
    s = move(s, 'player:1'); s = move(s, 'player:2'); s = move(s, 'done');
    expect(s.players[0].res.silver).toBe(1);
    expect(linesNaming(s.log, 'Patronesses').join(' ')).toContain('+2 followers');
  });
  it('"you may": giving nothing keeps your silver for the contest', () => {
    let s = end({ res: [{ silver: 3 }, { silver: 1 }, {}] });
    s = move(s, 'done');
    expect(s.players.map(p => p.res.silver)).toEqual([3, 1, 0]);
    expect(s.players[0].bonus).toBe(4); // Silver's round I prize, kept
  });
  it('the pitched turn: round III, you hold 9 and Cleo 11; give 5 to Dev and 4 to Ben: +9 followers, Cleo still wins Silver', () => {
    let s = sc({ n: 4, round: 3, res: [{ silver: 9 }, { silver: 0 }, { silver: 11 }, { silver: 2 }], members: [['silver.patronesses']], queue: [{ t: 'allPlaced' }, { t: 'endRound' }] });
    for (let k = 0; k < 5; k++) s = move(s, 'player:3');
    for (let k = 0; k < 4; k++) s = move(s, 'player:1');
    expect(s.players.map(p => p.res.silver)).toEqual([0, 4, 11, 7]);
    expect(s.players[0].bonus).toBe(9);
    expect(s.players[2].bonus).toBe(10); // Cleo wins Silver's round III +10
  });
});

describe('Freeloader: "Whenever a rival gives you silver, +1 follower."', () => {
  it('a rival gives you silver (Toast): +1 follower, once per gift however much silver it brings', () => {
    let s = sc({ n: 3, round: 2, members: [[], ['silver.freeloader']], queue: [{ t: 'turn', p: 0 }] });
    s = take(s, 'silver.toast');
    expect(s.players[1].res.silver).toBe(2);
    expect(s.players[1].bonus).toBe(1);
    expect(linesNaming(s.log, 'Freeloader')).toContain("P2's Freeloader: +1 follower (P1 gave silver).");
  });
  it('your own Silver space pays you silver but is no gift: nothing', () => {
    let s = sc({ n: 3, round: 2, members: [['silver.freeloader']], queue: [{ t: 'turn', p: 0 }] });
    s = take(s, 'silver.toast');
    expect(s.players[0].bonus).toBe(0);
  });
  it('the pitched turn: Hostesses at round start gives you 1 silver: +1', () => {
    let s = sc({ n: 3, round: 1, members: [['silver.hostesses'], ['silver.freeloader']], queue: [] });
    s.queue = [{ t: 'endRound' }, { t: 'afterRound' }]; s = resume(s);
    while (s.pending && s.round === 1) s = move(s, s.pending.options[0].id);
    expect(linesNaming(s.log, 'Freeloader').length).toBeGreaterThanOrEqual(1);
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
