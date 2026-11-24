from parts import *
C='gr'; p=P(C)
def mimics():
    v=V(); legs(v,ramp='dark'); p.body(v,belt=False)
    for y in range(22,40,3): [v.px(x,y,hx('#f6eedb')) for x in range(12,29) if v.g[y][x]]
    v.rect(13,31,28,32,'dark',flat=True)
    # white-faced mime, both palms flat on an invisible pane
    v.poly([(13,20),(8,16),(6,10),(9,9),(12,16)],C); v.ell(7,8,2.4,2.4,'white')
    v.poly([(27,20),(32,16),(34,10),(31,9),(28,16)],C); v.ell(33,8,2.4,2.4,'white')
    for y in range(4,14,2): v.px(3,y,v.col('blue',0)); v.px(37,y,v.col('blue',0))
    v.rect(17,16,23,19,'white')
    v.face(20,4,13,13,skin='white',ey=10,mouth=False,blush=False)
    v.px(16,8,INK); v.px(17,8,INK); v.px(23,8,INK); v.px(24,8,INK)
    v.rect(19,13,21,13,'red',flat=True); v.px(18,12,v.col('red',1)); v.px(22,12,v.col('red',1))
    v.rect(13,3,27,5,'dark'); v.ell(20,3,6,2,'dark'); v.ell(25,2,1.4,1.4,'red')
    v.inner(C,'white')
    return v.thick()
def gardeners():
    v=V(); legs(v); p.body(v,belt=False)
    v.poly([(15,24),(25,24),(26,40),(14,40)],'brown',flat=True)
    # watering can tipping onto a row of sprouts
    p.armR(v,31,24); v.ell(35,26,4,3.4,'grey'); v.poly([(38,24),(44,20),(45,21),(39,27)],'grey'); v.rect(33,21,36,22,'grey')
    for (x,y) in [(45,24),(44,27),(46,29)]: v.px(x,y,v.col('blue',0))
    for x in (34,39,44):
        v.rect(x,42,x,45,'green',flat=True); v.px(x-1,42,v.col('green',0)); v.px(x+1,41,v.col('green',0))
    v.rect(30,46,47,47,'brown')
    p.armL(v,8,30)
    head(v,mouth=False); smile(v)
    v.ell(20,4,11,3,'cloth'); v.ell(20,2.5,6,3,'cloth'); v.ell(25,3,1.6,1.4,'red')
    v.inner(C,'skin'); v.inner(C,'brown')
    return v.thick()
def druids():
    v=V(); legs(v,ramp='brown',boot='brown'); p.body(v,belt=False,bot=44,w=8)
    v.rect(12,31,29,32,'gold',flat=True)
    # oak-leaf crown, long white beard, golden sickle, sprig of mistletoe
    p.armR(v,32,22); v.line(32,22,32,28,v.col('brown',1)); 
    for (x,y) in [(33,20),(35,18),(37,17),(39,18),(40,20)]: v.px(x,y,v.col('gold',1)); v.px(x,y+1,v.col('gold',0))
    p.armL(v,8,28); v.ell(7,24,2.4,2,'green'); v.px(6,24,hx('#ffffff')); v.px(8,23,hx('#ffffff'))
    head(v,top=5,mouth=False)
    beard(v,'grhair',top=14,bot=28,w=6); v.rect(16,13,24,14,'grhair')
    v.ell(20,6,7,3,'grhair',clip=lambda x,y:y<=7)
    for x in range(12,29,3): v.ell(x,5,1.8,1.4,'green')
    v.inner(C,'skin'); v.inner(C,'grhair')
    return v.thick()
def understudy():
    v=V(); legs(v,ramp='dark'); p.body(v)
    # holding the lead's mask up to their face, script in the other hand
    p.armL(v,7,30); v.rect(3,26,9,34,'white'); for_=[v.rect(4,y,8,y,'grey',flat=True) for y in (28,30,32)]
    head(v,mouth=False)
    p.armR(v,30,14)
    v.ell(25,10,5,5.4,'gold'); v.rect(22,8,24,9,'dark',flat=True); v.rect(26,8,28,9,'dark',flat=True)
    for x in range(22,29): v.px(x,13,v.col('gold',3))
    v.px(21,12,v.col('gold',3)); v.px(29,12,v.col('gold',3))
    v.line(26,15,29,15,v.col('brown',1))
    hair(v,'hair')
    v.inner(C,'skin')
    return v.thick()
