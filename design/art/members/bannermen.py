from kit import *
from yel import legs, head
def bannermen():
    v=V()
    # sworn man in his lord's two colors, marching behind a big hanging banner held up on a crossbar
    v.rect(20,0,21,46,'brown') if False else None
    legs(v,x1=13,x2=22,ramp='white',boot='dark')
    v.poly([(13,26),(27,26),(28,40),(12,40)],'red'); v.rect(20,26,28,40,'white',flat=True); v.poly([(20,26),(27,26),(28,40),(20,40)],'white')
    v.rect(12,34,28,35,'brown',flat=True)
    v.rect(4,2,36,3,'brown'); v.ell(4,2.5,1.2,1.2,'gold'); v.ell(36,2.5,1.2,1.2,'gold')
    v.rect(6,4,20,17,'red'); v.rect(20,4,34,17,'white')
    for x in range(6,35,4): v.px(x,18,v.col('red' if x<20 else 'white',1)); v.px(x+1,18,v.col('red' if x<20 else 'white',1))
    v.ell(20,10,3,3,'gold')
    v.poly([(13,27),(7,20),(6,15),(9,15),(12,21)],'red'); v.ell(7.5,15,2,2,'skin')
    v.poly([(27,27),(33,20),(34,15),(31,15),(28,21)],'white'); v.ell(32.5,15,2,2,'skin')
    v.rect(17,23,23,26,'skin')
    v.face(20,15,11,10,ey=19,mouth=False,blush=True)
    for x in range(18,23): v.px(x,23,v.col('skin',3))
    v.ell(20,16,6,2.4,'grey',clip=lambda x,y:y<=17); v.rect(14,17,26,17,'dark',flat=True)
    v.inner('red','skin'); v.inner('red','white'); v.inner('white','skin')
    return v.thick()
