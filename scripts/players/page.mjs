#!/usr/bin/env node
// One finished player-agents game as a phone-friendly page: who played, how it ended, each player's debrief, then
// every move with the player's reason and feel note, round notes, and every card in the game.
//   node scripts/players/page.mjs <game dir> <out.html>
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const [dirArg, outArg] = process.argv.slice(2);
const DIR = path.resolve(dirArg);
const rd = n => fs.readFileSync(path.join(DIR, n), 'utf8');
const meta = JSON.parse(rd('meta.json'));
const players = JSON.parse(rd('players.json'));
const data = JSON.parse(execFileSync('node', [path.join(ROOT, 'scripts/v4-expert.mjs'), 'data', DIR], { cwd: ROOT, encoding: 'utf8' }));
const evs = rd('events.jsonl').split('\n').filter(Boolean).map(l => JSON.parse(l));
const calls = rd('agents.jsonl').split('\n').filter(Boolean).map(l => JSON.parse(l));
const cost = calls.reduce((a, c) => a + (c.cost || 0), 0);
const mins = Math.round((Date.parse(calls.at(-1).t) - Date.parse(calls[0].t)) / 60000);
const ROMAN = ['Setup', 'Round I', 'Round II', 'Round III'];
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const names = meta.names;
const kindWord = i => (players.kinds[i] === 'exp' ? 'experienced' : 'new');
const COLOR = { yellow: 'Yellow', thieves: 'Magenta', trading: 'White', purple: 'Purple', red: 'Red', silver: 'Silver', market: 'Market', echo: 'Green' };
const debrief = n => { try { return JSON.parse(rd(`debrief-${n}.json`)); } catch { return null; } };
const modelWord = /opus/i.test(players.model) ? 'Opus 5.5' : /sonnet/i.test(players.model) ? 'Sonnet' : players.model;

// cards.md -> simple html
const cardsHtml = rd('cards.md').split('\n').map(l => {
  if (l.startsWith('### ')) return `<h4>${esc(l.slice(4))}</h4>`;
  if (l.startsWith('## ')) return `<h3>${esc(l.slice(3))}</h3>`;
  if (l.startsWith('# ')) return '';
  if (l.startsWith('- ')) return `<p class="card">${esc(l.slice(2))}</p>`;
  return l.trim() ? `<p class="small">${esc(l)}</p>` : '';
}).join('\n');

const order = data.ranking;
const finals = order.map((id, place) => {
  const f = data.final[id];
  return `<tr><td>${place + 1}</td><td><b>${esc(f.name)}</b> <span class="tag ${players.kinds[id]}">${kindWord(id)}</span></td><td class="num">${f.followers}</td><td class="num">${f.members}</td><td class="num">${f.bought}</td><td class="num">${f.contest}</td></tr>`;
}).join('');

const debriefs = order.map(id => {
  const n = names[id], d = debrief(n);
  if (!d) return '';
  const list = (h, xs) => (xs?.length ? `<h4>${h}</h4><ul>${xs.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '');
  const rounds = evs.filter(e => e.type === 'diary' && e.seat === id).map(e => `<p class="note"><b>After ${ROMAN[e.round]}:</b> ${esc(e.text)}</p>`).join('');
  return `<details class="debrief" ${id === order[0] ? 'open' : ''}><summary><b>${esc(n)}</b> <span class="tag ${players.kinds[id]}">${kindWord(id)}</span> · ${data.final[id].followers} followers</summary>
  <p>${esc(d.result)}</p>${list('Felt good', d.good)}${list('Felt bad or pointless', d.bad)}${list('Wants looked at', d.change)}${d.again ? `<h4>Play again?</h4><p>${esc(d.again)}</p>` : ''}
  <h4>Round notes</h4>${rounds}</details>`;
}).join('\n');

// the play, round by round
let html = '', round = -1;
const feelByMove = new Map();
for (let i = 0; i < evs.length; i++) if (evs[i].type === 'feel') { for (let j = i - 1; j >= 0; j--) if (evs[j].type === 'move' && evs[j].seat === evs[i].seat) { feelByMove.set(j, evs[i].text); break; } }
evs.forEach((e, i) => {
  if (e.type === 'move') {
    if (e.round !== round) { if (round !== -1) html += '</section>'; round = e.round; html += `<section><h3 class="round">${ROMAN[round]}</h3>`; }
    const feel = feelByMove.get(i);
    const only = e.think === '(only option)';
    html += `<div class="move ${only ? 'quiet' : ''}"><div class="who">${esc(names[e.seat])} <span class="tag ${players.kinds[e.seat]}">${kindWord(e.seat)}</span></div><div class="did">${esc(e.label)}</div>${only ? '' : `<div class="why">${esc(e.think)}</div>`}${feel ? `<div class="feel">${esc(feel)}</div>` : ''}</div>`;
  } else if (e.type === 'log' && /round|contest|scor|wins|tie/i.test(e.text) && round !== -1) {
    html += `<div class="log">${esc(e.text)}</div>`;
  } else if (e.type === 'diary') {
    html += `<div class="diary"><b>${esc(names[e.seat])}'s notes after ${ROMAN[e.round]}:</b> ${esc(e.text)}</div>`;
  }
});
html += '</section>';

