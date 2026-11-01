# Main thread in slow clicks: prof-trace

41 clicks over 100 ms, traced. Nested kinds overlap (a FunctionCall holds the style and layout it forces; RunTask holds everything).

| kind | ms | count | ms per click |
|---|---|---|---|
| RunTask | 9941 | 4175 | 242 |
| FunctionCall | 4615 | 6324 | 113 |
| EventDispatch | 4171 | 1295 | 102 |
| UpdateLayoutTree | 1269 | 658 | 31 |
| Layerize | 860 | 341 | 21 |
| Paint | 841 | 1234 | 21 |
| Layout | 575 | 237 | 14 |
| PrePaint | 418 | 1058 | 10 |
| Commit | 396 | 342 | 10 |
| FireAnimationFrame | 382 | 809 | 9 |
| HitTest | 379 | 417 | 9 |
| TimerFire | 133 | 105 | 3 |
| UpdateLayer | 69 | 10906 | 2 |
| MinorGC | 35 | 6 | 1 |
| V8.GC_SCAVENGER | 30 | 6 | 1 |

## Style and layout by who asked

A JS frame means it was forced mid-script; (frame) is the browser's own pass before paint.

| ms | count | per click | kind ← asked by |
|---|---|---|---|
| 519 | 369 | 9.0 | UpdateLayoutTree ← (frame) |
| 156 | 103 | 2.5 | Layout ← (frame) |
| 149 | 8 | 0.2 | UpdateLayoutTree ← place App-CLV6Bl0Q.js:4597 |
| 84 | 15 | 0.4 | Layout ← shown ShopCards-B2z8DmQp.js:2175 |
| 79 | 22 | 0.5 | UpdateLayoutTree ← Jk index-Sd7PAssw.js:5958 |
| 71 | 18 | 0.4 | UpdateLayoutTree ← shown ShopCards-B2z8DmQp.js:2175 |
| 68 | 38 | 0.9 | UpdateLayoutTree ← (anon) ShopCards-B2z8DmQp.js:82 |
| 59 | 56 | 1.4 | UpdateLayoutTree ← check :7098 |
| 50 | 8 | 0.2 | Layout ← place App-CLV6Bl0Q.js:4597 |
| 40 | 4 | 0.1 | Layout ← (anon) App-CLV6Bl0Q.js:7240 |
| 38 | 3 | 0.1 | UpdateLayoutTree ← (anon) ShopCards-B2z8DmQp.js:247 |
| 37 | 28 | 0.7 | UpdateLayoutTree ← expectHitTarget :7370 |
| 36 | 26 | 0.6 | UpdateLayoutTree ← (anon) Info-oLGV3Xom.js:1313 |
| 35 | 8 | 0.2 | Layout ← Jk index-Sd7PAssw.js:5958 |
| 26 | 10 | 0.2 | UpdateLayoutTree ← (anon) Info-oLGV3Xom.js:1678 |
| 26 | 4 | 0.1 | Layout ← over2 ShopCards-B2z8DmQp.js:4552 |
| 25 | 17 | 0.4 | Layout ← (anon) ShopCards-B2z8DmQp.js:82 |
| 23 | 1 | 0.0 | UpdateLayoutTree ← bf index-Sd7PAssw.js:2931 |
| 23 | 16 | 0.4 | Layout ← expectHitTarget :7370 |
| 21 | 13 | 0.3 | Layout ← (anon) Info-oLGV3Xom.js:1313 |
| 20 | 4 | 0.1 | UpdateLayoutTree ← fade App-CLV6Bl0Q.js:5116 |
| 18 | 15 | 0.4 | UpdateLayoutTree ← (anon) Info-oLGV3Xom.js:1291 |
| 17 | 2 | 0.0 | UpdateLayoutTree ← (anon) Info-oLGV3Xom.js:1361 |
| 15 | 2 | 0.0 | Layout ← (anon) ShopCards-B2z8DmQp.js:3256 |
| 15 | 4 | 0.1 | UpdateLayoutTree ← over2 ShopCards-B2z8DmQp.js:4552 |
| 14 | 3 | 0.1 | Layout ← (anon) ShopCards-B2z8DmQp.js:247 |
| 13 | 4 | 0.1 | Layout ← fade App-CLV6Bl0Q.js:5116 |
| 13 | 4 | 0.1 | UpdateLayoutTree ← ua index-Sd7PAssw.js:1400 |
| 13 | 2 | 0.0 | UpdateLayoutTree ← (anon) ShopCards-B2z8DmQp.js:3256 |
| 12 | 10 | 0.2 | Layout ← (anon) Info-oLGV3Xom.js:1678 |

