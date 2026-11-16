# 2 and 3 players: what doesn't scale (parked, Nov 6)

Cory, Nov 6 9:50pm: "a lot of stuff probably doesnt scale down to two players, particularly robes. We need to identify what." Then 10:09pm: "balancing for 2 and 3 players can be later." Parked here; nothing changed in the game.

## Data so far
- 240 Normal games each at 2 and 3 players vs 1,440 at 4 (balance run nov6-v606-deep, today's robes): /mnt/project-files/balance-runs/nov6-v606-deep/shards/normal{2,3}-*.jsonl.
- 140 Hard games a side at 2 players, today's robes vs the own-action robes (cloaks-own3 settings): trial pc2-own3 (28 of 32 blocks; `node scripts/trial/trial.mjs work pc2-own3` finishes it). The 3-player trial pc3-own3 is created but has no games yet. Compare with cloaks-own3 at 4 players.
- Scripts: /mnt/project-files/player-count/an.py (Normal run, by seat count) and arm.py (trial arms, 2/3/4 players).
- Numbers are owners' win share minus even; around 30 holders is about ±9 points, so only big gaps count.

## Robes at 2 players (Hard, 140 games; holders' win share minus even, today's → own-action; 4 players in brackets)
- **Magenta (Fence)**: +32 → +41 (4p +1 → +8). Steals are worth double at 2p: you gain and your only rival loses. Biggest problem.
- **Yellow (Guest Book)**, "Whenever you recruit a member of a color none of your members have, +2 yellow.": −18 → −13 (4p +5 → +15). Normal agrees: −21 at 2p, −9 at 3p, −2 at 4p. At 2p there are only 2 colors plus grey to collect.
- **Purple (Pocket Watch)**, own-action "Whenever you take the Goes Last token, +4 purple.": −13 at 2p vs +14 at 4p.
- **Green (Impressionist)**: −23 → −7. **White (Money Changers)**: +14 → −5. Blue, Silver, Red: within noise.

## Cards that scale with player count (checked against live text)
Stronger at 2p:
- Steals (one rival takes the whole loss): **Heist** +24/+26 at 2p Hard vs −1/+12 at 4p; **Accomplice** +19/+23 vs +1/+16; Help Yourself and Lie Low a little up.
- Snake turnarounds give each player a consecutive turn every round at 2p (1-2-2-1-1-2): **Lookouts** ("Whenever you take a consecutive turn, +2 followers.") +20/+26 at 2p vs +13 at 4p; Courier and Hot Streak run on the same thing.
Weaker at 2p:
- Gifts all go to your only rival (and often hand them Most silver): **Largesse** −12/−7 at 2p Hard and −13 Normal, vs +11 Normal at 4p; Party Gifts, Kingmakers, Guest of Honor, Godparent work the same way.
- Counts of rivals: **Mob** ("Round End: +2 followers per rival with fewer red members than you", at most +2 at 2p vs +6), **Recluse** (per rival with more members), **Debt Collectors** (each rival gives 2 silver), Tax Collector, Duty Collector, High Society, Picket Line. Too few owners to read at 2p.
- Counts of colors: Yellow's "a color none of your members have" (New Blood, Housewarming, Matchmaker), "per color you hold" (Tourist, Dyer, Caravan, Melting Pot, Spice Route, Big Tent), Courier's "each other color". Full sets get easier instead (Seamstress, Jack-of-All-Trades).
Whole table:
- Grey is 12 of 32 cards at 2p: 35% of members bought are grey (25% at 4p). The shop shows 6/7/8 at every count, so at 2p the whole deck is dealt in 15% of games.
- 3 players, Normal: seat 1 won 41% of 240 (even 33%); flat at 4p. Hard at 3p not run yet.

## Directions to pitch when this comes back (Claude's, not yet through pitching.md)
- Setup: Magenta, Silver and Yellow sit out at 2 players (Classic already plays Blue and Red at 2p), or scale grey to 3 per player.
- Rival counts become one fixed total (e.g. Mob: "+6 followers if you have the most red members").
- A Yellow Cloak trigger that doesn't run out, e.g. "a member of the color you have the fewest members of".
- First finish pc2-own3 and run pc3-own3 on whichever robes Cory settles.
