from PIL import Image, ImageDraw, ImageFont
import math
N=48
def hx(h): return tuple(int(h[i:i+2],16) for i in (1,3,5))
# ramps: name -> (hi, base, lo, deep)
RAMP={
 'red':('#e8604c','#d03a30','#9c2424','#6a1616'),
 'skin':('#fbd9b4','#f1c49b','#d39a72','#a86e4c'),
 'white':('#ffffff','#f6eedb','#d6c9a8','#a8987a'),
 'grey':('#c9d0cc','#9aa39f','#6d7672','#4a504d'),
 'dark':('#5a4c5e','#3a2f40','#261d2a','#160f18'),
 'brown':('#b07a48','#8a5a32','#62401f','#3e2812'),
 'gold':('#fff0a0','#e8b53a','#b07e18','#7a540c'),
 'hair':('#8a5a3a','#5a3420','#3a2214','#24140a'),
 'grhair':('#ffffff','#d8d8d8','#a8a8a8','#7a7a7a'),
 'ginger':('#e8804a','#c25a2a','#8a3a1a','#5a2410'),
 'blue':('#b8e0f8','#6fa8dc','#3f6f9f','#284a70'),
 'green':('#8fc07a','#4f8a4a','#2f5a33','#1e3a22'),
}
INK=hx('#1c1410'); BLUSH=hx('#ee8f8a')
class V:
    def __init__(s): s.g=[[None]*N for _ in range(N)]; s.flat=set()
    def px(s,x,y,c):
        x=int(x);y=int(y)
        if 0<=x<N and 0<=y<N: s.g[y][x]=c if (c is None or isinstance(c,tuple)) else hx(c)
    def tone(s,ramp,t):  # t: -1 dark .. 1 light
        r=RAMP[ramp]; i=0 if t>.8 else 1 if t>-.3 else 2 if t>-1.1 else 3
        return hx(r[i])
    def ell(s,cx,cy,rx,ry,ramp,clip=None,flat=False,lx=-.55,ly=-.65):
        for y in range(N):
            for x in range(N):
                dx=(x+.5-cx)/rx; dy=(y+.5-cy)/ry; d=dx*dx+dy*dy
                if d<=1 and (clip is None or clip(x,y)):
                    if flat: s.px(x,y,hx(RAMP[ramp][1])); continue
                    nz=math.sqrt(max(0,1-d)); t=(dx*lx+dy*ly)*1.1+nz*.35-.25
                    s.px(x,y,s.tone(ramp,t))
    def poly(s,pts,ramp,flat=False,cyl=True):
        # filled polygon; cylinder shading across its x-extent per row
        ys=[p[1] for p in pts]
        for y in range(int(min(ys)),int(math.ceil(max(ys)))+1):
            xs=[]
            for i in range(len(pts)):
                (x1,y1),(x2,y2)=pts[i],pts[(i+1)%len(pts)]
                if (y1<=y+.5<y2) or (y2<=y+.5<y1):
                    xs.append(x1+(y+.5-y1)*(x2-x1)/(y2-y1))
            xs.sort()
            for a,b in zip(xs[::2],xs[1::2]):
                for x in range(int(round(a)),int(round(b))):
                    if flat: s.px(x,y,hx(RAMP[ramp][1])); continue
                    u=(x+.5-a)/max(1,b-a)*2-1  # -1 left .. 1 right
                    t=-u*.9+.15 if cyl else 0
                    s.px(x,y,s.tone(ramp,t))
    def rect(s,x0,y0,x1,y1,ramp,flat=False):
        s.poly([(x0,y0),(x1+1,y0),(x1+1,y1+1),(x0,y1+1)],ramp,flat)
    def line(s,x0,y0,x1,y1,c,w=1):
        n=int(max(abs(x1-x0),abs(y1-y0),1))
        for i in range(n+1):
            x=round(x0+(x1-x0)*i/n); y=round(y0+(y1-y0)*i/n)
            for d in range(w): s.px(x+d,y,c)
    def col(s,ramp,i=1): return hx(RAMP[ramp][i])
    def face(s,cx,top,w=11,h=11,skin='skin',eyes=True,blush=True,mouth=True,ey=None):
        s.ell(cx,top+h/2,w/2,h/2,skin,flat=True)
        for y in range(N):
            for x in range(N):
                dx=(x+.5-cx)/(w/2); dy=(y+.5-top-h/2)/(h/2)
                if dx*dx+dy*dy<=1 and (dx>.62 or dy>.8): s.px(x,y,s.col(skin,2))
        if ey is None: ey=top+int(h*.48)
        ex1=int(cx-w*.22-.5); ex2=int(cx+w*.22-.5)
        if eyes:
            for ex in (ex1,ex2): s.px(ex,ey,INK); s.px(ex,ey+1,INK)
        if blush:
            s.px(ex1-1,ey+2,BLUSH); s.px(ex1-2,ey+2,BLUSH); s.px(ex2+1,ey+2,BLUSH); s.px(ex2+2,ey+2,BLUSH)
        if mouth: s.px(int(cx-.5),ey+4,s.col(skin,3)); s.px(int(cx+.5),ey+4,s.col(skin,3))
        return ex1,ex2,ey
    def hand(s,x,y,skin='skin'):
        s.ell(x,y,1.9,1.9,skin)
    def outline(s):
        G=[r[:] for r in s.g]
        for y in range(N):
            for x in range(N):
                if G[y][x] is None:
                    for dx,dy in ((1,0),(-1,0),(0,1),(0,-1)):
                        X,Y=x+dx,y+dy
                        if 0<=X<N and 0<=Y<N and G[Y][X] is not None and G[Y][X]!=INK: s.g[y][x]=INK;break
        return s
    def thick(s):
        s.outline(); G=[r[:] for r in s.g]
        for y in range(N):
            for x in range(N):
                if G[y][x] is None:
                    for dx,dy in ((1,0),(-1,0),(0,1),(0,-1)):
                        X,Y=x+dx,y+dy
                        if 0<=X<N and 0<=Y<N and G[Y][X]==INK: s.g[y][x]=INK;break
        return s
    def inner(s,base_ramp,other_ramp,c=None):
        # dark line where one ramp's pixels meet another's
        A=set(hx(t) for t in RAMP[base_ramp]); B=set(hx(t) for t in RAMP[other_ramp]); G=[r[:] for r in s.g]
        for y in range(N):
            for x in range(N):
                if G[y][x] in A:
                    for dx,dy in ((1,0),(-1,0),(0,1),(0,-1)):
                        X,Y=x+dx,y+dy
                        if 0<=X<N and 0<=Y<N and G[Y][X] in B: s.g[y][x]=c or hx(RAMP[base_ramp][3]);break
        return s
    def img(s,sc):
        im=Image.new('RGBA',(N*sc,N*sc),(0,0,0,0));d=ImageDraw.Draw(im)
        for y,r in enumerate(s.g):
            for x,c in enumerate(r):
                if c: d.rectangle([x*sc,y*sc,x*sc+sc-1,y*sc+sc-1],fill=c)
        return im
def sheet(figs,path,sc=6,names=True,minions=None,cols=4):
    pad=24;cw=N*sc+pad;n=len(figs);rws=(n+cols-1)//cols;ch=N*sc+90
    out=Image.new('RGB',(pad+cols*cw,pad+rws*ch),hx('#2a1f19'));d=ImageDraw.Draw(out)
    fnt=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf',20)
    for i,(nm,v) in enumerate(figs):
        x=pad+(i%cols)*cw;y=pad+(i//cols)*ch
        d.rounded_rectangle([x-6,y-6,x+N*sc+6,y+N*sc+6],10,fill=hx('#3a2c24'))
        a=v.img(sc);out.paste(a,(x,y),a); b=v.img(1);out.paste(b,(x,y+N*sc+14),b); b2=v.img(2);out.paste(b2,(x+60,y+N*sc+14-24),b2)
        d.text((x+170,y+N*sc+30),nm,fill=(238,230,214),font=fnt)
    out.save(path)
