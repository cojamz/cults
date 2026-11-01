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
