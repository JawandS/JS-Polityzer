test_dir="./testing_full/11_5_2023"
# remove testing directory
rm -r $test_dir
# iteratee four times
for counter in 1
do
    # get the directory for current run
    curr_dir=$test_dir/Run$counter
    # clear previous results
    ./clear.sh
    # run the website downloader
    python3 auto_downloader.py
    # make a new folder for the testing
    mkdir -p $test_dir/Run$counter
    # copy missing_website, downloads from database
    cp database/missing_website.csv $curr_dir
    cp database/downloaded_javascript_links.csv $curr_dir
    cp database/downloaded_websites.csv $curr_dir
    # move contents of logs dir to the testing folder
    mkdir -p $curr_dir/logs
    mv ./logs/* $curr_dir/logs
    # copy html to the testing folder
    cp -r ./html $curr_dir
done