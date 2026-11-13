# Review of pilot1: what the four AI players got right and wrong

Game: pilot1 (Yellow, Magenta, White, Purple; 4 players; 10-card deck). Ben and Cal played as first-time players, Ava and Dee as experienced players. Rules of Nov 12: members still carried their old printed followers (Picket Line was worth 3).

Sources checked: the game log in /home/user/pa-games/pilot1/events.jsonl, the final state in state.json, cards.md, design/rulebook.md, the engine (src/engine/v4/core.js) for how ties and the Yellow contest are counted, and scripts/players/play.mjs plus design/notes/expert-primer.md for what the players were given. Decision numbers [n] are from moves-pilot1.txt. The players' prompts for each decision were not saved in agents.jsonl (it holds only the answers), so what a player saw on screen is inferred from the option labels.

Final score from the game log: **Ben 94, Dee 77, Ava 70, Cal 69.** The facts sheet (facts-pilot1.md) says Ben 92: it counts Ben's members at the new worth of 1 each (Picket Line 1 instead of 3). Under the rules this game was played on, Ben had 94: 1 to start, 42 bought, 16 from contests, 29 from spaces and members (Anchorites 15, Melting Pot 9, Farewell 6, Splurge 3, minus 4 lost to Heist), and 6 printed on his four members.

## Cards referred to in this review

Spaces (a space ending "+1 of its color" pays that +1 only to the first player ever to take it):
- **Harvest**: +3 in colors you choose. **Survey**: +1 yellow per minion on the busiest color, +1 yellow. **New Blood**: +2 yellow; +3 more if you recruit a member of a color none of your members have this turn. **Makeover**: +4 yellow, then rearrange your resources into any colors. **Melting Pot**: for each color among your members, +1 follower and +1 of that color (a grey member gives 1 of any color). **Offering** (round III center): +5 yellow; each rival discards 2 of each color among *your* members.
- **Help Yourself**: steal 1 resource per minion you have placed this round, +1 magenta. **Stash**: +3 magenta. **Catch Up**: +2 magenta per rival holding more resources than you, +1 magenta. **Heist**: steal 4 followers and 4 resources, +1 magenta. **Swindle**: steal a rival's member costing up to 7 and give them a shop member of your choice, +1 magenta. **Poach** (center): recruit a rival's member of your choice for free, +1 magenta.
- **Modest Means**: +2 white, +1 white per rival with more members than you. **Splurge**: +2 white; if you recruit a member this turn, +1 follower per 2 resources paid (per 1 in round II). **Nest Egg**: +3 white. **Farewell**: discard a member for its cost in followers, +1 white. **Write-Off**: give a member to a rival for its cost in white, +1 white. **Cash In** (center): turn all your white into followers, +1 white.
- **Sleep In**: +4/+5/+6 purple by round, take the Goes Last token. **On a Roll**: +2 purple per turn in a row including this one, take the token. **Right Away**: +2/+3/+4 purple by round, your next turn comes right after this one. **Last Call**: +1 purple, +1 follower and +1 purple per minion you have left, take the token. **Crunch Time**: +2 purple, your next two turns come right after this one. **Overtime** (center): +4 purple, +1 minion this round, take the token.
- The **Goes Last token**: its holder's other minions wait until every other hand is empty.

