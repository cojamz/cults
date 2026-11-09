// The spin recorder (wheel pass, Nov 8): every turn of the board is timed in the player's own browser, the one place a
// spin's stall can be seen (Cor plays Firefox on a Mac; the test box has no graphics card and pays 200 ms for any paint,
// so it can't tell a smooth spin from a stalled one). The wheel reports its steps (press, land, apply, commit); from a
// press on, frames are counted for 1.6 s with requestAnimationFrame, and every gap over 34 ms is kept with the step it
// fell in, plus the key and pointer waits the browser reports (Event Timing). The last 40 spins live in memory and in
// localStorage; "Copy spin report" in the menu copies them as plain text, and ?spinlab=1 shows the last spin's numbers in
// a corner. Costs: one rAF loop while a spin runs, nothing else.
const KEY = 'patrons.v4.spinlab';
const MAX = 40;
const WATCH_MS = 1600;
const on = typeof window !== 'undefined' && typeof requestAnimationFrame === 'function' && typeof performance !== 'undefined';
const lab = { records: [], cur: null, events: [], listeners: new Set(), ctx: () => ({}) };
if (on) {
  try { lab.records = JSON.parse(localStorage.getItem(KEY) || '[]').slice(-MAX); } catch { lab.records = []; }
  try {
    new PerformanceObserver(l => { for (const e of l.getEntries()) if (lab.cur) lab.cur.events.push(`${e.name} ${Math.round(e.duration)}`); })
      .observe({ type: 'event', durationThreshold: 16, buffered: false });
  } catch { /* no Event Timing (Safari) */ }
  window.__spinLab = lab;
}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(lab.records.slice(-MAX))); } catch { /* full or off */ } };

/** The table's context for each record: round, whether a rival is moving, the board's size on screen. Set once by the game. */
export function spinLabContext(fn) { lab.ctx = fn; }

function finish() {
  const c = lab.cur;
  if (!c) return;
  lab.cur = null;
  const gaps = c.frames.filter(f => f.gap > 34).map(f => `${Math.round(f.gap)}${f.steps.length ? `(${f.steps.join('+')})` : ''}`);
  const rec = {
    at: new Date().toISOString(), how: c.how, frames: c.frames.length, ms: Math.round(c.frames.reduce((a, f) => a + f.gap, 0)),
    worst: Math.round(Math.max(0, ...c.frames.map(f => f.gap))), over50: c.frames.filter(f => f.gap > 50).length, over100: c.frames.filter(f => f.gap > 100).length,
    stall: Math.round(c.frames.filter(f => f.gap > 34).reduce((a, f) => a + f.gap - 17, 0)), gaps, events: c.events.slice(0, 24), steps: c.stepCount,
    ...safeCtx(),
  };
  lab.records.push(rec);
  if (lab.records.length > MAX) lab.records.splice(0, lab.records.length - MAX);
  save();
  for (const l of lab.listeners) l(rec);
}
const safeCtx = () => { try { return lab.ctx() || {}; } catch { return {}; } };

/** The wheel reports a step: 'press' (a key, a drag's hand-off, a facing change), 'land', 'apply' (React asked for the angle), 'commit' (the board re-laid). */
export function spinStep(step, how = '') {
  if (!on) return;
  const t = performance.now();
  if (step === 'press') {
    if (lab.cur) { lab.cur.until = t + WATCH_MS; lab.cur.presses++; lab.cur.pending.push(step); lab.cur.stepCount[step] = (lab.cur.stepCount[step] || 0) + 1; return; }
    const c = (lab.cur = { how, t0: t, until: t + WATCH_MS, presses: 1, frames: [], pending: ['press'], stepCount: { press: 1 }, events: [], last: t });
    const tick = now => {
      if (lab.cur !== c) return;
      c.frames.push({ t: now, gap: now - c.last, steps: c.pending });
      c.pending = [];
      c.last = now;
      if (now < c.until) requestAnimationFrame(tick); else finish();
    };
    requestAnimationFrame(tick);
    return;
  }
  if (lab.cur) { lab.cur.pending.push(step); lab.cur.stepCount[step] = (lab.cur.stepCount[step] || 0) + 1; if (step === 'commit') lab.cur.until = Math.max(lab.cur.until, t + 400); }
}

/** Listen for finished spins (the ?spinlab=1 corner). Returns the un-listen. */
export function onSpin(fn) { lab.listeners.add(fn); return () => lab.listeners.delete(fn); }
export const spinRecords = () => lab.records;

/** The report as plain text: where it was measured, then one line per spin. */
export function spinReport() {
  const env = on ? `${navigator.userAgent}\nwindow ${innerWidth}x${innerHeight} @${devicePixelRatio}x, screen ${screen.width}x${screen.height}` : '';
  const lines = lab.records.map(r => `${r.at.slice(11, 19)} ${r.how || ''} r${r.round ?? '?'}${r.rival ? ' rival moving' : ''} board ${r.board ?? '?'}px: ${r.frames} frames in ${r.ms} ms, worst ${r.worst} ms, over 50: ${r.over50}, over 100: ${r.over100}, stall ${r.stall} ms; gaps ${r.gaps.join(' ') || 'none'}; steps ${Object.entries(r.steps || {}).map(([k, v]) => `${k} ${v}`).join(' ')}${r.events && r.events.length ? `; waits ${r.events.join(' ')}` : ''}`);
  return `Spin report (${lab.records.length} spins)\n${env}\n${lines.join('\n') || 'no spins yet'}`;
}
export const spinLabOn = () => on && /[?&]spinlab=1\b/.test(location.search);
