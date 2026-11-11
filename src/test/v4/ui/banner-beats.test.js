// The story banner shows each line as its beat starts on the board, and a line already up keeps its words: what a later
// step adds to it joins as a line of its own (frame review, Nov 7: lines came 1.5-9 s after the coins they told; "+1 green
// +2 red" was rewritten to "+5 red +2 pink" under the reader).
import { afterEach, expect, it } from 'vitest';
import { planChain } from '../../../v4/game/director.js';
import { grewBy } from '../../../v4/game/GameScreen.jsx';
import { motionSpeed, setMotionSpeed } from '../../../v4/motion.js';
import { sceneQ } from '../../engine/v4/cards-helpers.js';

const speed = motionSpeed();
afterEach(() => setMotionSpeed(speed));
const stack = (pid, r) => ({ kind: 'stack', pid, r });

it('notes when each cause starts, in order, inside the chain', () => {
  setMotionSpeed('relaxed');
  const before = sceneQ({ quadrants: ['gold', 'silver'] });
  const action = { kind: 'space', pid: 0, key: '0-0' }, m = { kind: 'member', pid: 0, uid: 101, def: 'silver.majordomo' };
  const plan = planChain(before, { ...before, moves: before.moves + 1, effects: [
    { type: 'gain', cause: action, from: action, to: stack(0, 'gold'), what: { r: 'gold', n: 2 } },
    { type: 'gain', cause: m, from: m, to: stack(0, 'silver'), what: { r: 'silver', n: 1 } },
  ] }, { mine: [1] });
  expect(plan.beats).toHaveLength(2);
  expect(plan.beats[1]).toBeGreaterThan(plan.beats[0]);
  expect(plan.beats[1]).toBeLessThan(plan.total);
  // the member's beat starts when its piece leaves, never seconds later
  const member = plan.atoms.filter(a => a.op === 'piece' && a.from && a.from.uid === 101);
  expect(member.length).toBeGreaterThan(0);
  expect(Math.min(...member.map(a => a.at)) - plan.beats[1]).toBeLessThan(400);
});

it('tells what a later step adds to a line that is up as a line of its own', () => {
  expect(grewBy('copied Tryout: +1 green +2 red', 'copied Tryout: +1 green +5 red +2 pink (3 red, 2 pink from P4)'))
    .toBe('copied Tryout: +3 red +2 pink (3 red, 2 pink from P4)');
  expect(grewBy('+1 green', '+3 green')).toBe('+2 green');
  expect(grewBy('P2 +1 follower', 'P2 +3 followers')).toBe('P2 +2 followers');
  // nothing more: the line keeps its words
  expect(grewBy('Blue Cloak: +1 blue', 'Blue Cloak: +1 blue')).toBe('');
  // not more of the same (a loss, a re-wording): re-worded in place
  expect(grewBy('P2 +2 red', 'P2 +1 red')).toBe(null);
  expect(grewBy('+3 gold from P2', '+5 gold from P2 and P3')).toBe(null);
});

it("the space's own gain counts up on one row as its picks land (Cory, Nov 9: Out of Style on grey)", async () => {
  const { foldStoryLines, linesMemo } = await import('../../../v4/game/GameScreen.jsx');
  const r = linesMemo('t');
  let out = foldStoryLines(r, ['+2 blue'], 0);
  for (const step of [['+6 blue'], ['+7 blue'], ['+8 blue'], ['+8 blue +1 white'], ['+9 blue +1 white']]) out = foldStoryLines(r, step, out.lines.length);
  expect(out.lines).toEqual(['+9 blue +1 white']);
  // a member's or cloak's line that grows still joins as a line of its own
  const c = linesMemo('c');
  let o = foldStoryLines(c, ['+1 green', 'Blue Cloak: +1 blue'], 0);
  o = foldStoryLines(c, ['+1 green', 'Blue Cloak: +2 blue'], o.lines.length);
  expect(o.lines).toEqual(['+1 green', 'Blue Cloak: +1 blue', 'Blue Cloak again: +1 blue']);
});
