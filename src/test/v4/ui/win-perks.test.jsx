// Round end names the members that pay on a contest win (Cory, Nov 4: "is there UI to clearly show when they
// trigger?"), after the contests, in the order the round ends (Cory, Nov 5: "round ends, contests, members.").
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { createGame, applyMove, chooseBotMove } from '../../../engine/v4/index.js';
import { seededRandom } from '../../../engine/v4/rng.js';
import { parseRoundEnd, isRoundEnd, newLogLines } from '../../../v4/format.js';
import RoundEnd from '../../../v4/game/RoundEnd.jsx';
import { reckonSteps } from '../../../v4/game/Reckoning.jsx';

afterEach(cleanup);

describe('contest-win members on the round-end card', () => {
  it('Cheerleaders and Victors pay after the contests, on the card and in the Reckoning', () => {
    const rand = seededRandom(5);
    let s = createGame({ seats: ['Ana', 'Bo', 'Cy'].map(name => ({ name, kind: 'bot' })), seed: 5 });
    let prev = null, move = null;
    for (let k = 0; k < 4000 && !s.over; k++) {
      const m = chooseBotMove(s, rand), next = applyMove(s, m);
      if (newLogLines(s, next).some(isRoundEnd)) { prev = s; move = m; break; }
      s = next;
    }
    expect(prev).toBeTruthy();
    const plain = applyMove(prev, move);
    const winner = plain.contests.at(-1).results.find(r => r.winners.length).winners[0];
    const before = JSON.parse(JSON.stringify(prev));
    const spare = Object.keys(before.cards).map(Number).filter(u => !before.players.some(p => p.members.includes(u)));
    const give = (def, uid) => { before.cards[uid] = { ...before.cards[spare[0]], def, uid }; before.players[winner].members.push(uid); };
    give('benders.cheerleaders', 9001); give('benders.victors', 9002);
    const after = applyMove(before, move, { effects: true });
    const result = parseRoundEnd(after, newLogLines(before, after).filter(isRoundEnd).pop());
    const info = { result, start: before, after, board: after };
    const { container } = render(<RoundEnd info={info} onNext={() => {}} autoMs={0} />);
    const line = container.querySelector('[data-phase="after-contests"]');
    expect(line && line.textContent).toMatch(/Cheerleaders: .*\+\d+ followers/);
    expect(line.textContent).toMatch(/Victors: .*\+\d+ \w+/);
    // the card reads in the order it happens: contests, then the members that answer them
    const contests = container.querySelector('[data-phase="contests"]');
    expect(contests.compareDocumentPosition(line) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    // and the Reckoning plays them after every contest
    const steps = reckonSteps(info);
    const firstAfter = steps.findIndex(r => r.kind === 'after');
    expect(firstAfter).toBeGreaterThan(-1);
    expect(steps.slice(firstAfter).every(r => r.kind === 'after' || r.kind === 'bonus')).toBe(true);
  });
});
