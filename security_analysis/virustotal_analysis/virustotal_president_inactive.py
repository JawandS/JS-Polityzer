import json
import os
import requests
import time
import csv
from urllib.parse import urlparse, urljoin
import tldextract
from virustotal_python import Virustotal
from base64 import urlsafe_b64encode
import re
import sys

# get virustotal api key
# API_KEY = os.environ.get("VIRUSTOTAL_API_KEY")
# if not API_KEY:
#     print("Please set the environment variable VIRUSTOTAL_API_KEY")
#     sys.exit(1)
API_KEY = "e032666dea618f22e7d1255d9ad7a3983c1ec550b5b655ebac5ff24d125018a3"
SECONDS_BETWEEN_REQUESTS = 15

# set up virustotal instance
vtotal = Virustotal(API_KEY=API_KEY, API_VERSION="v3")

with open(os.path.join("DATASETS", "17_virustotal_external_links_added.json")) as f:
    candidate_data = json.load(f)

external_links = set()
folder = os.path.join("RESULTS", "virustotal_president_inactive_external")

already_done = set()
for filename in os.listdir(
    os.path.join(
        "RESULTS",
        "virustotal_external_links",
        "candidate_external_links_analysis",
        "vt_responses",
    )
):
    if filename.endswith(".txt"):
        already_done.add(filename)

for candidate in candidate_data:
    if "president_inactive" not in candidate_data[candidate]["active_status"]:
        continue
    external_link = candidate_data[candidate].get("outbound_links")
    if not external_link:
        continue
    for link in external_link:
        link = tldextract.extract(link).domain + "." + tldextract.extract(link).suffix
        link = link.lower()
        if link + ".txt" in already_done:
            continue
        external_links.add(link.lower())
print(len(external_links))
folder = os.path.join("RESULTS", "virustotal_president_inactive_external")
error_file = open(os.path.join(folder, "error.log"), "w")
for link in external_links:
    print("working on", link)
    filepath = os.path.join(folder, link + ".txt")
    try:
        # sending scan request to virustotal
        response = vtotal.request("urls", data={"url": link}, method="POST")
        url_id = urlsafe_b64encode(link.encode()).decode().strip("=")
        # getting analysis response from virustotal
        analysis_resp = vtotal.request(f"urls/{url_id}")
        response_data = analysis_resp.data

        with open(filepath, "w") as f:
            json.dump(response_data, f, indent=2)
        time.sleep(SECONDS_BETWEEN_REQUESTS)
    except Exception as err:
        print(f"An error occurred: {err}\nCatching and continuing with program.")
        error_file.write(link + "\t" + str(err) + "\n")
        time.sleep(SECONDS_BETWEEN_REQUESTS)
#
# folder=os.path.join('RESULTS','virustotal_president_inactive')
# error_file=open(os.path.join(folder,'error.log'),'w')

# for candidate,link in websites.items():
#     print('working on', link)
#     filepath = os.path.join(folder,candidate + '.txt')
#     if os.path.isfile(filepath):
#         continue
#     try:
#         response = vtotal.request("urls", data={"url": link}, method="POST")
#         url_id = urlsafe_b64encode(link.encode()).decode().strip("=")
#         analysis_resp = vtotal.request(f"urls/{url_id}")
#         response_data = analysis_resp.data
#
#         with open(filepath, 'w') as f:
#             json.dump(response_data, f, indent=2)
#         time.sleep(SECONDS_BETWEEN_REQUESTS)
#     except Exception as err:
#         print(f"An error occurred: {err}\nCatching and continuing with program.")
#         error_file.write(link + '\t' + str(err) + '\n')
#         time.sleep(SECONDS_BETWEEN_REQUESTS)
