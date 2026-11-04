// Gaining several resources in colors you choose (Harvest: "+3 in round I, +4 in round II, +5 in round III, in colors
// you choose"), picked like a payment (Cory, Nov 4: "all the other purchasing selectors are solid and elegant. This one
// doesnt meet the bar"). The card by the space shows what you'd get as coins in a GETTING row, already split the way the
// engine suggests, over a stack per color of what you hold. Click a stack to take one more of that color; click a coin
// you're getting to take another color instead. Take (Enter) takes the whole split; the engine still asks one coin at a
// time, so the card answers each question as it comes, a beat apart, and every coin flies on its own.
import { useEffect, useRef, useState } from 'react';
import { TurnOf } from './parts.jsx';
import { ResourceGlyph } from './Glyphs.jsx';
import { CostDots } from './Info.jsx';
import { stackStep, rowStep } from './PayPicker.jsx';
import './pay.css';

const STACK_MAX = 12;
// a split being taken, one question at a time (kept outside the card, so a re-render between two picks never loses it)
let run = null;
export const splitKey = (state, g) => `${g.actor}|${g.title}|${state.round}`;
/** A split is being taken for this card: the card stays up for its last questions too. */
export const splitRunning = (state, g) => !!run && run.key === splitKey(state, g);

/** The engine's suggestion: one coin at a time to the color its hint likes best (fewest held, as the bots pick). */
function suggest(colors, held, n) {
  const got = Object.fromEntries(colors.map(c => [c, 0]));
  for (let k = 0; k < n; k++) {
    const c = [...colors].sort((a, b) => ((held[a] || 0) + got[a]) - ((held[b] || 0) + got[b]))[0];
    got[c] += 1;
  }
  return got;
}

export default function SplitPicker({ state, g, onAnswer, busy, place = null, turnOf = null, onBack = null }) {
  const pend = state.pending;
  const me = state.players[g.actor];
  const key = splitKey(state, g);
  const colors = g.seconds.map(x => x.b).filter(c => c !== 'neutral');
  const optOf = c => (g.seconds.find(x => x.b === c) || {}).o || null;
  const total = run && run.key === key ? run.total : g.toPick;
  const [got, setGot] = useState(() => (run && run.key === key ? run.plan : suggest(colors, me.res, g.toPick)));
  const box = useRef(null);
  const taking = !!run && run.key === key;

  // a coin more of c: it comes from the color you're getting most of (never c itself)
  const add = c => {
    if (busy || taking || got[c] >= total) return;
    const from = colors.filter(x => x !== c && got[x] > 0).sort((a, b) => got[b] - got[a])[0];
    if (!from) return;
    setGot({ ...got, [c]: got[c] + 1, [from]: got[from] - 1 });
  };
  // a coin you're getting goes back: the color you hold least of takes its place
  const remove = c => {
    if (busy || taking || !got[c]) return;
    const to = colors.filter(x => x !== c).sort((a, b) => ((me.res[a] || 0) + got[a]) - ((me.res[b] || 0) + got[b]))[0];
    if (!to) return;
    setGot({ ...got, [c]: got[c] - 1, [to]: got[to] + 1 });
  };
  const next = () => {
    if (!run || run.key !== key || run.done === pend || busy) return;
    const c = run.picks.shift();
    const o = c && optOf(c);
    if (!o) { run = null; return; }
    run.done = pend;
    if (!run.picks.length) run = null;
    onAnswer(o.id, box.current && box.current.querySelector(`[data-split-stack="${c}"]`), null);
  };
  const take = () => {
    if (busy || taking) return;
    const picks = colors.flatMap(c => Array.from({ length: got[c] }, () => c));
    run = { key, picks, plan: got, total, done: null };
    next();
  };
  // the next question of a split being taken: a beat after the last coin left, so each flight reads on its own
  useEffect(() => {
    if (!taking) return undefined;
    const t = setTimeout(next, 140);
    return () => clearTimeout(t);
  }, [pend, busy]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => () => { if (run && run.done !== state.pending) run = null; }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const b = box.current && box.current.querySelector('.pay-go');
    if (b && (!document.hasFocus || document.hasFocus())) b.focus({ preventScroll: true });
  }, []);

  const parts = colors.filter(c => got[c] > 0).map(c => ({ color: c, n: got[c] }));
  const tall = Math.min(STACK_MAX, Math.max(1, ...colors.map(c => me.res[c] || 0)));
  return (
    <section ref={box} className={`prompt choice plain gift-card split-card${place ? ` at-space ${place.up ? 'below' : 'above'}` : ''}`} role="group" aria-label={`${g.title}: +${total} in colors you choose`}
      data-gift="split" data-split={total} style={place ? { left: place.left, top: place.top } : undefined}
      onKeyDown={e => { if (e.key === 'Enter' && !e.target.closest('[data-option="back"]')) { e.preventDefault(); take(); } }}>
      {turnOf && <TurnOf player={turnOf} />}
      <header className="gc-head">
        {g.title && <small className="gc-title">{g.title}</small>}
        <p className="gc-what">+<b className="num">{total}</b> in colors you choose</p>
        <p className="gc-sub">Click a color for one more of it.</p>
      </header>
      <div className="pay-rows" style={{ '--rise': `${Math.min(30, (tall - 1) * 6)}px` }}>
        <div className="pay-row paying" role="group" aria-label="Getting">
          <span className="pr-lbl">Getting</span>
          <span className="pr-items">
            {colors.filter(c => got[c] > 0).map(c => (
              <button key={c} type="button" className="ps-out" data-split-coin={c} data-out={got[c]} disabled={busy || taking}
                title={`${got[c]} ${c}. Click to take another color instead of one.`} aria-label={`Getting ${got[c]} ${c}: swap one for another color`} onClick={() => remove(c)}>
                <span className="po-coins" data-dense={got[c] > 5 || undefined} style={{ '--ov': `${rowStep(got[c]) - 24}px` }}>
                  {Array.from({ length: got[c] }, (_, j) => <i key={j} className="ps-coin out" aria-hidden="true"><ResourceGlyph r={c} size={24} decorative /></i>)}
                </span>
                {got[c] > 5 && <b className="po-n num" aria-hidden="true">{got[c]}</b>}
              </button>
            ))}
          </span>
        </div>
        <div className="pay-row keeping" role="group" aria-label="You have">
          <span className="pr-lbl">You have</span>
          <div className="pay-stacks">
            {colors.map(c => {
              const have = me.res[c] || 0, drawn = Math.min(have, STACK_MAX), full = got[c] >= total;
              const say = full ? `All ${total} are ${c}.` : `${have} ${c}. Click to take one more ${c}.`;
              return (
                <div key={c} className={`pay-stack${got[c] ? ' paying' : ''}`} data-split-stack={c}>
                  <button type="button" className="ps-add" data-split-add={c} disabled={busy || taking} aria-disabled={full || undefined} title={say} aria-label={say} onClick={() => add(c)} />
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
        <button type="button" className="pay-go" data-split-take={parts.map(x => `${x.n}${x.color}`).join(' ')} disabled={busy || taking} onClick={take}>
          Take <CostDots parts={parts} />
        </button>
      </div>
    </section>
  );
}
