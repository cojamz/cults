#!/usr/bin/env node
// Rubric check (Evaluators, Nov 4): does a rubric's paper gap (new card minus the card it replaced) rank the played
// head-to-heads the way the blind play judges did? Scores quality/evals/v2val/pack-*/{v1,v2}-judge-N.json against
// pairs.json (one deciding A/B per pair: no superseded, bot-bug, placebo or Encore runs).
//   node scripts/quality/rubric-check.mjs [dir]           judges 1-3 = run 1; judges 4-6 (if present) = the repeat run
import { readFileSync, readdirSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const V = process.argv[2] || '/mnt/project-files/quality/evals/v2val/';
const W2 = [2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0.5]; // v2 order: Clear, Trackable, Feels, Fun, Interacts, Color, Engine, Buy, Use, Worth, Elegant, Catch-up
const Q2 = ['Clear', 'Trackable', 'Feels powerful', 'Fun', 'Interacts', 'Its color', 'Engine', 'Choice buying', 'Choice using', 'Worth it', 'Elegant', 'Catch-up'];
const TOP = { v1: 22, v2: 62 };
const total = (rub, s) => rub === 'v1' ? s.slice(0, 10).reduce((a, b) => a + b, 0) + s[11] : s.reduce((a, b, i) => a + b * W2[i], 0);
const median = a => { const b = [...a].sort((x, y) => x - y), n = b.length; return n ? (n % 2 ? b[(n - 1) / 2] : (b[n / 2 - 1] + b[n / 2]) / 2) : NaN; };
const rank = a => { const idx = a.map((v, i) => [v, i]).sort((x, y) => x[0] - y[0]), r = Array(a.length); for (let i = 0; i < idx.length;) { let j = i; while (j + 1 < idx.length && idx[j + 1][0] === idx[i][0]) j++; for (let k = i; k <= j; k++) r[idx[k][1]] = (i + j) / 2 + 1; i = j + 1; } return r; };
const pearson = (x, y) => { const n = x.length, mx = x.reduce((a, b) => a + b, 0) / n, my = y.reduce((a, b) => a + b, 0) / n; let sxy = 0, sx = 0, sy = 0; for (let i = 0; i < n; i++) { sxy += (x[i] - mx) * (y[i] - my); sx += (x[i] - mx) ** 2; sy += (y[i] - my) ** 2; } return sx && sy ? sxy / Math.sqrt(sx * sy) : NaN; };
const spearman = (x, y) => pearson(rank(x), rank(y));
const f2 = x => Number.isFinite(x) ? x.toFixed(2) : 'n/a';

const pairs = JSON.parse(readFileSync(join(V, 'pairs.json'), 'utf8'));
const key = {}, scores = { v1: {}, v2: {} }; // scores[rub][label][run] = [{total, q, hf}]
for (const p of readdirSync(V).filter(d => /^pack-\d+$/.test(d))) {
  for (const k of JSON.parse(readFileSync(join(V, p, 'key.json'), 'utf8'))) key[k.label] = k;
  for (const f of readdirSync(join(V, p))) { const m = f.match(/^(v[12])-judge-(\d+)\.json$/); if (!m) continue;
    const run = +m[2] <= 3 ? 1 : 2;
    let arr; try { arr = JSON.parse(readFileSync(join(V, p, f), 'utf8')); } catch (e) { console.error(`bad json ${p}/${f}`); continue; }
    for (const c of arr) { if (!Array.isArray(c.scores) || c.scores.length < 12) { console.error(`short scores ${p}/${f} ${c.label}`); continue; }
      ((scores[m[1]][c.label] ??= {})[run] ??= []).push({ total: total(m[1], c.scores.map(Number)), q: c.scores.map(Number), hf: c.hardFail || null, judge: +m[2] }); }
  }
}
const cardMed = (rub, label, run = 1) => { const s = scores[rub][label]?.[run]; return s?.length ? median(s.map(x => x.total)) : NaN; };
const qMed = (rub, label, q, run = 1) => { const s = scores[rub][label]?.[run]; return s?.length ? median(s.map(x => x.q[q])) : NaN; };
const labelOf = (slot, name, text) => Object.values(key).find(k => k.slot === slot && k.name === name && k.text === text)?.label;

const L = ['# Rubric check: does the paper gap predict the play gap? (v1 against v2)', ''];
const rows = [];
for (const p of pairs) {
  const ln = labelOf(p.old.name, p.new.name, p.new.text), lo = labelOf(p.old.name, p.old.name, p.old.text);
  if (!ln || !lo) { L.push(`- skipped ${p.dir}: card not in a pack`); continue; }
  rows.push({ dir: p.dir, name: `${p.new.name} vs ${p.old.name}`, play: p.gap, matched: p.matched, ln, lo,
    v1: (cardMed('v1', ln) - cardMed('v1', lo)) / TOP.v1 * 100, v2: (cardMed('v2', ln) - cardMed('v2', lo)) / TOP.v2 * 100,
    raw1: [cardMed('v1', ln), cardMed('v1', lo)], raw2: [cardMed('v2', ln), cardMed('v2', lo)] });
}
const ok = rows.filter(r => Number.isFinite(r.v1) && Number.isFinite(r.v2));
const corr = (set, rub) => spearman(set.map(r => r[rub]), set.map(r => r.play));
const big = ok.filter(r => r.matched >= 3);
const r1 = corr(ok, 'v1'), r2 = corr(ok, 'v2');
L.push(`Pairs scored: ${ok.length} of ${pairs.length}. Paper gap is new minus old, as a share of the top score (v1 of 22, v2 of 62).`, '',
  `**Rank correlation with the play gap (bar 0.5):** v1 ${f2(r1)}, v2 ${f2(r2)}.`,
  `Pairs with 3 or more same-round games (${big.length}): v1 ${f2(corr(big, 'v1'))}, v2 ${f2(corr(big, 'v2'))}.`,
  `Sign agreement (paper says better and play says better, or both say worse; play gaps within ±0.1 left out): v1 ${signAgree('v1')}, v2 ${signAgree('v2')}.`, '');
function signAgree(rub) { const s = ok.filter(r => Math.abs(r.play) > 0.1); return `${s.filter(r => Math.sign(r[rub]) === Math.sign(r.play)).length} of ${s.length}`; }

// per-question: which v2 questions' gaps track play
L.push('## Which v2 questions track play (rank correlation of the question gap with the play gap)');
const perQ = Q2.map((q, i) => ({ q, w: W2[i], r: spearman(ok.map(r => qMed('v2', r.ln, i) - qMed('v2', r.lo, i)), ok.map(r => r.play)) }));
for (const x of perQ) L.push(`- ${x.q} (x${x.w}): ${f2(x.r)}`);
L.push('');

// judge agreement within a run
L.push('## Judge agreement (pairwise rank correlation of totals, per pack, run 1)');
for (const rub of ['v1', 'v2']) for (const p of readdirSync(V).filter(d => /^pack-\d+$/.test(d))) {
  const labs = Object.values(key).filter(k => k.label.startsWith(`P${p.split('-')[1]}-`)).map(k => k.label);
  const byJ = {}; for (const l of labs) for (const s of scores[rub][l]?.[1] || []) (byJ[s.judge] ??= {})[l] = s.total;
  const js = Object.keys(byJ), rs = [];
  for (let a = 0; a < js.length; a++) for (let b = a + 1; b < js.length; b++) { const common = labs.filter(l => l in byJ[js[a]] && l in byJ[js[b]]); rs.push(spearman(common.map(l => byJ[js[a]][l]), common.map(l => byJ[js[b]][l]))); }
  L.push(`- ${rub} ${p}: ${rs.map(f2).join(', ') || 'n/a'}`);
}
L.push('');

// drift: run 2 against run 1 on the same cards
const rep = Object.keys(key).filter(l => scores.v1[l]?.[2] || scores.v2[l]?.[2]);
if (rep.length) {
  L.push(`## Repeat run (${rep.length} cards, fresh judges): how far a card's median moves, as a share of the top score (bar 8 of 100)`);
  for (const rub of ['v1', 'v2']) { const d = rep.map(l => Math.abs(cardMed(rub, l, 2) - cardMed(rub, l, 1)) / TOP[rub] * 100).filter(Number.isFinite);
    if (!d.length) continue; const over = d.filter(x => x > 8).length;
    L.push(`- ${rub}: mean ${f2(d.reduce((a, b) => a + b, 0) / d.length)}, max ${f2(Math.max(...d))}, over 8: ${over} of ${d.length}`); }
  L.push('');
}

L.push('## Every pair (play gap, then paper new/old and gap per rubric)');
for (const r of ok.sort((a, b) => b.play - a.play)) L.push(`- ${r.name} (${r.dir}, ${r.matched} games): play ${r.play >= 0 ? '+' : ''}${r.play} | v1 ${r.raw1.join('/')} = ${f2(r.v1)} | v2 ${r.raw2.join('/')} = ${f2(r.v2)}`);
const hf = rub => Object.entries(scores[rub]).filter(([, v]) => (v[1] || []).filter(s => s.hf).length >= 2).map(([l]) => `${key[l].name} (${l})`);
L.push('', `Hard fails from 2 or more judges: v1 ${hf('v1').join(', ') || 'none'}; v2 ${hf('v2').join(', ') || 'none'}.`);
writeFileSync(join(V, 'result.md'), L.join('\n') + '\n');
writeFileSync(join(V, 'result.json'), JSON.stringify({ r1, r2, n: ok.length, perQ, rows: ok }, null, 1));
console.log(L.slice(0, 8).join('\n'));
