# Freeze probe: base-chrome

2026-11-03T18:11:11.996Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 7 min · game finished · 1484 presses every 250 ms
FREEZE BARS FAIL: worst press waited 333 ms (bar 250).


Main thread over the game: busy 302144 ms of 407164 (74%), script 38483, style 30164, layout 7609.

Table renders: 596 begun, 582 committed (14 thrown away and started over).

## Input waiting (how long a press or click waited before the page even looked at it)

| round | turn | presses/clicks over 16 ms | over 100 ms | over 250 ms | over 500 ms | worst wait | total wait ms | p95 to paint |
|---|---|---|---|---|---|---|---|---|
| I | yours | 87 | 1 | 0 | 0 | 182 | 1427 | 200 |
| I | rivals | 194 | 0 | 0 | 0 | 51 | 1309 | 72 |
| II | yours | 117 | 2 | 0 | 0 | 180 | 1896 | 216 |
| II | rivals | 301 | 3 | 0 | 0 | 217 | 2919 | 88 |
| III | yours | 210 | 5 | 1 | 0 | 333 | 3637 | 216 |
| III | rivals | 423 | 2 | 0 | 0 | 180 | 4306 | 80 |

## Long animation frames over 50 ms

| round | turn | frames | blocking ms | total ms | style+layout ms | over 200 ms | worst |
|---|---|---|---|---|---|---|---|
| I | yours | 33 | 1147 | 3089 | 0 | 2 | 226 |
| I | rivals | 30 | 629 | 2291 | 0 | 0 | 120 |
| II | yours | 45 | 1660 | 4261 | 0 | 2 | 244 |
| II | rivals | 54 | 1280 | 4363 | 0 | 1 | 245 |
| III | yours | 72 | 3027 | 7150 | 0 | 3 | 314 |
| III | rivals | 90 | 1557 | 6753 | 0 | 2 | 238 |

Totals: long frames 31679 ms (11469 ms blocking), input waited 15849 ms, 13 presses/clicks waited over 100 ms. Hovers: 24, a card open after 24.

## Scripts in long frames (by entry point)

| entry → function @ source | ms | times | forced style+layout ms | worst |
|---|---|---|---|---|
| MessagePort.onmessage → hn @ index-CXfgIH4P.js:32793 | 12502 | 209 | 5211 | 224 |
| DIV#root.onclick → Lf @ index-CXfgIH4P.js:58919 | 5256 | 56 | 1818 | 1454 |
| DIV#root.onpointerout → Tf @ index-CXfgIH4P.js:59032 | 1006 | 37 | 350 | 100 |
| TimerHandler:setTimeout → xa @ ShopCards-BgHQhBI4.js:58616 | 244 | 17 | 53 | 57 |
| TimerHandler:setTimeout → ? @ App-TMqbY-om.js:23386 | 156 | 5 | 29 | 42 |
| http://localhost:5291/assets/index-CXfgIH4P.js → ? @ index-CXfgIH4P.js:0 | 105 | 1 | 0 | 105 |
| http://localhost:5291/assets/App-TMqbY-om.js → ? @ App-TMqbY-om.js:0 | 93 | 1 | 0 | 93 |
| TimerHandler:setTimeout → ? @ App-TMqbY-om.js:211854 | 63 | 1 | 32 | 63 |
| DOMWindow.onkeydown → ? @ Wheel-DqWfq7Jx.js:10595 | 60 | 1 | 0 | 60 |
| IdleRequestCallback → i @ Wheel-DqWfq7Jx.js:31829 | 48 | 1 | 0 | 48 |
| TimerHandler:setTimeout → ? @ App-TMqbY-om.js:118991 | 47 | 1 | 0 | 47 |
| TimerHandler:setTimeout → ? @ App-TMqbY-om.js:187282 | 45 | 2 | 33 | 24 |
| TimerHandler:setInterval → ? @ :-1 | 41 | 1 | 0 | 41 |
| TimerHandler:setTimeout → ? @ ShopCards-BgHQhBI4.js:38528 | 40 | 4 | 12 | 15 |
| ResizeObserverCallback → ? @ ShopCards-BgHQhBI4.js:115665 | 37 | 1 | 0 | 37 |
| TimerHandler:setTimeout → ? @ App-TMqbY-om.js:211619 | 30 | 2 | 26 | 24 |
| DIV#root.onpointerdown → Lf @ index-CXfgIH4P.js:58919 | 17 | 3 | 14 | 6 |
| IdleRequestCallback → ? @ App-TMqbY-om.js:64077 | 17 | 1 | 0 | 17 |
| FrameRequestCallback → vr @ ShopCards-BgHQhBI4.js:1477 | 14 | 1 | 0 | 14 |
| TimerHandler:setTimeout → ? @ ShopCards-BgHQhBI4.js:87397 | 8 | 1 | 0 | 8 |
| Worker.onmessage → ? @ Info-CQmIlK4H.js:78467 | 7 | 1 | 0 | 7 |
| DOMWindow.onpointerout → e @ Info-CQmIlK4H.js:57043 | 7 | 1 | 0 | 7 |
| DIV#root.onpointerover → Tf @ index-CXfgIH4P.js:59032 | 7 | 1 | 3 | 7 |
| TimerHandler:setTimeout → ? @ ShopCards-BgHQhBI4.js:113510 | 6 | 1 | 0 | 6 |
| TimerHandler:setTimeout → ? @ ShopCards-BgHQhBI4.js:110568 | 6 | 1 | 2 | 6 |

## The 12 longest frames

- round · rival turn setup: 1494 ms (style+layout 0, render 13): DIV#root.onclick→Lf 1454 (forced 765)
- round  rival turn : 497 ms (style+layout 0, render 8): 
- round III your turn choose (animating): 314 ms (style+layout 0, render 14): DIV#root.onpointerout→Tf 21 (forced 9), DIV#root.onclick→Lf 203 (forced 61)
- round III your turn pay (animating): 266 ms (style+layout 0, render 10): DIV#root.onclick→Lf 149 (forced 23)
- round II rival turn choose (animating): 245 ms (style+layout 0, render 9): MessagePort.onmessage→hn 224 (forced 206)
- round II your turn choose: 244 ms (style+layout 0, render 20): MessagePort.onmessage→hn 217 (forced 100)
- round III rival turn wait (animating): 238 ms (style+layout 0, render 23): MessagePort.onmessage→hn 195 (forced 129)
- round III your turn pay: 238 ms (style+layout 0, render 16): DIV#root.onclick→Lf 183 (forced 82)
- round I your turn choose: 226 ms (style+layout 0, render 18): MessagePort.onmessage→hn 198 (forced 49)
- round I your turn pay: 220 ms (style+layout 0, render 9): DIV#root.onclick→Lf 177 (forced 46)
- round · rival turn setup: 218 ms (style+layout 0, render 203): TimerHandler:setTimeout→? 6
- round III rival turn pay (animating): 210 ms (style+layout 0, render 12): MessagePort.onmessage→hn 192 (forced 167)

## The person's clicks

29 clicks timed; 0 changed nothing in 1.5 s (0 of them made while the table was still animating).
- round I: 7 answered, p50 92 ms, p95 305 ms, worst 305 ms (as seen from outside the page, polling every 30 ms)
- round II: 9 answered, p50 134 ms, p95 280 ms, worst 280 ms (as seen from outside the page, polling every 30 ms)
- round III: 13 answered, p50 157 ms, p95 302 ms, worst 302 ms (as seen from outside the page, polling every 30 ms)
