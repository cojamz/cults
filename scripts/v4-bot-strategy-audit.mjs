// Bot strategy audit (Nov 4, Cory: "It's the bots making good decisions in general, like strategic decisions").
// Plays Hard games set up exactly like a card trial (scripts/v4-balance.mjs seeds and settings) and measures the
// decisions a decent player would make differently:
//   timing   – every On Use member a bot holds: what using it would gain at each of its owner's buy steps (the real
//              measure, and the follow-up one that sees a doubled On Recruit or a discount), when it was used, and the
//              best moment it had all game (after a use, the same card is tried unused on a copy).
//   end      – resources and "next …" effects still unspent when the game ends.
//   swaps    – members a bot gave away the same turn they paid it (Early Birds swapped away the turn it fired).
//   holds    – with BOTSMART=1: each "use now or hold?" Hard played out, and both lines' average result.
//   DECK=10 CONTESTS=byColor BOTSEE=1 node scripts/v4-bot-strategy-audit.mjs <first> <count> <out.json>
import { writeFileSync } from 'node:fs';
import { createGame, applyMove, allQuadrantIds, followers, cardDef } from '../src/engine/v4/index.js';
import { resume } from '../src/engine/v4/core.js';
import { chooseBotMove, useGain, followUpGain } from '../src/engine/v4/bots.js';
import { defById } from '../src/engine/v4/content/index.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { sphereVersion } from '../src/v4/tables.js';
import { deckRules } from './lib/deck-choice.mjs';

const RULES = { ...deckRules(), ...(process.env.CONTESTS ? { contests: process.env.CONTESTS } : {}) };
const [first, count, out] = [Number(process.argv[2] || 1), Number(process.argv[3] || 1), process.argv[4] || 'audit.json'];
const seats = 4;
const level = process.env.LEVEL || 'hard';
const extra = process.env.BOTOPTS ? JSON.parse(process.env.BOTOPTS) : {};
const botOpts = level === 'hard' || level === 'veryhard' ? { level, maxMs: Infinity, ...extra, onHold: h => holds.push(h) } : { level };
const all = allQuadrantIds().filter(q => sphereVersion(q) === '2.0');
const must = process.env.MUST ? process.env.MUST.split(',') : [];
const holds = [];

const actOf = c => [c.def, c.copy, c.ability].filter(Boolean).map(defById).find(d => d.onActivate);
const measure = (s, uid) => {
  const g = useGain(s, uid);
  const f = followUpGain(s, uid);
  return Math.max(g ? g.gain : -99, f ? f.gain : -99);
};
// a copy of s where uid is unused again, at the same buy step
const unused = (s, uid) => {
  const c = structuredClone(s);
  c.cards[uid].used = false;
  delete c.players[s.pending.player].encoreTurn;
  return resume(c);
};

const games = [];
for (let g = first; g < first + count; g++) {
  const rand = seededRandom(g * 7717 + 3 + seats * 101);
  const pool = all.filter(q => !must.includes(q)), quads = [...must];
  while (quads.length < seats) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  let s = createGame({ seats: Array.from({ length: seats }, () => ({ kind: 'bot' })), seed: g, quadrants: quads, rules: RULES });
  const buyer = g % 5 === 0 ? g % seats : -1; // the trial's follower-only seat, left out of the audit
  const cards = {}; // `${player}:${uid}` -> { name, activate, chances: [{round, left, gain}], used: {round,left,gain} }
  const swaps = [];
  holds.length = 0;
  let moves = 0;
  while (!s.over && ++moves < 4000) {
    const pend = s.pending, me = pend.player;
    if (pend.kind === 'buy' && me !== buyer && !pend.afterPurchase) {
      const p = s.players[me];
      for (const uid of p.members) {
        const c = s.cards[uid], act = actOf(c);
        if (!act) continue;
        const key = `${me}:${uid}`;
        const row = (cards[key] ||= { name: cardDef(s, uid).name, activate: act.activate, chances: [], used: [] });
        let gain = null;
        try {
          if (!c.used && pend.options.some(o => o.kind === 'use' && o.uid === uid)) gain = measure(s, uid);
          else if (c.used && act.activate === 'game') { const u = unused(s, uid); if (u.pending?.kind === 'buy') gain = measure(u, uid); }
        } catch { /* skip */ }
        if (gain !== null) row.chances.push({ round: s.round, left: p.left, gain: +gain.toFixed(2), held: !c.used });
      }
    }
    const m = me === buyer ? chooseBotMove(s, rand, { level: 'normal' }) : chooseBotMove(s, rand, botOpts);
    if (pend.kind === 'buy' && String(m.option).startsWith('use:')) {
      const uid = Number(m.option.slice(4));
      const row = cards[`${me}:${uid}`];
      if (row) row.used.push({ round: s.round, left: s.players[me].left, gain: row.chances.at(-1)?.gain ?? null });
    }
    const before = s.players.map(p => new Set(p.members));
    const turn = (s.turns || []).length;
    s = applyMove(s, m);
    // a member that left its owner's cult by the owner's own choice this move
    if (pend.kind === 'choose' && m.player === me) for (const u of before[me]) if (!s.players[me].members.includes(u)) {
      const d = cardDef(s, u);
      swaps.push({ round: s.round, name: d.name, joinedTurn: null, sameTurn: turn === (s.turns || []).length, cost: d.s + d.w });
    }
  }
  const end = s.players.map((p, i) => ({
    seat: i, buyer: i === buyer, followers: followers(s, p), res: Object.values(p.res).reduce((a, b) => a + b, 0),
    flags: Object.keys(p).filter(k => /next|Next|encore|Now$/.test(k) && p[k] !== undefined && p[k] !== false && p[k] !== 0),
  }));
  games.push({ game: g, quads, cards, swaps, end, holds: holds.map(h => ({ ...h, name: cardDef(s, h.use).name })) });
  process.stderr.write(`game ${g} done\n`);
}
writeFileSync(out, JSON.stringify(games));
