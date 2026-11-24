from parts import *
C='gy'; p=P(C)
RAINBOW=['red','gold','green','blue','purple','mag']
def mini(v,cx,ramp=C,hairr='hair',top=8,legr='dark'):
    v.rect(cx-3,38,cx-1,44,legr); v.rect(cx+1,38,cx+3,44,legr); v.rect(cx-4,45,cx-1,46,'hair'); v.rect(cx+1,45,cx+4,46,'hair')
    v.poly([(cx-5,top+13),(cx+5,top+13),(cx+6,38),(cx-6,38)],ramp)
    v.rect(cx-2,top+10,cx+2,top+13,'skin'); v.face(cx,top,11,11,ey=top+5,mouth=False)
    v.ell(cx,top+1,5.6,2.6,hairr,clip=lambda x,y:y<=top+2)
def trespasser():
    v=V()
    # one leg over a low fence, past a KEEP OUT sign
    v.rect(0,34,47,35,'brown'); v.rect(0,40,47,41,'brown')
    for x in (3,21,39): v.rect(x,30,x+2,46,'brown')
    v.rect(33,14,45,22,'white'); v.rect(38,22,39,30,'brown'); v.rect(35,16,43,16,'red',flat=True); v.rect(35,19,43,19,'red',flat=True)
    v.poly([(14,36),(18,36),(16,44),(12,44)],'dark'); v.rect(10,44,15,46,'hair')
    v.poly([(19,30),(23,28),(30,33),(27,36)],'dark'); v.rect(28,33,32,37,'hair')
    v.poly([(13,15),(25,15),(26,34),(12,34)],C)
    v.poly([(25,16),(31,20),(30,23),(24,20)],C); v.ell(31,22,2,2,'skin')
    v.poly([(13,16),(8,22),(10,25),(14,20)],C); v.ell(9,25,2,2,'skin')
    head(v,cx=19,top=1,mouth=False); v.px(22,7,INK); v.px(16,7,INK)
    flat(v,cx=19,y=11,w=1); v.px(21,10,v.col('skin',3))
    hat(v,'dark',cx=19,top=1.5)
    v.inner(C,'skin')
    return v.thick()
def squanderer():
    v=V(); legs(v); p.body(v,belt=False)
    v.poly([(17,19),(23,19),(21,30),(19,30)],'red',flat=True)
    v.rect(13,31,28,32,'dark',flat=True)
    # flinging coins over the shoulder with both hands, grinning
    v.poly([(13,20),(8,14),(7,8),(10,8),(12,14)],C); v.ell(8,7,2.2,2.2,'skin')
    v.poly([(27,20),(32,14),(33,8),(30,8),(28,14)],C); v.ell(32,7,2.2,2.2,'skin')
    for (x,y) in [(4,3),(12,1),(28,2),(37,4),(40,10),(2,10)]: coin(v,x,y,1.4)
    head(v,mouth=False); smile(v)
    v.ell(20,4,7,2.6,'ginger',clip=lambda x,y:y<=5); v.px(14,3,v.col('ginger',1)); v.px(26,3,v.col('ginger',1))
    v.inner(C,'skin'); v.inner(C,'red')
    return v.thick()
def conjurer():
    v=V(); legs(v,ramp='dark'); p.body(v,belt=False,bot=42,w=8)
    v.rect(12,31,29,32,'purple',flat=True)
    # pulling an endless string of colored scarves from a sleeve
    p.armL(v,8,26)
    for i,c in enumerate(RAINBOW): v.rect(10+i*5,22-i*3,14+i*5,24-i*3,c); v.px(10+i*5,22-i*3,v.col(c,0))
    p.armR(v,31,24)
    head(v,mouth=False); smile(v)
    v.rect(14,-1,26,5,'dark'); v.rect(11,5,29,6,'dark'); v.rect(14,3,26,3,'purple',flat=True)
    for (x,y) in [(33,2),(36,6),(40,1)]: v.px(x,y,v.col('gold',0)); v.px(x+1,y,v.col('gold',1)); v.px(x,y+1,v.col('gold',1))
    v.inner(C,'skin')
    return v.thick()
