# Balance test of the live game (v0.99.513 rules), Nov 3

Two fast runs on the same build (379cda47: live v0.99.513 rules plus bot speedups; the replacement batch is switched off), 10-card deck. Each: 400 Normal games at 4 players, 100 at 3, 100 at 2; 120 Hard games at 4; 40 games with one Hard seat among three Normals; an abuse hunt on 2 cards.
- Run A, contests as printed (the default table setting): .balance-runs/2026-11-03-fast-live-379cda47/report.md, 56 min.
- Run B, By color contests (Red priciest member, Blue most members, White fewest members, Magenta most resources, Yellow most full sets, Green most minions on Green, Purple went last, Silver most silver): .balance-runs/2026-11-03-fast-live-bycolor-379cda47/report.md, 55 min.
Critic read of run A: critic-printed.md (this folder). Purple contest numbers: scratchpad script over the raw games, reproduced below.

**Trust: SUSPECT in both runs.** A Hard bot among three Normals won 63% (A) and 68% (B) of 40 games (even 25%). Normal plays well below strong play, so below a finding counts only when Hard agrees, or it says Normal only. Hard rows are 96 four-player games: give or take 6 to 10 points on a card, more on a color with under 30 seats.

## Findings (most felt first)

### 1. Red is the strongest color under both contest settings
Red's round II spaces: **Promote** "Give one of your members to a rival or the shop, and recruit one of theirs costing up to 2 more. +3 red." **Demote** the same, "costing up to 2 less". Red's big member: **Mob** [8 red + 4 any, worth 4, counts as 4] "Game End: +1 follower per red member you have."
- Numbers: a cult with 3+ red members wins 42% vs 29% expected (Normal, 204 seats) and 39% vs 25% (Hard, 46 seats) with printed contests; 52% vs 29% (Normal, 200) and 42% vs 25% (Hard, 45) with By color. "Mostly red, 9+ members" is the most common one-color winning plan (17% Normal, 19% Hard). Same as the Nov 2 and Nov 3 runs.
- Sources agreeing: Normal, Hard, both settings, three earlier runs. Skeptic check against cults of the same width: printed Normal 43% vs 27% expected, By color Normal 52% vs 21% and Hard 45% vs 19% (real); printed Hard 37% vs 30% (mostly just "wider cults win").
- Played turn (By color, round III, 4 players): the red cult holds Mob (cost 12). Red's contest "Priciest member" pays 10 followers; the only pricier card in the game is Tribute Band (14, Green), bought in 14% of games, so the red player usually takes the 10 without placing on red at all (a Mob holder won it outright in 82% of round IIIs at Normal, 87% at Hard), and Mob adds about +5 at game end on top. The best other prize in round III is also 10, but it has to be fought for.
- Why it's hard to pin on one card: red members look weak one by one once their member count is charged (Mob −3 Normal, Panel −3, Triplets −6). Red's strength is that it builds the widest cult cheapest (swaps plus 3- and 4-count members), and wide cults win.
- Kind of change: under By color, Red's goal is the clearest fix (priciest member is won by buying one card); under printed contests, a look at Promote/Demote's +3 red or Mob's count. Cory's call.

### 2. Purple's new By color goal stacks with Night Owls
**Purple contest (By color)**: "whoever placed the round's last minion" (4, 6 and 10 followers in rounds I to III; never tied). **Night Owls** [7 purple + 1 any, worth 2, counts as 2] "From round II: after your last minion, +1 minion, placed after everyone else's." **Last Call** (round II) "+1 purple. +1 follower and +1 purple per minion you have left. Take the Goes Last token: your other minions are placed after everyone else's."
- Numbers: in rounds II and III when they already held Night Owls, its owner won the Purple contest 40 of 50 times (Normal) and 21 of 22 (Hard); even is 25%. A cult with 3+ purple members won 52% vs 25% (Hard, 23 seats, give or take 10) but 31% vs 32% at Normal (126 seats). Last Call: +10 Hard, the best purple space. The contest itself is fair by seat: each seat won it 22 to 28% of rounds.
- Sources: Night Owls share at both levels (Hard only 22 rounds); the color lift is Hard only (small sample). Rulebook: the Goes Last minions place once every hand is empty, so it is last unless a rival takes the token after it.
- Played turn (round II, 4 players): the Night Owls player places their last minion, then gets one more placed after everyone else's. Unless a rival took Last Call or Sleep In later, that extra minion is the round's last: +6 followers in round II and +10 in round III, plus Night Owls' 2. The best other round II space rarely gives 6 followers on its own.
- Kind of change: decide whether Night Owls' extra minion counts as "last", or give the Purple goal a different trigger (for example the Goes Last token holder at round end). Cory's goal and card.

