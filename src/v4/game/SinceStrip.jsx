// "Since your last turn": one short line per rival placement since your own last one, always on the board (RC1 panel:
// bot turns blurred past, "why does P4 suddenly have five gold?"). The player's name opens that placement's full card
// on hover (a tap on the line pins it); every space and member named opens its own card, like on the board. The whole
// log is one tap away (the Log button), not buried in the menu. Self-contained: the layout places the box.
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { playerColor, seatEmoji, roman } from '../format.js';
import { Minion } from '../art/Leader.jsx';
import { Tip } from './Info.jsx';
import { HoverName, HoverNames, locate } from './HoverNames.jsx';
import { Rich } from './Rich.jsx';
import { quadrant, spacesOf } from '../../engine/v4/index.js';
import { panelWords } from './panelText.js';
import './since.css';
import { holdFlag } from './bodyFlag.js';
import { takeHubGone } from './stage.js';
import { MO } from '../motion.js';

const MAX = 6;
/** What a move took from your seat, short enough to lead a one-line row: "took your Recluse", "took your 2 silver 1 follower". */
const lostSay = l => {
  const amounts = [...Object.entries(l.res).map(([r, n]) => `${n} ${r}`), ...(l.f ? [`${l.f} follower${l.f === 1 ? '' : 's'}`] : [])].join(' ');
  return `took your ${[l.gone.join(', '), amounts].filter(Boolean).join(' and ')}`;
};
/** The words the board prints on a space ("+3 gold, +1 to anyone"), for this round: the panel's own lines. */
const words = (state, key) => {
  if (!key) return '';
  try { const [q, i] = key.split('-').map(Number); const qid = state.quadrants[q]; return panelWords(qid, spacesOf(state, qid)[i], Math.max(1, state.round)) || ''; } catch { return ''; }
};

/**
 * The one-line row's pieces (compact strip): the short's parts, with a gain's bracketed detail as a piece of its own
 * and its followers first, so a long gain keeps its head when the row is narrow. Each piece drops whole when it doesn't
 * fit; a first piece that dropped whole left "P4 Melting Pot" with nothing gained (picky bot, Nov 11: P4 went 15 to 26).
 */
/** The strip's lines as the fold counts them: one per move, the "N earlier" line apart. Your own turn's row stands under
 *  its "Your turn" label and goes with it, so the label is no line of its own: counted as one, the fold ran one past the
 *  moves it could drop and gave up, leaving three rival lines hidden over the top with no "N earlier" and the label cut
 *  in half (turnstory t2, 1270x700, Nov 12). head(row) is what the row's top is measured from: the label over it, if any. */
export function foldLines(kids) {
  const moreEl = kids[0] && kids[0].classList.contains('since-more') ? kids[0] : null;
  const rows = kids.filter(el => el !== moreEl && !el.classList.contains('since-own-label'));
  const head = el => { const p = el.previousElementSibling; return p && p.classList.contains('since-own-label') ? p : el; };
  return { moreEl, rows, head };
}

export function rowParts(short) {
  const parts = String(short || '').split(' · ').filter(Boolean);
  if (!parts.length) return parts;
  let [first, ...rest] = parts;
  const br = first.match(/^([+−-]\d.*?) (\(.+\))$/);
  const detail = br ? br[2] : null;
  if (br) first = br[1];
  const fol = first.match(/^((?:[+−-]\d+ [a-z]+ )+)([+−-]\d+ followers?)((?: from .+)?)$/);
  if (fol) first = `${fol[2]} ${fol[1].trim()}${fol[3]}`;
  return [first, ...(detail ? [detail] : []), ...rest];
}

/** The board words and the move's gain say the same thing ("+3 green" both), so the brackets would repeat it. */
const flat = t => String(t || '').toLowerCase().replace(/\s+/g, ' ').trim();
export const saysSame = (board, short) => !!board && !!short && flat(short.split(' · ')[0]) === flat(board);

/** The story stands under the chairs (the wide laptop layout, layout.css): there it's the compact log. */
const UNDER_CHAIRS = '(min-width:1200px) and (min-height:500px)';
function useCompact() {
  const get = () => typeof matchMedia === 'function' && matchMedia(UNDER_CHAIRS).matches;
  const [on, setOn] = useState(get);
  useEffect(() => {
    if (typeof matchMedia !== 'function') return undefined;
    const m = matchMedia(UNDER_CHAIRS);
    const set = () => setOn(m.matches);
    set();
    m.addEventListener('change', set);
    return () => m.removeEventListener('change', set);
  }, []);
  return on;
}

