// Members-as-piles experiment (branch only): bots play the same seeds on the live rules and on a piles variant, and
// each game records how much the players reached into each other's cults and piles.
// CORE=squatter,anarchist,... swaps the grey core (by key) for a run.
// Usage: VARIANT=live|A|B LEVEL=normal|hard|veryhard DECK=10 node scripts/v4-piles-compare.mjs <first> <count> <out.jsonl>
// Tables: 4 seats, 4 of the 2.0 colors without Blue (variant B leaves Blue out, so every variant plays the same tables).
// Per game, for every move made on someone's turn, what that player's move did to the others:
//   resLost: resources rivals lost; membersLost: members that left a rival's cult; membersPushed: members put into a
//   rival's cult (Old Maid); followersLost: followers rivals lost; crashes: minions placed on a rival's taken space;
//   atLeader: how much of resLost + membersLost hit whoever led in followers at that moment.
import { appendFileSync } from 'node:fs';
import { createGame, applyMove, followers, memberCount, allQuadrantIds } from '../src/engine/v4/index.js';
import { defById } from '../src/engine/v4/content/index.js';
import { chooseBotMove } from '../src/engine/v4/bots.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { sphereVersion } from '../src/v4/tables.js';
import { pileRules } from '../src/engine/v4/piles.js';
import { deckRules } from './lib/deck-choice.mjs';

const DECK = deckRules();
const [first, count, out] = [Number(process.argv[2] || 1), Number(process.argv[3] || 1), process.argv[4] || 'piles.jsonl'];
const variant = process.env.VARIANT || 'live', level = process.env.LEVEL || 'normal';
const colors = allQuadrantIds().filter(q => sphereVersion(q) === '2.0' && q !== 'market');
const botOpts = level === 'hard' || level === 'veryhard' ? { level, maxMs: Infinity } : { level };
const total = res => Object.values(res).reduce((a, b) => a + b, 0);
const nameOf = d => defById(d).name;

for (let g = first; g < first + count; g++) {
  const rand = seededRandom(g * 7717 + 3 + 4 * 101);
  const pool = [...colors], table = [];
  while (table.length < 4) table.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  const core = process.env.CORE ? process.env.CORE.split(',').map(k => (k.includes('.') ? k : `benders.${k}`)) : undefined;
  const rules = { ...DECK, ...pileRules(variant, table, g, DECK.deck || 15, core ? { core } : {}) };
  let s = createGame({ seats: Array.from({ length: 4 }, () => ({ kind: 'bot' })), seed: g, quadrants: table, rules });
  const hit = s.players.map(() => ({ resLost: 0, membersLost: 0, membersPushed: 0, followersLost: 0, crashes: 0, atLeader: 0, hitsOn: 0 }));
  const suffered = s.players.map(() => 0);
  const lead = {};
  const bought = s.players.map(() => ({}));
  let moves = 0;
  const t0 = Date.now();
  while (!s.over && ++moves < 6000) {
    const m = chooseBotMove(s, rand, botOpts);
    const T = s.current, round = s.round;
    const before = s.players.map(p => ({ res: total(p.res), members: new Set(p.members), bonus: p.bonus, f: followers(s, p) }));
    const top = Math.max(...before.map(b => b.f));
    if (typeof m.option === 'string' && m.option.startsWith('squat:') && T !== null) hit[T].crashes++;
    s = applyMove(s, m);
    if (s.round !== round && round === 2) lead.afterII = before.map(b => b.f);
    s.players.forEach((p, i) => { for (const u of p.members) if (!before[i].members.has(u)) bought[i][nameOf(s.cards[u].def)] = (bought[i][nameOf(s.cards[u].def)] || 0) + 1; });
    if (T === null || T === undefined) continue;
    s.players.forEach((p, i) => {
      if (i === T) return;
      const b = before[i];
      const lostRes = Math.max(0, b.res - total(p.res));
      const lostM = [...b.members].filter(u => !p.members.includes(u)).length;
      const pushed = p.members.filter(u => !b.members.has(u)).length;
      const lostF = Math.max(0, b.bonus - p.bonus);
      hit[T].resLost += lostRes; hit[T].membersLost += lostM; hit[T].membersPushed += pushed; hit[T].followersLost += lostF;
      if (lostRes || lostM || pushed || lostF) { hit[T].hitsOn++; suffered[i]++; if (b.f === top) hit[T].atLeader += lostRes + lostM; }
    });
  }
  if (!s.over) { appendFileSync(out, JSON.stringify({ game: g, variant, level, table, stuck: true }) + '\n'); continue; }
  const fs = s.players.map(p => followers(s, p)), best = Math.max(...fs);
  const leaderII = lead.afterII ? lead.afterII.indexOf(Math.max(...lead.afterII)) : null;
  appendFileSync(out, JSON.stringify({
    game: g, variant, level, table, piles: rules.piles ? rules.piles.defs.map(nameOf) : null, secs: Math.round((Date.now() - t0) / 1000),
    followers: fs, winner: fs.indexOf(best), leaderII, leaderIIWon: leaderII !== null && fs[leaderII] === best,
    members: s.players.map(p => memberCount(s, p)), hit, suffered, bought,
  }) + '\n');
}
