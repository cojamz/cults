from kit import *
RAMP['mag']=('#f07ab0','#d4508f','#a03068','#6a1c44')
RAMP['wine']=('#c84a46','#a3302c','#7a1f1e','#521414')
RAMP['cloth']=('#e8d4a0','#c8a868','#9a7a44','#6a5028')
def legs(v,x1=14,x2=22,top=40,ramp='dark',boot='hair'):
    v.rect(x1,top,x1+4,44,ramp); v.rect(x2,top,x2+4,44,ramp); v.rect(x1-1,45,x1+4,46,boot); v.rect(x2,45,x2+5,46,boot)
def bandit():
    v=V(); legs(v)
    v.poly([(12,19),(28,19),(29,40),(11,40)],'mag')
    v.rect(11,32,29,33,'brown',flat=True); v.px(20,32,v.col('gold',0))
    # loot sack over shoulder
    v.ell(33,24,7,8,'cloth'); v.ell(30,15.5,2.2,2,'cloth'); v.line(29,17,31,15,v.col('cloth',3))
    v.ell(31,21,1.3,1.3,'gold'); v.px(36,27,v.col('gold',0)); v.px(37,28,v.col('gold',1))
    v.poly([(26,20),(30,18),(31,22),(27,24)],'mag'); v.ell(29.5,18,2,2,'skin')
    v.poly([(9,21),(13,20),(13,31),(9,31)],'mag'); v.ell(10.5,32.5,2,2,'skin')
    # dagger in hand
    v.line(10,34,10,38,v.col('grey',0)); v.px(9,34,v.col('brown',1)); v.px(11,34,v.col('brown',1))
    v.rect(17,16,23,18,'skin')
    v.face(20,4,13,13,ey=9,mouth=False,blush=False)
    # bandana mask over lower face
    v.poly([(13,11),(27,11),(25,17),(20,18),(15,17)],'mag'); v.px(26,13,v.col('mag',2)); v.line(27,11,30,15,v.col('mag',2))
    # hat brim low
    v.ell(20,4.5,7.5,3.5,'dark',clip=lambda x,y:y<=6); v.rect(10,6,30,7,'dark')
    for x in (16,17,23,24): v.px(x,8,v.col('hair',2))
    v.inner('mag','cloth')
    return v.thick()
def nightthieves():
    v=V()
    # crescent moon behind
    v.ell(37,8,5.5,5.5,'gold',flat=True); v.ell(39.5,6.5,4.5,4.5,'gold',flat=True,clip=lambda x,y:False)
    for y in range(N):
        for x in range(N):
            dx=(x+.5-40);dy=(y+.5-6.5)
            if dx*dx+dy*dy<=20 and v.g[y][x]==v.col('gold',1): v.g[y][x]=None
    # tiptoe sneaking, leaning forward
    v.poly([(14,36),(18,36),(15,44),(12,44)],'dark'); v.rect(11,45,14,46,'hair')
    v.poly([(20,36),(24,36),(28,43),(25,44)],'dark'); v.rect(25,44,29,45,'hair')
    v.poly([(13,19),(27,17),(28,37),(12,37)],'mag')
    v.rect(12,31,28,32,'dark',flat=True)
    # finger to lips arm
    v.poly([(24,19),(28,19),(27,14),(24,14)],'mag'); v.ell(25.5,13,1.8,1.8,'skin')
    # holding candlestick
    v.poly([(9,22),(13,21),(13,29),(9,29)],'mag'); v.ell(10.5,30,2,2,'skin'); v.rect(9,25,12,26,'gold'); v.rect(10,21,11,24,'white',flat=True); v.ell(10.5,19.5,1.2,1.8,'gold'); v.px(10,19,hx('#ffffff'))
    v.face(20,4,12,12,ey=9,mouth=False,blush=False)
    # hood
    v.ell(20,7,8,7,'mag',clip=lambda x,y:y<=8 or x<13 or x>26)
    v.ell(20,10,5.6,4.8,'skin',flat=True); v.px(17,10,INK); v.px(17,11,INK); v.px(22,10,INK); v.px(22,11,INK)
    v.rect(15,13,25,15,'dark',flat=True)
    v.inner('mag','skin')
    return v.thick()
