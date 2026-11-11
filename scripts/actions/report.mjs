// Action balance harness, report. Reads the games scripts/actions/play.mjs wrote and prints, per space and per color,
// in plain game words: how often it's taken when open, in which round and how early, what one minion there earns the
// placer and the rivals, and how its takers do against players who ended with about as many members.
// Usage: node scripts/actions/report.mjs <dir or .jsonl ...> [--md=out.md] [--min=20]
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { defById } from '../../src/engine/v4/index.js';
const mname = id => { try { return defById(id).name; } catch { return id; } };

const args = process.argv.slice(2);
const flags = Object.fromEntries(args.filter(a => a.startsWith('--')).map(a => { const [k, ...v] = a.slice(2).split('='); return [k, v.join('=') || true]; }));
const MIN = Number(flags.min || 20);
const files = args.filter(a => !a.startsWith('--')).flatMap(p => statSync(p).isDirectory() ? readdirSync(p).filter(f => f.endsWith('.jsonl')).map(f => join(p, f)) : [p]);
const games = files.flatMap(f => readFileSync(f, 'utf8').split('\n').filter(Boolean).map(l => { try { return JSON.parse(l); } catch { return null; } })).filter(g => g?.over);
if (!games.length) { console.log('no finished games'); process.exit(1); }

const COLOR = { thieves: 'Magenta', market: 'Blue', echo: 'Green', trading: 'White', red: 'Red', yellow: 'Yellow', purple: 'Purple', silver: 'Silver' };
const color = q => COLOR[q] || q;
const avg = a => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : NaN);
const pct = x => (Number.isFinite(x) ? `${Math.round(x * 100)}%` : '-');
const f1 = x => (Number.isFinite(x) ? x.toFixed(1) : '-');
const median = a => { const b = [...a].sort((x, y) => x - y); return b.length ? (b.length % 2 ? b[(b.length - 1) / 2] : (b[b.length / 2 - 1] + b[b.length / 2]) / 2) : NaN; };

// member-count buckets, so a space isn't credited for the wide cult that happens to take it
const bucket = n => (n <= 3 ? 0 : n <= 5 ? 1 : n <= 8 ? 2 : 3);
const winBy = [0, 0, 0, 0].map(() => ({ w: 0, n: 0 }));
for (const g of games) for (const p of g.players) { winBy[bucket(p.cards)].n++; if (p.win) winBy[bucket(p.cards)].w++; }
const expect = p => winBy[bucket(p.cards)].w / Math.max(1, winBy[bucket(p.cards)].n);

const S = {};
for (const g of games) {
  const tookBy = g.players.map(() => new Set());
  for (const pc of g.placements) {
    const k = pc.space;
    const x = (S[k] ||= { key: k, name: pc.name, ring: pc.ring, q: k.split(':')[0], uses: 0, byRound: [0, 0, 0], offered: 0, offeredR: [0, 0, 0], picks: [], value: [], fol: [], rivals: [], games: new Set(), takers: [] });
    if (!x.name) { x.name = pc.name; x.ring = pc.ring; }
    x.uses++; x.byRound[pc.r - 1]++; (x.tookR ||= new Set()).add(`${g.game}:${pc.r}`); x.picks.push(pc.n);
    if (Number.isFinite(pc.value)) { x.value.push(pc.value); x.fol.push(pc.fol); x.rivals.push(pc.rivals); }
    tookBy[pc.p].add(k);
    for (const o of pc.open) { const y = (S[o] ||= { key: o, name: null, ring: null, q: o.split(':')[0], uses: 0, byRound: [0, 0, 0], offered: 0, offeredR: [0, 0, 0], picks: [], value: [], fol: [], rivals: [], games: new Set(), takers: [] }); (y.offR ||= new Set()).add(`${g.game}:${pc.r}`); y.offered++; y.offeredR[pc.r - 1]++; }
  }
  g.players.forEach((p, i) => { for (const k of tookBy[i]) S[k].takers.push({ win: p.win, exp: expect(p) }); });
  for (const q of g.table) for (const k in S) if (S[k].q === q) S[k].games.add(g.game);
}
const rows = Object.values(S).filter(x => x.name);
for (const x of rows) {
  x.pickRate = (x.tookR?.size || 0) / Math.max(1, x.offR?.size || 0);
  x.v = avg(x.value); x.f = avg(x.fol); x.riv = avg(x.rivals); x.pickAt = avg(x.picks);
  x.won = avg(x.takers.map(t => (t.win ? 1 : 0)));
  x.lift = x.won - avg(x.takers.map(t => t.exp));
}
const ringMed = [1, 2, 3].map(r => median(rows.filter(x => x.ring === r && x.uses >= MIN).map(x => x.v)));

