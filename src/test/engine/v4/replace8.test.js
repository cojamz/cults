// @vitest-environment node
// Quality loop lane B (Nov 4; /mnt/project-files/quality/pitches/B-*.md), the REPLACE8=1 bot-test switch: a test per sentence of each new card, the turn played in its pitch, and the
// old card no longer dealt. The switches are read when the engine loads, so they are set before the engine is imported
// (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE8 = '1';
// trial cards are tested at the Nov 5 afternoon prices (every member 2 more than its card file); the live price is
// 4 more since Nov 5 evening, and these tests check what the cards do, not their price
process.env.MEMBER_UP = '2';
const { resume, contextFor } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { move, take } = await import('./helpers.js');
const { sceneQ, linesNaming } = await import('./cards-helpers.js');
const { uidIn, table, named } = await import('./cards-helpers-b.js');
delete process.env.REPLACE8;
delete process.env.MEMBER_UP;

const sc = o => sceneQ({ quadrants: ['gold', 'red', 'silver', 'green'], ...o });
const pass = s => move(s, s.pending.options.find(o => o.kind === 'pass').id);
const opt = (s, re) => s.pending.options.find(o => re.test(o.id) || re.test(o.label || ''));

describe('REPLACE8: the switch', () => {
  it("keeps the old cards' prices (worth and count rebased to 1, Cory Nov 12), and retires the old cards", () => {
    const card = id => { const d = defById(id); return [d.s, d.w, d.f, d.n]; };
    expect(card('silver.wellwishers')).toEqual([5, 4, 1, 1]); // worth 1 and 1 member, rebased (Cory, Nov 12) // Debt Collectors' old price; Debt Collectors 1 cheaper since Nov 5 (Cory)
    expect(card('silver.usher')).toEqual(card('silver.polisher'));
    expect(card('silver.guestofhonor')).toEqual(card('silver.polisher'));
    expect(card('silver.socialites')).toEqual([5, 4, 1, 1]); // High Society's old price (5 + 2 since Nov 5)
    expect(card('silver.charityball')).toEqual(card('silver.philanthropists'));
    expect(card('trading.pennypincher')).toEqual(card('trading.oldmoney'));
    expect(card('silver.chaperone')).toEqual(card('silver.toastmaster'));
    expect(card('trading.squire')).toEqual(card('trading.shopkeeper'));
    for (const id of ['silver.debtcollector', 'silver.polisher', 'silver.highsociety', 'silver.philanthropists']) expect(defById(id).retired).toBe(true);
    expect(defById('silver.gala').retired).toBeFalsy();
  });
});

