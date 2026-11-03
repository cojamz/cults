// Balance batch: bots on random tables of the 2.0 colors, any seat count, optional price changes. One JSON line per game.
// Usage: node scripts/v4-balance.mjs <firstGame> <count> <out.jsonl>
//   DECK=10|15 (required: ask Cory which deck to balance on). SEATS=2|3|4 (default 4; one color per seat, as the game deals). LEVEL=normal|hard|veryhard|easy (default normal).
//   PRICE="cheerleader=0/5,echo.impostor=2/4" sets a member's price as colored/any (by key, id or name; prices only, never
//   what a card does). A new price can move a card to another round's deck, as it would in the game (core.js memberRound).
//   ONLY=red,echo,... sets the color pool (default: the 2.0 colors). MUST=thieves puts that color on every table.
//   SWAP=1 turns the swap card setting on. CONTESTS=members|minions|whiteFewest sets other contest goals (core.js scoringOf).
//   BUDGET=<n> trims Hard's lookahead (default: the game's). Every 5th game one seat only buys followers; the report counts those games only for that seat's win rate (Cory, Oct 29).
// Same game numbers with the same settings replay the same games, so a price run compares game for game with the base.
import { appendFileSync, writeFileSync } from 'node:fs';
import { createGame, applyMove, followers, memberCount, allQuadrantIds, quadrant } from '../src/engine/v4/index.js';
import { defById, guestMembers } from '../src/engine/v4/content/index.js';
import { chooseBotMove, chooseFollowerBuyerMove } from '../src/engine/v4/bots.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { sphereVersion } from '../src/v4/tables.js';
import { deckRules } from './lib/deck-choice.mjs';
// SWAP=1 turns on the swap card table setting (Cory, Nov 1); SWAPCOST=n sets its price (default 2)
const DECK_RULES = { ...deckRules(), ...(process.env.SWAP === '1' ? { swapCard: true } : {}), ...(process.env.SWAPCOST ? { swapCardCost: Number(process.env.SWAPCOST) } : {}), ...(process.env.CONTESTS ? { contests: process.env.CONTESTS } : {}) };

const [first, count, out] = [Number(process.argv[2] || 1), Number(process.argv[3] || 1), process.argv[4] || 'balance.jsonl'];
const level = process.env.LEVEL || 'normal', seats = Number(process.env.SEATS || 4);
const all = process.env.ONLY ? process.env.ONLY.split(',') : allQuadrantIds().filter(q => sphereVersion(q) === '2.0');
const must = process.env.MUST ? process.env.MUST.split(',') : [];
const defs = [...allQuadrantIds().flatMap(q => quadrant(q).members), ...guestMembers()];
const prices = {};
for (const pair of (process.env.PRICE || '').split(',').filter(Boolean)) {
  const [k, v] = pair.split('='), [s, w] = v.split('/').map(Number);
  const d = defs.find(x => x.id === k || x.key === k || x.name.toLowerCase() === k.toLowerCase());
  if (!d) throw new Error(`No member ${k}`);
  // the printed any part includes the +1 wild every member pays (extraWild), so set w as printed
  prices[d.id] = { from: `${d.s}/${d.w}`, to: v };
  d.s = s; d.w = w;
}
// Very Hard is uncapped too: its in-game 600 ms clock made each game depend on how busy the box was (Nov 1)
// BOTOPTS='{"crn":true,"halving":true,"candidates":6,"window":6}' adds search settings for Hard and Very Hard (thinker.js).
// CHOICES=<file.jsonl> (Hard and Very Hard) logs every looked-ahead decision: what was on offer, the options it played
// out and what each was worth, and what it chose. That's the choice log: which spaces and cards are real contenders.
const extra = process.env.BOTOPTS ? JSON.parse(process.env.BOTOPTS) : {};
const botOpts = level === 'hard' || level === 'veryhard' ? { level, maxMs: Infinity, ...(process.env.BUDGET ? { budget: Number(process.env.BUDGET) } : {}), ...extra } : { level };
// CHOICES=auto writes next to the output (<out>.choices), one file per shard, started fresh, so parallel or re-run shards never mix
const choicesFile = process.env.CHOICES === 'auto' ? `${out.replace(/\.part$/, '')}.choices` : process.env.CHOICES;
if (process.env.CHOICES === 'auto') writeFileSync(choicesFile, '');
const choiceLabel = (s, id) => {
  const o = s.pending?.options?.find(x => x.id === id);
  if (!o) return id;
  if (o.kind === 'slot') { const a = quadrant(s.quadrants[o.q]).actions[o.i]; return a ? `space:${s.quadrants[o.q]}: ${a.name}` : id; }
  if (o.kind === 'card') return `member:${name(s.cards[o.uid].def)}`;
  if (o.kind === 'use') return `use:${name(s.cards[o.uid].def)}`;
  if (o.kind === 'tier') return `followers:${o.tier}`;
  return `${o.kind}:${o.label || id}`;
};
const name = d => { try { const x = defById(d); return `${x.name} (${d.split('.')[0]})`; } catch { return d; } };
const cost = d => { try { const x = defById(d); return (x.s || 0) + (x.w || 0); } catch { return null; } };

