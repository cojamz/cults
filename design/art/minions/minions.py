# Minions on a 32-pixel grid in the member style (Cory, Nov 24: "i though we made them more pixel dense à la members"):
# rounded shading from design/art/members/kit.py, thick 2px ink outline. Run: python3 minions.py [sheet.png]
# Writes minions.json (read by scripts/v4-art-import.mjs) and a sheet.
import sys, json, math
sys.path.insert(0, '../members')
import kit
kit.N = 32
from kit import V, RAMP, hx, INK, BLUSH
N = 32
RAMP.update({
 'orange':('#f7b866','#e8892f','#b9621e','#82401a'),
 'lime':('#b4e08a','#6bb24d','#3f7f34','#285426'),
 'pumpkin':('#ffb760','#ec8a2c','#b85a1a','#7c3a12'),
 'bone':('#ffffff','#f3ead6','#cbbd9c','#9a8c70'),
 'ghost':('#ffffff','#f6eedb','#d8cbb0','#a89a80'),
 'mush':('#f0866c','#d4473a','#9c2424','#6a1616'),
 'yellow':('#fde58e','#f2c94a','#c09624','#8a6a14'),
 'raven':('#6d7fa8','#3a4766','#232c44','#141a2a'),
 'tan':('#ecd2a6','#c99a68','#9a6e44','#6a4a2a'),
 'horn':('#8a8090','#5e5464','#3e3644','#2a242e'),
 'rat':('#c8bcb0','#968a80','#6a5f57','#463d37'),
 'pink':('#ffd2dc','#f3a3b6','#d2738c','#9c4c62'),
 'owl':('#e3a86a','#b0743a','#7e4d22','#553214'),
 'bat':('#9a88c4','#66559a','#43386e','#2a2248'),
 'shell':('#eaa87a','#c4744a','#8e4a2a','#5e2e18'),
 'slug':('#d6efc6','#a6d394','#6fa463','#4a7444'),
 'quill':('#b8916a','#7e5838','#56391f','#3a2412'),
 'fox':('#f08a52','#cf5a24','#963a16','#64240c'),
 'spider':('#5a4e6a','#352c42','#221b2c','#130e1a'),
 'hare':('#e7d3b6','#c6a982','#957a58','#66513a'),
 'goose':('#ffffff','#f2f0ea','#cfcac0','#9e988c'),
 'beak':('#ffcf6a','#f29a2a','#c06a14','#8a4a0c'),
 'straw':('#ffe48a','#e8b83a','#b48a1f','#7e5e12'),
 'sack':('#e9cfa2','#cfae7c','#a2825a','#74583a'),
 'hat':('#9a7048','#6e4a2a','#4c3018','#30200e'),
 'wool':('#ffffff','#f1e9d8','#cfc3a8','#a0937a'),
 'sheepface':('#5a4a52','#3a2e36','#261d24','#160f14'),
 'gnomehat':('#f0866c','#d03a30','#9c2424','#6a1616'),
 'beard':('#ffffff','#ece6dc','#c6beb0','#9a9284'),
 'sky':('#e8f6fc','#bfe0ef','#86aec2','#5a7f92'),
 'blackcat':('#6a6278','#3e3848','#28232f','#17131c'),
 'badger':('#b8b4ae','#8a857e','#5e5a54','#3c3934'),
 'leaf':('#86c47d','#4f9a55','#2f6a3a','#1e4a28'),
})
def C(r,i=1): return hx(RAMP[r][i])
GLOW=hx('#ffd66e'); WHITE=hx('#fffaf0'); RED=hx('#c0392b')
def eye(v,x,y,big=False,glint=True,c=INK):
    v.px(x,y,c); v.px(x,y+1,c)
    if big: v.px(x+1,y,c); v.px(x+1,y+1,c)
    if glint: v.px(x+(1 if big else 0),y,WHITE)
def eyes(v,x1,x2,y,**k): eye(v,x1,y,**k); eye(v,x2,y,**k)
def blush(v,x,y): v.px(x,y,BLUSH); v.px(x+1,y,BLUSH)
def mirror(f):
    # draw f(v) for the left half, then copy left half to the right
    pass

