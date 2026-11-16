# Perf rig: base-3

2026-11-03T16:45:20.108Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (6)
- round I: clicks p95 188 ms (bar 100)
- round I: hovers p95 107 ms (bar 100)
- round II: clicks p95 218 ms (bar 100)
- round III: clicks p95 211 ms (bar 100)
- leak: 5672 elements vs 5093 after a reload
- leak: heap 19.9 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 99 / 188 | 53 / 107 | 33 | 2 | 250 | 7 | 3 | 10 | 2490 | 492 | 13.4 |
| II | 127 / 218 | 44 / 77 | 33 | 2 | 750 | 17 | 1 | 1 | 3575 | 551 | 17.5 |
| III | 123 / 211 | 51 / 91 | 33 | 2 | 883 | 35 | 5 | 40 | 3942 | 577 | 20.7 |

Click phases (43 clicks that redrew the table, ms, median / p90): waiting for the browser 16 / 31 · rules 6 / 14 · React render and layout effects 37 / 79 · effects 14 / 31 · to the frame that shows it 15 / 23 · that frame painted (the rig's next frame) 26 / 54

Leak control on the last turn: unbroken game 5672 elements, 764 listeners, 19.9 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 63 p95 71 · choose 5× p50 79 p95 188 · recruit 3× p50 133 p95 158 · pay 3× p50 99 p95 103 · next-round 1× p50 121 p95 121

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3264 | 33 | 250 | 2 |
| span.cs-stack:js | 1602 | 33 | 167 | 3 |
| span.tc-line:tcline | 1951 | 33 | 100 | 2 |
| div.path-inner:js | 1809 | 17 | 167 | 2 |
| div.piece-flight.piece-res:js | 1536 | 17 | 167 | 2 |
| svg.leader:cult-breathe | 1060 | 33 | 133 | 2 |
| g.blink:cult-blink | 1060 | 33 | 133 | 2 |
| img.sprite.scene:cult-shift | 1060 | 33 | 133 | 2 |
| span.tick.num:bump | 1058 | 33 | 133 | 2 |
| img.sprite.scene:cult-breathe | 1031 | 33 | 133 | 2 |
| span.worker-fig:panelland-under | 835 | 33 | 117 | 2 |
| span.worker:js | 784 | 17 | 117 | 2 |

Longest frames: 266 ms (style/layout/paint) · 169 ms (hn 144) · 141 ms (hn 122) · 117 ms (Lf 91) · 116 ms (hn 72)

## Round II

Clicks by kind: place 4× p50 83 p95 130 · recruit 4× p50 147 p95 210 · pay 4× p50 140 p95 160 · choose 2× p50 218 p95 218 · next-round 1× p50 127 p95 127

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5506 | 33 | 750 | 2 |
| span.cs-stack:js | 2769 | 33 | 183 | 3 |
| span.tc-line:tcline | 3081 | 33 | 183 | 2 |
| div.path-inner:js | 2775 | 33 | 200 | 2 |
| div.piece-flight.piece-res:js | 2453 | 17 | 100 | 2 |
| span.tick.num:bump | 1427 | 33 | 133 | 3 |
| svg.leader:cult-breathe | 1110 | 33 | 133 | 3 |
| g.blink:cult-blink | 1110 | 33 | 133 | 3 |
| img.sprite.scene:cult-shift | 1110 | 33 | 133 | 3 |
| img.sprite.scene:cult-breathe | 1110 | 33 | 133 | 3 |
| div.as-card:js | 1105 | 33 | 183 | 3 |
| button.card.lt-card:js | 1555 | 33 | 300 | 2 |

Longest frames: 765 ms (style/layout/paint) · 263 ms (hn 232) · 184 ms (hn 57) · 173 ms (Lf 139) · 163 ms (hn 150)

## Round III

Clicks by kind: place 5× p50 80 p95 265 · recruit 7× p50 148 p95 199 · pay 8× p50 128 p95 211 · pick 1× p50 170 p95 170 · choose 5× p50 88 p95 183 · next-round 1× p50 62 p95 62

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7667 | 33 | 883 | 2 |
| span.tc-line:tcline | 3859 | 33 | 233 | 2 |
| span.cs-stack:js | 3383 | 33 | 233 | 2 |
| svg.leader:cult-breathe | 2045 | 33 | 883 | 3 |
| g.blink:cult-blink | 2045 | 33 | 883 | 3 |
| img.sprite.scene:cult-shift | 2045 | 33 | 883 | 3 |
| img.sprite.scene:cult-breathe | 2045 | 33 | 883 | 3 |
| div.piece-flight.piece-res:js | 3006 | 33 | 167 | 2 |
| span.tick.num:bump | 2300 | 33 | 117 | 2 |
| div.path-inner:js | 4067 | 33 | 167 | 1 |
| span.worker-fig:panelland-under | 1273 | 33 | 233 | 3 |
| button.card.lt-card:js | 1763 | 33 | 283 | 2 |

Longest frames: 899 ms (style/layout/paint) · 219 ms (hn 187) · 213 ms (hn 199) · 205 ms (hn 189) · 182 ms (hn 7, hn 108)
