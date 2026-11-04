// @vitest-environment node
// Log audit gate (Cory, 2026-10-22: "every game-state change and why"). Seeded mixed tables, mixed bots: after every
// move, any change to a player's resources, followers or members comes with a new log line naming that player.
// scripts/v4-log-audit.mjs is the long report.
import { describe, it, expect } from 'vitest';
import { auditLog } from './log-audit-runner.js';

describe('the log says every change to a player', () => {
  // one game a test, each with its own time limit: the six together ran past 4 minutes under the full check's load
  // (Nov 1). Same seeds and tables as before.
  for (let g = 0; g < 6; g++) {
    it(`no silent change over seeded game ${g + 1} of 6`, () => {
      const { crashes, gaps } = auditLog({ from: g, games: g + 1 });
      expect(crashes).toEqual([]);
      expect(Object.entries(gaps).map(([k, e]) => `${k}: ${e.ex}`)).toEqual([]);
    }, 240000);
  }
});
