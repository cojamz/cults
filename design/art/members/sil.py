from parts import *
C='ag'; p=P(C)
RAMP['ag']=('#f4f8fc','#bcc6d2','#8a96a8','#5c6678')
def scoin(v,x,y,r=1.8): v.ell(x,y,r,r,'grey'); v.px(x-1,y-1,hx('#ffffff'))
RAMP['grey']=('#f4f6f8','#c8ced4','#8e969e','#5a6068')
def almsgiver():
    v=V(); legs(v,ramp='dark'); p.body(v,belt=False,bot=42)
    v.rect(13,31,28,32,'cloth',flat=True)
    # kindly, dropping a silver coin into a beggar's bowl held up from below
    p.armR(v,32,24); scoin(v,34,29,1.4); scoin(v,35,33,1.2)
    v.ell(36,43,5,3,'brown',clip=lambda x,y:y>=42); v.rect(31,42,41,42,'brown',flat=True); scoin(v,35,41,1.2); scoin(v,38,41,1.2)
    p.armL(v,8,30); v.ell(8,35,3.4,3.4,'ag'); v.rect(7,31,9,32,'ag')
    head(v,mouth=False); smile(v)
    hair(v,'grhair'); v.ell(20,4,8,3,'blue',clip=lambda x,y:y<=5); v.rect(12,5,28,6,'blue'); v.ell(13,9,1.6,3,'grhair'); v.ell(27,9,1.6,3,'grhair')
    v.inner(C,'skin')
    return v.thick()
def bride(v,cx):
    v.poly([(cx-5,22),(cx+5,22),(cx+8,44),(cx-8,44)],'white'); v.poly([(cx-5,22),(cx+5,22),(cx+5,30),(cx-5,30)],C)
    for x in range(cx-7,cx+8,3): v.px(x,44,v.col('white',2))
    v.rect(cx-2,19,cx+2,22,'skin'); v.face(cx,8,11,12,ey=13,mouth=False)
    smile(v,cx,17)
    v.ell(cx,9,6,2.6,'ginger',clip=lambda x,y:y<=10); v.ell(cx-6,13,1.6,3,'ginger'); v.ell(cx+6,13,1.6,3,'ginger')
    v.poly([(cx-6,8),(cx+6,8),(cx+9,30),(cx+7,30),(cx+5,12),(cx-5,12)],'white'); v.ell(cx,7,4,1.6,'grey')
def groom(v,cx):
    v.rect(cx-4,38,cx-1,44,'dark'); v.rect(cx+1,38,cx+4,44,'dark'); v.rect(cx-5,45,cx-1,46,'dark'); v.rect(cx+1,45,cx+5,46,'dark')
    v.poly([(cx-6,20),(cx+6,20),(cx+7,38),(cx-7,38)],C); v.poly([(cx-2,20),(cx+2,20),(cx,28)],'white',flat=True); v.ell(cx,21,1.4,1,'dark')
    v.rect(cx-2,17,cx+2,20,'skin'); v.face(cx,6,11,12,ey=11,mouth=False); smile(v,cx,15)
    v.rect(cx-4,-1,cx+4,5,'dark'); v.rect(cx-6,5,cx+6,6,'dark'); v.rect(cx-4,4,cx+4,4,C,flat=True)
def brideandgroom():
    v=V(); groom(v,13); bride(v,32)
    v.ell(24,28,2,2,'skin'); v.poly([(18,22),(24,27),(23,30),(17,25)],C)
    # bouquet
    v.ell(38,30,3,2.6,'green'); 
    for (x,y,c) in [(37,28,'red'),(39,29,'mag'),(38,31,'gold'),(40,31,'red')]: v.px(x,y,v.col(c,0))
    v.inner(C,'skin'); v.inner('white',C)
    return v.thick()
