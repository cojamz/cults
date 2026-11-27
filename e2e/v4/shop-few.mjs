// Few members left in the shop: each member card keeps the size it has in a full shop (Cory, Nov 24: "when only a few
// cards left in the shop, they extend really long and look weird. member cards never need to change size").
import { mkdirSync } from 'node:fs';
import { browserPath, launchBrowser } from './lib/browser.mjs';
import { buildStamp } from './lib/stamp.mjs';
import { seedSave } from './lib/seed.mjs';
import { createGame } from '../../src/engine/v4/index.js';
import { resume } from '../../src/engine/v4/core.js';
const base=process.env.V4_URL||'http://localhost:5331';
const out=process.env.V4_SHOTS||'/tmp/cults-shop-few';mkdirSync(out,{recursive:true});
const seats=['You','Bo','Cy','Di'].map(name=>({name,kind:'human'}));
function fixture(n){
 let s=createGame({seats,quadrants:['yellow','red','purple','echo'],seed:53});s.pending=null;s.queue=[{t:'buy',p:0}];s.current=0;
 s.players[0].res=Object.fromEntries(s.resources.map(r=>[r,6]));
 const pool=[...s.shop,...s.pile];s.shop=pool.slice(0,n);s.pile=pool.slice(n);s=resume(s);s.build=buildStamp();
 return {config:{seats,speed:'quick'},state:s,undo:null,savedAt:Date.now()};
}
const sizes=(process.env.SIZES||'8,7,6,5,4,3,2,1').split(',').map(Number);
const views=process.env.VIEWS?process.env.VIEWS.split(';').map(v=>v.split('x').map(Number)):[[1270,700],[1600,900]];
const browser=await launchBrowser({executablePath:browserPath});const fails=[];
try{for(const[w,h]of views)for(const view of['compact','details']){let ref=null;for(const n of sizes){
 const ctx=await browser.newContext({viewport:{width:w,height:h}}),p=await ctx.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));
 await seedSave(p,fixture(n));await p.goto(`${base}/?intro=0`);await p.locator('[data-home="resume"]').click();
 const hand=p.locator('[data-handoff]');if(await hand.isVisible())await hand.click();
 await p.locator('.app.game[data-phase="buy"]:not([data-animating])').waitFor();
 if(view==='details')await p.getByRole('button',{name:'Show member abilities'}).click();
 await p.mouse.move(2,2);await p.waitForTimeout(400);
 const cards=await p.locator('.lt-shop .lt-card[data-uid]').evaluateAll(es=>es.map(e=>{const b=e.getBoundingClientRect();return{w:Math.round(b.width),h:Math.round(b.height)}}));
 await p.screenshot({path:`${out}/${w}x${h}-${view}-${n}.png`});
 if(cards.length!==n)fails.push(`${w}x${h} ${view} ${n}: ${cards.length} cards shown`);
 if(!ref)ref=cards[0];
 for(const c of cards)if(Math.abs(c.w-ref.w)>1||Math.abs(c.h-ref.h)>1)fails.push(`${w}x${h} ${view} ${n}: card ${c.w}x${c.h}, full shop ${ref.w}x${ref.h}`);
 if(errors.length)fails.push(errors.join(';'));
 console.log(`${w}x${h} ${view} ${n} members: ${[...new Set(cards.map(c=>`${c.w}x${c.h}`))].join(' ')}`);
 await ctx.close();
}}}finally{await browser.close();}
if(fails.length){console.error([...new Set(fails)].join('\n'));process.exit(1);}
console.log('shop-few: every member card keeps the full shop\'s size');
