# python file to help map for fields to keywords
import json

# open the results file
with open("../results/form_extractor_result.json") as f:
    data = json.load(f)
    # go through an get all of the form fields
    form_fields = []
    for candidate in data:
        print(candidate)