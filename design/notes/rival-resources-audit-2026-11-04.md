# Cards that depend on what rivals hold: audit and reworks

Cory, Nov 4: "anything that relies on a rival having more of resources should be reworked". Players spend everything on followers, so "more than you" and "the rival with the most" checks against rivals' resources rarely pay.
I checked every live member and space, plus the bot-test cards. Each rework says what changes for a player. Picks are in [brackets]. Followers and members aren't resources, so a card that compares followers is allowed.

## Members to rework (this thread)

1. **Underdog** (Gold): "While a rival has more gold than you, double your gold gains."
   [pick] "While you have the fewest followers, double your gold gains."
   Change: it now helps the player who is last, which is what the name says. Played: round II, you trail with 14 followers. **Golden Years** ("+2 gold in round I, +4 in round II, +6 in round III.") gives you 8 gold instead of 4.

2. **Lottery Winner** (Gold): "On Use, once per game: gain gold equal to the most gold a rival holds."
   [pick] "On Use, once per game: +2 gold, then double your gold."
   Change: a jackpot you build toward, using Gold's own verb, doubling. Played: round III, you hold 6 gold and end with 16.

3. **Hostesses** (Silver): "On Recruit and Round Start: give each rival 1 silver. +1 follower per rival who then holds more silver than you."
   [pick] "On Recruit and Round Start: give each rival 1 silver. +1 follower for each."
   Change: the follower comes from the gift alone. You no longer have to spend your own silver down. Played: 4 players, so each round you gain +3 followers and each rival gets +1 silver.

4. **High Society** (Silver): "Game End: +2 followers per rival with more silver than you."
   [pick] "Whenever a rival takes a Silver space, +1 follower."
   Change: you score when rivals come to Silver, not at game end. Played: rivals take Silver spaces about 4 to 6 times a game, so you gain 4 to 6 followers. Rivals see the card and can stay off Silver to deny you.

5. **Upstart** (Silver): "On Recruit: gain half the silver of the rival with the most, rounded up."
   [pick] "On Recruit: +2 silver per rival with more followers than you."
   Change: it compares followers, which everyone has. Played: round II, three rivals lead you, so you gain +6 silver.

6. **Cutpurse** (Magenta): "On Recruit: steal 1 resource from the rival with the most resources. Round Start: steal 1 resource from the rival with the most resources."
   [pick] "...from the rival with the most followers." (both times)
   Change: the target is the leader, whom everyone can see on the score track. Played: you take 1 a round from the leader.

7. **Extortionist** (Magenta): "On Recruit: steal 2 resources from the rival with the most resources. Round Start: steal 2 resources from the rival with the most resources."
   [pick] "...from the rival with the most followers." (both times)
   Change: the same as Cutpurse.

8. **Safecracker** (Magenta): "On Use, once per game: steal half the magenta of the rival with the most, rounded down."
   [pick] "On Use, once per game: steal 2 resources from each rival."
   Change: it pays the same however much rivals have saved. Played: 4 players, so you take 6 resources in one go.

9. **Creditors** (Silver): "Game End: each rival loses 1 follower per 3 silver they hold."
   Already sent: Creditor "On Use, once per round: a rival you choose gives you 2 followers, then gains 3 silver." [pick]

Bot-test cards that won't go live as written (not rewording; dropping them from the next test set): **Social Climber** ("On Use, once per game: gain followers equal to the silver of the rival who holds the most."), **Fundraisers** ("On Use, once per game: each rival +2 silver, then +1 follower per 2 silver rivals hold in all."), **Mirror Image** ("On Use, once per game: choose a rival and a color; gain that color until you hold as much of it as they do.").

## Spaces (going to the thread that owns the actions)
- **Leaders' Tax** (Yellow round I): "+1 yellow. Choose a color: each rival with more of it than you gives you 1 of it."
- **Heist** (Magenta round II): "Steal half of one rival's pile of one color, rounded down. +1 magenta."

## Left alone (they take a fixed small amount and fail only when a rival holds nothing at all)
**Debt Collectors** ("On Use, once per game: each rival gives you 2 silver, if they have it."), **Collect Debts** ("Steal up to 3 gold from rivals, split as you choose."), **Help Yourself** ("Steal 3 resources in round I, 4 in round II, 5 in round III, split among rivals as you choose."), **Potluck** ("+2 silver. Each rival gives you 1 resource of their choice, then gains 2 silver."), **Leveler** ("On Use, once per round: choose a color; 1 of each rival's biggest color becomes it.").

## Related, not in his rule: game-end scoring on your own pile
The same logic applies here: buying followers beats saving to the end. **Misers** ("Game End: +1 follower per 2 white you hold."), **Harmonist** ("Game End: +1 follower per full set you hold."), **Spice Route** ("Game End: +1 follower per color you hold 3 or more of."). Flagged only; nothing changed.

## Bot note (engineering, not a design call)
In one Hard bot game, Creditors took 11 followers at game end because bots ended holding 20 and 10 silver (/mnt/project-files/game-critique/). People would have spent that on followers. So bot results overrate any card that scores on held resources. To do: make bots spend their leftovers on followers in round III before trusting those cards' numbers.
