#!/usr/bin/env node
// Judge games for the idea pipeline (scripts/ideas/README.md step 5b): AI players play full games with candidate cards
// dealt in beside the live ones, then rate every card they touched. Cory, Nov 7: "remember when we had judges playing
// to see how the cards felt?", "needs to be in context of the game not idea in a vacuum", "uplevel the robustness".
//
//   plan <pool tags> [--games 6] [--seed 2001] [--label p3]   pin a worktree at origin's branch head, start the games
//                                                             (3 and 4 players, varied colors, seeds and judge mixes),
//                                                             write briefs, print one line per seat to launch
//   status [--stale 20]                                       every judge game: round, whose turn, postgames, STALLED
//                                                             when no move for --stale minutes (relaunch that seat)
//   repeat <game dir> [--set k]                               the same deal again with fresh judges (consistency check)
//   publish                                                   copy local games' records to the shared folder (run every 20 min and at the end)
//   report [--out dir]                                        every candidate card: judges' ratings beside the live
//                                                             cards in the same games, spread, and where judges split
//
// Judges are blind: cards.md lists candidates like any other card and nothing in their view marks them new.
// Games run from a pinned worktree, so edits on the working branch never change rules mid-game.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
// Games live on the local disk of the box whose agents play them: the shared folder (rclone) handed back old files and
// even another game's files under load (Nov 7). `publish` copies each game's record to the shared folder for reports.
const SHARED = '/mnt/project-files/idea-pipeline/expert';
const BASE = process.env.JUDGE_BASE || '/home/user/judge-games';
const BRANCH = 'claude/gifted-newton-3lcy3i';
const args = process.argv.slice(2);
const flag = (k, d) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
const sh = (cmd, a, o = {}) => execFileSync(cmd, a, { encoding: 'utf8', ...o });
// the shared folder can show a file half written for a moment: retry, then give up on that file for this run
const readJson = p => {
  for (let i = 0; ; i++) {
    try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch (e) {
      if (i >= 20) throw e;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 150);
    }
  }
};

function games(where = [BASE]) {
  const out = [];
  for (const b of where) if (fs.existsSync(b)) for (const d of fs.readdirSync(b)) if (fs.existsSync(path.join(b, d, 'meta.json'))) out.push(path.join(b, d));
  return out;
}
// publish: copy every local game's meta.json, events.jsonl, cards.md and heal.log to the shared folder (finished or not)
function publish() {
  for (const dir of games()) {
    const to = path.join(SHARED, path.basename(dir));
    fs.mkdirSync(to, { recursive: true });
    for (const n of ['meta.json', 'events.jsonl', 'cards.md', 'heal.log']) if (fs.existsSync(path.join(dir, n))) fs.copyFileSync(path.join(dir, n), path.join(to, n));
    console.log(`published ${path.basename(dir)}`);
  }
}

