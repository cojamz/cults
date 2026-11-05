// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { contextFor, liveOptions, resume, SHOP_SIZE, shopSize } from '../../../engine/v4/core.js';
import { ledger } from '../../../engine/v4/content/echo.js';
import { table, uidIn, useCosts } from './cards-helpers-b.js';
import { actionName, move, take } from './helpers.js';

const Q = ['gold', 'red', 'trading', 'echo'];
const ROW = ['gold.banker', 'red.twins', 'red.intern', 'red.volunteer', 'gold.tycoon', 'echo.evergreen', 'echo.muse', 'gold.taxman']; // one full round-III row (SHOP_SIZE); round I shows shopSize = 6
useCosts({
  'red.intern': [1, 0], 'red.twins': [1, 1], 'red.volunteer': [2, 2], 'gold.banker': [2, 2],
  'gold.tycoon': [4, 2], 'echo.evergreen': [1, 3], 'echo.muse': [2, 2], 'echo.chronicler': [2, 3],
});
const defs = (s, pid) => s.players[pid].members.map(u => s.cards[u].def);
const swapId = (a, b) => `trade:${a}:${b}`;
const pass = s => s.pending?.kind === 'buy' ? move(s, 'pass') : s;
const remaining = s => [...s.shop, ...s.pile, ...s.players.flatMap(p => p.members)];

