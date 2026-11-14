# Do bots hoard resources? (Nov 4, coordinator's ask from the rival-resources audit)

Measured with scripts/trial/probe-leftovers.mjs (each player's last buy of the game) and scripts/v4-bot-levels.mjs (deck 10, By color).

- **Last buy of the game:** Normal passed on 9 of 160 (6%). Hard passed on 1 of 36. Everyone else bought followers (mostly the 10 tier) or a member.
- **Held at game end:** Normal 9.5 a player, about half of it what it needed to keep a contest lead (bot-levels: "needed to hold a lead 4.7, spare 4.8"). Hard 10 to 14 a player (probe, 36 players), 11 in the check-batch4 base (76 players, 21 of them on 15 or more).
- **Why the piles:** one recruit a turn, at most 10 followers (rulebook), and By color contests that pay for holding a color (Most silver, Most full sets). In the sample game, Cal's 20 silver won Most silver (+10). That's holding to win, not bot blindness.
- **Tried:** LIQUID=<share> (bots.js buysAt) counts only that share of the buys after the next one as turning leftovers into followers. Normal against 3 Normals, 200 games: 0.5 won 29.5% ±6.3 with 8.9 left; 0.25 won 22.7% ±5.8 with 6.8 left. Neither is clearly better than the default, so nothing changed (the switch is off unless set).
- **So:** the bots aren't the cause. Cards that score on rivals' held resources (Creditors) look strong because the rules leave piles. Changing that is a rules call for Cory (for example, more than one follower buy a turn in round III), not a bot fix.
