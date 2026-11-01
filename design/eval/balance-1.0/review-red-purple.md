# Review: Red and Purple (balance-1.0, deck 10)

Reviewer: Claude (senior-designer pass), 2026-11-01. Live cards from `live-board.mjs` on claude/gifted-newton-3lcy3i. Instruments: Normal 4p (800 games), 3p, 2p; Hard 4p (142); Very Hard 4p (42 games, a lead only); choice logs (Hard 146 games, Very Hard); feel probe; 4 expert games (g1 Red+Purple, g3 Red, g4 Purple; 8 players saw each color). "Lift" = owner win share minus expected for member count. Anything marked *(guess)* is mine, not measured.

## Before anything else: the swap bug, measured

I counted every swap the bots actually chose on Promote, Demote and Panel (raw choice files, card costs from the content files):

- Hard: 497 swaps. Only 208 (42%) fit the printed text (your member for one within 2 of its cost). 167 took a rival's member costing 3 to 11 more than the one given, 37 were rival-to-rival, 36 sent a rival's member to the shop, 49 were your own member outside the window.
- Very Hard: 187 swaps, 66 (35%) fit the text.
- Two more holes the brief didn't list: **Promote has no floor** (code: `cost(b) <= cost(a)+2`, so "up to 2 more" also allows any amount less), and **Panel** ("On Recruit: promote or demote another of your members.") calls the same list, so it too reaches rivals' members, against its own words "your members".
- Red findings it touches: Promote, Demote, Panel, Recruiter, Deprogrammers, Loyalists (protection worth more when swaps are wild), and partly Mob and Volunteer (fat bodies get grabbed; Volunteer is the bait). Red's main-color lift (Normal +8, Hard +16, Very Hard 0) is not readable until a rerun.

---

# RED, the recruiter ("I get members without spending my recruit, and I trade up")

Deck 10 holds Triplets, Volunteer, Mentor & Protégés, Proselytizers, Mob, Patriarch, Recruit Bonus, Deprogrammers, Panel, Loyalists; Recruiter is the artifact. Host and Headhunter are 15-deck only.

## Spaces

**Tryout** (I): "Use the On Recruit effect of a shop member; it stays in the shop. +2 red."
- Verdict: KEEP.
- Strategic: real when the shop shows a strong On Recruit (Ringleader, Philanthropists, Grifter), +2 red otherwise. Hard MIXED (chosen 8%, auto 73%), Very Hard MIXED.
- Fun: experts 3.4 / 3.5. "fun to read the shop for it" (g1 Dee); "picking which shop On Recruit to borrow is a real read of the shop" (g3 Ben). Complaint: Grifter through it was a free 6-steal (g3 Ava, Dee).
- Fits: yes (7 of 8; Ben once called it "a Blue-feeling shop trick").
- Evidence: lift Normal +1, Hard 0, Very Hard −2 (flat); experts positive.
- Bot check: survives. The Grifter worry is the table-wide copy-of-steal issue (Echo, Encore, Greatest Hits, Tryout all copying steal On Recruits; 10 of 16 experts named it first in META). That's a coordinator item, not a Tryout number.

**Gather** (I): "+2 red in round I, +3 in round II, +4 in round III. This turn, if you recruit a member, +1 follower (+2 in round II, +3 in round III)."
- Verdict: KEEP.
- Strategic: fuel plus a small kicker; Hard and Very Hard MIXED (chosen 7-8%, thin 24-25%: often a leftover).
- Fun: experts 2.5 / 2.5, "plain red… only took it when nothing else was left" (g3 Dee); one said the round III +3 "made my last pick a real choice" (g3 Cal).
- Fits: yes (8/8).
- Evidence: lift Normal −1, Hard 0, Very Hard −6 (n small). It does its fuel job; low fun is the price of a fuel space Cory picked on Oct 31.
- Bot check: survives.

**Walk-In** (I): "Recruit the top member of the deck. Each rival +1 red. +1 red."
- Verdict: KEEP.
- Strategic: Hard AUTO-PICK (auto 78%), Very Hard AUTO-PICK. It's a free member; the decision is "is the top card good". Probe: 3.8 / 5.1 / 5.6 per placement, touches every rival (the red gift).
- Fun: experts 3.9 / 3.8, the best-liked Red space. "a free 4-member card… is the best feeling on the wheel when the top card is good" (g1 Ben). Swing complaints all trace to Con Men flipped free and then copied 3 times.
- Fits: yes (7/8).
- Evidence: lift Normal 0, Hard +5, Very Hard −6: flat.
- Bot check: survives.

