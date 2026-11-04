// @vitest-environment node
// Quality loop lane D (Nov 4; /mnt/project-files/quality/pitches/D-*.md), the REPLACE10=1 bot-test switch: each new
// card fires once in a small hand-built position, and the old card it replaces is no longer dealt. The switch is read
// when the engine loads, so it is set before the engine is imported (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE10 = '1';
const { applyMove, contextFor, resume } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { table, named } = await import('./cards-helpers-b.js');
// read once at load: cleared again so a later test file in this worker loads the engine without the switch
delete process.env.REPLACE10;

const payFor = (s, i, uid) => contextFor(s).payChoices(s.players[i], uid, {})[0];
const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });

describe('REPLACE10: the switch', () => {
  it('prints the pitch prices (as a player sees them) and retires the old cards', () => {
    const price = id => { const d = defById(id); return [d.s, d.w, d.f]; };
    expect(price('thieves.racketeer')).toEqual([4, 3, 1]);
    expect(price('trading.pauper')).toEqual([4, 3, 1]);
    expect(price('echo.wannabe')).toEqual([4, 4, 1]);
    for (const id of ['thieves.grifter', 'trading.oldmoney', 'echo.chronicler']) expect(defById(id).retired).toBe(true);
  });
});

describe('REPLACE10: each card fires', () => {
  it('Racketeer: at round end, steals 2 resources from each rival who won a contest', () => {
    let s = table(['red', 'thieves', 'market', 'yellow'], { round: 1, res: [{ red: 3, blue: 1 }, { blue: 1 }], members: [[], ['thieves.racketeer']], queue: [{ t: 'endRound' }] });
    // P1 wins red alone and ties blue: two wins, 2 resources each from the biggest piles
    expect(s.players[0].res.red + s.players[0].res.blue).toBe(0);
    expect(s.players[1].res.red + s.players[1].res.blue).toBe(5);
    expect(named(s, 'Racketeer')).toEqual(["P2's Racketeer: took 2 from P1.", "P2's Racketeer: took 2 from P1."]);
  });

  it('Pauper: before contests, with the fewest followers, may turn all white into followers', () => {
    let s = table(['red', 'thieves', 'trading', 'yellow'], { n: 3, round: 1, res: [{ white: 6 }, { white: 1 }], bonus: [0, 4, 4], members: [['trading.pauper']], queue: [{ t: 'allPlaced' }, { t: 'endRound' }] });
    expect(s.pending.prompt).toBe('Pauper: turn your 6 white into 6 followers?');
    s = answer(s, 'yes');
    expect(s.players[0].res.white).toBe(0);
    expect(named(s, 'Pauper')).toEqual(["P1's Pauper: 6 white became 6 followers."]);
  });

  it('Pauper: not asked unless you have the fewest followers', () => {
    const s = table(['red', 'thieves', 'trading', 'yellow'], { n: 3, round: 1, res: [{ white: 6 }], bonus: [5, 4, 4], members: [['trading.pauper']], queue: [{ t: 'allPlaced' }, { t: 'endRound' }] });
    expect(s.pending?.prompt ?? '').not.toMatch(/^Pauper/);
    expect(named(s, 'Pauper')).toEqual([]);
  });
});

