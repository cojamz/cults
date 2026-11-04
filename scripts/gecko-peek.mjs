// Read a Gecko (Firefox) profile written by MOZ_PROFILER_SHUTDOWN (scripts/v4-spin-deep.mjs --gecko=<file>): the
// long markers (reflow, styles, paint, DOM events, GC) on each main thread, and what the slowest stretches spent time in.
//   node scripts/gecko-peek.mjs <profile.json> [--min=50] [--top=40]
import { readFileSync } from 'node:fs';
const argv = process.argv.slice(2);
const flag = (n, d) => { const a = argv.find(x => x.startsWith(`--${n}=`)); return a ? a.slice(n.length + 3) : d; };
const MIN = Number(flag('min', 50)), TOP = Number(flag('top', 40));
const prof = JSON.parse(readFileSync(argv.find(a => !a.startsWith('--')), 'utf8'));
const all = [];
const walk = (p, depth = 0) => { for (const t of p.threads || []) all.push({ t, proc: p.meta && p.meta.processType, start: p.meta ? p.meta.startTime : 0 }); for (const c of p.processes || []) walk(c, depth + 1); };
walk(prof);
const t0 = prof.meta.startTime;
for (const { t, proc, start } of all) {
  const strs = t.stringTable || [];
  const ms = t.markers; if (!ms || !ms.data) continue;
  const S = ms.schema, off = start - t0;
  const long = [];
  for (const m of ms.data) {
    const st = m[S.startTime], en = m[S.endTime];
    if (st == null || en == null || en - st < MIN) continue;
    const name = strs[m[S.name]];
    const d = m[S.data];
    long.push([Math.round(st + off), Math.round(en - st), name + (d && d.type && d.type !== name ? `:${d.type}` : '') + (d && d.eventType ? `(${d.eventType})` : '') + (d && d.category ? `[${d.category}]` : '') + (d && d.cause && d.cause.stack == null ? '' : '')]);
  }
  if (!long.length) continue;
  console.log(`\n# ${t.name} (process ${t.processName || proc || '?'}, pid ${t.pid}) markers >= ${MIN} ms`);
  for (const [st, d, n] of long.sort((a, b) => a[0] - b[0]).slice(0, 200)) console.log(String(st).padStart(8), String(d).padStart(5), n);
}
// samples: inclusive time per function on the busiest content main thread, inside markers over --min ms named --in
const IN = flag('in', '');
if (IN) {
  for (const { t, start } of all) {
    if (t.name !== 'GeckoMain' || !t.samples || !t.samples.data || !t.markers) continue;
    const strs = t.stringTable, S = t.markers.schema, off = start - t0;
    const wins = t.markers.data.filter(m => m[S.endTime] != null && m[S.endTime] - m[S.startTime] >= MIN && new RegExp(IN).test(strs[m[S.name]])).map(m => [m[S.startTime], m[S.endTime]]);
    if (!wins.length) continue;
    const ss = t.samples.schema, st = t.stackTable, ft = t.frameTable, ft_s = ft.schema, st_s = st.schema;
    const frameName = f => { const fr = ft.data[f]; const loc = fr[ft_s.location]; return strs[loc]; };
    const incl = new Map(); let n = 0;
    for (const s of t.samples.data) {
      const time = s[ss.time]; if (!wins.some(([a, b]) => time >= a && time <= b)) continue;
      n++; const seen = new Set();
      for (let k = s[ss.stack]; k != null; k = st.data[k][st_s.prefix]) { const nm = frameName(st.data[k][st_s.frame]); if (nm && !seen.has(nm)) { seen.add(nm); incl.set(nm, (incl.get(nm) || 0) + 1); } }
    }
    if (!n) continue;
    console.log(`\n# ${t.name} pid ${t.pid}: ${n} samples inside ${wins.length} '${IN}' markers >= ${MIN} ms; top frames (share of samples)`);
    for (const [k, v] of [...incl].sort((a, b) => b[1] - a[1]).slice(0, TOP)) console.log(`${(100 * v / n).toFixed(0).padStart(4)}% ${k.slice(0, 140)}`);
  }
}
