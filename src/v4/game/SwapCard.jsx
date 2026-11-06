// Night Traders, Tinker (and Trade Seeds): "swap up to 3 of your resources for other colors, one for one" (Cory, Nov 5:
// the swapping "is also clunky"). It was the gift card: pick a color to give, a color to get, once per swap, three times.
// Now it is the Launderers card (LaunderCard.jsx) with a cap: one row per color with − and +, how many swaps are used, and
// Done sends the engine's own one-for-one swaps for that mix (yellow.js, 'yellow.swap'), one after another as each
// question comes back, then its Done. A table does the same: put back up to 3 coins, take as many of other colors.
import { useEffect, useMemo, useState } from 'react';
import { useDialog, TurnOf } from './parts.jsx';
import { ResourceGlyph } from './Glyphs.jsx';
import './pay.css';
import './launder.css';

// the mix being sent, kept outside the card so a re-render between two swaps never loses it: { key, mix, done }
let run = null;
const keyOf = (state, pend) => `${pend.player}|${state.round}|${state.queue?.[0]?.data?.who || ''}`;
const task = state => (state.queue?.[0]?.h === 'yellow.swap' ? state.queue[0].data || {} : null);

/** Does the swap card answer this choice: any one-for-one swap of your own colors (Night Traders, Tinker, Trade Seeds). */
export const swapChoice = (state, pend) => !!(pend && pend.kind === 'choose' && task(state)
  && pend.options.some(o => o.kind === 'swap') && pend.options.every(o => o.kind === 'swap' || o.kind === 'done'));

/** How many coins the mix takes off colors: the swaps it needs. */
const lifted = (mix, was) => Object.keys(was).reduce((a, c) => a + Math.max(0, (was[c] || 0) - (mix[c] || 0)), 0);

/** The engine's option for the next swap toward the mix, or its Done once the coins match. */
export function swapStep(state, pend, mix) {
  const p = state.players[pend.player];
  const cs = state.resources;
  const from = cs.find(c => (p.res[c] || 0) > (mix[c] || 0));
  const to = cs.find(c => (p.res[c] || 0) < (mix[c] || 0));
  const has = id => pend.options.find(o => o.id === id) || null;
  return from && to ? has(`swap:${from}:${to}`) : has('done');
}

