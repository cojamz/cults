// @vitest-environment node
// Members as piles (experiment, branch only; Cory, 2026-11-01): face-up piles of copies anyone can recruit from, and the
// members that meet copies of themselves (two Line Cutters, two Party Crashers, two Old Maids on a swap, two Tiebreakers).
import { describe, it, expect } from 'vitest';
import { createGame, applyMove, resume, contextFor, contestTable } from '../../../engine/v4/core.js';
import { GREY_CORE, pileRules, allPiles } from '../../../engine/v4/piles.js';
import { chooseBotMove } from '../../../engine/v4/bots.js';
import { seededRandom } from '../../../engine/v4/rng.js';
import { move } from './helpers.js';

const TABLE = ['red', 'yellow', 'purple', 'echo'];
const seats = n => Array.from({ length: n }, (_, i) => ({ name: `P${i + 1}`, kind: 'bot' }));
const game = (variant, { n = 4, seed = 3, quadrants = TABLE, rules = {} } = {}) =>
  createGame({ seats: seats(n), seed, quadrants, rules: { deck: 10, cull: true, roundDecks: 2, ...pileRules(variant, quadrants, seed), ...rules } });
const defOf = (s, u) => s.cards[u].def;
const tops = s => s.shop.filter(u => s.supply[defOf(s, u)]).map(u => defOf(s, u));
const copiesOf = (s, def) => Object.values(s.cards).filter(c => c.def === def).length;
// a bare table for a scene: round r, nobody holding anything, p0 to act
function scene(variant, { round = 2, members = [], n = 2, rules = {}, queue } = {}) {
  const s = game(variant, { n, rules });
  s.queue = []; s.pending = null; s.round = round; s.slots = {}; s.squats = {}; s.order = []; s.log = [];
  members.forEach((list, i) => { for (const d of list) s.players[i].members.push(takeCopy(s, d)); });
  s.queue = queue || [{ t: 'turn', p: 0 }];
  return resume(s);
}
function takeCopy(s, def) {
  const up = s.shop.findIndex(u => defOf(s, u) === def);
  if (up >= 0) return s.shop.splice(up, 1)[0];
  return s.supply[def].shift();
}

describe('Piles: variant A (the grey core as piles)', () => {
  it('deals each grey core member as a pile of 3 and no other grey', () => {
    const s = game('A');
    for (const d of GREY_CORE) expect(copiesOf(s, d)).toBe(3);
    const greys = Object.values(s.cards).filter(c => c.def.startsWith('benders.'));
    expect(greys.every(c => GREY_CORE.includes(c.def))).toBe(true);
    expect([...s.pile, ...s.shop].filter(u => !s.supply[defOf(s, u)]).every(u => !defOf(s, u).startsWith('benders.'))).toBe(true);
  });
  it('round I shows the shop row plus the top copy of each round I pile; later piles open in their round', () => {
    const s = game('A');
    expect(s.shop.length - tops(s).length).toBe(6);
    expect(tops(s).sort()).toEqual(['benders.frontrunner', 'benders.squatter']);
  });
  it('recruiting a pile’s top copy turns up the next; an empty pile leaves the shop', () => {
    const s = scene('A', { round: 1 });
    const ctx = contextFor(s), p = s.players[0];
    for (let k = 0; k < 3; k++) {
      const u = s.shop.find(x => defOf(s, x) === 'benders.frontrunner');
      expect(u).toBeDefined();
      ctx.recruit(p, u, { free: true });
    }
    expect(p.members.filter(u => defOf(s, u) === 'benders.frontrunner')).toHaveLength(3);
    expect(tops(s)).not.toContain('benders.frontrunner');
    expect(s.supply['benders.frontrunner']).toHaveLength(0);
  });
  it('a copy sent to the bottom of the pile goes back to its own pile, and the pile still shows one top copy', () => {
    const s = scene('A', { round: 2, members: [['benders.squatter']] });
    const ctx = contextFor(s), p = s.players[0], u = p.members[0];
    ctx.buryMember(p, u);
    expect(s.pile).not.toContain(u);
    expect(s.supply['benders.squatter']).toContain(u);
    expect(tops(s).filter(d => d === 'benders.squatter')).toHaveLength(1);
  });
});

