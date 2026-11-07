// Phone page of idea-pipeline results: one card per idea, Was / Now, the turn a player would retell, what the bots
// showed, and the pick. Reads a batch file (scripts/ideas/README.md) and each idea's trial report.json.
// Usage: node scripts/ideas/page.mjs <batch.json> <out.html>
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const TRIALS = process.env.TRIALS_DIR || '/mnt/project-files/trials/trials';
const [batchF, outF] = process.argv.slice(2);
const batch = JSON.parse(readFileSync(batchF, 'utf8'));
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pct = x => `${Math.round(100 * x)}%`;
const DOT = { red: '#d9473f', green: '#3f9a52', magenta: '#c13f9a', blue: '#3f6fd0', purple: '#7d4fc0', silver: '#9aa3ad', yellow: '#d9a520', white: '#e8e2d0', grey: '#8a8a8a' };

function bots(c) {
  if (!c.trial) return '';
  const f = join(TRIALS, c.trial, 'report.json');
  if (!existsSync(f)) return `<p class="bots">Bot games still running.</p>`;
  const r = JSON.parse(readFileSync(f, 'utf8'));
  if (c.kind === 'space') {
    const s = (r.spaces || []).find(x => x.n.endsWith(': ' + c.now.name));
    if (!s) return `<p class="bots">No bot numbers for this space.</p>`;
    const a = s.trial, b = s.base;
    return `<p class="bots"><b>${r.games} paired games, strongest bots.</b> Taken ${a.perGame.toFixed(1)} times a game, takers won ${pct(a.wr)}` +
      (b ? `. ${esc(c.was.name)}: ${b.perGame.toFixed(1)} a game, takers won ${pct(b.wr)}` : '') + `. Even is 25%.</p>`;
  }
  const p = (r.pairs || []).find(x => x.n === c.now.name);
  if (!p) return `<p class="bots">No bot numbers for this card.</p>`;
  const a = p.trial, b = p.base;
  return `<p class="bots"><b>${r.games} paired games, strongest bots.</b> Bought in ${pct(a.taken)} of games it showed up, owners won ${pct(a.wr)} (${a.own} owners)` +
    (b ? `. ${esc(c.was.name)}: bought ${pct(b.taken)}, owners won ${pct(b.wr)}` : '') + `. Even is 25%.</p>`;
}

const cards = batch.cards.map((c, i) => `
<section class="card">
  <div class="slot"><span class="dot" style="background:${DOT[c.color] || '#888'}"></span>${esc(c.slot)}</div>
  <div class="was"><span class="lab">Was</span> <b>${esc(c.was.name)}</b> “${esc(c.was.text)}”</div>
  <div class="now"><span class="lab">Now</span> <b>${esc(c.now.name)}</b> “${esc(c.now.text)}”${c.now.price ? ` <span class="price">${esc(c.now.price)}</span>` : ''}</div>
  ${c.moment ? `<p class="moment">${esc(c.moment)}</p>` : ''}
  ${c.ties ? `<p class="ties">${esc(c.ties)}</p>` : ''}
  ${bots(c)}
  ${c.pick ? `<p class="pick">${i + 1}. ${esc(c.pick)}</p>` : ''}
</section>`).join('');

writeFileSync(outF, `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(batch.title)}</title><style>
:root{--bg:#f7f4ec;--fg:#1f1c17;--mut:#6b6457;--card:#fffdf7;--line:#e2dccb;--acc:#7a4b12}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#17150f;--fg:#efe9db;--mut:#a59d8c;--card:#211e17;--line:#3a352a;--acc:#e0a95a}}
:root[data-theme="dark"]{--bg:#17150f;--fg:#efe9db;--mut:#a59d8c;--card:#211e17;--line:#3a352a;--acc:#e0a95a}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.45 system-ui,-apple-system,sans-serif}
main{max-width:560px;margin:0 auto;padding:16px}h1{font-size:20px;margin:4px 0 4px}.sub{color:var(--mut);margin:0 0 16px;font-size:14px}
.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px;margin:0 0 14px}
.slot{font-size:13px;color:var(--mut);text-transform:uppercase;letter-spacing:.04em;margin-bottom:8px;display:flex;align-items:center;gap:8px}
.dot{width:12px;height:12px;border-radius:50%;display:inline-block;border:1px solid var(--line)}
.was{color:var(--mut);text-decoration:line-through;text-decoration-color:var(--line);margin-bottom:6px}
.now{font-size:17px;margin-bottom:8px}.lab{font-size:12px;font-weight:700;color:var(--acc);text-decoration:none;display:inline-block;margin-right:4px}
.price{font-size:13px;color:var(--mut);white-space:nowrap}.moment{margin:8px 0}.ties,.bots{color:var(--mut);font-size:14px;margin:6px 0}
.pick{font-weight:700;margin:8px 0 0}
</style></head><body><main><h1>${esc(batch.title)}</h1><p class="sub">${esc(batch.sub || '')}</p>${cards}</main></body></html>`);
console.log(`Wrote ${outF} (${batch.cards.length} cards)`);