def starveling():
    v=V()
    v.rect(16,38,17,44,'skin'); v.rect(22,38,23,44,'skin'); v.rect(15,45,18,46,'skin'); v.rect(22,45,25,46,'skin')
    # ragged thin tunic with patches and jagged hem
    v.poly([(15,18),(25,18),(27,38),(13,38)],'mag')
    for x in range(13,28,3): v.px(x,38,None); v.px(x+1,39,v.col('mag',2))
    v.rect(16,24,18,26,'cloth',flat=True); v.rect(22,31,24,33,'cloth',flat=True); v.px(16,24,v.col('cloth',3)); v.px(24,33,v.col('cloth',3))
    # thin arms holding empty bowl out
    v.line(25,20,26,27,v.col('skin',1),w=2); v.line(14,20,13,27,v.col('skin',1),w=2)
    v.ell(20,28,7,4,'brown',clip=lambda x,y:y>=28); v.rect(13,27,27,28,'brown',flat=True); v.rect(15,27,25,27,'dark',flat=True)
    v.ell(13,28,1.6,1.6,'skin'); v.ell(27,28,1.6,1.6,'skin')
    v.rect(18,15,22,18,'skin')
    v.face(20,3,11,13,ey=8,mouth=False,blush=False)
    # hollow cheeks + sad mouth, scruffy hair
    v.px(16,12,v.col('skin',2)); v.px(24,12,v.col('skin',2)); v.px(19,13,v.col('skin',3)); v.px(20,13,v.col('skin',3)); v.px(21,13,v.col('skin',3)); v.px(18,14,v.col('skin',3)); v.px(22,14,v.col('skin',3))
    for x in (17,23): v.px(x,10,v.col('skin',2))
    v.ell(20,5,7,4,'mag',clip=lambda x,y:y<=6); v.rect(13,5,27,6,'mag'); v.poly([(25,6),(29,9),(27,10),(24,7)],'mag')
    v.px(15,7,v.col('hair',1)); v.px(25,7,v.col('hair',1))
    v.inner('mag','skin')
    return v.thick()
def robinhood():
    v=V(); legs(v,ramp='brown')
    v.poly([(13,19),(27,19),(28,40),(12,40)],'mag')
    for x in range(12,29,3): v.px(x+1,40,v.col('mag',2))
    v.rect(12,31,28,32,'brown',flat=True); v.px(20,31,v.col('gold',0))
    # bow in left hand, drawn arrow
    for y in range(6,40):
        t=(y-23)/17; x=round(5+6*t*t)
        v.px(x,y,v.col('brown',1)); v.px(x+1,y,v.col('brown',2))
    v.line(11,6,11,40,v.col('white',2))
    v.poly([(13,21),(9,22),(9,25),(13,25)],'mag'); v.ell(7,23,2,2,'skin')
    v.line(7,23,27,23,v.col('brown',0)); v.px(28,22,v.col('white',1)); v.px(28,24,v.col('white',1)); v.px(29,23,v.col('white',1)); v.px(6,23,v.col('grey',0)); v.px(5,23,v.col('grey',0))
    v.poly([(26,20),(30,21),(29,25),(26,24)],'mag'); v.ell(27,23,2,2,'skin')
    # quiver on back
    v.rect(28,12,31,22,'brown'); v.px(28,10,v.col('white',1)); v.px(30,9,v.col('white',1)); v.px(29,11,v.col('mag',0))
    v.rect(17,16,23,18,'skin')
    v.face(20,4,13,13,ey=10,mouth=False)
    v.px(19,14,v.col('skin',3)); v.px(20,14,v.col('skin',3)); v.px(21,14,v.col('skin',3)); v.px(22,13,v.col('skin',3))
    for x in range(17,24): v.px(x,15,v.col('ginger',2))
    # feathered cap
    v.poly([(11,7),(30,7),(26,1),(15,2)],'mag'); v.line(25,3,34,-1,v.col('white',1),w=2)
    for y in range(8,12): v.px(14,y,v.col('ginger',1)); v.px(26,y,v.col('ginger',1))
    v.inner('mag','skin')
    return v.thick()
