import { Fragment, useMemo, useState } from 'react';
import { cardDef, quadrant, allQuadrantIds, roman } from '../../engine/v4/index.js';
import { discardOf } from '../../engine/v4/discard.js';
import { CUT } from '../../engine/v4/content/cull.js';
import { costParts, playerColor } from '../format.js';
import { Sprite } from '../art/Sprite.jsx';
import { spriteId } from '../art/index.js';
import { useDialog } from './parts.jsx';
import { cardColor, cardGround, onTable, MemberCard } from './Info.jsx';
import { CostShapes, WorthTag } from './ShopCards.jsx';
import './deck-browser.css';

// A reference to the game's card types, grouped independently of the hidden draw order.
// Round decks: a member still waiting to be shuffled in carries `later` (the round it joins) and shows greyed.
export function deckCatalog(state) {
  const entries = new Map();
  const waitRound = new Map(Object.entries(state.waiting || {}).flatMap(([r, w]) => w.map(u => [u, Number(r)])));
  // who holds each copy (Cory, Nov 6: "deck isnt showing was has already been bought"): bought members sit face up in
  // front of their owners, so the browser may say whose they are
  const ownerOf = new Map(state.players.flatMap(p => p.members.map(u => [u, p.id])));
  // and what is face up on the discard pile (Cory, Nov 6: "deck should have a symbol for discarded just like it has one for bought")
  const discarded = new Set(discardOf(state));
  for (const card of Object.values(state.cards)) {
    const def = cardDef(state, card.uid);
    if (def.artifact || Object.values(state.artifacts || {}).includes(card.uid)) continue; // artifacts are not members
    const owner = ownerOf.get(card.uid);
    const gone = discarded.has(card.uid) ? 1 : 0;
    if (entries.has(def.id)) { const e = entries.get(def.id); e.copies++; e.discarded += gone; if (owner != null) e.owners.push(owner); continue; }
    const parts = costParts(def, state.resources);
    entries.set(def.id, { def, parts, copies: 1, owners: owner != null ? [owner] : [], discarded: gone, cost: parts.reduce((n, p) => n + p.n, 0), color: onTable(state, def) ? def.quadrant : 'colorless', ...(waitRound.has(card.uid) ? { later: waitRound.get(card.uid) } : {}) });
  }
  for (const e of entries.values()) { e.bought = e.owners.length > 0 && e.owners.length >= e.copies; e.allOut = e.owners.length + e.discarded >= e.copies; }
  const cards = [...entries.values()].sort((a, b) => a.cost - b.cost || a.def.name.localeCompare(b.def.name));
  const rows = [...state.quadrants.map(q => ({ key: q, name: quadrant(q).name, color: `var(--${q})` })), { key: 'colorless', name: 'Grey', color: 'var(--any)' }].filter(r => cards.some(c => c.color === r.key))
    .sort((a, b) => cards.find(c => c.color === a.key).cost - cards.find(c => c.color === b.key).cost);
  return { cards, rows, prices: [...new Set(cards.map(c => c.cost))].sort((a, b) => a - b), ...otherColors(state) };
}
// The other colors' members, not in this game (Cory, 2026-10-23: "stuff not in the deck should still show up… a visual
// indicator what's on the board and what's not"): shown after this game's rows, dimmed, each row saying so.
function otherColors(state) {
  const ids = allQuadrantIds().filter(id => !state.quadrants.includes(id) && !quadrant(id).standIn);
  const others = [], otherRows = [];
  for (const id of ids) {
    const q = quadrant(id), defs = q.members.filter(d => !CUT.has(d.id) && !d.retired && !d.artifact);
    if (!defs.length) continue;
    for (const def of defs) {
      const parts = costParts(def, [...state.resources, q.resource]);
      others.push({ def, parts, copies: def.copies || 1, owners: [], discarded: 0, cost: parts.reduce((n, p) => n + p.n, 0), color: id, out: true });
    }
    otherRows.push({ key: id, name: q.name, color: `var(--${id})`, out: true });
  }
  others.sort((a, b) => a.cost - b.cost || a.def.name.localeCompare(b.def.name));
  return { others, otherRows };
}

/** "Bought by Ana", or "2 of 3 bought: Ana, Bo" for a member with copies. */
export function boughtLine(state, owners, copies) {
  const names = owners.map(pid => state.players[pid]?.name ?? `P${pid + 1}`).join(', ');
  return copies > 1 ? `${owners.length} of ${copies} bought: ${names}` : `Bought by ${names}`;
}
/** Where a member's copies are: "Bought by Ana", "On the discard pile", "1 of 2 bought: Ana · 1 on the discard pile". */
export function whereLine(state, { owners = [], discarded = 0, copies }) {
  const out = [];
  if (owners.length) out.push(boughtLine(state, owners, copies));
  if (discarded) out.push(copies > 1 ? `${discarded} on the discard pile` : 'On the discard pile');
  return out.join(' · ');
}
// The two marks, the same in the grid and the legend: a check with a dot per owner, a cross for the discard pile.
export const BoughtMark = ({ owners = [], copies = 1 }) => <span className="db-mark bought" aria-hidden="true">✓{copies > 1 && <b className="num">{owners.length}</b>}{owners.map((pid, k) => <i key={k} style={{ background: playerColor(pid) }} />)}</span>;
export const DiscardMark = ({ n = 1, copies = 1 }) => <span className="db-mark discarded" aria-hidden="true">✕{copies > 1 && <b className="num">{n}</b>}</span>;

