# look at the inbound/outbound links for candidates
import json

# load data
data = json.load(open('../results/link_extractor_result.json'))

# go through outbound links and see the most common domains
outbound_links = {}
for candidate in data:
    candidate_link_set = set()
    for link in data[candidate]['outbound_links']:
        domain = link.split('/')[2]
        candidate_link_set.add(domain)
    for domain_name in candidate_link_set:
        if domain_name not in outbound_links:
            outbound_links[domain_name] = 1
        else:
            outbound_links[domain_name] += 1

# print the top 10 domains
print('Top 10 outbound domains:')
for domain in sorted(outbound_links, key=outbound_links.get, reverse=True)[:10]:
    print(domain, outbound_links[domain])

# log all the outbound links to file sorted by the link count
with open('link_counts.txt', 'w') as outfile:
    for domain in sorted(outbound_links, key=outbound_links.get, reverse=True):
        outfile.write(domain + ' ' + str(outbound_links[domain]) + '\n')