describe('locked Red action progression', () => {
  it.each([1, 2, 3])('Gather gives round +1 red in round %i, and round followers on a member recruit this turn', round => {
    let s = table(Q, { round, shop: ROW });
    s.players[0].res.gold = 9;
    s = take(s, 'red.turnout');
    expect(s.players[0].res.red).toBe(round + 1);
    expect(s.players[0].recruitFollowers).toEqual([{ n: round, name: 'Gather' }]);
    const bonus = s.players[0].bonus;
    s = move(s, `card:${uidIn(s, 'red.intern', 'shop')}`);
    expect(defs(s, 0)).toContain('red.intern');
    expect(s.players[0].bonus - bonus).toBe(round);
    expect(s.players[0].recruitFollowers).toBeUndefined();
    expect(s.log.join('\n')).toContain("P1's Gather: +");
  });

  it('Gather pays nothing for buying followers, and wears off at the next turn', () => {
    let s = table(Q, { shop: ROW });
    s.players[0].res.gold = 5;
    s = take(s, 'red.turnout');
    s = move(s, 'tier:mid');
    expect(s.log.join('\n')).not.toContain('for recruiting a member');
    expect(s.players[0].recruitFollowers).toBeUndefined();
  });

  it('Gather wears off when the turn ends, so a recruit off your turn never collects it', () => {
    let s = table(Q, { shop: ROW });
    s.players[0].res.gold = 5;
    s = take(s, 'red.turnout');
    expect(s.players[0].recruitFollowers).toEqual([{ n: 1, name: 'Gather' }]);
    s.pending = null; s.queue = [{ t: 'endTurn', p: 0 }];
    s = resume(s);
    expect(s.players[0].recruitFollowers).toBeUndefined();
  });

  it('Walk-In recruits the top member of the deck free, leaves the shop alone, +1 red and each rival +1 red', () => {
    let s = table(Q, { shop: ROW.slice(0, 6) });
    const pile = s.pile.length, top = s.pile[0], shop = [...s.shop];
    s = take(s, 'red.hire');
    expect(s.players[0].members).toEqual([top]);
    expect(s.players[0].res.red).toBe(1);
    expect(s.players[1].res.red).toBe(1);
    expect(s.shop).toEqual(shop);
    expect(s.pile).toHaveLength(pile - 1);
  });

  it('round III recruits any shop member free and adds inherent red', () => {
    let s = take(table(Q, { round: 3, shop: ROW }), 'red.take');
    s = move(s, `card:${uidIn(s, 'gold.tycoon', 'shop')}`);
    expect(defs(s, 0)).toEqual(['gold.tycoon']);
    expect(s.players[0].res.red).toBe(1);
  });

  it('Promote uses total printed cost, includes cheaper members, and excludes cost +3', () => {
    const s = take(table(Q, { round: 2, members: [['red.twins']], shop: ROW }), 'red.hireup');
    const a = uidIn(s, 'red.twins', 0);
    const incoming = s.pending.options.filter(o => o.value?.[0] === a).map(o => s.cards[o.value[1]].def);
    expect(incoming).toContain('gold.banker'); // 2 -> 4, exact boundary
    expect(incoming).toContain('red.intern');
    expect(incoming).not.toContain('echo.chronicler'); // 5
    expect(s.players[0].res.red).toBe(3);
  });

  it('Demote gives your member for anything costing the same down to 2 cheaper; never a rival\'s member (Cory, Nov 4)', () => {
    const r = take(table(Q, { round: 2, members: [[], ['gold.tycoon']], shop: ROW }), 'red.trade');
    expect(r.pending?.options?.some(o => o.value?.[0] === uidIn(r, 'gold.tycoon', 1)) || false).toBe(false);
    let s = take(table(Q, { round: 2, members: [['gold.tycoon']], shop: ROW }), 'red.trade');
    const a = uidIn(s, 'gold.tycoon', 0), b = uidIn(s, 'gold.banker', 'shop');
    const incoming = s.pending.options.filter(o => o.value?.[0] === a).map(o => s.cards[o.value[1]].def);
    expect(incoming).toContain('gold.banker'); // 6 -> 4
    expect(incoming).not.toContain('red.intern'); // 6 -> 1: more than 2 cheaper
    expect(incoming).toEqual(['gold.banker', 'red.volunteer', 'echo.evergreen', 'echo.muse']); // 6 -> 4..6 only
    const row = s.shop.length, pile = s.pile.length;
    s = move(s, swapId(a, b));
    expect(defs(s, 0)).toEqual(['gold.banker']);
    expect(s.shop).toContain(a);
    expect(s.shop).toHaveLength(row); expect(s.pile).toHaveLength(pile);
  });

  it('Tryout uses a shop member’s On Recruit; the member stays in the shop and nobody recruits', () => {
    let s = take(table(Q, { shop: ROW.slice(0, 6) }), 'red.evenswap');
    expect(s.players[0].res.red).toBe(2); // +2 red (Cory, Nov 1)
    const banker = uidIn(s, 'gold.banker', 'shop'), shop = [...s.shop], pile = [...s.pile];
    expect(s.pending.options.map(o => o.id)).toContain(`card:${banker}`);
    expect(s.pending.options.map(o => o.id)).not.toContain(`card:${uidIn(s, 'red.twins', 'shop')}`); // no On Recruit
    s = move(s, `card:${banker}`);
    expect(s.players[0].res.gold).toBe(3);
    expect(s.players[0].members).toEqual([]);
    expect(s.shop).toEqual(shop); expect(s.pile).toEqual(pile);
    expect(s.recruits).toBe(0);
  });

  it('Tryout never offers Impersonator: its On Recruit only changes the card itself', () => {
    const s = take(table(Q, { shop: ['echo.impersonators', 'gold.banker', 'red.twins'] }), 'red.evenswap');
    const ids = s.pending.options.map(o => o.id);
    expect(ids).toContain(`card:${uidIn(s, 'gold.banker', 'shop')}`);
    expect(ids).not.toContain(`card:${uidIn(s, 'echo.impersonators', 'shop')}`);
  });

  it('Tryout offers members whose On Recruit copies an action (Fan Club, Stunt Double, Understudy), and each ends', () => {
    for (const id of ['echo.mirror', 'echo.hourglass', 'echo.understudy']) {
      let s = take(table(Q, { shop: [id, 'red.twins', 'red.intern'] }), 'red.evenswap');
      const uid = uidIn(s, id, 'shop');
      expect(s.pending.options.map(o => o.id)).toContain(`card:${uid}`);
      s = move(s, `card:${uid}`);
      let i = 0;
      // always take the same member again when offered: Stunt Double copying the Tryout that borrowed it looped (bot games, Nov 4)
      for (; s.pending?.kind === 'choose' && i < 20; i++) s = move(s, (s.pending.options.find(o => o.id === `card:${uid}`) || s.pending.options[0]).id);
      expect(i).toBeLessThan(20);
      expect(s.shop).toContain(uid);
    }
  });

  it('Promote and Demote only give away your own member (Cory, Nov 4: "promote and demote rules arent being respected")', () => {
    for (const key of ['red.hireup', 'red.trade']) {
      const s = take(table(Q, { round: 2, members: [['red.twins'], ['benders.extrahand', 'red.intern']], shop: ['red.volunteer', 'gold.banker'] }), key);
      const mine = s.players[0].members;
      const swaps = s.pending.options.filter(o => o.kind === 'trade');
      expect(swaps.length).toBeGreaterThan(0);
      for (const o of swaps) expect(mine).toContain(o.value[0]);
    }
  });

  it('Tryout with no On Recruit member in the shop gives its red and says so', () => {
    const s = take(table(Q, { shop: ['red.twins', 'red.intern', 'red.volunteer'] }), 'red.evenswap');
    expect(s.pending?.kind).not.toBe('choose');
    expect(s.players[0].res.red).toBe(2);
    expect(s.log.some(l => /no shop member has an On Recruit effect/.test(l))).toBe(true);
  });

  it('shop/cult swaps are atomic, retain a full row and count only the actor acquisition', () => {
    let s = take(table(Q, { round: 2, members: [['red.volunteer', 'red.recruiter', 'red.proselytizer']], shop: ROW.map(d => d === 'red.volunteer' ? 'red.bigfamily' : d) }), 'red.hireup');
    const a = uidIn(s, 'red.volunteer', 0), b = uidIn(s, 'echo.evergreen', 'shop');
    const before = remaining(s).sort((x, y) => x - y), pile = [...s.pile], row = s.shop.length;
    s = move(s, swapId(a, b));
    expect(s.shop).toHaveLength(row);
    expect(s.pile).toEqual(pile);
    expect(remaining(s).sort((x, y) => x - y)).toEqual(before);
    expect(defs(s, 0)).toContain('echo.evergreen'); expect(s.shop).toContain(a);
    expect(s.recruits).toBe(1); expect(s.players[0].turnRecruits).toBe(1);
    expect(s.players[0].res.green).toBe(2); // Evergreen +2
    expect(s.players[0].res.red).toBe(4); // Promote +3, Recruiter +1 (a swap you make is a recruit)
    expect(s.players[0].bonus).toBe(1);
  });

  it('Promote never gives away a rival\'s member (Cory, Nov 4: "promote and demote rules arent being respected")', () => {
    const s = take(table(Q, { round: 2, members: [[], ['red.twins', 'red.recruiter', 'red.proselytizer']], shop: ROW }), 'red.hireup');
    const theirs = s.players[1].members;
    expect((s.pending?.options || []).some(o => theirs.includes(o.value?.[0]))).toBe(false);
  });

  it('Demote swaps your member with a rival\'s, unless Loyalists keeps theirs (Cory, 2026-10-29)', () => {
    let s = take(table(Q, { round: 2, members: [['red.volunteer'], ['red.twins']], shop: ROW }), 'red.trade');
    const mine = uidIn(s, 'red.volunteer', 0), theirs = uidIn(s, 'red.twins', 1);
    expect(s.pending.options.some(o => o.id === swapId(mine, theirs))).toBe(true);
    s = move(s, swapId(mine, theirs));
    expect([defs(s, 0), defs(s, 1)]).toEqual([['red.twins'], ['red.volunteer']]);
    const t = take(table(Q, { round: 2, members: [['red.volunteer'], ['red.twins', 'red.loyalists']], shop: ROW }), 'red.trade');
    expect(t.pending?.options?.some(o => o.id === swapId(uidIn(t, 'red.volunteer', 0), uidIn(t, 'red.twins', 1))) || false).toBe(false);
  });

  it('swapping into your own cult fires Now exactly once and excludes the outgoing member from hook counts', () => {
    let s = take(table(Q, { round: 2, members: [['echo.evergreen']], shop: ROW }), 'red.hireup');
    const a = uidIn(s, 'echo.evergreen', 0), b = uidIn(s, 'gold.banker', 'shop');
    s = move(s, swapId(a, b));
    expect(s.players[0].res.gold).toBe(3);
    expect(s.players[0].res.green).toBe(0);
  });

  it('Bodyguards and Lie Low let swaps through (Cory, Nov 1: they block steals, not swaps)', () => {
    const s = take(table(['gold', 'red', 'thieves', 'echo'], { n: 3, round: 2, members: [['thieves.watchdog'], ['red.twins', 'thieves.crew'], ['red.intern']], shop: ROW }), 'red.hireup');
    const own = uidIn(s, 'thieves.watchdog', 0);
    expect(s.pending.options.some(o => o.value[0] === own)).toBe(true);
    const ctx = contextFor(s); s.players[1].hideout = s.round;
    const a = uidIn(s, 'red.twins', 1), b = uidIn(s, 'gold.banker', 'shop');
    expect(ctx.swapMembers(s.players[0], a, b)).toBe(true);
    expect(s.players[1].members).not.toContain(a);
    // a Bodyguards owner's member can be swapped too
    const t = take(table(['gold', 'red', 'thieves', 'echo'], { n: 3, round: 2, members: [['red.intern'], ['thieves.watchdog', 'red.twins'], []], shop: ROW }), 'red.hireup');
    expect(contextFor(t).swapMembers(t.players[0], uidIn(t, 'red.twins', 1), uidIn(t, 'gold.banker', 'shop'))).toBe(true);
  });

  it('stale trade options disappear if either member changes location', () => {
    const s = take(table(Q, { round: 2, members: [['red.volunteer']], shop: ROW }), 'red.hireup');
    const a = uidIn(s, 'red.volunteer', 0), b = uidIn(s, 'gold.banker', 'shop');
    const task = s.queue.find(t => t.t === 'choose');
    s.shop.splice(s.shop.indexOf(b), 1); s.pile.push(b);
    expect(liveOptions(s, task).some(o => o.id === swapId(a, b))).toBe(false);
  });

  it('Green copies redo a swap and reselect targets rather than repeating its old proceeds', () => {
    let s = table(Q, { round: 2, members: [['red.twins'], ['red.volunteer']], shop: ROW,
      queue: [0, 1].map(p => ({ t: 'turn', p })) });
    const a = uidIn(s, 'red.twins', 0), b = uidIn(s, 'echo.evergreen', 'shop');
    s = pass(move(take(s, 'red.hireup'), swapId(a, b)));
    expect(Object.values(ledger(s).now).find(e => e.name === actionName('red.hireup')).redo).toBe(true);
    s = take(s, 'echo.echo');
    s = move(s, s.pending.options.find(o => o.label.startsWith(`${actionName('red.hireup')} (`)).id);
    expect(s.pending.kind).toBe('choose');
    expect(s.pending.options.every(o => o.kind === 'trade' || o.id === 'none')).toBe(true);
    const actorMember = uidIn(s, 'red.volunteer', 1), target = uidIn(s, 'gold.banker', 'shop');
    s = move(s, swapId(actorMember, target));
    expect(defs(s, 1)).toContain('gold.banker');
    expect([s.players[1].res.green, s.players[1].res.red, s.players[1].res.gold]).toEqual([1, 3, 3]); // Echo +1
  });
});

