# Would a refactor or an upgrade make Cults feel less clunky? (Nov 4)

Short answer: no big rewrite and no framework upgrade. The freezes are fixed. What still feels clunky comes from three particular things, and each one has a fix that targets it directly.

## What I measured (live v0.99.569, built locally from the same commit)

- **Freezes: fixed.** Firefox at normal speed played a full game with the page never waiting more than 28 ms on a key press, and no click ignored. In Chrome slowed to a quarter speed (a stand-in for a weak laptop), the worst wait was 161 ms, and only 0.7% of presses waited over 100 ms. On Oct 28 the same test found multi-second freezes.
- **Clicks: about 130 ms at a quarter speed, the slowest tenth 160 to 320 ms.** On a normal Mac that is roughly 40 to 80 ms, under the 100 ms bar. Firefox at normal speed: middle click 75 ms, slowest 154 ms (round I).
- **Hovers: 40 to 50 ms middle, 135 ms slowest (round III, quarter speed).**
- **Where a click's time goes** (quarter speed, middle click): React redrawing the table 43 ms, after-effects 18, the browser drawing the frame about 50, the rules 6. No single piece dominates. The browser's own drawing (lots of always-moving pieces, about 6,000 page elements by round III) costs as much as React does.
- **The page is busy 68% of a whole game** at a quarter speed, mostly the animations and redraws during rivals' turns. That is when motion can stutter.
- **Memory grows through a game:** by the last turn, about 20% more page elements and twice the memory compared with reloading the same position. That isn't enough to freeze anything, but it explains why round III is a little heavier than round I.
- Not measured today: online play between real browsers. The test tool for that is out of date. The code path is clear, though (below).

Evidence: evidence/rig-live569.md (the full game, round by round) and evidence/freeze-chrome-and-firefox.log.

## What actually causes the clunky feel, biggest first

1. **Waiting, by design.** Between your turns you mostly watch rivals' moves play out one at a time with a pause after each, about 10.7 s at Steady and longer at Relaxed. That pacing is Cory's call from today ("too fast to make sense of"), so it's a feel question, not a code one. A faster computer or a new framework wouldn't shorten it.
2. **Online, every click waits for the internet twice.** Your move goes to the host's browser, the host checks it and writes the whole new game, and only then does your screen show your own move. The host's own clicks take the same trip. That's roughly 0.25 to 0.5 s per click on home internet, against about 0.05 s in a bots game. An Oct 15 test with 80 ms of internet delay measured clicks at 360 ms in the middle.
3. **Stutter during rivals' shows.** For each move the game draws the finished table, covers up what changed, flies pieces over the top, then draws the table again. Two full redraws per move, plus always-moving portraits and minions, keep the page busy, so a frame sometimes lands late mid-animation.
4. **Small leftovers:** one-off hitches, such as the wheel's first word flip in Firefox (about 180 ms once), and the memory growth above.

## Options, ranked by payoff for the work

| # | Change | Fixes | Effort | Payoff | Risk |
|---|---|---|---|---|---|
| 1 | **Online: show your own move the moment you click**, and let the host's answer confirm it (or undo it, if the host refuses) | cause 2 | about 1 day | Big for online games: clicks feel as quick as a bots game | Medium. The rare refused move has to undo cleanly, and the rejoin tests need re-proving |
| 2 | **Calmer idle motion** (fewer always-breathing portraits and bobbing minions at once) | cause 3 | 1 to 2 hours | Slow frames drop about a quarter (measured Nov 1: slowest tenth 77 → 58 ms) | Low. It changes the look, so it's Cory's call |
| 3 | **Tuning pass**: the wheel and shop redraw only when their own parts change; positions are measured once per show; leaked page elements are cleaned up between rounds | causes 3 and 4 | about 1 day | Tens of ms per click at a quarter speed. Barely visible on a good laptop, but it keeps round III as light as round I | Low |
| 4 | **Separate the show from the table**: the table draws once per move, and the flying pieces play on their own layer from the list of what changed (how Board Game Arena-style sites do it) | cause 3, for good | 15 to 20 hours, in 3 stages that each ship alone | Smoothest motion. Ends the late-game slowdown | Medium. Undo, skip-the-show and many browser checks need re-proving |
| 5 | **Upgrade React 18 → 19 with its auto-optimizer** | part of cause 3 | about 1 day plus re-checking | Small. React is only about a third of a click's time, and memo work already covers the hot parts | Low to medium. Worth doing later as upkeep, not for feel |
| 6 | Rewrite the board as a game canvas (Pixi/Phaser) or rebuild the engine | — | 40 to 60+ hours | Highest ceiling, but it throws away today's look, hovers and every browser test | High. Not worth it at this game's size |

## Recommendation

Skip a rewrite and skip the framework upgrade for now. If the clunkiness Cory feels is in online games with friends, do #1 first: it's the one change a player would notice on every click. Then #3, which is quiet engineering with no call needed. #2 only if Cory wants calmer motion. Keep #4 in reserve: start it only if shows still stutter on his laptop after #3. #5 can ride along with any future upkeep. None of this needs to start before 1.0's card work, and none of it should run while other threads are shipping the same screen files.

One question tells us where to aim: does it feel clunky mostly in online games with friends, or in games against bots too?
