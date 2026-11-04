#!/usr/bin/env node
// Card trials: test new or re-priced cards in bot games against the same games without them, from any number of
// threads at once, and report each card plus the winning patterns. Plain write-up: scripts/trial/README.md.
//
//   node scripts/trial/trial.mjs new <name> --env='{"REPLACE4":"1"}' [--games=120] [--level=hard] [--seats=4]
//        [--base-env='{...}'] [--pairs="Defectors=Proselytizers,..."] [--note="..."] [--allow-unpushed]
//   node scripts/trial/trial.mjs work <name> [--jobs=4]        any thread, any box, as many as you like
//   node scripts/trial/trial.mjs status [<name>]
//   node scripts/trial/trial.mjs report <name> [--md=<file>]
//
// What it fixes over replacements/runs/shard.sh (Nov 3):
// - Defaults: 10-card deck, By color contests, bots that see what cards do (BOTSEE=1). A trial's env can override them.
// - The base (same games without the change) is part of the trial and shared: two trials with the same base settings
//   on the same rules code play it once.
// - No hand-assigned ranges: workers claim 5-game blocks themselves; a claim nobody has touched for 10 minutes is free
//   again. Blocks are keyed by game number and a game number always plays the same game, so a rare double claim
//   (two boxes) only wastes time; the report reads each game once.
// - Restart-safe: a block is played into a fresh local file, checked for 5 games, then renamed into place in one step.
//   Nothing is ever appended in the shared folder, so a restart can't leave duplicates or half blocks.
// - Pinned: every game is played from the trial's own commit in a separate checkout (.trial-wt/<sha>), so a thread's
//   edits or a branch moving on never mix two rule sets in one trial.
import { spawn, execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync, statSync, openSync, closeSync, writeSync,
  unlinkSync, renameSync, copyFileSync, utimesSync, symlinkSync, rmSync } from 'node:fs';
import { hostname } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const ROOT = process.env.TRIALS_DIR || '/mnt/project-files/trials';
const BLOCK = 5, STALE_MS = 10 * 60e3, BEAT_MS = 60e3;
const DEFAULTS = { DECK: '10', CONTESTS: 'byColor', BOTSEE: '1' };
// the files the games depend on: a trial's arms are keyed by these, so a commit that changes only the screen reuses them
const RULES_PATHS = ['src/engine', 'src/v4/tables.js', 'scripts/v4-balance.mjs', 'scripts/lib', 'scripts/trial/cards.mjs'];
// every env setting v4-balance.mjs or the rules read; the worker clears these from its own shell before a block
const GAME_KEYS = /^(REPLACE\d*|PRICE|BOTSEE|DECK|CONTESTS|CONTESTFIX|LEVEL|SEATS|ONLY|MUST|SWAP|SWAPCOST|BUDGET|BOTOPTS|STRONGSEAT|GAMES|CHOICES|LOGS|COLORSHIFT|MOB|PT_GIVE|CATERER|CHANGER|IMPRESSIONIST|NIGHTOWL|THINKER_DUMP)$/;
// table and bot settings both sides share; every other key (REPLACE*, PRICE, NIGHTOWL, MOB, ...) is the change under
// test, and the base drops it
const SHARED = new Set(['DECK', 'CONTESTS', 'CONTESTFIX', 'BOTSEE', 'LEVEL', 'SEATS', 'ONLY', 'MUST', 'SWAP', 'SWAPCOST', 'BUDGET', 'BOTOPTS', 'COLORSHIFT']);
const isChange = k => !SHARED.has(k);

const [cmd, ...rest] = process.argv.slice(2);
const pos = rest.filter(a => !a.startsWith('--'));
const flags = Object.fromEntries(rest.filter(a => a.startsWith('--')).map(a => { const [k, ...v] = a.slice(2).split('='); return [k, v.length ? v.join('=') : true]; }));

