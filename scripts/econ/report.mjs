// Numbers for every mix the sweep played (scripts/econ/sweep.mjs). Usage: node scripts/econ/report.mjs [dir] > report.md
import { readdirSync, readFileSync } from 'node:fs';
import { MIXES } from './mixes.mjs';
const dir = process.argv[2] || '/mnt/project-files/economy-test/runs';
const slug = n => n.replace(/[^a-z0-9+=-]+/gi, '_');
const avg = a => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : NaN);
const f1 = x => (Number.isFinite(x) ? x.toFixed(1) : '-'), pct = x => (Number.isFinite(x) ? `${Math.round(100 * x)}%` : '-');
const files = readdirSync(dir);
const rows = [];
for (const n of Object.keys(MIXES)) {
  const games = files.filter(f => f.startsWith(slug(n) + '.') && f.endsWith('.jsonl')).flatMap(f => readFileSync(`${dir}/${f}`, 'utf8').trim().split('\n').filter(Boolean).map(l => JSON.parse(l)));
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
console.log(`# Economy test: numbers (${new Date().toISOString().slice(0, 16)}Z)\n\nHard bots, 4 players, 10-card deck, By color contests, the same games for every mix. The follower-only seat (every 5th game) is left out of everything but its own win rate.\n`);
console.log('| Mix | Games | Cards end | Seat shows | Cards after II | Most cards | Income a turn | Member price | Turns nothing affordable | Turns everything affordable | Left over I/II/III | Winners ≤5 cards | Follower-only seat wins | Last after II wins | Win margin | Final followers |');
console.log('|' + '---|'.repeat(16));
for (const r of rows) console.log(`| ${r.n} | ${r.games} | ${f1(r.cards)} | ${f1(r.seat)} | ${f1(r.cardsR2)} | ${r.maxCards} | ${f1(r.income)} | ${f1(r.price)} | ${pct(r.dead)} | ${pct(r.rich)} | ${r.left.map(f1).join('/')} | ${pct(r.small)} | ${pct(r.buyerWin)} | ${pct(r.lastWins)} | ${f1(r.spread)} | ${f1(r.followers)} |`);
