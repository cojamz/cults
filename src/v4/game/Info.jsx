import { discountSources } from '../../engine/v4/discount.js';
// The information layer: everything here appears on hover (mouse) or tap / long-press (touch), never always on.
// - Tip: any element that explains itself in a small card (hover after a beat; a tap pins it; Esc / tap away closes).
// - Term / CardText: game keywords underlined in rules text; each opens its glossary definition (src/v4/glossary.js).
// - CardName / MemberCard: a member named anywhere opens the full card (color, cost, ability).
// - ContestStandings / ContestTip: a quadrant's contest straight from the engine's contestTable (who'd score now).
// - TouchTips: on touch screens a long-press on anything with a title shows that title (hover's touch twin).
import { splitOpener, TimingIcons } from './Timing.jsx';
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { memberWeight, cardDef, defById, quadrant, previewSpace, memberPrice } from '../../engine/v4/index.js';
import { term, splitTerms } from '../glossary.js';
import { costParts, playerColor, standings, toStanding, tiebreakNote } from '../format.js';
import { realHover } from '../hover.js';
import { Popover } from './parts.jsx';
import { aimAt, arrived, heading, over, holdCard, dropCard, busyWith, claim, unclaim, claimedByOther } from './hoverIntent.js';
import { Who, MemberGlyph } from './Glyphs.jsx';
import { Rich, Pip } from './Rich.jsx';
import { Follower } from '../art/Follower.jsx';
import { Sprite } from '../art/Sprite.jsx';
import { spriteId } from '../art/index.js';
import { HOVER_DELAY_MS, HOVER_OPEN_MS } from './hoverDelay.js';
import { MO } from '../motion.js';
import { withRace } from './race.js';
import { memberTimingWords } from './memberTiming.js';
import { poolNote } from './poolNote.js';
import './card-header.css';

/**
 * An element that explains itself. content: a node or a function returning one (built only when shown).
 * Hover (a real mouse) shows it after a beat; a click or tap pins it; the click never reaches a parent button.
 */
// Inside a control (an option button, a card): the control owns the click, the tip only explains on hover/long-press.
const CONTROL = 'button, a[href], [data-option], [role="button"]';
// a pointer resting on something opens its card after the one hover delay (Cory, 2026-10-15: a mouse sweeping across
// the screen shouldn't fire hovers nonstop), drawn hidden meanwhile so it shows whole in one frame; a click or tap at once
export function Tip({ content, children, as: As = 'span', className = '', label, hint = null, sticky = false, beside = null, ...rest }) {
  const [open, setOpen] = useState(null); // { el, pinned, hidden } (hidden: waiting out the hover delay, drawn off screen)
  const [nested, setNested] = useState(false);
  const ref = useRef(null);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  useLayoutEffect(() => { const up = ref.current && ref.current.parentElement; setNested(!!(up && up.closest(CONTROL))); }, []);
  // sticky: a card with a button on it (a member you can use) stays while the pointer is on it or on its way to it
  // (hoverIntent.js: what the pointer crosses on the way doesn't open its own card over it)
  const body = useRef(null);
  const pending = useRef(false);
  const cardEl = () => (body.current ? body.current.closest('.popover') || body.current : null);
  const letGo = () => { const c = cardEl(); if (c) { arrived(c); dropCard(c); } setOpen(o => (o && !o.pinned ? null : o)); };
  // it stays while the pointer is on it (its surface is see-through to clicks, so that's measured, not an event) or on
  // its way to it; a route that wanders a little (w3b #47: leaving the figure downward) still has 300ms to get there
  const release = () => {
    clearTimeout(timer.current);
    const wait = () => { if (heading() || over(cardEl())) { timer.current = setTimeout(wait, 80); return; } letGo(); };
    timer.current = setTimeout(wait, 300);
  };
  // one card on screen at a time (w3a A30): opening this one closes whatever card was up, the hover layer's included
  const me = useRef(null);
  if (!me.current) me.current = Symbol('tip');
  const isOpen = !!open && !open.hidden;
  useEffect(() => {
    if (!isOpen) return undefined;
    const id = me.current;
    claim(id, () => { clearTimeout(timer.current); setOpen(null); });
    return () => unclaim(id);
  }, [isOpen]);
  // while a sticky card is up (not pinned), it's the card the pointer may be on: what's under it doesn't open
  const seeThrough = !!(sticky && isOpen && !open.pinned);
  useEffect(() => {
    if (!seeThrough) return undefined;
    const find = () => cardEl();
    holdCard(find);
    return () => dropCard(find);
  }, [seeThrough]); // eslint-disable-line react-hooks/exhaustive-deps
  const opening = () => {
    clearTimeout(timer.current);
    pending.current = true;
    setOpen(o => o || { el: ref.current, pinned: false, hidden: true });
    // no wait (Cory, 2026-10-25): drawn hidden and placed this frame, shown the next, so it opens whole where it stays
    // with another card up, a tip the pointer only passes over doesn't take its place: it waits that card's close beat
    // (sweeping the wheel crossed the shop's header tip and flickered the space card shut: info.mjs d)
    const wait = HOVER_DELAY_MS <= 0 && claimedByOther(me.current) ? Math.max(HOVER_OPEN_MS, MO.hoverClose) : HOVER_OPEN_MS;
    timer.current = setTimeout(() => { pending.current = false; setOpen(o => (!o ? { el: ref.current, pinned: false } : o.hidden ? { ...o, hidden: false } : o)); }, wait);
  };
  // crossing toward another open card: this one stays shut (it opens on the next move once the crossing is over)
  // (the short detour allowance doesn't hold back a neighbour: moving along the row opens the next member at once,
  // w4a #36)
  const crossing = e => !!busyWith(e ? { x: e.clientX, y: e.clientY } : undefined, body.current, { noGrace: true });
  // held back while the pointer crossed toward another open card: it opens once that's over, if the pointer is still
  // on it (a held-back hover never stays shut for good: w4b #2)
  const onIt = useRef(false);
  const retry = useRef(null);
  useEffect(() => () => clearTimeout(retry.current), []);
  const heldBack = () => {
    clearTimeout(retry.current);
    const again = () => { if (!onIt.current) return; if (crossing()) { retry.current = setTimeout(again, 60); return; } opening(); };
    retry.current = setTimeout(again, 60);
  };
  // built once per opening (and again only when what it reads changes): the reveal after the delay draws nothing new.
  // Kept in a ref, never read by a closure here: a closure made in this render (a mount effect's cleanup lives as long as
  // the tip) would hold the content it saw, and a content function holds the whole game state it was drawn with, so a
  // late game kept one old state alive per member chip (leak pass, 2026-10-28)
  const drawing = !!open;
  const built = useRef(null);
  if (!drawing) built.current = null;
  else if (!built.current || built.current.content !== content) built.current = { content, node: typeof content === 'function' ? content() : content };
  const shownContent = built.current ? built.current.node : null;
  const inControl = () => { const up = ref.current && ref.current.parentElement; return !!(up && up.closest(CONTROL)); };
  const pin = e => {
    // a keyword in an option's text never eats the option's click (a tap there picks the option)
    if (inControl()) return;
    e.stopPropagation(); e.preventDefault(); clearTimeout(timer.current); setOpen(o => (o && o.pinned ? null : { el: ref.current, pinned: true }));
  };
  return (
    <>
      <As
        ref={ref} className={`tip${className ? ` ${className}` : ''}`} data-tip="" role={nested ? undefined : 'button'} tabIndex={nested ? undefined : 0}
        aria-haspopup={nested ? undefined : 'dialog'} aria-expanded={nested ? undefined : isOpen} aria-label={label}
        data-hint={nested ? hint || label || undefined : undefined}
        onPointerEnter={e => { if (!realHover(e)) return; onIt.current = true; if (crossing(e)) { heldBack(); return; } opening(); }}
        onPointerMove={e => { if (open || pending.current || !realHover(e) || crossing(e)) return; opening(); }}
        onPointerLeave={e => {
          clearTimeout(timer.current); pending.current = false; onIt.current = false; clearTimeout(retry.current);
          if (e.pointerType !== 'mouse') return;
          if (sticky && isOpen && !open.pinned && body.current) { aimAt(body.current.closest('.popover') || body.current); release(); }
          // the hover's wait is on closing (Cory, 2026-10-25): an open tip stays a beat after the pointer leaves
          else if (isOpen && !open.pinned && HOVER_DELAY_MS <= 0) timer.current = setTimeout(letGo, MO.hoverClose);
          else letGo();
        }}
        onClick={pin}
        onKeyDown={e => { if (!nested && (e.key === 'Enter' || e.key === ' ')) pin(e); }}
        {...rest}
      >{children}{nested ? null : <span className="hitbox" aria-hidden="true" />}</As>
      {open && (
        <Popover anchor={open.el} onClose={() => setOpen(null)} float={!open.pinned} hidden={!!open.hidden} beside={beside && open.el ? open.el.closest(beside) : null}>
          <div className={`tip-body${seeThrough ? ' see-through' : ''}${!sticky && !open.pinned ? ' passive' : ''}`} data-tip-body ref={body}
            {...(sticky ? { onPointerEnter: () => { clearTimeout(timer.current); arrived(); }, onPointerLeave: e => { if (e.pointerType === 'mouse') release(); } } : {})}>{shownContent}</div>
        </Popover>
      )}
    </>
  );
}

