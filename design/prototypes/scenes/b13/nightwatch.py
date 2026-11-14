import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *
from crowd import solo


def art():
    """Night Watch: two watchmen on the late round, lantern up, under the town clock near midnight."""
    c = C(N)
    pal = base_pal(p='#262b44', P='#30365a', b='#4a4f6e', B='#3d4160', m='#e8e2d6', M='#b8b2a4', y='#f7d774',
                   Y='#d9a84a', o='#8a6a4c', O='#6e5238', n='#2b2a35', N='#1f1e28', z='#2a2220', h='#2b1d18',
                   H='#4a332a', a=MED[0], A=MED[1], q=PALE[0], Q=PALE[1], **{'1': PURPLE[0], '2': PURPLE[1]})
    c.rect(0, 0, 63, 63, 'p')

    def town(l):                          # the clock tower behind, the clock at five to twelve, the cobbles
        l.rect(22, 0, 42, 40, 'b'); l.vl(42, 0, 40, 'B')
        l.ell(25, 3, 39, 17, 'm'); l.ell(32, 5, 39, 17, 'M')
        l.vl(32, 5, 10, 'n'); l.line(32, 10, 30, 6, 'n')          # both hands near the 12
        l.rect(0, 52, 63, 63, 'B'); l.hl(0, 63, 52, 'b')
    bg(c, town, None)
    DK = {'1': '2', 'n': 'N'}
    lg = dict(pants='n', pdark='N', shoe='z', lh=7)

    def cap(cx, hy):                      # a peaked watchman's cap
        return lambda f: (f.rect(cx - 7, hy - 2, cx + 6, hy + 2, '2'), f.hl(cx - 8, cx + 9, hy + 3, 'N'))
    tl = {}

    def left(cc):                         # lantern held high
        tl.update(fig(cc, DK, 16, 22, 'q', 'Q', hs=None, pose='raise', mouth='flat', brows='stern', top=cap(16, 22),
                      legs=lg, th=15))
    c.paste(solo(left))

    tr = {}

    def right(cc):                        # the other, staff in the outer hand
        tr.update(fig(cc, DK, 45, 21, 'a', 'A', hs=None, pose='raise', mouth='smile', brows='soft', top=cap(45, 21), legs=lg, th=16))
    c.paste(solo(right))
    sx, sy = tr['R']
    c.vl(sx + 1, 6, 51, 'o'); c.vl(sx + 2, 6, 51, 'O')          # the staff: a 2px pole, no ink
    hl = layer(); hand(hl, sx, sy, 'grip', 'a', 'A', True); outline_once(hl); c.paste(hl)
    rx, ry = tl['R']
    held(c, lambda l: (l.rect(rx, ry - 8, rx + 4, ry - 2, 'y'), l.rect(rx - 1, ry - 9, rx + 5, ry - 9, 'O'),
                       l.rect(rx + 1, ry - 6, rx + 3, ry - 4, 'Y')))
    hl = layer(); hand(hl, rx, ry, 'grip', 'q', 'Q', True); outline_once(hl); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('purple.nightwatch', art)
