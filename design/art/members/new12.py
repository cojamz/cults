from kit import *
from yel import legs, body, head, armL, armR
RAMP['bl']=('#9cc8f0','#4a80b8','#30608e','#1e3e62')
RAMP['yel']=('#fbee7a','#e8d23e','#b49a28','#76621a')
# Nov 26 renames (Hostages -> Exchanger, Firstborn -> Firstcomers): drawn for the new names.

def exchanger():
    # a trader holding a balance scale overhead, one small person in each pan, level: an even swap, same cost
    v=V(); legs(v); body(v)
    # arms raised to the beam
    v.poly([(13,20),(9,21),(15,4),(18,5)],'yel'); v.ell(16,4,2,2,'skin')
    v.poly([(27,20),(31,21),(25,4),(22,5)],'yel'); v.ell(24,4,2,2,'skin')
    head(v,top=8,mouth=False)
    for x in range(18,23): v.px(x,18,v.col('skin',3))
    v.ell(20,9,7,3,'hair',clip=lambda x,y:y<=10)
    v.rect(19,1,21,4,'brown'); v.rect(2,2,38,3,'gold')
    def pan(cx,ramp,hair):
        v.ell(cx,26,2.6,2.6,'skin'); v.ell(cx,24.5,2.8,1.4,hair,clip=lambda x,y:y<=24)
        v.px(cx-1,26,INK); v.px(cx+1,26,INK)
        v.poly([(cx-3,29),(cx+3,29),(cx+4,36),(cx-4,36)],ramp)
        v.rect(cx-6,37,cx+6,38,'gold')
        v.line(cx-6,36,cx,4,v.col('brown',2)); v.line(cx+6,36,cx,4,v.col('brown',2))
    pan(5,'red','hair'); pan(41,'blue','ginger')
    v.inner('yel','skin')
    return v.thick()

def firstcomers():
    # three villagers first at the market gate at dawn, the front one already reaching for a stall's goods
    v=V()
    def man(cx,top,hairr):
        v.rect(cx-3,39,cx-1,44,'brown'); v.rect(cx+1,39,cx+3,44,'brown'); v.rect(cx-4,45,cx-1,46,'hair'); v.rect(cx+1,45,cx+4,46,'hair')
        v.poly([(cx-5,top+13),(cx+5,top+13),(cx+6,39),(cx-6,39)],'bl')
        v.rect(cx-2,top+10,cx+2,top+13,'skin'); v.face(cx,top,11,11,ey=top+5,mouth=False)
        for x in range(cx-1,cx+2): v.px(x,top+8,v.col('skin',3))
        v.ell(cx,top+1,5.6,2.6,hairr,clip=lambda x,y:y<=top+2)
    man(7,17,'hair'); man(18,14,'ginger'); man(30,11,'hair')
    # front one reaches out to a basket on a post
    v.poly([(35,25),(38,22),(40,24),(37,27)],'bl'); v.ell(40,22,1.8,1.8,'skin')
    v.rect(41,26,43,46,'brown'); v.rect(37,20,46,25,'brown'); v.rect(38,18,45,19,'gold')
    for (x,c) in [(39,'red'),(42,'green'),(44,'gold')]: v.ell(x,17,1.4,1.4,c)
    v.inner('bl','skin')
    return v.thick()

ALL=lambda:[('Exchanger',exchanger()),('Firstcomers',firstcomers())]
if __name__=='__main__': sheet(ALL(),'new12.png',sc=6,cols=2)
