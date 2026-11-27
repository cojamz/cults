# Freeze probe: live569-ff

2026-11-04T17:39:57.504Z · http://localhost:5297/ · 4x CPU · relaxed · seed 20261028 · 9 min · game finished · 1982 presses every 250 ms
Freeze bars pass: worst press 161 ms, 0.7% over 100 ms, no ignored clicks.


Main thread over the game: busy 356794 ms of 527394 (68%), script 39562, style 43084, layout 7798.

Table renders: 491 begun, 480 committed (11 thrown away and started over).

## Input waiting (how long a press or click waited before the page even looked at it)

| round | turn | presses/clicks over 16 ms | over 100 ms | over 250 ms | over 500 ms | worst wait | total wait ms | p95 to paint |
|---|---|---|---|---|---|---|---|---|
| I | yours | 67 | 0 | 0 | 0 | 91 | 650 | 144 |
| I | rivals | 264 | 0 | 0 | 0 | 40 | 1371 | 56 |
| II | yours | 118 | 2 | 0 | 0 | 114 | 1326 | 168 |
| II | rivals | 404 | 1 | 0 | 0 | 130 | 2688 | 56 |
| III | yours | 179 | 3 | 0 | 0 | 161 | 2324 | 184 |
| III | rivals | 636 | 4 | 0 | 0 | 123 | 5117 | 64 |

## Long animation frames over 50 ms

| round | turn | frames | blocking ms | total ms | style+layout ms | over 200 ms | worst |
|---|---|---|---|---|---|---|---|
| I | yours | 22 | 596 | 1938 | 0 | 0 | 138 |
| I | rivals | 42 | 733 | 3026 | 0 | 0 | 155 |
| II | yours | 41 | 1515 | 3832 | 0 | 2 | 244 |
| II | rivals | 61 | 1559 | 4956 | 0 | 2 | 239 |
| III | yours | 53 | 2264 | 5210 | 0 | 0 | 196 |
| III | rivals | 111 | 1898 | 8062 | 0 | 2 | 327 |

Totals: long frames 30178 ms (10087 ms blocking), input waited 13823 ms, 11 presses/clicks waited over 100 ms. Hovers: 24, a card open after 24.

## Scripts in long frames (by entry point)

| entry → function @ source | ms | times | forced style+layout ms | worst |
|---|---|---|---|---|
| MessagePort.onmessage → hn @ index-vj1vL_Ts.js:32824 | 11973 | 220 | 5065 | 284 |
| DIV#root.onclick → Lf @ index-vj1vL_Ts.js:58950 | 4004 | 50 | 1209 | 935 |
| IdleRequestCallback → ? @ Wheel-DjZoFHZ6.js:3738 | 2037 | 42 | 6 | 81 |
| DIV#root.onpointerout → Tf @ index-vj1vL_Ts.js:59063 | 509 | 20 | 165 | 79 |
| TimerHandler:setTimeout → Ba @ ShopCards-FpYZoSRD.js:68276 | 142 | 9 | 37 | 35 |
| http://localhost:5297/assets/App-C8gTvIKA.js → ? @ App-C8gTvIKA.js:0 | 106 | 1 | 0 | 106 |
| TimerHandler:setTimeout → ? @ App-C8gTvIKA.js:215036 | 77 | 1 | 41 | 77 |
| BODY.onpointerout → Tf @ index-vj1vL_Ts.js:59063 | 60 | 2 | 8 | 36 |
| http://localhost:5297/assets/index-vj1vL_Ts.js → ? @ index-vj1vL_Ts.js:0 | 49 | 1 | 0 | 49 |
| PerformanceObserverCallback → ? @ :-1 | 39 | 1 | 0 | 39 |
| DIV#root.onpointerdown → Lf @ index-vj1vL_Ts.js:58950 | 30 | 5 | 21 | 7 |
| TimerHandler:setTimeout → ? @ App-C8gTvIKA.js:23434 | 30 | 3 | 0 | 14 |
| DOMWindow.onpointerout → e @ Info-CRGestvT.js:58260 | 28 | 1 | 0 | 28 |
| TimerHandler:setTimeout → ? @ App-C8gTvIKA.js:189973 | 25 | 1 | 0 | 25 |
| TimerHandler:setTimeout → ? @ ShopCards-FpYZoSRD.js:122155 | 22 | 2 | 10 | 12 |
| TimerHandler:setTimeout → ? @ App-C8gTvIKA.js:214801 | 19 | 1 | 18 | 19 |
| TimerHandler:setTimeout → ? @ ShopCards-FpYZoSRD.js:47766 | 18 | 2 | 13 | 12 |
| TimerHandler:setTimeout → ? @ ShopCards-FpYZoSRD.js:47911 | 14 | 2 | 9 | 8 |
| BlobCallback → ? @ Wheel-DjZoFHZ6.js:3532 | 8 | 1 | 0 | 8 |
| import.then → ? @ index-vj1vL_Ts.js:167073 | 7 | 1 | 0 | 7 |
| Worker.onmessage → ? @ Info-CRGestvT.js:79747 | 5 | 1 | 0 | 5 |

## The 12 longest frames

- round · your turn setup: 972 ms (style+layout 0, render 13): DIV#root.onclick→Lf 935 (forced 303)
- round  rival turn : 432 ms (style+layout 0, render 4): 
- round III rival turn wait (animating): 327 ms (style+layout 0, render 24): MessagePort.onmessage→hn 284 (forced 174)
- round II your turn choose: 244 ms (style+layout 0, render 14): MessagePort.onmessage→hn 224 (forced 77)
- round · your turn setup: 242 ms (style+layout 0, render 211): MessagePort.onmessage→hn 21
- round II rival turn place: 239 ms (style+layout 0, render 91): MessagePort.onmessage→hn 120 (forced 72)
- round II rival turn wait (animating): 216 ms (style+layout 0, render 18): MessagePort.onmessage→hn 182 (forced 114)
- round II your turn choose: 207 ms (style+layout 0, render 15): MessagePort.onmessage→hn 179 (forced 116)
- round III rival turn reckon: 203 ms (style+layout 0, render 184): MessagePort.onmessage→hn 17
- round III your turn pay (animating): 196 ms (style+layout 0, render 9): DIV#root.onclick→Lf 143 (forced 26)
- round III your turn choose: 194 ms (style+layout 0, render 24): MessagePort.onmessage→hn 156 (forced 76)
- round  rival turn : 193 ms (style+layout 0, render 26): MessagePort.onmessage→hn 85

## The person's clicks

29 clicks timed; 0 changed nothing in 1.5 s (0 of them made while the table was still animating).
- round I: 7 answered, p50 111 ms, p95 140 ms, worst 140 ms (as seen from outside the page, polling every 30 ms)
- round II: 10 answered, p50 132 ms, p95 205 ms, worst 205 ms (as seen from outside the page, polling every 30 ms)
- round III: 12 answered, p50 145 ms, p95 236 ms, worst 236 ms (as seen from outside the page, polling every 30 ms)
