# imports
import os 
import pandas as pd
import shutil  
import subprocess

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
    senate_exists =  "Senate" in os.listdir("html")
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
    candidates_df = pd.read_csv("database/candidate_office_website.csv")
    candidate_names = candidates_df["fec_name"].tolist()

    # output the list of candidate names that don't have html files
    missing_candidate_list = []
    for candidate in candidate_names:
        if candidate not in candidates_with_html:
            missing_candidate_list.append(candidate)
    
    # go through all candidates and if they only have one page, check if it's empty
    for candidate in candidate_names:
        if candidate not in missing_candidate_list:
            if senate_exists and candidate in os.listdir("html/Senate"):
                if len(folder:=os.listdir("html/Senate/" + candidate)) == 3:
                    if os.stat(f"html/Senate/{candidate}/{folder[1]}").st_size == 0:
                        missing_candidate_list.append(candidate)
            elif house_exists and candidate in os.listdir("html/House"):
                if len(folder:=os.listdir("html/House/" + candidate)) == 3:
                    if os.stat(f"html/House/{candidate}/{folder[1]}").st_size == 0:
                        missing_candidate_list.append(candidate)
        
    # create a new df that only includes the missing candidates
    missing_candidates_df = candidates_df[candidates_df["fec_name"].isin(missing_candidate_list)]
    # overwrite candidates in DB
    missing_candidates_df.to_csv("database/candidate_office_website.csv", index=False)
    # return length of df
    return (len(missing_candidates_df), candidate_names, missing_candidate_list)

# if html folder doesn't exist run website downloader
if "html" not in os.listdir():
    print("\n**Starting First Website Download**\n")
    subprocess.run(["python3", "website_downloader.py"])
# clean up the html file names
replace_filenames()
# go through data in html folder:
print("\n**Find Missing Candidate**\n")
num_missing, candidate_names, missing_candidate_list = find_missing_candidates()
# while there are still candidates missing html files
tries_remaining = 2
for _ in range(tries_remaining):
    # if there are no missing candidates, break
    if num_missing == 0:
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
        subprocess.run(["python3", "website_downloader.py"])
        print("**SUCCESS: Website Download\n**")
    except Exception as e:
        print("\n**FAIL: Website Download**")
        print(f"Error: {repr(e)}\n")
    # clean up the html file names
    replace_filenames()
    # go through data in html folder:
    print("\n**Find Missing Candidate**\n")
    num_missing, candidate_names, missing_candidate_list = find_missing_candidates()