from kit import *
SEP=hx('#5a1414')
RAMP['wine']=('#c84a46','#a3302c','#7a1f1e','#521414')
RAMP['fur']=('#f0e0c0','#d8c08a','#a88a5a','#7a6040')
def guildmaster():
    v=V()
    v.poly([(13,20),(27,20),(31,46),(9,46)],'red')
    v.line(20,30,20,46,v.col('red',2))
    v.ell(20,21,10,3.2,'fur')
    # chain + medallion
    for i,(x,y) in enumerate([(13,22),(14,24),(15,26),(17,27),(23,27),(25,26),(26,24),(27,22)]): v.px(x,y,v.col('gold',0 if i%2 else 1)); v.px(x,y+1,v.col('gold',2))
    v.ell(20,30,5.5,4.5,'white',flat=True); v.ell(20,30,4.2,4.2,'gold'); v.ell(20,30,2,2,'gold',flat=True)
    # ledger book in left arm
    v.poly([(8,22),(12,21),(13,30),(9,31)],'red'); v.rect(4,28,11,36,'brown'); v.rect(5,29,10,35,'white',flat=True)
    for y in (30,32,34): v.line(6,y,9,y,v.col('white',2))
    v.ell(10,33,2,2,'skin')
    v.poly([(27,22),(31,21),(32,31),(28,31)],'red'); v.ell(30.5,32.5,2,2,'skin')
    # head, grey beard, black floppy cap
    v.rect(17,16,23,19,'skin')
    v.face(20,4,13,13,ey=10,mouth=False)
    v.ell(20,15.5,5,3.2,'grhair',clip=lambda x,y:y>=14)
    for x in range(17,24): v.px(x,13,v.col('grhair',1))
    v.ell(20,4,9,3.5,'dark'); v.rect(11,5,29,7,'dark'); v.px(27,2,v.col('gold',0)); v.px(28,3,v.col('gold',1))
    v.inner('red','fur'); v.inner('red','gold')
    return v.thick()
def journeyman():
    v=V()
    v.poly([(17,33),(21,33),(15,43),(11,43)],'brown'); v.rect(8,43,15,46,'hair')
    v.poly([(22,33),(26,33),(30,43),(26,43)],'brown'); v.rect(26,43,33,46,'hair')
    v.poly([(14,19),(27,19),(28,34),(13,34)],'red')
    v.rect(13,29,28,30,'brown',flat=True); v.px(20,29,v.col('gold',0))
    # stick over shoulder to big bundle behind
    v.line(26,22,40,4,v.col('brown',2),w=2)
    RAMP['cloth']=('#e8d4a0','#c8a868','#9a7a44','#6a5028')
    v.ell(40,9,6.5,5.5,'cloth'); v.poly([(37,4),(43,4),(41,7),(39,7)],'cloth'); v.ell(36.5,3,2,1.4,'cloth'); v.ell(43.5,3,2,1.4,'cloth')
    v.line(37,7,43,7,v.col('cloth',3)); v.px(40,6,v.col('cloth',3))
    for (x,y) in [(37,10),(42,11),(39,13)]: v.px(x,y,v.col('cloth',2))
    v.poly([(24,20),(29,19),(29,24),(25,25)],'red'); v.ell(27.5,22,2.1,2.1,'skin')
    v.poly([(13,21),(16,20),(15,30),(11,30)],'red'); v.ell(12.5,31,2,2,'skin')
    # walking staff
    v.line(9,22,7,46,v.col('brown',1)); v.ell(9.5,24,1.6,1.6,'skin')
    v.rect(17,16,23,18,'skin')
    v.face(20,4,13,13,ey=10,mouth=False)
    for x in range(19,22): v.px(x,14,v.col('skin',3))
    v.ell(20,4.5,7.5,3.5,'brown',clip=lambda x,y:y<=6); v.rect(11,6,30,7,'brown')
    for y in range(8,12): v.px(14,y,v.col('hair',1))
    v.inner('red','skin'); v.inner('red','brown')
    return v.thick()
