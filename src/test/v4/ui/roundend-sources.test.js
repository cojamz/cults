// Cory, Nov 26: "I'm still seeing like little like plus followers get added to people's score at the end of the round,
// and I have no idea where they're coming from." The Round End members (Harlequin, Pilgrims, Clan Chief, Bannermen) paid
// inside the round's closing move: the table flew their followers under the last player's turn, the turn's story
// credited them to that player's space ("P4 Root: you +1 (Harlequin)"), and the Reckoning skipped them. Now each is the
// Reckoning's own named step before the contests, the closing chain leaves them to it, and the last turn's story never
// claims them.
import { expect, it } from 'vitest';
import { createGame, applyMove, chooseBotMove, cardDef } from '../../../engine/v4/index.js';
import { seededRandom } from '../../../engine/v4/rng.js';
import { planChain } from '../../../v4/game/director.js';
import { reckonSteps, scoringSeatState } from '../../../v4/game/Reckoning.jsx';
import { scoringSnapshot, newLogLines, isRoundEnd, parseRoundEnd } from '../../../v4/format.js';
import { createTrail, feed } from '../../../v4/game/trail.js';

const SEATS = [{ name: 'P1', kind: 'bot' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }, { name: 'P4', kind: 'bot' }];
const END_MEMBERS = { 0: 'yellow.cosmopolitans', 1: 'yellow.pilgrims', 2: 'red.clan', 3: 'red.purists' };

/** Round I of seed 5, with a Round End member in each cult, up to its closing move: { prev, next, trail }. */
function closing() {
  let s = createGame({ seats: SEATS, seed: 5 });
  const rand = seededRandom(5);
  while (!(s.round === 1 && s.pending && s.pending.kind === 'place')) s = applyMove(s, chooseBotMove(s, rand));
  s = JSON.parse(JSON.stringify(s));
  const taken = new Set(s.players.flatMap(p => p.members));
  for (const [pid, def] of Object.entries(END_MEMBERS)) {
    const uid = Object.values(s.cards).find(c => c.def === def && !taken.has(c.uid)).uid;
    for (const k of ['pile', 'shop', 'discard']) s[k] = s[k].filter(x => x !== uid);
    for (const r of Object.keys(s.waiting || {})) s.waiting[r] = s.waiting[r].filter(x => x !== uid);
    taken.add(uid);
    s.players[pid].members.push(uid);
  }
  const trail = createTrail(0);
  feed(trail, s);
  for (let n = 0; n < 500; n++) {
    const next = applyMove(s, chooseBotMove(s, rand), { effects: true });
    feed(trail, next);
    if (next.round > s.round) return { prev: s, next, trail };
    s = next;
  }
  throw new Error('round I never closed');
}

it('each Round End member is its own named step before the contests, flown by the Reckoning alone', () => {
  const { prev, next, trail } = closing();
  const board = scoringSnapshot(prev, next);
  expect(board).toBeTruthy();
  const info = { result: parseRoundEnd(next, newLogLines(prev, next).filter(isRoundEnd).pop()), start: null, after: next, board };
  const steps = reckonSteps(info);
  const ends = steps.filter(r => r.phase === 'roundEnd');
  const paid = (board.effects || []).filter(e => e.phase === 'roundEnd' && e.type === 'followers' && e.cause.kind === 'member');
  expect(paid.length).toBeGreaterThan(0);
  // every member that paid followers at round end has a step, named for it, crediting its owner what it paid
  for (const e of paid) {
    const st = ends.find(r => r.uid === e.cause.uid);
    expect(st, cardDef(board, e.cause.uid).name).toBeTruthy();
    expect(st.rule).toBe(cardDef(board, e.cause.uid).name);
    expect(st.deltas[e.to.pid]).toBe(e.what.n);
  }
  // ...and they all come before the first contest
  const firstContest = steps.findIndex(r => r.kind !== 'after' && r.kind !== 'bonus');
  expect(steps.findIndex(r => r.phase === 'roundEnd')).toBe(0);
  expect(steps.map(r => r.phase === 'roundEnd').lastIndexOf(true)).toBeLessThan(firstContest);
  // the closing move's chain flies none of them (the seats hold them back until the Reckoning lands each one)
  const plan = planChain(prev, scoringSeatState(board, info, 0), { mine: [] });
  const fromEnd = plan.atoms.filter(a => a.op === 'piece' && a.fol && a.from && a.from.kind === 'member' && ends.some(r => r.uid === a.from.uid));
  expect(fromEnd).toEqual([]);
  // the round's last turn never tells them as its own
  const last = trail.stories[trail.stories.length - 1];
  const names = ends.map(r => r.rule);
  for (const nm of names) expect(JSON.stringify(last), nm).not.toContain(nm);
});
