import fs from 'node:fs';
import {A,G,NONE,LABELS} from './base.mjs';
const SP='/tmp/claude-0/-home-user/2c3141b5-7a1b-56fe-8d8e-81709bc96c72/scratchpad/cardrecs/';
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const nm=a=>a.name||(a.text.split(/[:(,]/)[0]);
const order={High:0,Medium:1,Low:2};
const items=[];
G.forEach((g,gi)=>g[3].forEach(([i,c,w])=>items.push({i,c,w,ans:LABELS[gi]})));
NONE.forEach(([i,w])=>items.push({i,c:'Low',w,ans:null}));
const isSpace=x=>A[x.i].type==='space';
const sortf=(a,b)=>order[a.c]-order[b.c]||(a.ans?0:1)-(b.ans?0:1);
const newRow=x=>{const a=A[x.i];return `<li><details><summary><span class="conf ${x.c.toLowerCase()}">${x.c}</span><span class="t">${esc(nm(a))}</span><span class="k">${x.ans?'answers '+esc(x.ans):'answers nothing seen'}</span><span class="why">${esc(x.w)}</span></summary><div class="more"><p>“${esc(a.text)}”</p><p class="by">${esc(a.player)}, ${esc(a.game.replace('r3g','game ').replace('pilot','pilot '))}</p></div></details></li>`};
// changes to existing: [kind, conf, card, cardText, change, players, we]
const C=[
['Members','High','Spoilsport','8 any, worth 1. Round End: choose a contest; nobody wins it this round.','Its contest is chosen before the last placements, or using it costs its holder','4 players said they could do nothing about it','Bought in 4 games and decided something every time'],
['Members','High','Dabblers','5 any, worth 2, counts as 2 members. Counts as 2 wild members.','One plain meaning of "wild", printed; and a price that matches what it does to contests','Confused players in 5 games','Its holder won or tied Red at every round end it was held'],
['Members','Medium','Anchorites','3 white + 3 any, worth 1. Round End: if you have 5 or fewer members, +5 followers.','Pricier, or a condition a small cult has to give something up for','Players liked it: "far better than anything I bought"','Paid 15 for 6 resources in two 4-player games'],
['Members','Medium','Kidnappers','6 magenta + 4 any, worth 2, counts as 2 members. Round End: a rival you choose gives you one of their members.','Words that say the rival picks which member','2 players planned around picking the member','The rival always handed over a used-up card'],
['Members','Medium','Line Cutters','4 any, worth 1. You go first every round.','Smaller, so the last-place player keeps the first seat','"I was dead last on 9 and still placed second"','Broke the catch-up seat in two 4-player games'],
['Members','Medium','Copyist','2 green + 3 any, worth 1. Whenever you copy an action, +2 followers.','No pay for a copy that copies nothing','2 players in the 2-player game','Paid 16 to 18 for 5 resources, mostly with 2 or 3 players'],
['Members','Low','Last Callers','On Use, once per round: take the Goes Last token.','Players found it a near-lock on Went last, or useless on a last minion','3 players in 2 games','Seen in 2 games only'],
['Members','Low','Purifiers','On Use, once per game: discard one of your members. Each rival with more members than you discards one too.','Rarely has a target','2 players','Rivals with more members are uncommon when you hold it'],
['Spaces','High','Promote and Demote','Promote: +3 red. Swap any member for one costing up to 3 more, from another cult or the shop. Demote: +3 red. Swap any member for one costing up to 3 less, from another cult or the shop.','Keep them; give the target a way to reply to a swap in round III’s last placements','Most loved and most complained-of spaces','One leader lost about 30 followers to five late plays and answered one'],
['Spaces','High','Test Drive','Discard a shop member. Use its effect now. +1 blue.','Your call (Nov 13): probably a bit too good','Praised in 4 games as a favorite placement','The best single placement for three players in one game; from round I it once fired Purifiers against every rival'],
['Spaces','Medium','Crunch Time','+2 purple. Your next two turns come right after this one.','Copies of it should not give one player 4 or 5 turns in a row','4 players in 2 games','39 to 83 followers in one round III'],
['Spaces','Low','Makeover','+4 yellow. Then rearrange your resources into any colors.','The rearrange does nothing late, when buys take any color','4 players called it an extra click','Seen in 4 games'],
['Spaces','Low','Right Away','+2 purple in round I, +3 in round II, +4 in round III. Your next turn comes right after this one.','Does nothing on your last minion','3 players','Seen in 2 games'],
['Spaces','Low','Cash In','Turn all your white into followers. +1 white.','Barely beats buying followers; can hand back 1 white that needs a whole recruit','2 players','Seen in 2 games'],
['Spaces','Low','Markdown','Recruit a member from the discard pile now, paying 2 less. +3 blue.','Finds an empty discard pile late','2 players','Only with 2 players'],
['Cloaks','High','White Cloak','Whenever you buy followers, +2 white.','Smaller, to match the other cloaks','Players in 4 games ("a money printer")','Paid 20 to 24 white every game; the next best paid 10 to 14'],
['Cloaks','Medium','Silver Cloak','Whenever you gift silver, +2 silver.','It refills the silver its holder is trying to get rid of','4 players in 3 games','Picked last and paid the least'],
['Cloaks','Medium','Magenta Cloak','Whenever you steal, +2 magenta.','Pays 2 or 42 depending on steal members; makes Most resources one player’s','Players in 3 games','Paid 42 once (its owner won); 2 in another game'],
['Cloaks','Medium','Green Cloak','Whenever you copy an action or a member, +2 of its color (grey: any color).','Words that say "of the copied action’s color"; no pay for a copy of nothing','A new player expected green','That player could not afford the card planned for that turn'],
['Cloaks','Low','Blue Cloak','Whenever you discard a member, +1 of its color (grey: any color).','Words that say discarding shop members counts','1 player skipped it over this','When it was read right, it paid the most of any cloak in one game'],
['Contests','Medium','Most resources (Magenta)','All the resources you hold when the round ends, every color together.','A reason to hold resources at the end of round III','Players in 3 games','In round III one player held 3 to 14 against 0'],
['Contests','Medium','Fewest members','The fewest members when the round ends (0 counts).','Something that makes someone contest it','Players in 4 games','Won unchallenged at 0 or 1 members for +16 to +20 in 3 games'],
['Contests','Low','Fewest silver','The silver you hold when the round ends (0 counts; tied leaders each get half, rounded up).','Ends in all-way ties at 0; partly how players played','6 players','You said not to lean on it'],
];
const chRow=([k,c,card,txt,ch,pl,we])=>`<li><details><summary><span class="conf ${c.toLowerCase()}">${c}</span><span class="t">${esc(card)}</span><span class="why">${esc(ch)}</span></summary><div class="more"><p class="card"><b>${esc(card)}:</b> ${esc(txt)}</p><p><b>Players:</b> ${esc(pl)}.</p><p><b>What we saw:</b> ${esc(we)}.</p></div></details></li>`;
const list=xs=>`<ol>${xs.join('')}</ol>`;
const nS=items.filter(isSpace).sort(sortf), nM=items.filter(x=>!isSpace(x)).sort(sortf);
const chOf=k=>C.filter(x=>x[0]===k).sort((a,b)=>order[a[1]]-order[b[1]]).map(chRow);
const html=`<title>Card Recommendations</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap">
<style>
/* two parts (new, changes), each split by kind; one line per card, detail folded */
:root{--bg:#f6f5f2;--fg:#1d1b22;--mute:#6a6672;--line:#dedad3;--card:#fff;--hi:#2f7d4f;--md:#b07a12;--lo:#8a8494;--band:#ebe7f1;
--display:"Space Grotesk",system-ui,sans-serif;--body:Inter,system-ui,sans-serif}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#17161b;--fg:#ece9f1;--mute:#9a95a5;--line:#2e2c35;--card:#201e26;--hi:#5fc58a;--md:#e0b04a;--lo:#8f899c;--band:#26232e;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#17161b;--fg:#ece9f1;--mute:#9a95a5;--line:#2e2c35;--card:#201e26;--hi:#5fc58a;--md:#e0b04a;--lo:#8f899c;--band:#26232e;color-scheme:dark}
body{background:var(--bg);color:var(--fg);font-family:var(--body);font-size:15px;line-height:1.45}
.wrap{max-width:720px;margin:0 auto;padding-block:28px 48px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
h1,h2,h3{font-family:var(--display);text-wrap:balance;margin:0}
h1{font-size:1.6rem}
h2{font-size:1.3rem;margin-top:34px;padding:8px 12px;background:var(--band);border-radius:8px}
h3{font-size:.85rem;letter-spacing:.07em;text-transform:uppercase;color:var(--mute);margin-top:20px}
.lede,.note{color:var(--mute);margin:6px 0 0}
.key{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:.85rem;color:var(--mute);margin-top:12px}
nav{display:flex;gap:14px;margin-top:12px;font-weight:600}nav a{color:var(--fg)}
ol{list-style:none;margin:8px 0 0;padding:0;display:grid;gap:5px}
details{background:var(--card);border:1px solid var(--line);border-radius:8px}
summary{list-style:none;cursor:pointer;padding:8px 12px;display:grid;grid-template-columns:auto auto 1fr;gap:2px 8px;align-items:baseline}
summary::-webkit-details-marker{display:none}
summary:focus-visible{outline:2px solid var(--hi);outline-offset:2px;border-radius:8px}
.conf{font-size:.7rem;font-weight:600;letter-spacing:.05em;text-transform:uppercase;padding:1px 7px;border-radius:99px;border:1px solid currentColor;white-space:nowrap}
.conf.high{color:var(--hi)}.conf.medium{color:var(--md)}.conf.low{color:var(--lo)}
.t{font-weight:600}.k{font-size:.78rem;color:var(--mute)}
.why{grid-column:1/-1;font-size:.88rem;color:var(--mute);min-width:0}
.more{border-top:1px solid var(--line);padding:2px 12px 10px}.more p{margin:8px 0 0}
.by{font-size:.8rem;color:var(--mute)}
</style>
<div class="wrap">
<h1>Card recommendations from nine player games</h1>
<p class="lede">New cards are the players’ own ideas, word for word; nothing is ours. Changes to existing cards combine what players said with what we saw in the whole games. Tap a line for the details.</p>
<div class="key"><span><b class="conf high">High</b> answers a problem seen in 4+ games, plain to read</span><span><b class="conf medium">Medium</b> partly, or 2 to 3 games</span><span><b class="conf low">Low</b> weak need, repeats a card, or hard to track</span></div>
<nav><a href="#new">New</a><a href="#changes">Changes to existing</a></nav>
<h2 id="new">New</h2>
<h3>Spaces (${nS.length})</h3>${list(nS.map(newRow))}
<h3>Members (${nM.length})</h3>${list(nM.map(newRow))}
<h3>Cloaks</h3><p class="note">The players proposed no new cloaks.</p>
<h2 id="changes">Changes to existing</h2>
<h3>Spaces</h3>${list(chOf('Spaces'))}
<h3>Members</h3>${list(chOf('Members'))}
<h3>Cloaks</h3>${list(chOf('Cloaks'))}
<h3>Contests</h3>${list(chOf('Contests'))}
</div>`;
fs.writeFileSync(SP+'card-recs.html',html);console.log(nS.length,nM.length,C.length,html.length);
