// @vitest-environment node
// Counterfeiters (Cory, Nov 5: "something aggressive, like once per round turn all of a rivals resources into one color").
import { describe, it, expect } from 'vitest';
import { table, uidIn } from './cards-helpers-b.js';
import { move } from './helpers.js';

const Q = ['yellow', 'red', 'market', 'thieves'];
describe('Counterfeiters: "On Use, once per round: turn all of a rival\'s resources into one color you choose."', () => {
  it('turns every resource of the chosen rival into the chosen color, once a round', () => {
    let s = table(Q, { n: 3, round: 2, members: [['yellow.dyejob']], res: [{}, { red: 3, blue: 2, magenta: 1 }, { yellow: 4 }] });
    const u = uidIn(s, 'yellow.dyejob', 0);
    s = move(s, `use:${u}`);
    expect(s.pending.prompt).toBe('Counterfeiters: whose resources?');
    s = move(s, 'player:1');
    expect(s.pending.prompt).toBe("Counterfeiters: turn all of P2's resources into which color?");
    s = move(s, 'color:yellow');
    expect(s.players[1].res).toMatchObject({ red: 0, blue: 0, magenta: 0, yellow: 6 });
    expect(s.players[2].res.yellow).toBe(4);
    expect(s.cards[u].used).toBe(true);
    expect(s.log.some(l => l === "P1's Counterfeiters: all of P2's resources are yellow now (6 changed).")).toBe(true);
  });
  it('with no rival holding anything: nothing happens and it stays ready', () => {
    let s = table(Q, { n: 2, round: 2, members: [['yellow.dyejob']] });
    const u = uidIn(s, 'yellow.dyejob', 0);
    s = move(s, `use:${u}`);
    expect(s.cards[u].used).toBe(false);
  });
});
