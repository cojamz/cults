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
const BASE = process.env.JUDGE_BASE || '/mnt/project-files/idea-pipeline/expert';
const BRANCH = 'claude/gifted-newton-3lcy3i';
const args = process.argv.slice(2);
const flag = (k, d) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
const sh = (cmd, a, o = {}) => execFileSync(cmd, a, { encoding: 'utf8', ...o });
const readJson = p => JSON.parse(fs.readFileSync(p, 'utf8'));

function games() {
  if (!fs.existsSync(BASE)) return [];
  return fs.readdirSync(BASE).map(d => path.join(BASE, d)).filter(d => fs.existsSync(path.join(d, 'meta.json')));
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
  const lines = [];
  for (let i = 0; i < n; i++) {
    const seed = seed0 + i, players = i % 3 === 2 ? 3 : 4;
    // up to players-1 candidate colors (rotating, so every candidate color gets games), the rest live-only colors
    const k = Math.min(cand.length, players - (others.length ? 1 : 0));
    const colors = Array.from({ length: k }, (_, j) => cand[(i * k + j) % cand.length]);
    for (let j = 0; colors.length < players; j++) {
      const pool = others.length ? others : live.filter(q => !colors.includes(q));
      const q = pool[(seed * 7 + j * 3) % pool.length];
      if (!colors.includes(q)) colors.push(q);
    }
    const dir = path.join(BASE, `${label}-${seed}`);
    if (fs.existsSync(path.join(dir, 'meta.json'))) { console.log(`${dir}: exists, skipped`); continue; }
    const names = ['Ava', 'Ben', 'Cal', 'Dee'].slice(0, players).join(',');
    sh('node', ['scripts/v4-expert.mjs', 'new', dir, '--colors', colors.join(','), '--names', names, '--pool', tags, '--seed', String(seed)], { cwd: wt, env: { ...process.env, DECK: '10' } });
    sh('node', ['scripts/v4-expert.mjs', 'brief', dir, '--feel', '--set', String(i % 3)], { cwd: wt });
    const rec = readJson(path.join(dir, 'meta.json')).pool.record;
    console.log(`${dir}: ${players}p ${colors.join(', ')} | members ${rec.members.join(', ') || '-'} | spaces ${rec.spaces.map(s => s.in).join(', ') || '-'}`);
    for (const nm of names.split(',')) lines.push(path.join(dir, `brief-${nm}.md`));
  }
  console.log(`\nworktree ${wt} (${sha.slice(0, 12)}). Launch one agent per brief:`);
  for (const l of lines) console.log(l);
}

function status() {
  const stale = Number(flag('stale', 20)) * 60e3;
  for (const dir of games()) {
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
    const inter = parts.find(p => /interact/i.test(p));
    const nums = parts.slice(1).filter(p => /^\D{0,30}\d\b/.test(p) && !/interact/i.test(p));
    out.push({ name, s: num(nums[0]), f: num(nums[1]), fit: fitPart ? fitPart.toLowerCase().match(/yes|no|unsure/)[0] : '?',
      i: inter ? num(inter) : null, why: parts.slice(-1)[0].slice(0, 220) });
  }
  return out;
}
const mean = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : null;
const sd = a => { const m = mean(a); return a.length > 1 ? Math.sqrt(mean(a.map(x => (x - m) ** 2))) : 0; };
const f1 = x => x == null ? '-' : x.toFixed(1);

function report() {
  const rows = {}, cands = new Set(), gamesUsed = [];
  for (const dir of games()) {
    const meta = readJson(path.join(dir, 'meta.json'));
    if (!meta.pool || !Object.keys(meta.post || {}).length) continue;
    gamesUsed.push(path.basename(dir));
    const rec = meta.pool.record;
    const mine = new Set([...rec.members, ...rec.spaces.map(s => s.in.split(': ')[1])]);
    mine.forEach(c => cands.add(c));
    for (const [seat, t] of Object.entries(meta.post)) {
      for (const r of feelLines(t)) (rows[r.name] ??= []).push({ ...r, g: path.basename(dir), who: meta.names[seat], cand: mine.has(r.name) });
    }
  }
  const liveR = Object.entries(rows).filter(([k]) => !cands.has(k)).flatMap(([, r]) => r);
  const base = { s: mean(liveR.map(r => r.s).filter(x => x != null)), f: mean(liveR.map(r => r.f).filter(x => x != null)), i: mean(liveR.map(r => r.i).filter(x => x != null)) };
  const out = { games: gamesUsed, live: base, cards: [] };
  for (const name of [...cands].sort()) {
    const r = rows[name] || [];
    const S = r.map(x => x.s).filter(x => x != null), F = r.map(x => x.f).filter(x => x != null), I = r.map(x => x.i).filter(x => x != null);
    const split = r.length >= 3 && (sd(F) >= 1.2 || sd(S) >= 1.2 || Math.max(...F) - Math.min(...F) >= 3);
    out.cards.push({ name, n: r.length, games: [...new Set(r.map(x => x.g))].length, strategic: mean(S), fun: mean(F), interacts: mean(I),
      fits: { yes: r.filter(x => x.fit === 'yes').length, no: r.filter(x => x.fit === 'no').length, unsure: r.filter(x => x.fit === 'unsure').length },
      sdFun: sd(F), sdStrategic: sd(S), split, clauses: r.map(x => `${x.g} ${x.who} (${x.s}/${x.f}${x.i != null ? '/' + x.i : ''}, ${x.fit}): ${x.why}`) });
  }
  const L = ['# Judge games: candidate cards beside the live cards in the same games', '',
    `Games with postgames: ${gamesUsed.join(', ') || 'none yet'}.`,
    `Live cards in these games average strategic ${f1(base.s)}, fun ${f1(base.f)}, interacts ${f1(base.i)} (1 to 5).`, '',
    'card | ratings (games) | strategic | fun | interacts | fits y/n/? | judges split?'];
  for (const c of out.cards) L.push(`${c.name} | ${c.n} (${c.games}) | ${f1(c.strategic)} | ${f1(c.fun)} | ${f1(c.interacts)} | ${c.fits.yes}/${c.fits.no}/${c.fits.unsure} | ${c.split ? 'SPLIT' : c.n < 3 ? 'too few' : 'agree'}`);
  L.push('');
  for (const c of out.cards) { L.push(`## ${c.name}`); for (const x of c.clauses) L.push(`- ${x}`); if (!c.clauses.length) L.push('- not rated by anyone (dealt but never weighed)'); L.push(''); }
  const dir = flag('out', BASE);
  fs.writeFileSync(path.join(dir, 'judges.md'), L.join('\n'));
  fs.writeFileSync(path.join(dir, 'judges.json'), JSON.stringify(out, null, 1));
  console.log(L.slice(0, 6 + out.cards.length).join('\n'));
}

const cmd = args[0];
if (cmd === 'plan') await plan();
else if (cmd === 'status') status();
else if (cmd === 'report') report();
else console.log(fs.readFileSync(fileURLToPath(import.meta.url), 'utf8').split('\n').slice(1, 15).join('\n'));
