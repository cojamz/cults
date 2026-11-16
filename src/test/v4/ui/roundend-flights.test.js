// Cory, 2026-10-17: "Unexplained animation right before round end: followers fly out of the piles toward every player
// (not the contest followers)." The round's closing move plays against the scored board (scoringSnapshot), which
// carries no effect stream, so the director falls back to the state diff (gains.js). Before f27be278 that diff saw
// every contest prize and flew it from the follower rates to each winner, ahead of the Reckoning. The chain must only
// fly what the closing move itself gave; the prizes belong to the Reckoning alone.
import { expect, it } from 'vitest';
import { createGame, applyMove, chooseBotMove, followers } from '../../../engine/v4/index.js';
import { seededRandom } from '../../../engine/v4/rng.js';
import { planChain } from '../../../v4/game/director.js';
import { scoringSeatState, afterContestSteps } from '../../../v4/game/Reckoning.jsx';
import { scoringSnapshot, newLogLines, isRoundEnd, parseRoundEnd } from '../../../v4/format.js';

const SEATS = [{ name: 'P1', kind: 'bot' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }, { name: 'P4', kind: 'bot' }];

/** Every round-ending move of a seeded bot game (rounds I and II): { prev, next } with the engine's effect stream. */
function closings(seed) {
  let s = createGame({ seats: SEATS, seed });
  const rand = seededRandom(seed);
  const out = [];
  for (let n = 0; n < 3000 && !s.over && out.length < 2; n++) {
    const next = applyMove(s, chooseBotMove(s, rand), { effects: true });
    if (next.round > s.round && s.round >= 1) out.push({ prev: s, next });
    s = next;
  }
  return out;
}

/** Followers each seat receives in flight, from a plan's atoms. */
const flown = plan => {
  const got = {};
  for (const a of plan.atoms) if (a.op === 'piece' && a.fol && !a.pay && a.to.kind === 'count') got[a.to.pid] = (got[a.to.pid] || 0) + a.n;
  return got;
};

it('flies only the closing move\'s own followers, from their own sources, before the Reckoning (never the prizes)', () => {
  let checked = 0, multiWinner = 0, buggy = 0, streamed = 0;
  // seed 9 for 2 since every member cost 4 more (Nov 5 evening): seed 2's round II now closes on a Sore Loser pick after the
  // round-end line, a closing this check doesn't model; seed 10 for 8 since Gather pays per 3 spent (Nov 9), same reason
  // seed 11 for 5 since Borrow (Nov 10): seed 5's round II closes with a borrowed member discarded at round end, which
  // takes back a follower the closing recruit flew in, a closing this check doesn't model either
  // seed 14 for 7 since bots count Borrow's member as discarded at round end (Nov 12): seed 7's round I closing has no round-end line now
  // seed 13 for 9 since Late Shift took Trending's place (Nov 11): seed 9's round I now closes on a Borrow discard, as seed 5's did
  // seed 15 for 10 since Brethren and Purists (Nov 11): seed 10's round II closing has no round-end line now
  for (const seed of [1, 13, 3, 4, 11, 6, 14, 15]) {
    for (const { prev, next } of closings(seed)) {
      const line = newLogLines(prev, next).filter(isRoundEnd).pop();
      expect(line, `seed ${seed} round ${prev.round}`).toBeTruthy();
      const board = scoringSnapshot(prev, next);
      const info = { result: parseRoundEnd(next, line), start: null, after: next, board };
      // what GameScreen plays at that commit: the physical state (the scored board) with the prizes withheld
      const physical = board || next;
      const shown = scoringSeatState(physical, info, 0);
      const plan = planChain(prev, shown, { mine: [] });
      const where = `seed ${seed} round ${prev.round}`;
      // the scored board carries the closing move's own effect stream (up to its scoring), and the table plays from it
      if (board) { expect(Array.isArray(shown.effects), where).toBe(true); streamed++; }
      // what the closing move itself gave each seat: its follower change less the round's prizes
      const scored = next.contests[next.contests.length - 1];
      const prize = {};
      for (const c of scored.results) for (const id of c.winners) prize[id] = (prize[id] || 0) + c.prize;
      // ...and less what the members that answer the contests give (Cory, Nov 5: "round ends, contests, members."):
      // the Reckoning shows those after the contests, never the closing move's chain before them
      const later = {};
      for (const st of afterContestSteps(info)) for (const [id, n] of Object.entries(st.deltas)) later[id] = (later[id] || 0) + n;
      const own = Object.fromEntries(next.players.map(p => [p.id, followers(next, p) - (prize[p.id] || 0) - (later[p.id] || 0) - followers(prev, prev.players[p.id])]));
      const got = flown(plan);
      const moved = (shown.effects || []).some(e => ['member-move', 'release'].includes(e.type));
      for (const p of next.players) {
        if (!moved) expect(got[p.id] || 0, `${where} seat ${p.id}`).toBe(Math.max(0, own[p.id]));
        else if (!(own[p.id] > 0)) expect(got[p.id] || 0, `${where} seat ${p.id}`).toBe(0);
      }
      // followers leave a follower rate only for a seat that bought some in that move
      const buyers = new Set((shown.effects || []).filter(e => e.cause && e.cause.kind === 'buy').map(e => e.cause.pid));
      for (const a of plan.atoms) if (a.op === 'piece' && a.fol && !a.pay && a.from.kind === 'rate') expect(buyers.has(a.to.pid), `${where}: followers from a rate to seat ${a.to.pid}`).toBe(true);
      checked++;
      if (Object.keys(prize).length >= 2) multiWinner++;
      // (the old path: the scored board as is, which flew every prize to its winner)
      const old = flown(planChain(prev, { ...physical }, { mine: [] }));
      if (next.players.some(p => (old[p.id] || 0) !== Math.max(0, own[p.id]))) buggy++;
    }
  }
  expect(checked).toBeGreaterThanOrEqual(12);
  expect(streamed).toBeGreaterThanOrEqual(12);
  expect(multiWinner).toBeGreaterThanOrEqual(8); // prizes spread over several seats: the "toward every player" case
  expect(buggy).toBeGreaterThanOrEqual(8); // the unwithheld board really does fly them, so this guards something
});
