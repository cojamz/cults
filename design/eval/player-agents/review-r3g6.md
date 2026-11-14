# Review of r3g6: what the two player agents got right and wrong

Game: two experienced agents. **Ava** (Green Cloak) beat **Ben** (Blue Cloak) **67 to 48**. Colors: Blue (market) and Green (echo). This is a 2-player game, so every finding in C, E and H says whether it comes from the player count (likely gone or much smaller with 4 players) or from the cards themselves.

Sources: facts-r3g6.md (the ledger), moves-r3g6.txt (decisions, numbered [n]), /home/user/pa-games/r3/r3g6/cards.md, system-Ava.md and system-Ben.md (the briefs), events.jsonl (the game log) and agents.jsonl (the exact prompts). Every number was counted from the log or the ledger unless it says "about" or "roughly". What a strong player would have done, and what it would have changed, is my estimate and says so.

## The cards that matter in this review

- **Green Cloak**: whenever you copy an action or a member, +2 of its color. **Blue Cloak**: whenever you discard a member, +1 of its color (grey: any color).
- Contests (+4 / +6 / +10; tied leaders each get half, rounded up): Blue **Most members**; Green **Most minions on green**.
- Blue spaces: **Test Drive** (discard a shop member, use its effect now), **Out of Style** (discard 3 shop members and refill, +1 of each one's color), **Markdown** (recruit from the discard pile paying 2 less, +3 blue), **Recruit Twice** (recruit from the discard pile, +5 blue; round II), **Word of Mouth** (+1 follower per 2 members; round II), **Spree** (recruit two from the discard pile, +7 blue; round III).
- Green spaces: **Build Up** (+1 green per minion on Green spaces), **Echo** (copy the previous action), **Reprise** (copy an action with your minion), **Crowd** (+3 green, +1 follower per minion on Green spaces; round II), **Cover** (copy an action with a rival's minion; round II), **Greatest Hits** (choose a color other than green, copy every action with your minion on its spaces; round III).
- Members named below: **Copyist** (2 green + 3 any: whenever you copy an action, +2 followers), **Regulars** (2 green + 3 any: round end, +1 follower per minion you have on Green spaces), **Agents** (2 green + 3 any: your actions can't be copied; the brief says this also stops you copying your own), **Dabblers** (5 any: worth 2, counts as 2 members), **Line Cutters** (4 any: you go first every round), **Last-Minute Shopper** (3 blue + 2 any: round end, +3 blue, then you may recruit), **Mutineers** (6 any: once per game, take a member from a rival with more members than you), **Window Shopper** (3 blue + 4 any: on recruit and at round start, discard 2 shop members, +1 of each one's color), **Con Men** (9 any: on recruit, steal 5 resources), **Extra Hand** (10 any: on recruit, +1 minion this round), **Stunt Double** (3 green + 4 any: on recruit, copy the action you just took), **Repossessors** (4 blue + 4 any: once per game, discard a rival's member costing up to 8), **Anarchist** (8 any: once per round, swap any 2 members that cost the same, in any cult or the shop), **Spoilsport** (8 any: round end, choose a contest; nobody wins it this round), **Scouts** (7 any: once per round, discard any shop members and refill).

## Where the followers came from

| Player | Final | Bought | Contests | Abilities and spaces | Printed on members held | Start |
|---|---|---|---|---|---|---|
| Ava | 67 | 15 (five 1s, two 5s) | 15 (Green +4, +6, tie +5) | 30 (Copyist 16, Regulars 9, Crowd 1, Crowd copied by Reprise 2, Word of Mouth 2) | 6 | 1 |
| Ben | 48 | 18 (three 1s, three 5s) | 15 (Blue +4, +6; Green tie +5) | 6 (Word of Mouth 4, Crowd 2) | 8 | 1 |

Round-end standings: after round I Ava 12, Ben 9; after round II Ava 39, Ben 24; after round III Ava 67, Ben 48.

Three facts frame everything below:
1. **Contests came out exactly level, 15 to 15.** The whole 19-point margin is abilities: Ava's two round I members, Copyist and Regulars, 10 resources together, paid 25 followers. None of Ben's eight members paid a single follower from an ability.
2. **Ava placed the last minion of every round** (round I [28], round II [82], round III [130]). In a 2-player snake with an odd number of minions each, the second seat always places last, and the catch-up rule ("fewest followers goes first") makes the leader the second seat. That is what made her round III swap and kill unanswerable.
3. **The deck ran out six times in round I.** The round I deck held 7 members (35 in the game, 28 added in round II), so 6 in the shop and 1 in the pile. Every Out of Style or Test Drive discard emptied the pile, the discard pile was shuffled back in, and the discarded members came straight back into the shop. Both players' attempts to keep cards from each other were undone this way, and neither saw why (G1).

---

## A. Each player's line, what it earned, and the decisions that decided the finish

### Ava (1st, 67): Green camp with a copy engine, then a last-placement swap and kill

The line: stack minions on Green spaces for the Green contest and Regulars; copy her own actions with Echo, Reprise, Stunt Double and Greatest Hits so that each copy paid +2 followers (Copyist) and +2 resources (Green Cloak); in round III, hold Repossessors and Anarchist for the round's final placement.

What it really earned: Copyist 16 (8 copies), Regulars 9 (2 + 4 + 3), the Green contest 15, Green Cloak 18 resources (9 copies). It was a strong line at this table, and it worked without ever copying Ben: all 8 of her copies were of her own actions, because Ben's Agents blocked his. Its weak spot was converting resources into followers: 15 bought, five recruits spent on 1-follower buys and five passed.

Decisions that decided her finish:
- **[8]–[15] Echo copying Ben's Out of Style, then Copyist the same turn.** +3 blue from the copy, +2 blue from the cloak, three discards for green, and Copyist (5 resources) bought on her first placement. Copyist then paid 16 plus 1 printed. The best decision in the game.
- **[17]–[19] Reprise copying her own Echo, then Regulars with exactly 5 green.** The copy itself copied nothing ([18], log "Ava had nothing to copy"), but Copyist still paid +2 and the cloak +2 green, which paid for Regulars. Regulars paid 9 plus 1 printed. Correct and sharp.
- **[34]–[37] Passing a recruit to buy Extra Hand for 10.** It gave 1 printed and a fifth placement in round II. Her five round II placements were Crowd, Reprise, Build Up, Echo and Word of Mouth; without the extra minion she would have dropped Word of Mouth (+2 followers, +1 blue), and the Green contest was 4 to 0 either way. So Extra Hand returned about 4 for 10 resources and a recruit, against +10 from a 10-follower buy: roughly 6 followers lost. Her own debrief calls it "borderline"; it was a loss.
- **[68]–[72] Echo copying Build Up, then Stunt Double copying Echo.** Stunt Double's copy paid Copyist and the cloak twice (once for copying Echo, once for Echo copying Build Up): +4 followers, +8 green, +1 printed, for 7. Ben's Con Men took 5 of the green right after ([73]–[79]), but the turn still came out about 6 ahead of a 5-follower buy.
- **[96]–[98], [111], [126]–[129] Repossessors through Echo on her own Markdown (6 instead of 8), Anarchist as insurance, then on the final placement Anarchist swapping itself for Ben's Spoilsport, Repossessors discarding Last-Minute Shopper, and Spoilsport cancelling Blue.** This took 10 (Blue's prize) and about 6 (Shopper's printed 1 and the 5-follower buy its round-end blue would have funded) off Ben. Without the swap Ava still wins: with Repossessors on Spoilsport instead, about 67 to 63; with Ben keeping Spoilsport, 62 to 53 (see B). Correctly played, and it turned a narrow win into a wide one.

### Ben (2nd, 48): Blue Cloak shop churn, a member pile for Most members, then Spoilsport

The line: Out of Style, Test Drive and Window Shopper to churn the shop through the Blue Cloak; Dabblers and cheap bodies to lock Most members; Agents to block Ava's copies; in round III, Spoilsport to cancel Green.

What it really earned: Most members +4 and +6 (round III's +10 was cancelled by his own Spoilsport in Ava's hands), the Green tie +5, 18 bought, and 6 from Word of Mouth and Crowd. The Blue Cloak paid 13 resources (it should have paid 18; see H5). It was a reasonable line at this table with one hole: it produced no followers except through contests and buys, while Ava's two cheap members produced 25. He also built far more members than the contest needed (8 to 4 in round II, 9 to 5 in round III).

Decisions that decided his finish:
- **[6] Dabblers over Copyist.** His Out of Style had discarded Copyist ([3]), but the reshuffle put it straight back in the shop, and his own feel note at [6] says "Copyist is back in the row". He held 2 blue and 4 green, enough for Copyist (2 green + 3 any). Buying it would have kept it from Ava, and he would still have led round I members 3 to 2 after Agents and Line Cutters. Copyist paid Ava 16; this is the single biggest swing available to Ben in the game, roughly 12 to 15 followers of margin after losing Dabblers' 2 printed. His debrief says he should have taken it, but does not know he had it in front of him after the reshuffle.
- **[22] Agents.** Blocked Echo and Cover on all his actions for 5. It stopped Ava copying Recruit Twice, Out of Style and Spree, but her copies of her own actions paid her 16 anyway. Fair value; not decisive.
- **[26] Line Cutters.** 4 resources for 1 printed and a member. Going first was worth nothing: he had fewer followers at the start of round II (9 to 12) and round III (24 to 39), so the catch-up rule already put him first. He also did not need the member: without it he still led round I 3 to 2, since Ava's last minion went to Markdown with an empty discard pile.
- **[45] Mutineers.** 6 resources for 1 printed follower, bought so Ava could not take Dabblers with it. The threat was real (she could have afforded it later that round), but he could have kept it out of the row for free by discarding it with that same Out of Style ([40]–[42]) instead of Thrift Hunters or Power Shoppers. About 4 to 5 followers lost.
- **[73]–[79] Markdown into Con Men right before Ava's last minion.** Stole 5 green and turned it into a 5-follower buy. Correct and well timed: about +6 for him and 5 resources fewer for Ava.
- **[89]–[90] Spree to recruit Spoilsport, and [119]–[122] Build Up and Cover to tie Green 3 to 3.** Each was sound alone; together they made Spoilsport worthless to him. Once Green was tied, cancelling it removes 5 from both players, which changes nothing (H7). He never noticed this, and Spoilsport then became the card Ava swapped for and used against him (−10). The Spoilsport pick was close to forced (left in the discard pile, Ava could have recruited it); what lost him 10 was Anarchist, which happened to come into the shop as the refill after his own Window Shopper discard ([86], log "New in the shop: Anarchist").

---

## B. Misreadings: claims that contradict the cards, the rules or the log

Card text and rules:
- **Agents only stops rivals.** Ava [35]: Reprise "denies Ben a Reprise on his Recruit Twice". Ben's own Agents stopped him copying his own actions; her brief says so in the strategy notes, and Ben read it correctly at [59] and [103].
- **Ava owning Agents would have helped her.** Ava debrief ("differently" and "members"): "I'd also grab Agents myself in round I", "I should have taken Agents out of my own Out of Style discard". Holding Agents would have blocked all 8 of her copies of her own actions: 16 Copyist followers and 16 Green Cloak resources. It only made sense as a recruit she never used, which is not what she says.
- **Cancelling a tied contest.** Ava [126]: "If he kept Spoilsport he'd cancel green, which puts him at about 59 against my 57, so this swap is the whole game." Ben debrief: "Even if I'd kept Spoilsport and cancelled Green, I'd have finished around 58 to her 62." Green was tied 3 to 3 at +5 each, so cancelling it takes 5 from both: Ben 53, Ava 62. Both players missed that Ben's Spoilsport was worth nothing to him once he had tied Green.
- **Test Drive gives you the member.** Ben [32]: "the Test Drive copy I thought I fired never stayed with me. Rebuying it now feels like paying twice." Test Drive uses the discarded member's effect once; it never joins you. He did get Shopper's +3 blue (log line after [25]).
- **Line Cutters protects his turn order.** Ben [26]: "It also gives me first pick every round from II on, so Ava's 'fewest followers goes first' catch-up stops working against me." He had fewer followers at the start of rounds II and III, so the catch-up rule already gave him first pick. The card did nothing for him.
- **Window Shopper's +1 was the cloak's.** Ben [88]: "Blue Cloak pays me +1 blue for it, so I'm on 5 blue." That +1 was Window Shopper's own; the cloak paid nothing (an engine fault, H5). At the round III start he expected "2 any plus 2 blue ... so I'm on 7" and had 5.
- **"Cover is a dead space ... does literally nothing"** (Ava [65]). Cover still put a minion on Green (a Regulars follower) and paid its +1 green to the first taker; she says so herself at [82].

Claims about what happened, contradicted by the log:
- **"Ben grabbed Agents straight out of the discard I created"** (Ava round I notes; debrief "handing Ben the discard he picked it out of"). Ben bought Agents from the shop ([22]). It was there because the empty pile shuffled her discard straight back in (log after [14]: "The deck ran out: the discard pile (1) is shuffled into a new deck"). Her conclusion that her discard handed it to him is right; "out of the discard" is not. The same happened to Line Cutters, which she discarded at [10] and Ben bought at [26].
- **"My earlier log says I paid 1 blue and 4 green for Dabblers, yet I still hold exactly that"** (Ben [23]). He did: after Dabblers he held 1 blue, and Build Up then paid +4 green. A coincidence, not a broken history.
- **"I expected to be sitting on 6 blue after the Test Drive combo but the view shows 4"** (Ben [26]). He held 0 blue after Agents ([23]); the right total was 5 (the space's +1, the cloak's +1, Shopper's +3). He got 4 because the Blue Cloak did not pay (H5). Half his own miscount, half a real fault.
- **"Last-Minute Shopper's round-end recruit almost always became a 1-pack"** (Ben debrief "bad" 6; [85] feel). It fired at a round end once (round II), and he passed rather than buy a 1-pack. In round III Ava discarded it first. Through Test Drive in round I, its recruit bought Line Cutters.
- **"Markdown and Recruit Twice whiffed on an empty discard pile late in round III"** (Ben debrief "bad" 4, round III notes). Ben took neither in round III; Ava did ([93], [130]). What failed for Ben was Spree's second pick ("can't pay for any member").
- **"A 20-point swing I had no answer to"** (Ben round III notes); "one card can swing 20 points" (Ben "change" 2). Spoilsport took 10 (Blue's prize). Repossessors on Last-Minute Shopper took about 6 more. About 16, from two cards.
- **"Recruit Twice and get it back free"** (Ava [102]). Recruit Twice charges the full 8 for Spoilsport; it would have worked only because its +5 blue plus Ben's 3 made exactly 8. Her read of the threat was right; "free" was not.
- **"I really lost in round II, when I let her take Green's +6 uncontested"** (Ben debrief). Not a misreading of a card, but overstated: Ava had 5 minions in round II (Extra Hand) and Green had 5 spaces. To take Green, Ben would have had to put most of his 4 minions there and give up Out of Style, Test Drive into Scouts and Markdown into Con Men, which paid him about 20 resources and a 5-follower buy. The real loss was Copyist at [6].

---

## C. Every complaint and praise about the game, grouped

Counts are of feel notes (FEEL), round notes and debrief items. Verdicts: (1) true about the game, would bother a player on any line; (2) real, but caused by the player's own plan or misplay; (3) a misreading; (4) caused by how the agents are run.

1. **Copyist with the Green Cloak and the multi-copy cards pays on every link of a chain.** Ava "change" 1, [17] feel ("makes Build Up look almost strictly worse"); Ben [73] feel, round II notes, "bad" 5, "change" 1. About 6 mentions from both. **(1), cards, not count-specific.** Copyist paid 16 for 5 resources, more than Ava's two contests combined (15). Each copy paid on its own, including a copy that copied nothing ([18]: +2 followers and +2 green for zero printed gain) and Stunt Double's copy of Echo paying twice ([71], [72]).

2. **Agents is a wall in a 2-player game.** Ava [65] and [82] feels, round I, II and III notes, "bad" 1, "change" 2, "again"; Ben [22] feel. About 8 mentions. **(1), count-specific.** With one rival, Agents shuts Cover off completely (Ava never used it on Ben) and Echo whenever Ben acted last. But it cost Ava less than she felt: all 8 of her copies were of her own actions and paid 16. With 3 rivals, Cover and Echo have other targets. Ben's [59] note that his own Agents blocked his Stunt Double was praise ("the good kind of rules friction").

3. **Swaps and kills on the last placement can't be answered.** Ava [114], [118] and [128] feels, round III notes, "bad" 5, "change" 3; Ben round III notes. About 6 mentions. **(1), cards, not count-specific.** Ava placed the last minion of every round because she led (H1), so Anarchist (once per round) and Repossessors (once per game) used on that placement left Ben no turn to reply. The same seat rule applies with 4 players; what is specific to 2 players is that the victim is certain.

4. **Spoilsport warps round III: getting it is everything, using it is a formality.** Ava "change" 4, [134] feel; Ben "change" 2, round II plan, round III notes. About 5 mentions. **(1), count-specific.** With only two contests, Spoilsport cancels half the prizes of round III; both players spent their whole round III on it (Ben a Spree pick and 8 blue, Ava Anarchist for 8). With 4 colors it cancels one contest of four.

5. **Markdown, Recruit Twice and Spree often find an empty discard pile.** Ava "bad" 2, "change" 5, round III notes; Ben "bad" 4, "change" 4, round III notes, Clearance Bin idea. About 7 mentions. **(1), count-specific, but not for the reason they gave.** Markdown found an empty pile at [28] and [110]; in round III the whole round II discard pile (19 members) was shuffled into the deck at the round III refresh, so the pile started empty and held only what Window Shopper put in. The cause is the reshuffle when the small 2-color deck runs out (H3, H4), not that "the pile drains fast".

6. **Out of Style with an empty pile was confusing; discarded members came back.** Ava [15] feel, round I notes, "bad" 6, "change" 6; Ben [5] and [6] feels, round I notes, "bad" 2. About 7 mentions. **(1) and (4), count-specific.** What they saw was true: Copyist, Regulars, Agents, Line Cutters and Last-Minute Shopper all came back into the shop within the same action. The rule is printed (the discard pile is shuffled into a new pile), but with 7 members in round I it turns Out of Style into a reshuffle machine. The players never saw the reshuffle lines at those decisions (G2).

7. **Recruits spent on 1-follower buys feel like filler.** Ava [29], [66] feels, "bad" 4; Ben [91] feel. 4 mentions. **(2).** Ava's own debrief says it was her sequencing ("a tighter plan would have dodged most of them"), and she also passed five recruits.

8. **Last-Minute Shopper's round-end recruit is a crumb and a counting puzzle.** Ben [85] and [124] feels, round II notes, "bad" 6. 4 mentions. **(1) in part, cards.** +3 blue with one recruit can buy at most 1 follower unless you already hold 2 more; Ben passed it once ([85]) and planned around it once ([124]). His "almost always a 1-pack" is wrong (B), but the weakness is real: Shopper returned 6 blue over the game and no followers beyond its printed 1, which it lost.

9. **Mutineers was dead all game.** Ben [45], [80], [104], [107] feels, round II notes, "bad" 3, "change" 3. About 7 mentions. **(2), partly count-specific.** He bought it to keep it from Ava while he led members all game, so it could never fire for him; he said so himself. With 4 players someone else would usually hold more members than you.

10. **Window Shopper's prompt kept coming back and the move log mislabelled it.** Ben about 18 feels ([60] block, [62], [64], round III start, [86]), "bad" 1, "change" 5, "again". **(4).** Not the game (G1).

11. **Resource history didn't match.** Ben [23], [26] feels, round I notes, "bad" 2. 4 mentions. **(3) for [23], and an engine fault for [26].** [23] was a coincidence; [26] was one missing Blue Cloak payment plus his own miscount (B, H5).

12. **Copy-of-a-copy bookkeeping for a tiny gain.** Ava [115] feel, "bad" 3, round III notes; Ben [123] feel ("had to squint"). 4 mentions. **(1), cards, mild.** Reprise copying Greatest Hits copying an empty Markdown paid +3 blue and +1 green after three levels of reading. Ben also praised the same chain (good 5).

13. **Buying a member only to keep it from the rival feels hollow.** Ben [45] feel (Mutineers); Ava [111], [112] feels (Anarchist). 3 mentions. **(1), count-specific.** 14 resources went into two such buys. With one rival, every threatening card can only be used against you, so denial buys come up more often than with 4 players. Anarchist then turned into the winning weapon ([113] feel).

14. **Picking a cloak before seeing the wheel is a bit swingy.** Ava [1] feel. **(1), mild.** In this game the choice read clearly (her own words), and the Green Cloak paid 18 against the Blue Cloak's 13.

15. **The suggested payment didn't fit the plan.** Ben [7] feel. **(4).** A screen suggestion; he chose another payment.

16. **No answer to an uncontested Green camp** (Ben round II idea, Bystander). **(2).** He chose not to contest Green in round II (A).

Praise:

17. **Test Drive combos (Last-Minute Shopper, Scouts).** Ben [24], [47], [48] feels, round I notes, "good" 1. 5 mentions. **(1), cards.** Test Drive on Scouts dumped six shop members for 4 cloak resources (it should have been 6 with the grey picks; H5) and a fresh row that held Window Shopper.

18. **Out of Style and Window Shopper feeding the Blue Cloak; choosing discards by what the rival could buy back.** Ben [2], [4], [39]–[42] feels, round II start, "good" 2; Ava [10], [12], [14] feels. About 10 mentions. **(1) in round II, undone in round I.** In round II Out of Style paid 6 resources and stocked the pile; in round I every carefully chosen discard came straight back into the shop (H3), so the reading that both players praised changed nothing.

19. **Build Up pays you off the rival's Green minions.** Ben [21] feel. **(1), cards.** +4 green from Ava's camp.

20. **The snake's back-to-back turns reward planning two placements as one.** Ava [33], [34] feels, "good" 2 and 3. 4 mentions. **(1), count-specific.** With 2 players every switch is a double turn; Ava's Crowd, pass, Reprise, Extra Hand ([33]–[37]) and Build Up, Echo, Stunt Double ([65]–[72]) came from it.

21. **Con Men as a counterpunch before her last minion.** Ben [74] feel, round II notes, "good" 3; Ava [82] feel ("stung"). **(1), cards.** 5 resources moved at the right moment.

22. **Locking the Green tie by taking the last two Green spaces.** Ben [106], [119], [122] feels, round III notes, "good" 4. 4 mentions. **(1), count-specific** (6 Green spaces, 2 players). A sharp read, though it made his own Spoilsport worthless (H7).

23. **The Spoilsport, Repossessors and Anarchist exchange.** Ava [93], [96], [102], [113], [126] feels, "good" 4 and 5; Ben [103], [104] feels, "good" 6. About 9 mentions. **(1), cards.** The best tension both reported; the complaint in group 3 is the other side of it.

24. **Passing a recruit to save for Extra Hand felt like a real decision.** Ava [34], [37] feels, "good" 3. **(2) as a decision.** It felt good but lost about 6 followers (A).

25. **Choosing Repossessors' target** (Last-Minute Shopper over Dabblers). Ava [129] feel, "good" 5. **(1).** Correct: about 6 against 2.

---

## D. What the players got right

- **Ava's opening** ([8]–[19]): copying Ben's Out of Style to fund Copyist, then a copy that paid for Regulars, both on her first two placements. Two members for 10 resources paid 25.
- **Ava's timing in round III**: she saw that Repossessors used early would let Ben recruit Spoilsport back with Recruit Twice ([102], [118]), saw that Anarchist could take Spoilsport outright ([113]), and waited for the last placement. She also saw that Ben's Recruit Twice plus Cover could fund an Anarchist of his own ([111]) and bought it first.
- **Ava's choice of Repossessors' target** ([129]) and of which contest to cancel ([134]).
- **Ben's Con Men** ([73]): timed for the turn when Ava's hand was fullest.
- **Ben's Green tie** ([106], [119], [122]): he worked out that the snake let him bank Word of Mouth first and still take the last two Green spaces.
- **Ben's reading of Agents** ([59], [103]): his own Agents blocked his Stunt Double, Reprise and Greatest Hits, exactly as the brief says.
- **Both players' debriefs got the cause of the result right**: contests 15 to 15, Copyist 16 and Regulars 9 against Ben's 6 from abilities. Ava correctly wrote that the final swap "widened the margin rather than won the game".
- **Forecasts**: Ava forecast 60 to 70 before round I and finished 67. Ben forecast himself 55 to 65 and Ava 55 to 60; he overrated his own line by about 10 and underrated hers by about 10, which is the shape of the result.

---

## E. Members: who recruited what, and what each returned

| Member | Who, when, how | Paid | Returned | Verdict |
|---|---|---|---|---|
| Copyist | Ava, round I, shop ([15]) | 5 | 16 from its ability (8 copies) + 1 printed | Far over its price. The engine of the game. |
| Regulars | Ava, round I, shop ([19]) | 5 | 9 (2, 4, 3) + 1 printed | Over its price. |
| Extra Hand | Ava, round II, shop ([37]) | 10 | 1 printed + one extra placement (about +3) | About 6 under a 10-follower buy. |
| Stunt Double | Ava, round II, shop ([70]) | 7 | 1 printed, Copyist +4, 8 green (5 then stolen by Con Men) | About 6 over a 5-follower buy. |
| Repossessors | Ava, round III, discard pile via Echo on Markdown ([98]) | 6 | 1 printed; removed Last-Minute Shopper (Ben −1 printed, about −5 bought) | Good. |
| Anarchist | Ava, round III, shop ([111]) | 8 | Swapped for Spoilsport: Ben −10 (Blue cancelled); its printed 1 went to Ben | Good; bought as insurance, used as a weapon. |
| Dabblers | Ben, round I, shop ([6]) | 5 | 2 printed, 2 members | Fair, but it cost him Copyist (A). |
| Agents | Ben, round I, shop ([22]) | 5 | 1 printed; blocked Echo and Cover on Ben's actions all game | Fair. It did not touch Ava's 16 from copying herself. |
| Line Cutters | Ben, round I, shop ([26]) | 4 | 1 printed; going first did nothing (he was behind every round) | Under. |
| Last-Minute Shopper | Ben, round II, discard pile via Recruit Twice ([32]) | 5 | +3 blue once (round II end); discarded by Ava before round III end; also +3 blue through Test Drive in round I | Under: 6 blue, 0 followers kept. |
| Mutineers | Ben, round II, shop ([45]) | 6 | 1 printed; never usable | Under, bought to deny. |
| Window Shopper | Ben, round II, shop ([59]) | 7 | 1 printed, 4 resources on recruit, 2 at round III start (the cloak should have added 2), and it put Spoilsport where Spree could reach it | About even. |
| Con Men | Ben, round II, discard pile via Markdown ([74]) | 7 | 1 printed + 5 stolen green (a 5-follower buy) | Good. |
| Spoilsport | Ben, round III, discard pile via Spree ([90]) | 8 | Nothing for Ben (Green tied, H7); swapped away and used against him (−10) | Badly negative. |

Used through Test Drive without recruiting: Last-Minute Shopper (round I, +3 blue), Scouts (round II, the whole row discarded).

Were members under- or over-used? **Ben over-used them for the contest and under-used them for followers.** He held 8 members to Ava's 4 in round II and 9 to 5 at the start of round III's scoring race; holding Most members needed about 2 fewer, roughly 10 to 13 resources that could have been follower buys. None of his members paid followers from an ability. **Ava used few members, and the right ones**: six recruits, two of which (10 resources) produced 25 followers. Neither player bought a 10-follower pack.

---

## F. Card ideas

- **Bystander** (Ben, round II): round end, if a rival leads a contest you have no stake in, +3 followers. Does not answer a real problem here: Ben left Green on purpose, and the card pays you for staying out of a fight.
- **Bootleg** (Ava): a green member that once per round copies through Agents, and the copied rival gains what you gained. Answers the Agents wall in group 2, which is mostly a 2-player problem; at 4 players Cover and Echo have other targets.
- **Encore Night** (Ava): a center green space repeating your own last placement, printed resources only, no member bonuses. Does not answer anything seen here; Reprise already does this, and her complaint was about too much copying.
- **Closing Time** (Ava): a grey member; at round end every player in reverse turn order may use one unused On Use ability. Answers a real problem (group 3, H1), but it gives every On Use card a second timing, the kind of text Cory has refused.
- **Bouncers** (Ben): your members can't be swapped, taken or discarded by rivals. Answers the Anarchist and Repossessors swing (group 3), but it switches off interaction rather than adding any.
- **Heckler** (Ben): whenever a rival copies an action, +1 follower. Partly answers group 1: if it counts copies of their own actions, it would have paid Ben 8 here.
- **Clearance Bin** (Ben): a Blue space; recruit from the discard pile, or from the top of the pile if it is empty. Answers a real problem (group 5), but drawing from the top of the pile is hidden information, which Cory has ruled out. The cause is the reshuffle (H4), which is the better place to fix it.

---

## G. Process problems that remain

1. **A two-pick answer was refused without saying so, again and again.** Window Shopper's discard asked for both picks in one answer ("This question comes back up to 2 times in a row. Answer every pick at once"). Ben's answer was refused and the same prompt came back unchanged 26 times in round II (model calls 53 to 78, decision [60]) and 7 times at the round III start (calls 97 to 103, decision [86]), with no message saying why. Order seems to matter ([36,37] went through, [37,36] and [37,38] did not; at round III, [5] alone went through after [5,7] failed), which suggests the second number is checked against the renumbered list after the first pick. It changed the game: at [62] Ben gave up his preferred pair (Gift Swappers and Anarchist) for Mimics and Anarchist "in the hope that a different answer gets this prompt to resolve", and at [86] he sent one pick at a time. Fix: read each pick of a batch by card, not by option number, or say plainly which pick was refused and why.
2. **The move history filed these answers under the wrong label.** Ben's history showed each refused discard as "Pay 4 blue, 3 green (suggested)" (his [60] feels and debrief "bad" 1), so he could not tell what he had chosen. Fix: record a refused answer as refused, with the picks sent.
3. **The deck reshuffle was not shown when it happened.** "The deck ran out: the discard pile is shuffled into a new deck" appears in the log six times in round I, but in only 5 of 154 prompts, and not at [5], [6], [15] or [26], the decisions where both players wrote that they could not tell what Out of Style or Test Drive had done. Fix: show the reshuffle line in the result of the action that caused it, and show the pile and discard pile counts in the view.
4. **Engine faults reach the players as "untrustworthy numbers".** The Blue Cloak's missing payments (H5) are why Ben's [26] count was off and part of why he wrote "I bought on faith". The players can't tell a fault from their own mistake. Fix the engine; until then, the round notes could print the cloak's payments for the round.
5. **The Test Drive preview showed negative ranges** ([24]: "+-2..0 followers; +-2..0 members; rivals followers -1..0"). Ben read past it, but it is hard to read. Fix: show the preview per member choice, or not at all for "use its effect".
6. **Agents' text on the cards list does not say it stops your own copies.** The brief's strategy notes say it, and Ava still misread it twice ([35], debrief). Whether the card should say so is Cory's call; for the agents, the cards list could carry the same note the brief has.

---

## H. Patterns in the game that no player commented on

1. **The leader places the round's last minion.** With 2 players, an odd number of minions each and "fewest followers goes first", the leader is always the second seat and always places last. Ava placed last in all three rounds. That placement is where On Use swaps and kills can't be answered. Not count-specific: with 4 players and odd minion counts, the leader also sits fourth and places last.
2. **Line Cutters did nothing for a trailing player.** Ben was behind at the start of rounds II and III and would have gone first anyway. Count-specific in its size (with 2 players, "behind" means first).
3. **In round I, discards come straight back.** The round I deck had 7 members with 1 in the pile. Ben's Out of Style sent Copyist and Regulars away; both came back in the same action and Ava bought both. Ava's copy sent Agents and Line Cutters away; both came back and Ben bought both. Last-Minute Shopper came back after Test Drive. Every "keep it from them" discard in round I was reversed. Count-specific: a 2-color deck is small.
4. **Round III starts with an empty discard pile.** At the round III refresh the deck ran out and the 19 members in the discard pile were shuffled in. Spree (the round III center space) and Recruit Twice and Markdown then had only what Window Shopper had just put there (Spoilsport and Repossessors). Count-specific.
5. **The Blue Cloak missed 5 payments (engine fault).** It pays by looking at the newest cards on the discard pile, so when a discard triggers a reshuffle the payment is lost: Out of Style in round I discarded 3 and the cloak paid 1; Test Drive on Last-Minute Shopper paid 0. At the round III start, Window Shopper's 2 discards paid 0, apparently because nobody's turn has begun at Round Start. The cloak paid 13 of 18. Not a design question; it should be fixed in the engine.
6. **Copyist and the Green Cloak pay for copies that copy nothing.** [18]: Reprise copied Echo, which had nothing left to copy; Copyist paid +2 and the cloak +2 green. [71]: Stunt Double copied Echo (no gain of its own), then Echo copied Build Up ([72]), and both links paid. Two of Copyist's 8 payouts (4 followers, 4 green) came from links that gave nothing themselves. Cards, not count-specific.
7. **Tying a contest makes Spoilsport worthless to its owner.** Ben tied Green 3 to 3 and held Spoilsport; cancelling Green would have taken 5 from each player. His only other choice was cancelling his own Blue win. Spoilsport is worth the most when a rival wins a contest alone, and nothing when you share it. With only 2 contests this comes up quickly (count-specific in how often).
8. **Copies of Greatest Hits got +1 green** (Ava [115], Ben [123]: "copied Greatest Hits: +1 green, +3 blue"). Greatest Hits' +1 green is the first taker's bonus, and the rules say a copy never gets it. Worth checking in the engine; 2 green in this game.
9. **Many members cost exactly 8**, so Anarchist had targets everywhere: Spoilsport, Repossessors, Anarchist, Gift Swappers, Snobs, Repeat Customers and Power Shoppers all cost 8. Ava's planning at [102] and [111] shows she counted on it. Cards, not count-specific.
10. **Most members was won by far more than it needed.** 4 to 2, 8 to 4, then 9 to 5 (cancelled). Ben could have held it with 2 or 3 fewer members; his extra bodies paid only their printed 1 each. Cards and count: with one rival, the lead needed is small and easy to see.
