import fs from 'node:fs';
const SP='/tmp/claude-0/-home-user/2c3141b5-7a1b-56fe-8d8e-81709bc96c72/scratchpad/';
const I=JSON.parse(fs.readFileSync(SP+'ideas.json'));
const A=Array.isArray(I)?I:I.ideas;
// groups: [problem confidence, problem, our read, [[idx, conf, why]]]
const G=[
['High','Round III’s last moves take a leader’s members, and they can’t answer','Seen in 5 games: one leader lost about 30 followers to five late plays. Keep the swaps; give the target something back.',[
 [29,'High','Answers it directly; one trigger, one effect'],
 [65,'Medium','Answers it; once per game keeps it small'],
 [95,'Medium','Answers it for everyone, but every On Use gets a second timing'],
 [40,'Medium','Answers it as payback; would have paid one player about 12'],
 [50,'Low','Victims mostly lost junk, so it pays little where it matters'],
 [56,'Low','Reacts on a rival’s turn; Loyalists already protects'],
 [38,'Low','Close to Loyalists'],[80,'Low','Close to Loyalists'],[4,'Low','Close to Loyalists'],
 [60,'Low','Protects the small cult; would not have helped in round III'],
 [45,'Low','The one stolen engine came back the same round'],
 [10,'Low','Switches off interaction instead of adding it'],[96,'Low','Switches off interaction instead of adding it'],
 [62,'Low','Feeds the strongest steal engine at the table'],
 [12,'Low','A table can’t track "a member you once owned"'],
 [59,'Low','A table can’t track "taken from you this game"'],
]],
['High','Spoilsport decides games after everyone’s last move','Bought in 4 games; decided something every time.',[
 [32,'Medium','Answers it, but only matters while Spoilsport is out'],
 [27,'Medium','Answers any round-end veto, not just Spoilsport'],
 [83,'Low','A card that answers one card'],
]],
['High','A recruit spent on a 1-follower buy feels like sweeping crumbs','Every game; 39 of 52 recruits were follower buys in one.',[
 [35,'Medium','Answers it plainly; mostly rewards players who don’t plan piles'],
 [81,'Medium','Answers it at half rate, so it is a real choice'],
 [33,'Low','The 1-follower buy already does this'],
 [25,'Low','Two buys in one recruit; reads twice'],
 [1,'Low','Answers steals, not leftovers'],
 [64,'Low','Silver already turns into followers through buys'],
]],
['Medium','Member contests end up as one player’s private prize','Fewest members went uncontested at 0 or 1 members in 3 games; a 14-member cult took +30 in one round.',[
 [89,'High','Answers the uncontested Fewest members; would have paid about 5 a round'],
 [18,'High','Same idea from another game: two players reached it alone'],
 [85,'Medium','Lets a small cult push on a member lead without swapping'],
 [34,'Medium','Lets anyone challenge a runaway leader; the gaps came from nobody trying'],
 [24,'Medium','Pushes a member onto the zero player; close to Guest of Honor'],
 [82,'Low','Pays the player already winning contests'],
 [66,'Low','Answers a problem the zero player chose'],
 [37,'Low','Changes two contests on one card'],
 [84,'Low','Makes the uncontested contest pay more'],
 [86,'Low','Ghost already does this'],[23,'Low','Ghost already does this'],
 [43,'Low','Guest of Honor and Write-Off already push members'],
 [20,'Low','No problem seen'],
 [55,'Low','Would pay the biggest cult most'],
 [46,'Low','Not seen: the 2-member cult won, the 0-member cult was last'],
]],
['Medium','Copies of copies give one player 4 or 5 turns in a row','Mostly 2 and 3 players; once at 4 (39 to 83 followers in one round III).',[
 [76,'High','The most direct answer seen; one trigger, one effect'],
 [70,'Medium','Gives the watchers something, but they still don’t act'],
 [97,'Medium','Would have paid 8 in one game'],
 [71,'Low','Two timings, waits for a condition'],
 [75,'Low','Placing during a rival’s turn breaks the turn rule'],
 [79,'Low','Creates another solo run'],
 [93,'Low','A 2-player problem'],
 [94,'Low','Reprise already does this'],
]],
['Medium','Most resources in round III goes to the one player who doesn’t spend','3 games; one player held 14 and nobody else held any.',[
 [58,'High','Answers it; Catch Up pays the poor player but leaves the rich one whole'],
 [9,'Low','Pays the player already winning the pile'],[63,'Low','Pays the player already winning the pile'],
 [42,'Low','Makes the contest harder to contest'],
 [0,'Low','Answers one late steal'],[52,'Low','Answers one late steal'],[7,'Low','Answers one late steal'],[14,'Low','Answers one late steal'],
 [5,'Low','Answers one late steal'],
 [30,'Low','Everyone spent to 0, so it would pay nothing'],
]],
['Medium','Went last is decided by who still has minions','Players in 4 games; partly players taking token spaces too early.',[
 [15,'Medium','Gives a way to answer the token'],
 [17,'Low','Small sting, no answer'],
 [26,'Low','Makes the token harder to fight'],
 [73,'Low','Answers one player’s own line'],
 [31,'Low','Going last was already the best line'],
]],
['Low','Fewest silver ends in all-way ties at 0','Partly how players played; you said not to lean on it.',[
 [54,'Medium','The one idea that makes a gift stick; locking a color is heavy'],
 [48,'Low','Only helps whoever holds it'],
 [51,'Low','Moves every tied player equally, so they stay tied'],
 [16,'Low','Answers the cloak, not the tie'],
 [68,'Low','Would have paid +5 in round III'],
 [69,'Low','Buyout already does something close'],
 [67,'Low','Did not cost the player anything'],
 [19,'Low','No problem seen'],
]],
['Medium','Kidnappers: the rival always hands over a used-up card','3 games.',[
 [41,'Low','The rival always picks the cheaper option, so it is just a steal'],
 [44,'Low','Would have taken one player’s best member every round'],
]],
];
const used=new Set(G.flatMap(g=>g[3].map(x=>x[0])));
const NONE=[[2,'Answers nothing seen'],[3,'Cheaper as you play; you ruled that out'],[6,'No problem seen'],[8,'No problem seen'],[11,'Reads twice'],[13,'No problem seen'],[53,'The zero line already pays'],[21,'No problem seen'],[22,'No problem seen'],[28,'No problem seen'],[36,'Two conditions at once'],[47,'A table can’t track "held all round"'],[49,'Counts past rounds'],[61,'No problem seen'],[72,'A screen feature, not a card'],[74,'Loss came from own choices'],[77,'Rewards the leader'],[78,'Hard to read'],[88,'Gift complaints were half real'],[90,'Clan already does this'],[91,'Answers own plan'],[92,'Pays you for staying out'],[98,'Draws from the top of the pile'],[87,'Hard to track "helped you win"'],[39,'A table can’t track it'],[57,'Consolation Prize already does this']];
NONE.forEach(x=>used.add(x[0]));
const miss=A.map((_,i)=>i).filter(i=>!used.has(i)); if(miss.length) console.log('UNPLACED',miss);

export {A,G,NONE};
export const LABELS=['late swaps', 'Spoilsport', '1-follower buys', 'uncontested member contests', 'long runs of turns', 'round III resource pile', 'Went last', 'silver ties', 'Kidnappers'];
