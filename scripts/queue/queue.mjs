#!/usr/bin/env node
// The bot-game queue: one shared list of jobs on the project folder that any runner thread pulls from.
// Source of truth: scripts/queue/queue.mjs on claude/gifted-newton-3lcy3i. Runners use the installed copy at
// /mnt/project-files/queue/queue.mjs (so it works from any checkout); `node scripts/queue/queue.mjs install` refreshes it.
// Docs: /mnt/project-files/queue/README.md (written by install).
//
//   post --name=<n> --commit=<sha> --first=1 --last=120 --env="BOTSEE=1 REPLACE1=1" [--level=hard] [--priority=0] [--by="<thread>"]
//   post --kind=trial --name=<trial>            (a card trial from scripts/trial/trial.mjs; it hands out its own games)
//   work [--jobs=4] [--wait=90] [--repo=.]      (run from a clone of cojamz/patrons; plays until the queue is empty,
//                                                then checks every minute for --wait minutes before exiting)
//   status [--json]                             (every job: games done / being played / open, runners alive)
//   cancel <name> | reopen <name>
//
// Claims match scripts/trial/trial.mjs: a block of 5 games is claimed by creating claims/<first> exclusively (wx),
// its mtime is refreshed every minute, a claim untouched for 10 minutes is stale and may be taken over. A block is
// played into a local .part file, its line count checked, then copied to a tmp name and renamed into place. Nothing
// appends to the shared folder. Reports dedupe by game number, so a double claim only wastes time.
import fs from 'node:fs';
// One id per box: every cloud box is called "vm", so the hostname made another box's live claim look dead (Nov 4).
// Inlined (same as scripts/lib/box-id.mjs) because the installed copy runs alone from the shared folder.
let boxIdCache = null;
const boxId = () => {
  if (boxIdCache) return boxIdCache;
  const f = path.join(os.tmpdir(), '.patrons-box-id');
  try { boxIdCache = fs.readFileSync(f, 'utf8').trim(); } catch {}
  if (!boxIdCache) {
    const t = `${f}.${process.pid}`;
    try { fs.writeFileSync(t, `${os.hostname()}-${crypto.randomBytes(6).toString('hex')}`, { flag: 'wx' }); fs.renameSync(t, f); } catch {}
    try { boxIdCache = fs.readFileSync(f, 'utf8').trim(); } catch { boxIdCache = `${os.hostname()}-${process.pid}`; }
  }
  return boxIdCache;
};
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { spawn, execFileSync } from 'node:child_process';

const ROOT = process.env.QUEUE_ROOT || '/mnt/project-files/queue';
const RUNS = process.env.QUEUE_RUNS || '/mnt/project-files/replacements/runs';
const BRANCH = 'claude/gifted-newton-3lcy3i';
const BLOCK = 5;
const GAME_KEYS = /^(REPLACE\d*|PRICE|BOTSEE|DECK|CONTESTS|CONTESTFIX|LEVEL|SEATS|ONLY|MUST|SWAP|SWAPCOST|BUDGET|BOTOPTS|STRONGSEAT|GAMES|CHOICES|LOGS|COLORSHIFT|MOB|PT_GIVE|CATERER|CHANGER|IMPRESSIONIST|NIGHTOWL|THINKER_DUMP)$/;
const STALE_MS = 10 * 60e3;
const BEAT_MS = 60e3;
const dirs = { jobs: path.join(ROOT, 'jobs'), claims: path.join(ROOT, 'claims'), runners: path.join(ROOT, 'runners'), log: path.join(ROOT, 'log.jsonl') };

const argv = process.argv.slice(2);
const cmd = argv[0];
const pos = argv.filter((a, i) => i > 0 && !a.startsWith('--'));
const opt = Object.fromEntries(argv.filter((a) => a.startsWith('--')).map((a) => { const i = a.indexOf('='); return i < 0 ? [a.slice(2), true] : [a.slice(2, i), a.slice(i + 1)]; }));

const now = () => new Date().toISOString();
const readJSON = (f, d = null) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return d; } };
const writeAtomic = (f, s) => { const t = `${f}.tmp-${boxId()}-${process.pid}`; fs.writeFileSync(t, s); fs.renameSync(t, f); };
const log = (ev) => { try { fs.appendFileSync(dirs.log, JSON.stringify({ at: now(), host: boxId(), ...ev }) + '\n'); } catch {} };
const lines = (f) => { try { return fs.readFileSync(f, 'utf8').split('\n').filter((l) => l.trim()).length; } catch { return 0; } };
const sanitize = (s) => String(s).replace(/[^A-Za-z0-9._-]/g, '-');
for (const d of [dirs.jobs, dirs.claims, dirs.runners]) fs.mkdirSync(d, { recursive: true });

