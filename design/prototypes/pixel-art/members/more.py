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
# ---------------- Purple ----------------
@reg('bouncers')
def bouncers():
  c=C(); pal=F['red']
  ring=c.disc(12,12,10.5)-c.disc(12,12,7.4); c.shade(ring,'1','2','3')
  bar=set()
  for d in (-1,0,1,2): bar|=line(c,6+d,6-d+1,17+d,17-d+1)
  bar&=c.disc(12,12,8.6); c.fill(bar,'2')
  return c,pal
@reg('timekeeper')
def timekeeper():
  c=C(); pal=F['brown']+F['gold']+SKY
  for y in (2,20): r=c.rect(4,y,19,y+1); c.shade(r,'1','2','3')
  glass=poly(c,[(6,4),(17,4),(17,6),(12.5,11.5),(17,17),(17,20),(6,20),(6,17),(10.5,11.5),(6,6)])
  c.fill(glass,'8'); c.fill({(x,y) for x,y in glass if x>=15},'7')
  top=poly(c,[(7,7),(16,7),(12.5,11),(11.5,11)]); c.fill(top,'5')
  bot=poly(c,[(6.5,20),(16.5,20),(15,16),(11.5,14),(8,16)]); c.shade(bot,'4','5','6')
  c.fill({(11,11),(11,12),(11,13),(12,12)},'5')
  for y in range(4,20): c.p(5,y,'2'); c.p(18,y,'1')
  return c,pal
@reg('clockmakers')
def clockmakers():
  c=C(); pal=F['brown']+F['gold']
  case=c.rect(5,8,18,21)|c.ell(11.5,8,6.5,6); c.shade(case,'1','2','3')
  fc=c.disc(11.5,9,4.6); c.fill(fc,'w'); c.fill({(x,y) for x,y in fc if x>=15 or y>=13},'c')
  c.fill(line(c,11,9,11,6),'k'); c.fill(line(c,11,9,14,9),'k')
  c.fill(c.rect(9,15,14,20),'1'); c.fill(c.disc(11.5,18.5,1.6),'5'); c.fill(c.rect(11,15,11,17),'4')
  c.fill(c.rect(4,21,19,22),'1')
  return c,pal
@reg('closer')
def closer():
  c=C(); pal=F['gold']+GREY
  sh=c.disc(12,9,6.5)-c.disc(12,9,4); sh={(x,y) for x,y in sh if y<=11}; c.shade(sh,'4','5','6')
  c.fill(c.rect(6,9,7,11)|c.rect(17,9,18,11),'5')
  b=c.rect(4,11,19,21); c.shade(b,'1','2','3')
  c.fill(c.disc(11.5,15,1.6),'x'); c.fill(c.rect(11,15,12,18),'x')
  return c,pal
@reg('hot-streak')
def hot_streak():
  c=C(); pal=F['yellow']
  b=poly(c,[(14,1),(5,13),(11,13),(8,22.5),(19,9),(13,9),(17,1)]); c.shade(b,'1','2','3')
  return c,pal
@reg('courier')
def courier():
  c=C(); pal=F['clay']+['#c49a5c','#e6c991']
  top=poly(c,[(2,8),(12,4),(22,8),(12,12)]); c.fill(top,'5'); 
  left=poly(c,[(2,8),(12,12),(12,22.5),(2,18)]); c.fill(left,'2')
  right=poly(c,[(12,12),(22,8),(22,18),(12,22.5)]); c.fill(right,'1')
  c.fill(line(c,6,6,16,10)|line(c,7,6,17,10),'4'); c.fill(line(c,16,10,16,15)|line(c,17,10,17,15),'4')
  c.fill(line(c,4,15,8,17),'1')
  return c,pal
@reg('gossip')
def gossip():
  c=C(); pal=F['blue']
  h=c.ell(10,10,7,7.5)|c.rect(4,10,13,21)|poly(c,[(15,9),(18,13),(15,14)])
  h-=c.rect(12,18,17,22)
  c.shade(h,'1','2','3'); c.fill({(15,15),(16,15),(14,16)},'2')
  for (a,b) in [((19,8),(21,6)),((19,12),(22,12)),((19,16),(21,18))]: c.fill(line(c,*a,*b),'c')
  return c,pal
@reg('go-getter')
def go_getter():
  c=C(); pal=F['blue']+F['indigo']
  def limb(x0,y0,x1,y1,k): c.fill(line(c,x0,y0,x1,y1)|line(c,x0+1,y0,x1+1,y1),k)
  limb(10,14,5,18,'5'); limb(5,18,3,22,'5'); limb(12,14,16,18,'5'); limb(16,18,20,17,'5')
  limb(11,9,6,12,'1'); limb(12,9,17,7,'2')
  t=poly(c,[(9,8),(14,7),(13,15),(9,15)]); c.shade(t,'1','2','3')
  face(c,13.5,4.5,2.8,2.8); c.fill(c.ell(13,3,3,1.4),'x')
  for x,y in [(6,12),(5,12),(18,7),(19,6),(2,22),(3,22),(21,17),(21,16)]: c.p(x,y,'s' if y<20 else 'x')
  return c,pal
@reg('late-risers')
def late_risers():
  c=C(); pal=F['gold']+F['blue']
  m=c.disc(11,13,9.5); c.shade(m,'1','2','3')
  for x0 in (6,13): c.fill({(x0,12),(x0+1,13),(x0+2,13),(x0+3,12)},'k')
  c.fill(c.ell(11,17.5,2,1.6),'x')
  c.stamp(15,1,['5555','  5 ',' 5  ','5555'])
  c.stamp(20,6,['44','4 ',' 4','44'][::1] and ['44',' 4','4 ','44'])
  return c,pal
@reg('extra-shift')
def extra_shift():
  c=C(); pal=F['red']+GREY
  for cx in (5,18): c.shade(c.disc(cx,5,3),'1','2','3')
  b=c.disc(11.5,12.5,8.5); c.shade(b,'1','2','3')
  fc=c.disc(11.5,12.5,6.2); c.fill(fc,'w'); c.fill({(x,y) for x,y in fc if x>=16 or y>=17},'c')
  c.fill(line(c,11,13,11,8),'k'); c.fill(line(c,11,13,15,13),'k'); c.p(11,13,'x')
  for x in (5,17): c.fill({(x,20),(x+1,21)} if x<10 else {(x,20),(x-1,21)},'5')
  return c,pal
