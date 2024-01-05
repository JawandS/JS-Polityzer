# comparing the privacy policy manual download vs polityzer 
import pandas as pd 
import os 

# clean dir of json
def clean_dir():
    for office in os.listdir('./polityzer_privacy_policies'):
        for file in os.listdir(f'./polityzer_privacy_policies/{office}'):
            if file.endswith(".json"):
                os.remove(f"./polityzer_privacy_policies/{office}/{file}")

# map the policies from politiyzer to their candidate
def map_policies():
    # open the downlaoded websites csv
    mapping_df = pd.read_csv("../database/downloaded_websites.csv")
    # create a mapping from filepath to candidate name
    mapping = {}
    for index, row in mapping_df.iterrows():
        mapping[row["filepath"].split("/")[3]] = row["name"]
    # go through the files in the directory and replace file names with candidate names
    for office in os.listdir('./polityzer_privacy_policies'):
        for file in os.listdir(f'./polityzer_privacy_policies/{office}'):
            if file in mapping:
                os.rename(f'./polityzer_privacy_policies/{office}/{file}', f'./polityzer_privacy_policies/{office}/{mapping[file]}.html')
            else:
                print(f"no mapping for {office} {file}")

# main method
if __name__ == "__main__":
    # map_policies()
    clean_dir()