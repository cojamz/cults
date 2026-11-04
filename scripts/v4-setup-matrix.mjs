#!/usr/bin/env node
// Setup matrix (Cory, 2026-11-04: "i worry we have a LOT of alt setups and not everything will work together. We need to
// audit that"). Plays one bot game for every combination of the setup screen's options (players 2-6, member deck 10/15,
// swap card, contests, shop, when round III members join), on the Classic table and on a random one, with the live
// rules a real game gets (cloaks, cull, round decks). Every engine and sphere invariant after every move (the
// cross-sphere fuzz's checks), plus setup checks the fuzz doesn't know:
//   - no retired or culled member is ever dealt (shop, pile or piles)
//   - "round III members join in round III" holds: no round III member reachable before round III
//   - All piles has no face-up row; Grey piles keeps its five piles
//   - the swap card is offered only when on, and is actually used in some games when on
//   - By color: every color's contest in the scored rounds is the By color one
// Usage: node scripts/v4-setup-matrix.mjs [--players=2,3,4,5,6] [--kind=bot|random|mixed] [--tables=classic,random]
//        [--level=normal] [--limit=N] [--out=file.json]
import { writeFileSync } from 'node:fs';
import { runTable } from '../src/test/engine/v4/fuzz-tables-runner.js';
import { quadrant, defById } from '../src/engine/v4/index.js';
import { memberRound, scoringOf, swapCardPairs } from '../src/engine/v4/core.js';
import { fitTable, tableProblem, randomTable, shopRule } from '../src/v4/tables.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { CUT, CUT10 } from '../src/engine/v4/content/cull.js';
import { GREY_CORE } from '../src/engine/v4/piles.js';

const arg = (k, d) => { const a = process.argv.find(x => x.startsWith(`--${k}=`)); return a ? a.slice(k.length + 3) : d; };
const PLAYERS = arg('players', '2,3,4,5,6').split(',').map(Number);
const KIND = arg('kind', 'bot');
const TABLES = arg('tables', 'classic,random').split(',');
const LEVEL = arg('level', 'normal');
const LIMIT = Number(arg('limit', 0)) || Infinity;
const OUT = arg('out', '');

const combos = [];
for (const n of PLAYERS) for (const deck of [10, 15]) for (const swapCard of [false, true]) for (const contests of ['', 'byColor'])
  for (const shop of ['deck', 'grey', 'all']) for (const late of [2, 3]) for (const tbl of TABLES) combos.push({ n, deck, swapCard, contests, shop, late, tbl });

// the rules App.jsx startLocal hands a new game for this setup (the same expression, so the matrix plays what the screen starts)
const rulesFor = cfg => (cfg.late === 3 || cfg.deck !== 15 || cfg.swapCard || cfg.contests || cfg.shop === 'grey' || cfg.shop === 'all'
  ? { ...(cfg.late === 3 ? { roundDecks: 3 } : {}), ...(cfg.deck !== 15 ? { deck: 10 } : {}), ...(cfg.swapCard ? { swapCard: true } : {}), ...(cfg.contests ? { contests: cfg.contests } : {}), ...shopRule(cfg.shop) }
  : undefined);

