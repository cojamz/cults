#!/usr/bin/env node
// The ranking: median of the paper judges, worst first, members and spaces apart, with the checks on the judges.
//   node scripts/quality/ranking.mjs <dir with judge-*.json> [--board board.txt] [--plants "A,B,C"] [--good "D"]
//        [--calibration design/eval/quality-loop/calibration.md] [--split /mnt/project-files/quality/evals/calibration-split.md]
//        [--protected "Echo,Recluse,..."] [--out ranking.md] [--json ranking.json] [--label r1]
// Bar (principles.md): median total >= 13 of 20, no median 0 on C1, C3 or C4, no hard fail from 2+ judges.
// Checks: agreement (Spearman per judge pair, bar 0.6), plants (bad ones in the bottom 15%, good one in the top half),
// Cory's past calls on the held-out half B only (bar 70%; half A may be quoted in prompts), both halves reported.
import { readdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { loadJudge, joinJudges, median, spearman, calibration, rng, shuffle } from './lib.mjs';

const args = process.argv.slice(2);
const flag = (n, d) => { const i = args.indexOf(n); if (i < 0) return d; const v = args[i + 1]; args.splice(i, 2); return v; };
const board = flag('--board', null), plantsArg = flag('--plants', ''), goodArg = flag('--good', ''), calFile = flag('--calibration', 'design/eval/quality-loop/calibration.md');
const splitFile = flag('--split', null), protArg = flag('--protected', ''), out = flag('--out', null), jsonOut = flag('--json', null), label = flag('--label', '');
const dir = args[0];
if (!dir) { console.error('usage: ranking.mjs <dir> [...]'); process.exit(2); }
const files = readdirSync(dir).filter(f => /^judge-.*\.json$/.test(f)).sort();
const judges = files.map(f => loadJudge(join(dir, f)));
const rows = [...joinJudges(judges).entries()].map(([k, row]) => {
  const got = row.filter(Boolean), base = got[0];
  const totals = got.map(x => x.total), q = Array.from({ length: 10 }, (_, i) => median(got.map(x => x.scores[i])));
  const fails = got.filter(x => x.hardFail).map(x => x.hardFail);
  // a hard fail from 2+ judges sits at the bottom whatever it scores (principles.md): sort on that first
  const med = median(totals);
  const near = [...got].sort((a, b) => Math.abs(a.total - med) - Math.abs(b.total - med))[0];
  const failed = fails.length >= 2;
  return { key: k, kind: base.kind, name: base.name, color: base.color, totals, med, q, fails, failed, sortKey: (failed ? -100 : 0) + med, why: near.why, n: got.length, row };
});
const low = s => s.toLowerCase().trim();
const plants = new Set([...plantsArg.split(','), ...goodArg.split(',')].map(low).filter(Boolean));
const good = new Set(goodArg.split(',').map(low).filter(Boolean));
const prot = new Set(protArg.split(',').map(low).filter(Boolean));
// round of each space from the board text ("  II  Name: ...") and the color each space belongs to
const roundOf = new Map();
if (board && existsSync(board)) for (const l of readFileSync(board, 'utf8').split('\n')) { const m = l.match(/^\s+(I{1,3})\s+([^:]+):/); if (m) roundOf.set(low(m[2]), m[1]); }
const bar = r => r.med >= 13 && r.q[0] > 0 && r.q[2] > 0 && r.q[3] > 0 && r.fails.length < 2;
const L = [], J = { label, judges: files, members: [], spaces: [], checks: {} };

// --- agreement
const agree = kind => {
  const rs = rows.filter(r => r.kind === kind && r.row.every(Boolean));
  const pairs = [];
  for (let a = 0; a < judges.length; a++) for (let b = a + 1; b < judges.length; b++) pairs.push({ a: files[a], b: files[b], rho: spearman(rs.map(r => r.row[a].total), rs.map(r => r.row[b].total)) });
  return pairs;
};
const ag = { member: agree('member'), space: agree('space') };
J.checks.agreement = ag;

// --- plants, per judge and on the median
const pos = (kind, getTotal, name) => { const rs = rows.filter(r => r.kind === kind && getTotal(r) != null && (!plants.has(low(r.name)) || low(r.name) === name)).sort((x, y) => getTotal(x) - getTotal(y)); const i = rs.findIndex(r => low(r.name) === name); return i < 0 ? null : { at: i + 1, of: rs.length }; };
const plantRes = [...plants].map(p => {
  const r = rows.find(x => low(x.name) === p); if (!r) return { name: p, missing: true };
  const per = judges.map((_, ji) => pos(r.kind, x => x.row[ji] ? (x.row[ji].hardFail ? -100 : 0) + x.row[ji].total : null, p));
  const m = pos(r.kind, x => x.sortKey, p);
  const pass = good.has(p) ? m.at > m.of / 2 : m.at <= Math.ceil(m.of * 0.15);
  return { name: r.name, good: good.has(p), per, med: m, pass };
});
J.checks.plants = plantRes;

// --- Cory's past calls, split into half A (may be quoted) and B (held out, scored)
const cal = calibration(calFile);
const live = rows.filter(r => !plants.has(low(r.name)));
const match = e => live.filter(r => e.names.some(n => low(n) === low(r.name)));
let split = null;
if (splitFile && existsSync(splitFile)) {
  const t = readFileSync(splitFile, 'utf8'), A = new Set(), B = new Set();
  let cur = null; for (const l of t.split('\n')) { if (/^## Half A/.test(l)) cur = A; else if (/^## Half B/.test(l)) cur = B; else if (/^## /.test(l)) cur = null; else if (cur && /^- /.test(l)) cur.add(low(l.slice(2).split(' · ')[0])); }
  split = { A, B };
} else if (splitFile) {
  // make it: a seeded coin flip per card, Shake Down and Loyalists forced into A (they're quoted in rubric v1.1)
  const rand = rng(20261104), A = new Set(['shake down', 'loyalists']), B = new Set();
  const all = [...cal.disliked.map(e => ['dis', e]), ...cal.liked.map(e => ['like', e])];
  for (const [, e] of all) for (const r of match(e)) { const n = low(r.name); if (A.has(n) || B.has(n)) continue; (rand() < 0.5 ? A : B).add(n); }
  split = { A, B };
  const line = (n, side) => `- ${n} · ${side}`;
  const side = n => cal.disliked.some(e => match(e).some(r => low(r.name) === n)) ? 'disliked' : 'liked';
  writeFileSync(splitFile, ['# Cory\'s past calls, split for the taste check', '', 'Seeded coin flip (seed 20261104) over the live cards named in design/eval/quality-loop/calibration.md sections 1a and 2. Shake Down and Loyalists forced into half A (rubric v1.1 quotes them). Rubric and prompt examples may come from half A only; the taste check is scored on half B only. Both halves are reported.', '',
    '## Half A (may be quoted)', ...[...split.A].sort().map(n => line(n, side(n))), '', '## Half B (held out)', ...[...split.B].sort().map(n => line(n, side(n))), ''].join('\n'));
}
const taste = (which, onlyFresh) => {
  const res = { dislikedLow: 0, disliked: 0, likedHigh: 0, liked: 0, misses: [] };
  for (const [kindName, list] of [['disliked', cal.disliked], ['liked', cal.liked]]) for (const e of list) {
    if (onlyFresh && e.stale) continue;
    for (const r of match(e)) {
      if (which && !which.has(low(r.name))) continue;
      const m = pos(r.kind, x => plants.has(low(x.name)) ? null : x.sortKey, low(r.name)); if (!m) continue;
      const lowHalf = m.at <= m.of / 2;
      if (kindName === 'disliked') { res.disliked++; if (lowHalf) res.dislikedLow++; else res.misses.push(`${r.name} (disliked, ${m.at}/${m.of} from worst)`); }
      else { res.liked++; if (!lowHalf) res.likedHigh++; else res.misses.push(`${r.name} (liked, ${m.at}/${m.of} from worst)`); }
    }
  }
  res.share = (res.dislikedLow + res.likedHigh) / Math.max(1, res.disliked + res.liked);
  return res;
};
// halves are scored leaving out cards reworked since Cory spoke (his call was on other text)
const tasteAll = taste(null, false), tasteFresh = taste(null, true), tasteA = split && taste(split.A, true), tasteB = split && taste(split.B, true);
J.checks.taste = { all: tasteAll, notStale: tasteFresh, A: tasteA, B: tasteB };

// --- write
const pct = x => `${Math.round(x * 100)}%`;
const fmtRho = ps => ps.map(p => p.rho.toFixed(2)).join(', ');
L.push(`# Ranking${label ? ` (${label})` : ''}: worst first`, '');
L.push(`From ${files.length} blind paper judges (${files.join(', ')}), median total of 20. Bar: 13 or more, no 0 on Clear, Feels good or Fun, no hard fail from 2+ judges. Made by scripts/quality/ranking.mjs.`, '');
L.push('## Checks on the judges', '');
L.push(`- Agreement (rank correlation per judge pair, bar 0.6): members ${fmtRho(ag.member)}; spaces ${fmtRho(ag.space)}. ${[...ag.member, ...ag.space].every(p => p.rho >= 0.6) ? 'Passed.' : 'FAILED on at least one pair.'}`);
if (plantRes.length) L.push(`- Planted cards: ${plantRes.map(p => p.missing ? `${p.name} not found` : `${p.name} (${p.good ? 'good' : 'bad'}) ${p.med.at}/${p.med.of} from worst${p.pass ? '' : ' MISSED'}`).join('; ')}. ${plantRes.every(p => p.pass) ? 'All caught.' : 'At least one missed.'}`);
const tl = (n, t) => `${n}: ${t.dislikedLow}/${t.disliked} disliked in the bottom half, ${t.likedHigh}/${t.liked} liked in the top half (${pct(t.share)})`;
if (tasteB) L.push(`- Cory's past calls, held-out half B, cards unchanged since he spoke (bar 70%): ${tl('B', tasteB)}. ${tasteB.share >= 0.7 ? 'Passed.' : 'Under the bar.'} Half A (may appear in prompts, so not a test): ${tl('A', tasteA)}.`);
L.push(`- Cory's past calls, all: ${tl('all', tasteAll)}; leaving out cards reworked since he spoke: ${tl('not stale', tasteFresh)}.`);
if (tasteB?.misses.length) L.push(`- Half B misses (read before fixing; the judge may be right): ${tasteB.misses.join(', ')}.`);
L.push('');
for (const kind of ['member', 'space']) {
  const rs = live.filter(r => r.kind === kind).sort((a, b) => a.sortKey - b.sortKey || a.q[2] + a.q[3] - b.q[2] - b.q[3]);
  const under = rs.filter(r => !bar(r)).length;
  L.push(`## ${kind === 'member' ? 'Members' : 'Wheel spaces'} (${rs.length}; ${under} under the bar)`, '');
  L.push('| # | Card | Color | Median | Judges | Bar | Flags | Why (judge nearest the median) |', '|---|---|---|---|---|---|---|---|');
  rs.forEach((r, i) => {
    const flags = [prot.has(low(r.name)) ? 'protected' : '', kind === 'space' && roundOf.get(low(r.name)) ? (roundOf.get(low(r.name)) === 'III' ? 'round III (rework only under 10)' : `round ${roundOf.get(low(r.name))}`) : '', r.fails.length ? `hard fail x${r.fails.length}: ${r.fails[0]}` : '', [0, 2, 3].filter(k => r.q[k] === 0).map(k => `0 on C${k + 1}`).join(' ')].filter(Boolean);
    L.push(`| ${i + 1} | ${r.name} | ${r.color} | ${r.med} | ${r.totals.join('/')} | ${bar(r) ? 'over' : 'UNDER'} | ${[...new Set(flags)].join('; ')} | ${String(r.why || '').replace(/\|/g, '/')} |`);
    J[kind === 'member' ? 'members' : 'spaces'].push({ rank: i + 1, name: r.name, color: r.color, median: r.med, totals: r.totals, q: r.q, overBar: bar(r), protected: prot.has(low(r.name)), round: roundOf.get(low(r.name)) || null, hardFails: r.fails, why: r.why });
  });
  L.push('');
}
const md = L.join('\n');
if (out) writeFileSync(out, md); else process.stdout.write(md);
if (jsonOut) writeFileSync(jsonOut, JSON.stringify(J, null, 1));
console.error(`members: agreement ${fmtRho(ag.member)}; spaces ${fmtRho(ag.space)}; plants ${plantRes.map(p => p.pass ? 'ok' : 'MISS').join(' ')}; taste all ${pct(tasteAll.share)}${tasteB ? `, half B ${pct(tasteB.share)}, half A ${pct(tasteA.share)}` : ''}`);
