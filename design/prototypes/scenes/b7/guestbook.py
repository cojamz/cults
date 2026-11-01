import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#8a5a4a', P='#7a4c3e', o='#c9a066', O='#9e7840', d='#5e3c26', D='#4a2e1c', b='#3a5a8a', B='#2c4670',
                   y='#f7d774', q='#d8d0c4', h='#2b1d18', H='#4a332a', a=DEEP[0], A=DEEP[1], **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 'p')

    def keys(l):                          # room keys on the board behind the desk
        l.rect(36, 6, 60, 24, 'D')
        for x in range(39, 59, 5):
            for y in (9, 17):
                l.rect(x, y, x + 1, y + 3, 'y')
    bg(c, keys, None)
    bg(c, lambda l: (l.rect(6, 6, 9, 9, 'y'), l.vl(7, 0, 5, 'O')), None)     # a lamp
    DK = {}
    fig(c, DK, 26, 12, 'a', 'A', hs='crop', hk='h', hd='H', pose='hold', mouth='smile', th=18,
        front=lambda f: f.poly([(23, 29), (29, 29), (26, 33)], 'w'))

    def desk(l):
        l.rect(0, 44, 63, 47, 'o'); l.rect(0, 48, 63, 63, 'd')
    bg(c, desk, None)

    def book(l):                          # the guest book open on the desk, a quill in its well
        l.poly([(14, 40), (31, 38), (31, 45), (14, 46)], 'w'); l.poly([(31, 38), (48, 40), (48, 46), (31, 45)], 'q')
        l.rect(30, 38, 31, 45, 'b')
        for y in (41, 43):
            l.hl(17, 27, y, 'B'); l.hl(35, 45, y, 'B')
        l.rect(51, 40, 55, 45, 'h'); l.line(53, 39, 58, 30, 'w'); l.line(54, 39, 59, 31, 'q')
    held(c, book)
    return c.rows(), pal


PORTRAIT = ('yellow.guestbook', art)
