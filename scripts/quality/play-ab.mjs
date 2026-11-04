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
import { execFileSync } from 'node:child_process';
import { trim } from './trim.mjs';
import { rng, median } from './lib.mjs';


// Bot version (change 14 as Cory corrected it, Nov 4): the short hash of the last commit to the bots (bots.js, thinker.js)
// as of the games' commit, so close losses (0 to +0.3) can be rerun once better bots land. The games' commit comes from
// --commit at build time; without it, the commit that set the games' version tag (a guess, and labelled so).
function botVersion(key) {
  const git = (...a) => { try { return execFileSync('git', a, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch { return ''; } };
  let at = key.commit, how = 'games commit';
  if (!at) {
    const f = existsSync(key.new.dir) ? readdirSync(key.new.dir).find(x => /^game-.*\.txt$/.test(x)) : null;
    const v = f && (readFileSync(join(key.new.dir, f), 'utf8').match(/\[Version "v?([\d.]+)"\]/) || [])[1];
    at = v ? git('log', '-1', '--format=%h', `-S${v}`, '--', 'src/', 'scripts/', 'package.json') : '';
    how = v ? `guessed from version v${v}` : 'unknown';
  }
  const bot = at ? git('log', '-1', '--format=%h', at, '--', 'src/engine/v4/bots.js', 'src/engine/v4/thinker.js') : '';
  return { bot: bot || null, at: at || null, how };
}
const args = process.argv.slice(2);
const P = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
if (args[0] === 'score') {
  const dir = args[1], key = JSON.parse(readFileSync(join(dir, 'key.json'), 'utf8'));
  const judges = readdirSync(dir).filter(f => /^play-judge-\d+\.json$/.test(f)).map(f => JSON.parse(readFileSync(join(dir, f), 'utf8')));
  const side = { new: [], old: [] }, sideM = { new: [], old: [] }, clearNew = [], misuse = { new: [], old: [] }, judged = { new: 0, old: 0 }, oldRows = [], oldMis = new Set();
  for (const j of judges) for (const s of j.sheets || []) {
    const pair = key.pairs.find(p => s.file.includes(`${p.dir}/`));
    if (!pair) continue;
    const label = /\bA\.md$/.test(s.file) ? 'A' : /\bB\.md$/.test(s.file) ? 'B' : null; if (!label) continue;
    const role = pair[label], sc = P.map(k => s.scores?.[k] ?? 0);
    side[role].push(sc); if (!pair.seed.includes('x')) { sideM[role].push(sc); if (role === 'old') oldRows.push({ file: s.file, sc }); } if (role === 'new') clearNew.push(sc[0]);
    judged[role]++; if (s.sensibleUse === false) { misuse[role].push(`${s.file}: ${s.misuse || 'misused'}`); if (role === 'old') oldMis.add(s.file); }
  }
  // The gate statistic is the MEAN (director, Nov 4 2:41pm: the 0.3 margin is a bar for the mean gap; the median of
  // 0-to-2 scores was too coarse and was never the gate). Per-criterion medians are still printed below, for reading.
  const mean = xs => xs.reduce((a, b) => a + b, 0) / xs.length;
  const avg = rows => rows.length ? +(P.map((_, i) => mean(rows.map(r => r[i]))).reduce((a, b) => a + b, 0) / P.length).toFixed(2) : null;
  const medAvg = rows => rows.length ? +(P.map((_, i) => median(rows.map(r => r[i]))).reduce((a, b) => a + b, 0) / P.length).toFixed(2) : null;
  const nMed = medAvg(side.new); // the oldHardFail route judges the card's own play score on medians (director, 2:41pm)
  const n = avg(side.new), o = avg(side.old), gap = n != null && o != null ? +(n - o).toFixed(2) : null;
  const clear = clearNew.length ? median(clearNew) : null;
  const pref = { new: 0, old: 0, same: 0 };
  for (const j of judges) for (const [seed, v] of Object.entries(j.prefer || {})) {
    const pair = key.pairs.find(p => (p.label || p.seed) === seed), pick = String(v).trim().match(/^(A|B|same)\b/i)?.[1];
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
  const superseded = key.superseded || null; // a folder a later run replaced never passes (director, 2:43pm)
  const rawPass = superseded ? false : hard ? nMed != null && nMed >= 1 && clear > 0 : abPass;
  // Bot misuse (change 14, director 10:45am; Cory, Nov 4, on Encore: "you fundamentally weren't testing the card
  // correctly"): a judge's "the bot used it sensibly: no" on any sheet, for either card, makes the run a bot bug. It
  // neither passes nor fails; one fresh run after the bot fix decides.
  // key.botMisuse: misuse the judges described in words before the sensibleUse field existed, entered by hand.
  for (const m of key.botMisuse || []) misuse[m.side === 'old' ? 'old' : 'new'].push(`${m.file}: ${m.what}`);
  // Old side only (director, Nov 4 4:18pm, on Mob Boss): when every misplay is on the old card, drop the old card's
  // misplayed sheets (every judge's score of them) and re-test the matched gap; clearing the bar there is a pass.
  for (const m of key.botMisuse || []) if (m.side === 'old') oldMis.add(m.file);
  const oldOnly = !superseded && misuse.new.length === 0 && misuse.old.length > 0;
  const omClean = avg(oldRows.filter(r => ![...oldMis].some(f => r.file.endsWith(f) || f.endsWith(r.file))).map(r => r.sc));
  const gapClean = oldOnly && nm != null && omClean != null ? +(nm - omClean).toFixed(2) : null;
  const oldOnlyPass = oldOnly && !hard && matched >= 2 && clear > 0 && gapClean != null && gapClean >= 0.3;
  const botBug = !superseded && (misuse.new.length + misuse.old.length) > 0 && !oldOnlyPass;
  const pass = oldOnlyPass || (rawPass && !botBug);
  const looseLine = looseN ? `${matched} matched pair(s), ${looseN} across games; matched only: new ${nm} vs old ${om} (${gapM >= 0 ? '+' : ''}${gapM}). ${matched < 2 ? 'Too few matched pairs to pass: ask the Lab for more seeds.' : 'A pass on all pairs needs +0.5.'}` : null;
  const waits = hard && /rival/i.test(hard) ? "Waits on Cory's ruling on rivals choosing during the owner's turn before it ships." : null;
  const lines = [`# Blind A/B play: ${key.new.name} against ${key.old.name}`, '', `${judges.length} judges, ${key.pairs.length} seeds. New card ${n} vs old ${o} (mean of the six scores over every sheet, 0 to 2): ${gap >= 0 ? '+' : ''}${gap}. Clear outcome for the new card ${clear}.`, '', hard ? `**${pass ? 'PASS' : 'no'}**: the old card hard-fails (${hard}), so the new card needs 1.0 or more on its own and no 0 on Clear outcome; the gap is for information.${waits ? ' ' + waits : ''}` : `**${pass ? 'PASS' : 'no'}**: ship needs +0.3 or more and no 0 on Clear outcome.`, '', ...(looseLine ? [looseLine, ''] : []), `Judges preferred the new card ${pref.new} times, the old ${pref.old}, same ${pref.same} (a tiebreak note; the gate is the gap).`, '',
    ...P.map((k, i) => `- ${k}: new ${median(side.new.map(r => r[i]))}, old ${median(side.old.map(r => r[i]))}`)];
  const bv = botVersion(key);
  lines.push('', `Bot version ${bv.bot || 'unknown'} (last bots.js/thinker.js commit as of ${bv.at || '?'}, ${bv.how}).${!pass && gap != null && gap >= 0 && gap < 0.3 ? ' A close loss: rerun once the bots change.' : ''}`);
  if (superseded) lines.splice(1, 0, '', `**SUPERSEDED**: ${superseded}`);
  if (misuse.new.length || misuse.old.length) lines.push('', `Bot misuse (judges): new card ${misuse.new.length} of ${judged.new} sheets, old card ${misuse.old.length} of ${judged.old}.`, ...[...misuse.new.map(m => `- new: ${m}`), ...misuse.old.map(m => `- old: ${m}`)]);
  if (oldOnlyPass) lines.splice(lines.findIndex(l => /^\*\*(PASS|no)\*\*/.test(l)), 1, `**PASS** (every misplay was on the old card; with its ${oldMis.size} misplayed sheet(s) dropped the matched gap is ${gapClean >= 0 ? '+' : ''}${gapClean}, bar +0.3; director, Nov 4 4:18pm).`);
  if (botBug) lines.splice(lines.findIndex(l => /^\*\*(PASS|no)\*\*/.test(l)), 1, `**BOT BUG** (neither pass nor fail): a judge says the bot did not use a card sensibly (new card ${misuse.new.length} of ${judged.new} sheets, old card ${misuse.old.length} of ${judged.old}). Fix how the bot plays it, then one fresh run decides. Without this the gap would read ${rawPass ? 'PASS' : 'no'}.`);
  writeFileSync(join(dir, 'result.md'), lines.join('\n') + '\n');
  writeFileSync(join(dir, 'result.json'), JSON.stringify({ new: key.new.name, old: key.old.name, newAvg: n, oldAvg: o, gap, clearNew: clear, matched, loose: looseN, gapMatched: gapM, prefer: pref, oldHardFail: hard, waitsOnCory: !!waits, superseded, botBug, misuse, botVersion: bv, rawPass, oldOnlyPass, gapClean, pass }, null, 1));
  console.log(lines.join('\n'));
  process.exit(0);
}
const oi = args.indexOf('--out'), out = oi >= 0 ? args.splice(oi, 2)[1] : null;
const ci = args.indexOf('--commit'), commit = ci >= 0 ? args.splice(ci, 2)[1] : null; // the commit the games were played at
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
// Neutral labels (Process critic, Nov 4): folders and headers say "game-<n>", numbered at random per folder, and the
// sheet's own "Seed <n>." line is dropped, so judges can't tell which pairs share a game or come from different ones.
const order = seeds.map((_, i) => i + 1); for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
for (const [si, s] of seeds.entries()) {
  const label = String(order[si]), dir = `game-${label}`, flip = flips[si], pd = join(out, dir); mkdirSync(pd, { recursive: true });
  const make = (file, src, name, text) => {
    const full = readFileSync(join(src, file), 'utf8');
    return `# Game ${label}: one Hard-bot game from the seat that held the slot card\n\nThe slot card's printed text: "${text}"\n\n` + blind(trim(full, name), name).replace(/ ?\bSeed \d+\./g, '');
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
  pairs.push({ seed: s, label, dir, A: flip ? 'old' : 'new', B: flip ? 'new' : 'old', newSheet: N[s], oldSheet: B[s] });
}
writeFileSync(join(out, 'key.json'), JSON.stringify({ new: { name: newName, text: newText, shown: showNew || undefined, dir: newDir }, old: { name: oldName, text: oldText, dir: baseDir }, commit: commit || undefined, pairs }, null, 1));
writeFileSync(join(out, 'brief.md'), [`# Blind A/B play judging`, '', `Each game-<n>/ folder holds A.md and B.md: a seeded game played with one version of a card in a cult, and a game played with another, each written from the seat that held it. The card is called "the slot card"; each sheet's header prints that version's text.`, `Score every sheet with .claude/agents/play-judge.md (P1 to P6, 0 to 2), on its own. Write play-judge-<your number>.json in THIS folder (not in the pair folders), with one entry per sheet whose "file" is "game-<n>/A.md" or "game-<n>/B.md". Then add "prefer": {"<n>": "A"|"B"|"same"} with one plain line why. Do not open key.json.`].join('\n') + '\n');
console.log(`${out}: ${pairs.length} pairs (${seeds.join(', ')}); judges read brief.md`);