def chorus():
    v=V(); legs(v,ramp='dark'); p.body(v,belt=False,bot=42)
    v.rect(13,19,27,22,'white')
    # singing from an open songbook, notes rising
    v.poly([(13,21),(17,27),(19,26),(16,21)],C); v.poly([(27,21),(23,27),(21,26),(24,21)],C)
    v.poly([(13,24),(20,26),(27,24),(27,31),(20,33),(13,31)],'red'); v.poly([(14,25),(19,27),(19,31),(14,30)],'white',flat=True); v.poly([(21,27),(26,25),(26,30),(21,31)],'white',flat=True)
    v.ell(13,27,1.6,1.6,'skin'); v.ell(27,27,1.6,1.6,'skin')
    head(v,mouth=False)
    v.ell(20,14,1.6,1.6,'dark',flat=True)
    for (x,y) in [(16,10),(17,10),(23,10),(24,10)]: v.px(x,y,v.col('skin',3))
    hair(v,'ginger'); v.ell(13,9,1.6,3,'ginger'); v.ell(27,9,1.6,3,'ginger')
    for (x,y) in [(30,6),(35,2)]:
        v.ell(x,y+4,1.6,1.2,'dark'); v.rect(x+1,y,x+1,y+4,'dark',flat=True); v.px(x+2,y,v.col('dark',1))
    v.inner(C,'skin'); v.inner(C,'white')
    return v.thick()
def forger():
    v=V(); legs(v,ramp='dark'); p.body(v,belt=False)
    v.rect(13,31,28,32,'brown',flat=True)
    # two identical sealed papers, one in each hand, sly side-glance
    for (x,arm) in [(2,lambda: p.armL(v,8,24)),(33,lambda: p.armR(v,33,24))]:
        arm(); v.rect(x,14,x+8,24,'white'); 
        for y in (16,18,20): v.rect(x+1,y,x+7,y,'grey',flat=True)
        v.ell(x+5,21.5,2.2,2.2,'red'); v.px(x+5,21,v.col('red',3))
    head(v,mouth=False)
    for x in range(18,24): v.px(x,14,v.col('skin',3))
    v.px(24,13,v.col('skin',3))
    v.px(15,10,v.col('skin',3)); v.px(15,11,INK); v.px(16,11,INK)
    v.ell(20,6,9,8,C,clip=lambda x,y:y<=5 or x<13 or x>26)
    v.inner(C,'skin')
    return v.thick()
def talltale():
    v=V(); legs(v); p.body(v)
    # arms flung wide, holding up a fish far bigger than any fish could be
    v.poly([(13,20),(4,14),(3,17),(12,24)],C); v.ell(4,14,2,2,'skin')
    v.poly([(27,20),(36,14),(37,17),(28,24)],C); v.ell(36,14,2,2,'skin')
    v.ell(20,7,15,4.4,'blue'); v.poly([(34,7),(41,2),(41,12)],'blue'); v.px(8,6,INK); v.px(7,6,hx('#ffffff'))
    for x in range(10,32,3): v.px(x,5,v.col('blue',0)); v.px(x+1,9,v.col('blue',2))
    v.rect(5,8,6,10,'blue',flat=True)
    v.rect(17,16,23,19,'skin'); v.face(20,10,11,9,ey=13,mouth=False)
    v.ell(20,17,1.6,1,'dark',flat=True)
    v.inner(C,'skin'); v.inner('blue','skin')
    return v.thick()
def admirers():
    v=V(); legs(v,ramp='dark'); p.body(v,belt=False,bot=42)
    v.rect(13,31,28,32,'mag',flat=True)
    # clutching a framed portrait of their idol to the chest, starry eyes
    v.poly([(13,21),(16,28),(19,27),(16,21)],C); v.poly([(27,21),(24,28),(21,27),(24,21)],C)
    v.rect(13,22,27,32,'gold'); v.rect(15,24,25,30,'blue',flat=True); v.ell(20,26,2,2,'skin'); v.rect(18,28,22,30,'red',flat=True)
    v.ell(14,27,1.8,1.8,'skin'); v.ell(26,27,1.8,1.8,'skin')
    head(v,mouth=False); smile(v)
    for ex in (16,23):
        v.px(ex,10,v.col('gold',0)); v.px(ex+1,10,v.col('gold',0)); v.px(ex,9,v.col('gold',1)); v.px(ex+1,11,v.col('gold',1))
    hair(v,'hair'); v.ell(13,10,1.8,4,'hair'); v.ell(27,10,1.8,4,'hair')
    for (x,y) in [(30,4),(9,3)]: v.px(x,y,v.col('mag',0)); v.px(x+1,y,v.col('mag',0)); v.px(x,y+1,v.col('mag',1))
    v.inner(C,'skin'); v.inner(C,'gold')
    return v.thick()