def extortionist():
    v=V(); legs(v,x1=12,x2=23)
    v.ell(20,30,12,11,'mag')
    v.rect(9,34,31,35,'dark',flat=True); v.px(20,34,v.col('gold',0))
    # club resting on shoulder
    v.line(30,30,38,6,v.col('brown',1),w=3); v.ell(38.5,6,3,3.5,'brown')
    for (x,y) in [(37,4),(39,8),(40,5)]: v.px(x,y,v.col('grey',1))
    v.poly([(27,22),(32,24),(32,30),(28,29)],'mag'); v.ell(31,30,2.5,2.4,'skin')
    # open palm held out: "pay up"
    v.poly([(10,22),(4,26),(5,29),(11,27)],'mag'); v.ell(3.5,26,2.6,2.2,'skin'); v.px(1,25,v.col('skin',1)); v.px(2,24,v.col('skin',1))
    v.rect(17,16,23,19,'skin')
    v.face(20,4,14,13,ey=9,mouth=False,blush=False)
    # scowl, stubble, broken nose
    for x in (15,16,17): v.px(x,8,v.col('hair',2))
    for x in (23,24,25): v.px(x,8,v.col('hair',2))
    for x in range(17,24): v.px(x,14,v.col('skin',3))
    for (x,y) in [(15,13),(17,15),(19,16),(21,16),(23,15),(25,13),(16,14),(24,14)]: v.px(x,y,v.col('skin',2))
    v.ell(20,4,7,3,'dark',clip=lambda x,y:y<=5)
    v.inner('mag','skin')
    return v.thick()
def constable(v,cx,flip=False):
    s=-1 if flip else 1
    v.rect(cx-4,38,cx-2,44,'dark'); v.rect(cx+1,38,cx+3,44,'dark'); v.rect(cx-5,45,cx-2,46,'hair'); v.rect(cx+1,45,cx+4,46,'hair')
    v.poly([(cx-6,19),(cx+6,19),(cx+7,38),(cx-7,38)],'mag')
    v.rect(cx-7,30,cx+7,31,'dark',flat=True); v.px(cx,30,v.col('gold',0))
    for y in (22,25,28): v.px(cx,y,v.col('gold',1))
    v.rect(cx-2,16,cx+2,18,'skin')
    v.face(cx,6,11,11,ey=11,mouth=False,blush=False)
    for x in range(cx-2,cx+3): v.px(x,14,v.col('hair',1))
    # tall hat
    v.rect(cx-5,0,cx+4,6,'dark'); v.rect(cx-7,6,cx+6,7,'dark'); v.rect(cx-5,5,cx+4,5,'mag',flat=True)
def thieftakers():
    v=V()
    constable(v,12); constable(v,33)
    # lantern held up by left, manacles by right
    v.poly([(5,21),(7,20),(7,28),(4,28)],'mag'); v.ell(5,29,1.8,1.8,'skin'); v.line(5,30,5,32,INK); v.rect(3,33,7,38,'gold'); v.rect(4,34,6,37,'gold',flat=True); v.px(5,35,hx('#ffffff'))
    v.poly([(39,21),(41,20),(42,28),(39,28)],'mag'); v.ell(41,29,1.8,1.8,'skin')
    v.ell(41,33,2.2,2.2,'grey'); v.ell(44,35,2.2,2.2,'grey'); v.px(41,33,None); v.px(44,35,None); v.line(42,34,43,34,v.col('grey',2))
    v.poly([(17,22),(21,21),(22,25),(18,26)],'mag'); v.poly([(28,22),(24,21),(23,25),(27,26)],'mag')
    v.inner('mag','skin')
    return v.thick()
def highwayman():
    v=V()
    # long cape flaring
    v.poly([(12,18),(28,18),(36,44),(4,44)],'dark')
    v.poly([(14,19),(26,19),(27,38),(13,38)],'mag')
    v.rect(13,31,27,32,'brown',flat=True); v.px(20,31,v.col('gold',0))
    v.rect(15,39,18,44,'dark'); v.rect(22,39,25,44,'dark'); v.rect(14,42,18,46,'hair'); v.rect(22,42,26,46,'hair')
    # flintlock pistol raised
    v.poly([(26,20),(32,18),(33,22),(27,24)],'mag'); v.ell(33,20,2,2,'skin'); v.rect(33,16,40,18,'grey'); v.rect(33,18,35,21,'brown'); v.px(40,16,INK)
    v.poly([(14,20),(10,24),(11,28),(15,25)],'mag'); v.ell(11,29,2,2,'skin')
    v.rect(17,15,23,18,'skin')
    v.face(20,4,13,12,ey=10,mouth=False,blush=False)
    # eye mask
    v.rect(14,9,26,11,'dark',flat=True); v.px(17,10,hx('#ffffff')); v.px(23,10,hx('#ffffff'))
    v.px(19,14,v.col('skin',3)); v.px(20,14,v.col('skin',3)); v.px(21,13,v.col('skin',3))
    # tricorn
    v.poly([(9,6),(31,6),(27,1),(20,3),(13,1)],'dark'); v.rect(12,6,28,7,'mag',flat=True)
    v.px(26,3,v.col('gold',0))
    v.inner('mag','dark')
    return v.thick()
