# Perf rig: ans-2

2026-11-03T16:38:04.033Z · http://localhost:5292/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (6)
- round I: clicks p95 236 ms (bar 100)
- round II: clicks p95 162 ms (bar 100)
- round III: clicks p95 219 ms (bar 100)
- leak: 6290 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20.2 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 87 / 236 | 47 / 85 | 33 | 2 | 250 | 13 | 2 | 10 | 2490 | 492 | 13.5 |
| II | 96 / 162 | 47 / 69 | 33 | 2 | 783 | 10 | 1 | 2 | 3575 | 551 | 17.7 |
| III | 101 / 219 | 53 / 79 | 33 | 2 | 850 | 31 | 6 | 41 | 3945 | 577 | 20.9 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 18 / 28 · rules 5 / 10 · React render and layout effects 30 / 85 · effects 10 / 25 · to the frame that shows it 14 / 25 · that frame painted (the rig's next frame) 22 / 48

Leak control on the last turn: unbroken game 6290 elements, 856 listeners, 20.2 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 58 p95 87 · choose 5× p50 64 p95 236 · recruit 3× p50 109 p95 119 · pay 3× p50 101 p95 107 · next-round 1× p50 120 p95 120

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3204 | 33 | 250 | 2 |
| span.tc-line:tcline | 1819 | 17 | 133 | 2 |
| span.cs-stack:js | 1730 | 33 | 150 | 2 |
| span.worker-fig:panelland-under | 789 | 33 | 183 | 3 |
| span.tick.num:bump | 1107 | 33 | 117 | 2 |
| svg.leader:cult-breathe | 1090 | 17 | 183 | 2 |
| g.blink:cult-blink | 1090 | 17 | 183 | 2 |
| img.sprite.scene:cult-shift | 1090 | 17 | 183 | 2 |
| img.sprite.scene:cult-breathe | 1063 | 17 | 183 | 2 |
| span.base:opacity | 639 | 33 | 133 | 3 |
| path.wash:fill | 226 | 50 | 183 | 8 |
| div.path-inner:js | 1776 | 17 | 150 | 1 |

Longest frames: 247 ms (style/layout/paint) · 176 ms (hn 154) · 156 ms (hn 140) · 133 ms (hn 102) · 132 ms (hn 5, hn 120)

## Round II

Clicks by kind: place 4× p50 72 p95 94 · recruit 4× p50 161 p95 162 · pay 4× p50 96 p95 102 · choose 2× p50 105 p95 105 · next-round 1× p50 125 p95 125

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5543 | 33 | 783 | 2 |
| span.tc-line:tcline | 3204 | 33 | 167 | 2 |
| span.cs-stack:js | 2771 | 33 | 150 | 2 |
| span.tick.num:bump | 1482 | 33 | 100 | 2 |
| div.path-inner:js | 2884 | 17 | 183 | 1 |
| span.worker-fig:panelland-under | 930 | 33 | 167 | 3 |
| div.as-card:js | 1252 | 33 | 167 | 2 |
| span.base:opacity | 787 | 33 | 150 | 3 |
| svg.leader:cult-breathe | 1166 | 33 | 217 | 2 |
| g.blink:cult-blink | 1166 | 33 | 217 | 2 |
| img.sprite.scene:cult-shift | 1166 | 33 | 217 | 2 |
| img.sprite.scene:cult-breathe | 1166 | 33 | 217 | 2 |

Longest frames: 803 ms (style/layout/paint) · 178 ms (hn 78) · 152 ms (hn 129) · 139 ms (hn 109) · 130 ms (hn 113)

## Round III

Clicks by kind: place 5× p50 88 p95 100 · recruit 7× p50 153 p95 219 · pay 8× p50 143 p95 355 · pick 1× p50 125 p95 125 · choose 5× p50 73 p95 193 · next-round 1× p50 67 p95 67

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7587 | 33 | 850 | 3 |
| span.tc-line:tcline | 3767 | 33 | 233 | 3 |
| span.cs-stack:js | 3452 | 33 | 300 | 3 |
| div.path-inner:js | 3983 | 33 | 300 | 2 |
| svg.leader:cult-breathe | 2139 | 33 | 850 | 3 |
| g.blink:cult-blink | 2139 | 33 | 850 | 3 |
| img.sprite.scene:cult-shift | 2139 | 33 | 850 | 3 |
| img.sprite.scene:cult-breathe | 2139 | 33 | 850 | 3 |
| div.piece-flight.piece-res:js | 2938 | 33 | 300 | 2 |
| i.cs-min:cs-bob | 815 | 50 | 850 | 7 |
| span.worker-fig:panelland-under | 1311 | 33 | 233 | 4 |
| i.cs-min:cs-bob-eager | 795 | 50 | 850 | 6 |

Longest frames: 858 ms (style/layout/paint) · 256 ms (e 9, Lf 141) · 221 ms (xa 7, hn 88) · 216 ms (hn 196) · 179 ms (style/layout/paint)
