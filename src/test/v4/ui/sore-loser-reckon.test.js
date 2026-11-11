// Cory's playtest, Nov 9 9:19pm Eastern: "Sore loser doesnt correctly wshow taking and giving". Sore Loser ("Round End:
// if you win no contest, steal 5 followers from the rival who wins the most.") plays after the contests as one step of
// the round-end card: the step carries both sides (the owner +5, the robbed rival −5), and its followers leave the
// robbed rival's total (stealFrom), not the member card.
import { expect, it } from 'vitest';
import { applyMove } from '../../../engine/v4/index.js';
import { table } from '../../engine/v4/cards-helpers-b.js';
import { afterContestSteps, stealFrom } from '../../../v4/game/Reckoning.jsx';

it('Sore Loser’s round-end step takes from the robbed rival and gives to its owner', () => {
  const s = table(['red', 'market', 'trading', 'yellow'], { n: 3, round: 2, res: [{}, { red: 4, blue: 3 }, { white: 2 }], bonus: [0, 5, 5], members: [['benders.sorelosers']], queue: [{ t: 'buy', p: 1 }, { t: 'endRound' }] });
  const next = applyMove(s, { player: 1, option: 'pass' }, { effects: true });
  expect(next.players[0].bonus).toBe(5);
  const steps = afterContestSteps({ after: next, board: null });
  const sore = steps.find(st => st.rule === 'Sore Loser');
  expect(sore).toBeTruthy();
  expect(sore.deltas).toEqual({ 0: 5, 1: -5 });
  expect(stealFrom(sore)).toBe(1);
});

it('a member step that only gives (no rival loses) flies from the member as before', () => {
  expect(stealFrom({ kind: 'after', winners: [0], rows: [{ id: 0, shown: 3 }] })).toBe(null);
  expect(stealFrom({ kind: 'contest', winners: [0], rows: [{ id: 0, shown: 3 }, { id: 1, shown: -3 }] })).toBe(null);
});