function parseEnv(s) {
  const out = {};
  for (const tok of String(s || '').trim().split(/\s+/).filter(Boolean)) { const i = tok.indexOf('='); if (i > 0) out[tok.slice(0, i)] = tok.slice(i + 1); }
  return out;
}
const blocksOf = (job) => { const b = []; for (let s = job.first; s <= job.last; s += BLOCK) b.push({ first: s, count: Math.min(BLOCK, job.last - s + 1) }); return b; };
const outFile = (job, b) => path.join(RUNS, job.name, `${job.level}-${b.first}.jsonl`);
const blockDone = (job, b) => lines(outFile(job, b)) >= b.count;
const claimFile = (job, b) => path.join(dirs.claims, job.name, String(b.first));
const claimAge = (f) => { try { return Date.now() - fs.statSync(f).mtimeMs; } catch { return Infinity; } };
const pidAlive = (pid) => { try { process.kill(pid, 0); return true; } catch (e) { return e.code === 'EPERM'; } };
// Same rule as trial.mjs: a claim from this box whose process is gone is stale at once.
const claimLive = (f) => { if (claimAge(f) >= STALE_MS) return false; const c = readJSON(f); return !(c && c.host === boxId() && c.pid && !pidAlive(c.pid)); };
const jobs = () => fs.readdirSync(dirs.jobs).filter((f) => f.endsWith('.json')).map((f) => { const j = readJSON(path.join(dirs.jobs, f)); return j && { ...j, _file: path.join(dirs.jobs, f) }; }).filter(Boolean);
const saveJob = (j) => { const { _file, ...body } = j; writeAtomic(_file, JSON.stringify(body, null, 1) + '\n'); };
const reload = (j) => { const n = readJSON(j._file); return n && { ...n, _file: j._file }; };
const findJob = (name) => jobs().find((j) => j.name === name || path.basename(j._file, '.json') === name);
const jobFile = (name) => path.join(dirs.jobs, `${sanitize(name)}.json`);
const trialDone = (name) => fs.existsSync(path.join('/mnt/project-files/trials/trials', name, 'complete'));

function tally(job) {
  if (job.kind === 'trial') return { kind: 'trial', done: trialDone(job.name) };
  let done = 0, playing = 0, open = 0;
  for (const b of blocksOf(job)) {
    if (blockDone(job, b)) done += b.count; else if (claimLive(claimFile(job, b))) playing += b.count; else open += b.count;
  }
  return { done, playing, open, total: job.last - job.first + 1 };
}

// ---- post / cancel / reopen
function post() {
  const kind = opt.kind || 'shard';
  const name = opt.name || pos[0];
  if (!name || sanitize(name) !== name) die('post needs --name=<letters, digits, . _ -> (it is also the results folder name)');
  let job;
  if (kind === 'trial') job = { kind, name };
  else {
    const commit = opt.commit && resolveSha(String(opt.commit));
    const first = Number(opt.first || 1), last = Number(opt.last);
    if (!commit || !(last >= first)) die('post needs --commit=<pushed sha> --first=<n> --last=<n> [--env="A=1 B=2"] [--level=hard]');
    job = { kind, name, commit, first, last, level: opt.level || 'hard', env: String(opt.env || '') };
  }
  job.priority = Number(opt.priority || 0);
  const f = kind === 'trial' ? path.join(dirs.jobs, `trial-${name}.json`) : jobFile(name); // trial.mjs new writes the same file
  const old = readJSON(f);
  if (old) {
    const same = ['kind', 'commit', 'level', 'env'].every((k) => (old[k] ?? '') === (job[k] ?? ''));
    if (!same) die(`job ${name} already exists with a different commit, level or env:\n${JSON.stringify(old, null, 1)}\nPick a new name, or cancel the old one first.`);
    // Same game setup: widen the range, keep the earliest post time. Finished games stay finished.
    job.first = Math.min(old.first ?? job.first, job.first ?? old.first); job.last = Math.max(old.last ?? job.last, job.last ?? old.last);
    Object.assign(job, { posted_at: old.posted_at, posted_by: old.posted_by, state: old.state === 'cancelled' ? 'open' : old.state });
  } else Object.assign(job, { posted_at: now(), posted_by: String(opt.by || process.env.QUEUE_BY || ''), state: 'open' });
  writeAtomic(f, JSON.stringify(job, null, 1) + '\n');
  log({ ev: old ? 'widen' : 'post', job: name, first: job.first, last: job.last });
  console.log(`${old ? 'Updated' : 'Posted'} ${name}: ${job.kind === 'trial' ? 'card trial' : `games ${job.first}-${job.last} at ${job.commit.slice(0, 8)} env "${job.env}"`}. Results: ${job.kind === 'trial' ? `/mnt/project-files/trials/trials/${name}/` : path.join(RUNS, name) + '/'}`);
}
function setState(state) {
  const name = pos[0]; const j = findJob(name);
  if (!j) die(`no job ${name}`);
  j.state = state; saveJob(j); log({ ev: state, job: name }); console.log(`${name}: ${state}`);
}
function resolveSha(s) {
  try { return execFileSync('git', ['rev-parse', '--verify', `${s}^{commit}`], { cwd: opt.repo || process.cwd(), encoding: 'utf8' }).trim(); } catch {}
  return /^[0-9a-f]{40}$/.test(s) ? s : die(`can't resolve commit ${s} here: run from a clone with it fetched, or pass the full 40-character sha`);
}

