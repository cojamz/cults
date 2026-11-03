// @vitest-environment node
// Replacement batch 2 (Nov 3; /mnt/project-files/replacements/batch2.md), the REPLACE2=1 bot-test switch: each new
// card fires once in a small hand-built position, and the old card it replaces is no longer dealt. The switch is read
// when the engine loads, so it is set before the engine is imported (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE2 = '1';
const { applyMove } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { take, move } = await import('./helpers.js');
const { table, named, uidIn, owns } = await import('./cards-helpers-b.js');
// read once at load: cleared again so a later test file in this worker loads the engine without the switch
delete process.env.REPLACE2;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });

describe('REPLACE2: the switch', () => {
  it('prints the spec prices (as a player sees them) and retires the old cards', () => {
    const price = id => { const d = defById(id); return [d.s, d.w, d.f]; };
    expect(price('red.bodysnatchers')).toEqual([4, 2, 2]);
    expect(price('echo.mirrorimage')).toEqual([6, 3, 1]);
    expect(price('thieves.skimmers')).toEqual([4, 2, 1]);
    expect(price('market.doorbusters')).toEqual([5, 3, 2]);
    expect(price('yellow.nightmarket')).toEqual([4, 2, 1]);
    expect(price('silver.fundraisers')).toEqual([6, 3, 2]);
    expect(price('silver.hushmoney')).toEqual([4, 2, 1]);
    expect(price('benders.spoilsports')).toEqual([0, 6, 1]);
    for (const id of ['red.twins', 'echo.wallflower', 'thieves.desperado', 'market.shopaholic', 'yellow.ringleader', 'silver.gala', 'silver.smoothtalker', 'benders.scout'])
      expect(defById(id).retired).toBe(true);
  });
});

