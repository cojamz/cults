import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Kidnappers: in a mask under the streetlamp, holding up the ransom note made of cut-out letters."""
    c = C(N)
    pal = base_pal(p='#2a2f45', P='#353b55', o='#4a4a5a', O='#3a3a48', y='#f7d774', Y='#d9b04a',
                   m='#f4ede1', M='#c4bcae', u=BLUE[0], g=GREEN[0], R=RED[0], n='#2b2a35', N='#1f1e28', z='#2a2220',
                   h='#2b1d18', H='#4a332a', a=LIGHT[0], A=LIGHT[1], **{'1': MAGENTA[0], '2': MAGENTA[1]})
    c.rect(0, 0, 63, 63, 'p')

    def street(l):                        # brick wall, the lamp: the only light
        l.rect(0, 14, 63, 50, 'P')
        for y in range(20, 50, 10):
            l.hl(0, 63, y, 'p')
        l.rect(54, 6, 55, 50, 'O'); l.rect(50, 3, 59, 6, 'O'); l.rect(52, 7, 57, 9, 'y')
        l.rect(0, 51, 63, 63, 'o'); l.hl(0, 63, 51, 'O')
    bg(c, street, None)
    DK = {'1': '2', 'n': 'N'}

    def mask(f):                          # a black eye mask across the face
        f.rect(23, 18, 40, 21, 'n'); f.rect(26, 19, 27, 20, 'k'); f.px(27, 19, 'w'); f.rect(34, 19, 35, 20, 'k'); f.px(35, 19, 'w')
    tops = fig(c, DK, 31, 12, 'a', 'A', hs='short', hk='h', hd='H', pose='hold', mouth='smirk', brows='stern',
               face=None, top=mask, legs=dict(pants='n', pdark='N', shoe='z', lh=7))
    rx, ry = tops['R']

    def note(l):                          # the ransom note: cut-out letters in every colour
        x, y = 23, 30
        l.rect(x, y, x + 16, y + 13, 'm'); l.hl(x, x + 16, y + 13, 'M')
        for row, y0 in enumerate((2, 6, 10)):                     # three lines of mismatched cut-out letters
            xx = x + 2
            for i, (w, k) in enumerate(((1, 'R'), (2, 'n'), (1, 'u'), (1, 'g'), (2, '1'), (1, 'n'))[row:row + 5]):
                l.rect(xx, y + y0 + (i % 2), xx + w, y + y0 + 1 + (i % 2), k); xx += w + 2
    held(c, note)
    hl = layer(); hand(hl, 21, 37, 'grip', 'a', 'A'); hand(hl, 37, 37, 'grip', 'a', 'A', True); outline_once(hl); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('thieves.kidnappers', art)
