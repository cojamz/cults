# Perf rig: live956b-1

2026-11-01T10:30:01.791Z · http://localhost:5316 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (7)
- round I: clicks p95 205 ms (bar 100)
- round II: clicks p95 193 ms (bar 100)
- round II: hovers p95 119 ms (bar 100)
- round III: clicks p95 174 ms (bar 100)
- leak: 6545 elements vs 5430 after a reload
- leak: 914 listeners vs 738 after a reload
- leak: heap 19.3 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 85 / 205 | 30 / 70 | 17 | 2 | 217 | 15 | 3 | 10 | 2363 | 499 | 12.9 |
| II | 92 / 193 | 48 / 119 | 33 | 2 | 650 | 18 | 5 | 23 | 3538 | 585 | 16.4 |
| III | 86 / 174 | 34 / 80 | 33 | 3 | 867 | 27 | 4 | 3 | 3921 | 582 | 21.4 |

Click phases (40 clicks that redrew the table, ms, median / p90): waiting for the browser 14 / 28 · rules 5 / 17 · React render and layout effects 28 / 65 · effects 17 / 32 · to the frame that shows it 11 / 23 · that frame painted (the rig's next frame) 22 / 43

Leak control on the last turn: unbroken game 6545 elements, 914 listeners, 19.3 MB; after a reload 5430, 738, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 74 p95 74 · choose 8× p50 85 p95 169 · recruit 3× p50 – p95 – · pay 3× p50 175 p95 205 · next-round 1× p50 85 p95 85 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3308 | 17 | 217 | 2 |
| span.tc-line:tcline | 2434 | 17 | 200 | 2 |
| span.cs-stack:js | 1743 | 33 | 183 | 2 |
| span.worker-fig:panelland-under | 1188 | 17 | 200 | 2 |
| span.base:opacity | 1055 | 17 | 183 | 2 |
| path.wash:fill | 684 | 33 | 183 | 3 |
| span.tick.num:bump | 1024 | 33 | 117 | 2 |
| div.path-inner:js | 1898 | 17 | 150 | 1 |
| button.fb.lt-rate:opacity | 791 | 17 | 200 | 2 |
| button.card.lt-card:opacity | 791 | 17 | 200 | 2 |
| div.piece-flight.piece-res:js | 1518 | 17 | 150 | 1 |
| span.worker:js | 749 | 17 | 150 | 2 |

Longest frames: 237 ms (style/layout/paint) · 171 ms (hn 11, Lf 117) · 169 ms (hn 146) · 158 ms (Lf 116) · 149 ms (hn 135)

## Round II

Clicks by kind: place 4× p50 93 p95 93 · choose 7× p50 81 p95 161 · recruit 4× p50 – p95 – · pay 4× p50 135 p95 193 · next-round 1× p50 117 p95 117 · 6 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5954 | 33 | 200 | 2 |
| span.cs-stack:js | 3279 | 33 | 133 | 2 |
| span.tc-line:tcline | 4171 | 17 | 150 | 1 |
| span.tick.num:bump | 1825 | 33 | 150 | 2 |
| svg.leader:cult-breathe | 1768 | 33 | 200 | 2 |
| g.blink:cult-blink | 1768 | 33 | 200 | 2 |
| img.sprite.scene:cult-shift | 1768 | 33 | 200 | 2 |
| img.sprite.scene:cult-breathe | 1768 | 33 | 200 | 2 |
| button.card.lt-card:js | 1440 | 33 | 650 | 2 |
| div.path-inner:js | 2843 | 17 | 167 | 1 |
| div.piece-flight.piece-res:js | 2597 | 17 | 167 | 1 |
| div.seat-stolen:brief-out | 1131 | 33 | 117 | 2 |

Longest frames: 666 ms (style/layout/paint) · 188 ms (hn 163) · 170 ms (hn 161) · 161 ms (style/layout/paint) · 155 ms (hn 138)

## Round III

Clicks by kind: place 5× p50 65 p95 73 · choose 10× p50 86 p95 174 · recruit 5× p50 212 p95 212 · pay 5× p50 110 p95 163 · pick 3× p50 60 p95 69 · next-round 1× p50 58 p95 58 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7766 | 33 | 867 | 3 |
| span.tc-line:tcline | 5000 | 33 | 233 | 3 |
| span.cs-stack:js | 4586 | 33 | 233 | 3 |
| div.path-inner:js | 4102 | 33 | 183 | 2 |
| div.piece-flight.piece-res:js | 3623 | 33 | 183 | 2 |
| span.tick.num:bump | 2202 | 33 | 183 | 3 |
| span.base:opacity | 1174 | 33 | 233 | 4 |
| svg.leader:cult-breathe | 2028 | 33 | 867 | 2 |
| g.blink:cult-blink | 2028 | 33 | 867 | 2 |
| img.sprite.scene:cult-shift | 2028 | 33 | 867 | 2 |
| img.sprite.scene:cult-breathe | 2028 | 33 | 867 | 2 |
| button.card.lt-card:js | 1847 | 33 | 250 | 2 |

Longest frames: 887 ms (style/layout/paint) · 238 ms (hn 5, hn 222) · 233 ms (style/layout/paint) · 175 ms (hn 148) · 171 ms (hn 146)