def talker(v,cx,flip):
    s=-1 if flip else 1
    v.rect(cx-4,38,cx-1,44,'dark'); v.rect(cx+1,38,cx+4,44,'dark'); v.rect(cx-5,45,cx-1,46,'hair'); v.rect(cx+1,45,cx+5,46,'hair')
    v.poly([(cx-6,20),(cx+6,20),(cx+7,38),(cx-7,38)],C); v.rect(cx-7,30,cx+7,31,'dark',flat=True)
    v.rect(cx-2,17,cx+2,20,'skin'); v.face(cx,6,11,12,ey=11,mouth=False)
def silvertongues():
    v=V(); talker(v,12,False); talker(v,34,True)
    # grinning salesmen: one tips his hat, the other spreads a hand; silver gleam on the grins
    for cx in (12,34):
        for x in range(cx-3,cx+4): v.px(x,15,hx('#ffffff'))
        v.px(cx-4,14,v.col('skin',3)); v.px(cx+4,14,v.col('skin',3))
        v.rect(cx-3,16,cx+3,16,'skin',flat=True); v.px(cx-3,15,v.col('skin',3)); v.px(cx+3,15,v.col('skin',3))
    v.px(14,13,hx('#ffffff')); v.px(36,13,hx('#ffffff'))
    v.rect(8,1,16,5,C); v.rect(6,5,18,6,C); v.rect(8,4,16,4,'dark',flat=True)
    v.poly([(36,-2),(44,-1),(43,4),(35,3)],C); v.rect(33,3,46,4,C)
    v.poly([(39,21),(44,16),(46,18),(41,24)],C); v.ell(45,15,2,2,'skin')
    v.poly([(17,22),(22,24),(22,27),(17,26)],C); v.ell(23,25.5,1.8,1.8,'skin'); v.poly([(29,22),(26,25),(27,28),(30,25)],C); v.ell(26,27,1.8,1.8,'skin')
    for (x,y) in [(23,20),(24,19),(25,20)]: v.px(x,y,hx('#ffffff'))
    v.poly([(7,22),(4,27),(6,29),(8,25)],C); v.ell(5,29,1.8,1.8,'skin')
    v.inner(C,'skin')
    return v.thick()
def samaritans():
    v=V(); legs(v); p.body(v)
    # carrying a basket of bread, handing a loaf out, bandage roll on the belt
    p.armR(v,33,24); v.ell(36,23,4,2.2,'cloth'); for_=[v.px(x,22,v.col('cloth',3)) for x in (34,36,38)]
    p.armL(v,8,26); v.rect(3,26,12,33,'brown'); v.line(3,29,12,29,v.col('brown',2)); v.ell(5,25,2.4,1.6,'cloth'); v.ell(9,24.5,2.4,1.6,'cloth')
    v.rect(22,33,25,36,'white'); v.px(23,34,v.col('red',1)); v.px(24,34,v.col('red',1))
    head(v,mouth=False); smile(v)
    hair(v,'hair'); v.ell(20,4,8,2.6,'white',clip=lambda x,y:y<=5); v.ell(13,9,1.4,3,'white'); v.ell(27,9,1.4,3,'white')
    v.inner(C,'skin')
    return v.thick()
def paupers():
    v=V()
    v.rect(15,39,17,44,'skin'); v.rect(22,39,24,44,'skin'); v.rect(14,45,17,46,'skin'); v.rect(22,45,25,46,'skin')
    v.poly([(14,19),(26,19),(28,39),(12,39)],C)
    for x in range(12,29,3): v.px(x,39,None); v.px(x+1,40,v.col(C,2))
    for (x,y) in [(15,24),(23,33)]: v.rect(x,y,x+2,y+2,'cloth',flat=True)
    # both pockets turned out, empty-handed shrug, a single bare patch of hope
    v.poly([(13,20),(6,24),(6,27),(13,25)],C); v.ell(5,25.5,2,2,'skin')
    v.poly([(27,20),(34,24),(34,27),(27,25)],C); v.ell(35,25.5,2,2,'skin')
    v.rect(10,30,14,34,'white'); v.rect(26,30,30,34,'white'); v.px(11,34,v.col('white',2)); v.px(29,34,v.col('white',2))
    head(v,mouth=False)
    v.ell(20,14,1.4,1,'dark',flat=True); v.px(16,8,v.col('hair',2)); v.px(24,8,v.col('hair',2))
    hair(v,'hair'); v.px(14,3,v.col('hair',1)); v.px(19,2,v.col('hair',1)); v.px(25,3,v.col('hair',1))
    v.inner(C,'skin'); v.inner(C,'white')
    return v.thick()
