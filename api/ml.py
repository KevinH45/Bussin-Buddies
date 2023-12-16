import fasttext.util
import numpy as np
from sklearn.neighbors import NearestNeighbors
class Model:
    def __init__(self):
        pass
    def load_model(self):
        fasttext.util.download_model('en', if_exists='ignore') 
        ft = fasttext.load_model('cc.en.300.bin')
        #print(ft.words)

    def embed_bio(self, bio: str):
        ft = fasttext.load_model('cc.en.300.bin')
        return ft.get_word_vector(bio)

class KNN: 
    def __init__(self):
        pass
    def rank_users(self, people: list, uids: list, user: str):
        X = np.array([self.embed_bio(x) for x in people])
        m = Model()
        m.load_model()
        txt = m.embed_bio(user)
        model = NearestNeighbors(n_neighbors=10,
                         metric='cosine',
                         algorithm='brute',
                         n_jobs=-1)
        X = np.array(people)
        #y = np.array(postids).reshape(-1,1)
        model.fit(X)
        res = (model.kneighbors(np.array(txt).reshape(1,-1), 2))
        return [uids[x] for x in list(res[1][0])]
    
    def post_sim(self, posts: dict):
        # posts is dict with postid as key and list of 
        # call rank_users and get indexes of each person in each listing
        new_bio = "hi my name is Shreeya and I like to eat pickles."
        ppl = ["Hey there, I'm Jamie Chang—a coffee-fueled indie game developer with a knack for creating pixelated magic. Born and raised in Seoul, South Korea, I dove headfirst into coding and design as a kid. Now, my quirky games, like 'Pixel Pioneers,' are making waves in the indie gaming scene. When I'm not glued to my computer, you'll find me exploring the streets for inspiration or challenging my friends to retro gaming marathons.","G'day! I'm Alexis Turner, a sun-kissed Aussie with an unquenchable thirst for surfing. Growing up on the Gold Coast, catching waves became second nature. Nowadays, I'm a nomadic soul, chasing the perfect swell around the globe. Whether I'm riding the waves in Bali or camping out in my van along the California coast, life's a beach, and I'm just riding it.","Yo, I'm Leo Martinez, the graffiti guru from the gritty streets of Brooklyn. Armed with spray cans and a rebellious spirit, I've been turning mundane walls into vibrant canvases since I was a teenager. My art tells stories of the city's heartbeat and its people. When I'm not dodging the occasional run-in with the law, you can catch me at local galleries or sipping on a cold brew, sketching my next masterpiece."]
        ranking = self.rank_users(ppl, [1,2,3], new_bio)
        avgs = []
        for postid, userids in posts:
            sum = 0
            for u in userids:
                sum += ranking.index(u)
            avgs[postid] = sum/len(userids)
        sorted_posts = sorted(avgs.items(), key=lambda x:x[1])
        return sorted_posts.keys()