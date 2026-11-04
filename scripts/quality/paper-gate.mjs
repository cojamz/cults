#!/usr/bin/env node
// The blind paper gate (principles.md "Paper gate rules v1.2"): the old card and its candidates scored in the same call
// under shuffled labels, from printed text and the color's live board only (never the pitch file), plus one decoy:
// a live card of the same color shown twice under two labels. Then the text and shape budgets.
//
//   node scripts/quality/paper-gate.mjs bundle <spec.json>   -> /mnt/project-files/quality/evals/gate/<id>/ (cards.md for judges, key.json hidden)
//   node scripts/quality/paper-gate.mjs score <id>           -> result.md / result.json from judge-*.json in that folder
//
// A candidate that passes then goes through the whole-set check (principles.md v2): `setcheck <id>` writes set.md, the
// color's board once per version of the slot (old and each passing candidate, shuffled), scored as a set by fresh judges
// (.claude/agents/set-judge.md); `setscore <id>` fails any swap that lowers the set's median score.
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

const BEAT = Number(process.env.GATE_BEAT || 3);
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

function bundle(spec, extra = []) {
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
  // the in-folder decoy pair (a card beside its own copy) is only for a lone bundle; a batch uses one disguised decoy (batch)
  const decoy = spec.decoy === true ? others[Math.floor(rand() * others.length)] : null;
  const round = kind === 'space' ? old.round : null;
  const opts = [{ role: 'old', name: old.name, text: old.text, price: spec.oldPrice ?? old.price }, ...spec.candidates.map((c, i) => ({ role: `cand${i + 1}`, ...c, price: c.price ?? old.price })), ...extra];
  if (decoy) opts.push({ role: 'decoy', ...decoy }, { role: 'decoy-copy', ...decoy });
  const labels = 'ABCDEFGHIJ'.split('');
  const shuffled = shuffle(opts, rand).map((o, i) => ({ ...o, label: labels[i] }));
  const dir = join(GATE, spec.id); mkdirSync(dir, { recursive: true });
  const without = [old.name, ...(decoy ? [decoy.name] : []), ...extra.filter(e => e.real).map(e => e.real)];
  const head = kind === 'space' ? `a ${old.color} round ${R[round]} wheel space` : `a ${old.color} member`;
  const md = [`# Paper gate ${spec.id}: score every card below`, '',
    `Each lettered card is a version of ${head}. Score each one on its own, as if it were the one on the table, against the color's board below. Some may be near-copies of each other or of live cards; judge each on its own text.`, '',
    ...shuffled.map(o => `- **${o.label}. ${o.name}**${o.price ? ` [${o.price}]` : ''}${o.round ? ` (round ${R[o.round]} space)` : round ? ` (round ${R[round]} space)` : ''}: ${o.text}`), '',
    spec.rules ? `Rules the cards refer to: ${spec.rules}\n` : '',
    `## The board around it (live; the slot being judged and one other card left out)`, boardText([old.qid === 'guests' ? 'guests' : old.qid], { without }),
    `## The other colors' spaces (for cross-color reads)`, boardText([], { members: false }).split('\n').filter(l => !l.includes(old.color + ' ·') || true).join('\n')].join('\n');
  writeFileSync(join(dir, 'cards.md'), md);
  writeFileSync(join(dir, 'key.json'), JSON.stringify({ spec, kind, round, old: old.name, options: shuffled.map(o => ({ label: o.label, role: o.role, name: o.name, text: o.text, ...(o.price ? { price: o.price } : {}), ...(o.real ? { real: o.real } : {}) })) }, null, 1));
  return { dir, old, q, kind, others, n: shuffled.length };
}

