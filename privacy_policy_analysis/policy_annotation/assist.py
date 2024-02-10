# assist in labeling the privacy policies 
import os
import string 

def create_files():
    # go through canddiates and make text files
    for candidate in os.listdir('../privacy_policies/House'):
        with open(f'policy_text/House/{candidate.replace(".html", ".txt")}', 'w') as f:
            pass
    for candidate in os.listdir('../privacy_policies/Senate'):
        with open(f'policy_text/Senate/{candidate.replace(".html", ".txt")}', 'w') as f:
            pass

def process_files():
    # clear the directory
    for candidate in os.listdir('processed_text/House'):
        os.remove(f'processed_text/House/{candidate}')
    for candidate in os.listdir('processed_text/Senate'):
        os.remove(f'processed_text/Senate/{candidate}')
    # go through text files and split into sentences
    for candidate in os.listdir('policy_text/House'):
        with open(f'policy_text/House/{candidate}', 'r', encoding="utf8") as f:
            try:
                text = f.read()
                sentences = text.split('.')
                with open(f'processed_text/House/{candidate}', 'w') as f:
                    for sentence in sentences:
                        f.write(sentence + '\n')
                print(f"finished {candidate}")
            except Exception as e:
                print(f"error for {candidate} with exception {e}")
    for candidate in os.listdir('policy_text/Senate'):
        with open(f'policy_text/Senate/{candidate}', 'r', encoding="utf8") as f:
            try:
                text = f.read()
                sentences = text.split('.')
                with open(f'processed_text/Senate/{candidate}', 'w') as f:
                    for sentence in sentences:
                        f.write(sentence + '\n')
                print(f"finished {candidate}")
            except Exception as e:
                print(f"error for {candidate} with exception {e}")

def clean_files():
    # printable characters
    printable = set(string.printable)
    # go through text file remove empty lines and count remaining lines
    total_lines = 0
    for candidate in os.listdir('processed_text/House'):
        try:
            with open(f'processed_text/House/{candidate}', 'r') as f:
                lines = f.readlines()
                lines = [''.join(filter(lambda x: x in printable, line)) for line in lines if line != '\n']
            with open(f'processed_text/House/{candidate}', 'w') as f:
                f.writelines(lines)
                total_lines += len(lines)
        except Exception as e:
            print("error" + candidate + e)
    for candidate in os.listdir('processed_text/Senate'):
        try:
            with open(f'processed_text/Senate/{candidate}', 'r') as f:
                lines = f.readlines()
                lines = [''.join(filter(lambda x: x in printable, line)) for line in lines if line != '\n']
            with open(f'processed_text/Senate/{candidate}', 'w') as f:
                f.writelines(lines)
                total_lines += len(lines)
        except Exception as e:
            print("error" + candidate + e)
    print(f"total lines: {total_lines}")

def annotate_sentences(ANNOTATE=True):
    import pandas as pd
    seen_sentences = {}
    seen_setence_count = 0
    not_seen_count = 0
    # go throuhg seen sentences and add to dict
    seen_sentences_df = pd.read_csv('seen_sentences.csv', sep='|', quoting=3)
    for index, row in seen_sentences_df.iterrows():
        sentence = row['sentence']
        # if sentence in seen_sentences:
            # print("seen")
        seen_sentences[row['sentence']] = row['keep']
    print(len(seen_sentences))
    # go through text file and annotate each sentence
    outfile = open('seen_sentences.csv', 'a')
    try:
        for candidate in os.listdir('processed_text/House'):
            with open(f'processed_text/House/{candidate}', 'r') as f:
                lines = f.readlines()
                for line in lines:
                    line = line.strip().lower()
                    if line in seen_sentences:
                        if not ANNOTATE:
                            seen_setence_count += 1
                        continue
                    elif not ANNOTATE:
                        print(line)
                        not_seen_count += 1
                    if ANNOTATE:
                        print("\n" + line)
                        should_keep = bool(input("Keep?: "))
                        seen_sentences[line] = should_keep
                        outfile.write(f"{line}|{should_keep}\n")
        for candidate in os.listdir('processed_text/Senate'):
            with open(f'processed_text/Senate/{candidate}', 'r') as f:
                lines = f.readlines()
                for line in lines:
                    line = line.strip().lower()
                    if line in seen_sentences:
                        if not ANNOTATE:
                            seen_setence_count += 1
                        continue
                    elif not ANNOTATE:
                        print(line)
                        not_seen_count += 1
                    if ANNOTATE:
                        print("\n" + line)
                        should_keep = bool(input("Keep?: "))
                        seen_sentences[line] = should_keep
                        outfile.write(f"{line}|{should_keep}\n")
    except KeyboardInterrupt:
        outfile.close()
    if not ANNOTATE:
        print(f"seen sentences: {seen_setence_count + len(seen_sentences)}")
        print(f"not seen sentences: {not_seen_count}")

