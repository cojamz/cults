# Main thread in slow clicks: base-trace

32 clicks over 120 ms, traced. Nested kinds overlap (a FunctionCall holds the style and layout it forces; RunTask holds everything).

| kind | ms | count | ms per click |
|---|---|---|---|
| RunTask | 8331 | 3447 | 260 |
| FunctionCall | 3850 | 4753 | 120 |
| EventDispatch | 3426 | 977 | 107 |
| UpdateLayoutTree | 991 | 524 | 31 |
| Paint | 703 | 961 | 22 |
| Layerize | 600 | 293 | 19 |
| Layout | 468 | 203 | 15 |
| Commit | 453 | 294 | 14 |
| PrePaint | 309 | 924 | 10 |
| HitTest | 299 | 332 | 9 |
| FireAnimationFrame | 291 | 689 | 9 |
| TimerFire | 190 | 74 | 6 |
| MinorGC | 62 | 11 | 2 |
| V8.GC_SCAVENGER | 50 | 11 | 2 |
| UpdateLayer | 47 | 8783 | 1 |
| MajorGC | 44 | 2 | 1 |

## Style and layout by who asked

A JS frame means it was forced mid-script; (frame) is the browser's own pass before paint.

| ms | count | per click | kind ← asked by |
|---|---|---|---|
| 402 | 301 | 9.4 | UpdateLayoutTree ← (frame) |
| 141 | 95 | 3.0 | Layout ← (frame) |
| 89 | 5 | 0.2 | UpdateLayoutTree ← X App-C9Ei8lCG.js:4 |
| 87 | 43 | 1.3 | UpdateLayoutTree ← (anon) Info-aaXuQztv.js:1 |
| 77 | 34 | 1.1 | UpdateLayoutTree ← (anon) ShopCards-w84jH6M7.js:1 |
| 68 | 20 | 0.6 | UpdateLayoutTree ← tc index-H6CmK5hR.js:45 |
| 62 | 11 | 0.3 | Layout ← ce ShopCards-w84jH6M7.js:2 |
| 53 | 14 | 0.4 | UpdateLayoutTree ← ce ShopCards-w84jH6M7.js:2 |
| 36 | 25 | 0.8 | Layout ← (anon) Info-aaXuQztv.js:1 |
| 33 | 4 | 0.1 | Layout ← Te ShopCards-w84jH6M7.js:2 |
| 31 | 36 | 1.1 | UpdateLayoutTree ← check :7098 |
| 29 | 13 | 0.4 | UpdateLayoutTree ← (anon) App-C9Ei8lCG.js:100 |
| 28 | 7 | 0.2 | Layout ← tc index-H6CmK5hR.js:45 |
| 27 | 8 | 0.3 | Layout ← (anon) ShopCards-w84jH6M7.js:2 |
| 27 | 22 | 0.7 | UpdateLayoutTree ← expectHitTarget :7370 |
| 24 | 8 | 0.3 | UpdateLayoutTree ← (anon) ShopCards-w84jH6M7.js:2 |
| 24 | 5 | 0.2 | Layout ← X App-C9Ei8lCG.js:4 |
| 23 | 18 | 0.6 | Layout ← (anon) ShopCards-w84jH6M7.js:1 |
| 21 | 3 | 0.1 | Layout ← (anon) App-C9Ei8lCG.js:100 |
| 18 | 14 | 0.4 | Layout ← expectHitTarget :7370 |
| 16 | 1 | 0.0 | UpdateLayoutTree ← Qi ShopCards-w84jH6M7.js:2 |
| 15 | 4 | 0.1 | UpdateLayoutTree ← Te ShopCards-w84jH6M7.js:2 |
| 13 | 2 | 0.1 | UpdateLayoutTree ← Mn ShopCards-w84jH6M7.js:2 |
| 12 | 1 | 0.0 | Layout ← (anon) CultSeat-xC77lcO4.js:1 |
| 12 | 4 | 0.1 | UpdateLayoutTree ← ni index-H6CmK5hR.js:38 |
| 11 | 1 | 0.0 | UpdateLayoutTree ← ad index-H6CmK5hR.js:42 |
| 11 | 3 | 0.1 | Layout ← ni index-H6CmK5hR.js:38 |
| 10 | 2 | 0.1 | Layout ← Mn ShopCards-w84jH6M7.js:2 |
| 9 | 2 | 0.1 | UpdateLayoutTree ← b ShopCards-w84jH6M7.js:2 |
| 7 | 2 | 0.1 | UpdateLayoutTree ← P App-C9Ei8lCG.js:96 |

## choose 351 ms

- +230 ms: 34 ms (Paint 22, Layerize 8, UpdateLayoutTree 4, FunctionCall 3, Commit 2) first call e Info-aaXuQztv.js:1
- +265 ms: 5 ms (FunctionCall 4) first call hn index-H6CmK5hR.js:30
- +272 ms: 9 ms (TimerFire 9, FunctionCall 9, UpdateLayoutTree 2, Layout 0) first call ca ShopCards-w84jH6M7.js:2
- +282 ms: 57 ms (Paint 17, Layerize 12, EventDispatch 11, UpdateLayoutTree 8, Layout 3) first call ci index-H6CmK5hR.js:42

## choose 288 ms

- +163 ms: 37 ms (Paint 27, Layerize 9, FunctionCall 4, FireAnimationFrame 3, Layout 2) first call e Info-aaXuQztv.js:1
- +211 ms: 4 ms (FunctionCall 1) first call requestIdleCallback.timeout App-C9Ei8lCG.js:4

## choose 222 ms

- +175 ms: 28 ms (Paint 18, Layerize 5, FunctionCall 4, FireAnimationFrame 4, Commit 3) first call e Info-aaXuQztv.js:1
- +212 ms: 5 ms ()

## recruit 211 ms

- +149 ms: 24 ms (FunctionCall 24, UpdateLayoutTree 15, Layout 2) first call hn index-H6CmK5hR.js:30
- +173 ms: 24 ms (TimerFire 24, FunctionCall 24) first call ? App-C9Ei8lCG.js:100

## choose 210 ms

- +123 ms: 51 ms (Paint 25, Layerize 12, FunctionCall 6, Commit 5, HitTest 5) first call e Info-aaXuQztv.js:1
- +178 ms: 11 ms (FunctionCall 10) first call hn index-H6CmK5hR.js:30
- +189 ms: 5 ms (TimerFire 4, FunctionCall 4) first call ? ShopCards-w84jH6M7.js:2
- +195 ms: 5 ms (TimerFire 5, FunctionCall 5, UpdateLayoutTree 0, EventDispatch 0) first call ? App-C9Ei8lCG.js:100
- +201 ms: 15 ms (Layerize 7, UpdateLayoutTree 1, FireAnimationFrame 1, PrePaint 1, FunctionCall 1) first call r ShopCards-w84jH6M7.js:1

## pay 199 ms

- +134 ms: 25 ms (Paint 14, Layerize 7, FunctionCall 2, FireAnimationFrame 2, HitTest 1) first call e Info-aaXuQztv.js:1
- +163 ms: 20 ms (TimerFire 20, FunctionCall 20, UpdateLayoutTree 3, Layout 1) first call ca ShopCards-w84jH6M7.js:2
- +185 ms: 20 ms (Paint 13, Layerize 7, UpdateLayoutTree 3, Layout 2, Commit 1) first call tick :12