def seer():
    v=V(); legs(v,ramp='dark',boot='dark'); p.body(v,belt=False,bot=44,w=8)
    # hands over a glowing crystal ball, headscarf with coins
    v.rect(15,40,25,42,'gold'); v.ell(20,34,6,6,'blue'); v.ell(20,34,4,4,'blue',flat=True); v.px(18,32,hx('#ffffff')); v.px(19,31,hx('#ffffff')); v.ell(21,35,1.4,1.4,'purple',flat=True)
    v.poly([(13,21),(13,30),(15,31),(16,23)],C); v.ell(14,31,2,2,'skin'); v.poly([(27,21),(27,30),(25,31),(24,23)],C); v.ell(26,31,2,2,'skin')
    head(v,mouth=False)
    for (x,y) in [(16,10),(17,10),(23,10),(24,10)]: v.px(x,y,v.col('skin',3))
    smile(v)
    v.ell(20,5,9,4,'purple',clip=lambda x,y:y<=7); v.rect(11,6,29,7,'purple'); v.ell(29,9,2,3,'purple')
    for x in range(12,29,3): coin(v,x,7.5,1)
    v.ell(12,12,1,1,'gold')
    v.inner(C,'skin')
    return v.thick()
def extrahand():
    v=V(); legs(v,ramp='brown'); p.body(v)
    # a farmhand with a cheerful third arm: one waves, one holds a pitchfork, one a pail
    p.armL(v,6,28); v.rect(2,29,9,35,'grey'); v.rect(2,29,9,29,'grey',flat=True)
    p.armR(v,32,26); v.line(33,2,33,44,v.col('brown',1)); 
    for x in (31,33,35): v.rect(x,0,x,4,'grey',flat=True)
    v.rect(31,4,35,4,'grey',flat=True)
    v.poly([(14,22),(8,16),(6,10),(9,9),(12,16)],C); v.ell(7,8,2.2,2.2,'skin')
    for x in (5,7,9): v.px(x,5,v.col('skin',1))
    head(v,mouth=False); smile(v)
    v.ell(20,4,11,3,'cloth'); v.ell(20,2.5,6,3,'cloth')
    v.inner(C,'skin')
    return v.thick()
def lordmanor():
    v=V(); legs(v,ramp='white',boot='dark'); p.body(v,belt=False)
    v.poly([(9,19),(31,19),(35,42),(5,42)],'red'); p.body(v,belt=False)
    for y in (23,27,31,35): v.px(20,y,v.col('gold',0))
    v.ell(20,20,8,2.4,'white')
    # striding first through the door: cane forward, plumed hat, nose up
    v.poly([(27,20),(35,26),(34,28),(26,23)],C); v.ell(35,27,2,2,'skin'); v.line(35,28,41,44,v.col('dark',1),w=2); v.ell(35,27.5,1.4,1.4,'gold')
    p.armL(v,8,30)
    head(v,mouth=False)
    for x in range(18,22): v.px(x,14,v.col('skin',3))
    for x in range(17,23): v.px(x,13,v.col('hair',1))
    v.px(16,10,v.col('skin',3)); v.px(17,10,v.col('skin',3)); v.px(23,10,v.col('skin',3)); v.px(24,10,v.col('skin',3))
    v.ell(20,4.5,9,3.5,'dark',clip=lambda x,y:y<=6); v.rect(9,6,31,7,'dark'); v.line(24,3,34,-1,v.col('white',0),w=2); v.line(24,4,33,2,v.col('red',1))
    v.inner(C,'skin'); v.inner('red',C)
    return v.thick()
def moneychangers():
    v=V()
    # three at a counting table, passing coins of different colors along
    for cx,h in ((8,'hair'),(24,'grhair'),(40,'ginger')): mini(v,cx,hairr=h,top=9)
    for cx in (8,24,40): smile(v,cx,17)
    v.rect(0,30,47,33,'brown'); v.rect(0,30,47,30,'brown',flat=True)
    for i,(x,c) in enumerate([(3,'red'),(13,'blue'),(19,'gold'),(29,'green'),(35,'purple'),(45,'gold')]): v.ell(x,28,1.8,1.8,c); v.px(x-1,27,hx('#ffffff'))
    for (x,y) in [(12,27),(28,27)]: v.ell(x,y,1.8,1.8,'skin')
    v.inner(C,'skin')
    return v.thick()
