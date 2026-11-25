import re,importlib,os
from kit import *
from textsheet import tsheet
OUT='/mnt/project-files/member-art-all/'
os.makedirs(OUT,exist_ok=True)
def cards(f):
    d={}; grey='grey' in f
    for l in open(f):
        m=re.match(r'\s*· (.+?) \[(.+?)\] (.*)',l)
        if m: d[m.group(1)]=m.group(3)+('' if grey else ' Costs '+m.group(2).split(', worth')[0]+'.' )
    return d
def red():
    import v2,v3,v4,bannermen
    return [('Tavern Keeper',v2.tavern()),('Fairy Godmother',v2.godmother()),('Pied Piper',v2.piper()),('Ferryman',v3.ferryman()),('Warden',v3.warden()),('Governess',v3.governess()),('Guild Master',v4.guildmaster()),('Journeyman',v4.journeyman()),('Swindler',v4.swindler()),('Abbess',v4.abbess()),('Dyer',v4.dyer()),('Bannermen',bannermen.bannermen()),('Clan Chief',v4.clanchief())]
SETS=[('1-red',red,'red'),('2-magenta',lambda:importlib.import_module('mag').ALL(),'thieves'),('3-yellow',lambda:importlib.import_module('yel').ALL(),'yellow'),
 ('4-blue',lambda:importlib.import_module('blu').ALL(),'market'),('5-purple',lambda:importlib.import_module('pur').ALL(),'purple'),
 ('7-silver',lambda:importlib.import_module('sil').ALL(),'silver'),('8-white',lambda:importlib.import_module('whi').ALL(),'trading'),('9-green',lambda:importlib.import_module('grn').ALL(),'echo'),('10-grey',lambda:importlib.import_module('gry').ALL(),'grey')]
for name,fn,cf in SETS:
    figs=fn(); txt=cards('cards-%s.txt'%cf)
    missing=[n for n,_ in figs if n not in txt]
    for n in missing: txt[n]=''
    tsheet(figs,txt,OUT+name+'.png',cols=6 if len(figs)>12 else 5)
    print(name,len(figs),'missing text:',missing)