const flags2 = x => {
  const out = [];
  if (x.uses < MIN) return ['too few uses to read'];
  const m = ringMed[x.ring - 1];
  if (x.v > m * 1.4 && x.v - m >= 3) out.push(`earns ${f1(x.v - m)} more than its ring's typical space`);
  if (x.v < m * 0.6 && m - x.v >= 2) out.push(`earns ${f1(m - x.v)} less than its ring's typical space`);
  if (x.pickRate < 0.25) out.push(`left empty in ${Math.round((1 - x.pickRate) * 100)}% of the rounds it was open`);
  if (x.lift >= 0.08) out.push(`takers win ${Math.round(x.lift * 100)} points more than players with as many members`);
  if (x.lift <= -0.08) out.push(`takers win ${Math.round(-x.lift * 100)} points less than players with as many members`);
  return out;
};

const L = [];
const P = s => L.push(s);
const nPl = games.reduce((a, g) => a + g.placements.length, 0);
const v = games[0].rules || {};
P(`# Action balance: ${games.length} games, ${nPl} placements`);
P('');
P(`Hard bots, 4 players, 10-card decks, By color contests, space +1 ${v.plus1 === 'game' ? 'once a game' : 'every time'}${v.membersOut ? `, ${v.membersOut.join(', ')} out` : ''}${v.membersIn ? `, ${v.membersIn.join(', ')} in` : ''}. Each table is 4 random colors.`);
P('');
P('How to read it. "Earns" is what one minion there gave its placer that turn: followers, resources, and members at their price (a paid recruit nets about 0, so what is left is what the space added). A space that only turns one thing into another (a member or resources into followers, resources into other colors) earns about 0 here by design, so "earns less" on those says little. Going last, extra turns and an extra minion earn 0 here too; read those from how often they are taken and how their takers do. "Taken when open" is the share of rounds it was open in which someone placed there. "Takers vs same size" compares how often its takers won with players who ended with about as many members (25% is an even share at 4 players). One run can be off by 5 to 10 points on any one space; trust what two runs agree on.');
P('');
P(`Typical space earns ${f1(ringMed[0])} in round I's ring, ${f1(ringMed[1])} in round II's, ${f1(ringMed[2])} in round III's.`);
P('');
P('## Spaces that stand out');
const flagged = rows.filter(x => x.uses >= MIN && flags2(x).length).sort((a, b) => a.q.localeCompare(b.q) || a.ring - b.ring);
for (const x of flagged) P(`- **${x.name}** (${color(x.q)}, round ${'I'.repeat(x.ring)}): ${flags2(x).join('; ')}.`);
if (!flagged.length) P('- None.');
P('');
P('## Every space');
P('');
P('| Color | Ring | Space | Uses (I/II/III) | Taken when open | Pick # in round | Earns | Followers | Rivals get | Takers won | Takers vs same size |');
P('|---|---|---|---|---|---|---|---|---|---|---|');
for (const x of rows.sort((a, b) => a.q.localeCompare(b.q) || a.ring - b.ring || b.v - a.v))
  P(`| ${color(x.q)} | ${'I'.repeat(x.ring)} | ${x.name} | ${x.uses} (${x.byRound.join('/')}) | ${pct(x.pickRate)} | ${f1(x.pickAt)} | ${f1(x.v)} | ${f1(x.f)} | ${f1(x.riv)} | ${pct(x.won)} | ${x.lift >= 0 ? '+' : ''}${Math.round(x.lift * 100)} |`);
