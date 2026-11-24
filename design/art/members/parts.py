from kit import *
from yel import legs, head
RAMP['cloth']=('#e8d4a0','#c8a868','#9a7a44','#6a5028')
RAMP['au']=('#f4cc68','#d49b27','#a0721a','#6c4c10')
RAMP['ag']=('#dde3e8','#a0a8b0','#727a84','#4c525a')
RAMP['wh']=('#fffaf0','#e6dcc6','#bcae92','#8a7c62')
RAMP['gr']=('#7cc896','#3f9467','#2a6a48','#1a4630')
RAMP['gy']=('#b4aca2','#8a8278','#625c54','#433e38')
RAMP['mag']=('#f07ab0','#d4508f','#a03068','#6a1c44')
RAMP['purple']=('#c8a0f0','#9a62e6','#6a3ab0','#442478')
RAMP['fur']=('#fffaf0','#ece4d4','#c8bca4','#9a8e78')
class P:
    def __init__(s,C): s.C=C
    def body(s,v,top=19,bot=40,w=7,ramp=None,belt=True):
        ramp=ramp or s.C
        v.poly([(20-w,top),(20+w,top),(20+w+1,bot),(19-w,bot)],ramp)
        if belt: v.rect(19-w,31,20+w+1,32,'brown',flat=True); v.px(20,31,v.col('gold',0))
    def armL(s,v,hx_,hy,ramp=None): v.poly([(13,20),(9,21),(hx_,hy-1),(hx_+3,hy-2)],ramp or s.C); v.ell(hx_+1,hy,2,2,'skin')
    def armR(s,v,hx_,hy,ramp=None): v.poly([(27,20),(31,21),(hx_,hy-1),(hx_-3,hy-2)],ramp or s.C); v.ell(hx_-1,hy,2,2,'skin')
def smile(v,cx=20,y=14):
    for x in range(cx-3,cx+4): v.px(x,y,v.col('skin',3))
    v.px(cx-4,y-1,v.col('skin',3)); v.px(cx+4,y-1,v.col('skin',3))
def flat(v,cx=20,y=14,w=2):
    for x in range(cx-w,cx+w+1): v.px(x,y,v.col('skin',3))
def coin(v,x,y,r=1.8):
    v.ell(x,y,r,r,'gold'); v.px(x-1,y-1,hx('#ffffff'))
def hat(v,ramp,cx=20,top=4.5,brim=True,band=None):
    v.ell(cx,top,8,3.5,ramp,clip=lambda x,y:y<=top+1.5)
    if brim: v.rect(cx-10,int(top+1.5),cx+10,int(top+2.5),ramp)
    if band: v.rect(cx-6,int(top),cx+6,int(top),band,flat=True)
def hair(v,ramp='hair',cx=20,top=5):
    v.ell(cx,top,7,3,ramp,clip=lambda x,y:y<=top+1)
def beard(v,ramp='grhair',cx=20,top=13,bot=19,w=5):
    v.poly([(cx-w,top),(cx+w,top),(cx+w-2,bot),(cx,bot+1),(cx-w+2,bot)],ramp)
