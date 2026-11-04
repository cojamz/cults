"""Helpers for scenes with more than one person (Nov 1: members that count as 2-3 show that many people).
Draw a figure on its own blank canvas, then shift, flip or re-key it before pasting into the scene."""
from lib import C


def shift(l, dx=0, dy=0):
    o = C(l.w, l.h)
    for y in range(l.h):
        for x in range(l.w):
            v = l.g[y][x]
            if v != '.':
                o.px(x + dx, y + dy, v)
    return o


def flip(l):
    o = C(l.w, l.h)
    for y in range(l.h):
        o.g[y] = l.g[y][::-1]
    return o


def rekey(l, m):
    for y in range(l.h):
        for x in range(l.w):
            v = l.g[y][x]
            if v in m:
                l.g[y][x] = m[v]
    return l


def solo(fn, dx=0, dy=0, keys=None, mirror=False):
    """Run fn(canvas) on a blank canvas and return it moved (and re-keyed / mirrored)."""
    l = C(64)
    fn(l)
    if keys:
        rekey(l, keys)
    if mirror:
        l = flip(l)
    return shift(l, dx, dy)
