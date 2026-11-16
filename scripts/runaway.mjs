// Runaway leader read (Cory, Nov 9: "no member movement… hard to catch up to a guy who quickly got 5 or 6 cards").
// Usage: DECK=10 node scripts/runaway.mjs <games> <level> <colors,comma> [test] [rich]
// Prints: how often the member leader after round I / II wins, how often anyone's members change hands, final spread.
import { createGame, applyMove, chooseBotMove, followers, memberCount } from '../src/engine/v4/index.js';
import { setBotLevels } from '../src/engine/v4/bots.js';
import { seededRandom } from '../src/engine/v4/rng.js';
const [games = 100, level = 'hard', cols = 'market,silver,echo', ...flags] = process.argv.slice(2);
const quadrants = cols.split(','), n = quadrants.length;
const rules = { deck: 10, contests: 'byColor', ...(flags.includes('test') ? { testSet: true } : {}), ...(flags.includes('rich') ? { econ: 'rich' } : {}) };
const st = { g: 0, r1lead: 0, r1leadWin: 0, r2lead: 0, r2leadWin: 0, f2lead: 0, f2leadWin: 0, moves: 0, gamesWithMove: 0, r1gap: 0, r1max: 0, big5: 0, big5win: 0, winM: 0, small: 0, finalGap: 0 };
const uniqLead = vals => { const m = Math.max(...vals); return vals.filter(v => v === m).length === 1 ? vals.indexOf(m) : -1; };
for (let g = 1; g <= +games; g++) {
  const rand = seededRandom(g * 7919 + 13);
  let s = createGame({ seats: Array.from({ length: n }, () => ({ kind: 'bot' })), seed: (+process.env.SEED0 || 5000) + g, quadrants, rules });
  setBotLevels(s, Array(n).fill(level));
  let round = s.round, snap = {}, owned = s.players.map(p => new Set(p.members)), moved = 0;
  while (!s.over) {
    s = applyMove(s, chooseBotMove(s, rand));
    s.players.forEach((p, i) => { for (const u of owned[i]) if (!p.members.includes(u)) { moved++; const to = s.players.findIndex(q => q.members.includes(u)); const k = to >= 0 ? 'toRival' : s.discard.includes(u) ? 'toDiscard' : s.shop.includes(u) ? 'toShop' : 'other'; st[k] = (st[k] || 0) + 1; } owned[i] = new Set(p.members); });
    if (s.round !== round) { snap[round] = { m: s.players.map(p => memberCount(s, p)), f: s.players.map(p => followers(s, p)) }; round = s.round; }
  }
  const w = s.ranking[0]; st.g++;
  const r1 = snap[1] || snap[0], r2 = snap[2];
  if (r1) { const l = uniqLead(r1.m); if (l >= 0) { st.r1lead++; if (l === w) st.r1leadWin++; } const so = [...r1.m].sort((a, b) => b - a); st.r1gap += so[0] - so[1]; st.r1max += so[0]; if (so[0] >= 5) { st.big5++; if (r1.m.indexOf(so[0]) === w) st.big5win++; } }
  if (r2) { const l = uniqLead(r2.m); if (l >= 0) { st.r2lead++; if (l === w) st.r2leadWin++; } const lf = uniqLead(r2.f); if (lf >= 0) { st.f2lead++; if (lf === w) st.f2leadWin++; } }
  st.moves += moved; if (moved) st.gamesWithMove++;
  const wm = memberCount(s, s.players[w]); st.winM += wm; if (wm <= 5) st.small++;
  const fs = s.players.map(p => followers(s, p)).sort((a, b) => b - a); st.finalGap += fs[0] - fs[1];
}
const pc = (a, b) => b ? `${Math.round(100 * a / b)}%` : 'n/a';
console.log(JSON.stringify({ table: cols, level, flags: flags.join('+') || 'live', games: st.g, par: pc(1, n),
  r1MemberLeaderWins: pc(st.r1leadWin, st.r1lead), r2MemberLeaderWins: pc(st.r2leadWin, st.r2lead), r2FollowerLeaderWins: pc(st.f2leadWin, st.f2lead),
  r1TopMembers: (st.r1max / st.g).toFixed(1), r1GapTo2nd: (st.r1gap / st.g).toFixed(1), r1Had5plus: pc(st.big5, st.g), r1Had5plusWins: pc(st.big5win, st.big5),
  memberMovesPerGame: (st.moves / st.g).toFixed(2), gamesWithAnyMove: pc(st.gamesWithMove, st.g), winnerMembers: (st.winM / st.g).toFixed(1), winnersWith5orFewer: pc(st.small, st.g), finalGap: (st.finalGap / st.g).toFixed(1), where: { toRival: st.toRival || 0, toDiscard: st.toDiscard || 0, toShop: st.toShop || 0, other: st.other || 0 } }));
