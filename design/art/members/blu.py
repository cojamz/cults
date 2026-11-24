from kit import *
from yel import legs, head
RAMP['bl']=('#9cc8f0','#4a80b8','#30608e','#1e3e62')
RAMP['cloth']=('#e8d4a0','#c8a868','#9a7a44','#6a5028')
C='bl'
def body(v,top=19,bot=40,w=7,ramp=C,belt=True):
    v.poly([(20-w,top),(20+w,top),(20+w+1,bot),(19-w,bot)],ramp)
    if belt: v.rect(19-w,31,20+w+1,32,'brown',flat=True); v.px(20,31,v.col('gold',0))
def armL(v,hx_,hy,ramp=C): v.poly([(13,20),(9,21),(hx_,hy-1),(hx_+3,hy-2)],ramp); v.ell(hx_+1,hy,2,2,'skin')
def armR(v,hx_,hy,ramp=C): v.poly([(27,20),(31,21),(hx_,hy-1),(hx_-3,hy-2)],ramp); v.ell(hx_-1,hy,2,2,'skin')
def stubble(v,cx=20,y=13):
    for (dx,dy) in [(-4,0),(-2,2),(2,2),(4,0),(0,3),(-3,1),(3,1)]: v.px(cx+dx,y+dy,v.col('hair',1))
def ragbone():
    v=V(); legs(v); body(v)
    for (x,y) in [(15,24),(24,35),(16,37)]: v.rect(x,y,x+2,y+2,'cloth',flat=True)
    # sack of rags over shoulder, a big bone held up
    v.ell(33,22,6,7,'cloth'); v.px(31,19,v.col('red',1)); v.px(35,24,v.col('green',1)); v.px(33,26,v.col('mag',1))
    armR(v,31,16)
    armL(v,6,24); v.rect(2,14,4,24,'white'); v.ell(2.5,13,2,1.6,'white'); v.ell(4,13,2,1.6,'white')
    head(v,mouth=False); v.ell(20,5,7,3,'dark',clip=lambda x,y:y<=6); v.rect(12,6,28,7,'dark')
    stubble(v); v.px(18,14,v.col('skin',3)); v.px(19,14,v.col('skin',3)); v.px(20,14,v.col('skin',3))
    v.inner(C,'skin'); v.inner(C,'cloth')
    return v.thick()
def gravedigger():
    v=V(); legs(v,ramp='dark'); body(v)
    # leaning on a spade, a little headstone at his feet
    v.rect(34,1,35,34,'brown'); v.rect(32,0,37,1,'brown'); v.poly([(31,34),(38,34),(37,42),(32,42)],'grey'); v.px(33,35,v.col('grey',0))
    armR(v,34,22)
    v.poly([(1,36),(11,36),(11,46),(1,46)],'grey'); v.ell(6,36,5,4,'grey',clip=lambda x,y:y<=36)
    v.rect(5,37,7,37,'dark',flat=True); v.rect(6,36,6,41,'dark',flat=True)
    armL(v,10,30)
    head(v,mouth=False)
    for x in range(18,23): v.px(x,14,v.col('skin',3))
    v.px(17,13,v.col('skin',3))
    v.ell(20,4.5,8,3.5,'dark',clip=lambda x,y:y<=6); v.rect(10,6,30,7,'dark'); v.rect(14,4,26,4,C,flat=True)
    v.inner(C,'skin')
    return v.thick()
def bluebloods():
    v=V(); legs(v,ramp='white',boot='dark'); body(v,belt=False)
    v.ell(20,20,8,2.6,'white'); 
    for x in range(13,28,2): v.px(x,22,v.col('white',2))
    for y in (25,29,33,37): v.px(20,y,v.col('gold',0))
    armL(v,9,31); armR(v,31,31)
    # nose up, monocle, tall powdered wig
    head(v,mouth=False)
    for x in range(18,22): v.px(x,14,v.col('skin',3))
    v.ell(23.5,9.5,2.4,2.4,'gold',clip=lambda x,y:abs((x+.5-23.5)**2+(y+.5-9.5)**2-5)<3); v.line(25,11,26,17,v.col('gold',1))
    v.ell(20,3,8,5,'grhair',clip=lambda x,y:y<=6); v.ell(12,9,2,3,'grhair'); v.ell(28,9,2,3,'grhair'); v.ell(20,-1,4,3,'grhair')
    v.px(28,4,v.col(C,1)); v.px(29,5,v.col(C,1))
    v.inner(C,'white'); v.inner(C,'skin')
    return v.thick()
