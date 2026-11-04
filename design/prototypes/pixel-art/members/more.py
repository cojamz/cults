# Every member after the first eight samples, by color. Same kit and keys as draw.py.
from kit import *
REG=[]
def reg(name):
  def d(f): REG.append((name,f)); return f
  return d
def face(c,cx,cy,rx,ry,skin='s',shade='t'):
  m=c.ell(cx,cy,rx,ry); c.fill(m,skin)
  c.fill({(x,y) for x,y in m if (x+1,y) not in m or (x,y+1) not in m},shade)
  return m
def eyes(c,x1,x2,y,h=2):
  for x in (x1,x2):
    for j in range(h): c.p(x,y+j,'k')
def smile(c,x0,x1,y):
  c.p(x0,y,'k'); c.p(x1,y,'k'); c.fill({(x,y+1) for x in range(x0+1,x1)},'k')
GREY=F['grey']; SKY=F['sky']
# ---------------- Red ----------------
@reg('volunteer')
def volunteer():
  c=C(); pal=F['red']+F['brown']
  body=c.ell(11,22,8,4.5); body={(x,y) for x,y in body if y<=22}; c.shade(body,'1','2','3')
  arm=line(c,17,17,19,5)|line(c,18,17,20,5); c.fill(arm,'2'); c.fill(line(c,19,17,21,6),'1')
  hand=c.ell(20,4,1.8,2.3); c.fill(hand,'s'); c.p(21,4,'t')
  face(c,10,11.5,5.6,6)
  hair=c.ell(10,8,6.2,4.2); hair={(x,y) for x,y in hair if y<=8}; c.shade(hair,'4','5','6')
  c.fill({(4,9),(4,10),(5,9),(16,9)},'5')
  eyes(c,8,12,11); smile(c,8,12,14); c.p(6,13,'b'); c.p(14,13,'b')
  return c,pal
@reg('deprogrammers')
def deprogrammers():
  c=C(); pal=F['brown']+GREY
  board=c.rect(4,3,19,22); c.shade(board,'1','2','3')
  c.fill(c.rect(6,6,17,20),'w'); c.fill({(17,y) for y in range(6,21)}|{(x,20) for x in range(6,18)},'c')
  c.fill(c.rect(9,1,14,5),'5'); c.fill({(x,5) for x in range(9,15)},'4'); c.fill({(10,1),(11,1),(12,1),(13,1)},'6'); c.fill({(11,2),(12,2)},'k')
  for y in (9,12,15,18):
    c.fill({(x,y) for x in range(8,16 if y!=18 else 13)},'4')
    c.p(8,y,'k')
  return c,pal
@reg('greeters')
def greeters():
  c=C(); pal=F['gold']
  palm=c.ell(12,16,5.6,5.2)
  fingers=c.rect(6,6,7,14)|c.rect(9,3,10,13)|c.rect(12,3,13,13)|c.rect(15,5,16,13)
  thumb=line(c,16,16,20,11)|line(c,17,16,21,11)|line(c,16,17,20,12)
  m=palm|fingers|thumb; c.shade(m,'1','2','3')
  for x in (8,11,14): 
    for y in range(6,12): 
      if (x,y) not in m: pass
  for y in range(7,13): c.p(8,y,'.') ; 
  for y in range(5,13): c.p(11,y,'.'); c.p(14,y,'.')
  for x,y in [(2,6),(2,7),(3,5),(4,3),(5,2),(19,4),(20,5),(21,7)]: c.p(x,y,'c')
  return c,pal
@reg('body-snatchers')
def body_snatchers():
  c=C(); pal=F['lime']+F['indigo']
  shirt=c.ell(12,23,9,4.5); shirt={(x,y) for x,y in shirt if y<=22}; c.shade(shirt,'4','5','6')
  for x in (6,9,14,17): c.p(x,22,'.')
  c.fill(c.rect(10,18,13,19),'1')
  f=face(c,12,11,6.5,7,'2','1')
  c.fill({(x,y) for x,y in f if (x-1,y) not in f or (x,y-1) not in f},'3')
  hair=c.ell(12,5.5,6.6,2.8); c.fill({(x,y) for x,y in hair if y<=6},'x'); c.fill({(6,7),(7,7),(17,7),(10,7),(14,7)},'x')
  c.fill(c.rect(8,10,10,11),'w'); c.fill(c.rect(14,10,16,11),'w'); c.p(9,11,'k'); c.p(15,11,'k')
  c.fill(c.rect(10,14,14,16),'x'); c.fill({(11,14),(13,14)},'w'); c.p(7,13,'1'); c.p(16,14,'1')
  return c,pal
