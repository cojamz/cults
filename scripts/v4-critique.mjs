#!/usr/bin/env node
// Critique sheet: a saved game ("Save game" in the app: notation text, or a record's JSON) replayed from its seed and
// written out decision by decision for one seat, with everything that seat could see and choose at each point: every
// cult's followers, members and resources, the wheel (who sits where, contest leaders), the shop with prices, and every
// option on offer with what it would give, the pick marked. Rivals' turns in between are their log lines. This is
// what Claude reads to critique a player's game (Cory, Nov 4: "send you a game log and ask you to critique play").
//
//   node scripts/v4-critique.mjs <game.txt|record.json> [--seat <name|number>] [--out sheet.md] [--upto N]
//   node scripts/v4-critique.mjs botgame <out.txt> [--seed N] [--colors red,blue,...] [--level hard]   (a sample game)
//
// The saved game holds only the picks; the options are rebuilt by replay, so the sheet must be made on the build that
// played it. The file's Content tag says which rules it was played on and its Build tag the commit: on a mismatch,
// check that commit out (git worktree add /tmp/at <sha>) and run this there. --upto N stops after move N (the state
// to replay from later).
import './v4-node-stamp.mjs'; // first: record.js must see the rules-source hash, as in the built app
import { readFileSync, writeFileSync } from 'node:fs';
import { parseRecord, replayRecord, newGame, step, gameRecord, CONTENT_HASH } from '../src/v4/session/record.js';
import { fromNotation, toNotation } from '../src/v4/session/notation.js';
import { followers, memberCount, chooseBotMove, allQuadrantIds, quadrant } from '../src/engine/v4/index.js';
import { logSince } from '../src/engine/v4/core.js';
import { setBotLevels } from '../src/engine/v4/bots.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { sphereVersion } from '../src/v4/tables.js';
import { tableView, renderOption } from './v4-expert.mjs';

const args = process.argv.slice(2);
const flag = (name, dflt) => { const i = args.indexOf(name); if (i < 0) return dflt; const v = args[i + 1]; args.splice(i, 2); return v; };
const ROMAN = ['setup', 'I', 'II', 'III'];

if (args[0] === 'botgame') {
  const out = args[1];
  const seed = Number(flag('--seed', Date.now() % 1e6));
  const level = flag('--level', 'hard');
  const two = allQuadrantIds().filter(q => sphereVersion(q) === '2.0');
  const rand = seededRandom(seed);
  const colors = (flag('--colors', '') || [...two].sort(() => rand() - 0.5).slice(0, 4).join(',')).split(',');
  let s = newGame({ seats: ['Cory', 'Ava', 'Ben', 'Cal'].map(name => ({ name, kind: 'bot' })), seed, quadrants: colors, rules: { deck: 10, contests: 'byColor' } });
  setBotLevels(s, [level, level, level, level]);
  while (!s.over) s = step(s, chooseBotMove(s, rand));
  const rec = gameRecord(s);
  writeFileSync(out, toNotation(rec));
  console.log(`wrote ${out}: seed ${seed}, ${colors.join(', ')}, ${rec.moves.length} moves`);
  process.exit(0);
}

