// Turning your resources into followers, up to a limit (Exchange: "+1 white. Then turn up to 1 resource (2 in round II,
// 3 in round III) into 2 followers each."), picked like a payment, the same card as Harvest's (SplitPicker.jsx): the
// coins you'd turn in a TURNING IN row, already picked the way the engine suggests, over a stack per color you hold.
// Click a stack to turn in one more of it; click a coin you're turning in to keep it. The button says what you get.
// The engine still asks one coin at a time, then Done when you stop early; the card answers each question in turn.
import { useEffect, useRef, useState } from 'react';
import { TurnOf } from './parts.jsx';
import { ResourceGlyph } from './Glyphs.jsx';
import { CostDots } from './Info.jsx';
import { stackStep, rowStep } from './PayPicker.jsx';
import { useTakeRun } from './takeRun.js';
import './pay.css';

const STACK_MAX = 12;
// a turn-in being answered, one question at a time (kept outside the card, so a re-render between two picks never loses it)
const store = { run: null };
const keyOf = (state, g) => `${g.actor}|${g.title}|${state.round}`;

/** The engine's suggestion (as the bots pick): from your biggest pile, white kept for last. */
function suggest(colors, held, n, white) {
  const out = Object.fromEntries(colors.map(c => [c, 0]));
  for (let k = 0; k < n; k++) {
    const c = colors.filter(x => (held[x] || 0) - out[x] > 0).sort((a, b) => ((held[b] || 0) - out[b] - (b === white ? 3 : 0)) - ((held[a] || 0) - out[a] - (a === white ? 3 : 0)))[0];
    if (!c) break;
    out[c] += 1;
  }
  return out;
}

export default function SpendPicker({ state, g, onAnswer, busy, place = null, turnOf = null, onBack = null }) {
  const pend = state.pending;
  const me = state.players[g.actor];
  const key = keyOf(state, g);
  const box = useRef(null);
  const { taking, start } = useTakeRun(store, key, state, busy, id => {
    const o = pend && (pend.options || []).find(x => x.id === id);
    if (!o) return false;
    const c = o.kind === 'color' ? o.value : null;
    onAnswer(o.id, c && box.current ? box.current.querySelector(`[data-spend-stack="${c}"]`) : null, null, 'automatic');
    return true;
  });
  const colors = g.spends.map(o => o.value);
  const white = state.resources.includes('white') ? 'white' : null;
  const limit = taking ? store.run.total : g.left;
  const [out, setOut] = useState(() => (taking ? store.run.plan : suggest(colors, me.res, g.left, white)));
  const n = colors.reduce((a, c) => a + (out[c] || 0), 0);

  const add = c => {
    if (busy || taking || n >= limit || (out[c] || 0) >= (me.res[c] || 0)) return;
    setOut({ ...out, [c]: (out[c] || 0) + 1 });
  };
  const keep = c => {
    if (busy || taking || !out[c]) return;
    setOut({ ...out, [c]: out[c] - 1 });
  };
  const take = () => {
    if (busy || taking) return;
    const ids = colors.flatMap(c => Array.from({ length: out[c] || 0 }, () => `color:${c}`));
    // stopping early answers Done (the engine asks again while any are left)
    if (ids.length < g.left) ids.push(g.stop.id);
    start(ids, { plan: out, total: limit });
  };
  useEffect(() => {
    const b = box.current && box.current.querySelector('.pay-go');
    if (b && (!document.hasFocus || document.hasFocus())) b.focus({ preventScroll: true });
  }, []);

  const parts = colors.filter(c => out[c] > 0).map(c => ({ color: c, n: out[c] }));
  const tall = Math.min(STACK_MAX, Math.max(1, ...colors.map(c => me.res[c] || 0)));
  const get = n * g.per;
  return (
    <section ref={box} className={`prompt choice plain gift-card split-card spend-card${place ? ` at-space ${place.up ? 'below' : 'above'}` : ''}`} role="group" aria-label={`${g.title}: turn up to ${limit} into ${g.per} followers each`}
      data-gift="spend" data-spend={limit} style={place ? { left: place.left, top: place.top } : undefined}
      onKeyDown={e => { if (e.key === 'Enter' && !e.target.closest('[data-option="back"]')) { e.preventDefault(); take(); } }}>
      {turnOf && <TurnOf player={turnOf} />}
      <header className="gc-head">
        {g.title && <small className="gc-title">{g.title}</small>}
        <p className="gc-what">Turn up to <b className="num">{limit}</b> into <b className="num">{g.per}</b> followers each</p>
        <p className="gc-sub">Click a color to turn one more in.</p>
      </header>
      <div className="pay-rows" style={{ '--rise': `${Math.min(30, (tall - 1) * 6)}px` }}>
        <div className="pay-row paying" role="group" aria-label="Turning in">
          <span className="pr-lbl">Turning in</span>
          <span className="pr-items">
            {colors.filter(c => out[c] > 0).map(c => (
              <button key={c} type="button" className="ps-out" data-spend-coin={c} data-out={out[c]} disabled={busy || taking}
                title={`${out[c]} ${c}. Click to keep one.`} aria-label={`Turning in ${out[c]} ${c}: keep one`} onClick={() => keep(c)}>
                <span className="po-coins" data-dense={out[c] > 5 || undefined} style={{ '--ov': `${rowStep(out[c]) - 24}px` }}>
                  {Array.from({ length: out[c] }, (_, j) => <i key={j} className="ps-coin out" aria-hidden="true"><ResourceGlyph r={c} size={24} decorative /></i>)}
                </span>
              </button>
            ))}
            {!n && <span className="spend-none">nothing</span>}
          </span>
        </div>
        <div className="pay-row keeping" role="group" aria-label="You have">
          <span className="pr-lbl">You have</span>
          <div className="pay-stacks">
            {colors.map(c => {
              const have = me.res[c] || 0, left = have - (out[c] || 0), drawn = Math.min(left, STACK_MAX), full = n >= limit || left <= 0;
              const say = full ? (n >= limit ? `${limit} is the most you can turn in.` : `No more ${c}.`) : `${left} ${c}. Click to turn one more in.`;
              return (
                <div key={c} className={`pay-stack${out[c] ? ' paying' : ''}`} data-spend-stack={c}>
                  <button type="button" className="ps-add" data-spend-add={c} disabled={busy || taking} aria-disabled={full || undefined} title={say} aria-label={say} onClick={() => add(c)} />
                  <span className="ps-coins" data-dense={drawn > 6 || undefined} style={{ '--step': `${stackStep(drawn)}px` }}>
                    {drawn === 0 && <i className="ps-coin split-ghost" aria-hidden="true"><ResourceGlyph r={c} size={24} decorative /></i>}
                    {Array.from({ length: drawn }, (_, k) => <i key={k} className="ps-coin" style={{ '--k': k }} aria-hidden="true"><ResourceGlyph r={c} size={24} decorative /></i>)}
                  </span>
                  <b className="ps-n num" aria-hidden="true">{left}</b>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="pay-foot">
        {onBack && <button type="button" className="pay-cancel" data-option="back" disabled={busy || taking} onClick={onBack}>Cancel</button>}
        <button type="button" className="pay-go" data-spend-take={parts.map(x => `${x.n}${x.color}`).join(' ') || 'none'} disabled={busy || taking} onClick={take}>
          {n ? <>Turn in <CostDots parts={parts} /> for <b className="num">{get}</b> followers</> : 'Turn in nothing'}
        </button>
      </div>
    </section>
  );
}
