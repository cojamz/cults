from parts import *
RAMP['pu']=('#b898e0','#7d5ba6','#5a3e80','#3c2858')
RAMP['yel']=('#fbee7a','#e8d23e','#b49a28','#76621a')
from gry import mini
def shirker():
    v=V()
    # leaning back on a hay bale, hands behind his head, one eye open on everyone else still working
    v.rect(4,34,44,46,'gold'); for_ = [v.rect(4,y,44,y,'gold',flat=True) for y in (38,42)]
    v.poly([(14,22),(28,22),(32,36),(12,36)],'pu'); v.rect(12,33,32,34,'brown',flat=True)
    v.poly([(30,34),(44,30),(45,33),(31,37)],'dark'); v.rect(43,26,46,31,'hair')
    v.poly([(26,35),(38,38),(38,41),(26,38)],'dark'); v.rect(37,36,40,42,'hair')
    v.poly([(14,24),(5,15),(7,12),(16,20)],'pu'); v.poly([(5,15),(7,11),(15,9),(14,13)],'pu')
    v.poly([(28,24),(37,15),(35,12),(26,20)],'pu'); v.poly([(37,15),(35,11),(27,9),(28,13)],'pu')
    head(v,top=6,mouth=False)
    v.line(15,12,18,12,INK); v.px(23,11,INK); v.px(22,10,INK); v.px(23,10,hx('#ffffff'))
    for x in range(18,23): v.px(x,16,v.col('skin',3))
    v.px(23,15,v.col('skin',3))
    v.ell(20,7,7,2.6,'hair',clip=lambda x,y:y<=8)
    v.line(24,16,30,13,v.col('gold',0))
    v.inner('pu','skin')
    return v.thick()
def cutthroats():
    v=V(); legs(v,ramp='dark',boot='dark'); P('mag').body(v,belt=False)
    v.rect(12,31,29,32,'dark',flat=True)
    # a masked ruffian with a dagger, a sack over the shoulder with a little follower peeking out
    v.ell(33,10,7,7,'cloth'); v.rect(30,15,34,19,'cloth'); v.ell(33,5,2.4,2.4,'skin'); v.px(32,5,INK); v.px(34,5,INK); v.ell(33,3,2.6,1.2,'hair',clip=lambda x,y:y<=3)
    P('mag').armR(v,30,18)
    P('mag').armL(v,7,28); v.line(6,26,4,18,hx('#e8ecf0'),w=2); v.rect(4,26,9,27,'gold')
    head(v,mouth=False)
    v.rect(13,7,27,10,'dark'); v.px(16,9,hx('#ffffff')); v.px(17,9,INK); v.px(23,9,hx('#ffffff')); v.px(24,9,INK)
    for x in range(18,23): v.px(x,14,v.col('skin',3))
    v.px(17,13,v.col('skin',3)); v.line(22,12,24,15,v.col('red',1))
    v.ell(20,5,7.5,3.2,'mag',clip=lambda x,y:y<=6); v.poly([(13,5),(9,8),(10,10),(14,7)],'mag')
    v.inner('mag','skin')
    return v.thick()
def drifters():
    v=V()
    # two wanderers with bundles on sticks, coats patched in every color: they'll pass for whatever you need
    for cx,h in ((13,'hair'),(35,'ginger')): mini(v,cx,ramp='yel',hairr=h,top=9)
    smile(v,13,17); smile(v,35,17)
    for (x,y,c) in [(10,24,'red'),(15,30,'blue'),(11,34,'purple'),(32,25,'mag'),(37,31,'green'),(33,35,'grey')]: v.rect(x,y,x+2,y+2,c)
    v.line(18,22,26,6,v.col('brown',1),w=2); v.ell(26,5,3.4,3,'red'); v.px(25,4,v.col('red',0))
    v.line(40,22,46,8,v.col('brown',1),w=2); v.ell(45,7,3,2.8,'blue')
    v.ell(19,22,1.6,1.6,'skin'); v.ell(40,22,1.6,1.6,'skin')
    for cx in (13,35): v.ell(cx,9.5,6.4,2.4,'brown',clip=lambda x,y:y<=10); v.rect(cx-7,10,cx+7,10,'brown')
    v.inner('yel','skin')
    return v.thick()
ALL=lambda:[('Shirker',shirker()),('Cutthroats',cutthroats()),('Drifters',drifters())]
if __name__=='__main__': sheet(ALL(),'new3.png',sc=6,cols=3)
