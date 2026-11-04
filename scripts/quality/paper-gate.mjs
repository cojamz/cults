#!/usr/bin/env node
// The blind paper gate (principles.md "Paper gate rules v1.2"): the old card and its candidates scored in the same call
// under shuffled labels, from printed text and the color's live board only (never the pitch file), plus one decoy:
// a live card of the same color shown twice under two labels. Then the text and shape budgets.
//
//   node scripts/quality/paper-gate.mjs bundle <spec.json>   -> /mnt/project-files/quality/evals/gate/<id>/ (cards.md for judges, key.json hidden)
//   node scripts/quality/paper-gate.mjs score <id>           -> result.md / result.json from judge-*.json in that folder
//
// spec.json: { "id": "B-debutantes", "batch": "b1", "lane": "B", "color": "silver", "kind": "member",
//              "old": "Debutantes", "candidates": [{ "name": "Chaperones", "price": "5 silver + 4 any, worth 2, counts as 2", "text": "..." }],
//              "rules": "optional rulebook lines the judges need (e.g. the Goes Last token)", "seed": 1 }
// Judges: 3 fresh agents given .claude/agents/gate-judge.md and the folder; each writes judge-<n>.json.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { boardText, findCard } from './board.mjs';
import { median, rng, shuffle } from './lib.mjs';
import { quadrant } from '../../src/engine/v4/index.js';
import { CUT, CUT10 } from '../../src/engine/v4/content/cull.js';
import { guestMembers } from '../../src/engine/v4/content/index.js';

