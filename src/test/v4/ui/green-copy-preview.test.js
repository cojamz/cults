// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { defById, quadrant } from '../../../engine/v4/index.js';
import { table } from '../../engine/v4/cards-helpers-b.js';
import { take, move } from '../../engine/v4/helpers.js';
import { memberCopyTargets, ownCopyPlan, copiesAll, copyAllPlan } from '../../../v4/game/cards.js';

describe('Green hover targets follow the current rules', () => {
  it('Stunt Double highlights the action just taken, Agents or not (Agents only stops rivals)', () => {
    const s = take(table(['gold', 'echo'], { shop: ['echo.agents'] }), 'gold.rush');
    const key = Object.keys(s.slots)[0];
    expect(memberCopyTargets(s, 0, defById('echo.hourglass'))).toEqual([key]);
    const agents = s.shop.find(u => s.cards[u].def === 'echo.agents');
    s.shop = s.shop.filter(u => u !== agents);
    s.players[0].members.push(agents);
    expect(memberCopyTargets(s, 0, defById('echo.hourglass'))).toEqual([key]);
  });

  it('Greatest Hits and Tribute Band highlight owned copy actions too', () => {
    let s = table(['gold', 'echo'], { round: 3, queue: [0, 1, 0].map(p => ({ t: 'turn', p })) });
    s = move(take(s, 'gold.rush'), 'pass');
    s = take(s, 'echo.echo');
    s = move(s, s.pending.options[0].id);
    const echoKey = Object.keys(s.slots).find(k => s.slots[k] === 1);
    expect(ownCopyPlan(s, 1).keys).toContain(echoKey);
    expect(ownCopyPlan(s, 1).skips).not.toMatch(/never copy a copy/);
    expect(copiesAll(defById('echo.dejavu').text)).toBe(true);
    // Tribute Band lights every rival's actions it could pick (Cory, 2026-10-28), not the viewer's
    s.players[1].bonus = 5;
    expect(copyAllPlan(s, 0, defById('echo.dejavu').text).keys).toEqual(ownCopyPlan(s, 1).keys);
  });
});

// Cory, Nov 4: "hovering over copy a rival members on recruit should show you the available options in the hover over"
const act = (q, name) => quadrant(q).actions.find(a => a.name === name).text;
describe('Copy-a-member hovers list the choices the card would offer', () => {
  it('Sample lists exactly the rival members its choice offers', async () => {
    const { copyChoices } = await import('../../../v4/game/cards.js');
    const s0 = table(['gold', 'echo'], { round: 2, members: [[], ['echo.evergreen', 'echo.agents', 'echo.hourglass']] });
    const cc = copyChoices(s0, 0, act('echo', 'Sample'));
    expect(cc.label).toBe('Could copy');
    expect(cc.list.map(x => x.def.name)).toEqual(['Busker']);
    expect(cc.list[0].owner.id).toBe(1);
    const s = take(s0, 'echo.encore');
    expect(s.pending.options.map(o => o.value)).toEqual(cc.list.map(x => x.uid));
  });
  it('Greatest Hits, Tryout, Impostors and Doppelganger name their options; other cards none', async () => {
    const { copyChoices } = await import('../../../v4/game/cards.js');
    const s = table(['red', 'echo'], { round: 3, members: [['echo.evergreen'], ['echo.connector']], shop: ['echo.evergreen', 'echo.connector'] });
    expect(copyChoices(s, 0, act('echo', 'Greatest Hits')).list.map(x => x.def.name)).toEqual(['Busker']);
    expect(copyChoices(s, 0, act('red', 'Tryout')).label).toBe('Could use');
    expect(copyChoices(s, 0, defById('echo.impostor').text).list.map(x => x.owner.id)).toEqual([1]);
    expect(copyChoices(s, 0, defById('echo.doppel').text).list.map(x => x.def.name)).toEqual(['Busker']);
    expect(copyChoices(s, 0, defById('echo.connector').text)).toBe(null);
  });
});
