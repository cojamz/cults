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
['Spaces','High','Promote and Demote','Promote: +3 red. Swap any member for one costing up to 3 more, from another cult or the shop. Demote: +3 red. Swap any member for one costing up to 3 less, from another cult or the shop.','Keep them; stop round III’s last placement from being a free hit on the leader, without rivals acting on your turn','Most loved and most complained-of spaces','One leader lost about 30 followers to five late plays and answered one'],
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
const CMAP={"Spoilsport": "Grey", "Dabblers": "Grey", "Anchorites": "White", "Kidnappers": "Magenta", "Line Cutters": "Grey", "Copyist": "Green", "Last Callers": "Purple", "Purifiers": "Grey", "Promote and Demote": "Red", "Test Drive": "Blue", "Crunch Time": "Purple", "Makeover": "Yellow", "Right Away": "Purple", "Cash In": "White", "Markdown": "Blue", "White Cloak": "White", "Silver Cloak": "Silver", "Magenta Cloak": "Magenta", "Green Cloak": "Green", "Blue Cloak": "Blue", "Most resources (Magenta)": "Magenta", "Fewest members": "White", "Fewest silver": "Silver"};
const VAGUE=new Set([11,82,84,85,72,37,54,95,27]);
const CUTWHY={27:'You act during another player\u2019s round-end ability',85:'Impossible: who leads a contest is counted from what players hold',54:'Unpriced: no amount of silver',95:'Every player acts at round end, and On Use gets a second timing',11:'Vague: changes counts in a way a table reads twice',82:'Unpriced: no number of followers',84:'Unpriced: no number of followers',72:'A screen feature, not a card',37:'Changes two contests on one card'};
const PRUNE=new Set([...VAGUE,4,56,88,19,75,76,71,29,65,62,38,40]);
const COLORS=['Red','Yellow','Green','Blue','Purple','Magenta','White','Silver','Grey'];
const colorOf=a=>{const m=a.text.match(/\b(Red|Blue|Green|Magenta|Purple|White|Yellow|Silver|grey)\b/i);return m?m[1][0].toUpperCase()+m[1].slice(1).toLowerCase():'None'};
const chRow=([k,c,card,txt,ch,pl,we])=>`<li><details><summary><span class="conf ${c.toLowerCase()}">${c}</span><span class="t">${esc(card)}</span><span class="k">${k==='Cloaks'?'cloak':k==='Contests'?'contest':k==='Spaces'?'space':'member'}</span><span class="why">${esc(ch)}</span></summary><div class="more"><p class="card"><b>${esc(card)}:</b> ${esc(txt)}</p><p><b>Players:</b> ${esc(pl)}.</p><p><b>What we saw:</b> ${esc(we)}.</p></div></details></li>`;
const newRow2=(x,cutWhy)=>{const a=A[x.i];return `<li><details><summary><span class="conf ${x.c.toLowerCase()}">${cutWhy?'Cut':x.c}</span><span class="t">${esc(nm(a))}</span><span class="k">${a.type==='space'?'space':'member'} \u00b7 ${esc(a.player)}</span><span class="why">\u201c${esc(a.text.replace(/^[^:]*:\s*/,''))}\u201d</span></summary><div class="more"><p><b>${cutWhy?'Why cut':'Our read'}:</b> ${esc(cutWhy||x.w)}${x.ans&&!cutWhy?' (answers '+esc(x.ans)+')':''}.</p><p class="by">${esc(a.player)}, ${esc(a.game.replace('r3g','game ').replace('pilot','pilot '))}</p></div></details></li>`};
const kept=items.filter(x=>!PRUNE.has(x.i)), cut=items.filter(x=>PRUNE.has(x.i));
const block=(col,label)=>{const nw=kept.filter(x=>colorOf(A[x.i])===col&&x.c!=='Low').sort(sortf);const chs=C.filter(x=>CMAP[x[2]]===col).sort((a,b)=>order[a[1]]-order[b[1]]);
 if(!nw.length&&!chs.length) return '';
 return `<section id="${col.toLowerCase()}"><h2>${label}</h2>${chs.length?`<h3>Changes to existing (${chs.length})</h3><ol>${chs.map(chRow).join('')}</ol>`:''}${nw.length?`<h3>New, from the players (${nw.length})</h3><ol>${nw.map(x=>newRow2(x)).join('')}</ol>`:`<p class="note">No strong new ideas from the players.</p>`}</section>`};
const sections=COLORS.map(c=>block(c,c)).join('')+block('None','No color named');
const nav=[...COLORS,'None'].map(c=>`<a href="#${c.toLowerCase()}">${c==='None'?'No color':c}</a>`).join('');
const lows=kept.filter(x=>x.c==='Low').sort(sortf);
const prunedHtml=`<section><h2>Set aside</h2><details class="fold"><summary><span class="t">Low-rated player ideas (${lows.length})</span><span class="why">Weak need, repeats a card, or a table can\u2019t track it.</span></summary><ol>${lows.map(x=>newRow2(x)).join('')}</ol></details><details class="fold"><summary><span class="t">Cut (${cut.length})</span><span class="why">Impossible, unpriced, or a rival has to act on your turn.</span></summary><ol>${cut.map(x=>newRow2(x,CUTWHY[x.i]||'A rival has to act on your turn')).join('')}</ol></details></section>`;
const css=fs.readFileSync(SP+'card-recs.html','utf8').match(/<style>[\s\S]*?<\/style>/)[0].replace('nav{display:flex;gap:14px;','details.fold{margin-top:8px}details.fold>ol{padding:0 8px 8px}nav{display:flex;flex-wrap:wrap;gap:8px 14px;');
const html2=`<title>Card Recommendations by Color</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap">
${css}
<div class="wrap">
<h1>Card recommendations by color</h1>
<p class="lede">Each color lists changes to its existing cards first, then the players’ new ideas (their words, none of ours). Only ideas rated high or medium are shown; low-rated and cut ideas are folded at the end. Tap a line for the details.</p>
<div class="key"><span><b class="conf high">High</b> answers a problem seen in 4+ games, plain to read</span><span><b class="conf medium">Medium</b> partly, or 2 to 3 games</span><span><b class="conf low">Low</b> weak need, repeats a card, or hard to track</span></div>
<nav>${nav}</nav>
${sections}${prunedHtml}
</div>`;
fs.writeFileSync(SP+'card-recs-by-color.html',html2);
const cnt={};kept.forEach(x=>{const c=colorOf(A[x.i]);cnt[c]=(cnt[c]||0)+1});console.log(kept.filter(x=>x.c!=='Low').length,'shown','cut',cut.length,'changes',C.length,html2.length);
