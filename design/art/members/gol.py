from parts import *
C='au'; p=P(C)
RAMP['gold']=('#fffad0','#ffe46a','#d8a828','#8a6810')
def banker():
    v=V(); legs(v,ramp='dark'); p.body(v,belt=False)
    v.poly([(17,19),(23,19),(21,30),(19,30)],'white',flat=True); v.rect(19,20,21,23,'dark',flat=True)
    # stacks of coins on a little table, counting one off the top
    v.rect(28,32,46,34,'brown'); v.rect(30,35,31,46,'brown'); v.rect(43,35,44,46,'brown')
    for i,(x,h) in enumerate([(30,4),(35,7),(40,5)]):
        for k in range(h): v.rect(x,31-k*2,x+4,32-k*2,'gold'); v.px(x+1,31-k*2,hx('#ffffff')) if k==h-1 else None
    p.armR(v,33,15); coin(v,33,12)
    p.armL(v,8,30)
    head(v,mouth=False); flat(v)
    v.ell(16.5,10.5,2.4,2.4,'gold',clip=lambda x,y:abs((x+.5-16.5)**2+(y+.5-10.5)**2-5)<3); v.ell(23.5,10.5,2.4,2.4,'gold',clip=lambda x,y:abs((x+.5-23.5)**2+(y+.5-10.5)**2-5)<3)
    hair(v,'hair'); v.px(13,8,v.col('hair',1)); v.px(27,8,v.col('hair',1))
    v.inner(C,'skin'); v.inner(C,'white')
    return v.thick()
def panner():
    v=V(); legs(v,ramp='bl' if 'bl' in RAMP else 'blue'); p.body(v)
    # wading: water at the shins; pan of nuggets held out in both hands

    p.armL(v,12,30); p.armR(v,28,30)
    v.ell(20,30,10,2.6,'grey'); v.ell(20,29.5,8,1.6,'grey',flat=True)
    for x in (16,19,22,25): coin(v,x,29,1.2)
    head(v,mouth=False); smile(v)
    v.ell(20,4,11,3,'cloth'); v.ell(20,2.5,6,3,'cloth'); v.rect(14,3,26,3,'brown',flat=True)
    beard(v,'hair',top=14,bot=17,w=4); v.rect(17,13,23,13,'skin',flat=True); v.rect(18,14,22,14,v.col('skin',3) and 'skin',flat=True)
    for y in range(42,47):
        for x in range(0,48):
            if (x+y*3)%7<4 and (v.g[y][x] is None or y>43): v.px(x,y,v.col('blue',1 if y>43 else 0))
    v.inner(C,'skin')
    return v.thick()
def pardoner():
    v=V(); legs(v,ramp='brown',boot='brown'); p.body(v,belt=False,bot=44,w=8)
    v.rect(19,20,21,44,'cloth',flat=True)
    # hooded churchman holding up a sealed pardon, coin bag at the hip
    p.armR(v,32,12); v.rect(30,2,40,12,'white'); v.rect(29,2,41,3,'cloth'); v.rect(29,11,41,12,'cloth')
    for y in (5,7,9): v.rect(32,y,38,y,'grey',flat=True)
    v.ell(35,12,2,1.6,'red')
    p.armL(v,8,30); v.ell(9,35,3.6,3.6,'brown'); v.rect(8,31,10,32,'brown'); coin(v,9,30.5,1.2)
    head(v,top=5,mouth=False); smile(v,y=15)
    v.ell(20,9,9,9,C,clip=lambda x,y:y<=6 or x<13 or x>26)
    v.inner(C,'skin'); v.inner(C,'cloth')
    return v.thick()
