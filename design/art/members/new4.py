from parts import *
RAMP['bl']=('#9cc8f0','#4a80b8','#30608e','#1e3e62')
from gry import mini
def lackey():
    v=V(); legs(v,ramp='white',boot='dark'); P('gr').body(v,belt=False)
    for y in (23,27,31,35): v.px(20,y,v.col('gold',0))
    # a bowing servant, towel over one arm, holding out his master's hat, stepping in his master's footprints
    for (x,y) in [(2,44),(8,42),(36,44),(42,42)]: v.rect(x,y,x+3,y+1,'dark',flat=True)
    v.poly([(27,20),(31,24),(34,28),(30,29),(27,25)],'gr'); v.rect(30,28,34,34,'white')
    P('gr').armL(v,7,22); v.rect(1,14,11,15,'dark'); v.rect(3,8,9,14,'dark'); v.rect(3,12,9,12,'gr',flat=True)
    head(v,top=5,mouth=False); smile(v,y=14)
    v.line(15,10,18,10,INK); v.line(22,10,25,10,INK)
    v.ell(20,6,7,2.6,'grhair',clip=lambda x,y:y<=7); v.ell(28,12,1.4,2,'grhair')
    v.inner('gr','skin'); v.inner('gr','white')
    return v.thick()
def doorbusters():
    v=V()
    # the shop door flung open before opening time, two shoppers charging through it
    v.rect(0,2,4,46,'brown'); v.rect(0,2,16,4,'brown'); v.poly([(4,4),(13,7),(13,44),(4,46)],'brown'); v.ell(11,26,1,1,'gold')
    v.rect(6,10,11,14,'white'); v.rect(7,12,10,12,'red',flat=True)
    for cx,h,top in ((24,'hair',10),(38,'ginger',7)):
        mini(v,cx,ramp='bl',hairr=h,top=top)
        v.px(cx-2,top+8,v.col('skin',3)); v.ell(cx,top+9,1.2,1.4,'dark',flat=True)
    v.poly([(18,24),(12,20),(13,18),(19,21)],'bl'); v.ell(12,19,1.6,1.6,'skin')
    v.poly([(32,22),(28,14),(30,13),(34,19)],'bl'); v.ell(29,13,1.6,1.6,'skin')
    for (x,y) in [(46,20),(46,26),(45,32)]: v.rect(x-2,y,x,y,'white',flat=True)
    v.inner('bl','skin')
    return v.thick()
def mendicant():
    v=V(); legs(v,ramp='brown',boot='brown'); P('wh').body(v,belt=False,bot=44,w=8)
    v.rect(12,31,29,31,'brown',flat=True); v.line(20,31,19,42,v.col('brown',1))
    # a wandering friar holding up an empty bowl upside down, pockets turned out, perfectly cheerful
    v.rect(10,33,13,37,'white'); v.rect(28,33,31,37,'white')
    P('wh').armR(v,33,16); v.ell(34,11,6,4.5,'brown',clip=lambda x,y:y<=11); v.rect(27,11,41,12,'brown'); v.px(32,8,v.col('brown',0))
    P('wh').armL(v,8,28)
    head(v,mouth=False); smile(v)
    v.ell(20,7,9.5,6,'wh',clip=lambda x,y:y<=6 or x<13 or x>27)
    v.inner('wh','skin')
    return v.thick()
def evictors():
    v=V()
    # one jerks a thumb at the door, the other carries out the tenant's trunk over his head
    mini(v,12,ramp='wh',hairr='hair',top=10); mini(v,35,ramp='wh',hairr='grhair',top=10)
    for cx in (12,35): v.rect(cx-6,22,cx+6,23,'red')
    flat(v,12,18,1); flat(v,35,18,1)
    v.poly([(6,24),(1,18),(3,16),(8,21)],'wh'); v.ell(2,15,1.6,1.6,'skin'); v.rect(1,11,2,14,'skin')
    v.rect(25,0,45,8,'brown'); v.rect(25,3,45,3,'gold',flat=True); v.px(35,5,v.col('gold',0))
    v.poly([(30,23),(27,10),(29,9),(32,21)],'wh'); v.poly([(40,23),(43,10),(41,9),(38,21)],'wh')
    v.ell(28,9,1.6,1.6,'skin'); v.ell(42,9,1.6,1.6,'skin')
    v.inner('wh','skin'); v.inner('wh','red')
    return v.thick()
ALL=lambda:[('Lackey',lackey()),('Mendicant',mendicant()),('Evictors',evictors())]
if __name__=='__main__': sheet(ALL(),'new4.png',sc=6,cols=4)
