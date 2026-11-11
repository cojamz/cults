import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Choir counts 2: two singers in robes, songbooks open."""
    c = C(N)
    pal = base_pal(p='#d9cfb8', P='#c9bfa6', o='#8a6142', O='#6d4a31', w2='#f4ede1', y='#f3d27a', r='#8a2f2f',
                   b='#7a4a3a', B='#5e3a2c', h='#2b1d18', H='#4a332a', j='#c06a30', J='#934520',
                   a=PALE[0], A=PALE[1], d=DEEP[0], D=DEEP[1], **{'1': GREEN[0], '2': GREEN[1]})
    pal.pop('w2')
    c.rect(0, 0, 63, 63, 'p'); floor(c, 54, 'O')

    def window(l):                        # an arched window behind
        l.rect(24, 10, 40, 34, 'P'); l.ell(24, 2, 40, 18, 'P'); l.rect(26, 12, 38, 34, 'y'); l.ell(26, 4, 38, 18, 'y'); l.vl(32, 4, 34, 'P')
    bg(c, window, None)
    for (x, y) in ((3, 4), (57, 4)):     # notes in the air
        c.rect(x, y + 3, x + 2, y + 5, 'h'); c.vl(x + 2, y - 1, y + 4, 'h'); c.pts('h', [(x + 3, y - 1), (x + 4, y)])
    DK = {'b': 'B'}

    def singer(cc, sk, hs, hk, hd, mouth, side='L'):
        fig(cc, DK, 32, 12, sk[0], sk[1], hs=hs, hk=hk, hd=hd, pose='hold', size=16, mouth=mouth, side=side, th=26)
        held(cc, lambda l: (l.rect(25, 40, 39, 47, 'b'), l.rect(26, 40, 31, 46, 'w'), l.rect(33, 40, 38, 46, 'w'),
                            l.hl(27, 30, 42, 'B'), l.hl(34, 37, 42, 'B'), l.hl(27, 30, 44, 'B'), l.hl(34, 37, 44, 'B')))
    c.paste(solo(lambda cc: singer(cc, ('d', 'D'), 'crop', 'h', 'H', 'smile'), dx=-14, dy=1))
    c.paste(solo(lambda cc: singer(cc, ('a', 'A'), 'long', 'j', 'J', 'open', 'R'), dx=14))
    return c.rows(), pal


PORTRAIT = ('echo.choir', art)