# ---------------- Blue ----------------
@reg('connoisseurs')
def connoisseurs():
  c=C(); pal=F['red']+SKY
  bowl=c.ell(12,7,6,5.5); bowl={(x,y) for x,y in bowl if y>=3}; c.fill(bowl,'5')
  c.fill({(x,y) for x,y in bowl if y>=7},'2'); c.fill({(x,y) for x,y in bowl if y>=10},'1'); c.fill({(x,7) for x in range(6,19) if (x,7) in bowl},'3')
  c.fill({(7,4),(7,5),(8,4)},'w')
  c.fill(c.rect(11,13,12,19),'4'); c.fill(c.ell(11.5,20.5,5,1.6),'4'); c.fill({(x,21) for x in range(8,16)},'5' if False else '4')
  return c,pal
@reg('plus-ones')
def plus_ones():
  c=C(); pal=F['blue']
  p=c.rect(9,3,14,20)|c.rect(3,9,20,14); c.shade(p,'1','2','3')
  return c,pal
@reg('restockers')
def restockers():
  c=C(); pal=F['blue']
  b=c.rect(2,2,21,21); c.shade(b,'1','2','3')
  ar1=(c.disc(12,12,7)-c.disc(12,12,4.5)); 
  top={(x,y) for x,y in ar1 if y<12 and x>6}; bot={(x,y) for x,y in ar1 if y>11 and x<17}
  c.fill(top|bot,'w')
  c.fill(poly(c,[(16,4),(16,11),(20,7.5)]) ,'w'); c.fill(poly(c,[(8,12),(8,19.5),(4,16)]),'w')
  c.fill({(x,y) for x,y in top|bot if (x,y+1) not in top|bot and (x+1,y) not in top|bot},'c')
  return c,pal
@reg('trendsetters')
def trendsetters():
  c=C(); pal=F['red']+GREY+['#e3b5a0']
  hand=poly(c,[(2,22),(4,12),(10,8),(16,9),(12,22)]); c.fill(hand,'s'); c.fill({(x,y) for x,y in hand if x>=11},'t')
  for x0,y0 in [(5,10),(9,7),(13,8)]:
    n=c.ell(x0,y0,1.8,2.2); c.shade(n,'1','2','3')
  bt=c.rect(16,6,20,13); c.shade(bt,'1','2','3'); c.fill(c.rect(17,1,19,5),'x'); c.fill({(17,2)},'5')
  return c,pal
@reg('window-dressers')
def window_dressers():
  c=C(); pal=F['brown']+SKY+F['red']
  f=c.rect(2,2,21,21); c.shade(f,'1','2','3')
  for x0,y0 in [(4,4),(13,4),(4,13),(13,13)]:
    c.fill(c.rect(x0,y0,x0+6,y0+6),'5'); c.fill({(x0,y0),(x0+1,y0),(x0,y0+1),(x0+2,y0)},'w'); c.fill({(x0+6,y) for y in range(y0,y0+7)},'4')
  c.fill(c.rect(3,3,5,20),'7'); c.fill(c.rect(18,3,20,20),'7'); c.fill({(5,y) for y in range(3,21)}|{(20,y) for y in range(3,21)},'6')
  return c,pal
@reg('window-shopper')
def window_shopper():
  c=C(); pal=F['brown']
  for cx in (6.5,17):
    e=c.ell(cx,12,5,7.5); c.fill(e,'w'); c.fill({(x,y) for x,y in e if (x+1,y) not in e or (x,y+1) not in e},'c')
    p=c.ell(cx+1.5,13.5,2.4,3.2); c.fill(p,'x'); c.p(int(cx+1),12,'w')
  return c,pal
@reg('snobs')
def snobs():
  c=C(); pal=F['jade']+F['blue']+F['gold']
  fan=c.disc(12,14,10.5); fan={(x,y) for x,y in fan if y<=17}; c.fill(fan,'2'); c.fill({(x,y) for x,y in fan if (x-12)**2+(y-14)**2>81},'1')
  import math
  for a in range(-80,81,32):
    for r in (6,9):
      x=12+r*math.sin(math.radians(a)); y=14-r*math.cos(math.radians(a))
      c.fill(c.disc(x,y,1.4),'8'); c.p(round(x-.5),round(y-.5),'5')
  body=c.ell(12,16,2.6,5); c.shade(body,'4','5','6'); c.fill(c.disc(12,9.5,2),'5'); c.p(11,9,'k'); c.p(10,10,'9')
  c.fill({(11,7),(12,6),(13,7)},'5'); c.fill({(11,21),(13,21),(11,22),(13,22)},'7')
  return c,pal
@reg('doormen')
def doormen():
  c=C(); pal=F['clay']+F['gold']
  fr=c.rect(4,1,19,22); c.fill(fr,'1')
  d=c.rect(6,3,17,22); c.shade(d,'1','2','3')
  for r in (c.rect(8,5,15,11),c.rect(8,13,15,20)): c.fill(r,'1'); c.fill({(x,y) for x,y in r if x>8 and y>min(y for _,y in r)},'2')
  c.fill(c.rect(14,12,15,13),'5'); c.p(14,12,'6')
  return c,pal
@reg('patroness')
def patroness():
  c=C(); pal=['#b48a1f','#e8c56a','#fbe596']+F['purple']
  brim=c.ell(12,14,10.5,5); c.shade(brim,'1','2','3')
  crown=c.ell(12,10,5.6,5); crown={(x,y) for x,y in crown if y<=13}; c.shade(crown,'1','2','3')
  c.fill(c.rect(6,11,18,12)&crown|{(6,12),(18,12)},'5')
  c.fill({(x,y) for x,y in c.rect(6,11,18,12)},'5'); c.fill({(x,12) for x in range(6,19)},'4')
  bow=c.disc(18,13,2)|c.disc(15,13,2); c.shade(bow,'4','5','6')
  c.fill(line(c,17,15,19,20)|line(c,16,15,15,20),'4')
  return c,pal
@reg('shopaholics')
def shopaholics():
  c=C(); pal=GREY+F['red']
  c.fill(line(c,1,4,4,4)|line(c,4,4,6,15),'x')
  bk=poly(c,[(5,6),(22,6),(19.5,14.5),(6.5,14.5)]); c.fill(bk,'2'); 
  for x in range(7,21,3): c.fill({(x,y) for y in range(7,14)},'1')
  for y in (8,11): c.fill({(x,y) for x in range(6,21) if (x,y) in bk},'1')
  c.fill(line(c,6,16,19,16),'x')
  for cx in (8,17): c.shade(c.disc(cx,19.5,2),'x','1','2')
  c.fill(c.disc(20,3,1.6),'4')
  return c,pal
