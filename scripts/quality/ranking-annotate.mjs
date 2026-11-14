#!/usr/bin/env node
// Adds "new since <prev>", the previous round's median and the card's play A/B result to a ranking (Evaluators, Nov 4).
//   node scripts/quality/ranking-annotate.mjs <dir> <prevDir> [--must "A,B"]  (rewrites <dir>/ranking.md, adds fields to ranking.json)
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const [dir, prev] = process.argv.slice(2); const mi = process.argv.indexOf('--must');
const must = new Set(mi > 0 ? process.argv[mi + 1].split(',').map(s => s.trim()) : []);
const AB = '/mnt/project-files/quality/evals/play/ab/';
const textOf = f => { const m = {}; for (const l of readFileSync(f, 'utf8').split('\n')) { let x = l.match(/^    · (.+?) \[[^\]]*\] (.*)$/) || l.match(/^  (?:I|II|III)  ([^:]+): (.*)$/); if (x) m[x[1].trim()] = x[2].trim(); } return m; };
const now = textOf(join(dir, 'board-with-plants.txt')), was = textOf(join(prev, 'board-with-plants.txt'));
const R = JSON.parse(readFileSync(join(dir, 'ranking.json'), 'utf8')), P = JSON.parse(readFileSync(join(prev, 'ranking.json'), 'utf8'));
const pm = Object.fromEntries([...P.members, ...P.spaces].map(c => [c.name, c.median]));
// play results: every A/B folder whose new card has this name (and this text when the key has one), latest first
const plays = {};
for (const d of readdirSync(AB)) { const k = join(AB, d, 'key.json'), r = join(AB, d, 'result.json'); if (!existsSync(k) || !existsSync(r)) continue;
  let key, res; try { key = JSON.parse(readFileSync(k, 'utf8')); res = JSON.parse(readFileSync(r, 'utf8')); } catch { continue; }
  if (key.superseded || !key.new || key.new.text === key.old.text) continue;
  (plays[key.new.name] ??= []).push({ dir: d, text: key.new.text, old: key.old.name, gap: res.gapMatched ?? res.gap, verdict: res.pass ? 'pass' : res.botBug ? 'bot bug' : 'no', t: readdirSync(join(AB, d)).length });
}
const playOf = c => { const t = now[c.name]; const ps = (plays[c.name] || []).filter(p => !t || p.text === t); if (!ps.length) return null;
  return ps.map(p => `${p.verdict} ${p.gap >= 0 ? '+' : ''}${p.gap} vs ${p.old}`).join('; '); };
const mark = c => { const isNew = !(c.name in was) || was[c.name] !== now[c.name] || must.has(c.name); return isNew ? (c.name in was ? 'NEW (reworded)' : 'NEW') : ''; };
for (const c of [...R.members, ...R.spaces]) { c.newSince = mark(c) || null; c.prevMedian = pm[c.name] ?? null; c.play = playOf(c); }
writeFileSync(join(dir, 'ranking.json'), JSON.stringify(R, null, 1));
const md = readFileSync(join(dir, 'ranking.md'), 'utf8').split('\n'), out = [];
for (const l of md) {
  if (/^\| # \| Card \|/.test(l)) { out.push(l.replace('| Median |', '| Median | Was (r3) | New | Play A/B |')); continue; }
  if (/^\|---\|---\|/.test(l)) { out.push(l + '---|---|---|'); continue; }
  const m = l.match(/^\| (\d+) \| (.+?) \| (\w+) \| ([\d.]+) \|(.*)$/);
  if (m) { const c = [...R.members, ...R.spaces].find(x => x.name === m[2]); out.push(`| ${m[1]} | ${m[2]} | ${m[3]} | ${m[4]} | ${c?.prevMedian ?? '–'} | ${c?.newSince ?? ''} | ${c?.play ?? ''} |${m[5]}`); continue; }
  out.push(l);
}
writeFileSync(join(dir, 'ranking.md'), out.join('\n'));
const all = [...R.members, ...R.spaces]; console.log(`new: ${all.filter(c => c.newSince).map(c => c.name).join(', ')}\nwith play: ${all.filter(c => c.play).length}`);
