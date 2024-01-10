# assist in labeling the privacy policies 
import os

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
    # go through text file remove empty lines and count remaining lines
    total_lines = 0
    for candidate in os.listdir('processed_text/House'):
        try:
            with open(f'processed_text/House/{candidate}', 'r') as f:
                lines = f.readlines()
                lines = [line.replace('�', '') for line in lines if line != '\n']
            with open(f'processed_text/House/{candidate}', 'w') as f:
                f.writelines(lines)
                total_lines += len(lines)
        except Exception as e:
            print("error" + candidate + e)
    for candidate in os.listdir('processed_text/Senate'):
        try:
            with open(f'processed_text/Senate/{candidate}', 'r') as f:
                lines = f.readlines()
                lines = [line.replace('�', '') for line in lines if line != '\n']
            with open(f'processed_text/Senate/{candidate}', 'w') as f:
                f.writelines(lines)
                total_lines += len(lines)
        except Exception as e:
            print("error" + candidate + e)
    print(f"total lines: {total_lines}")

def annotate_sentences():
    import pandas as pd
    seen_sentences = {}
    # go throuhg seen sentences and add to dict
    seen_sentences_df = pd.read_csv('seen_sentences.csv', sep='|')
    for index, row in seen_sentences_df.iterrows():
        seen_sentences[row['sentence']] = row['keep']
    print(len(seen_sentences))
    # go through text file and annotate each sentence
    with open('seen_sentences.csv', 'a') as outfile:
        for candidate in os.listdir('processed_text/House'):
            with open(f'processed_text/House/{candidate}', 'r') as f:
                lines = f.readlines()
                for line in lines:
                    line = line.strip()
                    if line in seen_sentences:
                        # print("seen " + line)
                        continue
                    print("\n" + line)
                    should_keep = bool(input("Keep?: "))
                    seen_sentences[line] = should_keep
                    outfile.write(f"{line}|{should_keep}\n")
        for candidate in os.listdir('processed_text/Senate'):
            with open(f'processed_text/Senate/{candidate}', 'r') as f:
                lines = f.readlines()
                for line in lines:
                    line = line.strip()
                    if line in seen_sentences:
                        continue
                    print("\n" + line)
                    should_keep = input("Keep?: ")
                    seen_sentences[line] = should_keep
                    outfile.write(f"{line}|{should_keep}\n")


if __name__ == '__main__':
    # create_files()
    # process_files()
    # clean_files()
    annotate_sentences()