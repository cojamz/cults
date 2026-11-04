#!/usr/bin/env node
// The steering dashboard for the overnight quality loop: cards, sets, games, table load, feel, in one page.
//   node scripts/quality/dashboard.mjs [--balance=<report.md>] [--out=/mnt/project-files/quality/dashboard.md]
// Reads: /mnt/project-files/quality/ranking.json (paper scores), steering/set-judge-*.json (set scores),
// metrics/history.jsonl (set-metrics snapshots), a balance run report (games), steering/play-judge.json if present (feel).
import fs from 'node:fs';
const Q = '/mnt/project-files/quality';
const args = Object.fromEntries(process.argv.slice(2).map(a => { const [k, ...v] = a.replace(/^--/, '').split('='); return [k, v.join('=') || true]; }));
const out = args.out || `${Q}/dashboard.md`;
const read = (p, d = null) => { try { return fs.readFileSync(p, 'utf8'); } catch { return d; } };
const json = (p, d = null) => { const t = read(p); try { return t ? JSON.parse(t) : d; } catch { return d; } };
const pct = x => x == null ? '-' : `${Math.round(x * 100)}%`;
const COLORS = ['gold', 'red', 'purple', 'silver', 'yellow', 'blue', 'magenta', 'white', 'green', 'guests'];
const ALIAS = { market: 'blue', thieves: 'magenta', trading: 'white', echo: 'green', benders: 'guests' };
const norm = c => ALIAS[String(c).toLowerCase()] || String(c).toLowerCase();

// ---- metrics history ----
const hist = (read(`${Q}/metrics/history.jsonl`, '') || '').trim().split('\n').filter(Boolean).map(l => JSON.parse(l));
const now = hist[hist.length - 1], first = hist[0];

// ---- set judges ----
const sj = [1, 2, 3].map(i => json(`${Q}/steering/set-judge-${i}.json`)).filter(Boolean);
const setScore = {}, carriers = {}, plans = {};
for (const k of COLORS) {
  const rows = sj.map(j => j.find(r => norm(r.color) === k)).filter(r => r && Array.isArray(r.scores));
  if (!rows.length) continue;
  const tots = rows.map(r => r.total ?? r.scores.reduce((a, b) => a + b, 0)).sort((a, b) => a - b);
  setScore[k] = { median: tots[Math.floor((tots.length - 1) / 2)], all: tots, q: Array.from({ length: 10 }, (_, i) => +(rows.reduce((a, r) => a + r.scores[i], 0) / rows.length).toFixed(1)) };
  const cs = {}; for (const r of rows) for (const c of r.carriers || []) cs[c.name] = (cs[c.name] || 0) + 1;
  carriers[k] = Object.entries(cs).sort((a, b) => b[1] - a[1]).map(([n, v]) => `${n}${v > 1 ? ` (${v}/${rows.length})` : ''}`);
  plans[k] = rows[0].plan;
}

