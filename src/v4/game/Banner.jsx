// The top banner's lines (Cory, Nov 7: "I like top banner", "actions and member names should be bolded. use the emojis
// and not the robes… green cloak should just show the green cloak (as it is when picking it)", "for recruiting it
// should be like Santa emoji -x -y for Member Name" and the worth as "1follower", never "+1follower"; "the language
// should be as tight as possible while still being easy as hell to follow"). Each story line, as the game wrote it,
// drawn in the table's own pictures: a cult by its emoji, a member by its portrait and bold name, a cloak by its tile.
import { cardDef, quadrant } from '../../engine/v4/index.js';
import { Minion } from '../art/Leader.jsx';
import { Sprite } from '../art/Sprite.jsx';
import { spriteId } from '../art/index.js';
import { ArtifactTile } from './ArtifactDraft.jsx';
import { playerColor, seatEmoji } from '../format.js';
import { Rich } from './Rich.jsx';

const GOES_LAST = ' · Goes Last token';
/** The space's own "took the Goes Last token" joins the space's line: it is part of the action (Cory, Nov 7: "taking
 *  goes last token is part of the action?"). Lines are the turn's lines after its head. */
export function joinGoesLast(lines, space) {
  if (!space || lines.length < 2 || !/^[+−-]\d/.test(lines[0])) return lines;
  const j = lines.findIndex((l, i) => i > 0 && l === `${space}: took the Goes Last token`);
  if (j < 0) return lines;
  return [`${lines[0]}${GOES_LAST}`, ...lines.slice(1, j), ...lines.slice(j + 1)];
}

let viewer = -1; // the seat "you" is in the lines (set by each BannerLine as it draws)
const pidOf = (state, who) => {
  if (!state) return -1;
  if (who === 'you') return viewer >= 0 ? viewer : state.players.findIndex(p => p.name === 'You');
  return state.players.findIndex(p => p.name === who);
};
function Cult({ state, pid }) {
  if (pid < 0 || !state || !state.players[pid]) return null;
  return <span className="bn-cult" title={state.players[pid].name}><Minion emoji={seatEmoji(state, pid)} color={playerColor(pid)} size={17} /><span className="bn-sr">{state.players[pid].name} </span></span>;
}
// "P2" and "you" anywhere in a line, as their cults
function WithCults({ text, state }) {
  const parts = String(text).split(/\b(P\d|you)\b/);
  return <>{parts.map((s, i) => (i % 2 ? <Cult key={i} state={state} pid={pidOf(state, s)} /> : s ? <Rich key={i} text={s} /> : null))}</>;
}
const defByName = (state, name) => {
  if (!state || !state.cards) return null;
  for (const uid of Object.keys(state.cards)) {
    try { const d = cardDef(state, uid); if (d && d.name === name) return d; } catch { /* not a member */ }
  }
  return null;
};
function Member({ state, name }) {
  const d = defByName(state, name);
  let sphere = 'colorless';
  try { if (d) sphere = quadrant(d.quadrant).resource; } catch { /* colorless */ }
  return (
    <span className="bn-mem">
      {d && <span className="bn-pic"><Sprite id={[d.id, spriteId(d.name)]} kind="member" sphere={sphere} size={24} /></span>}
      <b>{name}</b>
    </span>
  );
}
function CloakTile({ state, pid }) {
  const p = state && state.players[pid], arts = (state && state.artifacts) || {};
  const q = p && Object.keys(arts).find(k => arts[k] === p.artifact);
  if (!q) return null;
  let res = null;
  try { res = quadrant(q).resource; } catch { return null; }
  return <span className="bn-cloak"><ArtifactTile q={q} res={res} size={18} title={`${res[0].toUpperCase()}${res.slice(1)} Cloak`} /></span>;
}
// "paid 2 blue, 1 red" → "−2 blue −1 red"
const spent = s => String(s).replace(/,/g, '').replace(/(^|\s)(\d+) /g, '$1−$2 ').trim();

