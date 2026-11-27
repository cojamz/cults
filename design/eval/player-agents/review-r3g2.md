# Review of r3g2: what the four player agents got right and wrong

Game: four experienced agents. Cal (White Cloak), Ben (Yellow Cloak), Ava (Magenta Cloak), Dee (Silver Cloak, the one left over). Colors: Silver, Yellow, Magenta (thieves), White (trading). Final: **Cal 91, Ava 87, Ben 86, Dee 83.**

Sources: facts-r3g2.md (ledger), moves-r3g2.txt (decisions, numbered [n]), /home/user/pa-games/r3/r3g2/cards.md, events.jsonl (game log) and agents.jsonl (the exact prompts). Every number below was counted from the log or the ledger unless it says "roughly" or "about". Where I say what a strong player would have done, the follower change is an estimate and says so.

## The cards that matter in this review

Cloaks (one per player, all game), and what each actually paid in this game:
- **White Cloak** (Cal): whenever you buy followers, +2 white. Fired 10 times: **20 white**.
- **Magenta Cloak** (Ava): whenever you steal, +2 magenta. Fired 7 times (Help Yourself 3, Heist 2, Accomplice, Poach): **14 magenta**.
- **Yellow Cloak** (Ben): whenever you recruit a member of a color none of your members have, +2 yellow (grey counts as a color here). Fired 6 times: **12 yellow**.
- **Silver Cloak** (Dee): whenever you gift silver, +2 silver. Fired 4 times (Toast twice, Party Gifts, Kingmakers): **8 silver**.

Contests (scored at every round end; the leader gets +4 / +6 / +10; tied leaders each get half, rounded up, so a four-way tie pays 2 / 3 / 5 each):
- Silver **Fewest silver** (0 counts). Yellow **Most member colors**. Magenta **Most resources** (all colors together). White **Fewest members** (0 counts).

Members that decided things:
- **Anchorites** (6): Round End, if you have 5 or fewer members, +5 followers.
- **Kidnappers** (10, worth 2, counts as 2): Round End, a rival you choose gives you one of their members (the rival picks which).
- **Guest of Honor** (5): once per round, give a rival one of your members, +4 followers.
- **Snitch** (6): whenever a rival steals from you, they lose 1 follower.
- **Shoplifter** (9): whenever you recruit, steal 1 resource.
- **Mutineers** (6): once per game, take a member from a rival with more members than you.
- **Double Agent** (10): On Recruit, swap this member for a rival's member costing up to 8.
- **Talent Scouts** (8): once per game, recruit a member costing up to 7 for free.
- **Kingmakers** (6): Round End, give rivals up to 3 of your silver, +1 follower per silver given.
- **Dabblers** (5, worth 2, counts as 2): "Counts as 2 wild members." (In the contest it adds one missing color; Melting Pot counted it as every color; see H.)
- **Cheerleaders** (7): whenever you win a contest, +2. **Consolation Prize** (7): Round End, +2 per contest you don't win.

