# assist in labeling the privacy policies 
import os

# go through canddiates and make text files
for candidate in os.listdir('../privacy_policies/House'):
    with open(f'policy_text/House/{candidate.replace(".html", ".txt")}', 'w') as f:
        pass
for candidate in os.listdir('../privacy_policies/Senate'):
    with open(f'policy_text/Senate/{candidate.replace(".html", ".txt")}', 'w') as f:
        pass