describe('Well-Wishers: "Whenever one of your members goes to a rival\'s cult, +3 followers."', () => {
  it("a member moved into a rival's cult by anyone: +3; Well-Wishers itself leaving pays nothing", () => {
    let s = sc({ n: 3, members: [['silver.wellwishers', 'silver.usher']], queue: [] });
    const ctx = contextFor(s);
    ctx.moveMember(uidIn(s, 'silver.usher', 0), s.players[0], s.players[1], { actor: s.players[1], recruit: true });
    expect(s.players[0].bonus).toBe(3);
    expect(linesNaming(s.log, 'Well-Wishers')).toContain("P1's Well-Wishers: Usher goes to P2: +3 followers.");
    ctx.moveMember(uidIn(s, 'silver.wellwishers', 0), s.players[0], s.players[2], { actor: s.players[2], recruit: true });
    expect(s.players[0].bonus).toBe(3);
  });
  it('a member sent to the top of the discard pile is not a rival\'s cult: nothing', () => {
    let s = sc({ n: 3, members: [['silver.wellwishers', 'silver.usher']], queue: [] });
    contextFor(s).buryMember(s.players[0], uidIn(s, 'silver.usher', 0));
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

describe('Usher: "On Recruit: give a rival 2 silver from the bank. +3 followers."', () => {
  it('on recruit you choose a rival; they gain 2 silver from the bank and you +3 followers (the pitched turn, round I)', () => {
    let s = sc({ n: 4, res: [{ silver: 2, gold: 2 }], shop: ['silver.usher'], queue: [{ t: 'buy', p: 0 }] });
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

describe('Guest of Honor: "On Use, once per round: give a rival one of your members. +4 followers."', () => {
  const at = members => sc({ n: 4, round: 2, members: [members], queue: [{ t: 'turn', p: 0 }] });
  const use = s => move(s, `use:${uidIn(s, 'silver.guestofhonor', 0)}`);
  it('on your turn, Use: give a member to a rival; it moves and you +4', () => {
    let s = use(at(['silver.guestofhonor', 'red.intern']));
    expect(s.pending.prompt).toBe('Guest of Honor: give which member, to which rival? +4 followers');
    const usher = uidIn(s, 'red.intern', 0); // Intern (3): Usher costs 4 since every member +1 (Nov 5)
    s = move(s, `give:${usher}:2`);
    expect(s.players[2].members).toContain(usher);
    expect(s.players[0].bonus).toBe(4);
    expect(linesNaming(s.log, 'Guest of Honor')).toContain("P1's Guest of Honor: gives Intern to P3: +4 followers.");
  });
  it('any member may be given, whatever it costs (Cory, Nov 5: "costing 4 or less" cut)', () => {
    const s = use(at(['silver.guestofhonor', 'silver.godparents']));
    expect(s.pending.options.some(o => o.label.startsWith('Patrons'))).toBe(true);
  });
  it('taking a Silver space no longer asks anything', () => {
    const s = take(at(['silver.guestofhonor', 'red.intern']), 'silver.toast');
    expect(s.pending?.prompt || '').not.toMatch(/Guest of Honor/);
  });
  it('once per round: after a use, no second Use this round', () => {
    let s = use(at(['silver.guestofhonor', 'red.intern', 'silver.wellwishers']));
    s = move(s, `give:${uidIn(s, 'red.intern', 0)}:1`);
    expect(s.players[0].bonus).toBe(7); // with Well-Wishers +4 and +3
    expect((s.pending?.options || []).some(o => o.id === `use:${uidIn(s, 'silver.guestofhonor', 0)}`)).toBe(false);
  });
});

describe('Socialites (+1 by default, Nov 4): "Whenever a rival recruits paying silver, +1 follower."', () => {
  const buyOne = s => { s = move(s, s.pending.options.find(o => o.kind === 'tier' && /1/.test(o.label || o.id)).id); if (s.pending?.player === 1 && s.pending.kind === 'choose') s = move(s, s.pending.options[0].id); return s; };
  it('a rival recruits paying silver: +1; paying without silver: nothing; your own recruits: nothing', () => {
    let s = buyOne(sc({ res: [{}, { silver: 5 }], members: [['silver.socialites']], queue: [{ t: 'buy', p: 1 }] }));
    expect(s.players[0].bonus).toBe(1);
    expect(linesNaming(s.log, 'Socialites')).toContain("P1's Socialites: +1 follower (P2 paid silver).");
    let u = buyOne(sc({ res: [{}, { red: 5 }], members: [['silver.socialites']], queue: [{ t: 'buy', p: 1 }] }));
    expect(u.players[0].bonus).toBe(0);
    let v = sc({ res: [{ silver: 5 }], members: [['silver.socialites']], queue: [{ t: 'buy', p: 0 }] });
    v = move(v, v.pending.options.find(o => o.kind === 'tier' && /1/.test(o.label || o.id)).id);
    if (v.pending?.player === 0 && v.pending.kind === 'choose') v = move(v, v.pending.options[0].id);
    expect(v.players[0].bonus).toBe(1); // the follower bought, nothing from Socialites
  });
  it('the pitched turn: you Toast (each rival +2 silver), then Ben buys a follower card paying silver: +1', () => {
    let s = sc({ n: 4, round: 2, members: [['silver.socialites']], queue: [{ t: 'turn', p: 0 }, { t: 'buy', p: 1 }] });
    s = take(s, 'silver.toast');
    if (s.pending?.player === 0) s = pass(s);
    s = buyOne(s);
    expect(s.players[1].res.silver).toBe(1);
    expect(s.players[0].bonus).toBe(1);
  });
});

describe('Charity Ball: "Whenever a rival recruits a member, give them 1 silver from the bank. +1 follower."', () => {
  it('a rival buys a shop member: they +1 silver, you +1; a follower buy or your own recruit: nothing', () => {
    let s = sc({ n: 3, res: [{}, { silver: 2, gold: 2 }], members: [['silver.charityball']], shop: ['silver.usher'], queue: [{ t: 'buy', p: 1 }] });
    s = move(s, s.pending.options.find(o => /Usher/.test(o.label || '')).id);
    if (s.pending?.prompt?.startsWith('Pay')) s = move(s, s.pending.options[0].id);
    if (s.pending?.player === 1 && /Usher/.test(s.pending.prompt || '')) s = move(s, 'player:2');
    expect(s.players[0].bonus).toBe(1);
    expect(s.players[1].res.silver).toBe(1);
    expect(linesNaming(s.log, 'Charity Ball')).toContain("P1's Charity Ball: gives P2 1 silver: +1 follower.");
    let f = sc({ n: 3, res: [{}, { red: 5 }], members: [['silver.charityball']], queue: [{ t: 'buy', p: 1 }] });
    f = move(f, f.pending.options.find(o => o.kind === 'tier' && /1/.test(o.label || o.id)).id);
    expect(f.players[0].bonus).toBe(0);
    let m = sc({ n: 3, res: [{ silver: 2, gold: 2 }], members: [['silver.charityball']], shop: ['silver.usher'], queue: [{ t: 'buy', p: 0 }] });
    m = move(m, m.pending.options.find(o => /Usher/.test(o.label || '')).id);
    expect(linesNaming(m.log, 'Charity Ball')).toEqual([]);
  });
});

describe('Penny Pincher: "Round Start: if you have the fewest members, +3 white."', () => {
  it('fewest members (ties count) at round start: +3 white; more than a rival: nothing', () => {
    const s = table(['red', 'echo', 'trading', 'silver'], { n: 3, round: 1, members: [['trading.pennypincher'], ['echo.roadie'], ['trading.cashier', 'echo.evergreen']], queue: [{ t: 'round', r: 2 }] });
    expect(named(s, 'Penny Pincher')).toContain("P1's Penny Pincher: fewest members: +3 white.");
    const t = table(['red', 'echo', 'trading', 'silver'], { n: 3, round: 1, members: [['trading.pennypincher', 'silver.usher'], ['echo.roadie'], ['trading.cashier', 'echo.evergreen']], queue: [{ t: 'round', r: 2 }] });
    expect(named(t, 'Penny Pincher')).toEqual([]);
  });
});

describe('Chaperone: "Round Start: +1 follower per rival holding silver."', () => {
  it('round start: +1 per rival holding any silver; a rival with none adds nothing', () => {
    const s = table(['red', 'echo', 'trading', 'silver'], { n: 4, round: 1, res: [{}, { silver: 2 }, { silver: 1 }, { red: 3 }], members: [['silver.chaperone'], [], [], []], queue: [{ t: 'round', r: 2 }] });
    expect(named(s, 'Chaperone')).toContain("P1's Chaperone: 2 rivals hold silver: +2 followers.");
  });
});

describe('Squire: "On Recruit and Round Start: +2 white, or +6 white if you have the fewest members (ties count)."', () => {
  it('round start: +6 white with the fewest members (a tie counts), +2 otherwise', () => {
    const s = table(['red', 'echo', 'trading', 'silver'], { n: 3, round: 1, members: [['trading.squire'], ['echo.roadie'], ['trading.cashier', 'echo.evergreen']], queue: [{ t: 'round', r: 2 }] });
    expect(named(s, 'Squire')).toContain("P1's Squire: +6 white (fewest members).");
    const t = table(['red', 'echo', 'trading', 'silver'], { n: 3, round: 1, members: [['trading.squire', 'silver.usher'], ['echo.roadie'], ['trading.cashier', 'echo.evergreen']], queue: [{ t: 'round', r: 2 }] });
    expect(named(t, 'Squire')).toContain("P1's Squire: +2 white.");
  });
});

describe('Live since Nov 4: Charity Ball with no switch; Socialites at +1 under the switch', () => {
  it('Charity Ball is always defined (no add8); Socialites reads +1', () => {
    expect(defById('silver.charityball').retired).toBeFalsy();
    expect(defById('silver.socialites').text).toBe('Whenever a rival recruits paying silver, +1 follower.');
  });
});

describe('Executor: "Whenever a member leaves a rival\'s cult, +1 follower."', () => {
  const d = () => defById('trading.executor');
  const run = (from, to) => {
    const me = { name: 'P1', bonus: 0 }, ben = { name: 'P2', bonus: 0 }, log = [];
    const ctx = { card: () => ({ def: { name: 'Usher' } }), log: l => log.push(l) };
    const who = { me, ben, none: null };
    d().onCultMove(ctx, me, {}, { uid: 9, from: who[from], to: who[to] });
    return { me, log };
  };
  it("keeps Old Money's price and worth", () => {
    const card = id => { const x = defById(id); return [x.s, x.w, x.f, x.n]; };
    expect(card('trading.executor')).toEqual(card('trading.oldmoney'));
  });
  it("a rival's member leaves (to a cult or the shop): +1; your own leaving: nothing", () => {
    const a = run('ben', 'me');
    expect(a.me.bonus).toBe(1);
    expect(a.log).toEqual(["P1's Executor: Usher leaves P2's cult: +1 follower."]);
    expect(run('ben', 'none').me.bonus).toBe(1);
    expect(run('me', 'ben').me.bonus).toBe(0);
  });
});
