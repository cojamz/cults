// @vitest-environment node
// Quality loop lane D (Nov 4; /mnt/project-files/quality/pitches/D-*.md), the REPLACE10=1 bot-test switch: each new
// card fires once in a small hand-built position, and the old card it replaces is no longer dealt. The switch is read
// when the engine loads, so it is set before the engine is imported (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE10 = 'racketeer,pauper,bootlegger,warmup,insidejob,almoner,widows';
const { applyMove, contextFor, resume } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { table, named } = await import('./cards-helpers-b.js');
const { move, uidOf, take } = await import('./helpers.js');
// read once at load: cleared again so a later test file in this worker loads the engine without the switch
delete process.env.REPLACE10;

const payFor = (s, i, uid) => contextFor(s).payChoices(s.players[i], uid, {})[0];
const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });

describe('REPLACE10: the switch', () => {
  it('prints the pitch prices (as a player sees them) and retires the old cards', () => {
    const price = id => { const d = defById(id); return [d.s, d.w, d.f]; };
    expect(price('thieves.racketeer')).toEqual([4, 3, 1]);
    expect(price('trading.pauper')).toEqual([4, 3, 1]);
    expect(price('echo.bootlegger')).toEqual([4, 3, 1]);
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

describe('REPLACE10: Bootlegger', () => {
  it('On Use, once per round: copies the On Recruit of another of your members; turned until the next round', () => {
    let s = table(['red', 'echo', 'trading', 'thieves'], { round: 2, members: [['echo.bootlegger', 'thieves.accomplice']], res: [{}, { red: 5 }] });
    const u = uidOf(s, 'echo.bootlegger', 0);
    s = move(s, `use:${u}`);
    // Accomplice is the only other member with an On Recruit: asked anyway, so the choice is seen
    if (s.pending?.prompt?.startsWith('Bootlegger')) s = answer(s, s.pending.options[0].id);
    while (s.pending?.player === 0 && s.pending.kind === 'choose' && /Accomplice|steal/i.test(s.pending.prompt)) s = answer(s, s.pending.options[0].id);
    expect(s.players[1].res.red).toBe(2); // Accomplice's steal 3, again
    expect(s.cards[u].used).toBe(true);
    expect(s.pending.options.map(o => o.id)).not.toContain(`use:${u}`);
    expect(named(s, 'Bootlegger')).toContain('P1 uses Bootlegger.');
  });

  it('not usable without another member that has an On Recruit; can\'t copy itself', () => {
    let s = table(['red', 'echo', 'trading', 'thieves'], { round: 2, members: [['echo.bootlegger', 'echo.agents']] });
    const u = uidOf(s, 'echo.bootlegger', 0);
    s = move(s, `use:${u}`);
    expect(s.cards[u].used).toBe(false);
    expect(named(s, 'Bootlegger')).toEqual(["P1's Bootlegger: no other member with an On Recruit."]);
  });
});

describe('REPLACE10: Inside Job (Stash\'s slot)', () => {
  it('steals 2 resources from each rival with a minion on a Magenta space, +1 magenta; Stash is gone', () => {
    // thieves is quadrant 1: Help Yourself 1-0, Inside Job 1-1, Lie Low 1-2
    let s = table(['red', 'thieves', 'trading', 'yellow'], { n: 4, round: 1, res: [{}, { red: 3 }, { white: 3 }, { yellow: 3 }] });
    s.slots = { '1-0': 1, '1-2': 2, '0-0': 3 };
    expect(s.pending.options.some(o => o.label === 'Stash')).toBe(false);
    s = take(s, 'thieves.insidejob');
    while (s.pending?.player === 0 && s.pending.kind === 'choose' && /Inside Job/.test(s.pending.prompt)) s = answer(s, s.pending.options[0].id);
    expect(s.players[1].res.red).toBe(1);
    expect(s.players[2].res.white).toBe(1);
    expect(s.players[3].res.yellow).toBe(3); // on Red, not Magenta
    expect(s.players[0].res.magenta).toBe(1);
    expect(s.players[0].res.red + s.players[0].res.white).toBe(4);
  });
});

// The pitched turns (pitches/D-*.md), set up and checked: the Lab's scripted scenarios.
describe('REPLACE10: the pitched turns', () => {
  it('Bootlegger: you own Roadie and Accomplice; each round you fire one again: Roadie\'s +1 green per green member', () => {
    let s = table(['red', 'echo', 'trading', 'thieves'], { n: 4, round: 2, members: [['echo.bootlegger', 'echo.roadie', 'thieves.accomplice']] });
    const u = uidOf(s, 'echo.bootlegger', 0), g = s.players[0].res.green;
    s = move(s, `use:${u}`);
    expect(s.pending.prompt).toBe("Bootlegger: copy which member's On Recruit?");
    expect(s.pending.options.map(o => o.label.split(':')[0]).sort()).toEqual(['Accomplice', 'Roadie']);
    s = answer(s, s.pending.options.find(o => o.label.startsWith('Roadie')).id);
    expect(s.players[0].res.green).toBe(g + 2); // two green members: Bootlegger and Roadie
  });

  it('Inside Job: round I, Ben took Help Yourself, Cleo took Lie Low: you steal 2 from Ben only, +1 magenta (3 in all)', () => {
    let s = table(['red', 'thieves', 'trading', 'yellow'], { n: 4, round: 1, res: [{}, { red: 4 }, { white: 4 }, {}] });
    s.slots = { '1-0': 1, '1-2': 2 };
    s.players[2].hideout = 1; // Cleo lies low this round
    s = take(s, 'thieves.insidejob');
    while (s.pending?.player === 0 && s.pending.kind === 'choose' && /Inside Job/.test(s.pending.prompt)) s = answer(s, s.pending.options[0].id);
    expect(s.players[1].res.red).toBe(2);
    expect(s.players[2].res.white).toBe(4);
    expect(Object.values(s.players[0].res).reduce((a, b) => a + b, 0)).toBe(3);
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

describe('REPLACE10: Warm-Up Act', () => {
  it('Round Start: copies a round I action of any color, Green\'s copy spaces left out', () => {
    let s = table(['red', 'echo', 'thieves', 'trading'], { n: 3, round: 1, res: [{}, { red: 4 }, { red: 4 }], members: [['echo.warmup']], queue: [{ t: 'round', r: 2 }] });
    expect(s.pending.prompt).toBe('Warm-Up Act: copy which round I action?');
    const names = s.pending.options.map(o => o.label.split(':')[0]);
    expect(names).toContain('Help Yourself');
    expect(names).toContain('Build Up');
    expect(names).not.toContain('Echo');
    s = answer(s, s.pending.options.find(o => o.label.startsWith('Build Up')).id);
    expect(s.players[0].res.green).toBeGreaterThanOrEqual(3);
  });

  it('leaves off spaces that say "this turn", and says the copied gain under its own name (Lab play judge, Nov 4)', () => {
    let s = table(['red', 'echo', 'thieves', 'trading'], { n: 4, round: 2, members: [[], ['echo.warmup'], [], []], queue: [{ t: 'round', r: 3 }] });
    const names = s.pending.options.map(o => o.label.split(':')[0]);
    expect(names).not.toContain('Gather');
    expect(names).not.toContain('Allowance');
    expect(names).not.toContain('Splurge');
    s = answer(s, s.pending.options.find(o => o.label.startsWith('Build Up')).id);
    expect(s.players[1].res.green).toBe(5);
    expect(s.log).toContain("P2's Warm-Up Act: +5 green.");
  });
});

describe('REPLACE10: Almoner and Widows', () => {
  it('Almoner: On Recruit and Round Start +2 white, +4 with the fewest followers (ties count)', () => {
    let s = table(['red', 'echo', 'trading', 'thieves'], { n: 3, round: 1, bonus: [0, 4, 4], members: [['trading.almoner'], [], []], queue: [{ t: 'round', r: 2 }] });
    expect(named(s, 'Almoner')).toContain("P1's Almoner: +4 white (fewest followers).");
    let t = table(['red', 'echo', 'trading', 'thieves'], { n: 3, round: 1, bonus: [9, 4, 4], members: [['trading.almoner'], [], []], queue: [{ t: 'round', r: 2 }] });
    expect(named(t, 'Almoner')).toContain("P1's Almoner: +2 white.");
  });

  it('Widows: another of your members cast out or stolen: +2 followers each; Widows itself leaving pays nothing', () => {
    const s = table(['red', 'echo', 'trading', 'thieves'], { n: 2, round: 2, members: [['trading.widows', 'thieves.accomplice', 'echo.roadie'], []] });
    const ctx = contextFor(s), me = s.players[0], b0 = me.bonus;
    ctx.buryMember(me, uidOf(s, 'thieves.accomplice', 0));
    expect(me.bonus).toBe(b0 + 2);
    ctx.moveMember(uidOf(s, 'echo.roadie', 0), me, s.players[1], { recruit: true });
    expect(me.bonus).toBe(b0 + 4);
    ctx.moveMember(uidOf(s, 'trading.widows', 0), me, s.players[1], { recruit: true });
    expect(me.bonus).toBe(b0 + 4);
    expect(named(s, 'Widows')).toEqual(["P1's Widows: Accomplice left: +2 followers.", "P1's Widows: Roadie left: +2 followers."]);
  });

  it('Widows, the pitched turn: Ben\'s Kidnapper takes your cheapest member at round start: +2', () => {
    let s = table(['red', 'echo', 'trading', 'thieves'], { n: 4, round: 1, members: [['trading.widows', 'echo.roadie'], ['thieves.kidnappers'], ['echo.agents'], []], queue: [{ t: 'round', r: 2 }] });
    // P1 has the most members (Widows counts 2, Roadie 1): Kidnapper takes the cheapest, Roadie
    expect(named(s, 'Kidnapper')).toEqual(["P2's Kidnapper: stole P1's Roadie."]);
    expect(named(s, 'Widows')).toEqual(["P1's Widows: Roadie left: +2 followers."]);
  });
});

describe('REPLACE10: Warm-Up Act copies Walk-In (Lab, game 84)', () => {
  it('each rival +1 red, the Green Cloak holder included, and the log says so for every player', () => {
    let s = table(['red', 'echo', 'thieves', 'trading'], { n: 4, round: 2, members: [[], ['echo.warmup'], [], ['echo.tuningfork']], queue: [{ t: 'round', r: 3 }] });
    s = answer(s, s.pending.options.find(o => o.label.startsWith('Walk-In')).id);
    expect(s.players.map(p => p.res.red)).toEqual([1, 1, 1, 2]); // P4: Walk-In's +1 and Impressionist's +1
    expect(s.log).toContain("P1 +1 red (P2's Warm-Up Act).");
    expect(s.log).toContain("P4 +1 red (P2's Warm-Up Act).");
    expect(s.log).toContain("P4's Impressionist: +1 red.");
  });
});