Spaces that decided things: **Help Yourself** (steal 1 resource per minion you've placed this round), **Heist** (steal 3 followers and 3 resources), **Swindle** (steal a rival's member costing up to 7, give them a shop member in its place), **Poach** (round III center: recruit a rival's member for free), **Largesse** (round III center: give rivals 12 silver, +10 followers), **Party Gifts** (give rivals up to 3 silver, +2 followers each), **Polish** (+2 silver, then turn all your silver into one other color), **Makeover** (+4 yellow, then rearrange your resources), **Write-Off** (give a member to a rival for its cost in white), **Farewell** (discard a member for its cost in followers), **Splurge** (round II: +2 white, and +1 follower per resource paid if you recruit a member this turn).

## Where the followers came from (from the ledger)

| Player | Final | Bought | Contests | Abilities and spaces | Printed on members held at the end |
|---|---|---|---|---|---|
| Cal | 91 | 31 | 18 | 39 (Anchorites 15, Party Gifts 12, Splurge 6, Melting Pot 4, Cash In 3, Heist −1) | 2 |
| Ava | 87 | 32 | 32 | 14 (Heist 6, Melting Pot 4, Guest of Honor 4) | 8 |
| Ben | 86 | 27 | 20 | 32 (Largesse 10, Farewell 10, Cheerleaders 8, Consolation Prize 8, Guest of Honor 4, Snitch −5, Heist −3) | 6 |
| Dee | 83 | 43 | 26 | 13 (Party Gifts 6, Farewell 6, Kingmakers 3, Heist −2) | 0 |

Everyone started with 1. Round-end standings: after round I **Cal 17, Ava 13, Dee 12, Ben 11**; after round II **Cal 51, Dee 42, Ava 39, Ben 37**. Cal led at every round end.

Three facts frame everything below:
1. **Fewest silver was a four-way tie at 0 in rounds II and III** (32 followers, 8 to each player). It moved nobody, yet 101 of the 224 decisions mention it in their reasoning.
2. **The winner was decided at the very last placements**: Ava sized her final 5-follower buy at [239] forgetting Cal's White Cloak, and Cal's Harvest plus a 1-follower buy at [244]–[248] left him on exactly 4 resources, tying Ava's 4 for Most resources. That turned Ava +10 / Cal 0 into +5 each: a 10-point swing in a 4-point game.
3. **Anchorites paid Cal 15** (+5 at all three round ends) for 6 resources, the best return of any card again (it paid 15 in pilot3 too).

---

## A. Each player's line, what it earned, and the decisions that decided the finish

### Cal (1st, 91): White Cloak follower buys around Anchorites, two members at the end

The line: Anchorites on turn one, then buy followers with almost every recruit so the White Cloak refills 2 white each time; stay at 5 or fewer members; Party Gifts for +6 twice.

What it really earned: 31 bought from 10 buys, 6 of them 1-follower buys (each one cost 1 resource and returned 1 follower plus 2 white, so with this cloak a 1-follower buy is a net gain of a resource). Anchorites 15, Party Gifts 12, Splurge 6. Only 18 from contests, the lowest at the table. It was a good line at this table: the White Cloak paid the most of the four cloaks (20 against 14, 12 and 8), and Cal's cult held so little of value that every member steal against him took junk.

Decisions that decided his finish:
- **[17]–[18] Modest Means into Anchorites on his first placement.** Modest Means paid +5 white because all three rivals already had a member; with his 2 silver that bought Anchorites at once. +15 and 1 printed for 6 resources and one recruit. Correct and the strongest single move of the game.
- **[118]–[126] Makeover, a 1-follower buy, Splurge into Mutineers, then Mutineers takes Anchorites back off Ben.** Ben had Swindled Anchorites at [92]. Cal's two-turn chain paid +6 from Splurge's round II rate and returned Anchorites in time for round II's +5 and round III's +5, while Ben lost the same 10. Roughly a 20-point swing between the two. Correct; he also correctly chose Anchorites over taking Kidnappers off Ava ([126]).
- **[139] and [251] handing Kidnappers the spent Mutineers.** Each time he gave the one card that cost him only its printed follower. Correct both times.
- **[244]–[248] Harvest, 1-follower buy, cloak refund to exactly 4.** He saw that his own cloak refund would tie Ava's 4. +5 for him and −5 for Ava. Correct, and this is the play that won the game.
- One weak move: **[20]–[23] Party Gifts' 3 silver all to Ben in round I** to break Ben's 0-silver tie. Ben Polished it into white at [26] and used it toward Guest of Honor. The gift never broke anything (see H1). It still paid Cal +6, so it was not a loss, but the stated purpose failed.

### Ava (2nd, 87): Magenta Cloak steals, holding Most resources

The line: steal often so the cloak pays, hold the most resources every round, buy a few members that steal or swap, convert the surplus late.

What it really earned: 32 from contests, the most at the table (Most resources 4 + 6 + 5 = 15; Most member colors 2 + 0 + 5; Fewest silver 2 + 3 + 5), 32 bought, Heist 6, Melting Pot 4, Guest of Honor 4. A sound line that lost on two avoidable errors: the last buy, and aiming her round III attacks at the wrong rival.

Decisions that decided her finish:
- **[75] Kidnappers for 10 resources**, bought on the belief that she would choose the member ("I can lift Cal's Anchorites"). The card says the rival gives one of their members; Cal gave the spent Mutineers both times. Kidnappers returned 2 printed plus a Mutineers worth 1 at the end: about 3 followers for 10 resources and a recruit. A 10-follower buy would have been about 7 more. She kept planning around the misreading through round III ([112], [116], [128], [190], [204]).
- **[160]–[169] Heist and Double Agent aimed at Ben, not Cal.** She read the "if the round ended now" figure, which put Ben at 71 against Cal's 56 because it counted contest leads Ben held for a moment after Largesse. In followers Cal led, 51 to Ben's 48. Heist took 3 followers from Ben, and Double Agent took Ben's Guest of Honor instead of Cal's Anchorites (her first plan at [167]). Had both hit Cal: Cal −3 from Heist, and −5 for round III's Anchorites plus −1 printed if Double Agent took it, about 82 for Cal; Ava loses Guest of Honor's +4 and its printed 1. That alone puts Ava ahead of Cal. See G1.
- **[191] Poach took Cal's Talent Scouts, not Anchorites.** Her reason (a solo Yellow lead two colors clear) was sound at the time. Ben's Swindle of Dabblers at [227] cut her back to 3 colors, so Talent Scouts ended as a +5 share instead of +10. Her debrief says taking Anchorites "alone flips the result"; counted, it would have cost Cal 6 but cost her the Yellow share too (see B), and Ben would have finished first.
- **[239] the final 5-follower buy.** She held 9 after Stash, judged that Cal could reach at most 3, and bought 5 to leave 4. Cal's cloak refund made 4. A 1-follower buy would have left 8, out of Cal's reach: Ava +1 and +10 instead of +5 and +5, so about **Ava 88, Cal 86, Ben 86**. This decision settled first place.
- **[44] passing her last round I recruit** to keep Most resources solo (+4) by one resource. Correct by 1 follower (a 1-follower buy would have let Ben tie at 8 for +2).

### Ben (3rd, 86): wide on members, Yellow Cloak and New Blood

The line: a new member color as often as possible so the Yellow Cloak and New Blood pay; fight Most member colors; hold 0 silver; big payouts in round III.

What it really earned: Largesse 10, Farewell 10, Cheerleaders 8, Consolation Prize 8, Guest of Honor 4, contests 20, 27 bought. Minus 5 to Snitch and 3 to Heist. The engine paid; what it lacked was a member like Anchorites that kept paying, and it lost two of its best members to rivals.

Decisions that decided his finish:
- **[30]–[31] Guest of Honor gives Snitch to Ava.** +4 now. Snitch then taxed Ben 5 followers over the game (4 Shoplifter skims of Ava and the Swindle of her Dabblers). Net −1, plus the recruit and 6 resources Snitch cost. His own debrief names this as the margin; it is part of it.
- **[98]–[99] Talent Scouts' free recruit took Cheerleaders, not Mutineers.** He considered Mutineers and rejected it as "clunky". Mutineers was the only card in the shop that could take Anchorites back from him, and Cal bought it 24 decisions later to do exactly that. Taking it would have kept Anchorites with Ben (about +5 to +10 for Ben, after giving away one body with Guest of Honor to stay at 5 members) and denied Cal the +6 Splurge turn and +10 from Anchorites. Cheerleaders paid 8. Roughly: Ben +0 to +5, Cal −10 to −16. On these rough numbers the winner changes.
- **[103]–[104] Write-Off gives the spent Talent Scouts to Cal.** His reasoning was about Fewest members and missed that Talent Scouts is yellow: it gave Cal his third member color, and Cal tied Ben for Most member colors in round II (+3 each instead of +6 for Ben). A 6-point swing to the eventual winner. Giving it to Ava (who already led nothing in yellow) would have cost less.
- **[143] Largesse with his first round III placement.** Correct: +10, and Ben moved first because he had the fewest followers. His split (Ava 8, Dee 3, Cal 1) aimed to break the silver tie; all three spent the silver before round end. Ava paid 6 of it toward the Double Agent that took his Guest of Honor ([168]).
- **[227]–[230] Swindle takes Ava's Dabblers, gives her Extortionist.** Correct and sharp: Yellow went from Ava solo +10 to a +5 share each, Ben got Dabblers' 2 printed, and he correctly saw that a given Extortionist's On Recruit never fires and no Round Start remained. It cost 2 Snitch followers, not the 1 he counted (see B).

### Dee (4th, 83): Silver Cloak gifts in round I, then zero members and zero silver

The line: Toast into Kingmakers, gift silver for followers; from round II, Farewell on Kingmakers to reach zero members, and turn every space's gain into 5- and 10-follower buys.

What it really earned: 43 bought, the most at the table; Fewest members 2 + 6 + 10 = 18; Party Gifts 6, Farewell 6, Kingmakers 3. With zero members after round II, she had no follower source other than buys and contests, and that is where the 8 points went. Her line got close to everything it could; the ceiling was lower than Cal's.

Decisions that decided her finish:
- **[4]–[5] Toast into Kingmakers.** Kingmakers paid 3 at round I's end plus 6 at Farewell plus its printed 1 while held, and its round-end gift knocked Cal out of the round I silver tie ([53]). Reasonable.
- **[87] Farewell on Kingmakers.** +6 now and solo Fewest members. At the time Cal had 1 member, so the reasoning held. As it turned out Cal had 3 and 2 members at the later scorings, so Dee would have won Fewest members alone while keeping Kingmakers (+3 twice, its printed 1, 4 more silver from the cloak): about 2 to 4 followers given up. Small.
- **[172] Write-Off bounces Ava's dumped Mutineers to Cal** for 7 white. Correct.
- **[217]–[218] leaving exactly 2 magenta for the last turn.** Ava's Help Yourself at [220] took both and turned Dee's planned final 5-follower buy into a 1-follower buy: −4. Holding nothing at all was not possible with 7 resources; she could only have chosen a different finishing space. Small.
- Largesse was never reachable for her: Ben placed first in round III (fewest followers) and took it before her first minion. Her debrief says otherwise (see B).

---

## B. Misreadings: claims that contradict the cards, the rules or the log

1. **Ava [75]: "I can lift Cal's Anchorites to kill his +5 a round."** Kidnappers: "a rival you choose gives you one of their members." The rival picks the member. Cal gave Mutineers at [139].
2. **Ava [112]: "My Kidnappers grab on Ben's Early Traders at round end should flip yellow to me solo"**; [116] "my Kidnappers grab on Ben's Early Traders already gives me 3 member colors"; [128] "Kidnappers taking Ben's Early Traders already covers the yellow contest". Same misreading, repeated three times in round II. In the end she aimed it at Cal, who gave Mutineers.
3. **Ava, plan after round II: "Poach or Kidnappers on Anchorites"; [190] "Kidnappers can still reach for Anchorites at round end"; [204] "Kidnappers stays pointed at Cal's Anchorites".** Still the same misreading in round III, after the round II log had shown "Cal gives Mutineers to Ava". Her own feel note at [138] says she was unsure.
4. **Ava's debrief: "Talent Scouts got me Extortionist for free."** Talent Scouts was already used (by Ben at [98]) and Ava never used it. Extortionist came from Ben's Swindle at [230], as the card Swindle gives the victim.
5. **Ava's debrief: taking Anchorites with Poach instead of Talent Scouts "alone flips the result".** Without Talent Scouts, after Ben's Swindle of Dabblers Ava would hold 2 member colors (magenta, white) to Ben's 3. She loses her +5 Yellow share and Ben takes +10. Counted: Cal 85, Ava 82, Ben 91. It flips the winner to Ben, not to her.
6. **Ava's debrief "change": Anchorites "felt unanswerable", the "member-theft tools on the board (Kidnappers, Mutineers) couldn't target it".** Swindle took Anchorites at [92]; Mutineers took it at [125]. Double Agent (cost up to 8) and Poach could both have taken it, and she chose other targets with both ([169], [191]).
7. **Ava's debrief: "no space pushes members onto a player with zero."** Write-Off gives a member to a rival, and Guest of Honor does the same from a member. Ava herself pushed Mutineers onto zero-member Dee with Guest of Honor at [171]; Dee bounced it with Write-Off.
8. **Ava [10] feel note: the warning that she "no longer leads magenta" "seems to ignore" the On Recruit steal.** She was right, and the warning was wrong: after Accomplice's steal and the cloak she held 7, the most at the table. This is a process problem (G2), not her misreading.
9. **Ben [227]–[228]: Swindle is worth it "for the cost of one Snitch follower".** Swindle cost 2: the log shows Snitch firing on the Swindle itself (taking a member is a steal) and again on Shoplifter's skim (Swindle counted as a recruit). See H4.
10. **Ben's debrief: Snitch "came back to tax me exactly 5 followers through forced Shoplifter skims".** 4 of the 5 came from Shoplifter skims and 1 from the Swindle. Of the 4 skims, the round II one ([93]) was chosen, not forced: he picked Ava to flip Most resources. Only the three in round III ([229], [233], [237]) were forced, because Cal and Dee held nothing.
11. **Ben's debrief: "A narrow line like Cal's or Dee's barely gets touched."** Cal's cult was the most targeted at the table: Swindle, Kidnappers twice and Poach, 4 member takings, plus 7 of Ben's 11 Shoplifter skims. What protected Cal was that his losses were junk, not that nobody aimed at him.
12. **Dee's debrief: "In round III I'd put my first minion on Largesse no matter what… I let the Toast-and-Catch-Up sequence come first"**, and "change": Largesse "felt more like a turn-order lottery than a decision." Round III's order was Ben, Ava, Dee, Cal: fewest followers goes first (rulebook), and Ben had 37. Ben took Largesse on the first placement of the round. Dee's first round III minion went to Write-Off, not Toast; she could never have reached Largesse.
13. **Dee's debrief: the Silver Cloak "kept pushing me out of Fewest silver, and I had to spend placements and recruits just to get back to zero."** The cloak fires only when she gifts, which is optional. In rounds II and III she reached 0 every time by paying silver first in follower buys she was making anyway ([110], [175], [188], [218]), and she shared Fewest silver both rounds. The cloak cost her one round I share (she held 2 after Kingmakers' gift and refund).
14. **Cal's plan after round I and debrief: dump silver "ideally after Dee has used Kingmakers", "I'd also dump silver only after Dee's Kingmakers had nothing left to hit."** Kingmakers acts at Round End, after the last minion; no one can act after it. His own round I note says so ("no answer to a round-end gift").
15. **Cal's debrief: "For much of round III I was telling myself I'd get a solo +10 there."** Not a misreading at the time: at [181] to [216] each of Ava, Ben and Dee held silver from Party Gifts or Toast. They each spent it later ([219], [226], [231]). His reads were right when made; his debrief is harder on himself than the log supports.
16. **Ava's debrief "bad": "nothing on screen pointed to" Cal's White Cloak in her final arithmetic.** Every prompt lists each rival's cloak and its text under CULTS. The miss was hers; she says so in the same line.

