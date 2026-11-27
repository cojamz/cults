from parts import *
RAMP['bl']=('#9cc8f0','#4a80b8','#30608e','#1e3e62')
from gry import mini
G='gy'; W='wh'; B='bl'
def purifiers():
    v=V(); legs(v,ramp='dark',boot='dark'); P(G).body(v,belt=False,bot=44,w=8)
    v.rect(12,31,29,32,'white',flat=True)
    # a stern sweeper: big broom swept to one side, two tiny figures tumbling out ahead of it
    v.line(30,10,10,40,v.col('brown',1),w=2)
    v.poly([(4,38),(14,38),(16,46),(2,46)],'gold'); 
    for x in range(3,16,2): v.px(x,45,v.col('gold',3))
    P(G).armR(v,28,14); P(G).armL(v,18,28)
    for (x,y) in [(0,42),(1,39),(41,44)]: v.px(x,y,v.col('cloth',1))
    for cx in (40,45):
        v.rect(cx-1,36,cx+1,41,'red'); v.ell(cx,34,1.6,1.6,'skin'); v.rect(cx-1,42,cx-1,44,'dark'); v.rect(cx+1,42,cx+1,44,'dark')
    head(v,mouth=False); flat(v,w=2)
    v.rect(15,9,18,9,'hair',flat=True); v.rect(22,9,25,9,'hair',flat=True)
    v.ell(20,6,8.5,4.5,G,clip=lambda x,y:y<=7); v.rect(11,7,13,16,G); v.rect(27,7,29,16,G)
    v.inner(G,'skin')
    return v.thick()
def giftswappers():
    v=V()
    # two neighbors handing each other wrapped gifts at the same moment, arrows both ways
    mini(v,10,hairr='ginger',top=9); mini(v,36,hairr='hair',top=9)
    smile(v,10,17); smile(v,36,17)
    v.rect(15,22,21,28,'red'); v.rect(17,22,18,28,'gold',flat=True); v.rect(15,24,21,25,'gold',flat=True)
    v.rect(25,26,31,32,'green'); v.rect(27,26,28,32,'gold',flat=True); v.rect(25,28,31,29,'gold',flat=True)
    v.ell(15,27,1.6,1.6,'skin'); v.ell(31,31,1.6,1.6,'skin')
    for x in range(17,30): v.px(x,4,v.col('white',0)); v.px(x,9,v.col('white',0))
    for d in (1,2): v.px(29-d,4-d,v.col('white',0)); v.px(29-d,4+d,v.col('white',0)); v.px(17+d,9-d,v.col('white',0)); v.px(17+d,9+d,v.col('white',0))
    v.inner(G,'skin')
    return v.thick()
def mutineers():
    v=V(); legs(v,ramp=G,boot='dark'); P(G).body(v,belt=False)
    for y in (22,26,30,34,38): v.rect(13,y,27,y,'white',flat=True)
    v.rect(12,31,29,32,'dark',flat=True)
    # sailor in a striped shirt, cutlass raised, the other hand pulling a small figure his way by the collar
    P(G).armR(v,33,8); v.line(34,7,40,-1,hx('#e8ecf0'),w=2); v.rect(31,8,36,9,'gold')
    v.rect(1,30,5,38,'blue')
    P(G).armL(v,6,30); v.ell(3,26,2.2,2.2,'skin'); v.rect(1,24,5,24,'hair',flat=True); v.rect(1,39,2,43,'dark'); v.rect(4,39,5,43,'dark')
    head(v,mouth=False)
    for x in range(17,24): v.px(x,14,v.col('skin',3))
    v.px(16,13,v.col('skin',3)); v.px(24,13,v.col('skin',3)); stub=[(15,15),(17,16),(23,16),(25,15),(20,17)]
    for (x,y) in stub: v.px(x,y,v.col('hair',1))
    v.ell(20,5,7.5,3.2,'red',clip=lambda x,y:y<=6); v.poly([(26,5),(31,9),(29,10),(26,7)],'red')
    v.rect(15,8,18,9,'dark',flat=True); v.line(13,7,27,6,INK)
    v.inner(G,'skin')
    return v.thick()
def protesters():
    v=V(); legs(v,ramp='brown'); P(G).body(v)
    # a placard held high on a pole: a minion crossed out, mouth open shouting
    v.line(30,4,30,40,v.col('brown',1),w=2)
    v.rect(22,-1,46,12,'white'); v.rect(22,-1,46,-1,'white',flat=True)
    v.ell(34,3,2,2,'dark'); v.poly([(31,6),(37,6),(38,10),(30,10)],'dark')
    v.line(26,1,42,11,v.col('red',1),w=2); v.line(42,1,26,11,v.col('red',1),w=2)
    P(G).armR(v,31,22); P(G).armL(v,9,10)
    head(v,mouth=False); v.ell(20,13,1.6,1.6,'dark',flat=True)
    v.px(16,9,INK); v.px(17,8,INK); v.px(24,9,INK); v.px(23,8,INK)
    hair(v,'ginger')
    v.inner(G,'skin')
    return v.thick()
