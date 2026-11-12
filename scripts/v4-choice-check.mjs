// One choice, checked (bot audit, Nov 12; Cory: Test Drive "seems super strong ... I bet bots are picking terrible
// options"). Plays Normal-bot games with a given color at the table; at every pending choice whose prompt matches
// --prompt, plays each option out to the end of the game with Normal bots on the same seeds and compares the bots' pick
// with the best option found. Usage: DECK=10 FORCE=market node scripts/v4-choice-check.mjs --prompt="Test Drive" [--games=10] [--seeds=12]
import { createGame, applyMove, followers, allQuadrantIds } from '../src/engine/v4/index.js';
import { chooseBotMove, chooseNormalMove, botInternals } from '../src/engine/v4/bots.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { sphereVersion } from '../src/v4/tables.js';
import { deckRules } from './lib/deck-choice.mjs';
const arg = (k, d) => { const a = process.argv.find(x => x.startsWith(`--${k}=`)); return a ? a.slice(k.length + 3) : d; };
const PROMPT = arg('prompt', 'Test Drive'), GAMES = Number(arg('games', 10)), SEEDS = Number(arg('seeds', 12)), LEVEL = arg('level', 'normal');
const margin = (st, id) => followers(st, st.players[id]) - Math.max(...st.players.filter(p => p.id !== id).map(p => followers(st, p)));
const play = (st, me, option, seed) => { const r = seededRandom(seed); let x = applyMove(st, { player: me, option }); for (let k = 0; !x.over && k < 3000; k++) x = applyMove(x, chooseNormalMove(x, r)); return margin(x, me); };
let n = 0, same = 0, lostSum = 0;
const rows = [];
for (let g = 1; g <= GAMES; g++) {
  const rand = seededRandom(g * 131 + 5);
  const pool = allQuadrantIds().filter(q => sphereVersion(q) === '2.0'), quads = (process.env.FORCE || '').split(',').filter(Boolean);
  for (const q of quads) pool.splice(pool.indexOf(q), 1);
  while (quads.length < 4) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  let s = createGame({ seats: [0, 1, 2, 3].map(() => ({ kind: 'bot' })), seed: g, quadrants: quads, rules: { ...deckRules(), roundDecks: 2, contests: 'byColor', plus1: 'game' } });
  for (let k = 0; !s.over && k < 3000; k++) {
    const m = chooseBotMove(s, rand, LEVEL === 'hard' ? { level: 'hard', budget: 40, maxMs: Infinity } : { level: LEVEL });
    const pend = s.pending;
    if (pend.kind === 'choose' && (pend.prompt || '').includes(PROMPT) && pend.options.length > 1) {
      const vals = pend.options.map(o => { let t = 0; for (let j = 0; j < SEEDS; j++) t += play(s, pend.player, o.id, 7000 + j * 17); return { o, v: t / SEEDS }; });
      const best = vals.reduce((a, b) => (b.v > a.v ? b : a)), mine = vals.find(x => x.o.id === m.option);
      n++; if (best.o.id === m.option) same++; lostSum += best.v - mine.v;
      if (process.argv.includes('--detail')) {
        const quick = botInternals.rateOnCopy(s, pend, pend.options);
        rows.push(...vals.sort((a, b) => b.v - a.v).map(x => `    ${x.o.id === m.option ? '*' : ' '} ${x.o.label.slice(0, 60).padEnd(60)} played ${x.v.toFixed(1).padStart(6)}  bot read ${(quick.find(q => q.o.id === x.o.id)?.v ?? NaN).toFixed(1)}`));
      }
      rows.push(`round ${s.round}: picked ${mine.o.label.slice(0, 70)} (${mine.v.toFixed(1)}); best ${best.o.label.slice(0, 70)} (${best.v.toFixed(1)})`);
    }
    s = applyMove(s, m);
  }
  process.stderr.write(`game ${g}: ${n} choices so far\n`);
}
console.log(`${PROMPT}: ${n} choices; the bot's pick was the best played-out option ${same} times; it lost ${(lostSum / Math.max(1, n)).toFixed(2)} followers a choice on average against the best.`);
for (const r of rows) console.log('- ' + r);
