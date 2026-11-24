from kit import *
RAMP['yel']=('#fbee7a','#e8d23e','#b49a28','#76621a')
RAMP['cloth']=('#e8d4a0','#c8a868','#9a7a44','#6a5028')
RAMP['mag']=('#f07ab0','#d4508f','#a03068','#6a1c44')
RAMP['purple']=('#c8a0f0','#9a62e6','#6a3ab0','#442478')
SIX=['red','blue','green','mag','purple','gold']
def legs(v,x1=14,x2=22,top=40,ramp='brown',boot='hair'):
    v.rect(x1,top,x1+4,44,ramp); v.rect(x2,top,x2+4,44,ramp); v.rect(x1-1,45,x1+4,46,boot); v.rect(x2,45,x2+5,46,boot)
def body(v,top=19,bot=40,w=7,ramp='yel',belt=True):
    v.poly([(20-w,top),(20+w,top),(20+w+1,bot),(19-w,bot)],ramp)
    if belt: v.rect(19-w,31,20+w+1,32,'brown',flat=True); v.px(20,31,v.col('gold',0))
def head(v,cx=20,top=4,hair='hair',w=13,h=13,blush=True,mouth=True):
    v.rect(cx-3,top+h-1,cx+3,top+h+2,'skin')
    v.face(cx,top,w,h,ey=top+6,mouth=False,blush=blush)
    if mouth:
        for x in range(cx-1,cx+2): v.px(x,top+10,v.col('skin',3))
def armL(v,hx_,hy,ramp='yel'): v.poly([(13,20),(9,21),(hx_,hy-1),(hx_+3,hy-2)],ramp); v.ell(hx_+1,hy,2,2,'skin')
def armR(v,hx_,hy,ramp='yel'): v.poly([(27,20),(31,21),(hx_,hy-1),(hx_-3,hy-2)],ramp); v.ell(hx_-1,hy,2,2,'skin')
def tithe():
    v=V(); legs(v); body(v)
    v.poly([(15,19),(25,19),(24,40),(16,40)],'white',flat=True)
    armL(v,8,30); armR(v,31,27)
    # collection plate on a long handle held out
    v.line(31,27,41,22,v.col('brown',1),w=2); v.ell(42,21,4,2,'brown'); v.ell(42,20.5,2.6,1.2,'gold',flat=True); v.px(41,20,v.col('gold',0)); v.px(43,20,v.col('red',1))
    v.rect(5,31,10,37,'dark'); v.rect(6,32,9,36,'cloth',flat=True)
    head(v); v.ell(20,5,7,3,'hair',clip=lambda x,y:y<=6)
    v.ell(20,3.5,3,1.6,'yel')
    v.inner('yel','white'); v.inner('yel','skin')
    return v.thick()
def barterer():
    v=V(); legs(v); body(v)
    # chicken in one hand, bolt of cloth in the other
    v.poly([(13,20),(6,23),(6,27),(13,25)],'yel'); v.ell(5,25,2,2,'skin')
    v.ell(4,20,3.5,3,'white'); v.ell(2,17,1.6,1.6,'white'); v.px(1,17,v.col('gold',1)); v.px(2,15,v.col('red',1)); v.px(2,16,v.col('red',1)); v.px(2,17,INK)
    v.poly([(27,20),(34,23),(34,27),(27,25)],'yel'); v.ell(35,25,2,2,'skin')
    v.rect(33,16,40,23,'blue'); v.line(33,18,40,18,v.col('blue',2)); v.line(33,21,40,21,v.col('blue',2))
    head(v); v.ell(20,5,7,3,'ginger',clip=lambda x,y:y<=6)
    v.px(23,13,v.col('skin',3)); v.px(24,12,v.col('skin',3))
    v.inner('yel','skin')
    return v.thick()
def pilgrim():
    v=V(); legs(v,ramp='cloth')
    v.poly([(13,19),(27,19),(30,42),(10,42)],'yel')
    v.rect(10,31,30,32,'brown',flat=True)
    # tall staff with gourd, scallop shell on hat
    v.line(33,4,33,46,v.col('brown',1),w=2); v.ell(35.5,10,2.2,3,'gold')
    v.poly([(27,20),(31,21),(33,26),(30,27)],'yel'); v.ell(33,26,2,2,'skin')
    v.poly([(13,20),(10,22),(11,30),(14,28)],'yel'); v.ell(11,30,2,2,'skin')
    head(v,top=6); 
    for x in range(17,24): v.px(x,18,v.col('grhair',1))
    v.ell(20,6,12,2.6,'brown'); v.ell(20,4,5,3,'brown'); v.ell(20,4,2,1.8,'white'); v.px(20,3,v.col('white',2))
    v.inner('yel','skin')
    return v.thick()
