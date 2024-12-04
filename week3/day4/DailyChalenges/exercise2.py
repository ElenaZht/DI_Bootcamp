#{"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}
#You have to recreate the result using a translator module. 
from deep_translator import GoogleTranslator

french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
translation_dict = {}
for word in french_words:
    translation_dict[word] = GoogleTranslator(source='fr', target='en').translate(word)

print(translation_dict)