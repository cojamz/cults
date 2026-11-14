// @vitest-environment node
// Idea pipeline pool 3 (Nov 7; scripts/ideas/README.md): bot-only candidates, never dealt in a real game. One test per
// sentence of each card's text, through real moves, with the log naming the card. Candidates are un-retired (members)
// or set into their color's wheel (spaces) for this file only, as scripts/lib/pool-rotate.mjs does in bot games.
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { quadrant, defById } from '../../../engine/v4/content/index.js';
import { POOL_SPACES } from '../../../engine/v4/content/pool.js';
import { createGame, resume } from '../../../engine/v4/core.js';
import { take, move, uidOf, useRetired } from './helpers.js';
useRetired(['purple.holdup']);
import { sceneQ, linesNaming } from './cards-helpers.js';

const MEMBERS = ['market.gravediggers', 'market.pickers3', 'market.salvagers', 'purple.usherscut', 'purple.tickettakers',
  'purple.bouncers3', 'purple.gatekeepers', 'red.movers', 'red.shiftworkers'];
const SPACES = ['yellow.moneychangers', 'yellow.smallchange', 'trading.handoffs', 'trading.bequest'];
const undo = [];
beforeAll(() => {
  createGame({ seats: [{ name: 'a', kind: 'bot' }, { name: 'b', kind: 'bot' }], seed: 1, quadrants: ['market', 'yellow', 'trading', 'purple'] });
  for (const id of MEMBERS) { const d = defById(id); d.retired = false; undo.push(() => { d.retired = true; }); }
  // each candidate space takes a round II space's place in its color (a different one each, so all show at once)
  for (const id of SPACES) {
    const [q] = id.split('.'), c = POOL_SPACES[q].find(a => a.id === id), acts = quadrant(q).actions;
    const i = acts.findIndex(a => a.ring === 2 && !SPACES.includes(a.id));
    const old = acts[i]; acts[i] = c; undo.push(() => { acts[i] = old; });
  }
});
afterAll(() => { while (undo.length) undo.pop()(); });

const named = (s, name) => linesNaming(s.log, name);
const price = (s, u) => { const d = defById(s.cards[u].def); return d.s + d.w; };
const RICH = { blue: 20, yellow: 20, white: 20, purple: 20, red: 20 };
const total = r => Object.values(r).reduce((a, b) => a + b, 0);
/** A scene that waits (no task yet), so the test can lay out the discard pile before play goes on. */
const still = o => sceneQ({ ...o, queue: [] });
const go = (s, queue) => { s.queue = queue; return resume(s); };
/** Put pile members with these printed costs on the discard pile (in order, the last on top); returns their uids. */
function discard(s, costs) {
  const out = [];
  for (const c of costs) {
    const k = s.pile.findIndex(u => price(s, u) === c);
    if (k < 0) throw new Error(`no pile member costing ${c}`);
    out.push(s.pile.splice(k, 1)[0]);
  }
  s.discard = [...out];
  return out;
}
/** Two printed costs that pile members have at least twice each, low first. */
function twoCosts(s) {
  const n = {};
  for (const u of s.pile) n[price(s, u)] = (n[price(s, u)] || 0) + 1;
  return Object.keys(n).map(Number).filter(c => n[c] >= 2).sort((a, b) => a - b).slice(0, 2);
}