const git = (...a) => execFileSync('git', a, { cwd: REPO, encoding: 'utf8' }).trim();
const hash = x => createHash('sha1').update(typeof x === 'string' ? x : JSON.stringify(x)).digest('hex').slice(0, 10);
const sortObj = o => Object.fromEntries(Object.entries(o).sort(([a], [b]) => a.localeCompare(b)));
const readJson = f => JSON.parse(readFileSync(f, 'utf8'));
const trialDir = n => join(ROOT, 'trials', n);
const armDir = id => join(ROOT, 'arms', id);
const die = m => { console.error(m); process.exit(1); };
const mins = ms => `${Math.round(ms / 60e3)} min`;

function rulesPrint(sha) {
  return hash(RULES_PATHS.map(p => { try { return git('rev-parse', `${sha}:${p}`); } catch { return '-'; } }).join(' '));
}

/** A clean checkout of sha that games are played from (shared by every trial on that commit). */
function checkout(sha) {
  const wt = join(REPO, '.trial-wt', sha.slice(0, 12));
  if (!existsSync(join(wt, 'scripts/v4-balance.mjs'))) {
    rmSync(wt, { recursive: true, force: true });
    try { git('cat-file', '-e', `${sha}^{commit}`); } catch { git('fetch', 'origin', sha); }
    try { git('worktree', 'prune'); } catch {}
    git('worktree', 'add', '-q', '--detach', wt, sha);
  }
  if (!existsSync(join(wt, 'node_modules')) && existsSync(join(REPO, 'node_modules'))) symlinkSync(join(REPO, 'node_modules'), join(wt, 'node_modules'));
  return wt;
}

function cardsUnder(wt, env) {
  return JSON.parse(execFileSync('node', ['scripts/trial/cards.mjs'], { cwd: wt, encoding: 'utf8', env: { ...process.env, ...env } }));
}

/** new card -> old card, from the "old.id -> new.id" lines atop content/replace*.js, then same color, then --pairs. */
function pairCards(wt, added, retired, extra) {
  const text = readdirSync(join(wt, 'src/engine/v4/content')).filter(f => /^replace\d+\.js$/.test(f))
    .map(f => readFileSync(join(wt, 'src/engine/v4/content', f), 'utf8').split('\n').filter(l => l.startsWith('//')).map(l => l.slice(2)).join(' ')).join(' ');
  const arrows = [...text.matchAll(/([a-z]+\.[a-z]+)(?:\s*\([^)]*\))?\s*->\s*([a-z]+\.[a-z]+)/g)].map(m => [m[2], m[1]]);
  const pairs = [], used = new Set();
  for (const n of added) {
    let o = retired.find(r => !used.has(r.id) && arrows.some(([a, b]) => a === n.id && b === r.id));
    if (!o) { const same = retired.filter(r => !used.has(r.id) && r.color === n.color); if (same.length === 1) o = same[0]; }
    if (o) used.add(o.id);
    pairs.push([n.name, o ? o.name : null]);
  }
  for (const r of retired) if (!used.has(r.id)) pairs.push([null, r.name]);
  for (const p of (extra || '').split(',').filter(Boolean)) {
    const [a, b] = p.split('=');
    const i = pairs.findIndex(x => x[0] === a);
    if (i >= 0) pairs[i][1] = b; else pairs.push([a, b]);
  }
  return pairs;
}