const page = `<title>Player Agents ${path.basename(DIR)}</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Space+Grotesk:wght@500;700&display=swap">
<style>
/* one reading column: summary, debriefs, then the full play log */
:root { --bg:#f6f5f2; --fg:#1d1c1a; --muted:#6c675f; --line:#dedad2; --card:#ffffff; --exp:#2f5d8a; --new:#8a5a2f; --feel:#7a2f6b; --feelbg:#f6eef4;
  --body:'Inter',system-ui,sans-serif; --head:'Space Grotesk','Inter',system-ui,sans-serif; }
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { --bg:#161513; --fg:#ece9e3; --muted:#a39d93; --line:#34312c; --card:#201f1c; --exp:#8db8e3; --new:#e0b07f; --feel:#e3a3d4; --feelbg:#2a1f27; color-scheme:dark } }
:root[data-theme="dark"] { --bg:#161513; --fg:#ece9e3; --muted:#a39d93; --line:#34312c; --card:#201f1c; --exp:#8db8e3; --new:#e0b07f; --feel:#e3a3d4; --feelbg:#2a1f27; color-scheme:dark }
body { background:var(--bg); color:var(--fg); font:15px/1.5 var(--body); padding-left:max(16px, env(safe-area-inset-left,0px)); padding-right:max(16px, env(safe-area-inset-right,0px)); padding-block:20px 40px; }
main { max-width:720px; margin:0 auto; display:flex; flex-direction:column; gap:22px; }
h1,h2,h3 { font-family:var(--head); text-wrap:balance; margin:0; }
h1 { font-size:26px; } h2 { font-size:19px; margin-bottom:8px; } h3 { font-size:16px; } h4 { font-size:13px; text-transform:uppercase; letter-spacing:.05em; color:var(--muted); margin:14px 0 4px; }
p { margin:6px 0; } ul { margin:4px 0; padding-left:20px; } li { margin:4px 0; }
.lede { color:var(--muted); }
.tbl { overflow-x:auto; } table { border-collapse:collapse; width:100%; font-variant-numeric:tabular-nums; }
th,td { text-align:left; padding:6px 8px; border-bottom:1px solid var(--line); font-size:14px; } th { color:var(--muted); font-weight:600; font-size:12px; } .num { text-align:right; }
.tag { font-size:11px; font-weight:600; padding:1px 6px; border-radius:8px; border:1px solid currentColor; white-space:nowrap; }
.tag.exp { color:var(--exp); } .tag.new { color:var(--new); }
details { background:var(--card); border:1px solid var(--line); border-radius:8px; padding:10px 12px; }
details + details { margin-top:8px; } summary { cursor:pointer; }
.round { position:sticky; top:env(safe-area-inset-top,0px); background:var(--bg); padding:8px 0; border-bottom:2px solid var(--fg); margin-top:18px; z-index:1; }
.move { padding:10px 0; border-bottom:1px solid var(--line); display:flex; flex-direction:column; gap:3px; min-width:0; }
.move.quiet { opacity:.6; }
.who { font-weight:700; font-size:13px; } .did { font-weight:600; } .why { color:var(--fg); }
.feel { background:var(--feelbg); color:var(--feel); border-radius:6px; padding:4px 8px; font-size:14px; }
.feel::before { content:"Felt: "; font-weight:700; }
.log { font-size:13px; color:var(--muted); padding:6px 0; }
.diary, .note { background:var(--card); border:1px solid var(--line); border-radius:6px; padding:8px 10px; margin:8px 0; font-size:14px; }
.card { font-size:14px; margin:4px 0; } .small { font-size:13px; color:var(--muted); }
h4 + .card { margin-top:2px; }
</style>
<main>
<header>
<h1>Player agents: ${path.basename(DIR)}</h1>
<p class="lede">Four AI players (${modelWord}) played one real game of today's Cults: 10-card deck, By color contests, ${data.table.map(q => COLOR[q] || q).join(', ')}. Every move was picked from the game's own list of legal moves. Experienced players had the rules, the cards, the strategy primer and the skill ideas from Nov 12; new players had only the rules and the cards. ${data.final.length} players, ${evs.filter(e => e.type === 'move').length} decisions, ${mins} minutes.</p>
<p class="lede">What the players say about cards is their own read, not checked yet.</p>
</header>
<section><h2>How it ended</h2><div class="tbl"><table><tr><th>#</th><th>Player</th><th class="num">Followers</th><th class="num">Members</th><th class="num">Followers bought</th><th class="num">From contests</th></tr>${finals}</table></div></section>
<section><h2>After the game</h2>${debriefs}</section>
<section><h2>The whole game</h2><p class="lede">Each move with the player's reason, and what it felt like when they said so.</p>${html}</section>
<section><h2>Every card in this game</h2><details><summary>Spaces, cloaks and members, with what they do</summary>${cardsHtml}</details></section>
</main>`;
fs.writeFileSync(outArg, page);
console.log(`wrote ${outArg} (${Math.round(page.length / 1024)} KB)`);