@reg('host')
def host():
  c=C(); pal=F['gold']+['#d4473a','#4f8bd0','#6bb24d','#e27aa6']
  cone=poly(c,[(2.5,21.5),(8.5,9.5),(14.5,15.5)]); c.shade(cone,'1','2','3')
  for x,y in cone:
    if (x-y)%5==0: c.p(x,y,'4')
  c.fill(line(c,8,10,14,16),'1')
  for (x,y,k) in [(12,6,'4'),(15,4,'5'),(18,7,'6'),(20,11,'7'),(16,10,'4'),(19,3,'6'),(13,2,'7'),(21,15,'5'),(10,4,'6'),(17,13,'7')]:
    c.p(x,y,k); c.p(x+1,y,k)
  c.fill(line(c,14,8,16,5)|line(c,16,5,18,5),'5'); c.fill(line(c,16,12,19,10)|line(c,19,10,21,9),'4')
  return c,pal
@reg('loyalists')
def loyalists():
  c=C(); pal=GREY+F['blue']
  sh=poly(c,[(3,3),(21,3),(21,12),(12,22),(3,12)])|c.ell(12,12.5,9,9.4)&c.rect(3,3,21,21)
  sh=poly(c,[(3.5,3),(20.5,3),(20.5,11),(16,18),(12,21.5),(8,18),(3.5,11)])
  c.shade(sh,'1','2','3')
  inner=poly(c,[(6,5.5),(18,5.5),(18,11),(14.5,16.5),(12,18.8),(9.5,16.5),(6,11)]); c.shade(inner,'4','5','6')
  c.fill(c.rect(11,6,12,17)&inner,'3'); c.fill(c.rect(6,9,17,10)&inner,'3')
  return c,pal
@reg('headhunter')
def headhunter():
  c=C(); pal=F['brown']+GREY+SKY
  h=line(c,15,15,20,20)|line(c,16,15,21,20)|line(c,15,16,20,21)|line(c,16,16,21,21)|line(c,17,16,21,20)
  c.fill(h,'2'); c.fill(line(c,15,16,20,21),'1'); c.fill({(21,20),(21,21),(20,21)},'1')
  ring=c.disc(10,10,7.6)-c.disc(10,10,5.4); c.shade(ring,'4','5','6')
  lens=c.disc(10,10,5.4); c.fill(lens,'7'); c.fill(c.disc(10,10,4.4)-c.disc(8.6,8.6,3.4),'8')
  c.fill({(7,7),(8,6),(7,8),(6,8)},'w')
  return c,pal
@reg('patriarch')
def patriarch():
  c=C(); pal=F['brown']
  f=face(c,12,12.5,8.5,9)
  c.fill({(x,y) for x,y in f if (x-1,y) not in f and y<12 or (x,y-1) not in f},'s')
  for y in (6,8):
    c.fill({(x,y) for x in range(9,15)},'t')
  for sx in (3,4,5):
    for y in range(9,15): 
      if (sx,y) in f or sx==3: c.p(sx,y,'w')
  for sx in (19,20,21):
    for y in range(9,15):
      if (sx,y) in f or sx==21: c.p(sx,y,'w')
  c.fill({(3,15),(21,15),(4,15),(20,15)},'c')
  eyes(c,9,15,11); c.fill({(8,9),(9,9),(10,9),(14,9),(15,9),(16,9)},'c')
  c.fill(c.rect(8,15,16,16),'w'); c.fill({(7,16),(17,16),(8,17),(16,17)},'w'); c.fill({(10,17),(11,17),(12,17),(13,17),(14,17)},'c')
  c.fill({(11,13),(12,13),(12,14)},'t'); c.fill({(10,19),(11,19),(12,19),(13,19),(14,19)},'k')
  return c,pal
@reg('panel')
def panel():
  c=C(); pal=F['brown']+GREY
  c.fill(c.rect(11,13,12,22),'2'); c.fill({(12,y) for y in range(13,23)},'1')
  b=c.rect(2,3,21,14); c.shade(b,'1','2','3')
  c.fill(c.rect(4,5,19,12),'w'); c.fill({(19,y) for y in range(5,13)}|{(x,12) for x in range(4,20)},'c')
  for y,(a,z) in [(7,(6,17)),(10,(6,14))]: c.fill({(x,y) for x in range(a,z+1)},'x'); c.fill({(x,y+1) for x in range(a,z+1)},'4')
  return c,pal
