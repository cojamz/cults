#!/usr/bin/env node
// What the test catalogue doesn't name yet, so it stays living (rule: .claude/rules/testing.md 7).
//   node .claude/skills/test-apparatus/scripts/drift.mjs [--quiet]   (--quiet: one count line, for start.sh)
// Checks: every scripts/*.mjs|sh and every scripts/<dir>/ is named in references/tools.md; every design/eval/<entry>
// is named in references/history.md. A file inside a scripts/<dir>/ counts as named when the dir is.
// Exit 0 always: it's a nudge, not a gate.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const skill = join(here, '..');
const root = join(skill, '..', '..', '..');
const tools = readFileSync(join(skill, 'references', 'tools.md'), 'utf8');
const history = readFileSync(join(skill, 'references', 'history.md'), 'utf8');
const quiet = process.argv.includes('--quiet');
const missing = [];

const scripts = join(root, 'scripts');
for (const name of readdirSync(scripts)) {
  const p = join(scripts, name);
  if (statSync(p).isDirectory()) {
    if (!tools.includes(`scripts/${name}/`) && !tools.includes(`${name}/`)) missing.push(`scripts/${name}/  (tools.md)`);
  } else if (/\.(mjs|sh|js)$/.test(name) && !tools.includes(name)) {
    missing.push(`scripts/${name}  (tools.md)`);
  }
}
const evalDir = join(root, 'design', 'eval');
for (const name of readdirSync(evalDir)) {
  const bare = name.replace(/\.md$/, '');
  if (!history.includes(bare)) missing.push(`design/eval/${name}  (history.md)`);
}

if (quiet) {
  if (missing.length) console.log(`Test catalogue: ${missing.length} tool or eval folder(s) not listed yet (node .claude/skills/test-apparatus/scripts/drift.mjs).`);
} else {
  console.log(missing.length ? `Not in the test catalogue yet (${missing.length}):\n  ${missing.join('\n  ')}` : 'Test catalogue: every script and eval folder is listed.');
}