describe('active acquisition versus gifts', () => {
  it('taking a rival member triggers its Recruit and recruitment observers; giving it does not', () => {
    const s = table(Q, { members: [['red.recruiter'], ['echo.evergreen']], queue: [] });
    const uid = uidIn(s, 'echo.evergreen', 1), ctx = contextFor(s);
    ctx.moveMember(uid, s.players[1], s.players[0]);
    expect([s.recruits, s.players[0].res.green, s.players[0].res.red]).toEqual([0, 0, 0]); // a gift is no recruit
    ctx.moveMember(uid, s.players[0], s.players[1]);
    expect(ctx.steal(s.players[0], s.players[1], { uid })).toBe(1);
    expect([s.recruits, s.players[0].res.green, s.players[0].res.red]).toEqual([1, 2, 1]); // Evergreen's On Recruit +2; Recruiter +1 (a steal is a recruit)
  });

  it('a return-to-shop removes only an Extra Hand’s unplaced minion and reacquisition restores it once', () => {
    let s = table(Q, { members: [['benders.extrahand3']], shop: ROW, queue: [{ t: 'round', r: 3 }] });
    const hand = uidIn(s, 'benders.extrahand3', 0), replacement = s.shop[0];
    const ctx = contextFor(s), before = s.players[0].left;
    expect(s.queue.filter(t => t.workerSource === hand && t.t === 'turn')).toHaveLength(1);
    ctx.swapMembers(s.players[0], hand, replacement);
    expect(s.players[0].left).toBe(before - 1);
    expect(s.queue.some(t => t.workerSource === hand)).toBe(false);
    ctx.swapMembers(s.players[0], replacement, hand);
    expect(s.players[0].left).toBe(before);
    expect(s.queue.filter(t => t.workerSource === hand && t.t === 'turn')).toHaveLength(1);
    expect(new Set(remaining(s)).size).toBe(remaining(s).length);
  });

  it('an acquired Doppelganger chooses its identity and fires the copied Recruit (Cory, 2026-10-28)', () => {
    let s = take(table(Q, { round: 2, members: [['red.volunteer', 'echo.evergreen']], shop: ['echo.doppel', ...ROW] }), 'red.hireup');
    const a = uidIn(s, 'red.volunteer', 0), copy = uidIn(s, 'echo.doppel', 'shop'), target = uidIn(s, 'echo.evergreen', 0);
    s = move(s, swapId(a, copy));
    s = move(s, `card:${target}`);
    expect(s.cards[copy].copy).toBe('echo.evergreen');
    expect(s.players[0].res.green).toBe(2); // Busker's On Recruit: +2 green
    expect(s.recruits).toBe(1);
  });
});