F = {}
def minion(id, name, emoji):
    def deco(fn): F[id] = (name, emoji, fn); return fn
    return deco

@minion('bug','Bug','🐛')
def _(v):
    for i,(cx,cy) in enumerate([(7,22),(11,21),(15,20),(19,19)]):
        v.ell(cx,cy,3.6,4,'lime')
    v.ell(23.5,14,6,6,'lime')
    for i,(cx,cy) in enumerate([(7,22),(11,21),(15,20),(19,19)]):
        v.ell(cx,cy+1.5,1,1,'yellow',flat=True)
    for x in (6,10,14,18): v.px(x,26,C('lime',3)); v.px(x+1,26,C('lime',3))
    v.line(21,8,20,5,C('lime',2)); v.line(26,8,27,5,C('lime',2)); v.px(20,4,C('yellow')); v.px(27,4,C('yellow'))
    eyes(v,21,25,12); v.px(23,16,INK); v.px(24,16,INK); v.px(24,17,WHITE)
@minion('ghost','Ghost','👻')
def _(v):
    v.ell(16,13,9.5,9,'ghost')
    v.rect(7,13,25,23,'ghost')
    for i,x in enumerate(range(7,26,3)):
        v.ell(x+1.5,24,1.6,1.8 if i%2 else 2.6,'ghost')
    for ex in (11,19):
        for dx in (0,1):
            for dy in (0,1,2): v.px(ex+dx,11+dy,INK)
    v.ell(16,18,1.6,2,'ghost',flat=True)
    for x,y in ((15,17),(16,17),(15,18),(16,18),(15,19),(16,19)): v.px(x,y,INK)
    blush(v,8,15); blush(v,22,15)
@minion('cat','Cat','🐱')
def _(v):
    v.poly([(5,13),(6,3),(13,9)],'blackcat'); v.poly([(27,13),(26,3),(19,9)],'blackcat')
    v.poly([(7,10),(7.5,5),(11,9)],'pink',flat=True); v.poly([(25,10),(24.5,5),(21,9)],'pink',flat=True)
    v.ell(16,17,11.5,9.5,'blackcat')
    for ex in (10,19):
        v.rect(ex,14,ex+2,16,'lime',flat=True); v.rect(ex+1,14,ex+1,16,'raven',flat=True); v.px(ex+1,14,INK); v.px(ex+1,15,INK); v.px(ex+1,16,INK)
    v.px(15,19,C('pink')); v.px(16,19,C('pink'))
    for x,y in ((14,21),(15,22),(16,22),(17,21)): v.px(x,y,C('blackcat',0))
    for y in (19,21): v.line(4,y,8,y+ (0 if y==19 else 0),C('blackcat',0)); v.line(23,y,27,y,C('blackcat',0))
@minion('frog','Frog','🐸')
def _(v):
    v.ell(16,19,12.5,8,'lime')
    v.ell(9.5,11,4.6,4.6,'lime'); v.ell(22.5,11,4.6,4.6,'lime')
    v.ell(9.5,11,2.8,2.8,'bone',flat=True); v.ell(22.5,11,2.8,2.8,'bone',flat=True)
    eye(v,9,10,big=True); eye(v,22,10,big=True)
    for x in range(8,25): v.px(x,21+(1 if x in (8,24) else 0) - (0),INK)
    v.px(7,20,INK); v.px(25,20,INK)
    blush(v,6,18); blush(v,25,18)
@minion('pumpkin','Pumpkin','🎃')
def _(v):
    v.rect(15,4,17,8,'leaf'); v.poly([(17,6),(22,4),(21,7)],'leaf',flat=True)
    v.ell(9.5,17,6.5,9,'pumpkin'); v.ell(22.5,17,6.5,9,'pumpkin'); v.ell(16,17,7,9.5,'pumpkin')
    for x,top in ((12,9),(20,9)):
        for y in range(top,26): v.px(x,y,C('pumpkin',2))
    for tri in ([(9,15),(14,15),(11.5,11)],[(18,15),(23,15),(20.5,11)]): v.poly(tri,'yellow',flat=True)
    v.poly([(8,19),(24,19),(22,24),(10,24)],'yellow',flat=True)
    for x in (12,16,20): v.rect(x,19,x+1,20,'pumpkin',flat=True)
    for x in (14,18): v.rect(x,23,x+1,24,'pumpkin',flat=True)
