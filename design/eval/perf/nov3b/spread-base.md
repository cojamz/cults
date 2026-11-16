# Rig spread: base

2026-11-03T16:22:35.518Z · http://localhost:5291/ · 3 runs, 1 at a time · --out=design/eval/perf/nov3b

Every run played the same game (55 picks).

Median (min–max) across runs.

| round | clicks p95 ms | choose p95 ms | place p95 ms | dead clicks | hovers p95 ms | show frames p95 ms | hitch % | idle busy % | round busy % |
|---|---|---|---|---|---|---|---|---|---|
| I | 239 (231–268) | 239 (212–268) | 125 (72–231) | 0 (0–0) | 106 (80–120) | 33.3 (33.3–33.4) | 3 (2–3) | 3 (2–4) | 63 (62–66) |
| II | 236 (226–242) | 209 (189–242) | 78 (77–87) | 0 (0–0) | 121 (81–190) | 33.3 (33.3–33.3) | 3 (2–3) | 1 (1–2) | 63 (62–64) |
| III | 218 (178–226) | 212 (146–273) | 91 (89–119) | 0 (0–0) | 142 (92–144) | 33.4 (33.3–33.4) | 3 (2–4) | 4 (4–7) | 69 (66–69) |

Leak control (unbroken vs reload): elements 6290 (6287–6290) vs 5093 (5093–5093), heap MB 19.9 (19.8–20.2) vs 9.8 (9.8–9.8).

Per run: rig-base-1.md, rig-base-2.md, rig-base-3.md.
