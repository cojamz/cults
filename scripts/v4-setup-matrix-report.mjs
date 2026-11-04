#!/usr/bin/env node
// Groups a setup matrix run (scripts/v4-setup-matrix.mjs --out=…) by problem: each distinct failure or flag, with the
// setups it showed up in, and which options every one of those setups shares (the combination to blame).
import { readFileSync } from 'node:fs';
const rows = process.argv.slice(2).flatMap(f => JSON.parse(readFileSync(f, 'utf8')));
const key = msg => msg.replace(/\[[^\]]*\] (bot|random|mixed) n=\d seed=\d+: /, '').replace(/\d+/g, '#').replace(/: .*\((a pile)\)$/, ': … ($1)').replace(/dealt: .*$/, m => m).slice(0, 140);
const groups = new Map();
for (const r of rows) for (const m of [...(r.flags || []), ...(r.error ? [r.error.split('\n')[0]] : []), ...(r.setup ? [`SETUP ${r.setup}`] : [])]) {
  const k = key(m);
  if (!groups.has(k)) groups.set(k, { k, rows: [], example: m });
  if (!groups.get(k).rows.includes(r)) groups.get(k).rows.push(r);
}
const dims = ['n', 'deck', 'swapCard', 'contests', 'shop', 'late', 'tbl'];
console.log(`${rows.length} games, ${rows.filter(r => r.ok).length} clean\n`);
for (const g of [...groups.values()].sort((a, b) => b.rows.length - a.rows.length)) {
  const shared = dims.map(d => { const vs = [...new Set(g.rows.map(r => String(r[d])))]; return vs.length === 1 ? `${d}=${vs[0]}` : null; }).filter(Boolean);
  console.log(`${g.rows.length}× ${g.k}\n    always: ${shared.join(' ') || '(nothing shared)'}\n    e.g. ${g.rows[0].label}\n    ${g.example.slice(0, 300)}\n`);
}
