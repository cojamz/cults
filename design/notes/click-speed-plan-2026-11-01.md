# Click speed: where it stands and the plan (Nov 1, speed bar thread)

Bar: every click and hover answers in 100 ms (card complete) at 4x CPU. Instrument: `node scripts/v4-rig.mjs <frozen url> <label>`
(one person + 3 Normal bots, Relaxed). Single runs swing about ±50 ms on p95; compare builds with `scripts/v4-rig-spread.mjs`.
`scripts/v4-perf.mjs` is stale (plays 0 placements on today's game).

## Shipped
- v0.9.934: pay, recruit and choice clicks draw in the click (SyncLane) instead of rAF + setTimeout. A/B, same game: pay p95 163-224 → 110-182 ms.
- v0.9.949: shop details fit in one write-all/read-all pass (was up to 3 forced layouts per card); focus moves after paint.
- v0.9.951: a show too long for the hold cap compresses to Quick pace instead of jumping its end (landing gate green).

## Where a click goes now (rig-v0951 + fx run, medians / p90, ms)
waiting for the browser 13/22 · rules (engine step, session, bot ask) 12/19 · React render + layout effects 35/59 ·
passive effects (now before paint, SyncLane) 14/28 · to the frame 11/22 · rig's next frame 21/35.
Clicks p50 ~95-120, p95 170-240. Placing on the wheel (~60) and starting picks (~55) pass.

## Why it's still over
Every step re-renders the whole table. Dev commit data (`--query=trace=1`, json `react.commitsAll`) for a recruit click:
GameScreen 51 ms dev = ShopCards 12-21 + Wheel 10-16 + PayPicker 8-13 + seats 3-21 + FollowerRates 2-10 + Tip ~5 + SinceStrip 3.
No single part dominates; the Wheel and ShopCards take state whole, so memo never hits.

## Plan (engineering, ours)
1. Slice what each heavy part reads: Wheel and ShopCards get derived props (memoized selectors) instead of `state`, so a pay/recruit
   step doesn't re-render the wheel and a place step doesn't re-render the shop. Check each with the click-phase line in the rig report.
2. Move non-urgent passive effects (talk, gifts, robbed flash, sounds) to after paint (afterPaint in GameScreen.jsx).
3. ShopCards: cache `paymentPlan` per (viewer resources, discounts, uid) across renders.
4. Measure with v4-rig-spread (3 runs, same --parallel) before/after each; freeze probe in Chrome and Firefox before shipping.

## Late finding (worth checking first)
Prod profiles say the components themselves are cheap (ShopCards render ~2 ms a click at 4x; dev numbers overstate them 5-10x).
The Chrome trace of a slow click splits about evenly: script ~112 ms (forced style and layout included) and the browser's own
pipeline ~117 ms: style 27, layout 19, prepaint 11, **layerize 26**, **paint 24**, commit 10. Layerize and paint scale with the
always-running idle animations (leader cult-breathe and cult-blink, member scenes cult-shift/cult-breathe, cs-bob minions:
lamp-b.css 250-552), each its own layer, 30+ by round III. Measure first: inject CSS pausing them in the rig and compare click
phases. If it's the win, pausing them for a beat around your own click is invisible; removing them is Cory's call (feel).

## Status, Nov 1 5:50am Eastern (Rebuild table redraws thread)
Live: v0.9.956 (eaf8b4a). Evidence: design/eval/perf/redraw/ (rig runs, paired 2 at a time, so both builds share the load).
New tools: `scripts/v4-rig-work.mjs <dir> <labels…>` (our own main-thread work per click: rules + render + effects, far
steadier than wall-clock clicks, which swing ±100 ms run to run); rig `--still` / `--still=cancel` (endless animations
paused / taken off), `--trace-dump=<dir>` (raw trace per slow click), `?trace=1&fx=1` (every effect's own time inside
timed clicks, report table "Effects in timed clicks"); profiling build: `vite build -c` with react-dom → react-dom/profiling
and minify off (per-component times at production cost).

Findings:
- Components at production cost are small: GameScreen's whole render 15-40 ms per click (wheel 5, seats 5, shop 3-15,
  Tip 2-9, follower rates 2-9). A click is about: input/Playwright ~20, rules ~5, render ~30, effects ~17, frame ~31.
