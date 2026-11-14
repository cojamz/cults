# Review of r3g5: what the three player agents got right and wrong

Game: three players, colors White, Red and Yellow (only three colors on the table). Ava (experienced, Yellow Cloak), Ben (experienced, White Cloak), Cal (new, Red Cloak). Final: **Ben 87, Ava 86, Cal 61.** Round-end standings: after round I Ava 22, Ben 20, Cal 6; after round II Ava 56, Ben 51, Cal 19.

Sources: facts-r3g5.md (ledger), moves-r3g5.txt (decisions, numbered [n]), /home/user/pa-games/r3/r3g5/cards.md, the three system briefs, events.jsonl (game log), agents.jsonl (exact prompts), and the engine (src/engine/v4/core.js) where the printed text and the log disagreed. Numbers are counted from the log or ledger unless marked "roughly" or "about".

This is a 3-player game. Cory: the game is not yet balanced for 2 and 3 players. Each finding in C, E and H says whether it is about the player count ("count") or about the cards ("cards").

## The cards that matter in this review

Cloaks: **White Cloak** (whenever you buy followers, +2 white), **Red Cloak** (whenever you recruit a member, +1 red), **Yellow Cloak** (whenever you recruit a member of a color none of your members have, +2 yellow; grey counts as a color here).