---

## C. Every complaint and praise about the game, grouped

Counts are of feel notes (FEEL) plus round notes and debrief items. Verdicts: (1) true about the game, would bother a player on any line; (2) real, but caused by the player's own plan or misplay; (3) a misreading; (4) caused by how the agents are run.

1. **Fewest silver collapses into an all-way tie at 0.** Cal (round II and III notes, "bad" 1, "change" 1, "again"), Ben ([231], "bad" 1, "change" 2), Dee ("bad" 2, "change" 2, "again"). About 12 mentions from 3 players. **(1).** All four held 0 at the end of rounds II and III, each getting 3 then 5. It never separated anyone, while 101 of 224 decisions reasoned about it. "For doing nothing" (Ben) is too strong: players paid silver first in nearly every purchase and Ben spent a whole Polish placement on it at [194]. The cause is that silver pays for anything and Polish or Makeover cleans it (see H1).
2. **Picking which resources to pay with can win a share of Fewest silver** (praise). Ava ([29], [193], [225], "good" 3), Ben ([96]), Dee ([110]). About 6 mentions. **(1).** Real and the same mechanism as group 1: the cheap fix-up that makes the contest pleasant per payment is also what makes it always tie.
3. **Fewest members can't be contested once someone holds zero.** Ava ("bad" 2, "change" 2, round III note), Ben ("change" 1, "again", round III note), Cal ("bad" 3, "change" 3, round III note). About 9 mentions. **(3).** Dee won 18 from it and finished last; Cal won the game with 2 members. Bodies can be pushed on a zero-member player (Guest of Honor, Write-Off), Ava did it once ([171]) and Dee answered with Write-Off. The +10 in round III is large, but the line that collected it had no other follower source.
4. **Zero members and zero resources is a real plan** (praise). Dee ([109], [110], [131], "good" 1). **(1).** Modest Means (+5 twice), Catch Up (+6) and Fewest members all paid her for holding nothing.
5. **Anchorites pays every round with no tension for a small cult.** Ben (round I note, "change" 1), Cal ([18], "change" 5), Ava ("change" 3). **(1).** 15 followers plus 1 printed for 6 resources, the best return of any card in this game and in pilot3. The "unanswerable" part is **(3)** (B6): it was stolen once and could have been taken twice more.
6. **Kidnappers lets the victim pick, so it only takes junk.** Ava ("bad" 3, "change" 4, [138]), Cal ([139] feel, "bad" 4, "change" 4, round III feel). About 7 mentions. **(1).** It cost 10 and a recruit and returned about 3 followers. Both times Cal gave a used once-per-game Mutineers. "Who picks is unclear at the table" (Ava) is **(3)**: Ben and Cal read it right ([92], [139]).
7. **Most resources taxes your own recruits.** Ava ([33], [44], [128] feel, round I and II notes, "bad" 1, "change" 1, "again"). About 8 mentions from one player. **(1)** on feel: holding the lead and buying pull directly against each other. In followers it was a fair trade: Ava passed one recruit and made two or three 1-follower buys to hold it, and it paid her 15.
8. **Most resources makes a real decision** (praise). Dee ([6]), Cal ([82]), Ava ([43], [116], [205]), Ben ([105]). **(1).** Same tension as group 7 seen from the other side.
9. **The White Cloak almost picks itself.** Cal ([1], "change" 2). **(1).** It fired 10 times for 20 white, against 14, 12 and 8 for the others.
10. **The Silver Cloak fights its own color's contest.** Ben ([2]), Ava ([3]), Dee ([35], round I and II notes, "bad" 1, "change" 1, "again"). About 8 mentions from 3 players. **(1), but smaller than they felt.** It was the weakest cloak (8 silver) and was picked last. The fight with the contest cost Dee one round I share (2 followers); the claim that it forced extra placements is (3) (B13).
11. **Largesse is a turn-order lottery** (Dee, "change" 3, round III note). **(3).** Ben moved first because he had the fewest followers; that is the catch-up rule working. See B12.
12. **Largesse's split is a kingmaking puzzle on top of +10** (praise). Ben ([143], [155], "good" 5), Ava ([160], "good" 4). **(1)** for the +10. The puzzle part is weaker than they felt: all 12 silver was spent before scoring and the silver tie held.
13. **Party Gifts (and Toast) double as a weapon against the silver tie** (praise). Cal ([20], [23], [177], [180], "good" 1), Dee ([207], "good" 5). About 7 mentions. **(3).** In-round silver gifts never broke a tie in this game: every recipient spent the silver or Polished it before round end (H1). Party Gifts' +6 to the giver was real (Cal 12, Dee 6).
14. **Kingmakers' round-end gift has no answer.** Cal (round I note, "bad" 2). **(2)**, as Cal says himself: it cost him a solo +4 in round I and nothing after. Dee praised the same moment ([53], "good" 6). **(1)**: it is the one gift that did break a tie, because it comes after the last placement.
15. **Guest of Honor gives a lot for a 5-cost round I card.** Ben ([28], "change" 4), Ava ([170]). **(3)** for "too strong": it was used twice in the whole game (Ben in round I, Ava in round III), 8 followers total, because it needs a member you don't mind losing, as Ben found ([137]). The point that it can hand a rival a member that punishes you (Snitch) is **(2)**: Ben's choice.
16. **Snitch in Ava's hands taxed Ben's Shoplifter.** Ben ("bad" 3, [229], [233] feel), praised as "nice friction" at [93]. **(2).** Ben gave her the Snitch.
17. **Too many effects that take members; building a cult paints a target.** Ben ([91], [194], round II note, "bad" 2, "change" 3), Cal ([77]). About 6 mentions. **(1)**, milder than stated. There were 7 member takings (Swindle twice, Mutineers, Kidnappers twice, Double Agent, Poach). Most moved junk, Anchorites came back the same round, and Cal, hit 4 times, won. The same plays were praised by Ben (Swindle), Cal (Mutineers "revenge arc", [125]) and Ava (Double Agent, Poach).
18. **Write-Off pays full cost for a spent once-per-game card, "probably a little too generous"** (Ben [102]). **(1).** Talent Scouts (cost 8) gave Ben a free 7-cost Cheerleaders and then 9 white. Praised as **Farewell gives an exhausted card one last job** by Ben ([199], "good" 3) and Dee ([87], "good" 3), and Write-Off as a counterpunch by Dee ([172], "good" 4). **(1).** Same mechanism, enjoyed by everyone who used it.
19. **Late recruits worth one follower or nothing.** Dee ([42], [89], round II note, "bad" 3, "change" 4), Ben ([156]), Ava ([44]). **(1), mild.** 13 of 35 follower buys were 1-follower buys and there were 2 true passes ([42], [44]). Cal praised the opposite ([24], "good" 2: "cheap ticks turned every leftover into a live decision"); that only holds with the White Cloak, which made each 1-follower buy return 2 white.
20. **The last placements are arithmetic: whichever space adds to exactly one 5-pack.** Ben ([234], "bad" 4), Ava ([239], [572] round-end feel). Praised by Dee ([187], "good" 2: landing on exactly 5 or 10 "a satisfying little puzzle"). **(1).** The 1/5/10 buy sizes make the remainder matter. It also decided the game (group 21).
21. **A rival's cloak trigger is easy to forget when sizing a final margin** (Ava, "bad" 4, "change" 5, round III note). **(2).** The cloak is public and listed under Cal in every prompt; Dee saw the same threat at [241]. It decided first place.
22. **One steal (Help Yourself) breaks a lean player's careful finish.** Dee ([241], "bad" 4, "change" 5). **(2)**, as Dee says. Help Yourself praised as **getting stronger the later you take it** by Ava ([84], [220], "good" 5). **(1).** On her fourth minion it stole 4 and emptied both Cal and Dee.
23. **Catch Up rewards going broke** (praise). Ben ([14]), Cal ([81], "good" 4), Dee ([217]). **(1).** It paid 7, 6 and 6.
24. **Polish flips a losing silver position and funds a member** (praise). Ben ([26], "good" 1). **(1).** Used 3 times, each to reach 0 silver.
25. **New Blood plus the Yellow Cloak plus Early Traders' round-start swap is an engine** (praise). Ben ([45], [57], [58], "good" 2). **(1).** New Blood paid +5 yellow twice; Early Traders' cost was refunded the turn he bought it. Ben also noted the swap makes colors "almost meaningless" ([141]): **(1), minor.**
26. **Modest Means rewards staying small** (praise). Cal ([17]), Dee ([109]). **(1).** +5 white in all three uses.
27. **Makeover into Splurge into Mutineers, set up across the snake's double turn** (praise). Cal ([118], [120], [122], [125], "good" 3). **(1).**
28. **Swindle on the leader's key member is a dramatic late swing** (praise, Ben [227], "good" 4); **Swindle on a one-member cult "feels brutal"** (Ben [91]). **(1)** for both: it took Cal's whole engine, and Cal took it back the same round.
29. **Double Agent hits a rival's engine and moves a contest in one card** (praise). Ava ([167], [169], "good" 2). **(1)**, with a cost she didn't see: it put a 10-cost card in Ben's cult, which he Farewelled for 10 at [200].
30. **Poach and the round III center ring make the last round a knife fight** (praise). Ava ([190], [204], "good" 4). **(1).**
31. **Consolation Prize makes lost contests still matter** (praise). Ben ([134]). **(1).** 8 followers plus 1 printed for 7.
32. **Cash In not using a recruit is a sequencing puzzle** (praise). Cal ("good" 6). **(1)**, small: it paid 3.
33. **Toast flips from poison to weapon in round III** (praise). Dee ([207], "good" 5). **(3)** for the weapon part: Ava, Ben and Cal all reached 0 again. Toast's 6 silver to Dee was real.
34. **Dabblers does triple duty** (praise). Ava (round I note, debrief "members"). **(1).**
35. **The payment screen warns "you no longer lead magenta" on payments you planned.** Ava ([10], [76]), Ben ([29]); praised as honest by Dee ([6]) and Ben ([106]). **(4)**, and once wrong (G2).
36. **Steals and Heist followers asked one at a time; a combined answer refused.** Ava ([70], [72], [161], [164], "bad" 5, "change" 6). **(4).**
37. **The "if the round ended now" readout misses round-end abilities and a stolen member's ongoing value.** Dee ([41], "bad" 5), Ben ([92], "bad" 5), Ava ([191]). **(4).** See G1.

