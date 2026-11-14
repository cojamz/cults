// Dump every member and space the engine knows (live, cut, retired, and switch candidates when REPLACE env is set).
//   node scripts/quality/menu/extract.mjs > out.json
import { quadrant, allQuadrantIds } from '../../../src/engine/v4/index.js';
import { CUT, CUT10 } from '../../../src/engine/v4/content/cull.js';
import { ARTIFACTS } from '../../../src/engine/v4/core.js';
const CLOAKS = new Set(Object.values(ARTIFACTS)); // each color's cloak is an artifact, not a member
import * as idx from '../../../src/engine/v4/content/index.js';
import { sphereVersion } from '../../../src/v4/tables.js';
const out = { members: [], spaces: [] };
const price = (m, res) => `${m.s ? `${m.s} ${res} + ` : ''}${m.w} any, worth ${m.f}${m.n > 1 ? `, counts as ${m.n}` : ''}`;
for (const id of allQuadrantIds()) {
  const q = quadrant(id), ver = sphereVersion(id);
  for (const a of q.actions) out.spaces.push({ id: a.id || a.key, name: a.name, text: a.text, color: id, colorName: q.name, round: a.ring, ver });
  for (const m of q.members) out.members.push({ id: m.id, name: m.name, text: m.text, color: id, colorName: q.name, ver, price: price(m, q.resource), cut: CUT.has(m.id), cut10: !!(CUT10 && CUT10.has(m.id)), retired: !!m.retired, artifact: !!m.artifact || CLOAKS.has(m.id), round: m.round ?? m.ring ?? null });
}
const G = idx.GUESTS || [];
const guests = G.length ? G : idx.guestMembers();
for (const m of guests) out.members.push({ id: m.id, name: m.name, text: m.text, color: 'guests', colorName: 'Guests', ver: '2.0', price: price(m, ''), cut: CUT.has(m.id), cut10: !!(CUT10 && CUT10.has(m.id)), retired: !!m.retired, artifact: !!m.artifact });
process.stdout.write(JSON.stringify(out));
