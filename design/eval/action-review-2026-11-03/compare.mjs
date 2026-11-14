// arm compare: node compare.mjs <level n|h> <color> <arm> ; reads .balance-runs/act-test
import { readFileSync, readdirSync } from 'node:fs';
const [lv, color, arm, space] = process.argv.slice(2);
const D = '.balance-runs/act-test';
const load = a => readdirSync(D).filter(f => f.startsWith(`${lv}-${color}-${a}-`) && f.endsWith('.jsonl')).flatMap(f => readFileSync(`${D}/${f}`, 'utf8').split('\n').filter(Boolean).map(JSON.parse)).filter(g => !g.stuck);
const read = gs => {
  let seats = 0, takers = 0, tw = 0, wide = 0, ww = 0, pm = 0, pmw = 0, col = 0, colw = 0, mem = 0, small = 0, margin = 0;
  for (const g of gs) {
    const fs = g.players.map(p => p.followers).sort((a, b) => b - a); margin += fs[0] - fs[1];
    const w = g.players.find(p => p.win); if (w && w.members.length <= 5) small++;
    for (const p of g.players) { if (p.seat === g.buyer) continue; seats++; mem += p.memberCount;
      if (p.places[space]) { takers++; tw += p.win; }
      if (p.memberCount >= 20) { wide++; ww += p.win; }
      if (p.members.some(m => /^(Patriarch|Mob) /.test(m))) { pm++; pmw += p.win; }
      const c = p.members.filter(m => m.endsWith(`(${color})`)).length; if (c >= 3) { col++; colw += p.win; } } }
  const pc = (a, b) => b ? `${Math.round(100 * a / b)}% of ${b}` : '-';
  return `games ${gs.length} | ${space} takers won ${pc(tw, takers)} | ${color} 3+ cults won ${pc(colw, col)} | 20+ member cults ${pc(wide, seats)} of seats, won ${pc(ww, wide)} | Patriarch/Mob holders won ${pc(pmw, pm)} | avg members ${(mem / seats).toFixed(1)} | winners with 5 or fewer cards ${pc(small, gs.length)} | margin ${(margin / gs.length).toFixed(1)}`;
};
console.log('base :', read(load('base')));
console.log(arm.padEnd(5), ':', read(load(arm)));