async function plan() {
  const tags = args[1];
  if (!tags) throw new Error('plan <pool tags>');
  const n = Number(flag('games', 6)), seed0 = Number(flag('seed', 2001)), label = flag('label', tags.replace(/,/g, '+'));
  sh('git', ['-C', ROOT, 'fetch', '-q', 'origin', BRANCH]);
  const sha = sh('git', ['-C', ROOT, 'rev-parse', `origin/${BRANCH}`]).trim();
  const wt = `/home/user/judge-wt/${sha.slice(0, 12)}`;
  if (!fs.existsSync(wt)) {
    fs.mkdirSync('/home/user/judge-wt', { recursive: true });
    sh('git', ['-C', ROOT, 'worktree', 'add', '--detach', wt, sha]);
    fs.symlinkSync(path.join(ROOT, 'node_modules'), path.join(wt, 'node_modules'));
  }
  // which colors carry candidates with these tags
  process.env.POOL = tags;
  const idx = await import(path.join(wt, 'src/engine/v4/index.js'));
  const { POOL_SPACES } = await import(path.join(wt, 'src/engine/v4/content/pool.js'));
  const { sphereVersion } = await import(path.join(wt, 'src/v4/tables.js'));
  const live = idx.allQuadrantIds().filter(q => sphereVersion(q) === '2.0');
  const want = new Set(tags.split(','));
  const hit = d => want.has(d.pool) || want.has(d.key) || want.has(d.id);
  const cand = live.filter(q => idx.quadrant(q).members.some(d => d.pool && hit(d)) || (POOL_SPACES[q] || []).some(hit));
  if (!cand.length) throw new Error(`no candidates tagged ${tags}`);
  const others = live.filter(q => !cand.includes(q));
  // Coverage: every candidate should reach --each judge games (default 3). For each game, try many seeds and color
  // sets and keep the one that deals the least-covered candidates (the rotation is seeded, so this is exact).
  const { rotateIn } = await import(path.join(wt, 'scripts/lib/pool-rotate.mjs'));
  const each = Number(flag('each', 3)), cov = {};
  const lines = [];
  const pickTable = (i, players) => {
    let best = null;
    for (let t = 0; t < 60; t++) {
      const seed = seed0 + i * 100 + t;
      const k = Math.min(cand.length, players - (others.length ? 1 : 0));
      const off = (t * 7 + i) % cand.length;
      const colors = Array.from({ length: k }, (_, j) => cand[(off + j) % cand.length]);
      for (let j = 0; colors.length < players; j++) {
        const pool = others.length ? others : live.filter(q => !colors.includes(q));
        const q = pool[(seed * 7 + j * 3) % pool.length];
        if (!colors.includes(q)) colors.push(q);
      }
      const r = rotateIn(seed, colors, 10); const rec = r.record; r.restore();
      const names = [...rec.members, ...rec.spaces.map(x => x.in.split(': ')[1])];
      const gain = names.reduce((a, nm) => a + Math.max(0, each - (cov[nm] || 0)) * 10 + 1, 0);
      if (!best || gain > best.gain) best = { seed, colors, names, gain };
    }
    best.names.forEach(nm => { cov[nm] = (cov[nm] || 0) + 1; });
    return best;
  };
  for (let i = 0; i < n; i++) {
    const players = i % 3 === 2 ? 3 : 4;
    const { seed, colors } = pickTable(i, players);
    const dir = path.join(BASE, `${label}-${seed}`);
    if (fs.existsSync(path.join(dir, 'meta.json'))) { console.log(`${dir}: exists, skipped`); continue; }
    const names = ['Ava', 'Ben', 'Cal', 'Dee'].slice(0, players).join(',');
    sh('node', ['scripts/v4-expert.mjs', 'new', dir, '--colors', colors.join(','), '--names', names, '--pool', tags, '--seed', String(seed)], { cwd: wt, env: { ...process.env, DECK: '10' } });
    sh('node', ['scripts/v4-expert.mjs', 'brief', dir, '--feel', '--set', String(i % 3)], { cwd: wt });
    const rec = readJson(path.join(dir, 'meta.json')).pool.record;
    console.log(`${dir}: ${players}p ${colors.join(', ')} | members ${rec.members.join(', ') || '-'} | spaces ${rec.spaces.map(s => s.in).join(', ') || '-'}`);
    for (const nm of names.split(',')) lines.push(path.join(dir, `brief-${nm}.md`));
  }
  console.log(`\ncoverage: ${Object.entries(cov).map(([k, v]) => `${k} ${v}`).join(', ')}`);
  console.log(`\nworktree ${wt} (${sha.slice(0, 12)}). Launch one agent per brief:`);
  for (const l of lines) console.log(l);
}

function status() {
  const stale = Number(flag('stale', 20)) * 60e3;
  for (const dir of games(args.includes('--shared') ? [SHARED] : [BASE])) {
    const meta = readJson(path.join(dir, 'meta.json'));
    let s; try { s = readJson(path.join(dir, 'state.json')); } catch { console.log(`${dir}: state unreadable`); continue; }
    const ev = fs.readFileSync(path.join(dir, 'events.jsonl'), 'utf8').trim().split('\n').filter(Boolean);
    const last = ev.length ? JSON.parse(ev[ev.length - 1]).t : null;
    const age = last ? Date.now() - new Date(last).getTime() : Infinity;
    const posts = Object.keys(meta.post || {}).length, seats = meta.names.length;
    const done = s.over && posts >= seats;
    const who = s.over ? `game over, postgames ${posts}/${seats} (missing: ${meta.names.filter((_, i) => !(meta.post || {})[i]).join(', ') || '-'})`
      : `round ${s.round}, move ${s.moves}, waiting on ${s.pending ? s.players[s.pending.player].name : '-'}`;
    const flagTxt = done ? 'DONE' : age > stale ? `STALLED ${Math.round(age / 60e3)} min` : 'playing';
    console.log(`${path.basename(dir)}: ${flagTxt}; ${who}`);
  }
}

