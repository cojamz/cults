from parts import *
RAMP['bl']=('#9cc8f0','#4a80b8','#30608e','#1e3e62')
RAMP['ag']=('#f4f8fc','#bcc6d2','#8a96a8','#5c6678')
RAMP['pu']=('#b898e0','#7d5ba6','#5a3e80','#3c2858')
RAMP['yel']=('#fbee7a','#e8d23e','#b49a28','#76621a')
from gry import mini
R='red'
def innkeeper():
    v=V(); legs(v,ramp='brown'); P(R).body(v,belt=False)
    v.poly([(14,22),(26,22),(27,40),(13,40)],'white'); v.rect(13,22,27,22,'white',flat=True)
    # holding up a big iron room key on a ring, a candle in the other hand
    P(R).armR(v,32,10); v.ell(33,6,3,3,'grey'); v.ell(33,6,1.6,1.6,'grey',flat=True)
    v.line(33,9,33,20,v.col('grey',2),w=2); v.rect(33,16,36,17,'grey'); v.rect(33,19,35,20,'grey')
    v.rect(35,4,40,7,'cloth'); v.px(37,5,v.col('red',1))
    P(R).armL(v,7,28); v.rect(5,32,9,33,'gold'); v.rect(6,24,8,31,'white'); v.px(7,22,v.col('gold',0)); v.px(7,23,v.col('red',0))
    head(v,mouth=False); smile(v)
    hair(v,'hair'); v.rect(13,7,14,10,'hair'); v.rect(26,7,27,10,'hair')
    v.inner(R,'skin'); v.inner(R,'white')
    return v.thick()
def wetnurse():
    v=V(); legs(v,ramp='brown',boot='brown'); P(R).body(v,belt=False,bot=44,w=8)
    v.poly([(14,26),(27,26),(28,44),(13,44)],'white')
    # a plump nurse rocking a swaddled baby, a second tiny one peeking from a basket at her feet
    v.ell(21,25,7,4,'cloth'); v.ell(16,22,3.4,3.4,'skin'); v.px(15,22,INK); v.px(17,22,INK); v.px(16,24,v.col('skin',3)); v.ell(16,19.5,3.6,1.8,'white',clip=lambda x,y:y<=20)
    v.poly([(13,20),(9,24),(14,28),(22,28),(14,24)],R); v.poly([(27,20),(31,24),(26,28),(22,27),(27,24)],R)
    v.ell(37,42,5,3,'brown'); v.ell(37,38,2.4,2.4,'skin'); v.px(36,38,INK); v.px(38,38,INK); v.rect(32,41,42,41,'brown',flat=True)
    head(v,mouth=False); smile(v)
    v.ell(20,6,9,5,'white',clip=lambda x,y:y<=8); v.rect(11,7,13,14,'white'); v.rect(27,7,29,14,'white')
    v.inner(R,'skin'); v.inner(R,'white')
    return v.thick()
def chapman():
    v=V(); legs(v,ramp='brown'); P(R).body(v)
    # a walking peddler bent under a tall pack hung with pots, ribbons and a spoon, stick in hand
    v.rect(25,8,37,34,'brown'); v.rect(25,8,37,9,'brown',flat=True); v.rect(26,12,36,12,'cloth',flat=True)
    v.ell(39,18,2.6,2.6,'grey'); v.ell(39,26,2.2,2.2,'gold'); v.rect(37,30,40,31,'blue'); v.line(24,20,22,30,v.col('mag',1))
    v.ell(31,5,4,3,'cloth')
    P(R).armL(v,6,30); v.line(6,26,3,46,v.col('brown',1),w=2)
    head(v,mouth=False); smile(v)
    hat(v,'brown',band='red')
    v.inner(R,'skin')
    return v.thick()
def hoarder():
    v=V()
    # crouched on top of a heap of stuff, clutching a bulging sack to the chest, eyes darting
    v.poly([(0,46),(6,34),(16,30),(32,30),(42,34),(47,46)],'brown')
    for (x,y,c) in [(6,40,'gold'),(12,35,'red'),(36,37,'blue'),(42,42,'gold'),(24,40,'green'),(30,34,'gold'),(18,42,'purple')]: v.ell(x,y,1.8,1.8,c)
    v.rect(3,38,9,44,'grey'); v.ell(40,32,3,2,'white')
    v.poly([(13,18),(27,18),(29,32),(11,32)],'mag')
    v.ell(20,28,6,5,'cloth'); v.rect(19,22,21,23,'cloth'); v.px(18,27,v.col('gold',0)); v.px(22,29,v.col('gold',0))
    v.ell(14,28,2,2,'skin'); v.ell(26,28,2,2,'skin')
    head(v,top=3,mouth=False)
    for x in range(18,23): v.px(x,13,v.col('skin',3))
    v.px(16,9,v.col('skin',3)); v.px(24,9,v.col('skin',3))
    v.ell(20,4,9,4.5,'mag',clip=lambda x,y:y<=6); v.rect(11,5,13,17,'mag'); v.rect(27,5,29,17,'mag')
    v.inner('mag','skin'); v.inner('mag','cloth')
    return v.thick()
