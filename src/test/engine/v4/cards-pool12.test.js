// @vitest-environment node
// Idea pipeline pool 12 (Nov 7; scripts/ideas/README.md): bot-only candidates, never dealt in a real game. One test per
// sentence of each card's text, through real moves, with the log naming the card. Candidates are un-retired (members)
// or set into their color's wheel (spaces) for this file only, as scripts/lib/pool-rotate.mjs does in bot games.
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { quadrant, defById } from '../../../engine/v4/content/index.js';
import { POOL_SPACES } from '../../../engine/v4/content/pool.js';
import { scavenge } from '../../../engine/v4/content/market.js';
import { resume, contextFor } from '../../../engine/v4/core.js';
import { take, move, uidOf } from './helpers.js';
import { sceneQ, linesNaming } from './cards-helpers.js';

const MEMBERS = ['purple.linejumpers', 'purple.bellhops', 'thieves.grudgeholders', 'thieves.insurers', 'trading.retirees', 'red.repomen',
  'market.bargainhunters'];
const SPACES = ['silver.regifters', 'echo.remix'];
const undo = [];
beforeAll(() => {
  for (const id of MEMBERS) { const d = defById(id); d.retired = false; undo.push(() => { d.retired = true; }); }
  for (const id of SPACES) {
    const [q] = id.split('.'), c = POOL_SPACES[q].find(a => a.id === id), acts = quadrant(q).actions;
    const i = acts.findIndex(a => a.ring === c.ring && !SPACES.includes(a.id));
    const old = acts[i]; acts[i] = c; undo.push(() => { acts[i] = old; });
  }
});
afterAll(() => { while (undo.length) undo.pop()(); });

const named = (s, name) => linesNaming(s.log, name);
const go = (s, queue) => { s.queue = queue; return resume(s); };
const turn = (...ps) => ps.map(p => ({ t: 'turn', p }));
const pass = s => (s.pending?.kind === 'buy' ? move(s, 'pass') : s);
const total = r => Object.values(r).reduce((a, b) => a + b, 0);
/** Answer every choice of player i with its first option until someone else is asked. */
const settle = (s, i) => { let k = 0; while (s.pending && s.pending.player === i && s.pending.kind === 'choose' && k++ < 12) s = move(s, s.pending.options[0].id); return s; };
const plain = (s, u, q) => { const d = defById(s.cards[u].def); return (!q || d.quadrant === q) && !Object.keys(d).some(k => /^on[A-Z]/.test(k)) && !d.now && !d.pool && !d.activate; };
function give(s, i, q) { const at = s.pile.findIndex(x => plain(s, x, q)); const u = s.pile.splice(at, 1)[0]; s.players[i].members.push(u); return u; }

describe('Purple candidates (the Goes Last token)', () => {
  const Q = ['purple', 'gold', 'red', 'thieves'];
  it('Line Jumpers: whenever a rival takes the Goes Last token, your next turn comes right after theirs', () => {
    let s = go(sceneQ({ quadrants: Q, n: 3, members: [[], ['purple.linejumpers'], []], queue: [] }), turn(0, 2, 1, 0, 2, 1));
    s = pass(take(s, 'purple.skip'));
    expect(s.pending.player).toBe(1); // jumped P3
    expect(named(s, 'Line Jumpers').some(l => /takes their next turn now/.test(l))).toBe(true);
  });
  it('Line Jumpers: your own take of the token moves nothing', () => {
    let s = go(sceneQ({ quadrants: Q, n: 3, members: [['purple.linejumpers'], [], []], queue: [] }), turn(0, 2, 1, 0, 2, 1));
    s = pass(take(s, 'purple.skip'));
    expect(s.pending.player).toBe(2);
    expect(named(s, 'Line Jumpers')).toHaveLength(0);
  });
  it('Bellhops: whenever the Goes Last token leaves you, your next turn comes right after', () => {
    let s = sceneQ({ quadrants: Q, n: 3, members: [[], ['purple.bellhops'], []], queue: [] });
    s.goesLast = { round: s.round, pid: 1 };
    s = go(s, turn(0, 2, 1, 0, 2, 1));
    s = pass(take(s, 'purple.skip'));
    expect(s.goesLast.pid).toBe(0);
    expect(s.pending.player).toBe(1);
    expect(named(s, 'Bellhops').some(l => /takes their next turn now/.test(l))).toBe(true);
    // a rival taking the token from someone else moves nothing
    let t = go(sceneQ({ quadrants: Q, n: 3, members: [[], ['purple.bellhops'], []], queue: [] }), turn(0, 2, 1, 0, 2, 1));
    t = pass(take(t, 'purple.skip'));
    expect(t.pending.player).toBe(2);
  });
});

