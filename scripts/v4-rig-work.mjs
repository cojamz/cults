// Our own work in each click, from rig runs (scripts/v4-rig.mjs json clickPhases), builds side by side.
// Wall-clock click times swing ±50-100 ms between runs (frame alignment, bots, box load), which hides a 5-10 ms fix;
// the main-thread stretch from the game taking the click to its effects having run ("work": rules + render + layout
// effects + effects, one task) swings far less. Compare its median and p90 across builds, same seed, same --parallel.
//   node scripts/v4-rig-work.mjs <dir> <labelA> <labelB> …   (each label: every rig-<label>-<n>.json in dir, or rig-<label>.json)
import { readdirSync, readFileSync } from 'node:fs';
const [dir, ...labels] = process.argv.slice(2);
if (!dir || !labels.length) { console.error('usage: node scripts/v4-rig-work.mjs <dir> <label>…'); process.exit(2); }
const g = (e, k) => { const m = (e.marks || '').split(' ').find(x => x.startsWith(k + '+')); return m ? Number(m.slice(k.length + 1)) : null; };
const q = (xs, p) => { xs = xs.filter(x => x != null && x >= 0).sort((a, b) => a - b); return xs.length ? xs[Math.min(xs.length - 1, Math.floor(p * xs.length))] : null; };
const parts = { rules: e => g(e, 'submitted') - g(e, 'pick'), render: e => g(e, 'commit') - g(e, 'submitted'), effects: e => g(e, 'fx') - g(e, 'commit'), work: e => g(e, 'fx') - g(e, 'pick'), frame: e => e.ms - g(e, 'fx'), click: e => e.ms };
for (const L of labels) {
  const files = readdirSync(dir).filter(f => f === `rig-${L}.json` || new RegExp(`^rig-${L}-\\d+\\.json$`).test(f));
  const rows = files.flatMap(f => JSON.parse(readFileSync(`${dir}/${f}`, 'utf8')).clickPhases || []).filter(e => !e.dead && g(e, 'fx') != null && g(e, 'pick') != null);
  const byKind = {};
  for (const e of rows) (byKind[e.what] ||= []).push(e);
  const line = (name, rs) => `${name.padEnd(8)} n ${String(rs.length).padStart(3)} · ` + Object.entries(parts).map(([k, f]) => `${k} ${q(rs.map(f), 0.5)}/${q(rs.map(f), 0.9)}`).join(' · ');
  console.log(`== ${L} (${files.length} runs)`);
  console.log(line('all', rows));
  for (const [k, rs] of Object.entries(byKind).sort()) if (rs.length >= 4) console.log(line(k, rs));
}
