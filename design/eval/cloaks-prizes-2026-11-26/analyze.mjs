import fs from 'node:fs';
const D = process.argv[2];
const load = f => fs.existsSync(`${D}/${f}`) ? fs.readFileSync(`${D}/${f}`,'utf8').trim().split('\n').filter(Boolean).map(JSON.parse).filter(r=>!r.stuck) : [];
const sets = { new: [...load('n-new.jsonl'), ...load('n-new2.jsonl')], old: [...load('n-old.jsonl'), ...load('n-old2.jsonl')] };
const prize = { new: [4,6,8], old: [4,6,10] };
const ids = new Set(sets.new.map(r=>r.game)); for (const k of ['old']) { const o=new Set(sets[k].map(r=>r.game)); for (const i of [...ids]) if(!o.has(i)) ids.delete(i); }
for (const k of ['new','old']) {
  const rows = sets[k].filter(r=>ids.has(r.game)); let r3=0, small=0, mem=0, fol=0, n=0, lead=0;
  for (const r of rows) {
    const c3 = r.contests[2] || {}; const minus = r.players.map(()=>0);
    for (const w of Object.values(c3)) { if (!w || !w.length) continue; const v = Math.ceil(prize[k][2] / (w.length>1?2:1)); for (const s of w) minus[s]+=v; }
    const top = Math.max(...r.players.map(p=>p.followers)); const winners = r.players.filter(p=>p.followers===top).map(p=>p.seat);
    const alt = r.players.map(p=>p.followers-minus[p.seat]); const at=Math.max(...alt); const altW = r.players.filter((p,i)=>alt[i]===at).map(p=>p.seat);
    if (!winners.every(s=>altW.includes(s))) r3++;
    const w = r.players.find(p=>p.win); if (w.memberCount<=5) small++;
    const sorted=r.players.map(p=>p.followers).sort((a,b)=>b-a); lead+=sorted[0]-sorted[1];
    for (const p of r.players) { mem+=p.memberCount; fol+=p.followers; n++; }
  }
  console.log(`${k} ${prize[k].join('/')}: games ${rows.length}; round III contests changed the winner ${(100*r3/rows.length).toFixed(0)}%; winner with <=5 members ${(100*small/rows.length).toFixed(0)}%; avg winning margin ${(lead/rows.length).toFixed(1)}; avg members ${(mem/n).toFixed(2)}; avg followers ${(fol/n).toFixed(1)}`);
}
// cloaks on new
const cl = {}; for (const r of sets.new) for (const p of r.players) { if (!p.artifact) continue; const c = cl[p.artifact] ||= {n:0,w:0,f:0}; c.n++; c.w+=p.win?1:0; const avg=r.players.reduce((a,q)=>a+q.followers,0)/r.players.length; c.f+=p.followers-avg; }
console.log('\ncloak | times taken | owner won % (fair 25) | followers vs table average');
for (const [k,c] of Object.entries(cl).sort((a,b)=>b[1].w/b[1].n-a[1].w/a[1].n)) console.log(`${k} | ${c.n} | ${(100*c.w/c.n).toFixed(0)}% ±${(100*1.96*Math.sqrt(0.25*0.75/c.n)).toFixed(0)} | ${(c.f/c.n>=0?'+':'')}${(c.f/c.n).toFixed(1)}`);
