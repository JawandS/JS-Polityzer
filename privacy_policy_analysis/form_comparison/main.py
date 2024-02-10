# comparing the data types collected by forms to the types disclosed by the privacy policy

def gen_collected_list():
    # go through candidates in results and map their form fields to the ontology in keyword_mapping.json
    import json

    # open the mapping into a dictionary
    with open('../../form_analysis/data/keyword_mapping.json') as f:
        mapping = json.load(f)
        reverse_mapping = {}
        # reverse the mapping to go from label to keyword
        for keyword in mapping:
            # get the list of labels for the keyword
            labels = mapping[keyword]
            # add each label to the reverse mapping
            for label in labels:
                reverse_mapping[label] = keyword
    
    # map each candidates to a set of keywords
    candidate_keywords = {}

    with open('../../active_html/results/form_extractor_result.json') as f2:
        candidate_data = json.load(f2)
        # go through each candidate and increment the keywork counts
        for candidate in candidate_data:
            # candidate_office = candidate_data[candidate]['office']
            keywords = set()
            for field in candidate_data[candidate]['form_fields']:
                field = field.strip().lower()
                keywords.add(reverse_mapping[field])
            candidate_keywords[candidate] = keywords
    
    # write to a json
    with open('data/candidate_keywords.json', 'w') as f:
        json.dump(candidate_keywords, f, indent=2)


# main method
if __name__ == '__main__':
    gen_collected_list()