// ---- balance report ----
const games = {};
const rep = args.balance ? read(args.balance, '') : '';
if (rep) {
  const hard = rep.split('## Win rates (Hard, 4 players)')[1] || '';
  const m1 = hard.match(/winners with 5 or fewer member cards (\d+)%/); if (m1) games.small = +m1[1] / 100;
  const cu = rep.split('## Catch-up and runaway leaders (Hard bots)')[1] || '';
  const m2 = cu.match(/leader after round I won (\d+)%, the last after round I won (\d+)%; the leader after round II won (\d+)%, the last after round II won (\d+)%/);
  if (m2) Object.assign(games, { leadI: +m2[1] / 100, lastI: +m2[2] / 100, leadII: +m2[3] / 100, lastII: +m2[4] / 100 });
  const hw = (rep.split('## How winners won (Hard bots')[1] || '').split('\n## ')[0];
  games.plans = [...hw.matchAll(/^- (.+?): (\d+)%/gm)].map(m => [m[1], +m[2] / 100]);
  const ia = (rep.split('## Interaction and game length (Hard bots)')[1] || '').match(/([\d.]+) moves a game take from a rival/); if (ia) games.takes = +ia[1];
  const lifts = [...((hard.split('Main color')[1] || '').split('\n\n')[0]).matchAll(/^\s+(\w+): \d+% vs \d+%, lift ([+-]\d+) ±(\d+) \((\d+) seats\)/gm)];
  games.lift = Object.fromEntries(lifts.map(m => [norm(m[1]), { lift: +m[2], ci: +m[3], n: +m[4] }]));
  games.dead = {}; games.auto = {};
  for (const m of rep.matchAll(/^\| (?:(\w+): )?([^|(]+?)(?: \((\w+)\))? \| (DEAD|AUTO-PICK) \|/gm)) { const c = norm(m[1] || m[3] || '?'); const bag = m[4] === 'DEAD' ? games.dead : games.auto; bag[c] = [...new Set([...(bag[c] || []), m[2].trim()])]; }
}
const playJ = json(`${Q}/steering/play-judge.json`);

// ---- write ----
const L = [];
L.push('# Quality loop dashboard', '', `Updated ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} Eastern by the steering script (scripts/quality/dashboard.mjs). Build ${now?.sha ?? '?'}${now ? `, snapshot "${now.label}"` : ''}.`, '');
L.push('## Targets (done when every one holds two batches running)', '');
const tgt = [
  ['Cards over the bar (all)', now ? pct(now.set.overBar) : '-', '100% (protected cards count)'],
  ['Set score, colors at 15+ of 20', Object.keys(setScore).length ? `${Object.values(setScore).filter(s => s.median >= 15).length} of ${Object.keys(setScore).length}` : 'pending', 'all'],
  ['Round I leader wins (Hard, 4 seats)', pct(games.leadI), 'under 40%'],
  ['Last after round II wins (Hard)', pct(games.lastII), '10% or more'],
  ['Wins with 5 or fewer members (Hard)', pct(games.small), '20% or more'],
  ['Biggest single winning plan (Hard)', games.plans?.length ? `${games.plans[0][0]} ${pct(games.plans[0][1])}` : '-', 'no plan over 30%'],
  ['Distinct winning plans at 5%+ (Hard)', games.plans ? String(games.plans.filter(p => p[1] >= 0.05).length) : '-', '6 or more'],
  ['Random cards', now ? (now.set.random.join(', ') || 'none') : '-', 'Walk-In only'],
  ['Cards that need memory', now ? (now.set.memory.join(', ') || 'none') : '-', 'none'],
  ['Play judge: could tell / momentum / agency / catch-up', playJ ? playJ.avg.join(' / ') : 'pending first batch', '1.5 of 2 each'],
];
for (const [a, b, c] of tgt) L.push(`- **${a}:** ${b} (target ${c})`);
L.push('', '## Per color', '', '| Color | Card median | Over bar | Set score (judges) | Main-color lift (Hard) | Dead (bots never pick) | Stings | Words | Top shapes |', '|---|---|---|---|---|---|---|---|---|');
for (const k of COLORS) {
  const b = now?.byColor?.[k]; if (!b) continue;
  const s = setScore[k]; const lf = games.lift?.[k];
  const top = Object.entries(b.shapeCount).sort((x, y) => y[1] - x[1]).slice(0, 3).map(([n, v]) => `${n} ${v}`).join(', ');
  L.push(`| ${k} | ${b.medianScore ?? '-'} | ${pct(b.overBar)} | ${s ? `${s.median} (${s.all.join('/')})` : 'pending'} | ${lf ? `${lf.lift > 0 ? '+' : ''}${lf.lift} ±${lf.ci} (${lf.n})` : '-'} | ${(games.dead?.[k] || []).join(', ') || '-'} | ${pct(b.stings)} | ${b.medianWords} | ${top} |`);
}
L.push('', '## The set', '');
if (now) {
  L.push(`- Color overlap (how alike colors' mechanisms are; rising = colors drifting together): mean ${now.identity.meanOverlap}${first && first !== now ? ` (was ${first.identity.meanOverlap} at "${first.label}")` : ''}. Closest pairs: ${now.identity.closest.map(p => `${p[0]} and ${p[1]} ${p[2]}`).join('; ')}.`);
  L.push(`- Cards that reach into another color: ${pct(now.set.connectors)}. Cards with a combo partner in their own color: ${pct(now.set.comboLinked)}. Stings: ${pct(now.set.stings)}. Median words: ${now.set.medianWords}.`);
  L.push(`- Plain members left (a color's way in): ${now.set.plainCards.length}: ${now.set.plainCards.join(', ')}.`);
  L.push(`- Rubric means C1 to C10 (all cards): ${now.set.qMean?.join(' ') ?? '-'}.`);
}
if (Object.keys(carriers).length) {
  L.push('', '### Carriers (low alone, the set needs them: a set check before any replacement)', '');
  for (const k of COLORS) if (carriers[k]?.length) L.push(`- **${k}** (plan: ${plans[k] || '-'}): ${carriers[k].join(', ')}`);
}
if (now?.guard?.length) L.push('', `Script guard (only maker of a combo others in the color use): ${now.guard.map(g => `${g.name} (${g.color})`).join(', ')}.`);
L.push('', '## Games', '');
if (rep) {
  L.push(`- Source: ${args.balance}`);
  L.push(`- Hard, 4 seats: round I leader wins ${pct(games.leadI)}, last after round I ${pct(games.lastI)}; round II leader ${pct(games.leadII)}, last after round II ${pct(games.lastII)} (even 25%).`);
  L.push(`- Moves a game that take from a rival: ${games.takes ?? '-'}. Wins with 5 or fewer members: ${pct(games.small)}.`);
  L.push(`- How winners won (Hard): ${(games.plans || []).map(([p, v]) => `${p} ${pct(v)}`).join('; ')}.`);
} else L.push('- Pending: the fast By color bot run on this build.');
L.push('', '## History', '', '| Snapshot | Build | Card median | Over bar | Overlap | Stings | Words | Plain members |', '|---|---|---|---|---|---|---|---|');
for (const h of hist.slice(-12)) L.push(`| ${h.label} | ${h.sha} | ${h.set.medianScore} | ${pct(h.set.overBar)} | ${h.identity.meanOverlap} | ${pct(h.set.stings)} | ${h.set.medianWords} | ${h.set.plainCards.length} |`);
fs.writeFileSync(out, L.join('\n') + '\n');
console.log(`wrote ${out}`);
