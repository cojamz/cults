// PIN (test-only switch for A/B sheet games, Lab, Nov 4): a listed member goes to the top of the deck when its own deck
// round starts, so it shows in that round's shop. Read when the engine loads, so each case loads its own engine.
import { describe, it, expect, vi, afterEach } from 'vitest';

const seats = n => Array.from({ length: n }, (_, i) => ({ name: `P${i + 1}`, kind: 'bot' }));
const TABLE = ['red', 'purple', 'market', 'yellow'];
async function engine(pin) {
  vi.resetModules();
  if (pin) process.env.PIN = pin; else delete process.env.PIN;
  return import('../../../engine/v4/core.js');
}
afterEach(() => { delete process.env.PIN; vi.resetModules(); });
const shopDefs = s => s.shop.map(u => s.cards[u].def);
// play bots until round r has started
async function toRound(core, s, r) {
  const { chooseBotMove } = await import('../../../engine/v4/bots.js');
  const { seededRandom } = await import('../../../engine/v4/rng.js');
  const rand = seededRandom(7);
  let n = 0;
  while (!s.over && s.round < r && n++ < 3000) s = core.applyMove(s, chooseBotMove(s, rand, { level: 'easy' }));
  return s;
}

describe('PIN', () => {
  it('off: the deal is unchanged', async () => {
    const a = (await engine('')).createGame({ seats: seats(4), seed: 11, quadrants: TABLE, rules: { deck: 10 } });
    const b = (await engine('')).createGame({ seats: seats(4), seed: 11, quadrants: TABLE, rules: { deck: 10 } });
    expect(shopDefs(a)).toEqual(shopDefs(b));
  });
  it('a listed round I member is in the round I shop on every seed where it is in the game', async () => {
    const core = await engine('purple.picketline');
    let seen = 0;
    for (let seed = 1; seed <= 20; seed++) {
      const s = core.createGame({ seats: seats(4), seed, quadrants: TABLE, rules: { deck: 10 } });
      const inGame = Object.values(s.cards).some(c => c.def === 'purple.picketline');
      if (!inGame) continue;
      seen++;
      expect(shopDefs(s)).toContain('purple.picketline');
    }
    expect(seen).toBeGreaterThan(0);
  });
  it('a listed later-round member is in the shop when its round starts', async () => {
    const core = await engine('');
    const probe = core.createGame({ seats: seats(4), seed: 5, quadrants: TABLE, rules: { deck: 10 } });
    const [r, list] = Object.entries(probe.waiting).find(([, l]) => l.length);
    const key = probe.cards[list[list.length - 1]].def;
    const pinned = await engine(key);
    let s = pinned.createGame({ seats: seats(4), seed: 5, quadrants: TABLE, rules: { deck: 10 } });
    expect(shopDefs(s)).not.toContain(key);
    s = await toRound(pinned, s, Number(r));
    expect(shopDefs(s)).toContain(key);
  });
});