def haggler():
    v=V()
    v.poly([(13,20),(27,20),(31,46),(9,46)],'yel')
    v.poly([(15,26),(25,26),(26,46),(14,46)],'white',flat=True)
    # one hand up with 3 fingers, other on hip
    v.poly([(27,21),(31,19),(33,12),(30,12)],'yel'); v.ell(31.5,10,2.4,2.2,'skin')
    for x in (30,32,34): v.line(x,8,x,6,v.col('skin',1))
    v.poly([(13,21),(8,26),(11,30),(14,27)],'yel'); v.ell(9,28,2,2,'skin')
    head(v,mouth=False)
    v.ell(20,14,2,1.2,'dark',flat=True)
    for x in (16,17,22,23): v.px(x,9,v.col('hair',2))
    v.ell(20,5.5,7.5,3.5,'red',clip=lambda x,y:y<=7); v.ell(13,8,1.6,2,'red'); v.ell(27,8,1.6,2,'red')
    v.inner('yel','white'); v.inner('yel','skin')
    return v.thick()
def herald():
    v=V(); legs(v,ramp='white')
    body(v)
    # tabard with yellow, long trumpet with hanging banner
    v.poly([(27,19),(31,17),(33,15),(28,21)],'yel'); v.ell(26,14,2,2,'skin')
    v.line(24,12,42,6,v.col('gold',1),w=2); v.ell(43,5.5,2.4,3.4,'gold')
    v.poly([(31,9),(39,7),(39,17),(35,15),(31,17)],'yel'); v.px(34,11,v.col('red',1)); v.px(35,11,v.col('red',1))
    v.poly([(13,20),(9,22),(10,30),(13,28)],'yel'); v.ell(10.5,30,2,2,'skin')
    head(v,mouth=False); v.ell(22,13,1.5,1.3,'dark',flat=True)
    v.poly([(11,6),(29,6),(24,1),(15,1)],'yel'); v.line(22,1,28,-2,v.col('white',1),w=2)
    v.inner('yel','skin'); v.inner('yel','gold')
    return v.thick()
def gilder():
    v=V(); legs(v)
    body(v); v.poly([(15,24),(25,24),(26,40),(14,40)],'white',flat=True)
    for (x,y) in [(17,30),(22,34),(19,37)]: v.px(x,y,v.col('gold',1))
    # big ornate gold frame being brushed
    v.rect(30,10,46,30,'gold'); v.rect(33,13,43,27,'dark',flat=True); 
    for (x,y) in [(30,10),(46,10),(30,30),(46,30)]: v.ell(x,y,2,2,'gold')
    v.poly([(27,21),(31,22),(32,18),(29,17)],'yel'); v.ell(30.5,17,2,2,'skin'); v.line(31,16,35,12,v.col('brown',1)); v.px(35,11,v.col('gold',0)); v.px(36,11,v.col('gold',0))
    armL(v,8,30)
    head(v); v.ell(20,5,7,3,'hair',clip=lambda x,y:y<=6)
    v.ell(20,3,7,2.2,'yel')
    v.inner('yel','white'); v.inner('yel','skin')
    return v.thick()
def dawntraders():
    v=V()
    # rising sun behind
    v.ell(36,16,9,9,'gold',flat=True,clip=lambda x,y:y<=17)
    for (a,b,c,d) in [(36,4,36,1),(28,8,25,5),(44,8,47,5)]: v.line(a,b,c,d,v.col('gold',0))
    # handcart with goods of many colors
    v.rect(26,30,45,36,'brown'); v.ell(30,40,3.5,3.5,'dark'); v.ell(41,40,3.5,3.5,'dark'); v.ell(30,40,1.2,1.2,'grey',flat=True); v.ell(41,40,1.2,1.2,'grey',flat=True)
    for i,c in enumerate(['red','blue','green','mag','purple']): v.ell(28+i*4,27.5,2.2,2.6,c)
    v.line(26,32,19,30,v.col('brown',1),w=2)
    legs(v,x1=10,x2=17)
    v.poly([(9,19),(22,19),(23,40),(8,40)],'yel'); v.rect(8,31,23,32,'brown',flat=True)
    v.poly([(20,20),(23,22),(22,30),(19,28)],'yel'); v.ell(20,30,2,2,'skin')
    head(v,cx=15); v.ell(15,4.5,7,3,'cloth',clip=lambda x,y:y<=6); v.rect(7,6,23,7,'cloth')
    v.inner('yel','skin')
    return v.thick()
