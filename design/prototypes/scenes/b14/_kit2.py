"""Batch 9 (Nov 3): copy of batch 7's kit, for the renamed members' new scenes. One-call figures with set poses on top of the batch-6 kit,
so each scene is a background, a figure or two, and the prop that names the role."""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.dirname(HERE))
import importlib.util as _u
_spec = _u.spec_from_file_location('kit_b6', os.path.join(os.path.dirname(HERE), 'b6', '_kit2.py'))
_b6 = _u.module_from_spec(_spec); _spec.loader.exec_module(_b6)
globals().update({k: v for k, v in vars(_b6).items() if not k.startswith('__')})   # person, base_pal, bg, glasses...
from crowd import solo, shift, flip, rekey

RED = ('#d9534a', '#a83a35')
BLUE = ('#5b97cf', '#3d70a6')
GREEN = ('#5fa05a', '#3f7a42')
GREY = ('#a9aeac', '#7d8381')
PURPLE = ('#8f5ccf', '#6b3fa6')
MAGENTA = ('#d4508f', '#a23a6c')
WHITEC = ('#e8e2d6', '#c4bcae')


def fig(c, DK, cx, hy, skin, shade, hs='short', hk='h', hd='H', pose='hold', size=16, mouth='smile', brows='soft',
        side='L', cloth='1', cdark='2', legs=None, th=None, face=None, front=None, top=None, props=None, after=None, sw=None):
    """A figure centred on cx with its head top at hy. pose: hold (both hands at the chest), raise (right hand up),
    wave (right hand open, up), down (arms at the sides), point (right arm out level), hips (fists on hips).
    Returns the hand spots: {'L': (x, y), 'R': (x, y)} (top-left of each hand)."""
    ty = hy + size + 1
    th = th or (16 if size == 16 else 14)
    sw = sw or (8 if size == 16 else 7)
    ww = sw - 1
    sl, sr = (cx - sw, ty + 3), (cx + sw, ty + 3)
    if pose == 'hold':
        arms = [[sl, (cx - sw - 2, ty + 9), (cx - 4, ty + 12)], [sr, (cx + sw + 2, ty + 9), (cx + 4, ty + 12)]]
        hands = [(cx - 6, ty + 10, 'grip', False), (cx + 2, ty + 10, 'grip', True)]
    elif pose in ('raise', 'wave'):
        arms = [[sl, (cx - sw - 2, ty + 9), (cx - sw - 1, ty + 14)], [sr, (cx + sw + 5, ty), (cx + sw + 4, ty - 7)]]
        hands = [(cx - sw - 3, ty + 13, 'fist', False), (cx + sw + 2, ty - 10, 'grip' if pose == 'raise' else 'flat', True)]
    elif pose == 'point':
        arms = [[sl, (cx - sw - 2, ty + 9), (cx - sw - 1, ty + 14)], [sr, (cx + sw + 5, ty + 6), (cx + sw + 10, ty + 5)]]
        hands = [(cx - sw - 3, ty + 13, 'fist', False), (cx + sw + 10, ty + 3, 'thumb', True)]
    elif pose == 'hips':
        arms = [[sl, (cx - sw - 4, ty + 7), (cx - sw + 1, ty + 11)], [sr, (cx + sw + 4, ty + 7), (cx + sw - 1, ty + 11)]]
        hands = [(cx - sw, ty + 10, 'fist', False), (cx + sw - 3, ty + 10, 'fist', True)]
    else:  # down
        arms = [[sl, (cx - sw - 2, ty + 8), (cx - sw - 1, ty + 13)], [sr, (cx + sw + 2, ty + 8), (cx + sw + 1, ty + 13)]]
        hands = [(cx - sw - 3, ty + 12, 'fist', False), (cx + sw - 1, ty + 12, 'fist', True)]
    dk = dict(DK); dk.setdefault(skin, shade); dk.setdefault(cloth, cdark); dk.setdefault(hk, hd)
    person(c, dk, hx=cx - size // 2, hy=hy, size=size, skin=skin, shade=shade, mouth=mouth, brows=brows, brow=hd,
           hs=hs, hk=hk, hd=hd, side=side, cloth=cloth, cdark=cdark, cx=cx, sw=sw, ww=ww, th=th,
           lg=legs, arms=[(a, 3) for a in arms], hands=hands, face=face, front=front, top=top, props=props, after=after)
    return {'L': hands[0][:2], 'R': hands[1][:2]}


def held(c, fn):
    """A prop with its own ink outline, pasted over everything."""
    l = layer(); fn(l); outline_once(l); c.paste(l)


def floor(c, y, k, kd=None):
    c.rect(0, y, 63, 63, k)
    if kd:
        c.hl(0, 63, y, kd)
