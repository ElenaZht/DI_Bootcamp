#Write a function that converts English text to morse code
#  and another one that does the opposite.
# Hint: Check the internet for a translation table, every 
# letter is separated with a space and every word is 
# separated with a slash /.
MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 
    'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', 
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', '/': '-..-.', '-': '-....-', 
    '(': '-.--.', ')': '-.--.-', ' ': '/'
}
MORSE_CODE_TO_ENGLISH_DICT = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
    '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
    '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
    '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
    '-.--': 'Y', '--..': 'Z',
    '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5',
    '-....': '6', '--...': '7', '---..': '8', '----.': '9', '-----': '0',
    '.-.-.-': '.', '--..--': ',', '..--..': '?', '-..-.': '/', '-....-': '-',
    '-.--.': '(', '-.--.-': ')', '/': ' '  # space is represented by "/"
}

def eng_to_morse(text):
    mor_text = ''
    words = text.split()
    print(words)
    for word in words:
        if mor_text != '':
            mor_text += '/ '
        chars = list(word)
        
        for char in chars:
            mor_text += MORSE_CODE_DICT.get(char.upper()) + ' '
    return mor_text


def morse_to_eng(text):
    eng_text = ''
    words = text.split('/ ')
    for word in words:
        if eng_text != '':
            eng_text += ' '
        chars = word.split(' ')
        for char in chars:
            eng_text += MORSE_CODE_TO_ENGLISH_DICT.get(char.lower(), '')
    return eng_text

morse = eng_to_morse(input("enter your sentence: \n"))
english = morse_to_eng(morse)
print(morse)
print(english)