// Round end names the members that pay on a contest win under each winner (Cory, Nov 4: "is there UI to clearly show
// when they trigger? might be awkward since in theory it happens the same time as round end scoring animations").
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { createGame, applyMove, chooseBotMove } from '../../../engine/v4/index.js';
import { seededRandom } from '../../../engine/v4/rng.js';
import { parseRoundEnd, isRoundEnd } from '../../../v4/format.js';
import RoundEnd from '../../../v4/game/RoundEnd.jsx';

afterEach(cleanup);

describe('contest-win members on the round-end card', () => {
  it('Cheerleaders and Victors are named under the contest their owner won', () => {
    const rand = seededRandom(5);
    let s = createGame({ seats: ['Ana', 'Bo', 'Cy'].map(name => ({ name, kind: 'bot' })), seed: 5 }), before = s;
    for (let k = 0; k < 4000 && !s.over; k++) { before = s; s = applyMove(s, chooseBotMove(s, rand)); }
    const result = parseRoundEnd(s, s.log.filter(isRoundEnd).pop());
    const row = result.rows.find(r => r.winners.length);
    const w = s.players[row.winners[0]];
    s.cards[9001] = { ...s.cards[w.members[0] ?? Object.keys(s.cards)[0]], def: 'benders.cheerleaders', uid: 9001 };
    s.cards[9002] = { ...s.cards[9001], def: 'benders.victors', uid: 9002 };
    w.members = [...w.members, 9001, 9002];
    const { container } = render(<RoundEnd info={{ result, start: before, after: s, board: s }} onNext={() => {}} autoMs={0} />);
    const perks = [...container.querySelectorAll(`[data-qid="${row.qid}"] [data-win-perk]`)].map(e => e.textContent);
    expect(perks[0]).toBe('Cheerleaders: +2 followers');
    expect(perks[1]).toMatch(/^Victors: \+2 \w+$/);
  });
});
