# Freeze probe: spin-base

2026-11-07T04:47:07.793Z · http://localhost:5301 · 4x CPU · relaxed · seed 20261028 · 14 min · game finished · 3322 presses every 250 ms
Freeze bars pass: worst press 151 ms, 0.0% over 100 ms, no ignored clicks.


Main thread over the game: busy 298698 ms of 858123 (35%), script 27241, style 32950, layout 5097.

Table renders: 515 begun, 507 committed (8 thrown away and started over).

## Input waiting (how long a press or click waited before the page even looked at it)

| round | turn | presses/clicks over 16 ms | over 100 ms | over 250 ms | over 500 ms | worst wait | total wait ms | p95 to paint |
|---|---|---|---|---|---|---|---|---|
| I | yours | 68 | 0 | 0 | 0 | 90 | 713 | 144 |
| I | rivals | 382 | 0 | 0 | 0 | 53 | 1111 | 48 |
| II | yours | 129 | 0 | 0 | 0 | 90 | 1113 | 136 |
| II | rivals | 573 | 0 | 0 | 0 | 38 | 1869 | 48 |
| III | yours | 165 | 0 | 0 | 0 | 82 | 1326 | 136 |
| III | rivals | 1008 | 1 | 0 | 0 | 151 | 4021 | 48 |

## Long animation frames over 50 ms

| round | turn | frames | blocking ms | total ms | style+layout ms | over 200 ms | worst |
|---|---|---|---|---|---|---|---|
| I | yours | 22 | 722 | 2000 | 0 | 0 | 178 |
| I | rivals | 14 | 183 | 973 | 0 | 0 | 108 |
| II | yours | 36 | 1208 | 3283 | 0 | 0 | 178 |
| II | rivals | 23 | 270 | 1533 | 0 | 0 | 107 |
| III | yours | 44 | 1535 | 4050 | 0 | 0 | 185 |
| III | rivals | 32 | 771 | 2500 | 0 | 0 | 200 |

Totals: long frames 16226 ms (5667 ms blocking), input waited 10246 ms, 1 presses/clicks waited over 100 ms. Hovers: 24, a card open after 24.

## Scripts in long frames (by entry point)

| entry → function @ source | ms | times | forced style+layout ms | worst |
|---|---|---|---|---|
| MessagePort.onmessage → Qt @ index-9ZmZYItL.js:33045 | 6838 | 119 | 2894 | 155 |
| DIV#root.onclick → vv @ index-9ZmZYItL.js:206607 | 3168 | 44 | 911 | 793 |
| DIV#root.onpointerout → hv @ index-9ZmZYItL.js:206700 | 487 | 21 | 158 | 73 |
| http://localhost:5301/assets/App-DOe12rRx.js → ? @ App-DOe12rRx.js:0 | 67 | 1 | 0 | 67 |
| http://localhost:5301/assets/index-9ZmZYItL.js → ? @ index-9ZmZYItL.js:0 | 55 | 1 | 0 | 55 |
| IdleRequestCallback → u @ Wheel-BVgqjOGw.js:41534 | 53 | 1 | 0 | 53 |
| TimerHandler:setTimeout → ? @ App-DOe12rRx.js:262390 | 49 | 1 | 5 | 49 |
| TimerHandler:setTimeout → ? @ App-DOe12rRx.js:226205 | 36 | 1 | 7 | 36 |
| TimerHandler:setTimeout → ? @ ShopCards-CHJ4xjJu.js:139697 | 29 | 2 | 23 | 18 |
| DIV#root.onpointerover → hv @ index-9ZmZYItL.js:206700 | 10 | 1 | 4 | 10 |
| DIV#root.onpointerdown → vv @ index-9ZmZYItL.js:206607 | 7 | 1 | 6 | 7 |

## The 12 longest frames

- round · rival turn setup: 823 ms (style+layout 0, render 10): DIV#root.onclick→vv 793 (forced 186)
- round  rival turn : 367 ms (style+layout 0, render 0): http://localhost:5301/assets/index-9ZmZYItL.js→? 55
- round III rival turn wait (animating): 200 ms (style+layout 0, render 198): 
- round III your turn place (animating): 185 ms (style+layout 0, render 14): MessagePort.onmessage→Qt 155 (forced 55)
- round III your turn choose: 180 ms (style+layout 0, render 17): MessagePort.onmessage→Qt 144 (forced 56)
- round I your turn setup (animating): 178 ms (style+layout 0, render 7): DIV#root.onclick→vv 143 (forced 29)
- round II your turn choose: 178 ms (style+layout 0, render 16): MessagePort.onmessage→Qt 145 (forced 51)
- round I your turn choose: 156 ms (style+layout 0, render 13): MessagePort.onmessage→Qt 138 (forced 78)
- round III your turn choose: 153 ms (style+layout 0, render 44): MessagePort.onmessage→Qt 101 (forced 10)
- round I your turn choose: 144 ms (style+layout 0, render 15): MessagePort.onmessage→Qt 123 (forced 44)
- round  rival turn over: 144 ms (style+layout 0, render 17): MessagePort.onmessage→Qt 6, MessagePort.onmessage→Qt 119 (forced 67)
- round II your turn place (animating): 143 ms (style+layout 0, render 10): MessagePort.onmessage→Qt 131 (forced 59)

## The person's clicks

27 clicks timed; 0 changed nothing in 1.5 s (0 of them made while the table was still animating).
- round I: 7 answered, p50 71 ms, p95 116 ms, worst 116 ms (as seen from outside the page, polling every 30 ms)
- round II: 9 answered, p50 86 ms, p95 1507 ms, worst 1507 ms (as seen from outside the page, polling every 30 ms)
- round III: 11 answered, p50 97 ms, p95 134 ms, worst 134 ms (as seen from outside the page, polling every 30 ms)