def wastrels():
    v=V(); legs(v,ramp='dark'); p.body(v,belt=False)
    v.poly([(17,19),(23,19),(21,30),(19,30)],'red',flat=True)
    v.rect(13,31,28,32,'dark',flat=True)
    # swigging from a bottle, coins dribbling out of a torn purse
    p.armR(v,30,12); v.rect(29,3,32,11,'green'); v.rect(30,1,31,3,'green'); v.px(30,5,v.col('green',0))
    p.armL(v,8,30); v.ell(8,35,3,3,'brown')
    for (x,y) in [(7,39),(9,42),(6,45),(11,45)]: scoin(v,x,y,1.2)
    head(v,mouth=False)
    for x in range(17,24): v.px(x,14,v.col('skin',3))
    v.px(24,13,v.col('skin',3))
    v.px(16,10,v.col('skin',3)); v.px(17,10,v.col('skin',3)); v.px(22,10,v.col('skin',3)); v.px(23,10,v.col('skin',3))
    v.px(14,12,BLUSH); v.px(15,12,BLUSH); v.px(25,12,BLUSH); v.px(26,12,BLUSH)
    v.poly([(12,5),(28,5),(27,1),(14,1)],'red'); v.rect(10,5,30,6,'red'); v.line(27,2,33,-1,v.col('white',1),w=2)
    v.inner(C,'skin'); v.inner(C,'red')
    return v.thick()
def campfollowers():
    v=V(); legs(v); p.body(v)
    # big pack piled with pots, pans and a bedroll; a ladle in hand
    v.rect(26,10,38,30,'brown'); v.ell(32,9,6,2.6,'cloth'); v.rect(37,0,37,10,'dark',flat=True); v.poly([(38,0),(45,2),(38,4)],'red')
    v.ell(38,18,3,3,'grey'); v.rect(40,17,44,18,'grey'); v.ell(36,26,2.6,2.6,'dark'); v.rect(28,30,30,33,'grey')
    p.armR(v,29,28)
    p.armL(v,8,30); v.line(9,30,6,20,v.col('grey',1),w=1); v.ell(6,19,2,1.6,'grey')
    head(v,mouth=False); smile(v)
    v.ell(20,5,8,3.4,'red',clip=lambda x,y:y<=6); v.rect(12,6,28,6,'red'); v.poly([(12,6),(9,10),(11,11),(13,7)],'red')
    v.inner(C,'skin'); v.inner(C,'brown')
    return v.thick()
def pawnbrokers():
    v=V(); legs(v,ramp='dark'); p.body(v,belt=False)
    v.rect(13,31,28,32,'dark',flat=True)
    # under the three-ball pawn sign, holding up a pocket watch on its chain
    v.rect(30,0,31,6,'dark'); v.rect(30,1,44,2,'dark')
    for (x,y) in [(35,6),(41,6),(38,11)]: v.line(x,2,x,y-2,v.col('dark',1)); v.ell(x,y,2.6,2.6,'gold')
    p.armL(v,8,22); v.line(9,22,9,25,v.col('grey',1)); v.ell(9,28,3,3,'grey'); v.ell(9,28,1.8,1.8,'white',flat=True); v.px(9,27,INK); v.px(10,28,INK)
    p.armR(v,31,30)
    head(v,mouth=False); flat(v)
    v.px(22,10,v.col('skin',3)); v.px(23,10,v.col('skin',3)); v.ell(23,10.5,2.4,2.4,'gold',clip=lambda x,y:abs((x+.5-23)**2+(y+.5-10.5)**2-5)<3)
    hair(v,'hair'); v.rect(13,3,27,5,'dark'); v.rect(13,5,27,5,C,flat=True)
    v.inner(C,'skin')
    return v.thick()
