# Rig spread: base

2026-11-03T16:45:20.128Z · http://localhost:5291/ · 3 runs, 1 at a time · --out=design/eval/perf/nov3c

Every run played the same game (55 picks).

Median (min–max) across runs.

| round | clicks p95 ms | choose p95 ms | place p95 ms | dead clicks | hovers p95 ms | show frames p95 ms | hitch % | idle busy % | round busy % |
|---|---|---|---|---|---|---|---|---|---|
| I | 167 (159–188) | 167 (155–188) | 71 (71–73) | 0 (0–0) | 92 (81–107) | 33.3 (33.2–33.3) | 2 (2–2) | 3 (2–3) | 58 (55–60) |
| II | 248 (218–355) | 248 (218–355) | 101 (86–130) | 0 (0–0) | 78 (77–124) | 33.3 (33.3–33.3) | 2 (2–2) | 1 (1–1) | 61 (60–62) |
| III | 198 (180–211) | 183 (152–198) | 122 (85–265) | 0 (0–0) | 96 (91–104) | 33.3 (33.3–33.3) | 2 (2–2) | 7 (5–7) | 65 (65–66) |

Leak control (unbroken vs reload): elements 6283 (5672–6290) vs 5093 (5093–5093), heap MB 20 (19.9–20.2) vs 9.8 (9.7–9.8).

Per run: rig-base-1.md, rig-base-2.md, rig-base-3.md.