describe('REPLACE2: each card fires', () => {
  it('Body Snatchers: at round start, swap one of your members with a rival’s of the same cost (or not)', () => {
    let s = table(['red', 'thieves', 'market', 'yellow'], { round: 1, members: [['red.bodysnatchers', 'red.recruitbonus'], ['red.movementpenalty']], queue: [{ t: 'round', r: 2 }] });
    expect(s.pending.prompt).toMatch(/^Body Snatchers: swap one of your members/);
    expect(s.pending.options.map(o => o.id)).toContain('none');
    const a = uidIn(s, 'red.recruitbonus', 0), b = uidIn(s, 'red.movementpenalty', 1);
    s = answer(s, `trade:${a}:${b}`);
    expect(owns(s, 0, 'red.movementpenalty')).toBe(true);
    expect(owns(s, 1, 'red.recruitbonus')).toBe(true);
    expect(s.log).toContain("P1 swapped P1's Greeters and P2's Deprogrammers.");
    expect(named(s, 'Body Snatchers')).toContain("P1's Body Snatchers: a swap at round start.");
  });

  it('Mirror Image: once per game, gain a color until you hold as much as a rival', () => {
    let s = table(['red', 'echo', 'trading', 'yellow'], { round: 3, res: [{ white: 2 }, { white: 14 }], members: [['echo.mirrorimage']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'echo.mirrorimage', 0)}`);
    expect(s.pending.prompt).toBe('Mirror Image: match which rival’s pile?');
    s = answer(s, 'mirror:1:white');
    expect(s.players[0].res.white).toBe(14);
    expect(named(s, 'Mirror Image')).toContain("P1's Mirror Image: +12 white, as much as P2 holds.");
  });

  it('Skimmers: a rival buys 10 followers, you steal 3 of them', () => {
    let s = table(['red', 'thieves', 'market', 'yellow'], { round: 3, res: [{ red: 10 }], members: [[], ['thieves.skimmers']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, 'tier:top');
    expect(s.players[0].bonus).toBe(7);
    expect(s.players[1].bonus).toBe(3);
    expect(named(s, 'Skimmers')).toEqual(["P2's Skimmers: stole 3 of P1's 10 followers."]);
  });

  it('Hush Money: the victim chooses to give 2 silver instead of the steal', () => {
    let s = table(['red', 'thieves', 'silver', 'yellow'], { round: 3, res: [{ red: 10 }, { silver: 3 }], members: [[], ['thieves.skimmers'], ['silver.hushmoney']], n: 3, queue: [{ t: 'buy', p: 0 }] });
    // P2's Skimmers steals from P1: P1 has no Hush Money, so it lands
    s = move(s, 'tier:top');
    expect(s.players[1].bonus).toBe(3);
    // P3 holds Hush Money: a Lie Low steal from P3 asks P3 first
    s = table(['red', 'thieves', 'silver', 'yellow'], { round: 1, res: [{}, { red: 4, silver: 2 }], members: [[], ['silver.hushmoney']] });
    s = take(s, 'thieves.hideout');
    while (s.pending?.player === 0 && s.pending.kind === 'choose') s = answer(s, s.pending.options.find(o => o.kind === 'take')?.id ?? s.pending.options[0].id);
    expect(s.pending.player).toBe(1);
    expect(s.pending.prompt).toMatch(/^Hush Money: P1 is stealing/);
    s = answer(s, 'pay');
    expect(s.players[1].res.silver).toBe(0);
    expect(s.players[1].res.red).toBe(4);
    expect(s.players[0].res.silver).toBe(2);
    expect(named(s, 'Hush Money')).toContain("P2's Hush Money: P2 gives P1 2 silver instead.");
  });

  it('Hush Money: letting it go makes the same steal', () => {
    let s = table(['red', 'thieves', 'silver', 'yellow'], { round: 1, res: [{}, { red: 4, silver: 2 }], members: [[], ['silver.hushmoney']] });
    s = take(s, 'thieves.hideout');
    while (s.pending?.player === 0 && s.pending.kind === 'choose') s = answer(s, s.pending.options.find(o => o.kind === 'take')?.id ?? s.pending.options[0].id);
    s = answer(s, 'let');
    expect(s.players[1].res.silver + s.players[1].res.red).toBe(5);
    expect(s.players[0].res.silver + s.players[0].res.red).toBe(1);
  });

  it('Doorbusters: at round start, one recruit before anyone places', () => {
    let s = table(['red', 'market', 'thieves', 'yellow'], { round: 1, res: [{ red: 5 }], members: [['market.doorbusters']], queue: [{ t: 'round', r: 2 }] });
    expect(s.pending.player).toBe(0);
    expect(s.pending.kind).toBe('buy');
    expect(s.pending.prompt).toBe('P1: Doorbusters: recruit once before anyone places, or pass');
    expect(s.pending.options.every(o => ['card', 'tier', 'pass'].includes(o.kind))).toBe(true);
    expect(named(s, 'Doorbusters')).toEqual(["P1's Doorbusters: recruits once before anyone places."]);
    s = move(s, 'tier:mid');
    expect(s.players[0].bonus).toBe(5);
    expect(s.pending.kind).toBe('place');
  });

  it('Night Market: after the last placement, swap up to 3 before contests are scored', () => {
    let s = table(['red', 'market', 'purple', 'yellow'], { round: 2, res: [{ blue: 7, purple: 2 }, { blue: 4 }], members: [['yellow.nightmarket']], queue: [{ t: 'allPlaced' }, { t: 'endRound' }] });
    expect(s.pending.prompt).toMatch(/^Night Market: swap one for one/);
    s = answer(s, 'swap:blue:purple');
    s = answer(s, 'swap:blue:purple');
    s = answer(s, 'swap:blue:purple');
    expect(s.players[0].res.blue).toBe(4);
    expect(s.players[0].res.purple).toBe(5);
    // a tie for Blue (+3 each) and Purple alone (+6)
    expect(s.players[0].contest).toBe(9);
    expect(s.log.filter(l => /\(Night Market\)/.test(l))).toHaveLength(3);
  });

  it('Fundraisers: once per game, each rival +2 silver, then +1 follower per 2 silver rivals hold', () => {
    let s = table(['red', 'silver', 'market', 'yellow'], { n: 4, round: 3, res: [{}, { silver: 5 }, { silver: 3 }, { silver: 4 }], members: [['silver.fundraisers']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'silver.fundraisers', 0)}`);
    expect(s.players.slice(1).map(p => p.res.silver)).toEqual([7, 5, 6]);
    expect(s.players[0].bonus).toBe(9);
    expect(named(s, 'Fundraisers')).toContain("P1's Fundraisers: each rival +2 silver; rivals hold 18 silver, so P1 +9 followers.");
  });

  it('Spoilsports: choose a contest you don’t lead; nobody wins it this round', () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 2, res: [{ blue: 3 }, { white: 9, red: 1 }], members: [['benders.spoilsports']], queue: [{ t: 'allPlaced' }, { t: 'endRound' }] });
    expect(s.pending.prompt).toBe('Spoilsports: which contest does nobody win this round?');
    // Blue is P1's own lead: not offered
    expect(s.pending.options.map(o => o.value).sort()).toEqual(['red', 'trading']);
    s = answer(s, 'spoil:trading');
    expect(s.players[1].contest).toBe(6); // red only, white spoiled
    expect(s.players[0].contest).toBe(6);
    expect(s.contests.at(-1).results.find(c => c.qid === 'trading').winners).toEqual([]);
    expect(s.log.some(l => /Most white: spoiled by P1's Spoilsports, nobody wins/.test(l))).toBe(true);
  });
});