// ---------- keywords ----------
/** A keyword that opens its glossary definition. k: a glossary key ('full set', 'plant'…). */
export function Term({ k, children, className = '' }) {
  const t = term(k);
  if (!t) return <>{children}</>;
  return (
    <Tip className={`term${className ? ` ${className}` : ''}`} data-term={k} label={`${t.word}: what it means`} hint={`${t.word}: ${t.def}`}
      content={() => <Definition k={k} />}>{children}</Tip>
  );
}
export function Definition({ k }) {
  const t = term(k);
  return <div className="pop-card gloss"><b>{t.word}</b><span>{t.def}</span><small>Glossary · How to play lists every term</small></div>;
}
/** Rules text: resource words as symbols (Rich), game keywords underlined (each opens its definition). */
export function CardText({ text }) {
  if (!text) return null;
  const open = splitOpener(memberTimingWords(text));
  if (open) {
    // the icons open the timing's definition, as its words did (a keyword inside a button still picks the button)
    const key = splitTerms(open.words).find(x => x.key)?.key;
    const icons = <TimingIcons kinds={open.kinds} words={open.words} />;
    return <>{key ? <Term k={key}>{icons}</Term> : icons}<CardText text={open.rest} /></>;
  }
  const parts = splitTerms(memberTimingWords(text).replace(/(^|\band )at round start\b/ig, (m, pre) => (pre ? `${pre}at Round Start` : 'Round Start')) /* Cory, Nov 5: "On Recruit and at Round Start" */.replace(/\bon recruit\b/ig, 'On Recruit'));
  // each piece knows what follows it, so a color before a keyword ("blue | face-up member") stays a word
  const after = k => parts.slice(k + 1).map(x => x.text).join('');
  return <>{parts.map((part, k) => (part.key
    ? <Term key={k} k={part.key}><Rich text={part.text} after={after(k)} /></Term>
    : <Rich key={k} text={part.text} after={after(k)} />))}</>;
}

/**
 * A rule whose value grows by round, as one line per round with this round lit (Cory, 2026-10-18: "I: … / II: … /
 * III: …", the rounds that aren't current dimmed). The lines come from the def's byRound ({ lead, lines, rest }); the
 * def's text stays the rule (log, rulebook, panels). Anything else reads as its text.
 */
const ROMAN = ['I', 'II', 'III'];
const PlainText = ({ text }) => { const open = splitOpener(memberTimingWords(text)); return open ? <><TimingIcons kinds={open.kinds} words={open.words} /><Rich text={open.rest} /></> : <Rich text={memberTimingWords(text)} />; };
// plain: resource marks only, no glossary underlines (the seat's member list; the member's own card underlines them)
// "+1 of each color" / "+2 of each color" / "+3 of each color" → ['+1', '+2', '+3'] and "of each color" (the last
// line's words, so a plural reads right); null when the lines differ past their first word
const OTHER = w => w.toLowerCase().replace(/s\b/g, '');
function sharedTail(lines) {
  const split = lines.map(l => { const k = l.indexOf(' '); return k < 0 ? [l, ''] : [l.slice(0, k), l.slice(k + 1)]; });
  return split.every(([, t]) => OTHER(t) === OTHER(split[2][1])) ? { heads: split.map(x => x[0]), tail: split[2][1] } : null;
}
/** compact: on a small card (the shop's details view), a rule whose rounds differ only in their number reads as one
 *  line, "I +1 · II +2 · III +3 of each color", this round lit (the wheel's "+2 · +3 · +4 by round" grammar) */
/**
 * A rule's separate effects, one per sentence (Cory, 2026-10-23: "actions that do different things should have the
 * text on different lines in hover over; the +1 resource should be its own line"): Lie Low's "Rivals can't steal from
 * you this round. +1 magenta." is two lines. A sentence ends at . ! ? before a space and anything but a lowercase word.
 */
export const effectLines = text => String(text || '').split(/(?<=[.!?])\s+(?=[^\sa-z])/u).filter(Boolean);
// lines: each effect on its own line (the hover cards); a space between keeps the text one sentence run when read whole
// a lone flat gain after the rule ("+1 blue.") read as a stray or a repeat of the line above it ("+1 blue per member sent."),
// and after "Each rival +1 red." as the rivals' too (picky bot, Nov 4): its own line still, said as yours, no period
const FLAT = /^\+(\d+) ([a-z]+)\.$/;
const flatWords = (t, k) => { const m = k > 0 && FLAT.exec(t); return m ? `You also get +${m[1]} ${m[2]}` : t; };
function Lines({ text, Text, className = 'fx-line' }) {
  const parts = effectLines(text);
  return <>{parts.map((t, k) => <Fragment key={k}>{k ? ' ' : null}<span className={className} data-effect-line=""><Text text={flatWords(t, k)} /></span></Fragment>)}</>;
}
// a member's ongoing benefit opens with a bold Passive (Cory, Oct 29: "For those that are a passive benefit, add Passive as
// a bold keyword"): any rule that doesn't open with a timing, a use or what the card counts as
// (a card's own arrival or leaving, "Whenever this member joins your cult", is a trigger, never Passive: Old Maid read as
// an ongoing effect, picky bot, Nov 4)
const OPENS = /^(?:whenever this member (?:joins|leaves)\b|on use\b|on recruit|(?:at )?round start|round end|game end|once per (?:game|round)|one time use|use\b|counts as|worth \d|no (?:ability|effect)|passive|free\b)/i;
// a member's "Worth N followers." never prints: the number at the card's top right says it (Cory, Oct 29)
const unworth = (def, text) => (def && def.f != null && text ? String(text).replace(/^\s*Worth \d+ followers?\.\s*/i, '') : text);
export const passiveText = (def, given) => { const text = unworth(def, given); return def && def.f != null && text && !OPENS.test(String(text).trim()) ? `Passive: ${String(text).trim()}` : text; };
export function RuleText({ def, text: given = def && def.text, round = 1, plain = false, compact = false, lines = false }) {
  const text = passiveText(def, given);
  const by = def && def.byRound;
  const Text = plain ? PlainText : CardText;
  if (!by || !by.lines || by.lines.length !== 3) return lines ? <span className="fx-lines"><Lines text={text} Text={Text} /></span> : <Text text={text} />;
  const now = Math.min(3, Math.max(1, round || 1));
  const shared = compact ? sharedTail(by.lines) : null;
  if (shared) {
    return (
      <span className="by-round compact" data-by-round={now}>
        {by.lead ? <><Text text={by.lead} />{' '}</> : null}
        {shared.heads.map((h, k) => (
          <span key={k} className={`br-line${k + 1 === now ? ' now' : ''}`} data-round-line={k + 1} aria-current={k + 1 === now ? 'true' : undefined}>
            {k ? <span className="br-sep" aria-hidden="true"> · </span> : null}<span className="br-r">{ROMAN[k]}</span>{' '}<span className="br-v"><Text text={h} /></span>
          </span>
        ))}
        {shared.tail ? <>{' '}<Text text={shared.tail} /></> : null}
        {by.rest ? <>{' '}<Text text={by.rest} /></> : null}
      </span>
    );
  }
  return (
    <span className="by-round" data-by-round={now}>
      {by.lead ? (lines ? <Lines text={by.lead} Text={Text} className="br-lead" /> : <span className="br-lead"><Text text={by.lead} /></span>) : null}
      {by.lines.map((l, k) => (
        <span key={k} className={`br-line${k + 1 === now ? ' now' : ''}`} data-round-line={k + 1} aria-current={k + 1 === now ? 'true' : undefined}>
          <span className="br-r">{ROMAN[k]}:</span><span className="br-v"><Text text={l} /></span>
        </span>
      ))}
      {by.rest ? (lines ? <Lines text={by.rest} Text={Text} className="br-rest" /> : <span className="br-rest"><Text text={by.rest} /></span>) : null}
    </span>
  );
}

// ---------- members ----------
/** Is a member's quadrant on this table? A member of an absent quadrant is colorless (neutral frame). */
export const onTable = (state, def) => state.quadrants.includes(def.quadrant);
/** The frame color of a member on this table: its quadrant's, or the neutral "colorless" one. */
export const cardColor = (state, def) => (onTable(state, def) ? `var(--${def.quadrant})` : 'var(--colorless)');
/** The pale colors' own card ground (shop.css [data-ground]): silver, white and colorless all tinted a near-cream picture
 *  field and looked alike at card size, so each gets a ground of its own: steel with a sheen, clean white, plain grey. */
