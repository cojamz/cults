#!/usr/bin/env node
// Renders Cor's "Workstreams" tracker page from the thread board (/mnt/project-files/status/board.md, which every
// thread updates with scripts/status.mjs) and main's play/build.json. The work desk republishes it as the same
// Artifact after every progress report or ship. Usage: node scripts/desk/tracker.mjs <out.html>
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
const out = process.argv[2] || 'workstreams.html';
const board = fs.readFileSync('/mnt/project-files/status/board.md', 'utf8');
let live = {};
try { execFileSync('git', ['fetch', '-q', 'origin', 'main']); live = JSON.parse(execFileSync('git', ['show', 'origin/main:play/build.json'], { encoding: 'utf8' })); } catch {}
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const rows = [];
for (const line of board.split('\n')) {
  if (!line.startsWith('- ')) continue;
  const parts = line.slice(2).split(' · ').map((s) => s.trim());
  const [title, state, doing, ...rest] = parts;
  const get = (k) => (rest.find((p) => p.startsWith(k + ':')) || '').slice(k.length + 1).trim();
  const updated = rest[rest.length - 1];
  const quiet = (state.match(/quiet (\d+) min/) || [])[1];
  rows.push({ title, state: state.replace(/\s*\(quiet.*\)/, ''), quiet, doing, next: get('next'), eta: get('ETA'), cory: get('needs Cory'), updated });
}
const order = { working: 0, waiting: 1, blocked: 1, done: 3 };
const cory = rows.filter((r) => r.cory && r.state !== 'done');
const active = rows.filter((r) => !r.cory && r.state !== 'done').sort((a, b) => (order[a.state] ?? 2) - (order[b.state] ?? 2));
const done = rows.filter((r) => r.state === 'done');
const now = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', weekday: 'short', hour: 'numeric', minute: '2-digit' });
const dash = (s) => (!s || s === '-' ? '<span class="muted">none</span>' : esc(s));
const card = (r, kind) => `<li class="row ${kind}">
  <div class="head"><span class="name">${esc(r.title)}</span><span class="pill ${kind}">${kind === 'cory' ? 'Needs you' : kind === 'done' ? 'Done' : r.state === 'working' ? 'Working' : 'Waiting'}</span></div>
  ${kind === 'cory' ? `<p class="ask">${esc(r.cory)}</p>` : ''}
  <dl><div><dt>Now</dt><dd>${dash(r.doing)}</dd></div>${kind === 'done' ? '' : `<div><dt>Next</dt><dd>${dash(r.next)}</dd></div><div><dt>ETA</dt><dd class="eta">${dash(r.eta)}</dd></div>`}</dl>
  <p class="stamp">Last update ${esc(r.updated)}${r.quiet ? ` · <span class="quiet">quiet ${r.quiet} min</span>` : ''}</p>
</li>`;
const html = `<title>Cults Workstreams</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&family=IBM+Plex+Mono:wght@500&display=swap">
<style>
/* Layout: one column of workstream rows, grouped: needs you, in progress, done. */
:root{--bg:#f6f5f8;--panel:#ffffff;--fg:#1d1b22;--muted:#6c6876;--line:#e3e0e8;--accent:#6b3fa0;--warn:#b5520f;--warnbg:#fdf0e6;--ok:#2f7a4b;--okbg:#e8f4ec;--busy:#2a5fa8;--busybg:#e8f0fb;
--sans:"IBM Plex Sans",system-ui,sans-serif;--mono:"IBM Plex Mono",ui-monospace,monospace}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#16141b;--panel:#1f1c26;--fg:#ece9f1;--muted:#a19cab;--line:#332f3d;--accent:#b892e8;--warn:#f0a066;--warnbg:#3a2516;--ok:#7fcf9c;--okbg:#18301f;--busy:#8fb6f0;--busybg:#182538;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#16141b;--panel:#1f1c26;--fg:#ece9f1;--muted:#a19cab;--line:#332f3d;--accent:#b892e8;--warn:#f0a066;--warnbg:#3a2516;--ok:#7fcf9c;--okbg:#18301f;--busy:#8fb6f0;--busybg:#182538;color-scheme:dark}
body{background:var(--bg);color:var(--fg);font:15px/1.45 var(--sans);padding-block:20px 40px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
main{max-width:860px;margin:0 auto;display:grid;gap:22px}
header{display:flex;flex-wrap:wrap;gap:8px 20px;align-items:baseline;justify-content:space-between}
h1{font-size:22px;margin:0;text-wrap:balance}
.live{font:500 13px var(--mono);color:var(--muted)} .live b{color:var(--accent)}
h2{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin:0 0 8px}
ul{list-style:none;margin:0;padding:0;display:grid;gap:10px}
.row{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:12px 14px;display:grid;gap:6px;min-width:0}
.row.cory{border-left:4px solid var(--warn)}
.head{display:flex;gap:10px;justify-content:space-between;align-items:center}
.name{font-weight:600}
.pill{font:500 11px var(--mono);padding:2px 8px;border-radius:99px;white-space:nowrap}
.pill.cory{background:var(--warnbg);color:var(--warn)} .pill.active{background:var(--busybg);color:var(--busy)} .pill.done{background:var(--okbg);color:var(--ok)}
.ask{margin:0;font-weight:600;color:var(--warn)}
dl{margin:0;display:grid;gap:3px} dl div{display:grid;grid-template-columns:44px 1fr;gap:8px} dt{color:var(--muted);font-size:12px;padding-top:2px} dd{margin:0;min-width:0;overflow-wrap:anywhere}
.eta{font-family:var(--mono);font-size:13px}
.stamp{margin:0;font-size:12px;color:var(--muted)} .quiet{color:var(--warn)}
.muted{color:var(--muted)}
details summary{cursor:pointer;color:var(--muted);font-size:13px}
</style>
<main>
<header><h1>Cults workstreams</h1><span class="live">Live game <b>${esc(live.version || '?')}</b> · updated ${esc(now)} Eastern</span></header>
<section><h2>Needs you (${cory.length})</h2><ul>${cory.map((r) => card(r, 'cory')).join('') || '<li class="muted">Nothing waiting on you.</li>'}</ul></section>
<section><h2>In progress (${active.length})</h2><ul>${active.map((r) => card(r, 'active')).join('')}</ul></section>
<section><details><summary>Done (${done.length})</summary><ul style="margin-top:10px">${done.map((r) => card(r, 'done')).join('')}</ul></details></section>
</main>`;
fs.writeFileSync(out, html);
console.log(`wrote ${out}: ${cory.length} need Cor, ${active.length} in progress, ${done.length} done; live ${live.version}`);
