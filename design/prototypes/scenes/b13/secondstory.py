import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Second-Story Men: climbing in at an upstairs window by night, a swag bag over the shoulder."""
    c = C(N)
    pal = base_pal(p='#262b44', P='#30365a', b='#7a5a5a', B='#674a4a', w='#e8e2d6', l='#f7e3a0', L='#e0c87a',
                   o='#8a6a4c', O='#6e5238', s='#c9a876', S='#a8885a', n='#2b2a35', N='#1f1e28', z='#2a2220',
                   h='#2b1d18', H='#4a332a', m='#f4ede1', a=OLIVE[0], A=OLIVE[1], **{'1': MAGENTA[0], '2': MAGENTA[1]})
    c.rect(0, 0, 63, 63, 'p')

    def house(l):                         # brick wall, an upstairs window wide open, a drainpipe
        l.rect(0, 0, 63, 63, 'b')
        for y in range(6, 63, 8):
            l.hl(0, 63, y, 'B')
        l.rect(14, 20, 50, 56, 'O'); l.rect(16, 22, 48, 54, 'P')      # the dark room inside
        l.rect(12, 55, 52, 58, 'o')                                     # the sill
        l.rect(56, 0, 58, 63, 'n')
        l.ell(4, 2, 10, 8, 'w')                                         # a sliver of moon
    bg(c, house, None)
    DK = {'1': '2', 'n': 'N', 's': 'S'}

    def beanie(f):
        f.rect(24, 21, 39, 26, '1'); f.hl(23, 40, 27, '2'); f.rect(30, 19, 33, 20, '1')

    def mask(f):
        f.rect(23, 30, 40, 33, 'n'); f.rect(26, 31, 27, 32, 'k'); f.px(27, 31, 'w'); f.rect(35, 31, 36, 32, 'k'); f.px(36, 31, 'w')

    def stripes(f):                       # the striped jumper
        for y in range(43, 56, 4):
            f.hl(22, 41, y, 'n')
    tops = fig(c, DK, 31, 24, 'a', 'A', hs=None, pose='hold', mouth='smirk', brows='stern', top=lambda f: (beanie(f), mask(f)),
               front=stripes, legs=None, th=16)
    held(c, lambda l: (l.ell(39, 32, 55, 52, 's'), l.ell(48, 36, 55, 52, 'S'), l.poly([(43, 33), (50, 33), (48, 28), (45, 28)], 's'),
                       l.hl(44, 49, 32, 'S'), l.rect(46, 22, 49, 26, 'l'), l.rect(47, 27, 48, 28, 'L')))   # the swag bag, a gold cup poking out
    c.rect(12, 55, 52, 58, 'o'); c.hl(12, 52, 58, 'O')            # the sill in front of him
    return c.rows(), pal


PORTRAIT = ('thieves.secondstory', art)