/** One banner line. i: its place in the turn; space: the space the turn took (its line is labelled with it). */
export function BannerLine({ line, i, state, pid, space, you = -1 }) {
  viewer = you;
  let l = line, m;
  const me = <Cult state={state} pid={pid} />;
  const goesLast = l.endsWith(GOES_LAST);
  if (goesLast) l = l.slice(0, -GOES_LAST.length);
  const tail = goesLast ? <span className="bn-quiet"> · Goes Last token</span> : null;
  if (i === 0 && /^[+−-]\d/.test(l)) return <>{space ? <><b className="bn-space">{space}</b>: </> : null}{me}<WithCults text={l} state={state} />{tail}</>;
  if ((m = l.match(/^recruited (.+?) \((?:paid (.+)|free)\)(?:, worth .+)?$/))) {
    const d = defByName(state, m[1]);
    const worth = d ? (d.f ?? 1) : 1;
    return <>{me}{m[2] ? <Rich text={spent(m[2])} /> : 'free'} for <Member state={state} name={m[1]} /> <Rich text={`${worth} followers`} /></>;
  }
  if ((m = l.match(/^bought (\d+) ?followers? \(paid (.+)\)$/))) return <>{me}<Rich text={spent(m[2])} /> for <Rich text={`${m[1]} followers`} /></>;
  if ((m = l.match(/^(\w+) Cloak: (.+)$/))) return <><CloakTile state={state} pid={pid} />{me}<Rich text={m[2]} /></>;
  if ((m = l.match(/^(P\d|you) ([+−-]\d.*) \((.+)\)$/))) return <><Member state={state} name={m[3]} />: <Cult state={state} pid={pidOf(state, m[1])} /><Rich text={m[2]} /></>;
  if ((m = l.match(/^(P\d|you) ([+−-]\d.*)$/))) return <><Cult state={state} pid={pidOf(state, m[1])} /><Rich text={m[2]} /></>;
  if ((m = l.match(/^took (P\d|you)(?:'s|’s) (.+)$/))) return <>{me}took <Cult state={state} pid={pidOf(state, m[1])} />’s <Member state={state} name={m[2]} /></>;
  if ((m = l.match(/^took your (.+)$/))) return <>{me}took <Cult state={state} pid={pidOf(state, 'you')} />’s <Member state={state} name={m[1]} /></>;
  if ((m = l.match(/^gave (.+) to the shop$/))) return <>{me}gave <Member state={state} name={m[1]} /> to the shop</>;
  if ((m = l.match(/^took the shop(?:'s|’s) (.+)$/))) return <>{me}took the shop’s <Member state={state} name={m[1]} /></>;
  if ((m = l.match(/^gave (.+) to (P\d|you)$/))) return <>{me}gave <Member state={state} name={m[1]} /> to <Cult state={state} pid={pidOf(state, m[2])} /></>;
  if ((m = l.match(/^used (.+)$/)) && defByName(state, m[1])) return <>{me}used <Member state={state} name={m[1]} /></>;
  if ((m = l.match(/^(?:(P\d|you)(?:'s|’s) )?([^:]{2,48}): (.+)$/))) {
    const who = m[1] ? <Cult state={state} pid={pidOf(state, m[1])} /> : me;
    const rest = /^[+−-]\d/.test(m[3]) ? <>{who}<WithCults text={m[3]} state={state} /></> : <WithCults text={m[3]} state={state} />;
    if (m[2] === space) return <>{/^[+−-]\d/.test(m[3]) ? null : who}{rest}</>;
    if (defByName(state, m[2])) return <><Member state={state} name={m[2]} />: {rest}</>;
    return <><b>{m[2]}</b>: {rest}</>;
  }
  return <WithCults text={l} state={state} />;
}

// The banner tucks away while the pointer is over it, so the spaces under it are always there to point at (Cory, Nov 7:
// "this overlapping the wheel means we really gotta get the wheel snappy"). One passive listener, read once a frame.
let tuckOn = false;
export function installTuck() {
  if (tuckOn || typeof document === 'undefined') return;
  tuckOn = true;
  let x = -1, y = -1, queued = false;
  const check = () => {
    queued = false;
    const el = document.querySelector('.turn-card.at-hub');
    if (!el) return;
    const r = el.getBoundingClientRect();
    const over = x >= r.left - 6 && x <= r.right + 6 && y >= r.top - 6 && y <= r.bottom + 6;
    if (over !== el.classList.contains('bn-tucked')) el.classList.toggle('bn-tucked', over);
  };
  document.addEventListener('pointermove', e => { x = e.clientX; y = e.clientY; if (!queued) { queued = true; requestAnimationFrame(check); } }, { passive: true });
}
