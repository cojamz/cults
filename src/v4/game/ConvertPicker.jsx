// Turning silver into other colors (Sweet Talk: "+3 silver. Then turn any of your silver into other colors."), set whole
// on one card and taken with one press (Cory, Nov 9: "sweet talk decisions all happen then animations. not animation for
// each resource"; "Choosing in sweet nothings also awkward"). The same card as Exchange's (SpendPicker.jsx): a YOU GET row
// over a stack per color you can turn into. Click a color to turn one more silver into it; click a coin you'd get to
// put that silver back. The engine still asks one silver at a time, then Done; a local game sends every answer in one
// go and the table plays them as one step (GameScreen onGiftAnswerAll, director foldPicks).
import { useEffect, useRef, useState } from 'react';
import { TurnOf } from './parts.jsx';
import { ResourceGlyph } from './Glyphs.jsx';
import { CostDots } from './Info.jsx';
import { stackStep, rowStep } from './PayPicker.jsx';
import { useTakeRun } from './takeRun.js';
import './pay.css';

const STACK_MAX = 12;
const store = { run: null };
const keyOf = (state, g) => `${g.actor}|${g.title}|convert|${state.round}`;

export default function ConvertPicker({ state, g, onAnswer, onAnswerAll = null, busy, place = null, turnOf = null, onBack = null }) {
  const pend = state.pending;
  const me = state.players[g.actor];
  const key = keyOf(state, g);
  const box = useRef(null);
  const { taking, start, hold } = useTakeRun(store, key, state, busy, id => {
    const o = pend && (pend.options || []).find(x => x.id === id);
    if (!o) return false;
    const c = o.kind === 'color' ? o.value : null;
    return onAnswer(o.id, c && box.current ? box.current.querySelector(`[data-convert-stack="${c}"]`) : null, null, 'automatic') === 'wait' ? 'wait' : true;
  });
  const colors = g.outs.map(o => o.value);
  const limit = taking ? store.run.total : g.left;
  const [out, setOut] = useState(() => (taking ? store.run.plan : Object.fromEntries(colors.map(c => [c, 0]))));
  const n = colors.reduce((a, c) => a + (out[c] || 0), 0);
  const silverLeft = (me.res[g.from] || 0) - (taking ? 0 : n);

  const add = c => {
    if (busy || taking || n >= limit) return;
    setOut({ ...out, [c]: (out[c] || 0) + 1 });
  };
  const back = c => {
    if (busy || taking || !out[c]) return;
    setOut({ ...out, [c]: out[c] - 1 });
  };
  const retry = useRef(null);
  useEffect(() => () => clearTimeout(retry.current), []);
  const take = (tries = 0) => {
    if (taking || (busy && !tries)) return;
    const ids = colors.flatMap(c => Array.from({ length: out[c] || 0 }, () => `color:${c}`));
    // stopping before the silver runs out answers Done (the engine asks again while any is left)
    if (ids.length < g.left) ids.push(g.stop.id);
    const sent = onAnswerAll ? onAnswerAll(ids) : 0;
    // the table was still playing the last step: the whole turn again in a moment, never a coin at a time
    if (sent === 'wait' && tries < 30) { clearTimeout(retry.current); retry.current = setTimeout(() => latestTake.current(tries + 1), 130); return; }
    const k = typeof sent === 'number' ? sent : 0;
    if (k === ids.length) { hold(state.moves, ids.length, { plan: out, total: limit }); return; }
    start(ids.slice(k), { plan: out, total: limit });
  };
  const latestTake = useRef(take);
  latestTake.current = take;
  useEffect(() => {
    const b = box.current && box.current.querySelector('.pay-go');
    if (b && (!document.hasFocus || document.hasFocus())) b.focus({ preventScroll: true });
  }, []);

  const parts = colors.filter(c => out[c] > 0).map(c => ({ color: c, n: out[c] * g.each }));
  const tall = Math.min(STACK_MAX, Math.max(1, ...colors.map(c => (me.res[c] || 0) + (out[c] || 0) * g.each)));
  const each = g.each === 1 ? '' : ` (${g.each} each)`;
  return (
    <section ref={box} className={`prompt choice plain gift-card split-card spend-card convert-card${place ? ` at-space ${place.up ? 'below' : 'above'}` : ''}`} role="group" aria-label={`${g.title}: turn ${g.from} into other colors`}
      data-gift="convert" data-convert={limit} style={place ? { left: place.left, top: place.top } : undefined}
      onKeyDown={e => { if (e.key === 'Enter' && !e.target.closest('[data-option="back"]')) { e.preventDefault(); take(); } }}>
      {turnOf && <TurnOf player={turnOf} />}
      <header className="gc-head">
        {g.title && <small className="gc-title">{g.title}</small>}
        <p className="gc-what">Turn your <ResourceGlyph r={g.from} size={16} decorative /> into other colors{each}</p>
        <p className="gc-sub">Click a color to turn one more <ResourceGlyph r={g.from} size={12} decorative /> into it. <b className="num">{silverLeft}</b> <ResourceGlyph r={g.from} size={12} decorative /> left.</p>
      </header>
      <div className="pay-rows" style={{ '--rise': `${Math.min(30, (tall - 1) * 6)}px` }}>
        <div className="pay-row paying" role="group" aria-label="You get">
          <span className="pr-lbl">You get</span>
          <span className="pr-items">
            {colors.filter(c => out[c] > 0).map(c => (
              <button key={c} type="button" className="ps-out" data-convert-coin={c} data-out={out[c]} disabled={busy || taking}
                title={`${out[c] * g.each} ${c}. Click to keep one ${g.from}.`} aria-label={`Getting ${out[c] * g.each} ${c}: keep one ${g.from}`} onClick={() => back(c)}>
                <span className="po-coins" data-dense={out[c] * g.each > 5 || undefined} style={{ '--ov': `${rowStep(out[c] * g.each) - 24}px` }}>
                  {Array.from({ length: out[c] * g.each }, (_, j) => <i key={j} className="ps-coin out" aria-hidden="true"><ResourceGlyph r={c} size={24} decorative /></i>)}
                </span>
              </button>
            ))}
            {!n && <span className="spend-none">nothing yet</span>}
          </span>
        </div>
        <div className="pay-row keeping" role="group" aria-label="Your colors">
          <span className="pr-lbl">Your colors</span>
          <div className="pay-stacks">
            {colors.map(c => {
              const have = (me.res[c] || 0) + (taking ? 0 : (out[c] || 0) * g.each), drawn = Math.min(have, STACK_MAX), full = n >= limit;
              const say = full ? `No more ${g.from} to turn.` : `${have} ${c}. Click to turn one ${g.from} into ${g.each} ${c}.`;
              return (
                <div key={c} className={`pay-stack${out[c] ? ' paying' : ''}`} data-convert-stack={c}>
                  <button type="button" className="ps-add" data-convert-add={c} disabled={busy || taking} aria-disabled={full || undefined} title={say} aria-label={say} onClick={() => add(c)} />
                  <span className="ps-coins" data-dense={drawn > 6 || undefined} style={{ '--step': `${stackStep(drawn)}px` }}>
                    {drawn === 0 && <i className="ps-coin split-ghost" aria-hidden="true"><ResourceGlyph r={c} size={24} decorative /></i>}
                    {Array.from({ length: drawn }, (_, k) => <i key={k} className="ps-coin" style={{ '--k': k }} aria-hidden="true"><ResourceGlyph r={c} size={24} decorative /></i>)}
                  </span>
                  <b className="ps-n num" aria-hidden="true">{have}</b>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="pay-foot">
        {onBack && <button type="button" className="pay-cancel" data-option="back" disabled={busy || taking} onClick={onBack}>Cancel</button>}
        <button type="button" className="pay-go" data-convert-take={parts.map(x => `${x.n}${x.color}`).join(' ') || 'none'} disabled={busy || taking} onClick={() => take()}>
          {n ? <>Turn <CostDots parts={[{ color: g.from, n }]} /> into <CostDots parts={parts} /></> : `Keep my ${g.from}`}
        </button>
      </div>
    </section>
  );
}
