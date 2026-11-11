import { readdirSync, readFileSync } from 'node:fs';
const dir = process.argv[2] || '.econ-plus1';
const avg = a => a.reduce((x, y) => x + y, 0) / (a.length || 1);
for (const n of ['today', 'plus1-round', 'plus1-game']) {
  const g = readdirSync(dir).filter(f => f.startsWith(n + '.')).flatMap(f => readFileSync(`${dir}/${f}`, 'utf8').trim().split('\n').filter(Boolean).map(l => JSON.parse(l)));
  const ps = g.flatMap(x => x.players.filter((_, i) => i !== x.buyer));
  const ws = g.flatMap(x => x.players.filter((p, i) => p.win && i !== x.buyer));
  const r = [0, 1, 2].map(k => avg(ps.map(p => p.recruits[k])).toFixed(2));
  console.log(n, 'games', g.length, '| recruits/round', r.join(' / '), '| members', avg(ps.map(p => p.cards)).toFixed(1),
    '| win fol', avg(ws.map(p => p.followers)).toFixed(0), '| all fol', avg(ps.map(p => p.followers)).toFixed(0),
    '| small wins', Math.round(100 * ws.filter(p => p.cards <= 5).length / ws.length) + '%',
    '| income/place', avg(ps.map(p => p.incomePerPlace)).toFixed(2), '| nothing affordable', Math.round(100 * ps.reduce((a, p) => a + p.dead, 0) / ps.reduce((a, p) => a + p.buyLooks, 0)) + '%',
    '| leftover end', avg(ps.map(p => p.leftover[2] ?? 0)).toFixed(1),
    '| +1 paid/cut per game', avg(g.map(x => x.plus1?.paid || 0)).toFixed(1), '/', avg(g.map(x => x.plus1?.cut || 0)).toFixed(1));
}
