# Emoji members as pixel art (Cory, Nov 4: "the emoji versions of members should match more the art style of the game
# ... pixel but with detail and recognizeable"). Each member's emoji (src/v4/art/emojiMembers.js) redrawn as a 24x24
# sprite in the player minions' family: the same shared letter keys and colour families as ../emojis.js, natural
# colours, a 1px ink outline added at render. Run: python3 design/prototypes/pixel-art/members/draw.py
# (writes src/v4/art/icons/memberEmojis.js and a contact sheet to /tmp/member-emojis.png). Keys are spriteId(name).
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kit import *
S={}
def critic():
  c=C(); pal=F['gold']+['#66717a','#a9b4bb','#dfe5e8']
  face=c.disc(12,12,10.5); c.shade(face,'1','2','3')
  # left eye + brow
  c.fill(c.rect(6,10,7,12),'k'); c.p(7,10,'w')
  c.fill({(5,8),(6,8),(7,8),(8,8)},'k')
  # monocle ring right
  ring=c.disc(15.5,11.5,3.6)-c.disc(15.5,11.5,2.4)
  for x,y in ring: c.p(x,y,'4' if x+y>=29 else '5')
  c.fill(c.disc(15.5,11.5,2.4),'6')
  c.fill(c.rect(15,11,16,12),'k'); c.p(16,11,'w')
  # raised brow
  c.fill({(13,6),(14,5),(15,5),(16,5),(17,5),(18,6)},'k')
  # chain
  for x,y in [(18,15),(18,16),(19,17),(19,18),(20,19)]: c.p(x,y,'4')
  # mouth: flat skeptical
  c.fill({(9,17),(10,17),(11,17),(12,17),(13,17)},'k'); c.fill({(5,4),(6,4),(4,5),(5,5),(4,6)},'3')
  c.p(4,15,'b');c.p(5,15,'b')
  return c,pal
def regular():
  c=C(); pal=F['brown']+F['teal']
  sau=c.ell(12,20,10,2.2); c.shade(sau,'c','w','w')
  cup=c.rect(5,10,17,17)|c.ell(11,17,6.5,3.2)
  cup={(x,y) for x,y in cup if y<=20}
  c.shade(cup,'c','w','w')
  # handle
  h=c.disc(18.5,13.5,3.2)-c.disc(18.5,13.5,1.6)
  h={(x,y) for x,y in h if x>=18}
  c.fill(h,'w'); c.fill({(x,y) for x,y in h if y>=14},'c')
  # band
  c.fill({(x,12) for x in range(5,18)},'5'); c.fill({(x,13) for x in range(5,18)},'4')
  # coffee top
  top=c.ell(11.5,9.8,6.6,1.6); c.fill(top,'1'); c.fill(c.ell(11,9.6,4.5,0.9),'2')
  for x in range(5,18): c.p(x,8,'w') if c.get(x,8)=='.' else None
  # steam
  c.stamp(7,1,['  ww    ww','  wc   ww ',' ww   wc  ',' wc   ww  ','  ww   wc ','   wc   ww','   w     c'])
  return c,pal
def early_birds():
  c=C(); pal=F['blue']+['#a5521b','#e8892f']
  tail=tri(c,(15,13),(22.5,8.5),(20,16.5)); c.fill(tail,'1')
  body=c.ell(13,14.5,7.5,5.5); c.shade(body,'1','2','3')
  head=c.disc(8.5,8.5,4.6); c.shade(head,'1','2','3')
  c.fill(c.ell(10.5,16,4.5,2.5),'3')
  wing=c.ell(15,13.5,4.5,2.8); c.fill(wing,'1')
  for x in (12,14,16): c.p(x,13,'2')
  c.fill({(1,8),(2,8),(3,8),(2,9),(3,9)},'5'); c.p(1,9,'4');c.p(3,10,'4')
  c.fill({(7,7),(7,8)},'k'); c.p(6,7,'w')
  for x,y in [(11,20),(11,21),(10,21),(12,21),(15,20),(15,21),(14,21),(16,21)]: c.p(x,y,'4')
  return c,pal
def night_owls():
  c=C(); pal=F['brown']+['#a5521b','#e8892f']
  body=c.ell(12,13.5,8.6,9.2); c.shade(body,'1','2','3')
  for pts in [[(4,2),(4,3),(5,3),(4,4),(5,4),(6,4)],[(19,2),(19,3),(18,3),(19,4),(18,4),(17,4)]]: c.fill(set(pts),'1')
  chest=c.ell(12,17,5.5,5); c.fill(chest,'3')
  for x,y in [(10,15),(11,16),(13,15),(14,16),(9,18),(10,19),(12,18),(13,19),(15,18),(11,21),(14,21)]: c.p(x,y,'2')
  for cx in (8.5,15.5):
    c.fill(c.disc(cx,9.5,3.6),'c'); c.fill(c.disc(cx,9.5,3.0),'w')
    c.fill(c.disc(cx,9.5,2.0),'o'); x0=int(cx-.5); c.fill(c.rect(x0,9,x0+1,10),'k'); c.p(x0,9,'w')
  c.fill({(11,11),(12,11),(11,12),(12,12),(11,13)},'5'); c.p(12,13,'4')
  for x in (8,9,10,13,14,15): c.p(x,22,'5')
  return c,pal