// ---- batches: every gate of a batch judged by the same 3 judges, plus the anchors folder (fixed cards whose medians
// must hold still) and one disguised decoy: a live card renamed and slipped into one gate as a candidate, its real
// self scored among the anchors. Disguised minus real is how much "looks new" is worth; 2 or more voids the batch.
// Double Down (Gold) left the list on b3: Gold isn't on any live table. b2 and b3 printed Recluse with an old Blue stand-in's
// price (fixed in findCard), so those two are left out of the anchor check for b2 and b3 (BAD_ANCHORS).
const ANCHORS = ['Impressionist', 'Makeover', 'Overtime', 'Con Men', 'Recluse', 'Peek', 'Spree', 'Initiation', 'Largesse', 'Poach'];
const BAD_ANCHORS = { b2: ['Recluse', 'Double Down'], b3: ['Recluse', 'Double Down'] };
const DISGUISE = { 1: ['Newcomer', 'Lodger', 'Stranger', 'Tenant'], 2: ['Newcomers', 'Lodgers', 'Strangers', 'Tenants'] };
const rubricHash = () => { const t = readFileSync(join(ROOT, 'principles.md'), 'utf8'); const a = t.indexOf('## The rubric'), b = t.indexOf('\n## ', a + 5); let h = 7; for (const c of t.slice(a, b)) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h.toString(36); };
function batch(id, specFiles) {
  const rand = rng([...id].reduce((a, c) => a * 31 + c.charCodeAt(0), 11));
  const specs = specFiles.map(f => JSON.parse(readFileSync(f, 'utf8')));
  // the decoy: a live member of one gate's color, not that gate's old card, not protected, not an anchor
  const memberGates = specs.filter(s => (s.kind || 'member') === 'member' && s.color !== 'guests');
  const host = memberGates[Math.floor(rand() * memberGates.length)] || null;
  let decoy = null;
  const folders = [];
  for (const spec of specs) {
    let extra = [];
    if (spec === host) {
      const old = findCard(spec.old, spec.color), q = quadrant(old.qid);
      const pool = q.members.filter(m => !CUT.has(m.id) && !CUT10.has(m.id) && !m.retired && m.name !== old.name && !ANCHORS.includes(m.name) && !specs.some(x => x.old === m.name) && !(spec.protected || []).includes(m.name));
      const m = pool[Math.floor(rand() * pool.length)], card = findCard(m.name, old.qid);
      const names = DISGUISE[m.n > 1 ? 2 : 1], name = names[Math.floor(rand() * names.length)];
      decoy = { gate: spec.id, real: m.name, name, text: m.text, price: card.price };
      extra = [{ role: 'decoy', name, text: m.text, price: card.price, real: m.name }];
    }
    const b = bundle({ ...spec, decoy: false }, extra); folders.push(spec.id);
  }
  // anchors folder: the anchors and the decoy's real card, on the whole live board
  const dir = join(GATE, `anchors-${id}`); mkdirSync(dir, { recursive: true });
  // the decoy's real self is scored here only when no ranking round exists to compare with: the same judges seeing
  // both recognised the copy (gap 0 in b2 to b4), so the reference is now the latest ranking round's median
  const ref = decoy && rankingRef(decoy.real);
  if (decoy) decoy.ref = ref;
  const cards = [...ANCHORS, ...(decoy && ref == null ? [decoy.real] : [])].map(n => findCard(n)).filter(Boolean);
  const sh = shuffle(cards, rand).map((c, i) => ({ ...c, label: String.fromCharCode(65 + i) }));
  writeFileSync(join(dir, 'cards.md'), [`# Reference cards: score every card below`, '', 'These are live cards from different colors. Score each one on its own, in its own color, against the whole board below.', '',
    ...sh.map(c => `- **${c.label}. ${c.name}** (${c.color} ${c.kind === 'space' ? `round ${R[c.round]} space` : `member [${c.price}]`}): ${c.text}`), '', '## The whole live board', boardText([])].join('\n'));
  writeFileSync(join(dir, 'key.json'), JSON.stringify({ options: sh.map(c => ({ label: c.label, name: c.name, role: decoy && c.name === decoy.real ? 'decoy-real' : 'anchor' })) }, null, 1));
  const meta = { id, folders: [...folders, `anchors-${id}`], decoy, rubric: rubricHash(), made: new Date().toISOString() };
  writeFileSync(join(GATE, `batch-${id}.json`), JSON.stringify(meta, null, 1));
  console.log(`batch ${id}: ${meta.folders.length} folders; decoy ${decoy ? `${decoy.real} as "${decoy.name}" in ${decoy.gate}` : 'none'}; rubric ${meta.rubric}`);
  console.log(`judges: 3 fresh agents with .claude/agents/gate-judge.md, folders ${meta.folders.map(f => join(GATE, f)).join(' ')}`);
}