Contests (+4 / +6 / +10 by round; tied leaders each get half, rounded up):
- White **Fewest members** (0 counts).
- Red **Most members of one color**. The printed text says "grey members included (each card counts 1)". The engine counts Dabblers as 2 (Ava's round I count of 3 was Early Traders 1 + Dabblers 2). See G1.
- Yellow **Most member colors**. Grey is not a color here (Ben's Spoilsport + Brokers counted 1). Dabblers adds one color you lack (engine, Cory Nov 7 11:41pm). Neither rule is printed. See G2.

Spaces and members named often:
- **Promote** / **Demote** (Red, round II): +3 red. Swap any member for one costing up to 3 more / up to 3 less, from another cult or the shop.
- **Late Shift** (Red, round I): recruit a shop member costing up to 2 per minion you've placed this round, this one included, for free. +1 red.
- **Borrow** (Red, round I): recruit the cheapest shop member, for free. It returns to the shop at round end, before scoring. +1 red.
- **Splurge** (White, round I): +2 white; if you recruit a member this turn, +1 follower per 2 resources paid (per 1 resource in round II).
- **Cash In** (White, center): turn all your white into followers. +1 white. **Farewell**: discard a member for its cost in followers. **Write-Off**: give a member to a rival for its cost in white.
- **Spoilsport** (grey, 8): Round End: choose a contest; nobody wins it this round.
- **Dabblers** (grey, 5, worth 2): counts as 2 wild members.
- **Loyalists** (red, 5): your other members can't be swapped.
- **Anchorites** (white, 6): Round End: if you have 5 or fewer members, +5 followers.
- The "+1 of its color" at the end of a space goes only to the first player ever to take that space.

## Where the followers came from (ledger)

| Player | Final | Bought | Contests | Abilities and space payouts | Printed on members held |
|---|---|---|---|---|---|
| Ben | 87 | 51 | 20 (Fewest members I, II, III) | 13 (Anchorites 10, Splurge 3) | 2 |
| Ava | 86 | 20 | 20 (Most colors I, II; Most of one color I, II) | 41 (Splurge 7, Farewell 7, Patrons 7, Cosmopolitans 6, Guest of Honor 4, Brokers 4, Melting Pot 3, Cash In 3) | 4 |
| Cal | 61 | 13 | 10 (Most of one color III) | 30 (Consolation Prize 10, Purists 9, Melting Pot 4, Gather 4, Brethren 3) | 7 |

Everyone started with 1. Contests paid 50 of the 234 followers; buying paid 84.

Two facts frame the game:
1. **Round III paid Ava 0 of 30 contest followers.** At the start of round III she led Most of one color 4 to 3 and Most member colors 3 to 1. Ben's three Red-space swaps in round III ([100], [110]) and his Spoilsport ([139]) moved all of it.
2. **The 1-follower margin had at least three single causes**: Spoilsport on Yellow (Ava would have tied for +5, final 91 to 87), Cal choosing Ben over Ava for Write-Off's Brokers ([126], +1 printed follower; to Ava it would have been 87 to 86 for Ava), and Ben's swap that put Anchorites (white) in Cal's cult, which turned Ava's outright Yellow win (+10) into a 3-3 tie before the Spoilsport.

---

## A. Each player's line, what it earned, and the decisions that decided the finish

### Ben (1st, 87): a lean White cult on follower buys, then three swaps aimed at Ava

The line: one or two members all game, the White Cloak refunding 2 white on every follower buy, a 5-follower buy almost every turn, Fewest members every round, Anchorites for +5 a round, and Promote and Demote as his only contact with Ava.

What it really earned: 51 bought (12 recruits: 1 member, one 1-follower buy, ten 5-follower buys). The White Cloak fired 11 times for 22 white, about four extra 5-follower buys, roughly 20 followers. Fewest members +20, uncontested every round (his closest rival had 2 members in round I, 4 in round II, 4 in round III). Anchorites +10 and Splurge +3. Ben held 2 members at the end and won, so the small-cult line works on these cards. It was a good line at this table, because nobody else could compete for Fewest members while also chasing Red and Yellow, and the White Cloak made every buy pay part of the next one.

Decisions that decided his finish:
- **[30]–[31] Splurge into Anchorites** (6 resources): +3 from Splurge, +10 over two rounds, +1 printed, and in round III it was the piece he traded for Spoilsport. The best member buy in the game.
- **[75]–[76] Demote: Ava's Clan for the shop's Alchemists.** Clan (round end: +1 per member in your biggest one-color group) was Ava's free Late Shift pick from one turn earlier. It would have paid her about +4 at round II end and about +2 to +4 in round III. Ben paid nothing extra: Demote's +3 red went into his 5-follower buy. Correct and cheap, about 6 to 8 followers off Ava.
- **[99]–[100] Promote: Ava's Dabblers for Cal's Loyalists.** Ava's Red count fell from 4 to 2 and Cal's rose to 5 after Body Snatchers, so the round III +10 went to Cal instead of a 4-4 tie (Ava +5) or an Ava win. It also handed Ava Loyalists, which protected her other members from Ben's next swap; he saw this ([100]) and accepted it.
- **[109]–[110] Demote: his own Anchorites for Cal's Spoilsport.** Cal's Loyalists was gone, so Spoilsport could be swapped. Cost to Ben: Anchorites' round III +5. Effects: Cal (7 members) gained white as a color, which made Yellow a 3-3 tie (Ava's +10 became +5); Ben took away Cal's chance to cancel Ben's own +10 (Cal had named Ben's White as a possible target at [87]); and Ben got to cancel the Yellow tie. On the board: Ben −5, Ava −10. This was the winning move.
- **[139] Spoilsport on Yellow.** Correct target: Red only hurt Cal, White was his own.

A strong player would have done almost all of this. The one improvement he names himself, taking Cash In at [90], would have been worth little: he held 3 white at round III start, so Cash In was about +4, but it would also have denied Ava's Cash In (+5 with Brokers).

### Ava (2nd, 86): wide colors with the Yellow Cloak, free members off Late Shift, liquidation in round III

The line: a new color with each member to feed the Yellow Cloak and Most member colors; Dabblers for Most of one color; Late Shift on her last minion of each round for a free 6-, 8- and 8-cost member; in round III, turn members into followers with Farewell and Patrons.

What it really earned: 20 from contests (all in rounds I and II), 41 from abilities and spaces, only 20 bought. Three free Late Shift members (Dabblers 5, Clan 8, Patrons 7) and a free Borrow (Guest of Honor). The Yellow Cloak fired 6 times for 12 yellow. Through round II this was the strongest position at the table (56 to 51). It was a good line, but it was built from members that rivals could move, and Ben held both Red swap spaces in round III.

Decisions that decided her finish:
- **[3]–[6] Borrow Guest of Honor, then give it to Ben with its own ability.** +4 for no resources, and the card left her cult before scoring. Sharp.
- **[26]–[27] Late Shift into Dabblers.** For no resources it won round I Red (3 to 2; without it Cal wins) and lifted round I Yellow from a three-way 1-1-1 tie (+2) to an outright win (+4), and won round II Red (4 to 3; without it Cal wins +6). About 12 contest followers for Ava, plus about 6 denied to Cal.
- **[47]–[48] Splurge into Brokers in round II** for +7 on the buy. Then Brokers paid +4 from triggers and +7 when Patrons gave it away. 18 followers from one 7-resource member.
- **[67]–[72] Promote Early Traders into Cosmopolitans, rebuy Early Traders, Late Shift into Clan.** Cosmopolitans paid 6. Clan paid 0 because Ben demoted it one turn later. At [68] she considered Promoting Ben's Anchorites instead and rejected it because Ben could swap it back; that reasoning held up (he had Demote left).
- **[93] and [96]: Cash In and Offering, with Promote and Demote both still open.** This is the decision that lost the game. Ava moved before Ben in round III and both Red swap spaces were empty. Cash In (+5) and Offering (+5 yellow into a 5-follower buy) earned her about 11 followers. Taking Promote and Demote instead would have earned about 6 (3 red each into buys) and shut Ben out of both swaps. Kept as they were: Red at worst a 4-4 tie (+5), Yellow outright (+10, Cal at 1 color), Spoilsport still in Cal's cult. She could also have run Ben's own sequence: Promote Cal's Loyalists away, then Demote Spoilsport out of Cal's cult and cancel Ben's White +10. Roughly 15 to 25 followers of margin, depending on what Cal would have cancelled. She wrote in her debrief "I'd treat a free engine as temporary while Promote and Demote are still open to a rival", which is the right lesson.

Her endgame liquidation ([113] Farewell on Alchemists +9, [117]–[120] Late Shift into Patrons and Patrons giving Brokers away for +7) was correct and worth about 16. Her five 1-follower buys cost her little: four of them used a lone leftover resource.

### Cal (3rd, 61, new player): one big red group with the Red Cloak

The line: Gather for red, red members (Loyalists, Purists, Brethren, Body Snatchers) to win Most of one color, Consolation Prize for the contests he lost.

What it really earned: contests 10 (one win, Red in round III, and that win only because Ben gave him Dabblers), abilities 30, bought 13. Three recruits passed with nothing ([19], [60], [105]). The Red Cloak fired 7 times for 7 red. 19 followers after round II. It was not a good line at this table: Ava's Dabblers out-counted his red group in rounds I and II, and seven members gave Fewest members to Ben.

Decisions that decided his finish:
- **[12]–[19] round I: Gather, Loyalists, Harvest, pass, Purists.** 6 followers after round I against 22 and 20. A 5-follower buy at [19] instead of the pass was not possible (4 red held), but a 1-follower buy was; the larger loss is the slow plan itself.
- **[61]–[62] Gather counted with a +1 red that was gone** (he took it himself at [12]). He was 1 short of Clan, Gather's +4 fizzled, and he bought 1 follower. Clan plus Gather would have been about +4 now, +1 from Brethren, and about +4 at round II end, and would have tied Red 4-4 (+3). Roughly 10 followers.
- **[79]–[80] the same miscount on Borrow** (Ava took its +1 red at [3]). He fell back to Consolation Prize, which paid 10, so this one turned out well.
- **[86]–[87] Initiation into Spoilsport instead of Body Snatchers.** For Cal it was worth about +3. It then sat in his cult, protected only by Loyalists, until Ben removed both. Without it Ben has no veto.
- **[126] Write-Off: Brokers to Ben.** Brokers is worth 1 printed follower and could not change White (Ben 1 member, Ava 4). That single follower decided the winner. Cal knew he was choosing who wins ([126] FEEL).

A strong new player would have finished around 70: about 10 from the Gather count, about 3 from the passed recruits.

---

## B. Misreadings

1. **Ben, plan before round I**: "use Guest of Honor every round to hand a cheap member to a rival for +4." Guest of Honor came from Ava's Borrow, whose text says it returns to the shop at round end. The log at round I end: "Ben's Guest of Honor was on loan from Borrow: back to the shop." He repeats it in round I notes and his debrief ("I wasn't sure of the timing").
2. **Cal [13]**: "the Red contest counts each card as 1 anyway, so [Dabblers] wouldn't help me more there." This matches the printed contest text but not the game: Dabblers counted 2 every round (round I: Ava 3 = Early Traders 1 + Dabblers 2). The text is wrong, not Cal (see G1).
3. **Cal [61]**: "Gather now gives +3 red (+1 red too, I think)." The +1 goes only to the first player ever to take the space, and Cal took it at [12]. The preview on the option said "+3 red". [62]: "Ugh, I misjudged."
4. **Cal [79]–[80]**: expected Borrow's +1 red; Ava took it at [3]. The preview's "+1 red" was his Red Cloak. "Borrow's red didn't show up."
5. **Cal [62]**: "Late Shift will only be worth up to 6 then, not 8." His last minion of round II was his fourth, so Late Shift would have reached cost 8.
6. **Ben [100]**: "Cal's red group goes to 3 (Purists, Brethren, Dabblers as wild)." Dabblers counts 2: it went to 4, as Ben saw at [101]. Same text problem as 2.
7. **Ben [110]**: "at round end I wipe Ava's Yellow +10." His own swap had just given Cal white, making Yellow a 3-3 tie worth 5 to Ava. He corrected it at [139] ("tie share"). Same turn: "Cal still leads Red with about 4"; it was 5.
8. **Ava, debrief**: "I'd also stop spending recruits on 1-packs. I made six of them." She made 5 (ledger and log).
9. **Ben, debrief**: "Ava ended with five 1-follower buys and two 5-packs." She made three 5-follower buys.
10. **Ava, debrief**: "Loyalists, cost 5, is the one I should have recruited in round I or II instead of a 5-pack." Cal recruited Loyalists at [13], before Ava's second placement; it was never in the shop for her again. The only way to it was a swap (Promote at [67]: Early Traders 5 for Loyalists 5 was legal).
11. **Ava, debrief, and Ben, round II notes and debrief**: Dabblers "won two contests a round". In round II it decided only Red; Yellow was 2 to 1 for Ava without it. It decided three contests in total for Ava (round I Red, round I Yellow outright, round II Red).
12. **Cal, debrief**: "Protesters was a waste: 6 resources and a recruit." He paid nothing for Protesters; it came free off Borrow at [79] and went back to the shop at round end.
13. **Cal, debrief and [124] FEEL**: Brokers was "a useless card pushed on me" that "cost me in the White contest". Cal had 6 members before Brokers against Ben's 1; it changed nothing in White. And he turned it into 8 white and a 10-follower buy at [124]–[130].
14. **Cal, debrief**: "I spent all my recruits on Loyalists and Purists" in round I. He also passed one ([19]).
15. **Ava, debrief**: Ben's swap "pulled him level with me on Yellow 3-3" through Dabblers. Half true: Cal's 3 colors were red, the one color Dabblers adds, and white from Ben's Anchorites at [110]. Without the Anchorites swap Cal had 2.

Claims I checked that hold: Ava's 91-87 counterfactual (a 3-3 tie pays 5 each); "a tie goes to more members" (Ava [136], Ben [132]); Cal's "my Write-Off gift gave Ben exactly the 1 follower he beat Ava by"; Ava's Brokers ledger (4 from triggers, 7 via Patrons); Ben's Cheerleaders math (+3 against +5); Cal's [87] that Body Snatchers can't act in round III.

---

## C. Complaints and praise, by subject

**Promote and Demote reaching into rival cults.** Complaints: Ava 4 (round II notes, [68] FEEL, debrief bad and change: "engines felt rented"), Cal 1 ([103] FEEL). Praise: Ben 7 ([75], [76], [100], [101], [109], [110] FEELs, debrief good x3, change: "those two spaces carried all of my interaction"). Verdict **1**, cards. Four swaps aimed at rival cults; three of them moved contests worth roughly 25 followers, all off Ava. It is also the only way a lean cult touches Red or Yellow. Part of Ava's loss was her own: in round III she moved before Ben and left both spaces open ([93], [96]), so "nothing I could do" is not true.

**Spoilsport.** Complaints: Ava 4 ([137] FEEL, round III notes, debrief bad, change), Cal 2 (change, again), Ben 1 (change: "worth checking"). Praise: Ben 3 ([90] and [139] FEELs, debrief good). Verdict **1**, cards. It decided a 1-follower game after the last placement. The cancelled contest was worth 5 to Ava, not 10, because Ben's own swap had made it a tie.

**Fewest members owned by one player.** Complaints: Ava 5 (round I, II, III notes, debrief bad, change), Cal 1 (change). Praise: Ben 2 ([44] FEEL on Modest Means, debrief good), Cal 1 ([34] FEEL, the tug of war). Verdict **1**, mostly count. Ben won it +4/+6/+10 with no challenge; the next-smallest cult had 2, 4, 4 members. With three players and one lean player there is nobody to split it; with four, a second small cult is likelier.

**Follower buys on autopilot, and the White Cloak loop.** Complaints: Ben 6 ([54], [121], [134] FEELs, round II and III notes, debrief bad, change on White Cloak), Ava 2 ([28] FEEL, round I notes), Cal 1 ([130] FEEL). Praise: Ben 2 ([10] and [21] FEELs: the 1- vs 5-follower choice). Verdict **1**, cards. 23 of 36 recruit steps were follower buys; Ben's last 10 of 12 were 5-follower buys.

**The last placement is four ways to +1.** Ava 3 ([136], [137] FEELs, debrief change). Verdict **2**. Ava reached her last turn with 0 resources after a 1-follower buy at [115]; Ben and Cal had a 5- and 10-follower buy on their last turns.

**Gifting members (Guest of Honor, Patrons, Write-Off).** Complaints: Cal 3 (debrief bad, change, [124] FEEL), Ava 3 ([19] FEEL, [118] FEEL "oddly costless", change on the ricochet). Verdict **1** for "the giver is paid and the receiver chooses nothing": Ava got +4 and +7. Verdict **3** for Cal's "it hurt me": he lost nothing in White and turned the card into 8 white. Cards.

**Last place picks the winner.** Cal 3 (debrief bad and change, [126] FEEL), Ben 1 ([100] FEEL "kingmaker"). Verdict **1**, mostly count. Cal's Write-Off target decided 87-86, and his Spoilsport ended up deciding it too. With three players every gift from last place goes to one of the two leaders.

**Dabblers too strong for 5.** Ben 4 (round I and II notes, debrief bad, change), Ava 1 ([27] FEEL), Cal 2 (round I notes, round II forecast). Verdict **1**, cards. Free off Late Shift, it decided three contests for Ava (about 12 followers) and then helped Cal to round III Red. "Two contests a round" is an overstatement (B11).

**Guest of Honor snapping back from a Borrow.** Ben 3 ([9] FEEL, round I notes, debrief bad), Ava 1 ([4] FEEL). Verdict **3**. Borrow's text says the member returns at round end; giving it to a rival does not change that. The agents' uncertainty is fair; see G4.

**Demote's 26 swap options.** Ben 2 ([76] FEEL, debrief bad). Verdict **4**. A table scans cults by eye; the list is how the agents see it.

**Makeover's rearrange empty in round III.** Ben 3 ([133] FEEL, debrief bad and change). Praise: Cal 2 ([40] FEEL, debrief good). Verdict **1**, cards (this color set): no contest here counts resources, so rearranging only matters for a colored member cost.

**Brokers arriving dead.** Ben 2 ([132] FEEL, debrief). Verdict **2**; Ben says so himself.

**Round Start members bought in round III never act.** Cal 3 ([87], [107] FEELs, debrief change). Verdict **1**, cards, small: Body Snatchers, Early Traders, Seat Filler and Caravan all lose their main effect if bought in round III.

**Loyalists can be swapped itself.** Cal 2 (debrief bad, change). Verdict **3**: the text says "your other members". It still surprised a new player.

**Extra prompts (Protesters on the last turn, three Harvest picks, a pay prompt with one color).** Cal 4 ([59], [63], [82] FEELs, debrief bad). Verdict **4**.

**Picking a cloak before seeing a turn.** Cal 1 ([1] FEEL). Praise of the cloak draft: Ben 1 ([2] FEEL). Verdict **2**: a first-game knowledge gap.

**Cash In.** Ava 3 ([93] FEEL "a race... more like denial", [94] FEEL and debrief: a single white back that needs a recruit). Verdict **1**, cards, small: Ava's Cash In turned 3 white into 5 followers and left 1 white worth 1 follower and a recruit.

**Offering.** Praise: Ava 2 ([96] FEEL, debrief good). Complaint: Ben 1 ([99] FEEL, "stung more than its size"). Verdict **1** praise: it cost Ben 2 white and Cal 2 red and fed Ava a 5-follower buy.

**Late Shift.** Praise: Ava 5 ([26], [71], [117] FEELs, debrief good), Cal 2 ([15] FEEL, debrief good). Verdict **1** praise, cards. It made placement order matter and gave Ava three members worth 20 resources for free. That is also a lot of value; see H.

**Splurge's round II rate.** Praise: Ava 2 ([47] FEEL, debrief), Ben 3 ([31], [45] FEELs, debrief), Cal 1 (round I notes). Verdict **1** praise: +7 for Ava, +3 for Ben.

**New Blood plus Yellow Cloak.** Praise: Ava 2 ([24] FEEL, debrief), with the caveat "almost free rather than a real choice". Verdict **1**: Early Traders cost 5 yellow and paid 5 back the same turn.

**Early Traders' swap.** Praise: Ava 2 ([39] FEEL, debrief). Counter: Ava [84] FEEL, Alchemists made it a formality. Verdict **1**.

**Farewell and Patrons as round III liquidation.** Praise: Ava 4 ([113], [117] FEELs, round III notes, debrief). Verdict **1**: +16 for her in round III.

**Snake order and back-to-back turns.** Praise: Cal 3 ([12], [127] FEELs, debrief), Ava 1 ([23] FEEL). Tension: Cal [18]. Verdict **1** praise.

**Survey.** Praise: Ben 1 ([20] FEEL). Observation: Ben [64], off-color spaces become plain cash. Verdict **1**.

**Gather's +4 can't fire on the first member.** Cal 1 ([13] FEEL). Verdict **1**, intended by the text, small.

**Consolation Prize.** Cal 1 ([80] FEEL, "sweet and sour"). Verdict **1** praise: 10 followers for 7, the best return on any bought member except Anchorites.

**Protesters' block comes too late.** Ava 1 ([73] FEEL), Ben 1 ([65], "bad trade"). Verdict **1**, small. Nobody paid for it; the one copy came free from a Borrow.

---

## D. What the players got right

- Ben chose the lane nobody else would contest at [2] and stayed in it, and Anchorites was the best member buy of the game.
- Ben found the round III sequence (Promote Loyalists out of Cal's cult, then Demote Spoilsport out) and saw both its cost and its effect on Fewest members. His Spoilsport target was correct.
- Ava's Late Shift timing (last minion of each round) got three free members.
- Ava's use of a borrowed Guest of Honor to give itself away for +4, and her Splurge-into-Brokers turn in round II (+7).
- Ava's round III liquidation: she read correctly that Alchemists, Brokers and her other finished members were worth more as followers.
- Ava [68] correctly rejected Promoting Anchorites off Ben because Ben could swap it back.
- Cal, a first-timer, learned to count exactly: after two miscounts in round II he passed a recruit on purpose at [105] to land Body Snatchers with Gather (+4) and Brethren (+1) at [107], and planned his Write-Off, 1-follower buy, Nest Egg and 10-follower buy finish across a double turn.
- Cal's Consolation Prize at [80] over Assimilators (which would only have tied Red for +3).
- Every player declined Cheerleaders correctly (+3 against +5).
- The debriefs mostly got the causes of the result right, with the counts in B8 to B15 as the exceptions.

---

## E. Members: who recruited what and what it returned

| Member | Who, when, how | Paid | Returned | Verdict |
|---|---|---|---|---|
| Guest of Honor (white, 5) | Ava, I [4], Borrow | 0 | +4 (gave itself to Ben), back to shop | Strong for free |
| Early Traders (yellow, 5) | Ava, I [24] | 5 yellow (New Blood +3 and cloak +2 refunded it) | +2 yellow and 3 color swaps in round II, then Promoted into Cosmopolitans | Good |
| Dabblers (grey, 5, worth 2) | Ava, I [27], Late Shift | 0 | About +12 contest followers to Ava (round I Red and Yellow, round II Red), then 2 printed and the Yellow tie for Cal | Too strong for its price |
| Anchorites (white, 6) | Ben, I [31] | 6 | +3 Splurge, +10, then traded for Spoilsport; 1 printed to Cal | Best bought member |
| Loyalists (red, 5) | Cal, I [13] | 5 | Kept Spoilsport safe until Ben swapped Loyalists itself away at [100]; then protected Ava's members; 1 printed to Ava | Did its job, then switched sides |
| Purists (red, 6) | Cal, I [34] | 6 | +9, 1 printed | Good |
| Brethren (red, 7) | Cal, II [42] | 7 | +3, 1 printed | Weak: less than one 5-follower buy |
| Brokers (white, 7) | Ava, II [48] | 7 | +7 Splurge on the buy, +4 triggers, +7 via Patrons; then 8 white for Cal via Write-Off; 1 printed to Ben | Strong, mostly as something to give away |
| Cosmopolitans (yellow, 7) | Ava, II [68], Promote from Early Traders | 0 extra | +6, 1 printed | Good |
| Early Traders again | Ava, II [69] | 5 | +2 yellow and 2 swaps in round III, 1 printed | Fair; she called the swap a formality |
| Clan (red, 8) | Ava, II [72], Late Shift | 0 | 0; Ben demoted it into Alchemists at [76] | Removed before it paid |
| Alchemists (grey, 7) | Ava, II [76], given by Ben's Demote | 0 | +9 via Farewell (7 plus Brokers 2) | Ben's chosen "dullest" card paid Ava 9 |
| Protesters (grey, 6) | Cal, II [79], Borrow | 0 | Nothing; back to shop | Never used |
| Consolation Prize (grey, 7) | Cal, II [80] | 7 | +10, 1 printed | Good |
| Spoilsport (grey, 8) | Cal, III [87], Initiation; Ben from [110] | 0 | Cancelled Yellow: Ava −5, Cal −5 (+2 back from Consolation Prize); decided the winner | Decisive |
| Body Snatchers (red, 7) | Cal, III [107] | 7 | Gather +4, Brethren +1, 1 printed; its ability never acted; Red would have been 4 to 2 without it | Bought for its side payouts |
| Patrons (white, 7) | Ava, III [118], Late Shift | 0 | +7 (gave Brokers away), 1 printed | Strong for free |

Under- or over-used: members were used heavily by Ava and Cal and almost not at all by Ben, and the player with 2 members won. The members that paid best were the ones that came free (Late Shift, Borrow, Initiation, swaps) or paid every round early (Anchorites, Purists, Consolation Prize). Paid members bought in round II and III returned less than a 5-follower buy unless a space doubled them (Splurge). Count: Ava recruited 7 members herself (4 free), Ben 1, Cal 7 (2 free).

---

## F. Card ideas

- **Sanctuary** (Ava): Round Start, protect one member this round. Real problem seen (Clan, Dabblers swapped away), but Loyalists already does this; it overlaps.
- **Tithe Box** (Ava): convert leftover resources at half rate without a recruit. Answers Ava's own empty last turn more than a table problem; Ben and Cal had full buys.
- **Crowded House** (Ava): a wide cult scores for leading a "most" contest while having the most members. Answers the uncontested Fewest members, but pays the player already winning contests.
- **Appeal** (Ava): restore a contest Spoilsport cancelled. Answers the Spoilsport moment; a card that only answers one card.
- **Hermit** (Ben): extra followers when you lead Fewest members alone. Makes the uncontested contest pay more; the opposite of what this game needed.
- **Audit** (Ben): make a rival pay to keep a contest lead. Answers "a lean cult can't touch Red or Yellow except by swaps", which was real here.
- **Recluse** (Ben): grey member counting as 0 members. Ghost already exists in the deck in a similar shape.
- **Last Rites** (Ben): discard your last member for followers equal to the contests it helped win. Answers the flat last turn; "helped you win" is hard to track at a table.
- **Return to Sender** (Cal): give a gifted member back. Answers the gift complaints, which were only half real (B13).
- **Big Household** (Cal): +1 per member beyond the fewest held. A direct answer to the uncontested Fewest members; would have paid Cal about 5 a round.
- **Family Reunion** (Cal): a Red space paying per member in your biggest group. Clan already does this.
- **Underdog** (Cal): resources for the player with fewest followers. Answers Cal's round I fall-behind, which came from his own plan.

---

## G. Process problems that remain

1. **The Red contest text says "each card counts 1", and the game counts Dabblers as 2.** Misled Cal [13] (he skipped Dabblers for this reason) and Ben [100]. Fix the contest text in the brief and the game (or the engine, if Cory wants 1).
2. **Dabblers' effect on Most member colors (adds one missing color) and "grey is not a color" in that contest are printed nowhere.** Ava [27] had to "dig through the primer"; Cal, the new player, had no primer. Print both on Dabblers and the Yellow contest.
3. **The first-taker +1 is only marked when it is still there.** At Cal's [61] prompt Gather read "Gather [OPEN]: +3 red. ... +1 red." with no sign it was gone. Cal miscounted twice ([61], [79]). Mark it "+1 taken".
4. **A member on loan from Borrow is not marked as on loan in the receiver's view.** Ben [9] and his round I plan. Show "on loan, returns at round end" on the card wherever it sits.
5. **Debriefs still miscount the ledger** (B8, B9), with the facts in front of them. Put each player's buy counts as plain lines in the debrief prompt, or have the debrief quote them.
6. **Useless prompts**: Protesters' On Use offered after the last minion ([82]), a pay prompt with one color held ([63]), Harvest still felt like three questions ([59]). Skip prompts with one possible answer.
7. **Long swap lists** on Promote and Demote ([76], 26 options). Group by cult.

---

## H. Patterns in the game nobody commented on

1. **Ben won with 2 members.** The small-cult line won here, by 1, on Fewest members, Anchorites and the White Cloak. Cards and count (no second lean player).
2. **All 30 round III contest followers moved because of swaps and a veto, and Ava, the leader at round III start, got none.** Ben's two swaps and Spoilsport moved roughly 25 followers between Ava and Cal. Cards.
3. **Turn order handed the round III Red spaces to one player.** Round III order was Cal, Ben, Ava (fewest followers first). Ava had first pick of Promote and Demote at [93] and [96] and took neither; nobody remarked that the leader's double turn came before Ben's swaps. Cards.
4. **Most member colors caps at 3 with three colors on the table, so ties at the cap are easy.** Round III was a 3-3 tie; any player holding one member of each color plus Dabblers is at the cap. Count (the color count follows the player count).
5. **The leader's own gift fed the second player through last place.** Ava's Patrons gave Brokers to Cal (+7 for Ava), Cal's Write-Off passed it to Ben (+8 white for Cal, +1 for Ben), and that +1 was the margin. Two gifts in a row, each paying its giver, ended with the follower in the third cult. Cards.
6. **Late Shift and Borrow gave five members free (Guest of Honor, Dabblers, Clan, Patrons, Protesters), worth 31 resources by price; Initiation gave an 8-cost Spoilsport.** Dabblers (about 12 in contests) and Patrons (+7) matched the best bought members (Consolation Prize 10, Purists 9) at no cost, so the free-recruit spaces were the best member source at this table. Cards.
7. **Resources never mattered in any contest here,** so every leftover went into follower buys and Makeover's rearrange, Early Traders' swap (with Alchemists) and pay-color choices were mostly empty. Cards (this color set).
8. **Cal passed three recruits and still finished on 61;** the gap to the top two (26) came from contests (10 against 20) and buying (13 against 51 and 20). Cards and count.