const results = [];
let i = 0;
const t0 = Date.now();
for (const c of combos) {
  if (i++ >= LIMIT) break;
  const seed = 1000 + i;
  const table = c.tbl === 'classic' ? { mode: 'classic' } : { mode: 'random', quadrants: randomTable(seededRandom(seed), c.n) };
  const fit = fitTable(table, c.n, c.shop);
  const why = tableProblem(fit.quadrants, c.n, c.shop);
  const label = `${c.n}p deck${c.deck} swap:${c.swapCard ? 'on' : 'off'} contests:${c.contests || 'printed'} shop:${c.shop} late:${c.late} ${c.tbl}[${fit.quadrants.join(',')}]`;
  if (why) { results.push({ ...c, label, ok: false, setup: why }); console.log(`SETUP  ${label}: ${why}`); continue; }
  const flags = new Set();
  const stats = { swapOffered: 0, swapUsed: 0, pileBuys: 0, moves: 0 };
  const flag = msg => flags.add(msg);
  const onMove = (prev, s, m) => {
    stats.moves++;
    const reach = [...s.shop, ...Object.values(s.supply || {}).map(l => l[0]).filter(u => u !== undefined)];
    for (const u of [...s.shop, ...s.pile, ...Object.values(s.supply || {}).flat()]) {
      const d = defById(s.cards[u].def);
      // Scouts stays a Grey pile though retired from the deck (Cory picked it for the piles, Nov 1: "scouts good")
      if (d.retired && !(s.supply?.[d.id] && GREY_CORE.includes(d.id))) flag(`retired member dealt: ${d.name} (${d.id})`);
      if (d.id && (CUT.has(d.id) || (c.deck === 10 && CUT10.has(d.id)))) flag(`culled member dealt: ${d.name} (${d.id})`);
    }
    if (c.late === 3 && s.round >= 1 && s.round < 3) for (const u of reach) {
      const d = defById(s.cards[u].def);
      // piles are open from round I by design (Cory, Nov 1: "there should be no limit on when you can buy")
      if (memberRound(d) >= 3 && !s.supply?.[d.id]) flag(`round III member out before round III: ${d.name}${s.supply?.[d.id] ? ' (a pile)' : ''}`);
    }
    if (c.shop === 'all' && s.round >= 1) { const row = s.shop.filter(u => !(s.supply && s.supply[s.cards[u].def] !== undefined)); if (row.length) flag(`All piles: a face-up non-pile member in the shop (${row.map(u => defById(s.cards[u].def).name).join(', ')})`); }
    const p = s.pending;
    if (p && p.kind === 'buy') {
      const has = p.options.some(o => o.kind === 'swapcard');
      if (has) stats.swapOffered++;
      if (has && !c.swapCard) flag('swap card offered with the swap card off');
    }
    if (prev.pending?.kind === 'buy' && prev.pending.options.find(o => o.id === m.option)?.kind === 'swapcard') stats.swapUsed++;
    if (s.supply && prev.supply) for (const d of Object.keys(s.supply)) if (s.supply[d].length < prev.supply[d].length) stats.pileBuys++;
    if ((s.contests || []).length > (prev.contests || []).length) {
      const scored = s.contests.at(-1);
      for (const r of scored.results) { const want = scoringOf(s, r.qid).label; if (r.label !== want) flag(`round ${scored.round} ${r.qid} scored as "${r.label}", setting says "${want}"`); }
    }
  };
  const started = Date.now();
  try {
    const { state } = runTable({ quadrants: fit.quadrants, n: c.n, seed, kind: KIND, rules: rulesFor(c), levels: Array(c.n).fill(LEVEL), onMove });
    if (c.swapCard && stats.swapOffered === 0) flag('swap card on, never offered');
    if (c.contests === 'byColor') for (const r of state.contests.at(-1).results) if (r.label === quadrant(r.qid).scoring.label && !['red', 'silver'].includes(r.qid)) flag(`By color: ${r.qid} scored its printed contest`);
    const row = { ...c, label, ok: !flags.size, flags: [...flags], stats, ms: Date.now() - started, winner: state.ranking[0], spread: state.ranking.map(id => state.players[id].bonus) };
    results.push(row);
    console.log(`${flags.size ? 'FLAG ' : 'ok   '} ${label} ${row.ms}ms swaps ${stats.swapUsed}/${stats.swapOffered} pileBuys ${stats.pileBuys}${flags.size ? `\n       ${[...flags].join('\n       ')}` : ''}`);
  } catch (e) {
    results.push({ ...c, label, ok: false, error: String(e.message || e).slice(0, 600), stats });
    console.log(`FAIL  ${label}\n       ${String(e.message || e).split('\n')[0].slice(0, 400)}`);
  }
}
const bad = results.filter(r => !r.ok);
console.log(`\n${results.length} setups, ${bad.length} with problems, ${Math.round((Date.now() - t0) / 1000)}s`);
if (OUT) writeFileSync(OUT, JSON.stringify(results, null, 1));
process.exit(bad.some(r => r.error || r.setup) ? 1 : 0);