def merchant():
    v=V(); legs(v,ramp='dark'); v.ell(20,30,11,10,C); v.rect(9,33,31,34,'brown',flat=True)
    # brass scales in one hand, a gold bar in the other
    p.armL(v,6,22); v.rect(6,6,7,22,'brown'); v.rect(0,6,13,7,'brown')
    v.line(1,7,0,13,v.col('grey',1)); v.line(1,7,3,13,v.col('grey',1)); v.ell(1.5,14,2.6,1.2,'grey')
    v.line(12,7,10,11,v.col('grey',1)); v.line(12,7,14,11,v.col('grey',1)); v.ell(12,12,2.6,1.2,'grey'); coin(v,12,10.5,1.2)
    v.poly([(28,23),(33,26),(32,30),(28,28)],C); v.ell(33,28,2,2,'skin')
    v.poly([(32,22),(41,22),(43,26),(30,26)],'gold'); v.rect(33,22,39,22,'gold',flat=True); v.px(34,23,hx('#ffffff'))
    head(v,mouth=False); smile(v)
    v.ell(20,3,8,3,C); v.ell(20,1,5,2,C); v.ell(26,0,1.2,1.2,'red')
    v.inner(C,'skin')
    return v.thick()
def skinflint():
    v=V(); legs(v,x1=15,x2=21,ramp='dark'); p.body(v,w=5,belt=False)
    # thin, hunched, clutching a purse shut, a moth flying out of it
    v.poly([(15,20),(20,26),(25,20),(25,24),(20,29),(15,24)],C)
    v.ell(20,29,3.6,3.2,'brown'); v.rect(18,25,22,26,'brown'); v.ell(17,28,1.8,1.8,'skin'); v.ell(23,28,1.8,1.8,'skin')
    v.rect(19,24,21,24,'grey',flat=True)
    v.ell(29,19,3,2.2,'white'); v.ell(34,19,3,2.2,'white'); v.rect(31,17,32,22,'grey',flat=True); v.px(30,15,v.col('grey',2)); v.px(33,15,v.col('grey',2))
    for (x,y) in [(26,25),(27,24)]: v.px(x,y,v.col('white',2))
    head(v,w=11,mouth=False)
    for x in range(16,19): v.px(x,10,v.col('skin',3))
    for x in range(22,25): v.px(x,10,v.col('skin',3))
    flat(v,w=2); v.px(22,13,v.col('skin',3))
    v.px(15,12,v.col('skin',2)); v.px(25,12,v.col('skin',2))
    v.ell(20,3,7,3,C,clip=lambda x,y:y<=5); v.ell(20,6,7,1.4,C)
    v.inner(C,'skin')
    return v.thick()
def poorrelation():
    v=V(); legs(v,ramp='brown'); p.body(v,belt=False)
    for (x,y) in [(14,24),(23,34),(25,26)]: v.rect(x,y,x+2,y+2,'cloth',flat=True); v.px(x,y,v.col('cloth',3))
    v.rect(13,31,28,31,'cloth',flat=True)
    # holding a battered hat out, hopeful eyes up
    p.armR(v,31,27); v.ell(35,28,5,2,'dark'); v.ell(35,26,3,2.6,'dark',clip=lambda x,y:y<=27); v.px(34,25,v.col('dark',3))
    p.armL(v,8,30)
    head(v,mouth=False)
    v.px(16,10,hx('#ffffff')); v.px(23,10,hx('#ffffff'))
    v.ell(20,14,1.4,1.2,'skin'); v.px(20,14,v.col('skin',3))
    for (x,y) in [(14,3),(17,2),(20,3),(23,2),(26,3)]: v.px(x,y,v.col('hair',1))
    hair(v,'hair'); v.px(14,7,v.col('hair',1)); v.px(26,7,v.col('hair',1))
    v.inner(C,'skin'); v.inner(C,'cloth')
    return v.thick()
def alchemists():
    v=V(); legs(v,ramp='dark'); p.body(v,belt=False,bot=42)
    v.rect(13,31,28,32,'brown',flat=True)
    # flask held up, bubbling green, gold drop falling; goggles on forehead
    p.armR(v,32,16); v.ell(33,13,3.4,3.4,'white'); v.ell(33,14,2.8,2.2,'green',flat=True); v.rect(32,6,34,10,'white')
    for (x,y,r) in [(32,4,1),(35,2,1.4),(31,1,0.8)]: v.ell(x,y,r,r,'green')
    coin(v,36,20,1.2)
    p.armL(v,8,30); v.rect(5,32,10,37,'brown'); v.rect(6,31,9,31,'red',flat=True)
    head(v,mouth=False); smile(v)
    hair(v,'grhair'); v.ell(13,7,2,3,'grhair'); v.ell(27,7,2,3,'grhair')
    for (x,y) in [(15,12),(16,13),(24,12),(25,13)]: v.px(x,y,v.col('skin',2))
    v.inner(C,'skin')
    return v.thick()