export default function DeckBrowser({ state, onClose }) {
  const dialog = useDialog(onClose);
  const { cards: here, rows: hereRows, others, otherRows } = useMemo(() => deckCatalog(state), [state]);
  const cards = [...here, ...others], rows = [...hereRows, ...otherRows];
  const [selectedId, select] = useState(null);
  const selected = cards.find(c => c.def.id === selectedId) || cards.find(c => c.color === rows[0]?.key);
  // a member of a color not in this game keeps its own color, so you can see what it would be
  const outIds = new Set(others.map(o => o.def.id));
  const tint = d => (outIds.has(d.id) ? `var(--${d.quadrant})` : cardColor(state, d));
  const art = d => <Sprite id={[d.id, spriteId(d.name)]} kind="member" sphere={onTable(state, d) || outIds.has(d.id) ? quadrant(d.quadrant).resource : 'colorless'} size={28} />;
  // the grid is the same while the table plays on under it: a rival's move re-renders it only when something it shows
  // changed (Cory, Nov 5: "deck scrollin gis super laggy" while the bots moved behind it)
  const sig = JSON.stringify([state.resources, selected?.def.id, rows.map(r => r.key), cards.map(c => [c.def.id, c.cost, c.color, c.later, c.owners, c.discarded, state.players.map(p => p.name), tint(c.def), outIds.has(c.def.id) ? '' : cardGround(state, c.def), onTable(state, c.def) ? 1 : 0])]);
  // Compact (Cory, Nov 6: "The deck UI should be way cleaner/easy to see. You shouldnt have to scroll so much"): one
  // row per color, its members as small chips cheapest first, each with its price, picture, name, cost and marks
  const grid = useMemo(() => (
        <div className="db-rows">
          {rows.map((row, i) => <Fragment key={row.key}>
            {row.out && !rows[i - 1]?.out && <div className="db-divider">Not in this game</div>}
            <section className={`db-row${row.out ? ' out' : ''}`} style={{ '--row-color': row.color }}>
              <h3 className="db-color">{row.name}</h3>
              <div className="db-chips" data-deck-color={row.key} {...(row.out ? { 'data-deck-out': '' } : {})}>
                {cards.filter(c => c.color === row.key).map(c => { const { def: d, later, owners = [], discarded = 0, bought, allOut, copies } = c; const where = whereLine(state, c);
                  return <button type="button" className={`db-chip${later ? ' later' : ''}${bought ? ' bought' : ''}${allOut ? ' gone' : ''}`} key={d.id} data-deck-price={c.cost} data-deck-member={d.id}
                    {...(later ? { 'data-deck-later': later } : {})} {...(owners.length ? { 'data-deck-bought': owners.length } : {})} {...(discarded ? { 'data-deck-discarded': discarded } : {})}
                    title={[d.name, later ? `Joins the deck in round ${roman(later)}` : '', where].filter(Boolean).join(' · ')}
                    style={{ '--q': tint(d) }} aria-pressed={selected?.def.id === d.id} onClick={() => select(d.id)}>
                    <span className="db-chip-cost num" aria-label={`costs ${c.cost}`}>{c.cost}</span>
                    <span className="db-chip-art">{art(d)}</span>
                    <span className="db-chip-words"><span className="db-chip-line"><span className="db-chip-name">{d.name}</span><WorthTag d={d} sphere={onTable(state, d) || outIds.has(d.id) ? quadrant(d.quadrant).resource : 'colorless'} /></span><span className="db-chip-line"><CostShapes parts={c.parts} />{(owners.length > 0 || discarded > 0) && <span className="db-marks">{owners.length > 0 && <BoughtMark owners={owners} copies={copies} />}{discarded > 0 && <DiscardMark n={discarded} copies={copies} />}</span>}</span></span>
                  </button>; })}
              </div>
            </section>
          </Fragment>)}
        </div>
  ), [sig]); // eslint-disable-line react-hooks/exhaustive-deps
  return <div className="overlay top deck-browser-overlay" role="dialog" aria-modal="true" aria-label="Browse members" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <section className="dialog deck-browser" ref={dialog}>
      <header className="deck-browser-head"><div><h2>Members</h2><p className="db-legend"><span><BoughtMark /> bought</span><span><DiscardMark /> on the discard pile</span>{Object.keys(state.waiting || {}).length > 0 && <span>greyed: joins in a later round</span>}<span>cheapest first</span></p></div><button type="button" className="btn ghost" data-autofocus onClick={onClose} aria-label="Close member browser">Close</button></header>
      {selected && <article className={`db-selected${selected.out ? ' out' : ''}${selected.later ? ' later' : ''}`} data-deck-selected={selected.def.id} style={{ '--q': tint(selected.def) }}>
        {/* the same card as everywhere (Cory, Oct 29: "why are the member cards in mixed style") */}
        <MemberCard state={state} def={selected.def} />
        {(selected.out || selected.later || selected.copies > 1) && <p className="db-out-note">{selected.out ? 'Not in this game' : selected.later ? `Joins the deck in round ${roman(selected.later)}` : `${selected.copies} copies in the deck`}</p>}
        {(selected.owners?.length > 0 || selected.discarded > 0) && <p className="db-out-note db-bought-note" data-deck-bought-note="">{whereLine(state, selected)}</p>}
      </article>}
      <div className="deck-browser-scroll" tabIndex={0} role="region" aria-label="Member cards by color, cheapest first">
        {grid}
      </div>
    </section>
  </div>;
}
