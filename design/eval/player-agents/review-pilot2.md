# Review of pilot2: what the four player agents got right and wrong

Game: pilot2, 4 players, colors Red, Magenta (thieves), Yellow, Green (echo), current rules (each member worth 1 follower and counting as 1 member, unless it says otherwise). Ava and Cal were briefed as first-time players, Ben and Dee as experienced players. All four ran on the same model.

Sources checked: the facts sheet, every decision in moves-pilot2.txt, cards.md, both briefs, the rulebook, the raw game log (events.jsonl) and the full prompts in agents.jsonl where a claim needed checking. A claim by an agent is treated as a claim, not as evidence.

Result: Ben 67, Ava 66, Cal 57, Dee 54. Follower totals at each round's end: after round I Cal 19, Ava 10, Dee 8, Ben 6; after round II Ben 35, Cal 31, Dee 26, Ava 25.

## Cards named in this review

Spaces (each also gives +1 of its color to the first player ever to take it):
- **Late Shift** (Red): recruit a shop member costing up to 2 per minion you have placed this round, this one included, for free.
- **Borrow** (Red): recruit the cheapest shop member for free; it goes back to the shop at round end, before scoring.
- **Promote** / **Demote** (Red): +3 red, and swap any member for one costing up to 3 more (Promote) or up to 3 less (Demote), from another cult or the shop.
- **Initiation** (Red, round III): recruit a shop member costing 10 or less, for free.
- **Help Yourself** (Magenta): steal 1 resource per minion you have placed this round.
- **Catch Up** (Magenta): +2 magenta per rival holding more resources than you.
- **Heist** (Magenta): steal 4 followers and 4 resources.
- **Swindle** (Magenta): steal a rival's member costing up to 7 and give them a shop member of your choice.
- **Poach** (Magenta, round III): take a rival's member of your choice, free.
- **Survey** (Yellow): +1 yellow per minion on the busiest color. **Harvest**: +3 in colors you choose. **Makeover**: +4 yellow, then rearrange all your resources. **Melting Pot**: +1 follower and +1 resource per color among your members. **Offering** (round III): +5 yellow; each rival discards 2 of each color among your members.
- **Echo** (Green): copy the previous action. **Reprise**: copy an action under one of your own minions. **Cover**: copy an action under a rival's minion. **Crowd**: +1 follower per minion on Green, +3 green. **Build Up**: +1 green per minion on Green. **Greatest Hits** (round III): copy every action you have on one other color.

Cloaks (one each, picked before round I): **Red Cloak** +1 red whenever you recruit a member; **Magenta Cloak** +2 magenta whenever you steal; **Yellow Cloak** +2 yellow whenever you recruit a member of a color none of your members have; **Green Cloak** +2 of the copied color whenever you copy an action or a member.

Contests, scored at every round end, +4 / +6 / +10 to the leader, split if tied: Red "most members of one color (grey included, each card counts 1)"; Magenta "most resources held"; Yellow "most member colors"; Green "most minions on Green spaces".

Members:
- **Dabblers** (5 any): worth 2, counts as 2 wild members.
- **Purists** (6): Round End, +3 followers if your members have 2 or fewer colors.
- **Seat Filler** (5): Round Start, you may put it in the shop and recruit a shop member costing up to 3 more, free.
- **Early Traders** (5): Round Start, +2 yellow and swap up to 4 resources one for one.
- **Line Cutters** (4 any): you go first every round.
- **Copyist** (5): +2 followers whenever you copy an action.
- **Cat Burglars** (8): Round End, before scoring, steal 3 resources.
- **Doppelganger** (8): On Recruit, becomes a copy of another of your members.
- **Cheerleaders** (7 any): +2 followers whenever you win a contest.
- **Alchemists** (7 any): all your resources count as any when you recruit a member.
- **Mutineers** (6 any): once per game, take a member from a rival with more members than you.
- **Cosmopolitans** (7): Round End, +1 follower per color among your members.
- **Kidnappers** (10): worth 2, counts as 2; Round End, a rival you choose gives you one of their members.
- **Matchmaker** (8): whenever you recruit a yellow member, +2 resources of any color and +3 followers.
- **Wallflower** (12): whenever you copy an action, double the resources it gives.
- **Protesters** (6 any): once per round, block one open space for the round.
- **Consolation Prize** (7 any): Round End, +2 followers per contest you don't win.
- **Accomplice** (5): On Recruit, steal 3 resources. **Mentor** (8): On Recruit, recruit the cheapest shop member. **Panel** (9): once per round, promote or demote another of your members.

Buying followers costs 1, 5 or 10 resources for the same number of followers, one recruit each. The rate is the same at every size.

---

## A. Each player's line, what it earned, and the decisions that decided it

### Ben (experienced, 1st, 67)

**Line.** Yellow Cloak, a new member color with most recruits, fight for Yellow and Red, hold resources for Magenta when cheap, cash out late.

**What it earned (facts sheet):** contests 35 (the most at the table: Yellow +2 in round I; Yellow, Red and Magenta +6 each in round II; Red +10 and half of Yellow +5 in round III), bought followers 26, Melting Pot 4, Crowd 4, Copyist 2, Matchmaker 3, printed followers of 8 counted members, 1 at the start, minus 16 lost to Heists. The line was right for this table: four contests a round are worth 80 followers in all, and Ben took 35 of them. Seat Filler brought Cat Burglars (8) and Cosmopolitans (7) in free, which saved two recruits.