def monks():
    v=V(); legs(v,ramp='brown',boot='brown'); P(W).body(v,belt=False,bot=44,w=8)
    v.rect(12,30,29,31,'brown',flat=True); v.line(18,31,17,40,v.col('brown',1))
    # tonsured brother, hands folded on a little prayer book, a few beads; content with a small house
    v.poly([(13,21),(16,28),(24,28),(27,21),(24,24),(16,24)],W); v.rect(16,26,24,30,'red'); v.rect(16,26,24,26,'red',flat=True)
    v.ell(15,28,2,2,'skin'); v.ell(25,28,2,2,'skin')
    for i,(x,y) in enumerate([(14,20),(15,22),(16,24),(25,24),(26,22),(27,20)]): v.px(x,y,v.col('brown',1))
    v.px(20,34,v.col('gold',0)); v.px(20,35,v.col('gold',1)); v.px(19,35,v.col('gold',1)); v.px(21,35,v.col('gold',1)); v.px(20,36,v.col('gold',1))
    head(v,mouth=False); smile(v,y=13)
    v.px(16,9,v.col('skin',3)); v.px(17,9,v.col('skin',3)); v.px(23,9,v.col('skin',3)); v.px(24,9,v.col('skin',3))
    v.ell(20,6,8,3.4,'hair',clip=lambda x,y:y>=5 and y<=7); v.ell(20,4,5.5,2.6,'skin')
    v.ell(20,19,8,2.6,W)
    v.inner(W,'skin')
    return v.thick()
def oldguard():
    v=V(); legs(v,ramp=W,boot='dark'); P(W).body(v,belt=False)
    v.line(13,19,27,31,v.col('red',1),w=2)
    for y in (23,27,35): v.px(20,y,v.col('gold',0))
    v.ell(15,24,1.6,1.6,'gold'); v.px(15,22,v.col('red',1))
    # an old soldier at attention, long halberd, white moustache; the young recruit beside him sent off with a pat
    v.line(33,0,33,46,v.col('brown',1),w=2); v.poly([(31,0),(38,2),(38,6),(31,5)],'grey'); v.poly([(33,-1),(35,-1),(34,-4)],'grey')
    P(W).armR(v,32,24); P(W).armL(v,8,30)
    head(v,mouth=False)
    v.poly([(14,12),(20,11),(26,12),(25,14),(20,13),(15,14)],'grhair')
    v.rect(16,9,18,9,'grhair',flat=True); v.rect(22,9,24,9,'grhair',flat=True)
    v.rect(13,-1,27,5,'red'); v.rect(12,5,28,6,'dark'); v.ell(20,2,1.8,1.8,'gold'); v.rect(19,-3,21,-1,'white')
    v.inner(W,'skin'); v.inner(W,'red')
    return v.thick()
def repossessors():
    v=V(); legs(v,ramp='dark'); P(B).body(v,w=8)
    # a burly bailiff carrying off a rival's chair over his shoulder, a paper notice in the other hand
    v.rect(37,0,39,16,'brown'); v.rect(37,14,47,16,'brown'); v.rect(38,17,39,26,'brown'); v.rect(45,17,46,26,'brown'); v.rect(37,4,39,5,'brown',flat=True); v.rect(37,9,39,10,'brown',flat=True)
    v.rect(40,10,46,13,'white'); v.rect(41,11,45,11,'red',flat=True)
    P(B).armR(v,37,15)
    P(B).armL(v,6,30); v.rect(2,30,9,37,'white'); v.rect(3,32,8,32,'dark',flat=True); v.rect(3,34,7,34,'dark',flat=True); v.ell(6,36,1.2,1.2,'red')
    head(v,mouth=False); flat(v,w=2)
    v.rect(15,8,18,8,'dark',flat=True); v.rect(22,8,25,8,'dark',flat=True)
    v.rect(13,1,27,5,'dark'); v.rect(11,5,29,6,'dark')
    for (dx,dy) in [(-4,0),(-2,2),(2,2),(4,0),(0,3)]: v.px(20+dx,13+dy,v.col('hair',1))
    v.inner(B,'skin')
    return v.thick()
ALL=lambda:[('Purifiers',purifiers()),('Gift Swappers',giftswappers()),('Mutineers',mutineers()),('Protesters',protesters()),('Monks',monks()),('Old Guard',oldguard()),('Repossessors',repossessors())]
if __name__=='__main__': sheet(ALL(),'new7.png',sc=6,cols=7)
