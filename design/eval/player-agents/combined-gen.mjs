import fs from 'node:fs';
const T = {
  'Demote':'+3 red. Swap any member for one costing up to 3 less, from another cult or the shop.',
  'Promote':'+3 red. Swap any member for one costing up to 3 more, from another cult or the shop.',
  'Mutineers':'6 any. On Use, once per game: take a member from a rival with more members than you.',
  'Kidnappers':'6 magenta + 4 any, worth 2, counts as 2 members. Round End: a rival you choose gives you one of their members.',
  'Spoilsport':'8 any, worth 1. Round End: choose a contest; nobody wins it this round.',
  'Dabblers':'5 any, worth 2, counts as 2 members. Counts as 2 wild members.',
  'Red contest':'Most members of one color: your biggest group of members of one color when the round ends, grey members included (each card counts 1).',
  'Buying followers':'1, 5 or 10 resources of any colors for that many followers, one per recruit.',
  'White Cloak':'Whenever you buy followers, +2 white.',
  'Copyist':'2 green + 3 any, worth 1. Whenever you copy an action, +2 followers.',
  'Green Cloak':'Whenever you copy an action or a member, +2 of its color.',
  'Crunch Time':'+2 purple. Your next two turns come right after this one.',
  'Anchorites':'3 white + 3 any, worth 1. Round End: if you have 5 or fewer members, +5 followers.',
  'Line Cutters':'4 any, worth 1. You go first every round.',
  'Magenta contest':'Most resources: all the resources you hold when the round ends, every color together.',
  'Last Call':'+1 purple. +1 follower and +1 purple per minion you have left. Take the Goes Last token: your other minions go after everyone else’s.',
  'Right Away':'+2 purple in round I, +3 in round II, +4 in round III. Your next turn comes right after this one.',
  'Silver contest':'Fewest silver: the silver you hold when the round ends (0 counts; tied leaders each get half, rounded up).',
  'Silver Cloak':'Whenever you gift silver, +2 silver.',
  'Toast':'+4 silver. Each rival +2 silver. +1 silver.',
  'Polish':'+2 silver. Turn all your silver into one other color. +1 silver.',
  'Markdown':'Recruit a member from the discard pile now, paying 2 less. +3 blue.',
  'Purifiers':'On Use, once per game: discard one of your members. Each rival with more members than you discards one too.',
  'Cash In':'Turn all your white into followers. +1 white.',
  'Heist':'Steal 3 followers and 3 resources. +1 magenta.',
  'Guest of Honor':'2 white + 3 any. On Use, once per round: give a rival one of your members. +4 followers.',
  'Write-Off':'Give a member to a rival for its cost in white. +1 white.',
  'Swindle':'Steal a rival’s member costing up to 7; give them a shop member of your choice in its place. +1 magenta.',
  'Late Shift':'Recruit a shop member costing up to 2 per minion you’ve placed this round, this one included, for free. +1 red.',
  'Consolation Prize':'7 any. Round End: +2 followers per contest you don’t win.',
  'Test Drive':'Discard a shop member. Use its effect now. +1 blue.',
  'Out of Style':'Discard 3 shop members and refill. +1 of each discarded member’s color. +1 blue.',
  'Blue Cloak':'Whenever you discard a member, +1 of its color.',
  'Catch Up':'+2 magenta per rival with more resources than you. +1 magenta.',
  'Downsizers':'On Use, once per round: discard one of your members. +4 white.',
  'Kingmakers':'Round End: give rivals up to 3 of your silver, split as you choose. +1 follower per silver given.',
  'Fewest members':'Contest: the fewest members when the round ends (0 counts).',
};
// [conf, source, kind, title, cards, players, we, detail-extra]
const change = [
 ['High','Both','Idea','Round III’s last moves take members and contests, and the target can’t answer',['Demote','Promote','Mutineers','Kidnappers'],
  '8 players in 5 games named it; the most common complaint from experienced players.',
  'One leader lost about 30 followers to five late plays and answered one. Players still loved the swaps themselves (see Keep), so the fix is a reply or a safer last placement, not fewer swaps.'],
 ['High','Both','One card','Spoilsport decides games after everyone’s last move',['Spoilsport'],
  '4 players said they could do nothing about it; its holder called it the tensest choice in the game.',
  'Bought in 4 games and decided something every time: 16 followers off two rivals in one game; cancelled a 3-3 tie in another, and that player lost by 1.'],
 ['High','Both','One card','Dabblers wins member contests, and nobody can tell how it counts',['Dabblers','Red contest'],
  'Confused players in 5 games ("wild colors or just bulk?"); one called it a sweep a one-member cult can’t answer.',
  'Whoever held it at a round end won or tied Red, often Blue or Yellow too. The game counts it as 2 in Red though Red prints "each card counts 1".'],
 ['High','Both','Idea','A recruit spent on a 1-follower buy feels like sweeping crumbs',['Buying followers'],
  'Nearly every player, in all 9 games. Player ideas (unchecked): a space that turns leftovers into followers without a recruit.',
  'In one game 39 of 52 recruits were follower buys. True that the recruit is the real cost; this is how the turn feels, mostly late.'],
 ['High','Our read','Idea','Members bought in round III don’t pay back, so the shop is skipped',['Buying followers'],
  'Hinted: "Building a cult felt like it should matter more than it did at the end."',
  'In one game 1 of 8 round III members was bought and 19 of 20 round III recruits were follower buys. A member bought then is worth about its 1 printed follower.'],
 ['Medium','Both','Idea','Member contests end up as one player’s private prize',['Fewest members','Kidnappers','Guest of Honor','Write-Off'],
  'Players in 4 games: "nobody, me included, ever considered contesting it".',
  'Fewest members went to one player at 0 or 1 members, unchallenged, for +16 to +20 in 3 games. A 14-member cult took +30 from two member contests in one round. When members did move (Kidnappers counting as 2, Guest of Honor and Write-Off handing members around), players called it the most memorable part. That is the shape to grow.'],
 ['Medium','Both','One card','White Cloak pays about double any other cloak',['White Cloak'],
  'One player called it "a money printer".',
  'Paid 20 to 24 white in each of 4 games; the next best cloak paid 10 to 14. Its owner won 2 of the 4.'],
 ['Medium','Both','Idea','Copies of copies pay every link, and one player takes 4 or 5 turns in a row',['Crunch Time','Copyist','Green Cloak'],
  '4 players in 2 games: "five straight turns while I sat and watched".',
  'Copyist paid 16 to 18 for 5 resources. Mostly seen with 2 or 3 players; once with 4 (39 to 83 followers in one round III).'],
 ['Medium','Both','One card','Kidnappers reads as "you pick the member", but the rival picks',['Kidnappers'],
  '2 players: the rival always hands over a used-up card, never the one beating you.',
  'In one game it cost 10 and returned about 3 followers. In another it won Most members for whoever held it, since it counts as 2 members.'],
 ['Medium','Our read','One card','Anchorites pays 15 followers for 6 resources',['Anchorites'],
  'Players liked it: "far better than anything I bought".',
  'Most players stay at 5 or fewer members anyway, so the condition costs nothing. Best bought card in two 4-player games.'],
 ['Medium','Both','One card','Line Cutters takes the first seat from the player in last place',['Line Cutters'],
  '"I was dead last on 9 and still placed second."',
  'Broke the catch-up seat in two 4-player games; does nothing for a player who is already behind.'],
 ['Medium','Both','Idea','Most resources in round III goes to the one player who doesn’t spend',['Magenta contest'],
  'Players in 3 games: one player held 14, nobody else held any.',
  'In rounds I and II holding against spending was a real choice players praised. In round III everyone spends to 0 and one player takes +10 holding 3 to 14.'],
 ['Medium','Players','Idea','Went last is decided by who still has minions, not by fighting for the token',['Last Call','Right Away'],
  'Players in 4 games.',
  'Partly true: the last open token space, not the first, wins it. Some of this is players taking token spaces too early.'],
 ['Low','Both','Idea','Fewest silver ends in all-way ties at 0',['Silver contest','Silver Cloak','Toast','Polish','Kingmakers'],
  '6 players; 4 said the Silver Cloak works against the contest.',
  'Partly how players played: gift spaces taken early, Kingmakers split 1 to each rival. Not worth over-weighting.'],
 ['Low','Players','One card','Markdown finds an empty discard pile late in the game',['Markdown'],
  '2 players, in the 2-player game.',
  'Only seen with 2 players, after the pile reshuffled.'],
 ['Low','Players','One card','Purifiers rarely has a target',['Purifiers'],
  '2 players in 2 games.',
  'Rivals with more members than you are uncommon when you hold it.'],
 ['Low','Players','One card','Cash In barely beats buying followers',['Cash In'],
  '2 players: a saved-up plan that "fizzled"; it can hand back 1 white that needs a whole recruit.',
  'Seen in 2 games.'],
 ['Low','Our read','One card','Heist and its copies all land on the leader',['Heist'],
  '1 player complained of the pile-on; others praised it as the clearest way to hit the leader.',
  'Taken or copied 7 times in one game, 16 followers off the leader in round III. One game only.'],
];
const keep = [
 ['Swapping members in and out of rival cults',['Promote','Demote','Swindle'],'Called the most exciting part of the wheel in 4 games.'],
 ['Members passed around to break contest counts',['Guest of Honor','Write-Off'],'All four players praised it in two games.'],
 ['Free members that grow with the round',['Late Shift'],'Praised in 4 games: placement order became a puzzle.'],
 ['A member for the player losing contests',['Consolation Prize'],'Paid 8 to 10 for 7 in 4 games and kept trailing players in it.'],
 ['Using a shop member without buying it',['Test Drive'],'The best single placement for three players in one game.'],
 ['The face-up discard pile as a second shop',['Out of Style','Blue Cloak'],'4 of 13 members in one game came from it.'],
 ['Exact-change planning for follower buys',['Catch Up'],'"Made some follower buys feel planned instead of dead."'],
 ['Two turns in a row from the snake order',[],'Players in 3 games planned two placements as one move.'],
];
const rules = [
 ['Does Dabblers count as 2 in Red?',['Dabblers','Red contest'],'Red prints "each card counts 1"; the game counts 2.'],
 ['Is grey a color?',[],'No for Yellow’s contest; yes for several cards. Miscounted 4 times in one game.'],
 ['Is taking a member "recruiting" it?',['Swindle','Mutineers'],'The game says yes, so recruit abilities fire on takes; in one game that was the winning margin.'],
 ['In what order do round-end abilities happen?',['Kingmakers','Spoilsport'],'The rules don’t say; in one game the order decided round III.'],
 ['Can Downsizers discard itself?',['Downsizers'],'The game says no; the text reads yes.'],
];
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const cardsHtml = cs => cs.length ? `<dl class="cards">${cs.map(c => `<dt>${esc(c)}</dt><dd>${esc(T[c] || '')}</dd>`).join('')}</dl>` : '';
const chips = cs => cs.length ? `<span class="chips">${cs.map(c=>`<span class="chip">${esc(c)}</span>`).join('')}</span>` : '';
let n = 0;
const rows = change.map(([conf,src,kind,title,cs,pl,we]) => `
<li class="item">
 <details>
  <summary><span class="n">${++n}</span><span class="conf ${conf.toLowerCase()}">${conf}</span><span class="t">${esc(title)}</span>
   <span class="meta">${kind === 'Idea' ? 'Idea with examples' : 'One card'} · from ${src === 'Both' ? 'players and our read' : src === 'Players' ? 'players' : 'our read'} ${chips(cs)}</span></summary>
  <div class="more"><p><b>Players:</b> ${esc(pl)}</p><p><b>What we saw:</b> ${esc(we)}</p>${cardsHtml(cs)}</div>
 </details>
</li>`).join('');
const simple = list => list.map(([t,cs,d]) => `
<li class="item"><details><summary><span class="t">${esc(t)}</span><span class="meta">${chips(cs)}</span></summary><div class="more"><p>${esc(d)}</p>${cardsHtml(cs)}</div></details></li>`).join('');
const html = `<title>Player Agents Combined List</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap">
<style>
/* one narrow column, one line per item, detail folded under each */
:root{--bg:#f6f5f2;--fg:#1d1b22;--mute:#6a6672;--line:#dedad3;--card:#fff;--hi:#2f7d4f;--md:#b07a12;--lo:#8a8494;--chip:#ece8f3;
--display:"Space Grotesk",system-ui,sans-serif;--body:Inter,system-ui,sans-serif}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#17161b;--fg:#ece9f1;--mute:#9a95a5;--line:#2e2c35;--card:#201e26;--hi:#5fc58a;--md:#e0b04a;--lo:#8f899c;--chip:#2c2935;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#17161b;--fg:#ece9f1;--mute:#9a95a5;--line:#2e2c35;--card:#201e26;--hi:#5fc58a;--md:#e0b04a;--lo:#8f899c;--chip:#2c2935;color-scheme:dark}
body{background:var(--bg);color:var(--fg);font-family:var(--body);font-size:15px;line-height:1.45}
.wrap{max-width:720px;margin:0 auto;padding-block:28px 48px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
h1,h2{font-family:var(--display);text-wrap:balance;margin:0}
h1{font-size:1.6rem}h2{font-size:1.05rem;letter-spacing:.06em;text-transform:uppercase;color:var(--mute);margin-top:32px}
.lede{color:var(--mute);margin:8px 0 0}
.key{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:.85rem;color:var(--mute);margin-top:12px}
ol{list-style:none;margin:10px 0 0;padding:0;display:grid;gap:6px}
.item details{background:var(--card);border:1px solid var(--line);border-radius:8px}
summary{list-style:none;cursor:pointer;padding:10px 12px;display:grid;grid-template-columns:auto auto 1fr;gap:2px 10px;align-items:baseline}
summary::-webkit-details-marker{display:none}
summary:focus-visible{outline:2px solid var(--hi);outline-offset:2px;border-radius:8px}
.n{font-variant-numeric:tabular-nums;color:var(--mute);font-size:.85rem;min-width:1.4em}
.conf{font-size:.72rem;font-weight:600;letter-spacing:.05em;text-transform:uppercase;padding:1px 7px;border-radius:99px;border:1px solid currentColor}
.conf.high{color:var(--hi)}.conf.medium{color:var(--md)}.conf.low{color:var(--lo)}
.t{font-weight:600;min-width:0}
.meta{grid-column:1/-1;font-size:.8rem;color:var(--mute);display:flex;flex-wrap:wrap;gap:4px 8px;align-items:center}
.item:not(:has(.n)) summary{grid-template-columns:1fr}
.chips{display:inline-flex;flex-wrap:wrap;gap:4px}
.chip{background:var(--chip);color:var(--fg);border-radius:4px;padding:0 6px;font-size:.78rem}
.more{padding:0 12px 12px;border-top:1px solid var(--line)}
.more p{margin:10px 0 0}
.cards{margin:10px 0 0;font-size:.85rem;display:grid;grid-template-columns:auto 1fr;gap:4px 10px}
.cards dt{font-weight:600}.cards dd{margin:0;color:var(--mute)}
@media (max-width:480px){.cards{grid-template-columns:1fr}.cards dd{margin-bottom:6px}}
</style>
<div class="wrap">
<h1>What to change, from nine player games</h1>
<p class="lede">The players’ own recommendations combined with what we saw from the whole-game view. One line each; tap a line for the evidence and card text.</p>
<div class="key"><span><b class="conf high">High</b> seen in 4+ games, players and our read agree</span><span><b class="conf medium">Medium</b> 2 to 3 games, or one side only</span><span><b class="conf low">Low</b> one game, or mostly 2 and 3 players</span></div>
<h2>Change</h2><ol>${rows}</ol>
<h2>Keep</h2><ol>${simple(keep)}</ol>
<h2>Rules the cards don’t settle</h2><ol>${simple(rules)}</ol>
</div>`;
fs.writeFileSync(new URL('./combined.html', import.meta.url), html);
const missing = [...change,...keep,...rules].flatMap(r => (r[4]||r[1]).filter(c => !T[c])); console.log('missing', missing, html.length);
