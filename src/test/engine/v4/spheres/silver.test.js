// @vitest-environment node
// Silver: every action and every member with exact numbers, plus 200 seeded bot games on a Silver table.
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createGame, applyMove, resume, followers, memberCount } from '../../../../engine/v4/core.js';
import { chooseBotMove } from '../../../../engine/v4/bots.js';
import { seededRandom } from '../../../../engine/v4/rng.js';
import { registerQuadrant } from '../../../../engine/v4/content/index.js';
import silver from '../../../../engine/v4/content/silver.js';
import { take, move, uidOf, ids, pinCosts, TEST_COSTS } from '../helpers.js';
import { checkInvariants } from '../fuzz-runner.js';
import { games } from '../budget.js';

// seeded games in the table block below: a game count, not a time budget (budget.js). The verdict plays all 200 here,
// not half: the block asserts a rate (over 6 Silver takes a game), and a rate needs its whole sample. The fast gate 20.
const GAMES = games(200, 20, 200);

registerQuadrant(silver);
const Q = ['gold', 'red', 'blue', 'silver'];

// Costs these tests are written against; repricing the real cards doesn't break them.
const SILVER_TEST_COSTS = {
  'silver.guest': [1, 0], 'silver.benefactor': [1, 1], 'silver.caterer': [1, 1], 'silver.majordomo': [1, 1],
  'silver.silversmith': [1, 1], 'silver.steward': [1, 1], 'silver.retinue': [1, 1], 'silver.revelers': [2, 0],
  'silver.heir': [1, 1], 'silver.spoon': [2, 0], 'silver.toastmaster': [3, 2], 'silver.gala': [2, 2],
  'silver.dowager': [2, 2], 'silver.grandhost': [3, 2], 'silver.saint': [3, 2],
};
let restore;
beforeEach(() => { restore = pinCosts({ ...TEST_COSTS, ...SILVER_TEST_COSTS }); });
afterEach(() => restore());

// The shared scene() helper always builds the default table, so Silver tests build their own.
function scene({ n = 3, seed = 7, round = 1, res = [], members = [], shop = null, bonus = [], turn = 0, queue = null } = {}) {
  const s = createGame({ seats: Array.from({ length: n }, (_, i) => ({ name: `P${i + 1}`, kind: 'bot' })), seed, quadrants: Q });
  s.queue = []; s.pending = null; s.round = round; s.slots = {}; s.order = []; s.log = [];
  s.players.forEach((p, i) => {
    for (const r of s.resources) p.res[r] = 0;
    Object.assign(p.res, res[i] || {});
    p.bonus = bonus[i] || 0; p.discount = 0; p.left = 3;
  });
  s.pile = [...s.shop, ...s.pile]; s.shop = [];
  const grab = def => { const k = s.pile.findIndex(u => s.cards[u].def === def); if (k < 0) throw new Error(`no ${def}`); return s.pile.splice(k, 1)[0]; };
  members.forEach((list, i) => { for (const d of list || []) s.players[i].members.push(grab(d)); });
  if (shop) for (const d of shop) s.shop.push(grab(d));
  while (s.shop.length < 6 && s.pile.length) s.shop.push(s.pile.shift());
  s.queue = queue || [{ t: 'turn', p: turn }];
  return resume(s);
}
const R = (s, i = 0) => s.players[i].res;
const Z = { gold: 0, red: 0, blue: 0, silver: 0 };
const SHOP = ['gold.midas', 'gold.jackpot', 'gold.tycoon', 'red.mentor', 'red.proselytizer', 'red.bigfamily'];

describe('Silver scoring: most silver', () => {
  it('the most silver at round end takes the ring; ties split the prize; none scores nothing', () => {
    let s = scene({ res: [{ silver: 3 }, { silver: 2 }, { gold: 9 }], queue: [{ t: 'endRound' }] });
    expect(s.log.at(-1)).toContain('Most silver: P1 +4');
    s = scene({ res: [{ silver: 3 }, { silver: 3 }], queue: [{ t: 'endRound' }] });
    expect(s.log.at(-1)).toContain('Most silver: P1 & P2 +2');
    s = scene({ res: [{ gold: 1 }], queue: [{ t: 'endRound' }] });
    expect(s.log.at(-1)).not.toContain('Most silver');
  });
});