// ---------- new ----------
function cmdNew() {
  const name = pos[0];
  if (!name || !/^[a-z0-9][a-z0-9-]*$/.test(name)) die('Name the trial in lower-case words joined by dashes: trial.mjs new <name> --env=...');
  if (existsSync(join(trialDir(name), 'spec.json'))) die(`Trial ${name} exists: ${trialDir(name)}/spec.json. Pick another name, or run work/report on it.`);
  const change = flags.env ? JSON.parse(flags.env) : {};
  if (!Object.keys(change).length) die('Say what the trial changes: --env=\'{"REPLACE4":"1"}\' (and/or PRICE).');
  const sha = flags.sha || git('rev-parse', 'HEAD');
  if (!flags['allow-unpushed']) {
    try { git('fetch', '-q', 'origin'); } catch {}
    const pushed = git('branch', '-r', '--contains', sha);
    if (!pushed) die(`Commit ${sha.slice(0, 8)} isn't pushed, so other boxes can't play it. Push first (or --allow-unpushed for this box only).`);
  }
  const level = flags.level || 'hard', seats = Number(flags.seats || 4), games = Number(flags.games || 120);
  const env = sortObj({ ...DEFAULTS, ...change, LEVEL: level, SEATS: String(seats) });
  const baseEnv = sortObj(flags['base-env'] ? { ...DEFAULTS, LEVEL: level, SEATS: String(seats), ...JSON.parse(flags['base-env']) }
    : Object.fromEntries(Object.entries(env).filter(([k]) => !isChange(k))));
  const rules = rulesPrint(sha);
  const wt = checkout(sha);
  const a = cardsUnder(wt, env), b = cardsUnder(wt, baseEnv);
  const ids = l => new Set(l.map(x => x.id));
  const added = a.filter(x => !ids(b).has(x.id)), retired = b.filter(x => !ids(a).has(x.id));
  const pairs = pairCards(wt, added, retired, flags.pairs);
  for (const p of (env.PRICE || '').split(',').filter(Boolean)) {
    const k = p.split('=')[0], d = a.find(x => x.id === k || x.id.endsWith(`.${k}`) || x.name.toLowerCase() === k.toLowerCase());
    if (d && !pairs.some(x => x[0] === d.name)) pairs.push([d.name, d.name, `price ${p.split('=')[1]}`]);
  }
  const arm = e => { const id = `${e.LEVEL}-${hash({ rules, e })}`; return id; };
  const spec = { name, created: new Date().toISOString(), by: hostname(), sha, rules, games, block: BLOCK, level, seats, env, baseEnv,
    arms: { trial: arm(env), base: arm(baseEnv) }, pairs, note: flags.note || '' };
  if (spec.arms.trial === spec.arms.base) die('The trial and its base are the same settings: nothing would be compared.');
  for (const [k, id] of Object.entries(spec.arms)) {
    mkdirSync(join(armDir(id), 'games'), { recursive: true }); mkdirSync(join(armDir(id), 'claims'), { recursive: true });
    const f = join(armDir(id), 'arm.json');
    if (!existsSync(f)) writeFileSync(f, JSON.stringify({ id, sha, rules, env: k === 'trial' ? env : baseEnv }, null, 1));
  }
  mkdirSync(trialDir(name), { recursive: true });
  writeFileSync(join(trialDir(name), 'spec.json'), JSON.stringify(spec, null, 1));
  console.log(`Trial ${name}: ${games} ${level} games a side on ${sha.slice(0, 8)}, ${seats} players.`);
  console.log(`  Change: ${JSON.stringify(change)}. Base shares arm ${spec.arms.base}${blocksDone(spec.arms.base, games) ? ` (${blocksDone(spec.arms.base, games) * BLOCK} games already played)` : ''}.`);
  console.log(`  Cards: ${pairs.map(([n, o, why]) => `${n || '(none)'} for ${o || '(nothing)'}${why ? ` (${why})` : ''}`).join('; ')}`);
  // the work desk's queue (/mnt/project-files/queue): a job there lets any idle runner pick the trial up
  const jobs = process.env.QUEUE_DIR || '/mnt/project-files/queue/jobs';
  if (!flags['no-queue'] && !process.env.TRIALS_DIR && existsSync(jobs)) {
    writeFileSync(join(jobs, `trial-${name}.json`), JSON.stringify({ kind: 'trial', name, by: hostname(), at: spec.created }));
    console.log(`Queued for the runners: ${jobs}/trial-${name}.json`);
  }
  console.log(`Play it from any thread: node scripts/trial/trial.mjs work ${name}`);
}

// ---------- blocks ----------
const blockStarts = games => Array.from({ length: Math.ceil(games / BLOCK) }, (_, i) => 1 + i * BLOCK);
const lines = f => { try { return readFileSync(f, 'utf8').split('\n').filter(Boolean).length; } catch { return 0; } };
const isDone = (id, s) => lines(join(armDir(id), 'games', `${s}.jsonl`)) >= BLOCK;
const blocksDone = (id, games) => blockStarts(games).filter(s => isDone(id, s)).length;