def plaguebearer():
    v=V(); legs(v,ramp='dark',boot='dark'); p.body(v,belt=False,bot=44,w=8)
    v.rect(12,31,29,32,'dark',flat=True)
    # long beaked mask, wide-brim hat, a pointer stick
    p.armR(v,32,26); v.line(32,26,40,10,v.col('dark',1),w=2)
    p.armL(v,8,30); v.ell(8,35,2.4,2.4,'green'); v.rect(7,31,9,32,'grey')
    v.rect(17,15,23,19,C)
    v.ell(20,10,6.5,6.5,'cloth')
    v.poly([(22,11),(35,17),(34,19),(22,16)],'cloth'); v.line(24,15,34,18,v.col('cloth',3))
    v.ell(17,9,2,2,'dark',flat=True); v.ell(23,9,2,2,'dark',flat=True); v.px(17,9,v.col('red',1)); v.px(23,9,v.col('red',1))
    v.ell(20,4,10,2.4,'dark'); v.rect(14,-1,26,4,'dark')
    v.inner(C,'cloth')
    return v.thick()
def dabblers():
    v=V()
    # two dilettantes splashed in every color: one with a brush, one with a fiddle
    mini(v,12,hairr='ginger',top=7); mini(v,34,hairr='hair',top=7)
    for cx in (12,34): smile(v,cx,15)
    k=0
    for cx in (12,34):
        for (dx,dy) in [(-3,24),(2,27),(-1,32),(3,35),(-4,30)]:
            v.ell(cx+dx,dy,1.2,1.2,RAINBOW[k%6]); k+=1
    v.poly([(17,22),(21,18),(22,20),(18,24)],C); v.ell(22,18,1.8,1.8,'skin'); v.line(22,17,25,12,v.col('brown',1)); v.ell(25.5,11,1.4,1.4,'red')
    v.ell(42,24,2.4,3.2,'brown'); v.rect(39,17,40,24,'brown'); v.poly([(39,22),(36,25),(38,27),(41,24)],C); v.line(44,20,36,30,v.col('cloth',0))
    v.inner(C,'skin')
    return v.thick()
def trumpeter(v,cx,top=8):
    mini(v,cx,top=top,hairr='hair')
    v.rect(cx+2,top+8,cx+12,top+9,'gold'); v.ell(cx+13,top+8.5,2,3,'gold'); v.rect(cx+4,top+10,cx+9,top+14,'red'); v.px(cx+6,top+12,v.col('gold',0))
    v.ell(cx+2,top+9,1.4,1.4,'skin')
    v.ell(cx,top+1,6,2,'gold' if False else C,clip=lambda x,y:y<=top+2)
def trumpeters():
    v=V()
    for cx,t in ((7,10),(21,4),(35,10)): trumpeter(v,cx,t)
    for (x,y) in [(45,6),(46,10),(44,2)]: v.px(x,y,v.col('white',0))
    v.inner(C,'skin')
    return v.thick()
def trumpeter1():
    v=V(); legs(v); p.body(v)
    # one long fanfare trumpet with a hanging banner, cheeks puffed
    v.rect(23,12,40,13,'gold'); v.ell(42,12.5,3,4,'gold'); v.ell(42,12.5,1.4,2,'gold',flat=True)
    v.rect(28,14,37,20,'red'); v.px(32,16,v.col('gold',0)); v.px(33,17,v.col('gold',0))
    for x in range(28,38,3): v.px(x,21,v.col('red',2))
    p.armR(v,27,15)
    p.armL(v,8,30)
    head(v,mouth=False)
    v.ell(15,11,2,1.6,'skin',flat=True); v.ell(25,11,2,1.6,'skin',flat=True); v.px(15,11,BLUSH); v.px(25,11,BLUSH)
    for (x,y) in [(45,7),(46,18),(47,12)]: v.px(x,y,v.col('white',0))
    v.ell(20,4.5,8,3.5,C,clip=lambda x,y:y<=6); v.rect(10,6,30,7,C); v.px(27,2,v.col('red',1)); v.px(28,1,v.col('red',1))
    v.inner(C,'skin'); v.inner(C,'red')
    return v.thick()
def meddler():
    v=V(); legs(v); p.body(v,belt=False)
    v.rect(13,31,28,32,'brown',flat=True)
    # a busybody holding a little doll in each hand, about to swap them
    p.armL(v,7,22); p.armR(v,33,22)
    for (x,c) in [(5,'red'),(35,'blue')]:
        v.rect(x-2,13,x+2,20,c); v.ell(x,11,2,2,'skin'); v.px(x-1,11,INK); v.px(x+1,11,INK)
    for x in range(12,29,3): v.px(x,5,v.col('white',1))
    v.line(11,4,14,2,v.col('white',2)); v.line(26,2,29,4,v.col('white',2))
    head(v,mouth=False)
    for x in range(18,23): v.px(x,14,v.col('skin',3))
    v.px(17,13,v.col('skin',3)); v.px(16,10,v.col('skin',3)); v.px(17,9,v.col('skin',3)); v.px(23,9,v.col('skin',3)); v.px(24,10,v.col('skin',3))
    v.ell(20,5,7,3,'grhair',clip=lambda x,y:y<=6); v.ell(20,2,3,2,'grhair')
    v.inner(C,'skin')
    return v.thick()