def swindler():
    v=V()
    v.rect(15,40,18,44,'dark'); v.rect(22,40,25,44,'dark'); v.rect(13,45,18,46,'dark'); v.rect(22,45,27,46,'dark')
    v.poly([(13,18),(27,18),(29,41),(11,41)],'red')
    v.poly([(17,18),(23,18),(22,30),(18,30)],'white',flat=True); v.px(20,22,v.col('dark',1)); v.px(20,25,v.col('dark',1))
    # arm out with big coin
    v.poly([(26,20),(34,17),(35,21),(27,24)],'red'); v.ell(35,19,2.2,2.2,'skin')
    v.ell(39.5,15.5,4,4,'gold'); v.ell(39.5,15.5,2,2,'gold',flat=True); v.px(39,15,hx('#ffffff'))
    # other hand: card tucked behind / up sleeve
    v.poly([(11,20),(14,19),(14,30),(10,30)],'red'); v.rect(6,27,10,33,'white',flat=True); v.rect(7,29,9,31,'red',flat=True); v.ell(11,31,2,2,'skin')
    v.rect(17,15,23,18,'skin')
    v.face(20,4,12,12,ey=10,blush=False,mouth=False)
    # sly half-lidded eyes
    for x in (17,23): v.px(x,9,v.col('hair',2))
    for x in (17,18,19,21,22,23): v.px(x,13,v.col('hair',2))
    v.px(16,12,v.col('hair',2)); v.px(24,12,v.col('hair',2)); v.px(21,15,v.col('skin',3)); v.px(22,15,v.col('skin',3)); v.px(23,14,v.col('skin',3))
    # top hat
    v.rect(15,-1,25,5,'dark'); v.rect(15,4,25,5,'red',flat=True); v.rect(11,6,29,7,'dark')
    v.inner('red','white'); v.inner('red','skin')
    return v.thick()
def abbess():
    v=V()
    v.poly([(13,18),(27,18),(31,46),(9,46)],'wine')
    v.line(20,30,20,46,v.col('wine',2))
    # arms open wide
    v.poly([(13,19),(3,24),(3,28),(13,25)],'wine'); v.ell(2.5,26,2.2,2.2,'skin')
    v.poly([(27,19),(37,24),(37,28),(27,25)],'wine'); v.ell(37.5,26,2.2,2.2,'skin')
    # gold cross on chain
    v.rect(18,22,22,34,'gold'); v.rect(15,25,25,28,'gold')
    # wimple and veil
    v.ell(20,10,8.5,9.5,'wine')
    v.ell(20,11,7.3,7.6,'white',flat=True)
    v.face(20,6,10,11,ey=11,mouth=False)
    v.px(19,15,v.col('skin',3)); v.px(20,15,v.col('skin',3)); v.px(21,15,v.col('skin',3)); v.px(18,14,v.col('skin',3)); v.px(22,14,v.col('skin',3))
    v.rect(13,17,27,20,'white',flat=True)
    v.inner('wine','white'); v.inner('wine','skin')
    return v.thick()
def dyer():
    v=V()
    v.rect(10,40,13,44,'brown'); v.rect(16,40,19,44,'brown'); v.rect(9,45,13,46,'hair'); v.rect(16,45,20,46,'hair')
    v.poly([(8,19),(21,19),(22,40),(7,40)],'red')
    v.poly([(10,26),(20,26),(20,40),(10,40)],'brown')
    for (x,y,w,h) in [(11,28,2,2),(16,31,3,2),(12,35,2,2),(17,37,2,1)]: v.rect(x,y,x+w-1,y+h-1,'red',flat=True)
    # arms dyed red to the elbow, stirring
    v.poly([(19,21),(26,23),(25,27),(18,25)],'red'); v.poly([(25,23),(29,24),(28,28),(24,27)],'red'); v.ell(29,26,2.2,2.2,'red')
    v.poly([(6,21),(9,20),(9,29),(5,29)],'red'); v.poly([(5,29),(9,29),(9,33),(5,33)],'red')
    # vat
    v.poly([(24,31),(46,31),(44,46),(26,46)],'brown'); v.rect(23,30,47,31,'brown',flat=True)
    for y in (35,42): v.line(25,y,45,y,v.col('dark',1))
    v.ell(35,30,10.5,2.4,'red',clip=lambda x,y:y<=30)
    for (x,y) in [(30,26),(40,25),(36,27)]: v.px(x,y,v.col('white',2))
    v.line(36,4,30,30,v.col('brown',1),w=2)
    # drips from vat
    v.px(25,33,v.col('red',1)); v.px(25,34,v.col('red',1)); v.px(44,33,v.col('red',1))
    v.rect(12,16,17,19,'skin')
    v.face(15,4,12,12,ey=10,mouth=False)
    v.ell(15,6,6.5,3.2,'white',clip=lambda x,y:y<=7); v.rect(20,6,23,8,'white'); v.px(23,9,v.col('white',1))
    v.px(14,14,v.col('skin',3)); v.px(15,14,v.col('skin',3))
    v.inner('red','brown')
    return v.thick()