describe('Blue candidates (discard pile)', () => {
  const Q = ['market', 'yellow', 'trading', 'purple'];
  it('Grave Diggers: at Round End, recruits the cheapest member in the discard pile for free; named', () => {
    let s = still({ quadrants: Q, members: [['market.gravediggers']], res: [{ blue: 2 }] });
    const [lo, hi] = twoCosts(s);
    const [a, b] = discard(s, [hi, lo]);
    s = go(s, [{ t: 'allPlaced' }]);
    expect(s.players[0].members).toContain(b);
    expect(s.players[0].members).not.toContain(a);
    expect(s.discard).toEqual([a]);
    expect(s.players[0].res.blue).toBe(2); // for free
    expect(named(s, 'Grave Diggers')[0]).toMatch(/recruits .* from the discard pile for free/);
  });
  it('Grave Diggers: a tie for cheapest is the owner\'s pick; an empty pile recruits nothing', () => {
    let s = still({ quadrants: Q, members: [['market.gravediggers']] });
    const [lo] = twoCosts(s);
    const [a, b] = discard(s, [lo, lo]);
    s = go(s, [{ t: 'allPlaced' }]);
    expect(s.pending.kind).toBe('choose');
    expect(s.pending.options.map(o => o.value).sort()).toEqual([a, b].sort());
    s = move(s, `card:${b}`);
    expect(s.players[0].members).toContain(b);
    let e = still({ quadrants: Q, members: [['market.gravediggers']] });
    e.discard = [];
    e = go(e, [{ t: 'allPlaced' }]);
    expect(e.players[0].members).toHaveLength(1);
    expect(named(e, 'Grave Diggers')[0]).toMatch(/discard pile is empty/);
  });
  it('Salvagers: On Use, once per game, recruits the cheapest discard pile member for free', () => {
    let s = still({ quadrants: Q, members: [['market.salvagers']], round: 2 });
    const [lo, hi] = twoCosts(s);
    const [a, b] = discard(s, [lo, hi]);
    s = go(s, [{ t: 'turn', p: 0 }]);
    const use = `use:${uidOf(s, 'market.salvagers', 0)}`;
    s = move(s, use);
    expect(s.players[0].members).toContain(a);
    expect(s.discard).toEqual([b]);
    expect(named(s, 'Salvagers')).toHaveLength(1);
    expect(s.pending.options.some(o => o.id === use)).toBe(false); // once per game
  });
  it('Junk Collectors: on your turn, a discard pile member can be your recruit instead of a shop member, paid at its price', () => {
    let s = still({ quadrants: Q, members: [['market.pickers3']], res: [RICH] });
    const [lo, hi] = twoCosts(s);
    const [a, b] = discard(s, [hi, lo]); // any member in the pile, not only the top
    s = go(s, [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }]);
    s = take(s, 'purple.holdup');
    expect(s.pending.kind).toBe('buy');
    expect(s.pending.options.map(o => o.id)).toEqual(expect.arrayContaining([`card:${a}`, `card:${b}`]));
    const before = total(s.players[0].res);
    s = move(s, `card:${a}`);
    expect(s.players[0].members).toContain(a);
    expect(total(s.players[0].res)).toBe(before - price(s, a)); // its normal price
    expect(s.discard).toEqual([b]);
    expect(s.log.some(l => /from the discard pile with P1's Junk Collectors/.test(l))).toBe(true);
    // that was the turn's recruit: no shop buy follows
    expect(s.pending?.kind === 'buy' && s.pending.options.some(o => o.kind === 'card')).toBe(false);
  });
  it('Junk Collectors: once per round; never off its owner\'s turn', () => {
    let s = still({ quadrants: Q, members: [['market.pickers3']], res: [RICH] });
    const [lo, hi] = twoCosts(s);
    const [a, b] = discard(s, [hi, lo]);
    s.cards[uidOf(s, 'market.pickers3', 0)].pickRound = 1; // used this round
    s = go(s, [{ t: 'turn', p: 0 }]);
    s = take(s, 'purple.holdup');
    expect(s.pending.options.some(o => o.id === `card:${a}` || o.id === `card:${b}`)).toBe(false);
    // a recruit outside a turn (a buy step with nobody's turn running): shop only
    let r = still({ quadrants: Q, members: [['market.pickers3']], res: [RICH] });
    const [c] = discard(r, [lo]);
    r = go(r, [{ t: 'buy', p: 0 }]);
    expect(r.pending.kind).toBe('buy');
    expect(r.pending.options.some(o => o.kind === 'card')).toBe(true);
    expect(r.pending.options.some(o => o.id === `card:${c}`)).toBe(false);
  });
});

describe('Yellow candidate spaces (round II)', () => {
  const Q = ['yellow', 'market', 'trading', 'purple'];
  // Swap Meet pays the rival nothing since Nov 8 (Cory: "I don't think you should give them followers")
  for (const [id, name, max, pay] of [['yellow.moneychangers', 'Swap Meet', 3, 0], ['yellow.smallchange', 'Small Change', 2, 1]]) {
    it(`${name}: +2 yellow; swap up to ${max} resources one for one with a rival, colors your choice${pay ? '; they +1 follower each' : ''}`, () => {
      let s = sceneQ({ quadrants: Q, round: 2, n: 3, res: [{ blue: 6 }, { white: 5, purple: 5 }, { purple: 1 }] });
      s = take(s, id);
      expect(s.players[0].res.yellow).toBe(2);
      s = move(s, 'player:1');
      const f1 = s.players[1].bonus;
      for (let k = 0; k < max; k++) {
        expect(s.pending.options.map(o => o.id)).toEqual(expect.arrayContaining(['swap:blue:white', 'swap:blue:purple', 'swap:yellow:white']));
        s = move(s, k % 2 ? 'swap:blue:purple' : 'swap:blue:white');
      }
      // up to max: no more asks
      expect(s.pending?.prompt || '').not.toMatch(new RegExp(name));
      expect(s.players[0].res.blue).toBe(6 - max);
      expect(s.players[1].res.blue).toBe(max);
      expect(s.players[0].res.white + s.players[0].res.purple).toBe(max);
      expect(s.players[1].bonus).toBe(f1 + pay * max);
      expect(named(s, name).filter(l => /gives P2 1 blue/.test(l))).toHaveLength(max);
      expect(named(s, name).at(-1)).toBe(pay ? `P1's ${name}: P2 +${max} followers (${max} swapped).` : `P1's ${name}: ${max} swapped with P2.`);
    });
    it(`${name}: stopping early ${pay ? 'pays 1 follower per swap' : 'is fine'}; swapping none pays nothing`, () => {
      let s = sceneQ({ quadrants: Q, round: 2, res: [{ blue: 6 }, { white: 5 }] });
      s = take(s, id);
      s = move(s, 'player:1');
      s = move(s, 'swap:blue:white');
      s = move(s, 'done');
      expect(s.players[1].bonus).toBe(pay);
      let z = sceneQ({ quadrants: Q, round: 2, res: [{ blue: 6 }, { white: 5 }] });
      z = take(z, id);
      z = move(z, 'player:1');
      z = move(z, 'done');
      expect(z.players[1].bonus).toBe(0);
      expect(z.players[0].res.blue).toBe(6);
    });
  }
});

describe('White candidate spaces (round II)', () => {
  const Q = ['trading', 'market', 'yellow', 'purple'];
  const cases = [['trading.handoffs', 'Hand-Offs', 2, 0], ['trading.bequest', 'Bequest', 1, 3]];
  for (const [id, name, each, f] of cases) {
    it(`${name}: give one of your members to a rival; white ${each === 2 ? 'twice' : 'equal to'} its cost${f ? ', +3 followers' : ''}; +1 white`, () => {
      let s = sceneQ({ quadrants: Q, round: 2, n: 3, members: [['market.stylist', 'purple.secondwind']] });
      const u = uidOf(s, 'purple.secondwind', 0), c = price(s, u);
      s = take(s, id);
      s = move(s, `card:${u}`);
      s = move(s, 'player:2');
      expect(s.players[2].members).toContain(u);
      expect(s.players[0].members).not.toContain(u);
      expect(s.players[0].res.white).toBe(each * c + 1);
      expect(s.players[0].bonus).toBe(f);
      expect(named(s, name)).toEqual([`P1's ${name}: gives Go-Getter to P3.`, `P1's ${name}: +${each * c} white${f ? `, +${f} followers` : ''}, +1 white.`]);
    });
  }
  it('Hand-Offs and Bequest: +1 white; a player with no members gives nothing and still gets the +1', () => {
    for (const [id, name] of cases) {
      let s = sceneQ({ quadrants: Q, round: 2 });
      s = take(s, id);
      expect(s.players[0].res.white).toBe(1);
      expect(named(s, name)).toEqual(expect.arrayContaining([`P1's ${name}: no members to give.`, `P1's ${name}: +1 white.`]));
    }
  });
});

describe('Purple candidates', () => {
  const Q = ['purple', 'market', 'yellow', 'trading'];
  it('Ushers\' Cut: taking the Goes Last token steals 1 resource from each rival', () => {
    let s = sceneQ({ quadrants: Q, n: 3, members: [['purple.usherscut']], res: [{}, { blue: 3, white: 1 }, { yellow: 2 }],
      queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 2 }, { t: 'turn', p: 0 }] });
    s = take(s, 'purple.skip'); // Sleep In: take the Goes Last token
    expect(s.players[1].res.blue).toBe(2);
    expect(s.players[2].res.yellow).toBe(1);
    expect(s.players[0].res.blue).toBe(1);
    expect(s.players[0].res.yellow).toBe(1);
    expect(named(s, "Ushers' Cut")).toEqual(["P1's Ushers' Cut: steals 1 blue from P2.", "P1's Ushers' Cut: steals 1 yellow from P3."]);
  });
  it('Ushers\' Cut: keeping the token you already hold is not taking it', () => {
    let s = sceneQ({ quadrants: Q, members: [['purple.usherscut']], res: [{}, { blue: 3 }], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }] });
    s.goesLast = { round: 1, pid: 0 };
    s = take(s, 'purple.skip');
    expect(s.players[1].res.blue).toBe(3);
    expect(named(s, "Ushers' Cut")).toEqual([]);
  });
  it('Ticket Takers: taking the Goes Last token steals 2 resources from one rival (its owner picks)', () => {
    let s = sceneQ({ quadrants: Q, n: 3, members: [['purple.tickettakers']], res: [{}, { blue: 1 }, { yellow: 2, white: 3 }],
      queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 2 }, { t: 'turn', p: 0 }] });
    s = take(s, 'purple.skip');
    expect(s.pending.prompt).toMatch(/Ticket Takers/);
    s = move(s, 'player:2');
    expect(s.players[2].res.white + s.players[2].res.yellow).toBe(3);
    expect(s.players[0].res.white + s.players[0].res.yellow).toBe(2);
    expect(s.players[1].res.blue).toBe(1);
    expect(named(s, 'Ticket Takers').at(-1)).toMatch(/^P1's Ticket Takers: steals .* from P3\.$/);
  });
  const recruitTwice = (holder, line) => {
    // P1 recruits twice on one turn (Shopaholics: "You can always recruit twice"); P1 has another turn after P2's
    let s = sceneQ({ quadrants: Q, members: [['market.shopaholic'], [holder]], res: [RICH, {}],
      queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = take(s, 'purple.holdup'); // Hold Up skips P2's next turn; P1's turns stay as queued
    const shop = () => s.pending.options.filter(o => o.kind === 'card' && line(s.cards[o.uid]));
    s = move(s, shop()[0].id);
    const afterOne = [...s.log];
    if (s.pending?.kind === 'buy' && shop().length) s = move(s, shop()[0].id);
    return { s, afterOne };
  };
  it('Heavies (the brief\'s Bouncers): a rival who recruits two or more members in one turn skips their next turn; one recruit does nothing', () => {
    const one = d => (defById(d.def).n || 1) === 1;
    const { s, afterOne } = recruitTwice('purple.bouncers3', one);
    expect(linesNaming(afterOne, 'Heavies')).toEqual([]);
    expect(named(s, 'Heavies')).toEqual(["P2's Heavies: P1 recruited 2 or more members this turn.", "P2's Heavies: P1 skips their next turn."]);
  });
  it('Gatekeepers: three or more members in one turn (two members counting 1 and 2 reach it); two members counting 1 do not', () => {
    const one = d => (defById(d.def).n || 1) === 1;
    const { s: two } = recruitTwice('purple.gatekeepers', one);
    expect(named(two, 'Gatekeepers')).toEqual([]);
    let s = sceneQ({ quadrants: Q, members: [['market.shopaholic'], ['purple.gatekeepers']], res: [RICH, {}],
      shop: ['benders.dabblers', 'market.stylist'], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }] });
    s = take(s, 'purple.holdup');
    s = move(s, `card:${uidOf(s, 'market.stylist', 'shop')}`);
    expect(named(s, 'Gatekeepers')).toEqual([]);
    s = move(s, `card:${uidOf(s, 'benders.dabblers', 'shop')}`); // Dabblers counts as 2: 3 this turn
    expect(named(s, 'Gatekeepers')).toEqual(["P2's Gatekeepers: P1 recruited 3 or more members this turn.", "P2's Gatekeepers: P1 skips their next turn."]);
  });
});