@reg('proselytizers')
def proselytizers():
  c=C(); pal=F['red']+GREY
  c.fill(c.rect(8,14,10,19),'4'); c.fill({(10,y) for y in range(14,20)},'x')
  cone=poly(c,[(3,9.5),(17,3.5),(17,19.5),(3,13.5)]); c.shade(cone,'1','2','3')
  c.fill(c.rect(2,9,4,14),'5'); c.fill({(2,13),(3,13),(4,13)},'4')
  rim=c.ell(18.5,11.5,2.4,8.4); c.shade(rim,'4','5','6'); c.fill(c.ell(19,11.5,1,6.6),'x')
  c.fill(line(c,6,9,15,5),'3')
  return c,pal
@reg('mentor-proteges')
def mentor_proteges():
  c=C(); pal=F['sage']+F['brown']+F['blue']
  bd=c.rect(2,2,21,13); c.fill(bd,'5'); c.fill(c.rect(3,3,20,12),'1')
  c.fill(c.rect(3,3,20,3),'2')
  for y,(a,z) in [(5,(5,11)),(7,(5,9)),(9,(14,18))]: c.fill({(x,y) for x in range(a,z+1)},'w')
  c.fill({(15,5),(17,5),(16,6),(15,7),(17,7)},'w')
  sh=c.ell(12,23.5,8,5); sh={(x,y) for x,y in sh if y<=22}; c.shade(sh,'7','8','9'); c.fill({(11,19),(12,19),(12,20),(11,20)},'w')
  face(c,12,15,4.6,4.4)
  hair=c.ell(12,12,5,2.6); c.shade({(x,y) for x,y in hair if y<=12},'4','5','6'); c.fill({(7,13),(7,14),(17,13)},'5')
  c.fill({(9,14),(10,14),(11,14),(13,14),(14,14),(15,14),(12,14)},'k'); c.fill({(10,15),(14,15)},'k')
  c.fill({(11,17),(12,17),(13,17)},'k')
  return c,pal
# ---------------- Green ----------------
def yface(c,cx=12,cy=12,r=10.5):
  m=c.disc(cx,cy,r); c.shade(m,'1','2','3'); return m
@reg('agents')
def agents():
  c=C(); pal=GREY
  for x0 in (2,13):
    l=c.rect(x0,8,x0+8,13)|c.ell(x0+4,13,4.4,2.6); l={(x,y) for x,y in l if y>=8}; c.fill(l,'x')
    c.fill({(x0+1,9),(x0+2,9),(x0+1,10)},'4' if False else '2')
  c.fill(c.rect(10,8,13,9),'x'); c.fill(c.rect(1,7,22,8),'x')
  c.fill({(1,9),(22,9),(1,10),(22,10)},'x')
  c.fill({(3,9),(4,9),(3,10),(14,9),(15,9),(14,10)},'3')
  return c,pal
@reg('bait')
def bait():
  c=C(); pal=GREY+F['red']
  c.fill(c.rect(11,1,12,3),'x')
  c.fill(c.disc(11.5,5,2.4)-c.disc(11.5,5,1),'2')
  shank=c.rect(11,7,12,16); c.fill(shank,'2'); c.fill({(12,y) for y in range(7,17)},'1')
  bend=c.disc(9,15.5,3.8)-c.disc(9,15.5,1.9); bend={(x,y) for x,y in bend if y>=15 and x<=12}; c.fill(bend,'2'); c.fill({(x,y) for x,y in bend if y>=18},'1')
  c.fill({(5,15),(6,15),(5,14),(6,14),(5,13),(6,13),(5,12),(4,12),(4,11)},'2'); c.fill({(7,12),(7,13)},'2')
  c.fill(c.ell(16.5,12,2.4,3),'5'); c.fill({(16,10),(15,11)},'6'); c.p(17,14,'4')
  return c,pal
@reg('roadie')
def roadie():
  c=C(); pal=GREY+F['jade']+F['red']
  b=c.rect(2,2,21,21); c.shade(b,'1','2','3'); c.fill(c.rect(4,4,19,19),'x')
  for i,(x,y) in enumerate([(6,13),(11,7),(16,10)]):
    c.fill({(x+1,yy) for yy in range(5,19)},'k')
    k='4' if i!=1 else '7'
    c.fill(c.rect(x,y,x+2,y+2),k if i!=1 else '8'); c.fill({(x,y)},'6' if i!=1 else '9'); c.fill({(x+2,y+2)},'4' if i!=1 else '7')
  return c,pal
@reg('busker')
def busker():
  c=C(); pal=F['brown']+F['gold']
  neck=line(c,12,12,19,3)|line(c,13,12,20,3)|line(c,13,13,20,4); c.fill(neck,'1')
  c.fill(c.rect(18,1,21,4),'2'); c.fill({(17,1),(22,2),(17,3),(22,4)},'5')
  pot=c.disc(9,15,6.6); c.shade(pot,'4','5','6'); c.fill(c.disc(9,15,5.2),'w'); c.fill(c.disc(9,15,5.2)-c.disc(8.5,14.5,4.6),'c')
  c.fill(line(c,6,18,14,10),'x'); c.fill(c.rect(8,15,10,16),'2'); c.fill({(9,15)},'1')
  return c,pal