def witch():
    v=V()
    v.poly([(13,18),(27,18),(32,46),(8,46)],'yel')
    for x in range(8,33,3): v.px(x,46,None)
    v.rect(11,30,29,31,'dark',flat=True)
    # wand turning one orb into another color
    v.poly([(27,20),(32,19),(33,23),(28,24)],'yel'); v.ell(33,21,2,2,'skin'); v.line(34,20,39,14,v.col('brown',2),w=1)
    v.ell(41,12,2.4,2.4,'red'); v.ell(44.5,16,2.4,2.4,'blue')
    for (x,y) in [(42,15),(43,14),(40,9),(45,12)]: v.px(x,y,hx('#ffffff'))
    v.poly([(13,20),(9,23),(10,29),(13,27)],'yel'); v.ell(10.5,29,2,2,'skin')
    v.face(20,7,12,12,ey=13,mouth=False,blush=False)
    for x in range(18,23): v.px(x,17,v.col('skin',3))
    v.px(23,16,v.col('skin',3)); v.px(24,13,v.col('skin',1)); v.px(25,14,v.col('skin',2)); v.px(26,14,v.col('skin',2))
    for y in range(8,20): v.px(13,y,v.col('dark',1)); v.px(26,y,v.col('dark',1))
    # pointed hat
    v.poly([(8,9),(32,9),(23,6),(26,-1),(17,5)],'dark'); v.rect(14,7,26,8,'yel',flat=True)
    v.inner('yel','skin')
    return v.thick()
def jack():
    v=V(); legs(v)
    body(v); v.rect(12,30,29,33,'brown')
    # tools hanging from the belt: hammer, saw, ladle, brush
    v.rect(12,34,13,39,'brown'); v.rect(10,34,15,35,'grey')
    v.poly([(16,34),(19,34),(19,40),(16,38)],'grey'); v.rect(16,33,19,34,'brown')
    v.line(23,34,23,39,v.col('grey',1)); v.ell(23,40,1.6,1.4,'grey')
    v.rect(27,34,28,38,'brown'); v.rect(26,38,29,40,'red')
    # saw on shoulder, wrench in hand
    v.poly([(27,20),(31,21),(32,27),(29,27)],'yel'); v.ell(31,28,2,2,'skin'); v.line(31,29,33,36,v.col('grey',1),w=2)
    v.poly([(13,20),(9,22),(10,29),(13,27)],'yel'); v.ell(10.5,29,2,2,'skin')
    v.line(8,4,13,16,v.col('grey',1),w=2)
    head(v); 
    # stacked hats
    v.ell(20,5,7,2.6,'red',clip=lambda x,y:y<=6); v.ell(20,3,5.5,2,'blue'); v.ell(20,1,4,1.6,'green')
    v.px(25,12,v.col('skin',3)); v.inner('yel','skin')
    return v.thick()
def clerk(v,cx,ramp):
    v.rect(cx-3,38,cx-2,44,'dark'); v.rect(cx+1,38,cx+2,44,'dark'); v.rect(cx-4,45,cx-1,46,'hair'); v.rect(cx+1,45,cx+4,46,'hair')
    v.poly([(cx-5,24),(cx+5,24),(cx+6,38),(cx-6,38)],ramp)
    v.rect(cx-2,21,cx+2,24,'skin')
    v.face(cx,11,11,11,ey=16,mouth=False,blush=False)
    for x in range(cx-1,cx+2): v.px(x,20,v.col('skin',3))
