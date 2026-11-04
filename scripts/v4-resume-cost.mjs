// Opening a saved game: how long the Resume click waits and the longest task after it, at RATE x CPU (default 4).
// Nov 4: GitHub timed out clicking Resume (10s) in four gates; here at 4x one task after Resume takes ~4.3s (Wheel measure,
// rim pictures, sound unlock). Usage: URL=http://localhost:<port> [RATE=4] node scripts/v4-resume-cost.mjs
import { chromium } from 'playwright';
import { seedSave } from '../e2e/v4/lib/seed.mjs';
import { buildStamp } from '../e2e/v4/lib/stamp.mjs';
import { createGame } from '../src/engine/v4/index.js';
import { resume } from '../src/engine/v4/core.js';
const seats=['You','Bo','Cy','Di'].map(name=>({name,kind:'human'}));
let s=createGame({seats,seed:53,quadrants:['gold','red','market','echo']});
s.pending=null;s.round=3;s.slots={};s.squats={};s.queue=[{t:'buy',p:0},{t:'turn',p:0}];s.players.forEach(p=>{p.left=3;p.res=Object.fromEntries(s.resources.map(r=>[r,6]));});
s=resume(s); s.build=buildStamp();
const save={config:{seats,speed:'quick'},state:s,undo:null,savedAt:Date.now()};
const b = await chromium.launch({ executablePath: process.env.V4_BROWSER || '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1270, height: 700 } });
const cdp = await p.context().newCDPSession(p); await cdp.send('Emulation.setCPUThrottlingRate', { rate: Number(process.env.RATE || 4) });
await seedSave(p, save);
await p.addInitScript(() => { window.__lt = []; new PerformanceObserver(l => { for (const e of l.getEntries()) window.__lt.push(Math.round(e.duration)); }).observe({ type: 'longtask', buffered: true }); });
await p.goto(`${process.env.URL||'http://localhost:5293'}/?intro=0&speed=quick`);
await p.locator('[data-home="resume"]').waitFor();
await p.waitForTimeout(1500);
await p.evaluate(() => { window.__lt = []; });
const t0 = Date.now();
await p.locator('[data-home="resume"]').click({ timeout: 60000 });
console.log('click took', Date.now() - t0, 'ms');
await p.waitForTimeout(4000);
const lt = await p.evaluate(() => window.__lt);
console.log('long tasks after resume:', lt.length, 'max', Math.max(0, ...lt), 'sum', lt.reduce((a, b) => a + b, 0));
await b.close();
