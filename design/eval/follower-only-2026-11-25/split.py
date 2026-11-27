import json,sys,glob,statistics as st
for pat in sys.argv[1:]:
  rows=[json.loads(l) for f in glob.glob(pat) for l in open(f)]
  B=[r for r in rows if r.get('seats')==4 and r['buyer']>=0]
  def wr(rs): return '%d/%d=%.0f%%'%(sum(r['players'][r['buyer']]['win'] for r in rs),len(rs),100*sum(r['players'][r['buyer']]['win'] for r in rs)/max(1,len(rs)))
  w=[r for r in B if 'trading' in r['table']]; nw=[r for r in B if 'trading' not in r['table']]
  got=[len(r['players'][r['buyer']].get('gotRound',{})) for r in B]; end=[r['players'][r['buyer']].get('memberCount',len(r['players'][r['buyer']]['members'])) for r in B]
  # white contest wins, rounds where white dealt
  wins=tot=0; nwins=ntot=0
  for r in w:
    for c in r['contests']:
      if 'trading' in c:
        tot+=1; wins+= r['buyer'] in c['trading']
        for s in range(4):
          if s!=r['buyer']: ntot+=1; nwins+= s in c['trading']
  print(pat,'| all',wr(B),'| White dealt',wr(w),'| no White',wr(nw),'| buyer got any member: %d/%d games, avg got %.1f, avg end %.1f, ended 0: %d'%(sum(g>0 for g in got),len(B),st.mean(got),st.mean(end),sum(e==0 for e in end)),'| White contest share buyer %.0f%% others %.0f%% (ties count)'%(100*wins/max(1,tot),100*nwins/max(1,ntot)))
