// Action balance harness, games (Cory, Nov 11: "we need to balance test the actions is one thrust that you need to set
// up a harness for ... see if they all make sense once all those actions are ready"). Plays Hard 4-player games on
// today's game (10-card deck, By color contests, the Test version's members, each space's +1 once a game) with tables
// of 4 random 2.0 colors, and writes one JSON line per game: every placement with what was open, what it earned the
// placer and the rivals until that player's next placement, and how the game ended.
// Usage: DECK=10 [MEMBERS_OUT=echo.dejavu MEMBERS_IN=echo.ensemble] [PLUS1=game|every] [LEVEL=hard] [BUDGET=40]
//        node scripts/actions/play.mjs <firstGame> <count> <out.jsonl>
// Value of a turn = followers + resources + members gained at their price (members lost count against), so a plain
// paid recruit nets about 0 and what's left is what the space added. Turn order (going last, extra turns, skips, an
// extra minion) and a member's later effects are not in it: read those from pick rates and win lift.
import { appendFileSync } from 'node:fs';
import { createGame, applyMove, followers, memberCount, allQuadrantIds, actionAt, memberPrice, cardDef } from '../../src/engine/v4/index.js';
import { chooseBotMove } from '../../src/engine/v4/bots.js';
import { seededRandom } from '../../src/engine/v4/rng.js';
import { sphereVersion } from '../../src/v4/tables.js';
import { deckRules } from '../lib/deck-choice.mjs';

const list = v => (v ? String(v).split(',').map(x => x.trim()).filter(Boolean) : undefined);
const RULES = {
  ...deckRules(), roundDecks: 2, contests: process.env.CONTESTS || 'byColor',
  plus1: process.env.PLUS1 === 'every' ? '' : 'game', // the setup default since v0.99.723 (Cory, Nov 11: "i like one per game")
  ...(process.env.MEMBERS_OUT ? { membersOut: list(process.env.MEMBERS_OUT) } : {}),
  ...(process.env.MEMBERS_IN ? { membersIn: list(process.env.MEMBERS_IN) } : {}),
};
const [first, count, out] = [Number(process.argv[2] || 1), Number(process.argv[3] || 1), process.argv[4] || 'actions.jsonl'];
const level = process.env.LEVEL || 'hard';
const COLORS = list(process.env.COLORS) || allQuadrantIds().filter(q => sphereVersion(q) === '2.0');
const sum = o => Object.values(o || {}).reduce((a, b) => a + (b || 0), 0);

for (let g = first; g < first + count; g++) {
  const rand = seededRandom(g * 7717 + 3);
  const pool = [...COLORS], quads = [];
  while (quads.length < 4) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  let s = createGame({ seats: Array.from({ length: 4 }, () => ({ kind: 'bot' })), seed: g, quadrants: quads, rules: RULES });
  const price = {}; // member value: its price to a player with no discounts, fixed per card for the game
  const val = (st, uid) => {
    const id = st.cards[uid]?.def;
    if (!(id in price)) { try { price[id] = memberPrice(st, { ...st.players[0], discount: 0, members: [] }, uid).total; } catch { price[id] = 0; } }
    return price[id];
  };
  const worth = (st, p) => followers(st, p) + sum(p.res) + p.members.reduce((a, u) => a + val(st, u), 0) - p.members.length; // a member's own follower is in followers()
  const placements = [], open = {}; // open: index of each player's placement still collecting its turn's gains
  const close = (pl, st) => {
    const k = open[pl];
    if (k == null) return;
    const pc = placements[k], now = st.players.map(p => worth(st, p));
    pc.value = now[pl] - pc.w0[pl];
    pc.fol = followers(st, st.players[pl]) - pc.f0;
    pc.rivals = now.reduce((a, v, i) => a + (i === pl ? 0 : v - pc.w0[i]), 0);
    delete pc.w0; delete pc.f0;
    open[pl] = null;
  };
  // a turn's window: from its placement to the next placement by anyone (its buy and any rival choices inside it).
  // The move that ends a round closes it on the table before that move, so round-end contests never count for a space
  // (that move is a buy or a pass, which nets about 0 here).
  // each color's resources each player gained over the game (Cory, Nov 11, on Red: "we need to consider how to get
  // more red resources. Maybe it doesnt matter? lets just try it and see what the testing says")
  const gained = s.players.map(() => ({})), left = s.players.map(() => ({}));
  let guard = 0, round = s.round, pick = 0;
  while (!s.over && guard++ < 20000) {
    const pl = s.pending.player;
    const m = chooseBotMove(s, rand, level === 'hard' ? { level, maxMs: Infinity, ...(process.env.BUDGET ? { budget: Number(process.env.BUDGET) } : {}) } : { level });
    if (typeof m.option === 'string' && /^slot:/.test(m.option)) {
      for (const k in open) close(Number(k), s);
      const opts = (s.pending.options || []).filter(o => o.kind === 'slot');
      const name = o => `${s.quadrants[o.q]}:${actionAt(s, o.q, o.i).key}`;
      const o = opts.find(x => x.id === m.option);
      if (s.round !== round) { round = s.round; pick = 0; }
      const a = o ? actionAt(s, o.q, o.i) : null;
      placements.push({
        p: pl, r: s.round, n: ++pick, space: o ? name(o) : m.option, name: a?.name, ring: a?.ring,
        open: [...new Set(opts.map(name))], w0: s.players.map(p => worth(s, p)), f0: followers(s, s.players[pl]),
      });
      open[pl] = placements.length - 1;
    }
    const prev = s;
    s = applyMove(s, m);
    // members leaving a cult (Cory, Nov 11: "how many get removed/discarded on average? from cults, not from the shop"),
    // credited to the space whose turn it is (round end, for Borrow's member and the like)
    const why = s.round !== prev.round || s.over ? 'round end' : placements.length ? placements[placements.length - 1].name || '?' : 'setup';
    s.players.forEach((x, i) => { for (const u of prev.players[i].members) if (!x.members.includes(u)) left[i][why] = (left[i][why] || 0) + 1; });
    s.players.forEach((x, i) => { for (const c in x.res) { const d = (x.res[c] || 0) - (prev.players[i].res[c] || 0); if (d > 0) gained[i][c] = (gained[i][c] || 0) + d; } });
    if (s.round !== prev.round || s.over) for (const k in open) close(Number(k), prev);
  }
  for (const k in open) close(Number(k), s);
  const fol = s.players.map(x => followers(s, x)), top = Math.max(...fol);
  appendFileSync(out, JSON.stringify({
    game: g, table: quads, over: !!s.over, rules: { plus1: RULES.plus1, membersOut: RULES.membersOut, membersIn: RULES.membersIn },
    players: s.players.map((x, i) => ({
      followers: fol[i], win: fol[i] === top, cards: x.members.length, seat: memberCount(s, x),
      cloak: x.artifact != null ? cardDef(s, x.artifact)?.quadrant || null : null,
      members: x.members.map(u => s.cards[u]?.def), gained: gained[i], left: left[i],
    })),
    placements,
  }) + '\n');
}