def bouncers2():
  c=C(); pal=F['red']
  ring=c.disc(12,12,10.5)-c.disc(12,12,7.4)
  bar=c.mask(lambda x,y: abs((x-12)-(y-12))<=2.2)&c.disc(12,12,8)
  c.shade(ring|bar,'1','2','3')
  return c,pal
_swap('bouncers',bouncers2)
# ---------------- White ----------------
@reg('cashier')
def cashier():
  c=C(); pal=GREY
  r=c.rect(5,2,18,20); c.fill(r,'w'); c.fill({(18,y) for y in range(2,21)},'c')
  for x in range(5,19):
    if x%2==1: c.p(x,21,'w')
  for y,(a,z) in [(5,(7,16)),(8,(7,12)),(10,(7,14)),(12,(7,11)),(16,(7,16))]: c.fill({(x,y) for x in range(a,z+1)},'1')
  c.fill({(15,8),(16,8),(15,10),(16,10),(15,12),(16,12)},'1'); c.fill({(x,14) for x in range(7,17)},'2')
  return c,pal
@reg('martyrs')
def martyrs():
  c=C(); pal=F['orange']+['#e6dccb','#f6eedb']
  fl=c.ell(12,6,2.6,4)|poly(c,[(10,5),(12,0.5),(14,5)]); c.fill(fl,'2'); c.fill(c.ell(12,7,1.4,2.4),'o'); c.fill({(12,4)},'3')
  c.fill({(12,10),(12,11)},'x')
  cd=c.rect(8,11,15,22); c.shade(cd,'c','4','5'); c.fill({(10,12),(10,13),(10,14)},'c'); c.fill({(x,11) for x in range(8,16)},'5')
  return c,pal
@reg('recluse')
def recluse():
  c=C(); pal=F['brown']+GREY
  walls=c.rect(4,11,19,21); c.shade(walls,'1','2','3')
  roof=poly(c,[(12,2),(1,12),(23,12)]); roof={(x,y) for x,y in roof if 1<=x<=22}; c.fill(roof,'4'); c.fill({(x,11) for x in range(1,23)},'x')
  c.fill({(7,6),(8,7),(17,8),(16,9),(13,5)},'5')
  for x,y in [(6,14),(7,15),(16,13),(17,14),(5,18)]: c.p(x,y,'1')
  c.fill(c.rect(10,15,13,21),'x'); c.fill(c.rect(14,13,17,15),'x'); c.fill({(15,13),(17,15)},'1')
  c.fill({(4,21),(3,22),(5,22),(19,21),(20,22)},'6' if False else '1')
  return c,pal
@reg('brokers')
def brokers():
  c=C(); pal=F['sage']+GREY
  c.fill(c.rect(2,2,21,21),'w'); c.fill({(21,y) for y in range(2,22)}|{(x,21) for x in range(2,22)},'c')
  for y in (6,10,14,18): c.fill({(x,y) for x in range(3,21)},'6')
  for x in (7,12,17): c.fill({(x,y) for y in range(3,21)},'6')
  pts=[(3,18),(8,13),(11,15),(19,5)]
  for a,b in zip(pts,pts[1:]): c.fill(line(c,*a,*b)|line(c,a[0],a[1]+1,b[0],b[1]+1),'2')
  c.fill(poly(c,[(15,4),(20.5,3.5),(20,9)]),'2')
  return c,pal
@reg('raiders')
def raiders():
  c=C(); pal=GREY+F['brown']+F['gold']
  for flip in (0,1):
    X=lambda x: 23-x if flip else x
    bl=set()
    for d in (0,1): bl|=line(c,X(3+d),3,X(17+d),17)
    c.fill(bl,'2'); c.fill(line(c,X(3),4,X(16),17),'3') if not flip else c.fill(line(c,X(4),3,X(17),16),'1')
    c.fill(line(c,X(14),20,X(20),14),'8'); c.fill(line(c,X(18),18,X(20),20)|line(c,X(19),18,X(21),20),'5')
    c.fill({(X(21),21),(X(22),21),(X(21),22)},'7')
  return c,pal
@reg('undertaker')
def undertaker():
  c=C(); pal=F['brown']+F['gold']
  cf=poly(c,[(9,1),(15,1),(19,7),(16,22.5),(8,22.5),(5,7)]); c.shade(cf,'1','2','3')
  inner=poly(c,[(10,3),(14,3),(17,7.5),(14.6,20.5),(9.4,20.5),(7,7.5)]); c.fill(inner,'2')
  c.fill(c.rect(10,9,13,11),'5'); c.fill({(10,9),(11,9)},'6')
  return c,pal
@reg('old-money')
def old_money():
  c=C(); pal=GREY
  roof=poly(c,[(12,1.5),(1,8),(23,8)]); roof={(x,y) for x,y in roof if 1<=x<=22}; c.shade(roof,'1','2','3')
  c.fill(c.rect(2,8,21,9),'2'); c.fill({(x,9) for x in range(2,22)},'1')
  for x in (3,8,13,18):
    c.fill(c.rect(x,10,x+2,18),'3'); c.fill({(x+2,y) for y in range(10,19)},'2')
  c.fill(c.rect(2,19,21,20),'2'); c.fill(c.rect(1,21,22,22),'1')
  c.fill(c.disc(12,5.5,1.4),'1')
  return c,pal
@reg('misers')
def misers():
  c=C(); pal=F['gold']
  coin=c.disc(12,12,9.5); c.shade(coin,'1','2','3')
  c.fill(c.disc(12,12,7.2)-c.disc(12,12,6.2),'1')
  c.fill(c.rect(11,8,13,16),'1'); c.fill(c.rect(9,8,15,8)|c.rect(9,16,15,16),'1'); c.fill({(11,9),(11,10)},'3')
  return c,pal
