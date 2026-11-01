import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def changer():
    c = C(N)
    pal = {'k': INK, 'w': WHITE[0], 'W': WHITE[1],
           'p': '#c9b48e', 'P': '#b9a37c', 'b': '#3a4252', 'B': '#4a5366', 'r': '#d06a5a', 'g': '#7fb08a',
           'u': '#7fa6d0', 'o': '#8a5434', 'O': '#6a3d25', 'y': '#f2d27a', 'Y': '#c9a24a',
           's': '#d4d8dc', 'S': '#9aa1a8', 'm': '#a8693f', 'M': '#86512f', 'H': '#8e8a86', 'h': '#6a6662',
           'z': '#4a3c34', 'q': '#2f3640', 'a': OLIVE[0], 'A': OLIVE[1], '1': '#e8e2d2', '2': '#c9c0ac', 'G': '#5a8a66'}
    c.rect(0, 0, 63, 63, 'p'); c.rect(0, 0, 63, 6, 'P')

    def board(l):
        l.rect(36, 9, 61, 33, 'b')
        for i, (y, k) in enumerate(((12, 'r'), (18, 'g'), (24, 'u'))):
            l.rect(39, y, 43, y + 3, k)
            l.hl(46, 58, y + 1, 'B'); l.hl(46, 52, y + 2, 'B')
        l.hl(39, 58, 29, 'B')
    bg(c, board, None)
    # the partner behind the scale, holding up a note to check it
    person(c, {'w': 'W', 'm': 'M', 'y': 'Y', 's': 'S', 'q': 'q', 'a': 'A', '1': '2'}, 39, 14, ('a', 'A'), 'bun', 'z', 'q', mouth='smile', brows='soft', brow='z', cloth='w', cdark='W',
           sw=7, ww=7, th=17, nolegs=True, side='R',
           arms=[([(39, 32), (36, 37), (38, 42)], 3, 'w'), ([(53, 32), (57, 28), (56, 22)], 3, 'w')],
           hands=[(37, 41, 'flat', False), (54, 19, 'grip', True)])
    nt = layer(); nt.rect(52, 13, 60, 18, 'g'); nt.rect(55, 15, 56, 16, 'q'); outline_once(nt); c.paste(nt)

    def counter(l):
        l.rect(0, 46, 63, 63, 'o'); l.hl(0, 63, 46, 'O'); l.hl(0, 63, 47, 'O')
    bg(c, counter, None)

    def scale(l):                                    # a small balance scale, a coin weighed in one pan
        l.rect(44, 43, 51, 45, 'Y'); l.rect(47, 33, 48, 42, 'Y'); l.vl(47, 33, 42, 'y')
        l.line(40, 35, 55, 33, 'Y'); l.line(40, 36, 55, 34, 'y')
        l.vl(41, 36, 39, 'S'); l.vl(54, 34, 37, 'S')
        l.hl(38, 44, 40, 'Y'); l.hl(39, 43, 41, 'Y')
        l.hl(51, 57, 38, 'Y'); l.hl(52, 56, 39, 'Y')
        l.stamp(52, 35, ['.yy.', 'yyyY', '.YY.'][:0] or ['.yyy.', 'yyyyY'])
    bg(c, scale, None)
    DK = {'w': 'W', 'm': 'M', 'y': 'Y', 's': 'S', 'q': 'q'}

    def vest(f):
        f.poly([(15, 30), (19, 29), (20, 46), (11, 46)], 'q'); f.poly([(29, 29), (33, 30), (36, 46), (27, 46)], 'q')

    def glasses(f):
        f.ring(15, 19, 19, 23, 'S'); f.ring(21, 19, 25, 23, 'S'); f.px(20, 20, 'S')

    def stack(f):                                    # the coin stack being counted, solid, no banding
        f.rect(19, 38, 25, 45, 'y'); f.rect(23, 39, 25, 45, 'Y'); f.hl(19, 25, 38, 'Y')
    person(c, DK, 15, 13, ('m', 'M'), 'crop', 'H', 'h', mouth='smile', brows='soft', brow='h', cloth='w', cdark='W',
           sw=8, ww=9, th=18, nolegs=True, front=vest, top=glasses,
           arms=[([(15, 31), (12, 37), (15, 41)], 3, 'w'), ([(30, 31), (32, 37), (29, 41)], 3, 'w')],
           hands=[(14, 40, 'flat', False), (26, 40, 'flat', True)])
    st = layer(); stack(st); outline_once(st)
    for y in range(64):
        for x in range(64):
            if st.get(x, y) not in '.k':
                c.px(x, y, st.get(x, y))
    return c.rows(), pal


PORTRAIT = ('trading.changer', changer)
