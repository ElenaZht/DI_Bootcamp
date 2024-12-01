import os

class AnagramChecker:
    def __init__(self):
        # make file callable from any dir
        script_dir = os.path.dirname(os.path.abspath(__file__))
        file_name = 'sowpods.txt'
        absolute_path = os.path.join(script_dir, file_name)

        self.load_words(absolute_path)
        

    def load_words(self, path):
        self.all_words_dict = {}
        with open(path) as file:
            #create dict with keys 'Letter': list[] of words on this letter
            for line in file:
                first_letter = line.strip()[0]
                if first_letter in self.all_words_dict:
                   self.all_words_dict[first_letter].append(line.strip())
                else:
                   self.all_words_dict[first_letter] = [line.strip()]

    def is_valid_word(self, word):
        if ' ' in word:
            return False
        word = word.upper().strip()
        if not word.isalpha():
            return False
        if word in self.all_words_dict[word[0]]:
            return True
        return False

    def get_anagrams(self, word):
        #return anagram list
        anagrams_list = []
        for letter in word:
            search_area = self.all_words_dict[letter]
            for candidate in search_area:
                if self.is_anagram(word, candidate):
                   anagrams_list.append(candidate) 
        return anagrams_list
    
    @staticmethod
    def is_anagram(word1, word2):
        #return bool
        if len(word1) != len(word2):
            return False
        return sorted(word1) == sorted(word2)

        




def test():
    anagram = AnagramChecker()
    print(anagram.is_anagram('EAT', 'TEA'))
    print(anagram.is_anagram('EAT', 'TEE'))
    print(anagram.is_anagram('EAT', 'TE'))

    print(anagram.get_anagrams('EAT'))

# test()
