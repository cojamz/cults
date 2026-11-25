#!/usr/bin/env node
// Find a card's key, id, price and status by name, so test commands get the right card. Names can collide:
// "Tax Men" is the live thieves.accomplice and also the idea-pool thieves.bigtax, and the price tools take the first
// match by name. Pass keys to the tools.
//   node .claude/skills/test-apparatus/scripts/card-key.mjs "<name or part>" [...]
import { pathToFileURL } from 'node:url';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', '..');
const m = await import(pathToFileURL(join(root, 'src/engine/v4/content/index.js')).href);
const all = [];
for (const q of m.allQuadrantIds()) {
  const quad = m.quadrant(q);
  for (const d of quad.members || []) all.push({ kind: 'member', color: q, ...d });
  for (const a of quad.actions || []) all.push({ kind: 'space', color: q, ...a });
}
for (const d of m.guestMembers ? m.guestMembers() : []) all.push({ kind: 'member', color: 'grey', ...d });
const status = d => d.retired ? 'retired' : d.pool ? `idea pool (${d.pool})` : d.artifact ? 'artifact' : 'live';
for (const q of process.argv.slice(2)) {
  const hits = all.filter(d => [d.name, d.key, d.id].some(x => String(x || '').toLowerCase().includes(q.toLowerCase())));
  console.log(`"${q}": ${hits.length} match${hits.length === 1 ? '' : 'es'}${hits.filter(h => status(h) === 'live').length > 1 || hits.length > 1 ? '  (more than one: pass the key)' : ''}`);
  for (const d of hits) console.log(`  ${status(d).padEnd(16)} ${d.kind.padEnd(6)} key=${d.key}  id=${d.id}  ${d.name}${d.kind === 'member' ? `  [${d.s} ${d.color} + ${d.w} any, worth ${d.f ?? 1}]` : `  ${d.ring || ''}`}: ${d.text}`);
}
