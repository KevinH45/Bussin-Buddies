import fasttext.util
import numpy as np
from sklearn.neighbors import NearestNeighbors
from transformers import BertTokenizer, BertModel
import torch
class Model:
    def __init__(self):
        pass
    def load_model(self):
        self.tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
        self.model = BertModel.from_pretrained('bert-base-uncased')

    def embed_bio(self, bio: str):
        tokens = self.tokenizer(bio, return_tensors='pt')
        with torch.no_grad():
            outputs = self.model(**tokens)
        last_hidden_states = outputs.last_hidden_state
        return last_hidden_states[0].sum(axis=0)/len(last_hidden_states[0])

class KNN: 
    def __init__(self):
        self.m = Model()
        self.m.load_model()

    def rank_users(self, uids, embeddings, user_embedding):
        neighbors = min(len(embeddings), 10)
        model = NearestNeighbors(n_neighbors=neighbors,
                         metric='cosine',
                         algorithm='brute',
                         n_jobs=-1)

        model.fit(np.array(embeddings))
        res = (model.kneighbors(np.array(user_embedding).reshape(1, -1), neighbors))
        return [uids[x] for x in list(res[1][0])]

    def recommend(self, user_embedding, embed_map, posts):
        # Maps post_id to list of people
        users = self.rank_users(list(embed_map.keys()), list(embed_map.values()), user_embedding)
        avgs = {}
        for post_id, people in posts.items():
            total = 0
            for u in people:
                total += users.index(u)
            avgs[post_id] =  total/len(people)
        #print(sorted(avgs.keys(), key=lambda x: avgs[x])[:10])
        return sorted(avgs.keys(), key=lambda x: avgs[x])[:10]