def label_sentences():
    import pandas as pd 
    # go through seen sentences and label datatypes 
    completed_df = pd.read_csv('annotated_sentences.csv', sep='|', quoting=3)
    seen_sentences = set()
    for index, row in completed_df.iterrows():
        seen_sentences.add(row['sentence'])
    # go through text file and label each sentence
    outfile = open('annotated_sentences.csv', 'a')
    all_sentences_df = pd.read_csv('seen_sentences.csv', sep='|', quoting=3)
    try:
        for idx, row in all_sentences_df.iterrows():
            sentence = row['sentence']
            if not sentence or not row['keep']:
                continue
            if sentence in seen_sentences:
                continue
            print("\n" + sentence)
            datum_type = input("Type: ") # 0 - other, 1 - collection, 2 - sharing, 3 - unknown
            data = input("Data: ")
            outfile.write(f"{sentence}|{datum_type}|{data}\n")
    except KeyboardInterrupt:
        outfile.close()

def lower_file(file):
    # go through lines in the file and replace them with lower case 
    with open(file, 'r') as f:
        lines = f.readlines()
        lines = [line.lower() for line in lines]
    with open(file, 'w') as f:
        f.writelines(lines)

def sharing_map():
    import pandas as pd
    # sentence map
    sentence_map = {}
    seen_sentences_df = pd.read_csv('annotated_sentences.csv', sep='|', quoting=3)
    for index, row in seen_sentences_df.iterrows():
        sentence_map[row['sentence']] = (row['type'], row['data'])
    # outfile
    outfile = open('sharing_map.csv', 'a')
    # go through each candidate and collect the types of data shared
    seen_candidates = set()
    sharing_df = pd.read_csv('sharing_map.csv', sep='|', quoting=3)
    for index, row in sharing_df.iterrows():
        seen_candidates.add(row['candidate'])
    for candidate in os.listdir('processed_text/House'):
        if candidate in seen_candidates:
            continue
        with open(f'processed_text/House/{candidate}', 'r') as f:
            lines = f.readlines()
            data_types = set()
            for line in lines:
                line = line.strip().lower().replace('�', '')
                if line in sentence_map:
                    sentence_type, sentence_data = sentence_map[line]
                    if sentence_type == 2:
                        for data in sentence_data.split(", "):
                            data_types.add(data)
                else:
                    print(line)
            # write to outfile
            outfile.write(f"{candidate}|{', '.join(data_types)}\n")
    for candidate in os.listdir('processed_text/Senate'):
        if candidate in seen_candidates:
            continue
        with open(f'processed_text/Senate/{candidate}', 'r') as f:
            lines = f.readlines()
            data_types = set()
            for line in lines:
                line = line.strip().lower().replace('�', '')
                if line in sentence_map:
                    sentence_type, sentence_data = sentence_map[line]
                    if sentence_type == 2:
                        for data in sentence_data.split(", "):
                            data_types.add(data)
                else:
                    print(line)
            # write to outfile
            outfile.write(f"{candidate}|{', '.join(data_types)}\n")

def collection_map():
    import pandas as pd
    # sentence map
    sentence_map = {}
    seen_sentences_df = pd.read_csv('annotated_sentences.csv', sep='|', quoting=3)
    for index, row in seen_sentences_df.iterrows():
        sentence_map[row['sentence']] = (row['type'], row['data'])
    # outfile
    outfile = open('collection_map.csv', 'a')
    # go through each candidate and collect the types of data shared
    seen_candidates = set()
    sharing_df = pd.read_csv('collection_map.csv', sep='|', quoting=3)
    for index, row in sharing_df.iterrows():
        seen_candidates.add(row['candidate'])
    for candidate in os.listdir('processed_text/House'):
        if candidate in seen_candidates:
            continue
        with open(f'processed_text/House/{candidate}', 'r') as f:
            lines = f.readlines()
            data_types = set()
            for line in lines:
                line = line.strip().lower().replace('�', '')
                if line in sentence_map:
                    sentence_type, sentence_data = sentence_map[line]
                    if sentence_type == 1:
                        for data in sentence_data.split(", "):
                            data_types.add(data)
                else:
                    print(line)
            # write to outfile
            outfile.write(f"{candidate}|{', '.join(data_types)}\n")
    for candidate in os.listdir('processed_text/Senate'):
        if candidate in seen_candidates:
            continue
        with open(f'processed_text/Senate/{candidate}', 'r') as f:
            lines = f.readlines()
            data_types = set()
            for line in lines:
                line = line.strip().lower().replace('�', '')
                if line in sentence_map:
                    sentence_type, sentence_data = sentence_map[line]
                    if sentence_type == 1:
                        for data in sentence_data.split(", "):
                            data_types.add(data)
                else:
                    print(line)
            # write to outfile
            outfile.write(f"{candidate}|{', '.join(data_types)}\n")

# filter �

if __name__ == '__main__':
    # create_files()
    # process_files()
    # clean_files()
    # annotate_sentences(False)
    # label_sentences()
    # lower_file('seen_sentences.csv')
    # sharing_map()
    collection_map()