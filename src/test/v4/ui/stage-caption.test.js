// A member's stage caption says what this firing did, with the real numbers (picky bot, Nov 4): Fence's +2 read
// "P2: +1" (the effect's place in the stream, not its amount), and Deprogrammers' rival's −1 follower read as its owner's.
import { afterEach, expect, it, vi } from 'vitest';
import { planChain } from '../../../v4/game/director.js';
import { stageShow, stageRelease, stageItems, stageDismiss, stageClear } from '../../../v4/game/stage.js';
import { motionSpeed, setMotionSpeed } from '../../../v4/motion.js';
import { sceneQ } from '../../engine/v4/cards-helpers.js';
import { beforeAll as dockOn, afterAll as dockOff } from 'vitest';
// These check the older dock path (popping notes); the centre story card has its own gates (e2e turnstory, turndock).
let dockHref = '';
dockOn(() => { if (globalThis.history) { dockHref = location.href; history.replaceState(null, '', '?story=dock'); } });
dockOff(() => { if (globalThis.history) history.replaceState(null, '', dockHref); });

const speed = motionSpeed();
afterEach(() => setMotionSpeed(speed));
const captions = effects => {
  setMotionSpeed('steady');
  const before = sceneQ({ quadrants: ['gold', 'silver'] });
  const plan = planChain(before, { ...before, moves: before.moves + 1, effects }, { mine: [0] });
  return plan.atoms.filter(a => a.op === 'stage' && a.kind === 'member').map(a => a.got);
};

it("prints a firing's own payout, not its place in the stream", () => {
  const steal = { kind: 'move', pid: 0, option: 'take:1:silver' };
  const fence = { kind: 'member', pid: 1, uid: 52, def: 'thieves.fence' };
  expect(captions([
    { n: 0, cause: steal, type: 'transfer', from: { kind: 'stack', pid: 1, r: 'silver' }, to: { kind: 'stack', pid: 0, r: 'silver' }, what: { r: 'silver', n: 1 } },
    { n: 1, cause: fence, type: 'gain', from: { kind: 'member', pid: 1, uid: 52 }, to: { kind: 'stack', pid: 1, r: 'silver' }, what: { r: 'silver', n: 2 } },
  ])).toEqual(['P2: +2 silver']);
});

it('names whose followers a member took, not its owner', () => {
  const dep = { kind: 'member', pid: 1, uid: 60, def: 'red.movementpenalty' };
  expect(captions([
    { n: 4, cause: dep, type: 'followers', from: { kind: 'count', pid: 0 }, to: { kind: 'member', pid: 1, uid: 60 }, what: { n: -1 } },
  ])).toEqual(['P2: you −1 follower']);
});

it("sends a lingering member's bubble home at the viewer's next press", () => {
  vi.useFakeTimers();
  try {
    stageClear();
    stageShow({ id: 'member:1:52', chain: 1, kind: 'member', uid: 52, pid: 1, at: { left: 0, top: 0 } });
    stageRelease(10, 1);
    vi.advanceTimersByTime(20);
    expect(stageItems()[0].lingering).toBe(true);
    expect(stageItems()[0].leaving).toBeFalsy();
    stageDismiss();
    expect(stageItems()[0].leaving).toBe(true);
  } finally { stageClear(); vi.useRealTimers(); }
});
