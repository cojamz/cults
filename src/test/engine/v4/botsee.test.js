// @vitest-environment node
// BOTSEE=1 bot test (Nov 3; /mnt/project-files/replacements/why-unbought.md): a Normal bot weighing a buy credits an On
// Use member with what using it would gain (fix A), and the passive and Round End members carry their own estimate
// (fix B). The switch is read when the engine loads, so each half loads its own engine (resetModules), then clears it.
import { describe, it, expect, vi } from 'vitest';

const SWITCHES = ['REPLACE1', 'REPLACE2', 'REPLACE4', 'REPLACE5'];
async function engine(on) {
  vi.resetModules();
  for (const k of SWITCHES) process.env[k] = '1';
  if (on) process.env.BOTSEE = '1'; else delete process.env.BOTSEE;
  const bots = await import('../../../engine/v4/bots.js');
  const { defById } = await import('../../../engine/v4/content/index.js');
  const { table } = await import('./cards-helpers-b.js');
  const { resume } = await import('../../../engine/v4/core.js');
  const { stray } = await import('./stray.js');
  delete process.env.BOTSEE; for (const k of SWITCHES) delete process.env[k];
  return { ...bots, defById, table, resume, stray };
}

// Round II, P1 to buy: Mirror Image in the shop, and a rival holding 14 white it could match right away
// (made up on the spot: a hand-built table deals only part of each color's deck)
const mirrorTable = ({ table, resume, stray }) => {
  const s = table(['red', 'echo', 'trading', 'yellow'], { n: 4, round: 2, res: [{ green: 8, red: 4 }, { white: 14, green: 2 }],
    queue: [{ t: 'buy', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 2 }, { t: 'turn', p: 3 }, { t: 'turn', p: 0 }] });
  s.shop.push(stray(s, 'echo.mirrorimage'));
  s.queue.unshift({ t: 'buy', p: 0 }); // the buy step again, now with Mirror Image on offer
  return resume(s);
};
// the best way to pay for the member, as the bot rates it
const recruitValue = (scoreOptions, s, uid) => Math.max(...scoreOptions(s, () => 0).filter(r => r.o.uid === uid && r.o.kind !== 'use').map(r => r.v));

describe('BOTSEE: a bot sees what a member does when it weighs buying it', () => {
  it('values Mirror Image (On Use) above the effect-blind formula', async () => {
    const off = await engine(false);
    const s0 = mirrorTable(off);
    const uid = s0.shop.find(u => s0.cards[u].def === 'echo.mirrorimage');
    const blind = recruitValue(off.scoreOptions, s0, uid);
    const on = await engine(true);
    const s1 = mirrorTable(on);
    const seen = recruitValue(on.scoreOptions, s1, uid);
    // using it next turn takes P1 from its few white to 14: far more than 2 × cost × placements left / 12
    expect(seen).toBeGreaterThan(blind + 3);
  });

  it('gives the passive and Round End members an estimate from the game, and none without the switch', async () => {
    const ids = ['thieves.secondstory', 'market.lateshoppers', 'echo.openingact', 'thieves.vultures', 'thieves.skimmers', 'thieves.racketeers', 'thieves.jackals', 'yellow.nightmarket'];
    const off = await engine(false);
    for (const id of ids) expect(off.defById(id)?.botValue).toBeUndefined();
    const on = await engine(true);
    const s = mirrorTable(on);
    for (const id of ids) {
      const d = on.defById(id);
      expect(typeof d.botValue).toBe('function');
      const v = on.abilityValue(d, 7, undefined, s, 0);
      expect(Number.isFinite(v)).toBe(true);
      expect(v).toBeGreaterThanOrEqual(0);
    }
    // Second-Story Men in round II: two round ends of steals ahead, worth more than one
    const ssm = on.defById('thieves.secondstory');
    expect(on.abilityValue(ssm, 7, undefined, s, 0)).toBeGreaterThan(on.abilityValue(ssm, 3, undefined, { ...s, round: 3 }, 0));
  });
});
