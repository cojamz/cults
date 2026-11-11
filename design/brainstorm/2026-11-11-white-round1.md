# Brainstorm: White, round I (Allowance's slot)

Date: 2026-11-11
Asked by Cory: "in the meantime while thread works on silver, determine which yellow and white actions need replacemetns, and come up with ideas for them"
Skill read: bash .claude/hooks/brainstorm-read.sh at 2026-11-11 12:40am Eastern

## Which Yellow and White spaces need replacing (Claude's read, from the live board and decisions.md)

White (contest: Fewest members, 0 counts; Cory: "you use stuff and then you get rid of it", "white needs a bigger white gain in the begining", "followers scaled to the recruited member's cost are White's"):
- I Allowance "+3 white in round I, +4 in round II, +5 in round III. If you recruit a member this turn: +1 follower in round I, +2 in round II, +3 in round III." REPLACE: its follower part depends on recruiting a member that turn (round I rule, Nov 10), pays for growing against Fewest members, and makes White's second recruit-paying round I space beside Splurge (Cory Nov 9: "magenta white and red all have an action that do this. Doesnt make sense").
- I Splurge: keep (Cory Nov 10 10:44am: cost-scaled followers are White's). Flag: it too pays only on a member recruit that turn.
- I Exchange: keep (Cory Oct 22 "I like 1 actually"; the round I White space that pays with no recruit).
- II Farewell, II Estate Sale: keep (Cory Nov 7: Estate Sale "stays as live"; both "maybe they're good").
- III Cash In: keep (Heiresses combo protected, Nov 4).

Yellow (contest: Most member colors; Cory: "rewards going broad… translate currencies"):
- I Harvest (his fuel call), I Survey (his design, Nov 5), II Melting Pot (kept Nov 7), III Makeover ("i like makeover as is"): keep.
- I New Blood "+2 yellow. If you recruit a member this turn in a color none of your members have: +2 yellow in round I, +3 in round II, +4 in round III." REPLACE: the bonus depends on recruiting that turn (round I rule).
- II Housewarming "+2 yellow. Recruit a free shop member costing up to 5, in a color none of your members have." REPLACE: Cory Nov 9, "housewarming costing up to 5 is terrible. We really need to rethink so many actions".

Real numbers (6 Normal-bot games, deck 10, White and Yellow plus two other colors each; scratchpad measure.mjs): end of round I a player holds 5 to 15 followers, 2 to 11 resources and 0 to 4 members (counting "counts as"); end of round II 14 to 37 followers, White held 0 to 10; final 48 to 95, and the small White cults that won held 3 or 4 members (76 followers each) while rivals held 8 to 14.

Frame: White round I sits beside Splurge ("+2 white. If you recruit a member this turn: +1 follower for every 2 resources you pay (every 1 in round II).") and Exchange ("+2 white. Then turn up to 1 resource (2 in round II, 3 in round III) into 2 followers each."). It is White's fuel slot (Harvest, Sleep In, Golden Years are the others' fuel). Round III builds toward Cash In ("Turn all your white into followers. +1 white."). Strength band round I: 2 to 4 resources. Gap the play-through shows: nothing on White's wheel pays you for staying small while the others grow, which is what its contest asks for; two of three round I spaces pay for growing.

## Idea: Modest Means

