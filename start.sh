#!/bin/bash
#add ts start/end to log
# clear old data
rm -r html/
rm -r results/
rm -r storage/

# copy candidate list
cp candidate_list_gen/candidates.csv database/candidate_office_website.csv

# if storage does not exist, create it
if [ ! -d "storage" ]; then
  mkdir storage
  mkdir storage/html
  mkdir storage/html/Senate
  mkdir storage/html/House
fi

# run the autodownloader for website downlaoder
python3 auto_downloader.py

# remove remaining html files
rm -rf html
mkdir html

# copy files from storage to html
mv storage/html/Senate/ html/
mv storage/html/House/ html/
rm -rf storage

# recopy full candidate list
cp candidate_list_gen/candidates.csv database/candidate_office_website.csv

# run manual downloader
./manual_scraping/manual_scraping.sh

# run polityzer
python3 polityzer.py