def kid(v,cx):
    v.rect(cx-3,38,cx-2,44,'white'); v.rect(cx+1,38,cx+2,44,'white'); v.rect(cx-4,45,cx-1,46,'hair'); v.rect(cx+1,45,cx+4,46,'hair')
    v.poly([(cx-5,24),(cx+5,24),(cx+7,38),(cx-7,38)],'mag')
    for x in range(cx-7,cx+8,2): v.px(x,38,v.col('white',1))
    v.rect(cx-2,21,cx+2,24,'skin')
    v.face(cx,10,12,12,ey=16,mouth=False)
    v.px(cx-1,20,v.col('skin',3)); v.px(cx,20,v.col('skin',3)); v.px(cx+1,20,v.col('skin',3)); v.px(cx-2,19,v.col('skin',3)); v.px(cx+2,19,v.col('skin',3))
    v.ell(cx,11,6.4,3,'ginger',clip=lambda x,y:y<=12)
    v.ell(cx-6,13,1.6,2.6,'ginger'); v.ell(cx+6,13,1.6,2.6,'ginger')
    v.ell(cx+4,9,1.6,1.4,'mag'); v.ell(cx+6,8,1.6,1.4,'mag')
def twins():
    v=V(); kid(v,13); kid(v,33)
    # holding hands
    v.poly([(18,26),(23,29),(28,26),(23,31)],'skin')
    v.poly([(5,26),(7,25),(7,33),(5,33)],'mag'); v.poly([(41,26),(43,25),(43,33),(41,33)],'mag')
    v.ell(6,34,1.6,1.6,'skin'); v.ell(42,34,1.6,1.6,'skin')
    v.inner('mag','skin')
    return v.thick()
def changeling():
    v=V()
    RAMP['pale']=('#e8f0d8','#c8d8b0','#9ab088','#6a8060')
    v.rect(16,38,18,44,'pale'); v.rect(22,38,24,44,'pale'); v.rect(15,45,18,46,'pale'); v.rect(22,45,25,46,'pale')
    v.poly([(14,22),(26,22),(29,38),(11,38)],'mag')
    for x in range(11,30,3): v.px(x,38,None)
    # holding a rag doll (the swapped child) behind its back, grinning
    v.poly([(26,23),(31,26),(30,29),(26,27)],'mag'); v.ell(31,28,1.8,1.8,'pale')
    v.ell(35,27,2.4,2.4,'cloth'); v.poly([(33,29),(37,29),(38,36),(32,36)],'cloth'); v.px(34,26,INK); v.px(36,26,INK); v.line(33,30,37,30,v.col('mag',1))
    v.poly([(14,23),(10,27),(11,30),(14,27)],'mag'); v.ell(10,30,1.8,1.8,'pale')
    v.rect(18,19,22,22,'pale')
    # big head, pointed ears, big glowing eyes
    v.ell(20,12,9,8.5,'pale')
    v.poly([(11,10),(5,5),(12,14)],'pale'); v.poly([(29,10),(35,5),(28,14)],'pale')
    for ex in (16,23):
        v.rect(ex,10,ex+1,12,'dark',flat=True); v.px(ex,10,hx('#f0e060'))
    for x in range(15,26): v.px(x,16,v.col('pale',3))
    for x in (16,18,20,22,24): v.px(x,17,hx('#ffffff'))
    v.poly([(11,6),(29,6),(23,-1),(18,-1)],'mag'); v.rect(11,6,29,7,'mag'); v.px(20,0,v.col('mag',0))
    v.inner('mag','pale')
    return v.thick()
