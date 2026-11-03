// The balance system (Cory, Nov 2: "an overhaul of the entire balance infrastructure ... win rates, playfeel,
// exploitable mechanics, overall game feedback ... all in one efficient system that takes <2 hours", and an overnight
// size). One command plays every game once and runs every read on the same records:
//   DECK=10 node scripts/balance/run.mjs [--size=fast|deep] [--workers=4] [--id=<name>] [--only=games,numbers,trust,abuse,packet,report]
//   [--env='{"SWAP":"1"}'] adds settings to every game (a variant run). [--abuse=Doormen,Shake Down] adds cards to the abuse hunt.
// Stages (each skipped when its output is already there, so a stopped run picks up where it left off):
//   games    bots play: Normal at 4, 3 and 2 players, Hard at 4 with its choice log (deep: more, plus Very Hard)
//   numbers  win rates, card lifts and classes, real choices, catch-up, interaction, length, winning plans, skill by
//            color, members that never show acting (text against engine)
//   trust    Normal's decisions replayed over every option: how many followers the bots leave on the table
//   abuse    the most suspect cards (and any card changed since the last run) handed to a seat that tries to break them
//   packet   three games as plain logs for the feel step (closest, biggest win, most interaction)
//   report   one report.md: trust box, flags, every section; the feel step (skill: balance-run) writes the findings
// Raw files live in .balance-runs/<id>/ (not committed); report.md is copied to design/eval/balance-runs/<id>.md
// and /mnt/project-files/balance-runs/<id>/.
import { spawn, execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync, copyFileSync, appendFileSync } from 'node:fs';
import { deckRules } from '../lib/deck-choice.mjs';

deckRules(); // refuses without DECK
const flags = Object.fromEntries(process.argv.slice(2).map(a => { const [k, ...v] = a.replace(/^--/, '').split('='); return [k, v.length ? v.join('=') : true]; }));
const size = flags.size || 'fast';
const W = Number(flags.workers || 4);
const sha = execSync('git rev-parse --short HEAD').toString().trim();
const id = flags.id || `${new Date().toISOString().slice(0, 10)}-${size}-${sha}`;
const dir = `.balance-runs/${id}`;
mkdirSync(`${dir}/logs`, { recursive: true });
const only = flags.only ? new Set(String(flags.only).split(',')) : null;
const extraEnv = flags.env ? JSON.parse(flags.env) : {};
const t0 = Date.now();
const times = {};
const note = s => { const line = `[${new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' })}] ${s}`; console.log(line); appendFileSync(`${dir}/run.log`, line + '\n'); };

const SIZES = {
  smoke: { normal4: 8, normal3: 4, normal2: 4, hard4: 4, veryhard4: 0, trust: { games: 1, every: 40, seeds: 2 }, abuse: { cards: 1, games: 2 }, fire: 8 },
  fast: { normal4: 600, normal3: 100, normal2: 100, hard4: 64, veryhard4: 0, trust: { games: 4, every: 9, seeds: 4 }, abuse: { cards: 3, games: 4, budget: 100 }, fire: 120 },
  deep: { normal4: 1800, normal3: 300, normal2: 300, hard4: 240, veryhard4: 80, trust: { games: 16, every: 6, seeds: 10 }, abuse: { cards: 16, games: 8 }, fire: 400 },
};
const Z = SIZES[size];

// a pool of W processes; a job is { name, cmd, args, env, done } and is skipped when its done-file exists
function pool(jobs) {
  return new Promise((resolve, reject) => {
    const queue = jobs.filter(j => !existsSync(j.done));
    let running = 0, failed = 0;
    const next = () => {
      if (!queue.length && !running) return failed ? reject(new Error(`${failed} jobs failed (see ${dir}/run.log)`)) : resolve();
      while (running < W && queue.length) {
        const j = queue.shift();
        running++;
        const t = Date.now();
        const p = spawn(j.cmd || 'node', j.args, { env: { ...process.env, ...extraEnv, ...j.env }, stdio: ['ignore', j.stdout ? 'pipe' : 'ignore', 'pipe'] });
        let outText = '', errText = '';
        p.stdout?.on('data', d => { outText += d; });
        p.stderr.on('data', d => { errText += d; });
        p.on('exit', code => {
          running--;
          if (j.stdout) writeFileSync(j.stdout, outText);
          // some reports exit 1 to flag what they found; their output is still the result
          if (code === 0 || j.okExit?.includes(code)) { writeFileSync(j.done, String(Date.now() - t)); note(`${j.name} done in ${((Date.now() - t) / 60000).toFixed(1)} min`); }
          else { failed++; note(`${j.name} FAILED (${code}): ${errText.slice(-400)}`); }
          next();
        });
      }
    };
    next();
  });
}

