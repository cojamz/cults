#!/usr/bin/env node
// Facts for planning a testing round: what changed between two commits, sized and sorted by kind, plus what the run
// log already answers. It recommends a depth; the thread writes the plan (SKILL.md) and owns the judgment.
//   node .claude/skills/plan-test-round/scripts/plan.mjs [--since=<sha>|live] [--to=HEAD] [--json]
// --since: the commit the last test round played (the balance report's "Build <sha>" line, or runs.md); default live.
// Reads cards at both commits through a throwaway worktree (node_modules linked), so nothing in your checkout moves.
import { execSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, symlinkSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repo = execSync('git rev-parse --show-toplevel', { cwd: here, encoding: 'utf8' }).trim();
const sh = (c, o = {}) => execSync(c, { cwd: repo, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64e6, ...o });
const arg = (k, d) => (process.argv.find(a => a.startsWith(`--${k}=`)) || '').split('=')[1] || d;
let since = arg('since', 'live');
const to = arg('to', 'HEAD');
if (since === 'live') since = JSON.parse(sh('git show origin/main:play/build.json')).commit;
const sinceSha = sh(`git rev-parse ${since}`).trim(), toSha = sh(`git rev-parse ${to}`).trim();

// 1. Files by area
const files = sh(`git diff --name-only ${sinceSha} ${toSha}`).split('\n').filter(Boolean);
const AREAS = [
  ['cards', f => f.startsWith('src/engine/v4/content/')],
  ['bots', f => /^src\/engine\/v4\/(bots|thinker|mind|preview)\.js$/.test(f)],
  ['rules engine', f => f.startsWith('src/engine/v4/') && !f.startsWith('src/engine/v4/content/')],
  ['screen', f => f.startsWith('src/v4/') || f.startsWith('e2e/v4/')],
  ['rulebook', f => f === 'design/rulebook.md' || f === 'src/v4/glossary.js'],
  ['tests', f => f.startsWith('src/test/')],
  ['test tools', f => f.startsWith('scripts/')],
];
const byArea = Object.fromEntries(AREAS.map(([a]) => [a, []]));
for (const f of files) { const hit = AREAS.find(([, t]) => t(f)); if (hit) byArea[hit[0]].push(f); }
const commits = Number(sh(`git rev-list --count ${sinceSha}..${toSha}`).trim());

// 2. Cards at both commits
function cardsAt(sha) {
  if (sha === sh('git rev-parse HEAD').trim()) return JSON.parse(sh(`node ${join(here, 'dump-cards.mjs')} ${repo}`));
  const dir = mkdtempSync(join(tmpdir(), 'plan-'));
  try {
    sh(`git worktree add --detach ${dir} ${sha}`);
    if (existsSync(join(repo, 'node_modules'))) symlinkSync(join(repo, 'node_modules'), join(dir, 'node_modules'));
    return JSON.parse(sh(`node ${join(here, 'dump-cards.mjs')} ${dir}`));
  } catch (e) { return { error: String(e.stderr || e.message).split('\n').slice(0, 3).join(' ') }; }
  finally { try { sh(`git worktree remove --force ${dir}`); } catch { rmSync(dir, { recursive: true, force: true }); } }
}
const A = cardsAt(sinceSha), B = cardsAt(toSha);
const diff = { newMembers: [], cutMembers: [], memberText: [], memberPrice: [], newSpaces: [], cutSpaces: [], spaceText: [] };
if (!A.error && !B.error) {
  for (const [id, b] of Object.entries(B.members)) {
    const a = A.members[id];
    if (!a) diff.newMembers.push(b);
    else {
      if (a.text !== b.text) diff.memberText.push({ ...b, was: a.text, wasName: a.name });
      else if (a.name !== b.name) diff.memberText.push({ ...b, was: a.text, wasName: a.name, nameOnly: true });
      if (a.s !== b.s || a.w !== b.w || a.f !== b.f) diff.memberPrice.push({ ...b, wasS: a.s, wasW: a.w, wasF: a.f });
    }
  }
  for (const [id, a] of Object.entries(A.members)) if (!B.members[id]) diff.cutMembers.push(a);
  for (const [id, b] of Object.entries(B.spaces)) {
    const a = A.spaces[id];
    if (!a) diff.newSpaces.push(b);
    else if (a.text !== b.text) diff.spaceText.push({ ...b, was: a.text });
  }
  for (const [id, a] of Object.entries(A.spaces)) if (!B.spaces[id]) diff.cutSpaces.push(a);
}

// 3. What the run log already answers
const runs = existsSync(join(repo, '.claude/skills/test-apparatus/runs.md')) ? readFileSync(join(repo, '.claude/skills/test-apparatus/runs.md'), 'utf8').split('\n').filter(l => l.startsWith('| 2')) : [];
const touched = [...diff.newMembers, ...diff.memberPrice, ...diff.memberText.filter(c => !c.nameOnly), ...diff.newSpaces, ...diff.spaceText].map(c => c.name);
const logged = [...new Set(touched)].map(n => [n, runs.filter(r => r.toLowerCase().includes(n.toLowerCase()))]).filter(([, r]) => r.length);

// 4. Depth
const effectCards = diff.newMembers.length + diff.newSpaces.length + diff.memberText.filter(c => !c.nameOnly).length + diff.spaceText.length;
const colors = new Set([...diff.newMembers, ...diff.memberPrice, ...diff.memberText, ...diff.newSpaces, ...diff.spaceText, ...diff.cutMembers, ...diff.cutSpaces].map(c => c.color));
let depth = 'light', why = 'no card, number or rule changes';
if (byArea.screen.length || byArea.rulebook.length) { depth = 'light'; why = 'screen or wording only'; }
if (diff.memberPrice.length) { depth = 'standard'; why = `${diff.memberPrice.length} price or worth change(s)`; }
if (effectCards) { depth = 'standard'; why = `${effectCards} new or changed card(s)`; }
if (byArea.bots.length && !effectCards) { depth = 'bots'; why = 'bot code changed'; }
if (effectCards > 4 || colors.size > 2 || byArea['rules engine'].length || diff.cutMembers.length + diff.cutSpaces.length > 4) {
  depth = 'full'; why = [effectCards > 4 && `${effectCards} new or changed cards`, colors.size > 2 && `${colors.size} colors touched`, byArea['rules engine'].length && 'rules engine changed', (diff.cutMembers.length + diff.cutSpaces.length) > 4 && `${diff.cutMembers.length + diff.cutSpaces.length} cards removed`].filter(Boolean).join(', ');
}

if (process.argv.includes('--json')) { console.log(JSON.stringify({ since: sinceSha, to: toSha, commits, byArea, diff, logged, depth, why }, null, 1)); process.exit(0); }
const price = c => `${c.s}+${c.w}${c.f != null ? `, worth ${c.f}` : ''}`;
const list = (title, arr, fmt) => { if (!arr.length) return; console.log(`\n${title} (${arr.length})`); for (const c of arr.slice(0, 40)) console.log('  ' + fmt(c)); if (arr.length > 40) console.log(`  … ${arr.length - 40} more (--json)`); };
console.log(`Testing round facts: ${sinceSha.slice(0, 8)} → ${toSha.slice(0, 8)}, ${commits} commits, ${files.length} files`);
console.log('Files by area: ' + Object.entries(byArea).map(([a, f]) => `${a} ${f.length}`).join(' · '));
if (A.error || B.error) console.log(`\nCould not read cards: ${A.error || B.error}`);
list('New members', diff.newMembers, c => `${c.color} ${c.name} [${price(c)}]: ${c.text}`);
list('Members with new effect text', diff.memberText.filter(c => !c.nameOnly), c => `${c.color} ${c.name}${c.wasName !== c.name ? ` (was ${c.wasName})` : ''}: ${c.text}`);
list('Members renamed only', diff.memberText.filter(c => c.nameOnly), c => `${c.wasName} → ${c.name}`);
list('Price or worth changes', diff.memberPrice, c => `${c.color} ${c.name}: ${c.wasS}+${c.wasW}${c.wasF != null ? ` worth ${c.wasF}` : ''} → ${price(c)}`);
list('Members gone', diff.cutMembers, c => `${c.color} ${c.name}`);
list('New spaces', diff.newSpaces, c => `${c.color} ${c.ring} ${c.name}: ${c.text}`);
list('Spaces with new text', diff.spaceText, c => `${c.color} ${c.ring} ${c.name}: ${c.text}`);
list('Spaces gone', diff.cutSpaces, c => `${c.color} ${c.name}`);
console.log(`\nColors touched (code ids: thieves = Magenta, market = Blue, trading = White, echo = Green): ${[...colors].join(', ') || 'none'}`);
if (logged.length) { console.log('\nAlready in the run log (check before re-running):'); for (const [n, r] of logged) console.log(`  ${n}: ${r.length} row(s), last: ${r.at(-1).slice(0, 160)}`); }
console.log(`\nSuggested depth: ${depth.toUpperCase()} (${why}). Read SKILL.md "Depth" for what that runs; change it with a reason.`);
console.log('Text-changed cards may be wording only: check the effect code (git diff on the card file) before treating them as rule changes.');
