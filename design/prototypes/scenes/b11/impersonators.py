import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Impersonators: on stage, holding up someone else's face on a stick, doing their voice."""
    c = C(N)
    pal = base_pal(p='#3a2f45', P='#2f263a', R='#b04a4a', r='#8a3636', o='#8a6a4c', O='#6e5238', y='#f7d774', 
                   q=PALE[0], Q=PALE[1], h='#2b1d18', H='#4a332a', g='#c8c4bc', n='#2b2a35', N='#1f1e28', z='#2a2220',
                   a=DEEP[0], A=DEEP[1], **{'1': GREEN[0], '2': GREEN[1]})
    c.rect(0, 0, 63, 63, 'p')

    def stage(l):                         # red curtains at the sides, a spotlight on the boards
        l.rect(0, 0, 8, 50, 'R'); l.vl(4, 0, 50, 'r'); l.rect(55, 0, 63, 50, 'R'); l.vl(59, 0, 50, 'r')
        l.rect(0, 0, 63, 3, 'r')
        l.rect(0, 51, 63, 63, 'O'); l.hl(0, 63, 51, 'o'); 
    bg(c, stage, None)
    DK = {'1': '2', 'n': 'N'}
    tops = fig(c, DK, 24, 16, 'a', 'A', hs='crop', hk='h', hd='H', pose='raise', mouth='grin', brows='soft',
               legs=dict(pants='n', pdark='N', shoe='z', lh=6))
    rx, ry = tops['R']
    c.vl(rx + 1, ry - 2, ry + 4, 'o'); c.vl(rx + 2, ry - 2, ry + 4, 'O')       # the stick, no ink

    def mask(l):                          # someone else's face: pale, big moustache, side parting
        x, y = rx - 4, ry - 16
        l.ell(x, y, x + 11, y + 13, 'a'); l.ell(x + 7, y + 2, x + 11, y + 13, 'A')
        l.rect(x, y, x + 11, y + 2, 'g'); l.rect(x, y + 3, x + 2, y + 4, 'g')
        l.rect(x + 2, y + 3, x + 5, y + 4, 'g'); l.rect(x + 6, y + 3, x + 9, y + 4, 'g'); l.rect(x + 3, y + 5, x + 4, y + 6, 'k'); l.rect(x + 7, y + 5, x + 8, y + 6, 'k')
        l.rect(x + 2, y + 9, x + 9, y + 10, 'g'); l.px(x + 1, y + 10, 'g'); l.px(x + 10, y + 10, 'g')
    held(c, mask)
    hl = layer(); hand(hl, rx, ry, 'grip', 'a', 'A', True); outline_once(hl); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('echo.impersonators', art)
