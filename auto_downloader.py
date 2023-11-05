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
    return (len(missing_candidates_df), candidate_names, missing_candidate_list)

# using website downloader initially
def download_candidate_website_downloader(timestamp):
    # if html folder doesn't exist run website downloader
    if "html" not in os.listdir():
        print("\n**Starting First Website Download**\n")
        start_download()
    # clean up the html file names
    replace_filenames()
    # copy the candidates csv a miissing canddiates csv
    shutil.copy("database/candidate_office_website.csv", "database/missing_website.csv")
    # go through data in html folder:
    print("\n**Find Missing Candidate**\n")
    num_missing, candidate_names, missing_candidate_list = find_missing_candidates()
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
            with open("logs/downloader_log_" + timestamp + ".txt", "a+") as f:
                f.write(f"ERROR: {e}")
            print("**ERROR: See error_downloader_" + timestamp + ".txt for details**\n")
        # clean up the html file names
        replace_filenames()
        # go through data in html folder:
        print("\n**Find Missing Candidate**\n")
        num_missing, candidate_names, missing_candidate_list = find_missing_candidates()

# using wget 
def download_candidate_wget(timestamp):
    # get missing candidates
    num_missing, candidate_names, missing_candidate_list = find_missing_candidates()
    # go through each missing candidate and download their website


# main function
def start():
    # get timestamp for log
    timestampFmt = "%Y-%m-%d-%H-%M-%S"
    timestamp = datetime.datetime.now().strftime(timestampFmt)
    # write timestamp to log
    # use website downloder
    download_candidate_website_downloader(timestamp)
    # use wget
    download_candidate_wget(timestamp)

# main method
if __name__ == "__main__":
    start()