@reg('understudy')
def understudy():
  c=C(); pal=F['red']+F['gold']
  t=poly(c,[(2,7),(21,4),(22.5,15),(3.5,18)]); c.shade(t,'1','2','3')
  for x,y in t:
    if abs((x-7)*11- (y-5.5)*(-1.5)*2)<0: pass
  c.fill(line(c,7,7,8,17),'w'); 
  for (x,y) in line(c,7,7,8,17):
    if y%2==0: c.p(x,y,'2')
  c.fill(c.disc(15,10.5,2.6),'5'); c.fill({(14,9),(15,9)},'6'); c.p(16,12,'4')
  c.fill({(11,14),(12,14),(13,14),(14,14),(15,14),(16,14),(17,13),(18,13)},'1')
  return c,pal
@reg('impersonator')
def impersonator():
  c=C(); pal=F['gold']+F['blue']
  b=c.ell(15,12.5,6.6,7.6); c.shade(b,'4','5','6')
  c.fill({(12,10),(13,10),(17,10),(18,10),(12,11),(17,11)},'k'); c.fill({(12,16),(13,15),(14,15),(15,15),(16,15),(17,16)},'k')
  a=c.ell(9,10.5,6.6,7.6); c.shade(a,'1','2','3')
  c.fill({(6,8),(7,8),(11,8),(12,8),(6,9),(11,9)},'k'); c.fill({(6,13),(7,14),(8,15),(9,15),(10,15),(11,14),(12,13)},'k')
  c.fill({(13,18),(14,19),(15,20)},'x')
  return c,pal
@reg('chronicler')
def chronicler():
  c=C(); pal=['#a07a46','#d9b77a','#f2deb0']+F['brown']
  p=c.rect(5,4,18,19); c.shade(p,'1','2','3')
  for y0 in (2,18):
    r=c.rect(3,y0,20,y0+3); c.shade(r,'1','2','3'); c.fill({(x,y0+3) for x in range(3,21)},'1')
    c.fill({(2,y0+1),(2,y0+2),(21,y0+1),(21,y0+2)},'4')
  for y in (8,10,12,14): c.fill({(x,y) for x in range(7,17 if y!=14 else 13)},'5')
  return c,pal
@reg('doppelganger')
def doppelganger():
  c=C(); pal=['#2e2430','#4a3a52','#6b5878']+F['pink']
  for cx in (7,17):
    c.fill(c.rect(cx-3,1,cx-2,6)|c.rect(cx+2,1,cx+3,6),'x'); c.fill({(cx-3,2),(cx+3,2),(cx-3,3),(cx+3,3)},'5')
    body=c.ell(cx,19,4.4,4.5); body={(x,y) for x,y in body if y<=22}; c.shade(body,'4','5','6')
    face(c,cx,10.5,3.8,4.2)
    c.fill(c.ell(cx,8,4.2,2.2),'x')
    c.p(cx-2,11,'k'); c.p(cx+1,11,'k'); c.p(cx-1,13,'k'); c.p(cx,13,'k')
  return c,pal
@reg('ensemble')
def ensemble():
  c=C(); pal=F['indigo']
  c.shade(c.ell(6,18,3.6,2.6),'1','2','3'); c.shade(c.ell(17,16,3.6,2.6),'1','2','3')
  c.fill(c.rect(8,5,9,17),'2'); c.fill(c.rect(19,3,20,15),'2')
  beam=set()
  for d in range(3): beam|=line(c,8,5+d,20,3+d)
  c.shade(beam,'1','2','3')
  return c,pal
@reg('stunt-double')
def stunt_double():
  c=C(); pal=F['coral']+F['indigo']
  def limb(x0,y0,x1,y1,k): c.fill(line(c,x0,y0,x1,y1)|line(c,x0+1,y0,x1+1,y1),k)
  limb(11,11,4,5,'2'); limb(12,11,19,4,'2')
  limb(10,14,4,20,'5'); limb(13,14,19,20,'5')
  torso=c.ell(11.5,12.5,3,3.4); c.shade(torso,'1','2','3')
  c.fill(c.rect(9,14,14,15),'5')
  for x,y in [(3,4),(4,4),(19,3),(20,3),(3,20),(4,20),(20,20),(21,20)]: c.p(x,y,'s')
  face(c,12,6,2.8,2.8); c.fill(c.ell(12,4.4,3,1.4),'x'); c.p(11,6,'k'); c.p(13,6,'k')
  return c,pal
