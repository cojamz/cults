import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *
from crowd import solo


def draw():
    c = C(N)
    pal = base(p='#d8c7e0', P='#cbb9d4', s='#9fd0ea', y='#fbe08a', Y='#f0c548', o='#9a6a44', O='#7a5034',
               e='#f4ede1', E='#d3cbbd', b='#7d9ad0', B='#6280b6', m='#d24a3a',
               a=LIGHT[0], A=LIGHT[1], d=DEEP[0], D=DEEP[1], n='#1f1612', f='#c97a5a', h='#c0602c', H='#8f4520',
               **{'1': PURPLE[0], '2': PURPLE[1]})
    DK = {'1': '2', '2': '2', 'a': 'A', 'e': 'E'}
    c.rect(0, 0, 63, 63, 'p')

    def window(l):                          # bright midday sun
        l.rect(1, 2, 13, 10, 'e'); l.rect(2, 3, 12, 9, 's'); l.ell(8, 4, 11, 7, 'y')
    bg(c, window, 'E')

    def bedhead(l):
        l.rect(14, 12, 62, 40, 'o'); l.rect(16, 14, 60, 40, 'O'); l.rect(17, 15, 59, 40, 'o')
    bg(c, bedhead, 'O')
    c.rect(18, 30, 62, 40, 'e'); c.hl(18, 62, 40, 'E')   # pillow

    def top(f):                             # floppy nightcap, tip over to the right
        f.poly([(30, 15), (32, 8), (38, 4), (45, 4), (49, 9), (47, 10), (44, 8), (40, 9), (46, 15)], '1')
        f.poly([(42, 6), (45, 4), (49, 9), (47, 10)], '2')
        f.ell(48, 9, 51, 12, 'e')
        f.hl(29, 46, 15, 'e'); f.hl(29, 46, 16, 'E')
    def sleeper(cc, sk, sh, hk, hd, cap):
        dk = dict(DK); dk[sk] = sh
        person(cc, dk, hx=31, hy=14, skin=sk, shade=sh, mouth='open' if cap else 'smile', brows='soft', brow='H', glint=None,
               hs='crop', hk=hk, hd=hd, cx=38, sw=8, ww=8, th=15, cloth='1', top=top if cap else None,
               face=lambda h: (h.hl(34, 35, 22, 'k'), h.hl(40, 41, 22, 'k'), h.rect(34, 21, 35, 21, sk), h.rect(40, 21, 41, 21, sk)),
               arms=[([(30, 33), (26, 27), (27, 20)], 4, '1'), ([(46, 33), (51, 27), (50, 20)], 4, '1')],
               hands=[(25, 16, 'fist', False), (48, 16, 'fist', True)])

    c.paste(solo(lambda cc: sleeper(cc, 'd', 'D', 'n', 'H', False), dx=-17, dy=2))
    c.paste(solo(lambda cc: sleeper(cc, 'a', 'A', 'h', 'H', True), dx=4))

    def blanket(l):
        l.rect(14, 44, 63, 63, 'b'); l.poly([(14, 44), (63, 41), (63, 48), (14, 50)], 'B')
        l.hl(14, 63, 43, 'e'); l.hl(14, 63, 42, 'e')
    bg(c, blanket, 'B')

    def stand(l):                           # nightstand and alarm clock
        l.rect(0, 44, 12, 63, 'o'); l.hl(0, 12, 44, 'O'); l.rect(2, 50, 10, 55, 'O')
    bg(c, stand, 'O')
    ck = layer(); ck.ell(2, 35, 10, 43, 'm'); ck.ell(3, 36, 9, 42, 'e'); ck.vl(6, 37, 39, 'k'); ck.hl(6, 8, 39, 'k')
    ck.pts('m', [(2, 34), (10, 34)])
    outline_once(ck); c.paste(ck)
    return c.rows(), pal


PORTRAIT = ('purple.lateriser', draw)
