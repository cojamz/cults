#!/usr/bin/env node
// Appends one row to the run log (.claude/skills/test-apparatus/runs.md), so the catalogue stays living.
//   node .claude/skills/test-apparatus/scripts/log-run.mjs --tool=<tool> --question="<Cory's words>" \
//        [--control="…"] [--change="…"] --result="<one line>" [--link=<report path>] [--commit=<sha>]
// Date is Eastern; commit defaults to the checkout's HEAD. Pipes in values are escaped so the table holds.
import { appendFileSync, readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const log = join(here, '..', 'runs.md');
const args = Object.fromEntries(process.argv.slice(2).map(a => {
  const m = a.match(/^--([^=]+)=?(.*)$/s);
  return m ? [m[1], m[2]] : [a, ''];
}));
const need = ['tool', 'question', 'result'];
const missing = need.filter(k => !args[k]);
if (missing.length) {
  console.error(`log-run: missing --${missing.join(', --')}\n` + readFileSync(fileURLToPath(import.meta.url), 'utf8').split('\n').slice(1, 5).join('\n'));
  process.exit(1);
}
let commit = args.commit;
if (!commit) {
  try { commit = execSync('git rev-parse --short=8 HEAD', { cwd: here }).toString().trim(); } catch { commit = '?'; }
}
const date = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York' }).format(new Date());
const cell = v => String(v ?? '').replace(/\|/g, '\\|').replace(/\s*\n\s*/g, ' ').trim() || '—';
const row = `| ${[date, commit, args.tool, args.question, args.control, args.change, args.result, args.link].map(cell).join(' | ')} |\n`;
appendFileSync(log, row);
console.log(`logged: ${row.trim()}\nCommit and push runs.md with your results.`);