function claimState(id, s) {
  const f = join(armDir(id), 'claims', String(s));
  let st;
  try { st = statSync(f); } catch { return 'free'; }
  if (Date.now() - st.mtimeMs >= STALE_MS) return 'stale';
  // a claim from this box whose worker is gone (killed, or the box restarted with the same name) is free at once
  try { const c = JSON.parse(readFileSync(f, 'utf8')); if (c.host === hostname() && c.pid !== process.pid && !alive(c.pid)) return 'stale'; } catch {}
  return 'live';
}
const alive = pid => { try { process.kill(pid, 0); return true; } catch (e) { return e.code === 'EPERM'; } };

/** Claim a block: create its claim file exclusively. A stale claim (no heartbeat for 10 min) is taken over. */
function claim(id, s, me) {
  const f = join(armDir(id), 'claims', String(s));
  for (let tries = 0; tries < 2; tries++) {
    try { const fd = openSync(f, 'wx'); writeSync(fd, JSON.stringify(me)); closeSync(fd); return f; }
    catch (e) {
      if (e.code !== 'EEXIST') throw e;
      if (claimState(id, s) !== 'stale') return null;
      try { unlinkSync(f); } catch {}
    }
  }
  return null;
}

// ---------- work ----------
async function cmdWork() {
  const spec = loadSpec(pos[0]);
  const jobs = Number(flags.jobs || 4);
  const wt = checkout(spec.sha);
  if (rulesPrint(spec.sha) !== spec.rules) die('This commit plays different rules than the trial was made with. Stopping.');
  const me = { host: hostname(), pid: process.pid, at: new Date().toISOString() };
  const local = join(REPO, '.trial-runs');
  // interleave the two sides so a half-played trial is still a fair game-for-game comparison
  const queue = blockStarts(spec.games).flatMap(s => [['trial', s], ['base', s]]);
  const order = queue; // lowest games first, so a half-played trial is the first N games of both sides
  const mine = new Set(), times = [];
  let played = 0, failed = 0;
  const beat = setInterval(() => { const t = new Date(); for (const f of mine) try { utimesSync(f, t, t); } catch {} }, BEAT_MS);
  const release = () => { for (const f of mine) try { unlinkSync(f); } catch {} };
  process.on('SIGINT', () => { release(); process.exit(130); });
  process.on('SIGTERM', () => { release(); process.exit(143); });
  const next = () => {
    for (const [side, s] of order) {
      const id = spec.arms[side];
      if (isDone(id, s)) continue;
      const f = claim(id, s, me);
      if (f) return { side, id, s, f };
    }
    return null;
  };
  const play = ({ side, id, s, f }) => new Promise(done => {
    mine.add(f);
    const dir = join(local, id); mkdirSync(dir, { recursive: true });
    const part = join(dir, `${s}.part`);
    try { unlinkSync(part); } catch {}
    // only the arm's settings reach the games: a REPLACE or PRICE left in this shell's env must not leak into a side
    const env = Object.fromEntries(Object.entries(process.env).filter(([k]) => !GAME_KEYS.test(k)));
    Object.assign(env, readJson(join(armDir(id), 'arm.json')).env);
    const t0 = Date.now();
    const ch = spawn('node', ['scripts/v4-balance.mjs', String(s), String(BLOCK), part], { cwd: wt, env, stdio: ['ignore', 'ignore', 'pipe'] });
    let err = '';
    ch.stderr.on('data', d => { err = (err + d).slice(-2000); });
    ch.on('close', code => {
      const n = lines(part);
      if (code === 0 && n === BLOCK) {
        const out = join(armDir(id), 'games', `${s}.jsonl`), tmp = `${out}.${me.host}-${me.pid}.tmp`;
        copyFileSync(part, tmp); renameSync(tmp, out); unlinkSync(part);
        played++; times.push(Date.now() - t0);
        console.log(`${new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' })} ${side} games ${s}-${s + BLOCK - 1} done in ${mins(Date.now() - t0)}`);
      } else {
        failed++;
        console.log(`${side} games ${s}-${s + BLOCK - 1} FAILED (exit ${code}, ${n} games): ${err.split('\n').slice(-4).join(' | ')}`);
      }
      try { unlinkSync(f); } catch {}
      mine.delete(f); done();
    });
  });
  const lane = async () => { for (let b; (b = next()) && failed < 3;) await play(b); };
  await Promise.all(Array.from({ length: jobs }, lane));
  clearInterval(beat);
  const left = ['trial', 'base'].map(k => blockStarts(spec.games).length - blocksDone(spec.arms[k], spec.games));
  console.log(`Played ${played} blocks here${failed ? `, ${failed} failed` : ''}. Left: trial ${left[0]}, base ${left[1]} blocks${left[0] + left[1] ? ' (claimed by other workers, or failed)' : ''}.`);
  if (!left[0] && !left[1]) writeFileSync(join(trialDir(spec.name), 'complete'), new Date().toISOString());
  if (!left[0] && !left[1]) console.log(`TRIALDONE ${spec.name}: node scripts/trial/trial.mjs report ${spec.name}`);
  if (failed) process.exit(1);
}

