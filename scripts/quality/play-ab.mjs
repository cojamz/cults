#!/usr/bin/env node
// Blind A/B play folders for the ship gate (principles.md, "Ship on play against the old card"; director, Nov 4):
// the trial's base arm is the same seeded game with the switch off, written from the seat that held the old card.
// For each seed with both sheets, both are trimmed around their own card, the two card names become "the slot card",
// and the pair is shuffled into A and B. Judges score both with .claude/agents/play-judge.md; play-ab-score below.
//
//   node scripts/quality/play-ab.mjs <newDir> <baseDir> "<new name>" "<new text>" "<old name>" "<old text>" --out <dir>
//   node scripts/quality/play-ab.mjs score <dir>      (new card must win by 0.3 or more, with no 0 on Clear outcome)
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { trim } from './trim.mjs';
import { rng, median } from './lib.mjs';

const args = process.argv.slice(2);
const P = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
if (args[0] === 'score') {
  const dir = args[1], key = JSON.parse(readFileSync(join(dir, 'key.json'), 'utf8'));
  const judges = readdirSync(dir).filter(f => /^play-judge-\d+\.json$/.test(f)).map(f => JSON.parse(readFileSync(join(dir, f), 'utf8')));
  const side = { new: [], old: [] }, clearNew = [];
  for (const j of judges) for (const s of j.sheets || []) {
    const pair = key.pairs.find(p => s.file.includes(p.dir));
    if (!pair) continue;
    const label = /\bA\.md$/.test(s.file) ? 'A' : /\bB\.md$/.test(s.file) ? 'B' : null; if (!label) continue;
    const role = pair[label], sc = P.map(k => s.scores?.[k] ?? 0);
    side[role].push(sc); if (role === 'new') clearNew.push(sc[0]);
  }
  const avg = rows => rows.length ? +(P.map((_, i) => median(rows.map(r => r[i]))).reduce((a, b) => a + b, 0) / P.length).toFixed(2) : null;
  const n = avg(side.new), o = avg(side.old), gap = n != null && o != null ? +(n - o).toFixed(2) : null;
  const clear = clearNew.length ? median(clearNew) : null;
  const pref = { new: 0, old: 0, same: 0 };
  for (const j of judges) for (const [seed, v] of Object.entries(j.prefer || {})) {
    const pair = key.pairs.find(p => p.seed === seed), pick = String(v).trim().match(/^(A|B|same)\b/i)?.[1];
    if (pair && pick) pref[/same/i.test(pick) ? 'same' : pair[pick.toUpperCase()]]++;
  }
  const pass = gap != null && gap >= 0.3 && clear > 0;
  const lines = [`# Blind A/B play: ${key.new.name} against ${key.old.name}`, '', `${judges.length} judges, ${key.pairs.length} seeds. New card ${n} vs old ${o} (average of the six medians, 0 to 2): ${gap >= 0 ? '+' : ''}${gap}. Clear outcome for the new card ${clear}.`, '', `**${pass ? 'PASS' : 'no'}**: ship needs +0.3 or more and no 0 on Clear outcome.`, '', `Judges preferred the new card ${pref.new} times, the old ${pref.old}, same ${pref.same} (a tiebreak note; the gate is the gap).`, '',
    ...P.map((k, i) => `- ${k}: new ${median(side.new.map(r => r[i]))}, old ${median(side.old.map(r => r[i]))}`)];
  writeFileSync(join(dir, 'result.md'), lines.join('\n') + '\n');
  writeFileSync(join(dir, 'result.json'), JSON.stringify({ new: key.new.name, old: key.old.name, newAvg: n, oldAvg: o, gap, clearNew: clear, prefer: pref, pass }, null, 1));
  console.log(lines.join('\n'));
  process.exit(0);
}
const oi = args.indexOf('--out'), out = oi >= 0 ? args.splice(oi, 2)[1] : null;
const [newDir, baseDir, newName, newText, oldName, oldText] = args;
if (!out || !oldText) { console.error('usage: play-ab.mjs <newDir> <baseDir> "<new name>" "<new text>" "<old name>" "<old text>" --out <dir>'); process.exit(2); }
// Lab sheets are sheet-<seed>-<seat>.md; sheets.mjs writes <card>-g<seed>-<seat>.md (and a .full.md, skipped).
const seedOf = f => (f.match(/^sheet-(\d+)-/) || f.match(/-g(\d+)-[^.]+\.md$/) || [])[1];
const sheets = d => Object.fromEntries(readdirSync(d).filter(f => f.endsWith('.md') && !f.endsWith('.full.md') && seedOf(f)).map(f => [seedOf(f), f]));
const N = sheets(newDir), B = sheets(baseDir), seeds = Object.keys(N).filter(s => B[s]).sort();
const rand = rng(seeds.reduce((a, s) => a * 31 + +s, 7));
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const blind = (t, name) => t.replace(new RegExp(esc(name), 'g'), 'the slot card');
mkdirSync(out, { recursive: true });
const pairs = [];
for (const s of seeds) {
  const dir = `pair-${s}`, flip = rand() < 0.5, pd = join(out, dir); mkdirSync(pd, { recursive: true });
  const make = (file, src, name, text) => {
    const full = readFileSync(join(src, file), 'utf8');
    return `# Seed ${s}: one Hard-bot game from the seat that held the slot card\n\nThe slot card's printed text: "${text}"\n\n` + blind(trim(full, name), name);
  };
  const nw = make(N[s], newDir, newName, newText), ol = make(B[s], baseDir, oldName, oldText);
  writeFileSync(join(pd, 'A.md'), flip ? ol : nw); writeFileSync(join(pd, 'B.md'), flip ? nw : ol);
  pairs.push({ seed: s, dir, A: flip ? 'old' : 'new', B: flip ? 'new' : 'old', newSheet: N[s], oldSheet: B[s] });
}
writeFileSync(join(out, 'key.json'), JSON.stringify({ new: { name: newName, text: newText, dir: newDir }, old: { name: oldName, text: oldText, dir: baseDir }, pairs }, null, 1));
writeFileSync(join(out, 'brief.md'), [`# Blind A/B play judging`, '', `Each pair-<seed>/ folder holds A.md and B.md: the same seeded game, played once with one version of a card in a cult and once with another, each written from the seat that held it. The card is called "the slot card"; each sheet's header prints that version's text.`, `Score every sheet with .claude/agents/play-judge.md (P1 to P6, 0 to 2), on its own. Write play-judge-<your number>.json in THIS folder (not in the pair folders), with one entry per sheet whose "file" is "pair-<seed>/A.md" or "pair-<seed>/B.md". Then add "prefer": {"<seed>": "A"|"B"|"same"} with one plain line why. Do not open key.json.`].join('\n') + '\n');
console.log(`${out}: ${pairs.length} pairs (${seeds.join(', ')}); judges read brief.md`);
