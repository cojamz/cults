import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Meddler: at someone else's dye stall, tipping red into their blue pot while nobody's looking."""
    c = C(N)
    pal = base_pal(p='#e6d9bd', P='#d6c8aa', o='#9a7650', O='#7a5a3a', s='#c9b48e', S='#b39e78',
                   R=RED[0], r=RED[1], u=BLUE[0], U=BLUE[1], v='#8f5ccf', g=GREEN[0], G=GREEN[1],
                   h='#2b1d18', H='#4a332a', a=DEEP[0], A=DEEP[1], **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 'p')

    def awning(l):                       # the stall's awning, two flat stripes
        for x in range(0, 64, 10):
            l.rect(x, 0, x + 4, 5, 'S')
        l.hl(0, 63, 6, 'S')
    bg(c, awning, None)

    def shelf(l):                        # someone else's shelf of dye pots, in the back
        l.rect(2, 18, 17, 19, 'o')
        for x, k in ((3, 'g'), (8, 'R'), (13, 'u')):
            l.rect(x, 13, x + 3, 17, k)
        l.rect(46, 18, 61, 19, 'o')
        for x, k in ((47, '1'), (52, 'v'), (57, 'g')):
            l.rect(x, 13, x + 3, 17, k)
    bg(c, shelf, 'O')
    DK = {'1': '2', 'R': 'r', 'u': 'U'}

    tops = fig(c, DK, 22, 6, 'a', 'A', hs='crop', hk='h', hd='H', pose='point', mouth='smirk', brows='stern',
               legs=None, th=20)
    rx, ry = tops['R']

    def counter(l):
        l.rect(0, 44, 63, 47, 'o'); l.rect(0, 48, 63, 63, 'O')
    bg(c, counter, None)
    # the rival's round blue pot on the counter, its top already going purple
    held(c, lambda l: (l.ell(41, 35, 59, 47, 'u'), l.ell(52, 37, 58, 46, 'U'), l.rect(43, 34, 57, 36, 'U'),
                       l.rect(45, 35, 55, 36, 'v')))
    # the red jar, tipped over it: body up by the hand, mouth down to the right
    def cup(l):                           # a round red jug tipped forward: handle up by the hand, spout down to the pot
        l.ell(rx - 1, ry - 7, rx + 8, ry + 1, 'R'); l.ell(rx + 3, ry - 5, rx + 8, ry + 1, 'r')
        l.ring(rx - 4, ry - 6, rx, ry - 2, 'r')
        l.poly([(rx + 6, ry - 1), (rx + 9, ry - 2), (rx + 11, ry + 2), (rx + 8, ry + 2)], 'R')
    held(c, cup)
    c.vl(rx + 10, ry + 3, 35, 'R'); c.vl(rx + 11, ry + 3, 35, 'r'); c.rect(rx + 6, 35, rx + 13, 36, 'R')         # the thin pour, no ink
    hl = layer(); hand(hl, rx, ry, 'grip', 'a', 'A', True); outline_once(hl); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('yellow.ringleader', art)
