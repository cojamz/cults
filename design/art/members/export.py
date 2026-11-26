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
# the test version's members (dealt by default since Nov 11), drawn Nov 25
import new7
NEW7={'Purifiers':'benders.purifiers','Gift Swappers':'benders.giftswappers','Mutineers':'benders.mutineers','Protesters':'benders.protesters','Monks':'trading.anchorites','Old Guard':'trading.oldguard','Repossessors':'market.repossessors'}
import new8
NEW7.update({'Innkeeper':'red.innkeeper','Wet Nurse':'red.wetnurse','Chapman':'red.chapman','Hoarder':'thieves.hoarder','Bargainer':'market.bargainer','Beggar':'silver.beggar','Night Porter':'purple.nightporter','Pilgrims':'yellow.pilgrims'})
import new3
NEW7.update({'Shirker':'purple.shirker','Cutthroats':'thieves.cutthroats','Drifters':'yellow.drifters'})
import new4
NEW7.update({'Lackey':'echo.lackey','Mendicant':'trading.mendicant','Evictors':'trading.evictors'})
import new5
NEW7.update({'Spice Merchant':'yellow.tourists'})
import new10  # Nov 25 renames, drawn for the new names (new9's Forestallers picture is retired)
NEW7.update({'Firstborn':'market.doorbusters','Market Sweeper':'market.restocker','Penny-Pincher':'market.regular','Laggard':'purple.lastcallers','Alchemists':'yellow.bookcooker'})
import new11  # Nov 26: Cory's yeses
NEW7.update({'Rabble-Rousers':'red.rabblerousers','Go-Between':'market.gobetween','Rummager':'thieves.rummager'})
for n,v in new7.ALL()+new8.ALL()+new3.ALL()+new4.ALL()+new5.ALL()+new10.ALL()+new11.ALL():
    pal={}; rev={}; rows=[]
    for row in v.g:
        s2=''
        for c in row:
            if c is None: s2+='.'; continue
            h='#%02x%02x%02x'%tuple(c[:3])
            if h not in rev: k=chars[len(rev)]; rev[h]=k; pal[k]=h
            s2+=rev[h]
        rows.append(s2)
    i=NEW7[n]; out.append({'id':i,'name':n,'kind':'member','sphere':i.split('.')[0],'px':rows,'pal':pal,'grid':len(rows)})
print(len(out),'entries; missing:',miss)
json.dump(out,open('members48.json','w'))
