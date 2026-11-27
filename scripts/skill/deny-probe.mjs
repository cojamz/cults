// How often Very Hard's counterplay option (opts.deny) adds a move to the ones it plays out, and how often it then takes it.
// DECK=10 TODAY=1 node scripts/skill/deny-probe.mjs <seed> [--level=hard]
import { createGame, applyMove, followers, memberCount, allQuadrantIds } from '../../src/engine/v4/index.js';
import { chooseBotMove } from '../../src/engine/v4/bots.js';
import { seededRandom } from '../../src/engine/v4/rng.js';
import { sphereVersion } from '../../src/v4/tables.js';
import { deckRules } from '../lib/deck-choice.mjs';
const g = Number(process.argv[2] || 1);
const level = (process.argv.find(a => a.startsWith('--level=')) || '--level=veryhard').slice(8);
const rand = seededRandom(g * 7717 + 3 + 4 * 101);
const pool = allQuadrantIds().filter(q => sphereVersion(q) === '2.0'), quads = [];
while (quads.length < 4) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
let s = createGame({ seats: [0, 1, 2, 3].map(() => ({ kind: 'bot' })), seed: g, quadrants: quads, rules: { ...deckRules(), roundDecks: 2, contests: 'byColor', plus1: 'game' } });
let added = 0, taken = 0, decisions = 0, last = null;
const t0 = Date.now();
while (!s.over) {
  const pl = s.pending.player;
  const opts = { level, maxMs: Infinity };
  if (pl === 0) Object.assign(opts, { deny: true, onDeny: d => { added++; last = d; }, onDecision: d => { decisions++; if (last && d.chosen === last.option) { taken++; console.log(`round ${d.round} ${d.kind}: took ${last.option} (normal ranked it #${last.rank + 1}) to deny P${last.rival}`); } last = null; } });
  s = applyMove(s, chooseBotMove(s, rand, opts));
}
console.log(`seed ${g}: P0 decisions looked ahead ${decisions}, counterplay move added ${added}, taken ${taken}; followers ${s.players.map(p => followers(s, p)).join(' ')}; members ${s.players.map(p => memberCount(s, p)).join(' ')}; ${Math.round((Date.now() - t0) / 1000)}s`);
