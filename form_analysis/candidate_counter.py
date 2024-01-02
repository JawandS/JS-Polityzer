# count the number of house and senate candidates that have at least one form field not in ignore/misc
import json

# open the mapping into a dictionary
with open('keyword_mapping.json') as f:
    mapping = json.load(f)
    reverse_mapping = {}
    # reverse the mapping to go from label to keyword
    for keyword in mapping:
        # get the list of labels for the keyword
        labels = mapping[keyword]
        # add each label to the reverse mapping
        for label in labels:
            reverse_mapping[label] = keyword

# go through the form data
with open("form_extractor_result.json") as f:
    data = json.load(f)
    house_candidates = 0
    senate_candidates = 0
    for candidate in data:
        house = False
        senate = False
        for field in data[candidate]["form_fields"]:
            if reverse_mapping[field] not in ["ignore", "misc"]:
                if data[candidate]["office"] == "House":
                    house = True
                else:
                    senate = True
        if house:
            house_candidates += 1
        if senate:
            senate_candidates += 1
    print(f"{house_candidates} house candidates")
    print(f"{senate_candidates} senate candidates")