def bookcookers():
    v=V()
    # three clerks round a pot, cooking a ledger
    clerk(v,8,'yel'); clerk(v,40,'yel'); clerk(v,24,'yel')
    v.poly([(17,8),(31,8),(29,2),(19,2)],'white'); v.rect(18,8,30,11,'white')
    v.ell(8,12,5,2.4,'dark',clip=lambda x,y:y<=12); v.ell(40,12,5,2.4,'dark',clip=lambda x,y:y<=12)
    # spectacles
    for cx in (8,40):
        v.px(cx-3,16,INK); v.px(cx+2,16,INK)
    v.ell(24,37,8,6,'dark'); v.rect(16,31,32,32,'grey')
    v.rect(20,26,28,31,'cloth'); v.line(24,26,24,31,v.col('cloth',3)); v.rect(20,26,28,26,'red',flat=True)
    for (x,y) in [(18,24),(30,23),(25,22)]: v.px(x,y,v.col('white',1))
    v.line(12,26,18,30,v.col('brown',1),w=2); v.line(36,26,30,30,v.col('brown',1),w=2)
    v.inner('yel','skin')
    return v.thick()
def peddler():
    v=V(); legs(v)
    body(v)
    # huge pack on back overflowing with goods of every color
    v.rect(24,6,40,30,'brown'); v.rect(25,7,39,29,'brown',flat=True)
    for i,c in enumerate(SIX):
        v.ell(27+(i%3)*5,4+(i//3)*4,2.6,2.4,c)
    v.ell(43,16,2.4,2.4,'blue'); v.ell(43,22,2,2,'red'); v.line(40,14,42,14,v.col('brown',2))
    v.line(22,19,28,31,v.col('brown',2),w=2)
    armL(v,7,28); v.ell(6,32,2.4,2.4,'gold'); v.ell(6,35,2,2,'green')
    head(v); v.ell(20,5,7,3,'grhair',clip=lambda x,y:y<=6)
    for x in range(17,24): v.px(x,16,v.col('grhair',1))
    v.inner('yel','skin'); v.inner('yel','brown')
    return v.thick()
def storekeeper():
    v=V()
    # behind a counter with jars of colors, apron, scales
    v.poly([(12,18),(28,18),(30,38),(10,38)],'yel'); v.poly([(17,20),(23,20),(23,38),(17,38)],'white',flat=True)
    v.poly([(10,20),(6,30),(9,31),(12,24)],'yel'); v.poly([(30,20),(34,30),(31,31),(28,24)],'yel')
    v.rect(0,38,47,47,'brown'); v.rect(0,38,47,39,'brown',flat=True)
    for i,c in enumerate(['red','blue','green','mag','purple','gold']):
        x=1+i*8 if i<3 else 2+i*8+(6 if i>=3 else 0)-6
        x=[0,6,12,30,36,42][i]; v.rect(x,31,x+4,37,'white'); v.rect(x+1,33,x+3,37,c,flat=True); v.rect(x,30,x+4,30,'brown',flat=True)
    head(v,top=4); v.ell(20,5,7,3,'hair',clip=lambda x,y:y<=6)
    for x in range(16,25): v.px(x,14,v.col('hair',2))
    v.px(15,13,v.col('hair',2)); v.px(25,13,v.col('hair',2))
    v.inner('yel','white'); v.inner('yel','skin')
    return v.thick()
def hostages():
    v=V()
    v.rect(15,40,18,44,'brown'); v.rect(22,40,25,44,'brown'); v.rect(14,45,18,46,'hair'); v.rect(22,45,26,46,'hair')
    body(v,belt=False)
    # tied up with rope round and round, gag
    for y in (23,27,31,35): v.line(12,y,28,y+1,v.col('cloth',1),w=1); v.line(12,y+1,28,y+2,v.col('cloth',3))
    v.line(28,36,33,44,v.col('cloth',1))
    head(v,mouth=False)
    v.rect(13,12,27,13,'white',flat=True); v.px(27,13,v.col('white',2)); v.px(28,14,v.col('white',2))
    for x in (16,24): v.px(x,8,v.col('hair',2))
    for x in (17,23): v.px(x,9,v.col('hair',2))
    v.ell(20,5,7,3,'hair',clip=lambda x,y:y<=6)
    # sweat drop
    v.px(27,7,v.col('blue',0)); v.px(27,8,v.col('blue',1)); v.px(28,8,v.col('blue',1))
    v.inner('yel','cloth')
    return v.thick()
def benefactor():
    v=V(); legs(v,x1=13,x2=23,ramp='dark')
    v.ell(20,30,11,10,'yel'); v.ell(20,20,10,3,'fur') if 'fur' in RAMP else None
    v.rect(9,34,31,35,'dark',flat=True)
    # generous arm offering a bulging purse
    v.poly([(28,23),(35,24),(35,28),(28,28)],'yel'); v.ell(36,26,2.2,2.2,'skin')
    v.ell(40,26,4,4,'gold'); v.rect(38,21,42,23,'gold'); v.px(40,26,v.col('gold',3)); v.px(41,22,v.col('red',1))
    v.poly([(12,23),(8,27),(10,30),(13,27)],'yel'); v.ell(9,30,2,2,'skin')
    head(v); v.ell(20,4,7,2.6,'grhair',clip=lambda x,y:y<=5)
    for x in range(17,24): v.px(x,14,v.col('grhair',1))
    v.px(14,7,v.col('grhair',1)); v.px(26,7,v.col('grhair',1))
    v.rect(13,1,27,3,'purple'); v.px(20,0,v.col('gold',0))
    v.inner('yel','skin')
    return v.thick()
def harlequin():
    v=V()
    # diamond motley of many colors
    v.poly([(14,19),(26,19),(27,38),(13,38)],'yel')
    cols=['red','blue','green','mag','purple','yel']
    k=0
    for y in range(19,39,5):
        for x in range(13,28,5):
            c=cols[k%6]; k+=1
            for dy in range(-2,3):
                for dx in range(-2+abs(dy),3-abs(dy)):
                    if v.g[y+dy][x+dx]: v.px(x+dx,y+dy,v.col(c,1))
    v.rect(15,39,18,44,'yel'); v.rect(22,39,25,44,'red'); v.rect(13,45,18,46,'dark'); v.rect(22,45,27,46,'dark')
    v.px(13,45,v.col('gold',0)); v.px(27,45,v.col('gold',0))
    v.poly([(26,20),(32,16),(34,18),(28,23)],'yel'); v.ell(33,16,2,2,'skin')
    v.poly([(14,20),(8,24),(9,27),(14,24)],'blue'); v.ell(8,26,2,2,'skin')
    head(v,mouth=False)
    v.rect(13,8,27,11,'dark',flat=True); v.px(16,9,hx('#ffffff')); v.px(23,9,hx('#ffffff'))
    for x in range(18,23): v.px(x,14,v.col('skin',3))
    v.px(17,13,v.col('skin',3)); v.px(23,13,v.col('skin',3))
    # jester hat, two colored points with bells
    v.poly([(12,5),(28,5),(33,0),(20,2),(7,0)],'yel'); v.poly([(20,2),(33,0),(28,5)],'red')
    v.ell(7,1,1.4,1.4,'gold'); v.ell(33,1,1.4,1.4,'gold')
    v.inner('yel','skin')
    return v.thick()
def hostess():
    v=V()
    v.poly([(13,19),(27,19),(31,46),(9,46)],'yel')
    v.poly([(15,25),(25,25),(27,46),(13,46)],'white',flat=True)
    for x in range(13,28,2): v.px(x,46,v.col('white',2))
    # tray of welcome cups held up, other arm open
    v.poly([(27,20),(32,19),(33,15),(30,15)],'yel'); v.ell(31,14,2,2,'skin')
    v.rect(26,11,40,12,'grey')
    for i,c in enumerate(['red','blue','green']): v.rect(28+i*4,7,30+i*4,10,c)
    v.poly([(13,20),(5,23),(5,26),(13,24)],'yel'); v.ell(4,24.5,2,2,'skin')
    head(v,mouth=False)
    for x in range(18,23): v.px(x,14,v.col('skin',3))
    v.px(17,13,v.col('skin',3)); v.px(23,13,v.col('skin',3))
    v.ell(20,5,7,3,'ginger',clip=lambda x,y:y<=6); v.ell(13.5,10,2,4,'ginger'); v.ell(26.5,10,2,4,'ginger')
    v.ell(15,4,1.6,1.4,'red'); v.px(14,3,v.col('green',1))
    v.inner('yel','white'); v.inner('yel','skin')
    return v.thick()
ALL=lambda:[('Tithe Collector',tithe()),('Barterer',barterer()),('Pilgrim',pilgrim()),('Haggler',haggler()),('Herald',herald()),('Gilder',gilder()),('Dawn Traders',dawntraders()),('Witch',witch()),('Jack-of-All-Trades',jack()),('Book Cookers',bookcookers()),('Peddlers',peddler()),('Storekeeper',storekeeper()),('Hostages',hostages()),('Benefactor',benefactor()),('Harlequin',harlequin()),('Hostess',hostess())]