P('');
P('## Colors');
P('');
P('| Color | Games on the table | Share of placements | Earns per placement | Winner\'s share of placements on it | Cloak wins |');
P('|---|---|---|---|---|---|');
const qs = [...new Set(games.flatMap(g => g.table))].sort();
for (const q of qs) {
  const gs = games.filter(g => g.table.includes(q));
  const all = gs.flatMap(g => g.placements);
  const mine = all.filter(pc => pc.space.startsWith(q + ':'));
  const wShare = avg(gs.map(g => { const w = g.players.findIndex(p => p.win); const wp = g.placements.filter(pc => pc.p === w); return wp.filter(pc => pc.space.startsWith(q + ':')).length / Math.max(1, wp.length); }));
  const cl = gs.flatMap(g => g.players.filter(p => p.cloak === q));
  P(`| ${color(q)} | ${gs.length} | ${pct(mine.length / Math.max(1, all.length))} | ${f1(avg(mine.map(pc => pc.value).filter(Number.isFinite)))} | ${pct(wShare)} | ${cl.length ? `${pct(avg(cl.map(p => (p.win ? 1 : 0))))} of ${cl.length}` : '-'} |`);
}
P('');
// each color's own resource: how much of it a player gains in a game, and how much the player who leaned on that color
// most (most placements on its spaces) gains, beside how many of its members that player recruited. A short color
// shows as its heaviest user gaining little of it and recruiting few of its members.
const RES = { thieves: 'magenta', market: 'blue', echo: 'green', trading: 'white', red: 'red', yellow: 'yellow', purple: 'purple', silver: 'silver' };
P('## Each color\'s own resource');
P('');
P('| Color | Gained per player | Gained by its heaviest user | Its members its heaviest user ended with | Heaviest user won |');
P('|---|---|---|---|---|');
for (const q of qs) {
  const gs = games.filter(g => g.table.includes(q) && g.players[0].gained);
  if (!gs.length) continue;
  const r = RES[q] || q;
  const per = avg(gs.flatMap(g => g.players.map(p => p.gained[r] || 0)));
  const heavy = gs.map(g => { const c = g.players.map((_, i) => g.placements.filter(pc => pc.p === i && pc.space.startsWith(q + ':')).length); const i = c.indexOf(Math.max(...c)); return g.players[i]; });
  P(`| ${color(q)} | ${f1(per)} | ${f1(avg(heavy.map(p => p.gained[r] || 0)))} | ${f1(avg(heavy.map(p => (p.members || []).filter(id => id.startsWith(q + '.')).length)))} | ${pct(avg(heavy.map(p => (p.win ? 1 : 0))))} |`);
}
P('');
// members leaving cults, by what caused it
{
  const gl = games.filter(g => g.players[0].left);
  if (gl.length) {
    const by = {};
    for (const g of gl) for (const p of g.players) for (const [k, n] of Object.entries(p.left)) by[k] = (by[k] || 0) + n;
    const per = Object.values(by).reduce((a, b) => a + b, 0) / (gl.length * 4);
    P(`## Members leaving cults: ${f1(per)} per player a game (${gl.length} games)`);
    P('');
    for (const [k, n] of Object.entries(by).sort((a, b) => b[1] - a[1]).filter(([, n]) => n / gl.length >= 0.3)) P(`- ${k}: ${f1(n / gl.length)} a game`);
    P('(A swap counts the member that leaves. Spaces under 0.3 a game left out: those are members that left during a turn for another reason.)');
    P('');
  }
}
// members, kept apart from the spaces (Cory, Nov 11: "I would like the balance testing for the members to be a little
// bit separate and focused on them"): who ends the game holding each one and how they do against players as wide
const M = {};
for (const g of games) for (const p of g.players) for (const id of new Set(p.members || [])) {
  const x = (M[id] ||= { id, n: 0, w: 0, e: 0 });
  x.n++; if (p.win) x.w++; x.e += expect(p);
}
const mrows = Object.values(M).filter(x => x.n >= MIN).map(x => ({ ...x, won: x.w / x.n, lift: (x.w - x.e) / x.n })).sort((a, b) => b.lift - a.lift);
P('## Members (held at game end, at least ' + MIN + ' times)');
P('');
P('| Member | Held by | Holders won | Holders vs same size |');
P('|---|---|---|---|');
for (const x of mrows) P(`| ${mname(x.id)} | ${x.n} | ${pct(x.won)} | ${x.lift >= 0 ? '+' : ''}${Math.round(x.lift * 100)} |`);
P('');
const small = games.filter(g => g.players.find(p => p.win).cards <= 5).length / games.length;
P(`Winners with 5 or fewer members: ${pct(small)} of games (bar: at least 20%). Winner's followers: ${f1(avg(games.map(g => Math.max(...g.players.map(p => p.followers)))))}; everyone's: ${f1(avg(games.flatMap(g => g.players.map(p => p.followers))))}.`);
const text = L.join('\n') + '\n';
if (flags.md) writeFileSync(flags.md, text);
console.log(text);