const src = args[0];
if (!src) { console.error('Usage: node scripts/v4-critique.mjs <game.txt|record.json> [--seat name|n] [--out sheet.md] [--upto N]'); process.exit(2); }
const seatArg = flag('--seat', null), outFile = flag('--out', null), upTo = Number(flag('--upto', Infinity));
const text = readFileSync(src, 'utf8');
let rec;
try { rec = /^\s*\[Game "Cults"\]/.test(text) ? fromNotation(text) : parseRecord(text); } catch (err) {
  const build = (text.match(/\[Build "([^"]+)"\]/) || [])[1];
  console.error(`Can't replay this game on this build: ${err.message}${build ? `\nIt was played on ${build}: git worktree add /tmp/at ${build.split('@')[0]} && cd /tmp/at && npm ci && node scripts/v4-critique.mjs ...` : ''}`);
  process.exit(2);
}
const seat = seatArg == null ? Math.max(0, rec.seats.findIndex(x => x.kind === 'human'))
  : /^\d+$/.test(seatArg) ? Number(seatArg) - 1 : rec.seats.findIndex(x => x.name.toLowerCase() === seatArg.toLowerCase());
if (!(seat >= 0 && seat < rec.seats.length)) { console.error(`No seat ${seatArg}.`); process.exit(2); }

const L = [];
const me = rec.seats[seat].name;
L.push(`# ${me}'s game, decision by decision`, '');
L.push(`Seats: ${rec.seats.map(x => `${x.name}${x.kind === 'bot' ? ` (${x.bot || 'bot'})` : ''}`).join(', ')}. Table: ${rec.quadrants.map(q => quadrant(q).name).join(', ')}. Seed ${rec.seed}. Rules: ${JSON.stringify(rec.rules)}.`);
if (rec.build?.content && rec.build.content !== CONTENT_HASH) L.push(`WARNING: played on other rules (${rec.build.content}); this build is ${CONTENT_HASH}.`);
L.push('');

let state = replayRecord(rec, { upTo: 0 }).state;
let round = -1, rivals = [], turnOpen = false, n = 0;
const flushRivals = () => { if (rivals.length) { L.push('', '**Meanwhile:**', ...rivals.map(l => `- ${l}`)); rivals = []; } };
const total = Math.min(rec.moves.length, upTo);
for (let i = 0; i < total; i++) {
  const [player, option] = rec.moves[i];
  const pend = state.pending;
  if (state.round !== round) { flushRivals(); round = state.round; L.push('', `## Round ${ROMAN[round] ?? round}`); }
  if (player === seat) {
    const turnStart = pend.kind === 'place' || pend.kind === 'setup';
    if (turnStart || !turnOpen) {
      flushRivals();
      L.push('', turnStart ? `### Move ${i + 1}: ${me}'s turn ${++n}` : `### Move ${i + 1}: ${me} answers on ${state.players[state.current ?? player]?.name ?? 'a rival'}'s turn`, '', '```', tableView(state, seat, false), '```');
      turnOpen = true;
    }
    const pick = pend.options.find(o => o.id === option);
    L.push('', `**Decision (${pend.kind}):** ${pend.prompt}`);
    // a payment can have 50 ways; the suggested one, the pick and a few more say enough
    const shown = pend.kind === 'pay' && pend.options.length > 6 ? pend.options.filter((o, k) => k < 4 || o === pick || o.kind !== 'pay') : pend.options;
    for (const o of shown) {
      let words; try { words = renderOption(state, state.players[seat], o, pend.kind); } catch { words = String(o.label ?? o.id); }
      words = words.replace(/ — value hint -?[\d.]+$/, ''); // the bots' own scores: not something a player saw
      L.push(`${o === pick ? '- **▶ PICKED:** ' : '- '}${words}`);
    }
    if (shown.length < pend.options.length) L.push(`- (${pend.options.length - shown.length} other ways to pay)`);
  } else turnOpen = false;
  const next = step(state, { player, option });
  const lines = state.logN != null && next.logN > state.logN ? logSince(next, state.logN) : [];
  if (player === seat) { if (lines.length) L.push('', `Result: ${lines.join(' / ')}`); } else rivals.push(...lines);
  state = next;
}
flushRivals();
L.push('', '## End', '');
L.push(...[...state.players].sort((a, b) => followers(state, b) - followers(state, a)).map(p => `- ${p.name}: ${followers(state, p)} followers, ${memberCount(state, p)} members`));
const sheet = L.join('\n') + '\n';
if (outFile) { writeFileSync(outFile, sheet); console.log(`wrote ${outFile}: ${n} turns of ${me}, ${sheet.length} chars`); } else process.stdout.write(sheet);