@reg('fan-club')
def fan_club():
  c=C(); pal=GREY+SKY
  b=c.rect(2,7,21,20); c.shade(b,'x','x','x'); c.fill(c.rect(2,7,21,9),'2'); c.fill({(x,9) for x in range(2,22)},'1')
  c.fill(c.rect(4,5,8,6),'1'); c.fill(c.rect(15,4,19,6),'w'); c.fill({(x,6) for x in range(15,20)},'c')
  lens=c.disc(11.5,14,5); c.shade(lens,'1','2','3'); c.fill(c.disc(11.5,14,3.4),'x'); c.fill(c.disc(11.5,14,2.2),'4'); c.fill({(10,13),(10,12),(11,12)},'5')
  for x,y in [(20,1),(21,2),(22,3),(17,1),(23,1)]: c.p(x,y,'o')
  c.fill({(18,11),(19,11)},'o')
  return c,pal
@reg('impostors')
def impostors():
  c=C(); pal=F['gold']+F['brown']
  yface(c)
  c.fill(c.rect(4,7,10,8)|c.rect(14,7,20,8),'4')
  for cx in (7,17):
    ring=c.disc(cx,11.5,3.6)-c.disc(cx,11.5,2.4); c.fill(ring,'x'); c.fill(c.disc(cx,11.5,2.4),'w'); c.fill({(cx,11),(cx,12)},'k')
  c.fill(c.rect(10,11,13,11),'x')
  nose=c.ell(12,14.5,2.6,2.6); c.shade(nose,'t','s','w')
  m=c.rect(6,16,18,17)|{(5,17),(19,17),(5,18),(19,18)}; c.shade(m,'4','5','6')
  c.fill({(10,20),(11,20),(12,20),(13,20),(14,20)},'k')
  return c,pal
@reg('wallflower')
def wallflower():
  c=C(); pal=F['gold']+F['orange']+F['sage']
  c.fill(c.rect(11,15,12,22),'8'); c.fill({(12,y) for y in range(15,23)},'7')
  c.shade(c.ell(16,19,3.4,1.8),'7','8','9')
  for a in range(8):
    import math
    x=12+6*math.cos(a*math.pi/4); y=10+6*math.sin(a*math.pi/4)
    c.shade(c.disc(x,y,3.2),'c','w','w')
  cen=c.disc(12,10,3.6); c.shade(cen,'4','5','6')
  c.fill({(11,9),(13,10),(12,11)},'4')
  return c,pal
@reg('tribute-band')
def tribute_band():
  c=C(); pal=F['red']+F['brown']+GREY
  c.fill(line(c,11,11,19,3)|line(c,12,11,20,3)|line(c,12,12,20,4),'4')
  hd=c.rect(18,1,21,4); c.fill(hd,'4'); c.fill({(18,0),(21,1),(22,3),(17,2)},'8')
  body=c.disc(7.5,17,4.6)|c.disc(11,12.5,3.6)|c.rect(6,13,12,16); c.shade(body,'1','2','3')
  c.fill(c.disc(9.5,14.5,1.4),'x'); c.fill(c.rect(5,17,8,18),'x')
  c.fill(line(c,6,18,12,12),'7')
  return c,pal
# ---------------- Magenta ----------------
@reg('accomplice')
def accomplice():
  c=C(); pal=F['purple']+F['red']
  cape=poly(c,[(3,22),(6,14),(18,14),(21,22)]); c.shade(cape,'4','5','6')
  c.fill(c.rect(8,16,15,22),'2'); c.fill({(15,y) for y in range(16,23)},'1')
  face(c,12,10,5.2,5.6)
  hood=c.ell(12,7.5,6,4); c.shade({(x,y) for x,y in hood if y<=8},'1','2','3')
  c.fill({(6,9),(6,10),(18,9),(18,10)},'2')
  c.fill(c.rect(7,9,17,11),'x'); c.fill({(9,10),(10,10),(14,10),(15,10)},'w')
  c.fill({(11,14),(12,14),(13,14)},'k')
  return c,pal
@reg('crew')
def crew():
  c=C(); pal=F['brown']
  c.fill(c.rect(3,1,4,22),'2'); c.fill({(4,y) for y in range(1,23)},'1'); c.fill({(3,0),(4,0)},'3')
  fl=poly(c,[(5,2.5),(21,3.5),(19.5,9),(21.5,15),(5,14)]); c.fill(fl,'x')
  sk=c.ell(13,7.5,3.4,3); c.fill(sk,'w'); c.fill(c.rect(11,9,15,11),'w'); c.fill({(11,7),(12,7),(14,7),(15,7)},'x'); c.p(13,10,'x'); c.p(12,11,'c'); c.p(14,11,'c')
  for (a,b) in [((8,11),(18,13)),((8,13),(18,11))]: c.fill(line(c,*a,*b),'c')
  c.fill(sk,'w'); c.fill({(11,7),(12,7),(14,7),(15,7)},'x')
  return c,pal
