# Review of r3g1: what the four player agents got right and wrong

Game: Ben (new player, Purple Cloak), Dee (new player, Green Cloak), Ava (experienced, Blue Cloak), Cal (experienced, Red Cloak). Colors: Red, Purple, Blue (market), Green (echo). Final: **Ben 82, Dee 74, Ava 70, Cal 53.** The two first-timers finished first and second.

Sources: facts-r3g1.md (ledger), moves-r3g1.txt (decisions, numbered [n]), /home/user/pa-games/r3/r3g1/cards.md, events.jsonl (game log), agents.jsonl (exact prompts). Every number was counted from the log or the ledger unless it says "about" or "roughly". Where I say what a strong player would have done, the follower change is an estimate.

## The cards that matter in this review

Cloaks (each player keeps one all game):
- **Red Cloak**: whenever you recruit a member, +1 red (swaps and steals count).
- **Purple Cloak**: whenever you take the Goes Last token, +2 purple.
- **Blue Cloak**: whenever you discard a member, +1 of its color (grey: any color). Shop discards count.
- **Green Cloak**: whenever you copy an action or a member, +2 of its color (grey: any color).

Contests, scored every round end (+4 / +6 / +10; tied leaders each get half, rounded up):
- Red **Most members of one color** (your biggest one-color group; Dabblers adds 2 to any group).
- Blue **Most members**.
- Purple **Went last**: whoever placed the round's last minion.
- Green **Most minions on green**.

The Goes Last token: "your other minions are placed after everyone else's". Taking it from someone sends their waiting minions back into normal order.

## Where the followers came from (counted from the log)

