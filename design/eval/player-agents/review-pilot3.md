# Review of pilot3: what the four player agents got right and wrong

Game: four experienced agents, Eve (White Cloak), Hal (Purple Cloak), Finn (Silver Cloak), Gus (Blue Cloak). Colors: Purple, Silver, Blue (market), White (trading). Final: **Gus 100, Hal 88, Eve 86, Finn 76.**

Sources: facts-pilot3.md (ledger), moves-pilot3.txt (decisions, numbered [n]), /home/user/pa-games/pilot3/cards.md, system-Eve.md (the brief), events.jsonl (game log) and agents.jsonl (the exact prompts). Every number below was counted from the log or the ledger unless it says "roughly" or "about". Where I say what a strong player would have done, the follower change is an estimate and says so.

## The cards that matter in this review

Cloaks (each player has one all game):
- **White Cloak**: whenever you buy followers, +2 white.
- **Purple Cloak**: whenever you take the Goes Last token, +2 purple.
- **Silver Cloak**: whenever you gift silver, +2 silver.
- **Blue Cloak**: whenever you discard a member (including from the shop), +1 of its color (grey: any color).

Contests (scored every round end; +4 / +6 / +10; tied leaders each get **half, rounded up**, so a four-way tie pays 2 / 3 / 5 to each):
- Purple **Went last**: whoever placed the round's last minion.
- Silver **Fewest silver**: least silver held at round end (0 counts).
- Blue **Most members**.
- White **Fewest members** (0 counts).

## Where the followers came from (from the ledger)

| Player | Final | Bought followers | Contests | Silver contest share | Other contests | Abilities and spaces | Printed on members held |
|---|---|---|---|---|---|---|---|
| Gus | 100 | 47 | 30 | 10 | 20 (Most members I +4, II +6; Went last III +10) | 18 (Anchorites 10, Farewell 5, Paupers 3) | 4 |
| Hal | 88 | 52 | 20 | 10 | 10 (Fewest members I +4; Went last II +6) | 15 (Farewell 6, Guest of Honor 4, Last Call 3, Splurge 2) | 0 |
| Eve | 86 | 50 | 10 | 10 | **0** | 24 (Party Gifts 10, Anchorites via Test Drive 5, Cash In 5, Guest of Honor 4) | 1 |
| Finn | 76 | 10 | 24 | 10 | 14 (Went last I +4; Most members III +10) | 35 (Largesse 10, Party Gifts 6, Bookies 6, Guest of Honor 4, Cheerleaders 4, Kingmakers 3, Last Call 2) | 6 |

Everyone started with 1. Round-end standings: after round I Eve 26, Hal 23, Gus 16, Finn 10; after round II Eve 58, Hal 57, Gus 46, Finn 28.

Two facts frame everything below:
1. **The Fewest silver contest was a four-way tie at every round end** (all at 0 in rounds I and II, all at 1 in round III). Every player got exactly 10 from it. It never separated anyone, yet 133 of the 234 decisions mention it in their reasoning.
2. **Gus's 12-point margin over Hal is the round III Went last prize (+10 to Gus instead of Hal) plus Spoilsport cancelling Hal's +10 Fewest members win.** Gus's other contests (20) against Hal's (10) account for 10 of the 12.

---

## A. Each player's line, what it earned, and the decisions that decided the finish

### Gus (1st, 100): Blue Cloak shop churn, then a small cult on zero silver, with Spoilsport

