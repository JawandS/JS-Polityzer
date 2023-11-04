import pandas as pd

# open the file
gov_filename = "govlist.csv"
ballotpedia_filename = "ballotpedialist.csv"
gov_df = pd.read_csv(gov_filename)
ballotpedia_df = pd.read_csv(ballotpedia_filename)

# office dictionary for govlist
office_dict = {
    "Member, House of Delegates": "House",
    "Member, Senate of Virginia": "Senate"
}

# filter out df without campaign websites
gov_df = gov_df[gov_df["Campaign Website"].notna()]
ballotpedia_df = ballotpedia_df[ballotpedia_df["Campaign Website"].notna()]

# write results to candidates
with open("candidates.csv", "w") as f:
    f.write("fec_name,office,website\n")
    for index, row in gov_df.iterrows():
        original_campaign_site = row["Campaign Website"]
        site = "https://" + original_campaign_site if "https" not in original_campaign_site else original_campaign_site
        f.write(row["Candidate Name"].replace(".", "").replace(",", "").replace(" ", "").replace('"', "") + "," + office_dict[row["Office Title"]] + "," + site + "\n")
    for index, row in ballotpedia_df.iterrows():
        original_campaign_site = row["Campaign Website"]
        site = "https://" + original_campaign_site if "https" not in original_campaign_site else original_campaign_site
        f.write(row["Candidate Name"].replace(".", "").replace(",", "").replace(" ", "").replace('"', "") + "," + row["Office Title"] + "," + site + "\n")