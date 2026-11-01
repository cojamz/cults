// The off-box browser verdict (.github/workflows/v4-verdict.yml): GitHub runs the whole check:v4 gate, browser gates
// included, on the game branch's tip every few hours and writes the result to the ci-verdicts branch. Why: 16 browser
// gates went red for days without anyone noticing (Nov 1), because ships run unit tests only and a full verdict on a
// loaded 4-CPU box is rare. This puts a verdict on every branch tip within hours, readable from any box with git.
//
//   node scripts/v4-verdict.mjs            one paragraph: the last verdict, how far behind the branch tip it is, what's red
//   node scripts/v4-verdict.mjs --short    one line (orientation, ship scripts)
//   node scripts/v4-verdict.mjs record <check.log> <sha> <out.json>   (the workflow) parse a check:v4 log into JSON
//
// A new verdict on demand: the GitHub Actions "v4 browser verdict" workflow, Run workflow (any thread can trigger it
// with the GitHub tools: workflow v4-verdict.yml, ref main, input ref = a branch or sha).
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const BRANCH = 'claude/gifted-newton-3lcy3i', STORE = 'ci-verdicts';
const sh = c => { try { return execSync(c, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); } catch { return ''; } };
const [cmd, ...rest] = process.argv.slice(2);

if (cmd === 'record') {
  const [logFile, sha, out] = rest;
  const log = readFileSync(logFile, 'utf8').replace(/\x1b\[[0-9;]*m/g, '');
  const tail = log.slice(log.lastIndexOf('── v4 check'));
  const stages = [...tail.matchAll(/^(PASS|FAIL|STALLED|KNOWN RED)\s+(.+?)\s+\(([\d.]+)s, from/gm)].map(m => ({ status: m[1], name: m[2], s: Number(m[3]) }));
  const red = stages.filter(s => s.status === 'FAIL' || s.status === 'STALLED').map(s => s.name);
  const rec = {
    sha, at: new Date().toISOString(), ok: stages.length > 0 && red.length === 0, finished: stages.length > 0,
    red, knownRed: stages.filter(s => s.status === 'KNOWN RED').map(s => s.name), passed: stages.filter(s => s.status === 'PASS').length,
    stages, run: process.env.GITHUB_RUN_ID ? `https://github.com/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}` : null,
  };
  writeFileSync(out, JSON.stringify(rec, null, 1) + '\n');
  console.log(`${rec.ok ? 'GREEN' : rec.finished ? 'RED' : 'DID NOT FINISH'} ${sha.slice(0, 7)}: ${rec.passed} passed${red.length ? `, red: ${red.join(', ')}` : ''}${rec.knownRed.length ? `, known red: ${rec.knownRed.join(', ')}` : ''}`);
  process.exit(0);
}

sh(`git fetch -q origin +${STORE}:refs/remotes/origin/${STORE}`);
let v = null;
try { v = JSON.parse(sh(`git show origin/${STORE}:latest.json`)); } catch {}
if (!v) { console.log(`Browser verdict: none recorded yet (the v4-verdict workflow writes it to the ${STORE} branch).`); process.exit(0); }
sh(`git fetch -q origin ${BRANCH}`);
const tip = sh(`git rev-parse origin/${BRANCH}`);
const behind = tip && v.sha ? sh(`git rev-list --count ${v.sha}..${tip}`) || '?' : '?';
const ageH = ((Date.now() - Date.parse(v.at)) / 3.6e6).toFixed(1);
const state = v.ok ? 'GREEN' : v.finished ? `RED (${v.red.length}): ${v.red.map(n => n.replace(/^e2e /, '')).join(', ')}` : 'DID NOT FINISH';
const line = `Browser verdict on ${v.sha.slice(0, 7)} (${ageH}h ago, ${behind} commits behind the branch tip): ${state}${v.knownRed?.length ? `; known red ${v.knownRed.length}` : ''}.`;
if (rest.includes('--short') || cmd === '--short') { console.log(line); process.exit(0); }
console.log(line);
if (v.run) console.log(`Run: ${v.run}`);
if (!v.ok) console.log('A red gate nobody owns: tell the coordinator now. A gate that changed on purpose is updated in the same commit as the look or card it checks.');
