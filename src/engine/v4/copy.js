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
