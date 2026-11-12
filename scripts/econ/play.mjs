// Economy test (Cory, Nov 7: "a robust test to give us some good analysis and qualitative sense of what economy tweaks
// make the game feel more fun"). Plays Hard 4-player games with the dials in the environment (content/price.js ECON,
// MEMBER_UP, MEMBER_COLOR) and writes one JSON line per game with what the fun goals A to G read.
// Usage: DECK=10 [dials] node scripts/econ/play.mjs <firstGame> <count> <out.jsonl>
import { appendFileSync } from 'node:fs';
import { createGame, applyMove, followers, memberCount, allQuadrantIds } from '../../src/engine/v4/index.js';
import { memberPrice } from '../../src/engine/v4/core.js';
import { chooseBotMove, chooseFollowerBuyerMove } from '../../src/engine/v4/bots.js';
import { seededRandom } from '../../src/engine/v4/rng.js';
import { sphereVersion } from '../../src/v4/tables.js';
import { deckRules } from '../lib/deck-choice.mjs';

const RULES = { ...deckRules(), roundDecks: 2, contests: process.env.CONTESTS || 'byColor' };
const [first, count, out] = [Number(process.argv[2] || 1), Number(process.argv[3] || 1), process.argv[4] || 'econ.jsonl'];
const level = process.env.LEVEL || 'hard';
const all = allQuadrantIds().filter(q => sphereVersion(q) === '2.0');
const sum = o => Object.values(o || {}).reduce((a, b) => a + (b || 0), 0);

for (let g = first; g < first + count; g++) {
  const rand = seededRandom(g * 7717 + 3);
  const pool = [...all], quads = [];
  while (quads.length < 4) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  let s = createGame({ seats: Array.from({ length: 4 }, () => ({ kind: 'bot' })), seed: g, quadrants: quads, rules: RULES });
  const buyer = g % 5 === 0 ? g % 4 : -1; // every 5th game one seat only buys followers (the existing check)
  const P = s.players.map(() => ({ gained: 0, places: 0, buyLooks: 0, dead: 0, rich: 0, recruits: [0, 0, 0], followerBuys: 0, folBought: 0, prices: [], leftover: [], seatR2: 0, cardsR2: 0, folR1: 0, folR2: 0, folR3buys: 0 }));
  const looked = new Set();
  let guard = 0;
  while (!s.over && guard++ < 20000) {
    const pl = s.pending.player, p = s.players[pl], r = s.round;
    if (s.pending.kind === 'buy') {
      const key = `${r}:${pl}:${s.history ? s.history.length : 0}:${p.workersPlaced ?? ''}:${P[pl].places}`;
      if (!looked.has(key) && s.shop.length) {
        looked.add(key);
        const ok = s.shop.filter(u => { try { return memberPrice(s, p, u).afford; } catch { return false; } }).length;
        P[pl].buyLooks++; if (ok === 0) P[pl].dead++; if (ok === s.shop.length) P[pl].rich++;
      }
    }
    const m = pl === buyer ? chooseFollowerBuyerMove(s, rand) : chooseBotMove(s, rand, level === 'hard' ? { level, maxMs: Infinity, ...(process.env.BUDGET ? { budget: Number(process.env.BUDGET) } : {}) } : { level });
    if (typeof m.option === 'string' && /^(slot|squat):/.test(m.option)) P[pl].places++;
    const before = s.players.map(x => ({ res: { ...x.res }, members: [...x.members], bonus: x.bonus }));
    const t = s;
    s = applyMove(s, m);
    s.players.forEach((x, i) => {
      for (const c in x.res) { const d = (x.res[c] || 0) - (before[i].res[c] || 0); if (d > 0) P[i].gained += d; }
      const fresh = x.members.filter(u => !before[i].members.includes(u));
      if (i === pl && fresh.length && r >= 1) { P[i].recruits[r - 1] += fresh.length; for (const u of fresh) { try { P[i].prices.push(memberPrice(t, t.players[i], u).total); } catch {} } }
    });
    if (typeof m.option === 'string' && /^tier:/.test(m.option)) { P[pl].followerBuys++; const d = followers(s, s.players[pl]) - followers(t, t.players[pl]); P[pl].folBought += d; if (r === 3) P[pl].folR3buys += d; }
    if (r >= 1 && (s.round !== r || s.over)) {
      t.players.forEach((x, i) => P[i].leftover.push(sum(x.res)));
      if (r === 1) s.players.forEach((x, i) => { P[i].folR1 = followers(s, x); });
      if (r === 2) s.players.forEach((x, i) => { P[i].seatR2 = memberCount(s, x); P[i].cardsR2 = x.members.length; P[i].folR2 = followers(s, x); });
    }
  }
  const fol = s.players.map(x => followers(s, x)), top = Math.max(...fol);
  const sorted = [...fol].sort((a, b) => b - a);
  const r2 = P.map(x => x.folR2), lastR2 = r2.indexOf(Math.min(...r2));
  appendFileSync(out, JSON.stringify({
    game: g, table: quads, buyer, over: !!s.over, plus1: s.plus1Stats || null, spread: sorted[0] - sorted[1],
    lastAfterR2Won: fol[lastR2] === top,
    players: s.players.map((x, i) => ({
      followers: fol[i], win: fol[i] === top, cards: x.members.length, seat: memberCount(s, x),
      cardsR2: P[i].cardsR2, seatR2: P[i].seatR2,
      incomePerPlace: P[i].places ? P[i].gained / P[i].places : 0, avgPrice: P[i].prices.length ? P[i].prices.reduce((a, b) => a + b, 0) / P[i].prices.length : null,
      buyLooks: P[i].buyLooks, dead: P[i].dead, rich: P[i].rich, recruits: P[i].recruits, leftover: P[i].leftover,
      gained: P[i].gained, places: P[i].places, followerBuys: P[i].followerBuys, folBought: P[i].folBought, folR3buys: P[i].folR3buys, folR1: P[i].folR1, folR2: P[i].folR2,
    })),
  }) + '\n');
}