def bargainer():
    v=V(); legs(v,ramp='dark'); P('bl').body(v)
    # holding up a single coin and a hand with two fingers raised: "two, not three"
    P('bl').armR(v,33,10); v.rect(32,4,33,8,'skin'); v.rect(35,4,36,8,'skin')
    P('bl').armL(v,7,14); coin(v,7,10,2.4)
    head(v,mouth=False)
    for x in range(18,23): v.px(x,14,v.col('skin',3))
    v.px(23,13,v.col('skin',3))
    v.rect(15,8,18,8,'hair',flat=True); v.line(22,9,25,7,v.col('hair',1))
    hat(v,'bl',band='gold')
    v.inner('bl','skin')
    return v.thick()
def beggar():
    v=V(); legs(v,ramp='brown',boot='brown'); P('ag').body(v,belt=False,bot=44,w=8)
    for (x,y,c) in [(15,24,'brown'),(24,33,'cloth'),(17,39,'blue')]: v.rect(x,y,x+3,y+3,c)
    v.rect(12,31,29,31,'cloth',flat=True)
    # holding out a dented cup with one coin in it, patched clothes, a hopeful grin
    P('ag').armR(v,33,26); v.rect(32,22,38,28,'grey'); v.rect(32,22,38,22,'grey',flat=True); v.ell(35,21,1.6,1.6,'grey'); v.px(34,20,hx('#ffffff')); v.px(37,25,v.col('grey',3))
    P('ag').armL(v,8,30)
    head(v,mouth=False); smile(v); v.px(19,14,hx('#ffffff')); v.px(21,14,INK)
    for (dx,dy) in [(-4,0),(-2,2),(2,2),(4,0),(0,3)]: v.px(20+dx,13+dy,v.col('hair',1))
    v.ell(20,5,7.5,3,'brown',clip=lambda x,y:y<=6); v.px(25,3,v.col('brown',3))
    v.inner('ag','skin')
    return v.thick()
def nightporter():
    v=V(); legs(v,ramp='dark'); P('pu').body(v)
    for y in (23,27): v.px(20,y,v.col('gold',0))
    # the last one up: lantern held high under a crescent moon, ring of keys, a yawn
    v.ell(41,4,4,4,'gold'); v.ell(43,3,3.4,3.4,'pu',flat=True)
    for (x,y) in [(4,2),(9,6),(36,12)]: v.px(x,y,v.col('white',0))
    P('pu').armR(v,32,12); v.rect(30,6,34,7,'dark'); v.rect(30,8,34,13,'gold'); v.rect(31,9,33,12,'gold',flat=True); v.px(32,10,hx('#ffffff')); v.rect(30,14,34,14,'dark')
    P('pu').armL(v,8,30); v.ell(8,34,2.4,2.4,'grey'); v.rect(9,35,10,38,'grey')
    head(v,mouth=False); v.ell(20,13,1.6,2,'dark',flat=True)
    v.rect(15,9,18,9,INK,flat=True) if False else None
    v.line(15,9,18,9,INK); v.line(22,9,25,9,INK)
    v.rect(13,1,27,5,'pu'); v.rect(12,5,28,6,'dark'); v.ell(20,3,1.4,1.4,'gold')
    v.inner('pu','skin')
    return v.thick()
def pilgrims():
    v=V()
    # two travelers with tall staffs and shell badges on their hats, one pointing on down the road
    for cx,h in ((12,'hair'),(34,'ginger')): mini(v,cx,ramp='yel',hairr=h,top=9)
    smile(v,12,17); smile(v,34,17)
    for cx in (12,34):
        v.ell(cx,9,7,2.4,'brown',clip=lambda x,y:y<=10); v.rect(cx-7,10,cx+7,10,'brown')
        v.ell(cx,8,1.6,1.4,'white')
    v.line(4,10,4,46,v.col('brown',1),w=2); v.ell(5,24,1.8,1.8,'skin')
    v.line(43,10,43,46,v.col('brown',1),w=2); v.ell(42,24,1.8,1.8,'skin')
    v.poly([(17,23),(26,20),(26,22),(18,26)],'yel'); v.ell(27,21,1.6,1.6,'skin')
    v.inner('yel','skin')
    return v.thick()
ALL=lambda:[('Innkeeper',innkeeper()),('Wet Nurse',wetnurse()),('Chapman',chapman()),('Hoarder',hoarder()),('Bargainer',bargainer()),('Beggar',beggar()),('Night Porter',nightporter()),('Pilgrims',pilgrims())]
if __name__=='__main__': sheet(ALL(),'new8.png',sc=6,cols=8)