describe('Magenta candidates', () => {
  const Q = ['thieves', 'gold', 'red', 'purple'];
  it('Grudge Holders: whenever a rival takes one of your members, steal 4 resources from them', () => {
    let s = sceneQ({ quadrants: Q, n: 3, members: [['thieves.grudgeholders']], res: [{}, { gold: 6 }, { gold: 6 }], queue: [] });
    const u = give(s, 0, 'red'), ctx = contextFor(s);
    ctx.moveMember(u, s.players[0], s.players[1], { recruit: true });
    s = settle(resume(s), 0);
    expect(s.players[1].res.gold).toBe(2);
    expect(s.players[2].res.gold).toBe(6); // from them only
    expect(named(s, 'Grudge Holders').some(l => /P2 took .*, so P1 steals 4 from them/.test(l))).toBe(true);
  });
  it('Grudge Holders: a third player moving your member is not a rival taking it', () => {
    const s = sceneQ({ quadrants: Q, n: 3, members: [['thieves.grudgeholders']], res: [{}, { gold: 6 }, { gold: 6 }], queue: [] });
    const u = give(s, 0, 'red');
    contextFor(s).moveMember(u, s.players[0], s.players[1], { actor: s.players[2] });
    expect(named(s, 'Grudge Holders')).toHaveLength(0);
  });
  it('Insurers: whenever a rival steals from you, +1 follower per resource stolen', () => {
    let s = go(sceneQ({ quadrants: Q, members: [['thieves.insurers']], res: [{ gold: 5 }], queue: [] }), turn(1, 0));
    s = take(s, 'thieves.pickpocket');
    s = pass(settle(s, 1));
    const n = 5 - s.players[0].res.gold;
    expect(n).toBeGreaterThan(0);
    expect(s.players[0].bonus).toBe(n);
    expect(named(s, 'Insurers')[0]).toMatch(new RegExp(`stole ${n}, \\+${n} follower`));
  });
});