function judgeMedians(dir) {
  const key = JSON.parse(readFileSync(join(dir, 'key.json'), 'utf8'));
  const files = readdirSync(dir).filter(f => /^judge-.*\.json$/.test(f)).sort(), js = files.map(f => JSON.parse(readFileSync(join(dir, f), 'utf8')));
  return Object.fromEntries(key.options.map(o => { const es = js.map(j => j.find(x => String(x.label).toUpperCase() === o.label)).filter(Boolean);
    return [o.name, { role: o.role, med: median(es.map(e => e.scores.slice(0, 10).reduce((a, b) => a + b, 0))), n: es.length }]; }));
}

if (cmd === 'bundle') {
  const b = bundle(JSON.parse(readFileSync(arg, 'utf8')));
  console.log(`${b.dir}/cards.md: ${b.n} cards`);
} else if (cmd === 'batch') {
  batch(arg, process.argv.slice(4));
} else if (cmd === 'batchscore') {
  // scores every gate of the batch, then the run's checks: anchors (C1-C10 medians against the baseline for this rubric;
  // a mean shift over 0.5 voids the run) and the disguised decoy (disguised minus real, 2 or more voids)
  const meta = JSON.parse(readFileSync(join(GATE, `batch-${arg}.json`), 'utf8'));
  const anc = judgeMedians(join(GATE, `anchors-${arg}`));
  const baseFile = join(GATE, 'anchors-baseline.json'), base = existsSync(baseFile) ? JSON.parse(readFileSync(baseFile, 'utf8')) : {};
  let shift = null, baseNote;
  const now = Object.fromEntries(Object.entries(anc).filter(([k, v]) => v.role === 'anchor' && !(BAD_ANCHORS[arg] || []).includes(k) && ANCHORS.includes(k)).map(([k, v]) => [k, v.med]));
  if (!base[meta.rubric]) { base[meta.rubric] = { from: arg, medians: now }; writeFileSync(baseFile, JSON.stringify(base, null, 1)); baseNote = `first run on this rubric (${meta.rubric}): it sets the anchors' baseline`; }
  else { const b = base[meta.rubric].medians, ks = Object.keys(now).filter(k => b[k] != null); shift = ks.reduce((a, k) => a + now[k] - b[k], 0) / ks.length; baseNote = `mean shift ${shift.toFixed(2)} against batch ${base[meta.rubric].from}`; }
  let decoyGap = null;
  let decoyRef = null;
  if (meta.decoy) { const g = judgeMedians(join(GATE, meta.decoy.gate)); decoyRef = meta.decoy.ref ?? anc[meta.decoy.real].med; decoyGap = g[meta.decoy.name].med - decoyRef; }
  const void_ = (shift != null && Math.abs(shift) > 0.5) || (decoyGap != null && decoyGap >= 2);
  const lines = [`# Batch ${arg}: paper gate`, '', `Anchors (C1 to C10, median): ${Object.entries(now).map(([k, v]) => `${k} ${v}`).join(', ')}; ${baseNote}.`,
    meta.decoy ? `Decoy: live ${meta.decoy.real} slipped into ${meta.decoy.gate} as "${meta.decoy.name}": ${decoyRef + decoyGap} disguised vs ${decoyRef} as itself${meta.decoy.ref != null ? ' in the latest ranking round' : ''} (gap ${decoyGap}).` : 'No decoy.',
    void_ ? '**VOID: the run moved or rewarded newness; fix the judge prompt and rerun before trusting any pass.**' : 'Run is steady.', ''];
  for (const g of meta.folders.filter(f => !f.startsWith('anchors-'))) {
    process.env.GATE_VOID = void_ ? '1' : '';
    const r = scoreGate(g, void_);
    lines.push(`- ${g} (old ${r.old.name} ${r.old.median}): ${r.candidates.map(c => `${c.name} ${c.median}${c.pass ? ' PASS' : ''}`).join(', ')}`);
  }
  writeFileSync(join(GATE, `batch-${arg}.md`), lines.join('\n') + '\n');
  console.log(lines.join('\n'));
} else if (cmd === 'score') {
  scoreGate(arg, false, true);
} else if (cmd === 'setcheck') {
  // node scripts/quality/paper-gate.mjs setcheck <gate id> [names...]: a set folder for the old card and the named (or every passing) candidate
  console.log(setcheck(arg, process.argv.slice(4)));
} else if (cmd === 'setscore') {
  console.log(setscore(arg));
} else if (cmd === 'claim') {
  claim();
} else { console.error('usage: paper-gate.mjs bundle <spec.json> | batch <id> <spec.json...> | batchscore <id> | score <id> | claim <id> <name>'); process.exit(2); }

