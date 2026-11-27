# Perf rig: base-2

2026-11-03T17:01:05.654Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (6)
- round I: clicks p95 283 ms (bar 100)
- round II: clicks p95 264 ms (bar 100)
- round III: clicks p95 193 ms (bar 100)
- leak: 6287 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 19.9 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 107 / 283 | 47 / 87 | 33 | 2 | 267 | 11 | 2 | 8 | 2490 | 492 | 13.4 |
| II | 110 / 264 | 57 / 79 | 33 | 2 | 683 | 22 | 1 | 2 | 3575 | 549 | 17.4 |
| III | 128 / 193 | 56 / 88 | 33 | 2 | 817 | 38 | 6 | 38 | 3942 | 577 | 20.6 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 18 / 31 · rules 5 / 14 · React render and layout effects 40 / 66 · effects 14 / 26 · to the frame that shows it 15 / 29 · that frame painted (the rig's next frame) 27 / 46

Leak control on the last turn: unbroken game 6287 elements, 856 listeners, 19.9 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 71 p95 90 · choose 5× p50 91 p95 283 · recruit 3× p50 116 p95 116 · pay 3× p50 107 p95 109 · next-round 1× p50 140 p95 140

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3360 | 17 | 267 | 2 |
| span.cs-stack:js | 1784 | 33 | 183 | 3 |
| span.tc-line:tcline | 2003 | 33 | 150 | 2 |
| div.path-inner:js | 1844 | 17 | 183 | 2 |
| div.piece-flight.piece-res:js | 1468 | 17 | 183 | 2 |
| span.worker-fig:panelland-under | 814 | 33 | 117 | 2 |
| span.base:opacity | 651 | 33 | 117 | 2 |
| span.tick.num:bump | 1102 | 33 | 117 | 1 |
| svg.leader:cult-breathe | 1093 | 17 | 250 | 1 |
| g.blink:cult-blink | 1093 | 17 | 250 | 1 |
| img.sprite.scene:cult-shift | 1093 | 17 | 250 | 1 |
| img.sprite.scene:cult-breathe | 1093 | 17 | 250 | 1 |

Longest frames: 276 ms (style/layout/paint) · 202 ms (hn 172) · 195 ms (hn 171) · 143 ms (hn 81) · 139 ms (hn 119)

## Round II

Clicks by kind: place 4× p50 78 p95 91 · recruit 4× p50 131 p95 174 · pay 4× p50 133 p95 136 · choose 2× p50 264 p95 264 · next-round 1× p50 110 p95 110

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5627 | 33 | 683 | 2 |
| span.cs-stack:js | 2733 | 33 | 250 | 3 |
| span.tc-line:tcline | 3164 | 33 | 167 | 2 |
| div.as-card:js | 1178 | 33 | 167 | 3 |
| button.card.lt-card:js | 1580 | 33 | 167 | 2 |
| span.tick.num:bump | 1476 | 33 | 117 | 2 |
| div.path-inner:js | 2906 | 33 | 100 | 1 |
| span.worker-fig:panelland-under | 928 | 33 | 150 | 3 |
| div.piece-flight.piece-res:js | 2471 | 17 | 167 | 1 |
| svg.leader:cult-breathe | 1191 | 33 | 267 | 2 |
| g.blink:cult-blink | 1191 | 33 | 267 | 2 |
| img.sprite.scene:cult-shift | 1191 | 33 | 267 | 2 |

Longest frames: 690 ms (style/layout/paint) · 240 ms (Lf 180) · 180 ms (hn 157) · 171 ms (style/layout/paint) · 142 ms (hn 72)

## Round III

Clicks by kind: place 5× p50 113 p95 174 · recruit 7× p50 149 p95 219 · pay 8× p50 141 p95 176 · pick 1× p50 123 p95 123 · choose 5× p50 91 p95 193 · next-round 1× p50 65 p95 65

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7632 | 33 | 817 | 3 |
| span.tc-line:tcline | 3784 | 33 | 250 | 3 |
| span.cs-stack:js | 3356 | 33 | 250 | 3 |
| div.path-inner:js | 4076 | 33 | 200 | 2 |
| svg.leader:cult-breathe | 2103 | 33 | 817 | 3 |
| g.blink:cult-blink | 2103 | 33 | 817 | 3 |
| img.sprite.scene:cult-shift | 2103 | 33 | 817 | 3 |
| img.sprite.scene:cult-breathe | 2103 | 33 | 817 | 3 |
| div.piece-flight.piece-res:js | 3132 | 33 | 233 | 2 |
| span.worker-fig:panelland-under | 1245 | 33 | 250 | 4 |
| span.tick.num:bump | 2232 | 33 | 133 | 2 |
| i.cs-min:cs-bob | 794 | 33 | 817 | 5 |

Longest frames: 836 ms (style/layout/paint) · 240 ms (hn 228) · 228 ms (hn 220) · 224 ms (hn 108) · 219 ms (hn 176)
