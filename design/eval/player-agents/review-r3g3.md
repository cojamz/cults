# Review of r3g3: what the four player agents got right and wrong

Game: four agents. Ava (Red Cloak), Ben (Blue Cloak), Cal (Magenta Cloak) played as experienced players with the strategy primer and the strong players' questions. Dee (Silver Cloak) played as an experienced player with only the rules and the cards. Colors: Red, Silver, Blue (market), Magenta (thieves). Final: **Cal 91, Ben 69, Dee 69 (Ben second on the tiebreak, 8 members to 0), Ava 43.**

Sources: facts-r3g3.md (the ledger), moves-r3g3.txt (decisions, numbered [n]), /home/user/pa-games/r3/r3g3/cards.md, the four system briefs, events.jsonl and transcript.md (the game log), agents.jsonl (the exact prompts). Every number below was counted from the log or the ledger unless it says "about" or "roughly". Where I say what a strong player would have done, the follower change is an estimate. One gap in the ledger: Ben's "Abilities paid" line leaves out Snobs' game-end +5; his 69 only adds up with it.

## The cards that matter in this review

Cloaks (each player has one all game):
- **Red Cloak** (Ava): whenever you recruit a member, +1 red. Paid 14 red.
- **Blue Cloak** (Ben): whenever you discard a member, +1 of its color (grey: any color). Paid 9.
- **Magenta Cloak** (Cal): whenever you steal, +2 magenta. Paid **42 magenta** (21 steals).
- **Silver Cloak** (Dee): whenever you gift silver, +2 silver. Paid 12 silver.

Contests (scored at every round end, +4 / +6 / +10; tied leaders each get half, rounded up, however many tie):
- Red **Most members of one color** (each card counts 1).
- Silver **Fewest silver** (0 counts).
- Blue **Most members** (a card that "counts as 2" counts 2).
- Magenta **Most resources** (every color together).

Members that decided the game:
- **Kidnappers** (6 magenta + 4 any, worth 2, counts as 2 members): Round End: a rival you choose gives you one of their members.
- **Shoplifter** (4 magenta + 5 any): whenever you recruit, steal 1 resource.
- **Mutineers** (6 any): On Use, once per game: take a member from a rival with more members than you.
- **Assimilators** (3 red + 4 any): your grey members count as members of your biggest color.
- **Dabblers** (5 any, worth 2): counts as 2 wild members.
- **Ghost** (5 any, worth 0, counts as 0 members): whenever this member joins your cult, −5 followers.

## Where the followers came from (from the ledger)

| Player | Final | Bought | Contests | Abilities and spaces | Printed on members held |
|---|---|---|---|---|---|
| Cal | 91 | 11 | 52 (Most resources 20, Red 12, Blue 12, Silver 5, plus R I shares) | 13 (Gather 8, Cheerleaders 8, Power Shoppers 3, Ghost −5, Heist −1) | 14 |
| Ben | 69 | 23 | 13 (Silver 10, Red 3) | 24 (Purists 9, Consolation Prize 6, Snobs 5, Thrift Hunters 4, Word of Mouth 2, Patroness 2, Heist −3, Snitch −1) | 8 |
| Dee | 69 | 30 | 5 (one four-way Silver share) | 33 (Party Gifts 18, Largesse 10, Paupers 3, Heist 3, Snitch −1) | 0 |
| Ava | 43 | 11 | 23 (Blue 8, Silver 10, Red 5) | −1 (Word of Mouth 4, Heist 1, Snitch −1, Ghost −5) | 9 |

Everyone started with 1. Standings after round I: Ava 16, Ben 15, Cal 12, Dee 9. After round II: **Ava 37, Ben 32, Cal 28, Dee 27.** Round III alone: Cal +63, Dee +42, Ben +37, Ava +6.

Three facts frame everything below:
1. **Cal was third after round II and won by 22.** He took 35 of the 40 contest followers in round III and the round II leader finished last.
2. **Most resources went to Cal every round** (piles at round end 6, 10, 14; the next best 3, 3, 0). The Magenta Cloak alone gave him 42 magenta; Shoplifter's 11 triggers stole 17 more.
3. **Fewest silver was never won outright**: two-way ties in rounds I and II (Ava and Ben), a four-way tie at 0 in round III.

---

## A. Each player's line, what it earned, and the decisions that decided the finish

### Cal (1st, 91): Magenta Cloak steal engine, then a member pile for round III

The line: Accomplice (On Recruit: steal 3) and Help Yourself to grow a pile with the cloak; Shoplifter so every recruit steals; member takes (Swindle, Body Snatchers, Mutineers, Kidnappers) to swing both member contests; in round III Assimilators and Cheerleaders on top.

What it really earned: 52 from contests (the most by 29), 20 of them from Most resources, which nobody else contested. Steal income over the game: Accomplice 3, Help Yourself 6, Shoplifter 17, Con Men 5, Bodyguards 2, plus 42 cloak magenta: about 75 resources against 11 bought followers and 9 member buys. It was the right line at this table, and two other players' choices fed it (Dee gave him 9 of Largesse's 12 silver, which paid for Con Men; Ava's swaps kept Kidnappers moving).

