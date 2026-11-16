// Engine speed bench (engineering, not balance): plays fixed seeded games and prints the time and a fingerprint of
// every game, so a speed change can prove it played the very same games. Usage:
//   node scripts/v4-bench.mjs [--normal=40] [--mixed=12] [--hard=4] [--players=4] [--deck=10] [--json=out.json]
// Same fingerprint before and after = same games. Hard runs with maxMs: Infinity (deterministic, as sims do).
import { createHash } from 'node:crypto';
import { writeFileSync } from 'node:fs';
import { createGame, applyMove, chooseBotMove, setBotLevels, allQuadrantIds } from '../src/engine/v4/index.js';
import { seededRandom } from '../src/engine/v4/rng.js';

const arg = (k, d) => { const a = process.argv.find(x => x.startsWith(`--${k}=`)); return a ? a.split('=')[1] : d; };
const M = Number(arg('mixed', 12));
const N = Number(arg('normal', 40)), H = Number(arg('hard', 4)), P = Number(arg('players', 4)), deck = Number(arg('deck', 10));

// mixed tables (any four colors, sometimes two rings of one color): a default-table-only bench missed a hang there (Nov 3)
const mixed = seed => { const r = seededRandom(seed); const ids = [...allQuadrantIds()]; for (let i = ids.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [ids[i], ids[j]] = [ids[j], ids[i]]; } return ids.slice(0, P); };
function play(seed, level, mix = false) {
  const rand = seededRandom(seed * 9973);
  let s = createGame({ seats: Array.from({ length: P }, () => ({ kind: 'bot' })), seed, rules: { deck }, ...(mix ? { quadrants: mixed(seed) } : {}) });
  setBotLevels(s, Array(P).fill(level));
  const h = createHash('sha1');
  let moves = 0;
  while (!s.over) {
    const m = chooseBotMove(s, rand, level === 'hard' ? { maxMs: Infinity } : {});
    h.update(`${m.player}:${m.option};`);
    s = applyMove(s, m);
    moves++;
  }
  h.update(JSON.stringify(s.ranking) + JSON.stringify(s.players.map(p => p.res)));
  return { moves, fp: h.digest('hex').slice(0, 12) };
}

function run(level, count, base, mix = false) {
  const t0 = performance.now(); let moves = 0; const all = createHash('sha1'); const fps = [];
  for (let g = 1; g <= count; g++) { const r = play(base + g, level, mix); moves += r.moves; all.update(r.fp); fps.push(r.fp); }
  const ms = performance.now() - t0;
  return { level: mix ? `${level}/mixed` : level, games: count, ms: Math.round(ms), perGame: Math.round(ms / count), perMove: +(ms / moves).toFixed(3), fingerprint: all.digest('hex').slice(0, 16), fps };
}

const out = [];
if (N) out.push(run('normal', N, 0));
if (M) out.push(run('normal', M, 2000, true));
if (H) out.push(run('hard', H, 1000));
for (const r of out) console.log(`${r.level.padEnd(12)} ${r.games} games  ${r.ms} ms  (${r.perGame} ms/game, ${r.perMove} ms/move)  fingerprint ${r.fingerprint}`);
const j = arg('json'); if (j) writeFileSync(j, JSON.stringify(out, null, 1));
