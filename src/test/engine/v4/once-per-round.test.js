// @vitest-environment node
// Every "once per round" member resets its use at Round Start. Moneylender and Leveler shipped without the reset and
// played as once per game (play judges caught it, Nov 4); this keeps a new card from doing the same.
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';

const DIR = new URL('../../../engine/v4/content/', import.meta.url);
describe('once per round', () => {
  it("every member with activate: 'round' clears its use at Round Start", () => {
    const missing = [];
    for (const f of readdirSync(DIR).filter(n => n.endsWith('.js'))) {
      const lines = readFileSync(new URL(f, DIR), 'utf8').split('\n');
      lines.forEach((l, i) => {
        if (!/activate: 'round'/.test(l)) return;
        const near = lines.slice(Math.max(0, i - 6), i + 4).join('\n');
        if (!/onRoundStart\([^)]*\)\s*\{[^}]*used = false/.test(near)) missing.push(`${f}:${i + 1}`);
      });
    }
    expect(missing).toEqual([]);
  });
});
