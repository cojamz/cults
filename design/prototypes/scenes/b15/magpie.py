import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Magpie: up in the attic, dressed in black and white like the bird on their shoulder, hugging a nest of shiny
    white treasures. The bird has found one more."""
    c = C(N)
    pal = base_pal(p='#cfc6b8', P='#bfb5a5', f='#9a8468', F='#86704f', l='#f6e7b0', L='#d9c486',
                   o='#8a6a42', O='#6a4c2a', m='#dcd6cc', M='#b9b2a6', b='#26262e', u='#3d70a6', U='#2e5684',
                   n='#5a6070', N='#454a58', z='#2a2220', h='#2b1d18', H='#4a332a',
                   a=MED[0], A=MED[1], **{'1': WHITEC[0], '2': WHITEC[1]})
    c.rect(0, 0, 63, 63, 'p')

    def attic(l):                         # sloped roof beam, a round window, the boards
        l.line(0, 18, 18, 0, 'P'); l.line(0, 19, 19, 0, 'P'); l.line(0, 20, 20, 0, 'P')
        l.ell(46, 6, 57, 17, 'P'); l.ell(48, 8, 55, 15, 'l'); l.vl(51, 8, 15, 'L')
        l.rect(0, 53, 63, 63, 'f'); l.hl(0, 63, 53, 'F')
    bg(c, attic, None)
    DK = {'1': '2', 'n': 'N'}

    def shirt(f):                         # a white shirt front down the black coat
        f.rect(26, 30, 29, 46, '1'); f.vl(29, 32, 46, '2')
    fig(c, DK, 28, 12, 'a', 'A', hs='bun', hk='h', hd='H', pose='hold', mouth='smirk', brows='soft', side='R',
        cloth='n', cdark='N', front=shirt, legs=dict(pants='n', pdark='N', shoe='z', lh=6))

    def nest(l):                          # a twig nest heaped with white stones
        l.ell(17, 39, 39, 47, 'o'); l.hl(19, 37, 45, 'O'); l.hl(21, 35, 47, 'O')
        for x in (20, 25, 31, 35):
            l.px(x, 43, 'O'); l.px(x + 1, 42, 'O')
        l.ell(20, 35, 38, 41, 'M')
        for x, y in ((20, 37), (24, 35), (28, 34), (32, 35), (35, 37), (22, 39), (26, 38), (30, 38), (33, 39)):
            l.rect(x, y, x + 3, y + 2, 'm'); l.px(x + 1, y, 'w'); l.px(x + 2, y, 'w'); l.hl(x + 1, x + 3, y + 2, 'M')
    held(c, nest)
    hl = layer(); hand(hl, 15, 39, 'grip', 'a', 'A'); hand(hl, 38, 39, 'grip', 'a', 'A', True); c.paste(hl)

    def bird(l):                          # the magpie on the nest's rim: black head, white belly, blue wing, long tail
        l.rect(40, 25, 44, 29, 'b'); l.px(40, 25, '.'); l.px(44, 25, '.')
        l.rect(40, 29, 47, 35, 'b'); l.rect(40, 30, 42, 34, 'w')
        l.rect(44, 30, 47, 33, 'u'); l.hl(44, 47, 33, 'U')
        l.line(47, 33, 53, 39, 'b'); l.line(48, 33, 54, 39, 'b'); l.line(48, 32, 54, 38, 'U')    # the long tail
        l.rect(37, 27, 39, 27, 'b')                      # beak, pointed at the heap
        l.px(41, 26, 'w')                                 # eye glint
        l.ring(34, 26, 37, 29, 'l'); l.px(37, 29, 'L')    # one more shiny ring for the pile
        l.rect(41, 36, 41, 39, 'O'); l.rect(44, 36, 44, 40, 'O')    # legs on the rim
    held(c, bird)
    return c.rows(), pal


PORTRAIT = ('trading.hoarder', art)