1. Printed text: "+3 white. +1 white per rival with more members than you." (name and numbers Claude's fill-ins). Cards it touches: Cash In: "Turn all your white into followers. +1 white."; Recluse: "Round End: +2 followers per rival with more members than you."; Catch Up (Magenta): "+2 magenta per rival with more resources than you. +1 magenta."; Splurge and Exchange as above.
2. Played turn: round I, 4 players. Turn 1, nobody has members: +3 white, same as live Allowance's +3 and better than Splurge or Exchange's +2 when you can't recruit. Late round I (real games: two or three rivals have recruited, you have 0): +5 or +6 white, against Harvest "+3 in round I, in colors you choose" (+3). Gain over the best other fuel space: 0 to +3, and the gain grows only when you stayed smaller than the table.
3. Both sides: no choices on the card. The White player's own choice before it: recruit a member now (and lose 1 white per rival you catch up to) or stay small and take more white.
4. Who feels it: rivals who recruit wide (Red, Blue, Yellow, whose contests reward more members or more member colors) feed the White player; reason to block it for whoever is behind a small White cult late in a round. No direct sting.
5. Not refused: White round I refusals checked (pitch-ledger Oct 22 to Nov 5: "+1 white per member (at most 3)", "white equal to the cheapest shop member's cost", "turn resources into white", "+2 followers x round, you can't recruit" all differ: none counts rivals' cults). Same count as Recluse, which Cory loves ("I love this one a lot"); Nov 7 he called Recluse "too overlapping with the competition now", which is the risk to flag. Same shape as Magenta's Catch Up, which he approved Nov 10 ("lets just try it as +2").
6. Judged: one plain count everyone can see (members in each cult), done when taken, a fuel space with the color's flavor (like Harvest's "colors you choose"). Round I real state: most players hold 0 or 1 members, so it pays 3 to 5 most of the round; it never pays less than 3, so it is not dead when nobody has members (Nov 10 rule: the base pays without anyone holding members). Feels powerful when the table has gone wide. Engine: feeds Cash In and Heiresses; with Recluse it is a stay-small plan. Fun: medium-high, a visible reason to keep your cult small.
7. Public and certain: member counts are face up; no pile draws, randomness or hidden cards.
8. Color interactions: none named; the shared moment is rivals recruiting, which every color causes, so it works in any game.
9. Biggest case: round III, the White player holds 3 members, the three rivals hold 8 to 14 (real game 3 and 1 endings): +6 white, then Cash In turns it into 6 followers. Green copying it counts the copier's own rivals: a Green player with 13 members gets +3. Live Allowance in round III paid +5 white and +3 followers on a recruit. Most it ever pays: +6, against a winner's 70 to 110 and a contest's 4/6/10. Under the 10 cutoff.
Verdict: send

## Idea: Pocket Money

1. Printed text: "+3 white. Buy followers now, as well as your recruit this turn." (name and numbers Claude's fill-ins). Cards it touches: Barker (White member): "Each time you recruit a member, you may also recruit followers."; Recruit Twice (Blue): "Recruit a member from the discard pile now. +5 blue."; Exchange: "+2 white. Then turn up to 1 resource (2 in round II, 3 in round III) into 2 followers each."; the follower cards (1, 5 or 10 followers for as many resources).
2. Played turn: round I, 4 players. You hold 3 resources, take +3 white: buy a 5-follower card now with 5 of your 6, and your recruit is still open (1 left, a 1-follower card, or nothing). Most round I players can't afford a member, so in round I it is mainly +3 white, the same as live Allowance's base; against Harvest (+3) the gain is 0 in round I, and it lets you turn leftover resources into followers without giving up the turn's recruit. Round II (real: 10 to 14 resources): buy a 5-follower card and recruit a 6 to 8 cost member on one turn; the best other round II White space, Farewell ("Discard one of your members. Gain its cost in followers. +1 white."), pays a member's cost in followers but costs you the member.
3. Both sides: no choices beyond which follower card to buy.
4. Who feels it: rivals racing for the same shop member lose tempo, since you buy followers and still take that member; reason to block it in rounds II and III, when the recruit is the scarce thing.
5. Not refused: "This turn your follower recruit has no limit" was refused as a misread (follower cards are fixed); this buys one more fixed card at its printed price. White refusals Oct 22 to Nov 5 checked; none is an extra follower buy. Same verb as Barker on a space; Blue owns extra member recruits, this buys only followers, which is White's cash-in.
6. Judged: one plain verb (buy followers) on the follower cards, done when taken, grows on its own as resources grow; round I real state gives +3 white with an extra buy that is often small, so it leans on rounds II and III. Intuitive: yes. Fun: medium, a big turn when you have a pile. Interacts: the shop race. Powerful: an extra recruit in round III. Engine or counter: pairs with Barker, Money Changers ("Whenever you buy followers, +2 white.") and the White Cloak ("Whenever you buy followers, +2 white."). Its color: cashing resources into followers without growing your cult.
7. Public and certain: follower cards are fixed and face up; no pile draws, randomness or hidden cards.
8. Color interactions: none named; it works in any game.
9. Biggest case: round III, you hold 20 resources: buy a 10-follower card now and recruit a 10-cost member. It gives no free followers, only one more buy at full price; with the White Cloak the extra buy pays +2 white. Green copying it gets one extra buy with the copier's own resources. Never more than the resources you already hold, against a winner's 70 to 110.
Verdict: send

## Idea: Low Profile (cut)
1. Printed text: "+2 white in round I, +3 in round II, +4 in round III, doubled if you have the fewest followers (ties count)." (pitched Nov 5, no verdict)
2. Played turn: round I turn 1 everyone ties on followers: +4.
3. Both sides: no choices.
4. Who feels it: nobody; it pays whoever is behind.
5. Not refused: pitched Nov 5, no answer.
6. Judged: a catch-up keyed to followers, not to White's contest; reads as a rescue.
7. Public and certain: yes.
8. Color interactions: none.
9. Biggest case: round III last place +8 white, 8 followers via Cash In.
Verdict: cut (not White's contest; rescue shape)

## Idea: Small Circle (cut)
1. Printed text: "+2 white in round I, +3 in round II, +4 in round III, doubled if you have the fewest members (ties count)."
2. Played turn: round I, everyone has 0 members on turn 1: +4.
3. Both sides: no choices.
4. Who feels it: nobody.
5. Not refused: verdicts.md 30, "No cards built on who leads a contest right now" ("what if it's all ties?").
6. Judged: keyed to the current contest leader.
7. Public and certain: yes.
8. Color interactions: none.
9. Biggest case: round III +8 white.
Verdict: cut (verdicts 30, contest leader)

## Idea: Thrift (cut)
1. Printed text: "+3 white. If you buy followers this turn: +2 white."
2. Played turn: round I, buy 1 follower for 1 resource: +5 white.
3. Both sides: no choices.
4. Who feels it: nobody.
5. Not refused: the White Cloak already reads "Whenever you buy followers, +2 white."
6. Judged: a copy of the cloak.
7. Public and certain: yes.
8. Color interactions: none.
9. Biggest case: +5 white.
Verdict: cut (copies the White Cloak)

## Idea: Clearance (cut)
1. Printed text: "Discard a shop member. Gain white equal to half its cost. +1 white."
2. Played turn: round I, a 6-cost shop member: +4 white.
3. Both sides: no choices; denies a rival the card.
4. Who feels it: whoever wanted that member.
5. Not refused: Blue's discard verb (Test Drive, Out of Style), and the Blue Cloak pays per discard.
6. Judged: Blue's verb on Blue's piece.
7. Public and certain: yes.
8. Color interactions: overlaps Blue instead of meeting it.
9. Biggest case: round III a 12-cost member: +7 white.
Verdict: cut (Blue's verb)

## Idea: Last Laugh (cut)
1. Printed text: "+3 white. Each rival with more members than you gives you 1 resource."
2. Played turn: late round I +3 white and up to 3 resources.
3. Both sides: no choices.
4. Who feels it: wide rivals, a small sting.
5. Not refused: a steal, Magenta's verb.
6. Judged: Magenta's verb.
7. Public and certain: yes.
8. Color interactions: overlaps Magenta.
9. Biggest case: round III 3 white + 3 resources.
Verdict: cut (Magenta's verb)

## Idea: Party Favor (cut)
1. Printed text: "+4 white in round I, +5 in round II, +6 in round III. Each rival +1 white."
2. Played turn: round I +4 white, rivals +3 between them.
3. Both sides: no choices.
4. Who feels it: a small gift to everyone.
5. Not refused: the gift is Silver's verb (Toast).
6. Judged: plain fuel with a gift, small ball.
7. Public and certain: yes.
8. Color interactions: none.
9. Biggest case: +6 white.
Verdict: cut (Silver's Toast shape, small ball)

## Idea: Recluse Space (cut)
1. Printed text: "+3 white. +1 follower per rival with more members than you."
2. Played turn: as Modest Means, paid in followers.
3. Both sides: no choices.
4. Who feels it: as Modest Means.
5. Not refused: the same idea as Modest Means paid differently (verdicts 8, too narrow) and Recluse's own text.
6. Judged: a variation, not a second idea.
7. Public and certain: yes.
8. Color interactions: none.
9. Biggest case: +3 white and +3 followers.
Verdict: cut (same idea as Modest Means)


# Exchange's slot (White round I), Nov 11 10:50am

Asked by Cory: "splurge is good actually, lets keep it. It encourages big buys, and combos with the other actions. I don't like Exchange"
Frame: round I now Modest Means ("+2 white per rival with more members than you. +1 white.") and Splurge ("+2 white. If you recruit a member this turn: +1 follower for every 2 resources you pay (every 1 in round II)."); round II Farewell and Estate Sale pay a discarded member's cost; round III Cash In. White's plan from these: few, big members, rivals wide. Exchange ("+2 white. Then turn up to 1 resource (2 in round II, 3 in round III) into 2 followers each.") is a small converter beside Cash In. Seeds cut this pass: white pays any color this turn (Yellow's translating, and a recruit condition), turn resources into white (refused Oct 22), the old White Exchange "turn up to 2 white into 3 followers" (smaller Cash In), +1 follower per rival with more members (Modest Means' count), give each rival the cheapest member (a 15-resource gift in round I), white per resource held (pile formula).

## Idea: Hand-Me-Down

1. Printed text: "Give a rival the cheapest shop member, for free. Gain followers equal to its cost. +1 white." (name Claude's fill-in; a tie for cheapest is your pick; the rival does not use its On Recruit, as with Swindle). Cards it touches: Modest Means and Splurge as above; Swindle (Magenta): "Steal a rival's member costing up to 7; give them a shop member of your choice in its place. +1 magenta."; Party Gifts (Silver): "Give rivals up to 3 silver from the bank. +2 followers per silver given."; Recluse: "Round End: +2 followers per rival with more members than you."
2. Played turn: round I, 4 players. The cheapest round I shop member costs about 4 or 5 as a player sees it: you give it to a rival and gain 4 or 5 followers and 1 white. Best other White round I space for followers, Splurge, pays nothing without a member recruit; Party Gifts pays up to +6 followers. Gain: about +4 followers, and one rival now has one more member than you, which raises Modest Means by 2 and helps you in Fewest members.
3. Both sides: you choose the rival; the rival has no choice. Your side: give it to the rival a member helps least (not the Most members or Most of one color leader), or to the one you want ahead of you on member count for Modest Means and Recluse.
4. Who feels it: the receiver gets a free member (a gift, plus 1 follower printed on it) but moves away from Fewest members; the other rivals lose the cheapest card in the row. Reason to block: a Blue or Red player who doesn't want to hand White followers.
5. Not refused: pitched Nov 7 as a Silver space "Give a rival a shop member costing up to 5, for free. Gain followers equal to its cost." → "doesn't do anything for the silver competition… white coded for no reason… removing a member for followers is what reads as white". This is that shape on White, with "the cheapest" in place of the cap so it never goes dead and needs no repricing. Not Hand-Me-Downs (Silver, Nov 11, "way too complicated"), which took rivals' members.
6. Judged: one plain verb (give) on the shop row, aimed at a rival, done when taken; round I real state needs no members. Intuitive: yes. Fun: a real choice of whom to grow. Interacts: the receiver's contests (Blue, Red, Yellow) and White's own count. Powerful: 4 to 7 followers. Engine or counter: feeds Modest Means, Recluse and Fewest members; counters a rival racing for one cheap card. Its color: White cashes things into followers and stays small while others grow (Cory: "removing a member for followers is what reads as white").
7. Public and certain: the shop row and its costs are face up; the row refills as after any recruit; no randomness or hidden cards.
8. Color interactions: the shared moment is a member joining a rival's cult, which Red, Magenta, Silver (Buyout) and Blue also cause; names no color.
9. Biggest case: round III, the cheapest of 8 shop members costs about 6 or 7: +7 followers and +1 white; Green copying it gives another rival a member and gains the same. Against a winner's 70 to 110, a contest's 4/6/10 and Party Gifts' +6; under the 10 cutoff.
Verdict: send

## Idea: Pocket Money (Exchange's slot)
Same block as above (Allowance's slot): "+3 white. Buy followers now, as well as your recruit this turn." Round I is mostly the +3 white; from round II it lets you buy followers and a member on one turn, the big-buy turn Cory likes Splurge for. Step 9: round III, a 10-follower card bought with your own 10 resources plus your member recruit; no free followers.
Verdict: send