@reg('hoarder')
def hoarder():
  c=C(); pal=F['orange']+F['brown']
  tail=c.ell(17,10,5,8); c.shade(tail,'1','2','3'); c.fill(c.ell(18,8,2.6,5),'3')
  body=c.ell(10,15,5,6); c.shade(body,'1','2','3'); c.fill(c.ell(9,16,2.8,4),'w')
  head=c.disc(8,7.5,4); c.shade(head,'1','2','3'); c.fill({(6,3),(6,4),(10,3),(10,4)},'1')
  c.p(6,7,'k'); c.p(4,9,'x'); c.fill(c.ell(9.5,12.5,2.4,2),'5'); c.fill({(9,11),(10,11)},'4'); c.p(9,10,'6')
  c.fill({(6,21),(7,21),(11,21),(12,21)},'1')
  return c,pal
@reg('heiresses')
def heiresses():
  c=C(); pal=F['blue']+['#c8e4f6']
  top=poly(c,[(6,4),(18,4),(22,9),(2,9)]); c.fill(top,'3'); c.fill(poly(c,[(10,4),(14,4),(15,9),(9,9)]),'4')
  bot=poly(c,[(2,9),(22,9),(12,22)]); c.fill(bot,'2'); c.fill(poly(c,[(9,9),(15,9),(12,22)]),'3'); c.fill(poly(c,[(15,9),(22,9),(12,22)]),'1')
  c.fill({(5,6),(6,5)},'w'); c.fill({(x,9) for x in range(3,22)},'1')
  return c,pal
# ---------------- Silver ----------------
@reg('polisher')
def polisher():
  c=C(); pal=F['yellow']+F['sage']
  s=c.rect(3,8,20,19); c.shade(s,'1','2','3'); c.fill(c.rect(3,5,20,8),'5'); c.fill({(x,5) for x in range(3,21)},'6'); c.fill({(x,8) for x in range(3,21)},'4')
  for x,y in [(6,11),(10,13),(15,11),(17,16),(7,16),(12,17)]: c.fill({(x,y),(x+1,y)},'1')
  for x,y in [(20,2),(22,4),(2,2)]: c.p(x,y,'w')
  return c,pal
@reg('toastmaster')
def toastmaster():
  c=C(); pal=F['gold']+SKY
  for x0,lean in [(4,1),(13,-1)]:
    bowl=poly(c,[(x0+lean,2),(x0+6+lean,2),(x0+5,10),(x0+1,10)]); c.fill(bowl,'5'); c.fill({(x,y) for x,y in bowl if y>=5},'2'); c.fill({(x,5) for x in range(x0,x0+8) if (x,5) in bowl},'3')
    c.fill(c.rect(x0+3,11,x0+3,18),'5'); c.fill(c.rect(x0,19,x0+6,19),'5')
  for x,y in [(11,1),(12,0),(10,0)]: c.p(x,y,'o')
  return c,pal
@reg('godparent')
def godparent():
  c=C(); pal=F['red']+F['gold']
  bx=c.rect(3,10,20,21); c.shade(bx,'1','2','3')
  lid=c.rect(2,7,21,10); c.shade(lid,'1','2','3')
  c.fill(c.rect(10,7,13,21),'5'); c.fill({(13,y) for y in range(7,22)},'4')
  c.fill(c.ell(8,4.5,3.6,2.4)|c.ell(15,4.5,3.6,2.4),'5'); c.fill(c.ell(8,4.5,1.8,1)|c.ell(15,4.5,1.8,1),'4'); c.fill(c.rect(10,4,13,6),'6')
  return c,pal
@reg('creditor')
def creditor():
  c=C(); pal=F['gold']+F['brown']
  b=c.rect(4,2,19,21); c.shade(b,'1','2','3')
  c.fill(c.rect(6,2,7,21),'4'); c.fill(c.rect(19,3,20,20),'w')
  for y in (6,9,12,15,18): c.fill({(x,y) for x in range(10,17)},'1')
  return c,pal
@reg('hostesses')
def hostesses():
  c=C(); pal=F['teal']+GREY
  pot=c.ell(11,14.5,7,6); c.shade(pot,'1','2','3')
  c.fill(c.rect(8,6,14,8),'2'); c.fill({(x,8) for x in range(8,15)},'1'); c.fill(c.rect(10,4,12,5),'3')
  sp=line(c,17,14,21,9)|line(c,17,15,22,9); c.fill(sp,'2')
  hd=c.disc(4,13.5,3.2)-c.disc(4,13.5,1.8); hd={(x,y) for x,y in hd if x<=4}; c.fill(hd,'1')
  c.fill({(x,13) for x in range(6,17)},'w'); c.fill({(x,14) for x in range(6,17)},'5')
  return c,pal
@reg('philanthropist')
def philanthropist():
  c=C(); pal=F['gold']
  for flip in (0,1):
    X=(lambda x:23-x) if flip else (lambda x:x)
    h=poly(c,[(X(2),8),(X(5),6),(X(11),13),(X(11),20),(X(6),20),(X(2),14)]); c.shade(h,'1','2','3')
    for y in (9,11,13): c.fill(line(c,X(3),y,X(6),y+2),'1')
  c.fill({(11,14),(12,14),(11,19),(12,19)},'1')
  return c,pal
@reg('debt-collectors')
def debt_collectors():
  c=C(); pal=F['red']
  hs=poly(c,[(2,9),(7,4),(17,4),(22,9),(18,12),(15,9),(9,9),(6,12)]); c.shade(hs,'1','2','3')
  base=poly(c,[(8,10),(16,10),(20,21),(4,21)]); c.shade(base,'1','2','3')
  c.fill(c.disc(12,15.5,3.4),'w'); c.fill(c.disc(12,15.5,1.4),'c')
  for a in range(6):
    import math
    c.p(round(12+2.4*math.cos(a)),round(15+2.4*math.sin(a)),'2')
  return c,pal
@reg('high-society')
def high_society():
  c=C(); pal=F['sage']+F['gold']
  bt=c.rect(7,9,14,22)|c.ell(10.5,9,3.6,2.6)|c.rect(9,3,12,8); c.shade(bt,'1','2','3')
  c.fill(c.rect(9,2,12,6),'5'); c.fill({(12,y) for y in range(2,7)},'4')
  c.fill(c.rect(7,13,14,17),'w'); c.fill({(x,15) for x in range(8,14)},'5')
  for x,y in [(15,2),(17,1),(16,4),(19,3),(18,6),(14,0)]: c.p(x,y,'6')
  c.fill({(13,1),(14,1)},'4')
  return c,pal
