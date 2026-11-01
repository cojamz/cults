import { mkdirSync } from 'node:fs';
import { browserPath, launchBrowser } from './browser.mjs';
import { buildStamp } from './stamp.mjs';
import { seedSave } from './seed.mjs';
import { createGame, applyMove, chooseBotMove } from '../../../src/engine/v4/index.js';
const base = process.env.V4_URL || 'http://localhost:5290', out = process.argv[2];
const moves = Number(process.argv[3] || 6);
mkdirSync(out, { recursive: true });
const seats = [{ name: 'Cory', kind: 'human' }, { name: 'Ana', kind: 'bot' }, { name: 'Bo', kind: 'bot' }, { name: 'Max', kind: 'bot' }];
let s = createGame({ seats, quadrants: ['red', 'purple', 'echo', 'market'], seed: 11 });
for (let i = 0; i < 40 && s.pending && s.pending.kind === 'setup'; i++) s = applyMove(s, { player: s.pending.player, option: s.pending.options[0].id });
for (let i = 0; i < moves && s.pending; i++) { const m = chooseBotMove(s, Math.random); s = applyMove(s, m); }
// stop on Cory's turn
for (let i = 0; i < 20 && s.pending && s.pending.player !== 0; i++) { const m = chooseBotMove(s, Math.random); s = applyMove(s, m); }
s.build = buildStamp();
const browser = await launchBrowser({ executablePath: browserPath });
const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 }, deviceScaleFactor: 2 }), p = await ctx.newPage();
await seedSave(p, { config: { seats, speed: 'steady' }, state: s, undo: null, savedAt: Date.now() });
await p.goto(`${base}/?intro=0`);
await p.locator('[data-home="resume"]').click();
const hand = p.locator('[data-handoff]'); if (await hand.isVisible().catch(() => false)) await hand.click();
await p.waitForTimeout(2500);
await p.screenshot({ path: `${out}/table.png` });
const seat = p.locator('.cs-seat, [data-seat]').first();
await browser.close();
