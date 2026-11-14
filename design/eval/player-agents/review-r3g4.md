# Review of r3g4: what the three player agents got right and wrong

Game: three agents. Ava (Green Cloak) and Cal (Yellow Cloak) played as experienced players with the strategy primer and the strong players' questions. Ben (Purple Cloak) played as a first-timer with only the rules and the cards. Colors: Purple (turn order), Yellow (broad), Green (copies). Final: **Cal 98, Ava 93, Ben 64.**

Sources: facts-r3g4.md (the ledger), moves-r3g4.txt (decisions, numbered [n]), /home/user/pa-games/r3/r3g4/cards.md, the three system briefs, events.jsonl (the game log) and agents.jsonl (the exact prompts). Every number below was counted from the log or the ledger unless it says "about" or "roughly". Where I say what a strong player would have done, the follower change is an estimate.

**One gap in the ledger that matters:** Cal's "Abilities paid" line leaves out **Die-Hards' game-end +6** ("Cal's Die-Hards: +6 followers" is in the log, just before "Game over"). His 98 only adds up with it. Cal's round III note and debrief both say Die-Hards paid nothing; that is false, and section G explains why he believed it.

This is a 3-player game. Cory has said the game isn't balanced for 2 and 3 players yet. Each finding in section C, E and H says whether it is about the player count (it would likely not happen with 4) or about the cards.

## The cards that matter in this review

Cloaks (each player has one all game):
- **Green Cloak** (Ava): whenever you copy an action or a member, +2 of its color. Paid **20 resources** (10 copies).
- **Yellow Cloak** (Cal): whenever you recruit a member of a color none of your members have, +2 yellow. Paid 8 yellow (Dabblers, Early Traders, Regulars, Closer).
- **Purple Cloak** (Ben): whenever you take the Goes Last token, +2 purple. Paid 10 purple (5 token takes).

