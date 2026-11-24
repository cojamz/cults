// Renames the emoji-mode keys (spriteId of a member's name) with design/names/members-map.json, all at once so
// swaps like Dyer -> Gilder and Assimilators -> Dyer don't collide. Not idempotent: name the card files of this batch.
//   node scripts/names-emoji.mjs [--dry] market.js purple.js ...
import { readFileSync, writeFileSync } from 'node:fs';
import { spriteId } from '../src/v4/art/index.js';
const map = JSON.parse(readFileSync('design/names/members-map.json', 'utf8'));
const keys = new Map();
const only = process.argv.slice(2).filter(a => a !== '--dry');
for (const [file, o] of Object.entries(map)) if (only.length && only.includes(file)) for (const [a, b] of Object.entries(o)) if (a !== b) keys.set(spriteId(a), spriteId(b));
const f = 'src/v4/art/emojiMembers.js';
let n = 0;
const out = readFileSync(f, 'utf8').replace(/^(\s*)(?:'([^']+)'|([a-z0-9]+)):/gm, (all, sp, q, bare) => {
  const k = q || bare; if (!keys.has(k)) return all; n++;
  const nk = keys.get(k); return `${sp}${/^[a-z][a-z0-9]*$/.test(nk) ? nk : `'${nk}'`}:`;
});
console.log(`${n} keys renamed`);
if (!process.argv.includes('--dry')) writeFileSync(f, out);
