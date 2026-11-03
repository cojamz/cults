// The balance system's own reads of the game records (v4-balance.mjs rows), beyond win rates and card lifts:
// catch-up, interaction, game length, how winners won, and (with a Hard file) which colors reward skill.
//   node scripts/balance/extras.mjs --normal=a.jsonl,b.jsonl [--hard=c.jsonl] [--normalReport=n.json --hardReport=h.json] --json=out.json --md=out.md
import { readFileSync, writeFileSync } from 'node:fs';

const flags = Object.fromEntries(process.argv.slice(2).map(a => { const [k, v] = a.replace(/^--/, '').split('='); return [k, v ?? true]; }));
const load = list => (list ? String(list).split(',').flatMap(f => readFileSync(f, 'utf8').trim().split('\n').filter(Boolean).map(JSON.parse)) : []).filter(r => !r.stuck);
const normal = load(flags.normal), hard = load(flags.hard);
const pct = x => `${Math.round(x * 100)}%`;
const mean = a => a.reduce((x, y) => x + y, 0) / (a.length || 1);
const out = {}, md = [];
const say = s => md.push(s);

function catchUp(rows, label) {
  const by = {};
  for (const r of rows) {
    if (r.buyer >= 0 || !r.standings || r.standings.length < 3) continue;
    const n = r.seats, st = r.standings, fin = st[st.length - 1];
    const winner = fin.indexOf(Math.max(...fin));
    const x = (by[n] ??= { games: 0, r1Lead: 0, r1Last: 0, r2Lead: 0, r2Last: 0, comeback: 0, r2gap: [], margin: [] });
    x.games++;
    for (const [k, at] of [['r1', st.length - 3], ['r2', st.length - 2]]) {
      const s = st[at];
      if (!s) continue;
      const lead = s.indexOf(Math.max(...s)), last = s.indexOf(Math.min(...s));
      if (lead === winner) x[`${k}Lead`]++;
      if (last === winner) x[`${k}Last`]++;
    }
    const s2 = st[st.length - 2], sorted2 = [...s2].sort((a, b) => b - a);
    x.r2gap.push(sorted2[0] - sorted2[1]);
    const sortedF = [...fin].sort((a, b) => b - a);
    x.margin.push(sortedF[0] - sortedF[1]);
    if (s2[winner] < sorted2[0] - 10) x.comeback++;
  }
  out[`catchUp_${label}`] = by;
  say(`\n## Catch-up and runaway leaders (${label} bots)`);
  for (const [n, x] of Object.entries(by)) {
    say(`- ${n} players, ${x.games} games (even chance ${pct(1 / n)}): the leader after round I won ${pct(x.r1Lead / x.games)}, the last after round I won ${pct(x.r1Last / x.games)}; the leader after round II won ${pct(x.r2Lead / x.games)}, the last after round II won ${pct(x.r2Last / x.games)}.`);
    say(`  A winner 10+ followers behind going into round III: ${pct(x.comeback / x.games)} of games. Lead after round II averaged ${mean(x.r2gap).toFixed(1)}; final winning margin ${mean(x.margin).toFixed(1)}.`);
  }
}

