import { browserPath, launchBrowser } from '../e2e/v4/lib/browser.mjs';
// Every painted frame of one click, at 4x CPU: what a player sees, frame by frame, from the press until the table is still.
//   node scripts/v4-click-frames.mjs <base url> <outDir> [extra query, e.g. answer=first]
// The click: your turn from the rich save (e2e/v4/lib/rich-save.mjs): place on Tide, then buy the top follower rate and
// press Pay. Frames come from the browser's own screencast (one per paint), stamped with ms since the press; a strip of
// the first frames goes to <outDir>/strip.png.
import { mkdirSync, writeFileSync } from 'node:fs';
import { richSave } from '../e2e/v4/lib/rich-save.mjs';
const [base, out, query = ''] = process.argv.slice(2);
if (!base || !out) { console.error('usage: node scripts/v4-click-frames.mjs <url> <outDir> [query]'); process.exit(2); }
mkdirSync(out, { recursive: true });
const b = await launchBrowser({ executablePath: browserPath });
const ctx = await b.newContext({ viewport: { width: 1270, height: 700 } });
const p = await ctx.newPage();
await p.goto(`${base}/?intro=0&speed=steady${query ? '&' + query : ''}`);
await p.evaluate(v => localStorage.setItem('patrons.v4.local', JSON.stringify(v)), richSave());
await p.reload();
await (await p.waitForSelector('[data-home="resume"]', { timeout: 20000 })).click();
await p.waitForSelector('.lt[data-phase="place"][data-yours="1"] .slot.can .base', { timeout: 20000 });
await p.waitForTimeout(700);
const tide = await p.evaluateHandle(() => [...document.querySelectorAll('.slot.can')].find(e => /Tide/.test(e.getAttribute('aria-label') || '')) || document.querySelector('.slot.can'));
await (await tide.asElement().$('.base')).click();
for (let k = 0; k < 12 && !(await p.$('.lt[data-phase="buy"][data-yours="1"]')); k++) {
  const opt = await p.$('.lt[data-phase="choose"] .prompt.choice button[data-option]:not([disabled]):not([data-option="pass"]):not(.undo)');
  if (opt) { await p.waitForTimeout(300); await opt.click().catch(() => {}); }
  await p.waitForTimeout(250);
}
await p.waitForFunction(() => !document.querySelector('.app.game').dataset.chain, null, { timeout: 10000 }).catch(() => {});
await p.waitForTimeout(600);
await (await p.waitForSelector('[data-option^="tier:"][data-rate="top"]', { timeout: 8000 })).click();
const go = await p.waitForSelector('.dialog.pay .pay-go[data-option]', { timeout: 3000 });
await p.waitForTimeout(800);
const cdp = await ctx.newCDPSession(p);
await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
const frames = [];
cdp.on('Page.screencastFrame', f => { frames.push({ t: Date.now(), data: f.data }); cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(() => {}); });
await cdp.send('Page.startScreencast', { format: 'png', everyNthFrame: 1 });
await p.waitForTimeout(300);
const box = await go.boundingBox();
const t0 = Date.now();
await p.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
await p.waitForTimeout(900);
await cdp.send('Page.stopScreencast');
const after = frames.filter(f => f.t >= t0 - 20);
after.forEach((f, k) => writeFileSync(`${out}/${String(k).padStart(2, '0')}-${f.t - t0}ms.png`, Buffer.from(f.data, 'base64')));
console.log(`${after.length} frames after the press: ${after.map(f => f.t - t0).join(' ')} ms`);
await b.close();
