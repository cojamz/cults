import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(s='#cfe2e6', S='#bfd6db', g='#8fb877', G='#7aa565', t='#6d8f5a', T='#5a7a4a',
                   o='#9a6a44', O='#74502f', m='#9aa4ad', M='#6f7880', R=RED[0], u=BLUE[0], v=PURPLE[0], y='#f7d774',
                   h='#3a2a20', H='#24180f', n='#5a4a3e', N='#463a30', z='#2a2220',
                   a=OLIVE[0], A=OLIVE[1], **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 's'); floor(c, 40, 'g'); c.rect(0, 54, 63, 63, 'G')
    bg(c, lambda l: (l.ell(-8, 14, 16, 42, 't'), l.ell(48, 10, 72, 42, 't')), 'T')

    def beds(l):                          # flower bed, one bloom of every colour
        l.rect(0, 50, 63, 55, 'O')
        for i, (x, k) in enumerate(((4, 'R'), (12, 'u'), (20, 'v'), (44, 'y'), (52, 'R'), (59, 'u'))):
            l.vl(x + 1, 45, 50, 'T'); l.rect(x, 42, x + 2, 44, k)
    bg(c, beds, None)
    DK = {'n': 'N'}

    def hat(f):                           # sun hat
        f.ell(21, 9, 42, 15, 'y'); f.ell(26, 4, 37, 12, 'y'); f.hl(26, 37, 11, 'o')
    fig(c, DK, 32, 9, 'a', 'A', hs='short', hk='h', hd='H', pose='hold', top=hat,
        legs=dict(pants='n', pdark='N', shoe='z', lh=8))
    def can(l):                           # watering can, spout tipped at the bed
        l.rect(25, 36, 36, 45, 'm'); l.rect(33, 36, 36, 45, 'M')
        l.line(36, 39, 44, 33, 'm'); l.line(36, 40, 44, 34, 'M'); l.rect(44, 31, 46, 33, 'm')
        l.ring(27, 31, 33, 37, 'M')
    held(c, can)
    c.pts('u', [(47, 36), (48, 39), (46, 40), (49, 42)])     # water drops
    return c.rows(), pal


PORTRAIT = ('yellow.gardener', art)
