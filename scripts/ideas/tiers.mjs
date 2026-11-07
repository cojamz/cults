#!/usr/bin/env node
// The results page Cory asked for (Nov 7: "a list of tested actions and ideas, in tiers of recommendation level, that
// combines qualitative and quantitative evaluation. and honestly the qualitative is more important"; "more than 3
// tiers"). Feel decides the tier; bot numbers sit beside it.
//   node scripts/ideas/tiers.mjs <out.html> [--json out.json]
// Reads: every /mnt/project-files/idea-pipeline/pool*/batch.json (card text), expert/judges.json (run judges.mjs report
// first), verdicts.json (one line per card from a reader who read every judge clause; may set the tier, and wins over
// the score, since a reader of the clauses sees what averages hide), the pool trials' report.json, live-findings.md.
import fs from 'node:fs';
import path from 'node:path';

const P = '/mnt/project-files/idea-pipeline';
const TRIALS = '/mnt/project-files/trials/trials';
const args = process.argv.slice(2);
const out = args[0];
const jsonOut = args.includes('--json') ? args[args.indexOf('--json') + 1] : null;
const read = f => JSON.parse(fs.readFileSync(f, 'utf8'));
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const f1 = x => x == null ? '–' : x.toFixed(1);
const pct = x => `${Math.round(100 * x)}%`;

const TIERS = [
  ['definite', 'Definite: put it in', 'Judges loved playing it, it made real choices, it tied colors together, and a table can track it.'],
  ['good', 'Good to consider', 'Clearly above the current cards on feel; a smaller question left (a number, a word).'],
  ['tweak', 'Pretty good, needs a tweak', 'The idea lands; judges named one thing to change.'],
  ['look', 'Worth a look', 'Some judges liked it, others shrugged; worth your read.'],
  ['long', 'Long shot', 'Thin or mixed feel, or too few games to say.'],
  ['cut', 'Cut', 'Judges found it flat, a feel-bad, or hard to track.'],
];

const judges = read(path.join(P, 'expert/judges.json'));
const verdicts = fs.existsSync(path.join(P, 'verdicts.json')) ? read(path.join(P, 'verdicts.json')) : {};
const live = judges.liveCards || [];
const below = (k, v) => v == null || !live.length ? 0 : live.filter(c => c[k] != null && c[k] < v).length / live.filter(c => c[k] != null).length;

const cards = [];
for (const d of fs.readdirSync(P).filter(d => /^pool\d+$/.test(d)).sort((a, b) => +a.slice(4) - +b.slice(4))) {
  const bf = path.join(P, d, 'batch.json');
  if (!fs.existsSync(bf)) continue;
  const batch = read(bf);
  const trial = batch.pool && fs.existsSync(path.join(TRIALS, batch.pool)) ? batch.pool : `${d}-hard400`;
  const rep = fs.existsSync(path.join(TRIALS, trial, 'report.json')) ? read(path.join(TRIALS, trial, 'report.json')) : null;
  for (const c of batch.cards) {
    const name = c.now.name;
    const j = judges.cards.find(x => x.name === name) || null;
    let bot = null;
    if (rep) {
      const x = c.kind === 'space' ? (rep.spaces || []).find(s => s.name.endsWith(': ' + name)) : (rep.members || []).find(m => m.name === name);
      if (x) bot = c.kind === 'space' ? `${x.verdict}: taken ${x.perGame.toFixed(1)} times a game, takers won ${pct(x.wr)}` : `${x.verdict}: bought in ${pct(x.taken)} of games it showed up, owners won ${pct(x.wr)}`;
    }
    const v = verdicts[name] || {};
    let score = null, tier;
    if (j && j.n >= 3) {
      score = 0.4 * below('fun', j.fun) + 0.35 * below('strategic', j.strategic) + 0.25 * below('interacts', j.interacts);
      tier = score >= 0.8 ? 'definite' : score >= 0.65 ? 'good' : score >= 0.5 ? 'tweak' : score >= 0.35 ? 'look' : score >= 0.2 ? 'long' : 'cut';
      if (j.clear != null && j.clear < 3 && tier !== 'cut') tier = TIERS[TIERS.findIndex(t => t[0] === tier) + 1][0];
    } else tier = 'long';
    if (v.tier) tier = v.tier;
    cards.push({ pool: d, ...c, name, judge: j, score, tier, line: v.line || '', change: v.change || '', bot, enough: !!(j && j.n >= 3) });
  }
}

