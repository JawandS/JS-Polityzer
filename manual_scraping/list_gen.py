# reading from missing html list
with open("missing_html_list.txt", "r") as f:
    missing_html_list = f.readlines()
    missing_html_list = [line.strip().replace("[", "").replace("]", "").split(" ") for line in missing_html_list]
with open("candidate_list.csv", "w") as fTwo:
    fTwo.write(f"fec_name,office,website\n")
    for elem in missing_html_list[1:]:
        elem[0] = elem[0].replace("'", "")
        elem[1] = elem[1].replace("'", "")
        elem[2] = elem[2].replace("'", "")
        fTwo.write(f"{elem[0]},{elem[1]},{elem[2]}\n")