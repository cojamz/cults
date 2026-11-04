#!/usr/bin/env node
// Blind A/B play folders for the ship gate (principles.md, "Ship on play against the old card"; director, Nov 4):
// the trial's base arm is the same seeded game with the switch off, written from the seat that held the old card.
// For each seed with both sheets, both are trimmed around their own card, the two card names become "the slot card",
// and the pair is shuffled into A and B. Judges score both with .claude/agents/play-judge.md; play-ab-score below.
//
//   node scripts/quality/play-ab.mjs <newDir> <baseDir> "<new name>" "<new text>" "<old name>" "<old text>" --out <dir>
//   node scripts/quality/play-ab.mjs score <dir> [--old-hard-fail "<why>"]   (new card must win by 0.3 or more, with no 0 on
//   Clear outcome; when the old card hard-fails, 1.0 or more on its own instead)
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { trim } from './trim.mjs';
import { rng, median } from './lib.mjs';

const args = process.argv.slice(2);
const P = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
if (args[0] === 'score') {
  const dir = args[1], key = JSON.parse(readFileSync(join(dir, 'key.json'), 'utf8'));
  const judges = readdirSync(dir).filter(f => /^play-judge-\d+\.json$/.test(f)).map(f => JSON.parse(readFileSync(join(dir, f), 'utf8')));
  const side = { new: [], old: [] }, sideM = { new: [], old: [] }, clearNew = [];
  for (const j of judges) for (const s of j.sheets || []) {
    const pair = key.pairs.find(p => s.file.includes(p.dir));
    if (!pair) continue;
    const label = /\bA\.md$/.test(s.file) ? 'A' : /\bB\.md$/.test(s.file) ? 'B' : null; if (!label) continue;
    const role = pair[label], sc = P.map(k => s.scores?.[k] ?? 0);
    side[role].push(sc); if (!pair.seed.includes('x')) sideM[role].push(sc); if (role === 'new') clearNew.push(sc[0]);
  }
  const avg = rows => rows.length ? +(P.map((_, i) => median(rows.map(r => r[i]))).reduce((a, b) => a + b, 0) / P.length).toFixed(2) : null;
  const n = avg(side.new), o = avg(side.old), gap = n != null && o != null ? +(n - o).toFixed(2) : null;
  const clear = clearNew.length ? median(clearNew) : null;
  const pref = { new: 0, old: 0, same: 0 };
  for (const j of judges) for (const [seed, v] of Object.entries(j.prefer || {})) {
    const pair = key.pairs.find(p => p.seed === seed), pick = String(v).trim().match(/^(A|B|same)\b/i)?.[1];
    if (pair && pick) pref[/same/i.test(pick) ? 'same' : pair[pick.toUpperCase()]]++;
  }
  // Old card hard-fails (director, Nov 4 7:14am): the new card needs its own play average of 1.0 or more and no 0 on
  // Clear outcome; the A/B gap is for information. A hard fail of the "rivals choose on the owner's turn" shape (Hawker,
  // Potluck, Shake Down) waits on Cory's ruling before it ships, so the result says so.
  const hi = args.indexOf('--old-hard-fail'), hard = hi >= 0 ? (args[hi + 1] || 'yes') : key.old.hardFail || null;
  // Loose pairs (director, Nov 4 8:02am): at least 2 matched pairs before loose ones count; a pass that needs the
  // loose pairs needs +0.5. Too few matched pairs: ask the Lab for more seeds.
  const matched = key.pairs.filter(p => !p.seed.includes('x')).length, looseN = key.pairs.length - matched;
  const nm = avg(sideM.new), om = avg(sideM.old), gapM = nm != null && om != null ? +(nm - om).toFixed(2) : null;
  const abPass = matched >= 2 && clear > 0 && ((gapM != null && gapM >= 0.3) || (looseN > 0 && gap != null && gap >= 0.5));
  const pass = hard ? n != null && n >= 1 && clear > 0 : abPass;
  const looseLine = looseN ? `${matched} matched pair(s), ${looseN} across games; matched only: new ${nm} vs old ${om} (${gapM >= 0 ? '+' : ''}${gapM}). ${matched < 2 ? 'Too few matched pairs to pass: ask the Lab for more seeds.' : 'A pass on all pairs needs +0.5.'}` : null;
  const waits = hard && /rival/i.test(hard) ? "Waits on Cory's ruling on rivals choosing during the owner's turn before it ships." : null;
  const lines = [`# Blind A/B play: ${key.new.name} against ${key.old.name}`, '', `${judges.length} judges, ${key.pairs.length} seeds. New card ${n} vs old ${o} (average of the six medians, 0 to 2): ${gap >= 0 ? '+' : ''}${gap}. Clear outcome for the new card ${clear}.`, '', hard ? `**${pass ? 'PASS' : 'no'}**: the old card hard-fails (${hard}), so the new card needs 1.0 or more on its own and no 0 on Clear outcome; the gap is for information.${waits ? ' ' + waits : ''}` : `**${pass ? 'PASS' : 'no'}**: ship needs +0.3 or more and no 0 on Clear outcome.`, '', ...(looseLine ? [looseLine, ''] : []), `Judges preferred the new card ${pref.new} times, the old ${pref.old}, same ${pref.same} (a tiebreak note; the gate is the gap).`, '',
    ...P.map((k, i) => `- ${k}: new ${median(side.new.map(r => r[i]))}, old ${median(side.old.map(r => r[i]))}`)];
  writeFileSync(join(dir, 'result.md'), lines.join('\n') + '\n');
  writeFileSync(join(dir, 'result.json'), JSON.stringify({ new: key.new.name, old: key.old.name, newAvg: n, oldAvg: o, gap, clearNew: clear, matched, loose: looseN, gapMatched: gapM, prefer: pref, oldHardFail: hard, waitsOnCory: !!waits, pass }, null, 1));
  console.log(lines.join('\n'));
  process.exit(0);
}
const oi = args.indexOf('--out'), out = oi >= 0 ? args.splice(oi, 2)[1] : null;
// --seeds a,b,c: only these seeds (the Lab's same-round list in rounds.json).
const si = args.indexOf('--seeds'), only = si >= 0 ? args.splice(si, 2)[1].split(',').map(x => x.trim()) : null;
// --show-new "<text>": a hidden placebo (Process critic, Nov 4 9:12): the new side is the same card, but its sheets print
// this reworded text (same effect) in the header and wherever the real text appears, so judges can't spot the twin.
const space = args.includes('--space'); if (space) args.splice(args.indexOf('--space'), 1);
const shi = args.indexOf('--show-new'), showNew = shi >= 0 ? args.splice(shi, 2)[1] : null;
const [newDir, baseDir, newName, newText, oldName, oldText] = args.filter(a => a !== '--loose');
if (!out || !oldText) { console.error('usage: play-ab.mjs <newDir> <baseDir> "<new name>" "<new text>" "<old name>" "<old text>" --out <dir>'); process.exit(2); }
// Lab sheets are sheet-<seed>-<seat>.md; sheets.mjs writes <card>-g<seed>-<seat>.md (and a .full.md, skipped).
const seedOf = f => (f.match(/^sheet-(\d+)-/) || f.match(/-g(\d+)-[^.]+\.md$/) || [])[1];
const sheets = d => Object.fromEntries(readdirSync(d).filter(f => f.endsWith('.md') && !f.endsWith('.full.md') && seedOf(f)).map(f => [seedOf(f), f]));
const N = sheets(newDir), B = sheets(baseDir), seeds = Object.keys(N).filter(s => B[s] && (!only || only.includes(s))).sort();
// --loose: also pair the leftover seeds in order (different games, so weaker evidence; result.md counts them apart).
const loose = args.includes('--loose') || process.argv.includes('--loose');
if (loose) {
  const ln = Object.keys(N).filter(s => !B[s]).sort(), lb = Object.keys(B).filter(s => !N[s]).sort();
  for (let i = 0; i < Math.min(ln.length, lb.length); i++) { const k = `${ln[i]}x${lb[i]}`; N[k] = N[ln[i]]; B[k] = B[lb[i]]; seeds.push(k); }
}
const rand = rng(seeds.reduce((a, s) => a * 31 + parseInt(s, 10), 7));
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const blind = (t, name) => t.replace(new RegExp(esc(name), 'g'), 'the slot card');
mkdirSync(out, { recursive: true });
const pairs = [];
// Balanced slots: the new card sits in A in half the pairs (Guest of Honor, Nov 4: both pairs put it in B by chance,
// and both judges picked B both times). Shuffle a half-and-half list instead of flipping a coin per pair.
const flips = seeds.map((_, i) => i % 2 === 0); if (rand() < 0.5) flips.forEach((f, i) => flips[i] = !f);
for (let i = flips.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [flips[i], flips[j]] = [flips[j], flips[i]]; }
for (const [si, s] of seeds.entries()) {
  const dir = `pair-${s}`, flip = flips[si], pd = join(out, dir); mkdirSync(pd, { recursive: true });
  const make = (file, src, name, text) => {
    const full = readFileSync(join(src, file), 'utf8');
    return `# Seed ${s.replace('x', ' (paired with a different game, seed ')}${s.includes('x') ? ')' : ''}: one Hard-bot game from the seat that held the slot card\n\nThe slot card's printed text: "${text}"\n\n` + blind(trim(full, name), name);
  };
  // Guard (Nov 4, Night Manager): a wrong printed text in the header misleads judges. The sheet lists each card's real
  // text, so refuse when the given text is nowhere in its sheet (case-insensitive).
  // Space sheets (--space) print the board by name only, so check the name there instead of the text.
  for (const [f, src, t0, nm] of [[N[s], newDir, newText, newName], [B[s], baseDir, oldText, oldName]]) {
    const t = space ? nm : t0;
    const norm = x => x.toLowerCase().replace(/[’‘]/g, "'").replace(/[“”]/g, '"');
    if (!norm(readFileSync(join(src, f), 'utf8')).includes(norm(t))) { console.error(`text not found in ${join(src, f)}: "${t}"`); process.exit(3); }
  }
  const swap = (t) => showNew ? t.split(newText).join(showNew).split(newText.replace(/'/g, '’')).join(showNew) : t;
  const nw = swap(make(N[s], newDir, newName, newText)), ol = make(B[s], baseDir, oldName, oldText);
  writeFileSync(join(pd, 'A.md'), flip ? ol : nw); writeFileSync(join(pd, 'B.md'), flip ? nw : ol);
  pairs.push({ seed: s, dir, A: flip ? 'old' : 'new', B: flip ? 'new' : 'old', newSheet: N[s], oldSheet: B[s] });
}
writeFileSync(join(out, 'key.json'), JSON.stringify({ new: { name: newName, text: newText, shown: showNew || undefined, dir: newDir }, old: { name: oldName, text: oldText, dir: baseDir }, pairs }, null, 1));
writeFileSync(join(out, 'brief.md'), [`# Blind A/B play judging`, '', `Each pair-<seed>/ folder holds A.md and B.md: the same seeded game, played once with one version of a card in a cult and once with another, each written from the seat that held it. The card is called "the slot card"; each sheet's header prints that version's text.`, `Score every sheet with .claude/agents/play-judge.md (P1 to P6, 0 to 2), on its own. Write play-judge-<your number>.json in THIS folder (not in the pair folders), with one entry per sheet whose "file" is "pair-<seed>/A.md" or "pair-<seed>/B.md". Then add "prefer": {"<seed>": "A"|"B"|"same"} with one plain line why. Do not open key.json.`].join('\n') + '\n');
console.log(`${out}: ${pairs.length} pairs (${seeds.join(', ')}); judges read brief.md`);
