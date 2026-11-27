from parts import *
RAMP['yel']=('#fbee7a','#e8d23e','#b49a28','#76621a')
from yel import legs, head
def spicemerchant():
    v=V(); legs(v,ramp='cloth'); P('yel').body(v,belt=False,w=8)
    v.rect(11,31,30,32,'red',flat=True)
    # behind a tray of spice heaps, one of every color, offering a pinch; turban and curled moustache
    v.rect(2,30,40,32,'brown'); v.rect(4,33,38,34,'brown',flat=True)
    for i,c in enumerate(['red','gold','green','blue','purple','mag']):
        x=6+i*6; v.ell(x,29,2.8,2.4,c,clip=lambda X,Y:Y<=29); v.px(x-1,27,v.col(c,0))
    v.poly([(27,20),(31,22),(35,18),(33,16)],'yel'); v.ell(35,16,2,2,'skin'); v.px(36,13,v.col('red',1)); v.px(37,12,v.col('red',1)); v.px(38,14,v.col('red',0))
    v.poly([(13,20),(9,23),(10,28),(14,25)],'yel'); v.ell(10,28,2,2,'skin')
    head(v,mouth=False); smile(v)
    v.line(17,13,19,13,v.col('hair',2)); v.line(21,13,23,13,v.col('hair',2)); v.px(16,12,v.col('hair',2)); v.px(24,12,v.col('hair',2))
    v.ell(20,5,9,4.5,'white',clip=lambda x,y:y<=7); v.line(12,6,28,3,v.col('white',2)); v.ell(20,3,1.6,1.6,'red'); v.px(20,1,v.col('gold',0))
    for x in (16,17,23,24): v.px(x,10,INK)
    v.inner('yel','skin')
    return v.thick()
ALL=lambda:[('Spice Merchant',spicemerchant())]
if __name__=='__main__': sheet(ALL(),'new5.png',sc=6,cols=1)