def gambler():
    v=V(); legs(v,ramp='dark'); p.body(v,belt=False)
    v.poly([(17,19),(23,19),(21,30),(19,30)],'red',flat=True)
    v.rect(13,31,28,32,'dark',flat=True)
    # rolling dice from a raised hand, a card tucked in the hatband
    p.armR(v,32,15)
    for (x,y) in [(35,9),(39,13)]:
        v.rect(x,y,x+3,y+3,'white'); v.px(x+1,y+1,INK); v.px(x+2,y+2,INK)
    p.armL(v,8,30)
    head(v,mouth=False)
    for x in range(18,24): v.px(x,14,v.col('skin',3))
    v.px(24,13,v.col('skin',3)); v.px(22,10,v.col('skin',3)); v.px(23,10,v.col('skin',3))
    v.rect(14,6,26,7,'dark'); v.rect(16,1,24,6,'dark'); v.rect(16,5,24,5,C,flat=True); v.rect(22,0,24,4,'white'); v.px(23,1,v.col('red',1))
    v.rect(9,7,31,7,'dark')
    v.inner(C,'skin'); v.inner(C,'red')
    return v.thick()
def baron():
    v=V(); legs(v,x1=13,x2=23,ramp='dark'); v.ell(20,30,11,10,C)
    v.poly([(9,22),(31,22),(34,42),(6,42)],'red'); v.ell(20,30,9,9,C)
    v.ell(20,20,11,3,'fur'); for_=[v.px(x,20,v.col('dark',1)) for x in range(11,30,4)]
    v.rect(9,34,31,35,'dark',flat=True); coin(v,20,34,1.4)
    p.armL(v,8,30); p.armR(v,32,30)
    head(v,mouth=False); smile(v)
    for x in range(16,25): v.px(x,13,v.col('hair',1))
    v.px(15,12,v.col('hair',1)); v.px(25,12,v.col('hair',1))
    # coronet
    v.rect(13,3,27,5,'gold'); 
    for x in (13,17,20,23,27): v.rect(x,1,x,2,'gold',flat=True)
    v.px(20,4,v.col('red',1)); v.px(16,4,v.col('blue',1)); v.px(24,4,v.col('green',1))
    v.inner(C,'skin'); v.inner('red',C)
    return v.thick()
def treasurer():
    v=V(); legs(v,ramp='dark'); p.body(v,belt=False)
    v.rect(13,31,28,32,'brown',flat=True)
    # money chest under one arm, a big ring of keys in the other hand
    v.rect(26,24,40,34,'brown'); v.rect(26,24,40,26,'gold'); v.rect(32,27,34,30,'gold'); v.px(33,28,INK)
    p.armR(v,30,28)
    p.armL(v,7,28)
    v.ell(5,33,3,3,'gold'); v.ell(5,33,1.8,1.8,'gold',flat=True); v.px(5,33,None); v.px(5,32,None); v.px(4,33,None); v.px(5,34,None); v.px(6,33,None)
    v.rect(3,36,4,41,'gold'); v.rect(4,40,5,41,'gold',flat=True); v.rect(7,36,8,40,'gold'); v.rect(8,39,9,40,'gold',flat=True)
    head(v,mouth=False); flat(v)
    v.ell(20,4,7,2.6,'grhair',clip=lambda x,y:y<=5); v.ell(13,8,1.8,3,'grhair'); v.ell(27,8,1.8,3,'grhair')
    v.rect(13,1,27,3,'dark'); v.rect(13,3,27,3,C,flat=True)
    v.inner(C,'skin')
    return v.thick()
ALL=lambda:[('Banker',banker()),('Gold Panner',panner()),('Pardoner',pardoner()),('Gold Merchant',merchant()),('Skinflint',skinflint()),('Poor Relation',poorrelation()),('Alchemists',alchemists()),('Gambler',gambler()),('Baron',baron()),('Treasurer',treasurer())]
if __name__=='__main__': sheet(ALL(),'gol-all.png',sc=6,cols=5)
