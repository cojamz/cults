import { readFileSync, readdirSync } from 'node:fs';
const dir = process.argv[2], pre = process.argv[3];
const files = readdirSync(dir).filter(f => f.startsWith(pre) && f.endsWith('.jsonl'));
let g=0, rounds=0, sole=0, tied=0, seatWins=[0,0,0,0], winGame=0, soleN=0, owlsWin=0, owlsRounds=0, mainPurpleWin=0, mainPurpleRounds=0, sweeps=0, sweepWin=0, sameAllRounds=0;
for (const f of files) for (const line of readFileSync(`${dir}/${f}`,'utf8').split('\n')) {
  if (!line.trim()) continue; const o = JSON.parse(line);
  if (o.seats!==4 || !o.table.includes('purple') || !o.contests?.length) continue; g++;
  const winners = o.contests.map(c => c.purple || []);
  const owls = o.players.filter(p => (p.members||[]).some(m=>m.startsWith('Night Owls'))).map(p=>p.seat);
  const mainP = o.players.filter(p => { const ms=(p.members||[]).filter(m=>m.endsWith('(purple)')).length; return ms>=3; }).map(p=>p.seat);
  winners.forEach((w,ri) => { rounds++; if (w.length===1){ sole++; seatWins[w[0]]++; if (o.players[w[0]].win) winGame++; soleN++; if (owls.includes(w[0])) owlsWin++; if (mainP.includes(w[0])) mainPurpleWin++; } else if (w.length>1) tied++; });
  if (owls.length) owlsRounds += 3*owls.length; if (mainP.length) mainPurpleRounds+=3*mainP.length;
  if (winners.every(w=>w.length===1) && winners.every(w=>w[0]===winners[0][0])) { sweeps++; if (o.players[winners[0][0]].win) sweepWin++; }
}
console.log(JSON.stringify({games:g, rounds, soleWinner:sole, tied, noWinner: rounds-sole-tied, soleWinnerBySeat: seatWins, soleWinnerWonGame: (winGame/soleN*100).toFixed(0)+'%', owlsHolderTookIt: owlsWin, purpleMainTookIt: mainPurpleWin, sweeps, sweepWonGame: sweepWin, owlsShare:(owlsWin/owlsRounds*100).toFixed(0)+"% of "+owlsRounds, mainShare:(mainPurpleWin/mainPurpleRounds*100).toFixed(0)+"% of "+mainPurpleRounds}));
