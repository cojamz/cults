// Pool report (scripts/ideas/README.md): every candidate card in a POOL run, judged against the bar the live cards set
// in the same games, not against any one card it might replace (Cory, Nov 7: "just generally is the card or action we
// are testing meeting our bar, not is it better than something").
// Usage: node scripts/ideas/pool-report.mjs <dir with *.jsonl games | trial name> [--json out.json]
import { readFileSync, readdirSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TRIALS = process.env.TRIALS_DIR || '/mnt/project-files/trials';
export function loadGames(src) {
  let dirs = [src];
  if (!existsSync(src)) {
    const spec = JSON.parse(readFileSync(join(TRIALS, 'trials', src, 'spec.json'), 'utf8'));
    dirs = [join(TRIALS, 'arms', spec.arms.trial, 'games')];
  }
  const rows = new Map();
  for (const d of dirs) for (const f of readdirSync(d).filter(x => x.endsWith('.jsonl')))
    for (const l of readFileSync(join(d, f), 'utf8').split('\n')) if (l.trim()) { const r = JSON.parse(l); if (!r.stuck && !rows.has(r.game)) rows.set(r.game, r); }
  return [...rows.values()];
}
const seatsOf = r => r.players.filter(p => p.seat !== r.buyer);
const q = (xs, p) => { const s = [...xs].sort((a, b) => a - b); return s.length ? s[Math.min(s.length - 1, Math.floor(p * s.length))] : 0; };

export function poolReport(rows) {
  const cand = new Set(rows.flatMap(r => r.pool?.members || []));
  const candSp = new Set(rows.flatMap(r => (r.pool?.spaces || []).map(s => s.in)));
  // members: every card that reached the shop
  const M = {};
  for (const r of rows) for (const n of r.shop) {
    const name = n.replace(/ \([a-z]+\)$/, ''), c = (M[name] ||= { name, color: n.match(/\(([a-z]+)\)$/)?.[1], shown: 0, takenIn: 0, own: 0, win: 0, cand: cand.has(name) });
    c.shown++;
    let any = false;
    for (const p of seatsOf(r)) if (Object.keys(p.gotRound || {}).some(k => k === n)) { any = true; c.own++; c.win += p.win ? 1 : 0; }
    if (any) c.takenIn++;
  }
  // spaces: games the space was on the wheel, uses per game, takers' win share
  const S = {};
  for (const r of rows) {
    const out = new Set((r.pool?.spaces || []).map(s => s.out)), inn = (r.pool?.spaces || []).map(s => s.in);
    const keys = new Set([...r.players.flatMap(p => Object.keys(p.places || {}))].filter(k => !out.has(k)));
    for (const k of inn) keys.add(k);
    for (const k of keys) {
      if (!r.table.includes(k.split(':')[0])) continue;
      const c = (S[k] ||= { name: k, shown: 0, uses: 0, own: 0, win: 0, cand: candSp.has(k) });
      c.shown++;
      for (const p of seatsOf(r)) { const n = (p.places || {})[k] || 0; c.uses += n; if (n) { c.own++; c.win += p.win ? 1 : 0; } }
    }
  }
  for (const c of Object.values(M)) { c.taken = c.shown ? c.takenIn / c.shown : 0; c.wr = c.own ? c.win / c.own : 0; }
  for (const c of Object.values(S)) { c.perGame = c.shown ? c.uses / c.shown : 0; c.wr = c.own ? c.win / c.own : 0; }
  // the bar: the middle 80% of live cards with enough owners
  const liveM = Object.values(M).filter(c => !c.cand && c.own >= 30), liveS = Object.values(S).filter(c => !c.cand && c.own >= 30);
  const bar = {
    taken: q(liveM.map(c => c.taken), 0.1), wrLo: q(liveM.map(c => c.wr), 0.1), wrHi: q(liveM.map(c => c.wr), 0.9),
    spUse: q(liveS.map(c => c.perGame), 0.1), spLo: q(liveS.map(c => c.wr), 0.1), spHi: q(liveS.map(c => c.wr), 0.9),
    liveMembers: liveM.length, liveSpaces: liveS.length,
  };
  const verdict = (c, kind) => {
    const [use, lo, hi, u] = kind === 'space' ? [c.perGame, bar.spLo, bar.spHi, bar.spUse] : [c.taken, bar.wrLo, bar.wrHi, bar.taken];
    if (c.shown < 15) return 'barely dealt';
    if (use < u) return kind === 'space' ? 'rarely taken' : 'rarely bought';
    if (c.own < 30) return 'too few owners to tell';
    if (c.wr > hi) return 'above the bar: too strong as printed';
    if (c.wr < lo) return 'below the bar: owners lose';
    return 'meets the bar';
  };
  const members = Object.values(M).filter(c => c.cand).map(c => ({ ...c, verdict: verdict(c, 'member') }));
  const spaces = Object.values(S).filter(c => c.cand).map(c => ({ ...c, verdict: verdict(c, 'space') }));
  return { games: rows.length, bar, members, spaces };
}

const pct = x => `${Math.round(100 * x)}%`;
if (import.meta.url === `file://${process.argv[1]}`) {
  const [src] = process.argv.slice(2), jo = process.argv.indexOf('--json');
  const R = poolReport(loadGames(src));
  const b = R.bar;
  console.log(`# Pool report: ${R.games} games`);
  console.log(`The bar, from the live cards in these same games (middle 80%): members bought in at least ${pct(b.taken)} of games they show up, owners winning ${pct(b.wrLo)} to ${pct(b.wrHi)} (${b.liveMembers} live members); spaces taken at least ${b.spUse.toFixed(1)} times a game, takers winning ${pct(b.spLo)} to ${pct(b.spHi)} (${b.liveSpaces} live spaces). Even is 25% at 4 players.\n`);
  console.log('## Members');
  for (const c of R.members.sort((a, z) => a.color.localeCompare(z.color))) console.log(`- **${c.name}** (${c.color}): ${c.verdict}. Bought in ${pct(c.taken)} of ${c.shown} games it showed up; owners won ${pct(c.wr)} (${c.own} owners).`);
  console.log('\n## Spaces');
  for (const c of R.spaces) console.log(`- **${c.name}**: ${c.verdict}. Taken ${c.perGame.toFixed(1)} times a game in ${c.shown} games; takers won ${pct(c.wr)} (${c.own} takers).`);
  if (jo > 0) writeFileSync(process.argv[jo + 1], JSON.stringify(R));
}