@reg('debutantes')
def debutantes():
  c=C(); pal=F['red']+['#5a2a1a']
  dress=poly(c,[(9,9),(14,9),(15,13),(21,21),(4,21),(10,13)]); c.shade(dress,'1','2','3')
  c.fill(line(c,13,10,19,4)|line(c,14,10,20,5),'s'); c.fill(line(c,9,10,5,14)|line(c,9,11,5,15),'s')
  face(c,11.5,5,2.8,3); c.fill(c.ell(11,3.6,3.4,2)|{(8,5),(8,6),(8,7)},'4')
  c.fill({(13,21),(14,22)},'s'); c.fill({(10,21),(9,22)},'s')
  return c,pal
@reg('smooth-talkers')
def smooth_talkers():
  c=C(); pal=F['gold']
  m=c.disc(12,12,10.5); c.shade(m,'1','2','3')
  c.fill({(6,10),(7,10),(8,10),(9,11),(14,10),(15,10),(16,10),(17,11)},'k'); c.fill({(7,9),(8,9),(15,9),(16,9)},'1')
  c.fill({(9,16),(10,16),(11,16),(12,16),(13,15),(14,15),(15,14)},'k')
  return c,pal
# ---------------- Yellow ----------------
import math
@reg('drifters')
def drifters():
  c=C(); pal=F['red']+F['brown']
  c.fill(c.disc(12,5,3.4)-c.disc(12,5,2),'4')
  b=c.rect(5,6,18,21)|c.ell(11.5,7,6.5,3); c.shade(b,'1','2','3')
  pk=c.rect(7,13,16,19); c.shade(pk,'1','2','3'); c.fill({(x,13) for x in range(7,17)},'1'); c.fill({(11,14),(12,14)},'5')
  for x in (8,15): c.fill({(x,y) for y in range(7,12)},'1')
  return c,pal
@reg('gardener')
def gardener():
  c=C(); pal=F['lime']+F['brown']
  c.fill(c.rect(11,10,12,20),'1'); 
  lf=c.ell(7,8,4.6,2.8); c.shade(lf,'1','2','3'); rf=c.ell(16.5,6,4.6,2.8); c.shade(rf,'1','2','3')
  c.fill(line(c,4,9,10,9),'1'); c.fill(line(c,13,7,19,5),'1')
  soil=c.ell(12,21,8,2); c.shade(soil,'4','5','6')
  return c,pal
@reg('go-between')
def go_between():
  c=C(); pal=F['blue']
  b=c.rect(2,2,21,21); c.shade(b,'1','2','3')
  w=set()
  for d in (0,1): w|=line(c,5,7+d,8,7+d)|line(c,8,7+d,14,15+d)|line(c,14,15+d,16,15+d)|line(c,5,15+d,8,15+d)|line(c,8,15+d,14,7+d)|line(c,14,7+d,16,7+d)
  w|=poly(c,[(16,5),(16,10.5),(19.5,7.7)])|poly(c,[(16,13),(16,18.5),(19.5,15.7)])
  c.fill(w,'w')
  return c,pal
@reg('customs-officer')
def customs_officer():
  c=C(); pal=F['blue']+F['gold']
  coat=c.ell(12,23,9,5.5); coat={(x,y) for x,y in coat if y<=22}; c.shade(coat,'1','2','3'); c.fill({(12,19),(12,21)},'5')
  face(c,12,13,5,5.2); eyes(c,10,14,12,1); c.fill({(10,15),(11,16),(12,16),(13,16),(14,15)},'k')
  cap=c.ell(12,7,6.4,3.4); cap={(x,y) for x,y in cap if y<=8}; c.shade(cap,'1','2','3'); c.fill(c.rect(5,8,19,9),'x'); c.fill({(x,9) for x in range(9,21)},'x')
  c.fill(c.rect(11,5,13,6),'5'); c.p(11,5,'6')
  return c,pal
@reg('tourist')
def tourist():
  c=C(); pal=GREY+['#5a6a78']
  b=c.rect(2,7,21,19); c.shade(b,'x','x','x'); c.fill(c.rect(2,7,21,8),'1')
  c.fill(c.rect(15,4,19,6),'2'); c.fill(c.rect(4,5,7,6),'x'); c.fill({(17,9),(18,9),(19,9)},'o')
  lens=c.disc(10.5,13,4.4); c.shade(lens,'1','2','3'); c.fill(c.disc(10.5,13,2.8),'4'); c.fill(c.disc(10.5,13,1.6),'x'); c.fill({(9,12),(10,11)},'w')
  return c,pal
@reg('matchmaker')
def matchmaker():
  c=C(); pal=F['pink']+F['gold']+GREY
  h=c.disc(8.5,10,4.6)|c.disc(15.5,10,4.6)|poly(c,[(4.2,11.5),(19.8,11.5),(12,20.5)]); c.shade(h,'1','2','3')
  ar=line(c,2,19,21,5)|line(c,3,19,22,5); c.fill(ar,'5')
  c.fill(poly(c,[(19,3),(23,3),(22,7)]),'8'); c.fill({(1,19),(2,20),(1,21),(3,21),(2,18)},'6')
  return c,pal
@reg('meddler')
def meddler():
  c=C(); pal=F['gold']
  m=c.ell(10,9,7,4.6)|c.rect(5,10,8,18)|c.rect(9,11,11,20)|c.rect(12,11,14,19)|c.rect(15,10,17,17)|line(c,16,7,21,4)|line(c,16,8,21,5)
  c.shade(m,'1','2','3')
  for x in (8,11,14): c.fill({(x,y) for y in range(13,21)},'.')
  c.fill({(8,12),(11,12),(14,12)},'1')
  return c,pal
@reg('spice-route')
def spice_route():
  c=C(); pal=F['red']+F['sage']
  p=poly(c,[(14,6),(19,8),(17,15),(10,20),(3,21),(9,15),(12,8)]); c.shade(p,'1','2','3')
  c.fill(c.rect(14,4,18,6),'5'); c.fill(line(c,17,4,20,1)|line(c,18,4,21,1),'4'); c.fill({(14,6),(15,6)},'6')
  c.fill({(12,10),(11,11),(10,13)},'3')
  return c,pal
