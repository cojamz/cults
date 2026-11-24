import random,json,re,sys,importlib
from kit import *
COL={'blu':('market','BLUE','the market: the shop, the discard pile, recruiting again'),
 'pur':('purple','PURPLE','time and turn order: extra minions, going first or last, turns in a row'),
 'gol':('gold','GOLD','money and gold'),
 'sil':('silver','SILVER','giving silver away, buying followers, charity and its abuse'),
 'whi':('trading','WHITE (cream/off-white)','letting members go: discarding, giving members away, solitude'),
 'grn':('echo','GREEN','copying: copying actions and members'),
 'gry':('grey','GREY (these are colorless guest members that bend a rule)','bending a rule')}
def run(k):
    mod=importlib.import_module(k); figs=mod.ALL()
    names=[n for n,_ in figs]
    cards={}
    for l in open('cards-%s.txt'%COL[k][0]):
        m=re.match(r'\s*· (.+?) \[(.+?)\] (.*)',l)
        if m and m.group(1) in names: cards[m.group(1)]=(m.group(2),m.group(3))
    random.seed(7); random.shuffle(figs)
    json.dump({i+1:n for i,(n,_) in enumerate(figs)},open('j%s.key.json'%k,'w'))
    sc=4;pad=20;cw=N*sc+pad;cols=6;ch=N*sc+70;rws=(len(figs)+cols-1)//cols
    out=Image.new('RGB',(pad+cols*cw,pad+rws*ch),hx('#2a1f19'));d=ImageDraw.Draw(out)
    f=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',22)
    for i,(n,v) in enumerate(figs):
        x=pad+(i%cols)*cw;y=pad+(i//cols)*ch
        im=v.img(sc);out.paste(im,(x,y),im); s=v.img(1);out.paste(s,(x+40,y+N*sc+10),s)
        d.text((x,y+N*sc+18),str(i+1),font=f,fill=hx('#f3e6d0'))
    out.save('j%s.png'%k)
    lines=[]
    for n in sorted(names):
        price,txt=cards.get(n,('?','(text not found)'))
        cnt=re.search(r'counts as (\d)',price)
        if n in ('Moneychangers','Trumpeters'): cnt=re.match('x','x'); c='3'
        elif n in ('Dabblers','Weeders','Robbers'): c='2'
        else: c=cnt.group(1) if cnt else None
        lines.append('%s%s: %s'%(n,' (counts as %s, so shows %s people)'%(c,c) if c else '',txt))
    b=open('briefm.md').read()
    st=b.index('Cards (name'); en=b.index('Open SHEET')
    b=b[:st]+'Cards (name: what it does):\n'+'\n'.join(lines)+'\n\n'+b[en:]
    b=b.replace("MAGENTA members (magenta's theme: thieves and stealing)","%s members (theme: %s)"%(COL[k][1],COL[k][2])).replace('a magenta member','a %s member'%COL[k][1].split()[0].lower()).replace('reads as MAGENTA','reads as %s'%COL[k][1].split()[0]).replace('A card that counts as 2 members shows two people; others show one.','A card that counts as more than 1 member shows that many people; others show one.')
    open('brief%s.md'%k,'w').write(b)
for k in sys.argv[1:]: run(k); print(k,'ok')
