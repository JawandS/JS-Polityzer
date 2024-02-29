# comparing the data types collected by forms to the types disclosed by the privacy policy

def gen_collected_list():
    # go through candidates in results and map their form fields to the ontology in keyword_mapping.json
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
    
    # map each candidates to a set of keywords
    candidate_keywords = {}

    with open('../../active_html/results/form_extractor_result.json') as f2:
        candidate_data = json.load(f2)
        # go through each candidate and increment the keywork counts
        for candidate in candidate_data:
            # candidate_office = candidate_data[candidate]['office']
            keywords = set()
            for field in candidate_data[candidate]['form_fields']:
                field = field.lower().replace("*","").strip()
                keywords.add(reverse_mapping[field])
            candidate_keywords[candidate] = list(keywords)
    
    # write to a json
    with open('candidate_keywords.json', 'w') as f:
        json.dump(candidate_keywords, f, indent=2)

def condense_types():
    # compare the data collected on collection map to keyword mapping 
    import json
    import pandas as pd
    with open('candidate_keywords.json') as f: # data in their privacy policy, if any (all candidates)
        collected_data_list = json.load(f)
    policy_keywords_list = pd.read_csv('collection_map.csv', sep='|')
    # compare the two lists
    diff_list = {} # candiate: [collected, policy]
    for candidate in collected_data_list:
        collected_keywords = collected_data_list[candidate]
        policy_keywords = policy_keywords_list[policy_keywords_list['candidate'] == candidate]['data types'].tolist()
        diff_list[candidate] = [collected_keywords, policy_keywords]
    # write to json
    with open('diff_list.json', 'w') as f:
        json.dump(diff_list, f, indent=2)

def analyze_data():
    # go through diff list and output extra keywords
    import json
    with open('diff_list.json') as f:
        diff_list = json.load(f)
    extra_data = {} # keywords not covered in policy
    unneeded_data = {} # keywords not collected but desribed
    for candidate in diff_list:
        collected = diff_list[candidate][0]
        policy = diff_list[candidate][1]
        extra_data[candidate] = list(set(collected) - set(policy))
        unneeded_data[candidate] = list(set(policy) - set(collected))
    # write to json
    with open('extra_data.json', 'w') as f:
        json.dump(extra_data, f, indent=2)
    with open('unneeded_data.json', 'w') as f:
        json.dump(unneeded_data, f, indent=2)


# main method
if __name__ == '__main__':
    # gen_collected_list()
    # condense_types()
    analyze_data()