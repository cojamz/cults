import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Caravan counts 3: three traders on the road, packs of every colour."""
    c = C(N)
    pal = base_pal(s='#f2d4a8', d='#e6c088', D='#d4ac72', t='#c99a5a', o='#8a6a4c', O='#6e5238',
                   R=RED[0], u=BLUE[0], g=GREEN[0], v=PURPLE[0], h='#2b1d18', H='#4a332a', j='#a8a4a4', J='#7a7676',
                   n='#6a5040', N='#544030', z='#2a2220', a=MED[0], A=MED[1], b=PALE[0], B=PALE[1], e=DEEP[0], E=DEEP[1],
                   **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 's')
    bg(c, lambda l: (l.ell(-10, 30, 30, 50, 'd'), l.ell(26, 26, 74, 50, 'd'), l.ell(44, 4, 52, 12, 'w')), 'D')   # dunes, sun
    floor(c, 44, 'd', 'D')
    DK = {'n': 'N', 'o': 'O'}

    def trader(cc, sk, hs, hk, hd, pack, packd, mouth):
        held(cc, lambda l: (l.rect(19, 25, 26, 41, pack), l.vl(26, 25, 41, packd), l.hl(19, 26, 32, packd)))   # pack on the back
        fig(cc, DK, 32, 13, sk[0], sk[1], hs=hs, hk=hk, hd=hd, pose='down', size=14, mouth=mouth,
            legs=dict(pants='n', pdark='N', shoe='z', lh=8, stance=1),
            front=lambda f: (f.line(27, 29, 29, 41, 'O'), f.line(37, 29, 35, 41, 'O')))
    c.paste(solo(lambda cc: trader(cc, ('b', 'B'), 'long', 'j', 'J', 'u', 'h', 'smile'), dx=-20, dy=-3))
    c.paste(solo(lambda cc: trader(cc, ('e', 'E'), 'crop', 'h', 'H', 'g', 'h', 'smile'), dx=20, dy=-3))
    c.paste(solo(lambda cc: trader(cc, ('a', 'A'), 'short', 'h', 'H', 'R', 'h', 'grin'), dx=0, dy=2))
    return c.rows(), pal


PORTRAIT = ('yellow.caravan', art)