The line: Out of Style (discard 3 shop members, +1 of each one's color) with the Blue Cloak doubling every discard; bodies for Most members; then Paupers (round end: if you hold no silver, +3), Anchorites (round end: if you have 5 or fewer members, +5) and Spoilsport (round end: choose a contest; nobody wins it this round).

What it really earned: Most members twice (+10), Went last once (+10), Anchorites 10, Paupers 3 (once, not "every round" as three rivals claimed), Farewell 5, and the most consistent conversion (47 bought). The Blue Cloak paid 11 resources over the game (Out of Style three times plus two member discards). It was a good line at this table, and its strongest piece was not an engine but two contest swings plus a veto.

Decisions that decided his finish:
- **[4]–[8] Out of Style opening.** Binned three purple members for 6 purple plus the space's +1 blue, bought Dabblers (5 any, worth 2, counts as 2 members) the same turn. That gave him the round I Most members lead (+4) on his first placement. Correct and strong.
- **[70]–[71] Downsizers misread.** He used Downsizers (On Use, once per round: discard one of your members, +4 white) planning to discard Downsizers itself; the engine refused, so he discarded Last-Minute Shopper (round end: +3 blue, then you may recruit), which had paid him a free 5-follower buy at the end of round I. Keeping the Shopper would have pushed him to 6 members and switched off Anchorites, so the true cost is unclear, somewhere between 0 and about 8 followers. The misread itself is real (see B).
- **[90] Anchorites over Martyrs.** He changed his plan at the discard pile and took Anchorites: +10 over rounds II and III plus 1 printed, for 6 resources and one recruit. This was the best member buy in the game. Note it was only in the discard pile because Eve put it there ([41], see Eve).
- **[118] Spoilsport over a 5-follower buy.** +1 printed, broke the Most members tie with Finn (+6 instead of +3), and later cancelled White twice: Eve −3 and Hal −3 in round II, Hal −10 in round III. For one recruit he moved about 4 to himself and 16 off rivals.
- **[169] Farewell (discard a member for its cost in followers) on Dabblers instead of Line Cutters.** His reason was that Finn's Guest of Honor could push a member onto him and switch off Anchorites; Finn had already used Guest of Honor that round at [145] and it is once per round. Discarding Dabblers put a 2-member body in the face-up discard pile, which Finn pulled with Spree at [173] to win Most members +10 (and Cheerleaders +2). Had Gus discarded Line Cutters as first planned, he would have stayed at 5 members with Anchorites still live, and Finn's best reply (Spree for Line Cutters, then Cheerleaders) reaches 5, a tie: roughly +5 for Gus and 7 fewer for Finn.
- **[180] On a Roll for Went last.** He saw that no token space would remain after his, and took the round III Went last +10. Correct read. It only worked because Finn had just taken Sleep In ([177]).
- **[234] Spoilsport on White** (Hal −10). Correct target.

### Hal (2nd, 88): zero members, zero silver, purple turned into follower buys

The line: never hold members or silver; take the big purple spaces; convert everything into 5-follower buys; use Guest of Honor (On Use, once per round: give a rival one of your members, +4) and Write-Off (give a member to a rival for its cost in white) as weapons.

What it really earned: 52 bought (the most), but only 10 from contests beyond the silver share that everyone got. The White contest he spent two rounds engineering paid him 4 in total (round I), because Spoilsport cancelled it in rounds II and III. The Purple Cloak paid only 8 purple over the game (four token grabs), the weakest cloak at this table. The line kept him level but had no source of followers that did not cost a placement and a recruit, which he said himself in his debrief, correctly.

Decisions that decided his finish:
- **[39] Passing on Anchorites in round I.** He weighed it and bought a 5-follower pack. Anchorites at that moment would have paid +5 in rounds I, II and III plus 1 printed: about 16 against the pack's 5. Its cost to his contests was 2 (round I White tied instead of won); rounds II and III White were cancelled anyway. Net about +9 for Hal, and Gus would never have got it (about 11 fewer for Gus). On these numbers this one decision alone reverses the top two places. A strong player takes it: the condition (5 or fewer members) is met by a zero-member player for free.
- **[46]–[49] Guest of Honor bought with Splurge and given to Eve the same turn.** +2 (Splurge) +4 (gift), and Hal won round I White alone (+4 instead of +2). Correct and sharp.
- **[86] On a Roll in round II** to take the token back from Eve when no token space remained: Went last +6. Correct, the same read Gus made in round III.
- **[156] Overtime first in round III** (+4 purple, +1 minion, take the token). The extra minion was worth a 5-follower buy. But it left Sleep In and On a Roll open for two later players, and the Went last contest goes to whoever takes the last open token space. Hal lost the +10 to Gus. There was no clearly better order for him (Overtime must be taken early to use the minion), so this was a loss to the table, not a misplay.
- **[198]–[205] Markdown into Write-Off to put Night Managers on Eve.** Net +6 resources over two placements and the White contest would have been his alone (+10), but Spoilsport cancelled it. He knew Spoilsport existed ([211]); with only two contests in reach in round III, one veto was always going to hit him.

### Eve (3rd, 86): zero members, White Cloak follower buys, Cash In at the end

The line: never hold members; buy followers every turn so the White Cloak refunds 2 white each time; Party Gifts (give rivals up to 3 silver, +2 followers each) to break the silver tie.

What it really earned: the White Cloak refunded 24 white over 12 buys (the last 2 unspendable), about 22 followers, the strongest cloak at the table by double. But her contests beyond the shared silver were **zero**: round I White went to Hal (Guest of Honor landed on her), rounds II and III White were cancelled by Spoilsport. The zero-member plan produced no contest followers at all; its only payoff was Modest Means (+1 white per rival with more members: 13 white over three uses).

Decisions that decided her finish:
- **[1] White Cloak.** Correct: it became her whole engine.
- **[41] Test Drive (discard a shop member, use its effect now) on Anchorites** for +5 now. She said this also pulled Anchorites "out of reach" of rivals; it went to the face-up discard pile, and Gus recruited it from there at [90] (Recruit Twice: recruit a member from the discard pile) for +11. Recruiting it herself was possible on that turn (she held 5 white plus the space's blue, exactly its cost) or a turn earlier through Splurge. That would have paid about +16 against the +5 and the 5-pack she took, and cost her nothing in White in this game (she held a member at round I's end regardless, and White was cancelled later). Roughly +7 for Eve and 11 fewer for Gus, enough to have won on these numbers. Her own debrief reached this conclusion.
- **[81]–[103] Holding Guest of Honor until Finn had no minions left.** Correct timing: +4, and nobody could hand it back.
- **[159] Calling Hal's round III Went last "locked" and not contesting it.** Wrong read (see B): Gus took it two placements later with the same reasoning she rejected. Whether Eve could have won it is unclear (a rival would likely have taken the last token space after her), so I do not count followers here.
- **[159]–[162] Party Gifts with only two silver given**, stopping to avoid Kingmakers. Cost 2 followers; the silver contest ended a four-way tie anyway.
- **Keeping a 5-white pile through [166]–[183]**, which Hal's Test Drive on Con Men (On Recruit: steal 5 resources) took: −5 for her, +5 for Hal. Her debrief lesson ("cash in smaller bites") is right.

### Finn (4th, 76): Silver Cloak gifts, Line Cutters into Crunch Time

The line: Toast (+4 silver, each rival +2), Kingmakers (round end: give rivals up to 3 of your silver, +1 each), Party Gifts and Largesse (give rivals 12 silver, +10) with the Silver Cloak refilling silver; Line Cutters (you go first every round) to open rounds II and III with Crunch Time (+2 purple, your next two turns come right after this one).

What it really earned: the best ability and space total (35) and 24 from contests, but only 10 bought followers and 6 printed. His round I recruits went into Kingmakers and Line Cutters; Kingmakers paid 3 in the whole game (it could not fire in rounds I and II because he had no silver at round end) plus 1 printed, for 6 resources and a recruit.

Decisions that decided his finish:
- **[11] Kingmakers in round I.** Returned 4 followers for 6 resources and a recruit, against a 5-follower buy plus the refund-free silver. About −1 to −2, and it locked him into a plan that fought the silver contest.
- **[26] Line Cutters.** 4 resources for first pick in rounds II and III, which gave him three uninterrupted placements twice (Toast, Last Callers, Party Gifts; then Largesse +10 and Last Call). Good buy.
- **[58] Last Callers (On Use, once per round: take the Goes Last token)** for 7 resources: 1 printed, one token grab in round II undone by Hal's Last Call a few placements later, dead in round III. Against a 5-follower buy plus 2 spare, about −6.
- **[132]–[144] All 12 Largesse silver to Gus**, to keep Eve and Hal off it. Gus turned it into 14 white with one Polish (+2 silver, turn all your silver into one other color) and a 10-follower buy the same turn: about 14 followers for the eventual winner for one placement. Finn's own +10 did not depend on the split. A split would also have handed out followers, but no other player could have converted all 12 on one placement.
- **[177] Sleep In on his last minion.** For himself it was fine (+6 purple paid for Cheerleaders, which guarded Most members). For the table it decided the winner: it took the token from Hal and left On a Roll as the only token space, which Gus took at [180] for Went last +10. Without it, Hal could have retaken the token with Sleep In on his next turn and won Went last. Hal would then have had two +10 contests (Went last and White) against one Spoilsport, and finished about 98 to Gus's 90. Finn never noticed this, and blamed Kingmakers for deciding the winner instead (see B).

---

## B. Misreadings: claims that contradict the cards, the rules or the log

Rules and card text:
- **Ties.** Finn [96]: Fewest silver "worth a 2-follower share at +6 split four ways"; actual +3 each. Hal [190]: "the Fewest Silver split for about +3"; actual +5. Gus's round II forecast: "3 for my share of a four-way Fewest silver tie"; actual +5. Eve's round II forecast: "+10 instead of a 4-way 3"; actual 5. The rule is half each, rounded up, however many tie. Every agent read "split" as divide by the number tied, which undervalued ties by up to half. Cause: the screen and the primer both say "split if tied" (see F).
- **Downsizers can discard itself.** Gus [37], [70] planned to fire Downsizers on itself. The engine excludes it. Note for Cory: the card says "discard one of your members", while Old Guard says "discard another of your members", so a plain reading of Downsizers allows itself. This is a text question, not a player error alone (C, group 14).
- **Recruit Twice is free.** Gus [227]: "a free discard-pile member". The card says recruit, which means paying its cost; Markdown's "paying 2 less" implies the same. Misread.
- **Out of Style's +1 blue.** Gus [110] ("+1 blue make about 7 resources"), [115], [217] ("plus +1 blue put me at 11"). That +1 goes only to a space's first taker, and Gus took it in round I. His "came out at 10 against my count of 11" ([225] and debrief) was his own miscount, not the screen.
- **Guest of Honor is once per round.** Gus [169], [171]: "at 5 members one gift from [Finn] would kill Anchorites". Finn had used it that round at [145]. This misread cost Gus about 5 and gave Finn about 7 (A).
- **The Blue Cloak only pays on your own members.** Finn [3]: "Blue Cloak only pays when I discard my own members". It says "discard a member"; Gus collected it on shop discards all game (11 resources).
- **The Purple Cloak takes the token.** Finn, round II notes and debrief: "Hal's Purple Cloak walked the Goes Last token right back", "the Purple Cloak player undoes it for free". The cloak only pays +2 purple; Hal spent a placement (Last Call) to take the token.
- **Last Callers locks Went last.** Finn [56], [58]: "locks went-last for +6 now and +10 in round III". Its own text is one token grab a round; any later token space takes it back. He learned this at [64] and [177].

Claims about what happened, contradicted by the log:
- **"Hal's Goes Last lock in round III"** (Eve debrief "bad" 1 and "change" 1; Eve [159], [165]; Eve round II notes "that end-of-round lock feels hard to touch"). In round III the token went Finn (Last Call) → Hal (Overtime) → Finn (Sleep In) → Gus (On a Roll), and Gus won Went last. Hal did not win it.
- **"Went Last felt locked away behind Finn's Last Callers, Gus's Line Cutters and the snake"** (Hal debrief "bad" 2, "change" 3; round I and II notes). Hal won Went last in round II. Line Cutters was Finn's until round III, when Finn gave it to Gus after turn order was already set; it never touched Went last. Every round, Went last was won through a purple space (On a Roll each time), not through Last Callers or seat order.
- **"Round I Went last felt decided by the snake seat order"** (Gus [33] feel, round I notes, debrief "bad" 6, "change" 6). By seat, Eve places round I's last minion. Finn won it by taking the token with On a Roll at his second placement.
- **"Kingmakers' round-end gifts ... decided whether Gus or Hal won"** (Finn [233], debrief "bad" 3, "change" 3, round III notes). Spoilsport resolved after Kingmakers, and Gus would have cancelled whichever contest put Hal ahead. I checked every way Finn could have split his three silver: Gus wins in all of them. What decided Gus against Hal was Finn's own Sleep In at [177] (A).
- **"Hal's Overtime token killed Went Last"** (Finn debrief). Finn's own Sleep In took the token from Hal; Gus then won it.
- **"Gus's Paupers and Anchorites paid every round"** (Eve debrief), "farmed Paupers and Anchorites every round" (Finn debrief), "His Anchorites paid +5 every round off one early recruit ... Paupers added +3 a round" and "about 1 printed plus 15 over three rounds" (Hal debrief). Anchorites was recruited in round II and paid 10 (rounds II and III). Paupers paid 3, once. Together 13, not 24.
- **"Eve and Hal banked contest prizes while I was building"** (Finn round I notes, debrief "result"). Round I contest followers: Finn 6, Hal 6, Gus 6, Eve 2. Finn earned as many as Hal and three times Eve. Eve's round I lead came from Party Gifts (6), Anchorites through Test Drive (5) and three follower buys (11).
- **"The zero-member White farm went basically unanswered for two rounds"** (Gus debrief "bad" 1, "change" 1); "Eve's zero-member lead", "the Fewest members contest Eve has been farming" (Gus [118], [337]); "Fewest Members plus Fewest Silver plus follower buys felt like the default winner" (Finn "change" 1); "the fewest contests rewarding the same lean cult twice" (Eve "change" 3). Fewest members paid 4 followers in the whole game (Hal, round I). Eve never won it. It was answered every round: Guest of Honor (round I), Write-Off and Spoilsport (round II), Write-Off and Spoilsport (round III). The zero-member players' points came from buying followers.
- **"Being the Largesse landfill: 12 silver dumped on me between rounds twice"** (Gus debrief "bad" 2; [152] "again"; round II notes "between rounds"). Largesse was played once, on Finn's turn in round III. Gus's earlier silver came from Toast and Party Gifts (4 in round I, 3 in round II). The "twice" and "between rounds" come from how the notes were collected (F, item 1). Also, being the target was a gain: Polish turned it into 14 white and a 10-follower buy.
- **"Guest of Honor ... split Gus's Most members prize"** (Eve debrief "members"; round II notes "it also halved Gus's Most members prize"). Gus recruited Spoilsport afterwards ([118]), went to 5 members and won Most members alone (+6).
- **"Night Managers ... won me the round III White +10 outright"** (Hal debrief "members"; "result": "won me White outright"). Spoilsport cancelled it; Hal got 0.
- **"[Night Managers] knocked me out of the shared Fewest members +10 (worth about 5 to me). That alone is roughly the gap to Hal"** (Eve debrief "result"). White was cancelled by Spoilsport, so the card cost her no contest followers; it added 1 printed follower to her score.
- **"Burned it on Test Drive ... denying it from the shop"** (Eve [41], [42]; debrief "good" 3). It went to the face-up discard pile and became Gus's best card.
- **"Spoilsport ... swung about 12 in round III"** (Gus debrief). It removed 10 from Hal.
- **"As the last pick in the cloak draft it felt like scraps"** (Finn "change" 2; [3] "the last seat in the draft gets scraps"). Finn picked third. Gus got the last cloak (Blue), and it paid him 11 resources and the game.
- **"Guest of Honor somehow landed on me"** (Eve round I notes). Hal gave it to her at [49]; the notes prompt did not show her that log line (F, item 1).

---

## C. Every complaint and praise about the game, grouped

Counts are of feel notes (FEEL) plus round notes and debrief items. Verdicts: (1) true about the game, would bother a player on any line; (2) real, but caused by the player's own plan or misplay; (3) a misreading; (4) caused by how the agents are run.

1. **The recruit step is a 1- or 5-follower buy with no real choice** ("autopilot", "chores", "housekeeping", "a whole recruit for one point"). About 26 feel notes from all four (Hal 8, Finn 7, Gus 6, Eve 5), plus Hal "bad" 1 and "change" 4, Finn "bad" 5, Gus "bad" 7, Eve "bad" 5. **(1).** 39 of the 52 turn recruits were follower buys, and after a converting space the buy usually has one sensible answer. It was felt by the member-heavy players too, not only the lean ones. The best-supported complaint in the game.

2. **Largesse's twelve one-silver prompts.** 12 feel notes (Finn [133]–[144]), Finn "bad" 1, "change" 4. **(4)** as experienced here: one decision was split into 12 identical questions. Whether the real screen does the same should be checked; if it does, it is (1) for people too.

3. **Clicking through a steal one resource at a time** (Hal [186], "bad" 8). **(4)**, same cause as group 2.

4. **The Silver Cloak works against Silver's own Fewest silver contest.** At the cloak pick Eve [1] and Hal [2]; Finn [11], [32], [60], [148], round I notes, "bad" 2, "change" 2; Hal "bad" 5, "change" 6. About 9 mentions from 3 players. **(1), but smaller than they felt.** The friction is real and readable: Kingmakers could not fire in rounds I or II because the refund would leave Finn holding silver at scoring. But Finn still tied the silver contest every round like everyone else (10 total), and the cloak gave him 10 silver. The real cost was Kingmakers paying 3 followers in the whole game.

5. **Went last is locked / decided by seat / decided by Last Callers.** Eve (3 feel notes, round II and III notes, "bad" 1, "change" 1), Hal ("bad" 2, "change" 3, round I and II notes), Gus (round I feel and notes, "bad" 6, "change" 6). About 12 mentions. **(3).** The token changed hands 2, 4 and 4 times in rounds I to III, and three different players won the contest. It was decided every round by a purple space.

6. **Taking the token early is undone cheaply** (Hal [38] "the token felt like a big commitment, and it was undone for cheap", "bad" 4). **(1).** In this game the first player to take the token never won Went last; every round the winner was whoever took the last open token space (On a Roll in all three rounds). This is a true read of the contest, though Hal still got Sleep In's 6 purple.

7. **Last Callers is easy to mistime and never really locks** (Finn [64], [177], "bad" 4, debrief "members"). **(2).** The card did what it says. Finn bought it expecting a lock and saved it for his last minion, where the text plainly does nothing. One fair part: the rule that a token grab on your last minion does nothing is easy to miss.

8. **Spoilsport is a veto with no counterplay** (Hal [211], round III notes, "bad" 3, "change" 2; Eve "change" 2). Praised by Gus ([337], [361], "good" 4, round III notes). **(1).** For 8 resources and one recruit, Spoilsport removed 16 followers from rivals over two round ends and added about 4 to Gus. It is public from round II, so Hal could see it coming, but with two contests in reach in round III there was nothing he could do. The praise holds too: it was the most decisive card in the game.

9. **Anchorites is too easy to keep** (Hal "change" 1; Eve and Finn "members"). **(1)**, with the overstatements removed (it paid 10, not 15). One 6-resource card produced 15 followers in this game (Eve's +5 through Test Drive, Gus's +10) plus 1 printed. Three of four players stayed at 5 or fewer members all game, so its condition cost almost nothing.

10. **The zero-member White line is too safe and unanswered** (Gus "bad" 1, "change" 1, several feel notes; Finn "change" 1, 5; Eve "change" 3; Gus [110] feel "a runaway that the rest of us are just watching"). About 10 mentions. **(3).** Fewest members paid 4 of its 20 printed followers. Its players finished 2nd and 3rd on bought followers and the White Cloak, not on the contest.

11. **Modest Means stacks with leanness** (Eve [104] "maybe a touch too self-reinforcing"). **(1), minor.** 13 white over three uses, about 3 more than Nest Egg would have given.

12. **Largesse and silver gifts mostly feed whoever converts fastest** (Hal [156], "bad" 6, "change" 5; Finn [132] "12 free silver is basically 12 followers I'm handing to rivals"). **(1).** Players gave rivals 41 silver over the game and every recipient spent it to zero. The givers earned 29 followers from Party Gifts, Largesse and Kingmakers; the receivers earned roughly 41 resources. Silver gifts acted as resource gifts, and the silver contest never moved.

13. **Being the Largesse target** (Gus "bad" 2, "change" 2, [152] feel "designated landfill"). **(3)** as stated (once, not twice, and a net gain of about 12 followers to him). The feeling that one rival's action decides which of your cards work is real, but Polish answered it in one placement.

14. **Downsizers can't discard itself** (Gus [71], "change" 5; Hal noticed at [120]). **(1) as a text question.** The card says "one of your members"; Old Guard says "another of your members". A table reading the two side by side would let Downsizers discard itself. This is a question for Cory, not a fix.

15. **Recruit Twice / Spree read as free** (Gus [228], "change" 3). **(3).** The text says recruit, which means paying the cost.

16. **Blue Cloak / Out of Style rebate prompts repeat and holdings don't update** (Gus [116], [117], [223], [224], [225], "bad" 4, "change" 4, round III notes). 5 feel notes plus 3 items. **(4) and (3).** The prompts were correctly labelled ("Out of Style: +1 of which color?" then "Blue Cloak: Gift Swappers is grey, so +1 of any color"), but all the cloak rebates were asked after all three discards, with "SINCE YOU LAST LOOKED: nothing new" between them. His 10-versus-11 count was his own error (group B).

17. **Kingmakers at round end lets a trailing player decide the winner** (Finn [231]–[233], "bad" 3, "change" 3, round III notes). **(3).** Kingmakers could not change the winner here (B). Gus's "a round-end gift with no possible answer" about Kingmakers killing Paupers ("bad" 3, [665]) is **(1), small**: 3 followers, and a real no-answer moment.

18. **Crunch Time's first buy usually has nothing to spend** (Finn [56], [129], "bad" 6). **(2), mostly.** It happens because good players empty their resources at round end, so they start a round with nothing. True for any player who converts fully, but small.

19. **Right Away on your last minion is resources only** (Hal [124], [214], "bad" 7). **(2).** The option said so: "(your last minion this round: its extra turn does nothing)". Hal said this himself.

20. **Stay-small cards appear for a Most members cult** (Gus [32], [93], [261], "bad" 5). **(2).** His own plan, as he said.

21. **Ending on a 1-follower buy whose 2-white refund can never be spent** (Eve [209], "bad" 4). **(1), trivial.** 2 resources.

22. **Markdown's discount only pointed at off-color cards** (Gus [34], round I notes). **(2).** It depended on what was in the discard pile; in round II the same space gave him Paupers ([67], praised).

23. **Being 16 behind after round I and fewest-followers-first not catching up** (Finn "change" 5). **(2).** Finn went first in rounds II and III anyway through Line Cutters; his deficit came from spending round I's recruits on members that paid little.

Praise:

24. **Guest of Honor and Write-Off as a hot potato around Fewest members** (Hal 4 feel notes, "good" 1, 2, round II and III notes, "again"; Eve [77], [102], "good" 4; Finn "good" 5; Gus [97], "good" 6). About 13 mentions from all four. **(1).** Five members changed hands in the game, all to change a contest count, and Guest of Honor paid +4 three times to three players. This is the interaction the design wants, and it worked.

25. **Test Drive borrowing a shop member's effect** (Eve [41], "good" 3; Finn [94], "good" 2; Hal [183], "good" 3). **(1).** Three uses, worth 5, 6 and a 10-point swing, each for one placement and no member. Strong, maybe very strong. The part of Eve's praise about denying the card is (3).

26. **Out of Style with the Blue Cloak** (Gus 12 feel notes, "good" 1; Gus [4] "the obvious first pick for whoever holds that cloak"). **(1).** 7, 6 and 6 resources from three placements. Gus's worry that it is the obvious opener for the Blue Cloak holder holds.

27. **The face-up discard pile as a second shop** (Gus [67], [90], "good" 2; Finn [173]; Hal [198]). **(1).** Four of the 13 members recruited came from the discard pile (Paupers, Anchorites, Dabblers, Night Managers), and two of them decided contests.

28. **Polish as the answer to silver dumps** (Gus [153], "good" 3; Eve [78]). **(1).**

29. **Party Gifts: points plus choosing whose silver contest to break** (Eve [19]–[22], "good" 2; Finn [61]). **(1)** for the points (16 over the game); **(3)** for the sabotage, which changed no contest outcome: every gifted silver was spent before scoring.

30. **Line Cutters into Crunch Time** (Finn [55], "good" 1, round II notes). **(1).** Two three-placement runs, including Largesse +10.

31. **On a Roll stealing the last token** (Hal [86], Gus [180], Finn [25], "good" entries). **(1).** The best Went last moments came from this read.

32. **White Cloak** (Eve [17], [69], "good" 1). **(1)**, and also a warning: it paid twice what any other cloak did (G, item 5).

33. **Spree pulling Dabblers to swing Most members** (Finn [173], "good" 3). **(1).**

34. **Choosing the color mix of a payment matters** (Hal [191], [200], "good" 4; Eve [196], "good" 6; Gus [69]). **(1), minor.** True because of the Fewest silver contest.

---

## D. What the players got right

- **Recruits, not resources, are the limit, and a space that converts without a recruit is worth the recruits it saves.** All four applied this correctly (Cash In planning, Gus's 10-follower buy at [154] before anyone could take Cash In, Hal's [206] hedge).
- **Purple and blue held win nothing on this table.** Every agent stated it and paid with those colors first. Correct and consistently applied.
- **Hal's Guest of Honor self-gift ([46]–[49])** and **Eve's Guest of Honor timing ([81]–[103])** were exactly right.
- **The last open token space wins Went last** (Hal [86], Gus [180]). The single most important read about Purple at this table, and the two who made it won the contest.
- **Gus's discard pile reads** ([67] Paupers, [90] Anchorites) and **Spoilsport target choice** ([127], [234]).
- **Hal's Markdown into Write-Off** checked every way Eve could shed the member and got it right: Farewell and Write-Off were gone by her last placement ([198]–[205]).
- **Debrief self-assessments that hold up:** Eve and Hal both named Anchorites as the card they should have taken; Hal named "pure resource-to-pack conversion tops out at about 1 follower per resource"; Finn named Paupers and Anchorites as better buys than his; Gus named Downsizers as a bad round I buy and the Shopper as a regret; Eve named "cash white earlier in smaller bites". Each matches the ledger.
- **Finn spotted the Silver Cloak and Kingmakers conflict on his first recruit ([11])**, before it cost him.
- **Gus's note that the Blue Cloak plus Out of Style is the obvious opener** ([4]) and Hal's that Anchorites "out-earned two rounds of my careful contest play" are true from above.

---

## E. Forecasts against what happened

Own forecast, with the forecast for the player each named as the one to beat:

| When | Gus | Finn | Hal | Eve |
|---|---|---|---|---|
| Before round I | 35–45 (winner 40–50) | 45–55 (Gus 50–60) | 40–50 (Gus 40–45) | 45–55 (Hal 55–65) |
| After round I | 65–70 (Eve 68–72) | 50–55 (Eve ~60, Hal 55–60) | ~72 (Eve ~70, Gus ~65) | ~85 (Hal 85–90) |
| After round II | 88–90 (Eve 80–88) | 75–80 (Eve 85–90, Hal ~85) | 88–92 (Eve 90–94, Gus 88–92) | ~99 (Hal 92–95) |
| Actual | 100 | 76 | 88 | 86 |

- **Before round I, every forecast was about half the real score**, for themselves and for the winner (they expected a winner near 40–55; the winner had 100). Cause: no idea of the game's scale. Nothing in the brief says what a typical final score is, and none of them counted 12 recruits of follower buying, which alone produced 47–52 for three players. They also counted contest ties as divided by the number tied.
- **After round I**, Eve's 85 was almost exact; Gus (−30) and Finn (−22) were still far low. Gus forecast "~25" from conversion; he bought 41 more after round I.
- **After round II**, everyone was within 13. The misses had clear causes:
  - Eve forecast 99 and got 86: she counted a solo Fewest silver (+10) and half of Fewest members (+5); she got 5 and 0. She did not count Spoilsport cancelling White, though she named it, and Con Men took 5.
  - Gus forecast 88–90 and got 100: he did not count Went last (+10), which he took opportunistically at [180].
  - Hal forecast 88–92 and got 88, but he counted White as "+5 split" and Went last at 0; in fact he lost Went last and got 0 from White too, and made up the difference in follower buys from the extra Overtime minion.
- **Forecasts of rivals ignored round-end vetoes and gifts.** Only Gus's own forecast counted Spoilsport. Nobody counted Kingmakers' round III silver.

---

## F. Process problems in what the players were shown or asked

1. **Round notes and plans are asked at the player's first decision of the next round, with no event log.** The prompt for "round notes I" or "II" (agents.jsonl rows 57–82, 133–167) has no "SINCE YOU LAST LOOKED" section, but it shows the table as it stands after other players have already moved in the new round. So:
   - Notes miss the end of the round, including the contest results. Eve's round I notes say "Guest of Honor somehow landed on me"; the log line showing Hal giving it to her was first shown in her next move prompt (row 83).
   - Notes mix in next-round events with no way to tell when they happened. Gus's round II notes describe the round III Largesse as "between rounds", and his very next move prompt shows the same Largesse in the log, so he wrote "dumped 12 silver on me again" ([152]) and later "twice" in his debrief. Eve's round II notes describe Hal's round III Overtime.
   - **Fix:** collect round notes right after the round's last scoring line, with that round's full log, before any next-round move. Show the round-end contest results in the notes prompt.
2. **"Split if tied" on every screen and in the primer; the rulebook says half each, rounded up.** The header of every move prompt reads "leading a color's contest this round pays +N followers, split if tied". The primer adds "split if tied, nothing for holding 0" and "winning a contest costs only holding the most of a color". The rulebook says "Tied leaders each get half, rounded up" and "in a 'fewest' contest, 0 counts". Agents undervalued every tie (B). The primer's "most of a color" framing also fits only one of this table's four contests. **Fix:** copy the rulebook sentence onto the screen ("tied leaders each get half, rounded up"), and correct the primer.
3. **One decision split into many identical questions.** Largesse (12 prompts), Con Men's steal (5), Party Gifts (up to 3 per use, 8 in the game), Kingmakers (3): 28 decisions, at least 14 feel notes spent on complaining about it, and the cost and latency of 28 model calls. **Fix:** ask for the whole split in one answer ("Gus 12, Eve 0, Hal 0").
4. **Payment prompts.** 48 payment decisions, 38 of them with a "(suggested)" default. Many had one sensible answer and the agent said so ("Only way to pay"). At least once the suggested default was harmful: Hal [76], "the suggested payment would quietly throw away my Silver contest share". **Fix:** skip the prompt when every payment leads to the same position; when payments differ, show the contest effect beside each option, as the "if the round ended right after this" note already does on some choices. Check the default against contests that count held resources.
5. **No "used this round" mark on rivals' once-per-round members.** The CULTS list shows Finn's Guest of Honor with no sign it was spent ([169], row 179), and Gus made a mistake on it that cost him about 5 followers and gave Finn about 7 (A, B). The real game shows a badge. **Fix:** print "(used this round)" next to spent once-per-round and once-per-game members.
6. **Deferred rebate prompts.** Out of Style asks its three +1 picks, then the Blue Cloak's picks come after, with "nothing new" in the log between. Gus thought they were repeats (5 feel notes). **Fix:** say "Blue Cloak rebate 1 of 2 (Out of Style's own picks are done)" and show running holdings in every sub-choice.
7. **Projections with player-chosen round-end cards.** The "if the round ended now" line runs round-end cards on a copy, but Spoilsport's and Kingmakers' choices are made by default there. Projections showed Hal at 98 ([229]) while Gus's actual Spoilsport choice was certain to hit him. This is part of why Finn believed his Kingmakers silver picked the winner. **Fix:** for a round-end choice card, show the projection under each option, or label the line "assumes Spoilsport cancels nothing".
8. **No sense of scale.** Pre-round-I forecasts were half the real scores (E). **Fix:** add one line to the brief: a 4-player winner usually ends near 70 to 110 followers; buying followers alone gives about 40 to 50.
9. **Ritual question-citing.** The brief asks agents to say which "strong player question" drove each decision. Gus cited one in 34 reasons and Finn in 23, including payment prompts ("The question here was 'am I choosing the space and the buy together?'"). It adds words but no information, and makes the reasons harder to audit. **Fix:** ask for it only on placements and member buys, or drop it.
10. **The order of round-end abilities is not stated anywhere** (see G, item 3). Agents planned around Kingmakers without knowing it fires before Spoilsport.
11. **Debrief claims are not checked against the ledger before they are reported.** Most of B's debrief errors (Paupers "every round", "Hal's lock", "twice", "won me White outright") would be caught by giving each player the facts sheet's follower sources and contest results at debrief time. **Fix:** put "where your followers came from" and the contest results for all players in the debrief prompt, and ask each "bad" item to name the round and the log line.