const liveFind = fs.existsSync(path.join(P, 'live-findings.md')) ? fs.readFileSync(path.join(P, 'live-findings.md'), 'utf8') : '';
const DOT = { red: '#d9473f', green: '#3f9a52', magenta: '#c13f9a', blue: '#3f6fd0', purple: '#7d4fc0', silver: '#9aa3ad', yellow: '#d9a520', white: '#e8e2d0', grey: '#8a8a8a' };
const cardHtml = c => {
  const j = c.judge;
  const nums = j && j.n ? `<p class="nums">Judges (${j.n} ratings, ${j.games} game${j.games === 1 ? '' : 's'}): fun ${f1(j.fun)}, real choice ${f1(j.strategic)}, ties colors ${f1(j.interacts)}, easy to track ${f1(j.clear)}. Current cards in the same games: ${f1(judges.live.f)}, ${f1(judges.live.s)}, ${f1(judges.live.i)}, ${f1(judges.live.c)}.${j.split ? ' Judges split on it.' : ''}</p>` : '<p class="nums">Not rated by enough judges yet.</p>';
  return `<section class="card">
  <div class="slot"><span class="dot" style="background:${DOT[c.color] || '#888'}"></span>${esc(c.slot)}</div>
  <div class="now"><b>${esc(c.name)}</b> “${esc(c.now.text)}”${c.now.price ? ` <span class="price">${esc(c.now.price)}</span>` : ''}</div>
  ${c.line ? `<p class="feel">${esc(c.line)}</p>` : ''}
  ${c.change ? `<p class="change">Change: ${esc(c.change)}</p>` : ''}
  ${nums}
  <p class="bots">${c.bot ? `Bots (strongest level): ${esc(c.bot)}.` : 'Bot games: not run yet (feel comes first).'}</p>
</section>`;
};
const groups = TIERS.map(([k, title, sub]) => {
  const cs = cards.filter(c => c.tier === k).sort((a, b) => (b.score ?? -1) - (a.score ?? -1));
  return cs.length ? `<h2>${esc(title)} <span class="n">${cs.length}</span></h2><p class="sub">${esc(sub)}</p>${cs.map(cardHtml).join('')}` : '';
}).join('');
const liveHtml = liveFind ? `<h2>What judges said about the current game</h2><div class="live">${liveFind.split('\n').filter(l => l.trim() && !l.startsWith('#')).map(l => `<p>${esc(l.replace(/^- /, ''))}</p>`).join('')}</div>` : '';

fs.writeFileSync(out, `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Card Ideas Tested</title><style>
:root{--bg:#f7f4ec;--fg:#1f1c17;--mut:#6b6457;--card:#fffdf7;--line:#e2dccb;--acc:#7a4b12}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#17150f;--fg:#efe9db;--mut:#a59d8c;--card:#211e17;--line:#3a352a;--acc:#e0a95a}}
:root[data-theme="dark"]{--bg:#17150f;--fg:#efe9db;--mut:#a59d8c;--card:#211e17;--line:#3a352a;--acc:#e0a95a}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.45 system-ui,-apple-system,sans-serif}
main{max-width:680px;margin:0 auto;padding:16px}h1{font-size:22px;margin:8px 0 4px}h2{font-size:18px;margin:28px 0 2px;color:var(--acc)}
.n{font-size:14px;color:var(--mut);font-weight:400}.sub,.intro{color:var(--mut);font-size:14px;margin:2px 0 10px}
.card{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:12px 14px;margin:10px 0}
.slot{font-size:13px;color:var(--mut);display:flex;align-items:center;gap:6px}.dot{width:10px;height:10px;border-radius:50%;display:inline-block;border:1px solid var(--line)}
.now{margin:4px 0}.price{color:var(--mut);font-size:13px;white-space:nowrap}.feel{margin:6px 0}.change{margin:4px 0;font-weight:600}
.nums,.bots{font-size:13px;color:var(--mut);margin:4px 0}.live p{font-size:14px;margin:6px 0}
</style></head><body><main>
<h1>Card ideas, tested</h1>
<p class="intro">${cards.length} new cards, each played by AI judges in full games beside the current cards (judges didn't know which cards were new), rated for fun, real choice, how it ties colors together and how easy it is to track. Feel sets the tier; bot win rates are beside it, since costs can be tuned. Prices are fill-ins.</p>
${groups}${liveHtml}
</main></body></html>`);
if (jsonOut) fs.writeFileSync(jsonOut, JSON.stringify(cards.map(c => ({ name: c.name, pool: c.pool, tier: c.tier, score: c.score, judge: c.judge && { n: c.judge.n, fun: c.judge.fun, strategic: c.judge.strategic, interacts: c.judge.interacts, clear: c.judge.clear, split: c.judge.split }, bot: c.bot })), null, 1));
const count = {}; cards.forEach(c => { count[c.tier] = (count[c.tier] || 0) + 1; });
console.log(`${cards.length} cards: ${TIERS.map(t => `${t[0]} ${count[t[0]] || 0}`).join(', ')}`);