def shadow():
    v=V()
    # a person, and behind them a dark green shadow doing exactly the same pose
    def fig(dx,dy,r,skin):
        v.rect(14+dx,40+dy,17+dx,44+dy,r); v.rect(22+dx,40+dy,25+dx,44+dy,r)
        v.poly([(13+dx,19+dy),(27+dx,19+dy),(28+dx,40+dy),(12+dx,40+dy)],r)
        v.poly([(27+dx,20+dy),(33+dx,15+dy),(35+dx,17+dy),(29+dx,23+dy)],r); v.ell(34+dx,15+dy,2,2,skin)
        v.poly([(13+dx,20+dy),(8+dx,26+dy),(10+dx,28+dy),(14+dx,24+dy)],r); v.ell(9+dx,28+dy,2,2,skin)
        v.rect(17+dx,16+dy,23+dx,19+dy,skin); v.ell(20+dx,10+dy,6.5,6.5,skin)
    fig(8,1,'gy','gy')
    for y in range(N):
        for x in range(N):
            if v.g[y][x]: v.g[y][x]=hx('#1a4630') if (x+y)%2==0 else hx('#22563a')
    fig(-2,0,C,'skin')
    v.rect(10,31,26,32,'brown',flat=True)
    v.px(15,9,INK); v.px(15,10,INK); v.px(21,9,INK); v.px(21,10,INK); v.px(14,12,BLUSH); v.px(22,12,BLUSH)
    for x in range(16,21): v.px(x,13,v.col('skin',3))
    v.ell(18,4,6.6,3,'hair',clip=lambda x,y:y<=5)
    v.inner(C,'skin')
    return v.thick()
def secretkeepers():
    v=V(); legs(v,ramp='dark'); p.body(v,belt=False,bot=42)
    # finger to the lips, a padlocked book hugged to the chest
    v.rect(10,24,22,34,'red'); v.rect(10,24,11,34,'red',flat=True); v.rect(14,28,18,32,'gold'); v.ell(16,27,1.6,1.6,'gold'); v.px(16,27,None); v.px(16,30,INK)
    v.poly([(13,21),(10,26),(12,28),(15,24)],C); v.ell(10,28,1.8,1.8,'skin')
    v.poly([(27,21),(24,27),(22,27),(25,21)],C); v.ell(22,28,1.8,1.8,'skin')
    head(v,mouth=False)
    v.px(17,10,INK); v.px(23,10,INK); v.px(16,10,hx('#ffffff')); v.px(22,10,hx('#ffffff'))
    v.ell(20,7,9,8,C,clip=lambda x,y:y<=5 or x<13 or x>26)
    flat(v,w=1)
    v.inner(C,'skin'); v.inner(C,'red')
    return v.thick()
def trapper():
    v=V(); legs(v,ramp='brown'); p.body(v)
    v.rect(13,19,27,21,'fur')
    # fur hat, pointing proudly at a big sprung jaw trap at the feet
    # a rabbit dangling by its hind legs from one hand, a rope snare loop in the other
    v.ell(35,33,3.4,5.6,'grhair'); v.ell(35,40,2.4,2.2,'grhair'); v.rect(33,26,34,29,'grhair'); v.rect(36,26,37,29,'grhair')
    v.rect(34,42,34,45,'grhair'); v.rect(36,42,36,45,'grhair'); v.px(34,40,INK); v.px(35,32,v.col('grhair',2))
    v.ell(5,32,3.4,3.4,'cloth',clip=lambda x,y:abs((x+.5-5)**2+(y+.5-32)**2-10)<4); v.line(7,29,8,27,v.col('cloth',1))
    v.poly([(27,20),(34,22),(34,25),(27,24)],C); v.ell(35,24,2,2,'skin')
    p.armL(v,8,30)
    head(v,mouth=False); smile(v)
    for (dx,dy) in [(-4,13),(-2,15),(2,15),(4,13),(0,16)]: v.px(20+dx,dy,v.col('hair',1))
    v.ell(20,4,8,4.4,'fur'); v.rect(12,5,28,7,'brown'); v.poly([(26,3),(33,8),(31,10),(26,6)],'fur'); v.px(32,9,v.col('dark',1))
    v.inner(C,'skin'); v.inner(C,'fur')
    return v.thick()
def minstrel():
    v=V(); legs(v,ramp='mag'); p.body(v)
    # playing a lute, feathered cap, mid-song
    v.ell(25,29,6,5,'brown'); v.ell(25,29,1.6,1.6,'dark',flat=True); v.poly([(29,25),(39,13),(40,14),(30,26)],'brown'); v.rect(38,10,41,13,'brown')
    for (x,y) in [(22,28),(23,30),(27,27)]: v.px(x,y,v.col('cloth',0))
    p.armR(v,32,22); v.poly([(13,20),(17,28),(20,28),(16,21)],C); v.ell(20,29,1.8,1.8,'skin')
    head(v,mouth=False)
    v.ell(20,14,1.4,1.2,'dark',flat=True)
    v.px(16,10,v.col('skin',3)); v.px(17,10,v.col('skin',3)); v.px(23,10,v.col('skin',3)); v.px(24,10,v.col('skin',3))
    hair(v,'ginger')
    v.poly([(11,6),(28,6),(25,1),(15,2)],C); v.line(24,2,33,-1,v.col('red',1),w=2)
    v.inner(C,'skin'); v.inner(C,'brown')
    return v.thick()
