import json,importlib,sys
sys.argv=['x']
import io,contextlib
with contextlib.redirect_stdout(io.StringIO()):
    import gallery
ids=json.load(open('ids.json'))
PFX={'red':['red'],'thieves':['thieves','launder'],'yellow':['yellow'],'market':['market'],'purple':['purple'],'gold':['gold'],'silver':['silver'],'trading':['trading'],'echo':['echo'],'grey':['benders']}
SPH={}
chars=[chr(c) for c in range(33,127) if chr(c) not in '."\\']+[chr(c) for c in range(0xC0,0x250)]
out=[];miss=[]
for name,fn,cf in gallery.SETS:
    for n,v in fn():
        cand=[i for i in ids.get(n,[]) if i.split('.')[0] in PFX[cf]]
        if not cand: miss.append((cf,n,ids.get(n))); continue
        g=v.g; pal={}; rev={}; rows=[]
        for row in g:
            s=''
            for c in row:
                if c is None: s+='.'; continue
                h='#%02x%02x%02x'%tuple(c[:3])
                if h not in rev: k=chars[len(rev)]; rev[h]=k; pal[k]=h
                s+=rev[h]
            rows.append(s)
        for i in cand:
            out.append({'id':i,'name':n,'kind':'member','sphere':i.split('.')[0],'px':rows,'pal':pal,'grid':len(rows)})
print(len(out),'entries; missing:',miss)
json.dump(out,open('members48.json','w'))
