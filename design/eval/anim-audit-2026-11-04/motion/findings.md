# Motion audit, Relaxed vs Steady (2026-11-04)

Screenshots cited here: /mnt/project-files/anim-audit/motion/ and /mnt/project-files/anim-audit/info/ (kept out of the repo for size).

Watched: four recorded games at 1270x700 on a frozen build of 4e2da493 (seed 7, three Normal bots, pointer parked during rival turns), Relaxed and Steady, frames at 4-8 fps plus a 50 ms page probe of the top line and pieces in the air. Frames are in this folder; sheet timestamps are seconds into each video. Recording scripts and raw video: .v4-panel/motion-audit/ (not committed). Written by a motion-design agent, saved by the foreman; verify before acting.

## Relaxed vs Steady, the same kind of beat timed from frames
- A rival's minion, seat to space: Steady 0.25 s, Relaxed 0.65 s (2.6x, good)
- Pieces in the air, one burst (median): 0.61 s vs 1.15 s (1.9x)
- **A rival's recruit, card held big at the hub: 0.85 s vs 0.80 s (1.0x)**
- A rival's recruit, hub to their seat: ~0.2 s vs ~0.15 s (1.0x)
- "P# is paying…" on the top line (median): 2.3 s vs 2.0 s (no slower)
- Round-end scoring, one rim: 1.6 s vs 3.2 s (2.0x, good)
- Your own recruit held at the hub: ~0.9 s vs ~1.6 s (1.8x)

