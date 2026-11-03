// The final screen's "where the followers came from" (Cory, 2026-11-02: "you never quite feel the payoff"). Two looks,
// one source of numbers (sources.js):
//   bars  one bar per cult, to one scale, in segments by color, then guests, bought and the leader
//   grid  a row per cult, a column per color: the cell's number is what that color gave, its tint how much of the cult
// Every segment and cell opens what it's made of: its members, its contest's prizes, what it won during play, its
// end-game bonuses.
import { quadrant, memberCount } from '../../engine/v4/index.js';
import { Tip } from './Info.jsx';
import { Who } from './Glyphs.jsx';
import { Follower } from '../art/Follower.jsx';
import { followerSources, spacesTaken } from './sources.js';
import { plural, breakdown, contestLines } from '../format.js';
import './sources.css';

const cname = qid => (qid ? quadrant(qid).name : 'Grey');
const sign = n => `${n < 0 ? '−' : '+'}${Math.abs(n)}`;

/** One color's hover: each source on its own line. */
function ColorCard({ c, poss }) {
  const word = c.qid ? `${cname(c.qid).toLowerCase()} ` : 'grey ';
  return (
    <div className="pop-card src-card" style={{ '--c': c.qid ? `var(--${c.qid})` : 'var(--any)' }}>
      <b>{poss} {cname(c.qid).toLowerCase()}: {c.total}</b>
      {c.count > 0 && <span>{plural(c.count, `${word}member`)}: {sign(c.members)}</span>}
      {c.lines.filter(l => l.rounds).map(l => <span key={l.label}>{l.label}, round{l.rounds.length > 1 ? 's' : ''} {l.rounds.join(', ')}: {sign(l.n)}</span>)}
      {c.lines.filter(l => !l.rounds && !l.end).map(l => <span key={l.label}>{l.label}, during play: {sign(l.n)}</span>)}
      {c.lines.filter(l => l.end).map(l => <span key={`e${l.label}`}>{l.label}, at game end: {sign(l.n)}</span>)}
      {c.qid && <span className="src-spaces">{plural(c.spaces, `${cname(c.qid).toLowerCase()} space`)} taken</span>}
    </div>
  );
}

function useRows(state, meId) {
  const ranked = (state.ranking || state.players.map(p => p.id)).map(id => state.players[id]);
  const taken = spacesTaken(state);
  return ranked.map(p => ({ p, s: followerSources(state, p, taken), poss: p.id === meId ? 'Your' : `${p.name}’s` }));
}

export function SourceBars({ state, meId }) {
  const rows = useRows(state, meId);
  const max = Math.max(1, ...rows.map(r => r.s.total));
  return (
    <div className="src-bars" data-sources="bars">
      {rows.map(({ p, s, poss }, k) => {
        const segs = [
          ...s.colors.filter(c => c.total > 0).map(c => ({ key: c.qid, n: c.total, label: '', c })),
          ...(s.neutral.total > 0 ? [{ key: 'guests', n: s.neutral.total, label: '', c: s.neutral }] : []),
          ...(s.bought > 0 ? [{ key: 'bought', n: s.bought, label: 'Bought' }] : []),
          { key: 'leader', n: s.leader + Math.max(0, s.other), label: '' },
        ];
        return (
          <div key={p.id} className={`src-row${k === 0 ? ' first' : ''}`} data-src-row={p.id}>
            <span className="rank num">{k + 1}</span>
            <span className="src-who"><Who state={state} id={p.id} meId={meId} />
              <small>{s.lean ? <>leaned <b style={{ color: `var(--${s.lean})` }}>{cname(s.lean).toLowerCase()}</b></> : 'spread out'} · {plural(memberCount(state, p), 'member')}</small></span>
            <span className="src-track">
              <span className="src-bar" style={{ width: `${(100 * s.total) / max}%` }}>
                {segs.map(g => (
                  <Tip key={g.key} as="span" className={`src-seg seg-${g.key}${g.key === s.lean ? ' lean' : ''}`} style={{ flexGrow: g.n, '--c': `var(--${g.c?.qid || (g.key === 'guests' ? 'any' : 'none')})` }}
                    label={`${poss} ${g.c ? cname(g.c.qid).toLowerCase() : g.key === 'bought' ? 'follower buys' : 'leader'}`} data-seg={g.key} data-n={g.n}
                    content={() => (g.c ? <ColorCard c={g.c} poss={poss} />
                      : g.key === 'bought' ? <div className="pop-card"><b>{poss} follower buys: {g.n}</b></div>
                        : <div className="pop-card"><b>{p.id === meId ? 'You' : 'The leader'}: 1</b><span>Every cult’s leader counts as 1.</span></div>)}>
                    {g.key !== 'leader' && g.n / max >= 0.05 && <span className="src-lab">{g.label && `${g.label} `}<b className="num">{g.n}</b></span>}
                  </Tip>
                ))}
              </span>
            </span>
            <b className="src-tot num">{s.total}<Follower size={12} title="followers" /></b>
          </div>
        );
      })}
    </div>
  );
}