describe('Red candidates', () => {
  const Q = ['red', 'market', 'purple', 'yellow'];
  for (const [id, name, n] of [['red.movers', "Movers' Union", 2], ['red.shiftworkers', 'Shift Workers', 3]]) {
    it(`${name}: whenever you swap one of your members, +${n} of any colors`, () => {
      let s = sceneQ({ quadrants: Q, round: 2, members: [[id, 'market.stylist'], ['red.panel']] });
      const mine = uidOf(s, 'market.stylist', 0);
      s = take(s, 'red.hireup'); // Promote: +3 red, then the swap
      const o = s.pending.options.find(x => x.kind === 'trade' && x.value[0] === mine);
      const red = s.players[0].res.red;
      s = move(s, o.id);
      const yellow = s.players[0].res.yellow || 0;
      for (let k = 1; k <= n; k++) { // the owner picks each color (judge games, Nov 7: not the least-held one for them)
        expect(s.pending.prompt).toBe(`${name}: +1 of which color (${k} of ${n})?`);
        s = move(s, 'color:yellow');
      }
      expect(total(s.players[0].res) - red).toBe(n);
      expect(s.players[0].res.yellow - yellow).toBe(n);
      expect(named(s, name)).toEqual(Array(n).fill(`P1's ${name}: +1 yellow.`));
    });
    it(`${name}: a swap of a rival's member, or a rival swapping yours, pays nothing`, () => {
      let s = sceneQ({ quadrants: Q, round: 2, members: [[id], ['red.panel']] });
      const theirs = uidOf(s, 'red.panel', 1);
      s = take(s, 'red.hireup');
      s = move(s, s.pending.options.find(x => x.kind === 'trade' && x.value[0] === theirs).id);
      expect(named(s, name)).toEqual([]);
      let r = sceneQ({ quadrants: Q, round: 2, members: [['red.panel'], [id, 'market.stylist']] });
      const hers = uidOf(r, 'market.stylist', 1);
      r = take(r, 'red.hireup');
      r = move(r, r.pending.options.find(x => x.kind === 'trade' && x.value[0] === hers).id);
      expect(named(r, name)).toEqual([]);
    });
  }
});

describe('Pool 3 flags stay off live cards', () => {
  it('only a pool candidate carries discardPick (Pickers), and core reads it only on candidates', async () => {
    const { allQuadrantIds, quadrant: q, guestMembers } = await import('../../../engine/v4/content/index.js');
    const defs = [...allQuadrantIds().flatMap(id => q(id).members), ...guestMembers()];
    expect(defs.filter(d => d.discardPick).map(d => [d.id, !!d.pool])).toEqual([['market.pickers3', true]]);
  });
});