def copyist():
    v=V()
    # scribe at a slanted desk, quill in hand, copying page for page
    v.poly([(22,26),(44,22),(44,26),(22,30)],'brown'); v.rect(40,26,42,46,'brown'); v.rect(24,30,26,46,'brown')
    v.poly([(24,24),(32,22),(32,27),(24,29)],'white'); v.poly([(33,22),(42,20),(42,24),(33,27)],'white')
    for k in range(3):
        v.line(25,24+k*1.5,31,22+k*1.5+.5,v.col('grey',1)); v.line(34,22+k*1.5,41,20+k*1.5+.5,v.col('grey',1))
    legs(v,x1=9,x2=16,ramp='dark'); v.poly([(7,19),(20,19),(21,40),(6,40)],C)
    v.poly([(19,20),(26,20),(28,23),(20,24)],C); v.ell(28,22,2,2,'skin'); v.line(29,21,33,14,v.col('white',0)); v.px(33,13,v.col('white',1)); v.px(34,12,v.col('white',1))
    head(v,cx=14,mouth=False); flat(v,cx=14)
    v.ell(14,5,7,3,'hair',clip=lambda x,y:y<=6); v.ell(14,6,7.6,4,'hair',clip=lambda x,y:y>=6 and y<=8)
    v.ell(14,4,7,3,'skin',clip=lambda x,y:y<=4)
    v.inner(C,'skin')
    return v.thick()
def doppelganger():
    v=V()
    # holds up a hand mirror; the face in it is their own, grinning back
    legs(v,x1=11,x2=18); v.poly([(9,19),(22,19),(23,40),(8,40)],C); v.rect(8,31,23,32,'brown',flat=True)
    v.poly([(21,20),(28,22),(29,26),(22,25)],C); v.ell(29,25,2,2,'skin'); v.rect(30,24,31,34,'brown')
    v.ell(35,15,8,10,'gold'); v.ell(35,15,6.6,8.6,'blue',flat=True)
    v.ell(35,16,4.4,4.6,'skin',flat=True); v.ell(35,12,4.6,2,'hair',flat=True); v.px(33,16,INK); v.px(37,16,INK); v.rect(33,19,37,19,'dark',flat=True); v.px(32,18,'dark' and v.col('dark',1)); v.px(38,18,v.col('dark',1))
    v.px(30,9,hx('#ffffff')); v.px(31,10,hx('#ffffff'))
    v.poly([(9,20),(5,26),(7,29),(10,24)],C); v.ell(6,29,2,2,'skin')
    head(v,cx=15,mouth=False); smile(v,cx=15)
    v.ell(15,5,7,3,'hair',clip=lambda x,y:y<=6)
    v.inner(C,'skin')
    return v.thick()
def impostors():
    v=V(); legs(v,ramp='dark'); p.body(v)
    # a crown far too big, a false moustache held up on a stick
    p.armR(v,31,22); v.line(31,22,28,15,v.col('brown',1))
    p.armL(v,8,30)
    head(v,mouth=False)
    for x in range(17,24): v.px(x,14,v.col('skin',3))
    v.rect(16,12,24,13,'hair'); v.px(15,13,v.col('hair',1)); v.px(25,13,v.col('hair',1)); v.px(14,14,v.col('hair',1)); v.px(26,14,v.col('hair',1))
    v.rect(11,2,29,9,'gold'); v.rect(11,9,29,9,'gold',flat=True)
    for x in (11,16,20,24,29): v.rect(x-1,-1,x,1,'gold')
    v.px(20,5,v.col('red',1)); v.px(14,5,v.col('blue',1)); v.px(26,5,v.col('green',0))
    v.inner(C,'skin')
    return v.thick()
ALL=lambda:[('Mimics',mimics()),('Gardeners',gardeners()),('Druids',druids()),('Understudy',understudy()),('Chorus',chorus()),('Forger',forger()),('Tall-Tale Teller',talltale()),('Admirers',admirers()),('Shadow',shadow()),('Secret-Keepers',secretkeepers()),('Trapper',trapper()),('Minstrel',minstrel()),('Copyist',copyist()),('Doppelganger',doppelganger()),('Impostors',impostors())]
if __name__=='__main__': sheet(ALL(),'grn-all.png',sc=6,cols=6)
