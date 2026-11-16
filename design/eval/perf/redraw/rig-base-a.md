# Perf rig: base-a

2026-11-01T08:00:13.321Z · http://localhost:5310 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (5)
- round I: clicks p95 190 ms (bar 100)
- round II: clicks p95 379 ms (bar 100)
- round II: hovers p95 106 ms (bar 100)
- round III: clicks p95 214 ms (bar 100)
- leak: heap 19.6 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 81 / 190 | 30 / 74 | 17 | 2 | 250 | 15 | 2 | 6 | 2363 | 499 | 13 |
| II | 118 / 379 | 55 / 106 | 33 | 3 | 717 | 29 | 6 | 37 | 3539 | 585 | 16.3 |
| III | 155 / 214 | 67 / 84 | 33 | 2 | 733 | 39 | 2 | 2 | 4041 | 595 | 20.3 |

Click phases (34 clicks that redrew the table, ms, median / p90): waiting for the browser 17 / 28 · rules 14 / 29 · React render and layout effects 34 / 70 · effects 16 / 40 · to the frame that shows it 15 / 29 · that frame painted (the rig's next frame) 29 / 53

Leak control on the last turn: unbroken game 5806 elements, 788 listeners, 19.6 MB; after a reload 5280, 730, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 57 p95 97 · choose 8× p50 81 p95 190 · recruit 3× p50 – p95 – · pay 3× p50 143 p95 161 · next-round 1× p50 66 p95 66 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3416 | 33 | 250 | 2 |
| span.tc-line:tcline | 2493 | 33 | 200 | 2 |
| div.path-inner:js | 1954 | 33 | 167 | 2 |
| span.cs-stack:js | 1813 | 33 | 200 | 2 |
| span.worker-fig:panelland-under | 1208 | 33 | 200 | 2 |
| svg.leader:cult-breathe | 1065 | 17 | 133 | 2 |
| g.blink:cult-blink | 1065 | 17 | 133 | 2 |
| img.sprite.scene:cult-shift | 1065 | 17 | 133 | 2 |
| span.tick.num:bump | 1063 | 33 | 133 | 2 |
| path.wash:fill | 398 | 33 | 200 | 5 |
| span.base:opacity | 907 | 33 | 200 | 2 |
| span.worker-fig:panelland | 839 | 33 | 167 | 2 |

Longest frames: 266 ms (style/layout/paint) · 194 ms (hn 160) · 162 ms (hn 150) · 155 ms (hn 20, Nf 104) · 146 ms (Nf 106)

## Round II

Clicks by kind: place 4× p50 96 p95 118 · choose 7× p50 155 p95 206 · recruit 4× p50 133 p95 133 · pay 3× p50 159 p95 168 · pick 3× p50 60 p95 80 · next-round 1× p50 379 p95 379 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5722 | 33 | 234 | 2 |
| span.tc-line:tcline | 3676 | 33 | 233 | 3 |
| span.cs-stack:js | 3013 | 33 | 233 | 3 |
| div.path-inner:js | 2861 | 33 | 234 | 2 |
| span.worker-fig:panelland-under | 1268 | 33 | 233 | 4 |
| svg.leader:cult-breathe | 1236 | 33 | 367 | 4 |
| g.blink:cult-blink | 1236 | 33 | 367 | 4 |
| img.sprite.scene:cult-shift | 1236 | 33 | 367 | 4 |
| img.sprite.scene:cult-breathe | 1236 | 33 | 367 | 4 |
| path.wash:fill | 591 | 50 | 233 | 7 |
| span.base:opacity | 1005 | 33 | 233 | 4 |
| button.card.lt-card:js | 1937 | 33 | 717 | 2 |

Longest frames: 722 ms (style/layout/paint) · 230 ms (style/layout/paint) · 213 ms (hn 187) · 211 ms (hn 186) · 208 ms (hn 190)

## Round III

Clicks by kind: place 5× p50 115 p95 115 · recruit 5× p50 167 p95 179 · pay 5× p50 155 p95 188 · choose 3× p50 184 p95 214 · pick 1× p50 145 p95 145 · next-round 1× p50 68 p95 68 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7949 | 33 | 733 | 2 |
| span.tc-line:tcline | 4329 | 33 | 167 | 2 |
| div.path-inner:js | 3698 | 33 | 217 | 2 |
| span.cs-stack:js | 3399 | 33 | 217 | 2 |
| svg.leader:cult-breathe | 3063 | 33 | 733 | 2 |
| g.blink:cult-blink | 3063 | 33 | 733 | 2 |
| img.sprite.scene:cult-shift | 3063 | 33 | 733 | 2 |
| img.sprite.scene:cult-breathe | 3063 | 33 | 733 | 2 |
| span.tick.num:bump | 2750 | 33 | 133 | 2 |
| span.lead:cult-scheme | 1712 | 33 | 733 | 3 |
| i.cs-min:cs-bob | 1707 | 33 | 733 | 3 |
| i.cs-min:cs-bob-eager | 1620 | 33 | 733 | 3 |

Longest frames: 754 ms (style/layout/paint) · 297 ms (hn 273) · 217 ms (style/layout/paint) · 217 ms (hn 123) · 201 ms (hn 183)