Contests (each round; +4 / +6 / +10; tied leaders each get half, rounded up, however many are tied):
- Yellow: **Most member colors**. Magenta: **Most resources** (all colors together). White: **Fewest members** (0 counts). Purple: **Went last** (placed the round's last minion).

Cloaks: **White Cloak**: whenever you buy followers, +2 white. **Yellow Cloak**: whenever you recruit a member of a color none of your members have, +2 yellow. **Magenta Cloak**: whenever you steal, +2 magenta. **Purple Cloak**: whenever you take the Goes Last token, +2 purple.

Members (cost; printed followers this game):
- **Anchorites** (3 white + 3 any; 1): Round End, if you have 5 or fewer members, +5 followers.
- **Purifiers** (6 any, grey; 1): once per game, discard one of your members; each rival with more members than you discards one too.
- **Picket Line** (3 purple + 3 any; 3): whenever a rival takes a Purple space, +1 purple.
- **Accomplice** (2 magenta + 3 any; 1): On Recruit, steal 3 resources.
- **Early Traders** (3 yellow + 2 any; 1): Round Start, +2 yellow and swap up to 4 of your resources for other colors.
- **Leavetakers** (3 white + 4 any; 1): whenever one of your members leaves your cult, +2 white.
- **Last Callers** (3 purple + 4 any; 1): once per round, take the Goes Last token.
- **Martyrs** (3 white + 3 any; 3): whenever this member is discarded, +4 white and +4 followers.
- **Dabblers** (5 any, grey; 2): counts as 2 wild members.
- **Duty Collector** (3 yellow + 4 any; 3): whenever a rival recruits a member in one of your members' colors, +1 of that color.
- **Old Guard** (3 white + 4 any; 1): once per round, discard another of your members, using its On Use first; +2 white.
- **Consolation Prize** (7 any; 1): Round End, +2 followers per contest you don't win. **Cheerleaders** (7 any; 3): whenever you win a contest, +2 followers.

## Totals that the review leans on

- **What each cloak paid over the game**: White Cloak 24 white (12 follower buys by Ava). Yellow Cloak 10 yellow (5 new member colors for Ben). Purple Cloak 4 purple (Cal took the token twice). Magenta Cloak 2 magenta (Dee stole once, in round I).
- **Contest followers**: 80 in all. Dee 36, Ava 21, Ben 16, Cal 7. Fewest members was tied every round (Ava and Dee, then Cal and Dee, then Ava and Dee). Most member colors went to Cal in round I, then Ben (3 colors against 1, then 4 against 1).
- **Steals**: from Ava, 17 resources and 4 followers (Cal's Accomplice 3, Cal's two Heists 8, Ben's Accomplice 2, Ben's Help Yourself 4). From Cal, 5 resources and Picket Line. From Ben, 4 followers. From Dee, 1 resource.
- **Picket Line's income**: Cal 2 purple in round I; Ben 8 purple after he stole it with Swindle (3 in round II, 5 in round III), every one paid by the Ava, Cal and Dee fight over the Goes Last token.
- **Resources left unspent at the very end**: Ben 1, Ava 2, Cal 2, Dee 3 (Dee kept hers on purpose to win Most resources). In round III nobody was short of recruits to turn resources into followers.

## A. Each player's line and what it earned

### Ben, 1st, 94 (first-time player): small, wide cult of members

What it earned. Five members passed through his cult for 17 resources spent (Anchorites 6, Purifiers 6, Early Traders 5; Picket Line and Accomplice came free through Swindle and Poach). Counting followers and resources at 1 for 1, they returned about 85: Anchorites 15 followers plus 1 printed; Melting Pot 9 followers and 9 resources; Most member colors 16; Picket Line 3 printed and 8 purple; Splurge 3; Farewell on Purifiers 6; Yellow Cloak 10 yellow; Early Traders 2 yellow; Accomplice's steal 3. The line was clearly the best at this table: his 17-point win came almost entirely from member income that nobody else had.

Deciding decisions:
1. **[10], [21], [22] Harvest as 3 white, then New Blood into Anchorites.** Paid 6, got 5 yellow straight back (New Blood 3, Yellow Cloak 2), then +5 followers at each of three round ends. Against a plain 5-follower buy this is about +15.
2. **[55]-[56] Swindle on Cal's Picket Line.** About +17 for Ben (3 printed, 8 purple, a new color for the Yellow Cloak and Melting Pot, +1 magenta) and -3 for Cal. The best single placement of the game.
3. **[57] the gift to Cal: Leavetakers.** A mistake. Ben called it "the most inert" card, but Leavetakers pays whenever a member leaves, which is exactly what Write-Off and Farewell do. Cal then got +2 white on Write-Off [76], +2 white and 7 followers on Farewell [80]. Old Guard costs the same 7 and would have given Cal 4 white less. Cost to Ben's relative standing: about 4.
4. **[130], [138] Poach Ava's Accomplice, then Melting Pot.** About +9 from Poach (steal 3, Yellow Cloak 2, +1 magenta, 1 printed, and a fifth color for Melting Pot) and +10 from Melting Pot.
5. **[39] Purifiers with Splurge.** Bought on a wrong reason (see B), but it paid about 15 for 6 resources: Splurge 3, Yellow Cloak 2, Melting Pot 2 followers and 2 resources, Farewell 6.

What a strong player would have changed: only the gift at [57] (about 4) and the miscounts at [85] and [155] (about 1 follower in total). Ben's line was close to the most this table allowed.

### Dee, 2nd, 77 (experienced): no members, contests and the Goes Last token

What it earned. 36 from contests (Went last 6 and 10, Most resources 10 in round III, Fewest members shares 2, 3 and 5), Last Call 7, 33 bought. A good line for second, but it never touched Ben, as her own debrief says.

Deciding decisions:
1. **[3] Magenta Cloak.** It paid 2 magenta all game. Dee then took the Goes Last token four times ([61], [69], [127], [152]); the Purple Cloak she left to Cal would have paid her 8. About -6 against the cloak she passed over. (She could not know this at the pick, but she never moved back toward stealing either.)
2. **[25], [36] two 5-follower buys in round I** to give up Most resources because "Ava answers with Stash or Nest Egg". In round I every space fills, so Ava's last minion went to whatever space was left (it was Right Away). Holding to 12 would have forced Ava to buy exactly 1 follower to tie (her ceiling was 12), so Dee gave away at least a +2 share, and she gave up first pick in round II by going up to 13 followers. About -2, maybe more.
3. **[61] Last Call first in round II, [127] Last Call first in round III, [152] On a Roll for the last token space.** These earned Went last 6 and 10, plus 7 followers from Last Call. Good.
4. **[191]-[200] her closing run in round III.** Catch Up, Write-Off on Last Callers, a 10-buy, Splurge, and passing the last recruit to win Most resources +10 with 3 resources held. Well counted, apart from expecting 8 white from Write-Off where the card paid 7 (see B).
5. **[196] Write-Off target.** Giving Last Callers to Cal decided third place between Ava and Cal (Cal lost a 5-follower share). Dee's reason was wrong (she thought a three-way tie would cut her share to 4; it would have stayed 5), so the choice cost her nothing but was made on a misreading.

### Ava, 3rd, 70 (experienced): no members, White Cloak, contests

What it earned. 41 bought (12 buys, each refunding 2 white), Cash In 11, contests 21 (Went last 4, Most resources 4 and 6, Fewest members shares 2 and 5), minus 4 lost to Heist. She was the main target of every steal in the game (17 resources and 4 followers).

Deciding decisions:
1. **[1] White Cloak.** 24 white over the game, far more than any other cloak. Since Ava never ran short of recruits (she ended with 2 resources unspent), almost all of it became followers.
2. **[15], [18] Catch Up for +5, then On a Roll to take the token from Cal.** Most resources +4 and Went last +4 in round I.
3. **[91] Help Yourself as her fourth minion in round II, all 4 steals from Cal.** Without it Cal finishes round II at 26 against Ava's 23 or so; with it Ava wins 24 to 22. A 12-follower swing between them (+6 Ava, Cal loses his +6).
4. **[124] Cash In for 11 followers.** Good, though she overrated it (see B, Cash In).
5. **Round III tracking of Dee.** From [166] to [177] Ava wrote "Dee at 42 can't catch me for second" while Dee already had Went last +10 locked ([152]) and three placements after everyone. It cost no followers directly (no better move existed: taking Write-Off herself at [176] to stop Dee's dump works out worse for Ava by 1 or 2), but it shows she was not counting rivals' finishes.

What a strong player would have changed: little in followers. Her line topped out near 70 at this table. The bigger choice was round I: a cheap member then (see E) was the only route to the 20 or so followers she was missing.

### Cal, 4th, 69 (first-time player): Purple Cloak, early members, then dump them and hoard

What it earned. 45 bought (all in round III), Heist 8 followers and 8 resources, Farewell 7, contests only 7 (Most member colors 4 in round I, Fewest members share 3 in round II). He won nothing in round III although he led Most resources by up to 30 for most of the round.

Deciding decisions:
1. **[5] Picket Line in round I** (2 purple earned, then lost to Swindle) and **[30] Accomplice** (steal 3, second member color, Most member colors +4). Fine for round I.
2. **[80] Farewell before Help Yourself in round II.** Cal had back-to-back turns [76]-[82] and Help Yourself was still open. Taking Help Yourself at [80] (steal 3 from Ava) and Farewell at his last minion [102] (instead of Nest Egg) leaves him around 25 against Ava's 20 at round end: Most resources +6 to Cal, nothing to Ava, for the cost of 1 white. About +5 for Cal and -6 for Ava, with the risk that Ben takes Farewell first (Ben had looked at it at [71] and turned it down). Instead Ava used Help Yourself on him at [91] and won by 2.
3. **[114] Heist rather than Cash In to open round III.** Right. Heist paid Cal 4 followers and 4 resources and cost Ben 4. Cash In would have turned his 16 white into 16 followers without a recruit, but Cal had six recruits that round and ended with only 2 resources unspent, so the recruit it saves was worth almost nothing to him. About +7 for Heist.
4. **[185], [188] last two placements: Right Away and Stash, while Write-Off stayed open.** Dee held Last Callers, had three placements after Cal, and Write-Off was the only way left for her to drop to 0 members and push a member onto someone. Cal planned on half of Fewest members at [189] ("my half of White makes 73") and lost it to exactly that move. If the game lets a player with no members place on Write-Off, taking it at [188] costs him Stash (about 4 followers) and keeps his 5-follower share; Dee would then keep 1 member and lose her share and the 7 white. Cal finishes about 70, level with Ava for second or third, and Dee drops to about 69.

With decisions 2 and 4 played well, Cal finishes around 75, ahead of Ava.

## B. Misreadings: claims that contradict the cards, the rules or the log

1. **[39] Ben**: Purifiers "ties Cal at 2 member colors for a split +2 in Yellow". Grey members do not count for Most member colors (the engine counts only the table's colors; the round I count was Cal 2, Ben 1). The rulebook's "grey counts as a color" applies only to cards that say "a color none of your members have" (the Yellow Cloak, New Blood). Ben repeated the count with grey at [58] ("4 member colors against Cal's 2"; the contest counted 3). His count of 5 colors for Melting Pot at [138] was right, because Melting Pot's own text pays for grey.
2. **[25] Dee**: "even if I tie her at 9 she answers with Stash or Nest Egg". In round I every one of the 12 spaces fills; Ava's last minion had to take the one space left, which was Right Away. Ava's only answer was the size of her last buy, and her ceiling was 12.
3. **[35], [110] Dee, and her round I note and debrief**: Right Away "does nothing" and "is a dead option"; Crunch Time and Right Away "do literally nothing for me". Right Away pays +2, +3 or +4 purple by round and Crunch Time +2 purple; only the extra turn is lost on a last minion. At [110] Right Away (+3 purple) equalled Stash (+3 magenta). The primer the experienced players read says of Crunch Time "On your last minion it does nothing", which likely planted this. (Ben at [38] read it correctly: "Splurge gives the same +2 resources".)
4. **[85] Ben**: "I'll repeat this for the rest of the yellow." Each follower purchase is one recruit (rulebook, Fine print). Ben caught it at [87].
5. **[91], [94] Ava**: Help Yourself pays "the +1 magenta". Dee took that +1 in round I. Ava expected 24 and had 23 before her buy.
6. **[155] Ben**: Farewell "nets +4 followers plus 1 white... exactly 5 resources for a 5-pack". Cal took Farewell's +1 in round II. Ben had 4 purple and could only make a 1-follower buy at [157].
7. **[159] Ben**: Help Yourself "steals 4 plus +1 magenta. That is 5 resources". The +1 was gone; the preview on the option showed no magenta.
8. **[192], [194], [197] Dee, and her debrief**: Write-Off on Last Callers gives "8 white"; "the Write-Off preview showed +7 white where I had counted 8". Last Callers costs 7; the +1 went to Cal, the first taker, in round II. The preview was right; she got 7 (she held 11 after it, not 12). The game log line "Dee's Write-Off: +7 white, +1 white" shows a +1 that was not paid (see G), which may have fed this.
9. **[76], [78] Cal**: giving Accomplice to Ava "breaks her 0-member tie on White, so... it should be just Dee and me splitting". Tied leaders each get half, rounded up, however many tie (engine: one half for every tied winner). A three-way tie also paid Cal 3. The move cost Ava 3 and gained Cal nothing in that contest.
10. **[196] Dee**: "Handing it to Ben would leave three of us at 0 and cut my share to 4." It would have stayed 5. **[200] Dee**: a three-way tie at 2 is "worth only 4"; it is worth 5. Passing was still right (10 against 1 + 5), by 4, not 5.
11. **[124] Ava, and her debrief**: the Cash In race "decides a 20-follower swing for him [Cal]". Cal's white turned into followers at 1 for 1 anyway; he had spare recruits (six in round III, 2 resources left at the end). Cash In was worth to Cal about what one saved recruit is worth, which in this game was close to nothing.
12. **[149] Ava, round III note and debrief**: Offering's discard "does nothing against memberless cults" / "punish-your-members effects can do nothing against memberless cults". Offering's discard counts the colors among the taker's own members, not the rivals'. It was blank because Ava had no members. Taken by Ben (4 member colors) it would have cost Cal 8 of his 26 resources. Cal read it correctly at [148].
13. **Dee, round I and II notes and debrief**: the token "decides... in practice, Magenta's [contest]". In round II Dee held the token and finished Most resources with 3 against Ava's 24. The token holder won Most resources in rounds I and III only.
14. **Cal, debrief**: "Went Last and Most Resources both go to whoever acts last." Round II Most resources went to Ava; the last player was Dee.
15. **Cal, debrief and round III note**: "Ava and Dee never recruited a single member." Dee recruited Last Callers at [128]. Ava held Accomplice from [78] to [131].
16. **Cal, debrief**: "Zero members plus buying followers dominated." The only player with members won by 17.
17. **Ben, debrief**: "That cult took the Yellow contest every round." Cal won it in round I.
18. **Ben, [57]**: Leavetakers is "the most inert" card to hand Cal. It pays +2 white whenever a member leaves; Cal collected 4 white from it within two placements.
19. **Ava, [167] to [177]**: "Dee at 42 can't catch me for second." Dee had Went last +10 already locked and three placements still to come; she finished 7 ahead.
20. **Cal, [189]**: "my half of White makes 73". Write-Off was open, Dee held a member and had three placements left.
21. **Ava, debrief**: "in round III Dee holding both the token and Last Callers made Went last feel decided before it started." After Dee took the token at [127], Ava took it at [143] and Cal at [146]; Dee won it back with the On a Roll space at [152]. Last Callers was never used.
22. **Ben, debrief**: rivals "still finished close". They finished 17, 24 and 25 behind.

## C. Every complaint and praise, grouped

Verdicts: (1) true about the game, would bother a player on any line; (2) real but caused by the player's own plan or misplay; (3) a misreading; (4) caused by how the agents are run, not the game. "Member change" marks what the switch to members worth 1 follower (a few higher-cost ones 2 or 3) likely moves.

### Complaints

1. **White Cloak too strong; the cloak-refunded 1-follower buy is a "money printer" and every recruit is automatic.** Ava: feel notes at [1], [16], [19], [43], [64], [89], [96], [144], [150], [167], [177] (11), all three round notes, two debrief points. Verdict: **(1) on strength, (3) on the framing.** The cloak paid 24 white against 10, 4 and 2 for the others, and Ava never ran short of recruits, so this is real. But the refund is the same +2 per recruit whether the buy is 1, 5 or 10; a 1-follower buy only "leaves you richer" in count because it trades a whole recruit for 1 follower. Ava chose 1-follower buys to keep her pile for Most resources, which won her +4 and +6; they were the size her contest plan wanted, not automatic. Cory's point about recruits holds in principle; in this game it did not bite because Ava had no member she wanted to spend recruits on.
2. **Buying followers 1 for 1 beats the shop; members are traps; the shop is scenery.** Ben [73], [99], [135], [164], debrief; Cal [54], debrief; Ava [150] (Consolation Prize). Verdict: **(2) at the level of the whole game, (1) for the round II and III shop.** Ben's members returned about 85 for 17 resources. The cards dealt in rounds II and III cost 7 to 10 and were worth 1 to 3, and with members still giving up a Fewest members share of 3 or 5, they did lose to plain buys for everyone (Ava's sums at [150] and Ben's at [99] are right). **Member change**: with most members now worth 1, this complaint will get stronger, not weaker, except for the few higher-cost members given 2 or 3.
3. **Fewest members rewards doing nothing; zero members is comfortable; the member game is optional.** Ben debrief; Dee debrief; Ava debrief ("leaves no decisions"); Cal debrief. Verdict: **(1), but smaller than the players felt.** It was tied every round and paid 2, 3 and 5 per share; the most anyone got from it was Dee's 10. It was fought only with Write-Off dumps. Next to Ben's member income it was a small prize; what made zero members look strong was that three players chose it, which left Ben's Most member colors uncontested (see G).
4. **The Goes Last token decides Went last and, in practice, Most resources; a hot potato.** Dee [24], [25], [61], [69], round notes, debrief; Ava [66], [67], [143], debrief; Cal [174], [185], [189], debrief. Verdict: **(1) for Went last and round III, (3) for the general claim.** The token holder won Went last every round, by definition. Most resources went to the token holder in round I and III but not round II. What really decided round III's Most resources: resources are worth nothing after the game, so everyone converts, and whoever moves last wins +10 by holding a few (Dee won with 3).
5. **The end of each round is solo arithmetic; the last player has no opponent.** Dee [104], [108], [110], [191], [192], [199], debrief; Cal [102], [147], [169], [170], [172], [186], [188], debrief; Ava [166], [176], [177], debrief; Ben [83], [179], debrief (about 20 notes, all four players). Verdict: **(1).** The token holder's waiting minions came last: Dee placed her final 2 in round II and final 3 in round III with nobody left to answer, and the late round III spaces left were flat +2 to +4 gains. Every line felt it.
6. **Passing recruit after recruit while hoarding; holding purple I can't use.** Cal [79], [82], [103], [123], debrief; Dee [70], debrief. Verdict: **(1).** Most resources pays for holding; Cal bought nothing at all in round II. This is how the contest is built.
7. **Right Away and Crunch Time "do nothing" on a last minion and pad the list.** Dee [35], [110], debrief; Ben [38], debrief. Verdict: **(3)** for "nothing" (they pay purple; only the extra turn is lost), **(1)** that the extra-turn half is wasted on a last minion and that Right Away feeds a rival's Picket Line.
8. **Contest-lead warning on payments ignores refunds.** Ava [44] and debrief; Dee [198] and debrief. Verdict: **(1).** It is the game's own payment warning (protectedColors in core.js), so a person sees it too. It also names magenta as if paying magenta were the problem, though Most resources counts every color equally. The later player setup made the agents' warning refund-aware; check whether the game screen still shows the old one.
9. **Payment lists of 40 to 56 splits; picking Heist's followers and resources one at a time; Harvest colors one at a time; Makeover's repaint steps; Early Traders swap.** Cal [47], [116], [122], [148], [171], [175], [187], [190], [173], debrief; Ben [84], [113], [139], [180], debrief; Ava [145], [151], debrief. Verdict: **(4)** for the long lists and one-at-a-time picks (the agent gets every split as a numbered option; the game screen has a picker), **(1), minor,** that color choices stop mattering once contests are settled.
10. **Table counts did not match option counts during a steal.** Cal [52], [53], debrief. Verdict: **(4).** The view was not refreshed between steal steps.
11. **Dabblers' "counts as 2 wild members" is unclear for Most member colors.** Cal [30], debrief. Verdict: **(1).** The text does not say; the engine counts Dabblers as one color you lack (Cory, Nov 7). **Member change**: check that Dabblers' wording still matches whatever it counts as now.
12. **Purifiers is dead for three rounds; cards needing rivals with members do nothing.** Ben [41], [60], [75], [101], [137], [156], round notes, debrief. Verdict: **(2) and (4).** Its discard never had a target because rivals stayed small, but the card still paid Ben about 15 for 6 resources. "Offered to me every turn" comes from the setup asking a separate use-it question after every turn, labelled "Pass (recruit nothing)" (see F).
13. **Offering went blank against a memberless table.** Ava [149], round III note, debrief. Verdict: **(3).** It reads the taker's members; Ava had none.
14. **Cash In is nearly the same as buying followers; saving for it fizzled.** Cal [114], debrief. Verdict: **(1)** for any player with recruits to spare, which in round III was everyone; Cash In is worth the recruits it saves, and nobody was short.
15. **One recruit per turn makes small buys fiddly and leaves change exposed; leftovers are worth nothing.** Ben [85], [87], [157], [164], debrief; Cal [186], debrief. Verdict: **(3)** for Ben's first misreading of the rule, **(1), small,** for the leftover waste: 1 to 3 resources per player at the end.
16. **Last Callers is close to a lock on Purple; buying it felt mandatory.** Dee [128], [153], debrief; Ava [143], debrief. Verdict: **(3)/(2).** It was never used: two rivals took the token after Dee bought it, and Dee won it back with a space.
17. **Ben's engine was invisible and could not be contested.** Dee debrief. Verdict: **(2) and (4).** Anchorites' +5 was announced in the log every round, Swindle was open all of round III and could steal Anchorites (cost 6), and nobody tried. The players had no standings line in this version (see F).
18. **Being 40 behind going into round III; playing for second.** Cal [146], debrief. Verdict: **(2).** Cal was 27 behind Ben at the start of round III (19 against 46; 23 against 42 after his Heist); the gap grew within the round through Ben's Poach and Melting Pot.
19. **Write-Off preview +7 against 8 counted.** Dee [197], debrief. Verdict: **(3).** The preview was right.
20. **Picking a cloak before seeing the shop is a blind guess.** Ben [2], debrief. Verdict: cannot confirm. The round I shop exists before the cloak pick in the log; whether the agents' view showed it at that step was not saved. If it was not shown, **(4)**.
21. **Payment warning / Write-Off preview made me recount.** Folded into 8 and 19.

### Praise

1. **Write-Off as a weapon against a Fewest members tie.** Cal [76], [78], debrief; Dee [194], [196], debrief; Ava [88], debrief. Holds up **(1)**: it cost Ava 3 in round II and Cal 5 (and third place) in round III.
2. **Help Yourself grows with minions placed; a late steal is a big swing.** Dee [7]; Ava [91], debrief; Ben [159], [160], debrief. Holds up **(1)**: Ava's late 4-steal decided round II's Most resources (a 12-follower swing between Ava and Cal).
3. **Heist hits the leader directly.** Cal [45], [115], debrief. Holds up **(1)**: the only direct hit on Ben all game (4 followers), and it paid Cal 8 followers and 8 resources over two rounds.
4. **Swindle is the juiciest space.** Ben [55], [56], [57], debrief. Holds up **(1)**: about +17 for Ben. **Member change**: Picket Line now prints 1, so the same swing would be 2 smaller.
5. **Melting Pot, and Poach setting up a bigger Melting Pot.** Ben [71], [130], [138], debrief. Holds up **(1)**: 9 followers and 9 resources.
6. **Catch Up as a comeback space.** Ava [15], [63], debrief. Holds up **(1)**: +5 and +4 for the poorest player.
7. **New Blood with the Yellow Cloak into Anchorites; Splurge stacking with the cloak.** Ben [21], [22], [39], debrief. Holds up **(1)**.
8. **Farewell pays full cost for a spent card.** Ben [155], [156]; Cal [80], debrief. Holds up **(1)**, and it is unaffected by the member change (it pays cost, not printed followers).
9. **The token fight is tense, the heart of the round.** Dee [69], debrief; Ava [18], debrief; Cal [4]. Partly holds: the fight was real, but it also fed Ben 8 purple through Picket Line, which none of the three counted.
10. **The Cash In race was tense.** Ava [124], debrief. **(3)**: the swing was a few followers, not 20.
11. **Passing the last recruit to win Most resources by one.** Dee [200], debrief. True as a moment; it is also the round III pattern in complaint 4.
12. Smaller praise, all true as described: Picket Line paying when a rival takes Purple (Cal [27]); snake double turns for a two-turn plan (Cal [29]); choosing steal victims one resource at a time (Cal [32], Ben [132]); Survey reading the board (Ben [98]).

## D. What the players got right

- **Ben** found the strongest line at the table with no strategy primer: he sequenced Harvest, New Blood and Anchorites over two turns ([10]-[22]), kept his cult at 5 or fewer for Anchorites every time he was tempted ([99], [135], [140]), saw that Swindle on Picket Line was worth more than Last Call ([55]), and set up Poach into Melting Pot on back-to-back turns ([130], [138]).
- **Ava** read her contests well: every 1-follower buy in rounds I and II was sized to keep Most resources ([16], [19], [64], [67], [89], [96]); she used Help Yourself late, as her fourth minion, for 4 steals from her only rival in that contest ([91]); she saw that Cash In does not use a recruit ([124]); she correctly judged Consolation Prize and Swindling Anchorites as worse than a plain buy for her ([150], [176]). She also spotted correctly that the lead warning ignored her refund ([44]).
- **Dee** saw that On a Roll was the last space that could take the token in rounds II and III ([69], [152]), and her final sequence in round III ([191]-[200]) converted the most she could while keeping exactly enough to win Most resources outright.
- **Cal** made the right call on Heist over Cash In ([114]) for the right reason, saw that his Most resources lead could not survive Dee's three closing placements and converted instead of holding ([174], [185], [189]), and read Offering's discard correctly ([148]). His Write-Off and Farewell chain in round II ([76]-[80]) turned a gift into 8 white and 7 followers.
- Everyone took steals from the right player: the leader of the contest at stake (Cal [32]-[34], [119]-[122]; Ava [92]-[95]) or the nearest rival for the win (Ben [132]-[134], [160]-[163]).

## E. Why three of four players skipped members, and was it right?

Why they skipped, in their own words: a member would break their share of Fewest members (Ava [19], [64], [67]; Dee [9], [25], [36]; Cal [123], [147], [170]); members cost 5 to 10 for 1 to 3 printed followers and lose to a plain buy (Cal [54]; Ava [150]); holding resources for Most resources beat spending them (Cal [79], [82]). The two experienced players also read a primer that opens: contest prizes are "the biggest pool of followers in the game", and a member "worth 2 is a loss unless its ability pays at least 2 more". Both of them went the whole game without buying a member until Dee's Last Callers in round III. The first-time player without the primer built members and won.

From the whole-game view, skipping members was **wrong in round I and right in rounds II and III, at this table.**

- Round I: the shop held cheap members that paid back several times over: Anchorites (Ben got 16 from it), Accomplice, Martyrs, Picket Line. Two worked examples for the memberless players:
  - Dee at [36] had 7 resources and named Martyrs plus Farewell herself. Martyrs (6) discarded with Farewell in round II pays 6 followers plus Martyrs' own 4 followers and 4 white, and drops her back to 0 members before the round II count. That is about 14 for 6 resources, against 6 followers from a plain buy, minus her round I Fewest members share of 2: about +6, if she reaches Farewell before Cal (Cal took it with his third minion of round II, [80]).
  - Anchorites itself, bought by anyone in round I, is worth 15 followers over three round ends for 6 resources, against a Fewest members share worth at most 10 over the whole game.
- Rounds II and III: the shop was 7 to 10 cost for 1 to 3 printed followers. A member there cost the Fewest members share (3 or 5) and Modest Means' bonus, and paid back less than a 5-follower buy. Ava, Dee and Cal each did these sums correctly.
- In totals: memberless play earned Ava 7 and Dee 10 from Fewest members over the game. Ben's members earned him about 85 in followers and resources. The cost of three players skipping was not only their own missed income: it handed Ben Most member colors uncontested in rounds II and III (16 followers) and left the White contest split three ways.

So Cory's note holds: three players ignored members, and in followers it cost them. The round III complaints that "zero members dominated" (Cal, Ben's "optional") are contradicted by the result.

## F. Process problems in what the players were shown or asked

1. **The primer pushed the experienced players toward contests and away from members.** Its first line calls contests the biggest pool of followers; in this game contests paid 80 split four ways (best: Dee 36), while one player's members paid about 85. The only players who read the primer were the two who skipped members. One game cannot prove the cause, but the primer's opening claim is false here. Fix: state the sources of followers without ranking them, and have players count each line (the later setup added round forecasts that do this).
2. **The primer's wording planted a misreading.** It says Crunch Time "on your last minion... does nothing"; Dee then called Right Away and Crunch Time "nothing" four times though both pay purple ([35], [110], debrief). Fix: say "its extra turn does nothing; its purple still pays".
3. **First-taker +1 was miscounted five times** ([91]/[94] Ava, [155] Ben, [159] Ben, [192]/[194] Dee), though the previews on the options were right. The players trusted the printed "+1 magenta" over the preview. Fix: put "(+1 already taken)" in the space's option label, not only in a separate marker.
4. **Tie payouts were misread three times** ([76]-[78] Cal, [196] Dee, [200] Dee): players divided the prize among all tied players. The rulebook line is there; the option label's "if the round ended right after this: your contests +N" gives one total the player cannot split by contest. Fix: show each contest's payout under the option, including the tie share.
5. **The use-a-member question after every turn was labelled "Pass (recruit nothing)"** ([41], [60], [75], [87], [101], [137], [142]; Dee [153] for Last Callers). It read like a second recruit, fed Ben's recruit confusion at [85]-[87], and produced six Purifiers complaints that are about the question being asked every turn. Fix: label it "Don't use Purifiers" and ask only when using it could change something.
6. **Long payment lists and one-at-a-time picks** ([148], [171], [175], [187], [190]: 43 to 56 splits; Heist [46]-[53], [115]-[122]; Harvest [11]-[13], [105]-[107], [180]-[182]). About a dozen complaints come from this alone. Fix: ask payments as "which colors to keep", let a player answer several picks at once (the later setup does this for resources; steals are still one at a time).
7. **Stale table during multi-step actions** ([52], [53]). Fix: refresh the table view between steps of one action.
8. **No standings.** Ava misjudged Dee for twelve decisions ([166]-[177]) and Dee could not see Ben's engine. Fix: a standings line with each player's followers, locked contest wins and remaining placements (the later setup added one).
9. **Feel notes asked at every decision.** 128 feel notes; Ava's cloak complaint appears 11 times, the end-of-round arithmetic about 20 times. Counted raw, repetition looks like weight. Fix: ask for a feel note only when it is new, or group them by subject before counting, and weigh each player once per subject.
10. **The debrief was not checked against the log.** Debriefs carried false facts (Ben "every round", Cal "never recruited a single member", Ava "20-follower swing"). Fix: hand each player the facts sheet before the debrief and ask them to check each complaint against it (the later setup checks complaints against a winning line).
11. **The review tooling mixes rule versions.** facts-pilot1.md scores Ben at 92 by today's member worths; the game gave him 94. Fix: compute facts from the game's own state.
12. **The "Recruits are scarce" line added after this game** tells players a 1-follower buy uses a whole recruit. True, but in this game nobody was short of recruits in round III, and the memberless players never had another use for them. A blanket "recruits are scarce" may now bias players the other way. Fix: have players count recruits left against resources to convert, as the primer's "think in these units" section already asks.

## G. Patterns in the game nobody commented on

1. **The token fight paid the leader.** Picket Line gave Ben 8 purple, every one from Ava, Cal and Dee taking Purple spaces to fight over the token. Ava and Cal avoided Right Away so as not to feed it, but took Sleep In, On a Roll and Overtime, which fed it just the same.
2. **Two contests split the table.** Most member colors and Fewest members point opposite ways. With three memberless players, the one member builder took Yellow alone (Ben 3 colors against 1, then 4 against 1), and the White prize was shared every round. Yellow paid 20 to two players; White paid 20 across six shares.
3. **The White Cloak player becomes the steal target.** Ava lost 17 resources and 4 followers to steals, more than the other three combined (5 resources, 5 followers and one member). Holding a big pile for Most resources and Cash In made her the obvious victim.
4. **One member dump fed the leader.** Cal's Write-Off pushed Accomplice onto Ava [78]; Ben then took it with Poach [130], re-fired its steal and gained a fifth member color. Cal's move cost Ava 3 and gave Ben about 9.
5. **Swindle's gift can backfire.** Ben's gift of Leavetakers became Cal's whole round II: 4 white from its leave trigger and 7 followers from Farewell.
6. **Nobody went after Ben's members.** Swindle was open all of round III and could take Anchorites (cost 6, +5 at round end); nobody used it. Ava looked at it once, on her last minion ([176]).
7. **Round III Most resources goes to whoever moves last, cheaply.** Resources are worth nothing after round III, so every player converts, and the last mover wins +10 by holding 3. Cal led by up to 30 for most of the round and had to give it up.
8. **Recruits were not the limit in round III.** No player ended with more than 3 resources unspent, so Cash In's real advantage (not using a recruit) was worth almost nothing to anyone this game.
9. **Magenta Cloak was nearly dead.** It paid 2 magenta, because its holder took a single steal space all game.
10. **A game log line shows a payment that did not happen.** Write-Off logs "+N white, +1 white" every time, but the +1 was paid only to the first taker: Cal got 8 in round II (his resources went from 12 to 20), Dee got 7 in round III (4 resources to 11). The log is what the review and a human reader trust; it should show only what was paid.
11. **Turn order rewarded staying low.** From round II, fewest followers goes first; Cal stayed low on purpose ([103]) and opened rounds II and III with Heist both times. (Cal noticed the incentive; nobody noticed it gave one player both Heists.)
