# Brainstorm: members to replace or change, the top 5

Date: 2026-11-25
Asked by Cory: "i though the last thing i did before taking a hiatus on this was develop a list of member and action ideas/rankings to figure out which ones need replacing or changing? particularly members"
Coordinator, 7:45pm Eastern Nov 24: start on the top 5 of the ranked list (https://claude.ai/artifact/LPNbuYNb3j8cVjt6DxkopW) without waiting.
Skill read: bash .claude/hooks/brainstorm-read.sh at 2026-11-25 00:50 UTC; SKILL.md, cheatsheet, game-model, design-core, verdicts, card-judging-v2, taste-guide read this thread.

Slots (live text, live-board.mjs --members):
- Dusk Buyer [Blue, 3 blue + 2 any, worth 1] "Round End: +3 blue, then you may recruit." Holders won 43% of 150 Hard-bot games (even 25%); costing 2 more did not slow it (49%). Its strength is a free recruit after every placement, including a 10-follower buy in round III. Cory, Nov 11: "that's okay. We maybe even want to make it out of the discard pile."
- Dabblers [grey, 5 any, worth 2, counts as 2] "Counts as 2 members of every color." Held at a round end in 7 of 9 AI-player games; its holder won or tied Red every time. Cory, Nov 11: 7-8 of 10, "Might be better as a yellow member."
- Stallholder [Blue, 3 blue + 4 any] "Blue members in the shop count as your members when contests are scored." Cory, Nov 11: "i dont love mannequins". Lost a blind A/B Nov 4.
- Day Laborer [Purple, 6 purple + 5 any] "On Recruit: +1 minion this round." Same text as grey Extra Hand [10 any] "On Recruit: +1 minion this round."
- Bandit [Magenta, 2 magenta + 3 any] "On Recruit: steal 3 resources." Cory, Nov 11: 4 of 10, "just weak". A smaller Extortionist "On Recruit and at Round Start: steal 2 resources."

Frames: Blue's contest is Most members; its verbs are the shop and the discard pile (Cory Nov 11: "some of these need to reference the discard pile… that's our thing now"). Magenta's contest is Most resources; verb steal. Purple's contest is Went last; verb turn order. Red's is Most members of one color, Yellow's Most member colors, White's Fewest members. Contests pay 4/6/10. A 4-player winner ends near 70 to 110. Round-end cards happen before contests (Cory, Nov 5: "round ends, contests, members").

## Idea: Dusk Buyer from the discard pile

1. Printed text: "Round End: +3 blue, then you may recruit from the discard pile." (Claude's change of Dusk Buyer, from Cory's Nov 11 words). Cards it touches: Homecomers "On Recruit: +3 blue, then recruit from the discard pile."; Scavengers "Whenever you recruit from the discard pile, +2 followers."; Bring Back "Recruit a member from the discard pile now. +3 blue."
2. Played turn: round III end, 4 players. Today the holder takes +3 blue and buys a 10-follower card with leftovers: about +10 followers. With the change, the same holder can only take a discard-pile member, paying its cost: a 6-cost member worth 1 follower, plus +1 to Blue's Most members count before contests score (Blue's prize is 10 in round III). Gain against today: about 8 followers less in round III; rounds I and II it still adds a member each round end.
3. Both sides: "you may" is the owner's only choice, at round end; with nothing worth buying in the discard pile they pass and keep the 3 blue. Both sides get picked depending on the pile.
4. Who feels it: the player who discarded a good member (White's Bid Farewell "Discard a member for its cost in followers. +1 white.", Executioner) sees it come back to the Dusk Buyer; Blue's contest leader can be passed at the last moment, so rivals watch the discard pile.
5. Not refused: ledger has no Dusk Buyer pitch; Cory's own Nov 11 gist. Near Homecomers in shape (recruit from the discard pile), but Homecomers fires once when recruited, this every round end; different timing, same Blue verb, so a sibling, not a twin.
6. Judged: one clean sentence, Blue's discard-pile identity, a moment at every round end where the late member decides Blue's or Red's contest. Strong but no longer the best card for a follower-only plan. Round I: works with 0 members held (no member-count condition).
7. Public and certain: the discard pile is face up; nothing from the top of the pile.
8. Color interactions: the shared moment is a member landing in the discard pile, which White (discards), Red (Demote to the shop row then cleared) and Blue (Clear Out, Try Out) all cause; with none of them the shop row's end-of-round clear still fills the pile.
9. Biggest case: round III end with Scavengers held and a 10-cost member in the discard pile: +3 blue, the member (worth 1), Scavengers +2, and Blue's 10 if the extra member wins it: about 13 in the best turn, against today's +10 followers plus the same contest swing; across the game about 6 members' worth of resources spent, never a free follower buy. Under today's best case, inside a contest's 10.
Verdict: send

## Idea: Dusk Buyer takes the cheapest castoff

1. Printed text: "Round End: you may recruit the cheapest member in the discard pile, for free." Cards it touches: Plague Bearer "Worth 0 members. Whenever this member joins your cult, −5 followers."
2. Played turn: round II end, the cheapest discard is a 3-cost member: a free member, +1 Blue count. Gain about 3 resources a round.
3. Both sides: "you may" lets them skip Plague Bearer; otherwise always taken.
4. Who feels it: little; cheap castoffs are what nobody wanted.
5. Not refused: rolling seed R1 (Nov 7) was the same text, never reviewed.
6. Judged: smaller than the first idea and drops the +3 blue Blue players buy it for; flat.
7. Public and certain: yes.
8. Color interactions: same discard moment.
9. Biggest case: three free 3-to-5-cost members a game, about 12 resources, plus contest swings; fine size but a flat moment.
Verdict: cut (flat next to the first idea; a free member every round is Red's job)

## Idea: Dabblers counts as 1

1. Printed text: "Counts as a member of every color." (Claude's change; worth 1, counts as 1). Cards it touches: Dyer "Your grey members count as members of your biggest color."; Clan Chief "Round End: +1 follower per member in your biggest group of one color (grey is its own color)."; Hold a Fair "For each color among your members: +1 follower and +1 of that color (grey: 1 of any color)."
2. Played turn: round III end, you hold 4 red, a rival holds 5 red. Today Dabblers adds 2: you win Red alone, 10 followers. Counting 1, you tie at 5 and each take 5. Gain against today: 5 followers less in that contest, and a rival can now pass you by recruiting one more red.
3. Both sides: no choices on the card.
4. Who feels it: the Red and Yellow leaders still feel it as +1, but one recruit answers it, so it stops deciding contests alone.
5. Not refused: a Nov 4 blind test preferred "Counts as 2 wild members" over this text as "quiet"; the problem since is strength (Nov 13 games), and Cory has not judged this version.
6. Judged: clean, plain; a mild member that bends counting. Round I fine.
7. Public and certain: yes.
8. Color interactions: none: a colorless card that counts in every count.
9. Biggest case: round III, one member added to Red's, Blue's and Yellow's counts at once: at most a tie-break in three contests, about 5 + 5 + 5 followers if it flips three ties, against today's +2 in each that won Red every time.
Verdict: send

## Idea: Dabblers moves to Yellow

1. Printed text: Yellow member "Counts as a member of every color." (Cory, Nov 11: "Might be better as a yellow member"; counts as 1). Cards it touches: Yellow's contest Most member colors; Herald "Whenever you recruit a yellow member, +2 wild, +3 followers."; Harlequin "Round End: +1 follower per color among your members."
2. Played turn: as above, plus Herald fires when you recruit it (+2 wild, +3 followers), and it pays its colored part in yellow.
3. Both sides: no choices.
4. Who feels it: Yellow's rivals for Most member colors.
5. Not refused: his own gist.
6. Judged: same card as the grey version but in a color whose contest it serves; slightly better home.
7. Public and certain: yes.
8. Color interactions: none.
9. Biggest case: as above plus Harlequin +1 a round: under 20 across the game.
Verdict: send

## Idea: Gleaner

1. Printed text: Blue member "You may recruit from the discard pile as you would from the shop." (name and text Claude's). Cards it touches: Scavengers "Whenever you recruit from the discard pile, +2 followers."; Bring Back "Recruit a member from the discard pile now. +3 blue."; Bid Farewell "Discard a member for its cost in followers. +1 white."
2. Played turn: round II, 4 players. A rival's Bid Farewell just discarded a 7-cost member. With Gleaner your ordinary recruit can take it, instead of needing Bring Back (which a rival may already hold). Gain: the best member on the table becomes yours to buy without a Blue space; the space is still worth its +3 blue and the recruit.
3. Both sides: "you may" each recruit: shop or discard pile, whichever holds the better card; both get picked.
4. Who feels it: anyone who discards a good member sees it go to the Gleaner; Blue's Most members race; Bring Back loses some of its pull for the holder only.
5. Not refused: not in the ledger; Scavengers (yes) and Old-Clothes Dealers are payoffs, not access. Access-only spaces were refused (verdict 4) but this is a member that widens every recruit, a rule-bender like Squatter.
6. Judged: one sentence, Blue's discard identity, an engine with Scavengers. Round I: the discard pile is near empty, so it waits until round II; nothing in it depends on members held.
7. Public and certain: the discard pile is face up.
8. Color interactions: the shared moment is a member landing in the discard pile (White discards, Red's swaps to the shop row, Blue's clears); with none of them, round-end shop clears still fill it.
9. Biggest case: round III with Scavengers, 5 recruits all from the discard pile: +10 followers over the round plus 5 members bought at full price; one turn pays +2 at most. Inside the band.
Verdict: send

## Idea: Appraiser

1. Printed text: Blue member "Round Start: discard the priciest shop member. Gain followers equal to half its cost, rounded down." Cards it touches: Gravedigger "Whenever shop members go to the discard pile, +1 follower."; Bring Back; Blue Cloak "Whenever you discard a member, +1 of its color".
2. Played turn: round II start, priciest shop member costs 10: it goes to the discard pile, you +5 followers. The round III start: another 4 or 5. Gain about 9 followers over the game for one card, plus the best shop card is gone before anyone could plan for it.
3. Both sides: if two share the top cost, the owner picks which; no other choice.
4. Who feels it: whoever was saving for the priciest member; Blue players can still Bring Back it from the discard pile.
5. Not refused: ledger "only you can recruit a marked shop member" was refused as weak access; this is a removal with a payoff, a different verb.
6. Judged: plain, a sting at round start, ties with the discard pile. Fine, not a star.
7. Public and certain: the shop row is face up.
8. Color interactions: feeds the discard pile that Blue's spaces and Gleaner use.
9. Biggest case: bought in round I, fires twice: about 4 + 5 = 9 followers, plus Gravedigger +1 each time; Doppelganger copying it doubles to about 18 over two rounds, spread across two round starts.
Verdict: send

## Idea: Workhouse Master

1. Printed text: Blue member "On Recruit: recruit every member in the discard pile costing 3 or less, for free."
2. Played turn: round III, 3 or 4 cheap members in the pile: +4 members at once for Blue's Most members.
3. Both sides: no choice.
4. Who feels it: Blue's rivals, hard.
5. Not refused: new.
6. Judged: a one-turn swing of up to 4 members decides Blue's contest alone.
7. Public and certain: yes.
8. Color interactions: discard moment.
9. Biggest case: round III, 4 free members plus the 10 contest: about 14 in one turn outside the center.
Verdict: cut (10+ in one turn outside round III's center)

## Idea: Day Laborer cut, no replacement

1. Printed text: no new card; Day Laborer "On Recruit: +1 minion this round." leaves Purple's deck, Extra Hand "On Recruit: +1 minion this round." stays as the colorless one.
2. Played turn: no change to any turn except that the extra-minion card is dealt from one deck, not two.
3. Both sides: none.
4. Who feels it: nobody loses a decision; the duplicate stops.
5. Not refused: Cory's Nov 1 "Insomniac replaces Extra Shift" was a different card; the duplicate came from the Nov 10 Extra Hand change.
6. Judged: Purple keeps 13 members for a 10-card deck; nothing missing.
7. Public and certain: yes.
8. Color interactions: none.
9. Biggest case: an extra minion in round III is worth one space, about 5 to 10; unchanged, just in one deck.
Verdict: send

## Idea: Piece-Worker

1. Printed text: Purple member "When you place your last minion of the round: +1 follower per 2 minions rivals have left."
2. Played turn: round II, you finish with rivals holding 4 minions: +2. Usually 0 to 2.
3. Both sides: none.
4. Who feels it: nobody; finishing early just costs you late spaces.
5. Not refused: inverse of Holdouts (refused Nov 1).
6. Judged: small ball; works against Purple's own contest.
7. Public and certain: yes.
8. Color interactions: none.
9. Biggest case: round III after Flurry and Make Haste, rivals with 8 left: +4.
Verdict: cut (small ball, nobody feels it)

## Idea: Watchers' purple

1. Printed text: "Whenever a rival takes two turns in a row, +1 purple."
2. Played turn: snake ends twice a round: about +2 a round.
3. Both sides: none.
4. Who feels it: nobody.
5. Not refused: same shape as Turnpike Keeper "Whenever a rival takes a Purple space, +1 purple."
6. Judged: small ball and a near twin.
7. Public and certain: yes.
8. Color interactions: none.
9. Biggest case: about 8 purple a game.
Verdict: cut (twin of Turnpike Keeper)

## Idea: Tax Men

1. Printed text: Magenta member "Whenever a rival recruits a member costing 7 or more, they give you 2 resources of their choice." (Claude changed "steal 2 resources from them" so nobody acts on another player's turn, Cory Nov 13; pitched Nov 7, Cory: "I like this one!", with "this would have to scale with member costs"; built as a test card in thieves.js, never live). Cards it touches: Extortionist "On Recruit and at Round Start: steal 2 resources."; Informer "Whenever a rival steals from you, they lose 1 follower."; Thief-Takers "Whenever a rival steals from you, steal 1 back from them."
2. Played turn: round II, a rival recruits Governess (8): you steal 2 of what they have left. Round III, 3 to 5 such recruits around the table: 6 to 10 resources, feeding Magenta's Most resources (10 in round III). Against Bandit's one-time 3.
3. Both sides: the rival picks which 2 resources (they give their least useful, which is fine for a Magenta pile); and whether to buy a 7+ member now and pay 2 more in effect, or buy cheaper; both get picked.
4. Who feels it: anyone buying a big member, every time; a sting with a cap of 2.
5. Not refused: his own yes from Nov 7. Since then members cost 1 more of their own color: 7 or more is now the upper half of the shop, as it was.
6. Judged: one trigger, one effect; makes big buys cost something; Magenta's steal verb. A rival's recruit is the trigger; the rival picks the colors on their own turn, so the owner never acts on someone else's turn (pitching step 10). It is a gift-to-you, not a steal, so Informer and Thief-Takers do not fire.
7. Public and certain: yes.
8. Color interactions: big members are bought by every color; works in any game.
9. Biggest case: round III, 5 big recruits by rivals: 10 resources, which becomes up to 10 followers through a buy or wins Magenta's 10; spread over the round, never 10 in one turn.
Verdict: send

## Idea: Footpad

1. Printed text: "Whenever a rival buys followers, steal 2 resources from them."
2. Played turn: fires on most rival turns in round III: 15+ resources.
3. Both sides: none.
4. Who feels it: everyone, every turn.
5. Not refused: same shape as Tax Men (tax on a rival's recruit), much more often.
6. Judged: too frequent; a second variant of one shape.
7. Public and certain: yes.
8. Color interactions: none.
9. Biggest case: round III, 9 rival buys: 18 resources.
Verdict: cut (variant of Tax Men and too big)