@reg('tastemaker')
def tastemaker():
  c=C(); pal=F['clay']+['#d4473a','#4f8bd0','#f2c94a','#6bb24d','#8b66cb']
  pl=c.ell(12,12.5,10,8.5)-c.disc(14,17,2.2); c.shade(pl,'1','2','3')
  for (x,y,k) in [(7,9,'4'),(11,7,'5'),(16,8,'6'),(6,14,'7'),(18,12,'8')]: c.fill(c.disc(x,y,1.8),k)
  c.fill(c.disc(14,17,2.2)-c.disc(14,17,1.2),'1')
  return c,pal
@reg('tinker')
def tinker():
  c=C(); pal=GREY
  sh=set()
  for d in (-1,0,1): sh|=line(c,8+d,16,16+d,8)
  sh|=line(c,8,15,15,8)
  hd=c.disc(17,6,4.6)-poly(c,[(17,6),(20,1),(23,4)])-c.disc(19,4,1.6)
  ft=c.disc(6,18,3.8)
  m=sh|hd|ft; c.shade(m,'1','2','3'); c.fill(c.disc(6,18,1.4),'1')
  return c,pal
@reg('big-tent')
def big_tent():
  c=C(); pal=F['red']+F['gold']
  t=poly(c,[(12,2),(2,13),(4,13),(3,21),(21,21),(20,13),(22,13)]); c.fill(t,'w')
  for x,y in t:
    if ((x-12)*1.0/(max(1,y-1)))*3 %2 <1 and y<14: c.p(x,y,'2')
  for x in range(3,22,4): c.fill({(x,y) for y in range(14,22)}|{(x+1,y) for y in range(14,22)},'2')
  c.fill({(x,13) for x in range(2,23)},'5'); c.fill(c.rect(10,16,13,21),'x')
  c.fill(c.rect(12,0,12,2),'x'); c.fill({(13,0),(14,1),(13,1)},'5')
  return c,pal
@reg('dyer')
def dyer():
  c=C(); pal=F['purple']+F['pink']
  y=c.disc(11,12,8.5); c.shade(y,'1','2','3')
  for k in range(-3,4):
    c.fill(line(c,5+2*k,5,13+2*k,20)&c.disc(11,12,7.5),'1')
  c.fill(line(c,18,17,22,21),'5'); c.fill(line(c,19,17,21,22),'4')
  return c,pal
@reg('harmonist')
def harmonist():
  c=C(); pal=F['indigo']
  for y in (6,9,12,15,18): c.fill({(x,y) for x in range(2,22)},'c')
  cl=c.ell(6,12,2.4,7)-c.ell(6.5,12,1,4); c.fill(cl,'2'); c.fill(c.rect(6,3,6,21),'2')
  for (x,y) in [(12,14),(17,10)]:
    c.fill(c.ell(x,y+1,2,1.4),'1'); c.fill(c.rect(x+1,y-6,x+1,y),'1')
  return c,pal
@reg('leveler')
def leveler():
  c=C(); pal=F['gold']
  c.fill(c.rect(11,3,12,19),'2'); c.fill(c.rect(7,19,16,21),'2'); c.fill({(x,21) for x in range(7,17)},'1')
  c.fill(c.rect(3,5,20,6),'2'); c.fill({(x,6) for x in range(3,21)},'1'); c.fill(c.disc(11.5,3,1.6),'3')
  for cx in (5,18):
    c.fill(line(c,cx,6,cx-3,13)|line(c,cx,6,cx+3,13),'1')
    pan=c.ell(cx,14,4,2); pan={(x,y) for x,y in pan if y>=13}; c.shade(pan,'1','2','3')
  return c,pal
@reg('caravan')
def caravan():
  c=C(); pal=F['gold']+F['brown']
  body=c.ell(12,12,6,3.5)|c.disc(9,8.5,3)|c.disc(15,8.5,3); c.shade(body,'1','2','3')
  nk=line(c,17,11,20,5)|line(c,18,11,21,5); c.fill(nk,'2'); hd=c.ell(20.5,5,2,1.6); c.shade(hd,'1','2','3'); c.p(21,4,'k')
  for x in (8,10,14,16): c.fill({(x,y) for y in range(15,21)},'1')
  c.fill({(x,21) for x in (8,10,14,16)},'4'); c.fill(line(c,6,11,4,14),'1')
  return c,pal
@reg('book-cookers')
def book_cookers():
  c=C(); pal=F['red']+F['blue']+F['sage']
  for y0,k,ofs in [(15,'1',0),(10,'4',2),(5,'7',-1)]:
    b=c.rect(4+ofs,y0,19+ofs,y0+4); c.shade(b,{'1':'1','4':'4','7':'7'}[k],{'1':'2','4':'5','7':'8'}[k],{'1':'3','4':'6','7':'9'}[k])
    c.fill(c.rect(17+ofs,y0+1,19+ofs,y0+3),'w')
  return c,pal
# ---------------- Grey ----------------
@reg('party-crasher')
def party_crasher():
  c=C(); pal=F['gold']+F['purple']+F['red']
  m=c.disc(12,13,9.2); c.shade(m,'1','2','3')
  hat=poly(c,[(6,9),(3,1),(11,6)]); c.shade(hat,'4','5','6'); c.fill({(3,1),(2,1)},'8')
  eyes(c,9,15,11); c.fill(c.rect(9,16,15,17),'k'); c.fill({(11,17),(12,17)},'8')
  c.fill(line(c,15,17,21,19),'4'); c.fill({(21,18),(22,19)},'5')
  return c,pal
@reg('big-spender')
def big_spender():
  c=C(); pal=F['sage']+GREY
  for k,(x0,y0) in enumerate([(4,10),(9,6)]):
    b=c.rect(x0,y0,x0+11,y0+6); c.shade(b,'1','2','3'); c.fill(c.disc(x0+5.5,y0+3.5,1.8),'1')
  wing=c.ell(5,6,3.6,2)|c.ell(19,5,3.6,2); c.shade(wing,'c','w','w')
  for x,y in [(16,16),(18,18),(20,20)]: c.p(x,y,'c')
  return c,pal
@reg('alchemists')
def alchemists():
  c=C(); pal=F['purple']+SKY
  fl=c.disc(9,15,6)|c.rect(7,7,10,12); c.fill(fl,'5'); c.fill({(x,y) for x,y in c.disc(9,15,6) if y>=14},'2'); c.fill({(x,14) for x in range(3,16) if (x,14) in fl},'3')
  c.fill(line(c,10,8,19,4)|line(c,10,9,19,5),'4'); c.fill(c.rect(6,6,11,7),'4')
  c.fill({(5,13),(5,12),(6,11)},'w'); c.fill({(8,17),(11,19),(10,15)},'3')
  return c,pal
