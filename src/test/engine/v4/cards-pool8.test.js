// @vitest-environment node
// Idea pipeline pool 8 (Nov 7; scripts/ideas/README.md): bot-only candidates, never dealt in a real game. One test per
// sentence of each card's text, through real moves, with the log naming the card. Candidates are un-retired for this
// file only, as scripts/lib/pool-rotate.mjs does in bot games.
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { defById } from '../../../engine/v4/content/index.js';
import { resume, contextFor } from '../../../engine/v4/core.js';
import { take, move, uidOf } from './helpers.js';
import { sceneQ, linesNaming } from './cards-helpers.js';

const MEMBERS = ['red.kinfolk', 'red.kindred', 'red.talentagents', 'red.nosyneighbors', 'red.ambulancechasers', 'market.impulsebuyers',
  'yellow.sightseers', 'yellow.souvenirhunters'];
const undo = [];
beforeAll(() => { for (const id of MEMBERS) { const d = defById(id); d.retired = false; undo.push(() => { d.retired = true; }); } });
afterAll(() => { while (undo.length) undo.pop()(); });

const Q = ['red', 'market', 'yellow', 'gold'];
const RICH = { red: 20, blue: 20, yellow: 20, gold: 20 };
const named = (s, name) => linesNaming(s.log, name);
const still = o => sceneQ({ quadrants: Q, ...o, queue: [] });
const go = (s, queue) => { s.queue = queue; return resume(s); };
const turn = (...ps) => ps.map(p => ({ t: 'turn', p }));
const cost = (s, u) => { const d = defById(s.cards[u].def); return d.s + d.w; };
/** A face-up shop member of color q with no On Recruit or arrival effect (a plain buy). */
const shopOf = (s, q) => s.shop.find(u => plain(s, u, q));
// plain: no hook of any kind (no On Recruit, arrival, trigger or use), so only the candidate under test acts
const plain = (s, u, q, max = 99) => { const d = defById(s.cards[u].def); return (!q || d.quadrant === q) && !Object.keys(d).some(k => /^on[A-Z]/.test(k)) && !d.now && !d.pool && !d.activate && d.s + d.w <= max; };
/** Put a plain member of color q face up (from the pile, in place of the last shop card) and return its uid. Call
 *  before the step that offers it. */
function faceUp(s, q) {
  const u = shopOf(s, q);
  if (u !== undefined) return u;
  const k = s.pile.findIndex(x => plain(s, x, q));
  const v = s.pile.splice(k, 1)[0]; s.pile.push(s.shop.pop()); s.shop.push(v); return v;
}
/** Give player i k plain members of color q from the pile (costing up to max); returns their uids. */
function give(s, i, q, k = 1, max = 99) {
  const out = [];
  for (let j = 0; j < k; j++) { const at = s.pile.findIndex(x => plain(s, x, q, max)); if (at < 0) throw new Error(`no plain ${q} member`); const u = s.pile.splice(at, 1)[0]; s.players[i].members.push(u); out.push(u); }
  return out;
}