def indulgence():
    v=V(); legs(v,ramp='brown',boot='brown'); p.body(v,belt=False,bot=42)
    v.rect(13,31,28,32,'cloth',flat=True)
    # holding up one big pardon with a red seal, palm out for silver
    p.armR(v,31,12); v.rect(28,2,42,16,'white'); v.rect(27,2,43,3,'cloth'); v.rect(27,15,43,16,'cloth')
    for y in (5,7,9,11): v.rect(30,y,40,y,'grey',flat=True)
    v.ell(39,14,2.4,2.4,'red'); v.rect(38,16,38,19,'red',flat=True); v.rect(40,16,40,18,'red',flat=True)
    p.armL(v,6,28); scoin(v,5,25,1.6)
    head(v,mouth=False); smile(v)
    v.ell(20,6,7.6,4,'hair',clip=lambda x,y:y>=6 and y<=8); v.ell(13,9,1.4,2.6,'hair'); v.ell(27,9,1.4,2.6,'hair')
    v.inner(C,'skin')
    return v.thick()
def purseswitchers():
    v=V(); legs(v); p.body(v)
    # a brown purse in one hand, a silver one in the other, swap arrows between them over the head
    p.armL(v,6,26); p.armR(v,34,26)
    v.ell(5,31,3.6,3.6,'brown'); v.rect(4,26,6,27,'brown'); v.ell(35,31,3.6,3.6,'grey'); v.rect(34,26,36,27,'grey'); v.px(34,30,hx('#ffffff'))
    for (x0,x1,y,d) in [(9,15,22,1),(25,31,22,-1)]:
        for x in range(x0,x1+1): v.px(x,y,v.col('white',0))
    v.px(14,21,v.col('white',0)); v.px(14,23,v.col('white',0)); v.px(26,21,v.col('white',0)); v.px(26,23,v.col('white',0))
    v.line(6,4,6,20,v.col('white',2)) if False else None
    head(v,top=5,mouth=False)
    for x in range(18,24): v.px(x,15,v.col('skin',3))
    v.px(24,14,v.col('skin',3)); v.px(16,11,v.col('skin',3)); v.px(17,11,v.col('skin',3))
    v.ell(20,6,7,3,'hair',clip=lambda x,y:y<=7)
    v.inner(C,'skin')
    return v.thick()
def patronsaints():
    v=V(); legs(v,ramp='white',boot='brown'); p.body(v,belt=False,bot=42,w=8)
    v.rect(19,20,21,42,'white',flat=True)
    # halo, hands together, a silver key held
    v.ell(20,3,8,2.6,'gold',clip=lambda x,y:abs((x+.5-20)**2/64+(y+.5-3)**2/6.8-1)<.45)
    v.poly([(13,21),(18,27),(20,27),(15,22)],C); v.poly([(27,21),(22,27),(20,27),(25,22)],C)
    v.ell(20,26,2,2.4,'skin')
    v.rect(24,30,25,38,'grey'); v.ell(24.5,29,2,2,'grey'); v.px(24,29,None); v.rect(25,35,27,36,'grey')
    head(v,top=5,mouth=False); smile(v,y=15)
    v.ell(20,7,7,3,'hair',clip=lambda x,y:y<=8); v.ell(13,11,1.6,3,'hair'); v.ell(27,11,1.6,3,'hair')
    v.inner(C,'skin'); v.inner(C,'white')
    return v.thick()
ALL=lambda:[('Almsgiver',almsgiver()),('Bride and Groom',brideandgroom()),('Silver Tongues',silvertongues()),('Good Samaritans',samaritans()),('Paupers',paupers()),('Wastrels',wastrels()),('Camp Followers',campfollowers()),('Pawnbrokers',pawnbrokers()),('Indulgence Seller',indulgence()),('Purse-Switchers',purseswitchers()),('Patron Saints',patronsaints())]
if __name__=='__main__': sheet(ALL(),'sil-all.png',sc=6,cols=6)