// (yellow: no ground of its own, but pale, so its name is set dark on the bar: picky bot, Nov 4)
export const cardGround = (state, def) => (!onTable(state, def) ? 'colorless' : def.quadrant === 'silver' ? 'silver' : def.quadrant === 'trading' ? 'white' : def.quadrant === 'yellow' ? 'yellow' : undefined);

/** A cost as the plate prints it: "2● 2◐" (the number before its dot, colored part first, then any; no color names). */
export function CostDots({ parts }) {
  if (!parts || !parts.length) return <span className="cost-dots free">free</span>;
  return <span className="cost-dots" aria-label={parts.map(c => `${c.n} ${c.color}`).join(' + ')}>{parts.map((c, k) => <span key={k} className="cd"><b className="n">{c.n}</b><Pip color={c.color} n={c.n} /></span>)}</span>;
}

/**
 * The full card (plate 1b): the picture, name and worth, "costs 2● 2◐", the sentence big with its marks inline, then
 * one quiet line tying it to the table (whose it is, or where it waits). Nothing about paying (Cory cut "you're short", Oct 15).
 */
/**
 * What a member costs p while a discount applies (Intro Offer's "next member costs 4 less", Sponsor's 2 off…), as cost
 * parts ([] = free), or null at its list price. The engine's own price rule (memberPrice); the shop face shows it.
 */
// how: a space's own price rule while it asks which member (Half Price: half, in any colors), so the faces show it
// (w4 A#42: with Half Price up, the shop still showed list prices)
export function recruitHow(state, pid) {
  const pend = state.pending;
  if (!pend || pend.kind !== 'choose' || pend.player !== pid) return null;
  const m = String(pend.prompt || '').match(/^(Half Price|Snap Up): recruit which member\?$/);
  return m ? (m[1] === 'Half Price' ? { anyColors: true, half: true } : { anyColors: true }) : null;
}
export function paidParts(state, p, uid, d = cardDef(state, uid)) {
  if (!p || state.over) return null;
  let pr;
  try { pr = memberPrice(state, p, uid, recruitHow(state, p.id) || {}); } catch { return null; }
  if (pr.total >= d.s + d.w) return null;
  const any = pr.total - pr.colored;
  return [...(pr.color && pr.colored ? [{ color: pr.color, n: pr.colored }] : []), ...(any > 0 ? [{ color: 'any', n: any }] : [])];
}
/** Why p pays less: "your next member costs 4 less", "Sponsor takes 2 off". */
const upFirst = t => (t ? t[0].toUpperCase() + t.slice(1) : t);
export const discountWhy = (state, p) => [
  ...discountSources(p).map(x => `${x.name}: next member −${x.n}`),
  ...p.members.map(u => { try { return cardDef(state, u); } catch { return null; } }).filter(x => x && x.costReduction).map(x => `${x.name} takes ${x.costReduction} off`),
].join(', ');

// onFace: the card's face is right beside the hover (a shop card), so its cost and worth aren't said twice (w3a #24)
export function MemberCard({ state, uid, def: d0 = null, me = null, onFace = false }) {
  const d = d0 || cardDef(state, uid);
  const owner = uid != null ? state.players.find(p => p.members.includes(uid)) : null;
  const card = uid != null ? state.cards[uid] : null;
  const where = uid == null ? null : owner ? null : state.shop.includes(uid) ? 'In the shop' : 'In the pile';
  // "Free. No effect." is no ability too (its cost line already says free)
  // a Doppelganger that has copied reads as the copy alone (Cory: its own recruit text is spent); "Copy of" says so below
  // an Impersonator's borrowed ability likewise reads as the ability alone, "Has X's ability" below (Cory, Nov 5)
  const copied = card && (card.copy || card.ability) ? (() => { try { return defById(card.copy || card.ability); } catch { return null; } })() : null;
  const ability = String((copied || d).text || '').replace(/^Worth \d+ followers?\.\s*/i, '').replace(/^(Free\.\s*)?No effect\.?$/i, '').trim();
  const worth = d.f != null ? d.f : 1;
  const weight = uid != null ? memberWeight(state, uid) : Math.max(d.n || 1, d.f || 1);
  const sphere = onTable(state, d) ? (() => { try { return quadrant(d.quadrant).resource; } catch { return 'colorless'; } })() : 'colorless';
  // a discount on you (the shop face shows the price, the list price struck beside it): its reason
  const paid = where === 'In the shop' && me != null && state.players[me] ? paidParts(state, state.players[me], uid, d) : null;
  return (
    <div className="card-face mc" style={{ '--c': cardColor(state, d) }} data-card={d.id} data-pale={cardGround(state, d) && cardGround(state, d) !== 'yellow' ? '' : undefined} data-ground={cardGround(state, d)} data-long={ability.length > 110 ? '' : undefined}>
      {/* a trading card (Cory, Oct 29: "Header is good"): the name on a bar in the color, the price in a dark disc at
          its left and the worth at its right, the picture under it; the price's colors sit at the foot */}
      <div className="mc-head mc-hd">
        {!onFace && <span className="mc-price num" aria-hidden="true">{(paid || costParts(d, state.resources)).reduce((t, c) => t + c.n, 0)}</span>}
        <b className="mc-name">{d.name}</b>
        {!onFace && <span className="mc-worth" title={`Counts as ${weight} member${weight === 1 ? '' : 's'}`}><b className="n">{weight}</b><MemberGlyph r={d.everyColor ? null : sphere} size={16} decorative /></span>}
      </div>
      {!onFace && <span className="mc-art" aria-hidden="true"><Sprite id={[d.id, spriteId(d.name)]} kind="member" sphere={sphere} size={72} /></span>}
      {/* the worth is already up top: the sentence is what it does, and a card that only counts has none */}
      {/* a member with no ability says so, never an empty card (w2a #36: Twins and Intern showed only a header) */}
      {/* a member you use (once a game, once a round) says so first (w3a #5: "you can't find out which members you use");
          in the shop, also how: on your turn, from your seat */}
      {/* Emoji members show only the written rule, no symbol line (Cory, Nov 4: "i do not like the emoji symbols/text on the member cards") */}
      {ability ? <p className="mc-text">{(copied || d).from > 1 && <span className="mc-round-tag" data-round-tag="" title="Works from round II on">II+</span>}{(copied || d).activate && !/\bOn Use\b/.test(ability) && <span className="mc-use-tag" data-use-tag="">Use</span>}<RuleText def={copied || d} text={ability} round={state.round} lines /></p> : <p className="mc-text mc-none" data-no-ability="">No ability.</p>}
      {d.activate && where && !state.over && !(card && card.used) && <small className="mc-live" data-use-how="">Once it’s yours, use it on your turn: it lights up in your seat.</small>}
      {!(card && card.used) && poolNote(state, (copied || d).text) && <small className="mc-live" data-pool-out="">{poolNote(state, (copied || d).text)}</small>}
      {/* Drifters' chosen color, said on its card (Cory's playtest, Nov 1: "no indication or reminder of which color i picked") */}
      {card && card.asColor && state.quadrants.includes(card.asColor) && <small className="mc-live" data-counts-as={card.asColor}>Counts as a <MemberGlyph r={quadrant(card.asColor).resource} size={13} decorative /> <b>{quadrant(card.asColor).name}</b> member</small>}
      {copied && card.copy && <small className="mc-live" data-copy-of="">Copy of <CardName state={state} def={copied} /></small>}
      {copied && !card.copy && <small className="mc-live" data-ability-of="">Has the ability of <CardName state={state} def={copied} /></small>}
      {card && card.used && !state.over && <small className="mc-live" data-member-used="">{owner ? 'Used' : 'Already used: it can’t be used again this game'}</small>}
      {/* the cost and nothing else about paying (Cory, 03:40: cut "You pay"); a discount on you says only why the face's
          price is struck ("Your next member costs 4 less.") */}
      {/* the shop's header says a discount once; a face beside its hover shows the price (w4 A#23: the sentence on all 10) */}
      {paid && !onFace && discountWhy(state, state.players[me]) && <small className="mc-live" data-discount>{upFirst(discountWhy(state, state.players[me]))}.</small>}
      {where === 'In the pile' && <small className="mc-live">{where}</small>}
      {/* the cost's dots say its colors; a member of no color here says so on its own line (w3a #23: "costs 4◐ · colorless") */}
      {onFace ? (weight > worth ? <small className="mc-cost"><Rich text={`Counts as ${weight} members`} /></small> : null)
        : <small className="mc-cost"><span className="mc-sr">costs </span><CostDots parts={costParts(d, state.resources)} />{weight > worth ? <span className="mc-n"><span className="mc-sr"> · </span>counts as {weight}</span> : ''}</small>}
    </div>
  );
}
/** A member's name anywhere (log, pickers, bonuses, rival chips): hover or tap opens the full card. */
export function CardName({ state, uid = null, def = null, children, className = '' }) {
  const d = def || (uid != null && state.cards[uid] ? cardDef(state, uid) : null);
  if (!d) return <>{children}</>;
  return (
    <Tip className={`card-name${className ? ` ${className}` : ''}`} data-card-name={d.id} label={`${d.name}: show the card`}
      style={{ '--c': cardColor(state, d) }} content={() => <MemberCard state={state} uid={uid} def={uid == null ? d : null} />}>
      {children || d.name}
    </Tip>
  );
}