def shift_crew():
  c=C(); pal=F['yellow']+['#a5521b','#e8892f']
  face=c.ell(11.5,14,6.6,6.4); c.fill(face,'s'); c.fill({(x,y) for x,y in face if x>=16 or y>=19},'t')
  vest=c.rect(4,20,19,22); c.fill(vest,'5'); c.fill({(x,22) for x in range(4,20)},'4'); c.fill({(x,21) for x in range(4,20)},'o')
  c.fill(c.rect(9,19,14,20),'s')
  dome=c.ell(11.5,8.5,7.6,6.2); dome={(x,y) for x,y in dome if y<=8}; c.shade(dome,'1','2','3')
  c.fill(c.rect(2,9,21,10),'2'); c.fill({(x,10) for x in range(2,22)},'1')
  c.fill(c.rect(11,3,12,8),'3')
  c.fill({(8,13),(8,14),(15,13),(15,14)},'k')
  c.fill({(9,17),(10,18),(11,18),(12,18),(13,18),(14,17)},'k')
  c.p(6,16,'b');c.p(17,16,'b')
  return c,pal
def mob():
  c=C(); pal=F['red']+['#e8892f','#f2c94a']
  outer=c.disc(12,16,6.8)|tri(c,(12,1),(5.5,14),(18.5,14))|tri(c,(4.5,5),(4,15),(10,12))|tri(c,(19.5,3.5),(14,12),(20.5,15))
  c.fill(outer,'2'); c.fill({(x,y) for x,y in outer if (x,y+1) not in outer or (x+1,y) not in outer and y>12},'1')
  mid=c.disc(12,17,4.8)|tri(c,(11.5,6),(7.5,16),(16,16))|tri(c,(16.5,9),(13,15),(17.5,16))
  c.fill(mid,'4')
  inner=c.disc(12,18.5,2.8)|tri(c,(12,11),(9.6,18),(14.6,18)); c.fill(inner,'5'); c.fill(c.disc(12,19.2,1.5),'o')
  return c,pal
def landlord():
  c=C(); pal=F['red']+F['brown']+['#4f8bd0','#8db9ea']
  c.fill(c.rect(15,3,17,8),'4'); c.fill({(15,3),(16,3),(17,3)},'5')
  walls=c.rect(4,11,19,21); c.fill(walls,'w'); c.fill({(19,y) for y in range(11,22)}|{(x,21) for x in range(4,20)},'c')
  roof=tri(c,(12,1.5),(0.8,12.2),(23.2,12.2)); roof={(x,y) for x,y in roof if 1<=x<=22}
  c.fill(roof,'2'); c.fill({(x,y) for x,y in roof if y==11},'1')
  for x,y in roof:
    if (x-1,y) not in roof or (x,y-1) not in roof: c.p(x,y,'3')
  c.fill(c.rect(10,15,13,21),'5'); c.fill({(10,y) for y in range(15,22)},'6'); c.p(12,18,'o')
  for x0 in (5,15):
    c.fill(c.rect(x0,13,x0+3,16),'8'); c.fill({(x0+1,y) for y in range(13,17)}|{(x,15) for x in range(x0,x0+4)},'7')
    c.p(x0,13,'w')
  return c,pal
def extortionist():
  c=C(); pal=['#7c5a2c','#c39a5c','#e6c991']+F['sage'][:2]
  sack=c.ell(12,15.5,8.6,6.8); c.shade(sack,'1','2','3')
  neck=c.rect(9,7,14,9); c.fill(neck,'2'); c.fill({(14,7),(14,8),(14,9)},'1')
  flap=c.ell(11.5,5.5,4.8,2.2); c.shade(flap,'1','2','3')
  c.fill({(x,9) for x in range(8,16)},'x')
  # $ sign
  c.stamp(10,11,[' 4  ','4444','4   ','4444','   4','4444',' 4  '])
  for x,y in [(11,11),(13,13),(11,16),(13,15)]: pass
  return c,pal
SAMPLES=[('critic',critic),('regular',regular),('early-birds',early_birds),('night-owls',night_owls),('shift-crew',shift_crew),('mob',mob),('landlord',landlord),('extortionist',extortionist)]
from more import REG
for name,f in SAMPLES+REG:
  c,pal=f(); S[name]={'px':c.rows(),'pal':pal}
ONLY=os.environ.get('ONLY')
OUT=os.path.join(os.path.dirname(os.path.abspath(__file__)),'../../../../src/v4/art/icons/memberEmojis.js')
data={k:{'px':v['px'],'palette':pal_of(v['pal'])} for k,v in S.items()}
open(OUT,'w').write('// Generated by design/prototypes/pixel-art/members/draw.py. Do not edit; redraw there and re-run.\nexport default '+json.dumps(data,separators=(',',':'))+';\n')
names=[n for n in S if not ONLY or n in ONLY.split(',')]; cols=8; rows_=(len(names)+cols-1)//cols
sheet=Image.new('RGBA',(cols*110+10,rows_*130+10),(225,215,195,255))
for i,n in enumerate(names):
  im=render(S[n]['px'],S[n]['pal'],4); sheet.paste(im,(10+(i%cols)*110,10+(i//cols)*130),im)
  im1=render(S[n]['px'],S[n]['pal'],1); sheet.paste(im1,(10+(i%cols)*110+40,10+(i//cols)*130+100),im1)
sheet.save(os.environ.get('SHEET','/tmp/member-emojis.png'))
print(len(S),'members drawn')
