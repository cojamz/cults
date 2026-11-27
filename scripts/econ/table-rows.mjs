import { readdirSync, readFileSync } from 'node:fs';
const dir=process.env.DIR||'.econ-n12';
const slug=n=>n.replace(/[^a-z0-9+=-]+/gi,'_');
const avg=a=>a.reduce((x,y)=>x+y,0)/(a.length||1);
const load=n=>readdirSync(dir).filter(f=>f.startsWith(slug(n)+'.')).flatMap(f=>readFileSync(`${dir}/${f}`,'utf8').trim().split('\n').map(l=>JSON.parse(l))).filter(g=>g.over);
const out={};
for(const n of process.argv.slice(2)){const G=load(n);const ps=G.flatMap(g=>g.players.filter((_,i)=>i!==g.buyer));const ws=G.flatMap(g=>g.players.filter((p,i)=>p.win&&i!==g.buyer));
const looks=ps.reduce((a,p)=>a+p.buyLooks,0);
out[n]={games:G.length,r:[0,1,2].map(k=>avg(ps.map(p=>p.recruits[k]))),members:avg(ps.map(p=>p.cards)),price:avg(ps.map(p=>p.avgPrice).filter(x=>x!=null)),
dead:100*ps.reduce((a,p)=>a+p.dead,0)/looks,left:avg(ps.map(p=>((p.leftover[0]??0)+(p.leftover[1]??0))/2)),earned:avg(ps.map(p=>p.gained)),
boughtShare:100*avg(ps.map(p=>p.folBought))/avg(ps.map(p=>p.followers)),fol:avg(ps.map(p=>p.followers)),win:avg(ws.map(p=>p.followers)),
lead:avg(G.map(g=>g.spread)),small:100*ws.filter(p=>p.cards<=5).length/ws.length,comeback:100*avg(G.map(g=>g.lastAfterR2Won?1:0))};}
console.log(JSON.stringify(out,null,0));