### 3. The cloaks still swing the game (third run in a row)
**Green Cloak (Impressionist)** "Whenever any player copies an action, +2 of its color." **White Cloak (Money Changers)** "Whenever any player buys followers, +1 white." **Silver Cloak (Caterer)** "Whenever silver is gifted, +1 silver." **Purple Cloak (Pocket Watch)** "Whenever a player's turn is skipped, +2 purple."
- Printed contests: Impressionist holders win 40% vs 28% (Normal, 198) and 40% vs 25% (Hard, 45); Money Changers 37% and 33%; Caterer 21% and 15%; Pocket Watch 24% and 21%.
- By color: the spread shrinks. Impressionist +11 Normal, +5 Hard; Caterer −4 Normal, 0 Hard; Pocket Watch −6 and −3.
- Sources: both levels, both settings for Impressionist (Hard rows 45 to 54 holders, give or take 5 to 7; under By color only Impressionist at Normal clears the noise); Caterer weak at both levels only with printed contests. Flagged in the Nov 3 overnight run too, so per the 3-run rule this goes to Cory.
- Kind of change: Impressionist +2 to +1 or Caterer +1 to +2 (both were Cory's Nov 1 numbers).

### 4. Greatest Hits is the strongest space with printed contests
**Greatest Hits** (Green, round III) "Copy the On Recruit of each of your members, in any order. +1 green."
- Printed: +14 Normal, +21 Hard; winners take it 0.47 times a game vs 0.17 for others (Hard). By color: +8 Normal, −2 Hard.
- Sources: both levels under printed, not under By color. Same headline in every run since Oct. Skeptic: "winners take it more" may run backwards (leaders with many members are the ones who want it).
- Kind of change: number, Cory's call; it only matters if printed stays the default.

### 5. Spaces taken only as leftovers, members rarely bought
- **Splurge** (White, round I) "This turn, if you recruit a member, +1 follower for every 2 resources you pay for it (every 1 in round II). +1 white." Taken 1.4 times a game, but 72% of those picks came when nothing better was left (Hard choice log: 3% of 3,064 offers).
- **Cash In** (White, round III) "Turn all your white into followers. +1 white." Taken once a game, 35% as a leftover; under By color it reads +14 at Hard.
- **Smooth Talkers** [6 silver + 5 any, worth 2, counts as 2] "Your silver pays for any color." Bought in 5% of games it showed (Normal, printed), owners −17. Printed contests only: By color −3, owned in 24% of games.
- **Courier** [4 purple + 2 any, worth 1] "Whenever you take two turns in a row, +1 of each other color." Bought in 9% (printed); By color 20%, −2.
- Also rarely bought at Hard (under 15 owners in 40-50 games): Shoplifter, Wallflower, Patroness, Tastemaker, Hoarder, Heiresses, Customs, Harmonist, Gift Wrapper, Gossip, Extra Hand.
- Kind of change: price first (lean pricier never applies here: these are passed over, not overbought), then followers, then text.

### 6. A swapped member fires its On Recruit again (question, not a bug)
**Con Men** (grey) [6 any, worth 2, counts as 2] "Counts as 2 members. On Recruit: steal 5 resources."
- In one Normal game (run A, packet most-interaction.txt, lines 95 to 157) Con Men stole 5 resources eight times in round II: 4 times when a swap passed it to a new owner, plus its first buy, a rebuy and 2 copies of its On Recruit. That follows "recruit one of theirs" as written (Cory, Nov 1).
- Cory's call whether that feels like a fun hot potato or chaos.

### 7. Extortionist is strong with printed contests
**Extortionist** [5 magenta + 2 any, worth 1] "On Recruit: steal 2 resources from the rival with the most resources. Round Start: steal 2 resources from the rival with the most resources."
- Printed: +10 Normal (128 owners), +11 Hard (24 owners). By color: +4 Normal. Abuse hunt (4 games): not flagged.
- Watch item: Normal only (Hard give or take 10 on 24 owners), printed only.

## What's healthy
- Small cults win: winners with 5 or fewer member cards 32% (Normal) and 33% (Hard) at 4 players with printed contests; 26% and 32% By color (bar 20%). By color at 2 players misses: 16%.
- Seat order is flat at Normal in both runs (4 players: 23 to 30%). Hard showed seat 1 33% vs seat 4 18% in run A but 22% vs 25% in run B and 21% vs 24% overnight: noise.
- Games are close: Hard margin 6.8 (printed), 11.6 (By color).
- About 7 equally common winning plans at both levels.

Skeptic pass done (2:30pm): every finding kept, with the rewordings above.

## Dropped (tool, not game)
- Line Cutters, Window Dressers, Fan Club, Early Birds, Shift Crew TRAP or WEAK flags: all count as 2 to 4 members, and the lift charges them for it.
- Polisher DOMINANT: Normal only (+9); Hard +1 and −4.
- "Never seen acting": Shift Crew is "Worth 4 followers." with no ability; Bodyguards only blocks.
- Abuse hunts (Debt Collectors, Extortionist, Alchemists, Tourists): 4 games each, give or take 30 followers.

## Purple contest numbers (By color run)
Four-player games with purple on the table. Normal 189 games: 567 rounds, every round one winner, by seat 142/143/150/132; the round's winner won the game 40%; Night Owls holders took 53 of their 108 rounds; 3+ purple cults took 109 of 354. Hard 56 games: 168 rounds, by seat 37/46/38/47; round winner won the game 45%; Night Owls holders 30 of 54; 3+ purple cults 28 of 78.