const stage = async (name, fn) => {
  if (only && !only.has(name)) return;
  const t = Date.now();
  note(`stage ${name}`);
  await fn();
  times[name] = (Date.now() - t) / 60000;
};

// ---------- games ----------
const groups = [];
const shard = (group, level, seats, total, per, env = {}) => {
  const files = [];
  for (let first = 1, k = 0; first <= total; first += per, k++) {
    const count = Math.min(per, total - first + 1), out = `${dir}/${group}-${k}.jsonl`;
    files.push(out);
    groups.push({ name: `${group} games ${first}-${first + count - 1}`, args: ['scripts/v4-balance.mjs', String(first), String(count), out], env: { LEVEL: level, SEATS: String(seats), ...env }, done: `${out}.done`, group });
  }
  return files;
};
// slowest first, so they don't finish last alone
const files = {
  veryhard4: Z.veryhard4 ? shard('veryhard4', 'veryhard', 4, Z.veryhard4, Math.ceil(Z.veryhard4 / (2 * W)), { CHOICES: 'auto' }) : [],
  hard4: shard('hard4', 'hard', 4, Z.hard4, Math.ceil(Z.hard4 / (2 * W)), { CHOICES: 'auto' }),
  normal4: shard('normal4', 'normal', 4, Z.normal4, 100),
  normal3: shard('normal3', 'normal', 3, Z.normal3, 100),
  normal2: shard('normal2', 'normal', 2, Z.normal2, 100),
};
// the first Normal 4-player shard keeps every game's log for the feel step
groups.find(g => g.group === 'normal4').env.LOGS = `${dir}/logs`;
for (const g of groups) if (existsSync(g.args[3]) && !existsSync(g.done)) writeFileSync(g.args[3], ''); // a stopped shard starts over

await stage('games', () => pool([
  ...groups,
  { name: 'text-against-engine (members never seen acting)', args: ['scripts/v4-fire-audit.mjs', String(Z.fire), 'normal,normal,normal,normal', 'all'], stdout: `${dir}/fire-audit.txt`, done: `${dir}/fire-audit.done`, okExit: [1] },
]));

// ---------- numbers ----------
const normalAll = [...files.normal4, ...files.normal3, ...files.normal2];
await stage('numbers', () => pool([
  { name: 'win rates, Normal', args: ['scripts/v4-balance-report.mjs', ...normalAll, `--json=${dir}/normal.json`], stdout: `${dir}/normal.txt`, done: `${dir}/normal.done` },
  { name: 'win rates, Normal 4 players', args: ['scripts/v4-balance-report.mjs', ...files.normal4, `--json=${dir}/normal4.json`], stdout: `${dir}/normal4.txt`, done: `${dir}/normal4.done` },
  { name: 'win rates, Hard', args: ['scripts/v4-balance-report.mjs', ...files.hard4, `--json=${dir}/hard.json`], stdout: `${dir}/hard.txt`, done: `${dir}/hard.done` },
  ...(files.veryhard4.length ? [{ name: 'win rates, Very Hard', args: ['scripts/v4-balance-report.mjs', ...files.veryhard4, `--json=${dir}/veryhard.json`], stdout: `${dir}/veryhard.txt`, done: `${dir}/veryhard.done` }] : []),
]).then(() => pool([
  { name: 'card classes', args: ['.claude/skills/game-feel/scripts/lens.mjs', `--normal=${dir}/normal4.json`, `--hard=${dir}/hard.json`, ...(files.veryhard4.length ? [`--veryhard=${dir}/veryhard.json`] : []), `--md=${dir}/lens.md`, `--label=${id}`], stdout: `${dir}/lens.txt`, done: `${dir}/lens.done` },
  { name: 'real choices', args: ['scripts/v4-choice-report.mjs', ...[...files.hard4, ...files.veryhard4].map(f => `${f}.choices`), `--md=${dir}/choices.md`, `--json=${dir}/choices.json`], stdout: `${dir}/choices.txt`, done: `${dir}/choices.done` },
  { name: 'catch-up, interaction, length, plans, skill', args: ['scripts/balance/extras.mjs', `--normal=${normalAll.join(',')}`, `--hard=${files.hard4.join(',')}`, `--normalReport=${dir}/normal4.json`, `--hardReport=${dir}/hard.json`, `--json=${dir}/extras.json`, `--md=${dir}/extras.md`], done: `${dir}/extras.done` },
])));