def weeders():
    v=V()
    # two with hoes, one pulling up a weed by the roots
    mini(v,13,top=8,hairr='hair'); mini(v,35,top=8,hairr='ginger')
    for cx in (13,35): flat(v,cx,16,1)
    v.line(6,46,2,10,v.col('brown',1),w=2); v.poly([(0,44),(6,44),(6,46),(0,46)],'grey')
    v.poly([(8,22),(4,26),(6,28),(9,25)],C); v.ell(5,27,1.8,1.8,'skin')
    v.poly([(40,22),(44,18),(46,20),(42,24)],C); v.ell(45,18,1.8,1.8,'skin')
    v.rect(44,10,45,17,'green'); v.ell(42,9,2.4,1.6,'green'); v.ell(47,9,2,1.4,'green'); v.line(44,6,46,4,v.col('brown',1)); v.px(43,5,v.col('brown',1))
    v.ell(13,7,7,2,'cloth'); v.ell(35,7,7,2,'cloth')
    v.inner(C,'skin')
    return v.thick()
def robbers():
    v=V()
    # two burglars in striped jumpers with a crowbar and a bulging swag bag
    for cx in (12,34):
        mini(v,cx,top=8,hairr='dark')
        for y in range(23,38,3): [v.px(x,y,v.col('white',1)) for x in range(cx-6,cx+7) if v.g[y][x]]
        v.rect(cx-5,12,cx+5,13,'dark',flat=True); v.px(cx-2,12,hx('#ffffff')); v.px(cx+2,12,hx('#ffffff'))
    v.ell(23,32,6,6,'cloth'); v.rect(21,25,25,27,'cloth'); v.ell(23,32,1.6,1.6,'gold')
    v.poly([(17,22),(20,27),(18,28),(16,24)],C); v.ell(19,28,1.6,1.6,'skin')
    v.line(41,24,45,8,v.col('grey',1),w=2); v.px(44,7,v.col('grey',1)); v.px(43,7,v.col('grey',1))
    v.poly([(39,22),(42,26),(40,27),(38,24)],C); v.ell(41,26,1.6,1.6,'skin')
    v.inner(C,'skin'); v.inner(C,'cloth')
    return v.thick()
def taskmaster():
    v=V(); legs(v,ramp='dark'); p.body(v,belt=False)
    v.rect(13,31,28,32,'dark',flat=True)
    # stern, whistle in mouth, pointing stick jabbing at a list
    p.armR(v,32,18); v.line(32,18,42,8,v.col('brown',1),w=2)
    p.armL(v,6,26); v.rect(1,22,8,32,'white'); 
    for y in (24,26,28,30): v.rect(2,y,7,y,'grey',flat=True); v.px(2,y,v.col('green',1))
    head(v,mouth=False)
    for x in (15,16,17): v.px(x,8,v.col('hair',2))
    for x in (23,24,25): v.px(x,8,v.col('hair',2))
    v.rect(19,13,24,14,'grey'); v.px(24,15,v.col('grey',1)); v.line(19,15,15,19,v.col('red',1))
    v.ell(20,4,7,2.6,'hair',clip=lambda x,y:y<=5); v.rect(13,3,27,3,'hair')
    v.inner(C,'skin')
    return v.thick()
def comforter():
    v=V(); legs(v,ramp='brown',boot='brown'); p.body(v,belt=False,bot=42,w=8)
    v.poly([(15,25),(25,25),(27,42),(13,42)],'white',flat=True)
    # warm smile, a steaming cup of tea held out, a blanket over the arm
    p.armR(v,32,24); v.rect(32,21,37,26,'white'); v.rect(37,22,38,24,'white'); v.rect(33,21,36,21,'brown',flat=True)
    for (x,y) in [(33,18),(35,16),(34,14)]: v.px(x,y,v.col('white',1))
    p.armL(v,8,28); v.poly([(4,26),(12,26),(13,38),(3,38)],'red'); 
    for y in (29,33,37): v.rect(4,y,12,y,'gold',flat=True)
    head(v,mouth=False); smile(v)
    v.px(16,10,v.col('skin',3)); v.px(17,10,v.col('skin',3)); v.px(23,10,v.col('skin',3)); v.px(24,10,v.col('skin',3))
    v.ell(20,5,7,3,'grhair',clip=lambda x,y:y<=6); v.ell(20,2,3,2,'grhair')
    v.inner(C,'skin'); v.inner(C,'white')
    return v.thick()
