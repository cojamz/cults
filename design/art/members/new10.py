from kit import *
from yel import legs, head, clerk
import blu, pur
RAMP['bl']=('#9cc8f0','#4a80b8','#30608e','#1e3e62')
RAMP['pu']=('#b898e0','#7d5ba6','#5a3e80','#3c2858')
RAMP['yel']=('#fbee7a','#e8d23e','#b49a28','#76621a')
RAMP['cloth']=('#e8d4a0','#c8a868','#9a7a44','#6a5028')
RAMP['mag']=('#f07ab0','#d4508f','#a03068','#6a1c44')
RAMP['purple']=('#c8a0f0','#9a62e6','#6a3ab0','#442478')
# Nov 25 renames (the naming skill, .claude/skills/naming): one picture per new name, drawn to say the name.

def marketsweeper():
    v=V(); legs(v,x1=12,x2=19); blu.body(v,top=19,bot=40,w=7)
    # a big broom pushing a heap of goods off the edge of the stall
    v.line(30,4,22,38,v.col('brown',1),w=2)
    v.poly([(17,37),(27,37),(30,46),(13,46)],'gold'); v.line(18,40,16,46,v.col('gold',2)); v.line(22,40,22,46,v.col('gold',2)); v.line(26,40,28,46,v.col('gold',2))
    blu.armR(v,29,12); blu.armL(v,22,27)
    for i,(x,y,c) in enumerate([(35,44,'red'),(39,43,'green'),(43,44,'blue'),(37,40,'mag'),(41,39,'gold'),(45,40,'purple')]): v.ell(x,y,2,1.9,c)
    for (x,y) in [(33,38),(46,35),(40,35)]: v.px(x,y,v.col('white',1))
    head(v,cx=18,mouth=False)
    for x in range(16,21): v.px(x,14,v.col('skin',3))
    v.ell(18,5,8,3.2,'cloth',clip=lambda x,y:y<=6); v.rect(9,6,27,6,'cloth')
    v.inner('bl','skin')
    return v.thick()

def pennypincher():
    v=V(); legs(v); blu.body(v,w=6)
    # holding one coin up close to a squinting eye, the purse clutched tight at the chest
    blu.armR(v,30,9); v.ell(30,7,2.6,2.6,'gold'); v.px(29,6,hx('#ffffff'))
    blu.armL(v,17,26); v.ell(20,27,4,3.6,'brown'); v.rect(18,23,22,24,'brown'); v.line(18,23,22,23,v.col('gold',0))
    head(v,mouth=False,blush=False)
    # one eye shut, a tight flat mouth
    for x in range(14,17): v.px(x,10,INK)
    for x in range(18,23): v.px(x,14,v.col('skin',3))
    v.ell(20,4,7,2.2,'grhair',clip=lambda x,y:y<=5); v.ell(13,8,1.4,2.6,'grhair'); v.ell(27,8,1.4,2.6,'grhair')
    v.inner('bl','skin')
    return v.thick()

def laggard():
    v=V()
    # trailing behind with a yawn, dragging a walking stick; a snail out ahead of him
    legs(v,x1=13,x2=21); pur.body(v,w=7)
    pur.armR(v,31,30); v.line(32,24,38,46,v.col('brown',1),w=2)
    pur.armL(v,8,28)
    head(v,mouth=False)
    v.ell(20,13.5,2.2,2,'dark',flat=True)
    for x in (15,16,17): v.px(x,10,INK)
    for x in (23,24,25): v.px(x,10,INK)
    v.ell(20,4.5,8,3.5,'pu',clip=lambda x,y:y<=6); v.rect(10,6,30,6,'pu'); v.ell(30,4,2,2,'pu')
    for (x,y) in [(28,1),(31,0),(34,1)]: v.px(x,y,v.col('white',1))
    v.ell(5,43,3,2.6,'gold'); v.ell(5,43,1.4,1.2,'brown',flat=True); v.rect(1,45,9,46,'green'); v.px(1,41,INK); v.px(2,42,v.col('green',1))
    v.inner('pu','skin')
    return v.thick()

def alchemists():
    v=V()
    # three robed alchemists round a bubbling flask, drops of every color rising out of it
    clerk(v,8,'yel'); clerk(v,40,'yel'); clerk(v,24,'yel')
    for cx in (8,24,40):
        v.poly([(cx-5,11),(cx+5,11),(cx+1,0),(cx-1,0)],'purple'); v.rect(cx-6,11,cx+6,12,'purple')
    v.ell(8,13,1.2,1.2,'gold',flat=True); v.ell(40,8,1.2,1.2,'gold',flat=True)
    v.ell(24,38,7,6,'blue'); v.rect(22,27,26,33,'blue'); v.rect(21,26,27,27,'grey')
    v.ell(24,40,6,3.6,'green',clip=lambda x,y:y>=38)
    for (x,y,c) in [(19,25,'red'),(29,25,'mag'),(16,21,'gold'),(32,21,'blue'),(13,18,'purple'),(35,18,'green')]: v.ell(x,y,1.6,1.6,c)
    v.line(12,27,18,33,v.col('yel',2),w=2); v.line(36,27,30,33,v.col('yel',2),w=2)
    v.inner('yel','skin')
    return v.thick()

def firstborn():
    v=V()
    # three eldest children up front, the middle one holding up a first-place rosette; taller to smaller
    def kid(cx,top,hairr):
        v.rect(cx-3,39,cx-1,44,'brown'); v.rect(cx+1,39,cx+3,44,'brown'); v.rect(cx-4,45,cx-1,46,'hair'); v.rect(cx+1,45,cx+4,46,'hair')
        v.poly([(cx-5,top+13),(cx+5,top+13),(cx+6,39),(cx-6,39)],'bl')
        v.rect(cx-2,top+10,cx+2,top+13,'skin'); v.face(cx,top,11,11,ey=top+5,mouth=False)
        for x in range(cx-1,cx+2): v.px(x,top+8,v.col('skin',3))
        v.px(cx-2,top+7,v.col('skin',3)); v.px(cx+2,top+7,v.col('skin',3))
        v.ell(cx,top+1,5.6,2.6,hairr,clip=lambda x,y:y<=top+2)
    kid(8,14,'ginger'); kid(40,16,'hair'); kid(24,9,'hair')
    v.poly([(29,25),(33,18),(35,20),(31,27)],'bl'); v.ell(34,17,1.8,1.8,'skin')
    v.ell(36,9,4,4,'bl'); v.ell(36,9,2,2,'gold',flat=True); v.px(36,9,hx('#ffffff'))
    v.poly([(34,12),(36,12),(35,17),(33,16)],'red'); v.poly([(37,12),(39,12),(39,16),(37,17)],'red')
    v.inner('bl','skin')
    return v.thick()

ALL=lambda:[('Firstborn',firstborn()),('Market Sweeper',marketsweeper()),('Penny-Pincher',pennypincher()),('Laggard',laggard()),('Alchemists',alchemists())]
if __name__=='__main__': sheet(ALL(),'new10.png',sc=6,cols=5)
