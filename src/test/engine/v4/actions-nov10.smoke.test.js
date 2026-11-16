// Nov 10 action changes (Cory: "those will be the live actions in both test and other version"): seeded games on tables
// with the reworked colors, bots, random movers and mixed seats, plain and the test version, every invariant checked.
import { describe, it } from 'vitest';
import { runTable } from './fuzz-tables-runner.js';

const TABLES = [
  ['red', 'market', 'echo', 'purple'],
  ['thieves', 'red', 'market', 'echo'],
  ['purple', 'thieves', 'market', 'red'],
  ['echo', 'purple', 'thieves', 'red'],
];
describe('Nov 10 actions play through', () => {
  for (const quadrants of TABLES) for (const kind of ['bot', 'random', 'mixed']) for (const testSet of [false, true]) for (const n of [2, 4]) {
    it(`${quadrants.join(',')} ${kind} ${n} seats${testSet ? ' (test version)' : ''}`, () => {
      for (const seed of [1, 2, 3]) runTable({ quadrants, n, seed, kind, rules: testSet ? { testSet: true } : undefined });
    }, 120000);
  }
});
