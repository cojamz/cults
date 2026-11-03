// Abuser test (Cory, Nov 2: "abuser testing is good idea"): one card at a time, one seat tries hard to break it.
// Each seed deals a table with the card's color, plays round I's opening with Normal bots, then forks:
//   without: the game as it goes, the test seat playing as the abuser;
//   with:    the same game, and the test seat also gets a private copy of the card (rivals never see it in the shop),
//            bought at its printed price the first time it can afford it.
// The abuser tries every option at every decision (no shortlist) and plays the closest ones out to the end of the
// round before choosing (Very Hard's search, wider). Rivals play Normal (--rivals=hard for Hard).
// Report: how many more followers over the best rival the abuser ends with when it has the card, paired by seed,
// with its spread; how often it wins; the seed where the card did most, with every log line naming the card.
// A card is flagged when the gain is at least 3 followers and clearly above 0.
//   DECK=10 node scripts/v4-abuse.mjs doormen [--games=12] [--workers=3] [--rivals=normal|hard] [--budget=150]
//   Card: key or name (case-insensitive). Writes design/eval/abuse/<key>.md and .json (--out=<dir> for elsewhere).
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';
import { fileURLToPath } from 'node:url';
import { mkdirSync, writeFileSync } from 'node:fs';
import { createGame, applyMove, followers, paymentChoices } from '../src/engine/v4/core.js';
import { chooseNormalMove } from '../src/engine/v4/bots.js';
import { chooseThinkerMove } from '../src/engine/v4/thinker.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { allQuadrantIds, quadrant, guestMembers, registerQuadrant } from '../src/engine/v4/content/index.js';
import { sphereVersion } from '../src/v4/tables.js';
import { deckRules } from './lib/deck-choice.mjs';

const args = Object.fromEntries(process.argv.slice(3).map(a => a.replace(/^--/, '').split('=')));
const SEATS = 4;
const allDefs = () => [...allQuadrantIds().flatMap(q => quadrant(q).members), ...guestMembers()];
const findDef = name => allDefs().find(d => [d.key, d.name, d.id].some(x => String(x).toLowerCase() === name.toLowerCase()));
const mean = a => a.reduce((x, y) => x + y, 0) / (a.length || 1);
const sd = a => { const m = mean(a); return Math.sqrt(mean(a.map(x => (x - m) ** 2)) * a.length / Math.max(1, a.length - 1)); };
const margin = (s, me) => followers(s, s.players[me]) - Math.max(...s.players.filter(p => p.id !== me).map(p => followers(s, p)));

// The abuser: every option weighed (candidates: all, no window), the close ones played out.
const abuserMove = (s, rand, budget) => chooseThinkerMove(s, rand, { budget, candidates: 99, window: 6, maxMs: Infinity, crn: true, halving: true });
const rivalMove = (s, rand, level) => (level === 'hard' ? chooseThinkerMove(s, rand, { budget: 100, maxMs: Infinity }) : chooseNormalMove(s, rand));

let CLONE = null;
function cloneFor(def) {
  if (!CLONE) {
    const c = { ...def, key: `ab_${def.key}`, copies: 1 };
    registerQuadrant({ id: `ab${def.key}`, name: 'abuse probe', resource: null, actions: [], members: [c] });
    c.quadrant = def.quadrant;
    CLONE = c;
  }
  return CLONE;
}

function tableFor(def, rand) {
  const all = allQuadrantIds().filter(q => sphereVersion(q) === '2.0' && q !== def.quadrant);
  const t = def.guest ? [] : [def.quadrant];
  const used = new Set(t.map(q => quadrant(q).resource));
  while (t.length < SEATS) {
    const ok = all.filter(q => !t.includes(q) && !used.has(quadrant(q).resource));
    const q = (ok.length ? ok : all.filter(x => !t.includes(x)))[Math.floor(rand() * (ok.length || all.length - t.length))];
    t.push(q); used.add(quadrant(q).resource);
  }
  return t;
}

function playOut(fork, seed, seat, withCard, uid, o) {
  const rands = Array.from({ length: SEATS }, (_, i) => seededRandom(seed * 31 + i * 1009 + 7));
  let s = fork, bought = 0, boughtRound = 0, moves = 0;
  const log = [];
  while (!s.over && moves++ < 3000) {
    const pend = s.pending, pl = pend.player;
    if (withCard && !bought && pl === seat && pend.kind === 'buy' && paymentChoices(s, s.players[seat], uid).length) {
      s = { ...s, shop: [uid, ...s.shop], pending: { ...pend, options: [...pend.options, { id: `card:${uid}`, label: 'probe', kind: 'card', uid }] } };
      s = applyMove(s, { player: seat, option: `card:${uid}` });
      if (s.pending?.kind === 'pay' && s.pending.uid === uid) s = applyMove(s, chooseNormalMove(s, rands[pl]));
      if (s.shop.includes(uid)) s = { ...s, shop: s.shop.filter(u => u !== uid) };
      bought = s.players[seat].members.includes(uid) ? 1 : 0; boughtRound = s.round;
      continue;
    }
    const len = s.log.length;
    s = applyMove(s, pl === seat ? abuserMove(s, rands[pl], o.budget) : rivalMove(s, rands[pl], o.rivals));
    if (withCard) log.push(...(s.log.length > len ? s.log.slice(len) : s.log.slice(-12)).filter(l => typeof l === 'string'));
  }
  const p = s.players[seat];
  return { mx: margin(s, seat), own: followers(s, p), win: s.ranking?.[0] === seat ? 1 : 0, bought, boughtRound, lines: withCard ? [...new Set(log)] : [] };
}

