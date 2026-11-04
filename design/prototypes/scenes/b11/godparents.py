import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Godparents: at the christening, beaming, holding the baby in its white blanket."""
    c = C(N)
    pal = base_pal(p='#d9d2c4', P='#c9c1b1', o='#9a8a72', O='#7d6f5a', u='#8fb3d9', U='#6a90bb', y='#f2d27a',
                   m='#f4ede1', M='#c4bcae', h='#8a8580', H='#6b6661', n='#3a3f4a', N='#2b2f38', z='#2a2220',
                   a=PALE[0], A=PALE[1], **{'1': SILVER[0], '2': SILVER[1]})
    c.rect(0, 0, 63, 63, 'p')

    def chapel(l):                        # an arched window, the font, the floor
        l.rect(44, 8, 57, 30, 'o'); l.ell(44, 2, 57, 14, 'o'); l.rect(46, 9, 55, 29, 'u'); l.ell(46, 4, 55, 14, 'u')
        l.vl(50, 5, 29, 'o'); l.vl(51, 5, 29, 'o'); l.rect(46, 18, 55, 18, 'o')
        l.rect(4, 36, 13, 39, 'M'); l.rect(6, 40, 11, 52, 'M'); l.rect(3, 34, 14, 35, 'o')
        l.rect(0, 53, 63, 63, 'P'); l.hl(0, 63, 53, 'O')
    bg(c, chapel, None)
    DK = {'1': '2', 'm': 'M', 'n': 'N'}

    def baby(f):                          # the bundle in the arms: white blanket, a little face
        f.ell(22, 31, 41, 41, 'm'); f.ell(33, 33, 41, 41, 'M'); f.ell(24, 32, 30, 38, 'a'); f.px(26, 34, 'k'); f.px(28, 34, 'k')
        f.hl(26, 28, 36, 'A')
    fig(c, DK, 31, 9, 'a', 'A', hs='short', hk='h', hd='H', pose='hold', mouth='grin', brows='soft',
        legs=dict(pants='n', pdark='N', shoe='z', lh=8))
    def baby(l):                          # a small head, a bonnet, a long white gown hanging over the arms
        l.poly([(25, 32), (35, 32), (37, 46), (23, 46)], 'm'); l.poly([(31, 33), (35, 32), (37, 46), (33, 46)], 'M')
        l.ell(26, 26, 33, 33, 'a'); l.px(28, 29, 'k'); l.px(31, 29, 'k'); l.hl(29, 30, 31, 'A')
        l.ell(25, 24, 34, 29, 'm'); l.hl(25, 34, 29, 'M'); l.ell(27, 27, 32, 33, 'a'); l.px(28, 29, 'k'); l.px(31, 29, 'k')
    held(c, baby)
    hl = layer(); hand(hl, 21, 34, 'grip', 'a', 'A'); hand(hl, 36, 34, 'grip', 'a', 'A', True); outline_once(hl); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('silver.godparents', art)