def briber():
    v=V(); legs(v,x1=13,x2=23)
    v.ell(20,30,11,10,'mag'); v.rect(15,20,25,40,'mag')
    v.poly([(18,20),(22,20),(21,34),(19,34)],'white',flat=True)
    v.rect(9,34,31,35,'dark',flat=True); v.px(20,34,v.col('gold',0))
    # slipping a coin purse out sideways, wink
    v.poly([(28,23),(34,26),(33,30),(28,28)],'mag'); v.ell(34,28,2,2,'skin')
    v.ell(36,23,3.6,3.6,'gold'); v.ell(36,23,1.6,1.6,'gold',flat=True); v.px(35,21,hx('#ffffff')); v.px(40,19,v.col('gold',0)); v.px(41,17,v.col('gold',0)); v.px(32,19,v.col('gold',0))
    v.poly([(12,22),(8,26),(10,29),(13,26)],'mag'); v.ell(9,29,2,2,'skin')
    v.px(9,26,v.col('skin',1)); v.px(8,25,v.col('skin',1))
    v.rect(17,16,23,19,'skin')
    v.face(20,4,14,13,ey=9,mouth=False)
    for x in range(22,25): v.px(x,9,v.col('skin',3)); v.px(x,10,v.col('skin',0))
    v.px(23,10,v.col('skin',1)); v.px(22,9,INK); v.px(23,9,INK); v.px(24,9,INK); v.px(23,10,v.col('skin',1))
    for x in range(17,24): v.px(x,14,v.col('skin',3))
    v.px(24,13,v.col('skin',3)); v.px(25,12,v.col('skin',3))
    v.ell(20,4.2,7.5,3,'mag',clip=lambda x,y:y<=5); v.rect(11,5,29,6,'dark'); v.ell(20,2,4,2,'mag')
    v.inner('mag','white')
    return v.thick()
def sailor(v,cx,club=False):
    v.rect(cx-4,38,cx-1,44,'blue'); v.rect(cx+1,38,cx+4,44,'blue'); v.rect(cx-5,45,cx-1,46,'hair'); v.rect(cx+1,45,cx+5,46,'hair')
    v.poly([(cx-7,19),(cx+7,19),(cx+8,38),(cx-8,38)],'mag')
    for y in (23,27,31,35): v.rect(cx-7,y,cx+7,y,'mag',flat=True); [v.px(x,y,v.col('mag',3)) for x in range(cx-7,cx+8)]
    v.rect(cx-2,16,cx+2,19,'skin')
    v.face(cx,5,12,12,ey=10,mouth=False,blush=False)
    for x in range(cx-3,cx+4): v.px(x,14,v.col('skin',3))
    for (dx,dy) in [(-4,13),(-2,15),(2,15),(4,13),(0,16)]: v.px(cx+dx,dy,v.col('hair',1))
    v.ell(cx,5,6.5,2.6,'dark',clip=lambda x,y:y<=6); v.px(cx+5,4,v.col('mag',0))
def pressgang():
    v=V(); sailor(v,12); sailor(v,34)
    # big sack held open between them
    v.ell(23,32,6,7,'cloth'); v.rect(18,24,28,26,'cloth'); v.rect(18,24,28,24,'cloth',flat=True); v.line(18,25,28,25,v.col('cloth',3))
    v.poly([(18,21),(20,23),(18,25),(16,23)],'mag'); v.poly([(28,21),(26,23),(28,25),(30,23)],'mag'); v.ell(19,25,1.6,1.6,'skin'); v.ell(27,25,1.6,1.6,'skin')
    # coil of rope
    v.ell(43,30,2.6,2.6,'cloth'); v.px(43,30,v.col('cloth',3)); v.poly([(41,21),(43,20),(44,27),(41,27)],'mag'); v.ell(42.5,28,1.6,1.6,'skin')
    v.poly([(5,21),(3,20),(2,27),(5,27)],'mag'); v.ell(3.5,28,1.6,1.6,'skin'); v.line(3,29,2,40,v.col('brown',1),w=3); v.ell(2,40,2.4,2.6,'brown')
    v.inner('mag','skin'); v.inner('mag','cloth')
    return v.thick()
def informer():
    v=V()
    # hunched, leaning in, hand cupped to mouth whispering
    v.rect(13,40,16,44,'dark'); v.rect(21,40,24,44,'dark'); v.rect(12,45,16,46,'hair'); v.rect(21,45,25,46,'hair')
    v.poly([(14,20),(28,17),(30,40),(11,40)],'mag')
    v.ell(19,19,8,5,'mag')
    v.rect(11,32,30,33,'dark',flat=True)
    v.poly([(27,20),(33,18),(33,22),(28,24)],'mag'); v.ell(34,15,3,3.4,'skin'); v.px(36,13,v.col('skin',2)); v.px(36,15,v.col('skin',2)); v.px(36,17,v.col('skin',2))
    v.poly([(12,24),(9,30),(12,32),(14,27)],'mag'); v.ell(10.5,32,2,2,'skin')
    # notebook
    v.rect(5,29,10,37,'white'); v.rect(4,29,11,30,'cloth'); v.rect(4,36,11,37,'cloth'); [v.px(6,y,v.col('white',2)) for y in (31,33,35)]; [v.px(8,y,v.col('white',2)) for y in (31,33,35)]
    v.face(27,6,12,12,ey=11,mouth=False,blush=False)
    # big ear, beady side-eyes, pointy nose
    v.ell(21,12,2,3,'skin'); v.px(21,12,v.col('skin',3))
    v.rect(28,11,29,12,'dark',flat=True); v.rect(24,11,24,12,'dark',flat=True)
    v.px(33,13,v.col('skin',1)); v.px(34,13,v.col('skin',2))
    for x in range(26,31): v.px(x,15,v.col('skin',3))
    v.ell(27,6.5,6.6,3,'hair',clip=lambda x,y:y<=7); v.rect(20,6,34,7,'dark')
    # speech squiggle
    v.inner('mag','skin')
    return v.thick()
