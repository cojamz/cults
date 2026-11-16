import { it, expect } from 'vitest';
import { applyMove } from '../../../engine/v4/index.js';
import { planChain } from '../../../v4/game/director.js';
import { sceneQ, spaceOf } from '../../engine/v4/cards-helpers.js';
import { beforeAll as dockOn, afterAll as dockOff } from 'vitest';
// These check the older dock path (popping notes); the centre story card has its own gates (e2e turnstory, turndock).
let dockHref = '';
dockOn(() => { if (globalThis.history) { dockHref = location.href; history.replaceState(null, '', '?story=dock'); } });
dockOff(() => { if (globalThis.history) history.replaceState(null, '', dockHref); });

it('keeps the producing member as the source when its resources fly from the stage', () => {
  const before = sceneQ({ quadrants: ['silver', 'gold'], members: [['silver.majordomo']] });
  const uid = before.players[0].members[0];
  const after = applyMove(before, { player: 0, option: `slot:${spaceOf(before, 'Toast')}` }, { effects: true });
  const plan = planChain(before, after, { mine: [0] });
  const produced = plan.atoms.filter(a => a.op === 'piece' && a.r === 'silver' && a.from.kind === 'stage' && a.from.uid === uid);
  expect(produced.reduce((n, a) => n + a.n, 0)).toBe(2);
  expect(produced.every(a => a.to.pid === 0)).toBe(true);
});
