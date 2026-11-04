#!/usr/bin/env node
// Bot logs where a card fired (quality loop v2 gate (c): "a read of 3 bot games' logs where it fired"). Plays Hard-bot
// games on the 10-card deck, By color, with the given card switch already in the environment, the card's color forced
// onto the table and the card forced into one seat's reach (MUST, as trials do, when supported), and prints every log
// line that names the card, game by game, until it has --want games where it fired.
//   REPLACE7=1 BOTSEE=1 node scripts/quality/fires.mjs <Card name> --colors red,purple,blue,yellow [--want 3] [--max 40] [--level hard]
import '../v4-node-stamp.mjs';
import { newGame, step } from '../../src/v4/session/record.js';
import { chooseBotMove } from '../../src/engine/v4/index.js';
import { setBotLevels } from '../../src/engine/v4/bots.js';
import { seededRandom } from '../../src/engine/v4/rng.js';

const args = process.argv.slice(2);
const flag = (name, dflt) => { const i = args.indexOf(name); if (i < 0) return dflt; const v = args[i + 1]; args.splice(i, 2); return v; };
const want = Number(flag('--want', 3)), max = Number(flag('--max', 40)), level = flag('--level', 'hard');
const colors = flag('--colors', 'red,purple,market,yellow').split(',');
const name = args[0];
if (!name) { console.error('usage: fires.mjs <Card name> [--colors a,b,c,d] [--want 3] [--max 40]'); process.exit(2); }
const re = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`);
let got = 0;
for (let seed = 1; seed <= max && got < want; seed++) {
  const rand = seededRandom(seed);
  let s = newGame({ seats: ['Ava', 'Ben', 'Cal', 'Dee'].map(n => ({ name: n, kind: 'bot' })), seed, quadrants: colors, rules: { deck: 10, contests: 'byColor' } });
  setBotLevels(s, [level, level, level, level]);
  while (!s.over) s = step(s, chooseBotMove(s, rand));
  // fired: the card acts ("X's Card ...", "(Card)"), not merely dealt or recruited
  const acts = new RegExp(`'s ${name}\\b|\\(${name}\\)`);
  const all = s.log.map(e => (typeof e === 'string' ? e : e.text ?? JSON.stringify(e)));
  const lines = all.filter(l => re.test(l) && !/^New in the shop/.test(l) && !/ recruited /.test(l));
  if (!all.some(l => acts.test(l))) continue;
  got++;
  console.log(`\n## seed ${seed} (${colors.join(', ')}): ${lines.length} lines`);
  for (const l of lines) console.log(`- ${l}`);
}
console.log(`\n${got} of ${want} games found with ${name} firing.`);