/**
 * The newest finished turn, whole, as the last row of the list (Cory, Nov 6: the story card "should move to the log
 * area when its done" and "always show the full story card", and the separate card under the list "is just awkward"):
 * every line, each name a hover target; it flies in from where the story card stood on the hub.
 */
function FullRow({ e, state, hover, name }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current, h = takeHubGone();
    if (!el || !el.animate || !h || h.pid !== e.actor || Date.now() - h.gone > 900) return;
    const r = el.getBoundingClientRect();
    if (!r.width) return;
    // with the next player's banner already up, the row fades in where it lands instead: a copy crossing the wheel, the
    // seats and your cloak while their banner filled read as a stray card (frame review, Nov 7); and the flight never
    // takes longer than Steady's
    const dur = Math.min(300, Math.round(MO.storyFly));
    if (document.querySelector('[data-turn-at="hub"]')) {
      const a = el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: dur, easing: 'ease-out' });
      return () => a.cancel();
    }
    const sc = Math.max(0.5, Math.min(1.6, h.rect.width / r.width));
    const dx = h.rect.left + h.rect.width / 2 - (r.left + r.width / 2), dy = h.rect.top + h.rect.height / 2 - (r.top + r.height / 2);
    // a copy flies on the page's top layer (the list clips its own rows), and the row shows as it lands
    // (inside a copy of the strip's own boxes, so the row keeps its look and width in flight: the bare copy reflowed
    // and ran over the rim, art director pass)
    const c = el.cloneNode(true);
    c.removeAttribute('data-since-full');
    c.removeAttribute('data-turn-story');
    const g = document.createElement('section'), ol = document.createElement('ol');
    g.className = 'lt-since since-fly'; ol.className = 'since-list';
    ol.appendChild(c); g.appendChild(ol);
    Object.assign(g.style, { position: 'fixed', left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: 'auto', maxHeight: 'none', margin: '0', padding: '0', zIndex: '70', pointerEvents: 'none', background: 'none', overflow: 'visible', transformOrigin: '50% 50%' });
    Object.assign(ol.style, { margin: '0', padding: '0', listStyle: 'none', maxHeight: 'none', overflow: 'visible' });
    document.body.appendChild(g);
    el.style.opacity = '0';
    const a = g.animate([{ transform: `translate(${dx}px,${dy}px) scale(${sc})` }, { transform: 'none' }], { duration: dur, easing: 'cubic-bezier(.3,.7,.3,1)' });
    const done = () => { g.remove(); el.style.opacity = ''; };
    a.onfinish = done; a.oncancel = done;
    return done;
  }, [e.n]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <li ref={ref} className="since-row since-full" data-since-full={e.n} data-turn-story={[e.head, ...e.lines].join(' · ')} style={{ '--pc': playerColor(e.actor) }}
      onPointerEnter={e.spaceKey ? () => locate(e.spaceKey, true) : undefined} onPointerLeave={e.spaceKey ? () => locate(e.spaceKey, false) : undefined}>
      <span className="sf-head"><Minion color={playerColor(e.actor)} emoji={seatEmoji(state, e.actor)} size={14} /><b className="who">{name(e.actor)}</b>{' '}
        <HoverNames state={state} hover={hover} text={e.head.replace(new RegExp(`^${name(e.actor).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} `), '')} uids={e.uids} />{/* the space's words from the board, as on the one-line rows: the wheel prints no names (picky bot, Nov 11:
            "You took Swindle") */}
        {e.spaceKey && words(state, e.spaceKey) ? <span className="sp-words"> (<Rich text={words(state, e.spaceKey)} />)</span> : null}</span>
      {/* its lines as one flowing paragraph, so a long turn still fits the room under the chairs */}
      {e.lines.length > 0 && <span className="sf-line">{e.lines.map((l, k) => <span key={k} className="sf-part">{k ? ' · ' : ''}<HoverNames state={state} hover={hover} text={l} uids={e.uids} /></span>)}</span>}
    </li>
  );
}

