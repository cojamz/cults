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
export function boardText(colors = [], { without = [], members = true, spaces = true } = {}) {
  const drop = new Set(without.map(s => s.toLowerCase()));
  const ids = (colors.length ? colors.map(c => ALIAS[c.toLowerCase()] || c.toLowerCase()) : [...allQuadrantIds().filter(q => sphereVersion(q) === '2.0'), 'guests']);
  const L = [], R = ['', 'I', 'II', 'III'];
  const inDeck = m => !CUT.has(m.id) && !(CUT10 && CUT10.has(m.id)) && !m.retired && !m.artifact;
  for (const id of ids) {
    if (id === 'guests') {
      if (!members) continue;
      L.push('', '## Guests (no color; cost only "any"; can join any cult)');
      for (const m of guestMembers().filter(inDeck)) if (!drop.has(m.name.toLowerCase())) L.push(`    · ${m.name} [${m.w} any, worth ${m.f}${m.n > 1 ? `, counts as ${m.n}` : ''}] ${m.text ?? ''}`);
      continue;
    }
    const q = quadrant(id);
    let contest = '';
    try { const s = createGame({ seats: [{ kind: 'bot' }, { kind: 'bot' }, { kind: 'bot' }, { kind: 'bot' }], seed: 1, quadrants: [id, ...allQuadrantIds().filter(x => x !== id && sphereVersion(x) === '2.0').slice(0, 3)], rules: { deck: 10, contests: 'byColor' } }); const c = scoringOf(s, id); contest = `${c.label} (counts ${c.counts})`; } catch (e) { contest = '?'; }
    L.push('', `## ${q.name} · resource: ${q.resource} · contest each round (By color): ${contest}`);
    if (spaces) for (const a of [...q.actions].sort((x, y) => x.ring - y.ring)) if (!drop.has(a.name.toLowerCase())) L.push(`  ${R[a.ring] || a.ring}  ${a.name}: ${a.text}`);
    if (members) for (const m of q.members.filter(inDeck)) if (!drop.has(m.name.toLowerCase())) L.push(`    · ${m.name} [${m.s ? `${m.s} ${q.resource} + ` : ''}${m.w} any, worth ${m.f}${m.n > 1 ? `, counts as ${m.n}` : ''}] ${m.text ?? ''}`);
  }
  return L.join('\n') + '\n';
}
/** Find a live card by name: { kind, name, text, color, round?, cost? } */
export function findCard(name, colorHint) {
  const n = name.toLowerCase().trim(), hint = colorHint && (ALIAS[colorHint.toLowerCase()] || colorHint.toLowerCase());
  const hits = [];
  for (const id of allQuadrantIds()) { let q; try { q = quadrant(id); } catch { continue; }
    for (const a of q.actions) if (a.name.toLowerCase() === n) hits.push({ kind: 'space', name: a.name, text: a.text, color: q.name, qid: id, round: a.ring });
    for (const m of q.members) if (m.name.toLowerCase() === n && !m.retired) hits.push({ kind: 'member', name: m.name, text: m.text, color: q.name, qid: id, def: m, price: `${m.s ? `${m.s} ${q.resource} + ` : ''}${m.w} any, worth ${m.f}${m.n > 1 ? `, counts as ${m.n}` : ''}` });
  }
  for (const m of guestMembers()) if (m.name.toLowerCase() === n && !m.retired) hits.push({ kind: 'member', name: m.name, text: m.text, color: 'Guests', qid: 'guests', def: m, price: `${m.w} any, worth ${m.f}${m.n > 1 ? `, counts as ${m.n}` : ''}` });
  return (hint ? hits.filter(h => h.qid === hint || h.color.toLowerCase() === hint) : hits)[0] || hits[0] || null;
}
if (import.meta.url === `file://${process.argv[1]}`) {
  const a = process.argv.slice(2), i = a.indexOf('--without'); const without = i >= 0 ? a.splice(i, 2)[1].split(',') : [];
  const mo = a.includes('--members-only'), so = a.includes('--spaces-only');
  process.stdout.write(boardText(a.filter(x => !x.startsWith('--')), { without, members: !so, spaces: !mo }));
}