---

## D. What the players got right

- **Cal read his own engine exactly.** Anchorites on turn one ([18]); the two-turn Splurge chain ([118]–[125]); the buzzer tie from his own cloak refund ([244]–[248]); and giving spent Mutineers to Kidnappers twice ([139], [251]).
- **Kidnappers read correctly by Ben and Cal.** Ben at [92]: "I get to choose which member I hand over, so I'm not worried about it."
- **Payment colors used as contest moves.** Paying silver first to reach 0 for a Fewest silver share: Ava [9], [33], [193], [225]; Ben [96]; Dee [110], [175], [188], [218]. Dee at [219] caught that the suggested payment would have left her a silver.
- **Ben's round III Swindle** ([227]–[230]): the right card, the right victim, and the right dead card to give back (Extortionist, whose On Recruit never fires when given and whose Round Start had no round left).
- **Ben's Largesse on the first placement of round III** ([143]) and **Farewell on Double Agent for 10** ([199]–[200]).
- **Dee's Write-Off bounce** ([172]): turned a dumped body into 7 white and a 5-follower buy.
- **Dee saw the threat Ava missed** ([241]): "Cal can still take Harvest and use his cloak to tie Ava on resources."
- **Ava's Help Yourself timing** ([220]): she took the space that scales with minions placed on her fourth minion, before Dee or Cal could take it on their fifth against her.
- **Ava saw Anchorites would be dead in her 8-member cult** ([169]), which was true (5 or fewer members).
- **Debriefs that were exact**: Ava diagnosed her own final miscount precisely; Cal's breakdown of his 91 matches the ledger; Dee's Kingmakers accounting (6 cost, 1 printed, +3 gift, +6 Farewell) is right; Cal's and Dee's reads of the four-way silver tie are right.

