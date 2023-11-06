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

# main method
if __name__ == "__main__":
    # download_candidate_wget('temp.txt')
    # clear_empty_files()
    count_candidate_files()