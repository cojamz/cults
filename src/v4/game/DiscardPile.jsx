// The discard pile beside the deck (Cory, Nov 6: "maybe we should start discarding? more interesting because then you
// know what's out (and what might be remaining) and then when discard is done it gets shuffled and turns back into the
// deck"). Face up: its top member shows, with the count. A click opens every member on it, top first, as a table
// lets anyone leaf through a face-up discard pile. Every number is the engine's: state.discard (oldest first).
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { cardDef, quadrant } from '../../engine/v4/index.js';
import { Sprite } from '../art/Sprite.jsx';
import { spriteId } from '../art/index.js';
import { useDialog } from './parts.jsx';
import { cardColor, onTable, MemberCard } from './Info.jsx';
import Tick from './Tick.jsx';
import './deck-browser.css';

const sphereOf = (state, d) => (onTable(state, d) ? quadrant(d.quadrant).resource : 'colorless');

export function DiscardPile({ state }) {
  const [open, setOpen] = useState(false);
  const list = state.discard || [];
  const n = list.length;
  const top = n ? cardDef(state, list[n - 1]) : null;
  const label = n ? `Discard pile: ${n} member${n === 1 ? '' : 's'}, ${top.name} on top` : 'The discard pile is empty';
  return (
    <>
      <button type="button" className={`lt-deck lt-discard${n ? '' : ' empty'}`} data-discard="" data-left={n}
        aria-label={n ? `${label}. Look through it` : label} aria-haspopup={n ? 'dialog' : undefined}
        title={n ? `${top.name} on top` : 'Members that leave play go here, face up'}
        onClick={e => { if (n && e.detail <= 1) setOpen(true); }}>
        <span className="pile">
          <span className="back face" aria-hidden="true" style={top ? { '--q': cardColor(state, top) } : undefined}>
            {top && <Sprite id={[top.id, spriteId(top.name)]} kind="member" sphere={sphereOf(state, top)} size={36} />}
            <span className="n num">{n ? <Tick value={n} float={false} /> : 'empty'}</span>
          </span>
        </span>
        <span className="cap" aria-hidden="true">discard</span>
      </button>
      {open && createPortal(<DiscardBrowser state={state} onClose={() => setOpen(false)} />, document.body)}
    </>
  );
}

export function DiscardBrowser({ state, onClose }) {
  const dialog = useDialog(onClose);
  const list = [...(state.discard || [])].reverse();
  return <div className="overlay top deck-browser-overlay" role="dialog" aria-modal="true" aria-label="Discard pile" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <section className="dialog deck-browser discard-browser" ref={dialog} data-discard-browser="">
      <header className="deck-browser-head"><div><h2>Discard pile</h2><p>{list.length} member{list.length === 1 ? '' : 's'}, top first · when the deck runs out, these are shuffled into a new deck</p></div><button type="button" className="btn ghost" data-autofocus onClick={onClose} aria-label="Close discard pile">Close</button></header>
      <div className="deck-browser-scroll" tabIndex={0} role="region" aria-label="Members on the discard pile">
        <ul className="discard-grid">
          {list.map(uid => <li key={uid} data-discard-member={cardDef(state, uid).id}><MemberCard state={state} def={cardDef(state, uid)} /></li>)}
        </ul>
      </div>
    </section>
  </div>;
}
