// The final screen's "where the followers came from" (Cory, 2026-11-02: "you never quite feel the payoff"; 2026-11-03,
// picked "bars by kind", not by color: "this is good as is"). One bar per cult, all to one scale, split by kind of source
// (members, prizes, bought, won during play, game-end bonuses) in the table's wood and cream tones. Every part opens
// what it's made of; the color a cult leaned into is a quiet note under its name. Numbers: format.js breakdown and
// sources.js (by color, for the lean and the members' hover).
import { quadrant, memberCount } from '../../engine/v4/index.js';
import { Tip } from './Info.jsx';
import { Who } from './Glyphs.jsx';
import { Follower } from '../art/Follower.jsx';
import { followerSources, spacesTaken } from './sources.js';
import { plural, breakdown, contestLines } from '../format.js';
import './sources.css';

const cname = qid => (qid ? quadrant(qid).name : 'Grey');
const sign = n => `${n < 0 ? '−' : '+'}${Math.abs(n)}`;

/** A row's parts, biggest kinds first in a fixed order so the bars line up: [{ key, n, label, card }]. */
function parts(state, p, s, meId) {
  const b = breakdown(state, p);
  const poss = p.id === meId ? 'Your' : `${p.name}’s`;
  const n = memberCount(state, p);
  const playLines = b.play.filter(l => l.n);
  const all = [
    { key: 'members', n: b.members + b.self, label: 'Members', card: <>
      <b>{poss} members: {b.members + b.self}</b>
      <span>{plural(n, 'member')}: +{b.members}, and 1 for {p.id === meId ? 'you' : 'the leader'}</span>
      {s.colors.filter(c => c.count).map(c => <span key={c.qid}>{plural(c.count, `${cname(c.qid).toLowerCase()} member`)}: +{c.members}</span>)}
      {s.neutral.count ? <span>{plural(s.neutral.count, 'grey member')}: +{s.neutral.members}</span> : null}
    </> },
    { key: 'prizes', n: b.contests, label: 'Prizes', card: <>
      <b>{poss} prizes: {b.contests}</b>
      {contestLines(state, p).map(l => <span key={l.rule}>{l.text}</span>)}
    </> },
    { key: 'bought', n: b.bought, label: 'Bought', card: <b>{poss} follower buys: {b.bought}</b> },
    { key: 'play', n: b.effects, label: 'Play', card: <>
      <b>{poss} followers won in play: {sign(b.effects)}</b>
      {playLines.map(l => <span key={l.label}>{l.label} {sign(l.n)}</span>)}
    </> },
    { key: 'end', n: b.endGame, label: 'End', card: <>
      <b>{poss} game-end bonuses: {sign(b.endGame)}</b>
      {b.parts.map(t => <span key={t}>{t}</span>)}
    </> },
  ];
  return { poss, n, bars: all.filter(g => g.n > 0), lost: all.filter(g => g.n < 0) };
}

export default function FollowerBars({ state, meId, ranks = null }) {
  const ranked = (state.ranking || state.players.map(p => p.id)).map(id => state.players[id]);
  const taken = spacesTaken(state);
  const rows = ranked.map(p => ({ p, s: followerSources(state, p, taken) }));
  // one scale: the longest bar (a cult's gains before any loss) fills the track
  const rowsWithParts = rows.map(r => ({ ...r, ...parts(state, r.p, r.s, meId) }));
  const max = Math.max(1, ...rowsWithParts.map(r => r.bars.reduce((t, g) => t + g.n, 0)));
  return (
    <div className="src-bars" data-sources="kinds">
      {rowsWithParts.map(({ p, s, poss, n, bars, lost }, k) => (
        <div key={p.id} className={`src-row${k === 0 ? ' first' : ''}`} data-src-row={p.id} data-total={s.total}>
          <span className="rank num">{ranks ? ranks[k] : k + 1}</span>
          <span className="src-who"><span><Who state={state} id={p.id} meId={meId} />{p.kind === 'bot' ? ' · bot' : ''}</span>
            <small data-members={p.id}>{plural(n, 'member')}{s.lean ? ` · mostly ${cname(s.lean).toLowerCase()}` : ''}</small></span>
          <span className="src-track">
            <span className="src-bar" style={{ width: `${(100 * bars.reduce((t, g) => t + g.n, 0)) / max}%` }}>
              {bars.map(g => (
                <Tip key={g.key} as="span" className={`src-seg kind-${g.key}`} style={{ flexGrow: g.n }} label={`${poss} ${g.label.toLowerCase()}`}
                  data-seg={g.key} data-n={g.n} content={() => <div className="pop-card">{g.card}</div>}>
                  {g.n / max >= 0.06 && <span className="src-lab">{g.n / max >= (g.label.length > 4 ? 0.13 : 0.075) ? `${g.label} ` : ''}<b className="num">{g.n}</b></span>}
                </Tip>
              ))}
            </span>
            {lost.map(g => (
              <Tip key={g.key} as="span" className="src-lost num" label={`${poss} ${g.label.toLowerCase()}`} data-seg={g.key} data-n={g.n}
                content={() => <div className="pop-card">{g.card}</div>}>{/* named, as a gain is (playtest, Nov 3: a bare "−5" said nothing) */}{g.label} {sign(g.n)}</Tip>
            ))}
          </span>
          <b className="src-tot num">{s.total}<Follower size={12} title="followers" /></b>
        </div>
      ))}
    </div>
  );
}