function scoreGate(arg, batchVoid, print) {
  const dir = join(GATE, arg), key = JSON.parse(readFileSync(join(dir, 'key.json'), 'utf8'));
  const files = readdirSync(dir).filter(f => /^judge-.*\.json$/.test(f)).sort();
  const js = files.map(f => JSON.parse(readFileSync(join(dir, f), 'utf8')));
  const by = Object.fromEntries(key.options.map(o => [o.label, { ...o, entries: js.map(j => j.find(x => String(x.label).toUpperCase() === o.label)).filter(Boolean) }]));
  // judges may score different rubric versions mid-run (C11, C12 added overnight): total only the questions every judge scored
  // C11 Defendable left the total (12:23am, a watch note now); C12 Elegant counts when every judge scored it
  const K = Math.min(...Object.values(by).flatMap(o => o.entries.map(e => e.scores.length)));
  const tot = e => e.scores.slice(0, 10).reduce((a, b) => a + b, 0) + (K >= 12 ? e.scores[11] : 0);
  for (const o of Object.values(by)) {
    o.totals = o.entries.map(tot);
    o.med = median(o.totals); o.q = Array.from({ length: K }, (_, i) => median(o.entries.map(e => e.scores[i])));
    o.fails = o.entries.filter(e => e.hardFail).map(e => e.hardFail);
    o.clear2 = o.entries.length && o.entries.every(e => e.scores[0] === 2);
    o.over = o.med >= 13 && o.q[0] > 0 && o.q[2] > 0 && o.q[3] > 0 && o.fails.length < 2;
  }
  const opts = Object.values(by).filter(o => o.role !== 'decoy' || !o.real), old = opts.find(o => o.role === 'old');
  const d1 = opts.find(o => o.role === 'decoy'), d2 = opts.find(o => o.role === 'decoy-copy');
  const decoyGap = d1 && d2 ? Math.abs(d1.med - d2.med) : null;
  // per-judge decoy gap too: one judge splitting a card from its copy by 3 is a noisy judge
  const judgeGaps = d1 && d2 ? files.map((f, i) => { const a = js[i].find(x => x.label === d1.label), b = js[i].find(x => x.label === d2.label); return a && b ? Math.abs((a.total ?? 0) - (b.total ?? 0)) : null; }) : [];
  const voided = batchVoid || (decoyGap != null && decoyGap >= 2);
  // shape ledger for the batch (one card per shape per batch)
  const ledgerFile = join(GATE, `shapes-${key.spec.batch || 'none'}.json`);
  const ledger = existsSync(ledgerFile) ? JSON.parse(readFileSync(ledgerFile, 'utf8')) : {};
  const oldWords = words(old.text), oldSent = sentences(old.text);
  const res = opts.filter(o => o.role.startsWith('cand')).map(o => {
    const w = words(o.text), budget = Math.max(oldWords + 4, 20), textOk = (w <= budget && sentences(o.text) <= Math.max(1, oldSent)) || o.clear2;
    const shapes = shapesOf(o.text), clash = shapes.filter(s => ledger[s] && ledger[s] !== `${key.spec.id}:${o.name}`);
    const beat = o.med - old.med;
    const pass = !voided && o.over && beat >= BEAT && textOk; // a shape clash is reported, and blocks only at claim // BEAT: 3 since Cory's v2 notes
    return { name: o.name, label: o.label, text: o.text, median: o.med, totals: o.totals, q: o.q, overBar: o.over, beatsOldBy: beat, words: w, wordBudget: budget, textOk, shapes, shapeClash: clash, hardFails: o.fails, pass,
      why: o.entries.map(e => e.why) };
  });
  const out = { questions: K, id: key.spec.id, lane: key.spec.lane, batch: key.spec.batch, old: { name: old.name, median: old.med, totals: old.totals, q: old.q }, decoy: d1 ? { name: d1.name, medians: [d1.med, d2.med], gap: decoyGap, judgeGaps } : null, voided, judges: files.length, candidates: res };
  writeFileSync(join(dir, 'result.json'), JSON.stringify(out, null, 1));
  const Q = ['Clear', 'Trackable', 'Feels good', 'Fun', 'Interacts', 'Its color', 'Momentum', 'Agency', 'Catch-up', 'Worth it', 'Defendable', 'Elegant'];
  const qline = q => q.map((v, i) => `${Q[i]} ${v}`).join(', ');
  const md = [`# Paper gate ${key.spec.id} (${files.length} judges, blind, shuffled)`, '',
    `Old card **${old.name}**: median ${old.med} (${old.totals.join('/')}). ${qline(old.q)}.`,
    d1 ? `Decoy **${d1.name}** scored ${d1.med} and ${d2.med} as two labels (gap ${decoyGap}; per judge ${judgeGaps.join('/')}). ${voided ? 'VOID: the gate is inflated or noisy; fix the prompt before trusting this.' : 'Gate is steady.'}` : 'No decoy.', '',
    ...res.flatMap(c => [`## ${c.pass ? 'PASS' : 'no'}: ${c.name} (median ${c.median}, ${c.totals.join('/')}; ${c.beatsOldBy >= 0 ? '+' : ''}${c.beatsOldBy} on the old card)`,
      `"${c.text}"`, `- ${qline(c.q)}.`,
      `- Bar: ${c.overBar ? 'over' : 'under'}. Beats old by ${BEAT}: ${c.beatsOldBy >= BEAT ? 'yes' : 'no'}. Words ${c.words} of ${c.wordBudget}: ${c.textOk ? 'ok' : 'over budget'}. Shapes: ${c.shapes.join(', ') || 'none'}${c.shapeClash.length ? ` (already used this batch: ${c.shapeClash.join(', ')})` : ''}.${c.hardFails.length ? ` Hard fail from ${c.hardFails.length}: ${c.hardFails[0]}` : ''}`,
      ...c.why.map(w => `- Judge: ${w}`), ''])].join('\n');
  writeFileSync(join(dir, 'result.md'), md);
  // shapes are claimed only when a lane picks its card (claim), so scoring order never decides who gets a shape
  if (print) console.log(md);
  return out;
}
function claim() {
  // node scripts/quality/paper-gate.mjs claim <id> <candidate name>: the lane's pick takes its shapes for the batch
  const name = process.argv[4], dir = join(GATE, arg), r = JSON.parse(readFileSync(join(dir, 'result.json'), 'utf8'));
  const c = r.candidates.find(x => x.name.toLowerCase() === String(name).toLowerCase());
  if (!c) { console.error(`No candidate ${name} in ${arg}`); process.exit(2); }
  const ledgerFile = join(GATE, `shapes-${r.batch || 'none'}.json`), ledger = existsSync(ledgerFile) ? JSON.parse(readFileSync(ledgerFile, 'utf8')) : {};
  const clash = c.shapes.filter(s => ledger[s] && ledger[s] !== `${arg}:${c.name}`);
  if (clash.length) { console.error(`Shape already taken this batch: ${clash.map(s => `${s} by ${ledger[s]}`).join(', ')}`); process.exit(1); }
  for (const s of c.shapes) ledger[s] = `${arg}:${c.name}`;
  writeFileSync(ledgerFile, JSON.stringify(ledger, null, 1));
  console.log(`claimed ${c.shapes.join(', ') || 'no shapes'} for ${c.name}`);
}

