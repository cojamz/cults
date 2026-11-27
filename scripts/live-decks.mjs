// Every member a new game deals, by color, with its printed text and price (default rules, 10-card decks).
//   node scripts/live-decks.mjs [color ...]
import { createGame } from '../src/engine/v4/core.js';
import { defById, allQuadrantIds, quadrant } from '../src/engine/v4/content/index.js';
const want = process.argv.slice(2);
const ids = allQuadrantIds();
const out = {};
for (let i = 0; i < ids.length; i += 2) {
  const qs = ids.slice(i, i + 2).length === 2 ? ids.slice(i, i + 2) : [ids[i], ids[0]];
  const g = createGame({ seats: [{}, {}], quadrants: qs, rules: { deck: 10 } });
  for (const c of Object.values(g.cards)) {
    const d = defById(c.def);
    const q = d.id.split('.')[0];
    (out[q] ||= new Map()).set(d.id, d);
  }
}
for (const [q, m] of Object.entries(out)) {
  if (want.length && !want.includes(q)) continue;
  console.log(`\n## ${q} (${m.size})`);
  for (const d of m.values()) console.log(`  ${d.id}  ${d.name}  [${d.s ?? ''}+${d.w ?? ''}]  ${d.text}`);
}
