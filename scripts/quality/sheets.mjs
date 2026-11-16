#!/usr/bin/env node
// Play-judge sheets: Hard-bot games where a given card sat in a cult, written decision by decision for that seat
// (scripts/v4-critique.mjs) and trimmed to the turns that matter for the card: every turn where it was on offer,
// recruited, fired or was named, in full; every other turn in one line. The play judge (.claude/agents/play-judge.md)
// reads these as that seat.
//
//   node scripts/quality/sheets.mjs "<card name>" [--want 3] [--max 18] [--jobs 3] [--out dir] [--seed0 1000]
//   Env switches apply to every game (REPLACE7=1 node scripts/quality/sheets.mjs Drifter ...). Defaults as trials:
//   deck 10, By color contests, Hard bots that see what cards do (BOTSEE=1). The card's color is on every table.
// Writes <out>/<card>-g<seed>-<seat>.md (trimmed sheet), .full.md (whole sheet), .txt (the game) and index.json.
import { spawn } from 'node:child_process';
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { trim } from './trim.mjs';
const HERE = dirname(fileURLToPath(import.meta.url)), ROOT = join(HERE, '..', '..');
const args = process.argv.slice(2);
const flag = (n, d) => { const i = args.indexOf(n); if (i < 0) return d; const v = args[i + 1]; args.splice(i, 2); return v; };
process.env.BOTSEE ??= '1';

if (args[0] === '--worker') {
  // one game: play it, report which seat held the card for the most moves
  const [, seed, cardName, outTxt] = args;
  await import('../v4-node-stamp.mjs');
  const { newGame, step, gameRecord } = await import('../../src/v4/session/record.js');
  const { toNotation } = await import('../../src/v4/session/notation.js');
  const { chooseBotMove, allQuadrantIds } = await import('../../src/engine/v4/index.js');
  const { setBotLevels } = await import('../../src/engine/v4/bots.js');
  const { seededRandom } = await import('../../src/engine/v4/rng.js');
  const { sphereVersion } = await import('../../src/v4/tables.js');
  const { findCard } = await import('./board.mjs');
  const card = findCard(cardName);
  const two = allQuadrantIds().filter(q => sphereVersion(q) === '2.0');
  const rand = seededRandom(Number(seed));
  const others = [...two].filter(q => q !== card.qid).sort(() => rand() - 0.5);
  const colors = card.qid === 'guests' ? others.slice(0, 4) : [card.qid, ...others.slice(0, 3)];
  let s = newGame({ seats: ['Ana', 'Ben', 'Cleo', 'Dev'].map(name => ({ name, kind: 'bot' })), seed: Number(seed), quadrants: colors, rules: { deck: 10, contests: 'byColor' } });
  setBotLevels(s, ['hard', 'hard', 'hard', 'hard']);
  const held = [0, 0, 0, 0], inShop = { seen: false };
  const isIt = uid => s.cards[uid] && String(s.cards[uid].def) === card.def.id;
  while (!s.over) {
    s.players.forEach((p, i) => { if (p.members.some(isIt)) held[i]++; });
    if (s.shop?.some(isIt)) inShop.seen = true;
    s = step(s, chooseBotMove(s, rand));
  }
  const best = held.indexOf(Math.max(...held));
  if (held[best] > 0) writeFileSync(outTxt, toNotation(gameRecord(s)));
  console.log(JSON.stringify({ seed: Number(seed), colors, held, seat: held[best] > 0 ? best : null, seen: inShop.seen }));
  process.exit(0);
}

const cardName = args[0];
if (!cardName) { console.error('usage: sheets.mjs "<card name>" [--want 3] [--max 18] [--jobs 3] [--out dir]'); process.exit(2); }
const want = Number(flag('--want', 3)), max = Number(flag('--max', 18)), jobs = Number(flag('--jobs', 3)), seed0 = Number(flag('--seed0', 1000));
const slug = cardName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const out = flag('--out', `/mnt/project-files/quality/evals/play/${slug}`);
mkdirSync(out, { recursive: true });
const { findCard } = await import('./board.mjs');
const card = findCard(cardName);
if (!card || card.kind !== 'member') { console.error(`No live member named ${cardName} (with this env).`); process.exit(2); }

const run = seed => new Promise(res => {
  const txt = join(out, `g${seed}.txt`);
  const p = spawn(process.execPath, [fileURLToPath(import.meta.url), '--worker', String(seed), cardName, txt], { cwd: ROOT, env: process.env, stdio: ['ignore', 'pipe', 'inherit'] });
  let o = ''; p.stdout.on('data', d => o += d); p.on('close', () => { try { res({ ...JSON.parse(o.trim().split('\n').pop()), txt }); } catch { res({ seed, seat: null, error: o }); } });
});
const found = [], tried = [];
let next = seed0;
await new Promise(done => {
  let active = 0;
  const pump = () => {
    if (found.length >= want || (next - seed0 >= max && active === 0)) return active === 0 && done();
    while (active < jobs && next - seed0 < max && found.length + active < want + jobs) {
      active++; run(next++).then(r => { active--; tried.push(r); if (r.seat != null && found.length < want) found.push(r); pump(); });
    }
    if (active === 0) done();
  };
  pump();
});

// trim a critique sheet to the turns that matter for the card
const NAMES = ['Ana', 'Ben', 'Cleo', 'Dev'];

const index = { card: card.name, color: card.color, text: card.text, price: card.price, env: Object.fromEntries(Object.entries(process.env).filter(([k]) => /^(REPLACE\d*|PRICE|BOTSEE|DECK|CONTESTS)$/.test(k))), tried: tried.length, sheets: [] };
for (const g of found) {
  const seat = g.seat + 1, base = join(out, `${slug}-g${g.seed}-${NAMES[g.seat]}`);
  await new Promise(res => { const p = spawn(process.execPath, [join(ROOT, 'scripts/v4-critique.mjs'), g.txt, '--seat', String(seat), '--out', `${base}.full.md`], { cwd: ROOT, env: process.env, stdio: 'inherit' }); p.on('close', res); });
  if (!existsSync(`${base}.full.md`)) continue;
  const full = readFileSync(`${base}.full.md`, 'utf8');
  const head = `# Play sheet: ${card.name} in ${NAMES[g.seat]}'s cult\n\nThe card: **${card.name}** (${card.color}) [${card.price}] "${card.text}"\nHeld for ${g.held[g.seat]} of the game's moves. Table: ${g.colors.join(', ')}. Hard bots, 10-card deck, By color contests.\n\n`;
  const t = head + trim(full, card.name);
  writeFileSync(`${base}.md`, t);
  index.sheets.push({ seed: g.seed, seat: NAMES[g.seat], held: g.held, file: `${base}.md`, full: `${base}.full.md`, game: g.txt, chars: t.length, fullChars: full.length });
}
writeFileSync(join(out, 'index.json'), JSON.stringify(index, null, 1));
console.log(`${card.name}: ${index.sheets.length} sheets from ${tried.length} games (in a cult in ${tried.filter(t => t.seat != null).length}) -> ${out}`);
for (const s of index.sheets) console.log(`  ${s.file} (${s.chars} chars, full ${s.fullChars})`);
