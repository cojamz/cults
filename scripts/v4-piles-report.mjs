// Compares piles runs (scripts/v4-piles-compare.mjs) game for game: node scripts/v4-piles-report.mjs live.jsonl A.jsonl [B.jsonl]
import { readFileSync } from 'node:fs';
const read = f => readFileSync(f, 'utf8').trim().split('\n').filter(Boolean).map(l => JSON.parse(l)).filter(r => !r.stuck);
const runs = process.argv.slice(2).map(f => ({ f, rows: read(f) }));
const common = runs.map(r => new Set(r.rows.map(x => x.game))).reduce((a, b) => new Set([...a].filter(x => b.has(x))));
const avg = xs => xs.reduce((a, b) => a + b, 0) / Math.max(1, xs.length);
const sum = (h, k) => h.reduce((a, x) => a + x[k], 0);
for (const { f, rows } of runs) {
  const rs = rows.filter(r => common.has(r.game));
  const per = k => avg(rs.map(r => sum(r.hit, k))).toFixed(1);
  const hitsAll = rs.map(r => sum(r.hit, 'resLost') + sum(r.hit, 'membersLost'));
  const atLeader = avg(rs.map(r => sum(r.hit, 'atLeader'))) / Math.max(1e-9, avg(hitsAll));
  const spread = avg(rs.map(r => Math.max(...r.followers) - Math.min(...r.followers)));
  const margin = avg(rs.map(r => { const s = [...r.followers].sort((a, b) => b - a); return s[0] - s[1]; }));
  const small = rs.filter(r => r.members[r.winner] <= 5).length / rs.length;
  const multi = avg(rs.map(r => r.bought.reduce((a, b) => a + Object.values(b).filter(n => n > 1).length, 0)));
  console.log(`${rs[0]?.variant} (${rs[0]?.level}), ${rs.length} games:
  resources rivals lost per game ${per('resLost')}, members taken from rivals ${per('membersLost')}, members pushed onto rivals ${per('membersPushed')}, followers rivals lost ${per('followersLost')}, minions on a rival's taken space ${per('crashes')}
  turns that hurt a rival per game ${per('hitsOn')}; share of resource and member hits on the leader ${(100 * atLeader).toFixed(0)}%
  round II leader went on to win ${(100 * rs.filter(r => r.leaderIIWon).length / rs.length).toFixed(0)}%; winner's margin ${margin.toFixed(1)}; first to last ${spread.toFixed(1)}; top score ${avg(rs.map(r => Math.max(...r.followers))).toFixed(1)}
  winners with 5 or fewer members ${(100 * small).toFixed(0)}%; members a player holds 2+ copies of, per game ${multi.toFixed(1)}`);
}