// ---------- you are "You" ----------
// The engine writes every line in the third person ("P1 took Rush (Gold).", "P1's Banker: +1 gold."). For the person
// reading, their own name becomes "You" / "Your" (sentence start) or "you" / "your", and the verb right after agrees
// ("You have", "you get"). Other players' names are untouched.
const AGREE = { has: 'have', is: 'are', was: 'were', gets: 'get', pays: 'pay', uses: 'use', takes: 'take', starts: 'start', spends: 'spend', recruits: 'recruit', lies: 'lie', holds: 'hold', goes: 'go', gains: 'gain', flourishes: 'flourish', loses: 'lose', picks: 'pick', leads: 'lead', wins: 'win', ties: 'tie', scores: 'score', keeps: 'keep', buys: 'buy', copies: 'copy', places: 'place', passes: 'pass', needs: 'need', owns: 'own', gives: 'give', moves: 'move', steals: 'steal', trades: 'trade', releases: 'release', swaps: 'swap', joins: 'join' };
const escRe = t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
export function asYou(text, name) {
  if (!text || !name) return text;
  const n = escRe(name);
  const start = (str, i) => i === 0 || /[.!?:—–]\s*$/.test(str.slice(Math.max(0, i - 3), i));
  let out = String(text).replace(new RegExp(`(?<![\\p{L}\\p{N}])${n}(?:'s|’s)(?![\\p{L}\\p{N}])`, 'gu'), (m, i, str) => (start(str, i) ? 'Your' : 'your'));
  out = out.replace(new RegExp(`(?<![\\p{L}\\p{N}])${n}(?![\\p{L}\\p{N}])( (\\w+))?`, 'gu'), (m, tail, verb, i, str) => {
    const you = start(str, i) ? 'You' : 'you';
    if (!tail) return you;
    return ` ${verb}` === tail && AGREE[verb] ? `${you} ${AGREE[verb]}` : `${you}${tail}`;
  });
  return out;
}

/**
 * Text that names members (a log line, a bonus line): each name of a member in this game opens that card.
 * Longest names first, so "Mentor & Protégés" isn't read as two cards.
 */