const ROOT = process.env.QUALITY_DIR || '/mnt/project-files/quality';
const GATE = join(ROOT, 'evals', 'gate');
const [cmd, arg] = process.argv.slice(2);
const words = t => String(t || '').replace(/[“”"]/g, '').split(/\s+/).filter(Boolean).length;
const sentences = t => String(t || '').split(/(?<=[.!?])\s+(?=[A-Z+])/).filter(s => s.trim()).length;
// shapes the budget counts once per batch (process log, batch 1 change 2)
const SHAPES = [
  ['per rival with more/fewer', /per rival (with|who has) (more|fewer|less)/i],
  ['whenever a rival', /whenever a rival/i],
  ['+1 follower per X', /\+\d+ followers? (per|for each)/i],
  ['each rival with/holding X gives you', /each rival (with|holding|who)/i],
];
export const shapesOf = t => SHAPES.filter(([, re]) => re.test(t)).map(([n]) => n);
const R = ['', 'I', 'II', 'III'];

if (cmd === 'bundle') {
  const spec = JSON.parse(readFileSync(arg, 'utf8'));
  const old = findCard(spec.old, spec.color);
  if (!old) { console.error(`No live card named ${spec.old}`); process.exit(2); }
  const kind = spec.kind || old.kind, rand = rng(spec.seed ?? [...spec.id].reduce((a, c) => a * 31 + c.charCodeAt(0), 7));
  // decoy: another live card of this color and kind, never the old one and never protected
  const prot = new Set((spec.protected || []).map(s => s.toLowerCase()));
  const q = old.qid === 'guests' ? null : quadrant(old.qid);
  const inDeck = m => !CUT.has(m.id) && !CUT10.has(m.id) && !m.retired && !m.artifact;
  const pool = kind === 'space' ? q.actions.map(a => ({ name: a.name, text: a.text, round: a.ring })) :
    (q ? q.members : guestMembers()).filter(inDeck).map(m => ({ name: m.name, text: m.text, price: findCard(m.name, old.qid)?.price }));
  const others = pool.filter(c => c.name.toLowerCase() !== old.name.toLowerCase() && !prot.has(c.name.toLowerCase()));
  const decoy = spec.decoy === false ? null : (spec.decoy ? others.find(c => c.name === spec.decoy) : others[Math.floor(rand() * others.length)]);
  const round = kind === 'space' ? old.round : null;
  const opts = [{ role: 'old', name: old.name, text: old.text, price: old.price }, ...spec.candidates.map((c, i) => ({ role: `cand${i + 1}`, ...c, price: c.price ?? old.price }))];
  if (decoy) opts.push({ role: 'decoy', ...decoy }, { role: 'decoy-copy', ...decoy });
  const labels = 'ABCDEFGHIJ'.split('');
  const shuffled = shuffle(opts, rand).map((o, i) => ({ ...o, label: labels[i] }));
  const dir = join(GATE, spec.id); mkdirSync(dir, { recursive: true });
  const without = [old.name, ...(decoy ? [decoy.name] : [])];
  const head = kind === 'space' ? `a ${old.color} round ${R[round]} wheel space` : `a ${old.color} member`;
  const md = [`# Paper gate ${spec.id}: score every card below`, '',
    `Each lettered card is a version of ${head}. Score each one on its own, as if it were the one on the table, against the color's board below. Some may be near-copies of each other or of live cards; judge each on its own text.`, '',
    ...shuffled.map(o => `- **${o.label}. ${o.name}**${o.price ? ` [${o.price}]` : ''}${o.round ? ` (round ${R[o.round]} space)` : round ? ` (round ${R[round]} space)` : ''}: ${o.text}`), '',
    spec.rules ? `Rules the cards refer to: ${spec.rules}\n` : '',
    `## The board around it (live; the slot being judged and one other card left out)`, boardText([old.qid === 'guests' ? 'guests' : old.qid], { without }),
    `## The other colors' spaces (for cross-color reads)`, boardText([], { members: false }).split('\n').filter(l => !l.includes(old.color + ' ·') || true).join('\n')].join('\n');
  writeFileSync(join(dir, 'cards.md'), md);
  writeFileSync(join(dir, 'key.json'), JSON.stringify({ spec, kind, round, old: old.name, options: shuffled.map(o => ({ label: o.label, role: o.role, name: o.name, text: o.text })) }, null, 1));
  console.log(`${dir}/cards.md: ${shuffled.length} cards (${shuffled.map(o => o.label).join('')}), decoy ${decoy ? decoy.name : 'none'}`);
} else if (cmd === 'score') {
  const dir = join(GATE, arg), key = JSON.parse(readFileSync(join(dir, 'key.json'), 'utf8'));
  const files = readdirSync(dir).filter(f => /^judge-.*\.json$/.test(f)).sort();
  const js = files.map(f => JSON.parse(readFileSync(join(dir, f), 'utf8')));
  const by = Object.fromEntries(key.options.map(o => [o.label, { ...o, entries: js.map(j => j.find(x => String(x.label).toUpperCase() === o.label)).filter(Boolean) }]));
  for (const o of Object.values(by)) {
    o.totals = o.entries.map(e => e.total ?? e.scores.reduce((a, b) => a + b, 0));
    o.med = median(o.totals); o.q = Array.from({ length: 10 }, (_, i) => median(o.entries.map(e => e.scores[i])));
    o.fails = o.entries.filter(e => e.hardFail).map(e => e.hardFail);
    o.clear2 = o.entries.length && o.entries.every(e => e.scores[0] === 2);
    o.over = o.med >= 13 && o.q[0] > 0 && o.q[2] > 0 && o.q[3] > 0 && o.fails.length < 2;
  }
  const opts = Object.values(by), old = opts.find(o => o.role === 'old');
  const d1 = opts.find(o => o.role === 'decoy'), d2 = opts.find(o => o.role === 'decoy-copy');
  const decoyGap = d1 && d2 ? Math.abs(d1.med - d2.med) : null;
  // per-judge decoy gap too: one judge splitting a card from its copy by 3 is a noisy judge
  const judgeGaps = d1 && d2 ? files.map((f, i) => { const a = js[i].find(x => x.label === d1.label), b = js[i].find(x => x.label === d2.label); return a && b ? Math.abs((a.total ?? 0) - (b.total ?? 0)) : null; }) : [];
  const voided = decoyGap != null && decoyGap >= 2;
  // shape ledger for the batch (one card per shape per batch)
  const ledgerFile = join(GATE, `shapes-${key.spec.batch || 'none'}.json`);
  const ledger = existsSync(ledgerFile) ? JSON.parse(readFileSync(ledgerFile, 'utf8')) : {};
  const oldWords = words(old.text), oldSent = sentences(old.text);
  const res = opts.filter(o => o.role.startsWith('cand')).map(o => {
    const w = words(o.text), budget = Math.max(oldWords + 4, 20), textOk = (w <= budget && sentences(o.text) <= Math.max(1, oldSent)) || o.clear2;
    const shapes = shapesOf(o.text), clash = shapes.filter(s => ledger[s] && ledger[s] !== `${key.spec.id}:${o.name}`);
    const beat = o.med - old.med;
    const pass = !voided && o.over && beat >= 2 && textOk && !clash.length;
    return { name: o.name, label: o.label, text: o.text, median: o.med, totals: o.totals, q: o.q, overBar: o.over, beatsOldBy: beat, words: w, wordBudget: budget, textOk, shapes, shapeClash: clash, hardFails: o.fails, pass,
      why: o.entries.map(e => e.why) };
  });
  const out = { id: key.spec.id, lane: key.spec.lane, batch: key.spec.batch, old: { name: old.name, median: old.med, totals: old.totals, q: old.q }, decoy: d1 ? { name: d1.name, medians: [d1.med, d2.med], gap: decoyGap, judgeGaps } : null, voided, judges: files.length, candidates: res };
  writeFileSync(join(dir, 'result.json'), JSON.stringify(out, null, 1));
  const Q = ['Clear', 'Trackable', 'Feels good', 'Fun', 'Interacts', 'Its color', 'Momentum', 'Agency', 'Catch-up', 'Worth it'];
  const qline = q => q.map((v, i) => `${Q[i]} ${v}`).join(', ');
  const md = [`# Paper gate ${key.spec.id} (${files.length} judges, blind, shuffled)`, '',
    `Old card **${old.name}**: median ${old.med} (${old.totals.join('/')}). ${qline(old.q)}.`,
    d1 ? `Decoy **${d1.name}** scored ${d1.med} and ${d2.med} as two labels (gap ${decoyGap}; per judge ${judgeGaps.join('/')}). ${voided ? 'VOID: the gate is inflated or noisy; fix the prompt before trusting this.' : 'Gate is steady.'}` : 'No decoy.', '',
    ...res.flatMap(c => [`## ${c.pass ? 'PASS' : 'no'}: ${c.name} (median ${c.median}, ${c.totals.join('/')}; ${c.beatsOldBy >= 0 ? '+' : ''}${c.beatsOldBy} on the old card)`,
      `"${c.text}"`, `- ${qline(c.q)}.`,
      `- Bar: ${c.overBar ? 'over' : 'under'}. Beats old by 2: ${c.beatsOldBy >= 2 ? 'yes' : 'no'}. Words ${c.words} of ${c.wordBudget}: ${c.textOk ? 'ok' : 'over budget'}. Shapes: ${c.shapes.join(', ') || 'none'}${c.shapeClash.length ? ` (already used this batch: ${c.shapeClash.join(', ')})` : ''}.${c.hardFails.length ? ` Hard fail from ${c.hardFails.length}: ${c.hardFails[0]}` : ''}`,
      ...c.why.map(w => `- Judge: ${w}`), ''])].join('\n');
  writeFileSync(join(dir, 'result.md'), md);
  // a pass claims its shapes for the batch
  for (const c of res.filter(c => c.pass)) for (const s of c.shapes) ledger[s] ??= `${key.spec.id}:${c.name}`;
  writeFileSync(ledgerFile, JSON.stringify(ledger, null, 1));
  console.log(md);
} else { console.error('usage: paper-gate.mjs bundle <spec.json> | score <id>'); process.exit(2); }
