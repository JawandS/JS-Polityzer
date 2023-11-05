# imports
import os 
import pandas as pd
import shutil  
import datetime
from website_downloader import start as start_download
import subprocess 
from bs4 import BeautifulSoup as bs

# clean up files in html by replacing spaces in file name
def replace_filenames():
    # find if senate/house folders exists
    senate_exists = "Senate" in os.listdir("html")
    house_exists = "House" in os.listdir("html")
    # clean the files names
    if senate_exists:
        for file in os.listdir("html/Senate"):
            for file2 in os.listdir("html/Senate/" + file):
                os.rename("html/Senate/" + file + "/" + file2, "html/Senate/" + file + "/" + file2.replace(" ", "_"))
    if house_exists:
        for file in os.listdir("html/House"):
            for file2 in os.listdir("html/House/" + file):
                os.rename("html/House/" + file + "/" + file2, "html/House/" + file + "/" + file2.replace(" ", "_"))

# find candidates missing html folders
def find_missing_candidates():    
    # check if senate/house folders exists
    senate_exists = "Senate" in os.listdir("html")
    house_exists = "House" in os.listdir("html")
    # get the list of html files in the directory
    candidates_with_html = []
    if senate_exists:
        for file in os.listdir("html/Senate"):
            candidates_with_html.append(file)
    if house_exists:
        for file in os.listdir("html/House"):
            candidates_with_html.append(file)

    # get the list of candidate names from candidates.csv
    candidates_df = pd.read_csv("database/missing_website.csv")
    candidate_names = candidates_df["fec_name"].tolist()

    # output the list of candidate names that don't have html files
    missing_candidate_list = []
    for candidate in candidate_names:
        if candidate not in candidates_with_html:
            missing_candidate_list.append(candidate)
    
    # check for empty html
    for candidate in candidate_names:
        if candidate not in candidates_with_html: # already checked
            continue    
        else: # check if html is empty
            office = "Senate" if candidate in (os.listdir("html/Senate")) else "House"
            candidate_path = f"html/{office}/{candidate}"
            html_files = [f for f in os.listdir(candidate_path) if os.path.isfile(os.path.join(candidate_path, f))]
            if len(html_files) == 1:
                if os.stat(f"html/{office}/{candidate}/{html_files[0]}").st_size == 0:
                    missing_candidate_list.append(candidate)
        
    # create a new df that only includes the missing candidates
    missing_candidates_df = candidates_df[candidates_df["fec_name"].isin(missing_candidate_list)]
    # overwrite candidates in DB
    missing_candidates_df.to_csv("database/missing_website.csv", index=False)
    # return length of df
    return (len(missing_candidates_df), candidate_names, missing_candidate_list, candidates_df)

# using website downloader initially
def download_candidate_website_downloader(logname):
    # if html folder doesn't exist run website downloader
    if "html" not in os.listdir():
        print("\n**Starting First Website Download**\n")
        start_download()
    # copy candidates to missing candidates csv
    print("\n**Copy Candidates to Missing Candidates CSV**\n")
    shutil.copy("database/candidates.csv", "database/missing_website.csv")
    # clean up the html file names
    replace_filenames()
    # go through data in html folder:
    print("\n**Find Missing Candidate**\n")
    num_missing, candidate_names, missing_candidate_list, missing_cadndiates_df = find_missing_candidates()
    # Retry for canddiates that are still missing html files
    tries_remaining = 1
    for _ in range(tries_remaining):
        # if there are no missing candidates, break
        if num_missing == 0:
            print("\n**No Missing Candidates**\n")
            break
        # check if house and senate folders exists
        house_exists = "House" in os.listdir("html")
        senate_exists = "Senate" in os.listdir("html")
        # move correctly downloaded html to a new folder
        print("\n**Copy Correctly Downloaded Candidates to Storage**\n")
        for candidate in candidate_names:
            if candidate not in missing_candidate_list:
                if senate_exists and candidate in os.listdir("html/Senate"):
                    shutil.move("html/Senate/" + candidate, "storage/html/Senate/" + candidate)
                elif house_exists and candidate in os.listdir("html/House"):
                    shutil.move("html/House/" + candidate, "storage/html/House/" + candidate)
        # remove html folder
        print("\n**Remove html Folder**\n")
        shutil.rmtree("html")
        # run the website downloader
        print("\n**Start a New Website Download**")
        try:
            start_download()
            print("**SUCCESS: Website Download\n**")
        except Exception as e:
            print("\n**FAIL: Website Download**")
            # output error to log
            with open(logname, "a+") as f:
                f.write(f"ERROR: {e}")
            print("**ERROR: see the log for details**\n")
        # clean up the html file names
        replace_filenames()
        # go through data in html folder:
        print("\n**Find Missing Candidate**\n")
        num_missing, candidate_names, missing_candidate_list, missing_cadndiates_df = find_missing_candidates()