Decisions that decided his finish:
- **[16] Accomplice on his first recruit.** Paid 5, got 5 back (3 stolen + 2 cloak) and a body. Correct.
- **[76] Shoplifter for 9.** Returned 39 resources (17 stolen + 22 cloak magenta from 11 triggers), including on a 1-follower buy ([91]) and on member takes by Body Snatchers, Swindle and Mutineers. The best buy in the game by a wide margin.
- **[130] Kidnappers for 10 with Promote open.** Ava took it the same round with Promote ([142]), won round II Most members alone (+6) and kidnapped Window Shopper back from him. Cal's own debrief names this. A strong player checks "can it be taken straight back" (the primer's own question) and buys it on a turn after the red middle ring is filled, or takes Loyalists first. Cost about 6 to 9.
- **[222]–[227] Recruit Twice into Mutineers, taking Kidnappers back from Ava.** Without it, Blue in round III is about 11 to 11 (Ava would also kidnap one of his members at round end): Cal +5 instead of +10, Ava +5 instead of 0. Worth roughly 10 to Cal and 5 to Ava. Correct and sharp; Mutineers had been sitting face up in the discard pile since round III began.
- **[248]–[251] Late Shift into Assimilators, then Cheerleaders.** Assimilators turned his five grey cards into magenta: Red 10 against Ben's 5, so +10 alone instead of a 5-5 tie (+5 for Cal, −5 for Ben). Cheerleaders paid 8 plus 1 printed for 7 resources, and the second member that turn paid Power Shoppers +3. Correct.

### Ben (2nd on the tiebreak, 69): Blue Cloak, discard pile, Purists

The line: Out of Style with the Blue Cloak for resources, the discard pile as a second shop (Markdown, Spree, Thrift Hunters), stay in red and blue for Purists (Round End: if your members have 2 or fewer colors, +3), silver at 0.

What it really earned: the best member returns at the table for what he paid: Purists 9 + 1 for 6 resources, Last-Minute Shopper (Round End: +3 blue, then you may recruit) free, giving 9 blue and three extra recruits, Thrift Hunters free (+4 + 1), Consolation Prize free (+6 + 1). But only 13 from contests, 10 of them the shared Silver prize everyone could reach. He never led a member contest outright.

Decisions that decided his finish:
- **[8] Purists in round I.** +10 for 6 resources. Correct.
- **[37]–[38] Test Drive on Seat Filler for a free Last-Minute Shopper.** Three round-end recruits (a 5-pack in round I, a 1-pack in round II, a 5-pack in round III). Correct and strong.
- **[125] Repossessors on Cal's Spoilsport** (Round End: choose a contest; nobody wins it this round) before it fired once. Removed a +6 and a +10 veto from the eventual winner. Correct.
- **[187]–[188] Spree's whole 7 blue on Mannequin** (blue members in the shop count as your members when contests are scored). Ava Demoted it away at [207] before it counted; Ben got Body Snatchers (worth 1) back. Return: Thrift +2 and 1 printed against a 5-pack plus 2 spare. About −3. His own debrief calls it a gamble; it was a fragile card on a table where Promote and Demote were open.
- **[128] Passing a recruit to build a 5-pack for Last-Minute Shopper's round-end buy.** Cal's Shoplifter skimmed 2 blue ([132]–[133]) and the plan fell to a 1-pack ([148]). About −2. Holding a pile at a table with Shoplifter was a known risk; he named it and took it.

### Dee (tied 2nd, 69): zero members, silver gifts and follower buys (no strategy notes)

The line: Party Gifts (give rivals up to 3 silver, +2 followers each) every round, Largesse (give rivals 12 silver, +10) in round III, Paupers (Round End: if you hold no silver, +3) and the Fewest silver contest, every other recruit into 5-packs. After round I she dropped members entirely.

What it really earned: Party Gifts 18 and Largesse 10 from four placements, 30 bought (the most), but only 5 from contests and Paupers paid once. The line was decent at this table; it was held back by two round-end silver mistakes, each a misread of the rules.

Decisions that decided her finish:
- **[45] Borrow instead of Toast on her last round I minion.** Three spaces were left for three minions (Borrow, Toast, Markdown), so someone had to take Toast after her; Cal said so at [49] and Ava's last minion was forced onto it. Dee's reason ("Borrow keeps me clean: ... 0 silver, so Paupers fires") missed that. Toast herself: 5 silver into a 5-pack, 0 silver at round end, Paupers +3, a Fewest silver share of about +2: roughly +10 against the +1 she got. Ava would have lost her 5-pack and her silver share (about −7).
- **[139] Out of Style discarding Debutantes**, which paid her a silver, after counting the space's +1 blue that Ben had already taken in round I ([136]). She ended round II on 1 silver: no Paupers (+3), no Fewest silver share (+3). Discarding Mutineers or Panel instead and paying her one silver into the 1-pack would have ended on 0. About −6. With [45] fixed as well, she finishes about 84, clear second, still behind Cal.
- **[171] Largesse: 9 of the 12 silver to Cal** ("the rival I least fear"). Cal spent all 9 at [179] on Con Men (9 any), which stole 5 more, fed Shoplifter and the cloak, and broke a 6-6 Blue tie at the time. An even 4/4/4 split still gives every rival silver, which was her stated aim. The cost is hard to count, but it handed the eventual winner a free 9-cost member.
- **Switching to zero members after round I.** She played for one contest of four for two rounds, and her only member was kidnapped at the last round end, which also cost her the tiebreak. Her debrief reaches this conclusion.