export default function SwapCard({ state, onPick, busy, turnOf = null }) {
  const pend = state.pending;
  const p = state.players[pend.player];
  const colors = state.resources;
  const key = keyOf(state, pend);
  const t = task(state) || {};
  const sending = !!(run && run.key === key);
  // what you hold as the card opens, and the swaps still yours (after a reload mid-way: what's left)
  const [was] = useState(() => Object.fromEntries(colors.map(c => [c, p.res[c] || 0])));
  const [cap] = useState(() => (Number.isInteger(t.left) ? t.left : 3));
  const [mix, setMix] = useState(() => (sending ? { ...run.mix } : { ...was }));
  const total = colors.reduce((a, c) => a + (was[c] || 0), 0);
  const placed = colors.reduce((a, c) => a + (mix[c] || 0), 0);
  const loose = total - placed;
  const used = lifted(mix, was);
  const box = useDialog(null);

  // the next swap of a mix already sent, a beat after each question comes back
  useEffect(() => {
    if (!run || run.key !== key || run.done === pend || busy) return undefined;
    const tm = setTimeout(() => {
      if (!run || run.key !== key || run.done === pend) return;
      const o = swapStep(state, pend, run.mix);
      if (!o) { run = null; return; }
      run.done = pend;
      if (o.id === 'done') run = null;
      onPick(o.id, 'automatic');
    }, 120);
    return () => clearTimeout(tm);
  }, [pend, busy]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => () => { if (run && run.key === key) run = null; }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const send = m => {
    if (busy || sending) return;
    const o = swapStep(state, pend, m);
    if (!o) return;
    run = o.id === 'done' ? null : { key, mix: { ...m }, done: pend };
    onPick(o.id, 'automatic');
  };
  const set = (c, n) => setMix(m => ({ ...m, [c]: n }));
  // − takes one off a color, up to the swaps you have; one you raised comes back down freely
  const canMinus = c => (mix[c] || 0) > 0 && ((mix[c] || 0) > (was[c] || 0) || used < cap);
  // + puts a loose one on; with nothing loose it moves one over from your biggest color you haven't raised (as the
  // Launderers card does), if a swap is left for it
  const donor = c => {
    const others = colors.filter(x => x !== c && (mix[x] || 0) > 0);
    const big = l => l.reduce((a, x) => ((mix[x] || 0) > (mix[a] || 0) ? x : a), l[0]);
    const raised = others.filter(x => (mix[x] || 0) > (was[x] || 0));
    const unraised = others.filter(x => (mix[x] || 0) <= (was[x] || 0));
    // a color you raised gives one back first when you're out of swaps (it undoes a swap rather than adding one)
    if (used >= cap && raised.length) return big(raised);
    return unraised.length ? big(unraised) : others.length ? big(others) : null;
  };
  const plusMix = c => {
    if (loose > 0) return { ...mix, [c]: (mix[c] || 0) + 1 };
    const d = donor(c);
    return d ? { ...mix, [d]: mix[d] - 1, [c]: (mix[c] || 0) + 1 } : null;
  };
  const canPlus = c => { const m = plusMix(c); return !!m && lifted(m, was) <= cap; };
  const plus = c => { const m = plusMix(c); if (m && lifted(m, was) <= cap) setMix(m); };
  const shown = useMemo(() => colors.map(c => ({ c, n: mix[c] || 0, w: was[c] || 0 })), [colors, mix, was]);
  const locked = busy || sending;
  const name = String(pend?.prompt || 'Night Traders:').split(':')[0];
  const none = used === 0 && loose === 0;

  return (
    <div className="overlay sheet pay-overlay launder-overlay swap-overlay" role="dialog" aria-modal="true" aria-label={`${name}: swap your resources`}>
      <div className="dialog pay pay-card launder-card swap-card" ref={box}
        onKeyDown={e => { if (e.key === 'Enter' && !loose && !e.target.closest('.ld-keep')) { e.preventDefault(); send(mix); } }}>
        {turnOf && <TurnOf player={turnOf} />}
        <h2 className="ld-title">{name}</h2>
        <p className="ld-sub">Swap up to <b className="num">{cap}</b> of your resources for other colors, one for one.</p>
        <div className="ld-rows" role="group" aria-label="Your colors">
          {shown.map(({ c, n, w }) => (
            <div key={c} className="ld-row" data-swap={c} data-n={n}>
              <ResourceGlyph r={c} size={24} />
              <span className="ld-name">{c}</span>
              <button type="button" className="ld-step" data-step="-" disabled={locked || !canMinus(c)} aria-label={`One less ${c}`} onClick={() => set(c, n - 1)}>−</button>
              <b className="ld-n num" aria-live="polite">{n}</b>
              <button type="button" className="ld-step" data-step="+" disabled={locked || !canPlus(c)} aria-label={`One more ${c}`} onClick={() => plus(c)}>+</button>
              <small className="ld-was" data-moved={n !== w || undefined}>{n === w ? '' : `was ${w}`}</small>
            </div>
          ))}
        </div>
        <p className="ld-loose" data-loose={loose} data-used={used} role="status">
          {loose ? <><b className="num">{loose}</b> to place: press + on the color you want.</>
            : <><b className="num">{used}</b> of <b className="num">{cap}</b> swaps used{used < cap ? ': press + on the color you want.' : '.'}</>}
        </p>
        <div className="pay-foot">
          <button type="button" className="pay-cancel ld-keep" disabled={locked} onClick={() => send(was)}>Swap nothing</button>
          <button type="button" className="pay-go" data-autofocus data-swap-done disabled={locked || loose > 0} onClick={() => send(mix)}>{none ? 'Done' : `Swap ${used}`}</button>
        </div>
      </div>
    </div>
  );
}