@minion('skull','Skull','💀')
def _(v):
    v.ell(16,13,11,10,'bone')
    v.rect(10,19,22,25,'bone')
    for cx in (11,21): v.ell(cx,14,3.2,3.4,'bone',flat=True); v.ell(cx,14.2,3,3.2,'raven',flat=True)
    for cx in (11,21): v.px(cx,14,GLOW); v.px(cx-1,14,GLOW)
    v.poly([(16,17),(14,21),(18,21)],'raven',flat=True)
    for x in range(11,22,2): v.rect(x,23,x,25,'bone',flat=False); v.px(x+1,24,C('bone',3)); v.px(x+1,25,C('bone',3))
@minion('gnome','Gnome','🍄')
def _(v):
    v.ell(16,25,9,5.5,'blue')
    v.ell(8,25,2,2,'skin'); v.ell(24,25,2,2,'skin')
    v.poly([(16,1.5),(7,14),(25,14)],'gnomehat')
    v.ell(16,14,9.5,2.2,'gnomehat')
    v.ell(16,17,6.5,4,'skin',flat=True)
    eye(v,12,15,glint=False); eye(v,19,15,glint=False)
    v.poly([(9,18),(23,18),(20,28),(16,30),(12,28)],'beard')
    v.ell(16,18,2.4,1.8,'skin')
    blush(v,10,18); blush(v,21,18)
@minion('mushroom','Mushroom','🍄')
def _(v):
    v.rect(10,17,22,28,'bone')
    v.ell(16,13,13.5,9,'mush',clip=lambda x,y:y<=17)
    v.ell(16,17,13.5,2,'mush',clip=lambda x,y:y<=18)
    for cx,cy,r in ((10,10,2.4),(19,7,2),(23,13,2.2),(14,14,1.6)): v.ell(cx,cy,r,r,'bone',flat=True)
    eyes(v,12,19,21,glint=False); blush(v,10,24); blush(v,20,24)
    v.px(15,25,INK); v.px(16,25,INK)
@minion('bee','Bee','🐝')
def _(v):
    v.ell(12,8,4,4.2,'sky'); v.ell(19,8,4,4.2,'sky')
    v.ell(16,18,12,8,'yellow')
    for x0 in (12,17,22):
        for y in range(10,27):
            for x in range(x0,x0+3): 
                if v.g[y][x]: v.px(x,y,C('raven',3))
    v.poly([(27,17),(30,18),(27,20)],'raven',flat=True)
    eye(v,7,15); blush(v,6,19)