function loadSpec(name) {
  if (!name) die('Which trial? node scripts/trial/trial.mjs status lists them.');
  const f = join(trialDir(name), 'spec.json');
  if (!existsSync(f)) die(`No trial ${name} in ${ROOT}/trials.`);
  return readJson(f);
}

// ---------- status ----------
function cmdStatus() {
  const names = pos[0] ? [pos[0]] : (existsSync(join(ROOT, 'trials')) ? readdirSync(join(ROOT, 'trials')) : []);
  if (flags.json) {
    const out = names.map(n => {
      const spec = loadSpec(n), total = blockStarts(spec.games).length;
      const side = k => { const st = blockStarts(spec.games).map(s => isDone(spec.arms[k], s) ? 'done' : claimState(spec.arms[k], s));
        return { blocks: total, done: st.filter(x => x === 'done').length, playing: st.filter(x => x === 'live').length, stale: st.filter(x => x === 'stale').length }; };
      const trial = side('trial'), base = side('base');
      return { name: n, sha: spec.sha, games: spec.games, level: spec.level, trial, base, done: trial.done === total && base.done === total };
    });
    console.log(JSON.stringify(pos[0] ? out[0] : out));
    return;
  }
  if (!names.length) console.log('No trials yet.');
  for (const n of names) {
    const spec = loadSpec(n), total = blockStarts(spec.games).length;
    const side = k => {
      const id = spec.arms[k], st = blockStarts(spec.games).map(s => isDone(id, s) ? 'done' : claimState(id, s));
      return `${k} ${st.filter(x => x === 'done').length}/${total} blocks done, ${st.filter(x => x === 'live').length} playing${st.includes('stale') ? `, ${st.filter(x => x === 'stale').length} stalled (free to take)` : ''}`;
    };
    console.log(`${n} (${spec.games} ${spec.level} games a side, ${spec.sha.slice(0, 8)}): ${side('trial')}; ${side('base')}`);
  }
}

// ---------- report ----------
function loadArm(id) {
  const rows = new Map();
  const dir = join(armDir(id), 'games');
  for (const f of existsSync(dir) ? readdirSync(dir).filter(x => /^\d+\.jsonl$/.test(x)) : [])
    for (const l of readFileSync(join(dir, f), 'utf8').split('\n')) {
      if (!l.trim()) continue;
      const r = JSON.parse(l);
      if (!r.stuck && !rows.has(r.game)) rows.set(r.game, r);
    }
  return rows;
}

const pct = x => `${Math.round(100 * x)}%`;
const owns = (p, n) => Object.keys(p.gotRound || {}).some(k => k.startsWith(`${n} (`));
const seatsOf = r => r.players.filter(p => p.seat !== r.buyer);

function cardLine(rows, n) {
  // taken: games where some cult recruited it, per game it showed up; owners: every cult that held it (a card can
  // change hands, so one game can have two owners)
  let shown = 0, takenIn = 0, own = 0, win = 0, even = 0;
  for (const r of rows) {
    if (!r.shop.some(x => x.startsWith(`${n} (`))) continue;
    shown++;
    let any = false;
    for (const p of seatsOf(r)) if (owns(p, n)) { any = true; own++; win += p.win ? 1 : 0; even += 1 / r.seats; }
    if (any) takenIn++;
  }
  return { shown, own, win, even, taken: shown ? takenIn / shown : 0, wr: own ? win / own : 0, evenWr: own ? even / own : 0 };
}

