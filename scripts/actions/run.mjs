// Action balance harness, runner: plays the same games under each variant, 4 at a time, restart-safe, then writes one
// report per variant. Variants (Claude's, Nov 11): base is today's game; no-tribute swaps Tribute Band for Ensemble so
// Green's deck stays at 10 (Cory: "maybe we'll cut tribute band ... We'll need to put in a replacement green").
// Usage: DECK=10 node scripts/actions/run.mjs [--games=200] [--chunk=10] [--only=base,no-tribute] [--dir=.actions-runs/<id>]
import { spawn, execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, appendFileSync } from 'node:fs';

export const VARIANTS = {
  // the game since Nov 11 9:32pm: Greatest Hits copies only rivals' minions, Tribute Band out (Ensemble in), cloaks +2
  base: {},
  'plus1-every': { PLUS1: 'every' },
  // Cory, Nov 11: "test purple at +1"
  'purple1': { POCKETWATCH: 'token1' },
  // Green at every table, so every game reads Greatest Hits: the game, the old rule, and only your own minions
  'green-base': { FORCE: 'echo' },
  'green-hits-all': { FORCE: 'echo', HITS: 'all' },
  'green-hits-own': { FORCE: 'echo', HITS: 'own' },
  'green-tribute': { FORCE: 'echo', MEMBERS_OUT: 'echo.ensemble', MEMBERS_IN: 'echo.dejavu' },
  // Cory, Nov 11 11:36pm: Purifiers "Whenever this member leaves your cult, each rival discards a member. On Use, once per game: discard this member."
  'purifiers-leave': { PURIFIERS: 'leave' },
  // Cory, Nov 11 11:46pm: "minimalists for sure needs tweaks"
  // Line Cutters worth 1 instead of 3 (polish pass: 7 of 8 AI players called it cheap)
  'cutters1': { LINECUTTERS_F: '1' },
  'cutters2': { LINECUTTERS_F: '2' },
  // members that can't pay back their price (design/eval/member-payback/2026-11-12-pays-for-itself.md), lifted with
  // followers to reach it (Cory: "lift a weak card with followers before cutting its price")
  'payback': { MEMBER_F: 'silver.bookies:4,market.snob:4,red.recruiter:4,gold.seed:2,market.windowshopper:3,market.thrifthunters:3,purple.timekeepers:2' },
  // (tweak tests dropped: he called +2 per member costing 8 or more at 11:53pm)
};
const flags = Object.fromEntries(process.argv.slice(2).map(a => { const [k, ...v] = a.replace(/^--/, '').split('='); return [k, v.join('=') || true]; }));
const games = Number(flags.games || 200), chunk = Number(flags.chunk || 10), W = Number(flags.workers || 4);
const sha = execSync('git rev-parse --short HEAD').toString().trim();
const dir = flags.dir || `.actions-runs/${new Date().toISOString().slice(0, 10)}-${sha}`;
const names = flags.only ? String(flags.only).split(',') : ['base'];
const jobs = [];
for (const n of names) mkdirSync(`${dir}/${n}`, { recursive: true });
for (let first = 1; first <= games; first += chunk) for (const n of names) {
  const out = `${dir}/${n}/${first}.jsonl`;
  const k = Math.min(chunk, games - first + 1);
  const have = existsSync(out) ? readFileSync(out, 'utf8').trim().split('\n').filter(Boolean).length : 0;
  if (have < k) jobs.push({ n, first: first + have, count: k - have, out });
}
console.log(`${dir}: ${jobs.length} jobs`);
let running = 0, i = 0;
const report = () => { for (const n of names) execSync(`node scripts/actions/report.mjs ${dir}/${n} --md=${dir}/${n}.md > /dev/null`); console.log(`reports: ${names.map(n => `${dir}/${n}.md`).join(' ')}`); };
const next = () => {
  if (i >= jobs.length && !running) return report();
  while (running < W && i < jobs.length) {
    const j = jobs[i++]; running++;
    const c = spawn('node', ['scripts/actions/play.mjs', String(j.first), String(j.count), j.out], { env: { ...process.env, BUDGET: process.env.BUDGET || '40', ...VARIANTS[j.n] }, stdio: 'inherit' });
    // watchdog: some deals hang a bot inside one move (economy baseline, Nov 11: games 50 and 58 ran 80+ minutes).
    // A job with no new game in 12 minutes is killed, the stuck game is logged and skipped, and the rest re-queued.
    const lines = () => (existsSync(j.out) ? readFileSync(j.out, 'utf8').trim().split('\n').filter(Boolean).length : 0);
    const start = lines(); let seen = start, last = Date.now();
    const dog = setInterval(() => {
      const n = lines();
      if (n !== seen) { seen = n; last = Date.now(); return; }
      if (Date.now() - last > 12 * 60000) {
        const stuck = j.first + (n - start);
        console.log(`${j.n}: game ${stuck} made no progress in 12 minutes; skipped (logged in ${dir}/stuck.txt)`);
        appendFileSync(`${dir}/stuck.txt`, `${j.n} game ${stuck}\n`);
        const left = j.first + j.count - stuck - 1;
        if (left > 0) jobs.push({ n: j.n, first: stuck + 1, count: left, out: j.out });
        c.kill('SIGKILL');
      }
    }, 30000);
    c.on('exit', code => { clearInterval(dog); running--; console.log(`${new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' })} ${j.n} ${j.first}+${j.count} exit ${code}`); next(); });
  }
};
next();
