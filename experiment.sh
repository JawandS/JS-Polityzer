# remove testing directory
rm -r ./testing_full
# iteratee four times
for counter in 1 2 3 4 5
do
    # clear previous results
    ./clear.sh
    # run the website downloader
    python3 auto_downloader.py
    # make a new folder for the testing
    mkdir -p ./testing_full/Run$counter
    # copy missing_website, downloads from database
    cp database/missing_website.csv ./testing_full/Run$counter
    cp database/downloaded_javascript_links.csv ./testing_full/Run$counter
    cp database/downloaded_websites.csv ./testing_full/Run$counter
    # move contents of logs dir to the testing folder
    mkdir -p ./testing_full/Run$counter/logs
    mv ./logs/* ./testing_full/Run$counter/logs
    # copy html to the testing folder
    cp -r ./html ./testing_full/Run$counter
done