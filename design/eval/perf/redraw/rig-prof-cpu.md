# Perf rig: prof-cpu

2026-11-01T08:17:25.339Z · http://localhost:5311 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (7)
- round I: clicks p95 184 ms (bar 100)
- round II: clicks p95 183 ms (bar 100)
- round III: clicks p95 289 ms (bar 100)
- clicks p95 grows 184 → 289 ms over the game
- leak: 6363 elements vs 5280 after a reload
- leak: 894 listeners vs 730 after a reload
- leak: heap 20.4 MB vs 10.1 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 94 / 184 | 52 / 88 | 33 | 2 | 400 | 32 | 2 | 11 | 2363 | 499 | 13.6 |
| II | 96 / 183 | 51 / 98 | 33 | 2 | 517 | 36 | 7 | 30 | 3539 | 585 | 17 |
| III | 109 / 289 | 49 / 77 | 33 | 2 | 917 | 44 | 2 | 4 | 4041 | 595 | 20.6 |

Click phases (39 clicks that redrew the table, ms, median / p90): waiting for the browser 17 / 39 · rules 12 / 31 · React render and layout effects 32 / 66 · effects 16 / 35 · to the frame that shows it 13 / 26 · that frame painted (the rig's next frame) 22 / 39

Leak control on the last turn: unbroken game 6363 elements, 894 listeners, 20.4 MB; after a reload 5280, 730, 10.1 MB.

## Round I

Clicks by kind: place 3× p50 62 p95 90 · choose 8× p50 89 p95 157 · recruit 3× p50 140 p95 171 · pay 3× p50 146 p95 184 · next-round 1× p50 89 p95 89

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3102 | 17 | 400 | 2 |
| span.tc-line:tcline | 1678 | 33 | 367 | 2 |
| span.cs-stack:js | 1547 | 33 | 317 | 2 |
| svg.leader:cult-breathe | 1112 | 17 | 367 | 2 |
| g.blink:cult-blink | 1112 | 17 | 367 | 2 |
| img.sprite.scene:cult-shift | 1112 | 17 | 367 | 2 |
| span.worker-fig:panelland-under | 700 | 33 | 367 | 3 |
| div.path-inner:js | 1874 | 17 | 150 | 1 |
| div.as-card:js | 836 | 17 | 400 | 2 |
| span.base:opacity | 554 | 33 | 400 | 3 |
| button.fb.lt-rate:opacity | 148 | 133 | 317 | 11 |
| button.card.lt-card:opacity | 148 | 133 | 317 | 11 |

Longest frames: 373 ms (FrameRequestCallback 5) · 371 ms (style/layout/paint) · 369 ms (style/layout/paint) · 339 ms (style/layout/paint) · 312 ms (style/layout/paint)

## Round II

Clicks by kind: place 4× p50 91 p95 96 · choose 7× p50 128 p95 192 · recruit 4× p50 146 p95 149 · pay 3× p50 113 p95 135 · pick 3× p50 57 p95 65 · next-round 1× p50 86 p95 86 · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| span.tc-line:tcline | 3098 | 33 | 517 | 2 |
| b.seat-delta.up:seatdelta | 5752 | 17 | 367 | 1 |
| span.cs-stack:js | 2653 | 33 | 517 | 2 |
| svg.leader:cult-breathe | 1637 | 33 | 517 | 2 |
| g.blink:cult-blink | 1637 | 33 | 517 | 2 |
| img.sprite.scene:cult-shift | 1637 | 33 | 517 | 2 |
| img.sprite.scene:cult-breathe | 1637 | 33 | 517 | 2 |
| span.lead:cult-scheme | 813 | 33 | 517 | 4 |
| i.cs-min:cs-bob | 813 | 33 | 517 | 4 |
| span.base:opacity | 790 | 33 | 517 | 4 |
| div.path-inner:js | 2725 | 17 | 433 | 1 |
| span.worker-fig:panelland-under | 907 | 33 | 367 | 3 |

Longest frames: 535 ms (style/layout/paint) · 518 ms (style/layout/paint) · 501 ms (style/layout/paint) · 486 ms (style/layout/paint) · 442 ms (style/layout/paint)

## Round III

Clicks by kind: place 5× p50 70 p95 77 · recruit 5× p50 121 p95 121 · pay 5× p50 111 p95 224 · choose 3× p50 225 p95 289 · pick 1× p50 96 p95 96 · next-round 1× p50 75 p95 75 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 8169 | 33 | 917 | 2 |
| span.tc-line:tcline | 4553 | 33 | 483 | 2 |
| svg.leader:cult-breathe | 2539 | 33 | 917 | 3 |
| g.blink:cult-blink | 2539 | 33 | 917 | 3 |
| img.sprite.scene:cult-shift | 2539 | 33 | 917 | 3 |
| img.sprite.scene:cult-breathe | 2539 | 33 | 917 | 3 |
| span.cs-stack:js | 3714 | 33 | 417 | 2 |
| span.worker-fig:panelland-under | 1839 | 33 | 433 | 3 |
| span.tick.num:bump | 2523 | 33 | 367 | 2 |
| span.lead:cult-scheme | 1176 | 33 | 917 | 4 |
| i.cs-min:cs-bob-eager | 1174 | 33 | 917 | 4 |
| i.cs-min:cs-bob | 1174 | 33 | 917 | 4 |

Longest frames: 926 ms (style/layout/paint) · 527 ms (style/layout/paint) · 470 ms (style/layout/paint) · 464 ms (style/layout/paint) · 446 ms (style/layout/paint)