// FEEL: <Name> | strategic N | fun N | fits yes/no/unsure | interacts N | why
function feelLines(text) {
  const out = [];
  for (const m of text.matchAll(/FEEL:\s*([^\n]*?)(?=\s*FEEL:|\s*META:|\n|$)/gi)) {
    const parts = m[1].split('|').map(x => x.trim());
    if (parts.length < 4) continue;
    const num = t => { const x = (t || '').match(/\d/); return x ? +x[0] : null; };
    const name = parts[0].replace(/\s*\(.*\)$/, '');
    const fitPart = parts.find((p, i) => i > 0 && /\b(yes|no|unsure)\b/i.test(p) && !/\d/.test(p.replace(/fits/i, '')));
    const inter = parts.find(p => /interact/i.test(p)), clear = parts.find(p => /^clear/i.test(p));
    const nums = parts.slice(1).filter(p => /^\D{0,30}\d\b/.test(p) && !/interact|^clear/i.test(p));
    out.push({ name, s: num(nums[0]), f: num(nums[1]), fit: fitPart ? fitPart.toLowerCase().match(/yes|no|unsure/)[0] : '?',
      i: inter ? num(inter) : null, c: clear ? num(clear) : null, why: parts.slice(-1)[0].slice(0, 220) });
  }
  return out;
}
const mean = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : null;
const sd = a => { const m = mean(a); return a.length > 1 ? Math.sqrt(mean(a.map(x => (x - m) ** 2))) : 0; };
const f1 = x => x == null ? '-' : x.toFixed(1);

// Calibration: live cards Cory has said he likes or dislikes (design/eval/card-judging/taste-guide.md). Judges who rate
// the liked ones above the disliked ones are reading the game the way he does; the report says how often they do.
const CORY_LIKES = ['Build Up', 'Courier', 'Grifter', 'Loyalists', 'Patron Saints', 'Promote', 'Demote', 'Sweet Nothings', 'Trade Seeds', 'Party Favors', 'High Tide', 'Rising Tide', 'Top Up'];
const CORY_DISLIKES = ['Encore', 'Open Door', 'Potluck', 'Rush Hour', 'Crunch Time'];
const score = x => x.f == null ? null : (x.f + (x.s ?? x.f)) / 2;

function report() {
  const rows = {}, cands = new Set(), gamesUsed = [], judges = {};
  const seen = new Set();
  for (const dir of games([BASE, SHARED])) {
    if (seen.has(path.basename(dir))) continue;
    seen.add(path.basename(dir));
    const meta = readJson(path.join(dir, 'meta.json'));
    // postgames also live in events.jsonl (the shared folder can hand back an old meta.json)
    meta.post = { ...(meta.post || {}) };
    for (const l of fs.readFileSync(path.join(dir, 'events.jsonl'), 'utf8').split('\n')) {
      if (!l.includes('"postgame"')) continue;
      try { const e = JSON.parse(l); if (e.type === 'postgame' && !meta.post[e.seat]) meta.post[e.seat] = e.text; } catch { /* partial line */ }
    }
    if (!meta.pool || !Object.keys(meta.post).length) continue;
    const g = path.basename(dir);
    gamesUsed.push(g);
    const rec = meta.pool.record;
    const mine = new Set([...rec.members, ...rec.spaces.map(s => s.in.split(': ')[1])]);
    mine.forEach(c => cands.add(c));
    for (const [seat, t] of Object.entries(meta.post)) {
      const who = `${g}/${meta.names[seat]}`;
      for (const r of feelLines(t)) {
        (rows[r.name] ??= []).push({ ...r, g, rep: meta.repeatOf || null, who: meta.names[seat], cand: mine.has(r.name) });
        (judges[who] ??= []).push(r);
      }
    }
  }
  // calibration per judge: mean of liked live cards above mean of disliked ones?
  const cal = Object.entries(judges).map(([who, rs]) => {
    const like = rs.filter(r => CORY_LIKES.includes(r.name)).map(score).filter(x => x != null);
    const dis = rs.filter(r => CORY_DISLIKES.includes(r.name)).map(score).filter(x => x != null);
    return { who, like: mean(like), dis: mean(dis), agrees: like.length && dis.length ? mean(like) > mean(dis) : null };
  });
  const calN = cal.filter(c => c.agrees != null), calOk = calN.filter(c => c.agrees).length;
  const liveR = Object.entries(rows).filter(([k]) => !cands.has(k)).flatMap(([, r]) => r);
  const avgOf = (rs, k) => mean(rs.map(r => r[k]).filter(x => x != null));
  const base = { s: avgOf(liveR, 's'), f: avgOf(liveR, 'f'), i: avgOf(liveR, 'i'), c: avgOf(liveR, 'c'),
    likes: avgOf(liveR.filter(r => CORY_LIKES.includes(r.name)), 'f'), dislikes: avgOf(liveR.filter(r => CORY_DISLIKES.includes(r.name)), 'f') };
  const out = { games: gamesUsed, live: base, calibration: { judges: calN.length, agree: calOk, rows: cal }, cards: [] };
  for (const name of [...cands].sort()) {
    const r = rows[name] || [];
    const S = r.map(x => x.s).filter(x => x != null), F = r.map(x => x.f).filter(x => x != null);
    const split = r.length >= 3 && (sd(F) >= 1.2 || sd(S) >= 1.2 || Math.max(...F) - Math.min(...F) >= 3);
    // repeat games (same deal, fresh judges): does the card's fun hold up between the original and the repeat?
    const reps = r.filter(x => x.rep), orig = r.filter(x => !x.rep && reps.some(y => y.rep === x.g));
    const repeatGap = reps.length && orig.length ? Math.abs(avgOf(reps, 'f') - avgOf(orig, 'f')) : null;
    out.cards.push({ name, n: r.length, games: [...new Set(r.map(x => x.g))].length, strategic: mean(S), fun: mean(F), interacts: avgOf(r, 'i'), clear: avgOf(r, 'c'),
      fits: { yes: r.filter(x => x.fit === 'yes').length, no: r.filter(x => x.fit === 'no').length, unsure: r.filter(x => x.fit === 'unsure').length },
      sdFun: sd(F), sdStrategic: sd(S), split, repeatGap,
      clauses: r.map(x => `${x.g} ${x.who} (strategic ${x.s}, fun ${x.f}${x.i != null ? ', interacts ' + x.i : ''}${x.c != null ? ', clear ' + x.c : ''}, fits ${x.fit}): ${x.why}`) });
  }
  const L = ['# Judge games: candidate cards beside the live cards in the same games', '',
    `Games with postgames: ${gamesUsed.join(', ') || 'none yet'}.`,
    `Live cards in these games: strategic ${f1(base.s)}, fun ${f1(base.f)}, interacts ${f1(base.i)}, clear ${f1(base.c)} (1 to 5). Cards Cory likes average fun ${f1(base.likes)}; cards he dislikes ${f1(base.dislikes)}.`,
    `Calibration: ${calOk} of ${calN.length} judges who rated both rated Cory's liked live cards above his disliked ones.`, '',
    'card | ratings (games) | strategic | fun | interacts | clear | fits y/n/? | agreement'];
  for (const c of out.cards) L.push(`${c.name} | ${c.n} (${c.games}) | ${f1(c.strategic)} | ${f1(c.fun)} | ${f1(c.interacts)} | ${f1(c.clear)} | ${c.fits.yes}/${c.fits.no}/${c.fits.unsure} | ${c.split ? 'SPLIT: tiebreak' : c.n < 3 ? 'too few' : 'agree'}${c.repeatGap != null ? `; repeat gap ${f1(c.repeatGap)}` : ''}`);
  L.push('');
  for (const c of out.cards) { L.push(`## ${c.name}`); for (const x of c.clauses) L.push(`- ${x}`); if (!c.clauses.length) L.push('- not rated by anyone (dealt but never weighed)'); L.push(''); }
  L.push('## Calibration by judge', '', ...cal.map(c => `- ${c.who}: liked ${f1(c.like)}, disliked ${f1(c.dis)}${c.agrees == null ? '' : c.agrees ? ', agrees' : ', DISAGREES'}`));
  const dir = flag('out', SHARED);
  fs.writeFileSync(path.join(dir, 'judges.md'), L.join('\n'));
  fs.writeFileSync(path.join(dir, 'judges.json'), JSON.stringify(out, null, 1));
  console.log(L.slice(0, 7 + out.cards.length).join('\n'));
}