export function NamedText({ state, text }) {
  const names = memberNames(state);
  if (!names.re) return <>{text}</>;
  const out = [];
  let last = 0;
  for (const m of text.matchAll(names.re)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const d = names.byName.get(m[0]);
    out.push(<CardName key={m.index} state={state} def={d}>{m[0]}</CardName>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
// keyed by the game's deck (seed + table + card count): a game's member names never change, so one index per game
const namesCache = new Map();
function memberNames(state) {
  const cards = state.cards;
  const key = `${state.seed}|${state.quadrants.join(',')}|${Object.keys(cards).length}`;
  if (namesCache.has(key)) return namesCache.get(key);
  if (namesCache.size > 8) namesCache.clear();
  const byName = new Map();
  for (const c of Object.values(cards)) { const d = cardDef(state, c.uid); if (!byName.has(d.name)) byName.set(d.name, d); }
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const list = [...byName.keys()].sort((a, b) => b.length - a.length);
  const out = { byName, re: list.length ? new RegExp(`(?<![\\w’'])(?:${list.map(esc).join('|')})(?![\\w])`, 'g') : null };
  namesCache.set(key, out);
  return out;
}

// ---------- contests ----------
/**
 * One quadrant's contest, from the engine (st: a standing from format.standings / scoredStandings).
 * Says what it counts, its tiebreak, the prize, and every player's count, leaders marked.
 */
export function ContestStandings({ state, st, meId = null, scored = false, brief = false }) {
  const nm = id => (id === meId ? 'You' : state.players[id].name);
  // brief (under the rim card's own prize line): no second heading, and "Counts …" only when it adds something the
  // prize line doesn't already say ("full sets: …", "a card that counts as 2 members counts 2")
  const plainCount = !st.counts || /^the \w+ you hold when the round ends$/.test(st.counts);
  const ties = st.tiebreak ? `${cap1(st.tiebreak.text)}.` : 'Tied leaders all score.';
  return (
    <div className="pop-card contest-card" style={{ '--c': `var(--${st.qid})` }} data-contest={st.qid}>
      {!brief && <div className="row"><b>{st.rule}</b><span className="num">+{st.prize}{scored ? '' : ' at round end'}</span></div>}
      {/* brief: the rim card's prize line says the tie rule; a tiebreak still says itself (picky bot, Nov 4) */}
      {brief && plainCount && !st.tiebreak ? null : <small>{brief && plainCount ? ties : `Counts ${st.counts || st.rule.toLowerCase()}. ${ties}`}</small>}
      <ol className="contest-rows">
        {st.rows.map(r => {
          const tb = tiebreakNote(st, r);
          const lead = st.leaders.includes(r.id);
          return (
            <li key={r.id} className={lead ? 'leads' : ''} style={{ '--pc': playerColor(r.id) }} data-pid={r.id} data-count={r.shown} data-lead={lead ? '1' : '0'}>
              <Who state={state} id={r.id} name={nm(r.id)} size={16} /><b className="num">{r.shown}</b>
              {tb && <small> ({tb})</small>}
              {lead && <em>{scored ? `+${st.prize}` : st.leaders.length > 1 ? 'tied lead' : 'leads'}</em>}
            </li>
          );
        })}
      </ol>
      {!st.leaders.length && <small>{scored ? 'No one scored: nobody had any.' : 'No one would score yet: nobody has any.'}</small>}
    </div>
  );
}
const cap1 = s => (s ? s[0].toUpperCase() + s.slice(1) : s);

/** A quadrant's scoring rule that opens its live standings (the board's rule banner, the panel's score line). */
export function ContestTip({ state, qid, meId = null, children, className = '' }) {
  return (
    <Tip className={`contest-tip${className ? ` ${className}` : ''}`} data-contest-tip={qid} label={`${standings(state).find(x => x.qid === qid)?.label || quadrant(qid).scoring.label}: who leads now`}
      content={() => {
        const st = standings(state).find(x => x.qid === qid);
        return st ? <ContestStandings state={state} st={st} meId={meId} /> : null;
      }}>{children}</Tip>
  );
}
export { toStanding };

// ---------- touch: long-press shows a title ----------
/** Mount once: on a touch screen, pressing and holding anything with a title shows it (and swallows the tap). */
export function TouchTips() {
  const [bubble, setBubble] = useState(null); // { text, x, y }
  useEffect(() => {
    let timer = null, start = null, fired = false;
    const down = e => {
      if (e.pointerType !== 'touch') return;
      // a title, or data-hint: the long-press words of something that has its own hover card on a desktop (a native
      // tooltip there would sit on top of that card, saying it twice)
      const el = e.target.closest && e.target.closest('[title], [data-hint]');
      const say = el && (el.getAttribute('title') || el.getAttribute('data-hint'));
      if (!say) return;
      start = { x: e.clientX, y: e.clientY };
      fired = false;
      clearTimeout(timer);
      timer = setTimeout(() => { fired = true; setBubble({ text: say, x: start.x, y: start.y, n: Date.now() }); }, 450);
    };
    const move = e => { if (start && Math.hypot(e.clientX - start.x, e.clientY - start.y) > 10) { clearTimeout(timer); start = null; } };
    const up = () => { clearTimeout(timer); start = null; };
    const click = e => { if (fired) { fired = false; e.stopPropagation(); e.preventDefault(); } };
    const away = e => { if (e.pointerType === 'touch' && !fired) setBubble(null); };
    addEventListener('pointerdown', down, true);
    addEventListener('pointerdown', away, true);
    addEventListener('pointermove', move, true);
    addEventListener('pointerup', up, true);
    addEventListener('pointercancel', up, true);
    addEventListener('click', click, true);
    addEventListener('contextmenu', e => { if (fired) e.preventDefault(); }, true);
    return () => {
      clearTimeout(timer);
      removeEventListener('pointerdown', down, true); removeEventListener('pointerdown', away, true);
      removeEventListener('pointermove', move, true); removeEventListener('pointerup', up, true);
      removeEventListener('pointercancel', up, true); removeEventListener('click', click, true);
    };
  }, []);
  useEffect(() => { if (!bubble) return undefined; const t = setTimeout(() => setBubble(null), 4000); return () => clearTimeout(t); }, [bubble]);
  if (!bubble) return null;
  const left = Math.max(12, Math.min((typeof innerWidth === 'number' ? innerWidth : 400) - 252, bubble.x - 120));
  return <div key={bubble.n} className="touch-tip" role="tooltip" data-touch-tip style={{ left, top: Math.max(8, bubble.y - 64) }}>{bubble.text}</div>;
}

// ---------- "You'd get": a space's outcome for you, from the engine's dry run (previewSpace) ----------
// Dry runs are cached per state object. In a browser they run in a worker (previewWorker.js) so the page never
// waits; elsewhere (tests) they run here, a moment after they're asked for. A preview carries `race`: every
// contest after the space's first branch (what the space card shows as the race).
const previews = new WeakMap();
const listeners = new Set();
const mapFor = state => { let m = previews.get(state); if (!m) { m = new Map(); previews.set(state, m); } return m; };
const stripped = state => ({ ...state, log: [] });
function computeHere(state, pid, q, i, opts) {
  const pv = previewSpace(stripped(state), pid, q, i, opts);
  return withRace(pv);
}
// A hover drawn on the page works a space out in the render only as far as a small budget (a few ms on a slow laptop):
// a space that needs more (a copy space late in the game: Greatest Hits explored 600+ states, a 3.1 s frozen page at 4x;
// freeze probe, 2026-10-28) shows what that found and the worker's full answer replaces it when it comes.
const RENDER_CAP = 8;
const provisional = new WeakMap(); // state → Map(key → a capped preview, shown until the worker's answer)
/** The preview for a space, computed now on this thread if it isn't cached (tests, tools). `render`: inside a render,
 *  within the small budget. */
export function cachedPreview(state, pid, q, i, { render = false } = {}) {
  const m = mapFor(state), k = `${pid}|${q}-${i}`;
  if (m.has(k)) return m.get(k);
  if (render && worker) {
    let pm = provisional.get(state);
    if (!pm) { pm = new Map(); provisional.set(state, pm); }
    if (pm.has(k)) return pm.get(k);
    let pv = null;
    try { pv = computeHere(state, pid, q, i, { cap: RENDER_CAP }); } catch { pv = null; }
    if (!(pv && pv.capped)) { m.set(k, pv); return pv; }
    pm.set(k, pv);
    requestPreviews(state, pid, [`${q}-${i}`], { front: true });
    return pv;
  }
  let pv = null;
  try { pv = computeHere(state, pid, q, i); } catch { pv = null; }
  m.set(k, pv); // (no notify: this runs while a card renders; whoever else reads it re-reads the cache)
  return pv;
}
let worker = null, workerGen = 0, workerState = null, lastAnswer = 0;
const pending = new Map(); // gen → state
const inflight = new Set(); // requests posted to the worker: { state, pid, keys, t }
const WATCHDOG_MS = 4000;
const notify = (state, pid, key) => { for (const fn of listeners) fn(state, pid, key); };
// One fallback queue for the current state. A failed worker must not leave old turns' dry runs
// competing with animation and input; the normal worker still owns its existing generation protocol.
let fallbackState = null, fallbackQueue = [], fallbackTimer = null, fallbackIdle = false;
const fallbackJobs = new Map();
const cancelledFallback = new WeakSet();
const cancelFallbackTimer = () => {
  if (fallbackTimer == null) return;
  if (fallbackIdle) cancelIdleCallback(fallbackTimer); else clearTimeout(fallbackTimer);
  fallbackTimer = null;
};
const clearFallback = () => { cancelFallbackTimer(); fallbackQueue = []; fallbackJobs.clear(); };
/** Stop background work for a table that has changed or unmounted, including a later worker-failure handoff. */
export function cancelPreviewFallback(state) {
  cancelledFallback.add(state);
  if (fallbackState === state) clearFallback();
}
const scheduleFallback = () => {
  if (fallbackTimer != null || !fallbackQueue.length) return;
  const step = () => {
    fallbackTimer = null;
    const job = fallbackQueue.shift();
    if (!job) return;
    fallbackJobs.delete(job.id);
    const { state, pid, key } = job;
    if (state === fallbackState && !cancelledFallback.has(state)) {
      const m = mapFor(state), id = `${pid}|${key}`;
      if (!m.has(id)) {
        const [q, i] = key.split('-').map(Number);
        try { m.set(id, computeHere(state, pid, q, i)); } catch { m.set(id, null); }
        notify(state, pid, key);
      }
    }
    scheduleFallback();
  };
  fallbackIdle = !fallbackQueue[0].front && typeof requestIdleCallback === 'function';
  fallbackTimer = fallbackIdle ? requestIdleCallback(step, { timeout: 100 }) : setTimeout(step, 0);
};
/** Coalesce warmups and hovered requests; the hovered space jumps ahead of background keys. */
function onMainThread(state, pid, keys, { front = false } = {}) {
  if (state !== fallbackState || cancelledFallback.has(state)) return;
  const urgent = [];
  for (const key of new Set(keys)) {
    const id = `${pid}|${key}`;
    if (mapFor(state).has(id)) continue;
    let job = fallbackJobs.get(id);
    if (job) {
      if (!front) continue;
      fallbackQueue = fallbackQueue.filter(x => x !== job);
      job.front = true;
    } else { job = { id, state, pid, key, front }; fallbackJobs.set(id, job); }
    if (front) urgent.push(job); else fallbackQueue.push(job);
  }
  if (urgent.length) { fallbackQueue.unshift(...urgent); cancelFallbackTimer(); }
  scheduleFallback();
}
const missing = r => r.keys.filter(k => !mapFor(r.state).has(`${r.pid}|${k}`));
/** The worker is gone (its file 404s after a deploy, it crashed, it went silent): nothing waits on it any more. */
function workerFailed() {
  if (worker) { try { worker.terminate(); } catch { /* gone */ } }
  worker = false;
  const left = [...inflight];
  inflight.clear();
  for (const r of left) { const keys = missing(r); if (keys.length) onMainThread(r.state, r.pid, keys, { front: r.front }); }
}
// A request the worker never answers (not one result since it was posted) means the worker is dead: fall back.
// A slow but working worker is left alone (no duplicate work on the main thread).
function watch(r) {
  setTimeout(() => {
    if (!inflight.has(r)) return;
    if (!missing(r).length) { inflight.delete(r); return; }
    if (lastAnswer < r.t) workerFailed();
    else { r.t = Date.now(); watch(r); }
  }, WATCHDOG_MS);
}
function getWorker() {
  if (worker !== null) return worker || null;
  try {
    if (typeof Worker === 'undefined' || typeof window === 'undefined' || /jsdom/i.test(navigator.userAgent || '')) { worker = false; return null; }
    worker = new Worker(new URL('./previewWorker.js', import.meta.url), { type: 'module' });
    worker.onmessage = e => {
      lastAnswer = Date.now();
      // (a long dry run says it's working on it: a busy worker isn't a dead one)
      if (e.data && e.data.alive) return;
      const { gen, pid, key, pv } = e.data;
      const st = pending.get(gen);
      if (!st) return;
      mapFor(st).set(`${pid}|${key}`, pv);
      notify(st, pid, key);
    };
    worker.onerror = workerFailed;
    worker.onmessageerror = workerFailed;
  } catch { worker = false; }
  return worker || null;
}
/** Ask for previews of these spaces ("q-i" keys) for pid on this state; results arrive in the cache. `front`: a space
 *  under the pointer, worked out ahead of the warmup batch. */
export function requestPreviews(state, pid, keys, { front = false } = {}) {
  if (fallbackState !== state) { clearFallback(); fallbackState = state; }
  cancelledFallback.delete(state);
  const m = mapFor(state);
  const todo = keys.filter(k => !m.has(`${pid}|${k}`));
  if (!todo.length) return;
  const w = getWorker();
  if (w) {
    if (workerState !== state) { workerState = state; workerGen++; pending.clear(); pending.set(workerGen, state); inflight.clear(); }
    try {
      w.postMessage({ gen: workerGen, state: stripped(state), pid, keys: todo, front });
      const r = { state, pid, keys: todo, front, t: Date.now() };
      inflight.add(r);
      watch(r);
      return;
    } catch { workerFailed(); }
  }
  onMainThread(state, pid, todo, { front });
}
/** For tests: forget the worker (null: try again; false: there is none). */
export const _setPreviewWorker = w => { clearFallback(); fallbackState = null; worker = w; lastAnswer = 0; inflight.clear(); if (w) { w.onerror = workerFailed; w.onmessageerror = workerFailed; } };
/** A preview already computed for this state, or undefined (never computes: a hover must not wait). */
export function peekPreview(state, pid, q, i) {
  const m = previews.get(state);
  return m ? m.get(`${pid}|${q}-${i}`) : undefined;
}
/**
 * The preview for a space: the cached one at once, else asked for and filled in when it arrives. `now`: a card that's
 * opening (a hover) never fills in later: on a miss the one space is worked out here, before the card paints, so it
 * lands complete in one frame at its final size ("hovers feel laggy", Cory 2026-10-15: the card opened, then its
 * "You'd get" arrived and it grew). One dry run is cheap (p50 0.3ms, p99 11ms at 1× CPU); the warmup keeps most hovers
 * on the cache anyway.
 */
export function usePreview(state, pid, q, i, { now = false } = {}) {
  const [, bump] = useState(0);
  useEffect(() => {
    if (pid == null) return undefined;
    const key = `${q}-${i}`;
    const fn = (st, p, k) => { if (st === state && p === pid && k === key) bump(n => n + 1); };
    listeners.add(fn);
    if (peekPreview(state, pid, q, i) === undefined) requestPreviews(state, pid, [key], { front: true });
    return () => { listeners.delete(fn); };
  }, [state, pid, q, i]);
  if (pid == null) return null;
  const pv = peekPreview(state, pid, q, i);
  return pv === undefined && now ? cachedPreview(state, pid, q, i, { render: true }) : pv;
}
const signed = n => (n > 0 ? `+${n}` : n < 0 ? `−${-n}` : '0');
const span = (r, unit, plural = unit + 's') => {
  if (r[0] === 0 && r[1] === 0) return null;
  const u = Math.max(Math.abs(r[0]), Math.abs(r[1])) === 1 ? unit : plural;
  return r[0] === r[1] ? `${signed(r[0])} ${u}` : `${signed(r[0])} to ${signed(r[1])} ${u}`;
};
// Right Away moves your next turn up; Sleep In and Last Call send minions after everyone else's. All three said "a turn
// after this one", which read as extra turns (picky bot, Nov 4): the card's own words instead.
// a member cast out or taken goes with its followers: said on the member ("−1 member and its 2 followers"), the followers
// line keeps the rest (Farewell "+7 followers", not a net +5 beside Estate Sale's "−1 follower": picky bot, Nov 4)
const lostTail = n => (n > 0 ? ` and its ${n === 1 ? 'follower' : `${n} followers`}` : '');
function lostSpans(y) {
  const lost = y.lost && y.lost[0] === y.lost[1] && y.lost[0] > 0 && y.members[0] === y.members[1] && y.members[0] === -1 ? y.lost[0] : 0;
  if (!lost) return [span(y.followers, 'follower'), span(y.members, 'member')];
  return [span([y.followers[0] + lost, y.followers[1] + lost], 'follower'), `${span(y.members, 'member')}${lostTail(lost)}`];
}
const earlyWords = n => (n === 1 ? 'your next turn right after this one' : `your next ${n} turns right after this one`);
const lateWords = n => (n === 1 ? 'your next minion goes last' : `your other ${n} minions go last`);
/** The preview as words: { you: "+3 gold, +1 member", others: "rivals +1 gold" | null, choose: bool, partial }. */
export function previewWords(pv, state) {
  const you = [
    ...state.resources.map(r => span(pv.you.res[r], r, r)),
    ...lostSpans(pv.you), span(pv.you.turns, 'minion'),
    // your own turns moved up (Right Away): sooner, not extra
    pv.you.early && pv.you.early[1] > 0 ? (pv.you.early[0] === pv.you.early[1] ? earlyWords(pv.you.early[1]) : `up to ${earlyWords(pv.you.early[1])}`) : null,
    // your minions sent to the end (the Goes Last token: Sleep In, Last Call)
    pv.you.late && pv.you.late[1] > 0 ? (pv.you.late[0] === pv.you.late[1] ? lateWords(pv.you.late[1]) : `up to ${lateWords(pv.you.late[1])}`) : null,
    // a discount gained ("next member −4"); one used up isn't a gain, and printed "next member −-6" (w3 words pass)
    pv.you.discount && pv.you.discount[1] > 0 ? `next member −${Math.max(0, pv.you.discount[0]) === pv.you.discount[1] ? pv.you.discount[1] : `${Math.max(0, pv.you.discount[0])}–${pv.you.discount[1]}`}` : null,
  ].filter(Boolean);
  // the rivals' line is their summed change: "in all" says so ("rivals +3 silver" read as +3 each, when it was +1 each);
  // only its sure parts: a part that varies (a steal's "−1 to 0, −2 to 0…" per color) read as algebra, whether your
  // pick decides it or the space does (w3b: Lie Low and Heist still printed four ranges); the rule says the rest
  const theirs = (r, unit, plural) => (r[0] !== r[1] ? null : span(r, unit, plural));
  const others = [...state.resources.map(r => theirs(pv.others.res[r], r, r)), theirs(pv.others.followers, 'follower', 'followers'), theirs(pv.others.members, 'member', 'members')].filter(Boolean);
  const many = state.players.length > 2;
  return { you: you.join(', ') || 'nothing right now', others: others.length ? `rivals ${others.join(', ')}${many ? ' in all' : ''}` : null, choose: pv.asks.length > 0, theyChoose: pv.theirAsks.length > 0, partial: pv.partial };
}
/** Only what you'd surely get (the parts no pick changes), or '' when every part hangs on the pick. */
function sureWords(pv, state) {
  const fixed = (r, unit, plural = unit + 's') => (r[0] === r[1] ? span(r, unit, plural) : null);
  const [fl, mb] = lostSpans(pv.you);
  return [...state.resources.map(r => fixed(pv.you.res[r], r, r)), pv.you.followers[0] === pv.you.followers[1] ? fl : null, pv.you.members[0] === pv.you.members[1] ? mb : null, fixed(pv.you.turns, 'minion'),
    pv.you.early && pv.you.early[0] > 0 && pv.you.early[0] === pv.you.early[1] ? earlyWords(pv.you.early[0]) : null,
    pv.you.late && pv.you.late[0] > 0 && pv.you.late[0] === pv.you.late[1] ? lateWords(pv.you.late[0]) : null,
    pv.you.discount && pv.you.discount[0] > 0 && pv.you.discount[0] === pv.you.discount[1] ? `next member −${pv.you.discount[0]}` : null]
    .filter(Boolean).join(', ');
}
/**
 * One branch's change for you in words, gains first: "+6 white, −2 followers"; what leaves you in several colors is one
 * "−5 resources" (Echo copying a recruit: "+1 member, +3 followers, −2 resources").
 */
export function changeWords(d, state) {
  if (!d) return '';
  const n = (v, unit) => `${signed(v)} ${unit}${Math.abs(v) === 1 ? '' : 's'}`;
  const gain = [], loss = [];
  for (const r of state.resources) if (d.res[r] > 0) gain.push(`+${d.res[r]} ${r}`);
  // the member by name when the branch brings one or two (w4 skeptic #31: "+1 member … your best pick" named none)
  const names = d.joined && d.joined.length && d.joined.length <= 2 && d.members > 0 ? (() => { try { return d.joined.map(u => cardDef(state, u).name); } catch { return null; } })() : null;
  const who = names ? ` (${names.join(', ')})` : '';
  const went = d.members === -1 && d.lost > 0 ? d.lost : 0;
  // cards that count as more than one member: the cards by name, then the count ("+5 members (Stunt Double,
  // Deprogrammers)" read as five cards: picky bot, Nov 4)
  if (d.members > 0 && names && names.length !== d.members) gain.push(`${names.join(' and ')} (${n(d.members, 'member')})`);
  else if (d.members > 0) gain.push(n(d.members, 'member') + who);
  if (d.followers + went > 0) gain.push(n(d.followers + went, 'follower'));
  if (d.turns > 0) gain.push(n(d.turns, 'minion'));
  if (d.early > 0) gain.push(earlyWords(d.early));
  if (d.late > 0) gain.push(lateWords(d.late));
  if (d.discount > 0) gain.push(`next member −${d.discount}`);
  // a member traded for another (Swap Sides, Even Swap): the count stays, so say it, never "nothing"
  if (d.swapped > 0) gain.push(`${d.swapped} member${d.swapped === 1 ? '' : 's'} swapped`);
  const lost = state.resources.filter(r => d.res[r] < 0);
  if (lost.length === 1) loss.push(`−${-d.res[lost[0]]} ${lost[0]}`);
  else if (lost.length > 1) loss.push(`−${lost.reduce((t, r) => t - d.res[r], 0)} resources`);
  if (d.members < 0) loss.push(n(d.members, 'member') + lostTail(went));
  if (d.followers + went < 0) loss.push(n(d.followers + went, 'follower'));
  return [...gain, ...loss].join(', ') || 'nothing';
}
/** Every pick worth the same, only the mix differs: say which mix in numbers (Goody Bags, Your Call, Sweet Talk). */
function mixWords(pv, state, own) {
  const mix = pv.mix || [];
  if (mix.length < 2) return null;
  // the same gain, only which member differs (Open Door's tied cheapest): one "+1 member" naming every one you could
  // get, never "+1 member (A) or +1 member (B)" naming two of four (blind tester B)
  const sameBut = (a, b) => state.resources.every(r => a.res[r] === b.res[r]) && ['followers', 'members', 'turns', 'discount', 'swapped'].every(f => a[f] === b[f]);
  if (mix[0].members > 0 && mix.every(d => sameBut(d, mix[0]) && d.joined && d.joined.length === 1)) {
    let names = [];
    try { names = [...new Set(mix.map(d => cardDef(state, d.joined[0]).name))]; } catch { names = []; }
    if (names.length > 1) {
      const list = `${names.slice(0, -1).join(', ')} or ${names[names.length - 1]}`;
      return { text: changeWords({ ...mix[0], joined: [] }, state).replace(/^\+1 member\b/, `+1 member (${list})`), note: 'your pick' };
    }
  }
  const sure = sureWords(pv, state);
  const loose = state.resources.filter(r => pv.you.res[r][0] !== pv.you.res[r][1]);
  const same = (f, a, b) => a[f] === b[f];
  // Original-color theft varies by what you take, not by a swap. Keep the inherent gain and followers
  // separate, including when Magenta itself is one of the stealable colors.
  const theft = state.resources.some(r => pv.others?.res?.[r]?.[0] < 0)
    && state.resources.every(r => pv.you.res[r][0] >= 0);
  const resTotal = d => state.resources.reduce((n, r) => n + d.res[r], 0);
  // totals that differ by pick (Help Yourself from one rival since Nov 5: each rival has their own most) say "up to" the best
  const eqTotal = mix.every(d => resTotal(d) === resTotal(mix[0]));
  if (theft && mix.every(d => same('followers', d, mix[0]) && same('members', d, mix[0]))) {
    // a rival's choice (Potluck: each rival gives you 1 of their choice): never "steal, you pick" (picky bot, Nov 4)
    const theirs = !(pv.asks && pv.asks.length) && pv.theirAsks && pv.theirAsks.length;
    // what came into the table (the space's own gain, a member's), per color; the rest is the steal, said whole
    const made = pv.made && !theirs && state.resources.every(r => pv.made[r] && pv.made[r][0] === pv.made[r][1] && pv.made[r][0] >= 0) ? pv.made : null;
    const fixed = made ? state.resources.reduce((n, r) => n + made[r][0], 0) : state.resources.reduce((n, r) => n + pv.you.res[r][0], 0);
    const n = Math.max(...mix.map(resTotal)) - fixed;
    const minimums = made ? state.resources.filter(r => made[r][0] > 0).map(r => `+${made[r][0]} ${r}`)
      : state.resources.filter(r => pv.you.res[r][0] > 0 && pv.you.res[r][0] !== pv.you.res[r][1]).map(r => `+${pv.you.res[r][0]} ${r}`);
    const guaranteed = (made ? minimums : [...minimums, sure].filter(Boolean)).join(', ');
    if (n > 0 && theirs && eqTotal) return { text: `${guaranteed ? `${guaranteed}, ` : ''}+${n} resource${n === 1 ? '' : 's'}`, note: 'their pick' };
    if (n > 0 && !theirs) return { text: `${guaranteed ? `${guaranteed}; ` : ''}steal ${eqTotal ? '' : 'up to '}${n} in colors you pick`, note: null };
  }
  // one color of your choosing on top of the sure part: "+2 silver, +2 of a color you pick"
  const one = mix.map(d => loose.filter(r => d.res[r]).map(r => d.res[r]));
  if (one.every(v => v.length === 1 && v[0] === one[0][0] && v[0] > 0) && mix.every(d => same('followers', d, mix[0]) && same('members', d, mix[0])))
    return { text: `${sure ? `${sure}, ` : ''}+${one[0][0]} of a color you pick`, note: null };
  // the same amount, only recolored: what every pick gives, then the rest "in colors you choose", the wheel's words
  // (picky bot, Nov 4: Harvest's "+3 magenta, swaps are your pick" and Melting Pot's "+3 yellow" named one pick's colors
  // as if they were the gain; Makeover's "+5 yellow, −1 blue" was one rearrangement of many)
  const total = d => state.resources.reduce((t, r) => t + d.res[r], 0);
  if (mix.every(d => total(d) === total(mix[0]) && same('followers', d, mix[0]) && same('members', d, mix[0]))) {
    const lo = r => Math.min(...mix.map(d => d.res[r])), hi = r => Math.max(...mix.map(d => d.res[r]));
    const fixedRes = state.resources.filter(r => lo(r) === hi(r) && lo(r) !== 0);
    // a color some pick spends (Sweet Talk's silver, Makeover's whole pile): yours to turn into others
    const spent = state.resources.filter(r => lo(r) !== hi(r) && lo(r) < 0);
    const free = total(mix[0]) - fixedRes.reduce((t, r) => t + lo(r), 0);
    const parts = [...fixedRes.map(r => `${signed(lo(r))} ${r}`), free > 0 ? `+${free} in colors you choose` : null,
      mix[0].followers ? `${signed(mix[0].followers)} follower${Math.abs(mix[0].followers) === 1 ? '' : 's'}` : null].filter(Boolean);
    const list = spent.length > 1 ? `${spent.slice(0, -1).join(', ')} and ${spent[spent.length - 1]}` : spent[0];
    return { text: parts.join(', ') || 'nothing', note: spent.length ? `rearranging your ${list}` : null };
  }
  // different kinds: the two ends of the choice, "+2 followers or +4 white" (Your Call)
  return { text: `${changeWords(mix[0], state)} or ${changeWords(mix[mix.length - 1], state)}`, note: 'your pick' };
}
/**
 * What the "You'd get" line says: { text, note } or { likely, best } (strings for Rich). A pick that changes what you
 * get gives numbers, never only "it depends" (w3b #20: "it depends on your pick / a rival decides part of it" was honest
 * but empty): when a rival's answer decides it, the likely case and the best case ("+4 magenta likely · +1 member, +1
 * follower at best"); when it's your pick, your best pick's numbers; when every pick is worth the same, which mix
 * ("+2 followers or +4 white"). Ranges stay out (RC1 sweep 17/62/89: "0 to +2 ■, −2 to 0 ◆…" read as algebra).
 */
export function youdWords(pv, state, own = null) {
  const w = previewWords(pv, state);
  // a member that could be any of several (Open Door's tied cheapest): named once, all of them (blind tester B: "+1
  // member" twice, naming one of four)
  const joins = (pv.joins || []).map(u => { try { return cardDef(state, u).name; } catch { return null; } }).filter(Boolean);
  const named = t => (joins.length > 1 && joins.length <= 5 ? t.replace(/(^|, )\+1 member(?=,|$)/, `$1+1 member (${joins.slice(0, -1).join(', ')} or ${joins[joins.length - 1]})`) : t);
  // a swap changes who you hold, not how many: never "nothing right now" when it offers one (w4 A#35: Swap Sides)
  if (pv.exact && joins.length > 1) return { text: named(w.you), note: 'your pick' };
  if (pv.exact) return { text: !/^nothing/.test(w.you) || !(pv.best && pv.best.swapped > 0) ? w.you : changeWords(pv.best, state), note: null };
  const best = changeWords(pv.best, state), likely = changeWords(pv.likely, state);
  // a rival decides, after your own pick (Shake Down: which member, then pay its cost or lose it): the amount depends
  // on what you pick, so it's "up to", never a promise (blind tester: "+4 or +1 member" paid +2 for a cost-2 member)
  // what both cases give is said once, ahead of them (picky bot, Nov 4: Shake Down's "up to +3 magenta, or +3 magenta,
  // +1 member…" said its +1 magenta in each case and read as an option twice)
  if (pv.best && pv.likely && likely !== best) {
    const lp = likely.split(', '), bp = best.split(', ');
    const both = lp.filter(x => bp.includes(x));
    const lr = lp.filter(x => !both.includes(x)).join(', '), br = bp.filter(x => !both.includes(x)).join(', ');
    const upTo = t => (pv.asks && pv.asks.length && /^\+/.test(t) ? `up to ${t}` : t);
    if (both.length && lr && br) return { text: both.join(', '), likely: upTo(lr), best: br };
    return { text: null, likely: upTo(likely), best };
  }
  // your pick decides: what's sure as it is, and the best pick's gains as "up to", never as a promise (w4 skeptic #10:
  // Even Swap's "+1 follower" read as promised, and a different swap gave none)
  if (pv.best && !pv.tied) {
    // a steal whose picks differ only in how much each rival holds (Help Yourself from one rival, Nov 5): the most you
    // could take, in colors you pick, never one pick's colors as if promised ("up to +5 gold, +2 red")
    const total = d => state.resources.reduce((t, r) => t + d.res[r], 0);
    if (!pv.copies && !(pv.theirAsks && pv.theirAsks.length) && pv.worst
      && state.resources.some(r => pv.others?.res?.[r]?.[0] < 0) && state.resources.every(r => pv.you.res[r][0] >= 0)
      && pv.best.followers === pv.worst.followers && pv.best.members === pv.worst.members) {
      const mins = state.resources.filter(r => pv.you.res[r][0] > 0);
      const n = total(pv.best) - mins.reduce((t, r) => t + pv.you.res[r][0], 0);
      const sure = mins.map(r => `+${pv.you.res[r][0]} ${r}`).join(', ');
      if (n > 0) return { text: `${sure ? `${sure}; ` : ''}steal up to ${n} in colors you pick`, note: null };
    }
    // your best pick spends what the space just gave (Snap Up: +2 blue, then pay for a member): the two ends, so the
    // space's own gain is never dropped (blind tester B: Snap Up's hover left out its +2 blue)
    const spends = d => state.resources.some(r => d.res[r] < 0);
    // the branch that spends nothing (you decline the recruit), else the worst one
    const w0 = pv.keep || pv.worst, worst = w0 ? changeWords(w0, state) : '';
    const spentGain = w0 && state.resources.some(r => w0.res[r] > 0 && pv.best.res[r] < w0.res[r]);
    // the recruit is said by what it costs, never as a net loss: "−4" after a +2 gain matched nothing paid (live
    // panel r1: Snap Up's "−4●"). "+2 blue, or +1 member (Big Family), +3 followers for 4"
    if (spentGain && !spends(w0) && worst !== 'nothing' && worst !== best) {
      const paid = state.resources.reduce((t, r) => t + Math.max(0, (w0.res[r] || 0) - (pv.best.res[r] || 0)), 0);
      const kept = Object.fromEntries(state.resources.map(r => [r, Math.max(0, (pv.best.res[r] || 0) - (w0.res[r] || 0))]));
      const gets = changeWords({ ...pv.best, res: kept }, state);
      // each branch on its own line (picky bot, Nov 4: Cover's "…right after this one, or +2 …, +3 followers for 6" ran on)
      return { text: worst, or: paid > 0 && gets !== 'nothing' ? `${gets} for ${paid}` : best, note: 'your pick' };
    }
    // the best pick keeps the space's own gain and pays from what you held (Exchange: "+1 white", then followers for 2
    // resources): the gain, then the pick on its own line (picky bot, Nov 4: "up to +1 white, +4 followers, −2 resources")
    // (the least pick, turning nothing, is the space’s own gain; never on a copy space, whose least pick is another space)
    const base = pv.worst;
    if (base && !pv.copies && !spends(base) && state.resources.some(r => base.res[r] > 0) && (pv.best.followers > base.followers || pv.best.members > base.members) && state.resources.some(r => pv.best.res[r] < base.res[r])) {
      const paid = state.resources.reduce((t, r) => t + Math.max(0, (base.res[r] || 0) - (pv.best.res[r] || 0)), 0);
      const gets = changeWords({ ...pv.best, res: Object.fromEntries(state.resources.map(r => [r, Math.max(0, (pv.best.res[r] || 0) - (base.res[r] || 0))])), followers: pv.best.followers - base.followers, members: pv.best.members - base.members }, state);
      if (paid > 0 && gets !== 'nothing') return { text: changeWords(base, state), or: `up to ${gets} for ${paid} resource${paid === 1 ? '' : 's'}`, orWord: 'then', note: 'your pick' };
    }
    const sure = named(sureWords(pv, state));
    const sureParts = sure ? sure.split(', ') : [];
    const bare = x => x.replace(/ \(.*\)$/, '');
    const rest = best.split(', ').filter(x => !sureParts.some(y => y === x || (/member/.test(x) && bare(y) === bare(x))));
    const up = rest.filter(x => /^\+/.test(x)), other = rest.filter(x => !/^\+/.test(x));
    return { text: [sure, up.length ? `up to ${up.join(', ')}` : null, ...other].filter(Boolean).join(', ') || best, note: 'your pick' };
  }
  const mixed = pv.tied ? mixWords(pv, state, own) : null;
  if (mixed) return mixed;
  const sure = sureWords(pv, state);
  return { text: sure || null, note: sure ? 'the rest is your pick' : 'it depends on your pick' };
}
/**
 * The spaces you can take that would give you nothing right now (their hover says "You'd get: nothing right now"), as a
 * Set of "q-i" keys, filled in as the dry runs arrive (blind testers, 2026-10-15: they glowed exactly like useful ones).
 * They stay placeable; the wheel only lets them step back.
 */
export function useIdleSpaces(state, pid, keys) {
  const [, bump] = useState(0);
  // the same Set while the idle spaces stay the same, so the wheel doesn't redraw for every dry run that lands
  // (render budget, 2026-10-21: nine previews arriving at the start of your turn redrew the whole table nine times)
  const last = useRef({ sig: '', set: new Set() });
  const sig = keys.join('|');
  useEffect(() => {
    if (pid == null || !keys.length) return undefined;
    // a space's dry run only ever turns it idle (no preview yet counts as useful): redraw only when one does
    const fn = (st, p, k) => { if (st === state && p === pid && keys.includes(k) && !last.current.set.has(k) && idleAt(state, pid, k)) bump(n => n + 1); };
    listeners.add(fn);
    requestPreviews(state, pid, keys);
    return () => { listeners.delete(fn); };
  }, [state, pid, sig]); // eslint-disable-line react-hooks/exhaustive-deps
  const out = new Set();
  if (pid != null) for (const k of keys) if (idleAt(state, pid, k)) out.add(k);
  const outSig = [...out].join('|');
  if (outSig !== last.current.sig) last.current = { sig: outSig, set: out };
  return last.current.set;
}
/** Whether space "q-i" would give player pid nothing right now (false while its dry run hasn't landed). */
function idleAt(state, pid, k) {
  const [q, i] = k.split('-').map(Number);
  const pv = peekPreview(state, pid, q, i);
  if (!pv) return false;
  let own = null;
  try { own = quadrant(state.quadrants[q]).resource; } catch { /* none */ }
  const y = youdWords(pv, state, own);
  return !y.likely && !y.note && y.text === 'nothing right now';
}
/** "+2 followers if you recruit a member" / "+1 follower per 2 resources you pay, if you recruit a member". */
export function ifRecruitWords(x) {
  const parts = [];
  if (x.followers) parts.push(`+${x.followers} follower${x.followers === 1 ? '' : 's'}`);
  if (x.per) parts.push(`+1 follower per ${x.per === 1 ? 'resource' : `${x.per} resources`} you pay`);
  return `${parts.join(' and ')}${x.per ? ',' : ''} if you recruit a member this turn`;
}
/** "You'd get: +3 ●, +1 member" for player pid on space (q, i), computed just after it shows. */
export function YoudGet({ state, pid, q, i, now = false }) {
  const pv = usePreview(state, pid, q, i, { now });
  if (pid == null) return null;
  if (pv === undefined) return <span className="youd-get pending" data-youd-get="">You’d get: …</span>;
  if (!pv) return null;
  const w = previewWords(pv, state);
  let own = null;
  try { own = quadrant(state.quadrants[q]).resource; } catch { /* none */ }
  const y = youdWords(pv, state, own);
  return (
    <span className="youd-get" data-youd-get={w.you} title="Worked out by playing this space on a copy of the table, right now">
      {/* never "about": the preview is the engine's own dry run, and hedged words made it read unsure (w4 skeptic #29) */}
      <b>You’d get:</b>{' '}
      {/* a rival decides (Shake Down: pay, or lose the member): one plain line, what they'd likely do first, the other
          after "or", and whose call it is (w4b #12: "+4 likely / +1 member, +1 at best" read like an engine dump) */}
      {y.likely
        ? <span data-youd-cases>{y.text ? <><Rich text={y.text} />{', and '}</> : null}<Rich text={y.likely} />{', or '}<Rich text={y.best} /><em className="yd-note">their choice</em></span>
        : <>{y.text ? <Rich text={y.text} /> : null}{y.or ? <span className="yd-or" data-youd-or="">{y.orWord || 'or'} <Rich text={y.or} /></span> : null}{y.note ? <em className="yd-note">{y.note}</em> : null}</>}
      {/* the followers a later recruit this turn would add (Gather, Stash, Allowance, Splurge): the dry run stops before
          the recruit, so its own line says them (picky bot, Nov 4: "+3 red" alone left the follower part out) */}
      {pv.ifRecruit ? <small className="youd-others youd-if" data-youd-if=""><Rich text={ifRecruitWords(pv.ifRecruit)} /></small> : null}
      {w.others ? <small className="youd-others"><Rich text={w.others} /></small> : null}
    </span>
  );
}
