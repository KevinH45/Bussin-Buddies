import fasttext.util
class Model:
    def __init__(self):
        pass
    def load_model(self):
        fasttext.util.download_model('en', if_exists='ignore') 
        ft = fasttext.load_model('cc.en.300.bin')
        #print(ft.words)

    def embed_bio(self, bio: str):
        ft = fasttext.load_model('cc.en.300.bin')
        print(ft.get_word_vector(bio))

m = Model()
m.load_model()
m.embed_bio("hi my name is Shreeya and I like to eat pickles.")