#!/usr/bin/env node
// Set-level metrics for the overnight quality loop (process critic's steering instrument).
// Per-card scores can all rise while the set gets worse; this reads the whole live set and tracks it batch to batch.
//   node scripts/quality/set-metrics.mjs [ranking.json] [--label=<batch>] [--save] [--json]
// Env switches (REPLACE7=1 ...) apply to the board text, same as board.mjs.
// --save appends a snapshot to /mnt/project-files/quality/metrics/history.jsonl and prints the change since the last one.
import fs from 'node:fs';
import { execSync } from 'node:child_process';
import { boardText } from './board.mjs';

const args = process.argv.slice(2);
const flag = (k, d) => { const a = args.find(x => x.startsWith(`--${k}=`)); return a ? a.slice(k.length + 3) : (args.includes(`--${k}`) ? true : d); };
const rankingFile = args.find(a => !a.startsWith('--')) || '/mnt/project-files/quality/ranking.json';
const label = flag('label', 'adhoc');
const HIST = '/mnt/project-files/quality/metrics/history.jsonl';

// ---- parse the live board -------------------------------------------------
const board = boardText();
const cards = [];
let col = null;
for (const line of board.split('\n')) {
  let m;
  if ((m = line.match(/^## (\w+)/))) { col = m[1].toLowerCase(); continue; }
  if ((m = line.match(/^\s+·\s+(.+?)\s+\[([^\]]*)\]\s*(.*)$/))) cards.push({ kind: 'member', color: col, name: m[1], cost: m[2], text: m[3] });
  else if ((m = line.match(/^\s+(I{1,3})\s+([^:]+):\s*(.*)$/))) cards.push({ kind: 'space', color: col, round: m[1], name: m[2].trim(), text: m[3] });
}
const COLORS = [...new Set(cards.map(c => c.color))];
const RES = ['gold', 'red', 'purple', 'silver', 'yellow', 'blue', 'magenta', 'white', 'green'];
const names = cards.map(c => c.name);

// ---- shapes: the mechanism families a designer can fall into --------------
const SHAPES = {
  'per-rival-count': /per rival|each rival with|rivals? with (more|fewer)/i,
  'whenever-rival': /whenever a rival|when a rival/i,
  'follower-per-x': /\+\d+ followers? (per|for each)/i,
  'steal': /\bsteal/i,
  'double': /\bdouble\b/i,
  'once-per-game': /once per game/i,
  'round-start': /round start/i,
  'round-end': /round end/i,
  'game-end': /game end/i,
  'on-recruit': /on recruit/i,
  'whenever-you': /whenever you|when you/i,
  'discount': /costs? \d+ less|counts double|less\b.*cost/i,
  'swap-move-member': /swap|give one of your members|take .* member|promote|demote|cast out/i,
  'copy-effect': /\bcopy|use the .* effect/i,
  'turn-order': /minion|skip|goes last|first turn|turn order|extra turn|place .* again/i,
  'flat-income': /^\+\d+ \w+\.?$|^worth \d+ followers?\.?$/i,
};
const shapesOf = t => Object.entries(SHAPES).filter(([, re]) => re.test(t)).map(([k]) => k);
const RANDOM = /top (member )?of the pile|top member|random|shuffle|draw|at random|dice|coin/i;
const MEMORY = /earlier|last round|since your|already|previous|before this|this round,? if you (have|had)/i;
const STING = /steal|rival (loses?|gives?)|they lose|take .* rival|from (each|a) rival/i;
const words = t => (t.match(/\S+/g) || []).length;

// connector: names another color or resource, another live card, or a member-of-a-color hook
for (const c of cards) {
  const own = c.color;
  const other = RES.filter(r => r !== own && new RegExp(`\\b${r}\\b`, 'i').test(c.text));
  const named = names.filter(n => n !== c.name && n.length > 3 && c.text.includes(n));
  c.shapes = shapesOf(c.text);
  c.otherColors = other;
  c.namesCards = named;
  c.connector = other.length > 0 || named.length > 0 || /member of a color|different colors|any color|another color|of that member/i.test(c.text);
  c.random = RANDOM.test(c.text);
  c.memory = MEMORY.test(c.text);
  c.sting = STING.test(c.text);
  c.words = words(c.text);
}
// combo hooks: what a card feeds (makes) and what it pays off (uses). A low scorer that is the only maker for a user in
// its color is a connector: replacing it can strand the cards that build on it (the local-minimum guard).
const HOOKS = {
  'member-count': { makes: /counts as \d|recruit (the|a|another|twice|3 times)|recruit .* free/i, uses: /per (\d )?members?|members? you have|most .*members|fewer .*members/i },
  'steal': { makes: /\bsteal/i, uses: /whenever (you|a rival) steals?|stolen/i },
  'gold-held': { makes: /\+\d+ gold|gold gains/i, uses: /double your gold|per \d gold|gold you hold/i },
  'recruit-trigger': { makes: /recruit/i, uses: /whenever (you|anyone) recruits?|your on recruits/i },
  'follower-buy': { makes: /buy followers/i, uses: /whenever .* buys? followers/i },
  'skip-minion': { makes: /skip|extra minion|goes last/i, uses: /skipped|whenever .* skips?|goes last token/i },
  'copy': { makes: /on use|on recruit/i, uses: /\bcopy|use the .* effect/i },
};
for (const c of cards) { c.makes = Object.keys(HOOKS).filter(h => HOOKS[h].makes.test(c.text)); c.uses = Object.keys(HOOKS).filter(h => HOOKS[h].uses.test(c.text)); }
for (const c of cards) {
  const mates = cards.filter(o => o !== c && o.color === c.color);
  c.feeds = mates.filter(o => o.uses.some(h => c.makes.includes(h))).map(o => o.name);
  c.fedBy = mates.filter(o => o.makes.some(h => c.uses.includes(h))).map(o => o.name);
  // scarce maker: one of at most 2 cards in its color making a hook that 2+ cards there use
  c.scarceFor = c.makes.filter(h => mates.filter(o => o.makes.includes(h)).length <= 1 && mates.filter(o => o.uses.includes(h)).length >= 2);
}
// referenced-by: who names this card (a card others build on is not a free swap)
for (const c of cards) c.referencedBy = cards.filter(o => o.namesCards.includes(c.name)).map(o => o.name);

// ---- join paper scores ------------------------------------------------------
let ranking = null;
try { ranking = JSON.parse(fs.readFileSync(rankingFile, 'utf8')); } catch { /* scores optional */ }
const scoreOf = new Map();
if (ranking) for (const r of [...(ranking.members || []), ...(ranking.spaces || [])]) scoreOf.set(`${r.name.toLowerCase()}|${r.color}`, r);
for (const c of cards) {
  const r = scoreOf.get(`${c.name.toLowerCase()}|${c.color}`) || scoreOf.get(`${c.name.toLowerCase()}|${{ blue: 'market', magenta: 'thieves', white: 'trading', green: 'echo', guests: 'guests' }[c.color] || c.color}`);
  if (r) { c.score = r.median; c.q = r.q; c.overBar = r.overBar; }
}

// ---- aggregate --------------------------------------------------------------
const med = a => { const s = a.filter(x => x != null).sort((x, y) => x - y); return s.length ? s[Math.floor((s.length - 1) / 2)] : null; };
const share = (arr, f) => arr.length ? +(arr.filter(f).length / arr.length).toFixed(2) : 0;
function agg(list) {
  const scored = list.filter(c => c.score != null);
  const shapeCount = {};
  for (const c of list) for (const s of c.shapes) shapeCount[s] = (shapeCount[s] || 0) + 1;
  const qMean = scored.length ? Array.from({ length: 10 }, (_, i) => +(scored.reduce((a, c) => a + (c.q?.[i] ?? 0), 0) / scored.length).toFixed(2)) : null;
  return {
    n: list.length,
    medianScore: med(scored.map(c => c.score)),
    overBar: share(scored, c => c.overBar),
    qMean,
    connectors: share(list, c => c.connector),
    comboLinked: share(list, c => c.feeds.length + c.fedBy.length > 0),
    stings: share(list, c => c.sting),
    random: list.filter(c => c.random).map(c => c.name),
    memory: list.filter(c => c.memory).map(c => c.name),
    medianWords: med(list.map(c => c.words)),
    plainCards: list.filter(c => c.kind === 'member' && c.words <= 6).map(c => c.name),
    shapeCount,
  };
}
const set = agg(cards);
const byColor = Object.fromEntries(COLORS.map(k => [k, agg(cards.filter(c => c.color === k))]));
// color identity: how alike two colors' shape mixes are (cosine). Rising overlap = colors drifting together.
const vec = k => Object.keys(SHAPES).map(s => byColor[k].shapeCount[s] || 0);
const cos = (a, b) => { const d = a.reduce((x, v, i) => x + v * b[i], 0), na = Math.hypot(...a), nb = Math.hypot(...b); return na && nb ? d / (na * nb) : 0; };
const pairs = [];
for (let i = 0; i < COLORS.length; i++) for (let j = i + 1; j < COLORS.length; j++) if (COLORS[i] !== 'guests' && COLORS[j] !== 'guests') pairs.push([COLORS[i], COLORS[j], +cos(vec(COLORS[i]), vec(COLORS[j])).toFixed(2)]);
pairs.sort((a, b) => b[2] - a[2]);
const identity = { meanOverlap: +(pairs.reduce((a, p) => a + p[2], 0) / (pairs.length || 1)).toFixed(2), closest: pairs.slice(0, 4) };
// local-minimum guard: low scorers that other cards build on, or that bridge colors
const guard = cards.filter(c => c.score != null && !c.overBar && (c.referencedBy.length || c.otherColors.length || c.scarceFor.length)).map(c => ({ name: c.name, color: c.color, score: c.score, referencedBy: c.referencedBy, bridges: c.otherColors, feeds: c.scarceFor.length ? c.feeds : [], hooks: c.scarceFor }));

let sha = '';
try { sha = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim(); } catch {}
const snap = { at: new Date().toISOString(), label, sha, env: Object.fromEntries(Object.entries(process.env).filter(([k]) => /^REPLACE\d+$|^LIVE\d+$/.test(k))), set, identity, byColor, guard };

if (flag('json')) { console.log(JSON.stringify(snap, null, 1)); }
else {
  const f = x => x == null ? '-' : x;
  console.log(`Set metrics (${label}, ${sha}): ${set.n} cards, median score ${f(set.medianScore)}, over bar ${Math.round(set.overBar * 100)}%`);
  console.log(`  cross-color connectors ${Math.round(set.connectors * 100)}%, combo-linked in color ${Math.round(set.comboLinked * 100)}%, stings ${Math.round(set.stings * 100)}%, median words ${set.medianWords}, random: ${set.random.join(', ') || 'none'}, memory: ${set.memory.join(', ') || 'none'}`);
  console.log(`  plain members left: ${set.plainCards.length} (${set.plainCards.join(', ')})`);
  console.log(`  color overlap (cosine of shape mix) mean ${identity.meanOverlap}; closest: ${identity.closest.map(p => `${p[0]}~${p[1]} ${p[2]}`).join(', ')}`);
  console.log(`  rubric means C1..C10: ${set.qMean?.join(' ') ?? '-'}`);
  console.log('  per color: score / over bar / connectors / stings / words / top shapes');
  for (const k of COLORS) { const b = byColor[k]; const top = Object.entries(b.shapeCount).sort((a, c) => c[1] - a[1]).slice(0, 3).map(([s, n]) => `${s}:${n}`).join(' ');
    console.log(`   ${k.padEnd(8)} ${String(f(b.medianScore)).padStart(4)}  ${String(Math.round(b.overBar * 100)).padStart(3)}%  ${String(Math.round(b.connectors * 100)).padStart(3)}%  ${String(Math.round(b.stings * 100)).padStart(3)}%  ${String(b.medianWords).padStart(3)}  ${top}`); }
  console.log(`  guard (under the bar but others build on it or it bridges colors; set check before replacing): ${guard.map(g => `${g.name} (${g.color} ${g.score}${g.referencedBy.length ? `, named by ${g.referencedBy.join('/')}` : ''}${g.hooks.length ? `, only ${g.hooks.join('/')} maker for ${g.feeds.join('/')}` : ''}${g.bridges.length ? `, bridges ${g.bridges.join('/')}` : ''})`).join('; ') || 'none'}`);
}
if (flag('save')) {
  fs.mkdirSync('/mnt/project-files/quality/metrics', { recursive: true });
  let prev = null;
  try { const lines = fs.readFileSync(HIST, 'utf8').trim().split('\n'); prev = JSON.parse(lines[lines.length - 1]); } catch {}
  fs.appendFileSync(HIST, JSON.stringify(snap) + '\n');
  if (prev) {
    const d = (a, b) => (a == null || b == null) ? '-' : (b - a >= 0 ? '+' : '') + (+(b - a).toFixed(2));
    console.log(`Change since ${prev.label}: score ${d(prev.set.medianScore, set.medianScore)}, over bar ${d(prev.set.overBar, set.overBar)}, connectors ${d(prev.set.connectors, set.connectors)}, stings ${d(prev.set.stings, set.stings)}, words ${d(prev.set.medianWords, set.medianWords)}, color overlap ${d(prev.identity.meanOverlap, identity.meanOverlap)}, plain members ${d(prev.set.plainCards.length, set.plainCards.length)}`);
  }
  console.log(`saved to ${HIST}`);
}