def purists():
    v=V()
    v.poly([(14,18),(26,18),(31,46),(9,46)],'white')
    for y in range(18,47):
        for x in range(20,32):
            c=v.g[y][x]
            if c and c in [hx(t) for t in RAMP['white']]: v.g[y][x]=v.col('red',1 if x<29 else 2)
    v.line(20,18,20,46,INK)
    # hands holding a candle in front, centered
    v.rect(18,23,22,32,'white',flat=True); v.rect(18,23,18,32,'white')
    v.line(17,23,17,32,INK); v.line(23,23,23,32,INK)
    v.ell(20,33,4,2.4,'skin')
    v.ell(20,20,2.2,3,'gold'); v.ell(20,20.5,1,1.6,'gold',flat=True); v.px(20,21,hx('#ffffff')); v.px(20,22,INK)
    v.rect(17,15,23,17,'skin')
    v.face(20,4,12,12,ey=10,blush=False,mouth=False)
    # stern brows & thin mouth, nose up
    for x in range(18,23): v.px(x,14,v.col('skin',3))
    v.poly([(12,1),(28,1),(27,12),(26,5),(14,5),(13,12)],'white'); v.rect(13,0,27,2,'white'); v.rect(15,4,25,4,'white',flat=True)
    v.ell(20,19,8,2.6,'white',flat=True)
    for x in (17,22):
        v.px(x,10,INK); v.px(x,11,INK)
    for x in (16,17,22,23): v.px(x,8,v.col('hair',1))
    return v.thick()
def clanchief():
    v=V()
    RAMP['tartan']=RAMP['red']
    v.rect(12,41,15,44,'skin'); v.rect(22,41,25,44,'skin'); v.rect(11,45,16,46,'hair'); v.rect(21,45,26,46,'hair')
    v.poly([(8,20),(30,20),(31,40),(7,40)],'red')
    for y in range(20,41):
        for x in range(7,32):
            if v.g[y][x] and ((x-7)%5==0 or (y-20)%5==0): v.g[y][x]=v.col('red',3)
    v.rect(7,31,31,32,'brown',flat=True); v.ell(19,31.5,1.8,1.6,'gold')
    # sporran
    v.rect(17,33,21,37,'fur')
    # fur cape on shoulders
    v.ell(19,20,13,4,'fur')
    # beard big ginger
    v.ell(19,19,6,8,'ginger',clip=lambda x,y:y>=14)
    # arm to banner
    v.poly([(29,21),(34,22),(34,27),(30,27)],'red'); v.ell(35,25,2.2,2.2,'skin')
    v.rect(36,0,37,46,'brown')
    v.poly([(38,1),(47,1),(47,13),(42,10),(38,13)],'red'); v.ell(42.5,6,2.2,2.2,'gold')
    v.poly([(4,21),(8,20),(8,30),(4,30)],'red'); v.ell(5.5,31,2,2,'skin')
    v.face(19,3,13,12,ey=9,mouth=False)
    v.ell(19,4,7,3,'ginger',clip=lambda x,y:y<=5)
    for x in (15,16): v.px(x,8,v.col('ginger',2))
    for x in (22,23): v.px(x,8,v.col('ginger',2))
    for x in range(15,24): v.px(x,13,v.col('ginger',1))
    v.inner('red','fur')
    return v.thick()