function verdict(c) {
  if (c.shown < 10) return 'barely dealt';
  if (c.taken < 0.35) return 'rarely bought';
  if (c.own < 30) return c.wr >= 0.37 ? 'looks strong (few owners)' : 'too few owners to tell';
  if (c.wr >= 0.37) return 'too strong as priced';
  if (c.wr < 0.2) return 'weak: owners lose';
  if (c.taken > 0.9) return 'fair, but an auto-buy';
  return 'fair and wanted';
}

/** A player's plan in table words: how wide, how focused, where the followers came from. */
function plan(r, p) {
  const by = {};
  for (const m of p.members) { const q = m.match(/\((\w+)\)$/)?.[1]; if (q && q !== 'benders') by[q] = (by[q] || 0) + 1; }
  const own = by[r.table[p.seat]] || 0, top = Math.max(0, ...Object.values(by));
  const size = p.memberCount <= 5 ? 'few members (5 or less)' : p.memberCount >= 9 ? 'wide (9+ members)' : '6 to 8 members';
  const focus = top >= 3 && own === top ? 'deep in own color' : top >= 3 ? 'deep in a rival color' : 'mixed colors';
  const fromM = Object.values(p.memberFollowers || {}).reduce((a, b) => a + b, 0), fromC = p.contest || 0;
  const source = fromC >= fromM && fromC > 0 ? 'contests' : 'members';
  return { size, focus, source, key: `${focus}, ${size}`, fromM, fromC, other: Math.max(0, p.followers - fromM - fromC) };
}

function patterns(rows) {
  const plans = {}, sources = { win: [0, 0, 0, 0], lose: [0, 0, 0, 0] }, colors = {}, pairs = {};
  let wins = 0;
  for (const r of rows) {
    for (const p of seatsOf(r)) {
      const pl = plan(r, p), w = p.win ? 1 : 0;
      const k = pl.key;
      plans[k] ??= { n: 0, w: 0, even: 0 }; plans[k].n++; plans[k].w += w; plans[k].even += 1 / r.seats;
      wins += w;
      const s = sources[w ? 'win' : 'lose']; s[0] += pl.fromM; s[1] += pl.fromC; s[2] += pl.other; s[3]++;
      const c = r.table[p.seat]; colors[c] ??= { n: 0, w: 0, even: 0 }; colors[c].n++; colors[c].w += w; colors[c].even += 1 / r.seats;
      const ms = [...new Set(p.members.map(m => m.replace(/ \(\w+\)$/, '')))].sort();
      for (let i = 0; i < ms.length; i++) for (let j = i + 1; j < ms.length; j++) {
        const pk = `${ms[i]} + ${ms[j]}`; pairs[pk] ??= { n: 0, w: 0, even: 0 }; pairs[pk].n++; pairs[pk].w += w; pairs[pk].even += 1 / r.seats;
      }
    }
  }
  return { plans, sources, colors, pairs, wins };
}