# using wget 
def download_candidate_wget(log_name):
    # get missing candidates
    num_missing, candidate_names, missing_candidate_list, missing_df = find_missing_candidates()
    # check if there are missing candidates
    if num_missing == 0:
        print("\n**No Missing Candidates**\n")
        return
    # go through each missing candidate and download their website
    for index, row in missing_df.iterrows(): # go through candidates missing html
        # get the data
        candidate_name = row["fec_name"]
        office = row["office"]
        website = row["website"]

        # check for candidate directory 
        candidate_path = f"html/{office}/{candidate_name}"
        if os.path.isdir(candidate_path):
            # remove the empty html
            html_files = [f for f in os.listdir(candidate_path) if os.path.isfile(os.path.join(candidate_path, f))]
            if len(html_files) == 1:
                if os.stat(f"html/{office}/{candidate_name}/{html_files[0]}").st_size == 0:
                    os.remove(f"html/{office}/{candidate_name}/{html_files[0]}")
        else: # create the directory for candidate data
            os.makedirs(candidate_path)
        
        # create the html file
        try:
            # generate filename for homepage
            timestamp = pd.Timestamp.now().strftime("%Y%m%d%H%M%S")
            homepage = website[website.find('://')+3:]
            filename = f"{candidate_path}/{homepage}{timestamp}"

            # download the homepage   
            subprocess.run(f"wget {website} -O {filename}", shell=True)

            # extract all links from the homepage using bs4
            with open(filename, "r") as f:
                html = f.read()
            # generate beautifulsoup
            soup = bs(html, "html.parser")

            # get all the links (depth=1)
            links = set()
            for a_tag in soup.find_all('a', href=True):
                link = a_tag['href']
                if link.startswith("http") and homepage in link and len(link) < 1000:
                    links.add(link)
            # log the number of internal links for the candidate
            with open(log_name, "a+") as f:
                f.write(f"{candidate_name}: {len(links)} internal links\n")
            
            # download remaining links
            for link in links:
                # update filename
                link_name = link[link.find('://')+3:].replace('/', '_')
                link_filename = f"{candidate_path}/{link_name}{timestamp}"
                # download the link, use p to avoid downloading embeddings
                subprocess.run(f"wget -p {link} -O {link_filename}", shell=True)
            # get the links from depth 1 (depth=2 links)
            depth_two_links = set()
            for link in links:
                # update filename
                link_name = link[link.find('://')+3:].replace('/', '_')
                link_filename = f"{candidate_path}/{link_name}{timestamp}"
                # extract all links from the homepage using bs4
                with open(link_filename, "r") as f:
                    html = f.read()
                # generate beautifulsoup
                soup = bs(html, "html.parser")
                # get all the links (depth=1)
                for a_tag in soup.find_all('a', href=True):
                    link = a_tag['href']
                    if link.startswith("http") and homepage in link and len(link) < 1000:
                        depth_two_links.add(link)
            # remove links that are already downloaded
            depth_two_links = depth_two_links - links
            # download remaining links
            for link in depth_two_links:
                # update filename
                link_name = link[link.find('://')+3:].replace('/', '_')
                link_filename = f"{candidate_path}/{link_name}{timestamp}"
                # download the link, use p to avoid downloading embeddings
                subprocess.run(f"wget -p {link} -O {link_filename}", shell=True)
        except Exception as e:
            print(f"**ERROR: {candidate_name}**")
            with open(f"error_log.txt", "a+") as f:
                f.write(f"ERROR: {candidate_name} {website} {e}\n")
            
# main function
def start():
    # get timestamp for log
    timestampFmt = "%Y-%m-%d-%H-%M-%S"
    timestamp = datetime.datetime.now().strftime(timestampFmt)
    logname = "logs/downloader_log_" + timestamp + ".txt"
    # write timestamp to log
    with open(logname, "a+") as f:
        f.write(f"{pd.Timestamp.now()}\n")
    # use website downloder
    download_candidate_website_downloader(logname)
    # use wget
    download_candidate_wget(logname)

# main method
if __name__ == "__main__":
    start()