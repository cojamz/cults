# By color Red goal and Mob, bot test (Nov 3 evening)

Build 65b805b6 (pinned worktree), deck 10, red on every table (MUST=red). Per arm: 80 Hard and 300 Normal 4-player games, same seeds across arms. Raw: .balance-runs/redgoal/ (not committed); script /tmp scratch red.mjs (counts below).
- A: By color as live then (Red = most red held)
- B: By color, Red = most red member cards, each counts 1 (Cory's "maybe most red members?") → shipped
- C: B plus Mob paying per red member card (MOB=cards)
- D, E: As printed, Mob as is vs per card (results below if finished)

"Red cults" = seats with 3+ red member cards. Even is 25%; more seats go red in B and C, which by itself pulls their share down a little.
```
A normal games 300; red-main seats 30% of seats, won 46% (even 25%, n=339); red cards per seat 1.83; red contest swept 1%; red-main took it 30% of rounds; cults 25+ members 132, max 36
A hard games 80; red-main seats 28% of seats, won 53% (even 25%, n=85); red cards per seat 1.77; red contest swept 4%; red-main took it 33% of rounds; cults 25+ members 32, max 35
B normal games 300; red-main seats 39% of seats, won 46% (even 25%, n=450); red cards per seat 2.18; red contest swept 2%; red-main took it 59% of rounds; cults 25+ members 143, max 38
B hard games 80; red-main seats 40% of seats, won 38% (even 25%, n=122); red cards per seat 2.21; red contest swept 1%; red-main took it 63% of rounds; cults 25+ members 40, max 37
C normal games 300; red-main seats 38% of seats, won 45% (even 25%, n=438); red cards per seat 2.15; red contest swept 2%; red-main took it 60% of rounds; cults 25+ members 141, max 47
C hard games 80; red-main seats 39% of seats, won 35% (even 25%, n=119); red cards per seat 2.17; red contest swept 1%; red-main took it 67% of rounds; cults 25+ members 35, max 36
```
Read: B brings red cults from 53% to 38% of Hard wins (Normal unchanged at 46%); one seat takes Red all three rounds in 1-2% of games, so the goal doesn't lock. Red cards bought rise from 1.8 to 2.2 a seat: the auto-buy risk Cory named, to watch in human play. C (Mob per card) adds little on top (38% → 35% Hard) and was not shipped.
Big cults (coordinator's note from the playtest thread: a 34-member winner, +41 game-end): cults ending with 25+ members are common, 11% of Normal seats and 10-13% of Hard seats in every arm, max 35 to 47. Not a red-only effect; next balance pass should read game-end bonus size by member count.

## The pattern Cory asked about: go wide, then cards that pay per member
4-player games, win rate by members at game end (even 25%):
- Morning As printed run (379cda47): Normal 25+ members 54% of 85 seats, 20-24 38%; Hard 25+ 52% of 23. Holding both Patriarch and Mob: Normal 82% of 38, Hard 64% of 11; one of them 38% / 35%; neither 23% / 24%.
- Morning By color run: Normal 25+ 61% of 148; Hard 25+ 69% of 29. Both: 87% of 54 (Normal).
- Red goal test B (red on every table): Normal 25+ 68% of 143, Hard 60% of 40; winners with 20+ members 63% / 58%. Both: 79% of 58 Normal, 79% of 14 Hard.
Patriarch: "Game End: +1 follower per 2 members you have." (checked live text before quoting to Cory). Mob: "Game End: +1 follower per red member you have."
Read: the wide cult with member-counting game-end cards is the strongest single plan at both bot levels and both contest settings, and the playtest's 34-member, +41 game-end win is that plan. Kinds of change for Cory: cap or flatten the per-member payoffs, make cheap/free recruits cost something later (upkeep), or count member cards rather than members everywhere.