@reg('cutpurse')
def cutpurse():
  c=C(); pal=F['gold']
  hand=c.ell(13,15,6.5,5.5)|c.rect(14,8,18,12)
  c.shade(hand,'1','2','3')
  c.fill(c.rect(5,8,11,10),'2'); c.fill({(x,10) for x in range(5,12)},'1'); c.fill({(5,8),(5,9)},'3')
  c.fill(c.rect(5,12,11,14),'2'); c.fill({(x,14) for x in range(5,12)},'1')
  c.fill({(x,11) for x in range(4,11)},'.')
  c.fill({(4,8),(4,9),(4,10)},'.'); c.fill({(4,12),(4,13),(4,14)},'.')
  c.fill({(12,11),(13,11)},'1')
  return c,pal
@reg('robin-hood')
def robin_hood():
  c=C(); pal=F['brown']+F['red']+GREY
  bow=c.disc(6,12,9.5)-c.disc(6,12,8); bow={(x,y) for x,y in bow if x>=9}; c.shade(bow,'1','2','3')
  c.fill(line(c,10,4,10,20),'c')
  ar=line(c,4,16,19,5); c.fill(ar,'2')
  c.fill({(19,4),(20,4),(20,5),(18,4),(20,6)},'7'); c.fill({(19,5)},'8')
  c.fill({(3,16),(4,17),(3,18),(5,18),(4,15),(2,17)},'5')
  return c,pal
@reg('snitch')
def snitch():
  c=C(); pal=GREY+F['pink']
  c.fill(line(c,19,16,22,11)|line(c,22,11,21,8),'5')
  body=c.ell(13,15,7.5,4.6); c.shade(body,'1','2','3')
  head=poly(c,[(2,14),(9,9),(10,17)]); c.shade(head,'1','2','3')
  c.fill(c.disc(8,9.5,2.2),'2'); c.fill({(8,9),(8,10)},'5'); c.p(2,14,'5'); c.p(1,14,'5')
  c.p(5,13,'k')
  for x in (8,11,16,18): c.p(x,20,'5')
  return c,pal
@reg('sticky-fingers')
def sticky_fingers():
  c=C(); pal=F['gold']+F['brown']
  pot=c.ell(12,15,8,6.5); c.shade(pot,'4','5','6')
  c.fill(c.rect(6,7,17,9),'5'); c.fill({(x,9) for x in range(6,18)},'4'); c.fill({(x,7) for x in range(6,18)},'6')
  c.fill(c.rect(5,10,18,12),'2'); c.fill({(x,12) for x in range(5,19)},'1')
  for x,y in [(7,13),(7,14),(11,13),(11,14),(11,15),(16,13)]: c.p(x,y,'2')
  c.fill(c.rect(9,15,15,18),'3'); c.fill({(10,16),(11,16),(12,16),(13,16),(14,16)},'1'); c.fill({(10,17),(14,17)},'1')
  c.fill(c.rect(14,2,15,6),'5'); c.fill(c.rect(13,1,16,2),'6')
  return c,pal
@reg('kidnapper')
def kidnapper():
  c=C(); pal=F['brown']+F['gold']
  c.fill(c.rect(8,3,15,4)|c.rect(8,5,9,6)|c.rect(14,5,15,6),'1')
  b=c.rect(2,6,21,21); c.shade(b,'1','2','3')
  for x in (7,16): c.fill({(x,y) for y in range(6,22)},'1')
  c.fill(c.rect(10,11,13,13),'5'); c.p(11,12,'4'); c.fill({(x,6) for x in range(2,22)},'3')
  for x,y in [(2,6),(21,6),(2,21),(21,21)]: c.p(x,y,'6')
  return c,pal
@reg('desperado')
def desperado():
  c=C(); pal=F['sage']+F['clay']+['#f08fb5']
  arm=c.rect(3,8,5,13)|c.rect(3,13,9,15); c.shade(arm,'1','2','3')
  arm2=c.rect(18,5,20,11)|c.rect(14,11,20,13); c.shade(arm2,'1','2','3')
  tr=c.ell(11.5,10,3.6,8)|c.rect(8,10,15,19); c.shade(tr,'1','2','3')
  for x in (10,13):
    for y in range(4,19,3): c.p(x,y,'1')
  c.fill({(11,1),(12,1),(11,2)},'7')
  pot=c.rect(5,19,18,22); c.shade(pot,'4','5','6'); c.fill({(x,19) for x in range(5,19)},'6')
  return c,pal
