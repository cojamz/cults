# Freeze probe: ans-chrome

2026-11-03T18:11:10.284Z · http://localhost:5292/ · 4x CPU · relaxed · seed 20261028 · 7 min · game finished · 1487 presses every 250 ms
FREEZE BARS FAIL: 1.2% of presses waited over 100 ms (bar 1%).


Main thread over the game: busy 299400 ms of 405031 (74%), script 37991, style 30053, layout 7772.

Table renders: 627 begun, 601 committed (26 thrown away and started over).

## Input waiting (how long a press or click waited before the page even looked at it)

| round | turn | presses/clicks over 16 ms | over 100 ms | over 250 ms | over 500 ms | worst wait | total wait ms | p95 to paint |
|---|---|---|---|---|---|---|---|---|
| I | yours | 92 | 3 | 0 | 0 | 155 | 1245 | 192 |
| I | rivals | 199 | 1 | 0 | 0 | 101 | 1351 | 88 |
| II | yours | 115 | 1 | 0 | 0 | 117 | 1531 | 168 |
| II | rivals | 299 | 3 | 0 | 0 | 141 | 2593 | 72 |
| III | yours | 211 | 5 | 0 | 0 | 185 | 3366 | 184 |
| III | rivals | 427 | 3 | 0 | 0 | 137 | 3756 | 80 |

## Long animation frames over 50 ms

| round | turn | frames | blocking ms | total ms | style+layout ms | over 200 ms | worst |
|---|---|---|---|---|---|---|---|
| I | yours | 39 | 1140 | 3357 | 0 | 1 | 230 |
| I | rivals | 33 | 737 | 2577 | 0 | 0 | 144 |
| II | yours | 40 | 1434 | 3707 | 0 | 1 | 232 |
| II | rivals | 61 | 1335 | 4716 | 0 | 2 | 293 |
| III | yours | 61 | 2589 | 6180 | 0 | 2 | 276 |
| III | rivals | 84 | 1298 | 6124 | 0 | 3 | 269 |

Totals: long frames 30490 ms (10749 ms blocking), input waited 14143 ms, 16 presses/clicks waited over 100 ms. Hovers: 24, a card open after 24.

## Scripts in long frames (by entry point)

| entry → function @ source | ms | times | forced style+layout ms | worst |
|---|---|---|---|---|
| MessagePort.onmessage → hn @ index-Bi2I_2QA.js:32793 | 13143 | 220 | 5740 | 282 |
| DIV#root.onclick → Lf @ index-Bi2I_2QA.js:58919 | 4738 | 57 | 1764 | 1521 |
| DIV#root.onpointerout → Tf @ index-Bi2I_2QA.js:59032 | 676 | 22 | 243 | 70 |
| TimerHandler:setTimeout → xa @ ShopCards-DCKKae4p.js:58616 | 165 | 9 | 37 | 37 |
| http://localhost:5292/assets/App-DL8w0YEX.js → ? @ App-DL8w0YEX.js:0 | 120 | 1 | 0 | 120 |
| http://localhost:5292/assets/index-Bi2I_2QA.js → ? @ index-Bi2I_2QA.js:0 | 93 | 1 | 0 | 93 |
| TimerHandler:setTimeout → ? @ App-DL8w0YEX.js:178327 | 73 | 3 | 9 | 29 |
| TimerHandler:setTimeout → ? @ ShopCards-DCKKae4p.js:38673 | 53 | 2 | 4 | 44 |
| IdleRequestCallback → i @ Wheel-Dhwmg84G.js:31829 | 52 | 1 | 0 | 52 |
| TimerHandler:setInterval → ? @ :-1 | 52 | 2 | 0 | 46 |
| TimerHandler:setTimeout → ? @ App-DL8w0YEX.js:23377 | 51 | 4 | 0 | 23 |
| TimerHandler:setTimeout → ? @ App-DL8w0YEX.js:202899 | 23 | 2 | 10 | 17 |
| DIV#root.onpointerdown → Lf @ index-Bi2I_2QA.js:58919 | 18 | 3 | 15 | 7 |
| TimerHandler:setTimeout → ? @ ShopCards-DCKKae4p.js:110568 | 15 | 2 | 12 | 8 |
| DIV#root.onmouseup → Lf @ index-Bi2I_2QA.js:58919 | 8 | 1 | 0 | 8 |
| IdleRequestCallback → ? @ App-DL8w0YEX.js:64068 | 8 | 1 | 0 | 8 |
| DIV#root.onfocusout → Lf @ index-Bi2I_2QA.js:58919 | 7 | 1 | 3 | 7 |
| TimerHandler:setTimeout → ? @ ShopCards-DCKKae4p.js:113510 | 6 | 1 | 0 | 6 |
| DOMWindow.onpointerdown → e @ ShopCards-DCKKae4p.js:91153 | 5 | 1 | 0 | 5 |

## The 12 longest frames

- round · rival turn setup: 1564 ms (style+layout 0, render 24): DIV#root.onclick→Lf 1521 (forced 845)
- round  rival turn : 782 ms (style+layout 0, render 19): http://localhost:5292/assets/index-Bi2I_2QA.js→? 93
- round II rival turn choose (animating): 293 ms (style+layout 0, render 10): MessagePort.onmessage→hn 282 (forced 258)
- round III your turn choose: 276 ms (style+layout 0, render 21): MessagePort.onmessage→hn 246 (forced 113)
- round III rival turn pay (animating): 269 ms (style+layout 0, render 18): MessagePort.onmessage→hn 238 (forced 204)
- round · rival turn setup: 263 ms (style+layout 0, render 258): 
- round III rival turn choose: 247 ms (style+layout 0, render 135): MessagePort.onmessage→hn 105 (forced 59)
- round III your turn place (animating): 238 ms (style+layout 0, render 25): MessagePort.onmessage→hn 191 (forced 54)
- round II your turn choose: 232 ms (style+layout 0, render 13): MessagePort.onmessage→hn 213 (forced 114)
- round I your turn choose: 230 ms (style+layout 0, render 17): MessagePort.onmessage→hn 197 (forced 64)
- round III rival turn wait (animating): 219 ms (style+layout 0, render 21): MessagePort.onmessage→hn 6, MessagePort.onmessage→hn 178 (forced 124)
- round II rival turn place: 203 ms (style+layout 0, render 57): MessagePort.onmessage→hn 145 (forced 76)

## The person's clicks

29 clicks timed; 0 changed nothing in 1.5 s (0 of them made while the table was still animating).
- round I: 7 answered, p50 130 ms, p95 242 ms, worst 242 ms (as seen from outside the page, polling every 30 ms)
- round II: 9 answered, p50 128 ms, p95 200 ms, worst 200 ms (as seen from outside the page, polling every 30 ms)
- round III: 13 answered, p50 148 ms, p95 258 ms, worst 258 ms (as seen from outside the page, polling every 30 ms)
