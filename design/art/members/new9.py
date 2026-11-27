from parts import *
RAMP['bl']=('#9cc8f0','#4a80b8','#30608e','#1e3e62')
from gry import mini
def forestallers():
    v=V()
    # town gate at first light: low sun between two stone posts, a dirt road underfoot
    v.ell(24,12,9,9,'gold',flat=True,clip=lambda x,y:y<=13)
    for (a,b,c,d) in [(24,2,24,0),(14,6,12,4),(34,6,36,4)]: v.line(a,b,c,d,v.col('gold',0))
    v.rect(0,6,2,44,'grey'); v.rect(45,6,47,44,'grey')
    for y in (14,22,30,38): v.rect(0,y,2,y,'dark',flat=True); v.rect(45,y,47,y,'dark',flat=True)
    # left buyer: a full sack hauled on his shoulder, grinning
    v.ell(8,22,5,7,'cloth'); v.rect(5,14,10,16,'cloth'); v.line(6,15,10,15,v.col('brown',1)); v.line(7,26,10,26,v.col('cloth',3))
    mini(v,16,ramp='bl',hairr='hair',top=10)
    v.px(14,19,v.col('skin',3)); v.px(15,20,v.col('skin',3)); v.px(16,20,v.col('skin',3)); v.px(17,20,v.col('skin',3)); v.px(18,19,v.col('skin',3))
    v.poly([(11,24),(7,22),(8,19),(12,21)],'bl'); v.ell(8,19,1.8,1.8,'skin')
    # right buyer: a basket of produce held at the chest, cap on his head
    mini(v,34,ramp='bl',hairr='ginger',top=10)
    v.px(32,19,v.col('skin',3)); v.px(33,20,v.col('skin',3)); v.px(34,20,v.col('skin',3)); v.px(35,20,v.col('skin',3)); v.px(36,19,v.col('skin',3))
    v.ell(34,8,6,3,'brown',clip=lambda x,y:y<=9); v.rect(28,9,40,9,'brown')
    v.rect(26,28,42,38,'brown'); v.rect(26,30,42,30,'brown',flat=True); v.rect(26,34,42,34,'dark',flat=True)
    for i,c in enumerate(['red','green','red','gold','green']): v.ell(28+i*3.2,27,2.3,2.4,c)
    v.px(29,25,v.col('green',1)); v.line(35,24,36,22,v.col('green',1))
    v.poly([(29,25),(25,30),(27,32),(31,28)],'bl'); v.ell(26,31,1.8,1.8,'skin')
    v.poly([(39,25),(43,30),(41,32),(37,28)],'bl'); v.ell(42,31,1.8,1.8,'skin')
    # crate at their feet between them, a cabbage on top
    v.rect(21,38,29,44,'brown'); v.rect(21,41,29,41,'dark',flat=True); v.ell(25,36.5,2.6,2.4,'green')
    # road dashes
    for x in (2,14,30,43): v.rect(x,46,x+4,46,'brown',flat=True)
    v.inner('bl','skin')
    return v.thick()
ALL=lambda:[('Forestallers',forestallers())]
if __name__=='__main__': sheet(ALL(),'new9.png',sc=6,cols=1)