@minion('raven','Raven','🐦‍⬛')
def _(v):
    v.ell(17,19,9,8.5,'raven')
    v.ell(13,10,6,5.8,'raven')
    v.poly([(8,9),(2,12),(8,13)],'grey')
    v.poly([(24,20),(30,27),(26,27),(21,24)],'raven')
    v.poly([(14,16),(26,18),(22,24),(14,24)],'raven',cyl=False)
    for y in range(17,24): v.px(15+ (y-17)//2,y,C('raven',0))
    v.px(12,8,GLOW); v.px(13,8,GLOW); v.px(12,9,GLOW); v.px(13,9,INK)
    for x in (14,19): v.line(x,27,x,29,C('grey',2)); v.line(x-1,29,x+1,29,C('grey',2))
@minion('goat','Goat','🐐')
def _(v):
    for s in (1,-1):
        for i in range(12):
            a=math.radians(200-i*16) if s<0 else math.radians(-20+i*16)
            cx=16+s*6+ (math.cos(math.radians(180-i*15))*-s)*4; cy=9-math.sin(math.radians(i*15))*5
            v.ell(cx,cy,1.9-i*0.07,1.9-i*0.07,'horn')
        v.poly([(16+s*7,12),(16+s*14,12),(16+s*12,15.5)],'tan')
    v.ell(16,14,7.5,6,'tan')
    v.poly([(9,14),(23,14),(20,24),(12,24)],'tan')
    v.ell(16,24,4.2,3,'tan')
    for ex in (11,19):
        v.rect(ex,13,ex+2,14,'yellow',flat=True); v.px(ex,13,INK); v.px(ex+1,13,INK); v.px(ex+2,13,INK)
    v.px(14,24,INK); v.px(17,24,INK)
    v.poly([(13.5,26),(18.5,26),(16,31)],'bone')
@minion('rat','Rat','🐀')
def _(v):
    v.ell(7,8,5,5,'rat'); v.ell(25,8,5,5,'rat')
    v.ell(7,8,3,3,'pink',flat=True); v.ell(25,8,3,3,'pink',flat=True)
    v.ell(16,13,9.5,7,'rat')
    v.poly([(7,14),(25,14),(18,26),(14,26)],'rat')
    v.ell(16,26,2.4,1.8,'pink')
    eye(v,11,13,big=True); eye(v,20,13,big=True)
    for y,x in ((20,9),(21,8),(20,23),(21,24)): v.px(x,y,C('rat',3))
    pass
@minion('owl','Owl','🦉')
def _(v):
    v.poly([(6,4),(11,8),(6,10)],'owl'); v.poly([(26,4),(21,8),(26,10)],'owl')
    v.ell(16,17,11,11,'owl')
    v.ell(11,13,5,5,'bone',flat=True); v.ell(21,13,5,5,'bone',flat=True)
    v.ell(11,13,3,3,'yellow',flat=True); v.ell(21,13,3,3,'yellow',flat=True)
    for cx in (10,20): v.rect(cx,12,cx+1,13,'raven',flat=True); v.px(cx,12,WHITE)
    v.poly([(14.5,16),(17.5,16),(16,20)],'beak',flat=True)
    for x,y in ((11,21),(16,22),(21,21),(13,24),(19,24),(16,26)): v.px(x,y,C('owl',0)); v.px(x+1,y,C('owl',0))
    for x in (11,20): v.rect(x,28,x+2,29,'beak',flat=True)
@minion('pig','Pig','🐷')
def _(v):
    v.poly([(5,11),(6,3),(13,7)],'pink'); v.poly([(27,11),(26,3),(19,7)],'pink')
    v.ell(16,16,12.5,10.5,'pink')
    v.ell(16,19,5.2,3.6,'pink'); v.ell(16,19,4.8,3.2,'pink',flat=True)
    for x in (14,18): v.px(x,18,C('pink',3)); v.px(x,19,C('pink',3))
    eye(v,10,13,big=True); eye(v,21,13,big=True)
    blush(v,6,18); blush(v,25,18)
@minion('rooster','Rooster','🐓')
def _(v):
    v.ell(17,20,8,7,'goose'); v.ell(12,12,4.6,5,'goose')
    v.poly([(19,15),(28,8),(29,14),(26,22)],'leaf'); v.poly([(20,17),(30,13),(27,21)],'leaf')
    v.ell(12,5.5,1.8,2,'mush'); v.ell(15,6,1.8,2,'mush'); v.ell(9.5,7,1.6,1.8,'mush')
    v.poly([(8,11),(3,13),(8,14)],'beak',flat=True)
    v.ell(9,16.5,1.4,2,'mush',flat=True)
    eye(v,11,10)
    v.poly([(13,19),(22,20),(19,24),(14,23)],'goose',cyl=False)
    for x in (14,19): v.line(x,27,x,29,C('beak')); v.line(x-1,29,x+1,29,C('beak'))
@minion('bat','Bat','🦇')
def _(v):
    for s in (1,-1):
        pts=[(16,12),(16+s*8,9),(16+s*14,7),(16+s*15,19)]
        for k in range(3): pts.append((16+s*(13-k*4),20 if k%2==0 else 17))
        pts[-1]=(16+s*5,21)
        pts.append((16,20))
        v.poly(pts,'bat')
        v.poly([(16+s*3,10),(16+s*6,3),(16+s*7,10)],'bat')
    v.ell(16,15,6,6.5,'bat')
    for ex in (13,18): v.rect(ex,13,ex+1,14,'yellow',flat=True)
    v.px(14,18,WHITE); v.px(17,18,WHITE); v.px(14,19,WHITE); v.px(17,19,WHITE)
    blush(v,11,16); blush(v,20,16)
@minion('snail','Snail','🐌')
def _(v):
    v.poly([(3,26),(29,26),(29,28),(3,28)],'slug',cyl=False)
    v.ell(7,19,3.6,8,'slug')
    v.line(5,12,4,6,C('slug',2),w=1); v.line(9,12,10,6,C('slug',2),w=1)
    v.ell(4,5.5,1.4,1.4,'slug'); v.ell(10,5.5,1.4,1.4,'slug'); v.px(4,5,INK); v.px(10,5,INK)
    v.ell(19,17,9.5,9.5,'shell')
    for t in range(0,330,12):
        a=math.radians(t*2.2); r=1+t/50
        v.px(19+r*math.cos(a), 17+r*math.sin(a), C('shell',3))
    eye(v,6,17,glint=False)
@minion('hedgehog','Hedgehog','🦔')
def _(v):
    v.ell(18,18,11,9,'quill')
    for i,x in enumerate(range(9,30,3)):
        v.poly([(x-2,14),(x+1,5+ (i%2)*2),(x+2,14)],'quill')
    for i,x in enumerate(range(9,30,3)): v.px(x+1,6+(i%2)*2,C('quill',0))
    v.ell(9,20,6.5,5.5,'sack')
    v.poly([(4,19),(1,22),(5,23)],'sack')
    v.ell(1.8,22,1.4,1.4,'raven',flat=True)
    eye(v,7,18)
    blush(v,8,22)
    for x in (12,22): v.rect(x,26,x+1,28,'sack',flat=True)
@minion('fox','Fox','🦊')
def _(v):
    v.poly([(4,15),(5,2),(13,9)],'fox'); v.poly([(28,15),(27,2),(19,9)],'fox')
    v.poly([(5,4),(6,2.5),(8,5)],'raven',flat=True); v.poly([(27,4),(26,2.5),(24,5)],'raven',flat=True)
    v.poly([(7,9),(7,5),(10,8)],'bone',flat=True); v.poly([(25,9),(25,5),(22,8)],'bone',flat=True)
    v.ell(16,15,11.5,7.5,'fox')
    v.poly([(4,15),(28,15),(16,29)],'fox')
    v.poly([(4,16),(14,19),(16,29)],'bone',cyl=False); v.poly([(28,16),(18,19),(16,29)],'bone',cyl=False)
    v.poly([(13,19),(19,19),(16,29)],'fox',cyl=False)
    v.ell(16,27.5,1.8,1.4,'raven',flat=True)
    eye(v,10,14,big=True); eye(v,21,14,big=True)
@minion('spider','Spider','🕷️')
def _(v):
    for s in (1,-1):
        for i,(y0,y1,y2) in enumerate(((13,7,11),(16,12,16),(19,19,24),(21,24,29))):
            x0=16+s*7; x1=16+s*(11+i%2*2); x2=16+s*14
            v.line(x0,y0,x1,y1,C('spider',1)); v.line(x1,y1,x2,y2,C('spider',1))
            v.line(x0,y0+1,x1,y1+1,C('spider',2)); v.line(x1,y1+1,x2,y2+1,C('spider',2))
    v.ell(16,20,8,7.5,'spider'); v.ell(16,12,5.5,4.5,'spider')
    for x in (13,18): v.rect(x,11,x+1,12,'yellow',flat=True)
    v.px(14,10,GLOW); v.px(17,10,GLOW)
    v.poly([(14,19),(18,19),(16,21.5)],'mush',flat=True); v.poly([(14,24),(18,24),(16,21.5)],'mush',flat=True)
@minion('hare','Hare','🐇')
def _(v):
    v.ell(11,7,2.8,7,'hare'); v.ell(21,7,2.8,7,'hare')
    v.ell(11,7.5,1.2,5.2,'pink',flat=True); v.ell(21,7.5,1.2,5.2,'pink',flat=True)
    v.ell(16,19,10,8.5,'hare')
    v.ell(16,23,4.8,3.4,'bone')
    eye(v,10,17,big=True); eye(v,21,17,big=True)
    v.px(15,21,C('pink',2)); v.px(16,21,C('pink',2))
    v.px(15,25,WHITE); v.px(16,25,WHITE)
    for y in (22,23): v.px(5,y,C('hare',3)); v.px(26,y,C('hare',3))
@minion('goose','Goose','🪿')
def _(v):
    v.ell(19,22,10,6.5,'goose')
    v.poly([(26,18),(31,14),(29,22)],'goose')
    v.rect(9,9,13,22,'goose')
    v.ell(11,8,4.5,4.2,'goose')
    v.poly([(7,7),(1,9),(7,11)],'beak')
    v.px(10,6,INK); v.px(10,7,INK)
    v.poly([(15,20),(26,20),(22,25)],'goose',cyl=False)
    for y in range(20,25): v.px(16+(y-20)*2,y,C('goose',2))
    for x in (16,22): v.line(x,28,x,29,C('beak')); v.line(x-1,30,x+2,30,C('beak'))
@minion('badger','Badger','🦡')
def _(v):
    v.ell(7,9,3.4,3.2,'badger'); v.ell(25,9,3.4,3.2,'badger')
    v.ell(16,15,11,8.5,'badger')
    v.poly([(5,15),(27,15),(19,28),(13,28)],'badger')
    for s_ in (1,-1):
        v.poly([(16+s_*3.2,4),(16+s_*8.5,8),(16+s_*8.5,14),(16+s_*3.8,27.5),(16+s_*2,27.5)],'sheepface',flat=True)
    v.poly([(14.5,6.5),(17.5,6.5),(18,28),(14,28)],'bone',cyl=False)
    v.ell(16,27,2.4,1.6,'raven',flat=True)
    eye(v,11,15,big=True,c=INK); eye(v,20,15,big=True,c=INK)
    for x in (11,20): v.px(x+1,15,GLOW)
@minion('sheep','Sheep','🐑')
def _(v):
    for cx,cy in ((8,9),(13,6),(19,6),(24,9),(27,15),(26,21),(21,25),(16,26),(11,25),(6,21),(5,15)):
        v.ell(cx,cy,4.6,4.6,'wool')
    v.ell(16,15,10,10,'wool')
    v.ell(4,15,3,1.8,'sheepface'); v.ell(28,15,3,1.8,'sheepface')
    v.ell(16,16,6,7.5,'sheepface')
    for cx in (13,19): v.ell(cx,14,1.8,1.6,'bone',flat=True); v.px(cx,14,INK); v.px(cx,15,INK)
    v.px(15,20,C('pink')); v.px(16,20,C('pink'))
    for cx,cy in ((12,7),(16,6),(20,7)): v.ell(cx,cy,3,2.4,'wool')

def build():
    out=[]
    for id,(name,emoji,fn) in F.items():
        v=V(); fn(v); v.thick(); out.append((id,name,emoji,v))
    return out

KEYS='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijlmnpqruvyz0123456789'
def encode(v):
    cols={}; rows=[]
    for r in v.g:
        s=''
        for c in r:
            if c is None: s+='.'; continue
            h='#%02x%02x%02x'%c[:3]
            if h not in cols: cols[h]=KEYS[len(cols)]
            s+=cols[h]
        rows.append(s)
    return rows,{k:h for h,k in cols.items()}

if __name__=='__main__':
    figs=build()
    old=json.load(open('emblems.json'))
    data=[]
    for id,name,emoji,v in figs:
        px,pal=encode(v)
        data.append({'id':id,'name':name,'emoji':emoji,'kind':'emoji','outlined':True,'px':px,'palette':pal,'em':old[id]['em'],'emPalette':old[id]['palette']})
    json.dump(data,open('minions.json','w'))
    if len(sys.argv)>1:
        from kit import sheet
        sheet([(n,v) for _,n,_,v in figs],sys.argv[1],sc=8,cols=6)
    print(len(data),'minions')
