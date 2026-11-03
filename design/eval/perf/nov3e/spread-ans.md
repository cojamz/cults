# Rig spread: ans

2026-11-03T17:31:23.447Z · http://localhost:5292/ · 3 runs, 1 at a time · --out=design/eval/perf/nov3e

Every run played the same game (55 picks).

Median (min–max) across runs.

| round | clicks p95 ms | choose p95 ms | place p95 ms | dead clicks | hovers p95 ms | show frames p95 ms | hitch % | idle busy % | round busy % |
|---|---|---|---|---|---|---|---|---|---|
| I | 277 (234–279) | 277 (234–279) | 212 (99–221) | 0 (0–0) | 106 (100–131) | 33.3 (33.3–33.3) | 2 (2–3) | 2 (2–3) | 62 (60–63) |
| II | 176 (163–269) | 153 (148–167) | 87 (82–107) | 0 (0–0) | 98 (66–110) | 33.3 (33.3–33.4) | 3 (2–3) | 1 (1–2) | 64 (61–64) |
| III | 224 (195–246) | 159 (157–185) | 125 (105–135) | 0 (0–0) | 143 (106–188) | 33.4 (33.3–33.4) | 3 (3–3) | 6 (5–6) | 67 (66–71) |

Leak control (unbroken vs reload): elements 6287 (6286–6290) vs 5093 (5093–5093), heap MB 20.2 (20–20.2) vs 9.7 (9.7–9.8).

Per run: rig-ans-1.md, rig-ans-2.md, rig-ans-3.md.