Small moves are slower at Relaxed; the moments a player most needs to read (a rival recruiting or buying) run at Steady speed or faster. (Foreman's measure, same day: at Relaxed 22% of rival steps, mostly recruits and buys, were squeezed to fit the ~4 s step cap; at Steady none.)

## Findings, worst first

**1. A rival's recruit flashes by, and the card's trip to their seat is a blink.** P3 recruits Timekeepers: the big card is at the hub 0.8 s at Relaxed, then reaches P3's seat in ~0.15 s (sheet-relaxed-rival-recruit-8fps.jpg 29.975-30.85; compare sheet-steady-rival-recruit-4fps.jpg 44.75-45.6). Fix: never squeeze a recruit or buy to fit the step limit; at Relaxed hub hold ≥ 1.8 s and the flight home ≥ 0.6 s on a visible arc; the buyer's seat swells as it lands.

**2. A recruit plays in three or four places at once.** In 0.5 s: the hub card, a new card sliding into the shop from the deck, P4's Guest Book note at their seat, coins dropping; the previous stage card still under the new one (r-three-places-15.jpg, r-rivalrecruit-30.0.jpg). The refill reads as "the card went back into the shop". Fix: one beat at a time: old stage card leaves, the card lifts from the shop with the payment dropping in, hub reveal, flight to the seat, member notes; the shop refills last.

**3. Results show before their cause.** P3's seat says "1 member" while Timekeepers is still at the hub; the hub card appears while the shop copy has barely moved (r-rivalrecruit-30.0.jpg); P4's followers tick 2, 4, 7 mid-reveal (r-three-places-15.jpg). Fix: hold member and follower counts until the card lands; the hub card grows out of the moving shop copy.

**4. A rival's follower buy is nearly invisible.** Only the "1 follower" price card at the far top right lifts for ~0.5 s, ~1,000 px from P2's seat; then a faint +1; the turn card still says "P2 took Harvest" (r-rivalfollowerbuy-163.6.jpg, 164.0.jpg, sheet-relaxed-rival-followerbuy-4fps.jpg). Fix: coins drop from the seat into the price card, which holds ~1 s with "P2 buys 1 follower"; the follower flies to P2's count; the turn card adds "bought 1 follower".

**5. A rival's steal or swap plays on an empty table, in tiny pieces.** P3 takes Dilute: its card fades, "P3 is choosing…" sits ~2.5 s over a dimmed empty wheel, then a 16 px dot slides along the seat column; your seat's tag says "P3 took 2 purple" while the log says your purple became blue (r-steal-79.3.jpg, sheet-relaxed-steal-4fps.jpg). Fix: the action card stays on the stage through its whole chain, choices included; hits on your seat get a hold, a tug, big pieces that visibly change color, and a tag that says the whole thing.

**6. "P# is choosing…" is dead air.** Median 2.7 s at Relaxed, up to 6.3 s, nothing moving, the action card often gone (sheet-relaxed-steal-4fps.jpg 78.75-80.75). Fix: show the options dimmed beside the action card and light the one picked before the effect flies.

**7. One player's member notes stay up into the next player's turn.** P4's Tourists note shows while P2's minion lands and P2's card appears beside it (sheet-steady-rival-place-8fps.jpg 38.0-39.3); same with P3's Bargain Bin during your turns. Fix: notes fold into their seat when the next minion lifts; each note edged in its owner's color.

**8. The top line and the turn card describe the wrong turn.** "Your turn is over" stays while P2's minion flies (r-21.6.jpg); "You took Savings" through P2's placement; "P2 took Harvest" while P4 places (r-stagecard-offhub-14.jpg). Fix: both switch to the new player as their minion lifts.

**9. The turn card hides most of the turn.** "P4 took Walk-In · +1 red · +5 more" (r-three-places-15.jpg); the strip shows one or two small lines. Fix: the turn card grows to fit a turn; the strip shows up to six lines; "+N more" opens the turn's full card in place.

**10. A hover card covers the hub through rival turns.** After "Start round II" the pointer rests on the wheel and the Out of Style hover sits over the hub for ~15 s of rival turns (s-hover-covers-stage-80.jpg). Fix: while someone else's chain plays, a hub hover closes until the pointer moves; the round button sits where the pointer won't land on a space.

**11. Leftover panels cover the board at the start of your turn.** "P2 · Pick a cloak" still covers the bottom third of the wheel after "Your turn — place a minion" (r-stale-cloak-11.2.jpg). Fix: a rival's picker closes when their pick lands.

**12. The new round plays everything at once.** Old shop cards fly across the wheel while minions go home, seats re-sort, new cards deal (s-newround-deal-77.jpg); at Relaxed your turn started ~1.5 s after "Start round II", before the deal settled. Fix: a scene: minions home, "Round II" stamps in, seats slide into the new order one at a time with their place number, the middle ring lights as it opens, old row leaves, new row deals, then the first turn.

**13. Round-end scoring is the best-paced beat, with small prizes.** ~3.2 s per rim at Relaxed; the score card covers the hub and most of the rim being scored; "+2" tokens are small and fly under the dim (r-reckoning-84.3.jpg). Fix: light the scored rim brightly with the card just off it; follower-sized prize tokens; each winner's count settles visibly.

## Revamp proposals, ranked
1. **Read holds, not one speed multiplier.** At Relaxed, a ~0.8 s hold after each rival turn with its full summary up; never squeeze recruits, buys or steals.
2. **A spotlight on the acting player.** Their seat brightens, others and the shop step back, one stage card up at a time.
3. **Recruits and buys as a three-beat moment.** Lift with coins dropping in, hold big at the hub, land in the seat; the shop refills after.
4. **Hits on you land with weight.** A hold, a tug on your stack, large pieces, a plain-words tag.
5. **Replay from the log.** Clicking a "Since your last turn" line replays that rival turn on the board.
6. **A new-round scene.** Banner, seats re-ordered one by one, the ring opening, then the deal.

## Caveats
- Bots don't replay the same game on the same seed, so the speed comparison is the same kind of beat across games, not the identical move.
- In the Relaxed probe run, video time runs ~13 s ahead of the probe clock.
- Finding 10's hover came from the script resting the pointer after "Start round"; a real pointer lands in the same place.