**Decisions that decided his finish:**
1. **[131]-[132] Demote on the last placement of round II**, swapping his Line Cutters for Dee's Dabblers. It took the Red +6 away from Dee, kept Yellow, and left Dee empty-handed in round II apart from Green. It was worth about 12 followers between Ben and Dee. A strong play, and the reasoning at [132] is sound. (The reason written at [131] describes a different swap, Cat Burglars for Copyist, so the placement reason and the pick do not match; see F.)
2. **[107], [109], [133] passing three recruits to guard Magenta.** Ben won round II Magenta 9 to 8 after Dee's Cat Burglars took 3 from him. One 1-follower buy would have made it 8 to 8 and halved the prize. The passes earned a net +2 to +3 each over buying. In his debrief Ben calls these passes a mistake worth "3 to 5 sure followers"; the game log says the opposite.
3. **[212] Protesters instead of Seat Filler from his free Late Shift recruit.** His stated reason was "a fourth member colour", but grey members do not count in Yellow's contest (round I and the screen at [212] both show it: Ben 3, Dee 3). Seat Filler (red) would have given him that fourth color. At round end Ben tied Dee for Yellow at 3; with Seat Filler he would have led 4 to 3 and taken +10 instead of +5, about +5 followers, unless it changed Dee's later swaps.
4. **[236] Mutineers on Dee's Dabblers, the second-to-last decision of the game.** This won the game. It flipped Red (+10) and half of Yellow (+5) to Ben, brought Dabblers' 2 printed followers, and set off Matchmaker (+3 followers, +2 resources) and the Yellow Cloak (+2 yellow), which turned what would have been a 5-follower buy into a 10-follower buy. Total effect on Ben about +25; on Dee about -20. Mutineers was only legal because of Dee's own Demote at [228] (see Dee).
5. **[240] Borrow then a 10-follower buy.** Ben valued Borrow at +11 against Harvest's +10 because of Borrow's "+1 follower". The borrowed Seat Filler left at round end ("Ben loses Seat Filler" in the log) and took its follower with it. Harvest would have scored exactly the same 67. Not a loss, but the reason was wrong.

### Ava (first-timer, 2nd, 66)

**Line.** Red Cloak and red members in round I (abandoned), then hoarding for Magenta and Heist in round II, then the empty Green contest in round III, with nearly every recruit spent on 5-follower buys. One member all game, Consolation Prize, on her last recruit.