/** One placement's full card (the same lines as the turn card by the cult), its names hover targets. */
export function StoryCard({ story, color, state, hover }) {
  // open in a tip: body[data-since-tip] (since.css), in place of a body:has() that re-styled the whole page
  const ref = useRef(null);
  useLayoutEffect(() => (ref.current && ref.current.closest('.tip-body') ? holdFlag(document.body, 'sinceTip') : undefined), []);
  return (
    <div ref={ref} className="since-card" data-since-card style={{ '--pc': color }}>
      <b className="sc-head"><HoverNames state={state} hover={hover} text={story.head} uids={story.uids} /></b>
      {story.lines.length ? story.lines.map((l, k) => <span key={`${k}:${l}`} className="sc-line"><HoverNames state={state} hover={hover} text={l} uids={story.uids} /></span>)
        : <span className="sc-line quiet">Nothing else changed.</span>}
    </div>
  );
}

/**
 * props: state, entries (stories, oldest first: { actor, head, space, spaceKey, short, lines, uids, hit, n }), me (your
 * id or null), yours (it's your move now), hover (the board's hover layer), onLog (opens the full log),
 * pool (the spare minions, MinionPool, from round II: they sit beside the Log, and the strip's title drops to its own line).
 */
export default function SinceStrip({ state, entries: rivals, own = null, me, yours, hover = null, onLog, pool = null, full = null }) {
  // your own turn as it builds is the list's last row, under a label of its own (frame review, Nov 7: "You took Build Up"
  // showed under "Since your last turn")
  const entries = own ? [...rivals, own] : rivals;
  // whole lines only (design pod): when the strip's room can't hold every line, the oldest go into "N earlier…" instead
  // of showing part of a line at the top. The fold is worked out in one step from where the lines stand (the list stacks
  // from its foot, so dropping the oldest leaves the rest where they are), and lines that won't stay are hidden before the
  // frame paints, so no part of a line is ever drawn. Nothing here sizes the strip: its room is set by the layout from the
  // chairs and the turn card, never by these lines, so measuring can't feed back (the TurnCard lesson, 2026-10-15).
  const listRef = useRef(null), secRef = useRef(null);
  // The strip's room changes without resizing anything the ResizeObserver watches when the turn card comes or goes
  // (layout.css [data-turn-card]), when the card's height or the chairs' end moves (--turn-h, --seats-end, on the strip)
  // or the window resizes. Any of these starts the fold over, so a strip with more room shows more lines again. Watched on
  // the DOM, where the layout reads them; the strip writes none of them, so this can't feed back.
  const [roomKey, setRoomKey] = useState(0);
  useEffect(() => {
    const host = secRef.current && secRef.current.parentElement;
    if (!host || typeof MutationObserver !== 'function') return undefined;
    // (--turn-h and --seats-end are written on the strip itself, their only reader: perf, 2026-10-15)
    const sec = secRef.current;
    const room = () => `${!!host.querySelector(':scope > .turn-card')}|${sec.style.getPropertyValue('--turn-h')}|${sec.style.getPropertyValue('--seats-end')}|${innerWidth}x${innerHeight}`;
    let was = room();
    const check = () => { const now = room(); if (now !== was) { was = now; setRoomKey(k => k + 1); } };
    const mo = new MutationObserver(check);
    mo.observe(host, { childList: true });
    mo.observe(sec, { attributes: true, attributeFilter: ['style'] });
    addEventListener('resize', check);
    return () => { mo.disconnect(); removeEventListener('resize', check); };
  }, []);
  // under the chairs (from 1200px wide) the story fills the room the chairs leave, oldest lines folding into "N earlier"
  // (Cory, 2026-10-27, from Mike's playtest: the one-line log opened over Bot 4's chair; the empty space under the
  // chairs holds the short log instead, and the whole log is one tap away). Elsewhere it keeps its column.
  const compact = useCompact();
  const sig = `${entries.map(e => e.n).join(',')}|${full}|${roomKey}`;
  // how many of the oldest lines are folded, for these lines in this room: anything new starts it over at 0 (worked out
  // here, not by a second commit)
  const [dropState, setDrop] = useState({ sig: '', n: 0, bare: false });
  const drop = dropState.sig === sig ? dropState.n : 0;
  // too little room for even the newest line and the "N earlier" line: the newest shows alone, whole (the Log button
  // above still opens the rest)
  const bare = dropState.sig === sig && dropState.bare;
  // and when even the newest line doesn't fit whole on its two lines, it sets on one (1); if not even that, the strip
  // shows only its header and the count (2): a cut line never shows (wave 4: the chairs' figures grew to 40px)
  const lvl = dropState.sig === sig ? (dropState.lvl || 0) : 0;
  const base = entries.slice(-MAX);
  const cut = Math.min(drop, Math.max(0, base.length - 1));
  // Checked when the layout has settled, from a ResizeObserver on the list and its own lines (perf, 2026-10-15: reading
  // the computed style and scrollHeight in a layout effect forced a page layout every step). A ResizeObserver runs after
  // layout and before paint, so the lines it hides are never drawn in part.
  const committed = useRef({ sig, cut, len: base.length, lvl });
  const asked = useRef(null); // the fold the observer asked for and hid lines for, until React draws it
  const ro = useRef(null), watched = useRef(new Set()), fold = useRef(null);
  // the list and each line on it are watched (observing is not a layout read; a newly watched line reports once)
  useLayoutEffect(() => {
    const prev = committed.current, was = prev.sig;
    committed.current = { sig, cut, len: base.length, lvl, bare };
    // the fold asked for is drawn (or these are new lines, or a new room): lines hidden while it was on its way show again
    const l = listRef.current;
    if (asked.current && (asked.current.sig !== sig || (cut >= asked.current.n && (bare || !asked.current.bare) && lvl >= (asked.current.lvl || 0)))) {
      asked.current = null;
      if (l) for (const el of l.querySelectorAll(':scope > [data-fold-hide]')) { el.removeAttribute('data-fold-hide'); el.style.visibility = ''; }
    }
    if (typeof ResizeObserver !== 'function') return;
    const fresh = !ro.current;
    if (fresh) {
      fold.current = () => {
        const list = listRef.current;
        if (!list) return;
        const { sig: s0, cut: c0, len, lvl: l0 } = committed.current;
        if (l0 >= 2) return;
        const { moreEl, rows, head } = foldLines([...list.children]);
        if (!rows.length) return;
        // in a ResizeObserver callback the layout is settled, so these reads are free
        // a one-line row whose gain didn't fit beside the name dropped it whole ("P4 Melting Pot" alone): that row keeps
        // its gain, cut at a word, and lets the rest go (data-tight, since.css; kept until the row says something else,
        // and the row's height never changes, so this can't feed back). Picky bot, Nov 11.
        if (list.closest('.compact')) {
          const tight = [];
          for (const r of list.querySelectorAll(':scope > .since-row[data-short]')) {
            if (r.dataset.tight && r.dataset.tight !== r.dataset.short) delete r.dataset.tight;
            const f = r.dataset.tight ? null : r.querySelector(':scope > .big.part.first');
            if (f && f.getBoundingClientRect().top - r.getBoundingClientRect().top > 2) tight.push(r);
          }
          for (const r of tight) r.dataset.tight = r.dataset.short;
        }
        const top = list.getBoundingClientRect().top;
        const gap = parseFloat(getComputedStyle(list).rowGap) || 0;
        // the "N earlier" line's height when it stands above the kept lines (its own, or a one-line guess before it exists)
        const moreH = (moreEl ? moreEl.getBoundingClientRect().height : 18) + gap;
        const fits = k => head(rows[k]).getBoundingClientRect().top - (c0 + k > 0 ? moreH : 0) >= top - 1;
        let k = 0;
        while (k < rows.length - 1 && !fits(k)) k++;
        // the newest line fits, but not with the "earlier" line above it; or it doesn't fit even alone (a level down)
        const alone = head(rows[k]).getBoundingClientRect().top >= top - 1;
        const bareNow = c0 + k > 0 && !fits(k);
        // a line shows whole or not at all, never cut mid-word (blind panel: "took your Tax…"): a newest line too tall
        // for the room first drops the space's board words in brackets (its name still opens its card), which changes
        // its size so this runs again; if it still doesn't fit, or had none to drop, the strip shows only the count
        // rival turns since yours are the strip's whole point (panel r3: the fold hid three of them): before any line
        // folds into "N earlier", every line drops its board words in brackets, and the fold is measured again
        if (l0 === 0 && k > 0 && rows.some(r => r.querySelector('.sp-words'))) {
          for (const el of new Set(rows.slice(0, k).flatMap(r => [head(r), r]))) { el.setAttribute('data-fold-hide', ''); el.style.visibility = 'hidden'; }
          asked.current = { sig: s0, n: c0, bare: false, lvl: 1 };
          setDrop(d => (d.sig === s0 && (d.lvl || 0) >= 1 ? d : { sig: s0, n: c0, bare: false, lvl: 1 }));
          return;
        }
        // (a whole turn's row too tall for the room sets as one line: its top was cut under the head, frame review, Nov 7)
        const brief = l0 === 0 && (!!rows[k].querySelector('.sp-words') || rows[k].classList.contains('since-full'));
        const lvlNow = !fits(k) && !alone ? (brief ? 1 : 2) : l0;
        if ((!k && !bareNow && lvlNow === l0) || c0 + k > len - 1) return;
        const n = c0 + k;
        // hide what goes (and the "earlier" line, which moves down when React draws the fold; and the newest, when it
        // sets smaller) before this frame paints
        for (const el of new Set([...(moreEl ? [moreEl] : []), ...rows.slice(0, lvlNow > l0 ? k + 1 : k).flatMap(r => [head(r), r])])) { el.setAttribute('data-fold-hide', ''); el.style.visibility = 'hidden'; }
        asked.current = { sig: s0, n, bare: bareNow, lvl: lvlNow };
        setDrop(d => (d.sig === s0 && d.n >= n && (d.bare || !bareNow) && (d.lvl || 0) >= lvlNow ? d : { sig: s0, n, bare: bareNow || (d.sig === s0 && d.bare), lvl: lvlNow }));
      };
      ro.current = new ResizeObserver(() => fold.current());
    }
    // new lines, a new room, or a fold or shorter setting just drawn: measure now, inside this commit, so each step of
    // the fold (all lines, then without board words, then folded) is drawn before the frame and none shows cut. Waiting
    // for the observer took a frame per step, and dropping a line's board words can leave every line the same height
    // (two lines either way) with the oldest still cut at the top, so nothing resized to ask again (turnstory t2: "P2
    // Tide…" stayed cut for ~110 frames at 1270x700 under the turn card). One layout read, only when something changed.
    const redrawn = was !== sig || prev.cut !== cut || (prev.lvl || 0) !== lvl || !!prev.bare !== bare;
    if ((redrawn || fresh) && l) fold.current();
    const r = ro.current, w = watched.current;
    for (const el of [...w]) if (!el.isConnected) { r.unobserve(el); w.delete(el); }
    if (!l) return;
    for (const el of [l, ...l.children]) if (!w.has(el)) { r.observe(el); w.add(el); }
  });
  useEffect(() => () => { if (ro.current) ro.current.disconnect(); ro.current = null; watched.current.clear(); }, []);
  const shown = base.slice(cut);
  const more = entries.length - shown.length;
  const name = id => (id === me ? 'You' : state.players[id].name);
  const lead = e => !!(e.lost && me != null && !/\byour\b|\byou gave\b/.test(e.short || ''));
  // a tap anywhere on a line that isn't a name pins its card (the name's own tap opens the name's card)
  const pinLine = e => { const t = e.currentTarget.querySelector('[data-since-line]'); if (t && !e.target.closest('[data-hover-name], [data-since-line]')) t.click(); };
  // nothing to tell (before your first turn, or your second turn in a row): the strip says nothing at all, only the Log
  // stays (blind panel: "No moves since yours yet." narrated nothing)
  const empty = !entries.length;
  const title = rivals.length ? 'Since your last turn' : 'Your turn';
  const count = (bare || lvl >= 2) && more + (lvl >= 2 ? shown.length : 0) > 0 ? (
    <button type="button" className="since-more in-head" onClick={onLog} title="Open the log">{lvl >= 2 ? `${more + shown.length} ${more + shown.length === 1 ? 'move' : 'moves'}` : `${more} earlier`}</button>
  ) : null;
  // one row: the turn whole (yours as it builds, Cory, Nov 6; or the newest finished one, while the room holds it whole),
  // else its one line
  const row = e => (e === own || (e.n === full && lvl === 0) ? <FullRow key={`f${e.n}`} e={e} state={state} hover={hover} name={name} /> : (
            // the space the line names lights on the wheel while any of the line is pointed at, not only its name (picky
            // bot, Nov 4: the wheel prints no names, so readers couldn't find the space a rival took)
            <li key={e.n} className={`since-row${e.hit ? ' hit' : ''}${lvl === 1 ? ' brief' : ''}`} hidden={lvl >= 2 || undefined} data-says-same={saysSame(words(state, e.spaceKey), e.short) || undefined} data-clip-ok={compact || undefined} data-short={compact && e.short ? e.short : undefined} style={{ '--pc': playerColor(e.actor) }} onClick={pinLine}
              onPointerEnter={e.spaceKey ? () => locate(e.spaceKey, true) : undefined} onPointerLeave={e.spaceKey ? () => locate(e.spaceKey, false) : undefined}>
              {/* a move from the round before says so (picky bot, Nov 4: a round I Peek read against round II's faces) */}
              {e.round && e.round !== state.round ? <small className="since-round" data-since-round={e.round}>Round {roman(e.round)}</small> : null}
              <Tip className="since-line" data-since-line={e.n} label={`${e.head}: show what happened`}
                content={() => <StoryCard story={e} color={playerColor(e.actor)} state={state} hover={hover} />}>
                <Minion color={playerColor(e.actor)} emoji={seatEmoji(state, e.actor)} size={14} /><b className="who">{name(e.actor)}</b>
              </Tip>{' '}
              {e.spaceKey && hover ? <HoverName hover={hover} target={{ kind: 'space', key: e.spaceKey }}><span className="sp">{e.space}</span></HoverName>
                : <span className="sp">{e.space || 'turn'}</span>}
              {/* the space's own words from the board, so the name needs no lookup */}
              {/* not when the gain already says it (picky bot, Nov 6: "P3 Build Up: +3 green (+3 green)") */}
              {words(state, e.spaceKey) && !saysSame(words(state, e.spaceKey), e.short) ? <span className="sp-words"> (<Rich text={words(state, e.spaceKey)} />)</span> : null}
              {/* what this move took from your own seat leads the line (picky bot, Nov 4: Line Cutters taken and 5
                  followers down to 1, and the line said only "P3 Reprise"): "took your Line Cutters and 4 followers",
                  short, so it shows on a one-line row,
                  unless the line already says what it took of yours */}
              {lead(e) ? <span className="big part first lost" data-since-lost={e.n}>: <Rich text={lostSay(e.lost)} /></span> : null}
              {e.short && compact ? rowParts(e.short).map((part, k) => (
                <span key={k} className={`big part${k || lead(e) ? '' : ' first'}`}>{k === 0 && !lead(e) ? ': ' : /^\(/.test(part) ? '' : '· '}<HoverNames state={state} hover={hover} text={part} uids={e.uids} /></span>
              )) : e.short ? <span className="big">{lead(e) ? ' · ' : ': '}<HoverNames state={state} hover={hover} text={e.short} uids={e.uids} /></span> : null}
            </li>
    ));
  return (
    <section ref={secRef} className={`lt-since${yours ? ' yours' : ''}${empty ? ' empty' : ''}${compact ? ' compact' : ''}`} data-since data-empty={empty || undefined} data-folded={cut || undefined} aria-label="Since your last turn">
      <header className={`since-head${pool ? ' with-pool' : ''}`}>
        {/* the spare minions beside the Log (Cory, Oct 29, his pick of three spots) */}
        {pool}
        {!empty && !pool && <span className="since-title">{title}</span>}
        {/* the newest line alone: the earlier ones are counted up here, beside the Log, taking no line of their own */}
        {!pool && count}
        <button type="button" className="since-log" data-open-log onClick={onLog} title="The whole game, move by move">Log</button>
      </header>
      {/* with the spare minions in the head, the title and its count take their own line, but only over a line they head:
          folded to a count, the head wrapped it ("1" over "move") and the title stood alone under the turn card, cut in
          half (playtest, Nov 1). The Log beside the minions still opens every move. */}
      {!empty && pool && lvl < 2 && <div className="since-own"><span className="since-title own-line">{title}</span>{count}</div>}
      {shown.length ? (
        <ol className="since-list" ref={listRef}>
          {/* "2 earlier moves: open the log" (picky bot, Nov 4: the ellipsis read as cut-off text; Nov 11: "3 more" read as a fragment) */}
          {more > 0 && !bare && <li className="since-more"><button type="button" onClick={onLog}>{more} earlier {more === 1 ? 'move' : 'moves'}: open the log</button></li>}
          {shown.map(e => (e === own && rivals.length && lvl < 2 ? [<li key="own" className="since-own-label">Your turn</li>, row(e)] : row(e)))}
        </ol>
      ) : null}
    </section>
  );
}
