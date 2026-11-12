// AI-player audit (Cory, Nov 11: "your AI players seem legit terrible you should audit them"). Replays a finished
// AI-player game (scripts/v4-expert.mjs folder) and, at every placement and recruit, rates every option the way the
// bots do (scoreOptions: expected final follower margin), then plays the AI's choice and the bots' best out to the
// end of the game with Normal bots on the same seeds. Lists the moves where the AI's choice did worse by more than
// --gap followers, with the AI's own reasoning beside it, so a reader can sort the misplays by cause.
// Usage: node scripts/v4-ai-audit.mjs <game dir> [--gap=3] [--seeds=8] [--out=file.md]
import fs from 'node:fs';
import { createGame, applyMove, followers } from '../src/engine/v4/index.js';
import { scoreOptions, chooseNormalMove } from '../src/engine/v4/bots.js';
import { seededRandom } from '../src/engine/v4/rng.js';

const dir = process.argv[2];
const arg = (k, d) => { const a = process.argv.find(x => x.startsWith(`--${k}=`)); return a ? a.slice(k.length + 3) : d; };
const GAP = Number(arg('gap', 3)), SEEDS = Number(arg('seeds', 8)), OUT = arg('out', '');
const meta = JSON.parse(fs.readFileSync(`${dir}/meta.json`, 'utf8'));
const moves = fs.readFileSync(`${dir}/events.jsonl`, 'utf8').trim().split('\n').map(l => JSON.parse(l)).filter(e => e.type === 'move');
let s = createGame({ seats: meta.names.map(name => ({ name, kind: 'human' })), seed: meta.seed, quadrants: meta.colors, rules: meta.rules || { deck: 10 } });

const margin = (st, id) => followers(st, st.players[id]) - Math.max(...st.players.filter(p => p.id !== id).map(p => followers(st, p)));
const playout = (st, me, option, seed) => {
  const r = seededRandom(seed);
  let x = applyMove(st, { player: me, option });
  for (let k = 0; !x.over && k < 3000; k++) x = applyMove(x, chooseNormalMove(x, r));
  return margin(x, me);
};
const label = (st, id) => (st.pending.options.find(o => o.id === id) || {}).label || id;

const rows = [];
let looked = 0;
for (const e of moves) {
  const pend = s.pending;
  if (pend && (pend.kind === 'place' || pend.kind === 'buy') && pend.player === e.seat && pend.options.length > 1) {
    looked++;
    const ranked = scoreOptions(s, () => 0);
    const best = ranked[0], mine = ranked.find(r => r.o.id === e.option);
    if (best && mine && best.o.id !== e.option && best.v - mine.v > GAP / 2) {
      let a = 0, b = 0;
      for (let k = 0; k < SEEDS; k++) { const seed = 1000 + k * 7919; a += playout(s, e.seat, e.option, seed); b += playout(s, e.seat, best.o.id, seed); }
      const lost = (b - a) / SEEDS;
      if (lost > GAP) rows.push({ who: meta.names[e.seat], round: s.round, kind: pend.kind, chose: label(s, e.option), best: label(s, best.o.id), quick: +(best.v - mine.v).toFixed(1), lost: +lost.toFixed(1), why: (e.think || '').replace(/\s+/g, ' ') });
    }
  }
  s = applyMove(s, { player: e.seat, option: e.option });
}
const lines = [`# AI-player audit: ${dir.split('/').pop()}`, '', `${meta.names.join(', ')} on ${meta.colors.join(', ')}. ${looked} placements and recruits checked; ${rows.length} lost more than ${GAP} followers against the bots' best, played to the end of the game with Normal bots (${SEEDS} seeds each).`, ''];
for (const r of rows.sort((x, y) => y.lost - x.lost)) lines.push(`- **${r.who}**, round ${r.round} ${r.kind}: chose ${r.chose}; best ${r.best}; lost ${r.lost} (quick read ${r.quick}).`, `  - Their reason: ${r.why}`);
const text = lines.join('\n') + '\n';
if (OUT) fs.writeFileSync(OUT, text);
process.stdout.write(text);
