// Final results: the winner, where every cult's followers came from (one bar each), then Play again.
import { useState } from 'react';
import { followers, memberCount } from '../../engine/v4/index.js';
import { playerColor, winSentence, finalWinners } from '../format.js';
import { asYou } from './Info.jsx';
import { gameRecord } from '../session/record.js';
import { saveGame } from '../session/archive.js';
import FollowerBars from './Sources.jsx';

export default function Results({ state, onPlayAgain, onHome, meId = null }) {
  // you are "You" ("Your contests"), never your seat's name
  const nm = p => (p.id === meId ? 'You' : p.name);
  const ranked = (state.ranking || state.players.map(p => p.id)).map(id => state.players[id]);
  const top = followers(state, ranked[0]);
  // Ranks with ties: same followers and members share a rank ("1="); members break follower ties.
  const key = p => `${followers(state, p)}|${memberCount(state, p)}`;
  const rankOf = ranked.map((p, k) => ranked.findIndex(o => key(o) === key(p)) + 1);
  const shared = r => rankOf.filter(x => x === r).length > 1;
  const ranks = rankOf.map(r => `${r}${shared(r) ? '=' : ''}`);
  // the winners are the rule's (format.js finalWinners), the same call the game-over cults use, so the two never disagree
  const winners = finalWinners(state).map(id => state.players[id]);
  const brokeTie = ranked.some((p, k) => k > 0 && followers(state, p) === followers(state, ranked[k - 1]) && key(p) !== key(ranked[k - 1]));
  return (
    <section className="results" aria-label="Final results">
      <h2 className="win" style={{ '--pc': playerColor(ranked[0].id) }} data-winners={winners.map(p => p.id).join(',')} data-top={top}>
        <span>{winners.map(nm).join(' & ')}</span> {winners.length > 1 ? 'tie' : winners[0].id === meId ? 'win' : 'wins'} with <span className="num big">{top}</span> followers
      </h2>
      <p className="why" data-why>{meId != null ? asYou(winSentence(state), state.players[meId].name) : winSentence(state)}</p>
      {/* where each cult's followers came from, one bar each, every part a hover (Cory picked the bars by kind, 2026-11-03) */}
      <FollowerBars state={state} meId={meId} ranks={ranks} />
      <p className="hint">Point at a part to see what’s in it.</p>
      {brokeTie && <p className="hint">Tied on followers: more members breaks the tie.</p>}
      <div className="row-btns">
        {onPlayAgain && <button type="button" className="btn pri" onClick={onPlayAgain} data-play-again>Play again</button>}
        {onHome && <button type="button" className="btn" onClick={onHome}>Home</button>}
        <SaveThisGame state={state} />
      </div>
    </section>
  );
}

/** The end screen's save: a plain button beside Play again, and a line saying where the file went. */
function SaveThisGame({ state }) {
  const [saved, setSaved] = useState(null); // null | true | false (the browser refused)
  return (
    <>
      <button type="button" className="btn save-this-game" onClick={() => setSaved(saveGame(gameRecord(state)))} data-save-game
        title="Downloads this game as text, every move in order, that replays it exactly">{saved ? 'Saved' : 'Save this game'}</button>
      {saved !== null && <p className="hint save-note">{saved ? 'In your downloads: every move in order. Past games on the home screen keeps your last 12 too.' : 'Your browser blocked the download. Past games on the home screen keeps it.'}</p>}
    </>
  );
}