## choose 315 ms

- +65 ms: 29 ms (Layerize 9, Paint 6, FunctionCall 4, FireAnimationFrame 3, Commit 3) first call td index-Sd7PAssw.js:2478
- +94 ms: 12 ms (FireAnimationFrame 3, FunctionCall 3, Commit 2, UpdateLayoutTree 2, PrePaint 2) first call tick :12
- +106 ms: 77 ms (FunctionCall 77, UpdateLayoutTree 18, Layout 5, EventDispatch 2) first call R2 index-Sd7PAssw.js:1131
- +187 ms: 94 ms (Paint 51, UpdateLayoutTree 26, Layerize 13, PrePaint 12, FireAnimationFrame 4) first call at Info-oLGV3Xom.js:1742
- +282 ms: 7 ms (FunctionCall 7) first call R2 index-Sd7PAssw.js:1131

## choose 269 ms

- +230 ms: 6 ms (TimerFire 6, FunctionCall 6) first call tick ShopCards-B2z8DmQp.js:2068
- +238 ms: 21 ms (Layerize 7, UpdateLayoutTree 2, Paint 2, Commit 2, Layout 1) first call off ShopCards-B2z8DmQp.js:185

## choose 269 ms

- +190 ms: 39 ms (Paint 23, Layerize 8, Commit 5, FunctionCall 3, FireAnimationFrame 3) first call at Info-oLGV3Xom.js:1742
- +234 ms: 14 ms (TimerFire 13, FunctionCall 12, UpdateLayoutTree 3, Layout 2) first call tick ShopCards-B2z8DmQp.js:2068
- +250 ms: 17 ms (Paint 6, Layerize 3, UpdateLayoutTree 3, Layout 1, FireAnimationFrame 1) first call off ShopCards-B2z8DmQp.js:185

## choose 227 ms

- +150 ms: 37 ms (Paint 27, Layerize 10, FunctionCall 5, FireAnimationFrame 3, EventDispatch 2) first call at Info-oLGV3Xom.js:1742
- +188 ms: 16 ms (FunctionCall 15) first call R2 index-Sd7PAssw.js:1131
- +208 ms: 10 ms (Layerize 7, Commit 1, UpdateLayer 1, FunctionCall 1, Layout 0) first call ? index-Sd7PAssw.js:6584

## choose 213 ms

- +137 ms: 34 ms (Paint 27, Layerize 8, FunctionCall 3, Commit 2, FireAnimationFrame 2) first call at Info-oLGV3Xom.js:1742
- +172 ms: 4 ms (FunctionCall 0) first call R2 index-Sd7PAssw.js:1131
- +181 ms: 4 ms (FireAnimationFrame 1, Commit 1, UpdateLayer 1, FunctionCall 0, UpdateLayoutTree 0) first call tick :12

## recruit 208 ms

- +73 ms: 35 ms (Paint 21, Layerize 7, Commit 5, PrePaint 4, HitTest 4) first call tick :12
- +118 ms: 54 ms (FunctionCall 53, UpdateLayoutTree 8, Layout 5) first call R2 index-Sd7PAssw.js:1131
