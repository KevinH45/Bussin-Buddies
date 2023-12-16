import fasttext.util
import numpy as np
from sklearn.neighbors import NearestNeighbors
class Model:
    def __init__(self):
        pass
    def load_model(self):
        fasttext.util.download_model('en', if_exists='ignore') 
        ft = fasttext.load_model('cc.en.300.bin')

    def embed_bio(self, bio: str):
        ft = fasttext.load_model('cc.en.300.bin')
        return ft.get_word_vector(bio)

class KNN: 
    def __init__(self):
        m = Model()
        m.load_model()
    def rank_users(self, uids, embeddings, user_embedding):
        model = NearestNeighbors(n_neighbors=10,
                         metric='cosine',
                         algorithm='brute',
                         n_jobs=-1)

        model.fit(np.array(embeddings))
        res = (model.kneighbors(np.array(user_embedding).reshape(1, -1), 10))
        return [uids[x] for x in list(res[1][0])]

    def recommend(self, user_embedding, embed_map, posts):
        # Maps post_id to list of people
        users = self.rank_users(embed_map.keys(), embed_map.values(), user_embedding)
        avgs = {}
        for post_id, people in posts.items():
            total = 0
            for u in people:
                total += people.index(u)
            avgs[post_id] =  total/len(people)
        return sorted(avgs.keys(), key=lambda x: avgs[x])[:10]
