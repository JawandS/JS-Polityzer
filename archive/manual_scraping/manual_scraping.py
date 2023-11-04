import pandas as pd
import os
import shutil
import subprocess 
from bs4 import BeautifulSoup as bs

# read the file
candidates_list_df = pd.read_csv("test_list.csv")

# write timestamp to the error log
with open("error_log.txt", "w") as f:
    f.write(f"{pd.Timestamp.now()}\n")

# iterate through the rows
for index, row in candidates_list_df.iterrows():
    # get the data
    candidate_name = row["fec_name"]
    office = row["office"]
    website = row["website"]
    
    # check if the candidate is in html
    candidate_path = f"../html/{office}/{candidate_name}"
    if os.path.isdir(candidate_path):
        # remove the candidate folder
        shutil.rmtree(candidate_path)
    
    # create the candidate folder
    os.makedirs(candidate_path)

    # create the html file
    try:
        # generate filename for homepage
        timestamp = pd.Timestamp.now().strftime("%Y%m%d%H%M%S")
        homepage = website[website.find('://')+3:]
        filename = f"{candidate_path}/{homepage}{timestamp}"
        # download the homepage   
        subprocess.run(f"wget {website} -O {filename}", shell=True)
        # extract all links from the homepage using python
        with open(filename, "r") as f:
            html = f.read()
        # generate beautifulsoup
        soup = bs(html, "html.parser")
        # get all the links
        links = set()
        for a_tag in soup.find_all('a', href=True):
            link = a_tag['href']
            if link.startswith("http") and homepage in link and len(link) < 1000:
                links.add(link)
        print(f"{candidate_name}: {len(links)} internal links")
        # download remaining links
        for link in links:
            # update filename
            link_name = link[link.find('://')+3:].replace('/', '_')
            link_filename = f"{candidate_path}/{link_name}{timestamp}"
            print(link_filename)
            # download the link, use p to avoid downlaoding embeddings
            subprocess.run(f"wget -p {link} -O {link_filename}", shell=True)
    except Exception as e:
        print(f"Error: {candidate_name}")
        with open(f"error_log.txt", "a") as f:
            f.write(f"{candidate_name} {website} {e}\n")
        # remove the candidate folder
        # shutil.rmtree(candidate_path)