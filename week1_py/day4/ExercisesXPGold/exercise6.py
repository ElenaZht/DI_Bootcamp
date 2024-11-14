# Ask a user for 7 words, store them in a list named words.
words = input('write 7 words by white space ').split(' ')

# Ask the user for a single character, store it in a variable
#  called letter.
letter = input('write a single letter\n')

# Loop through the words list and print the index of the 
# first appearence of the letter variable in each word of 
# the list.
for word in words:
    if letter in word:
        print(f"{letter} in {word} on index {word.index(letter)}")
    else:
        print(f"there is no {letter} in word {word}")

# If the letter doesn’t exist in one of the words, print a
#  friendly message with the word and the letter.
