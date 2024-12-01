#This will contain all the UI (user interface) 
# functionality of your program, and will rely on 
# AnagramChecker for the anagram-related logic.
from anagram_checker import AnagramChecker

def main():
    option = ''
    while option != 'x':
        print('''
            \n***Anagram generator***
            
            (a) to check for anagrams
            (x) exit\n
            ''')
        option = input('Pleace, chose option: ')
        if option == 'x':
            print("Goodbuy!")
        elif option == 'a':
            word = input("enter any word to check anagrams: ").upper().strip()
            print(f"the word is {word}")
            anagram_checker = AnagramChecker()
            is_valid = anagram_checker.is_valid_word(word)
            if not is_valid:
                print(f"Sorry! {word} is note valid")
                continue
            else:
                print("and its valid, go to try")
            anagrams = anagram_checker.get_anagrams(word)
            if len(anagrams) <= 1:
                print(f'No anagrams was found! Really unique wird {word}')
            else:
                print('here what i found\n', anagrams)



main()