// ---- status
function status() {
  const rows = jobs().sort((a, b) => (b.priority - a.priority) || String(a.posted_at).localeCompare(String(b.posted_at)));
  const runners = fs.readdirSync(dirs.runners).filter((f) => f.endsWith('.json')).map((f) => ({ r: readJSON(path.join(dirs.runners, f)), live: claimLive(path.join(dirs.runners, f)) })).filter((x) => x.r);
  const live = runners.filter((x) => x.live);
  if (opt.json) return console.log(JSON.stringify({ jobs: rows.map(({ _file, ...j }) => ({ ...j, ...tally(j) })), runners: live.map((x) => x.r) }, null, 1));
  for (const j of rows) {
    const t = tally(j);
    const what = j.kind === 'trial' ? `card trial ${t.done ? 'complete' : 'running'}` : `${t.done}/${t.total} games done, ${t.playing} being played, ${t.open} open  (${j.commit.slice(0, 8)} "${j.env}")`;
    console.log(`${j.state === 'cancelled' ? 'CANCELLED ' : ''}${j.name}${j.priority ? ` [p${j.priority}]` : ''}: ${what}${j.posted_by ? `  posted by ${j.posted_by}` : ''}`);
  }
  if (!rows.length) console.log('No jobs.');
  console.log(`Runners alive: ${live.length ? live.map((x) => `${x.r.label} (${x.r.doing || 'idle'})`).join('; ') : 'none'}`);
}

// ---- work
const runnerId = sanitize(opt.label || process.env.QUEUE_LABEL || `${boxId()}-${process.pid}`);
const runnerFile = path.join(dirs.runners, `${runnerId}.json`);
let runnerDoing = 'starting';
const beatRunner = () => { try { writeAtomic(runnerFile, JSON.stringify({ label: runnerId, host: boxId(), pid: process.pid, doing: runnerDoing, at: now() })); } catch {} };
const offset = (key, n) => n ? parseInt(crypto.createHash('sha1').update(runnerId + key).digest('hex').slice(0, 8), 16) % n : 0;

function claim(job, b) {
  const f = claimFile(job, b); fs.mkdirSync(path.dirname(f), { recursive: true });
  const body = JSON.stringify({ runner: runnerId, host: boxId(), pid: process.pid, at: now() });
  try { fs.writeFileSync(f, body, { flag: 'wx' }); return f; } catch (e) { if (e.code !== 'EEXIST') throw e; }
  if (claimLive(f)) return null;
  // Stale: take it over. Rename our own claim over it, then re-read to see who won.
  writeAtomic(f, body);
  return readJSON(f)?.runner === runnerId ? (log({ ev: 'takeover', job: job.name, first: b.first }), f) : null;
}
function nextBlock(job) {
  const bs = blocksOf(job).filter((b) => !blockDone(job, b));
  const k = offset(job.name, bs.length);
  for (const b of [...bs.slice(k), ...bs.slice(0, k)]) { const c = claim(job, b); if (c) { if (blockDone(job, b)) { release(c); continue; } return { b, c }; } }
  return null;
}
const release = (c) => { try { if (readJSON(c)?.runner === runnerId) fs.unlinkSync(c); } catch {} };