**Promote** (II): "Swap a member with a shop or rival member costing up to 2 more. +3 red."
- Verdict: KEEP. Fix the bug first (your own member only, and a floor on Promote), then re-read. Words: say "one of your members". Word that line through the card-words step; the table argued over "'up to 2 more' on a rival's card reads backwards" (g3 Cal, Dee).
- Strategic: Hard AUTO-PICK (chosen 28%), Very Hard AUTO-PICK (contender 59%). Expert strategic 3.9, and Cal called the swaps "the most interesting decisions on the wheel".
- Fun: 2.6 overall: high for the taker (Cal 5), 2 for everyone it hit. In g1 every player called the rival-to-rival list a bug.
- Fits: 4 yes / 4 unsure. The unsure ones are about reaching into a rival's cult ("theft wearing a red hat", g3 Ben).
- Evidence: Very Hard +19 STRONG (winner 0.94 uses vs 0.40) and Normal +2, but Hard −5. All of it is on the bugged list.
- Bot check: can't be read yet. Up to 65% of chosen swaps were illegal by the text.

**Demote** (II): "Swap a member with a shop or rival member costing up to 2 less. +3 red."
- Verdict: KEEP (after the bug fix).
- Strategic: Hard and Very Hard AUTO-PICK. Legit uses: dump a spent once-per-game member, or push Old Maid into a rival.
- Fun: experts 4.1 strategic / 2.6 fun. "Demote plus Old Maid into a rival's cult is a −8 swing for one middle-ring space" (g3 Dee, Cal). That move is legal as printed.
- Fits: 5 yes / 3 unsure.
- Evidence: lift Normal −2, Hard −1, Very Hard −9: weak, not strong, even with the bug.
- Bot check: bug-touched. The Old Maid dump survives better play. Taking a member away before round III is past the "mild sting" Cory set, but it's Old Maid's problem (grey), so it goes to the coordinator, not a Demote change.

**Recruit a Member** (III): "Recruit a member in the shop costing 8 or less. +1 red."
- Verdict: KEEP (watch).
- Strategic: Hard AUTO-PICK, Very Hard MIXED. Probe: 4.8 per placement in round III, against Largesse 11, Greatest Hits 8.5, Poach 5.9. That's light for Red's round III burst. *(guess)* Because buy-10 makes any 8-cost body worth about what 10 resources are, the limit it breaks barely matters.
- Fun: experts 3.1 / 3.4, "fine center space… nobody fought over it" (g3 Dee). Cal's Philanthropists through it "decided silver".
- Fits: yes (8/8).
- Evidence: Normal −5 WEAK, Hard −1, Very Hard +14 (±13), 3p −8. The levels disagree, so no NUMBER yet. If a later run agrees, raise the cap (10 or less) before anything else.
- Bot check: Normal undervalues round III bursts (brief confound), so the WEAK is soft.

## Members

**Triplets** [1 red + 2 any, worth 3, counts as 3]: "Worth 3 followers."
- Verdict: KEEP.
- Strategic: Hard MIXED, Very Hard MIXED (close 8%). It's a body that feeds Mob and Patriarch counts.
- Fun: experts 2 / 3, "just correct, never a decision" (g1 Dee).
- Fits: yes, as Red bodies. Cory dislikes plain bodies; this one is his call.
- Evidence: lift Normal −2, Hard −5, 2p −15 WEAK, 3p +2: mixed.
- Bot check: survives.

**Volunteer** [1 any, worth 1]: "Worth 1 follower."
- Verdict: KEEP.
- Strategic: Hard AUTO-PICK, Very Hard REAL CHOICE (close 13%). It's Promote bait.
- Fun: experts 1 / 2, "a 1-for-1 placeholder that later became the Promote bait" (g1 Ava).
- Fits: yes (cheap bodies to trade up).
- Evidence: Normal −3, Hard −3, 3p −12 WEAK. It's the cheapest buy, so it lands in poorer seats. Not a design flaw.
- Bot check: after the fix its Promote window shrinks to members costing 1 to 3; re-read it then.