def oldclothes():
    v=V(); legs(v); body(v)
    # holds up a second-hand coat on a hanger, measuring tape round neck
    armR(v,32,10)
    v.line(31,8,40,8,v.col('brown',1)); v.px(35,6,v.col('grey',1)); v.px(35,7,v.col('grey',1))
    v.poly([(31,9),(41,9),(43,30),(29,30)],'green'); v.poly([(34,9),(38,9),(36,16)],'dark',flat=True)
    for y in (14,19,24): v.px(36,y,v.col('gold',0))
    v.rect(30,22,32,24,'cloth',flat=True)
    armL(v,7,30)
    for y in range(19,30): v.px(16,y,v.col('gold',0) if y%2 else v.col('white',1))
    head(v); v.ell(20,5,7,3,'grhair',clip=lambda x,y:y<=6); v.ell(20,3,5.6,2,C)
    v.inner(C,'skin'); v.inner(C,'green')
    return v.thick()
def scavengers():
    v=V(); legs(v,ramp='brown'); body(v)
    for (x,y) in [(14,36),(25,25)]: v.rect(x,y,x+2,y+2,'cloth',flat=True)
    # basket of junk on back, holding up a found boot
    v.rect(26,12,36,26,'brown'); v.line(26,16,36,16,v.col('brown',2)); v.line(26,21,36,21,v.col('brown',2))
    v.rect(28,8,30,12,'grey'); v.ell(33,10,2,2,'red'); v.rect(35,9,37,12,'white')
    armL(v,6,18); v.poly([(2,10),(6,10),(6,16),(9,17),(9,19),(2,19)],'hair')
    armR(v,30,30)
    head(v,mouth=False); for_ = [v.px(x,14,v.col('skin',3)) for x in range(17,23)]
    v.ell(20,5,7.5,3.4,'cloth',clip=lambda x,y:y<=6); v.rect(12,6,28,7,'cloth')
    v.inner(C,'skin'); v.inner(C,'brown')
    return v.thick()
def homecomers():
    v=V(); legs(v); body(v)
    # bindle on a stick over the shoulder, waving hello
    v.line(26,22,38,6,v.col('brown',1),w=2); v.ell(39,7,4.5,4,'red'); v.px(38,6,v.col('white',1)); v.px(40,8,v.col('white',1)); v.px(41,6,v.col('white',1))
    armR(v,28,22)
    v.poly([(13,20),(8,16),(6,10),(9,9),(12,16)],C); v.ell(7,8,2.4,2.2,'skin')
    for x in (5,7,9): v.px(x,5,v.col('skin',1)); v.px(x,6,v.col('skin',1))
    head(v,mouth=False)
    for x in range(17,24): v.px(x,14,v.col('skin',3))
    v.px(16,13,v.col('skin',3)); v.px(24,13,v.col('skin',3))
    v.ell(20,5,7,3,'ginger',clip=lambda x,y:y<=6)
    v.inner(C,'skin')
    return v.thick()
def shopper():
    v=V(); legs(v); body(v,belt=False)
    v.poly([(15,25),(25,25),(27,40),(13,40)],'white',flat=True)
    # basket on each arm, both full
    for bx,arm in ((6,armL),(34,armR)):
        arm(v,bx+(3 if bx<20 else -3),24)
        v.rect(bx-5,26,bx+5,33,'brown'); v.line(bx-5,29,bx+5,29,v.col('brown',2))
        v.ell(bx,24,4,2.6,'brown',clip=lambda x,y,bx=bx:(x+.5-bx)**2/16+(y+.5-24)**2/7>.5)
    v.ell(3,25,1.8,1.8,'red'); v.ell(6,24,1.8,1.8,'green'); v.rect(8,22,9,26,'cloth')
    v.rect(31,22,33,26,'cloth'); v.ell(36,24.5,2,2,'gold'); v.px(38,23,v.col('green',1))
    head(v); v.ell(20,5,7,3,'hair',clip=lambda x,y:y<=6); v.ell(20,4,9,2.4,'cloth'); v.ell(20,2.5,5,2,'cloth'); v.px(25,2,v.col('red',1))
    v.inner(C,'white'); v.inner(C,'skin')
    return v.thick()
