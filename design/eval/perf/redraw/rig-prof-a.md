# Perf rig: prof-a

2026-11-01T08:09:15.093Z · http://localhost:5311 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (6)
- round I: clicks p95 254 ms (bar 100)
- round II: clicks p95 215 ms (bar 100)
- round III: clicks p95 249 ms (bar 100)
- leak: 6365 elements vs 5282 after a reload
- leak: 901 listeners vs 736 after a reload
- leak: heap 22.7 MB vs 10.4 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 102 / 254 | 54 / 87 | 17 | 2 | 217 | 19 | 4 | 12 | 2366 | 506 | 13.9 |
| II | 135 / 215 | 66 / 91 | 17 | 2 | 450 | 25 | 7 | 39 | 3530 | 626 | 17.6 |
| III | 164 / 249 | 64 / 78 | 33 | 2 | 633 | 33 | 4 | 24 | 4043 | 604 | 22.2 |

Click phases (35 clicks that redrew the table, ms, median / p90): waiting for the browser 17 / 29 · rules 12 / 25 · React render and layout effects 38 / 65 · effects 20 / 42 · to the frame that shows it 16 / 45 · that frame painted (the rig's next frame) 30 / 48

Leak control on the last turn: unbroken game 6365 elements, 901 listeners, 22.7 MB; after a reload 5282, 736, 10.4 MB.

## Round I

Clicks by kind: place 3× p50 85 p95 85 · choose 8× p50 94 p95 254 · recruit 3× p50 141 p95 141 · pay 3× p50 140 p95 141 · next-round 1× p50 148 p95 148 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3237 | 33 | 217 | 2 |
| span.tc-line:tcline | 1923 | 33 | 167 | 2 |
| span.cs-stack:js | 1845 | 33 | 150 | 2 |
| span.tick.num:bump | 1026 | 33 | 83 | 2 |
| div.path-inner:js | 1740 | 17 | 167 | 1 |
| div.as-card:js | 753 | 17 | 167 | 2 |
| svg.leader:cult-breathe | 1487 | 17 | 217 | 1 |
| g.blink:cult-blink | 1487 | 17 | 217 | 1 |
| img.sprite.scene:cult-shift | 1487 | 17 | 217 | 1 |
| span.worker:js | 733 | 33 | 117 | 2 |
| img.sprite.scene:cult-breathe | 1438 | 17 | 217 | 1 |
| div.piece-flight.piece-res:js | 1433 | 17 | 167 | 1 |

Longest frames: 228 ms (style/layout/paint) · 202 ms (R2 164) · 137 ms (R2 86) · 135 ms (sd 99) · 133 ms (R2 74)

## Round II

Clicks by kind: place 4× p50 – p95 – · choose 7× p50 157 p95 215 · recruit 4× p50 135 p95 135 · pay 3× p50 150 p95 157 · pick 3× p50 67 p95 76 · next-round 1× p50 142 p95 142 · 7 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5921 | 33 | 217 | 2 |
| span.tc-line:tcline | 3365 | 33 | 217 | 2 |
| span.cs-stack:js | 3184 | 33 | 217 | 2 |
| svg.leader:cult-breathe | 2682 | 17 | 183 | 2 |
| g.blink:cult-blink | 2682 | 17 | 183 | 2 |
| img.sprite.scene:cult-shift | 2682 | 17 | 183 | 2 |
| img.sprite.scene:cult-breathe | 2682 | 17 | 183 | 2 |
| button.card.lt-card:js | 1869 | 17 | 450 | 2 |
| span.lead:cult-scheme | 1848 | 17 | 183 | 2 |
| i.cs-min:cs-bob | 1848 | 17 | 183 | 2 |
| i.cs-min:cs-bob-eager | 1763 | 17 | 183 | 2 |
| span.tick.num:bump | 1502 | 33 | 183 | 2 |

Longest frames: 472 ms (style/layout/paint) · 200 ms (R2 5, R2 183) · 195 ms (R2 171) · 190 ms (sd 133) · 172 ms (R2 129)

## Round III

Clicks by kind: place 5× p50 – p95 – · recruit 5× p50 150 p95 174 · pay 5× p50 164 p95 195 · choose 3× p50 217 p95 249 · pick 1× p50 109 p95 109 · next-round 1× p50 63 p95 63 · 7 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 8006 | 33 | 633 | 2 |
| span.tc-line:tcline | 4286 | 33 | 133 | 2 |
| svg.leader:cult-breathe | 3893 | 17 | 650 | 2 |
| g.blink:cult-blink | 3893 | 17 | 650 | 2 |
| img.sprite.scene:cult-shift | 3893 | 17 | 650 | 2 |
| img.sprite.scene:cult-breathe | 3893 | 17 | 650 | 2 |
| span.cs-stack:js | 3480 | 33 | 267 | 2 |
| span.tick.num:bump | 2603 | 33 | 183 | 2 |
| span.lead:cult-scheme | 2506 | 17 | 650 | 2 |
| i.cs-min:cs-bob | 2486 | 17 | 633 | 2 |
| i.cs-min:cs-bob-eager | 2399 | 17 | 633 | 2 |
| div.seat-stolen:brief-out | 1716 | 33 | 100 | 2 |

Longest frames: 656 ms (style/layout/paint) · 647 ms (style/layout/paint) · 275 ms (R2 115) · 239 ms (R2 190) · 219 ms (R2 189)
