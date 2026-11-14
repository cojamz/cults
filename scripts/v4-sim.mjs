// Bot-vs-bot simulation for quick balance reads. Usage: npm run sim:v4 -- [games=300] [players=4]
// The table has one sphere per player (the engine's default for that seat count: defaultQuadrants).
import { createGame, applyMove, chooseBotMove, followers, memberCount, defaultQuadrants } from '../src/engine/v4/index.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { deckRules } from './lib/deck-choice.mjs';
const DECK_RULES = deckRules();

const games = Number(process.argv[2] || 300), n = Number(process.argv[3] || 4);
const stats = { wins: Array(n).fill(0), followers: [], members: [], leftoverGold: [], moves: [], startPicks: {} };
for (let g = 1; g <= games; g++) {
  const rand = seededRandom(g * 9973);
  let s = createGame({ seats: Array.from({ length: n }, () => ({ kind: 'bot' })), seed: g, rules: DECK_RULES });
  while (!s.over) s = applyMove(s, chooseBotMove(s, rand));
  stats.wins[s.ranking[0]]++;
  { const wm = memberCount(s, s.players[s.ranking[0]]); stats.winM = (stats.winM || 0) + wm; stats.small = (stats.small || 0) + (wm <= 5 ? 1 : 0); }
  for (const p of s.players) {
    stats.followers.push(followers(s, p)); stats.members.push(memberCount(s, p)); stats.leftoverGold.push(p.res.gold);
  }
  stats.moves.push(s.moves);
}
const avg = a => (a.reduce((x, y) => x + y, 0) / a.length).toFixed(1);
console.log(`${games} games, ${n} players, table ${defaultQuadrants(n).join(',')}`);
console.log(`wins by seat: ${stats.wins.join(' / ')}`);
console.log(`winners with 5 or fewer members: ${(100 * stats.small / games).toFixed(0)}% of games (bar: at least 20%); winner's members avg ${(stats.winM / games).toFixed(1)}`);
console.log(`avg followers ${avg(stats.followers)} · avg members ${avg(stats.members)} · avg leftover gold ${avg(stats.leftoverGold)} · avg moves ${avg(stats.moves)}`);