function runSeed(g, o) {
  const def = findDef(o.card);
  const seed = 5000 + g, seat = g % SEATS;
  const quads = tableFor(def, seededRandom(seed * 13 + 1));
  const rand = seededRandom(seed * 7919 + 13);
  let fork = createGame({ seats: Array.from({ length: SEATS }, () => ({ kind: 'bot' })), seed, quadrants: quads, rules: o.rules });
  while (!fork.over && !(fork.round === 1 && fork.pending?.kind === 'place')) fork = applyMove(fork, chooseNormalMove(fork, rand));
  const c = cloneFor(def);
  const without = playOut(fork, seed, seat, false, null, o);
  const f = { ...fork, cards: { ...fork.cards, 9999: { uid: 9999, def: c.id } } };
  const withIt = playOut(f, seed, seat, true, 9999, o);
  const name = def.name;
  withIt.lines = withIt.lines.filter(l => l.includes(name));
  return { g, seed, seat, table: quads, without, with: withIt };
}

if (!isMainThread) {
  const o = workerData;
  for (const g of o.games) parentPort.postMessage(runSeed(g, o));
} else {
  const card = process.argv[2];
  const def = card && findDef(card);
  if (!def) { console.error(`No card "${card}". Use a member's key or name.`); process.exit(2); }
  const o = { card, rules: deckRules(), budget: Number(args.budget || 150), rivals: args.rivals || 'normal' };
  const games = Number(args.games || 12), workers = Math.min(games, Number(args.workers || 3));
  const t0 = Date.now();
  const results = [];
  await Promise.all(Array.from({ length: workers }, (_, w) => new Promise((res, rej) => {
    const mine = Array.from({ length: games }, (_, g) => g).filter(g => g % workers === w);
    const wk = new Worker(fileURLToPath(import.meta.url), { workerData: { ...o, games: mine }, argv: process.argv.slice(2) });
    wk.on('message', r => { results.push(r); process.stderr.write(`seed ${r.seed}: ${(r.with.mx - r.without.mx).toFixed(1)}\n`); });
    wk.on('error', rej); wk.on('exit', res);
  })));
  results.sort((a, b) => a.g - b.g);
  const got = results.filter(r => r.with.bought);
  const d = got.map(r => r.with.mx - r.without.mx);
  const m = mean(d), half = 1.96 * sd(d) / Math.sqrt(Math.max(1, d.length));
  const flagged = d.length >= 4 && m >= 3 && m - half > 0;
  const best = got.reduce((a, b) => (!a || b.with.mx - b.without.mx > a.with.mx - a.without.mx ? b : a), null);
  const price = def.s + def.w;
  const lines = [
    `# Abuser test: ${def.name}`,
    '',
    `"${def.text}" (costs ${price}; 10-card deck; ${SEATS} players; rivals ${o.rivals}; ${games} seeds, ${((Date.now() - t0) / 60000).toFixed(0)} min)`,
    '',
    `With the card, the abuser ended ${m >= 0 ? '+' : ''}${m.toFixed(1)} followers against the best rival compared with the same game without it (give or take ${half.toFixed(1)}; bought in ${got.length} of ${games} games, after paying ${price}).`,
    `It won ${got.filter(r => r.with.win).length} of ${got.length} with the card and ${got.filter(r => r.without.win).length} of ${got.length} without.`,
    flagged ? `FLAGGED: worth clearly more than its price to a player trying to break it.` : `Not flagged.`,
    '',
    best ? `Best game (seed ${best.seed}, table ${best.table.join(', ')}, bought in round ${best.with.boughtRound}): ${(best.with.mx - best.without.mx).toFixed(1)} followers better. What the card did:` : '',
    ...(best ? best.with.lines.map(l => `- ${l}`) : []),
    '',
    'Every seed (followers over the best rival, without → with):',
    ...results.map(r => `- seed ${r.seed}, seat ${r.seat + 1}: ${r.without.mx} → ${r.with.mx}${r.with.bought ? ` (bought round ${r.with.boughtRound})` : ' (never afforded)'}`),
  ];
  const outDir = args.out || 'design/eval/abuse';
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/${def.key}.md`, lines.join('\n') + '\n');
  writeFileSync(`${outDir}/${def.key}.json`, JSON.stringify({ card: def.id, o: { ...o, rules: o.rules }, results }, null, 1));
  console.log(lines.join('\n'));
}
