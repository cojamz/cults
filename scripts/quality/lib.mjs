// Shared helpers for the card quality loop's evaluators (scripts/quality/*). Plain data in, plain data out.
import { readFileSync, existsSync } from 'node:fs';

// Color names differ between judges (Red / red / thieves for Magenta...): one canonical color per name.
const ALIAS = { echo: 'green', market: 'blue', thieves: 'magenta', trading: 'white', guest: 'guests', benders: 'guests', grey: 'guests', greys: 'guests' };
export const color = c => { const k = String(c || '').toLowerCase().trim(); return ALIAS[k] || k; };
export const key = x => `${x.kind}|${String(x.name).toLowerCase().trim()}|${color(x.color)}`;
export const nameKey = x => `${x.kind}|${String(x.name).toLowerCase().trim()}`;

export const median = a => { const s = [...a].sort((x, y) => x - y), n = s.length; return n ? (n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2) : NaN; };

/** Average ranks (ties share the mean rank), for Spearman. */
export function ranks(vals) {
  const idx = vals.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]), r = new Array(vals.length);
  for (let i = 0; i < idx.length;) { let j = i; while (j + 1 < idx.length && idx[j + 1][0] === idx[i][0]) j++; for (let k = i; k <= j; k++) r[idx[k][1]] = (i + j) / 2 + 1; i = j + 1; }
  return r;
}
export function spearman(a, b) {
  const ra = ranks(a), rb = ranks(b), n = a.length, ma = ra.reduce((x, y) => x + y, 0) / n, mb = rb.reduce((x, y) => x + y, 0) / n;
  let num = 0, da = 0, db = 0;
  for (let i = 0; i < n; i++) { num += (ra[i] - ma) * (rb[i] - mb); da += (ra[i] - ma) ** 2; db += (rb[i] - mb) ** 2; }
  return num / Math.sqrt(da * db);
}

/** A judge file: array of {color, kind, name, scores[10], total, hardFail, why}. Keys made canonical; Alchemists etc. keep their color. */
export function loadJudge(file) {
  const raw = JSON.parse(readFileSync(file, 'utf8'));
  const arr = Array.isArray(raw) ? raw : raw.cards || raw.scores;
  // total as principles.md counts it now: C1-C10 plus C12 Elegant when scored; C11 Defendable is a watch note, not counted
  return arr.map(x => ({ ...x, color: color(x.color), total: x.scores.slice(0, 10).reduce((a, b) => a + b, 0) + (x.scores.length >= 12 ? x.scores[11] : 0) }));
}

/** Join judges on kind+name+color, falling back to kind+name when a name is unique. Returns Map key -> [entry per judge]. */
export function joinJudges(judges) {
  const out = new Map();
  const first = judges[0];
  const uniq = j => { const c = new Map(); for (const x of j) c.set(nameKey(x), (c.get(nameKey(x)) || 0) + 1); return c; };
  const counts = judges.map(uniq);
  for (const x of first) {
    const row = judges.map((j, ji) => j.find(y => key(y) === key(x)) || (counts[ji].get(nameKey(x)) === 1 ? j.find(y => nameKey(y) === nameKey(x)) : null));
    out.set(key(x), row);
  }
  return out;
}

/** Seeded RNG (mulberry32) so splits and shuffles repeat. */
export function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
export function shuffle(arr, rand) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

/** Cory's liked and disliked cards from calibration.md sections 1a and 2: bold names, with the bullet's text (for "Now:" staleness). */
export function calibration(file) {
  if (!existsSync(file)) return { disliked: [], liked: [] };
  const t = readFileSync(file, 'utf8');
  const sec = (from, to) => { const a = t.indexOf(from); if (a < 0) return ''; const b = to ? t.indexOf(to, a + 1) : -1; return t.slice(a, b < 0 ? undefined : b); };
  const grab = s => s.split('\n').filter(l => l.startsWith('- **')).map(l => {
    const names = [...l.matchAll(/\*\*([^*]+)\*\*/g)].map(m => m[1]);
    const alts = names.flatMap(n => n.split(/\s*\/\s*|\s*\(now\s+|\)\s*|\s+\(.*/)).map(x => x.replace(/\(s\)$/, '').replace(/\(.*$/, '').trim()).filter(Boolean);
    const now = (l.match(/Now:([^·]*)/) || [])[1] || '';
    const stale = /\bClaude\b|replaced|reworked|reworded|now:? "|Now Overtime/i.test(now) || /\(replaced|reworded to|\bold (version|text)\b|^- \*\*(Overtime|Crowd In)\*\* \(old/i.test(l);
    return { names: [...new Set(alts)], line: l, stale };
  });
  return { disliked: grab(sec('### 1a.', '### 1b.')), liked: grab(sec('## 2. LIKED', '## 3.')) };
}
