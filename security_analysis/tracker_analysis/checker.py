# go through outbound links for candidates and flag potential trackers
import re 
import json
import time

# read data from easyprivacy.txt
trackers = set()
with open("easyprivacy.txt", "r") as f:
    for line in f:
        if not line.startswith("!"):
            trackers.add(line.strip())

# gather all outbound and site links
all_candidates = set()
with open('../../active_html/results/link_extractor_result.json', 'r') as f:
    data = json.load(f)
    # go through links
    for candidate in data:
        # add website
        all_candidates.add(candidate)

# get outbound links
outbound_links = set()
candidate_mapping  = {candidate: [] for candidate in all_candidates}
for candidate in all_candidates:
    # get candidate data
    for link in data[candidate]['outbound_links']:
        outbound_links.add(link)
        candidate_mapping[candidate].append(link)

print(f"Total number of links: {len(outbound_links)}")

# go through outbound links and check if they are trackers
flagged_links = {}
counter = 0
start_time = time.time()
for link in outbound_links:
    counter += 1
    if counter > 100:
        print(f"Time elapsed: {round(time.time() - start_time, 3)} seconds")
        print(flagged_links)
        exit(0)
    # check if tracker
    for tracker in trackers:
        try:
            if re.search(tracker, link):
                flagged_links[link] = tracker
        except Exception as e:
            print(e, tracker)
    
# write to file
with open("flagged_links.json", "w") as f:
    json.dump(flagged_links, f, indent=2)
with open("candidate_mapping.json", "w") as f:
    json.dump(candidate_mapping, f, indent=2)