**Mentor & Protégés** [5 red + 4 any, worth 3, counts as 3]: "On Recruit: recruit the cheapest member in the shop."
- Verdict: KEEP.
- Strategic: Hard AUTO-PICK (chosen 11%), Very Hard MIXED (close 6%).
- Fun: experts 3 / 3.5. One player wasn't sure the second recruit is free (g3 Cal). It is free, but the card doesn't say so: a card-words item.
- Fits: yes (free recruits are Red's fantasy).
- Evidence: Normal +4 (141 owners), Hard +10 (22, too few), 3p +2, 2p −15 (25, too few).
- Bot check: survives.

**Proselytizers** [3 red + 5 any, worth 2, counts as 2]: "Whenever you recruit, +1 follower."
- Verdict: KEEP (the price just moved to 8 on Nov 1).
- Strategic: Hard MIXED but near-dead (contender 13%, chosen 2%), Very Hard MIXED (5%).
- Fun: paper only.
- Fits: yes.
- Evidence: Normal +7 (118 owners, 6.6 followers for 8 when owned), Hard and 2p too few. Normal says good when owned; Hard says rarely bought. They point opposite ways, so no NUMBER.
- Bot check: Hard's short rollouts undervalue a whole-game trickle *(guess)*. Read again after one more run.

**Mob** [7 red + 5 any, worth 5, counts as 5]: "Game End: +1 follower per red member you have."
- Verdict: NUMBER. Back to counting as 4 members (Cory's Oct 30 call, "lets just make it fewer members"; the Oct 31 member = follower rule quietly pushed it back to 5). If it still reads DOMINANT, price 13.
- Strategic: Hard AUTO-PICK (chosen 38%), Very Hard AUTO-PICK (33%). The card counts its own 5 toward itself, so its floor is 10 followers for 12.
- Fun: experts 2.3 / 2.0. None bought it: "12 resources would have cost me the Red prize" (g3 Cal). That's real tension: a good table weighs it against the red contest.
- Fits: yes.
- Evidence: lens DOMINANT. Normal +15 (200 owners, bought in 77% of games), Hard +21 (29 owners, just under the bar), 3p +17. The bots point the same way at two levels.
- Played turn: round III, 4 players. Ava holds 12 (7 red) and owns Triplets (3), Panel (3), Volunteer (1) and Deprogrammers (4), which is 11 red. Mob scores 5 + 5 (itself) + 11 = 21 followers for 12. The best other buy is followers ×10 = 10 for 10, plus 2 kept. Mob is +9 over it, minus the red contest she gives up (+10 if she was leading). At counts 4 and price 13: 4 + 4 + 11 = 19 for 13. With a thin red cult (Triplets only): 4 + 4 + 3 = 11 for 13, worse than buy-10. That's the right shape: deep red pays, a splash doesn't.
- Bot check: partly survives. Better players skip it when they're defending the red contest, which pulls the lift down. But the ceiling (21 for 12) is on paper.

**Patriarch** [3 red + 3 any, worth 1]: "Game End: +1 follower per 2 members you have."
- Verdict: NUMBER, price 6 to 8. Flag: scoring on member count is a shape Cory has ruled out for new cards (verdicts #9). It's live, so I'm pricing it, not re-pitching it.
- Strategic: Hard AUTO-PICK (chosen 19%), Very Hard AUTO-PICK (19%). Almost always bought: "nothing to decide".
- Fun: experts 4 / 4 (one player): "Worth 6 for 6 with 10 members… a good late buy for a wide cult" (g1 Ben).
- Fits: yes (wide cult).
- Evidence: lens DOMINANT. Normal +10 (261 owners, in 90% of games), Hard +4, 3p +19, 2p +10, all the same way. Since Oct 31 each multi-member body counts at its worth (Triplets 3, Shift Crew 4), so the average cult is now 12.8 members.
- Played turn: round II, 4 players. Ben has 8 members and will end around 14. Patriarch scores 1 + 7 = 8 followers for 6. The best other buy is 5 followers for 5 (plus 1 kept). Patriarch is +3 over that, with no tension. At 8 it's even with buying followers for an average cult and +3 for a 20-member cult, which is the cult it should reward.
- Bot check: survives. Experts and bots agree it's a no-brainer late buy.

**Recruit Bonus** [1 red + 2 any, worth 2, counts as 2]: "Your On Recruits also give +1 of that member's color."
- Verdict: KEEP.
- Strategic: Hard MIXED (close 8%), Very Hard REAL CHOICE (close 11%).
- Fun: paper only.
- Fits: yes, loosely.
- Evidence: Normal −4, Hard +2, 3p −4, 2p −8. Mildly weak, but it's a cheap 2-body, and the Very Hard choice log calls it a real choice.
- Bot check: survives.

**Deprogrammers** [1 red + 2 any, worth 4, counts as 4]: "Whenever you take a rival's member out of their cult, they lose 1 follower."
- Verdict: KEEP.
- Strategic: Hard MIXED (contender 72%, chosen 31%), Very Hard MIXED (82% / 35%). It's bought as the cheapest 4-body and then swapped around ("owned" 110-122%: it changes hands).
- Fun: experts 4 / 3.5, "a 4-member body that changed hands three times; its −1 follower sting adds insult to the swap" (g1 Ava); "felt right for Red" (g1 Cal).
- Fits: yes.
- Evidence: Normal −1, Hard +2, 3p −5, 2p +1: even.
- Bot check: its trigger counts are bug-inflated; even is fine.

**Panel** [4 red + 3 any, worth 3, counts as 3]: "On Recruit: promote or demote another of your members."
- Verdict: KEEP. The code bug matters here: Panel's list reaches rivals' members, against "your members".
- Strategic: Hard AUTO-PICK (96% auto, 74% solo: Normal's call), Very Hard AUTO-PICK.
- Fun: paper only.
- Fits: yes.
- Evidence: Normal +1, Hard −11 (43 owners), 3p −3, 2p +6. No two levels agree.
- Bot check: re-read after the fix.

**Loyalists** [2 red + 3 any, worth 3, counts as 3]: "Your other members can't be swapped."
- Verdict: KEEP.
- Strategic: Hard AUTO-PICK, Very Hard AUTO-PICK (contender 71%).
- Fun: experts 3.3 / 2.5. All 4 g3 players named the hole: "protects everything but itself" (that's Cory's Oct 29 call, so it's by design).
- Fits: half. It's Red's own wall against Red ("a Red player hates Loyalists"), sitting in Red's deck.
- Evidence: Normal −1, Hard +7, 3p −6, 2p +9: noise.
- Bot check: its value rises with the bug, so re-read after the fix.

**Host** [2 red + 3 any, worth 1]: "On Recruit: +1 red per 2 members you have. Round Start: +1 red per 2 members you have."
- 15-deck only. No evidence this round; no verdict.

**Headhunter** [3 red + 3 any, worth 1]: "On Use, once per game: swap a rival's member with a shop member that costs as much or more."
- 15-deck only. No evidence this round. Note: it uses the same swap list in "rival" mode, which looks right in code.

## Artifact

**Recruiter**: "Whenever a member leaves a rival's cult, +2 red."
- Verdict: KEEP. Hold any number until the swap fix and a rerun. Cory still owes the text-vs-behavior call: today it pays only when a member moves cult to cult, never cult to shop. Both g3 experts were surprised by that ("it didn't even fire when Ava's own Demote took a member out of my cult").
- Strategic: experts 3.2. In g1 (bug on) "the artifact I'd least want to face"; in g3 "only pays on swaps and steals you mostly don't control".
- Fun: 2.2, split by who held it.
- Fits: 3 yes / 3 unsure.
- Evidence: Normal +6, Hard +21 (56), Very Hard +6 (16), 3p +10, 2p +6. The Hard +21 rides on 240 out-of-text swaps that moved rivals' members.
- Bot check: doesn't survive the fix as measured. Re-read it.

**Red in a paragraph.** Red plays like its fantasy in the swap spaces: an expert called them "the most interesting decisions on the wheel". Free recruits (Walk-In, Tryout, Mentor) are its best-liked cards. What carries the numbers today is the game-end pair, Mob and Patriarch: both DOMINANT, both counting members that the Oct 31 member = follower rule inflated. The weakest link is Recruit a Member as Red's round III burst (4.8 per placement against an 8-15 band), though bots split on it. The single change that would help Red most is fixing Promote, Demote and Panel to swap only your own member inside the printed window (Promote needs a floor too), then rerunning before any Red number moves. Mob back to counting as 4 is the one number safe to make now.

---

# PURPLE, the clock ("I act when it matters most")

Deck 10 holds Courier, Clockmakers, Night Owls, Early Birds, Bouncers, Gossip, Timekeepers, Closer, Hot Streak, Shift Crew; Pocket Watch is the artifact. Go-Getter, Late Risers and Extra Shift are 15-deck only.

**One pattern explains most of Purple** *(my reading, backed below)*. Contests pay at round end, and in round III most players cash out to zero. So the last placements decide contests, and going later is worth more than going earlier. Last Call (go last) is the strongest space in the game. Every card that moves you earlier (Right Away, Crunch Time, Courier, Early Birds' self-block) is weak. A rival's skip moves them later, which is often a gift. That's why Hold Up and Bouncers barely sting.

## Spaces

**Sleep In** (I): "+4 purple (+5 in round II, +6 in round III). Skip your next turn."
- Verdict: KEEP.
- Strategic: Hard AUTO-PICK, Very Hard MIXED. Free on your last minion or a snake double ("really a 4-6 purple space with no cost for whoever places last", g4 Dee). The skip also moves you later, which helps.
- Fun: experts 3.1 / 3.1. "the skip is a real tool to move your last minion to the end of the round" (g1 Dee).
- Fits: yes (8/8).
- Evidence: Normal −1, Hard −5, Very Hard +1. Hard winners use it less (0.49 vs 0.86).
- Bot check: survives.

**Hold Up** (I): "+2 purple (+3 in round II, +4 in round III). The next turn is skipped."
- Verdict: KEEP.
- Strategic: Hard MIXED, Very Hard MIXED (thin 28-30%). "skipping Dee pushed her turn and won me the purple tie" (g1 Ava); "the skip on a rival rarely mattered" (g4 Cal).
- Fun: experts 2.9 / 2.6.
- Fits: yes.
- Evidence: Normal −1, Hard +6, Very Hard +4.
- Bot check: survives. Feeds Pocket Watch and Gossip as designed.

**Right Away** (I): "+1 purple (+2 in round II, +3 in round III). Your next turn comes right after this one."
- Verdict: NUMBER: +2/+3/+4 (Hold Up's numbers).
- Strategic: Hard FILLER (chosen 3%, thin 66%), Very Hard FILLER (3%). Probe: round I 1.0 per placement, dead 100% (taken as a last minion, it does nothing).
- Fun: experts 1.4 / 1.4, "nobody wanted it" (g1 ×4, g4 ×2).
- Fits: yes.
- Evidence: Hard and Very Hard choice logs the same way, plus experts and the probe. Lift Normal −1, Hard +3, Very Hard +7: a filler that does no harm.
- Played turn: round II, 4 players, Dee in seat 2. Right Away gives +2 purple, and her next turn moves up. The spaces she'd chain into are still open: every color has a spare in round II. Against Hold Up: +3 purple, and the next player moves to the end. Right Away is 1 purple behind and gives nothing a rival feels. At +3 it's level on purple, and its value is the tempo.
- Bot check: survives (experts agree). A rescue clause for the last minion is ruled out; the number is the lever.

**Last Call** (II): "+1 purple. +1 follower and +1 purple per minion you have left. Skip your turns until everyone else is out of minions."
- Verdict: REWORK, round III only. Keep the shape Cory loved ("YES now you're cooking"): position traded for followers by a visible count. Direction *(guess)*: in round III the block is too long. Cap it, for example skip only your next two turns (g1 Cal's idea), or give round III its own purple closer and keep Last Call to round II. Cory changed its numbers this morning; the numbers aren't the issue.
- Strategic: Hard AUTO-PICK + MISJUDGED, Very Hard AUTO-PICK (contender 56%). Winners take it about 2x as often as others (Hard 0.79 vs 0.35, Very Hard 0.83 vs 0.36).
- Fun: experts 5.0 / 4.3, the top-rated space in the game. Seven of 8 called round III "too strong", e.g. "four placements after everyone's out wins every cheap contest" (g1 Ava).
- Fits: yes (8/8).
- Evidence: STRONG at every level: Normal +6, Hard +16, Very Hard +14, 3p +9. Two expert games were decided by it (g1, g4). Three independent instruments.
- Played turn (g1, round III, 4 players): Ava places Last Call first with 4 minions left: +5 purple, +4 followers. That alone is about 9 in raw gain, against Recruit a Member (a free 8-cost member, about 4.8 per probe) or Largesse (about 11). Then her 4 minions place after all three rivals are out. She took all four +10 contests by one each (6-5 red, 5-3 purple, 4-3 silver, 3-2 yellow): +40, against a leader who "had no answer because his turns were already spent". The space is worth about 49, against 11 for the next best.
- Bot check: survives. Bots at two levels, experts unanimous, and the mechanism is visible on paper. Coordinator note: the root is round III's +10 contests combined with buy-10 cashing everyone out (named in 6 META notes), so a contest-side change might fix Last Call without touching it.

**Crunch Time** (II): "+2 purple. Your next two turns come right after this one."
- Verdict: NUMBER: +2 to +4 purple (+5 if still FILLER). Cory loves the card ("Crunch Time is great"); the payout is the problem, not the idea.
- Strategic: Hard DEAD (contender 9%, chosen 3%), Very Hard FILLER (chosen 2%, thin 67%). Probe: 2.1-2.3 per placement, the lowest round II space on the wheel.
- Fun: experts 1.0 / 1.0. Nobody took it in either Purple game: "+2 purple and a double turn never beat anything else" (g4 Cal).
- Fits: yes.
- Evidence: Hard and Very Hard choice logs the same way, plus experts 1.0 and the probe. (Hard lift +6 comes from leftover takes.)
- Played turn: round II, 4 players, Ben in seat 2. Crunch Time gives +2 purple, and he places his next two minions now (say Promote, +3 red, and Party Gifts). Those two spaces would mostly still be open on his normal turns, and he's now out of minions early, so rivals get the last word on contests. Against Sleep In: +5 purple and a self-skip that moves him later, which is good. Crunch Time is 3 purple and position behind. At +4 the rush costs 1 purple against Sleep In and feeds Courier and Hot Streak.
- Bot check: survives (experts never took it).

**Crowd In** (III): "+3 purple. +1 minion this round."
- Verdict: KEEP.
- Strategic: Hard AUTO-PICK + MISJUDGED, Very Hard MIXED (close 7%). An extra recruit in round III is about a buy-10 (g1 Cal).
- Fun: experts 3.1 / 3.0. In g4 three players took it as Last Call's counter and were let down: the extra minion lands before the Last Call block, not after.
- Fits: yes.
- Evidence: Normal +3, Hard +2, Very Hard −12 (n small).
- Bot check: survives. If Last Call's round III block is capped, the letdown goes away by itself.

## Members

**Courier** [3 purple + 3 any, worth 1]: "Whenever you take two turns in a row, +1 of each other color."
- Verdict: NUMBER: price 6 to 4.
- Strategic: Hard DEAD (contender 9%, chosen 2%), Very Hard MIXED (chosen 7%, close 1%). It pays on Purple's weakest spaces.
- Fun: experts 4 / 4 (one player). It fired about 4 times off a Last Call block "for 12 resources, but those mostly went to waste" (g4 Ben).
- Fits: unsure. It pays other colors (Ben: "reads more blue/yellow").
- Evidence: Hard and Very Hard choice logs the same way. Normal: 23 owners (too few), +2.
- Played turn: round II, 4 players, colors Purple, Red, Silver, Yellow. Ben owns Courier and takes Crunch Time: 3 turns in a row = 2 pairs = +6 resources, plus snake turnarounds (about 1 a round). Over two rounds that's about 10-12 resources for 6, but they arrive mid-round and many are stranded, as in g4. Against buy-5 followers for 5 now: about even at 6. At 4, it's the 2x return the economy aims for.
- Bot check: survives. Price before rework; its fate follows Crunch Time and Right Away.

**Clockmakers** [2 purple + 3 any, worth 2, counts as 2]: "Round Start: take your first two turns in a row."
- Verdict: KEEP.
- Strategic: Hard MIXED (chosen 7%), Very Hard MIXED (contender 64%, close 6%). Strong with Line Cutters (g4 Dee 4/4).
- Fun: experts 3.0 avg.
- Fits: yes.
- Evidence: Normal −1 (177 owners), Hard +16 (25, too few), 3p −1, 2p +9. Nothing consistent.
- Bot check: survives.

**Night Owls** [6 purple + 2 any, worth 2, counts as 2]: "Once per round: after you place your last minion, +1 minion, placed right away."
- Verdict: KEEP.
- Strategic: Hard MIXED (contender 11%, chosen 4%), Very Hard 2%. Rarely bought.
- Fun: experts 3 / 3, "8 cost for one more placement barely breaks even unless you're short of turns" (g1 Ava). In g4, a rival buried it because with Last Call it's "a fifth unanswered placement".
- Fits: yes.
- Evidence: Normal +7 (46 owners: good when owned), Hard too few. Bought rarely but wins when owned, so it isn't a price signal at two levels.
- Bot check: it may get stronger if Last Call's round III block stays.

**Early Birds** [2 purple + 1 any, worth 2, counts as 2]: "Your turns can't be skipped."
- Verdict: REWORK. Direction: it shouldn't switch off its owner's own Last Call. Either have it ignore only rivals' skips, or let the owner choose to ignore a skip. In the choice version the owner always comes out ahead, so it's an upgrade, not a fake choice.
- Strategic: Hard AUTO-PICK (cheap body), Very Hard REAL CHOICE (close 11%). Code confirms it blocks your own Sleep In skip (a free +4-6 purple) and your own Last Call block. Blocking rivals' skips is worth little: a skip moves you later, which is often good.
- Fun: experts 2 / 2, "the skip protection barely matters" (g1 Ben).
- Fits: yes in theme. In play it fights Purple's best card.
- Evidence: lens TRAP. Normal −9 WEAK, Hard −15 WEAK, 2p −15 WEAK (3p +2). Experts 2/2. That's bots at two levels plus experts.
- Played turn: round III, 4 players. Ava (Purple) owns Early Birds and takes Last Call with 4 minions left: +5 purple, +4 followers, but she doesn't go last; she keeps her turns in snake order. A non-owner on the same space gets the closing run worth up to +40 in contests (g1). With Sleep In instead: +6 purple and no skip, against a non-owner's +6 and a skip that would have moved her later. That's about a wash.
- Bot check: half survives. A good player wouldn't pair it with Last Call (that part is a bot trap), but then the card is a 2-body whose ability rarely matters (experts). Weak either way.

**Bouncers** [1 purple + 3 any, worth 2, counts as 2]: "On Recruit: the next two rivals' turns are skipped."
- Verdict: NUMBER: worth 2 to 3 (Cory's lean: add followers before cutting price).
- Strategic: Hard AUTO-PICK (chosen 12%), Very Hard MIXED (16%).
- Fun: paper only.
- Fits: yes.
- Evidence: Normal −4, Hard −5, 3p −9, 2p −3: bots at two levels the same way.
- Played turn: round II, 4 players. Cal buys Bouncers for 4: the next two rivals move to the end of the round. That gives them the later placements, the contest word, and Pocket Watch or Gossip pings for whoever owns those. Against buying 4 followers for 4: Bouncers is 2 followers plus a sting that is near zero, or a gift. Worth 3 gets it to 3 for 4 plus the sting.
- Bot check: survives.

**Gossip** [3 purple + 3 any, worth 1]: "Whenever a player's turn is skipped, +1 follower."
- Verdict: NUMBER: price 6 to 4.
- Strategic: Hard DEAD (contender 6%), Very Hard MIXED (chosen 3%).
- Fun: experts 2 / 2 (2 players): "at 6 cost it only breaks even" (g4 Ben); "skips didn't come often enough to pay 6" (g1 Ava).
- Fits: yes.
- Evidence: Hard and Very Hard choice logs the same way. Normal: 23 owners (too few), but when owned 6.7 followers for 6.
- Played turn: round II, 4 players. Ava buys Gossip for 6. Skips per round: Hold Up about 1, Sleep In about 1, plus a Last Call block of 2-4. So 6.7 followers over the rest of the game, against buy-5 plus 1 kept = 5 now. That's +1.7 over buying followers for a card that needs the table's help. At 4 it's about 1.7x its cost.
- Bot check: survives (experts weighed it and passed, same as the bots).

**Timekeepers** [1 purple + 3 any, worth 1]: "Game end: +1 follower per purple member you have."
- Verdict: KEEP.
- Strategic: Hard AUTO-PICK (chosen 16%), Very Hard MIXED.
- Fun: paper only.
- Fits: yes (Cory's go-deep card).
- Evidence: Normal +1, Hard −5, 3p +7, 2p −2: noise. Shift Crew counting as 4 purple members feeds it.
- Bot check: survives.

**Closer** [2 purple + 3 any, worth 1]: "When you place the last minion of the round: +4 purple."
- Verdict: KEEP.
- Strategic: Hard MIXED (chosen 4%), Very Hard 2%. It needs the last seat, which Last Call or a snake end provides.
- Fun: experts 4 / 4 and 3 / 3: "won my round III purple" (g1 Ava).
- Fits: yes, exactly the clock fantasy.
- Evidence: Normal −3 ±5 (63 owners), Hard too few. Normal misjudges round-end timing cards (brief confound).
- Bot check: likely undervalued by bots; experts liked it. Revisit only if Last Call changes.

**Hot Streak** [2 purple + 3 any, worth 1]: "On Use, once per game: +3 followers per turn in a row you've taken just before this one."
- Verdict: KEEP (Cory: "I like hot streak").
- Strategic: Hard MIXED (chosen 4%), Very Hard MIXED. Its use is DEAD at both levels: the lookahead never even considered using it (contender 0%). That's a bot blind spot, not the card.
- Fun: in g4 a rival buried it as "made for Ben's four-in-a-row Last Call finish (+9 or more)".
- Fits: yes.
- Evidence: Normal +4 (65 owners, 4.0 followers for 5). Hard too few.
- Bot check: doesn't apply; bots never use it. Coordinator: a bot fix is needed before any Hot Streak number means anything.

**Shift Crew** [2 purple + 2 any, worth 4, counts as 4]: "Worth 4 followers."
- Verdict: KEEP (Cory's Nov 1 call).
- Strategic: Hard AUTO-PICK, Very Hard REAL CHOICE (close 12%).
- Fun: experts 2.5 / 3, "4 for 4 is just good; never a dilemma" (g4 Cal).
- Fits: no colour identity (a body).
- Evidence: lens SLEEPER. Normal +7 STRONG (216 owners), Hard −1, 3p +3, 2p +3. The levels disagree.
- Bot check: Normal's +7 may be Timekeepers synergy *(guess)*.

**Go-Getter** [4 purple + 3 any, worth 1]: "On Use, once per game: +1 minion, placed right after this turn."
**Late Risers** [4 purple + 3 any, worth 2, counts as 2]: "Round Start: if you have the fewest followers (ties count), +1 minion, placed before anyone else."
**Extra Shift** [5 purple + 4 any, worth 1]: "On Recruit: +1 minion this round."
- All three are 15-deck only. No evidence this round; no verdict.

## Artifact

**Pocket Watch**: "Whenever a player's turn is skipped, +1 purple."
- Verdict: KEEP (Cory kept it Oct 30).
- Strategic: experts 3.0: "quietly paid 6-7 purple… better than it reads" (g1 Ava); "about 8 purple… mostly padded a lead" (g4 Ben).
- Fun: experts 3.3.
- Fits: yes.
- Evidence: Normal +4, Hard +1, Very Hard −10 (17, too few), 3p +13, 2p +14. Stronger at small tables, as a flat drip would be.
- Bot check: survives. Watch it at 2-3 players.

**Purple in a paragraph.** Purple plays its fantasy only at the end of the round. "Act when it matters most" turns out to mean "act last", and Last Call carries the whole color: STRONG at every bot level, rated 5.0 by every expert, and the deciding move in two of the expert games. Every card that moves you earlier (Right Away, Crunch Time, Courier) is filler or dead, and a skip on a rival is often a gift, so Hold Up and Bouncers barely sting. The weakest links are Crunch Time (DEAD at Hard, 1.0 from experts) and Early Birds (TRAP, and it switches off its owner's Last Call). Purple's main-color lift is still about −2 to −4, because its one strong card is a space anyone can take. The single change that would help Purple most is capping Last Call's round III block. The next is paying Crunch Time and Right Away enough that rushing is a real choice.

---

## For the coordinator (outside these two colors or not a design call)
1. Engine: Promote, Demote and Panel swap only your own member, inside the printed window. Promote also needs its missing floor. Rerun Red after.
2. Recruiter: text vs behavior (pays cult to cult only). Cory's call, already routed.
3. Bots never use Hot Streak (member-use DEAD at both levels).
4. Copied steal On Recruits (Con Men, Grifter through Walk-In, Tryout, Echo, Encore): 10 of 16 expert META notes name it first.
5. Round III contests (+10) against buy-10 cash-outs make the last seat decisive. This is upstream of Last Call.
6. Old Maid pushed into a rival by Demote (a −8 swing in round II) is past Cory's "mild sting before round III".
