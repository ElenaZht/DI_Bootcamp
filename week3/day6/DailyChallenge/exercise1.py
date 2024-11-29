# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code
# a method to return the frequency of a word in the text (assume words are 
# separated by whitespace) return None or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.
import os
import string

class Text:
    def __init__(self, text):
        self.text = text
        self.list = self.text.lower().split()
        self.all_words = {}
        self.most_friq = 0
        self.most_word = ''
        self.analitics()
        

    def analitics(self):
        for w in self.list: #todo: separate clean
            if w in self.all_words:
                self.all_words[w] += 1
            else:
                self.all_words[w] = 1

            if self.all_words[w] > self.most_friq:
                self.most_friq = self.all_words[w]
                self.most_word = w

    def __str__(self):
        return f"{self.text[0:15]}..."

    def word_frequency(self, word):
        if word in self.all_words.keys():
            return self.all_words[word]
        else:
            print(f"there is no '{word}' in text")
            return 0
        
    def most_common(self):  
        return self.most_word
    
    def unique_words(self):
        uniques = []
        for l in self.list:
            if self.word_frequency(l) == 1:
                uniques.append(l)
        return uniques
    
    @classmethod
    def get_from_file(self, filename):
        with open(filename) as file:
            content = file.read()
        new_text = Text(content)
        return new_text
    
    @staticmethod
    def no_punctuation(text):
        # Create a translation table that maps punctuation 
        # to None (removes punctuation)
        translator = str.maketrans('', '', string.punctuation)
        # Remove punctuation
        cleaned_text = text.translate(translator)
        return cleaned_text

    @staticmethod
    def no_stop_words(text):
        stop_words = {
            'i': True, 'me': True, 'my': True, 'myself': True, 'we': True, 'our': True, 'ours': True, 'ourselves': True,
            'you': True, 'your': True, 'yours': True, 'yourself': True, 'yourselves': True, 'he': True, 'him': True,
            'his': True, 'himself': True, 'she': True, 'her': True, 'hers': True, 'herself': True, 'it': True, 'its': True,
            'itself': True, 'they': True, 'them': True, 'their': True, 'theirs': True, 'themselves': True, 'what': True,
            'which': True, 'who': True, 'whom': True, 'this': True, 'that': True, 'these': True, 'those': True, 'am': True,
            'is': True, 'are': True, 'was': True, 'were': True, 'be': True, 'been': True, 'being': True, 'have': True,
            'has': True, 'had': True, 'having': True, 'do': True, 'does': True, 'did': True, 'doing': True, 'a': True,
            'an': True, 'the': True, 'and': True, 'but': True, 'if': True, 'or': True, 'because': True, 'as': True, 'until': True,
            'while': True, 'of': True, 'at': True, 'by': True, 'for': True, 'with': True, 'about': True, 'against': True, 
            'between': True, 'into': True, 'through': True, 'during': True, 'before': True, 'after': True, 'above': True,
            'below': True, 'to': True, 'from': True, 'up': True, 'down': True, 'in': True, 'out': True, 'on': True, 'off': True,
            'over': True, 'under': True, 'again': True, 'further': True, 'then': True, 'once': True, 'here': True, 'there': True,
            'when': True, 'where': True, 'why': True, 'how': True, 'all': True, 'any': True, 'both': True, 'each': True,
            'few': True, 'more': True, 'most': True, 'other': True, 'some': True, 'such': True, 'no': True, 'nor': True,
            'not': True, 'only': True, 'own': True, 'same': True, 'so': True, 'than': True, 'too': True, 'very': True, 
            's': True, 't': True, 'can': True, 'will': True, 'just': True, 'don': True, 'should': True, 'now': True, 'd': True,
            'll': True, 'm': True, 'o': True, 're': True, 've': True, 'y': True, 'ain': True, 'aren': True, 'couldn': True, 
            'didn': True, 'doesn': True, 'hadn': True, 'hasn': True, 'haven': True, 'isn': True, 'ma': True, 'mightn': True, 
            'mustn': True, 'needn': True, 'shan': True, 'shouldn': True, 'wasn': True, 'weren': True, 'won': True, 'wouldn': True
        }
        return ' '.join([word for word in text.split() if word.lower() not in stop_words])
        

    @staticmethod
    def no_special_characters(text):
        return ''.join(char for char in text if char.isalnum() or char.isspace())



def test():

    string = '''
        Bright stars, bright skies, gentle winds, 
        gentle waves; endless journeys, endless dreams; 
        silent nights, silent thoughts, boundless hearts, 
        boundless hopes.
    '''
    my_text = Text(string)
    #word_frequency
    print('frequency of word endless', my_text.word_frequency('endless'))
    print('frequency of word blue', my_text.word_frequency('blue'))
    
    #most_common
    print('most common', my_text.most_common())

    #unique_words
    print('list of unique words', my_text.unique_words())

    #get_from_file
    script_dir = os.path.dirname(os.path.abspath(__file__))  # Directory of the script
    file_name = 'the_stranger.txt'
    absolute_path = os.path.join(script_dir, file_name)
    textobj_from_file = my_text.get_from_file(absolute_path)
    print('new text object from file:\n', textobj_from_file)

    print('\n')
    #Text methods with outer file
    print('textobj_from_file is \n', textobj_from_file)
    print('frequency of word his: ', textobj_from_file.word_frequency('his'))
    print('frequency of word unicornue: ', textobj_from_file.word_frequency('unicorn'))
    print('most common :', textobj_from_file.most_common())
    print('list of unique words, first 10:\n', textobj_from_file.unique_words()[0:10])

    #static methods
    string = '''
        The quick brown fox jumped over the lazy dog.
        The dog was not very quick, but it jumped anyway!
        The fox, quick and clever—ran off into the woods...
        The dog watched, but it did not follow. It was too lazy to care about the fox's speed?
        @The dog jumped @over the fox's back, making it run 100% faster.
        '''
    static_text = Text(string)
    #no_punctuation
    print('no punctuasion:\n', static_text.no_punctuation(string))
    #no_stop_words
    print('no stop words:\n', static_text.no_stop_words(string))
    #no_special_characters
    print('no special characters:\n', static_text.no_special_characters(string))


test()