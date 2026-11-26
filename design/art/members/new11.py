from kit import *
from yel import legs, head
import blu
RAMP['bl']=('#9cc8f0','#4a80b8','#30608e','#1e3e62')
RAMP['mag']=('#f07ab0','#d4508f','#a03068','#6a1c44')
RAMP['cloth']=('#e8d4a0','#c8a868','#9a7a44','#6a5028')
RAMP['purple']=('#c8a0f0','#9a62e6','#6a3ab0','#442478')
# Nov 26 members (Cory's yeses): one picture per name, drawn to say the name.

def rabblerousers():
    v=V()
    # three loud townsfolk, the middle one up on a crate shouting with a fist raised, the others waving tankards
    def man(cx,top,ramp,hair):
        v.rect(cx-3,39,cx-1,44,'brown'); v.rect(cx+1,39,cx+3,44,'brown'); v.rect(cx-4,45,cx-1,46,'hair'); v.rect(cx+1,45,cx+4,46,'hair')
        v.poly([(cx-5,top+13),(cx+5,top+13),(cx+6,39),(cx-6,39)],ramp)
        v.rect(cx-2,top+10,cx+2,top+13,'skin'); v.face(cx,top,11,11,ey=top+5,mouth=False)
        v.ell(cx,top+8,1.6,1.3,'dark',flat=True)
        v.ell(cx,top+1,5.6,2.6,hair,clip=lambda x,y:y<=top+2)
    man(8,15,'red','ginger'); man(40,15,'red','hair')
    # the crate
    v.rect(16,38,32,46,'brown'); v.line(16,42,32,42,v.col('brown',3)); v.line(24,38,24,46,v.col('brown',3))
    # the shouter on the crate (shorter legs, standing on it)
    v.rect(21,33,23,37,'dark'); v.rect(25,33,27,37,'dark')
    v.poly([(19,18),(29,18),(30,33),(18,33)],'red')
    v.rect(22,15,26,18,'skin'); v.face(24,5,11,11,ey=10,mouth=False); v.ell(24,13,1.8,1.6,'dark',flat=True)
    v.ell(24,6,5.6,2.6,'hair',clip=lambda x,y:y<=7)
    v.poly([(29,19),(32,19),(35,8),(32,8)],'red'); v.ell(34,6,2.4,2.4,'skin')
    # tankards up
    v.line(13,26,15,20,v.col('red',2),w=2); v.rect(13,15,17,20,'gold'); v.rect(13,14,17,14,'white')
    v.line(35,26,33,20,v.col('red',2),w=2); v.rect(31,15,35,20,'gold'); v.rect(31,14,35,14,'white')
    v.inner('red','skin')
    return v.thick()

def gobetween():
    v=V(); legs(v); blu.body(v,w=6)
    # a middleman holding a coin purse out one way and a hand out the other, a deal in the making
    blu.armR(v,33,22); v.ell(35,24,3.4,3,'brown'); v.rect(33,20,37,21,'brown'); v.line(33,20,37,20,v.col('gold',0))
    blu.armL(v,5,22)
    head(v,mouth=False)
    for x in range(18,23): v.px(x,14,v.col('skin',3))
    v.px(17,13,v.col('skin',3)); v.px(23,13,v.col('skin',3))
    v.ell(20,4,8,3,'bl',clip=lambda x,y:y<=5); v.rect(10,5,30,6,'bl')
    for (x,y) in [(41,18),(43,21),(1,17)]: v.px(x,y,v.col('gold',0))
    v.inner('bl','skin')
    return v.thick()

def rummager():
    v=V()
    from mag import legs as mlegs
    mlegs(v)
    # bent over an open chest, pulling out one of every color
    v.poly([(12,19),(28,19),(29,40),(11,40)],'mag')
    v.rect(11,32,29,33,'brown',flat=True)
    head(v,mouth=False)
    v.ell(20,4,8,3,'dark',clip=lambda x,y:y<=5)
    for x in range(18,23): v.px(x,14,v.col('skin',3))
    # the chest
    v.rect(30,36,46,46,'brown'); v.rect(30,34,46,35,'gold'); v.line(38,36,38,46,v.col('gold',2))
    v.poly([(27,20),(31,21),(36,31),(33,32)],'mag'); v.ell(35,32,2,2,'skin')
    for (x,y,c) in [(33,30,'red'),(37,29,'blue'),(41,30,'green'),(44,32,'gold'),(39,26,'purple'),(43,27,'white')]: v.ell(x,y,1.8,1.8,c)
    v.poly([(13,20),(9,21),(7,30),(10,30)],'mag'); v.ell(8,31,2,2,'skin')
    v.inner('mag','skin')
    return v.thick()

ALL=lambda:[('Rabble-Rousers',rabblerousers()),('Go-Between',gobetween()),('Rummager',rummager())]
if __name__=='__main__': sheet(ALL(),'new11.png',sc=6,cols=3)