@reg('insider')
def insider():
  c=C(); pal=F['red']+F['blue']
  cd=c.rect(5,2,18,21); c.fill(cd,'w'); c.fill({(18,y) for y in range(2,22)}|{(x,21) for x in range(5,19)},'c')
  c.stamp(6,3,['22','2 ']); c.stamp(16,19,[' 2','22'])
  hat=c.rect(8,7,15,9); c.fill(hat,'2'); c.fill({(8,6),(11,5),(15,6)},'5'); face(c,11.5,13,3.4,3.4); c.p(10,13,'k'); c.p(13,13,'k'); c.fill({(10,15),(11,16),(12,16),(13,15)},'k')
  return c,pal
@reg('extra-hand')
def extra_hand():
  c=C(); pal=F['gold']
  m=c.ell(12,16,6,5.4)|c.rect(6,5,7,14)|c.rect(9,3,10,13)|c.rect(12,3,13,13)|c.rect(15,4,16,13)|line(c,17,15,20,10)|line(c,17,16,21,11)
  c.shade(m,'1','2','3')
  for x in (8,11,14):
    for y in range(4,12): c.p(x,y,'.')
  return c,pal
@reg('line-cutters')
def line_cutters():
  c=C(); pal=F['red']+GREY
  b=poly(c,[(1,15),(4,11),(9,10),(12,7),(16,7),(18,11),(22,12),(22,16),(1,16)]); c.shade(b,'1','2','3')
  c.fill(poly(c,[(12.5,8),(15.5,8),(17,11),(11,11)]),'5'); c.fill({(x,13) for x in range(3,22)},'w')
  for cx in (6,18): c.shade(c.disc(cx,17,2.8),'x','x','4'); c.fill(c.disc(cx,17,1),'5')
  return c,pal
@reg('launderers')
def launderers():
  c=C(); pal=F['clay']+F['blue']
  c.fill(c.ell(9,7,4,3)|c.ell(15,6,3.4,2.4),'w'); c.fill(c.ell(12,8,3,2),'5')
  b=poly(c,[(3,9),(21,9),(18,21),(6,21)]); c.shade(b,'1','2','3')
  for y in (12,15,18):
    for x in range(4,21):
      if (x,y) in b and x%2==0: c.p(x,y,'1')
  c.fill(c.rect(2,9,22,10),'2'); c.fill({(x,10) for x in range(2,23)},'1')
  return c,pal
@reg('old-maid')
def old_maid():
  c=C(); pal=GREY+F['purple']
  sh=c.ell(12,23,8,5); sh={(x,y) for x,y in sh if y<=22}; c.shade(sh,'4','5','6')
  f=face(c,12,13,6,6.5)
  hair=c.ell(12,8,6.6,3.6); c.shade({(x,y) for x,y in hair if y<=9},'1','2','3'); c.shade(c.disc(12,3.5,2.6),'1','2','3')
  c.fill({(6,10),(6,11),(18,10),(18,11)},'2')
  for cx in (9,15): c.fill(c.disc(cx,12.5,1.8)-c.disc(cx,12.5,0.9),'x'); c.p(cx,12,'k')
  c.fill({(11,12),(12,12),(13,12)},'x'); c.fill({(10,16),(11,17),(12,17),(13,17),(14,16)},'k'); c.fill({(7,14),(17,14)},'b')
  return c,pal
@reg('dabblers')
def dabblers():
  c=C(); pal=['#d4473a','#e8892f','#f2c94a','#6bb24d','#4f8bd0','#8b66cb']
  for i,k in enumerate('123456'):
    r1=10.5-i*1.4; ring=c.disc(12,17,r1)-c.disc(12,17,r1-1.4); ring={(x,y) for x,y in ring if y<=16}; c.fill(ring,k)
  c.fill(c.ell(4,17,3,2)|c.ell(20,17,3,2),'w'); c.fill({(x,18) for x in range(2,23) if c.get(x,18)=='w'},'c')
  return c,pal
@reg('cheerleader')
def cheerleader():
  c=C(); pal=F['gold']+F['red']
  bell=poly(c,[(3,11),(14,7),(21,3),(21,19),(14,15),(3,13)]); c.shade(bell,'1','2','3')
  c.fill(c.ell(20.5,11,1.6,7),'1'); c.fill(c.ell(21,11,0.8,5),'x')
  c.fill(c.disc(9,17,3)-c.disc(9,17,1.6),'1'); c.fill({(x,y) for x,y in c.rect(8,15,13,18)}&{(13,15),(14,16)},'1')
  c.fill(line(c,8,10,10,20)|line(c,9,10,11,20),'5'); c.fill({(10,21),(11,21),(9,21)},'4')
  return c,pal
@reg('anarchist')
def anarchist():
  c=C(); pal=F['red']
  ring=c.disc(12,12,10.5)-c.disc(12,12,8.6); c.shade(ring,'1','2','3')
  a=set()
  for d in (0,1): a|=line(c,5+d,21,12+d,2)|line(c,12+d,2,19+d,21)
  a|=c.rect(8,13,16,14); c.fill(a,'2')
  return c,pal
@reg('spoilsport')
def spoilsport():
  c=C(); pal=F['pink']+F['brown']
  sh=c.ell(12,23,9,5); sh={(x,y) for x,y in sh if y<=22}; c.shade(sh,'1','2','3')
  arm=line(c,4,22,19,12)|line(c,5,22,20,12)|line(c,4,12,19,22)|line(c,5,12,20,22)|line(c,4,13,19,23); c.fill(arm,'2'); 
  for x,y in [(3,12),(4,11),(20,11),(21,12)]: c.p(x,y,'s')
  face(c,12,9,4.6,5); hair=c.ell(12,6,5.4,3); c.shade({(x,y) for x,y in hair if y<=7},'4','5','6'); c.fill({(7,8),(7,9),(7,10),(17,8),(17,9),(17,10)},'5')
  eyes(c,10,14,9,1); c.fill({(10,12),(11,12),(12,12),(13,12),(14,12)},'k')
  return c,pal
