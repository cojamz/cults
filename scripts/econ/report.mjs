// Numbers for every mix the sweep played (scripts/econ/sweep.mjs). Usage: node scripts/econ/report.mjs [dir] > report.md
import { readdirSync, readFileSync } from 'node:fs';
import { MIXES } from './mixes.mjs';
const dir = process.argv[2] || '/mnt/project-files/economy-test/runs';
const slug = n => n.replace(/[^a-z0-9+=-]+/gi, '_');
const avg = a => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : NaN);
const f1 = x => (Number.isFinite(x) ? x.toFixed(1) : '-'), pct = x => (Number.isFinite(x) ? `${Math.round(100 * x)}%` : '-');
const files = readdirSync(dir);
const rows = [];
let bad = 0; // lines a network-folder append broke (Nov 7: 3 of 1,860); runs now write to local disk first
for (const n of Object.keys(MIXES)) {
  const games = files.filter(f => f.startsWith(slug(n) + '.') && f.endsWith('.jsonl')).flatMap(f => readFileSync(`${dir}/${f}`, 'utf8').trim().split('\n').filter(Boolean).map(l => { try { return JSON.parse(l); } catch { bad++; return null; } }).filter(Boolean));
  if (!games.length) continue;
  const ps = games.flatMap(g => g.players.filter((_, i) => i !== g.buyer));
  const wins = games.flatMap(g => g.players.filter((p, i) => p.win && i !== g.buyer));
  const buyerGames = games.filter(g => g.buyer >= 0);
  const looks = ps.reduce((a, p) => a + p.buyLooks, 0);
  rows.push({
    n, games: games.length,
    cards: avg(ps.map(p => p.cards)), seat: avg(ps.map(p => p.seat)), cardsR2: avg(ps.map(p => p.cardsR2)),
    maxCards: Math.max(...ps.map(p => p.cards)),
    income: avg(ps.map(p => p.incomePerPlace)), price: avg(ps.map(p => p.avgPrice).filter(x => x != null)),
    dead: ps.reduce((a, p) => a + p.dead, 0) / looks, rich: ps.reduce((a, p) => a + p.rich, 0) / looks,
    left: [0, 1, 2].map(r => avg(ps.map(p => p.leftover[r]).filter(x => x != null))),
    small: wins.filter(p => p.cards <= 5).length / wins.length,
    buyerWin: buyerGames.length ? buyerGames.filter(g => g.players[g.buyer].win).length / buyerGames.length : NaN,
    lastWins: avg(games.map(g => (g.lastAfterR2Won ? 1 : 0))), spread: avg(games.map(g => g.spread)),
    followers: avg(ps.map(p => p.followers)),
  });
}
if (bad) console.error(`${bad} broken lines skipped`);
console.log(`# Economy test: numbers (${new Date().toISOString().slice(0, 16)}Z)\n\nHard bots, 4 players, 10-card deck, By color contests, the same games for every mix. The follower-only seat (every 5th game) is left out of everything but its own win rate.\n`);
console.log('| Mix | Games | Cards end | Seat shows | Cards after II | Most cards | Income a turn | Member price | Turns nothing affordable | Turns everything affordable | Left over I/II/III | Winners ≤5 cards | Follower-only seat wins | Last after II wins | Win margin | Final followers |');
console.log('|' + '---|'.repeat(16));
for (const r of rows) console.log(`| ${r.n} | ${r.games} | ${f1(r.cards)} | ${f1(r.seat)} | ${f1(r.cardsR2)} | ${r.maxCards} | ${f1(r.income)} | ${f1(r.price)} | ${pct(r.dead)} | ${pct(r.rich)} | ${r.left.map(f1).join('/')} | ${pct(r.small)} | ${pct(r.buyerWin)} | ${pct(r.lastWins)} | ${f1(r.spread)} | ${f1(r.followers)} |`);

// ---------- paired against today, game for game (same deals), with 90% bootstrap ranges ----------
const load = n => files.filter(f => f.startsWith(slug(n) + '.') && f.endsWith('.jsonl')).flatMap(f => readFileSync(`${dir}/${f}`, 'utf8').trim().split('\n').filter(Boolean).map(l => { try { return JSON.parse(l); } catch { return null; } }).filter(Boolean));
const per = g => {
  const ps = g.players.filter((_, i) => i !== g.buyer), w = ps.filter(p => p.win), looks = ps.reduce((a, p) => a + p.buyLooks, 0) || 1;
  return { cards: avg(ps.map(p => p.cards)), dead: ps.reduce((a, p) => a + p.dead, 0) / looks, small: w.length ? w.filter(p => p.cards <= 5).length / w.length : 0,
    last: g.lastAfterR2Won ? 1 : 0, margin: g.spread, fol: avg(ps.map(p => p.followers)) };
};
const base = new Map(load('today').map(g => [g.game, per(g)]));
let seed = 12345; const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
const boot = d => { const m = []; for (let k = 0; k < 1000; k++) { let s = 0; for (let i = 0; i < d.length; i++) s += d[Math.floor(rnd() * d.length)]; m.push(s / d.length); } m.sort((a, b) => a - b); return [m[50], m[949]]; };
const KEYS = [['cards', 'Cards end', 1], ['dead', 'Turns nothing affordable (pts)', 100], ['small', 'Winners ≤5 cards (pts)', 100], ['last', 'Last after II wins (pts)', 100], ['margin', 'Win margin', 1], ['fol', 'Final followers', 1]];
console.log('\n## Change from today, same games (90% range; a range that crosses 0 is not a clear change)\n');
console.log('| Mix | Paired games | ' + KEYS.map(k => k[1]).join(' | ') + ' |');
console.log('|' + '---|'.repeat(KEYS.length + 2));
for (const n of Object.keys(MIXES)) {
  if (n === 'today') continue;
  const gs = load(n).filter(g => base.has(g.game));
  if (gs.length < 5) continue;
  const cells = KEYS.map(([k, , s]) => {
    const d = gs.map(g => (per(g)[k] - base.get(g.game)[k]) * s), m = avg(d), [lo, hi] = boot(d);
    return `${m >= 0 ? '+' : ''}${m.toFixed(1)} (${lo.toFixed(1)} to ${hi.toFixed(1)})${lo > 0 || hi < 0 ? ' *' : ''}`;
  });
  console.log(`| ${n} | ${gs.length} | ${cells.join(' | ')} |`);
}