describe('Silver candidate', () => {
  it('Regifters: move all of one rival\'s silver to another rival; +1 follower per silver moved; +1 silver', () => {
    let s = go(sceneQ({ quadrants: ['silver', 'gold', 'red', 'purple'], n: 3, round: 2, res: [{}, { silver: 5 }, {}], queue: [] }), turn(0, 1, 2));
    s = take(s, 'silver.regifters');
    expect(s.players[0].res.silver).toBe(1);
    expect(s.pending.prompt).toMatch(/^Regifters: move all of whose silver to whom/);
    s = move(s, 'trade:1:2');
    expect(s.players[1].res.silver).toBe(0);
    expect(s.players[2].res.silver).toBe(5);
    expect(s.players[0].bonus).toBe(5);
    expect(named(s, 'Regifters').some(l => /moves P2's 5 silver to P3, \+5 followers/.test(l))).toBe(true);
  });
  it('Regifters: with no rival holding silver, just +1 silver', () => {
    let s = go(sceneQ({ quadrants: ['silver', 'gold', 'red', 'purple'], round: 2, queue: [] }), turn(0, 1));
    s = take(s, 'silver.regifters');
    expect(s.players[0].res.silver).toBe(1);
    expect(named(s, 'Regifters').some(l => /no rival has silver/.test(l))).toBe(true);
  });
});

describe('White, Red, Green and Blue candidates', () => {
  it('Retirees: after you use one of your members\' On Use, you may discard it for +3 white', () => {
    let s = sceneQ({ quadrants: ['trading', 'gold', 'red', 'echo'], members: [['trading.retirees', 'gold.speculator']], res: [{ gold: 2 }], round: 2, queue: [] });
    const spec = uidOf(s, 'gold.speculator', 0);
    s = go(s, turn(0, 1));
    s = move(s, `use:${spec}`);
    expect(s.players[0].res.gold).toBe(4);
    expect(s.pending.prompt).toMatch(/^Retirees: discard Speculator for \+3 white/);
    s = move(s, `card:${spec}`);
    expect(s.players[0].members).not.toContain(spec);
    expect(s.players[0].res.white).toBe(3);
    expect(s.pending.kind).toBe('place'); // the turn goes on
  });
  it('Retirees: after a recruited member\'s On Recruit, the same; a member without one is never asked about', () => {
    let s = sceneQ({ quadrants: ['trading', 'gold', 'red', 'echo'], members: [['trading.retirees']], res: [{ gold: 20, red: 20, white: 20, green: 20 }, { gold: 6 }], shop: ['benders.conmen'], queue: [] });
    s = go(s, turn(0, 1));
    s = take(s, 'gold.rush');
    s = move(s, `card:${uidOf(s, 'benders.conmen', 'shop')}`);
    let k = 0;
    while (!/^Retirees/.test(s.pending?.prompt || '') && k++ < 10) s = move(s, s.pending.options[0].id);
    expect(s.pending.prompt).toMatch(/^Retirees: discard Con Men/);
    let t = sceneQ({ quadrants: ['trading', 'gold', 'red', 'echo'], members: [['trading.retirees']], res: [{ gold: 20, red: 20, white: 20, green: 20 }], queue: [] });
    const u = t.shop.find(x => plain(t, x));
    t = take(go(t, turn(0, 1)), 'gold.rush');
    t = move(t, `card:${u}`);
    expect(/^Retirees/.test(t.pending?.prompt || '')).toBe(false);
  });
  it('Repo Men: whenever a member leaves a rival\'s cult, +1 of its color (grey: any color)', () => {
    let s = sceneQ({ quadrants: ['red', 'gold', 'market', 'yellow'], n: 3, members: [['red.repomen'], ['benders.saboteur']], queue: [] });
    const g = give(s, 1, 'gold'), ctx = contextFor(s);
    ctx.moveMember(g, s.players[1], s.players[2]);
    expect(s.players[0].res.gold).toBe(1);
    const ghost = uidOf(s, 'benders.saboteur', 1);
    ctx.moveMember(ghost, s.players[1], s.players[2]);
    s = resume(s);
    expect(s.pending.prompt).toMatch(/^Repo Men: \+1 of which color/);
    s = move(s, 'color:yellow');
    expect(s.players[0].res.yellow).toBe(1);
    expect(named(s, 'Repo Men').some(l => /left P2's cult/.test(l))).toBe(true);
  });
  it('Remix: choose a color, copy every action with a minion on its spaces except the round III one; +1 green', () => {
    let s = go(sceneQ({ quadrants: ['echo', 'gold', 'red', 'purple'], round: 3, res: [{}, { gold: 3 }], queue: [] }), turn(1, 1, 0));
    s = pass(take(s, 'gold.rush'));
    s = pass(take(s, 'gold.strike'));
    s = take(s, 'echo.remix');
    expect(s.players[0].res.green).toBe(1);
    s = move(s, 'color:gold');
    expect(s.players[0].res.gold).toBe(6); // Golden Years in round III; Double Down left out
    expect(named(s, 'Remix').some(l => /but the round III one/.test(l))).toBe(true);
  });
  it('Bargain Hunters: once per turn, sending shop members to the discard pile gives an extra recruit', () => {
    const s = sceneQ({ quadrants: ['market', 'gold', 'red', 'yellow'], members: [['market.bargainhunters']], queue: [] });
    s.current = 0; s.turns = [0];
    const ctx = contextFor(s);
    const a = s.shop[0], b = s.shop[1];
    s.shop.splice(0, 2); s.discard = [a, b];
    s.queue = [{ t: 'buy', p: 0 }, { t: 'endTurn', p: 0 }];
    scavenge(ctx, s.players[0], [a]);
    scavenge(ctx, s.players[0], [b]);
    expect(s.queue.filter(t => t.t === 'buy').length).toBe(2); // one extra, not two
    expect(named(s, 'Bargain Hunters')).toHaveLength(1);
    expect(total(s.players[0].res)).toBe(0);
  });
});
