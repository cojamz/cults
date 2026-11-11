import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Social Climbers: dressed up in silver, top hat on, climbing the grand staircase to the lit ballroom door."""
    c = C(N)
    pal = base_pal(p='#5d4a6e', P='#4d3c5d', s='#d9cdb8', S='#b8aa92', R='#b04a4a', r='#8a3636', y='#f7d774',
                   Y='#d9b04a', l='#f7e3a0', o='#8a6a4c', O='#6e5238', n='#2b2a35', N='#1f1e28', z='#2a2220', h='#2b1d18', H='#4a332a',
                   a=OLIVE[0], A=OLIVE[1], **{'1': SILVER[0], '2': SILVER[1]})
    c.rect(0, 0, 63, 63, 'p')

    def ballroom(l):                      # the lit doorway at the top of the stairs, a little chandelier glow inside
        l.rect(45, 0, 63, 22, 'O'); l.rect(48, 2, 63, 22, 'l'); l.ell(51, 4, 60, 9, 'y'); l.hl(52, 59, 9, 'Y')
    bg(c, ballroom, None)

    def stairs(l):                        # broad marble steps rising to the right, a red runner up the middle
        for i in range(7):
            x0, y = i * 8 - 4, 63 - i * 6
            l.rect(x0, y - 5, 63, y, 's'); l.hl(x0, 63, y - 5, 'S')
        for i in range(7):
            x0, y = i * 8 - 4, 63 - i * 6
            l.rect(x0 + 2, y - 4, x0 + 9, y, 'R'); l.hl(x0 + 2, x0 + 9, y - 4, 'r')
    bg(c, stairs, None)
    DK = {'1': '2', 'n': 'N'}

    def tophat(f):
        f.rect(18, 13, 26, 20, 'n'); f.hl(15, 29, 21, 'N'); f.rect(18, 19, 26, 19, '1')
    fig(c, DK, 22, 21, 'a', 'A', hs=None, pose='point', size=14, mouth='grin', brows='soft', top=tophat, th=12, sw=6,
        legs=dict(pants='n', pdark='N', shoe='z', lh=7, stance=2))
    return c.rows(), pal


PORTRAIT = ('silver.socialclimbers', art)
