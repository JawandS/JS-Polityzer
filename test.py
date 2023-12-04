# from auto_downloader import download_candidate_wget
# download_candidate_wget('temp.txt')

# from auto_downloader import clear_empty_files
# clear_empty_files()


def count_candidate_files():
    # go through the small_test directory and check if each candidates has the same number
    # of files accross the various runs
    import os

    candidate_to_num_files = {}
    candidate_run_info = {}
    for run in ["Run1", "Run2", "Run3", "Run4"]:
        data_dir = f"small_test/{run}/html"
        # go through house candidates
        for candidate in os.listdir(f"{data_dir}/House"):
            if candidate not in candidate_to_num_files:
                candidate_to_num_files[candidate] = set()
            if candidate not in candidate_run_info:
                candidate_run_info[candidate] = []
            file_count = len(os.listdir(f"{data_dir}/House/{candidate}"))
            candidate_to_num_files[candidate].add(file_count)
            candidate_run_info[candidate].append((file_count, run))
        # go through senate candidates
        for candidate in os.listdir(f"{data_dir}/Senate"):
            if candidate not in candidate_to_num_files:
                candidate_to_num_files[candidate] = set()
            if candidate not in candidate_run_info:
                candidate_run_info[candidate] = []
            file_count = len(os.listdir(f"{data_dir}/Senate/{candidate}"))
            candidate_to_num_files[candidate].add(file_count)
            candidate_run_info[candidate].append((file_count, run))
    # output results
    for candidate in candidate_to_num_files:
        file_counts = len(candidate_to_num_files[candidate])
        if file_counts != 1:
            print(f"{candidate} has {file_counts} different file counts: {candidate_to_num_files[candidate]}")
            print(f"Run info: {candidate_run_info[candidate]}\n")

def count_downloaded_candidates():
    # count the number of folders in html/House and html/Senate
    import os
    house_count = len(os.listdir("html/House"))
    senate_count = len(os.listdir("html/Senate"))
    # print total candidates
    print(f"Total: {house_count + senate_count} / 222 candidates")

def get_files(directory):
    # get all files in a directory
    import os
    files = []
    for path in os.listdir(directory):
        if os.path.isfile(f"{directory}/{path}"):
            files.append(f"{directory}/{path}")
    return files

def remove_301_candidates():
    # remove candidates whose only download is a 301 error
    import os
    candidates_paths = []
    for path in os.listdir("html/House"):
        candidates_paths.append(f"html/House/{path}")
    for path in os.listdir("html/Senate"):
        candidates_paths.append(f"html/Senate/{path}")
    for path in candidates_paths:
        if len(paths:=get_files(path)) == 1:
            with open(f"{paths[0]}") as f:
                if "301 Moved Permanently" in f.read():
                    print(f"Removing {path}")
                    os.system(f"rm -rf {path}")

# main method
if __name__ == "__main__":
    # download_candidate_wget('temp.txt')
    # clear_empty_files()
    # count_candidate_files()
    # count_downloaded_candidates()
    remove_301_candidates()