- Idle animations: pausing them changed nothing (a paused animation keeps its layer); taking them all off cut the slow
  frames (frame p90 77 → 58 ms, click p95 195 → 175, medians unchanged). Removing them is Cory's call (feel).
- The show's setup (playChain, ~17 ms a click) and the shop's text fit (~60 ms when it ran) were mostly the browser's own
  layout bill landing on their first measurement, not their own code.

Shipped (v0.9.956): onPick no longer measures and copies every shop card (beforeShow already does, now only the leaving
cards' pictures): rules step 14 → 5 ms median; a shop card's text fit is remembered per layout. Paired games: clicks
p50 ~100, p95 155-175 ms at 4x CPU (v0.9.951: p95 170-240).

Parked, not shipped: the wheel skips steps that draw the same board (sameWheel + wheelSig, Wheel.jsx; test
src/test/v4/ui/wheel-skip.test.jsx proves every skipped step draws identical HTML). Branch claude/project-thread-6jkzfg.
Measured gain within noise (pay render p90 57 → 51 ms, medians flat), so not worth a 30-minute gate tonight.

Next (in order of likely payoff):
1. Answer first: in your own click draw only what the click changes (the dialog closing, your seat), the rest of the
   table as a transition after the paint. The only lever left that's tens of ms; it changes what a player sees for one
   frame, so it needs Cory's eye on a clip.
2. Endless animations off or calmer (Cory's call; measured above).
3. Smaller per-step DOM churn: style passes touch 75-250 elements per click; find which selectors (`:has()` in
   member-pick.css, data attributes on .app.game) widen them.

### 6:10am: answer-first trial
Built behind `?answer=first` (off for players; branch claude/project-thread-6jkzfg, with the parked wheel skip): useDeferredValue
for the wheel, shop, rivals' seats and the strip; your own seat, the header and the dialog draw in the click. Paired games
(rig-nowait / rig-answer): clicks p50 114 → 103, p95 ~202 → 163 ms; choices p50 99 → 81. A Pay click frame by frame
(scripts/v4-click-frames.mjs): the answer painted ~70 ms sooner, in one visible change (no second step seen), picture
/mnt/project-files/click-speed/answer-first-pay.png. Waiting on Cory's look before it goes on; then gates, then ship.
Risks to check before shipping: a flight whose target is in a deferred part (a member going back to the shop) measured on
the old table; the shop's lit cards reading fresh options against the old state for one frame.

### 7:20am: answer-first not shipped
With it on for everyone (branch claude/project-thread-6jkzfg, c15eb95), the full check was green except benders, and
benders' b1 failed 1 run in 3 alone: a click on a joinable space right after a step did nothing, because the wheel was
still showing the step before (deferred). A dropped click is worse than a slow one. Keeping the wheel in the click
(1b48df9) keeps every click alive but the gain goes with it (paired game: p50 97 → 92, p95 144 → 152, noise).
So the wheel is the part worth deferring and the one part that can't be. Next idea, if this lane reopens: the wheel's
own clicks read the fresh state (legal, slots) through a ref while its drawing is deferred, then rerun benders b1 ten
times. (benders b4, Straggler's "Stay put", is red on live v0.9.956 too: red-gates lane.)

### Nov 3: answer first shipped (v0.99.519, thread "Make clicks answer faster")
- The Nov 1 "dropped click" in benders b1 was the test's own fallback clicking the squat first; fixed in the test (8 of 8).
- The rig and freeze probe never finished round III: a shop card's hover card sits over the wheel and the pointer jumped
  onto it. Both now move off the card first; the rig saves a screenshot, the save and why each press did nothing
  (window.__rigWhy, reasons logged by GameScreen onPick and Wheel tap) when it gets stuck.
- useDeferredValue drew the whole table twice after every step (buys 188 → 236 ms). Now held by hand, only for your own
  answer to a choice; released by a plain update in the next frame (a transition, starved by bot steps, kept 43-77 old
  states alive in React's queue: memory gate).
- Paired rig, 3 games each, 4x CPU (design/eval/perf/nov3f): choose median 98 → 80, p90 211 → 162; all clicks median
  144 → 133. Freeze probe (nov3-freeze): Chrome worst wait 333 → 185 ms; Firefox passes both.
- Still open: buys right after an answered choice pay for the table's catch-up when clicked within a frame or two (the rig
  clicks that fast, people don't); placements and buys are untouched. Clicks p95 still ~200 ms at 4x vs the 100 bar.
