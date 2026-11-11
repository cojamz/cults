# Perf rig: base-2

2026-11-03T16:15:15.397Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (9)
- round I: clicks p95 231 ms (bar 100)
- round I: hovers p95 106 ms (bar 100)
- round II: clicks p95 242 ms (bar 100)
- round II: hovers p95 121 ms (bar 100)
- round III: clicks p95 226 ms (bar 100)
- round III: hovers p95 142 ms (bar 100)
- leak: 6290 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 19.8 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 118 / 231 | 59 / 106 | 33 | 3 | 283 | 19 | 4 | 20 | 2490 | 492 | 13.4 |
| II | 101 / 242 | 61 / 121 | 33 | 3 | 617 | 21 | 1 | 4 | 3575 | 549 | 17.4 |
| III | 107 / 226 | 49 / 142 | 33 | 3 | 850 | 33 | 4 | 24 | 3945 | 577 | 20.3 |

Click phases (43 clicks that redrew the table, ms, median / p90): waiting for the browser 22 / 39 · rules 6 / 12 · React render and layout effects 42 / 75 · effects 17 / 38 · to the frame that shows it 17 / 29 · that frame painted (the rig's next frame) 26 / 61

Leak control on the last turn: unbroken game 6290 elements, 856 listeners, 19.8 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 84 p95 231 · choose 5× p50 116 p95 212 · recruit 3× p50 170 p95 201 · pay 3× p50 113 p95 152 · next-round 1× p50 118 p95 118

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3143 | 33 | 283 | 3 |
| span.tc-line:tcline | 1886 | 33 | 217 | 4 |
| span.cs-stack:js | 1563 | 33 | 217 | 4 |
| span.worker-fig:panelland-under | 804 | 33 | 217 | 5 |
| div.path-inner:js | 1804 | 33 | 150 | 2 |
| span.tick.num:bump | 1069 | 33 | 117 | 3 |
| div.piece-flight.piece-res:js | 1501 | 33 | 167 | 2 |
| path.wash:fill | 313 | 67 | 183 | 8 |
| span.base:opacity | 612 | 33 | 217 | 4 |
| span.tick.dip:bump | 588 | 33 | 167 | 4 |
| button.fb.lt-rate:opacity | 164 | 83 | 183 | 14 |
| button.card.lt-card:opacity | 164 | 83 | 183 | 14 |

Longest frames: 297 ms (style/layout/paint) · 177 ms (hn 148) · 173 ms (hn 153) · 157 ms (hn 123) · 151 ms (hn 135)

## Round II

Clicks by kind: place 4× p50 68 p95 78 · recruit 4× p50 172 p95 176 · pay 4× p50 101 p95 103 · choose 2× p50 242 p95 242 · next-round 1× p50 93 p95 93

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5459 | 33 | 617 | 2 |
| span.tc-line:tcline | 3125 | 33 | 167 | 3 |
| span.cs-stack:js | 2736 | 33 | 200 | 3 |
| div.path-inner:js | 2738 | 33 | 200 | 2 |
| div.piece-flight.piece-res:js | 2409 | 33 | 200 | 2 |
| span.tick.num:bump | 1459 | 33 | 150 | 3 |
| button.card.lt-card:js | 1512 | 33 | 217 | 2 |
| path.wash:fill | 307 | 67 | 217 | 9 |
| div.as-card:js | 1365 | 33 | 200 | 2 |
| span.worker-fig:panelland-under | 850 | 33 | 167 | 3 |
| span.cs-member:js | 635 | 33 | 133 | 4 |
| span.base:opacity | 781 | 33 | 167 | 3 |

Longest frames: 630 ms (style/layout/paint) · 217 ms (hn 77) · 184 ms (Lf 153) · 175 ms (hn 148) · 153 ms (hn 132)

## Round III

Clicks by kind: place 5× p50 78 p95 91 · recruit 7× p50 151 p95 226 · pay 8× p50 183 p95 203 · pick 1× p50 104 p95 104 · choose 5× p50 87 p95 273 · next-round 1× p50 88 p95 88

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7495 | 33 | 850 | 3 |
| span.tc-line:tcline | 3638 | 33 | 250 | 4 |
| span.cs-stack:js | 3405 | 33 | 250 | 4 |
| div.path-inner:js | 3963 | 33 | 167 | 2 |
| svg.leader:cult-breathe | 2069 | 33 | 850 | 3 |
| g.blink:cult-blink | 2069 | 33 | 850 | 3 |
| img.sprite.scene:cult-shift | 2069 | 33 | 850 | 3 |
| img.sprite.scene:cult-breathe | 2069 | 33 | 850 | 3 |
| span.worker-fig:panelland-under | 1200 | 33 | 250 | 5 |
| div.piece-flight.piece-res:js | 2734 | 33 | 250 | 2 |
| i.cs-min:cs-bob | 759 | 50 | 850 | 7 |
| i.cs-min:cs-bob-eager | 759 | 50 | 850 | 7 |

Longest frames: 854 ms (style/layout/paint) · 240 ms (hn 104) · 240 ms (hn 228) · 215 ms (hn 202) · 204 ms (hn 192)
