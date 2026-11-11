import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Barker: out front of the show tent in a striped jacket and straw boater, cane up, calling the crowd in."""
    c = C(N)
    pal = base_pal(p='#d8e0e2', P='#c8d2d6', f='#b9a88c', F='#a39276',
                   x='#c9574e', X='#a8443d', t='#d9a294', T='#b98476', m='#eadfca', M='#d4c6ad', d='#4a3b44', y='#f2d27a', Y='#c9a24a',
                   s='#e0c27a', S='#b8984e', o='#8a5a36', O='#6a4428', n='#3a3644', N='#2c2934', z='#4a3428',
                   h='#2b1d18', H='#4a332a', r='#a8443d', a=OLIVE[0], A=OLIVE[1], **{'1': WHITEC[0], '2': WHITEC[1]})
    c.rect(0, 0, 63, 63, 'p')

    def tent(l):                          # the show tent on the right: striped canvas, a peaked top, a lit doorway
        for y in range(4, 52):
            x0 = max(38, 52 - (y - 4) * 2)
            for x in range(x0, 64):
                l.px(x, y, 't' if ((x - 38) // 4) % 2 == 0 else 'm')
        l.rect(47, 30, 59, 51, 'T'); l.rect(49, 33, 57, 51, 'Y'); l.rect(55, 33, 57, 51, 'S')
        l.line(47, 30, 53, 24, 'T'); l.line(59, 30, 53, 24, 'T')
        l.rect(0, 52, 63, 63, 'f'); l.hl(0, 63, 52, 'F')
    bg(c, tent, None)
    DK = {'1': '2', 'n': 'N', 'x': 'X', 's': 'S'}

    def jacket(f):                        # red stripes down the jacket, a bow tie
        for x in (19, 23, 27):
            f.vl(x, 32, 45, 'x')
        f.rect(22, 30, 25, 31, 'x'); f.px(23, 31, 'X')

    def boater(f):                        # flat straw crown, red band, wide brim
        f.rect(18, 8, 29, 11, 's'); f.hl(18, 29, 10, 'x'); f.hl(18, 29, 11, 'X')
        f.hl(14, 33, 12, 's'); f.hl(15, 32, 13, 'S')

    def cane(p):                          # held high by the middle, crook at the top
        pole(p, 35, 12, 22, 'o', 'O')
        p.pts('o', [(35, 11), (35, 10), (36, 9), (37, 8), (38, 8), (39, 9), (40, 10), (40, 11), (40, 12)])
        p.pts('O', [(36, 10), (37, 9), (38, 9), (39, 10), (39, 11), (41, 11), (41, 12)])
    fig(c, DK, 24, 13, 'a', 'A', hs='crop', hk='h', hd='H', pose='raise', mouth='open', brows='soft', front=jacket,
        top=boater, props=cane, legs=dict(pants='n', pdark='N', shoe='z', lh=6, stance=1))
    return c.rows(), pal


PORTRAIT = ('trading.barker', art)