describe('Red candidates', () => {
  it('Kinfolk: whenever a member joins your cult, +1 follower per other member of its color you have', () => {
    const s = still({ members: [['red.kinfolk']] });
    give(s, 0, 'red'); give(s, 0, 'gold');
    const [u] = give(s, 1, 'red'), ctx = contextFor(s);
    ctx.moveMember(u, s.players[1], s.players[0]);
    expect(s.players[0].bonus).toBe(2); // Kinfolk and the other red
    const t = still({ members: [['red.kinfolk']] });
    const [g] = give(t, 1, 'gold');
    contextFor(t).moveMember(g, t.players[1], t.players[0]);
    expect(t.players[0].bonus).toBe(0); // no other gold member
    expect(named(s, 'Kinfolk')[0]).toMatch(/joins, \+2 followers/);
  });
  it('Kindred: +1 follower per 2 other members of its color you have', () => {
    const s = still({ members: [['red.kindred']] });
    give(s, 0, 'red');
    const [u] = give(s, 1, 'red');
    contextFor(s).moveMember(u, s.players[1], s.players[0]);
    expect(s.players[0].bonus).toBe(1); // 2 other reds
    const t = still({ members: [['red.kindred']] });
    const [v] = give(t, 1, 'red');
    contextFor(t).moveMember(v, t.players[1], t.players[0]);
    expect(t.players[0].bonus).toBe(0); // 1 other red
  });
  it('Talent Agents: at Round End, you may swap one of your members with a shop member costing the same or less', () => {
    let s = still({ members: [['red.talentagents']] });
    const [big] = give(s, 0, 'red');
    const bigName = defById(s.cards[big].def).name;
    s = go(s, [{ t: 'allPlaced' }]);
    expect(s.pending.prompt).toMatch(/^Talent Agents: swap one of your members/);
    const trade = s.pending.options.filter(o => o.kind === 'trade');
    expect(trade.every(o => cost(s, o.value[1]) <= cost(s, o.value[0]))).toBe(true);
    const o = trade[0], out = o.value[0], outName = defById(s.cards[out].def).name;
    void big; void bigName;
    s = move(s, o.id);
    expect(s.players[0].members).toContain(o.value[1]);
    expect(s.players[0].members).not.toContain(out);
    expect(s.shop).toContain(out);
    expect(named(s, 'Talent Agents').some(l => l.includes(`swaps ${outName} for`))).toBe(true);
  });
  it('Talent Agents: "you may": keeping them changes nothing', () => {
    let s = still({ members: [['red.talentagents']] });
    give(s, 0, 'red');
    const before = [...s.players[0].members];
    s = go(s, [{ t: 'allPlaced' }]);
    s = move(s, 'no');
    expect(s.players[0].members).toEqual(before);
  });
  it('Nosy Neighbors: On Use, once per round: move a member costing up to 5 from one rival\'s cult to another rival\'s; +2 of any colors', () => {
    let s = still({ n: 3, members: [['red.nosyneighbors']] });
    give(s, 1, null, 2, 5);
    s = go(s, turn(0, 1, 2));
    const use = `use:${uidOf(s, 'red.nosyneighbors', 0)}`;
    s = move(s, use);
    expect(s.pending.prompt).toMatch(/^Nosy Neighbors: move which member/);
    expect(s.pending.options.every(o => cost(s, o.value[0]) <= 5)).toBe(true);
    const o = s.pending.options[0], [u, to] = o.value;
    const from = s.players.findIndex(p => p.members.includes(u));
    s = move(s, o.id);
    expect(s.pending.prompt).toMatch(/^Nosy Neighbors: \+1 of which color \(1 of 2\)/); // the owner picks each
    s = move(s, 'color:red'); s = move(s, 'color:gold');
    expect(s.players[0].res.red).toBe(1); expect(s.players[0].res.gold).toBe(1);
    expect(s.players[to].members).toContain(u);
    expect(s.players[from].members).not.toContain(u);
    expect(Object.values(s.players[0].res).reduce((a, b) => a + b, 0)).toBe(2);
    expect(s.pending.options.some(x => x.id === use)).toBe(false); // once per round
    expect(named(s, 'Nosy Neighbors').some(l => /moves P2's/.test(l))).toBe(true);
  });
  it('Ambulance Chasers: whenever a member leaves a rival\'s cult, +1 follower (not your own)', () => {
    const s = still({ n: 3, members: [['red.ambulancechasers']] });
    const [mine] = give(s, 0, 'red'), [theirs] = give(s, 1, 'gold');
    const ctx = contextFor(s);
    ctx.moveMember(theirs, s.players[1], s.players[2]);
    expect(s.players[0].bonus).toBe(1);
    ctx.moveMember(mine, s.players[0], s.players[2]);
    expect(s.players[0].bonus).toBe(1);
    expect(named(s, 'Ambulance Chasers')[0]).toMatch(/left P2's cult, \+1 follower/);
  });
});

describe('Blue candidate', () => {
  it('Impulse Buyers: whenever you send shop members to the discard pile, recruit an extra time this turn', () => {
    let s = still({ round: 2, members: [['market.impulsebuyers']], res: [RICH] });
    const g = faceUp(s, 'gold');
    s = go(s, turn(0, 1));
    s = take(s, 'market.pricecheck');
    s = move(s, s.pending.options.find(o => o.kind === 'card' && o.value !== g).id); // Bury one
    expect(named(s, 'Impulse Buyers').some(l => /recruit an extra time this turn/.test(l))).toBe(true);
    expect(s.pending.kind).toBe('buy');
    s = move(s, `card:${g}`);
    expect(s.pending.kind).toBe('buy'); // the extra recruit
    expect(s.pending.options.some(o => o.kind === 'card')).toBe(true);
  });
  it('Impulse Buyers: without it, Bury leaves one recruit', () => {
    let s = still({ round: 2, res: [RICH] });
    const g = faceUp(s, 'gold');
    s = go(s, turn(0, 1));
    s = take(s, 'market.pricecheck');
    s = move(s, s.pending.options.find(o => o.kind === 'card' && o.value !== g).id);
    s = move(s, `card:${g}`);
    expect(s.pending?.player === 0 && s.pending.kind === 'buy' && s.pending.options.some(o => o.kind === 'card')).toBe(false);
  });
});

describe('Yellow candidates', () => {
  it('Sightseers: recruiting a member of a color none of your members have gives an extra recruit this turn', () => {
    let s = still({ members: [['yellow.sightseers']], res: [RICH] });
    give(s, 0, 'red');
    const g = faceUp(s, 'gold');
    s = take(go(s, turn(0, 1)), 'Gather');
    s = move(s, `card:${g}`);
    expect(named(s, 'Sightseers').some(l => /new color, recruit an extra time/.test(l))).toBe(true);
    expect(s.pending.kind).toBe('buy');
    expect(s.pending.options.some(o => o.kind === 'card')).toBe(true);
  });
  it('Sightseers: a color you already have gives nothing extra', () => {
    let s = still({ members: [['yellow.sightseers']], res: [RICH] });
    give(s, 0, 'red');
    const r = faceUp(s, 'red');
    s = take(go(s, turn(0, 1)), 'Gather');
    s = move(s, `card:${r}`);
    expect(named(s, 'Sightseers')).toHaveLength(0);
  });
  it('Souvenir Hunters: a new color pays +1 follower per color among your members', () => {
    let s = still({ members: [['yellow.souvenirhunters']], res: [RICH] });
    give(s, 0, 'red');
    const g = faceUp(s, 'gold');
    s = take(go(s, turn(0, 1)), 'Gather');
    const sb = s.players[0].bonus;
    s = move(s, `card:${g}`);
    expect(s.players[0].bonus - sb).toBe(3 + 1); // yellow, red, gold; and Gather's +1 for recruiting a member
    let t = still({ members: [['yellow.souvenirhunters']], res: [RICH] });
    give(t, 0, 'red');
    const r = faceUp(t, 'red');
    t = take(go(t, turn(0, 1)), 'Gather');
    const tb = t.players[0].bonus;
    t = move(t, `card:${r}`);
    expect(t.players[0].bonus).toBe(tb + 1); // Gather's +1 only
    expect(named(s, 'Souvenir Hunters')[0]).toMatch(/\+3 followers \(3 colors\)/);
  });
});
