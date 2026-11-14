#!/usr/bin/env node
// The eval toolkit (Cory, Nov 5: "basically be a tool kit where we run different processes at different times").
// One menu over the tools we already have. Plan and when to use each: design/notes/testing-setup.md.
//   node scripts/eval.mjs                      list the tools
//   node scripts/eval.mjs <tool> [args...]     run one (extra args pass through)
import { spawnSync } from 'node:child_process';

const BYCOLOR = '{"CONTESTS":"byColor"}';
const TOOLS = {
  rules:   { when: 'every change (6 min)', what: 'every card does what it says: unit tests, fire audit, build, hot-seat game',
             cmd: ['npm', ['run', 'check:v4:quick']] },
  words:   { when: 'any new or reworded card (5 min)', what: 'text beside what the game does (then read it: .claude/skills/review-text)',
             cmd: ['node', ['.claude/skills/review-text/scripts/text-sheet.mjs']] },
  trial:   { when: 'a new card or a price change (1-2 h)', what: 'one card against the card it replaced, same deals. e.g. trial new <name> --env=\'{"REPLACE4":"1"}\'',
             cmd: ['node', ['scripts/trial/trial.mjs']] },
  balance: { when: 'after a batch of changes (fast 1 h; --size=deep overnight)', what: 'whole game: win rates, dead/dominant/trap cards, catch-up, abuse hunt',
             cmd: ['node', ['scripts/balance/run.mjs', `--env=${BYCOLOR}`]], env: { DECK: '10' } },
  ladder:  { when: 'leads every report; after batches and bot changes (30 min per pair)', what: 'stronger bots vs weaker at 2-against-2 tables. e.g. ladder --a=\'{"level":"veryhard"}\' --b=\'{"level":"normal"}\' --tables=30',
             cmd: ['node', ['scripts/v4-bot-duel.mjs', '--par=4']], env: { DECK: '10', CONTESTS: 'byColor' } },
  feel:    { when: 'new cards and reworks (about 2 h a game)', what: 'AI expert players: new <dir> --colors a,b,c,d, then one agent per seat with a brief (see design/eval/balance-1.0/expert/g1/brief-*.md)',
             cmd: ['node', ['scripts/v4-expert.mjs']], env: { DECK: '10' } },
};

const [tool, ...rest] = process.argv.slice(2);
if (!tool || !TOOLS[tool]) {
  console.log('Eval toolkit. Usage: node scripts/eval.mjs <tool> [args]\n');
  for (const [k, t] of Object.entries(TOOLS)) console.log(`  ${k.padEnd(8)} ${t.what}\n  ${''.padEnd(8)} when: ${t.when}\n`);
  console.log('Bots: Normal is cheap volume (trust only when Hard agrees); Hard is the default; Very Hard confirms strong combos.');
  process.exit(tool ? 1 : 0);
}
const t = TOOLS[tool];
const r = spawnSync(t.cmd[0], [...t.cmd[1], ...rest], { stdio: 'inherit', env: { ...process.env, ...(t.env || {}) } });
process.exit(r.status ?? 1);