describe('REPLACE10: Wannabe', () => {
  it('right after a rival recruits a member, may recruit a shop member costing no more, paying its cost; once a round', () => {
    let s = table(['red', 'echo', 'market', 'yellow'], { round: 2, res: [{ red: 9 }, { green: 9, red: 9 }], members: [[], ['echo.wannabe']], shop: ['red.patriarch', 'red.recruitbonus', 'echo.evergreen'] });
    const ctx = contextFor(s);
    const pat = s.shop.find(u => s.cards[u].def === 'red.patriarch');
    ctx.recruit(s.players[0], pat, { spend: payFor(s, 0, pat), how: {}, paid: true });
    s = resume(s);
    expect(s.pending.player).toBe(1);
    expect(s.pending.prompt).toMatch(/^Wannabe: P1 recruited Patriarch \(\d+\)\. Recruit a shop member costing up to \d+, paying its cost\?$/);
    const pick = s.pending.options.find(o => o.value != null && s.cards[o.value].def === 'echo.evergreen');
    s = answer(s, pick.id);
    while (s.pending?.player === 1 && /^Wannabe: how/.test(s.pending.prompt)) s = answer(s, s.pending.options[0].id);
    expect(s.players[1].members.some(u => s.cards[u].def === 'echo.evergreen')).toBe(true);
    expect(named(s, 'Wannabe').some(l => /^P2's Wannabe: pays .* for Busker\.$/.test(l))).toBe(true);
  });

  it('offers only members costing no more than the rival\'s, and only once a round', () => {
    let s = table(['red', 'echo', 'market', 'yellow'], { n: 3, round: 2, res: [{ red: 20 }, { green: 20, red: 20 }, { red: 20, green: 20 }], members: [[], ['echo.wannabe']], shop: ['red.recruitbonus', 'red.patriarch', 'echo.evergreen'] });
    const ctx = contextFor(s);
    const cheap = s.shop.find(u => s.cards[u].def === 'red.recruitbonus');
    const k = ctx.card(cheap).def.s + ctx.card(cheap).def.w;
    ctx.recruit(s.players[0], cheap, { spend: payFor(s, 0, cheap), how: {}, paid: true });
    s = resume(s);
    for (const o of s.pending.options) if (o.value != null) expect(contextFor(s).card(o.value).def.s + contextFor(s).card(o.value).def.w).toBeLessThanOrEqual(k); // (.def.s + ctx.card(o.value).def.w).toBeLessThanOrEqual(k);
    s = answer(s, s.pending.options.find(o => o.value != null).id);
    while (s.pending?.player === 1 && /^Wannabe: how/.test(s.pending.prompt)) s = answer(s, s.pending.options[0].id);
    // a second rival recruit this round: not asked again
    const ctx2 = contextFor(s);
    const next = s.shop.find(u => s.cards[u].def === 'echo.evergreen');
    ctx2.recruit(s.players[2], next, { spend: payFor(s, 2, next), how: {}, paid: true });
    s = resume(s);
    expect(s.pending?.prompt ?? '').not.toMatch(/^Wannabe/);
  });
});

// The pitched turns (pitches/D-*.md), set up and checked: the Lab's scripted scenarios.
describe('REPLACE10: the pitched turns', () => {
  it('Wannabe: round III, Ben recruits Tribute Band (14); you recruit Brokers (5) from your pile right after', () => {
    let s = table(['red', 'echo', 'trading', 'thieves'], { n: 4, round: 3, res: [{}, { green: 14, red: 6 }, {}, { white: 5, red: 5 }], members: [[], [], [], ['echo.wannabe']], shop: ['echo.dejavu', 'trading.broker'] });
    const tb = s.shop.find(u => s.cards[u].def === 'echo.dejavu');
    contextFor(s).recruit(s.players[1], tb, { spend: payFor(s, 1, tb), how: {}, paid: true });
    s = resume(s);
    expect(s.pending.player).toBe(3);
    expect(s.pending.prompt).toBe('Wannabe: P2 recruited Tribute Band (14). Recruit a shop member costing up to 14, paying its cost?');
    s = answer(s, s.pending.options.find(o => o.value != null && s.cards[o.value].def === 'trading.broker').id);
    while (s.pending?.player === 3 && /^Wannabe: how/.test(s.pending.prompt)) s = answer(s, s.pending.options[0].id);
    expect(s.players[3].members.map(u => s.cards[u].def)).toContain('trading.broker');
    expect(s.players[3].res.white + s.players[3].res.red).toBe(5); // paid 5 of 10
  });

  it('Pauper: round II ends, you have 14 followers, rivals 18, 21, 25; your 9 white become 9 followers', () => {
    let s = table(['red', 'echo', 'trading', 'thieves'], { n: 4, round: 2, res: [{ white: 9 }], bonus: [13, 17, 20, 24], members: [['trading.pauper']], queue: [{ t: 'allPlaced' }, { t: 'endRound' }] });
    const ctx = contextFor(s);
    const f0 = ctx.followers(s.players[0]);
    expect(f0).toBeLessThan(ctx.followers(s.players[1]));
    expect(s.pending.prompt).toBe('Pauper: turn your 9 white into 9 followers?');
    s = answer(s, 'yes');
    expect(s.players[0].res.white).toBe(0);
    expect(named(s, 'Pauper')).toEqual(["P1's Pauper: 9 white became 9 followers."]);
  });

  it('Racketeer: round I ends; three rivals each win a contest, you steal 2 from each: 6 resources', () => {
    let s = table(['red', 'thieves', 'trading', 'gold'], { n: 4, round: 1, res: [{ red: 4 }, { gold: 4 }, { white: 3, red: 1 }, {}], members: [[], [], [], ['thieves.racketeer']], queue: [{ t: 'endRound' }] });
    const total = p => Object.values(p.res).reduce((a, b) => a + b, 0);
    expect(total(s.players[3])).toBe(6);
    expect(named(s, 'Racketeer')).toEqual(["P4's Racketeer: took 2 from P1.", "P4's Racketeer: took 2 from P3.", "P4's Racketeer: took 2 from P2."]);
  });
});
