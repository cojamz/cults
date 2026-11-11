#!/usr/bin/env node
// The live board for judges: each color's spaces (round, name, text), its By color contest (the primary setting), and
// its members in the 10-card deck (cost, worth, text). Same source as live-board.mjs, plus the contest players
// actually play for. Env switches (REPLACE7=1 ...) apply, so a lane can print its own board.
//   node scripts/quality/board.mjs [color ...] [--without "Name,Name"] [--members-only|--spaces-only]
import { quadrant, allQuadrantIds, createGame } from '../../src/engine/v4/index.js';
import { scoringOf } from '../../src/engine/v4/core.js';
import { CUT, CUT10 } from '../../src/engine/v4/content/cull.js';
import { guestMembers } from '../../src/engine/v4/content/index.js';
import { sphereVersion } from '../../src/v4/tables.js';

const ALIAS = { green: 'echo', blue: 'market', magenta: 'thieves', white: 'trading', grey: 'guests', greys: 'guests', guest: 'guests' };
export function boardText(colors = [], { without = [], members = true, spaces = true, extra = [], extraSpaces = [] } = {}) {
  const drop = new Set(without.map(s => s.toLowerCase()));
  const ids = (colors.length ? colors.map(c => ALIAS[c.toLowerCase()] || c.toLowerCase()) : [...allQuadrantIds().filter(q => sphereVersion(q) === '2.0'), 'guests']);
  const L = [], R = ['', 'I', 'II', 'III'];
  const inDeck = m => !CUT.has(m.id) && !(CUT10 && CUT10.has(m.id)) && !m.retired && !m.artifact;
  for (const id of ids) {
    if (id === 'guests') {
      if (!members) continue;
      L.push('', '## Guests (no color; cost only "any"; can join any cult)');
      for (const m of guestMembers().filter(inDeck)) if (!drop.has(m.name.toLowerCase())) L.push(`    · ${m.name} [${m.w} any, worth ${m.f}${m.n > 1 ? `, counts as ${m.n}` : ''}] ${m.text ?? ''}`);
      for (const m of extra.filter(x => /^guests?$|^grey$|^gray$/i.test(x.color))) L.push(`    · ${m.name} [${m.price}] ${m.text}`);
      continue;
    }
    const q = quadrant(id);
    let contest = '';
    try { const s = createGame({ seats: [{ kind: 'bot' }, { kind: 'bot' }, { kind: 'bot' }, { kind: 'bot' }], seed: 1, quadrants: [id, ...allQuadrantIds().filter(x => x !== id && sphereVersion(x) === '2.0').slice(0, 3)], rules: { deck: 10, contests: 'byColor' } }); const c = scoringOf(s, id); contest = `${c.label} (counts ${c.counts})`; } catch (e) { contest = '?'; }
    L.push('', `## ${q.name} · resource: ${q.resource} · contest each round (By color): ${contest}`);
    if (spaces) for (const a of [...q.actions].sort((x, y) => x.ring - y.ring)) if (!drop.has(a.name.toLowerCase())) L.push(`  ${R[a.ring] || a.ring}  ${a.name}: ${a.text}`);
    if (spaces) for (const a of extraSpaces.filter(x => (ALIAS[x.color.toLowerCase()] || x.color.toLowerCase()) === id)) L.push(`  ${R[a.round] || a.round}  ${a.name}: ${a.text}`);
    if (members) for (const m of q.members.filter(inDeck)) if (!drop.has(m.name.toLowerCase())) L.push(`    · ${m.name} [${m.s ? `${m.s} ${q.resource} + ` : ''}${m.w} any, worth ${m.f}${m.n > 1 ? `, counts as ${m.n}` : ''}] ${m.text ?? ''}`);
    // cards in bot test that the lanes want on the board: [{color, name, price, text}]
    if (members) for (const m of extra.filter(x => (ALIAS[x.color.toLowerCase()] || x.color.toLowerCase()) === id)) L.push(`    · ${m.name} [${m.price}] ${m.text}`);
  }
  return L.join('\n') + '\n';
}
/** Find a live card by name: { kind, name, text, color, round?, cost? } */
export function findCard(name, colorHint) {
  const n = name.toLowerCase().trim(), hint = colorHint && (ALIAS[colorHint.toLowerCase()] || colorHint.toLowerCase());
  const hits = [];
  // 2.0 colors first (the live game); the old test stand-ins (blue, green, guest) and off-table colors only as a fallback
  const order = [...allQuadrantIds().filter(q => sphereVersion(q) === '2.0'), ...allQuadrantIds().filter(q => sphereVersion(q) !== '2.0' && !['blue', 'green', 'guest'].includes(q))];
  for (const id of order) { let q; try { q = quadrant(id); } catch { continue; }
    for (const a of q.actions) if (a.name.toLowerCase() === n) hits.push({ kind: 'space', name: a.name, text: a.text, color: q.name, qid: id, round: a.ring });
    for (const m of q.members) if (m.name.toLowerCase() === n && !m.retired) hits.push({ kind: 'member', name: m.name, text: m.text, color: q.name, qid: id, def: m, price: `${m.s ? `${m.s} ${q.resource} + ` : ''}${m.w} any, worth ${m.f}${m.n > 1 ? `, counts as ${m.n}` : ''}` });
  }
  for (const m of guestMembers()) if (m.name.toLowerCase() === n && !m.retired) hits.push({ kind: 'member', name: m.name, text: m.text, color: 'Guests', qid: 'guests', def: m, price: `${m.w} any, worth ${m.f}${m.n > 1 ? `, counts as ${m.n}` : ''}` });
  // a card in the live 10-card deck beats a cut or stand-in card of the same name
  const live = h => h.kind === 'space' || (!CUT.has(h.def.id) && !CUT10.has(h.def.id) && !h.def.artifact);
  const pool = hint ? hits.filter(h => h.qid === hint || h.color.toLowerCase() === hint) : hits;
  return pool.find(live) || pool[0] || hits.find(live) || hits[0] || null;
}
if (import.meta.url === `file://${process.argv[1]}`) {
  const a = process.argv.slice(2), i = a.indexOf('--without'); const without = i >= 0 ? a.splice(i, 2)[1].split(',') : [];
  const mo = a.includes('--members-only'), so = a.includes('--spaces-only');
  process.stdout.write(boardText(a.filter(x => !x.startsWith('--')), { without, members: !so, spaces: !mo }));
}
