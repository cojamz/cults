// Artifact trigger audit: seeded bot games with every artifact on the table, counting how often each artifact pays
// its owner, what set it off (the log line just before), and how often a wider reading of its text would have paid.
//   DECK=10 node scripts/v4-artifact-fires.mjs [games=200] [level=normal] [seats=4]
import { createGame, applyMove, ARTIFACTS } from '../src/engine/v4/core.js';
import { chooseBotMove } from '../src/engine/v4/bots.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { defById } from '../src/engine/v4/content/index.js';
import { deckRules } from './lib/deck-choice.mjs';

const RULES = deckRules();
const games = Number(process.argv[2] || 200), level = process.argv[3] || 'normal', n = Number(process.argv[4] || 4);
const COLORS = ['red', 'echo', 'market', 'thieves', 'purple', 'silver', 'yellow', 'trading'];
const stat = {};
for (let g = 1; g <= games; g++) {
  const rand = seededRandom(g * 7919);
  const pool = [...COLORS], table = [];
  while (table.length < n) table.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  let s = createGame({ seats: Array.from({ length: n }, () => ({ kind: 'bot' })), seed: 5000 + g, quadrants: table, rules: RULES });
  s.players.forEach(p => { p.bot = level; });
  const full = [...s.log];
  let k = 0;
  while (!s.over && k++ < 9000) {
    const len = s.log.length, last = s.log[len - 1];
    s = applyMove(s, chooseBotMove(s, rand));
    full.push(...(s.log.length > len ? s.log.slice(len) : s.log.slice(s.log.lastIndexOf(last) + 1)));
  }
  for (const p of s.players) {
    if (p.artifact === undefined) continue;
    const def = defById(s.cards[p.artifact].def);
    const e = (stat[def.name] ||= { games: 0, fires: 0, zero: 0, made: {}, before: {} });
    e.games++;
    const tag = `${p.name}'s ${def.name}`;
    let f = 0;
    full.forEach((l, i) => {
      if (!l.startsWith(tag)) return;
      f++;
      // what set it off: the nearest earlier line that isn't another card's payout
      let j = i - 1;
      while (j > 0 && /^[^ ]+'s [^:]+: [+−]/.test(full[j])) j--;
      const why = (full[j] || '').replace(/P\d/g, 'P').replace(/\d+/g, '#').slice(0, 70);
      e.before[why] = (e.before[why] || 0) + 1;
    });
    e.fires += f; if (!f) e.zero++;
    for (const [c, v] of Object.entries(s.cards[p.artifact].made || {})) e.made[c] = (e.made[c] || 0) + v;
  }
  // events a wider reading would count
  const w = (stat._wider ||= { refresh: 0, raiders: 0, release: 0, castOut: 0, greyRecruitsByGuestBookOwner: 0 });
  for (const l of full) {
    if (/market refreshes for round/.test(l)) w.refresh++;
    if (/Raiders stole/.test(l)) w.raiders++;
    if (/ released .* to the bottom of the pile/.test(l)) w.release++;
    if (/^P\d sent .* to the bottom of the pile\.$/.test(l)) w.castOut++;
  }
}
console.log(`games ${games}, ${level}, ${n} seats, deck ${RULES.deck || 15}`);
for (const [name, e] of Object.entries(stat)) {
  if (name === '_wider') continue;
  console.log(`\n${name}: held in ${e.games} games, ${(e.fires / e.games).toFixed(1)} payouts a game, never paid in ${e.zero}; made ${Object.entries(e.made).map(([c, v]) => `${(v / e.games).toFixed(1)} ${c}`).join(', ')} a game`);
  Object.entries(e.before).sort((a, b) => b[1] - a[1]).slice(0, 8).forEach(([l, c]) => console.log(`   ${String(c).padStart(4)}  ${l}`));
}
console.log('\nwider readings, per game:', Object.fromEntries(Object.entries(stat._wider).map(([k, v]) => [k, (v / games).toFixed(2)])));
