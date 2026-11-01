// Story source: one game of four bots, every move with what the mover saw, what it weighed and what happened.
// The raw material for a narrated game ("a book with 4 perspectives", Cory, Nov 1). Writes one JSON line per move.
// Usage: DECK=10 LEVEL=veryhard BOTOPTS='{"crn":true,"halving":true,"candidates":6,"window":6,"budget":900}' \
//   node scripts/v4-story.mjs <game#> <out.jsonl> [--rounds=N]   (--rounds stops after round N ends)
import { appendFileSync, writeFileSync } from 'node:fs';
import { createGame, applyMove, followers, memberCount, allQuadrantIds, quadrant } from '../src/engine/v4/index.js';
import { defById } from '../src/engine/v4/content/index.js';
import { chooseBotMove } from '../src/engine/v4/bots.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { sphereVersion } from '../src/v4/tables.js';
import { deckRules } from './lib/deck-choice.mjs';

const DECK_RULES = deckRules();
const g = Number(process.argv[2] || 1), out = process.argv[3] || 'story.jsonl';
const stopAfter = Number((process.argv.find(a => a.startsWith('--rounds=')) || '').split('=')[1] || 0);
const level = process.env.LEVEL || 'veryhard', seats = 4;
const extra = process.env.BOTOPTS ? JSON.parse(process.env.BOTOPTS) : {};
const botOpts = { level, maxMs: Infinity, ...extra };
const all = allQuadrantIds().filter(q => sphereVersion(q) === '2.0');
const NAMES = ['Ava', 'Ben', 'Cal', 'Dee'];

const name = d => { try { return defById(d).name; } catch { return d; } };
const glossary = {};
const label = (s, id) => {
  const o = s.pending?.options?.find(x => x.id === id);
  if (!o) return id;
  if (o.kind === 'slot') { const [q, i] = id.split(':')[1].split('-').map(Number); const a = quadrant(s.quadrants[q]).actions[i]; if (a) { glossary[a.name] = a.text || ''; return `${o.squat ? 'join on ' : ''}${a.name} (${quadrant(s.quadrants[q]).name})`; } }
  if ((o.kind === 'card' || o.kind === 'use') && s.cards[o.uid]) { const d = defById(s.cards[o.uid].def); glossary[d.name] = `${d.text || ''} [cost ${d.s ?? '?'} colored + ${d.w ?? '?'} any, ${d.f ?? 0} followers]`; return `${o.kind === 'use' ? 'use ' : 'recruit '}${d.name}`; }
  return o.label || id;
};
const snap = s => s.players.map(p => ({ name: p.name, followers: followers(s, p), res: Object.fromEntries(Object.entries(p.res).filter(([, v]) => v)), members: p.members.map(u => name(s.cards[u].def)), artifact: p.artifact !== undefined ? name(s.cards[p.artifact].def) : null, minionsLeft: p.left }));

const rand = seededRandom(g * 7717 + 3 + seats * 101);
const pool = [...all], quads = [];
while (quads.length < seats) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
let s = createGame({ seats: NAMES.map(n => ({ kind: 'bot', name: n })), seed: g, quadrants: quads, rules: DECK_RULES });
s.players.forEach((p, i) => { p.name = NAMES[i]; });
writeFileSync(out, JSON.stringify({ type: 'start', game: g, level, botOpts, table: quads.map(q => quadrant(q).name), seats: s.players.map((p, i) => ({ name: p.name, color: quadrant(s.quadrants[i]).name })), log: s.log }) + '\n');
let logLen = s.log.length, moves = 0;
while (!s.over && ++moves < 4000) {
  const pl = s.pending.player, t0 = Date.now();
  let info = null;
  const opts = { ...botOpts, onDecision: (d, st) => { info = {
    contenders: d.options.map(o => ({ option: label(st, o.id), worth: o.mean === null ? null : +o.mean.toFixed(2), playouts: o.n })),
    normalTop: (d.ranked || []).slice(0, 6).map(r => [label(st, r.o.id), +r.v.toFixed(1)]),
  }; } };
  const view = { round: s.round, seat: pl, who: s.players[pl].name, prompt: s.pending.prompt, kind: s.pending.kind, offered: (s.pending.options || []).map(o => label(s, o.id)), table: snap(s), shop: s.shop.map(u => name(s.cards[u].def)) };
  const m = chooseBotMove(s, rand, opts);
  const chose = label(s, m.option);
  s = applyMove(s, m);
  const happened = s.log.slice(logLen); logLen = s.log.length;
  appendFileSync(out, JSON.stringify({ type: 'move', n: moves, ...view, chose, ...(info || {}), ms: Date.now() - t0, happened }) + '\n');
  if (stopAfter && s.round > stopAfter) break;
}
appendFileSync(out, JSON.stringify({ type: 'glossary', cards: glossary }) + '\n');
if (s.over) appendFileSync(out, JSON.stringify({ type: 'end', table: snap(s), ranking: s.ranking.map(i => s.players[i].name) }) + '\n');