function setcheck(id, names = []) {
  const key = JSON.parse(readFileSync(join(GATE, id, 'key.json'), 'utf8'));
  const res = existsSync(join(GATE, id, 'result.json')) ? JSON.parse(readFileSync(join(GATE, id, 'result.json'), 'utf8')) : null;
  const pick = names.length ? names.map(n => n.toLowerCase()) : (res ? res.candidates.filter(c => c.pass).map(c => c.name.toLowerCase()) : []);
  const vers = key.options.filter(o => o.role === 'old' || (o.role.startsWith('cand') && pick.includes(o.name.toLowerCase())));
  const old = findCard(key.old, key.spec.color), rand = rng([...id].reduce((a, c) => a * 37 + c.charCodeAt(0), 3));
  const sh = shuffle(vers, rand).map((o, i) => ({ ...o, label: String.fromCharCode(65 + i) }));
  const dir = join(GATE, `set-${id}`); mkdirSync(dir, { recursive: true });
  const spec = key.spec, slot = key.kind === 'space' ? `its round ${R[key.round]} space` : 'one member';
  writeFileSync(join(dir, 'set.md'), [`# Whole-set check: ${old.color}, ${slot}`, '', `The board below is ${old.color} with the slot open. Each lettered version puts a different card in the slot. Score each version as a whole set.`, '',
    ...sh.map(o => `- **${o.label}.** the slot holds **${o.name}**${o.price ? ` [${o.price}]` : ""}: ${o.text}`), '', spec.rules ? `Rules the cards refer to: ${spec.rules}\n` : '',
    `## ${old.color} with the slot open`, boardText([old.qid === 'guests' ? 'guests' : old.qid], { without: [old.name] }),
    `## The other colors' spaces`, boardText([], { members: false })].join('\n'));
  writeFileSync(join(dir, 'key.json'), JSON.stringify({ gate: id, options: sh.map(o => ({ label: o.label, role: o.role, name: o.name })) }, null, 1));
  return `${dir}/set.md: ${sh.length} versions (${sh.map(o => `${o.label} ${o.name}`).join(', ')}); judges: .claude/agents/set-judge.md`;
}
function setscore(id) {
  const dir = join(GATE, `set-${id}`), key = JSON.parse(readFileSync(join(dir, 'key.json'), 'utf8'));
  const files = readdirSync(dir).filter(f => /^judge-.*\.json$/.test(f)).sort(), js = files.map(f => JSON.parse(readFileSync(join(dir, f), 'utf8')));
  const rows = key.options.map(o => { const es = js.map(j => j.find(x => String(x.label).toUpperCase() === o.label)).filter(Boolean);
    return { ...o, totals: es.map(e => e.total ?? e.set.reduce((a, b) => a + b, 0)), med: median(es.map(e => e.total ?? e.set.reduce((a, b) => a + b, 0))), lost: es.map(e => e.lost).filter(l => l && !/^none/i.test(l)), why: es.map(e => e.why) }; });
  const old = rows.find(r => r.role === 'old');
  const out = { gate: id, old: { name: old.name, median: old.med, totals: old.totals }, target: 15,
    versions: rows.filter(r => r.role !== 'old').map(r => ({ name: r.name, median: r.med, totals: r.totals, vsOld: r.med - old.med, pass: r.med >= old.med, lost: r.lost, why: r.why })) };
  writeFileSync(join(dir, 'result.json'), JSON.stringify(out, null, 1));
  const md = [`# Whole-set check ${id} (${files.length} judges)`, '', `With the old card **${old.name}**: ${old.med} of 20 (${old.totals.join('/')}). Set target 15.`, '',
    ...out.versions.map(v => `- ${v.pass ? 'PASS' : 'FAIL (lowers the set)'} **${v.name}**: ${v.median} (${v.totals.join('/')}; ${v.vsOld >= 0 ? '+' : ''}${v.vsOld}).${v.lost.length ? ` Loses partners: ${v.lost.join(' | ')}.` : ''}`), ''].join('\n');
  writeFileSync(join(dir, 'result.md'), md);
  return md;
}

/** C1 to C10 median of a card in the latest ranking round (design/eval/quality-loop/r<n>/judge-*.json), or null. */
function rankingRef(name) {
  const base = 'design/eval/quality-loop';
  if (!existsSync(base)) return null;
  const rounds = readdirSync(base).filter(d => /^r\d+$/.test(d)).sort((a, b) => Number(b.slice(1)) - Number(a.slice(1)));
  for (const r of rounds) {
    const files = readdirSync(join(base, r)).filter(f => /^judge-.*\.json$/.test(f));
    if (files.length < 3) continue;
    const vals = files.map(f => JSON.parse(readFileSync(join(base, r, f), 'utf8'))).map(j => (Array.isArray(j) ? j : j.cards).find(x => x.name.toLowerCase() === name.toLowerCase())).filter(Boolean).map(x => x.scores.slice(0, 10).reduce((a, b) => a + b, 0));
    if (vals.length >= 2) return median(vals);
  }
  return null;
}
