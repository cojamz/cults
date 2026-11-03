// Quick check of trial fixes for the By color contests (Green ties, White staying with one player).
// DECK=10 node scripts/v4-contest-fix.mjs <games> '<contestFix json>'
import { createGame, applyMove, followers, allQuadrantIds } from '../src/engine/v4/index.js';
import { chooseBotMove } from '../src/engine/v4/bots.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { deckRules } from './lib/deck-choice.mjs';
const N = Number(process.argv[2] || 40), fix = JSON.parse(process.argv[3] || '{}');
const rules = { ...deckRules(), contests: 'byColor', contestFix: fix };
const st = { g: { ends: 0, split: 0, none: 0 }, w: { ends: 0, split: 0, none: 0, sweep: 0, sweepWin: 0, same2: 0 }, games: 0 };
for (let g = 1; g <= N; g++) {
  const rand = seededRandom(1000 + g);
  const pool = allQuadrantIds().filter(q => !['echo', 'trading'].includes(q)), quads = ['echo', 'trading'];
  while (quads.length < 4) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  let s = createGame({ seats: Array.from({ length: 4 }, () => ({ kind: 'bot' })), seed: g, quadrants: quads, rules });
  let k = 0; while (!s.over && k++ < 5000) s = applyMove(s, chooseBotMove(s, rand));
  if (!s.over) continue;
  st.games++;
  const res = qid => s.contests.map(c => c.results.find(r => r.qid === qid).winners);
  for (const [key, qid] of [['g', 'echo'], ['w', 'trading']]) for (const w of res(qid)) { st[key].ends++; if (w.length > 1) st[key].split++; if (!w.length) st[key].none++; }
  const w = res('trading');
  if (w.every(x => x.length === 1 && x[0] === w[0][0])) {
    st.w.sweep++;
    const top = Math.max(...s.players.map(p => p.final?.total ?? followers(s, p)));
    const scores = s.players.map(p => p.final?.total ?? followers(s, p));
    if (scores[w[0][0]] === top) st.w.sweepWin++;
  }
  if (w[1].length === 1 && w[0].length === 1 && w[0][0] === w[1][0]) st.w.same2++;
}
const pct = (a, b) => `${Math.round(100 * a / Math.max(1, b))}%`;
console.log(JSON.stringify(fix), `games ${st.games}`,
  `| Green: split ${pct(st.g.split, st.g.ends)}, nobody ${pct(st.g.none, st.g.ends)}`,
  `| White: split ${pct(st.w.split, st.w.ends)}, nobody ${pct(st.w.none, st.w.ends)}, same player all 3 rounds ${pct(st.w.sweep, st.games)} (won ${st.w.sweepWin}/${st.w.sweep})`);