export function SourceGrid({ state, meId }) {
  const rows = useRows(state, meId);
  const guests = rows.some(r => r.s.neutral.total);
  return (
    <table className="src-grid" data-sources="grid">
      <thead>
        <tr><th aria-label="Rank" /><th aria-label="Cult" />
          {state.quadrants.map(q => <th key={q} style={{ '--c': `var(--${q})` }}><i className="src-dot" />{cname(q)}</th>)}
          {guests && <th>Grey</th>}<th>Bought</th><th>Followers</th></tr>
      </thead>
      <tbody>
        {rows.map(({ p, s, poss }, k) => (
          <tr key={p.id} className={k === 0 ? 'first' : ''} data-src-row={p.id}>
            <td className="rank num">{k + 1}</td>
            <td className="src-who"><Who state={state} id={p.id} meId={meId} /><small>{plural(memberCount(state, p), 'member')}</small></td>
            {[...s.colors, ...(guests ? [s.neutral] : [])].map(c => {
              const share = s.total ? c.total / s.total : 0;
              const lean = c.qid && c.qid === s.lean;
              return (
                <td key={c.qid || 'guests'} className={`src-cell${lean ? ' lean' : ''}${c.total ? '' : ' zero'}${c.qid ? '' : ' grey'}`}
                  style={{ '--c': c.qid ? `var(--${c.qid})` : 'var(--any)', '--share': `${Math.round(Math.min(1, share * 1.6) * 45)}%` }} data-cell={c.qid || 'guests'}>
                  {c.total ? <Tip label={`${poss} ${cname(c.qid).toLowerCase()}`} content={() => <ColorCard c={c} poss={poss} />}><b className="num">{c.total}</b></Tip> : null}
                </td>
              );
            })}
            <td className="src-cell plain"><b className="num">{s.bought}</b></td>
            <td className="src-tot num">{s.total}<Follower size={12} title="followers" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Bars split by kind of source, in the table's own wood tones (Cory, 2026-11-03: "I like bars, i don't like that they
 *  seem to correspond to existing colors"). Members, prizes, bought, won during play, game end. */
export function KindBars({ state, meId }) {
  const rows = useRows(state, meId);
  const max = Math.max(1, ...rows.map(r => r.s.total));
  return (
    <div className="src-bars kinds" data-sources="kinds">
      {rows.map(({ p, s, poss }, k) => {
        const b = breakdown(state, p);
        const n = memberCount(state, p);
        const segs = [
          { key: 'members', n: b.members + b.self, label: 'Members', card: <><b>{poss} members: {b.members + b.self}</b><span>{plural(n, 'member')} {b.members}, and 1 for {p.id === meId ? 'you' : 'the leader'}</span>{s.colors.filter(c => c.count).map(c => <span key={c.qid}>{plural(c.count, `${cname(c.qid).toLowerCase()} member`)}: +{c.members}</span>)}{s.neutral.count ? <span>{plural(s.neutral.count, 'grey member')}: +{s.neutral.members}</span> : null}</> },
          { key: 'prizes', n: b.contests, label: 'Prizes', card: <><b>{poss} prizes: {b.contests}</b>{contestLines(state, p).map(l => <span key={l.rule}>{l.text}</span>)}</> },
          { key: 'bought', n: b.bought, label: 'Bought', card: <b>{poss} follower buys: {b.bought}</b> },
          { key: 'play', n: b.effects, label: 'Play', card: <><b>{poss} followers won in play: {sign(b.effects)}</b>{b.play.map(l => <span key={l.label}>{l.label} {sign(l.n)}</span>)}</> },
          { key: 'end', n: b.endGame, label: 'End', card: <><b>{poss} game-end bonuses: {sign(b.endGame)}</b>{b.parts.map(t => <span key={t}>{t}</span>)}</> },
        ].filter(g => g.n > 0);
        return (
          <div key={p.id} className={`src-row${k === 0 ? ' first' : ''}`} data-src-row={p.id}>
            <span className="rank num">{k + 1}</span>
            <span className="src-who"><Who state={state} id={p.id} meId={meId} /><small>{plural(n, 'member')}{s.lean ? ` · mostly ${cname(s.lean).toLowerCase()}` : ''}</small></span>
            <span className="src-track">
              <span className="src-bar" style={{ width: `${(100 * s.total) / max}%` }}>
                {segs.map(g => (
                  <Tip key={g.key} as="span" className={`src-seg kind-${g.key}`} style={{ flexGrow: g.n }} label={`${poss} ${g.label.toLowerCase()}`} data-seg={g.key} data-n={g.n}
                    content={() => <div className="pop-card">{g.card}</div>}>
                    {g.n / max >= 0.06 && <span className="src-lab">{g.n / max >= (g.label.length > 4 ? 0.13 : 0.075) ? `${g.label} ` : ''}<b className="num">{g.n}</b></span>}
                  </Tip>
                ))}
              </span>
            </span>
            <b className="src-tot num">{s.total}<Follower size={12} title="followers" /></b>
          </div>
        );
      })}
    </div>
  );
}