Contests (scored every round end, +4 / +6 / +10; tied leaders each get half, rounded up):
- Purple **Went last**: whoever placed the round's last minion.
- Yellow **Most member colors**: the colors among your members (grey members do not count; Dabblers' wild members fill missing colors).
- Green **Most minions on green**: your minions on Green spaces.

Spaces that decided the game:
- **Crunch Time** (purple, round II+): +2 purple. Your next two turns come right after this one.
- **Reprise** (green): copy an action with your minion. **Echo** (green): copy the previous action. **Cover** (green, round II+): copy an action with a rival's minion on it. **Greatest Hits** (green, round III): choose a color other than green; copy every action with your minion on its spaces. Each +1 green for its first taker only.
- **Overtime** (purple, round III): +4 purple, +1 minion this round, take the Goes Last token.
- **Sleep In** (purple): +4 / +5 / +6 purple, take the Goes Last token. **On a Roll** (purple): +2 purple per consecutive turn, take the token. **Last Call** (purple, round II+): +1 purple, +1 follower and +1 purple per minion you have left, take the token.
- **New Blood** (yellow): +2 yellow; +3 more if you recruit a member of a new color this turn.

Members that decided the game:
- **Copyist** (2 green + 3 any): whenever you copy an action, +2 followers.
- **Hot Streak** (3 purple + 4 any): On Use, once per game: +3 followers per turn in a row you've taken just before this one.
- **Line Cutters** (4 any): you go first every round.
- **Dabblers** (5 any, worth 2, counts as 2): counts as 2 wild members.
- **Cosmopolitans** (3 yellow + 4 any): Round End: +1 follower per color among your members.
- **Die-Hards** (3 green + 4 any): Game End: if you have the most green members, +6 followers.

## Where the followers came from (from the ledger and log)

| Player | Final | Bought | Contests | Abilities and spaces | Printed on members | Start |
|---|---|---|---|---|---|---|
| Cal | 98 | 32 | 31 (member colors 4+6+10, Went last II 6, green tie III 5) | 27 (Cosmopolitans 6, **Die-Hards 6**, Regulars 5, Crowd 4, Last Call 3, Melting Pot 3) | 7 | 1 |
| Ava | 93 | 38 | 15 (green 4+6, green tie III 5) | 35 (Copyist 18, Hot Streak 12, Echo-of-Crowd 3, Crowd 2) | 4 | 1 |
| Ben | 64 | 26 | 14 (Went last I 4, III 10) | 19 (Consolation Prize 10, Last Call 4, Night Managers 3, Melting Pot 2) | 4 | 1 |

Standings at each round end: after round I Ben 13, Cal 10, Ava 8; after round II Cal 41, Ava 39, Ben 28. **58% of all followers in the game (147 of 255) came in round III.** Cal scored 57 in round III, Ava 54, Ben 36.

Two facts frame everything below:
1. **Cal won Most member colors in all three rounds (20 followers) with nobody ever contesting it.** He reached 3 colors in round I; with only 3 colors in play that is the maximum, so rivals could at best tie. Ava reached 2 in round III; Ben never had more than 1.
2. **The 5-point margin.** Cal's 31 contest followers against Ava's 15 is 16; Ava's copy engine (Copyist 18 + Hot Streak 12 = 30) out-earned Cal's round-end members (Cosmopolitans, Regulars, Die-Hards = 17) by 13. Without Die-Hards' +6, Cal finishes 92 and loses to Ava's 93.

---

## A. Each player's line, what it earned, and the decisions that decided the finish

### Cal (1st, 98): Yellow Cloak, wide member colors, then follower buys

**The line.** Cheap members in three colors in round I (Dabblers, Early Traders, Regulars), so Most member colors was his every round; two round-end members (Cosmopolitans, Regulars); one purple member (Closer); then follower buys in round III. Members cost him 36 resources across 6 cards, and New Blood plus the Yellow Cloak refunded 5 of Early Traders' 5.

**What it earned.** Contests 31, round-end members 17, printed 7, buys 32, space followers (Last Call, Crowd, Melting Pot) 10. **Good line at this table:** the member colors contest paid 20 for one round I commitment and nobody chased it.

**Decisions that decided his finish:**
- **[8] Dabblers, [20]-[21] New Blood into Early Traders, [30] Regulars (round I).** Three colors by the end of round I. Paid 4 at once and locked the contest for +6 and +10 later. Early Traders cost him effectively nothing (paid 5, got 5 back from New Blood's +3 and the cloak's +2). This was the best opening at the table.
- **[60] On a Roll in round II.** He counted that Sleep In and Last Call were taken, Overtime was not open yet and Cover was blocked by Ben's Protesters, so Ben had no way back to the token. Correct read: Went last +6 to Cal instead of Ben's +6 and Night Managers +1. A 13-point swing between them for a space that paid 2 purple.
- **[111], [114], [117] Crowd, Build Up, Cover in round III.** He took the last three green spaces to tie Ava 3 to 3 on green: Ava +5 instead of +10, Cal +5 instead of 0, Regulars +3, Crowd +4 followers. This 10-point swing between the top two is the whole margin.
- **[118] Cover copying Ava's Overtime.** +4 purple (a 5-pack) and an extra minion. The extra placement (Survey for 6 yellow, which fed the closing 10-pack) was worth roughly 6 followers.
- **[112] Die-Hards.** 7 resources for 1 printed + 6 at game end = 7, two better than a 5-pack. His reasoning at [112] (Dabblers' wild members count toward green members) was right; he then talked himself out of it afterwards.

**What a strong player would have done differently.** [72]-[73] Closer was bought "for a fourth member color" (also [37], [60], R1 plan); there are only 3 colors in play and Dabblers already filled purple, so his member-color count stayed 3 and Cosmopolitans paid 3 either way. Closer returned 1 printed + 4 purple once + 2 yellow from the cloak for 7, about break-even with a 5-pack. Small. He also left green to Ava 3 to 1 in round II (+6 to his main rival), which he notes himself.

### Ava (2nd, 93): Green Cloak copy engine, Line Cutters into Crunch Time

**The line.** Copyist and the Green Cloak in round I, then Line Cutters' first seat into Crunch Time each round, with Reprise, Echo, Stunt Double and Greatest Hits copying Crunch Time to stretch the run, cashed by Hot Streak; everything else into follower buys.

**What it earned.** Copyist 18 + Hot Streak 12 + Crowd/Echo 5 = 35 from abilities and spaces, buys 38, green contest 15. Round III alone: 39 to 83 in five placements before Ben or Cal placed a minion. **Good line, the highest-scoring engine at the table**, but with one member color all game until round III it never touched the yellow contest, which paid Cal 20.

**Decisions that decided her finish:**
- **[15] Copyist** for 5: 1 printed + 18. Best member buy of the game.
- **[99] Hot Streak, fired at [102] after passing at [101].** Waiting one turn moved it from +9 to +12; 13 followers for 7 resources.
- **[103] Overtime instead of Crowd with her last planned minion.** For her own score the two were nearly equal: Crowd gives +4 followers and a 5-pack (+9) and keeps green at 4 to Cal's 2 (+10); Overtime gives a 10-pack, an extra minion that became Offering into a 5-pack (+15) and a green tie (+5). That is 19 against 20. But Overtime left Crowd, Build Up and Cover for Cal, which gave him +5 from the tie and +1 Regulars, and handed him Overtime to copy through Cover. With Crowd the final was roughly Ava 92, Cal 90 to 93: close to even, not the "98 to 93" win her debrief claims.
- **Never contesting Most member colors.** A yellow member in round III (Big Tent or Caravan, both in the shop, 9 resources) would have tied Cal 3 to 3 for the +10: Ava +5, Cal +5 instead of +10. After the follower buy she gives up, about a 7-point swing toward her. Yellow was scarce for her, so this was hard, but she never considered it until the debrief.

**Line Cutters [11]** mattered less than she thinks: after round I she had the fewest followers (8 against 10 and 13), so she would have picked first in round II anyway. It decided only round III's opener, where Ben (28) would otherwise have picked first.

### Ben (3rd, 64): Purple Cloak, chasing Went last (first-timer)

**The line.** Token spaces for purple and Went last, purple members (Night Managers, Last Callers), a blocker (Protesters), and Consolation Prize once he was losing contests; everything else into 5-packs.

**What it earned.** Went last 14 (rounds I and III), Consolation Prize 10, Last Call 4, Night Managers 3, Melting Pot 2, buys 26. **Weak line at this table:** it fought for one contest of three, and he put **zero of his 12 minions on green** in a game where green paid 15 to Ava and 5 to Cal.

**Decisions that decided his finish:**
- **No green minions, ever.** In round I green was won 2 to 1; one or two Ben minions on Build Up or Crowd in rounds I or II would have tied or taken +4/+6 and fed Survey. His own debrief names this, correctly.
- **[55] Sleep In early in round II, then [58]-[59] Protesters on Cover.** He took the token with Cal still holding three waiting minions and two open doors (Cover copying Sleep In, and On a Roll). Protesters shut one; Cal used the other ([60]). Lost Went last +6 and Night Managers +1. His round II note draws the right lesson ("the last turn that really matters is the one that takes the token").
- **[66] Consolation Prize** for 7: paid 6 and 4 = 10, plus 1 printed. Best buy of his game, made at the right moment.
- **[107] Last Callers** for 7: never used, 1 printed. A 5-pack was 4 more. It was reasonable insurance when bought; Protesters on On a Roll ([110]) and Sleep In ([121]) made it unnecessary.
- **[4] Night Managers** for 6: 1 printed + 3 over the game. One follower worse than a 5-pack.

---

## B. Misreadings: claims that contradict the cards, the rules or the log

| # | Who | Claim | What is true |
|---|---|---|---|
| [10] | Ava | Reprise copying Build Up pays "+3 copied, Reprise's +1 and first-taker +1, and +2 from the cloak. That's about 11 green." | Reprise's +1 green *is* the first-taker +1; it is counted twice. The log lists +1, +3, +2 = 6; her holdings actually went from 0 to 5 (see G). Not 11. |
| [17] | Ben | "On a Roll gives me +4 purple ... plus 2 from my cloak, so 7 purple." | The preview "+4 purple" already included the cloak (2 for one turn in a row + 2). He knew this at [3] (Sleep In "+6" = 4 + 2). He blamed the per-turn wording at [18]; the real slip was counting the cloak twice. |
| [56] | Ben | Protesters "also adds a grey color for the member colors contest." | Grey members do not count in Most member colors. Round II count: Ben 1 (Night Managers purple, Protesters and Consolation Prize grey). |
| [37], [60], [72], [73] and round I plan | Cal | Closer gives "a fourth member color for the yellow lock." | Only 3 colors are in play, and Dabblers' wild members already filled purple. Cal's count was 3 before and after Closer. |
| [106] | Ben | Last Call "gives me 7 purple ... and taking the token adds 2 more purple from my cloak, so I'll have 9." | The preview "+7" already included the cloak (+5, +2). He had 7, and paid all 7 for Last Callers. |
| [111] | Cal | "Crowd first gives +1 follower and +3 green." | Crowd paid +4 followers (4 minions on green, three of them Ava's). Preview showed "+4 followers". |
| [103] | Ava | "I'm 30+ ahead of Cal, so the extra placement and recruit are worth more than that risk." | She was 32 ahead on the board (73 to 41), but Cal had all five minions to place; her own round II forecast put Cal at 80 to 88. He scored 57 in round III. |
| Round III note, debrief | Cal | "Die-Hards quietly did nothing because Ava tied me on green members." "A 5-pack from those resources was 4 more followers." "I'd skip Die-Hards." | The log: "Cal's Die-Hards: +6 followers." Dabblers' 2 wild members counted, so green members were Cal 4, Ava 2. Die-Hards returned 7 for 7, two more than a 5-pack, and without it Cal loses 92 to 93. |
| Debrief | Ava | "Holding green alone would have given me 98 and him 93." | It ignores what Overtime paid her: the 10-pack and the extra minion's 5-pack (15) against Crowd's 9. Her own score would have been about 92, Cal's about 90 to 93. |
| Debrief | Ava | Cal "let Dabblers, Cosmopolitans and Regulars tick every round." | Dabblers pays nothing each round; it counts as 2 wild members. |
| Debrief | Ava | "My banked extra minion ... lost Went last to Ben's Sleep In anyway." | Ben's Last Call ([106]) took the token from her first, sending her minion back to normal turns; it was placed at [127] (Offering). Sleep In came later, after Cal's Overtime copy. |
| Debrief | Ava | Line Cutters "gave me first seat every round, which is what made the Crunch Time chains possible." | She had the fewest followers after round I (8), so she went first in round II without it. It mattered only in round III. |
| [145] and debrief | Ben | "On a Roll shows as open on the wheel but isn't one of my choices, and I'm not sure why." | His own Protesters were on it ([110]). The wheel he was shown still said "[OPEN]" (see G), so this is mostly a display fault. |
| Debrief and round III note | Ben | "I won just by being the last with minions while Ava and Cal were already done." | He had minions left because his Sleep In token ([121]) made them wait until the others' hands were empty. That is the token doing its job, not the fight dissolving. |
| Debrief | Ben | Protesters "lost me the token in round II because it only shuts one door." | It shut the door he chose (Cover); he left On a Roll open. Blocking Cover also kept Cal off green in round II, which helped Ava hold green 3 to 1. |
| Debrief | Cal | "Went last in rounds I and III was decided by Ben holding the token play behind me ... settled by seat order." | In round II Cal won it himself by reading that Ben had no door back ([60]). In round III Cal held the token after [118] and lost it to Ben's Sleep In, which Cal could have blocked by not leaving Sleep In open (he took Crowd, Build Up, Cover first). |

---

## C. Every complaint and praise about the game, grouped

**1. Crunch Time copied by Reprise, Echo, Stunt Double and Greatest Hits, from first seat (complaint).** Ava 6 times (FEEL [38], [41], [83], [86], [90], [102]; debrief bad and change), Ben 4 times (FEEL [55], [106]; debrief bad and change), Cal 4 times (FEEL [52], [111]; debrief bad and change). **Verdict 1.** In round II Ava placed her first 4 minions in a row (8 to 33); in round III her first 5 (39 to 83, with Hot Streak's 12 and a 10-pack) before either rival placed anything. It happened in both rounds where Crunch Time was open and would be the same with 4 players. *Count-specific: no.*

**2. Most member colors locked from round I (complaint).** Ava (debrief change and differently), Ben (round II plan, debrief). **Verdict 1, with a count part.** Cal hit 3 colors in round I with three cheap members; with only 3 colors in play that is the ceiling, so rivals could only tie, and nobody tried. 20 followers, more than any other single source except Copyist. With 4 colors in play the ceiling is higher and a fourth player is one more contender. *Count-specific: yes.*

**3. Round-end payouts invisible when judging the lead (complaint).** Ava (debrief change), Cal (FEEL [135], [136]; debrief change). **Verdict 4 mostly.** The standings line the agents see runs the round end "if nobody moves again": at [104] it showed Cal 51 with five minions still to place, and it never includes game-end bonuses like Die-Hards. A table would also have to count this by hand, but the agents leaned on the projection. See G.

**4. Lone 1-follower buys and passes to save up (complaint).** Ava (FEEL [24], [43]; debrief), Ben (FEEL [33], [63], [144]; debrief), Cal (FEEL [61], [124], [130]; debrief). **Verdict 1, mild.** 6 of 21 follower buys were 1-packs, and 4 recruits were passed. With 1/5/10 pack sizes, a recruit after a 2- to 4-resource space has nothing good to buy. It did not change any result. *Count-specific: no.*

**5. Went last decided by who has minions left, or by who holds the token behind you (complaint).** Ben (FEEL [137]; round III note; debrief bad and change), Cal (FEEL [26], [114]; round I note; debrief bad and change). **Verdict 2 and 3.** The token changed hands 10 times; the contest went to whoever took the token last when no door was left open (Ben in rounds I and III, Cal in round II, where Cal won it by counting doors). Ben "having minions left" is the token working. With three players, once Ava's chain emptied her hand early, only two players were left to fight late, so it settled sooner. *Count-specific: yes.*

**6. Echo copying the opener's Sleep In (complaint).** Cal (FEEL [6]; debrief change), Ben (FEEL [17]; round I note; debrief bad). **Verdict 1, mild.** Cal got +4 purple, +1 green and the token for one space; Ben had to spend On a Roll (4 purple) to win it back. Ben himself calls it fair once known, and still won Went last that round. *Count-specific: no.*

**7. Cover copying Ava's Overtime (praise).** Ava (FEEL [127]; debrief good), Cal (FEEL [117], [118]; debrief good). **Verdict 1.** The only moment anyone touched Ava's engine; it gave Cal +4 purple (a 5-pack), an extra minion (about 6 more) and the green tie (+5 to him, −5 to Ava). *Count-specific: no.*

**8. New Blood plus Yellow Cloak plus Early Traders (praise, "almost too clean").** Cal (FEEL [20], [21]; round I note; debrief good and members). **Verdict 1.** Both New Blood (+3) and the cloak (+2) trigger on the same new-color recruit, so a 5-cost member was free, and Early Traders then paid 4 yellow and 3 swaps. Strong but not out of line: it is one recruit. *Count-specific: no.*

**9. Closer firing on the last placement into Cosmopolitans (praise).** Cal (FEEL [73], [75]; debrief good). **Verdict 1.** Paid 4 purple once (round II); in round III Ben placed last and it paid nothing. *Count-specific: no.*

**10. Harvest picking colors one at a time (praise).** Cal (FEEL [29], [78]; debrief good). **Verdict 1, small.** It let him hit Regulars' and Cosmopolitans' colored costs exactly.

**11. Copy-of-a-copy pays Copyist and the cloak each time (praise and a reading complaint).** Ava (FEEL [45], [93], [97]; debrief good). **Verdict 1.** Echo copying Reprise copying Crunch Time counted as two copies; Stunt Double copying that chain counted three. Of Copyist's 18, 14 came in round III from 7 copies in 4 placements. Powerful and, as she says, hard to read at a glance. *Count-specific: no.*

**12. Hot Streak cashing the chain (praise from Ava, complaint inside item 1 from Cal and Ben).** **Verdict 1.** +12 in one turn in round III, 13 for 7 resources. It only works with a long run of turns, which this game's purple and green hand to one player. *Count-specific: no.*

**13. Overtime's extra minion is "a trap that only looks strong" (complaint).** Ava (FEEL [103]; round III note; debrief change). **Verdict 2.** It paid her about 15 (10-pack plus the extra minion's Offering 5-pack), one more than Crowd for her own score; the cost was what it left open for Cal. The token was taken at once by Ben's Last Call, which is the normal risk. *Count-specific: no.*

**14. Protesters: counting doors is a fun puzzle (praise); it only shuts one door (complaint); "a cute toy" (Ava FEEL [46]).** Ben (FEEL [56], [58], [121]; debrief good and bad), Ava. **Verdict 1 for the praise, 2 for the complaint.** In round III it shut On a Roll and, with Sleep In, left Cal no door back: Went last +10 and Night Managers +2. In round II Ben picked the wrong door. *Count-specific: no.*

**15. Consolation Prize pays for losing (praise).** Ben (FEEL [66]; round II note; debrief good). **Verdict 1.** 10 followers for 7; it kept the player who lost two rounds of contests in the game. *Count-specific: no.*

**16. Last Callers "a real answer to a token steal" (praise).** Ben (FEEL [107]; debrief good). **Verdict 2.** Never used; 1 follower for 7. The feeling of safety was real, the return was not.

**17. Melting Pot pays for an odd mix (praise).** Ben (FEEL [68]; debrief). **Verdict 1, small.** +2 followers and 2 resources for Ben, +3 and 3 for Cal.

**18. Makeover's string of "how many of each color" questions; a rearrange with nothing riding on it (complaint).** Ben (FEEL [64]; debrief), Cal (FEEL [133]; debrief). **Verdict 4 for the questions** (the agent prompt lists the rearrange as many sub-choices; at a table it is one move), **verdict 2 for "pointless"**: both took Makeover only for +4 yellow before a follower buy that takes any color, and both skipped the rearrange.

**19. Purple's pile never matters; payment choices are non-decisions (complaint).** Ava (FEEL [100]; debrief bad). **Verdict 1, observation.** True of all three colors here: no contest counts held resources, and only Offering takes them. Nearly every payment step was a single forced option. *Count-specific: no* (it is this color set).

**20. Went last rim shows a leader mid-round (complaint).** Ava (FEEL [25]; debrief bad), Cal (FEEL [135]). **Verdict 1, small.** "Leading" shows whoever placed most recently, even with the token holder's minions still waiting. It misled nobody's actual move but was flagged twice.

**21. Unsure whether Dabblers' wild members count for Die-Hards' "most green members" (complaint).** Cal (FEEL [112]; debrief bad and change), Ava ([104] reasoning). **Verdict 1.** The engine counted them (Die-Hards paid, which needs Cal 4 to Ava 2), but both players guessed, and it decided whether Cal won. *Count-specific: no.*

**22. On a Roll open on the wheel but not offered (complaint).** Ben (FEEL [145]; debrief bad and change). **Verdict 4.** His own Protesters sat on it, and the wheel text still said "[OPEN]".

**23. Ava's Offering made Ben discard 2 purple (complaint, mild).** Ben (round III note; debrief). **Verdict 1, small.** It hit only Ben (Cal held yellow); Ben calls it fair.

**24. Green Cloak's +2 unclear in the shown gain (complaint).** Ava (FEEL [16]; debrief). **Verdict 4.** At [13] the preview said +5, the log listed +6, and her holdings rose by 5. See G.

**25. Cloak pick feels blind or automatic (complaint).** Ava (FEEL [1]), Cal (FEEL [2]). **Verdict 1, small.** Three cloaks for three players, the last player gets the leftover.

**26. A focused one-color plan wins at most one contest a round (complaint).** Ben (debrief change). **Verdict 2.** Ben's line fought for one contest and he never placed on green; Ava's also mostly one-color line finished 5 behind the winner. *Count-specific: yes, partly*: each color here is one contest and there are only three.

**27. Con Men dead when rivals hold nothing (complaint, FEEL).** Cal (FEEL [53], [79]). **Verdict 1, small.** Rivals held 0 to 2 resources at each of his looks, because nothing in this color set rewards holding.

---

## D. What the players got right

- **Cal's door counting at [60]**: every token source checked by name (Sleep In and Last Call taken, Overtime not yet open, Cover blocked, Latecomers in the discard). Exactly right, worth 13 between him and Ben.
- **Cal's green tie plan at [111]-[117]**: he saw that Build Up, Crowd and Cover were the only green spaces left and that all three tied Ava 3 to 3. Correct to the space.
- **Cal's Die-Hards reasoning at [112]**: that Dabblers' wild members would count toward green members was right; only his later doubt was wrong.
- **Cal's round II forecast**: "80 to 85, or about 90 to 95 with Went last." He finished 98 without Went last but with the unforecast Die-Hards.
- **Ava's Copyist pick at [15]** over Regulars, and her reading that Reprise copies Crunch Time to stretch the run ([41]), which held every time.
- **Ava's Hot Streak timing ([101]-[102])**: passing one turn to go from +9 to +12, right per the card and the log.
- **Ava's round II forecast for Cal (80 to 88)**: accurate. She then ignored it at [103].
- **Ava's risk statement at [103]**: she named the exact danger (Cal taking Build Up, Crowd, Cover to tie green, costing her 5). Only the size of her lead was misjudged.
- **All three, repeatedly**: no contest in this color set counts held resources, so piles are just money. Correct every time it came up.
- **Ben's Consolation Prize read ([62]-[66])**: he forecast "about 6" for round II and it paid 6, then 4 in round III.
- **Ben's door count at [121]**: Sleep In, Last Call and Overtime taken, On a Roll blocked, all green copy spaces full. Correct, and it won the +10.
- **Ben's forecasts**: 50 to 70 before round I, 55 to 65 after round II; he finished 64.
- **Ben's debrief self-diagnosis**: no green minions all game, one member color, and the token taken early three times. All true and the main causes of his finish.

---

## E. Members: who recruited what, and what each returned

| Player | Member (round) | Paid | Printed | Ability payout | Contest effect | Against a follower buy |
|---|---|---|---|---|---|---|
| Ava | Line Cutters (I) | 4 | 1 | first seat; mattered only in round III | protected the round III opener | 4 resources, but at the time she could only have bought a 1-pack; cheap |
| Ava | Copyist (I) | 5 | 1 | 18 | none | **+14 over a 5-pack** |
| Ava | Stunt Double (III) | 7 | 1 | its On Recruit copy fired 3 copies: Copyist 6, cloak and Crunch Time 8 resources, 2 more turns in the run | 2nd green member (tied Cal's two named green members before Dabblers) | about 7 followers and 8 resources for 7; Ava's "roughly paid for itself" undersells it |
| Ava | Hot Streak (III) | 7 | 1 | 12 | none | **+8 over a 5-pack**; 2nd member color in round III |
| Ben | Night Managers (I) | 6 | 1 | 3 (1 in round I, 2 in round III) | none | −1 |
| Ben | Protesters (II) | 6 | 1 | blocked Cover (II, no gain) and On a Roll (III, helped secure Went last +10, Night Managers +2) | as above | hard to price; the round III block was worth much of +12 |
| Ben | Consolation Prize (II) | 7 | 1 | 10 | none | **+6** |
| Ben | Last Callers (III) | 7 | 1 | never used | none | −4 |
| Cal | Dabblers (I) | 5 | 2 | Yellow Cloak +2 yellow | wild members: round I 3rd color (he had 2 without it), and made Die-Hards pay (green members 4 to 2) | strong |
| Cal | Early Traders (I) | 5, refunded 5 | 1 | 4 yellow over two round starts, 3 color swaps | 2nd color in round I | nearly free |
| Cal | Regulars (I) | 5 | 1 | 5 | 3rd color; cloak +2 yellow | +3 |
| Cal | Closer (II) | 7 | 1 | 4 purple once; cloak +2 yellow | none (purple already filled by Dabblers) | about even |
| Cal | Cosmopolitans (II) | 7 | 1 | 6 | none | +2 |
| Cal | Die-Hards (III) | 7 | 1 | 6 | none | +2 (and the margin of victory) |

**Under- or over-used?** 14 member cards against 21 follower buys. Every member that fed the player's own engine or a round-end count returned 7 to 19 for 5 to 7 resources (Copyist, Hot Streak, Consolation Prize, Cosmopolitans, Regulars, Die-Hards). The two that lost value were guard cards bought against a threat (Last Callers unused, Night Managers 4 for 6). **Members were under-used by Ava and Ben for the yellow contest**: one cheap member in a second and third color would have contested 20 followers that Cal took for free. Ava says so herself in the debrief. Cal's 6 member cards were the right count for this table.

---

## F. Card ideas

1. **Hecklers** (Ava; purple member: whenever a rival takes a consecutive turn, +1 purple). Answers a real problem here (item 1, solo runs of 4 and 5), but only pays the one player who holds it, and only resources; the watching players still don't act.
2. **Cut In** (Ava; purple space: your next minion goes right after the next rival who takes two turns in a row). Real problem, but two timings on one card and a placement that waits for a condition; hard for a table to track.
3. **Census Taker** (Ava; yellow member showing every player's round-end payouts). The problem was real (she misjudged Cal at [103]), but it is a screen feature, not a card; the information is already public on the table.
4. **Night Shift** (Ben; purple member: followers whenever your token is taken). Token changed hands 10 times and Ben lost it 3 times; addresses his own line's pain more than a game-wide problem.
5. **Lone Wolf** (Ben; followers at round end if all your members share one color). Addresses Ben's sense that focused plans lose; his loss came mostly from his own choices (no green minions), so a weak fit.
6. **Interruption** (Ben; purple space: place now, during a rival's run of turns). Real problem (item 1), but placing during another player's turn breaks the turn rule; table-unfriendly.
7. **Interloper** (Cal; purple member: after a rival's run of 3 or more turns, you place one right after). The most direct answer to item 1 seen in this game, one trigger and one effect; it would also fire on Cal's own 3-turn token runs in round III.
8. **Patron** (Cal; yellow member: if you won Most member colors, +1 yellow per color you lead by). No problem here; it rewards the player who already took 20 uncontested.
9. **Sound Check** (Cal; green space: copy a rival's latest action on a color you have no members of). No problem seen; a conditional copy that is hard to read.
10. **Closing Time** (Cal; purple center space: place all your remaining minions now, no token this round). Aims at the flat end of round III, but it creates another solo run (item 1).

Only Interloper and, more loosely, Hecklers answer the strongest problem in this game. Nobody proposed anything for the uncontested member colors contest except Patron, which makes it worse.

---

## G. Process problems that remain

1. **Game-end bonuses missing from the ledger and the round III notes prompt.** The facts table's "Abilities paid" for Cal leaves out Die-Hards' +6; the round III notes prompt (written "right after scoring with the round's log") ends before the game-end log lines. Cal wrote "Die-Hards quietly did nothing" in his round III note and repeated it in his debrief, with a wrong lesson ("I'd skip Die-Hards"). Fix: run game-end bonuses into the round III log and the ledger before the notes and debriefs.
2. **The wheel text shows a space blocked by Protesters as "[OPEN]".** At [145] Ben's prompt showed "On a Roll [OPEN]" though his Protesters were on it ([110]); he called it a mystery in two places. Fix: show "[blocked by Ben's Protesters]" on the space.
3. **"If the round ended now" treats unplaced minions as doing nothing and leaves out game-end bonuses.** At [104] Ava saw Cal at 41 → 51 with five minions left and judged herself 30+ ahead; Cal at [135]-[136] could not tell whether Die-Hards was counted, and his projection showed a Went last win that Ben was certain to take back. Fix: show each player's minions left beside the projection, and list game-end bonuses as their own line ("game end: Die-Hards +6 if it holds").
4. **Went last "leading" shows the most recent placer.** Ava [25], Cal [135]. Fix: show the token holder and "places last if nothing changes" from the turn list.
5. **Reprise at [13]: preview, log and holdings disagree.** Preview "+5 green"; the log lists +1 (first taker), +3 (copied Build Up), +2 (cloak) = 6; Ava's holdings went from 0 to 5 (prompt at [15]: "holds 5 green"). Either a log line is wrong or a payout is short. This is an engine or log check, not a player matter; it caused Ava's confusion at [16].
6. **Makeover's rearrange offered as a list of per-color amounts** (Ben [64], Cal [133]). Both just kept their colors. Fix: one "rearrange" step with a keep option first.
7. **Grey members and the yellow contest.** Ben ([56]) believed a grey member adds a color to Most member colors. The contest line says "counts the colors among your members" while Melting Pot's line, with the same words, counts grey ("grey: 1 of any color"). Fix: add "(grey members don't count)" to the contest line; see H for the card-text side.
8. **No cap shown on member colors.** Cal chased "a fourth color" in four reasons. Fix: show "(3 colors in play)" on the yellow contest line. Small.

---

## H. Patterns in the game itself that no player commented on

1. **"Colors among your members" means two things.** For Melting Pot, grey members count as a color (Ben got 2: Night Managers plus grey guests). For the Most member colors contest and Cosmopolitans, grey members do not (Ben counted 1). The Yellow Cloak and New Blood count grey through their "a color none of your members have" wording. The same phrase on Yellow's contest and Yellow's space reads two ways. *Count-specific: no.*
2. **With 3 colors in play, the member colors contest caps at 3 and can be reached in round I.** Cal hit the cap with three members costing 15 (5 refunded). After that the contest was a tie at best for anyone else. Dabblers' 2 wild members alone cover two colors. *Count-specific: yes.*
3. **The Goes Last token makes long solo runs for everyone, not only Crunch Time.** Round III order: Ava 5 in a row, Ben 1, Cal 3, Ben 1, Cal 1, Ava 1, Cal 2, Ben 3. Round II: Ava 4, Cal 1, Ben 1, Cal 1, Ben 3, Cal 2. Ben and Cal complained about Ava's run but each had 3-turn runs of their own, made by the token skipping the holder. *Count-specific: yes, partly* (with three seats a skipped player leaves only one rival to alternate with).
4. **Round III decides the game.** 147 of 255 followers (58%) were scored in round III; Cal went 41 to 98. Contest prizes rise to 10 and three of the six biggest payouts (Hot Streak 12, 10-packs, Die-Hards 6) land there. *Count-specific: no.*
5. **Dabblers and Closer overlapped.** Once Dabblers' wild members filled purple, Closer added nothing to Cal's member colors or Cosmopolitans. A wild member makes every later member of a missing color worth less for the yellow contest. *Count-specific: no.*
6. **Line Cutters was redundant in round II.** "Fewest followers goes first" already put Ava (8) first. The catch-up rule and Line Cutters point the same way early; Line Cutters only overrode the catch-up in round III, when Ben (28) was lowest. *Count-specific: no.*
7. **Survey grows with green copy play.** Cal's Survey paid 6 yellow at [124] off six minions on green; heavy green play makes Yellow's Survey one of the richest spaces late. Small. *Count-specific: no.*