const repo = path.resolve(opt.repo || process.cwd());
const trees = new Map();
function sh(cmdline, cwd) { execFileSync('bash', ['-c', cmdline], { cwd, stdio: ['ignore', 'inherit', 'inherit'] }); }
// A worktree per commit next to the runner's clone, so the runner's own checkout never moves. node_modules is
// shared with the clone when package-lock.json matches, otherwise npm ci runs once in that worktree.
function treeFor(commit) {
  if (trees.has(commit)) return trees.get(commit);
  const dir = path.join(path.dirname(repo), `q-${commit.slice(0, 10)}`);
  if (!fs.existsSync(path.join(dir, 'package.json'))) {
    try { execFileSync('git', ['cat-file', '-e', `${commit}^{commit}`], { cwd: repo }); } catch { sh(`git fetch -q origin ${BRANCH} || git fetch -q origin`, repo); }
    sh(`git worktree add -q -f --detach "${dir}" ${commit}`, repo);
  }
  const nm = path.join(dir, 'node_modules');
  if (!fs.existsSync(nm)) {
    let same = false; try { execFileSync('git', ['diff', '--quiet', commit, 'HEAD', '--', 'package-lock.json'], { cwd: repo }); same = fs.existsSync(path.join(repo, 'node_modules')); } catch {}
    if (same) fs.symlinkSync(path.join(repo, 'node_modules'), nm); else sh('npm ci --no-audit --no-fund --loglevel=error', dir);
  }
  trees.set(commit, dir); return dir;
}

function playBlock(job, b, c) {
  return new Promise((resolve) => {
    const cwd = treeFor(job.commit);
    const partDir = path.join(cwd, '.queue', job.name); fs.mkdirSync(partDir, { recursive: true });
    const part = path.join(partDir, `${job.level}-${b.first}.${process.pid}.jsonl.part`); // one writer per file (Nov 4) fs.rmSync(part, { force: true });
    const beat = setInterval(() => { try { const t = new Date(); fs.utimesSync(c, t, t); } catch {} }, BEAT_MS);
    // Like trial.mjs: drop game settings from this shell so only the job's env reaches the games.
    const env = Object.fromEntries(Object.entries(process.env).filter(([k]) => !GAME_KEYS.test(k)));
    Object.assign(env, { DECK: '10', LEVEL: job.level, ...parseEnv(job.env) });
    const p = spawn(process.execPath, ['scripts/v4-balance.mjs', String(b.first), String(b.count), part], { cwd, env, stdio: 'ignore' });
    p.on('exit', (code) => {
      clearInterval(beat);
      const n = lines(part);
      if (code === 0 && n >= b.count) {
        const dest = outFile(job, b); fs.mkdirSync(path.dirname(dest), { recursive: true });
        const tmp = `${dest}.tmp-${runnerId}`; fs.copyFileSync(part, tmp); fs.renameSync(tmp, dest);
        log({ ev: 'block', job: job.name, first: b.first, count: b.count, runner: runnerId });
      } else log({ ev: 'fail', job: job.name, first: b.first, code, lines: n, runner: runnerId });
      release(c); resolve(code === 0 && n >= b.count);
    });
  });
}