@reg('con-men')
def con_men():
  c=C(); pal=F['red']+F['gold']+GREY
  b=c.rect(2,4,19,21); c.shade(b,'1','2','3'); c.fill(c.rect(2,3,19,5),'5')
  c.fill(c.rect(4,8,17,14),'w')
  for x0 in (4,9,14): c.fill({(x0+3,y) for y in range(8,15)},'c'); c.fill(c.rect(x0+1,10,x0+2,12),'2')
  c.fill(c.rect(5,17,16,18),'x')
  c.fill(c.rect(20,6,21,13),'8'); c.shade(c.disc(20.5,5,1.8),'1','2','3')
  return c,pal
@reg('sore-loser')
def sore_loser():
  c=C(); pal=F['gold']+GREY
  m=c.disc(12,13,9.2); c.shade(m,'1','2','3')
  c.fill({(7,9),(8,10),(9,10),(16,9),(15,10),(14,10)},'k'); eyes(c,8,15,11)
  c.fill({(9,17),(10,16),(11,16),(12,16),(13,16),(14,17)},'k')
  for x0,s in ((3,-1),(21,1)):
    c.fill(c.ell(x0,19,1.6,1.4),'w'); c.fill(c.ell(x0+s,20,1.4,1.2),'c')
  return c,pal
@reg('coach')
def coach():
  c=C(); pal=F['blue']
  cap=c.ell(11,13,8,7); cap={(x,y) for x,y in cap if y<=14}; c.shade(cap,'1','2','3')
  bill=c.ell(17,15,6,2); bill={(x,y) for x,y in bill if x>=12}; c.shade(bill,'1','2','1')
  c.fill(c.rect(3,14,14,15),'1'); c.fill(c.disc(11,6,1.4),'3'); c.fill(line(c,11,6,11,14),'1')
  return c,pal
@reg('tiebreaker')
def tiebreaker():
  c=C(); pal=F['red']
  top=poly(c,[(4,7),(12,3),(20,7),(12,11)]); c.fill(top,'3')
  l=poly(c,[(4,7),(12,11),(12,21),(4,17)]); c.fill(l,'2'); r=poly(c,[(12,11),(20,7),(20,17),(12,21)]); c.fill(r,'1')
  for x,y in [(12,7),(7,11),(9,15),(14,12),(17,10),(15,16),(18,14)]: c.fill({(x,y),(x+1,y)} if x==12 else {(x,y)},'w')
  return c,pal
@reg('straggler')
def straggler():
  c=C(); pal=F['sage']+F['brown']
  sh=c.ell(11,13,7.5,6)&c.rect(0,0,23,15); c.shade(sh,'4','5','6')
  for x,y in [(8,10),(13,9),(11,13),(6,13),(16,12)]: c.p(x,y,'4')
  c.fill(c.rect(3,15,19,15),'4')
  hd=c.ell(19.5,12,3,2.6); c.shade(hd,'1','2','3'); c.p(20,11,'k')
  for x in (5,9,13,16): c.fill(c.rect(x,16,x+1,18),'2')
  c.fill({(3,14),(2,15)},'2')
  return c,pal
def caravan2():
  c=C(); pal=F['gold']+F['brown']
  body=c.ell(10,13,7,3.6)|c.disc(10,9.5,4)
  neck=line(c,15,13,19,7)|line(c,16,13,20,7)|line(c,16,14,20,8)
  head=c.ell(20,6.5,2.6,1.8)
  m=body|neck|head; c.shade(m,'1','2','3')
  c.p(20,6,'k'); c.fill({(22,7),(22,8)},'1')
  for x in (5,8,12,15): c.fill(c.rect(x,16,x,21),'1'); c.p(x,21,'4'); c.p(x+1,21,'4') if x in (8,15) else None
  c.fill(line(c,3,12,2,16),'1')
  return c,pal
_swap('caravan',caravan2)
def harmonist2():
  c=C(); pal=F['indigo']
  for y in (5,8,11,14,17): c.fill({(x,y) for x in range(2,22)},'c')
  for (x,y) in [(5,15),(11,12),(17,9)]:
    c.shade(c.ell(x,y+2,2.4,1.8),'1','2','3'); c.fill(c.rect(x+2,y-7,x+2,y+1),'1')
  c.fill(line(c,7,8,19,2)|line(c,7,9,19,3),'1')
  return c,pal
_swap('harmonist',harmonist2)
def harmonist3():
  c=C(); pal=F['indigo']+GREY
  c.fill(c.rect(2,3,21,20),'w'); c.fill({(21,y) for y in range(3,21)}|{(x,20) for x in range(2,22)},'c')
  for y in (6,9,12,15,18): c.fill({(x,y) for x in range(3,21)},'5')
  for (x,y) in [(6,14),(11,11),(16,8)]:
    c.fill(c.ell(x,y+2,2,1.5),'1'); c.fill(c.rect(x+1,y-5,x+1,y+1),'1')
  return c,pal
_swap('harmonist',harmonist3)
def cutpurse4():
  c=C(); pal=F['gold']
  palm=c.ell(11.5,16,6,5.6)
  idx=c.rect(6,5,9,13)|c.rect(8,3,11,6)
  th=c.rect(15,7,17,13)|c.rect(13,5,16,8)
  curl=c.ell(5.6,15,2,2)|c.ell(6,18.5,2,1.8)
  m=palm|idx|th|curl; c.shade(m,'1','2','3')
  c.fill(c.rect(10,7,14,11),'.'); c.fill({(12,4),(12,5),(12,6),(11,7),(13,7)},'.')
  c.fill({(10,12),(11,12),(12,12),(13,12),(14,12)},'1')
  c.fill({(x,y) for x,y in c.rect(10,7,14,11)},'.')
  c.fill({(5,17),(6,17)},'1')
  for i,(n,_) in enumerate(REG): pass
  return c,pal
def cutpurse5():
  c=C(); pal=F['gold']+GREY
  palm=c.ell(16.5,13,5.5,6.5)
  idx=c.rect(7,5,15,8)|c.ell(7,7,2,2)
  th=c.rect(8,15,15,17)|c.ell(8,15.5,2,2)
  m=palm|idx|th; c.shade(m,'1','2','3')
  c.fill({(x,8) for x in range(8,15)},'1'); c.fill({(x,15) for x in range(8,15)},'3')
  coin=c.ell(7,11.5,3,2.6); c.shade(coin,'4','5','6'); c.fill({(6,11),(7,11)},'4')
  c.fill(c.rect(10,9,14,14)-palm,'.')
  return c,pal
REG.append(('cutpurse',cutpurse5))
