candidates_to_remove = """
REMOVED: EmilyMarieBrewer
REMOVED: NikkiNRattrayBaldwin
REMOVED: DanicaARoem
REMOVED: JuanPabloSegura
REMOVED: SuhasSubramanyam
REMOVED: JessicaLAnderson
REMOVED: NBaxterEnnis
REMOVED: TimothyPGriffin
REMOVED: PaulVMildeIII
REMOVED: CandiPatriceMundonKing
REMOVED: BarryDKnight
REMOVED: TonyOWilt
REMOVED: MajorMikeWebb
REMOVED: IsraelDO'Quinn
REMOVED: MKeithHodges
REMOVED: SharonEAshurst
REMOVED: ThomasATomGarrettJr
REMOVED: LauraJaneHCohen
REMOVED: JamesWWillMorefield
"""

# go through final_candidates.csv and remove candidates from candidates_to_remove
import pandas as pd  

df = pd.read_csv('final_candidates.csv')
df = df[~df['fec_name'].isin(candidates_to_remove.split())]
df.to_csv('final_candidates.csv', index=False)