@reg('fixer')
def fixer():
  c=C(); pal=F['brown']+F['gold']
  c.fill(c.rect(8,4,15,5)|c.rect(8,6,9,7)|c.rect(14,6,15,7),'x')
  b=c.rect(2,7,21,20); c.shade(b,'1','2','3')
  c.fill({(x,12) for x in range(2,22)},'1'); c.fill({(x,13) for x in range(2,22)},'3')
  c.fill(c.rect(10,11,13,14),'5'); c.fill({(10,11),(11,11)},'6'); c.fill({(13,14)},'4')
  return c,pal
@reg('shoplifter')
def shoplifter():
  c=C(); pal=F['pink']+F['teal']
  c.fill(c.disc(9,7,4)-c.disc(9,7,2.6),'4'); c.fill(c.disc(15,7,4)-c.disc(15,7,2.6),'5')
  c.fill({(x,y) for x in range(4,20) for y in range(7,9)},'.')
  b2=c.rect(11,9,21,21); c.shade(b2,'4','5','6')
  b1=c.rect(2,8,13,21); c.shade(b1,'1','2','3')
  c.fill({(x,8) for x in range(2,14)},'3')
  c.fill(c.disc(7.5,4.8,3)-c.disc(7.5,4.8,1.8),'1'); c.fill({(x,y) for x in range(4,12) for y in range(5,8)}&(c.disc(7.5,4.8,3)-c.disc(7.5,4.8,1.8)),'.')
  c.fill((c.disc(7.5,8,3.4)-c.disc(7.5,8,2.2))&c.rect(4,4,11,7),'1')
  c.fill((c.disc(16,9,3.4)-c.disc(16,9,2.2))&c.rect(12,5,20,8),'4')
  return c,pal
@reg('bodyguards')
def bodyguards():
  c=C(); pal=F['gold']
  up=c.rect(3,9,8,16)|c.ell(5.5,8,3.4,3.4); 
  fore=c.ell(5.5,6,3,3.2)
  arm=c.ell(13,15,7,4.4)|c.ell(7,13,4,5)|c.ell(18,15,3.4,3.4)
  bic=c.ell(12,11.5,4.4,3.4)
  m=arm|bic|c.rect(4,4,8,13)|c.ell(6,4,3,2.8)
  c.shade(m,'1','2','3')
  c.fill(line(c,9,14,15,13),'1'); c.fill({(9,10),(10,9),(11,9)},'3')
  c.fill({(4,3),(5,2),(6,2),(7,3)},'2')
  return c,pal
@reg('double-agent')
def double_agent():
  c=C(); pal=F['brown']+F['clay']
  coat=c.ell(12,23,9,6); coat={(x,y) for x,y in coat if y<=22}; c.shade(coat,'4','5','6')
  c.fill(line(c,12,17,12,22),'4'); c.fill({(10,17),(11,18),(13,18),(14,17)},'w')
  face(c,12,13,5,5)
  hat=c.ell(12,7,5.4,3.4); hat={(x,y) for x,y in hat if y<=8}; c.shade(hat,'1','2','3')
  c.fill(c.rect(4,9,20,9),'1'); c.fill({(x,8) for x in range(7,18)},'x')
  c.fill(c.rect(9,12,10,13),'k'); c.fill(c.rect(14,12,15,13),'k'); c.fill({(11,16),(12,16),(13,16)},'k')
  return c,pal
@reg('grifter')
def grifter():
  c=C(); pal=F['red']
  top=c.rect(6,3,17,15); c.shade(top,'x','x','x'); c.fill({(x,y) for x,y in top if x>=16},'k')
  c.fill({(6,y) for y in range(3,16)},'4' if False else 'x'); c.fill({(7,y) for y in range(4,14)},'c' if False else 'x')
  c.fill(c.rect(6,11,17,13),'2'); c.fill({(x,13) for x in range(6,18)},'1'); c.fill({(x,11) for x in range(6,18)},'3')
  brim=c.ell(12,16.5,10,2.6); c.fill(brim,'x'); c.fill({(x,y) for x,y in brim if y==15},'x')
  c.fill({(8,4),(8,5),(8,6),(9,4)},'c')
  return c,pal
# redraws (later definitions win)
def _swap(name,f):
  for i,(n,_) in enumerate(REG):
    if n==name: REG[i]=(name,f)
