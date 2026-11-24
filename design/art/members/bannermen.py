from kit import *
from yel import legs, head
def bannermen():
    v=V(); legs(v,ramp='dark')
    v.poly([(13,19),(27,19),(28,40),(12,40)],'red'); v.rect(12,31,28,32,'brown',flat=True); v.px(20,31,v.col('gold',0))
    # tabard with the lord's mark, holding his banner high in two colors
    v.rect(17,22,23,30,'white',flat=True); v.ell(20,26,1.6,1.6,'red',flat=True)
    v.rect(33,0,34,44,'brown'); v.ell(33.5,0,1.4,1.2,'gold')
    v.poly([(35,2),(46,2),(46,16),(41,13),(35,16)],'red'); v.rect(35,7,46,10,'gold',flat=True)
    v.poly([(27,20),(33,22),(33,25),(27,24)],'red'); v.ell(33,23.5,2,2,'skin')
    v.poly([(27,26),(32,30),(31,32),(27,29)],'red') if False else None
    v.poly([(13,20),(9,26),(11,29),(14,24)],'red'); v.ell(10,29,2,2,'skin')
    head(v,mouth=False)
    for x in range(18,23): v.px(x,14,v.col('skin',3))
    for x in (15,16,17): v.px(x,8,v.col('hair',2))
    for x in (23,24,25): v.px(x,8,v.col('hair',2))
    v.ell(20,5,8,4.4,'grey',clip=lambda x,y:y<=6); v.rect(11,6,29,7,'dark'); v.rect(20,7,20,11,'dark',flat=True); v.px(17,3,hx('#ffffff')); v.px(18,2,hx('#ffffff'))
    v.inner('red','skin'); v.inner('red','white')
    return v.thick()