async function runShards(job, slots) {
  let fails = 0;
  const lane = async () => {
    for (;;) {
      const j = reload(job); if (!j || (j.state ?? 'open') !== 'open') return;
      const nb = nextBlock(j); if (!nb) return;
      runnerDoing = `${j.name} games ${nb.b.first}-${nb.b.first + nb.b.count - 1}`; beatRunner();
      if (!(await playBlock(j, nb.b, nb.c)) && ++fails >= 3) { console.error(`${j.name}: 3 blocks failed on this box; leaving it for others. See ${dirs.log}`); return; }
    }
  };
  await Promise.all(Array.from({ length: slots }, lane));
  if (blocksOf(job).every((b) => blockDone(job, b))) { const j = reload(job); if (j && (j.state ?? 'open') === 'open') { j.state = 'done'; j.done_at = now(); saveJob(j); log({ ev: 'done', job: job.name }); console.log(`DONE ${job.name}`); } }
}
const trialSkip = new Map();
async function runTrial(job, slots) {
  if (trialDone(job.name)) { const j = reload(job); if (j) { j.state = 'done'; j.done_at = now(); saveJob(j); } log({ ev: 'done', job: job.name }); return; }
  // trial.mjs pins its own sha (its own worktree); it only needs to run from a recent branch tip.
  const cwd = path.join(path.dirname(repo), 'q-tip');
  if (!fs.existsSync(path.join(cwd, '.git'))) sh(`git worktree add -q -f --detach "${cwd}" origin/${BRANCH}`, repo);
  else sh(`git checkout -q --detach origin/${BRANCH}`, cwd);
  if (!fs.existsSync(path.join(cwd, 'node_modules')) && fs.existsSync(path.join(repo, 'node_modules'))) fs.symlinkSync(path.join(repo, 'node_modules'), path.join(cwd, 'node_modules'));
  runnerDoing = `trial ${job.name}`; beatRunner();
  const code = await new Promise((r) => { trialChild = spawn(process.execPath, ['scripts/trial/trial.mjs', 'work', job.name, `--jobs=${slots}`], { cwd, stdio: 'inherit' }); trialChild.on('exit', (c) => { trialChild = null; r(c); }); });
  log({ ev: 'trial-exit', job: job.name, code, runner: runnerId });
  trialSkip.set(job.name, Date.now() + (code === 0 ? STALE_MS : 30 * 60e3));
}

let trialChild = null;
function openJobs() {
  return jobs().filter((j) => (j.state ?? 'open') === 'open')
    .filter((j) => j.kind === 'trial' ? (trialSkip.get(j.name) || 0) < Date.now() && !trialDone(j.name) : blocksOf(j).some((b) => !blockDone(j, b) && !claimLive(claimFile(j, b))))
    .sort((a, b) => (b.priority - a.priority) || String(a.posted_at).localeCompare(String(b.posted_at)));
}

async function work() {
  if (!fs.existsSync(path.join(repo, '.git'))) die(`run work from a clone of cojamz/patrons (or pass --repo=<path>); ${repo} isn't one`);
  const slots = Number(opt.jobs || 4), waitMin = Number(opt.wait ?? 90);
  const hb = setInterval(beatRunner, BEAT_MS); beatRunner();
  // Stopping the runner stops its trial worker too, which stops its games and lets its claims go (Nov 4).
  const stop = (code) => () => { try { trialChild?.kill('SIGTERM'); } catch {} try { fs.unlinkSync(runnerFile); } catch {} process.exit(code); };
  process.on('SIGINT', stop(130)); process.on('SIGTERM', stop(143)); process.on('SIGHUP', stop(129));
  try { sh(`git fetch -q origin ${BRANCH}`, repo); } catch {}
  let idleSince = null;
  for (;;) {
    const j = openJobs()[0];
    if (j) {
      idleSince = null; console.log(`${now()} working ${j.name}`);
      try { await (j.kind === 'trial' ? runTrial(j, slots) : runShards(j, slots)); }
      catch (e) { console.error(`${j.name}: ${e.message}`); log({ ev: 'error', job: j.name, msg: e.message, runner: runnerId }); trialSkip.set(j.name, Date.now() + STALE_MS); }
      continue;
    }
    idleSince ??= Date.now(); runnerDoing = 'idle'; beatRunner();
    if (Date.now() - idleSince >= waitMin * 60e3) break;
    await new Promise((r) => setTimeout(r, 60e3));
    try { sh(`git fetch -q origin ${BRANCH}`, repo); } catch {}
  }
  clearInterval(hb); try { fs.unlinkSync(runnerFile); } catch {}
  console.log(`QUEUE IDLE: nothing to play for ${waitMin} min. Run work again when woken.`);
}

function install() {
  const here = new URL(import.meta.url).pathname;
  fs.copyFileSync(here, path.join(ROOT, 'queue.mjs'));
  fs.copyFileSync(path.join(path.dirname(here), 'README.md'), path.join(ROOT, 'README.md'));
  console.log(`Installed ${path.join(ROOT, 'queue.mjs')} and README.md`);
}
function die(m) { console.error(m); process.exit(1); }

const table = { post, status, work, install, cancel: () => setState('cancelled'), reopen: () => setState('open') };
if (!table[cmd]) die('usage: queue.mjs post|work|status|cancel|reopen|install  (see the top of this file, or /mnt/project-files/queue/README.md)');
await table[cmd]();
