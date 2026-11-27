#!/usr/bin/env node
// Cor's "Workstreams" tracker: three columns only (Cor, Nov 3 9:43pm: "I just want the general workstream, if its
// blocked on me, and ETA til done"). Data: design/workstreams.json, [name, "Yes"|"No", eta]; the desk edits it on
// every report or ship and republishes. Usage: node scripts/desk/tracker.mjs <out.html>
import fs from 'node:fs';
const out = process.argv[2] || 'workstreams.html';
const rows = JSON.parse(fs.readFileSync(new URL('../../design/workstreams.json', import.meta.url), 'utf8'));
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const now = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit' });
const sorted = [...rows].sort((a, b) => (a[1] === 'Yes' ? 0 : 1) - (b[1] === 'Yes' ? 0 : 1));
fs.writeFileSync(out, `<title>Cults Workstreams</title>
<meta name="claude:viewport-fit-sides" content="cover">
<style>
:root{--bg:#f7f6f9;--fg:#1d1b22;--muted:#6c6876;--line:#e3e0e8;--yes:#b5520f;--yesbg:#fdf0e6}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#16141b;--fg:#ece9f1;--muted:#a19cab;--line:#332f3d;--yes:#f0a066;--yesbg:#3a2516;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#16141b;--fg:#ece9f1;--muted:#a19cab;--line:#332f3d;--yes:#f0a066;--yesbg:#3a2516;color-scheme:dark}
body{background:var(--bg);color:var(--fg);font:15px/1.4 system-ui,sans-serif;padding-block:20px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
.wrap{max-width:720px;margin:0 auto;overflow-x:auto}
table{width:100%;border-collapse:collapse}
th{text-align:left;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);padding:6px 10px;border-bottom:2px solid var(--line)}
td{padding:10px;border-bottom:1px solid var(--line);vertical-align:top}
td.yes{color:var(--yes);font-weight:600} tr.yes td{background:var(--yesbg)}
p{color:var(--muted);font-size:12px;margin:10px 0 0}
</style>
<div class="wrap"><table><thead><tr><th>Workstream</th><th>Blocked on you</th><th>ETA until done</th></tr></thead><tbody>
${sorted.map(([n, b, e]) => `<tr class="${b === 'Yes' ? 'yes' : ''}"><td>${esc(n)}</td><td class="${b === 'Yes' ? 'yes' : ''}">${esc(b)}</td><td>${esc(e)}</td></tr>`).join('\n')}
</tbody></table><p>Updated ${esc(now)} Eastern</p></div>`);
console.log(`wrote ${out}: ${rows.length} rows`);
