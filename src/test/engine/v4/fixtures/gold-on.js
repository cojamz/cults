// Registers the old Gold sphere for the test file that imports this, and only that file (vitest isolates modules per
// file). Gold is deleted from the game (Cory, 2026-11-24); see fixtures/gold.js.
import { registerQuadrant, quadrant, DEFAULT_QUADRANTS, TEST_TABLE } from '../../../../engine/v4/content/index.js';
import { install as installEcho } from '../../../../engine/v4/content/echo.js';
import gold from './gold.js';

let has = false;
try { has = !!quadrant('gold'); } catch { has = false; }
if (!has) {
  registerQuadrant(gold);
  // as content/index.js does for every sphere at load: Echo wraps each action to record what it gave (idempotent), and
  // the wrapper only runs on a table with Green
  installEcho();
  for (const a of gold.actions) {
    const w = a.resolve;
    if (!w.__echo || w.__gated) continue;
    const gated = function (ctx, p) { return (ctx.state.quadrants.includes('echo') ? w : w.__orig).call(this, ctx, p); };
    Object.assign(gated, { __echo: true, __gated: true, __orig: w.__orig });
    a.resolve = gated;
  }
}
// ...and the default tables those tests were written against, with Gold on them (this file's module copy only)
DEFAULT_QUADRANTS.splice(0, DEFAULT_QUADRANTS.length, 'gold', 'red', 'blue', 'green');
TEST_TABLE.splice(0, TEST_TABLE.length, 'gold', 'red', 'market', 'echo', 'purple', 'yellow');
