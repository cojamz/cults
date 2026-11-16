// per-space read for 4p By color games: uses, taker win share, ties to wide cults and Patriarch/Mob
import { readFileSync } from 'node:fs';
const files = process.argv.slice(2);
const games = files.flatMap(f => readFileSync(f, 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l))).filter(g => !g.stuck && g.seats === 4);
const S = {}; const B = {}; const bk = n => Math.min(6, Math.floor(n / 5));
for (const g of games) for (const p of g.players) { if (p.seat === g.buyer) continue; const b = B[bk(p.memberCount)] ||= { n: 0, w: 0 }; b.n++; b.w += p.win ? 1 : 0; }
 let seatsN = 0, wideSeats = 0, pmSeats = 0, wideWins = 0, pmWins = 0;
const W = Number(process.env.WIDE || 20);
for (const g of games) {
  const spacesOnTable = new Set();
  for (const p of g.players) for (const k of Object.keys(p.places || {})) spacesOnTable.add(k);
  for (const p of g.players) {
    if (p.seat === g.buyer) continue;
    seatsN++;
    const wide = p.memberCount >= W, pm = p.members.some(m => m.startsWith('Patriarch')) || p.members.some(m => m.startsWith('Mob '));
    if (wide) { wideSeats++; if (p.win) wideWins++; }
    if (pm) { pmSeats++; if (p.win) pmWins++; }
    for (const [k, n] of Object.entries(p.places || {})) {
      const s = S[k] ||= { k, uses: 0, takers: 0, wins: 0, wideUses: 0, pmUses: 0, mc: 0, games: new Set(), winnerUses: 0, otherUses: 0 };
      s.uses += n; s.takers++; s.exp = (s.exp || 0) + B[bk(p.memberCount)].w / B[bk(p.memberCount)].n; s.wins += p.win ? 1 : 0; s.mc += p.memberCount; s.games.add(g.game);
      if (wide) s.wideUses += n; if (pm) s.pmUses += n;
      if (p.win) s.winnerUses += n; else s.otherUses += n;
    }
  }
}
// seats-per-group baseline uses
const rows = Object.values(S).map(s => {
  const G = s.games.size;
  return { k: s.k, games: G, usesPerGame: (s.uses / G).toFixed(1), takerWin: Math.round(100 * s.wins / s.takers), lift: Math.round(100 * (s.wins - s.exp) / s.takers),
    takerMembers: (s.mc / s.takers).toFixed(1), wideShare: Math.round(100 * s.wideUses / s.uses), pmShare: Math.round(100 * s.pmUses / s.uses),
    winnerPerSeat: (s.winnerUses / G).toFixed(2), otherPerSeat: (s.otherUses / (G * 3)).toFixed(2) };
});
console.log(`games ${games.length}, seats ${seatsN}; wide(${W}+) seats ${wideSeats} won ${Math.round(100*wideWins/wideSeats)}%; Patriarch/Mob seats ${pmSeats} won ${Math.round(100*pmWins/pmSeats)}%`);
console.log(`share of all seats that are wide: ${Math.round(100*wideSeats/seatsN)}%, P/M: ${Math.round(100*pmSeats/seatsN)}%`);
const key = process.env.SORT || 'wideShare';
rows.sort((a, b) => b[key] - a[key]);
console.log('space | games | uses/game | taker win% | vs same-size | taker members | % uses by wide | % uses by P/M | winner uses | other uses');
for (const r of rows) console.log([r.k, r.games, r.usesPerGame, r.takerWin, r.lift, r.takerMembers, r.wideShare, r.pmShare, r.winnerPerSeat, r.otherPerSeat].join(' | '));
