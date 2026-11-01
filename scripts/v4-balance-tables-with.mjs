// Game numbers whose table deals a color (same draw as v4-balance.mjs). Usage: node scripts/v4-balance-tables-with.mjs <first> <last> [seats=4] [color=red]
import { allQuadrantIds } from '../src/engine/v4/index.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { sphereVersion } from '../src/v4/tables.js';
const [a, b, seats = 4] = process.argv.slice(2, 5).map(Number), color = process.argv[5] || 'red';
const out = [];
for (let g = a; g <= b; g++) {
  const rand = seededRandom(g * 7717 + 3 + seats * 101);
  const pool = allQuadrantIds().filter(q => sphereVersion(q) === '2.0'), quads = [];
  while (quads.length < seats) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  if (quads.includes(color)) out.push(g);
}
console.log(out.join(','));