def cutpurse2():
  c=C(); pal=F['gold']
  palm=c.ell(15,15,6,5.6)
  idx=c.rect(5,7,13,9)|c.rect(4,8,6,11)
  th=c.rect(5,13,12,15)|c.rect(4,12,6,14)
  m=palm|idx|th|c.rect(12,9,17,12); c.shade(m,'1','2','3')
  c.fill({(x,y) for x,y in c.rect(4,11,11,12)},'.'); c.fill({(5,11),(6,11)},'.')
  c.fill({(x,10) for x in range(7,13)},'1'); c.fill({(x,16) for x in range(6,12)},'.')
  c.fill({(14,12),(15,12),(16,13)},'1')
  return c,pal
_swap('cutpurse',cutpurse2)
def bodyguards2():
  c=C(); pal=F['gold']
  fore=poly(c,[(3,5),(8,3),(10,13),(5,14)])
  fist=c.ell(6,4.5,3.4,3)
  upper=poly(c,[(5,13),(10,11),(21,14),(21,20),(6,19)])
  bic=c.ell(12,12,4.6,3.6)
  m=fore|fist|upper|bic; c.shade(m,'1','2','3')
  c.fill(line(c,8,15,14,15),'1'); c.fill({(10,10),(11,9),(12,9),(13,9)},'3')
  c.fill({(4,3),(5,3),(6,3),(7,3)},'1')
  return c,pal
_swap('bodyguards',bodyguards2)
def sticky2():
  c=C(); pal=F['gold']+['#3f86c4','#8db9ea']
  pot=c.ell(12,15.5,8,6.5); c.shade(pot,'1','2','3')
  c.fill(c.rect(5,8,18,10),'4'); c.fill({(x,10) for x in range(5,19)},'.'); c.fill({(x,8) for x in range(5,19)},'5')
  c.fill(c.rect(5,9,18,9),'4')
  for x,y in [(7,11),(7,12),(8,11),(12,11),(12,12),(12,13),(16,11),(16,12)]: c.p(x,y,'1')
  c.fill(c.rect(7,14,16,18),'w'); c.fill({(x,18) for x in range(7,17)}|{(16,y) for y in range(14,19)},'c')
  c.fill({(9,15),(10,15),(11,15),(12,15),(13,15),(14,15),(9,16),(14,16)},'1'); c.fill({(10,17),(11,17),(12,17),(13,17)},'1')
  dip=c.rect(16,2,17,9); c.fill(dip,'x'); c.fill(c.ell(16.5,6,2,1.5),'2'); c.fill({(16,5),(17,5)},'3')
  return c,pal
_swap('sticky-fingers',sticky2)
def kidnapper2():
  c=C(); pal=F['teal']+GREY+F['red']+F['gold']
  c.fill(c.rect(9,1,14,2)|c.rect(9,3,10,4)|c.rect(13,3,14,4),'4')
  b=c.rect(5,5,18,20); c.shade(b,'1','2','3')
  for x in (8,15): c.fill({(x,y) for y in range(6,20)},'1')
  c.fill(c.rect(10,8,13,11),'8'); c.fill({(10,8),(11,8)},'9'); c.fill(c.disc(12,15.5,1.8),'a' if False else '7')
  for x in (7,16): c.fill({(x,21),(x,22)},'x')
  return c,pal
_swap('kidnapper',kidnapper2)
def cutpurse3():
  c=C(); pal=F['gold']
  palm=c.ell(16,12,5.5,6.5)
  idx=c.rect(6,5,15,8)|c.rect(4,7,6,10)
  th=c.rect(6,13,15,16)|c.rect(4,12,6,14)
  m=palm|idx|th; c.shade(m,'1','2','3')
  c.fill(c.rect(7,9,12,12),'.'); c.fill({(7,9),(7,12)},'.')
  c.fill({(x,8) for x in range(7,13)},'1'); c.fill({(x,13) for x in range(7,13)},'3')
  c.fill({(4,10),(4,11)},'.'); c.fill({(5,10),(5,11),(6,11)},'.')
  c.fill({(16,y) for y in range(8,12)},'1')
  return c,pal
_swap('cutpurse',cutpurse3)
def bodyguards3():
  c=C(); pal=F['gold']
  fore=c.rect(15,6,19,15); fist=c.ell(16.5,5,4,3.4)
  upper=c.rect(3,15,20,20)|c.ell(19,17.5,2.6,3); bic=c.ell(10,14.5,5.2,4.2)
  m=fore|fist|upper|bic; c.shade(m,'1','2','3')
  c.fill({(13,4),(14,4),(15,4)},'1'); c.fill({(13,6),(14,6)},'1')
  c.fill({(7,11),(8,11),(9,11),(10,11)},'3'); c.fill(line(c,6,18,16,18),'1')
  return c,pal
_swap('bodyguards',bodyguards3)
REG[:]=[r for r in REG if r[0]!='cutpurse']  # the pinch doesn't read yet at 24px: keeps its system emoji until redrawn
