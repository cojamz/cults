// Read balance-report JSONs across bot tiers through the strategy lens. No games are played here.
// Usage: node .claude/skills/game-feel/scripts/lens.mjs --normal=a.json [--hard=b.json] [--veryhard=c.json] [--label=deck10] [--md=out.md] [--before=earlier.json]
// Each JSON comes from: node scripts/v4-balance-report.mjs <runs.jsonl> --json=<out.json>
// Classes (thresholds at the top; change them in references/lens-log.md when a prediction shows they're off):
//   DOMINANT  lift ≥ 2 SE and bought at or above the tier's median rate, in most tiers it shows up in: a must-buy
//   SLEEPER   lift ≥ 2 SE but rarely bought: strong when taken, bots don't see it (humans may; watch, don't panic)
//   TRAP      bought at or above median but lift ≤ −2 SE: players take it and lose: the feel-bad card
//   DEAD      bought in under 3% of the games it showed, in every tier: nobody wants it at this price or at all
//   STRONG/WEAK (spaces) lift past 2 SE either way in most tiers (spaces have no buy rate; a round III space has 1 taker)
//   SKILL+    lift climbs by 8+ points (and past 2 SE of the difference, so a 100-game Hard run can't fake it) from normal to the smartest tier: it rewards good play (good, protect it)
//   SKILL−    lift falls by 8+ points as bots get smarter: it only beats weak players (strong rivals answer it)
const T = { z: 2, dead: 0.03, skill: 0.08, color: 0.08, minN: 30 };
import { readFileSync, writeFileSync } from 'node:fs';
const flags = Object.fromEntries(process.argv.slice(2).map(a => { const [k, v] = a.replace(/^--/, '').split('='); return [k, v ?? true]; }));
const tiers = ['normal', 'hard', 'veryhard'].filter(t => flags[t]).map(t => ({ t, d: JSON.parse(readFileSync(flags[t], 'utf8')) }));
if (!tiers.length) { console.error('Give at least --normal=<report.json>'); process.exit(2); }
const lines = [], say = s => lines.push(s), pts = x => `${x >= 0 ? '+' : ''}${Math.round(x * 100)}`;
const median = a => { const s = [...a].sort((x, y) => x - y); return s.length ? s[Math.floor(s.length / 2)] : 0; };
say(`# Lens read${flags.label ? `: ${flags.label}` : ''}`);
say(`Tiers: ${tiers.map(x => `${x.t} (${x.d.games} games)`).join(', ')}. Lift = owner win share minus expected for their member count, in points.`);