| Player | Final | Start | Bought | Contests | Spaces | Member abilities | Printed on members held |
|---|---|---|---|---|---|---|---|
| Ben | 82 | 1 | 46 | 11 (Went last II +6; Red tie III +5) | 9 (Last Call 7, Word of Mouth 2) | 11 (Night Managers 7, Timekeeper 4) | 4 |
| Dee | 74 | 1 | 0 | 40 (12 in I, 18 in II, 10 in III) | 8 (Crowd 4, Gather 4) | 17 (Regulars 6, Copyist 6, Thrift Hunters 6, Stunt Double's copy of Crowd 4, Ghost −5) | 8 |
| Ava | 70 | 1 | 46 | 14 (Went last I +4; Green III +10) | 4 (Crowd) | 0 | 5 |
| Cal | 53 | 1 | 24 | 10 (Red and Blue ties III, +5 each) | 4 (Gather) | 6 (Purists) | 8 |

Round-end standings: after round I Dee 18, Ava 16, Cal 11, Ben 4; after round II Dee 55, Ben 37, Ava 29, Cal 29. Round III gains: Ben +45, Ava +41, Cal +24, Dee +19.

Three facts frame the review:
1. **Ben's 8-point margin over Dee comes from Cal's last placement.** Cal's Demote (swap a member for one costing up to 3 less) at [213]–[214] put the Ghost (worth 0 members; whenever it joins your cult, −5 followers) into Dee's cult in place of Regulars. Counted from the end state, that one swap cost Dee about 18: −5 Ghost, −1 Regulars printed, −2 Regulars round-end payout, −5 on Most members (tie instead of a win), and −5 on Most of one color (her green group fell from 5 to 4, so she tied instead of leading alone once Ben's Promote broke Cal's red group). Ben's own reply depended on that board, so the exact figure is uncertain, but it is more than the margin.
2. **Spoilsport did not change the winner.** Cal's Spoilsport (round end: choose a contest; nobody wins it) cancelled Went last, which cost Ben 10. Ben still won by 8.
3. **Members and follower buying both worked here.** Dee bought zero followers and finished second off 40 contest followers; Ben held only 4 members, but they paid him 11 followers, 7 purple and 6 more resources. Three of the four debriefs concluded the opposite of what their own ledger shows on this (see A and E).

---

## A. Each player's line, what it earned, and the decisions that decided the finish

### Ben (1st, 82): take the Goes Last token early, place the round's last minions in a row, turn purple into 5- and 10-follower buys

What it really earned: 46 bought (two 10-packs, five 5-packs, one 1), Went last +6 in round II, a Red tie +5 in round III, Last Call 7, Night Managers 7 and Timekeeper 4. The key was not the token itself but **Last Call** (+1 purple, +1 follower and +1 purple per minion you have left, take the token): taken as his first placement in rounds II and III, it skipped his middle turns, so he held the last three placements of both rounds. Ava took the token from him at [110] and Cal at [175]; neither changed who placed last, because everyone else ran out of minions first. That run of turns fed On a Roll (+2 purple per consecutive turn), Courier and Night Managers. A good line at this table, and the best one.

Decisions that decided his finish:
- **[58] Last Call as round II's first placement.** +3 followers, +6 purple (with the cloak), a 10-follower buy on the spot, and the round's last three turns. Round II took him from 4 to 37. The best single placement in the game.
- **[116]–[119] On a Roll, pass, then Markdown for Night Managers.** He reordered his last two turns so he could afford both Night Managers (round end: if you placed the round's last minion, +1 follower per purple member) and a 5-pack. Night Managers cost 4 and paid 3 + 4 + 1 printed, plus 1 to Timekeeper. Correct and careful.
- **[153]–[154] Last Call again, then Courier for 8 purple** (whenever you take a consecutive turn, +1 of each other color). It paid 6 resources (two triggers, not the "9 or more" he expected), 1 printed, and +1 each to Night Managers and Timekeeper: about 9 back for 8. Even, not the win he described.
- **[220]–[221] Promote on Cal's Loyalists, swapping it for Closer from the shop.** Promote: +3 red, swap any member for one costing up to 3 more. Cal's red group fell from 5 to 4, so Red became a three-way tie (+5 to Ben). It also gave Cal a purple member, which switched off Cal's Purists (−3), something Ben did not mention. About +5 for Ben and −8 for Cal for one placement. Sharp.
- **Round I members.** He ended round I on 4 and decided at the time that 1-follower members were a trap. They were not: Picket Line (whenever a rival takes a Purple space, +1 purple) paid 7 purple, and Picket Line plus Timekeeper (game end: +1 per purple member) together returned about 18 for 12 resources. His round I was slow, not wrong.

What a strong player would change: little. He could have kept the round I lesson to "members that fit your line pay", not "buy packs".

### Dee (2nd, 74): camp Green, copy everything, collect bodies for three contests, never buy followers

What it really earned: 40 from contests, by far the most (three wins each in rounds I and II, two ties plus nothing on Green in round III), 17 from member abilities, 8 printed, 0 bought. She passed her recruit 9 times. The line won rounds I and II by 12 and 18 contest followers and was strong at this table. Its weakness was that every one of her contests was a body count that rivals could change with one swap, steal or discard, and in round III four rivals did exactly that.

Decisions that decided her finish:
- **[17] Dabblers (counts as 2 wild members, worth 2) on her first placement**, off an Echo copy of Ben's Sleep In. It gave her round I's Most members and Most of one color (3 against 2) and, with Build Up and Regulars, Green too: +12. Correct.
- **Round II, [76]–[109]: Cover and Reprise copying Ava's Recruit Twice, then Crowd into Stunt Double, then Build Up into Fan Club copying Cal's Late Shift for a free Thrift Hunters.** Six members in one round after losing Dabblers to Cal's Mutineers at the start of it; +18 contests and Regulars +4. The strongest round any player had. Her passes at [80] and [86] to afford Stunt Double were correct.
- **[158] Agents as her first Spree pick.** Agents: your actions can't be copied. It counts against your own copies too (Cory's call, Nov 11). Her next placement, Reprise at [162], tried to copy her own Cover, which Agents now protected, and got nothing ("Dee had nothing to copy (Dee's Agents prevents copying Cover)"). That Reprise had a real target: Cover onto Cal's Initiation, a free member costing up to 10, plus Copyist +2 and two cloak payouts. Against that, Agents was her fifth green member and kept her tied in Red at the end. Net cost about 5 to 9 followers. The card text says it plainly; she bought it saying "it also stops anyone copying my moves".
- **[188] Pass holding 5 blue for Mannequin, with Con Men (on recruit: steal 5 resources) in the shop and Test Drive open.** Ava's Test Drive used Con Men on her next turn and took all 5 ([189]–[196]). Dee's later Alchemists plan needed only Right Away's 4 and Gather's 3, so a 5-follower buy at [188] would have cost her nothing. −5, cleanly.
- **Cal's Demote at [213]** (fact 1 above), about −18. Loyalists (your other members can't be swapped) would have blocked it. It sat in the discard pile through round II, where her three discard-pile recruits could have reached it; it would not have stopped Mutineers, Repossessors or Con Men.

What a strong player would change: buy the 5-pack at [188] and skip Agents at [158]. Together that is about 10 to 14 followers, enough to finish level with Ben or ahead.

### Ava (3rd, 70): Blue Cloak discard engine and Last-Minute Shopper, then break Dee in round III