describe('Piles: members that meet copies of themselves', () => {
  it('two copies of one member never swap (it would change nothing but fire "joins your cult" again)', () => {
    const s = scene('A', { round: 2, members: [['benders.anarchist'], ['benders.saboteur']] });
    const rivalMaid = s.players[1].members[0], shopMaid = s.shop.find(u => defOf(s, u) === 'benders.saboteur');
    expect(shopMaid).toBeDefined();
    const bonus = s.players[1].bonus;
    expect(contextFor(s).swapMembers(s.players[0], rivalMaid, shopMaid)).toBe(false);
    expect(s.players[1].bonus).toBe(bonus);
    // and Anarchist doesn't offer the pair
    const t = move(s, `use:${s.players[0].members[0]}`);
    const pairs = t.pending.options.filter(o => o.kind === 'trade').map(o => o.value.map(u => defOf(t, u)));
    expect(pairs.some(([a, b]) => a === b)).toBe(false);
  });
  it('an Old Maid copy can still be pushed onto a rival for a different member', () => {
    const s = scene('A', { round: 2, members: [['benders.anarchist', 'benders.saboteur'], ['benders.squatter']] });
    const maid = s.players[0].members[1], crasher = s.players[1].members[0];
    s.players[1].bonus = 5;
    expect(contextFor(s).swapMembers(s.players[0], maid, crasher)).toBe(true);
    expect(s.players[1].members).toContain(maid);
    expect(s.players[1].bonus).toBe(0);
  });
  it('Line Cutters: one cult with two goes first; two cults with one each keep their usual order', () => {
    const s = scene('A', { members: [[], ['benders.frontrunner', 'benders.frontrunner']], queue: [{ t: 'round', r: 2 }] });
    expect(s.pending.player).toBe(1);
    const t = scene('A', { n: 3, members: [['benders.frontrunner'], [], ['benders.frontrunner']], queue: [{ t: 'round', r: 2 }] });
    expect(t.order.slice(0, 2).sort()).toEqual([0, 2]);
    expect(t.order[2]).toBe(1);
  });
  it('Party Crasher: a second copy used while the first is waiting is handed back unused', () => {
    let s = scene('A', { members: [['benders.squatter', 'benders.squatter']] });
    const [a, b] = s.players[0].members;
    s = move(s, `use:${a}`);
    expect(s.players[0].crashNext).toBe(true);
    const offered = s.pending.options.map(o => o.id);
    if (offered.includes(`use:${b}`)) {
      s = move(s, `use:${b}`);
      expect(s.cards[b].used).toBeFalsy();
    }
    expect(s.cards[a].used).toBe(true);
  });
  it('Tiebreaker: two tied players who each hold one share the tie; one cult holding two still wins it alone', () => {
    const rules = { piles: { defs: [...GREY_CORE, 'benders.tiebreaker'], copies: 3 } };
    let s = scene('A', { n: 3, rules, members: [['benders.tiebreaker'], ['benders.tiebreaker'], []] });
    for (const p of s.players) p.res.red = 5;
    expect(contestTable(s).find(c => c.qid === 'red').winners.sort()).toEqual([0, 1, 2]);
    s.players[2].res.red = 0;
    expect(contestTable(s).find(c => c.qid === 'red').winners.sort()).toEqual([0, 1]);
    s = scene('A', { n: 2, rules, members: [['benders.tiebreaker', 'benders.tiebreaker'], []] });
    for (const p of s.players) p.res.red = 5;
    expect(contestTable(s).find(c => c.qid === 'red').winners).toEqual([0]);
  });
});

describe('Piles: variant B (all piles: ten piles, the rest face down as the deck)', () => {
  it('ten piles: two from each color (one round I, one later) and two greys, one copy per player', () => {
    const r = allPiles(TABLE, 5);
    expect(r.defs).toHaveLength(10);
    for (const q of TABLE) {
      const mine = r.defs.filter(d => d.startsWith(`${q}.`));
      expect(mine).toHaveLength(2);
    }
    expect(r.defs.filter(d => d.startsWith('benders.'))).toHaveLength(2);
    expect(r.copies).toBe(4);
    expect(allPiles(TABLE.slice(0, 3), 5, { seats: 3 }).copies).toBe(3);
    const two = allPiles(TABLE.slice(0, 2), 5, { seats: 2 });
    expect(two.defs.filter(d => d.startsWith('red.'))).toHaveLength(4);
    const s = game('B', { seed: 5 });
    for (const d of r.defs) expect(copiesOf(s, d)).toBe(4);
  });
  it('round I opens a pile of every color; the shop is only the piles, the rest of the members wait face down', () => {
    for (const seed of [1, 2, 3, 4, 5, 6]) {
      const s = game('B', { seed });
      expect(s.shop.every(u => s.supply[defOf(s, u)])).toBe(true);
      for (const q of TABLE) expect(tops(s).some(d => d.startsWith(`${q}.`))).toBe(true);
      expect(s.pile.length).toBeGreaterThan(0);
      expect(s.pile.every(u => !s.supply[defOf(s, u)])).toBe(true);
    }
  });
  it('Walk-In recruits the top member of the face-down deck, and the shop stays only piles', () => {
    let s = scene('B', { round: 1 });
    s.players[0].res.red = 9;
    const top = s.pile[0], shopBefore = [...s.shop];
    const ctx = contextFor(s);
    ctx.recruit(s.players[0], top, { free: true, top: true });
    expect(s.players[0].members).toContain(top);
    expect(s.shop.sort()).toEqual(shopBefore.sort());
  });
});

describe('Piles: whole games', () => {
  // every member of the table's colors and the greys as piles of 3 (so every member meets its own copies), bots to the end
  for (const variant of ['A', 'B', 'every']) for (const seed of [1, 2]) {
    it(`variant ${variant}, seed ${seed}: plays to the end with every card where it should be`, () => {
      const rules = variant === 'every'
        ? { piles: { defs: Object.values(game('none').cards).map(c => c.def).filter((d, i, a) => a.indexOf(d) === i && !d.startsWith('market.')), copies: 3, only: true } }
        : {};
      let s = game(variant === 'every' ? 'none' : variant, { seed, rules });
      const rand = seededRandom(seed), all = Object.keys(s.cards).length;
      let n = 0;
      while (!s.over && n++ < 5000) {
        s = applyMove(s, chooseBotMove(s, rand, { level: 'normal' }));
        const placed = [...s.pile, ...s.shop, ...Object.values(s.supply || {}).flat(), ...Object.values(s.waiting).flat(), ...s.players.flatMap(p => [...p.members, ...(p.artifact !== undefined && p.artifact !== null ? [p.artifact] : [])]), ...Object.values(s.artifacts).filter(u => !s.players.some(p => p.artifact === u))];
        expect(new Set(placed).size).toBe(placed.length);
      }
      expect(s.over).toBe(true);
      expect(Object.keys(s.cards).length).toBe(all);
    });
  }
});
