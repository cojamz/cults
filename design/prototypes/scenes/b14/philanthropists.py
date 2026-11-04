import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Philanthropist: one donor presenting a giant cheque."""
    c = C(N)
    pal = base_pal(p='#c9d6dc', P='#b8c6cd', f='#a8b4ba', F='#96a2a8', b='#3a5a8a', o='#8a5a36', y='#d8c070',
                   h='#2b1d18', H='#4a332a', j='#d8b060', J='#a8843e', n='#2f3036', N='#222328', z='#1e1e22', e='#7a8288',
                   a=LIGHT[0], A=LIGHT[1], d=MED[0], D=MED[1], **{'1': SILVER[0], '2': SILVER[1]})
    c.rect(0, 0, 63, 63, 'p'); floor(c, 52, 'f', 'F')
    bg(c, lambda l: (l.rect(4, 6, 59, 14, 'b'), l.hl(8, 55, 10, 'y')), None)              # a banner overhead
    DK = {'n': 'N'}

    def donor(cc, sk, hs, hk, hd, mouth, side='L'):
        fig(cc, DK, 32, 14, sk[0], sk[1], hs=hs, hk=hk, hd=hd, pose='hold', size=14, mouth=mouth, side=side,
            legs=dict(pants='n', pdark='N', shoe='z', lh=8))
    c.paste(solo(lambda cc: donor(cc, ('d', 'D'), 'crop', 'h', 'H', 'grin')))

    def cheque(l):                         # the big cheque, held between them
        l.rect(17, 34, 46, 47, 'w'); l.hl(20, 32, 37, 'e'); l.hl(20, 28, 40, 'e'); l.rect(35, 39, 43, 43, 'p')
        l.hl(36, 42, 41, 'b'); l.hl(20, 32, 44, 'e')
    held(c, cheque)
    hl = layer(); hand(hl, 15, 38, 'grip', 'd', 'D'); hand(hl, 45, 38, 'grip', 'd', 'D', True); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('silver.philanthropists', art)