function interaction(rows, label) {
  const by = {};
  for (const r of rows) {
    if (!r.tally) continue;
    const x = (by[r.seats] ??= { games: 0, hurt: 0, leader: 0, gift: 0, king: 0, kinds: {}, turns: 0, decisions: 0 });
    x.games++; x.hurt += r.tally.hurt; x.leader += r.tally.hurtLeader; x.gift += r.tally.gift; x.king += r.tally.king || 0;
    x.turns += r.tally.turns; x.decisions += r.tally.decisions;
    for (const [k, v] of Object.entries(r.tally.byKind || {})) x.kinds[k] = (x.kinds[k] || 0) + v;
  }
  out[`interaction_${label}`] = by;
  say(`\n## Interaction and game length (${label} bots)`);
  for (const [n, x] of Object.entries(by)) {
    const kinds = Object.entries(x.kinds).map(([k, v]) => `${k} ${(v / x.games).toFixed(1)}`).join(', ');
    say(`- ${n} players, ${x.games} games: ${(x.hurt / x.games).toFixed(1)} moves a game take from a rival (${kinds}); ${pct(x.leader / (x.hurt || 1))} of them hit the leader (even ${pct(1 / (n - 1))}); ${(x.gift / x.games).toFixed(1)} gifts to rivals.`);
    say(`  Kingmaking: ${(x.king / x.games).toFixed(2)} times a game, a player 15+ behind in round III hit one of the top two.`);
    say(`  Length: ${(x.turns / x.games).toFixed(0)} turns and ${(x.decisions / x.games).toFixed(0)} decisions a game (${(x.decisions / x.turns).toFixed(1)} per turn).`);
  }
}

function variety(rows, label) {
  const plans = {};
  let games = 0;
  for (const r of rows) {
    if (r.buyer >= 0) continue;
    const top = Math.max(...r.players.map(p => p.followers));
    const ws = r.players.filter(p => p.followers === top);
    games++;
    for (const p of ws) {
      const by = {};
      for (const m of p.members) { const q = m.match(/\((\w+)\)$/)?.[1]; if (q && q !== 'benders') by[q] = (by[q] || 0) + 1; }
      const main = Object.entries(by).sort((a, b) => b[1] - a[1])[0];
      const size = p.memberCount <= 5 ? 'few members (5 or less)' : p.memberCount >= 9 ? 'wide (9+ members)' : '6 to 8 members';
      const k = `${main && main[1] >= 3 ? `mostly ${main[0]}` : 'mixed colors'}, ${size}`;
      plans[k] = (plans[k] || 0) + 1 / ws.length;
    }
  }
  const list = Object.entries(plans).sort((a, b) => b[1] - a[1]);
  const shares = list.map(([, v]) => v / games);
  const effective = 1 / shares.reduce((a, s) => a + s * s, 0);
  out[`variety_${label}`] = { games, plans: Object.fromEntries(list), effective };
  say(`\n## How winners won (${label} bots, ${games} games)`);
  say(`About ${effective.toFixed(1)} equally common winning plans. The most common:`);
  for (const [k, v] of list.slice(0, 8)) say(`- ${k}: ${pct(v / games)}`);
}

function skill() {
  if (!flags.normalReport || !flags.hardReport) return;
  const n = JSON.parse(readFileSync(flags.normalReport, 'utf8')), h = JSON.parse(readFileSync(flags.hardReport, 'utf8'));
  const rows = Object.keys(n.colors).filter(c => h.colors[c]).map(c => {
    const a = n.colors[c], b = h.colors[c];
    return { c, normal: (a.w - a.e) / a.n, hard: (b.w - b.e) / b.n, nN: a.n, nH: b.n };
  }).sort((x, y) => (y.hard - y.normal) - (x.hard - x.normal));
  out.skill = rows;
  say('\n## Skill by color (main color\'s win share above even, Normal bots then Hard bots)');
  say('A color that does better under Hard rewards good play; one that drops plays itself or only beats weak players.');
  for (const r of rows) say(`- ${r.c}: ${r.normal >= 0 ? '+' : ''}${Math.round(r.normal * 100)} → ${r.hard >= 0 ? '+' : ''}${Math.round(r.hard * 100)} points (${r.nN} and ${r.nH} seats)`);
}

catchUp(normal, 'Normal'); if (hard.length) catchUp(hard, 'Hard');
interaction(normal, 'Normal'); if (hard.length) interaction(hard, 'Hard');
variety(normal, 'Normal'); if (hard.length) variety(hard, 'Hard');
skill();
if (flags.json) writeFileSync(flags.json, JSON.stringify(out, null, 1));
if (flags.md) writeFileSync(flags.md, md.join('\n') + '\n');
else console.log(md.join('\n'));
