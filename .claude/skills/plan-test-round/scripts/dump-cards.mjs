#!/usr/bin/env node
// Every live member and wheel space in a checkout, as JSON: { members: {id: {name,text,s,w,f}}, spaces: {id: {name,text,ring}} }.
//   node dump-cards.mjs <repo root>      (plan.mjs runs it once per commit; it imports that checkout's content files)
import { pathToFileURL } from 'node:url';
import { join } from 'node:path';
const root = process.argv[2] || process.cwd();
const m = await import(pathToFileURL(join(root, 'src/engine/v4/content/index.js')).href);
const members = {}, spaces = {};
const live = d => d && !d.retired && !d.pool && !d.artifact;
for (const q of m.allQuadrantIds()) {
  const quad = m.quadrant(q);
  for (const d of quad.members || []) if (live(d)) members[d.id] = { name: d.name, color: q, text: d.text, s: d.s, w: d.w, f: d.f };
  for (const a of quad.actions || []) if (live(a)) spaces[a.id] = { name: a.name, color: q, ring: a.ring, text: a.text };
}
for (const d of (m.guestMembers ? m.guestMembers() : [])) if (live(d)) members[d.id] = { name: d.name, color: 'grey', text: d.text, s: d.s, w: d.w, f: d.f };
process.stdout.write(JSON.stringify({ members, spaces }));
