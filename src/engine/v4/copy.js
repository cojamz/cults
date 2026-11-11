// A deep copy of plain game data. State is plain JSON (the online host plays moves on JSON-parsed states), and a
// hand copy is several times faster than structuredClone: 336 → 59 µs on a late-game state (smoothness panel, Oct 28).
// Plain loops that skip the call for a number or string (most of a state's leaves): ~25% faster than v.map (Nov 3).
export const plainCopy = v => (v === null || typeof v !== 'object' ? v : copyObj(v));
function copyObj(v) {
  if (Array.isArray(v)) {
    const n = v.length, a = new Array(n);
    for (let i = 0; i < n; i++) { const x = v[i]; a[i] = x === null || typeof x !== 'object' ? x : copyObj(x); }
    return a;
  }
  const o = {};
  for (const k in v) { const x = v[k]; o[k] = x === null || typeof x !== 'object' ? x : copyObj(x); }
  return o;
}

// A game state's copy that shares what is written once and only read after: the scored rounds (contests: endRound
// replaces the array, never edits an entry) and Green's ledger snapshots (echo: last round's spaces, and each space's
// `before`, content/echo.js). In a big Green game those were most of the state. Every other part is copied.
const copyEntry = e => { const o = {}; for (const k in e) o[k] = k === 'before' ? e[k] : plainCopy(e[k]); return o; };
const copyEcho = L => {
  if (!L || typeof L !== 'object') return L;
  const o = {};
  for (const k in L) {
    if (k === 'last') o[k] = L[k];
    else if (k === 'now' && L.now && typeof L.now === 'object') { const n = {}; for (const key in L.now) n[key] = copyEntry(L.now[key]); o[k] = n; }
    else o[k] = plainCopy(L[k]);
  }
  return o;
};
/** One part of a state, copied as stateCopy would (skip: keys the caller sets itself). */
export const copyPart = (k, v) => (k === 'contests' ? v : k === 'echo' ? copyEcho(v) : plainCopy(v));
export const stateCopy = s => { const o = {}; for (const k in s) o[k] = copyPart(k, s[k]); return o; };
