import { readdirSync, readFileSync } from 'node:fs';
const dir=process.argv[2]||'.econ-n12';
const load=n=>Object.fromEntries(readdirSync(dir).filter(f=>f.startsWith(n+'.')).flatMap(f=>readFileSync(`${dir}/${f}`,'utf8').trim().split('\n').map(l=>JSON.parse(l))).map(g=>[g.game,g]));
const avg=a=>a.reduce((x,y)=>x+y,0)/(a.length||1);
const per=g=>{const ps=g.players.filter((_,i)=>i!==g.buyer);return {fol:avg(ps.map(p=>p.followers)),cards:avg(ps.map(p=>p.cards)),gained:avg(ps.map(p=>p.gained)),win:avg(ps.filter(p=>p.win).map(p=>p.followers)),r1:avg(ps.map(p=>p.recruits[0])),r2:avg(ps.map(p=>p.recruits[1])),r3:avg(ps.map(p=>p.recruits[2]))};};
const T=load('n12_today');
for(const n of ['n12_richer','n12_between','n12_color-1']){const M=load(n);const ks=Object.keys(T).filter(k=>M[k]);
 const out=[];for(const key of ['gained','fol','win','cards','r1','r2','r3']){const d=ks.map(k=>per(M[k])[key]-per(T[k])[key]);const m=avg(d);
 const bs=[];for(let b=0;b<2000;b++){let s=0;for(let i=0;i<d.length;i++)s+=d[Math.floor(Math.random()*d.length)];bs.push(s/d.length);}bs.sort((a,b)=>a-b);
 out.push(`${key} ${m.toFixed(2)} [${bs[100].toFixed(2)},${bs[1899].toFixed(2)}]`);}
 console.log(n,ks.length,out.join(' | '));}