---

## E. Members: who recruited what, and what each returned

Shop recruits: Ava 4, Ben 6 (plus Cheerleaders free through Talent Scouts), Cal 2, Dee 1. Follower buys: 35. Members that arrived by other means: Snitch (to Ava), Desperado, Talent Scouts, Mutineers (to Cal), Extortionist, Guest of Honor, Talent Scouts, Mutineers (to Ava), Anchorites and Dabblers (to Ben), Double Agent (to Ben), Mutineers (to Dee).

| Member | Who, when, price | What it returned | Verdict |
|---|---|---|---|
| Anchorites | Cal, round I, 6 | +5 at all three round ends = 15, plus 1 printed. Swindled by Ben at [92], back via Mutineers at [125] before scoring. | Best buy of the game, by far. |
| Mutineers | Cal, round II, 6 | +6 from Splurge on its price; took Anchorites back (+10 for Cal over two round ends, −10 for Ben). Then Kidnappers fodder twice; changed hands 4 times as a spent card. | Excellent. |
| Kingmakers | Dee, round I, 6 | +3 gift at round I's end, +6 at Farewell, 1 printed while held, 2 cloak silver; its gift knocked Cal out of round I's silver tie. | Fair. |
| Accomplice | Ava, round I, 5 | Stole 3 plus 2 cloak magenta (5 resources back), 1 printed. | Good: paid for itself at once. |
| Dabblers | Ava, round I, 5 | 2 printed until Swindled in round III; a second member color (round I Yellow share +2); Melting Pot counted it as every color (+2 followers and +2 resources more than the contest's count would give). Then gave Ben 2 printed and a +5 Yellow share. | Good for Ava, then good for Ben. |
| Kidnappers | Ava, round II, 10 | 2 printed; took a spent Mutineers twice (1 printed held at the end). About 3 followers. | Poor: about 7 below a 10-follower buy. |
| Double Agent | Ava, round III, 10 | Swapped for Ben's Guest of Honor: +4 that turn, 1 printed. Ben Farewelled the Double Agent for 10 (1 more than his other choice, Shoplifter). | About half a 10-follower buy, plus a Yellow color for Ava. |
| Snitch | Ben, round I, 6 | Yellow Cloak +2; given to Ava for Guest of Honor's +4; then cost Ben 5 followers in her hands. Ava got 1 printed. | Net negative for Ben. |
| Guest of Honor | Ben, round I, 5 | +4 once (round I), Yellow Cloak +2. Never used in rounds II and III (no member he could spare). Lost to Double Agent; Ava used it once for +4. | Fair; weaker than its reputation at this table. |
| Early Traders | Ben, round I, 5 | Cost fully refunded the same turn (New Blood +3, cloak +2); +2 yellow at two round starts and four color swaps each; 1 printed. | Good. |
| Shoplifter | Ben, round II, 9 | 5 of its cost refunded (New Blood, cloak); 11 resources skimmed (7 from Cal, 4 from Ava), but the 4 from Ava cost 4 Snitch followers; 1 printed. | About even. |
| Talent Scouts | Ben, round II, 8 | Free Cheerleaders (7), then Write-Off for 9 white. But it gave Cal a third color (round II Yellow tie), and Ava Poached it for a color in round III. | Very good for Ben; it also helped two rivals. |
| Cheerleaders | Ben, free | +2 on each of 4 contest wins = 8, Yellow Cloak +2, 1 printed. | Good. |
| Consolation Prize | Ben, round II, 7 | +4 at round II and round III ends = 8, 1 printed. | Good. |
| Desperado | given to Cal by Swindle | 1 printed and a magenta color (part of Cal's round II Yellow tie). Its ability never switched on. | A gift to Cal. |
| Extortionist | given to Ava by Swindle | 1 printed. | Dead, as Ben intended. |

Were members under- or over-used? **Under-used in round III.** The round III shop showed 8 members; 1 was bought (Double Agent). Players treated round III members as worth their printed follower only (Ava [192] "four members sit in the shop that are all dead on the last round", Cal [185] on Brokers). Paupers (Round End: if you hold no silver, +3) was never bought, though every player held 0 silver at the round II and III scorings; Cal's debrief says it would have paid him 6 plus 1 printed. **Ben over-bought cheap bodies** (7 members) and three of them ended in rivals' hands helping them (Snitch, Talent Scouts, Guest of Honor). The best members at this table were the ones that kept paying at round end (Anchorites, Consolation Prize, Cheerleaders) or paid back at once (Accomplice, Early Traders, Mutineers with Splurge). The member-taking cards (Kidnappers, Double Agent) returned the least for their price.

---

## F. Card ideas

All 14 ideas came from the debriefs; no player wrote an in-game IDEA.

- **Ransom Note** (Ava; Magenta space: name a rival's member, they give it or pay its cost, their choice). Aims at Kidnappers' weakness, which is real, but repeats it: the rival always picks the cheaper option, so it is a member-steal that always takes the cheapest outcome.
- **Strongroom** (Ava; your magenta counts double in Most resources). No problem seen: Ava already won Most resources every round. It would make the contest harder to contest.
- **Census** (Ava; every player with fewer members than you takes a shop member of your choice). Answers "no way to push members onto a zero player", which is a misreading (Guest of Honor, Write-Off).
- **Hostage Takers** (Ava; Round End, take a member of your choice from the follower leader). Answers the real Kidnappers problem, but here it would have taken Anchorites every round, a 10-point swing per round aimed at one player.
- **Vault Keepers** (Ben; once per round, one member can't be stolen). Answers member theft; in this game the only stolen engine (Anchorites) came back the same round. Weak need.
- **Open Hand** (Ben; White space paying followers per member you have). Answers "members feel like a penalty". Not seen strongly: the 2-member cult won, the 0-member cult was last.
- **Patron of the Arts** (Ben; pays for each member held all round). Answers churn; counts events over time, which a table can't see at round end. No problem seen here.
- **Tie-Breaker** (Cal; when you share a contest lead you may claim the full prize, tied rivals gain resources). Aims at the real all-way ties (group 1), but only for whoever holds the card.
- **Recluse's Retreat** (Cal; +1 follower per round you stayed at 2 or fewer members). Counts past rounds, not what players hold; the lean line was already well paid (Anchorites, Fewest members, Modest Means). No problem seen.
- **Insurance Agents** (Cal; when a rival takes your member, gain its cost in followers). Answers theft; Cal lost only junk. Weak need, and it would make Swindle and Poach targets pay their victims.
- **Tarnish** (Cal; every player at 0 silver gains 1 silver). Aims at the real all-way ties but moves every tied player equally, so they stay tied at 1.
- **Strongbox** (Dee; resources in one named color can't be stolen). Answers Dee's one late steal (−4). Minor.
- **Clean Slate** (Dee; with no resources and no members, gain followers instead of resources). The zero line was already paid by three spaces and a contest. No problem seen.
- **Hush Money** (Dee; give a rival silver, they can't take a silver space this round). The one idea that touches the real pattern in H1: blocking Polish would let a gift stick unless the rival spends it in a buy. It also locks a player out of a color, which is heavy.

---

## G. Process problems that remain

1. **The "if the round ended now" projection misled targeting in round III.** At the start of round III it showed Ben "+23 if the round ended now (71)" against Cal's 56, mostly from contest leads Ben held for one moment after Largesse (a solo Fewest silver while rivals held his gifted silver). In followers Cal led 51 to 48. Ava aimed Heist ([160]–[163]) and Double Agent ([169]) at Ben on that figure, and her Kidnappers and later steals at Dee ([221]) "projected 82". Those choices cost her about the game (A). Ben also noted it ignores a stolen card's ongoing value ([92]), Dee that it skipped Kingmakers' payout ([41]), and Ava that Poach showed the same +5 for three different members ([191]). Fix: show current followers first and keep contest leads out of the projected total, or list them separately as "leads that can still change"; include round-end members (Anchorites, Consolation Prize, Kingmakers) and the ongoing value of a member that moves.
2. **The payment warning "after this payment (and anything it triggers) you no longer lead magenta" was wrong at [10]**: Accomplice's On Recruit steal put Ava back in the lead with 7. It printed on 11 payments; three players said it made planned payments feel like mistakes ([29], [76], [10]). Fix: compute it after On Recruit effects, or say "before On Recruit effects".
3. **Suggested payments ignore the silver contest.** At [86] the suggestion was white when the point of the buy was to dump silver; at [219] Dee noticed the suggestion would have left her a silver and cost a +5 share. Fix: prefer paying silver first when holding it loses Fewest silver.
4. **Steals are asked one resource or one follower at a time**, and a combined answer was refused ([72], [161]–[166], [221]–[224]). Fix: accept a list in one answer.
5. **Kidnappers was misread for two rounds and the player never caught it**, even after the log said "Cal gives Mutineers to Ava" ([112]–[204]). Her round notes recorded the result but not that it contradicted her plan. Fix: when a round-end card's result differs from what a player's last plan said it would do, show both side by side in the next prompt. (The card text could also be plainer, but two of three players read it right.)
6. **Dabblers' color count is not in the card text players saw.** "Counts as 2 wild members" doesn't say it adds one missing color in Most member colors while Melting Pot counts it as every color. Ava guessed the contest rule right ([190]); nobody could know Melting Pot's. Fix: put the counting rule on the card or in cards.md.
7. **Debrief facts lacked each round's turn order**, so Dee wrote a lesson about reaching Largesse that the order made impossible (B12), and Cal one about acting after a round-end card (B14). Fix: include each round's placement order and the round-end order (abilities, then contests) in the debrief facts.

---

## H. Patterns in the game visible from above that no player commented on

1. **Silver given to rivals during a round never stuck.** 33 silver was gifted during rounds (Toast 6 and 6, Party Gifts 3, 3 and 3, Largesse 12). Every recipient spent it as "any" in a purchase or turned it with Polish or Makeover before scoring. The silver contest moved only once, from Kingmakers' gift at round end, when nobody can answer. So Party Gifts, Toast and Largesse worked as "followers for the giver plus free resources for rivals": Cal's round I gift became part of Ben's Guest of Honor ([26]–[28]); Ben's Largesse gave Ava 8 silver, and 6 of it paid for the Double Agent that took his Guest of Honor ([168]). Players praised gifts as weapons (C13, C33) without noticing none landed. This is also why Fewest silver always ties.
2. **Flaunt and Buyout were never taken.** Every other space was taken at least once (48 placements). Both pay +1 silver and Flaunt needs silver in hand, which no player would hold at a table where everyone sits at 0. Players named them only as spaces to avoid ([234], [244]).
3. **Dabblers counted differently in two places.** The Most member colors contest counted it as one extra color (Ava 2 colors in rounds I and II); Melting Pot counted it as every color, paying Ava "4 member colors" at [84]: +4 followers and 4 resources, where the contest's count would have paid 2 and 2. The card text doesn't say which.
4. **Swindle counted as both a recruit and a steal; Poach as a steal.** Swindle fired Shoplifter ("whenever you recruit") and the Yellow Cloak (new color) and also Snitch: one Swindle cost Ben 2 followers ([227]–[229]). Poach fired the Magenta Cloak (+2). The printed words are "Steal a rival's member" and "Recruit a rival's member". The game handled both consistently with the rulebook's "to steal is to take from a rival", but a table would need the recruit part spelled out. A question for Cory, not a bug.
5. **Giving a member to a rival helped the receiver 6 times out of 7.** Snitch to Ava (taxed Ben 5), Talent Scouts to Cal (third color, Yellow tie), Desperado to Cal (a color), Mutineers to Dee (Write-Off for 7 white), Mutineers to Cal (1 printed), Double Agent to Ben (Farewell 10). Only Extortionist to Ava was dead. A body hurts only the Fewest members leader or an Anchorites holder near 5, and Write-Off and Farewell turn a given body into its cost. Swaps and gifts of costly members feed the receiver.
6. **The player who led after every round (Cal: 17, 51, 91) was rarely attacked for followers.** Heist took 3 from Ben, 2 from Dee and 1 from Cal. Cal lost members 4 times, all junk except one Anchorites that came back. Ties to G1.
7. **A close game won by a small cult.** 83 to 91 across four players. Followers: 133 bought (38% of 347), 96 from contests (28%). The winner held 2 members, the last place 0, second place 8. Cory's 1.0 bar (small cults win at least 20%) holds here; the zero-member line paid well in contests but lacked any follower source besides buys.
8. **Round III's member shop was ignored.** 1 of 8 members bought (Double Agent); the other 19 of the 20 round III recruits were follower buys (ledger's round III rows). Members in round III are judged on their printed follower alone.