describe('Silver actions', () => {
  it('Toast: +3 silver per round number, everyone else +1 / +2 / +3 silver', () => {
    let s = take(scene({ res: [{}, { gold: 2 }] }), 'silver.toast');
    expect(R(s)).toEqual({ ...Z, silver: 3 });
    expect(R(s, 1)).toEqual({ ...Z, gold: 2, silver: 1 });
    expect(R(s, 2)).toEqual({ ...Z, silver: 1 });
    s = take(scene({ round: 3 }), 'silver.toast');
    expect(R(s).silver).toBe(9);
    expect(R(s, 1).silver).toBe(3);
  });

  it('rings: Polish and Party Gifts open in round I, Party Favors and Sweet Talk in round II, Largesse in round III', () => {
    const names = s => s.pending.options.map(o => o.label);
    expect(names(scene())).toEqual(expect.arrayContaining(['Toast', 'Polish', 'Party Gifts']));
    expect(names(scene())).not.toContain('Sweet Talk');
    expect(names(scene({ round: 2 }))).toEqual(expect.arrayContaining(['Party Favors', 'Sweet Talk']));
    expect(names(scene({ round: 2 }))).not.toContain('Largesse');
    expect(names(scene({ round: 3 }))).toContain('Largesse');
  });
});

describe('Silver members', () => {
  it('Guest: whenever another player gives you something, +1 more of it (not on your own gains)', () => {
    let s = take(scene({ members: [[], ['silver.guest']] }), 'silver.toast');
    expect(R(s, 1).silver).toBe(2);
    expect(R(s, 2).silver).toBe(1);
    s = move(move(take(scene({ members: [[], ['silver.guest']] }), 'silver.partygifts'), 'player:1'), 'done');
    expect(R(s, 1).silver).toBe(2);
    s = take(scene({ members: [['silver.guest']] }), 'silver.toast');
    expect(R(s).silver).toBe(3);
  });

  it('Benefactor: at round start +3 silver, and the rival you pick gets 1 silver', () => {
    let s = scene({ members: [['silver.benefactor']], queue: [{ t: 'round', r: 2 }] });
    expect(R(s).silver).toBe(3);
    expect(ids(s)).toEqual(['player:1', 'player:2']);
    s = move(s, 'player:2');
    expect(R(s, 2).silver).toBe(1);
    expect(R(s, 1).silver).toBe(0);
  });

  it('Caterer: whenever you give to other players, +1 silver (once per gift, not per player)', () => {
    let s = take(scene({ members: [['silver.caterer']] }), 'silver.toast');
    expect(R(s).silver).toBe(5); // Caterer +2 (Nov 1 balance)
    s = move(move(move(take(scene({ members: [['silver.caterer']] }), 'silver.partygifts'), 'player:1'), 'player:2'), 'done');
    expect(R(s).silver).toBe(2);
  });

  it('Majordomo: whenever you take a Silver space, +2 silver (not elsewhere)', () => {
    let s = take(scene({ members: [['silver.majordomo']] }), 'silver.toast');
    expect(R(s).silver).toBe(5);
    s = take(scene({ members: [['silver.majordomo']] }), 'gold.rush');
    expect(R(s).silver).toBe(0);
  });

  // rewards not hosting (dead-window audit, 2026-10-14)
  it('Silversmith: whenever a rival takes a Silver space, +1 silver (not your own)', () => {
    let s = take(scene({ members: [[], ['silver.silversmith']] }), 'silver.toast');
    expect([R(s, 1).silver, R(s, 2).silver]).toEqual([2, 1]);
    s = take(scene({ members: [['silver.silversmith']] }), 'silver.toast');
    expect(R(s).silver).toBe(3);
  });

  it('Steward: at round start +1 silver per 3 silver you hold', () => {
    const s = scene({ res: [{ silver: 7 }], members: [['silver.steward']], queue: [{ t: 'round', r: 2 }] });
    expect(R(s).silver).toBe(9);
  });

  it('Retinue: worth 3 followers, 3 members; when recruited, everyone else +1 silver', () => {
    let s = scene({ res: [{ silver: 1, gold: 1 }], shop: ['silver.retinue'], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `card:${uidOf(s, 'silver.retinue', 'shop')}`);
    expect(memberCount(s, s.players[0])).toBe(3);
    expect(followers(s, s.players[0])).toBe(4);
    expect(R(s, 1).silver).toBe(1);
    expect(R(s, 2).silver).toBe(1);
  });

  // Cory (2026-10-14): Feast Hall became Revelers
  it('Revelers: counts as 3 members, no silver', () => {
    let s = scene({ round: 3, res: [{ silver: 2 }], shop: ['silver.revelers'], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `card:${uidOf(s, 'silver.revelers', 'shop')}`);
    expect(memberCount(s, s.players[0])).toBe(3);
    expect(R(s).silver).toBe(0);
  });

  it('Heir: at the start of round III, +1 silver per member (nothing in round II)', () => {
    let s = scene({ members: [['silver.heir', 'silver.retinue', 'gold.banker']], queue: [{ t: 'round', r: 3 }] });
    expect(R(s).silver).toBe(5); // Heir 1 + Retinue 3 + Banker 1 (member count = follower count, Nov 1)
    s = scene({ members: [['silver.heir']], queue: [{ t: 'round', r: 2 }] });
    expect(R(s).silver).toBe(0);
  });

  it('Upstart: when recruited, gain half the silver of the richest rival (rounded up)', () => {
    let s = scene({ res: [{ silver: 2 }, { silver: 5 }, { silver: 3 }], shop: ['silver.spoon'], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `card:${uidOf(s, 'silver.spoon', 'shop')}`);
    expect(R(s).silver).toBe(2 - 2 + 3); // paid 2 silver, then half of 5, rounded up
  });

  it('Toastmaster: whenever you take a Silver space, +1 follower', () => {
    let s = take(scene({ members: [['silver.toastmaster']] }), 'silver.toast');
    expect(s.players[0].bonus).toBe(1);
    s = take(scene({ members: [['silver.toastmaster']] }), 'gold.rush');
    expect(s.players[0].bonus).toBe(0);
  });

  it('Debutantes: once per game, double your silver and everyone else +2 silver', () => {
    let s = scene({ res: [{ silver: 5 }], members: [['silver.gala']], queue: [{ t: 'buy', p: 0 }] });
    const u = uidOf(s, 'silver.gala', 0);
    s = move(s, `use:${u}`);
    expect(R(s).silver).toBe(10);
    expect(R(s, 1).silver).toBe(2);
    expect(ids(s)).not.toContain(`use:${u}`);
  });

  it('Dowager: worth 3 followers, 3 members', () => {
    const s = scene({ members: [['silver.dowager']] });
    expect(followers(s, s.players[0])).toBe(4);
    expect(memberCount(s, s.players[0])).toBe(3);
  });

  it('Grand Host: silver from Silver spaces is doubled; gifts and other spaces are not', () => {
    let s = take(scene({ round: 2, members: [['silver.grandhost']] }), 'silver.toast');
    expect(R(s).silver).toBe(12);
    expect(R(s, 1).silver).toBe(2);
    s = take(scene({ round: 2, members: [['silver.grandhost']] }), 'silver.tongue');
    expect(R(s).silver).toBe(6);
    s = take(scene({ members: [['silver.grandhost'], ['silver.guest']] }), 'silver.toast');
    expect(R(s).silver).toBe(6);
  });

  it('Patron Saint: game end +1 follower per 2 silver members in play, anyone’s', () => {
    const s = scene({ members: [['silver.saint', 'gold.banker'], ['silver.caterer', 'silver.heir'], ['silver.steward']], queue: [{ t: 'finish' }] });
    // Saint, Caterer, Heir, Steward: 4 silver members, so +2
    expect(s.players[0].final.total).toBe(2);
  });
});

describe(`Silver on the table: ${GAMES} seeded bot games`, () => {
  // Played in slices of 25 so each slice gets its own time limit: under the full check's load one 200-game test ran
  // past 10 minutes (Nov 1). Same seeds, same order; the rate is asserted over the whole sample at the end.
  let silverTakes = 0;
  const SLICE = 25;
  for (let from = 1; from <= GAMES; from += SLICE) {
    const to = Math.min(GAMES, from + SLICE - 1);
    it(`games ${from}-${to} finish with no errors and every invariant holds`, () => {
      for (let g = from; g <= to; g++) {
        const n = 2 + (g % 3);
        const rand = seededRandom(g * 31 + 5);
        let s = createGame({ seats: Array.from({ length: n }, () => ({ kind: 'bot' })), seed: g, quadrants: Q });
        let guard = 0;
        while (!s.over) {
          const m = chooseBotMove(s, rand);
          const o = s.pending.options.find(x => x.id === m.option);
          if (o?.kind === 'slot' && o.q === 3) silverTakes++;
          s = applyMove(s, m);
          checkInvariants(s, `silver game ${g}`);
          if (++guard > 1500) throw new Error(`game ${g} did not finish`);
        }
        expect(s.ranking).toHaveLength(n);
      }
    });
  }
  it('Silver takes over 6 a game across the sample', () => {
    expect(silverTakes).toBeGreaterThan(GAMES * 6);
  });
});