### Ava (4th, 43): Red Cloak, cheap bodies and member swaps, no economy

The line: cheap or free bodies (Dabblers, Late Shift into Line Cutters, Mentor's free member, Markdown into Kingmakers) for both member contests, silver at 0, and the red middle ring (Promote, Demote) to pull members off Cal.

What it really earned: 23 from contests, all in rounds I and II except one 5 share; 11 bought, with 6 of her 12 turn recruits spent on 1-packs and 2 passed. Her spaces gave bodies and swaps but almost no resources, so the line had nothing to convert, and every body she built could be moved. It worked in rounds I and II (she led after both) and collapsed in round III (+6).

Decisions that decided her finish:
- **[21]–[24] Dabblers, then Late Shift into Line Cutters.** Shares of three round I contests (+6). Correct.
- **[142] Promote: Window Shopper for Cal's Kidnappers.** Round II Most members alone (+6), and the kidnap at round end brought Window Shopper back. The best single move of her game.
- **[155] Poach on Kidnappers with her first pick of round III.** It cost 1 to Snitch and was reversed at [226] by Mutineers off Recruit Twice. Mutineers was face up in the discard pile and only works against a player with more members, which Poach made her. Her debrief sees it. Initiation on Con Men (9 any, On Recruit: steal 5) was open: it would have denied Cal the card he bought at [178] and taken 5 from his pile. Hard to count, but the Poach gave her nothing she kept.
- **[157] Seat Filler for 5 in round III.** 1 printed and a body in member contests she did not win, with no Round Start left: about −4 against a 5-pack.
- **[211] Protesters on Polish** to protect a solo Fewest silver +10. Dee reached 0 anyway, through Heist and Cal's Bodyguards ([214]) and then Catch Up ([265]), and the contest ended a four-way 5. A block on Recruit Twice would also have failed (Markdown stayed open), so this was not a clear misplay, but her +10 depended on three rivals failing to spend their last silver, which nobody at this table failed to do.

---

## B. Misreadings: claims that contradict the cards, the rules or the log

Ties (the rule: half, rounded up, however many tie; round III pays 5 to each):
- Cal [178]: a three-way silver share would cut Dee "down from a solo 10 to 4". Actual 5. Again at [181] ("trims Dee from 5 to 4 and hands Ben 4") and [183] ("trims Dee to 4"). His Con Men picks were chosen on this wrong number.
- Dee [254]: "fewest silver alone for +10 instead of a 4-way split of 3". Actual 5.
- Ben [40]: "the four-way Fewest silver tie for +1 after rounding the half". Actual 2 (he said +2 one decision earlier at [39]).
- The primer states the tie rule; Cal and Ben had it and still misread it.

Card text and rules:
- **Dee [136]: Out of Style would give "+1 of each one's colour plus the +1 blue".** Ben took that +1 in round I. Her own [140] then blamed "how many resources Out of Style would actually hand me", and her round II notes call it "a resource short of my plan". The space's line showed "+0..1 blue". The primer covers this rule; Dee did not have it.
- **Dee [45]: Borrow "keeps me clean ... 0 silver, so Paupers fires".** With three minions and three spaces left, Toast had to be taken after her. Ava's Toast put 2 silver on her.
- **Dee, round I notes: "I also didn't take Party Gifts at all in round I".** She took it at [10] (+6). Repeated in her debrief ("I'd also take Party Gifts in round I instead of the dead 1-for-1 buys. That's 6 followers I left on the table"), in the same debrief that lists Party Gifts at 18, which is three uses. The cause is in the prompt (see G).
- **Dee's debrief: Paupers paid once "because my Silver Cloak kept dirtying me in rounds I and II".** In round I she held 2 silver from Ava's forced Toast; in round II, 1 silver from her own Debutantes discard. The cloak's silver was spent both rounds.
- **Dee's debrief: "The one I should have chased was Consolation Prize."** Ben took it with Seat Filler at the start of round III ([152]), before Dee's first turn. It was never in reach.
- **Dee's debrief: "The game was decided before round III started."** Cal was third on 28 after round II, behind Ava 37 and Ben 32; he scored 63 in round III.
- **Ava [155]: "Poach is a recruit, not a steal, so Snitch doesn't bite."** The log: "Cal's Snitch: Ava loses 1 follower." The rulebook defines to steal as "to take from a rival", which covers Poach. (Her Red Cloak also paid, so the game treats Poach as both a recruit and a steal; a text question for Cory, see H.)
- **Cal's debrief: "Purifiers was not worth it: 6 resources and a recruit for 1 follower."** Cal never paid for Purifiers; Ava swapped it to him with Demote at [104] for his Dabblers.
- **Cal's debrief: Snitch "paid back 3 followers off rivals' Heists".** Snitch made three rivals lose 1 each (Ava, Dee, Ben); Cal gained nothing from it, and Ava's loss came from Poach, not a Heist.
- **Cal's debrief: "Clan in the discard pile on my Recruit Twice turn. With 10 in one color it would have paid about 11."** At [222] Clan was in the shop (Ben discarded it at [243]), and Cal had 10 in one color only after Assimilators at [249]. On the Recruit Twice turn his biggest group was about 5.
- **Cal [31], round I notes and debrief: Snitch is "close to blank".** It changed targets at least eight times: Ava steered Heist and its resource picks off Cal ([58], [59], [62], [64]), Dee steered off him ([215], [218], [219]), and Dee [265] skipped Help Yourself over "a Snitch hit".
- **Ava's debrief: "6 of my 14 recruits on 1-packs".** She had 12 turn recruits (3 + 4 + 5).
- **Ava's debrief: "Protesters cost 6 for 1 follower and one block."** Protesters came free with Mentor ([208]–[210]).
- **Ben [36] FEEL: "a steal emptied the deck and reshuffled the discard pile."** The deck ran out when Ava's Late Shift recruit was refilled; no steal touched the deck.
- **Ben [55], [78], [79]: a grey member "might break Purists".** Ben held Consolation Prize (grey) with red and blue members in round III, and Purists still paid. The game does not count grey as a color for Purists. The rulebook's only grey rule is about "a color none of your members have", so Ben's caution is a fair reading of unclear text, not a plain error; it cost him at [55] (passing Purifiers for the Blue tie).

Claims I checked that hold up: Cal [49] (Toast would be forced on Ava), Ava [203] (swaps are not steals, so Snitch and Bodyguards stay quiet; the log agrees), Ben [233] (half of 17 magenta is 8), Cal [134] (Dee would gain 6, Ava 3).

---

## C. Complaints and praise about the game, by card, space, contest or rule

Verdicts: (1) true about the game, would bother a player on any line; (2) real but caused by the player's own plan or misplay; (3) a misreading; (4) caused by how the agents are run.

**Kidnappers.** Complaints 5 (Ava [155], [156], debrief twice; Dee debrief), praise 5 (Cal [147], [153], [227], debrief; Ava [143]). Verdict **1**. It changed hands four times and decided Blue in rounds II and III: Ava 6 to 5 in round II only because of it, and in round III the final Mutineers retake moved Blue from an 11-11 tie to Cal alone. A 2-member card that also takes a member makes a swing of 3 or 4 members every time it moves. The praise is also true: every player named the back-and-forth as the most memorable thread.

**Member takes stacking into a three-contest sweep (Swindle, Kidnappers, Mutineers, Body Snatchers, Con Men, Assimilators).** Complaints 4 (Ben debrief twice, Dee debrief twice, Ava debrief). Verdict **1**. Cal went from 5 members to 14 in round III and took Most members, Most members of one color and Most resources at +10 each; both member contests count the same pile.

**Magenta Cloak with Most resources.** Complaints 6 (Ben round I and II notes, debrief twice; Cal debrief; Ava debrief), praise 2 (Cal [2], [16]). Verdict **1**. The cloak gave 42 magenta, three times the next cloak (Red 14, Silver 12, Blue 9), and Cal's round-end piles were 6, 10, 14 against the next best 3, 3, 0.

**Shoplifter.** Complaints 5 (Ben [148], debrief; Dee [254], debrief; Cal's own debrief "too good"), praise 2 (Cal [88], [91]). Verdict **1**. 11 triggers stole 17 resources and paid 22 cloak magenta for a 9-cost card, and it fired on a 1-follower buy and on member takes, so it taxed every rival's exact-change plans without their choosing.

**Most resources uncontested in round III.** Complaint 1 (Ava debrief). Verdict **1**. Cal held 14, everyone else 0: in round III holding 15 resources to contest costs 15 bought followers to win 10, so only a player with surplus can enter.

**Fewest silver ending in ties.** Complaints 6 (Ava debrief twice and round III notes; Ben debrief twice and round III notes; Dee debrief twice). Praise 7 (Ava [53], [209]; Cal [77], [195], [252], debrief; Dee [10]). Verdict **1** for round III: all four players reached 0, because spending the last silver on a pack or a payment is free. Over the game it was never won alone. The praise is also true: which colors to pay with decided silver shares in about 15 decisions, and Dee's last Toast forced Cal to spend his final placement and recruit cleaning up ([268]–[272]).

**Silver Cloak against Fewest silver and Paupers.** Complaints 3 (Cal [2] "trap pick"; Dee round I notes, debrief), praise 1 (Dee [3]). Verdict **2**. The cloak paid 12 silver, which she spent on packs; the two rounds she missed 0 silver came from Ava's forced Toast and her own Debutantes discard, not the cloak.

**The silver members row.** Complaints 2 (Cal debrief and round III notes; Ben [152] on Hustlers and Toll Collectors). Verdict **1**. Of the ten silver members, only Paupers (Dee, round I) and Kingmakers (Ava, bought to dump 2 silver) were recruited.

**Dee's zero-member line scoring 69.** Raised by Ava, Ben and Cal (three debriefs, Cal's round III notes) as too strong for its interaction; by Dee as "playing for second". Verdict **1** on both sides. Party Gifts paid 6 followers per placement with the recruit still free and Largesse 10, about double what a resource space returns (3 to 5). But even without her two mistakes she lands about 84, behind 91.

**Purifiers** (On Use, once per game: discard one of your members; each rival with more members than you discards one too). Complaints 9 (Cal [119], [130], [232], round II notes, debrief twice; Ava [81], [100], debrief). Verdict **1**. Two owners, about nine prompts to use it, never fired: it only works for the smaller cult, and firing it costs that cult a body in the member contests it is aimed at.

**Line Cutters against the catch-up turn order.** Complaints 5 (Dee [67], debrief twice; Ava [58], [151], debrief). Verdict **1** as a rule fact: Dee was last on 9 after round I and placed second behind Ava every round. Its effect here was small: Ava got first pick (Heist, Poach) and finished last.

**Heist.** Praise 2 (Dee [215], debrief), complaint 1 (Ava [58]: swingy with Line Cutters). Praise verdict **1**: Dee split the follower steals and used Cal's Bodyguards to strip her own last silver ([214]).

**Borrow** (recruit the cheapest member free; it returns before scoring). Complaints 4 (Dee [45], [46], round I notes, debrief; Ben [4], [41]), praise 1 (Cal [109]). Verdict **2**. For Dee it was a +1 red space; Cal borrowed Desperado (while you have the fewest followers, your steals take 2 more), which added 4 resources to two Shoplifter steals.

**1-follower buys.** Complaints 12 (Dee [14], [71], [201], round I notes, debrief; Ava [26], [65], [94], [144], [260], debrief; Ben [86], [191], [274]). Verdict **1**, with most of it coming from thin economies: 20 of the 30 follower buys were 1-packs (Ben 8, Ava 6, Dee 5, Cal 1). Leftover 1 to 4 resources have no other use.

**Polish's first-taker silver** (+2 silver, turn all your silver into one other color, +1 silver). Complaints 3 (Ben [43], round I notes, debrief). Verdict **1**, minor: the first taker ends holding 1 silver and spends a recruit to clear it.

**Toast and Party Gifts dirtying rivals.** Praise 6 (Dee [10], [13], [106], debrief; Ben [55] "annoying but fair"; Cal debrief on Dee's last Toast). Complaint 1 (Ben debrief: recruits spent getting back to zero). Praise verdict **1**; the complaint is the same as the Polish one.

**Largesse.** Dee [159], [171]: a 12-silver gift feels like damage control. Verdict **1**: the 9 silver Cal got paid for Con Men.

**Promote and Demote reaching into rival cults.** Praise 7 (Ava [88], [142], [143], [203], [207], round II notes, debrief). Complaints 3 (Cal [222], debrief twice: round III swaps erase a turn with no reply). Both verdict **1**: four swaps changed a contest lead; Ava's last pair ([203], [207]) cost Cal 5 and Ben a Blue lead in back-to-back turns.

**Ghost.** Complaints 2 (Ava [157], debrief). Praise 4 (Cal [174], [177], debrief; Ava [203], debrief). Complaint verdict **2**: it is a weapon, not a member, and it cost 5 to each of Ava and Cal.

**Swindle.** Praise 3 (Cal [73], [177], debrief). Verdict **1**.

**Test Drive.** Praise 4 (Ben [37], [233], debrief twice), with two notes that it may be generous ([38], [84]). Verdict **1**: through Seat Filler it gave free 5- and 7-cost members, and on Heist Crew it took 8 magenta from Cal.

**Test Drive on cards that say "this member" (Double Agent).** Complaint 2 (Ben [79], debrief). Verdict **1**, minor: the text does not say what a self-swap does when you do not own the card.

**Out of Style with the Blue Cloak.** Praise 5 (Ben [4], [7], [238], [245], debrief). Verdict **1**.

**Late Shift.** Praise 5 (Ava [24], debrief; Ben [120], [123], debrief). Verdict **1**: three free members (Line Cutters, Repossessors, Assimilators), each timed a turn or two ahead.

**Last-Minute Shopper.** Praise 3 (Ben [128], [279], debrief), complaint 2 (Cal [50], round I notes: makes Most resources hard to read). Both verdict **1**, the complaint minor.

**Markdown with an empty discard pile in round I.** Complaints 3 (Cal [49], round I notes; Ben [36]). Verdict **1** (Ben's stated cause is 3). The round I deck ran out twice and the discard pile was shuffled back each time.

**Snitch.** Complaints 3 (Cal [31], round I notes, debrief). Verdict **3**: it steered at least eight steal picks away from Cal.

**Catch Up.** Praise 3 (Cal [15], Dee [265], debrief). Verdict **1**.

**Repossessors.** Praise 3 (Ben [125], [126], debrief). Verdict **1**.

**Gather's +4 dead on a first recruit.** Complaint 1 (Ava [22]). Verdict **1**, minor. Cal took the +4 twice on 10-cost magenta members.

**Con Men on a drained table.** Complaints 4 (Cal [118], [133], [183], debrief). Verdict **2**: his own engine had emptied the table, so the forced picks zeroed rivals' silver and gave them shares.

**Mannequin.** Complaint 1 (Ben debrief), praise 2 ([188], [189]). Verdict **2**: a fragile card at a table with Promote and Demote open.

**Assimilators** (praise Cal [249], debrief; Ben debrief "key to Red"), **Cheerleaders** (Cal debrief), **Consolation Prize** (Ben [152]), **Thrift Hunters and the discard pile as a shop** (Ben [83], [187], debrief; Cal [223]), **Word of Mouth** (Ava [262]), **Markdown into Kingmakers** (Ava [258], debrief), **the cloak draft in reverse order** (Ava [1]), **Desperado as a catch-up kicker** (Cal [107]). All praise, verdict **1**.

**Round I contests splitting into halves.** Ava round I notes ("+2s everywhere"). Verdict **1**, minor: three of four round I contests were ties.

**Interface complaints** (steal and Heist picks one at a time, batched answers refused, swap lists of 70 to 250 lines, payment lists of 100+, the Out of Style loop). Ava, Ben, Cal and Dee, about 14 notes. Verdict **4** (see G).

---

## D. What the players got right

- **Cal's engine reading.** He saw Accomplice plus the cloak pay for itself on turn one ([16]), bought Shoplifter knowing it would refill him ([76]), and in round III kept counting both member contests card by card ([193], [222]–[229], [248]). His late Help Yourself ([268]) was both a silver fix and a denial of Ben's last raid.
- **Ben's sequencing.** Late Shift timed two placements ahead for a free Repossessors ([120]–[123]); Repossessors aimed at the card that threatened the most future prizes ([125]–[126]); Out of Style used to deny Cal his one live buy, Clan ([243]); Snobs bought late because it also tied Red at the time ([246]). Every round-end Last-Minute Shopper buy was planned.
- **Ava's swaps.** Promote into Kidnappers ([142]) and the pass, Demote, Mentor combo ([205]–[208]) were the sharpest tactical turns of the game, and handing the Ghost back ([203]) cost Cal 5.
- **Dee's arithmetic and table reading.** Exact change for packs ([220], [265]), using Cal's Bodyguards as a way to drop her own last silver ([214]), a fallback ready when Polish was blocked ([255]), and spreading Party Gifts one per rival so nobody could sit at 0 for free.
- **Honest debriefs on their own mistakes.** Ava (no economy; Poach was reversible), Ben (should have fought Cal's member pile), Cal (Kidnappers bought into an open Promote), Dee (dropping members) all named the real cause of their own finish.
- **Feel notes about the game were mostly true.** Of the groups in C, most complaints are verdict 1.

**Did Dee, with no strategy notes, play differently or worse?** Differently, and on rules reading worse; on tactics, not.
- Her two biggest losses were exactly the rules the primer spells out: the space's +1 going only to its first taker ([136], about −6) and counting what rivals will still do before her turn comes back ([45], about −10). She also misread the tie rule ([254]), but so did Cal three times and Ben once with the primer in hand.
- She chose the simplest line (zero members, buy followers) after round I, the line the primer warns against defaulting to ("count both lines honestly before defaulting to buying followers"). The three players with notes all built member engines and fought for member contests. Her line still tied second, so the default was not a disaster at this table, but it gave her no contest income beyond one 5 share.
- She denied less: the notes players blocked (Ava's Protesters), removed threats (Ben's Repossessors), hate-discarded (Ben's Clan) and aimed steals at the leader. Dee's denial was mostly silver (Toast, Party Gifts), and her Largesse split ([171]) gave the eventual winner 9 resources because she judged him the least threat while he led two contests.
- Her tactical arithmetic (exact change, timing her last silver) was as good as anyone's at the table.
- Net: about 16 followers lost to rules misreads, which the notes would likely have prevented. Without them she finishes about 84, the clear second.

---

## E. Members: who recruited what, and what each returned

Price is what the player paid in resources; "free" means a space or ability. Returns count printed followers held at the end, ability payouts and contest effect.

**Cal**
- Accomplice (R I, 5): 1 printed + 5 resources back on the turn (3 stolen + 2 cloak). Paid for itself.
- Snitch (R I, 6): 1 printed; rivals lost 3 followers to it; it steered at least eight picks off Cal. A magenta body for Red.
- Seat Filler (R I, 5): became Spoilsport (8) free at round II start; Spoilsport never fired (Repossessed).
- Shoplifter (R II, 9): 1 printed + 39 resources. Best member in the game.
- Desperado (Borrow, R II): +4 stolen on two Shoplifter triggers, then back to the shop.
- Body Snatchers (R II, 7): its round III start swap took Kidnappers back; then traded to Ava, then Ben.
- Kidnappers (R II, 10): +4 Gather. Lost to Ava the same round (−6 Blue, and a kidnap against him). Retaken in round III: 2 printed, counted 2 in Blue, kidnapped Paupers (+1 printed, −1 Dee, decided the tiebreak for second).
- Purifiers (swapped to him, R II): 1 printed, never used, a grey that Assimilators turned into a Red body.
- Con Men (R III, 9 silver from Largesse): 1 printed + 10 resources (5 stolen, Shoplifter 1, cloak 4); broke a 6-6 Blue tie at the time.
- Bodyguards (R III, 10): +4 Gather, 2 printed, counted 2, stole back 2 resources (+4 cloak).
- Mutineers (Recruit Twice, R III, 6): 1 printed; took Kidnappers back (about +10 to Cal in Blue).
- Power Shoppers (R III, 8): 1 printed + 3; also took a blue card out of Ava's Mannequin count.
- Assimilators (Late Shift, free): 1 printed; Red +10 alone instead of a +5 share (+2 more through Cheerleaders).
- Cheerleaders (R III, 7): 1 printed + 8.

**Ben**
- Purists (R I, 6): 1 + 9. Excellent.
- Last-Minute Shopper (free via Test Drive): 1 + 9 blue + three round-end recruits (11 followers bought on them).
- Thrift Hunters (free via Seat Filler's effect): 1 + 4.
- Seat Filler (Markdown, R II, 3): became Consolation Prize free at round III start.
- Consolation Prize: 1 + 6.
- Repossessors (Late Shift, free): 1 printed + removed Spoilsport + 1 Blue Cloak resource.
- Mannequin (Spree, 7): Thrift +2, then Demoted away before scoring. Poor.
- Patroness (Initiation, free): 1 + 2.
- Snobs (R III, 8): 1 + 5; briefly tied Red until Assimilators.
- Body Snatchers (from Ava's Demote): 1.

**Ava**
- Dabblers (R I, 5): 2 printed at the end; worth about +4 in round I contests and half of her round II Blue win. Swindled twice and brought back twice.
- Line Cutters (Late Shift, free): 1 printed; first pick in rounds II and III (Heist, Poach).
- Window Shopper (handed to her by Swindle): 1 printed + 2 magenta at round III start; Promote fodder for Kidnappers.
- Purifiers (Recruit Twice, R II, 6): never fired; used as swap bait for Dabblers. Its 6 resources bought a trade.
- Kidnappers (Promote, R II): won round II Blue alone (+6) and kidnapped Window Shopper back; lost at round III start.
- Seat Filler (R III, 5): 1 printed. About −4 against a 5-pack.
- Mentor (R III, 8) with Protesters free: 2 printed + one block on Polish that did not change the result.
- Mannequin (Demote from Ben): 1 printed.
- Kingmakers (Markdown, 4): 1 printed, ability 0; bought to dump 2 silver.

**Dee**
- Paupers (R I, 6): +3 once (round III), and its printed follower left with Kidnappers. About 3 for 6 resources and a recruit.
- Loyalists (Borrow): nothing.

**Under or over-used?** Members were the winner's whole game, and the best returns came from engine members bought early or free (Purists, Last-Minute Shopper, Shoplifter, Accomplice). Bodies bought in round III for contests their owner did not win (Ava's Seat Filler, Ben's Mannequin) returned little. Dee under-used members: after round I she never looked at one she could afford in the shop. Ava over-used them: nine bodies, little economy, and every one could be moved. Loyalists ("your other members can't be swapped") sat in the shop or discard pile all game and nobody bought it, at a table where swaps decided Blue twice.

---

## F. Card ideas

- **Tithe** (Ava; space: 1 resource per member you have): matches Ava's real problem (6 1-packs on 9 members), but it would have paid Cal most (14 members). Partly.
- **Bouncers** (Ava; member: pay to keep a member a rival takes): answers the real Kidnappers swings, but it reacts on a rival's turn, and Loyalists already sat unbought. Partly.
- **Census** (Ava; round end, if you won no contest, +1 per member): Consolation Prize already does this job. No.
- **Collection Plate** (Ava; space: every rival with more resources gives you 1): answers Cal's uncontested pile; Catch Up already pays the poor player but leaves the rich one whole. Yes.
- **Lost and Found** (Ben; recruit free a discard-pile member taken from you this game): answers the member swings, but "taken from you this game" needs a memory a table cannot track. No.
- **Sanctuary** (Ben; your members can't leave while you have fewer than the leader): answers the real snowball; it would have protected Ava in round II but not round III, when she was bigger than Cal. Partly.
- **Bargain Bin** (Ben; round end, +2 if the discard pile has 10+): no problem seen. No.
- **Getaway Driver** (Cal; after a rival takes your member, steal 2): adds to the strongest engine at the table. No.
- **Hoarders** (Cal; round end +1 per 3 of your biggest pile): would have paid Cal more for the pile he already won a contest with. Against the findings. No.
- **Silver Lining** (Cal; space: turn silver into followers without a recruit): answers the dead silver row only partly; silver already converts through packs. Partly.
- **Last Rites** (Cal; once per game, when a member is taken, recruit a discard member costing up to that): answers the member swings; an off-turn trigger. Partly.
- **Wallflowers** (Dee; counts as 1 more member per contest you lost last round): answers a zero-member player shut out of member contests, which was Dee's self-made problem. Partly.
- **Clean Hands** (Dee; silver space paying followers for silver returned to the bank): answers a Silver Cloak problem that did not cost her anything in this game (B). No.
- **Spinster** (Dee; while you have the fewest members, you win your contest ties): answers Fewest silver never being won outright; it would have paid Dee +5 in round III. Partly.
- **Charity Drive** (Dee; gift silver, then take a member from whoever holds most silver): ties silver to member takes; Buyout already does something close and was never taken (H). Partly.

---

## G. Process problems that remain

1. **The round notes prompt shows only the last part of the round.** Dee's round I notes prompt (agents.jsonl line 58) listed her last 8 moves and "the last part of round I", which began after her Party Gifts at [10]; the wheel also showed Party Gifts as open (spaces reset at round end). She wrote that she had not taken it. That line then fed into her debrief, which repeated it beside a ledger showing Party Gifts 18. Fix: give the whole round's log, or at least the player's own moves for the whole round, when asking for round notes; in the debrief, show the player's own move list next to their earlier notes and say earlier notes may be wrong.
2. **Paired answers dropped in a repeated question.** Ben's Out of Style discards ([240]–[242]) looped about nine times on his biggest turn until he sent a single pick. Fix: accept a list for repeated picks, or say plainly "one pick per answer".
3. **Multi-pick steals asked one at a time, batched answers refused.** Cal [18], [89]; Ava [60]; Dee [217]. Fix: one question ("how many from whom") or accept a list.
4. **Very long option lists.** Swaps of 70 to 250 member pairs ([104], [204]); a payment list over 100 lines for a 9-cost card ([179]). Fix: group payments by what you keep, and swaps by the member you give.
5. **The suggested payment spends the color the player is protecting.** Ben [44], [56] (spends red, keeps silver on a buy meant to clear silver); Ava [209] says it would be easy to miss. Fix: when Fewest silver is in play, prefer silver in the suggestion, or show the contest effect on the suggested line.
6. **The first-taker +1 is easy to miss without the primer.** Dee [136] counted Out of Style's +1 blue. The space list marks "+1 still there for its first taker" only when it is still there; a claimed space just says OPEN. Fix: mark claimed spaces explicitly ("+1 already taken").
7. **Polish's numbers don't agree.** [42]: the prompt offered to turn "your 1 silver" while Ben's sheet showed 2; the log said "+1 silver", then "2 silver into 2 red", and he still held 1. Fix: show each step of the space in order with the running total.
8. **Stale holdings during a multi-steal.** Cal [181]: the option list showed Ava with 1 silver while her cult line showed red only.
9. **Projection lines identical on every pick.** Cal [118]: every steal showed the same −6 contest swing, hiding which pick switched on a rival's Paupers or tie. Fix: show the effect on each rival, not only on the chooser.
10. **Payment timing against On Recruit steals.** Cal [131]: unclear whether the steal lands before or after paying, which decided his silver. Fix: say the order on the payment prompt.
11. **"Pass (recruit nothing)" also labels declining an On Use ability** (Cal's seven Purifiers declines, Ava [102]). It did not mislead players but makes the record read as skipped recruits.

---

## H. Patterns in the game itself that no player commented on

1. **Round III decided everything.** The leader after round II (Ava, 37) finished last on 43, and the third player (Cal, 28) won by 22. Cal scored 63 in round III, 35 of them from contests. Rounds I and II leads were worth little against round III's +10 prizes and the member takes open in that round.
2. **Silver's middle ring was never used.** Flaunt (+1 of each other color per 3 silver you hold) and Buyout (recruit a rival's member, paying them its cost in silver) were open in rounds II and III and nobody took either, in 36 placements; both pay for holding silver, which the Fewest silver contest punishes. Buyout was the only member take nobody used, though Cal held 10 silver after Largesse.
3. **Taking a member counts as recruiting it.** Shoplifter fired on Body Snatchers' swap, Swindle and Mutineers (3 of its 11 triggers), and Ava's Red Cloak paid on Promote, Demote and Poach. Poach also set off Snitch, so the game treats it as both a recruit and a steal. This follows the rulebook's "by your own doing", but no card text tells a player that a swap is a recruit.
4. **Dabblers counted 2 in Red's contest**, whose rim says each card counts 1. Ava's round II Red 3 (Window Shopper plus Dabblers as 2) gave her a +3 share she would not have had at 2. With Assimilators, the Ghost (0 members) counted 1 in Red. A text question for Cory.
5. **The round I pile is very thin.** It ran out twice in round I (after 3 and after 1 discard) and the discard pile was shuffled back each time, so Markdown found an empty pile on both looks ([36], [49]).
6. **Desperado's catch-up fired for the player leading two contests.** "Fewest followers" made Cal's steals take 3 instead of 1 in round II while he held Most resources and was building both member contests, because his score sat in resources, not followers.
7. **Gifted silver is a resource gift, not only "dirt".** Dee gave rivals 39 silver over the game (Party Gifts 9, Largesse 12, Toasts 12, and Ava's Toast 6 more), and each player spent theirs at once on packs or members, Cal on a 9-cost Con Men. The Silver gift spaces paid Dee 28 followers and paid rivals about 1 follower per silver.
8. **Players with notes played the member game and the player without them did not.** All three with the primer built member engines and fought for member contests; Dee, with rules only, dropped members after round I and lost her two biggest chunks to rules the primer spells out (D). One table is not proof, but it suggests the primer changes how agents play, not only how well.