**What it earned:** bought followers 31, contests 14 (Magenta +4 in round I, Green +10 in round III), Heist net +8 (she stole 12 and lost 4 to Dee's Cover), Crowd 5, Consolation Prize 6 plus its printed 1, 1 at the start. It was a good line for this table in round III: nobody had a minion on Green at the start of round III, and she saw it ([419] notes: "nobody has touched Green"). In round II it was weak: she ended with no members and 2 resources.

**Decisions that decided her finish:**
1. **[113] Late Shift, believing it was her 4th minion.** It was her 3rd (her screen said "minions left this round 2" out of 4), so Late Shift could only recruit a member costing 6 or less; Mentor costs 8, and nothing in the shop cost 6 or less. The log line was "Ava's Late Shift: 3 minions placed, and no shop member costs 6 or less." The placement gave nothing at all (its +1 red had been taken in round I) and her recruit was skipped because she held nothing. Survey was open and paid +5 yellow (Cal took it next and got exactly +5), which she could have turned into a 5-follower buy. That is about +5 followers: Ava would have finished 71 to Ben's 67. **This one misread cost her the game.**
2. **[85] Reprise copying her own Heist**: +4 followers taken from Cal and 2 resources. Good, and the kind of combo the game wants found.
3. **[152], [192], [201] three minions on Green in round III**: Green +10 and Crowd +5. She took Build Up last, after Cal had 2 Green minions, and correctly saw it was the last Green space.
4. **[230]-[231] Consolation Prize instead of a 5-follower buy**: +7 against +5, so +2. Correct, and her math (3 contests lost, +6) was exact.
5. **[25], [47] passing two recruits in round I** to keep the Magenta lead. She won Magenta +4 with 6 resources; the passes cost at most 2 followers. Fine.

### Cal (first-timer, 3rd, 57)

**Line.** Magenta Cloak, steal to fire it, try to hold the most resources; in practice he cashed nearly every resource into follower buys and kept to two member colors for Purists.

**What it earned:** bought followers 35 (the most at the table), contests 6 (all in round I: Red +4 and half of Yellow +2, both through Dabblers), Purists 9 plus its printed 1, Heist net +2 (stole 8 from Ben, lost 6 to Ava), Melting Pot 2, 1 at the start. He won no contest after round I. The cloak paid about 10 magenta over 5 steals, but he spent his pile to zero on most turns ([33], [78], [83], [115], [218]), so he never held the most resources at a round end. It was not a good line at this table: the Magenta contest was fought by three players and attacked by Cat Burglars and Offering.

**Decisions that decided his finish:**
1. **[6] Dabblers in round I**: it won him Red +4 and half of Yellow +2 before Ben took it at [56]. Good buy.
2. **[35]-[36] Late Shift for a free Purists**: 9 followers from its ability plus 1 printed for one placement. The best single pickup of his game.
3. **[164] and [183] Cover and Reprise copying Dee's Heist** in round III: 8 followers taken from Ben plus 4 magenta from the cloak. Good.
4. **Round II, [77]-[84] and [114]-[119]**: four follower buys and no contest. Cal never held a pile at a round II scoring. This is where the 10-follower gap to Ben came from: Ben made 35 from contests, Cal 6.
5. **[216]-[219] Melting Pot, buy 5, then plan Catch Up last.** Ava took Catch Up first at [230] and Cal's last minion bought 1 follower. Taking Catch Up at [216] while three rivals held more than his 3 would have paid about +7, and Melting Pot would still have been open for the last minion. Roughly +3 to +4 followers.

### Dee (experienced, 4th, 54)

**Line.** Green Cloak and a copy engine with Copyist in round I; from round II, attacking Ben with Swindle, Promote, Demote, Heist and Poach, while holding resources for Magenta behind two Cat Burglars (one a Doppelganger copy).

**What it earned:** contests 25 (Green +4 in round I, Green +6 in round II, Magenta +10 and half of Yellow +5 in round III), bought followers only 4, Copyist 4, Heist net +6, Cheerleaders 6, Cosmopolitans 3, 5 printed, 1 at the start. She passed 5 recruits. The opening was coherent; the switch to attacking Ben was reasonable (Ben projected far ahead after round II) and very nearly won: her own screen at [227] projected her 65 to 70.

**Decisions that decided her finish:**
1. **[225] Promote: she changed her target from Panel in the shop to Ben's Cosmopolitans**, which put Mutineers back in Ben's hands. With Panel, Mutineers stays with Dee and Ben has no last-turn answer.
2. **[228] Demote: Ben's Kidnappers (counts as 2 members) for Matchmaker (counts as 1).** This dropped Ben from 7 counted members to 6 against Dee's 7, which is the only reason Mutineers became legal for Ben. It was done to stop Kidnappers taking Dabblers, but under Kidnappers the rival who gives chooses which member to give (card text and engine), so Kidnappers could never have taken Dabblers. It also handed Ben Matchmaker, which paid him +3 followers and +2 resources when Dabblers arrived. Either [225] with Panel or [228] with Stash instead would have kept Dabblers with Dee: she wins Red, Yellow and Magenta and finishes around 70 to 74, Ben around 42 to 47. **These two decisions cost her the game and decided Ben's win.**
3. **[127] Promote: her Copyist for Ben's Cat Burglars.** It gave up the engine her round I was built around. Ben answered with Demote at [131]-[132] and Dee still lost Magenta 8 to 9. Copyist then paid Ben only 2 followers all game.
4. **[149]-[151] Doppelganger copying Cat Burglars, 8 resources and a recruit.** At round III's end the copy found nothing to steal ("Dee's Cat Burglars: no rival to steal from"). Dee won Magenta 10 to 0, 0, 0 on her own pile plus the first steal. The 8 resources bought 1 printed follower and the cloak's 2 magenta.
5. **[14] Echo on Ava's Catch Up**, counting on the cloak plus the copy to reach Copyist's price. The cloak paid first, which lifted her above every rival, so the copied Catch Up paid +0. One resource short, she spent the recruit on 1 follower and needed Build Up to buy Copyist, and then lost Reprise to Cal.

---

## B. Misreadings: claims that contradict the cards, the rules or the game log

Rules and card text:
1. **[40] Ben**: "Line Cutters is grey, which counts as a new colour... takes me to 3 member colours, which breaks the 2-2 yellow tie." Grey does not count in Yellow's contest. Round I ended with Yellow "Ben 2, Cal 2" and a split. Grey counts as a color only for "a color none of your members have" (the Yellow Cloak did pay).
2. **[111] Dee**: Cheerleaders, "as a grey member it adds a color for Yellow." Same error.
3. **[137] Ben** and his round II plan: Cosmopolitans paying "+4 to +5 off my four or five member colours." Without grey, Ben had yellow, green and one color from Dabblers: 3.
4. **[212] Ben**: "Seat Filler (red) and Protesters (grey) both give me that [fourth colour]... strictly better than Seat Filler." Protesters added no color. The screen showed Ben 3, Dee 3 at that moment.
5. **[207], [208], [211] Ben**: "Kidnappers' round-end grab of Dee's Dabblers." The card says "a rival you choose gives you one of their members": the giver picks. Dee would have given her least useful member.
6. **[224], [227] Dee**: "Kidnappers... could grab one of my greys at round end and crack both my +10 Red and Yellow leads." Same misreading, and her defensive Demote at [228] built on it is what made Mutineers legal.
7. **[225] Dee**: "Ben gets a Mutineers he can't fire, since I won't have more members than him." True at that moment (7 to 7). Her next move, [228], cut Ben to 6, and the reason at [228] never rechecks Mutineers.
8. **Dee's debrief**: "My Dabblers counting as 2 put me over his member count, so Mutineers fired." Dabblers had counted as 2 all along. What changed the count was her own Demote of Kidnappers (counts 2) into Matchmaker (counts 1).
9. **[113] Ava**: "This is my 4th minion this round, so Late Shift lets me take a member costing up to 8." It was her 3rd; the screen said "minions left this round 2" of 4.
10. **[123] Ava** and her round II notes: "my move log says I took Late Shift for Mentor." The only "log" saying that was her own reason, repeated back to her under YOUR LAST MOVES. The game log said Late Shift found nothing costing 6 or less.
11. **Ava's debrief**: "by my count Late Shift plus Mentor would have been two free members." Wrong for the same reason.
12. **[240] Ben**: Borrow "+1 follower... the same 10-buy, +11." Borrow's member and its printed follower left at round end. Ben had said so himself at [8] and [39].
13. **Ben's debrief**: "without the Borrow-plus-10-buy I tie or lose to Ava by a follower." Harvest gave the same total. "Without the Mutineers steal I finish third": he would have finished last, around 42 to 47.
14. **Ben's debrief**: "Copyist and Wallflower... never fired once." Copyist fired once, at [179] (+2, on the facts sheet).
15. **Ben's debrief**: "one Heist plus two copies of it." Four Heists hit him in round III (Dee's Heist, Ava's Echo, Cal's Cover, Cal's Reprise of that Cover), 16 followers in all.
16. **Ben's debrief**: the passed recruits "were worth 3 to 5 sure followers." The round II passes won Magenta 9 to 8; the round III pass at [215] went into the final 10-follower buy.
17. **[236] Ben**: "her 8 counted members beat my 6." Dee had 7 (the screen said so). The conclusion still held.
18. **[131] Ben**: "Dee's Dabblers puts her level with my 5 members." Dee had 4. The conclusion (no target) still held.
19. **[39] Ben**: "Ava and Dee can only reach about 3 with their last minions." Ava reached 6 through Borrow into Accomplice's steal of 3. Ben had named that exact route one decision later.
20. **[14] Dee**: Echo plus the cloak "turns Ava's Catch Up into exactly the Copyist price." The "+2 magenta" in the preview was the cloak; the copied Catch Up paid 0. Dee found this at [16], but her debrief lists it as a highlight anyway.
21. **Dee's round I notes**: "finishing round I at 8 followers with no contest won." She won Green +4. **Round II notes**: "I won nothing again." She won Green +6 and Cheerleaders paid +2 for it. **Debrief**: "won only one contest in the whole game (Magenta in round III)" and "finishing rounds I and II with no contest won." She won four: 25 followers.
22. **Dee's debrief**: Cheerleaders "only fired once, on round III Magenta, so 1 printed + 2 = 3 followers for 7 resources." It fired three times (round II Green, round III Magenta and the Yellow tie): 7 followers for 7 resources and a recruit.
23. **Dee's debrief**: Doppelganger copying Cat Burglars "earned its keep by locking Magenta." The copy stole nothing; Magenta was 10 to 0 without it.
24. **Dee's debrief**: "Ben ended up winning with [Copyist]." Copyist paid Ben 2 followers.
25. **Ava's debrief**: Ben's members "fed his copy chain (Copyist plus Wallflower)." Wallflower never fired; Ben made one copy all game.
26. **Ava's and Cal's debriefs**: "Ben's 8 members won him the Red contest" / "carried him through the Red and Yellow contests." Until the last turn Ben trailed Dee in both (Red: Dee 3, Ben 2; Yellow: Dee 4, Ben 2 on Ben's screen at [236]). One card, Dabblers, taken on the last placement, decided both.
27. **[204] Cal**: all six Green spaces filled "while I wasn't looking, and I had no way to see it coming." At [183] the wheel showed Ava on Green and the turn list showed Ava placing twice before Cal's next turn.
28. **Cal's debrief**: "Dee's two Cat Burglars and Ben's Offering kept eating my pile." Cat Burglars took 2 resources from Cal in the whole game; Offering and its copy took 8.

Smaller slips not counted as misreadings: Dee calls Line Cutters her "best buy" (Ben gave it to her through Demote); Ava's [125] confusion about getting a recruit with "0 minions left" (the recruit belongs to the minion just placed).

---

## C. Every complaint and praise, grouped, with a verdict

Verdict key: (1) true about the game, would bother a player on any line; (2) real but caused by the player's own plan or misplay; (3) a misreading; (4) caused by how the agents are run.

**C1. One pick at a time (Heist followers and resources, steals, Harvest colors, Matchmaker's wild colors, Early Traders swaps, payment splits).** Complaints: Ava about 10 times (feel notes at [22], [46], [70], [74], [124], [154]-[157], debrief bad and change), Dee about 9 ([98], [135], [141], [142], [147], [244], debrief bad and change), Cal 4 ([118], [173], [217], debrief), Ben 5 ([41], [53], [238], [239], debrief). Praise for the first pick: Cal [31], [89]; Ava [44], [67], [68]. **Verdict (4), with a smaller (1) part.** Of 245 decisions, 49 were single Heist picks (28 followers, 21 resources) and 35 were payments, many with one sensible answer. The agent setup asks each one as a separate question. The first pick of a steal is a real choice and the agents enjoyed it; the third and fourth are not. The real screen may share some of this (four separate clicks for one Heist), so it is worth checking there, but most of the volume here comes from the harness.

**C2. A lone 1-follower buy or pass, again and again.** Ava [25], [47], debrief; Cal [37], [119], [234], debrief; Dee [16], [64], [196], [200], [226], debrief bad and change; Ben [209]. **Verdict (2) and (4).** The rate is 1 resource per follower at every size, so a 1-follower buy is never a worse rate; it only spends a recruit that passing would also lose. It "felt poor" only when holding the resource mattered for Magenta, which was the player's plan. The "nag" part (Dee: "being offered the same lone 1-follower buy again") comes from the harness asking a full question each time.

**C3. Cat Burglars (and Dee's Doppelganger copy) decide Magenta before scoring.** Ava [94], [202], [220], debrief bad and change; Cal [190], [219], debrief bad and change; Ben debrief bad and change; Dee praises the tension at [227], [229]. **Verdict (1), with a caveat.** Two steals of 3 before scoring move a resource-count contest by up to 12, and you cannot answer them. In round III the three rivals all emptied their piles instead of contesting (Ben's 10-follower buys at [181] and [241], Ava's and Cal's 5-follower buys), and Dee won 10 to 0, 0, 0; the second steal found nothing. But round II shows it can be beaten: Ben held 12, lost 3 to Dee's single Cat Burglars, and still won 9 to 8. What decided round III was the threat, not the steal.

**C4. "After this payment you no longer lead magenta."** Praise: Cal [7], [206], debrief good; Ben [28], debrief good. Complaints: Dee [20], [150], debrief bad; Ben [59]. **Praise holds (1); the complaint is (4).** The warning is useful when one option keeps the lead. It is computed before the cloak's refund or a round-end steal (Dee at [150]: Doppelganger plus the cloak put her straight back), and it printed the same warning on every option.

**C5. Trusting the "if the round ended now" line.** Ava [202], debrief bad and change; Dee [136] (a steal "costs me Green"); Ava [161]. **Dee's case (4), Ava's case (3) and (4).** At the round II end, the preview said every steal choice would lose Dee the Green contest, which cannot be true; it ran on a state where the round end had already started. Ava's question, whether it counts Cat Burglars, is answered in the STANDINGS header ("round-end cards, contests"), but nothing says whose pile the stand-in steal takes.

**C6. Swap menus of 50 to 120 rows.** Ben [132], debrief; Dee [128], [225], [228], debrief. Praise for the contest-change hints on those menus: Ben [56], [237], debrief; Dee [62]. **Verdict (4) mostly.** The rows are every member times every target. At a table you look at the cards. The hints made the menus usable, as both said.

**C7. Heist and its copies piling onto one player.** Complaints: Ben [176], [207], debrief bad and change; Dee [96] ("a snowball the others can only answer by copying her"). Praise: Ava [85], [152], debrief good (twice); Cal [164], [185], debrief good; Dee [97], debrief good ("a real catch-up valve"). **Verdict (1).** Heist was used 7 times in two rounds, 5 of them copies, moving 28 followers. In round III all four hit Ben, 16 followers and most of his pile within the first seven placements of the round. Both sides are true: copying a big steal is a fun, readable find, and the target has no defense once the copy spaces are gone. Every copy was aimed at the player then leading.

**C8. Ava came within 1 follower with a single member.** Ben, Cal and Dee each raise it under "change"; Ava calls the end "decided by things I never touched." **True as a fact (1), but not a flaw by Cory's own bar**: winners with 5 or fewer members should take at least 20% of games. Ava's 66 came from 31 bought, 14 contests, 8 net from Heists, 5 from Crowd and 7 from Consolation Prize. The two first-timers held 3 members between them and scored 123.

**C9. Dabblers decides Red and Yellow.** Ben's round I notes and change; Ava's first forecast; Dee [195]. **Verdict (1).** Dabblers changed hands five times (Cal recruited it; Ben's Swindle; Dee's copied Swindle; Ben's Demote; Dee's Poach; Ben's Mutineers). Its holder at each round end won Red every round and won or tied Yellow every round. In round III alone it moved 15 contest followers on the last placement.

**C10. Conditions that read differently from each side (Mutineers).** Dee [243], debrief bad and change. **Verdict (3).** The rule is plain and Dee had the counts on her screen. Her own Demote changed the count (B7, B8).

**C11. The last placement decides the round.** Dee's change; Ben praises "last-placement gotchas"; Dee [134] ("the snake's final placement really is a hammer"). **Verdict (1).** Round II was decided by Ben's last placement (Demote), round III by Ben's last two actions (Mutineers, then Borrow and the 10-follower buy). See H2 for why it was the same player both times.

**C12. Members moving between cults are hard to follow.** Cal's round I notes, debrief bad and change; Dee's change. **Verdict (4) for Cal, partly (1).** Cal wrote his round I notes without being shown that Ben's Swindle had taken his Dabblers (the notes prompt has no "since you last looked" lines; see F3). On a table, 11 member moves in rounds II and III would also be a lot to track.

**C13. Borrow's preview oversells it.** Ben [8], [39], debrief bad; Cal [233]. Praise: Ben [240], Borrow "turns from a trap into the best click." **Verdict (1) and (4).** The option label promises "+1 followers; +1 members", which both vanish before scoring. Ben flagged this twice and still counted the +1 at the game's last decision. The "best click" praise rests on that mistake: Harvest was equal.

**C14. Late Shift failed silently and showed no preview.** Ava [113], [123], round II notes, debrief bad and change. **Verdict (3) and (4).** Ava miscounted her minions. But she was never shown the outcome of her own move, the option label was a bare "Red · Late Shift" instead of saying it would recruit nothing, and YOUR LAST MOVES repeated her own wrong reason back to her as if it were a record.

**C15. Spaces I was saving got taken.** Cal [114], [204], [233], debrief bad (he says "that one's on me"); Ava [42]. **Verdict (2).** Normal worker placement, and Cal says so himself.

**C16. Holding for Magenta versus spending on followers.** Praise: Ava [12], [38], [75], debrief good; Ben [27], [28], [107], [109], notes, debrief good; Cal [174], debrief good; Dee [129], [227]. Complaint: Cal debrief bad #3, "undid itself." **Praise holds (1)**, backed by Ben's 9-to-8 win in round II, where each passed recruit mattered. Cal's complaint is (2): he spent to zero almost every turn.

**C17. Snake double turns.** Praise: Cal [29], [80], debrief good; Dee [197], [224], debrief good; Ben [108], [179]. **Holds (1).**

**C18. Seat Filler's free upgrade.** Ben [51], [137], debrief. **Holds (1):** two free members worth 8 and 7 from a 5-cost card.

**C19. Free members from Late Shift and Initiation.** Cal [36], debrief good; Ben [211], [212]. **Holds (1):** Purists paid Cal 10 followers for one placement; Initiation gave Ben a 10-cost member.

**C20. Catch Up as a comeback.** Ava [11], debrief good; Cal [77]. **Holds (1):** it paid 5, 6 and 4 magenta to the emptiest hand. It also rewards spending to zero first (Cal's plan), which the agents enjoyed.

**C21. Makeover's rearrange did nothing.** Ava [221], debrief bad; Cal [118]. **Verdict (2):** they were cashing out, or holding Alchemists. Both said so.

**C22. Round III was cranking follower buys, samey.** Ava debrief bad (marked "no, my plan"); Cal [116], debrief bad. **Verdict (2):** Cal made 11 follower buys and Ava 7; Ben and Dee, with members to use, did not report it.

**C23. The Magenta Cloak is a trap for a first-timer.** Cal's change. **Mostly (2), partly (1).** The cloak paid about 10 magenta. Cal never held a pile at scoring because he spent it. But it does point a new player at the contest that every steal on the board attacks.

**C24. Offering twice in a row.** Cal [183], change. **(1), small:** Ben's Offering plus his Greatest Hits copy took 8 resources from Cal in two placements, the same "copy the big action" pattern as Heist.

**C25. Purple rules are dead weight to read.** Ava's change. **(4):** the brief gives the full rulebook, including colors not in this game.

**C26. Picks with nothing at stake.** Ben [41] (payment splits identical after the cloak refund), [238], [239], debrief bad. **(4) mostly:** separate questions for choices that cannot matter.

**C27. Promote and Demote fighting over one card.** Ben [131], debrief good; Dee [127]. **Holds (1).**

**C28. Choosing the dud to hand back on Swindle and Demote.** Ben [57]; Dee [63], [199], [228], debrief good. **Holds as a decision (1).** Caveat: Dee's "dud" at [63], Mutineers, won Ben the game.

**C29. Protesters blocking a space.** Ben [213], [214], debrief good. Cannot be measured from one game; Ben blocked Help Yourself, and nobody shows an effect either way.

**C30. Mutineers as a clean, readable finisher.** Ben [236], [237], debrief good. **True as an experience,** but "readable" is undercut: both experienced players misjudged when it was live, and its effect included two triggers nobody planned for (H1).

**C31. Consolation Prize turning into the best buy.** Ava [230], debrief good. **Holds (1):** +6.

**C32. Picking a cloak blind.** Ava [2] ("a shot in the dark"); Dee [1] and Ben [3] liked it. Mixed, and fits the briefs: a new player cannot judge cloaks yet.

**C33. Heist promised 4 resources when rivals held 3.** Ava [91]. **(1), minor:** the rulebook says nothing drops below 0; the space text could say "up to".

---

## D. What the players got right

- **Ben's read of Cal in round I:** he projected Cal at 50 to 55, then 55 to 60. Cal finished 57.
- **Ava's read on Green going into round III:** "nobody has touched Green". Nobody had a minion there; she won it with 3 minions.
- **Ben [181] cashing 10 before Cal's turn:** "in round III the magenta lead feels more like a lightning rod". Cal's copied Heist two placements later found no resources to steal.
- **Ben [131]-[132] answering Dee's Promote on the last placement of round II**, and **Dee [127] seeing that Promote can take a rival's engine card**: both sharp, both correct about the rules.
- **Dee [197] using Swindle to remove Mutineers** as the counter to her Poach: correct at the time. The later mistake was handing it back.
- **Dee [229] and Ben [242] on round III Magenta:** both counted the two Cat Burglars steals correctly (Ben: holding 10 would leave him 4 to her 13).
- **Cal [33]:** buying now or after Stash ends in the same place, except that buying now keeps a spare recruit. Correct.
- **Ava [230]:** Consolation Prize math exact.
- **Cal's debrief:** grab key spaces when you see them, and recruit members that keep paying. Both match what cost him.
- **Ben's debrief:** "I'd also respect Ava's near-memberless line much earlier." True: Ben's reasons never named Ava as the threat until [213].
- **Everyone's view that Heist copies were the biggest swing** in rounds II and III. True (C7).

---

## E. Forecasts against results

| Player | Before round I | After round I | After round II | Actual |
|---|---|---|---|---|
| Ben | 45-55 | about 51 | 85-90 | 67 |
| Ava | 25-40 | 45-55 | 50-60 | 66 |
| Cal | 30-40 | 50-60 | high 50s | 57 |
| Dee | 50-55 | about 54 | 50-55 if both contests, about 40 if one | 54 |

- **Ben after round II, 85 to 90, was the wildest miss: about 20 high.** He took his screen's "+30 if the round ended now" as if it were banked: Red, Yellow and Magenta at +10 each. He got 15 from contests in round III, lost 16 followers to Heists, and lost Cosmopolitans, Dabblers and Kidnappers along the way. Ben's forecasts never allowed for losing followers or members, even though Heist and two copy spaces were open.
- **Dee's forecasts landed near her total but by a different route.** Before round I she forecast about 16 from Copyist and Green +4/+6/+10. Copyist paid her 4, and she placed no minion on Green in round III. Contests came from Magenta and a Yellow tie instead. Her right number was luck, not a read.
- **The first-timers started low (25 to 40, 30 to 40) and finished 66 and 57.** Fair for new players, who had no idea of scale. Both corrected within one round.
- **Ava was below her result in every round** because she never counted a big round III Green contest until after round II.
- **Rival forecasts**: everyone named the wrong player to beat at some point. Ben watched Cal, then Dee; nobody named Ava until round III, and she finished second.

---

## F. Process problems in what the players were shown or asked

1. **A player never sees the outcome of its own move.** "SINCE YOU LAST LOOKED" starts after the player's own action, so Ava never saw "Ava's Late Shift: 3 minions placed, and no shop member costs 6 or less" ([113]). Instead, YOUR LAST MOVES shows her own reason ("Late Shift... Mentor costs exactly 8"), which she later called "my move log". Fix: after every move, show the log lines that move produced, and label YOUR LAST MOVES as "what you intended", or show the result beside each.
2. **Option labels that hide "nothing happens".** Late Shift was listed as a bare "Red · Late Shift" with no "you'd get". The label should say what it does here ("recruits nothing: 3 minions placed, nothing costs 6 or less"). Borrow's label lists "+1 followers; +1 members" without saying they leave before scoring; Ben fell for it on the game's last decision.
3. **The round notes and plan prompts never show how the round ended.** None of the 16 notes and plan prompts includes the round-end contest results or anything that happened since the player's last move. They are asked at the player's first turn of the next round, after rivals have already moved, and are headed "Round I just ended." This is why Dee wrote "no contest won" after winning Green twice, and why Cal wrote his notes not knowing Ben's Swindle had taken his Dabblers. Fix: give the round-end lines (contest counts and winners, round-end card effects) and the since-last-looked lines in the notes prompt, and ask for notes before anyone moves in the next round.
4. **Debriefs are written from memory and are full of wrong numbers** (B13 to B16, B21 to B26). Fix: give each player its own lines from the facts sheet (followers by source, contests won, member abilities paid) before it writes the debrief, and ask it to check its claims against them.
5. **Sub-picks asked one at a time.** 49 single Heist picks and 35 payments out of 245 decisions, plus Harvest, Matchmaker and Early Traders picks. Much of the "chore" feedback (C1, C26) is about this. Fix: ask a Heist as one decision ("split 4 followers among rivals"), and auto-resolve choices with no difference (identical payment splits, the color of a wild resource when the player holds Alchemists or is cashing out).
6. **Previews that are wrong at the moment of choice.** The payment warning ignores the cloak's refund and round-end steals (C4). The round-end preview said every steal would cost Dee Green (C5). Fix the previews, or mark them "before triggers".
7. **The experienced primer misstates a rule.** It says "counts as N members counts N wherever members are counted, except where a rule says each card counts 1 (Red's contest)." In this game Dabblers counted 2 in Red's contest (Cal 3 in round I with Purists plus Dabblers; Ben 4 in round III), following Cory's Nov 4 call. Neither brief says that grey does not count in "Most member colors" while it does count for "a color none of your members have". Ben and Dee made that mistake four times (B1 to B4). Fix the primer and add one line to both briefs.
8. **Stock questions make experienced reasons read as a script.** The experienced brief says "say which of them drove the decision"; 35 of Ben's 52 reasons open with one of the stock questions ("Who is really winning?", "Am I collecting the colours..."). It adds words without adding thought, and it makes the two kinds of player easy to tell apart for the wrong reason. Fix: drop the instruction to name the question.
9. **Rules for colors not in play.** Ava spent attention on Purple's Goes Last token (C25). Fix: trim the rulebook to the colors on the table.
10. **The recruit question after a placement with "0 minions left"** confused Ava ([125]). Fix: head it "Recruit for the minion you just placed on Harvest".
11. **Swap menus of 87 to 120 rows** (C6). Fix: group by your member or by target, and show the contest-change hint on every row or none.
12. **A placement reason and its follow-up pick can disagree** (Ben [131] reasons about Cat Burglars for Copyist, then picks Dabblers for Line Cutters at [132]). Fine as a change of mind, but the review cannot tell; ask the follow-up pick to say when it departs from the placement's plan.

---

## G. First-timers against experienced players

Side by side at similar moments:

- **Picking a cloak.** Ava [2]: "Red Cloak pays me a red every time I recruit any member, which sounds like it'll trigger the most often no matter what I end up doing... Picking a cloak before I've seen a single turn is a bit of a shot in the dark." Ben [3]: "a new member color each recruit, up to five colors with grey, is roughly 8-10 yellow over the game. It also lines up with the yellow contest." Ava sounds new. Ben sounds practiced, and his "five colors with grey" is the misreading that cost him later.
- **Borrow.** Ava [43]: "Borrowing a member that leaves before scoring felt odd at first, but realizing its On Recruit steal still sticks made the choice click." Ben [8]: "Borrow looks juicy until you notice the member leaves before scoring, so it reads more like a trap than a gift in round I." Here the first-timer found the better use: Ava's Borrowed Accomplice won her Magenta.
- **Dabblers.** Cal [6]: "I'm not sure what 'counts as 2 wild members' does in the Red and Yellow contests, but it might help there too." Ben's opening plan: "He opened Help Yourself into Dabblers, already counts 2 wild members, and leads red and yellow."
- **Heist picks.** Ava [67]: "I didn't expect Heist to ask me one follower at a time. It turns a quick grab into a small puzzle about who's really ahead." Dee [141]: "Picking the target one follower at a time, with the leader this obvious, is a pure formality."

**Do they read like new players?** In voice, yes: plain words, said uncertainty, surprise at the interface, low early forecasts, and one realistic newcomer error (Ava's minion count). In play, much less: by round I's end Cal reasons about snake order and equivalent buys ([33]), and by round III Ava's contest math ([193], [201], [230]) is as exact as anyone's. They learn at a speed no real first-timer would. They also misread fewer card texts than the experienced pair: the experienced players made the grey-color error four times and the Kidnappers and Mutineers errors that decided the game, while the first-timers' worst errors were a miscount and screen confusion. Calling Ben and Dee "experienced" gave them confidence, not accuracy.

**Is their feedback useful in a different way?** Yes. The first-timers' complaints are mostly about what the screen does and does not tell you: whether a move happened (Late Shift), whether picks split among rivals ([154], [166]), whether the preview counts round-end steals, why a member left their cult, why a recruit is offered after the last minion. Those are clarity signals the experienced pair never raised. The experienced players' feedback is about interaction and balance: the Heist pile-on, Dabblers, Cat Burglars, last-placement swings, menu size. Both kinds hold up in parts. The first-timers' confusion is partly the harness (F1, F3), so it should be read as "the screen must show outcomes" rather than as evidence about the game's rules.

---

## H. Patterns in the game that no player commented on

1. **The winner was decided by two triggers that say "recruit" firing on a take.** When Mutineers took Dabblers, the engine fired Matchmaker ("Whenever you recruit a yellow member": +3 followers, +2 resources) and the Yellow Cloak ("Whenever you recruit a member of a color none of your members have": +2 yellow), treating Dabblers as yellow. Those 4 resources turned Ben's last recruit from a 5-follower buy into a 10-follower buy. Without them Ben ends about 59 and Ava wins. The rulebook says recruiting is bringing in a member "by your own doing" and "a member a rival moves to you isn't your recruit", so a Mutineers take can be read either way. This is a rules question for Cory, not a bug call. No player noticed the triggers; Ben's debrief credits Mutineers and Borrow.
2. **The same player had the last placement in rounds II and III, and both times it decided the round.** From round II the fewest followers goes first and turns snake. With 4 minions in round II, the first seat also places last, so Line Cutters ("you go first every round") gave Ben both the first and the last placement. With 5 minions in round III, the fourth seat places last, and the fourth seat is the player with the most followers: Ben, at 35. The catch-up rule hands the leader the final word in round III, where the last placement is worth the most (Demote, Mutineers, a contest-deciding buy).
3. **Kidnappers' wording misled both experienced players.** "A rival you choose gives you one of their members": the giver chooses. Ben planned around taking Dabblers with it; Dee spent her last placement removing it, and that removal made Mutineers legal.
4. **The Green Cloak pays before the copied action resolves.** Dee's +2 magenta from copying Catch Up lifted her above every rival, so the copied Catch Up paid +0. Neither the cloak nor the rulebook says which comes first.
5. **Grey counts as a color for the Yellow Cloak and New Blood, but not for Yellow's contest, and Dabblers adds exactly one color to that contest.** Neither is printed on the contest or the card (both are Cory's logged calls in the code). Red's contest prints "(each card counts 1)", yet Dabblers counted 2 there by Cory's Nov 4 call. Three rules a player can only learn by watching the counts change.
6. **Round III Magenta was won by the only player who did not spend.** Dee won 10 to 0, 0, 0. The threat of two before-scoring steals emptied every other pile; the second steal found nothing.
7. **Heist, one middle-ring space, was the most-used action of the game:** taken or copied 7 times, 28 followers moved. Every copy hit whoever was leading at the time.
8. **Copyist, the center of Dee's opening, paid 6 followers all game across two owners (3 copies).** Green's copy spaces were used mostly to copy Heist and Swindle, not to feed Copyist.
9. **Only 10 members were bought by paying; 7 more arrived free** (Late Shift twice, Initiation, Seat Filler twice, Borrow twice, plus members moved by Swindle, Promote, Demote, Poach and Mutineers). Every member costing 9 or 10 that changed hands arrived free.
10. **Buying followers made 96 of the table's 244 followers (39%); contests made 80 (33%).** The player who bought the most (Cal, 35) finished third, and the one who bought the least (Dee, 4) finished last, so neither extreme decided the result.
11. **Dee passed 5 recruits and ended the game holding 10 resources.** They won Magenta, but with rivals already empty she could have spent several and still won it. The 1-to-1 buy rate means every passed recruit with resources in hand at game end is a follower thrown away.
