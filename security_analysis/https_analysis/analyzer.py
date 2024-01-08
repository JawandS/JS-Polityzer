import pandas as pd

# read the csv
candidate_df = pd.read_csv('https_results_1_7_24.csv')

# go through rows
active_sites = 0
for index, row in candidate_df.iterrows():
    # get data
    candidate_name = row['fec_name']
    office = row['office']
    website = row['website']
    https_result = row['https_result']
    http_result = row['http_result']
    # if https_result and http_result are different
    if str(https_result) != str(http_result) and str(https_result) != "200":
        # print data
        print(f"fec_name: {candidate_name}, office: {office}, website: {website}, https_result: {https_result}, http_result: {http_result}")
    # if https_result is 200
    if str(https_result) == "200" or str(http_result) == "200":
        # increment active sites
        active_sites += 1
# print active sites
print(f"active sites: {active_sites}")