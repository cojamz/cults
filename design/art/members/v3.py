from kit import *
SEP=hx('#5a1414')
def ferryman():
    v=V()
    # water
    for x in range(0,48):
        if x%4<2: v.px(x,46,v.col('blue',1))
        else: v.px(x,47,v.col('blue',2))
    # boat
    v.poly([(1,37),(46,37),(41,45),(6,45)],'brown'); v.rect(1,37,46,38,'brown',flat=True)
    for x in range(4,44): v.px(x,41,v.col('brown',2))
    # pole
    v.line(36,2,27,44,v.col('brown',2),w=2)
    # cloak body
    v.poly([(14,16),(28,16),(31,37),(11,37)],'red')
    # hood
    v.ell(21,12,8,9,'red')
    v.ell(21,13.5,5,5.5,'dark',flat=True)
    v.px(19,13,hx('#ffe27a')); v.px(23,13,hx('#ffe27a'))
    # arms to pole
    v.poly([(25,20),(31,20),(32,24),(26,25)],'red'); v.ell(31.5,22,2.2,2.2,'skin')
    v.poly([(13,24),(18,22),(19,27),(13,28)],'red')
    # lantern on a hook, left
    v.line(10,24,10,27,INK); v.rect(7,28,12,33,'gold'); v.rect(8,29,11,32,'gold',flat=True); v.px(9,30,hx('#ffffff')); v.px(10,31,hx('#fff3a0')); v.ell(12.5,25.5,2,2,'skin')
    # coin at belt
    v.ell(21,30,1.8,1.8,'gold')
    v.inner('red','dark')
    return v.thick()
def warden():
    v=V()
    v.rect(14,41,18,44,'dark'); v.rect(22,41,26,44,'dark'); v.rect(13,45,18,46,'hair'); v.rect(22,45,27,46,'hair')
    # mail body
    v.poly([(10,20),(30,20),(30,41),(10,41)],'grey')
    for y in range(22,41,2):
        for x in range(11,30,2): v.px(x+(y//2)%2,y,v.col('grey',2))
    # red tabard
    v.poly([(14,20),(26,20),(26,41),(14,41)],'red')
    v.rect(13,31,27,32,'brown',flat=True); v.px(20,31,v.col('gold',0)); v.px(19,31,v.col('gold',1))
    # key ring at belt
    v.ell(12,35,2.5,2.5,'gold'); v.px(12,35,None) if False else None
    # left arm down
    v.poly([(6,21),(10,20),(11,31),(7,32)],'grey'); v.ell(8.5,33,2.2,2.2,'skin')
    # right arm up holding giant key
    v.poly([(30,21),(34,19),(36,25),(31,27)],'grey')
    v.rect(38,8,40,38,'dark'); v.ell(39,6,4.5,4.5,'dark'); v.ell(39,6,2,2,'dark',flat=True)
    for (x,y) in [(38,5),(39,5),(40,5),(38,6),(40,6),(38,7),(39,7),(40,7),(39,6)]: v.g[y][x]=None
    v.rect(41,31,44,33,'grey'); v.rect(41,35,43,37,'grey')
    v.ell(37,21,2.4,2.4,'skin')
    # head + helmet
    v.rect(17,17,23,20,'skin')
    v.face(20,5,14,14,ey=12,mouth=False)
    for x in range(16,19): v.px(x,10,v.col('hair',2))
    for x in range(22,25): v.px(x,10,v.col('hair',2))
    for x in range(18,23): v.px(x,16,v.col('skin',3))
    v.ell(20,6,8,5,'grey',clip=lambda x,y:y<=8); v.rect(10,8,30,9,'grey',flat=True); v.rect(10,9,30,9,'grey')
    v.inner('red','grey')
    return v.thick()
def governess():
    v=V()
    # tall dress, dark red
    RAMP['wine']=('#c84a46','#a3302c','#7a1f1e','#521414')
    v.poly([(13,18),(23,18),(27,46),(8,46)],'wine')
    v.rect(15,18,21,20,'white',flat=True); v.px(18,21,v.col('gold',1))
    for x in range(9,27): v.px(x,46,v.col('white',2))
    # arms: left holds book, right holds child's hand
    v.poly([(10,20),(14,19),(14,29),(10,30)],'wine'); v.rect(8,28,13,32,'dark'); v.rect(9,29,13,31,'dark',flat=True); v.px(13,30,v.col('white',1))
    v.poly([(22,20),(26,20),(29,30),(25,31)],'wine'); v.ell(28,32,2,2,'skin')
    # head with tight bun, stern
    v.rect(16,15,20,18,'skin')
    v.ell(18,3,3,2.5,'hair')
    v.face(18,4,12,12,ey=10,blush=False,mouth=False)
    v.ell(18,6,6.3,3,'hair',clip=lambda x,y:y<=7)
    for x in (15,16): v.px(x,9,v.col('hair',2))
    for x in (20,21): v.px(x,9,v.col('hair',2))
    for x in range(17,20): v.px(x,13,v.col('skin',3))
    v.px(14,3,v.col('red',1)); v.px(13,4,v.col('red',1)); v.px(14,4,v.col('red',1))
    # child: small, red smock, holding her hand
    v.poly([(31,34),(39,34),(41,43),(29,43)],'red')
    v.rect(32,44,33,46,'white'); v.rect(37,44,38,46,'white')
    v.face(35,24,9,10,ey=29,mouth=False)
    v.ell(35,25.5,4.7,2.5,'ginger',clip=lambda x,y:y<=26)
    v.poly([(30,35),(32,34),(30,32),(28,33)],'red')
    v.inner('wine','white'); v.inner('red','skin')
    return v.thick()
