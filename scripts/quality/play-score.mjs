#!/usr/bin/env node
// Sums the play judges' files for one card: node scripts/quality/play-score.mjs <play folder>
// Writes result.md/result.json: per question the median over every sheet and judge, any built-right mismatch.
// A mismatch blocks the card (principles.md v2: "a bug found later voids that card's trial").
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { median } from './lib.mjs';
const dir = process.argv[2];
const idx = JSON.parse(readFileSync(join(dir, 'index.json'), 'utf8'));
const js = readdirSync(dir).filter(f => /^play-judge-.*\.json$/.test(f)).map(f => JSON.parse(readFileSync(join(dir, f), 'utf8')));
const Q = { P1: 'Clear outcome', P2: 'Felt powerful', P3: 'Felt by the table', P4: 'Momentum', P5: 'Agency', P6: 'Catch-up' };
const sheets = js.flatMap(j => j.sheets);
const med = Object.fromEntries(Object.keys(Q).map(k => [k, median(sheets.map(s => s.scores[k]).filter(v => v != null))]));
const mism = sheets.filter(s => s.builtRight === false).map(s => `${s.file}: ${s.mismatch}`);
const avg = Object.values(med).reduce((a, b) => a + b, 0) / 6;
const out = { card: idx.card, text: idx.text, judges: js.length, sheets: sheets.length, medians: med, average: avg, builtRight: !mism.length, mismatches: mism, verdicts: js.map(j => j.verdict) };
writeFileSync(join(dir, 'result.json'), JSON.stringify(out, null, 1));
const md = [`# Play judge: ${idx.card}`, '', `"${idx.text}"`, '', `${js.length} judges, ${sheets.length} sheet reads. ${Object.entries(Q).map(([k, n]) => `${n} ${med[k]}`).join(', ')} (of 2; average ${avg.toFixed(2)}, exit target 1.5).`,
  mism.length ? `**Built wrong:** ${mism.join(' | ')}` : 'Built right: every log line matched the card.', '', ...js.map(j => `- ${j.verdict}`), ''].join('\n');
writeFileSync(join(dir, 'result.md'), md); console.log(md);