What it really earned: 46 bought, Went last +4 in round I, Green +10 in round III, Crowd 4, 5 printed. Her engine was real: Last-Minute Shopper (round end: +3 blue, then you may recruit) paid 9 blue and three extra recruits, each a 5-follower buy, over the game; the Blue Cloak paid her 20 resources, the most of any cloak. Round II paid 0 from contests, and she was right that no contest was in reach that round (Dee had 4 minions on Green and 6 members; Ben held the round's last three turns).

Decisions that decided her finish:
- **[4]–[10] Out of Style with the Blue Cloak into Last-Minute Shopper on her first placement.** Six resources from one space and the best member buy at the table. Correct.
- **[48] Test Drive on Purifiers** (discard one of your members; each rival with more members than you discards one too). Ben lost Seat Filler, Dee lost Line Cutters, the cloak paid her 4. Dee still won all three contests she led, so it did not change round I's prizes.
- **[87]–[88] Demote: her Line Cutters for Cal's Dabblers, with Echo open and Cal next to act.** Cal Echoed the Demote one turn later ([90]) and took Dabblers back. Her Recruit Twice and Demote placements in round II netted Mutineers (already spent), 3 red and 5 blue. The risk was visible: Echo copies "the previous action", and the next player had Echo in reach.
- **[164]–[178] Crowd into Protesters on Greatest Hits, then Build Up.** Protesters: on use, once per round, put a spare minion on an open space; nobody can place there. She filled the last Green space herself and won Green 3 to 2: +10 for her instead of a +5 tie, and −5 for Dee. The best planned play of round III.
- **[189]–[196] Test Drive on Con Men, all 5 from Dee.** +5 for her and −5 for Dee. She chose Dee because "Ben at 47 isn't the threat": the screen showed Ben on 47 with "+0 if the round ended now" though Ben had the round's last three placements coming (see G2). Taking Ben's 4 purple instead would have cut one of Ben's closing 5-packs; that alone does not close a 12-point gap, but it would have left Dee about 5 closer to Ben.

What a strong player would change: not much within reach of 82. The Demote at [87] was the weakest call.

### Cal (4th, 53): mono-red bodies around Purists, then Line Cutters into Crunch Time runs to attack Dee

What it really earned: 24 bought (nine 1-follower buys, three 5s), 10 from two round III ties, Gather 4, Purists 6, 8 printed. He spent his recruits on many small buys because his best spaces (Borrow, Late Shift, Initiation, Spree, Mutineers' steal) gave members, not resources. His three-turn runs (Crunch Time: your next two turns come right after this one) were well built, but they mostly took points off Dee rather than adding to his own total, and the player they helped most was Ben.

Decisions that decided his finish:
- **[19]–[25] Borrow Loyalists, buy 1, Gather into Purists.** +4 from Gather, Purists +3 in rounds I and II. Correct and exact.
- **[61]–[70] Crunch Time, Gather, Late Shift for a free Mutineers, steal Dee's Dabblers.** Dabblers ended the game with him (2 printed, counts as 2). But Dee still won Blue (6 to 4) and Red (4 to 3) in round II, so the steal swung no round II contest, contrary to his debrief.
- **[125]–[135] Crunch Time, Initiation for a free Spoilsport, Spree for Seat Filler and Loyalists.** Spoilsport gave Cal 1 printed follower and later cost Ben 10. Consolation Prize (round end: +2 per contest you don't win), in the same shop, would have paid Cal about +4 more.
- **[169]–[172] Repossessors (on use, once per game: discard a rival's member costing up to 8) on Dee's Copyist.** Copyist went to the face-up discard pile, and Dee pulled it back two turns later with Markdown for 3 blue, plus 2 from Thrift Hunters ([184]–[185]). Fan Club (cost 8) would have cost Dee the same body and green-group count, and she could not afford to buy it back (6 after Markdown's discount, against her 3). Roughly +5 for Cal (Blue alone instead of a tie) and −7 for Dee.
- **[213]–[214] Demote: Dee's Regulars for the shop's Ghost.** About +5 for Cal (a Blue tie instead of a loss) and about −18 for Dee. It decided first place, and Cal did not see that it handed the game to Ben.

His own forecast drift ("projected 71" at [215], "70-ish" at [176]) came from the screen, which showed him at 70 because it gave him Went last while Ben still had three minions to place (G2). His debrief blames himself.

---

## B. Misreadings: claims that contradict the cards, the rules or the log

- **Ava [48]: "Dee and Ben each lose a member while Cal at 2 is untouched."** After Ava discards Latecomers she has 1 member, so Cal at 2 also discards. He lost the borrowed Loyalists ([51]).
- **Cal, round I notes and debrief "change" 5: Purifiers "cost me Loyalists" and "wreck[ed] a rival's two-member red setup in round I".** The Loyalists he lost was borrowed with Borrow and was due to go back to the shop before scoring anyway. His Gather +4 had already paid. The hit cost him nothing. Ben (Seat Filler) and Dee (Line Cutters) did lose a member each.
- **Cal debrief: "Purists only fired twice for 6, since Mutineers and the grey bodies kept breaking the color cap."** Grey has no color for Purists (the log reads his red-plus-grey cult as "members of 1 color" in round II), and Mutineers left his cult in round II. Round III failed because of Repossessors (blue, his own pick) plus Closer (purple, put in his cult by Ben's Promote at [221]).
- **Cal debrief: Mutineers "swung two contests in round II".** Dee won both Blue (6 to 4) and Red (4 to 3) in round II.
- **Cal debrief: Ben made "three 10-follower packs and seven 5-packs".** Two 10s, five 5s and one 1.
- **Cal [92]: "As the follower leader I'd otherwise pick last in round III."** He ended round II on 29, tied for last; he read the projection, not the score.
- **Cal [176], [215]: "my 70-ish projection", "projected 71".** The screen's projection, which gave him Went last with Ben's three minions still to come. Actual: 53 (G2).
- **Dee [78] and debrief: the Green Cloak's +2 "came in blue, not green".** The cloak pays "+2 of its color", the color of the copied action; Recruit Twice is blue. The card is right; the reading is natural for a Green cloak (see C).
- **Dee [81]: expected one cloak payout from Reprise copying Cover copying Recruit Twice.** She got two (+2 green for Cover, +2 blue for Recruit Twice). The log is right; she undercounted in her own favour.
- **Dee [158], [162]–[163]: bought Agents saying it "stops anyone copying my moves", then was surprised it blocked her own Reprise, "the card text doesn't say whether it covers me too".** It says "Your actions can't be copied" with no exception, which is Cory's call.
- **Dee debrief: Ghost "cost me about 11 followers in total (−5 Ghost, Regulars' 1, and +5 lost on the members contest)".** It also took Regulars' round-end +2 and her outright lead in Most of one color; about 18 (fact 1).
- **Dee debrief: Loyalists "was in the shop and I never took it".** Through round II it was in the discard pile (reachable with her three discard-pile recruits); in round III Cal held it until Ben's Promote put it back in the shop after her last turn.
- **Dee debrief "bad" 6: "Ben owned Went last every round."** Ava won it in round I; it was cancelled in round III.
- **Ben debrief: "Picket Line alone was close to worthless."** It paid 7 purple (7 rival Purple placements) plus 1 printed, and counted for Night Managers twice and Timekeeper once.
- **Ben [154] and debrief: Courier's extra resources would be "9 or more", "paid for most of a 10-pack".** 6 resources from two triggers.
- **Ben debrief "bad" 4 and "change" 5: Con Men "sat in the shop in round III doing nothing, because everyone had spent down to zero".** Seven placements later Ava's Test Drive used it to take 5 blue from Dee ([189]).
- **Ben debrief "change" 2: Test Drive into Purifiers "hits other players out of nowhere and feels like a random swing".** Purifiers had been face up in the shop since Ava's first placement ([7]). It was a public threat nobody answered, not chance.
- **Ava debrief: Patroness (whenever shop members go to the discard pile, +1 follower) "in round III alone would have paid around 12 or more".** Patroness first appeared in the shop after her Scouts wipe ([154], log line "New in the shop: Patroness"). Holding it from then on would have paid about 4 (Test Drive's Con Men, Out of Style's three).
- **Ava debrief: "Ben's purple members quietly earned 14."** Night Managers 7 and Timekeeper 4: 11 followers (14 counts Last Call, a space).
- **Ava debrief "change" 4: once someone leads Most members by three bodies in round II, "the shop rarely offers anything that lets anyone else catch up".** In round III Cal went from 4 to 8 members and tied Dee, using Initiation, Spree, Late Shift and two swaps.
- **Ava [138] feel: the round was "decided in one burst"** by Cal's opening run. Cal gained 24 in round III, the third-best; the projection she read gave him 68.

---

## C. Every complaint and praise about the game, grouped

Counts are of feel notes (FEEL) plus round notes and debrief items. Verdicts: (1) true about the game, would bother a player on any line; (2) real, but caused by the player's own plan or misplay; (3) a misreading; (4) caused by how the agents are run.

1. **Late take-that piles onto the leader with no answer** (Mutineers, Repossessors, Demote and the Ghost, Con Men, Protesters). Dee [76], [156], [184], [207], round III notes, "bad" 1 and 2, "change" 1 and 3; praised by Cal ([67], [169], [213] "haymaker", "good" 2 and 4) and Ava ("good" 5). About 14 mentions. **(1).** Five separate rival plays in rounds II and III took about 30 followers off Dee (Demote and Ghost about 18, Con Men 5, Protesters 5, Mutineers 2 printed, Repossessors a placement), and she could answer one (Copyist bought back). It worked as catch-up: she led by 18 after round II and lost by 8. Loyalists was the one defence, and it blocks swaps only.
2. **Spoilsport cancels a contest after all placements, and at game end becomes a kingmaker's choice.** Ben [153], round III notes, "bad" 1, "change" 1, idea Witness; Cal [227], "bad" 2, "change" 3; Dee [156]; Ava praised the drama ([228], "good" 6). **(1).** It cost Ben 10 with no possible reply, and Cal, out of the race, chose who lost 10. It did not change the winner here. Cal took it with his second placement of round III, so it was public all round.
3. **Test Drive firing Purifiers from the shop in round I.** Ben [50], round I notes, "bad" 2, "change" 2; Dee [52], round I notes, "bad" 3; Cal [51], "change" 5; Ava praised it ([48], [53], "good" 2). **(1) for the sting, (3) on size and randomness.** One outer-ring space removed a member from three rivals after they had placed. But it cost Ben one free member, Dee one 4-cost member, Cal nothing (borrowed), and no round I prize moved; Purifiers was public.
4. **Members and green contests won without a fight, Dee sweeping rounds I and II.** Ben round II notes, "bad" 3, "change" 3, idea Crowd Control; Ava [110], round II notes, "bad" 3; Cal "bad" 4. **(2).** Rivals placed 1 minion on Green in each of rounds I and II. When Ava contested it in round III she won it 3 to 2. Ava herself rated her own "bad" item "no".
5. **Red and Blue both reward the same pile of bodies** ("one race wearing two hats"). Cal "bad" 4, "change" 1, idea Turncoat Census; Ava "change" 4. **(1).** The same player won both in rounds I and II, and the same two players tied both in round III. Every swap or steal moved both counts at once.
6. **Dabblers counting as 2 decides contests.** Dee [17]; Ava round I notes, [88] "hot potato", "change" 1; Cal [70]. **(1).** It gave Dee round I's Red and Blue (3 against 2) and changed hands three times in round II (Dee to Cal to Ava to Cal).
7. **Echo undoing a two-turn swap for one cheap placement.** Ava [95], round II notes, "bad" 4, "change" 2; praised by Cal ([90], "good" 2, "the best interaction I've had in the game"). **(2).** Ava placed Demote with Echo open and Cal next. The copy did exactly what it says; a player can see it coming.
8. **Spending a recruit on 1 follower when a turn leaves 1 to 4 resources.** Cal [21], [62], [71], [93], [136], [215], round II notes, "bad" 1, "change" 2, idea Small Change; Ava [98] (and [33] calling the 1/5/10 packs "a neat little math nudge"); Ben [36], "bad" 7, idea Odd Jobs; Dee [80]. About 12 mentions. **(2).** Cal made 9 of the game's 11 one-follower buys, because his free-recruit spaces gave him members instead of resources. Ava made 1, Ben 1, Dee 0.
9. **Follower buying beats building a cult.** Dee "change" 2, round III notes; Cal "change" 2 (the 10-pack gap). **(3).** Two of the top three bought 46, but the second-place player bought 0, and Ben's members paid him 11 followers and 13 resources. The 10-pack gives no better rate than the 5-pack (both 1 follower per resource); Cal's gap was recruits spent on small piles (group 8).
10. **1-follower members in round I are a trap.** Ben [13], [35], round I notes, "bad" 5, "change" 4. **(3).** Picket Line and Timekeeper together returned about 18 for 12 resources; his only loss was a free Seat Filler, to Purifiers.
11. **Con Men and steal effects are dead late.** Ben [182], "bad" 4, "change" 5. **(3).** Con Men took 5 from Dee seven placements later.
12. **Con Men taking a pile saved by passing recruits.** Dee [207], "bad" 2, idea Rainy Day Fund. **(2).** She passed at [188] with Con Men in the shop and Test Drive open; buying a 5-pack would not have hurt her next plan.
13. **The Ghost through Demote is a double hit** (lose a member and 5 followers). Dee [184], "change" 3; Ava praised Ghost sitting in the shop as a trap ([199], "good" 5). **(1).** One placement cost Dee about 18 (fact 1). Demote's "up to 3 less" includes equal cost, so Ghost (5) can replace any member costing 5 to 8.
14. **Purple placement: the Goes Last token fight.** Praised: Ben [26], [113], [181], round II notes, "good" 1, 2 and 5; Cal [175], "good" 5. Complaint: Dee [38], "bad" 6 (hard to follow whose turn is next). **(1) both.** The token was taken 5, 3 and 3 times in rounds I to III (first take included). The skipped turns are confusing to track: Dee lost track at [38].
15. **Copy chains on Green.** Praised: Dee [15], [81], [83], [100], [105], [157], "good" 1–3; Ava [74] (the discard pile as "a second shop"). **(1).** Dee's round II copy chain produced six members and +18 contest followers. The confusion that went with it is group 16.
16. **Rules unclear from card text.** Green Cloak's color (Dee [78], "bad" 5, "change" 4): **(1), small**: "its color" reads as green on a Green cloak, though it means the copied action's color. Agents covering your own copies (Dee [163], "bad" 5, "change" 4): **(3)**: the text has no exception. Blue Cloak and shop discards (Ben [3], [50], "bad" 6, "change" 6): **(1)**: "whenever you discard a member" does not say shop discards count, and Ben took a different cloak because of it. Whether Markdown and Late Shift keep your normal recruit (Dee [76], Ben [34]): **(1), small**: the cards say "recruit ... now" and do not say the turn's recruit remains. Borrow's member leaving before or after scoring (Cal [20], "bad" 6): **(3)**: the card says "before scoring". Markdown's discount paying a member's colored part (Dee [185], "surprised I can pay the green part with blue"): **(1), small**: the engine took the 2 off Copyist's green part; a table would ask.
17. **Crunch Time runs are a combo you have to spot.** Cal [17]/[61], [67], [128], "good" 1 and 4; Ava [73] and Dee [76] felt helpless watching. **(1).** Both runs gave Cal three uninterrupted placements, including the only Initiation. The fear was larger than the result (B, Ava [138]).
18. **Last-Minute Shopper's round-end recruit landing on an exact 5.** Ava [33], [56], [111], "good" 3. **(1).** Three extra recruits and 9 blue for 5 resources.
19. **Blue Cloak turning shop-clearing into income.** Ava [4], [53], [72], [199], "good" 1. **(1).** 20 resources over the game, against Green 14, Purple 10, Red 9.
20. **Protesters as area denial.** Ava [165], [167], [178], "good" 4. **(1).** It decided Green in round III (+10 for her, −5 for Dee).
21. **Promote and Demote reaching into a rival's cult.** Ben [220], [221], "good" 4; Ava [82]. **(1).** Ben's Promote moved 13 followers between two players; Ava learned that Loyalists does not protect itself ([221] feel).
22. **Late Shift's free member plus your normal recruit.** Ben [34], "good" 6; Cal [61]; Dee [107] (copied through Fan Club for a free 8-cost member). **(1).** Late Shift and its copies produced 4 free members.
23. **The last placement of round I is a shrug among leftover spaces; Right Away on a last minion does nothing.** Cal [41], round I notes, "bad" 5; Dee [44], "change" 5. **(1), small.** Both took the space for its resources; the screen said the extra turn was empty.
24. **Holding Spoilsport while out of the race.** Cal [227], "bad" 2. **(2)**, his own rating.
25. **Late in round III, my recruit was pass or a card that hurt me.** Dee [186], [187], "bad" 4. **(2)**, her own rating: her resources were at 0 after copy chains.
26. **Round III's ties at +5.** Ava round III notes, "bad" 5. **(2)**, her own rating; the tie rule worked as written.
27. **Picking a cloak blind.** Cal [1], Dee [2]. **(1), small.** Neither regretted the pick.
28. **Ending with one resource left over.** Ben [225], "bad" 7. **(2), trivial.**
29. **Out of Style's repeated prompt, Scouts' eight discards, Con Men one cube at a time, the 197-line swap list, and the "Pass" label after a recruit.** Ava [199]–[203], [149], [193], "bad" 1–2, "change" 3; Cal [214], "bad" 3, "change" 4; Dee [103]. **(4)** (see G).

---

## D. What the players got right

- **Ben's read that skipping turns with Last Call leaves you holding the end of the round** ([113]: "skipping my turns with Last Call left me holding the whole end of the round"). It was the most valuable rule-level insight at the table, and he repeated it in round III.
- **Ben's sequencing at [116]–[121] and [217]–[225]**: changing the order of two spaces to afford both a member and a pack, and planning the last three turns to the exact resource (his closing 10-pack landed with 1 to spare).
- **Ben's Promote target at [221]**: he saw Closer would add nothing and that removing Loyalists itself (the one member Loyalists does not protect) broke Cal's red group.
- **Dee's round II**: the copy chains at [76]–[109] were correct at every step, including passing at [86] to buy Stunt Double next turn and seeing that Fan Club copying Late Shift would count her own four placed minions.
- **Dee's rebuild after Con Men ([207]–[210])**: Right Away to protect Gather, exactly 7 for a ninth body, with Gather's +4.
- **Ava's Protesters target ([168])**: she blocked the space Cal wanted (Greatest Hits) rather than the one she wanted, and took the other herself.
- **Ava's Shopper arithmetic**: every round-end recruit landed on an exact 5-pack.
- **Cal's Gather–Purists combo ([19]–[25]) and his Echo choice at [92]**: giving back the spent Mutineers instead of Line Cutters kept him first in round III.
- **Every player paid with colors that win nothing held** and said so; no contest here counts resources.
- **Debrief self-assessments that hold up:** Cal named his nine 1-follower recruits as the worst trade he made; Dee named Ben's "steady pack-buying plus one owned contest" and her Con Men loss; Ava named Line Cutters as a waste and Thrift Hunters as the card she should have taken; Ben named Night Managers as his best member. Each matches the ledger.

---

## E. Members: who recruited what, and what each returned

"Paid" is resources spent; "free" means a space or member brought it in at no cost.

| Player | Member | Round, how | Paid | What it returned | Verdict |
|---|---|---|---|---|---|
| Ava | Last-Minute Shopper | I, [10] | 5 | 9 blue, 3 extra recruits (all 5-packs, 15 followers), 1 printed | Best buy at the table |
| Ava | Latecomers | I, Markdown [30] | 4 | Took the token: Went last +4; then Purifiers fodder (+1 purple from the cloak) | Good |
| Ava | Line Cutters | II, Recruit Twice [74] | 4 | Traded away by her own Demote the next turn; ended with Cal, who went first in round III | Lost value; helped Cal |
| Ava | Repeat Customers | II, from discard [97] | 8 | +3 blue (plus +3 from the Test Drive copy), its discard recruit found nothing affordable, 1 printed | Poor: 8 for about 4 |
| Ava | Scouts | III, Echo of Spree [140] | 7 | One wipe of 8 shop cards: 8 resources through the cloak, 1 printed | Good |
| Ava | Protesters | III, [165] | 6 | Won Green: +10 instead of +5, Dee −5; 1 printed | Best single-use member |
| Ava | Mutineers | II, by Cal's swap | — | Already spent; 1 printed | — |
| Ben | Picket Line | I, [13] | 6 | 7 purple, 1 printed, +3 to Night Managers and Timekeeper | Good (he thought worthless) |
| Ben | Timekeeper | I, Reprise turn [28] | 6 | +4 at game end, 1 printed, +2 to Night Managers | Good |
| Ben | Seat Filler | I, Late Shift free | 0 | Lost to Purifiers the same round | Nothing lost |
| Ben | Night Managers | II, Markdown [119] | 4 | +3, +4, 1 printed, +1 to Timekeeper | Excellent |
| Ben | Courier | III, [154] | 8 | 6 resources, 1 printed, +2 to his purple cards | Even |
| Dee | Dabblers | I, [17] | 5 | Round I Red and Blue leads (+4 over a tie, roughly); stolen at the start of round II | Good while held |
| Dee | Regulars | I, [39] | 5 | +2, +4; swapped out for Ghost in round III (−5) | Paid 6, then the target |
| Dee | Line Cutters | I, [45] | 4 | Lost to Purifiers the same round; she held the round I lead anyway | Wasted |
| Dee | Purifiers | II, Cover copy [78] | 6 | Never used (it would always hit her as hard); 1 printed, a body | Body only |
| Dee | Copyist | II, Reprise copy [84]; again III, Markdown [185] | 5, then 3 | +6 from copies, +2 Thrift Hunters on the rebuy, 1 printed | Good |
| Dee | Stunt Double | II, [101] | 7 | Copied Crowd: +4 followers, 3 green, cloak +2, Copyist +2; 1 printed | Good |
| Dee | Fan Club | II, [105] | 8 | Copied Late Shift: free Thrift Hunters (8), cloak +2, Copyist +2; 1 printed | Excellent |
| Dee | Thrift Hunters | II, free | 0 | +6 (three discard-pile recruits), 1 printed | Excellent |
| Dee | Agents | III, Spree copy [158] | 5 | Blocked her own Reprise ([162]); kept her green group at 4 for the Red tie; 1 printed, +2 Thrift | Net loss |
| Dee | Extra Hand | III, Spree copy [160] | 10 | One more minion (it went to Gather: +4 followers, Alchemists), 1 printed, +2 Thrift | Fair |
| Dee | Alchemists | III, [210] | 7 | Ninth body, Gather +4, ability never used | Body only, but it held a Most members tie |
| Cal | Loyalists (borrowed) | I, Borrow free | 0 | Enabled Gather's +4 on Purists | Good |
| Cal | Purists | I, [24] | 6 | +3, +3, 0 in round III; 1 printed | Fair |
| Cal | Mutineers | II, Late Shift free | 0 | Stole Dabblers (2 printed, 2 bodies for the rest of the game); no round II contest moved | Good |
| Cal | Spoilsport | III, Initiation free | 0 | 1 printed; cancelled Ben's +10 | Nothing for Cal |
| Cal | Seat Filler, Loyalists | III, Spree [133], [135] | 5 each | Bodies for the Blue and Red ties; Loyalists then swapped away by Ben | Fair |
| Cal | Repossessors | III, Late Shift free | 0 | Discarded Copyist, which Dee bought back; its blue color helped switch off Purists | Weak target |

Were members under- or over-used? Neither, at the table as a whole. Members that fit a line paid well: Ben's four purple members returned 11 followers and 13 resources for 24 resources, Ava's Shopper and Protesters were her best plays, and Dee's copy members drove her 40 contest followers. Members bought only as bodies (Purifiers, Alchemists, Seat Filler, Repeat Customers) returned about their printed follower plus a share of a contest. Cal's members cost him least and returned least for himself: three of his best (Mutineers, Repossessors, Spoilsport) took points from others rather than adding to his own.

---

## F. Card ideas

All 13 came in the debriefs; no player wrote an IDEA during play.

- **Clearance Rack** (Ava, Blue space: recruit the cheapest discard-pile card, +1 follower per card discarded this round): no problem seen; Blue already has three discard-pile recruits, and counting discards this round is hard to track at a table.
- **Grudge Holders** (Ava, red member: when one of your members is swapped away, take back a rival member of equal or lower cost): answers the swaps aimed at the leader (C1); Loyalists already blocks swaps outright.
- **Fence** (Ava: round end, followers from the most resources a rival holds of one color): no problem seen; everyone spent to 0 every round, so it would have paid nothing here.
- **Night Owls** (Ben: +1 of each color at round end if you placed the last minion): no problem; going last was already the best line.
- **Witness** (Ben: one contest of your choice can't be cancelled this round): answers Spoilsport (C2), a real sting, but one card that did not change the winner.
- **Odd Jobs** (Ben: a space turning each leftover resource into 1 follower): answers a 1-resource leftover; buying 1-follower packs already does this.
- **Crowd Control** (Ben: +1 to your count in Most members or Green this round): answers uncontested contests (C4), which were caused by nobody contesting; Ava won Green in round III by placing.
- **Small Change** (Cal: up to 4 leftover resources into followers without a recruit): answers C8, which was Cal's own plan; it would mostly reward players who never plan their piles.
- **Watchers** (Cal: if you won no contest, +1 of each color per rival who won two): answers round II's sweep, partly; it reads two conditions at once.
- **Turncoat Census** (Cal: one-color members count double in Red but not in Blue): answers a real pattern seen here (C5), but changes two contests on one card, which a first-time player would read twice.
- **Bodyguard** (Dee: once per game, cancel a swap or take of your member): answers C1; partly covered by Loyalists.
- **Rainy Day Fund** (Dee: resources saved by passing can't be stolen): no; the problem was her own pass with Con Men visible, and "resources you passed to save" can't be tracked at a table.
- **Grudge Holders** (Dee: +3 any when a rival's swap or steal hits you): answers C1 as compensation; it would have paid Dee about 12 resources in round III alone.

---

## G. Process problems that remain

1. **A batched answer was thrown away seven times with no message.** Out of Style at [199]: the prompt said "This question comes back up to 3 times in a row. Answer every pick at once", Ava answered [11, 12, 16] (Cheerleaders, Clan, Snobs) seven times, and each time the same prompt came back (agents.jsonl has eight calls labelled m199). Only a single answer moved it on ([200]). The first pick, Cheerleaders, is grey, which raises a "+1 of which color?" question mid-sequence, and that breaks the batch; Scouts' eight-card batch at [141] worked because its cloak questions came after. It cost eight model calls, four feel notes and a debrief "bad" item. **Fix:** when a batch hits a sub-question, keep the remaining picks and ask the sub-question, or reject the answer with a reason; never offer batching when picks can raise sub-questions without handling it.
2. **The "if the round ended now" projection gives Went last to whoever placed most recently, even when a rival still has minions to place.** At [175] the screen showed Cal "+33 if the round ended now (70)" and Ben "+0 (42)", with Ben's three closing minions still to come; at [214] Cal 70, Ben 47. The header does say "assumes nobody moves again", but Cal planned off 70 ([176], [215], debrief: "a fantasy standing"), and Ava aimed her Con Men at Dee because "Ben at 47 isn't the threat" ([194]–[196]). Ben was the real leader for all of round III and was shown last. Ava saw through it once ([205]: "the purple +10 shown there isn't really mine"). **Fix:** while any player has minions left, show Went last as undecided (or award it to the player who will place last if nobody else takes a token space), and show each player's minions left beside the projection.
3. **One decision split into many identical questions.** Con Men's steal asked 5 times, one resource at a time ([192]–[196]). **Fix:** one answer for the whole steal ("Dee's blue 5").
4. **Swap lists of about 197 lines.** Cal's Demote at [214] listed every member against every legal replacement. **Fix:** two steps: pick the member to remove, then its replacement, with the contest effect on each.
5. **"Pass (recruit nothing)" after a member was already recruited.** Dee [103]: "The Pass label threw me ... it really just means ending my turn." **Fix:** label it "End turn (no more recruits)" when a recruit already happened this turn, or skip it when nothing is affordable.
6. **A space that will do nothing is offered with no reason.** Dee's Reprise at [162] showed no "you'd get" line at all, because Agents blocked the only copy. She placed there and learned afterwards. **Fix:** say "(nothing to copy: your Agents protects your actions)" on the option.
7. **Batch framing reads as many clicks.** Scouts at [141] said "comes back up to 8 times" though one answer covered all eight; Ava then complained of "clicking through eight separate discards". **Fix:** word it as one choice ("choose any shop members to discard").
8. **The facts sheet's ledger.** "Abilities paid" leaves out Ben's Timekeeper +4 and lists spaces (Last Call, Word of Mouth, Crowd, Gather) as abilities. Debriefs written from it repeat the mix-up (Ava's "Ben's purple members quietly earned 14"). **Fix:** split spaces from members and include game-end abilities.

---

## H. Patterns in the game visible from above that no player commented on

1. **Grey counts as a color for Gather but not for Purists.** Dee's Gather paid +4 for recruiting the grey Alchemists because she held grey members ([209]); Cal's red-and-grey cult counted as "1 color" for Purists. Same word on two Red cards, opposite readings, and nothing printed tells a table which. Both are logged fill-ins (decisions.md, Nov 11). Nobody noticed.
2. **A copy of a copy pays the Green Cloak twice.** Dee's Reprise of her own Cover, which copied Recruit Twice, paid +2 green and +2 blue ([81]–[83]): 4 resources plus the copied action's +5 blue from one placement. She believed it paid once.
3. **A borrowed member is a free shield against Purifiers.** Cal discarded the borrowed Loyalists, which was leaving at round end anyway, so Purifiers cost him nothing while it cost Ben and Dee a real member each.
4. **One round III center space was used three times.** Cal's Spree (recruit two members from the discard pile, +7 blue) was copied by Ava's Echo and Dee's Cover: 5 discard-pile recruits and 21 blue from one space in one round. Green's copies make a center space available to two more players.
5. **A swap that hands a rival a member of a new color switches off Purists.** Ben's Promote put Closer (purple) in Cal's cult; with Cal's own Repossessors (blue) that made three colors and cost him the round III +3. Neither Ben nor Cal saw it; Cal blamed grey members.
6. **The player who places last can also decide the order-sensitive contests by a last swap.** All three round III contest outcomes that changed in the final six placements (Blue tie, Red three-way tie, Purists off) came from Demote and Promote, both on Red's middle ring, and the last of them (Ben's Promote) had no possible reply. Players commented on Spoilsport's no-answer moment but not on these.
7. **Most members in round III was settled by bodies with no ability used.** The 8-to-8 tie rested on Purifiers, Alchemists, Extra Hand, Seat Filler and Loyalists, none of which used its ability; Most members rewarded any card at any price.
8. **The first-timers beat the experienced players.** Ben and Dee (only rules and cards) finished 1st and 2nd; Ava and Cal (with the strategy primer) 3rd and 4th. Both experienced players spent round III attacking the shown leader, Dee, while the actual leader, Ben, went unattacked except for Spoilsport.
