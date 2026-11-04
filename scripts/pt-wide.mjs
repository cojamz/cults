// One-off (Cory, Nov 4: "nothing was abused? some kind of loop?"): play N bot games on one table, and for the cult with the
// most members, write its whole log and how each of its members arrived. node scripts/pt-wide.mjs <games> <level> <colors,…>
import { writeFileSync } from 'node:fs';
import { createGame, applyMove, chooseBotMove, memberCount, followers } from '../src/engine/v4/index.js';
const [N = 20, level = 'normal', cols = 'red,trading,yellow,echo'] = process.argv.slice(2);
const quadrants = cols.split(',');
const rows = [];
for (let g = 1; g <= Number(N); g++) {
  let seed = g * 7919 >>> 0;
  const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 2 ** 32; };
  let s = createGame({ seed: g, rules: { deck: 10 }, seats: [1, 2, 3, 4].map(i => ({ name: `P${i}`, kind: 'bot', bot: level })), quadrants });
  let k = 0;
  while (!s.over && k++ < 4000) { const mv = chooseBotMove(s, rnd, { level }); s = applyMove(s, { player: s.pending.player, option: mv.option ?? mv }); }
  const best = [...s.players].sort((a, b) => memberCount(s, b) - memberCount(s, a))[0];
  const win = s.ranking ? s.players[s.ranking[0]] : null;
  rows.push({ g, best: best.name, members: memberCount(s, best), cards: best.members.length, f: followers(s, best), won: win === best, top: win && followers(s, win) });
  if (memberCount(s, best) >= 28) writeFileSync(`/tmp/ptprobe/wide-g${g}.log`, s.log.map(l => (typeof l === 'string' ? l : l.text || JSON.stringify(l))).join('\n'));
}
for (const r of rows) console.log(JSON.stringify(r));
const ms = rows.map(r => r.members).sort((a, b) => a - b);
console.log('members of the widest cult: median', ms[Math.floor(ms.length / 2)], 'max', ms.at(-1), '; widest cult won', rows.filter(r => r.won).length, 'of', rows.length);
