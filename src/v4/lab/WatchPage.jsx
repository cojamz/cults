// Watch a player-agents game (Cory, Nov 13: "recreate the game played out with their turns, and maybe little speech
// bubbles with their thoughts, that I could watch"). The real game screen; every seat plays the move its AI player
// made, and the player's reason shows in a bubble at its seat (session/local.js script, game/Talk.jsx).
// Data: watch-<name>.json next to the page (scripts/players/watch-data.mjs). Opened by window.__WATCH__ or ?lab=watch&game=<name>.
import { useEffect, useState } from 'react';
import '../app.css';
import GameScreen from '../game/GameScreen.jsx';
import { createLocalSession } from '../session/local.js';
import { BOT } from '../motion.js';

export default function WatchPage() {
  const name = (typeof window !== 'undefined' && window.__WATCH__) || new URLSearchParams(location.search).get('game') || 'pilot1';
  const [session, setSession] = useState(null);
  const [error, setError] = useState('');
  const [speed, setSpeed] = useState(Number(new URLSearchParams(location.search).get('speed')) || 1);
  useEffect(() => {
    let s = null;
    fetch(`watch-${name}.json`).then(r => r.json()).then(d => {
      const seats = d.names.map((n, i) => ({ name: `${n} (${d.kinds[i] === 'exp' ? 'experienced' : 'new'})`, kind: 'bot' }));
      s = createLocalSession({ seats, seed: d.seed, quadrants: d.colors, rules: d.rules, script: d.moves, holdRoundEnds: true, botDelayMs: () => 650 * (window.__WATCH_SPEED__ || 1) });
      setSession(s);
    }).catch(e => setError(String(e)));
    return () => s?.destroy();
  }, [name]);
  useEffect(() => { window.__WATCH_SPEED__ = speed; }, [speed]);
  if (error) return <div style={{ padding: 24, color: '#ece6d6', background: '#141d1c', minHeight: '100dvh' }}>Couldn't load the game: {error}</div>;
  if (!session) return <div style={{ padding: 24, color: '#ece6d6', background: '#141d1c', minHeight: '100dvh' }}>Loading the game…</div>;
  return (
    <>
      <GameScreen session={session} pace={BOT.pace.steady} onHome={() => location.reload()} leaveText="" onPlayAgain={null} onResults={null} askLeave={false} />
      <div className="watch-speed" style={{ position: 'fixed', right: 12, bottom: 12, zIndex: 80, display: 'flex', gap: 6, background: 'rgba(20,29,28,.9)', padding: '6px 8px', borderRadius: 8, color: '#ece6d6', font: '600 13px system-ui' }}>
        <span style={{ alignSelf: 'center' }}>Reading speed</span>
        {[[1.6, 'Slow'], [1, 'Normal'], [0.5, 'Fast']].map(([v, l]) => (
          <button key={l} type="button" onClick={() => setSpeed(v)} style={{ font: 'inherit', padding: '4px 10px', borderRadius: 6, border: 0, cursor: 'pointer', background: speed === v ? '#ece6d6' : '#2a3a38', color: speed === v ? '#141d1c' : '#ece6d6' }}>{l}</button>
        ))}
      </div>
    </>
  );
}
