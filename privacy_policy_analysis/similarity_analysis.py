# get list of privacy policies
import chardet
import os
policies = {}
for office in os.listdir('./policy_annotation/policy_words'):
    for filename in os.listdir(f'./policy_annotation/policy_words/{office}'):
        # Detect file encoding and read the word sets of the two policies
        with open(f'./policy_annotation/policy_words/{office}/{filename}', 'rb') as f:
            result = chardet.detect(f.read())
        with open(f'./policy_annotation/policy_words/{office}/{filename}', 'r', encoding=result['encoding']) as f:
            policies[office + "/" + filename] = f.read()

# convert privacy policies to vectors
from sklearn.feature_extraction.text import TfidfVectorizer
vectorizer = TfidfVectorizer()
vectors = vectorizer.fit_transform(policies.values()).toarray().tolist()

# dictionary mapping names to vectors
policy_vectors = {policy_name: vector for policy_name, vector in zip(policies.keys(), vectors)}

# calculate the similarity index
from sklearn.cluster import KMeans
num_clusters = 6
kmeans = KMeans(n_clusters=num_clusters)

# get the vectors value
vector_values = list(policy_vectors.values())

# fit the kmeans model
kmeans.fit(vector_values)

# predict the clusters
cluster_centers = kmeans.predict(vector_values)

# Group vectors by cluster
clusters = {i: [] for i in range(num_clusters)}
for i, cluster in enumerate(cluster_centers):
    clusters[cluster].append(list(policy_vectors.keys())[i])

# Write each cluster to a separate file
for cluster, policy_names_in_cluster in clusters.items():
    with open(f'./clusters/cluster_{cluster}.txt', "w") as f:
        for policy_name in policy_names_in_cluster:
            f.write(f"{policy_name}\n")