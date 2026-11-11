import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *
from crowd import solo


def art():
    """Body Snatchers: two in red hoods sneaking off at night, one with the lantern, one with a sack and a pair of feet."""
    c = C(N)
    pal = base_pal(p='#2f3550', P='#3a4160', o='#5a4a3a', O='#46392c', y='#f7d774', Y='#d9a84a', m='#e8e2d6',
                   s='#c9a876', S='#a8885a', q='#a9c4e6', Q='#7f9cc4', n='#3a3644', N='#2c2934', z='#2a2220', h='#2a1d18', H='#4a332a',
                   a=OLIVE[0], A=OLIVE[1], b=MED[0], B=MED[1], **{'1': RED[0], '2': RED[1]})
    c.rect(0, 0, 63, 63, 'p')

    def night(l):                         # the moon, a house with one lit window, the lane
        l.ell(3, 3, 10, 10, 'm'); l.ell(6, 2, 11, 8, 'p')
        l.rect(0, 20, 14, 50, 'P')
        l.rect(0, 51, 63, 63, 'O'); l.hl(0, 63, 51, 'o')
    bg(c, night, None)
    DK = {'1': '2', 'n': 'N', 's': 'S'}
    lg = dict(pants='n', pdark='N', shoe='z', lh=7)

    def hood(cx, hy, size=16):
        def t(f):
            for i, y in enumerate(range(hy - 4, hy + 2)):          # a rounded crown, then the sides
                w = (size // 2 + 2) - max(0, 3 - i) * 2 + (0 if i else 1)
                f.hl(cx - w, cx + w - 1, y, '1')
            f.rect(cx - size // 2 - 2, hy, cx - size // 2, hy + size, '1')
            f.rect(cx + size // 2 - 1, hy, cx + size // 2 + 1, hy + size, '2')
        return t
    tl = {}

    def left(cc):                         # lantern up, leading the way
        tl.update(fig(cc, DK, 16, 13, 'a', 'A', hs=None, pose='raise', mouth='smirk', brows='stern', top=hood(16, 13),
                      legs=lg, th=16))
    c.paste(solo(left))

    def right(cc):
        fig(cc, DK, 36, 15, 'b', 'B', hs=None, pose='down', mouth='smirk', brows='stern', top=hood(36, 15),
            legs=lg, th=15)
    c.paste(solo(right))

    def sack(l):                          # a big sack slung over the shoulder, in front, two shoes poking out its neck
        l.ell(42, 22, 61, 42, 's'); l.ell(53, 26, 61, 42, 'S'); l.rect(47, 22, 54, 24, 'S')
        l.rect(48, 16, 50, 22, 'q'); l.rect(53, 15, 55, 22, 'q'); l.rect(46, 14, 50, 16, 'z'); l.rect(53, 13, 57, 15, 'z')
    held(c, sack)
    rx, ry = tl['R']
    held(c, lambda l: (l.rect(rx, ry - 9, rx + 4, ry - 3, 'y'), l.rect(rx, ry - 10, rx + 4, ry - 10, 'O'),
                       l.vl(rx + 2, ry - 2, ry, 'O')))
    hl = layer(); hand(hl, rx, ry, 'grip', 'a', 'A', True); outline_once(hl); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('red.bodysnatchers', art)
