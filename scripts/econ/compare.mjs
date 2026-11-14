// Side-by-side of economy mixes on the same deals (Nov 12). Usage: node scripts/econ/compare.mjs <dir> <base> <mix>...
// Each number is per player (the follower-only seat left out), averaged over games; "vs base" is the same deal's
// difference, with a 90% range from resampling games.
import { readdirSync, readFileSync } from 'node:fs';
const [dir, base, ...mixes] = process.argv.slice(2);
const slug = n => n.replace(/[^a-z0-9+=-]+/gi, '_');
const load = n => Object.fromEntries(readdirSync(dir).filter(f => f.startsWith(slug(n) + '.')).flatMap(f => readFileSync(`${dir}/${f}`, 'utf8').trim().split('\n').filter(Boolean).map(l => JSON.parse(l))).map(g => [g.game, g]));
const avg = a => a.reduce((x, y) => x + y, 0) / (a.length || 1);
const M = {
  'resources earned': ps => avg(ps.map(p => p.gained)),
  'resources a placement': ps => avg(ps.map(p => p.incomePerPlace)),
  'members bought round I': ps => avg(ps.map(p => p.recruits[0])),
  'members bought round II': ps => avg(ps.map(p => p.recruits[1])),
  'members bought round III': ps => avg(ps.map(p => p.recruits[2])),
  'members at end': ps => avg(ps.map(p => p.cards)),
  'price paid a member': ps => avg(ps.map(p => p.avgPrice).filter(x => x != null)),
  'followers end round I': ps => avg(ps.map(p => p.folR1)),
  'followers end round II': ps => avg(ps.map(p => p.folR2)),
  'followers at end': ps => avg(ps.map(p => p.followers)),
  "winner's followers": (ps, g) => avg(ps.filter(p => p.win).map(p => p.followers)),
  'followers bought (follower cards)': ps => avg(ps.map(p => p.folBought)),
  '  of them in round III': ps => avg(ps.map(p => p.folR3buys)),
  'follower card buys': ps => avg(ps.map(p => p.followerBuys)),
  'shop looks, no member affordable %': ps => 100 * ps.reduce((a, p) => a + p.dead, 0) / (ps.reduce((a, p) => a + p.buyLooks, 0) || 1),
  'shop looks, every member affordable %': ps => 100 * ps.reduce((a, p) => a + p.rich, 0) / (ps.reduce((a, p) => a + p.buyLooks, 0) || 1),
  'left over end round I': ps => avg(ps.map(p => p.leftover[0] ?? 0)),
  'left over end round II': ps => avg(ps.map(p => p.leftover[1] ?? 0)),
  'left over at end': ps => avg(ps.map(p => p.leftover[2] ?? 0)),
  'winner had 5 or fewer members %': ps => 100 * avg(ps.filter(p => p.win).map(p => (p.cards <= 5 ? 1 : 0))),
  'winning margin': (ps, g) => g.spread,
  'last after round II won %': (ps, g) => 100 * (g.lastAfterR2Won ? 1 : 0),
};
const B = load(base);
const per = (g, f) => f(g.players.filter((_, i) => i !== g.buyer), g);
const out = [];
for (const n of mixes) {
  const X = load(n), ks = Object.keys(B).filter(k => X[k] && B[k].over && X[k].over);
  out.push(`\n## ${n} (${ks.length} games, same deals as ${base})`);
  for (const [name, f] of Object.entries(M)) {
    const b = ks.map(k => per(B[k], f)), x = ks.map(k => per(X[k], f)), d = x.map((v, i) => v - b[i]).filter(Number.isFinite);
    const bs = []; for (let r = 0; r < 2000; r++) { let s = 0; for (let i = 0; i < d.length; i++) s += d[Math.floor(Math.random() * d.length)]; bs.push(s / d.length); }
    bs.sort((a, c) => a - c);
    out.push(`${name.padEnd(40)} ${avg(b.filter(Number.isFinite)).toFixed(1).padStart(6)} -> ${avg(x.filter(Number.isFinite)).toFixed(1).padStart(6)}   diff ${avg(d).toFixed(2).padStart(6)} (${bs[100].toFixed(2)} to ${bs[1899].toFixed(2)})`);
  }
}
console.log(out.join('\n'));
