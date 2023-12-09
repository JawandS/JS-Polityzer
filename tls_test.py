# go through the candidates list and see if responds to an http vs https get request

import pandas as pd
import requests
# read candidate csv
candiate_df = pd.read_csv('./database/candidate_office_website.csv')
result_df = pd.DataFrame(columns=['fec_name', 'office', 'website', 'https_result', 'http_result'])
# go through candidate list
for index, row in candiate_df.iterrows():
    # get data
    candidate_name = row['fec_name']
    office = row['office']
    website = row['website']
    # perform a get request on the website
    try:
        https_result = requests.get(website)
    except:
        https_result = None
    try:
        http_result = requests.get(website.replace('https', 'http'))
    except:
        http_result = None
    # add to result dataframe
    result_df = result_df.append({'fec_name': candidate_name, 'office': office, 'website': website, 'https_result': https_result, 'http_result': http_result}, ignore_index=True)
# save result dataframe
result_df.to_csv('./database/candidate_tls_test.csv', index=False)