// GAMES=1,5,9 plays only those game numbers inside first..first+count-1 (e.g. re-running just the tables a card change touches;
// a game number always deals the same table, so the rest of a batch stays valid)
const only = process.env.GAMES ? new Set(process.env.GAMES.split(',').map(Number)) : null;
for (let g = first; g < first + count; g++) {
  if (only && !only.has(g)) continue;
  const rand = seededRandom(g * 7717 + 3 + seats * 101);
  const pool = all.filter(q => !must.includes(q)), quads = [...must];
  while (quads.length < seats) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  let s = createGame({ seats: Array.from({ length: seats }, () => ({ kind: 'bot' })), seed: g, quadrants: quads, rules: DECK_RULES });
  const buyer = g % 5 === 0 ? g % seats : -1;
  const places = s.players.map(() => ({})), seen = {}, got = s.players.map(() => ({}));
  let moves = 0, swaps = 0;
  // for the balance system (scripts/balance): standings at each round's end, turns and decisions, and interaction —
  // any move that takes from a rival (resources, a member, followers) or gives to one, and whether the rival hurt
  // was the leader among the others at the time
  const standings = [], tally = { turns: 0, decisions: 0, hurt: 0, hurtLeader: 0, gift: 0, byKind: {} };
  // LOGS=<dir>: every game's whole log as text (the feel step reads a few)
  const fullLog = process.env.LOGS ? [...s.log] : null;
  const snap = st => st.players.map(p => ({ r: Object.values(p.res).reduce((x, y) => x + y, 0), m: new Set(p.members), f: followers(st, p) }));
  while (!s.over && ++moves < 4000) {
    for (const uid of s.shop) seen[s.cards[uid].def] ??= s.round;
    const before = s.players.map(p => new Set(p.members));
    const pl = s.pending.player;
    const logIt = choicesFile && pl !== buyer && botOpts.level !== 'normal' && botOpts.level !== 'easy';
    const onDecision = logIt ? (info, st) => appendFileSync(choicesFile, JSON.stringify({
      game: g, round: st.round, kind: info.kind, seat: info.player, color: st.quadrants[info.player] ?? null,
      offered: (st.pending.options || []).map(o => choiceLabel(st, o.id)),
      normal: (info.ranked || []).slice(0, 8).map(r => [choiceLabel(st, r.o.id), +r.v.toFixed(2)]),
      played: info.options.map(o => [choiceLabel(st, o.id), o.mean === null ? null : +o.mean.toFixed(2), o.n]),
      chose: choiceLabel(st, info.chosen),
    }) + '\n') : null;
    const m = pl === buyer ? chooseFollowerBuyerMove(s, rand) : chooseBotMove(s, rand, onDecision ? { ...botOpts, onDecision } : botOpts);
    if (typeof m.option === 'string' && /^(slot|squat):/.test(m.option)) {
      const [q, i] = m.option.split(':')[1].split('-').map(Number);
      const a = quadrant(s.quadrants[q]).actions[i];
      const k = a ? `${s.quadrants[q]}: ${a.name}` : m.option;
      places[pl][k] = (places[pl][k] || 0) + 1;
    }
    if (m.option === 'swapcard') swaps++;
    const round = s.round;
    const pre = snap(s), kind = s.pending.kind;
    tally.decisions++; if (kind === 'place') tally.turns++;
    const len = s.log.length, lastLine = s.log[len - 1];
    s = applyMove(s, m);
    if (fullLog) fullLog.push(...(s.log.length > len ? s.log.slice(len) : s.log.slice(s.log.lastIndexOf(lastLine) + 1)));
    const post = snap(s);
    const others = pre.map((x, i) => i).filter(i => i !== pl);
    const lead = others.length ? others.reduce((x, y) => (pre[y].f > pre[x].f ? y : x)) : -1;
    // a move that ends a round pays everyone (contests, round income): not interaction
    for (const i of s.round === round ? others : []) {
      const lostMember = [...pre[i].m].some(u => !post[i].m.has(u) && post[pl].m.has(u)) || [...pre[i].m].some(u => !post[i].m.has(u)) && [...post[i].m].some(u => !pre[i].m.has(u));
      const hurt = post[i].r < pre[i].r && post[pl].r > pre[pl].r || lostMember || post[i].f < pre[i].f;
      const gift = !hurt && (post[i].r > pre[i].r || post[i].f > pre[i].f) && kind !== 'place';
      // kingmaking: in round III, a player far behind (15+ followers off the lead) hitting one of the top two
      const top2 = pre.map((x, j) => j).sort((x, y) => pre[y].f - pre[x].f).slice(0, 2);
      if (hurt && round === 3 && Math.max(...pre.map(x => x.f)) - pre[pl].f >= 15 && top2.includes(i)) tally.king = (tally.king || 0) + 1;
      if (hurt) { tally.hurt++; if (i === lead) tally.hurtLeader++; const k = lostMember ? 'member' : post[i].f < pre[i].f ? 'followers' : 'resources'; tally.byKind[k] = (tally.byKind[k] || 0) + 1; }
      if (gift) tally.gift++;
    }
    if (s.round !== round || s.over) standings.push(s.players.map(p => followers(s, p)));
    s.players.forEach((p, i) => { for (const u of p.members) if (!before[i].has(u)) got[i][name(s.cards[u].def)] ??= round; });
  }
  // a game that never ends (a rules loop) is logged as stuck and left out of the report
  if (!s.over) { appendFileSync(out, JSON.stringify({ game: g, level, seats, table: quads, stuck: true, round: s.round }) + '\n'); continue; }
  const top = Math.max(...s.players.map(p => followers(s, p)));
  const row = {
    game: g, level, seats, table: quads, deck: DECK_RULES.deck || 15, buyer, prices, swaps, standings, tally,
    shop: Object.keys(seen).map(name), shopRound: Object.fromEntries(Object.entries(seen).map(([d, r]) => [name(d), r])),
    // each round's contests: color -> winning seats (for sweeps: one seat taking a color's contest every round)
    contests: (s.contests || []).map(c => Object.fromEntries(c.results.map(x => [x.qid, x.winners]))),
    players: s.players.map(p => ({
      seat: p.id, followers: followers(s, p), win: followers(s, p) === top, members: p.members.map(u => name(s.cards[u].def)),
      memberCount: memberCount(s, p), artifact: p.artifact !== undefined ? name(s.cards[p.artifact].def) : null, places: places[p.id],
      gotRound: got[p.id], left: Object.values(p.res).reduce((a, b) => a + b, 0), contest: p.contest || 0,
      memberFollowers: Object.fromEntries(p.members.map(u => {
        const c = s.cards[u], d = defById(c.def), f = c.copy ? Math.max(d.f || 0, defById(c.copy).f || 0) : d.f || 0;
        return [name(c.def), f + ((s.ledger && s.ledger[p.id] && s.ledger[p.id][d.name]) || 0)];
      })),
      memberCost: Object.fromEntries(p.members.map(u => [name(s.cards[u].def), cost(s.cards[u].def)])),
    })),
  };
  appendFileSync(out, JSON.stringify(row) + '\n');
  if (fullLog) {
    const fin = s.players.map(p => `${p.name}: ${followers(s, p)} followers, ${memberCount(s, p)} members`).join('; ');
    writeFileSync(`${process.env.LOGS}/game-${level}-${seats}p-${g}.txt`, `Table: ${quads.join(', ')}. ${fin}\n\n${fullLog.filter(l => typeof l === 'string').join('\n')}\n`);
  }
}