def stallholder():
    v=V()
    v.poly([(12,18),(28,18),(30,38),(10,38)],C); v.poly([(17,20),(23,20),(23,38),(17,38)],'white',flat=True)
    # striped awning over the stall, wares on the counter
    for i in range(0,48,6): v.rect(i,1,i+2,6,C); v.rect(i+3,1,i+5,6,'white')
    v.rect(0,7,47,7,'bl',flat=True)
    for x in range(0,48,6): v.ell(x+3,7.5,3,1.5,C if (x//6)%2==0 else 'white',clip=lambda xx,y:y>=8)
    v.rect(0,9,1,38,'brown'); v.rect(46,9,47,38,'brown')
    v.poly([(10,20),(6,30),(9,31),(12,24)],C); v.poly([(30,20),(34,30),(31,31),(28,24)],C)
    v.rect(0,36,47,47,'brown'); v.rect(0,36,47,37,'brown',flat=True)
    for i,c in enumerate(['red','gold','green','red','gold']):
        x=[2,8,32,38,43][i]; v.ell(x+1.5,34,2.3,2.3,c)
    head(v,top=10); v.ell(20,11,7,3,'hair',clip=lambda x,y:y<=12)
    v.inner(C,'white'); v.inner(C,'skin')
    return v.thick()
def culler():
    v=V(); legs(v); body(v)
    v.poly([(15,22),(25,22),(25,38),(15,38)],'brown',flat=True)
    # big shears snipping, a cut flower falling
    armR(v,31,24); v.poly([(31,23),(42,14),(43,16)],'grey'); v.poly([(31,24),(43,20),(43,22)],'grey'); v.ell(31,24,1.4,1.4,'red')
    v.rect(41,26,42,30,'green',flat=True); v.ell(41.5,25,1.8,1.6,'mag')
    v.rect(36,33,37,37,'green',flat=True); v.ell(36.5,32,1.8,1.6,'gold')
    armL(v,8,30)
    head(v,mouth=False)
    for x in range(17,24): v.px(x,14,v.col('skin',3))
    v.px(16,8,v.col('hair',2)); v.px(17,8,v.col('hair',2)); v.px(23,8,v.col('hair',2)); v.px(24,8,v.col('hair',2))
    v.ell(20,4.5,8,3.5,'cloth',clip=lambda x,y:y<=6); v.rect(9,6,31,7,'cloth')
    v.inner(C,'skin'); v.inner(C,'brown')
    return v.thick()
def restockers():
    v=V(); legs(v); body(v)
    # tall stack of crates carried in both arms, up past the head
    for i,y in enumerate((26,18,10,2)):
        x0=24+(i%2); v.rect(x0,y,x0+14,y+7,'brown'); v.line(x0,y+3,x0+14,y+3,v.col('brown',2)); v.px(x0+7,y+1,v.col([ 'red','green','gold','mag'][i],1)); v.px(x0+8,y+1,v.col(['red','green','gold','mag'][i],1))
    armR(v,25,30); armL(v,22,26)
    head(v,cx=17,mouth=False)
    for x in range(14,19): v.px(x,14,v.col('skin',3))
    v.ell(17,5,7,3,'hair',clip=lambda x,y:y<=6)
    v.ell(10,9,1.4,1.4,hx('#bfe8ff') and 'bl')
    v.inner(C,'skin'); v.inner(C,'brown')
    return v.thick()
def tagalongs():
    v=V()
    # a small child skipping along, a pull-toy duck trailing on a string
    v.rect(19,37,20,43,'skin'); v.rect(24,37,25,41,'skin'); v.rect(18,44,21,45,'dark'); v.rect(24,42,27,43,'dark')
    v.poly([(16,24),(28,24),(30,37),(14,37)],C)
    v.poly([(27,25),(32,30),(30,32),(26,28)],C); v.ell(32,31,1.8,1.8,'skin')
    v.poly([(16,25),(12,22),(11,24),(15,28)],C); v.ell(11,22,1.8,1.8,'skin')
    v.line(32,32,40,40,v.col('white',2))
    v.ell(42,41,3,2.4,'gold'); v.ell(44,38,1.8,1.8,'gold'); v.px(46,38,v.col('red',1)); v.px(44,37,INK); v.ell(40,44,1.2,1.2,'red'); v.ell(44,44,1.2,1.2,'red')
    v.rect(20,21,24,24,'skin')
    v.face(22,9,13,13,ey=15,mouth=False)
    for x in range(20,25): v.px(x,19,v.col('skin',3))
    v.px(19,18,v.col('skin',3)); v.px(25,18,v.col('skin',3))
    v.ell(22,10,7,3,'ginger',clip=lambda x,y:y<=11); v.ell(15,13,1.8,2.6,'ginger'); v.ell(29,13,1.8,2.6,'ginger')
    v.ell(28,8,1.6,1.4,C); v.ell(30,9,1.6,1.4,C)
    v.inner(C,'skin')
    return v.thick()
def regular():
    v=V(); legs(v,x1=13,x2=23); v.ell(20,30,11,10,C)
    v.rect(9,34,31,35,'brown',flat=True)
    # raising a frothy tankard, rosy nose, on his usual stool
    v.poly([(28,23),(33,18),(35,20),(30,26)],C); v.ell(34,18,2.2,2.2,'skin')
    v.rect(33,9,39,17,'brown'); v.rect(33,9,39,11,'white'); v.ell(36,8.5,3.6,1.6,'white'); v.rect(39,11,41,15,'brown'); v.line(34,12,34,16,v.col('brown',0))
    v.poly([(12,23),(8,27),(10,30),(13,27)],C); v.ell(9,30,2,2,'skin')
    head(v,mouth=False)
    v.ell(20,12,1.6,1.4,'red',flat=True)
    for x in range(17,24): v.px(x,14,v.col('skin',3))
    v.px(16,13,v.col('skin',3)); v.px(24,13,v.col('skin',3))
    v.px(15,11,BLUSH); v.px(25,11,BLUSH)
    v.ell(20,4,7,2.6,'hair',clip=lambda x,y:y<=5); v.rect(13,3,27,3,'hair')
    v.inner(C,'skin')
    return v.thick()
def duskbuyer():
    v=V()
    # setting sun behind, lantern held up, coin purse at the belt
    v.ell(37,12,8,8,'gold',flat=True,clip=lambda x,y:y<=12)
    for y in (13,15): v.rect(28,y,46,y,'ginger',flat=True)
    legs(v); body(v)
    v.ell(15,35,2.6,2.6,'brown'); v.px(15,33,v.col('gold',0))
    armR(v,32,18); v.line(32,18,32,20,INK); v.rect(30,21,34,27,'dark'); v.rect(31,22,33,26,'gold',flat=True); v.px(32,23,hx('#ffffff'))
    armL(v,8,30)
    head(v); v.ell(20,4.5,8,3.5,'dark',clip=lambda x,y:y<=6); v.rect(10,6,30,7,'dark'); v.rect(14,4,26,4,C,flat=True)
    v.inner(C,'skin')
    return v.thick()
ALL=lambda:[('Rag-and-Bone Man',ragbone()),('Gravedigger',gravedigger()),('Blue Bloods',bluebloods()),('Old-Clothes Dealers',oldclothes()),('Scavengers',scavengers()),('Homecomers',homecomers()),('Market-Day Shopper',shopper()),('Stallholder',stallholder()),('Culler',culler()),('Restockers',restockers()),('Tagalongs',tagalongs()),('Regular',regular()),('Dusk Buyer',duskbuyer())]
if __name__=='__main__': sheet(ALL(),'blu-all.png',sc=6,cols=5)