// repeat <game dir>: the same deal (seed, colors, players, candidates) with fresh judges, to catch judges who don't
// repeat themselves. The repeat's meta.json carries repeatOf so the report compares the two.
async function repeat() {
  const src = path.resolve(args[1]);
  const meta = readJson(path.join(src, 'meta.json'));
  const wt = fs.readdirSync('/home/user/judge-wt').map(d => `/home/user/judge-wt/${d}`).sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs)[0];
  const dir = `${src}-r`;
  sh('node', ['scripts/v4-expert.mjs', 'new', dir, '--colors', meta.colors.join(','), '--names', meta.names.join(','), '--pool', meta.pool.keys, '--seed', String(meta.seed)], { cwd: wt, env: { ...process.env, DECK: '10' } });
  const m2 = readJson(path.join(dir, 'meta.json')); m2.repeatOf = path.basename(src);
  fs.writeFileSync(path.join(dir, 'meta.json'), JSON.stringify(m2));
  sh('node', ['scripts/v4-expert.mjs', 'brief', dir, '--feel', '--set', String((Number(flag('set', 0)) + 1) % 3)], { cwd: wt });
  console.log(`${dir}: repeat of ${path.basename(src)} from ${wt}; briefs:`);
  for (const n of meta.names) console.log(path.join(dir, `brief-${n}.md`));
}

const cmd = args[0];
if (cmd === 'plan') await plan();
else if (cmd === 'status') status();
else if (cmd === 'report') report();
else if (cmd === 'repeat') await repeat();
else if (cmd === 'publish') publish();
else console.log(fs.readFileSync(fileURLToPath(import.meta.url), 'utf8').split('\n').slice(1, 15).join('\n'));