---

## G. Patterns visible from above that no player commented on

1. **Fewest silver never separated anyone.** A four-way tie every round, 10 followers to each player, 40 in all: the largest contest payout in the game, and the only one nobody could win. Because silver pays for follower buys as any color, zero silver was everyone's default, and every gift (41 silver given over the game) was spent before scoring. 133 of 234 decisions reasoned about it. The "half each, rounded up" tie rule makes a four-way tie pay twice the printed prize in total (20 in round III), so tying was also the richest outcome for the table.
2. **Went last always went to the last open token space, never the first.** On a Roll won it in all three rounds (Finn, Hal, Gus). The first token taker each round (Hal's Sleep In, Finn's Last Callers, Hal's Overtime) lost it. Hal and Gus each saw this once mid-game; nobody said it about the contest as a whole, and two players described the opposite ("lock").
3. **The order of round-end abilities decided the round III end, and the rules do not state it.** Kingmakers fired before Anchorites, Paupers' check and Spoilsport. Kingmakers' silver turned off Gus's Paupers (−3); had Spoilsport fired first, Finn would have been choosing with full information. The rulebook says only "Round-end abilities happen."
4. **The kingmaking move was Finn's Sleep In at [177], not Kingmakers.** Taking the second-to-last token space on his last minion handed Gus an uncontested On a Roll and the +10; nobody, including Gus, said that Finn's placement had made it possible.
5. **Cloak values were very uneven:** White about 24 resources, Blue 11, Silver 10, Purple 8. The pick order (White, Purple, Silver, Blue) was close to the reverse of what Blue and Purple were worth, and the last cloak went to the winner.
6. **Three spaces were never taken: Flaunt, Buyout and Word of Mouth.** Flaunt and Buyout both give their taker silver, which breaks the Fewest silver tie everyone was holding; agents named that as the reason to skip them ([107], [124], [214]). Word of Mouth was weighed and passed every time.
7. **Members were a poor buy for anyone not holding a contest with them.** 13 members were recruited in the game against 39 follower buys. Every member printed 1 (Dabblers 2). The two players who held members at the end were the winner (contest bodies plus Anchorites and Spoilsport) and last place (6 members, 10 bought followers). Members bought only for their ability mostly lost (Kingmakers 4 for 6 resources, Last Callers 1 for 7, Downsizers about 4 for 6).
8. **Test Drive was the best single placement in the game for three different players** (5, 6 and a 10-point swing), and it also feeds the discard pile that Blue's recruiting spaces read. One Test Drive (Eve's) handed the winner his best card.
9. **Fewest followers going first never happened in rounds II and III**: Finn's Line Cutters put the player in last place first anyway, so turn order never gave anyone else catch-up.
10. **Eve, a strong player by her decisions, won no contest outright all game.** Her contest followers were the shared silver ties only. A line built around two fewest contests can be denied without anyone spending anything on it except one Spoilsport and two member gifts.
