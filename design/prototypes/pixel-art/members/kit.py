# tiny pixel kit: 24x24 char grids in the minion keys
import math, json
from PIL import Image
N=24
SHARED={'k':'#1c1410','w':'#f6eedb','c':'#cbbd9c','s':'#f1c49b','t':'#c88b62','o':'#ffd66e','x':'#2e2430','b':'#ee8f8a'}
F={'red':['#8f2a22','#d4473a','#f0866c'],'coral':['#93331f','#d9583a','#f39a75'],'orange':['#a5521b','#e8892f','#f7b866'],
'yellow':['#b48a1f','#f2c94a','#fbe596'],'gold':['#a8761a','#e3b23c','#f8dc86'],'lime':['#3a7634','#6bb24d','#a8d97b'],
'sage':['#2f6a3a','#4f9a55','#86c47d'],'jade':['#245e4c','#3f9472','#7cc9a2'],'teal':['#226a70','#3aa0a3','#8fd3cc'],
'blue':['#2c5590','#4f8bd0','#8db9ea'],'indigo':['#2a3160','#45528e','#7080bd'],'purple':['#553a8e','#8b66cb','#b99ce6'],
'pink':['#a3456f','#e27aa6','#f7b9d2'],'grey':['#66717a','#a9b4bb','#dfe5e8'],'brown':['#6a3d1d','#b06a2e','#dd9c58'],
'clay':['#7c3d24','#bd6a43','#e09a6e'],'sky':['#86aec2','#cfe6f0']}
class C:
  def __init__(s,n=N): s.n=n; s.g=[['.']*n for _ in range(n)]
  def ok(s,x,y): return 0<=x<s.n and 0<=y<s.n
  def p(s,x,y,k):
    if s.ok(x,y): s.g[y][x]=k
  def get(s,x,y): return s.g[y][x] if s.ok(x,y) else '.'
  def mask(s,f): return {(x,y) for y in range(s.n) for x in range(s.n) if f(x+.5,y+.5)}
  def fill(s,m,k):
    for x,y in m: s.p(x,y,k)
  def disc(s,cx,cy,r): return s.mask(lambda x,y:(x-cx)**2+(y-cy)**2<=r*r)
  def ell(s,cx,cy,rx,ry): return s.mask(lambda x,y:((x-cx)/rx)**2+((y-cy)/ry)**2<=1)
  def rect(s,x0,y0,x1,y1): return {(x,y) for x in range(x0,x1+1) for y in range(y0,y1+1)}
  def shade(s,m,lo,mid,hi,light=(-1,-1)):
    # mid fill; edge facing the light gets hi, edge away gets lo
    for x,y in m: s.p(x,y,mid)
    lx,ly=light
    for x,y in m:
      if (x-lx,y) not in m or (x,y-ly) not in m: pass
      away = (x+1,y) not in m and lx<0 or (x,y+1) not in m and ly<0
      toward = (x-1,y) not in m and lx<0 or (x,y-1) not in m and ly<0
      if away: s.p(x,y,lo)
      elif toward: s.p(x,y,hi)
  def stamp(s,x0,y0,rows):
    for j,r in enumerate(rows):
      for i,ch in enumerate(r):
        if ch!=' ': s.p(x0+i,y0+j,ch)
  def rows(s): return [''.join(r) for r in s.g]
def outline(rows):
  H=len(rows);W=len(rows[0])
  f=lambda x,y:0<=y<H and 0<=x<W and rows[y][x] not in '.k'
  return [''.join('k' if ch=='.' and (f(x-1,y) or f(x+1,y) or f(x,y-1) or f(x,y+1)) else ch for x,ch in enumerate(r)) for y,r in enumerate(rows)]
def pal_of(pal):
  p=dict(SHARED)
  for i,h in enumerate(pal): p[str(i+1)]=h
  return p
def hexrgb(h): return tuple(int(h[i:i+2],16) for i in (1,3,5))
def render(rows,pal,scale,bg=None):
  n=len(rows); im=Image.new('RGBA',(n*scale,n*scale),bg or (0,0,0,0)); P=pal_of(pal)
  for y,r in enumerate(outline(rows)):
    for x,ch in enumerate(r):
      if ch!='.':
        c=hexrgb(P[ch])+(255,)
        for dy in range(scale):
          for dx in range(scale): im.putpixel((x*scale+dx,y*scale+dy),c)
  return im

def tri(c,a,b,d):
  (ax,ay),(bx,by),(cx,cy)=a,b,d
  def f(x,y):
    d1=(x-bx)*(ay-by)-(ax-bx)*(y-by); d2=(x-cx)*(by-cy)-(bx-cx)*(y-cy); d3=(x-ax)*(cy-ay)-(cx-ax)*(y-ay)
    return not ((d1<0 or d2<0 or d3<0) and (d1>0 or d2>0 or d3>0))
  return c.mask(f)

def poly(c,pts):
  # point-in-polygon fill
  def f(x,y):
    ins=False; n=len(pts)
    for i in range(n):
      (x1,y1),(x2,y2)=pts[i],pts[(i+1)%n]
      if (y1>y)!=(y2>y) and x < (x2-x1)*(y-y1)/(y2-y1)+x1: ins=not ins
    return ins
  return c.mask(f)
def line(c,x0,y0,x1,y1):
  n=max(abs(x1-x0),abs(y1-y0)) or 1
  return {(round(x0+(x1-x0)*i/n),round(y0+(y1-y0)*i/n)) for i in range(n+1)}