// ---------- trust ----------
await stage('trust', () => pool([{ name: 'trust check', args: ['scripts/balance/trust.mjs', `--games=${Z.trust.games}`, `--every=${Z.trust.every}`, `--seeds=${Z.trust.seeds}`, `--workers=${W}`, `--json=${dir}/trust.json`, `--md=${dir}/trust.md`], done: `${dir}/trust.done` }]));

// ---------- abuse ----------
// suspects: members whose owners win clearly more than expected (Normal and Hard), strongest first, plus any member
// whose card changed since the last run's build
function suspects() {
  const n = JSON.parse(readFileSync(`${dir}/normal4.json`, 'utf8')), h = existsSync(`${dir}/hard.json`) ? JSON.parse(readFileSync(`${dir}/hard.json`, 'utf8')) : null;
  const hl = Object.fromEntries((h?.memberTable || []).map(m => [m.k, m]));
  const score = m => m.z + (hl[m.k] ? hl[m.k].z : 0);
  // strongest first (owners win more than expected for their member count, Normal and Hard added)
  const list = (n.memberTable || []).sort((a, b) => score(b) - score(a)).map(m => m.k.replace(/ \(\w+\)$/, ''));
  const asked = flags.abuse ? String(flags.abuse).split(',') : [];
  let changed = [];
  try {
    const last = JSON.parse(readFileSync('.balance-runs/last.json', 'utf8'));
    const diff = execSync(`git diff ${last.sha} HEAD -- src/engine/v4/content`).toString();
    changed = [...new Set([...diff.matchAll(/^\+\s*m\('\w+', '([^']+)'/gm)].map(x => x[1]))];
  } catch { /* first run */ }
  return [...new Set([...asked, ...changed, ...list])].slice(0, Z.abuse.cards + changed.length + asked.length);
}
await stage('abuse', async () => {
  const cards = suspects();
  writeFileSync(`${dir}/abuse-cards.json`, JSON.stringify(cards));
  note(`abuse: ${cards.join(', ')}`);
  for (const c of cards) {
    await pool([{ name: `abuse ${c}`, args: ['scripts/v4-abuse.mjs', c, `--games=${Z.abuse.games}`, `--workers=${W}`, ...(Z.abuse.budget ? [`--budget=${Z.abuse.budget}`] : []), `--out=${dir}/abuse`], stdout: `${dir}/abuse-${c.replace(/\W+/g, '_')}.md`, done: `${dir}/abuse-${c.replace(/\W+/g, '_')}.done` }]);
  }
});

// ---------- packet ----------
await stage('packet', async () => {
  const rows = files.normal4.slice(0, 1).flatMap(f => readFileSync(f, 'utf8').trim().split('\n').filter(Boolean).map(JSON.parse)).filter(r => !r.stuck && r.buyer < 0);
  const margin = r => { const f = r.players.map(p => p.followers).sort((a, b) => b - a); return f[0] - f[1]; };
  const pick = [
    ['closest game', [...rows].sort((a, b) => margin(a) - margin(b))[0]],
    ['biggest win', [...rows].sort((a, b) => margin(b) - margin(a))[0]],
    ['most interaction', [...rows].sort((a, b) => (b.tally?.hurt || 0) - (a.tally?.hurt || 0))[0]],
  ];
  mkdirSync(`${dir}/packet`, { recursive: true });
  for (const [why, r] of pick) copyFileSync(`${dir}/logs/game-normal-4p-${r.game}.txt`, `${dir}/packet/${why.replace(/ /g, '-')}.txt`);
});

// ---------- report ----------
await stage('report', async () => {
  const read = f => (existsSync(f) ? readFileSync(f, 'utf8').trim() : '(missing)');
  const trust = existsSync(`${dir}/trust.json`) ? JSON.parse(readFileSync(`${dir}/trust.json`, 'utf8')) : null;
  const abuse = readdirSync(dir).filter(f => /^abuse-.*\.md$/.test(f)).map(f => read(`${dir}/${f}`));
  const flagsList = [];
  for (const a of abuse) if (/FLAGGED/.test(a)) flagsList.push(`Abuse: ${a.split('\n')[0].replace('# Abuser test: ', '')} is worth clearly more than its price to a player trying to break it.`);
  const lens = read(`${dir}/lens.md`);
  for (const l of lens.split('\n')) if (/DOMINANT|TRAP|DEAD/.test(l) && /^\s*[-*]/.test(l)) flagsList.push(`Card class: ${l.replace(/^\s*[-*]\s*/, '')}`);
  const rep = [
    `# Balance run ${id}`,
    '',
    `Build ${sha}, ${size} size, 10-card deck, ${((Date.now() - t0) / 60000).toFixed(0)} min this session${Object.keys(extraEnv).length ? `, settings ${JSON.stringify(extraEnv)}` : ''}.`,
    `Games: Normal ${Z.normal4} at 4 players, ${Z.normal3} at 3, ${Z.normal2} at 2; Hard ${Z.hard4} at 4${Z.veryhard4 ? `; Very Hard ${Z.veryhard4} at 4` : ''}.`,
    '',
    '## Findings',
    '(Written by the feel step: at most 10, most important first, each with the card\'s full text, one played-out turn, and which sources agree.)',
    '',
    `## Trust: ${trust?.verdict || '(missing)'}`,
    read(`${dir}/trust.md`).split('\n').slice(2).join('\n'),
    '',
    '## Flags for the feel step to check',
    ...flagsList.map(f => `- ${f}`),
    '',
    '## Win rates (Normal, every seat count)', '```', read(`${dir}/normal.txt`), '```',
    '## Win rates (Hard, 4 players)', '```', read(`${dir}/hard.txt`), '```',
    ...(files.veryhard4.length ? ['## Win rates (Very Hard, 4 players)', '```', read(`${dir}/veryhard.txt`), '```'] : []),
    lens,
    '',
    read(`${dir}/choices.md`),
    '',
    read(`${dir}/extras.md`),
    '',
    '## Abuse hunt', ...abuse.map(a => a.replace(/^# /, '### ')),
    '',
    '## Text against the engine (members recruited but never seen acting)', '```', read(`${dir}/fire-audit.txt`), '```',
    '',
    `Stage times (min): ${Object.entries(times).map(([k, v]) => `${k} ${v.toFixed(0)}`).join(', ')}.`,
    `Raw files: ${dir}/. Feel packet: ${dir}/packet/.`,
  ];
  writeFileSync(`${dir}/report.md`, rep.join('\n') + '\n');
  mkdirSync('design/eval/balance-runs', { recursive: true });
  copyFileSync(`${dir}/report.md`, `design/eval/balance-runs/${id}.md`);
  try { mkdirSync(`/mnt/project-files/balance-runs/${id}/`, { recursive: true }); copyFileSync(`${dir}/report.md`, `/mnt/project-files/balance-runs/${id}/report.md`); for (const f of readdirSync(`${dir}/packet`)) copyFileSync(`${dir}/packet/${f}`, `/mnt/project-files/balance-runs/${id}/${f}`); } catch { /* no shared folder here */ }
  writeFileSync('.balance-runs/last.json', JSON.stringify({ id, sha, size, at: new Date().toISOString() }));
});
note(`done in ${((Date.now() - t0) / 60000).toFixed(0)} min: ${dir}/report.md`);