def cutpurse():
    v=V()
    v.rect(15,38,17,44,'dark'); v.rect(22,38,24,44,'dark'); v.rect(14,45,17,46,'hair'); v.rect(22,45,25,46,'hair')
    v.poly([(14,22),(26,22),(27,38),(13,38)],'mag')
    v.rect(13,31,27,32,'brown',flat=True)
    # small knife in one hand, cut purse in the other, cord dangling
    v.poly([(26,24),(31,27),(30,30),(26,28)],'mag'); v.ell(31,29,1.8,1.8,'skin'); v.line(32,28,37,23,v.col('grey',0),w=2); v.px(32,29,v.col('brown',1))
    v.poly([(14,24),(9,27),(10,30),(14,28)],'mag'); v.ell(9,30,1.8,1.8,'skin')
    v.ell(8,35,3,3.2,'brown'); v.rect(7,31,9,32,'brown'); v.line(8,30,11,26,v.col('cloth',1)); v.px(8,35,v.col('gold',0))
    v.rect(18,19,22,22,'skin')
    v.face(20,8,12,12,ey=14,mouth=False)
    for x in range(18,23): v.px(x,18,v.col('skin',3))
    v.px(23,17,v.col('skin',3))
    # flat cap
    v.ell(20,8,7,3,'mag',clip=lambda x,y:y<=9); v.rect(14,9,28,10,'mag'); v.px(28,9,v.col('mag',2))
    v.inner('mag','skin')
    return v.thick()
def fence():
    v=V(); legs(v,x1=14,x2=22)
    # long coat held open, lined with stolen goods
    v.poly([(11,18),(29,18),(32,42),(8,42)],'mag')
    v.poly([(16,19),(24,19),(25,40),(15,40)],'dark')
    for (x,y,c) in [(18,24,'gold'),(23,25,'grey'),(18,33,'grey'),(23,33,'gold')]:
        v.line(x,19,x,y-3,v.col(c,1)); v.ell(x,y,2.8,2.8,c); v.px(x,y,v.col('dark',1)); v.px(x-1,y-1,hx('#ffffff'))
    for x in range(16,25,2): v.px(x,38,v.col('gold',0)); v.px(x+1,37,v.col('gold',1))
    v.poly([(10,20),(6,28),(9,30),(13,24)],'mag'); v.ell(8,30,2,2,'skin')
    v.poly([(30,20),(34,28),(31,30),(27,24)],'mag'); v.ell(32,30,2,2,'skin')
    v.rect(17,15,23,18,'skin')
    v.face(20,4,12,12,ey=9,mouth=False,blush=False)
    for x in range(17,24): v.px(x,14,v.col('skin',3))
    v.px(24,13,v.col('skin',3)); v.px(16,13,v.col('skin',3))
    for x in (16,17,22,23): v.px(x,8,v.col('hair',2))
    v.ell(20,4,7,3,'dark',clip=lambda x,y:y<=5); v.rect(11,5,29,6,'dark'); v.rect(14,4,26,4,'mag',flat=True)
    v.inner('mag','dark')
    return v.thick()
ALL=lambda:[('Bandit',bandit()),('Night Thieves',nightthieves()),('Starveling',starveling()),('Robin Hood',robinhood()),('Extortionist',extortionist()),('Thief-Takers',thieftakers()),('Highwayman',highwayman()),('Twins',twins()),('Changeling',changeling()),('Briber',briber()),('Press Gang',pressgang()),('Informer',informer()),('Cutpurse',cutpurse()),('Fence',fence())]