function classify(kind, rows) {
  const by = {};
  for (const { t, d } of tiers) {
    const tab = kind === 'm' ? d.memberTable || [] : d.spaceTable || [];
    const med = median(tab.map(r => (kind === 'm' ? r.buyRate : r.takers)));
    for (const r of tab) (by[r.k] ??= {})[t] = { ...r, hot: (kind === 'm' ? r.buyRate : r.takers) >= med };
  }
  const out = {};
  for (const [k, v] of Object.entries(by)) {
    const ts = Object.entries(v), tags = new Set();
    const strong = ts.filter(([, r]) => r.n >= T.minN && r.lift >= T.z * r.err), weak = ts.filter(([, r]) => r.n >= T.minN && r.lift <= -T.z * r.err);
    const half = Math.max(1, Math.ceil(ts.length / 2));
    if (kind === 's') { if (strong.length >= half) tags.add('STRONG'); if (weak.length >= half) tags.add('WEAK'); }
    else {
      if (strong.filter(([, r]) => r.hot).length >= half) tags.add('DOMINANT'); else if (strong.length >= half) tags.add('SLEEPER');
      if (weak.filter(([, r]) => r.hot).length >= half) tags.add('TRAP');
    }
    const lo = v.normal, hi = v.veryhard || v.hard;
    if (lo && hi && lo.n >= T.minN && hi.n >= T.minN) { const d = hi.lift - lo.lift, bar = Math.max(T.skill, T.z * Math.hypot(lo.err, hi.err)); if (d >= bar) tags.add('SKILL+'); if (d <= -bar) tags.add('SKILL−'); }
    if (tags.size) out[k] = { tags: [...tags], v };
  }
  return out;
}
const show = (title, kind) => {
  const c = classify(kind);
  say(`\n## ${title}`);
  const order = ['DOMINANT', 'STRONG', 'TRAP', 'WEAK', 'SLEEPER', 'DEAD', 'SKILL−', 'SKILL+'];
  for (const tag of order) {
    const ks = Object.entries(c).filter(([, x]) => x.tags.includes(tag));
    if (!ks.length) continue;
    say(`- **${tag}**: ${ks.map(([k, x]) => `${k} (${Object.entries(x.v).map(([t, r]) => `${t[0].toUpperCase()} ${pts(r.lift)}${kind === 'm' ? ` @${Math.round(r.buyRate * 100)}%` : ` ${r.takers.toFixed(1)} takers`}`).join(', ')})`).join('; ')}`);
  }
  return c;
};
// DEAD needs every member, not only those with 30+ owners: read the raw runs next to each JSON (<same name>.jsonl)
import { existsSync } from 'node:fs';
const deadBy = {};
for (const { t } of tiers) {
  const raw = flags[t].replace(/\.json$/, '.jsonl');
  if (!existsSync(raw)) continue;
  const off = {}, own = {};
  for (const line of readFileSync(raw, 'utf8').split('\n')) {
    if (!line) continue; const r = JSON.parse(line); if (r.stuck || r.buyer >= 0) continue;
    for (const m of r.shop || []) off[m] = (off[m] || 0) + 1;
    for (const m of new Set(r.players.flatMap(p => p.members))) own[m] = (own[m] || 0) + 1;
  }
  for (const [m, o] of Object.entries(off)) if (o >= 20) (deadBy[m] ??= {})[t] = (own[m] || 0) / o;
}
const members = show('Members', 'm');
const dead = Object.entries(deadBy).filter(([, v]) => Object.keys(v).length && Object.values(v).every(x => x < T.dead));
const rare = Object.entries(deadBy).filter(([, v]) => Object.values(v).every(x => x >= T.dead && x < 0.15)).sort((a, b) => Object.values(a[1])[0] - Object.values(b[1])[0]);
if (dead.length) say(`- **DEAD** (owned in under ${T.dead * 100}% of the games it showed, every tier): ${dead.map(([k, v]) => `${k} (${Object.entries(v).map(([t, x]) => `${t[0].toUpperCase()} ${(x * 100).toFixed(1)}%`).join(', ')})`).join('; ')}`);
if (rare.length) say(`- **RARE** (owned in 3 to 15% of the games it showed): ${rare.map(([k, v]) => `${k} (${Object.entries(v).map(([t, x]) => `${t[0].toUpperCase()} ${Math.round(x * 100)}%`).join(', ')})`).join('; ')}`);
const spaces = show('Spaces', 's');
say('\n## Colors (main-color seats, lift vs even)');
const cols = {};
for (const { t, d } of tiers) for (const [k, v] of Object.entries(d.colors || {})) (cols[k] ??= {})[t] = (v.w - v.e) / v.n;
for (const [k, v] of Object.entries(cols).sort((a, b) => Object.values(b[1])[0] - Object.values(a[1])[0])) {
  const flag = Object.values(v).every(x => x >= T.color) ? ' **TOO STRONG**' : Object.values(v).every(x => x <= -T.color) ? ' **TOO WEAK**' : '';
  say(`- ${k}: ${Object.entries(v).map(([t, x]) => `${t} ${pts(x)}`).join(', ')}${flag}`);
}
say('\n## Small cults and sweeps');
for (const { t, d } of tiers) {
  for (const [n, S] of Object.entries(d.bySeats || {})) say(`- ${t}, ${n} seats: winners with 5 or fewer members ${Math.round(100 * (S.small || 0) / (S.games || 1))}% (bar 20%), margin ${(S.margin / (S.games || 1)).toFixed(1)}`);
  const sw = Object.entries(d.sweeps || {}).filter(([, x]) => x.sweeps / x.games >= 0.2);
  if (sw.length) say(`- ${t} sweeps over 20%: ${sw.map(([q, x]) => `${q} ${Math.round(100 * x.sweeps / x.games)}% (decided ${Math.round(100 * x.decided / (x.sweeps || 1))}%)`).join(', ')}`);
}
// --before=<report.json> (same seeds, an earlier build): the noise floor is the spread of lift change among cards
// with 100+ owners in both; a move counts only past 2x that spread (found use 1: unchanged cards moved ±4 between
// two 800-game runs on the same seeds, so a 5-point "fix" is noise).
if (flags.before) {
  const A = JSON.parse(readFileSync(flags.before, 'utf8')).memberTable, Bm = Object.fromEntries((tiers[0].d.memberTable || []).map(r => [r.k, r]));
  const d = A.filter(r => Bm[r.k] && r.n >= 100 && Bm[r.k].n >= 100).map(r => ({ k: r.k, d: Bm[r.k].lift - r.lift, a: r.lift, b: Bm[r.k].lift }));
  const sd = Math.sqrt(d.reduce((x, y) => x + y.d * y.d, 0) / (d.length || 1));
  say(`\n## Against ${flags.before.split('/').pop()} (${tiers[0].t})`);
  say(`- Noise floor: lift moves with sd ${pts(sd)} points between the runs across ${d.length} cards; a move past ${pts(2 * sd)} is likely real.`);
  const big = d.filter(x => Math.abs(x.d) >= 2 * sd).sort((x, y) => Math.abs(y.d) - Math.abs(x.d));
  if (big.length) say(`- Moved past the floor: ${big.map(x => `${x.k} ${pts(x.a)} → ${pts(x.b)}`).join('; ')}`);
}
const md = lines.join('\n');
console.log(md);
if (flags.md) writeFileSync(flags.md, md + '\n');
if (flags.json) writeFileSync(flags.json, JSON.stringify({ members, spaces, cols }, null, 1));