def crookedjudge():
    v=V(); legs(v,ramp='dark'); p.body(v,belt=False,bot=44,w=8)
    v.poly([(16,19),(24,19),(22,24),(18,24)],'white',flat=True)
    # big curled wig, gavel up, a coin tucked behind the back
    p.armR(v,32,14); v.rect(30,6,37,10,'brown'); v.rect(33,10,34,16,'brown')
    p.armL(v,8,32); coin(v,7,36,1.6)
    head(v,mouth=False)
    for x in range(18,24): v.px(x,14,v.col('skin',3))
    v.px(24,13,v.col('skin',3)); v.px(23,9,INK); v.px(22,9,v.col('skin',3)); v.px(16,10,v.col('skin',3)); v.px(17,10,v.col('skin',3))
    v.ell(20,4,8,3,'grhair',clip=lambda x,y:y<=5)
    for y in range(7,20,3): v.ell(11.5,y,2.4,1.8,'grhair'); v.ell(28.5,y,2.4,1.8,'grhair')
    v.inner(C,'skin'); v.inner(C,'grhair')
    return v.thick()
def spoilsport():
    v=V(); legs(v); p.body(v)
    # sour face, arms folded, a bucket tipped to douse the fun
    v.poly([(12,22),(28,24),(28,28),(12,26)],C); v.ell(28,26,2,2,'skin'); v.ell(12,24,2,2,'skin')
    v.poly([(31,30),(41,26),(44,34),(34,38)],'grey'); v.ell(42.5,30,2,4,'grey',flat=True)
    for (x,y) in [(44,36),(46,40),(43,42),(45,45)]: v.px(x,y,v.col('blue',0)); v.px(x,y+1,v.col('blue',1))
    head(v,mouth=False)
    for x in (15,16,17): v.px(x,8,v.col('hair',2))
    for x in (23,24,25): v.px(x,8,v.col('hair',2))
    for x in range(18,23): v.px(x,14,v.col('skin',3))
    v.px(17,15,v.col('skin',3)); v.px(23,15,v.col('skin',3))
    v.ell(20,4.5,8,3.5,'dark',clip=lambda x,y:y<=6); v.rect(10,6,30,7,'dark')
    v.inner(C,'skin')
    return v.thick()
def straggler():
    v=V()
    # trudging last, bent under a big bundle, leaning on a stick, sweating
    v.poly([(14,36),(18,36),(16,44),(12,44)],'brown'); v.rect(11,45,16,46,'hair')
    v.poly([(20,36),(24,36),(25,44),(21,44)],'brown'); v.rect(21,45,26,46,'hair')
    v.poly([(15,20),(27,22),(26,37),(12,36)],C)
    v.ell(12,17,8,7,'cloth'); v.line(8,14,15,22,v.col('cloth',3))
    v.poly([(25,22),(32,28),(30,30),(24,26)],C); v.ell(32,30,2,2,'skin'); v.line(33,29,36,46,v.col('brown',1),w=2)
    head(v,cx=26,top=8,mouth=False)
    v.ell(26,18,1.6,1.2,'dark',flat=True)
    v.px(23,14,v.col('skin',3)); v.px(29,14,v.col('skin',3))
    v.ell(26,9,7,3,'hair',clip=lambda x,y:y<=10)
    v.ell(34,11,1,1.6,'white'); v.ell(35,15,0.8,1.2,'white')
    v.inner(C,'skin'); v.inner(C,'cloth')
    return v.thick()
ALL=lambda:[('Trespasser',trespasser()),('Squanderer',squanderer()),('Conjurer',conjurer()),('Seer',seer()),('Extra Hand',extrahand()),('Lord of the Manor',lordmanor()),('Moneychangers',moneychangers()),('Plague Bearer',plaguebearer()),('Dabblers',dabblers()),('Trumpeter',trumpeter1()),('Trumpeters',trumpeters()),('Meddler',meddler()),('Weeders',weeders()),('Robbers',robbers()),('Taskmaster',taskmaster()),('Comforter',comforter()),('Crooked Judge',crookedjudge()),('Spoilsport',spoilsport()),('Straggler',straggler())]
if __name__=='__main__': sheet(ALL(),'gry-all.png',sc=5,cols=7)
