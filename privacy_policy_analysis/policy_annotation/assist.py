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
    seen_sentences_df = pd.read_csv('seen_sentences.csv', sep='|')
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
                        not_seen_count += 1
                    if ANNOTATE:
                        print("\n" + line)
                        should_keep = input("Keep?: ")
                        seen_sentences[line] = should_keep
                        outfile.write(f"{line}|{should_keep}\n")
    except KeyboardInterrupt:
        outfile.close()
    if not ANNOTATE:
        print(f"seen sentences: {seen_setence_count + len(seen_sentences)}")
        print(f"not seen sentences: {not_seen_count}")

def label_sentences():
    # go through seen sentences and add them to the json
    import json
    seen_sentences = set()
    with open('annotated_sentences.txt', 'a+') as record_f:
        for line in record_f.readlines():
            seen_sentences.add(line.strip())
        try:
            with open('data_types.json', 'r') as f:
                annotation_data = json.load(f)
            with open('seen_sentences.csv', 'r') as f:
                sentences_to_do = f.readlines()
            for data in sentences_to_do:
                sentence = data.split("|")[0]
                keep = eval(data.split("|")[1])
                if sentence in seen_sentences or not keep:
                    continue
                print(f"\n{sentence}")
                record_f.write(sentence + '\n')
                collection_or_sharing = input("Collection(1) Sharing(2): ").strip()
                if not collection_or_sharing:
                    continue
                data_types = input("Data Types: ").strip().split(', ')       
                annotation_data[sentence] = {'collection_sharing': collection_or_sharing, 'data_types': data_types}
        except KeyboardInterrupt:
            with open('seen_sentences.json', 'w') as f:
                json.dump(annotation_data, f, indent=2)    

def lower_file(file):
    # go through lines in the file and replace them with lower case 
    with open(file, 'r') as f:
        lines = f.readlines()
        lines = [line.lower() for line in lines]
    with open(file, 'w') as f:
        f.writelines(lines)

if __name__ == '__main__':
    # create_files()
    # process_files()
    # clean_files()
    annotate_sentences(True)
    # label_sentences()
    # lower_file('seen_sentences.csv')