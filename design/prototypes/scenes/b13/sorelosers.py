import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Sore Losers: game night, lost again, flipping the board; the pieces fly."""
    c = C(N)
    pal = base_pal(p='#d6c9ae', P='#c4b697', o='#8a6a4c', O='#6e5238', d='#e8dcc0', D='#bba98a', R=RED[0], r='#8a2f2f', u=BLUE[0],
                   g=GREEN[0], y='#f1c63e', v='#8f5ccf', n='#3a3f4a', N='#2b2f38', z='#2a2220', h='#c98a4a', H='#a86a32',
                   a=LIGHT[0], A=LIGHT[1], **{'1': GREY[0], '2': GREY[1]})
    c.rect(0, 0, 63, 63, 'p')

    def room(l):                          # a lamp on the wall, the table edge
        l.rect(50, 6, 55, 10, 'y'); l.rect(52, 11, 53, 13, 'O')
        l.rect(0, 48, 63, 51, 'o'); l.rect(0, 52, 63, 63, 'O')
    bg(c, room, None)
    DK = {'1': '2', 'd': 'D'}
    fig(c, DK, 22, 12, 'a', 'A', hs='short', hk='h', hd='H', pose='raise', mouth='frown', brows='angry', legs=None, th=18)

    def board(l):                         # the game board flipping up off the table: a track of coloured squares round its face
        l.poly([(30, 30), (52, 22), (58, 38), (36, 46)], 'd'); l.poly([(36, 46), (58, 38), (59, 41), (37, 49)], 'D')
        ks = 'Rugyv'
        for i in range(6):                # top and bottom rows of the track
            x, y = 33 + i * 3.4, 31 - i * 1.25
            l.rect(int(x), int(y), int(x) + 1, int(y) + 1, ks[i % 5])
            l.rect(int(x) + 5, int(y) + 12, int(x) + 6, int(y) + 13, ks[(i + 2) % 5])
    held(c, board)
    for x, y, k in ((40, 14, 'R'), (47, 10, 'u'), (55, 16, 'g'), (35, 20, 'y'), (60, 24, 'v'), (44, 4, 'g'), (30, 8, 'R')):
        held(c, lambda l, x=x, y=y, k=k: l.rect(x, y, x + 2, y + 2, k))    # the flying pieces
    return c.rows(), pal


PORTRAIT = ('benders.sorelosers', art)
