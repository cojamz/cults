import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Bulk Buyer counts 2: a pair pushing a trolley stacked with boxes."""
    c = C(N)
    pal = base_pal(p='#d6dadc', P='#c4c8ca', s='#a9b0ae', S='#8e9593', f='#bfc4c1', o='#c9a066', O='#9e7840', m='#8e959c', M='#6f747b',
                   h='#2b1d18', H='#4a332a', j='#a8a4a4', J='#7a7676', n='#3e3a4a', N='#2e2b38', z='#3a2c26',
                   a=OLIVE[0], A=OLIVE[1], b=VDEEP[0], B=VDEEP[1], **{'1': WHITEC[0], '2': WHITEC[1]})
    c.rect(0, 0, 63, 63, 'p'); floor(c, 54, 'f', 'S')

    def racks(l):                         # warehouse racking
        l.rect(0, 6, 63, 44, 's')
        for y in (18, 31):
            l.rect(0, y, 63, y + 1, 'S')
        for x in range(2, 62, 8):
            l.rect(x, 10, x + 5, 17, 'O'); l.rect(x + 1, 24, x + 6, 30, 'O')
    bg(c, racks, 'S')
    DK = {'n': 'N', 'o': 'O'}
    c.paste(solo(lambda cc: fig(cc, DK, 32, 12, 'b', 'B', hs='crop', hk='h', hd='H', pose='point', size=14,
                                legs=dict(pants='n', pdark='N', shoe='z', lh=9)), dx=-22, dy=1))
    c.paste(solo(lambda cc: fig(cc, DK, 32, 13, 'a', 'A', hs='bun', hk='j', hd='J', pose='hold', size=14, mouth='grin',
                                legs=dict(pants='n', pdark='N', shoe='z', lh=9), side='R'), dx=-6, dy=1))

    def cart(l):                          # the trolley, boxes piled high
        l.rect(30, 46, 60, 48, 'm'); l.vl(30, 34, 46, 'M')
        l.ell(33, 50, 37, 54, 'M'); l.ell(53, 50, 57, 54, 'M'); l.rect(34, 48, 35, 50, 'm'); l.rect(54, 48, 55, 50, 'm')
        for (x0, y0, x1, y1) in ((32, 34, 45, 45), (46, 34, 59, 45), (34, 22, 47, 33), (48, 24, 58, 33), (40, 12, 52, 21)):
            l.rect(x0, y0, x1, y1, 'o'); l.hl(x0, x1, (y0 + y1) // 2, 'O')
    held(c, cart)
    return c.rows(), pal


PORTRAIT = ('trading.bulkbuyer', art)