function cmdReport() {
  const spec = loadSpec(pos[0]);
  const T = loadArm(spec.arms.trial), B = loadArm(spec.arms.base);
  const both = [...T.keys()].filter(g => B.has(g)).sort((a, b) => a - b);
  const t = both.map(g => T.get(g)), b = both.map(g => B.get(g));
  const L = [];
  const say = s => L.push(s);
  const settings = [`${spec.level === 'hard' ? 'Hard' : spec.level} bots`, spec.env.BOTSEE === '1' ? 'that see what cards do' : 'that can\'t see On Use cards',
    `${spec.env.DECK}-card deck`, spec.env.CONTESTS === 'byColor' ? 'By color contests' : `contests: ${spec.env.CONTESTS || 'as printed'}`, `${spec.seats} players`];
  say(`# Card trial: ${spec.name}`);
  say(`${both.length} games with the change and the same ${both.length} games without it (${settings.join(', ')}; commit ${spec.sha.slice(0, 8)}).${both.length < spec.games ? ` Not finished: ${spec.games} planned.` : ''}`);
  if (spec.note) say(spec.note);
  say('');
  say('## The cards');
  say(`"Taken": games some cult recruited it, per game it showed up. "Owners won": an even share is ${pct(1 / spec.seats)}. Under 30 owners is too few to tell.`);
  for (const [n, o, why] of spec.pairs) {
    const a = n ? cardLine(t, n) : null, c = o ? cardLine(b, o) : null;
    const f = x => `taken ${pct(x.taken)}, owners won ${pct(x.wr)} (${x.own} owners)`;
    if (a) say(`- **${n}**${why ? ` (${why})` : ''}: ${f(a)}: ${verdict(a)}.${c ? ` Without the change, **${o}**: ${f(c)}.` : ''}`);
    else if (c) say(`- **${o}** retired with nothing in its place: it was ${f(c)}.`);
  }
  say('');
  const P = patterns(t), Q = patterns(b);
  say('## How winners won');
  say('Each player\'s plan at game end: how many members, and whether most came from one color (3+). Win share against an even share for that many players.');
  const keys = [...new Set([...Object.keys(P.plans), ...Object.keys(Q.plans)])].sort((x, y) => (P.plans[y]?.w || 0) - (P.plans[x]?.w || 0));
  for (const k of keys) {
    const x = P.plans[k] || { n: 0, w: 0, even: 0 }, y = Q.plans[k] || { n: 0, w: 0, even: 0 };
    if (x.n + y.n < 10) continue;
    say(`- ${k}: ${pct(x.w / (P.wins || 1))} of wins, players on it won ${pct(x.w / (x.n || 1))} (${x.n} players). Without the change: ${pct(y.w / (Q.wins || 1))} of wins, ${pct(y.w / (y.n || 1))}.`);
  }
  const src = s => { const tot = s[0] + s[1] + s[2] || 1; return `${pct(s[0] / tot)} from members, ${pct(s[1] / tot)} from contests, ${pct(s[2] / tot)} other (bought, bonuses), ${Math.round(tot / (s[3] || 1))} followers a player`; };
  say(`- Where winners' followers came from: ${src(P.sources.win)}. Everyone else: ${src(P.sources.lose)}.`);
  say(`  Without the change, winners: ${src(Q.sources.win)}.`);
  say('');
  say('## Member pairs that win together');
  say('Two members in one cult at game end, held by 20+ players: the pairs whose holders win most, against an even share.');
  const top = Object.entries(P.pairs).filter(([, v]) => v.n >= 20).map(([k, v]) => [k, v, v.w / v.n - v.even / v.n]).sort((x, y) => y[2] - x[2]).slice(0, 8);
  for (const [k, v] of top) { const y = Q.pairs[k]; say(`- ${k}: holders won ${pct(v.w / v.n)} (${v.n} players)${y && y.n >= 10 ? `; without the change ${pct(y.w / y.n)} (${y.n})` : ''}.`); }
  if (!top.length) say('- Not enough games yet.');
  say('');
  say('## Colors (By color: each color its own contest)');
  const cs = Object.keys({ ...P.colors, ...Q.colors }).sort((x, y) => (P.colors[y]?.w / P.colors[y]?.n || 0) - (P.colors[x]?.w / P.colors[x]?.n || 0));
  for (const c of cs) {
    const x = P.colors[c] || { n: 0, w: 0 }, y = Q.colors[c] || { n: 0, w: 0 };
    say(`- ${c}: won ${pct(x.w / (x.n || 1))} of ${x.n} seats; without the change ${pct(y.w / (y.n || 1))}.`);
  }
  const md = L.join('\n') + '\n';
  const outF = flags.md || join(trialDir(spec.name), 'report.md');
  writeFileSync(outF, md);
  writeFileSync(join(trialDir(spec.name), 'report.json'), JSON.stringify({ games: both.length, pairs: spec.pairs.map(([n, o]) => ({ n, o, trial: n && cardLine(t, n), base: o && cardLine(b, o) })), trial: P, base: Q }));
  console.log(md);
  console.log(`Written to ${outF}`);
}

const run = { new: cmdNew, work: cmdWork, status: cmdStatus, report: cmdReport }[cmd];
if (!run) die('Usage: node scripts/trial/trial.mjs new|work|status|report ... (see the top of this file)');
await run();
