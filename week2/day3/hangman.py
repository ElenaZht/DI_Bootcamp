# The computer choose a random word and mark stars for each 
# letter of each word.Then the player will guess a letter.
# If that letter is in the word(s) then the computer fills 
# the letter in all the correct positions of the word.
# If the letter isn’t in the word(s) then add a body part 
# to the gallows (head, body, left arm, right arm, left leg,
#  right leg).
# The player will continue guessing letters until they can 
# either solve the word(s) (or phrase) or all six body parts
#  are on the gallows.
# The player can’t guess the same letter twice.
import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist)
#hide all the word with excuding white spaces****
hidden_word = ''.join(['*' if char != ' ' else ' ' for char in word])
prev_guesses = []
lifes = 6

def open_char(hidden_word, guessed_char):
    '''Opens right guessed chars in hidden word, other chars still'''
    new_hidden = ''
    for idx, char in enumerate(word):
        if char == guessed_char:
            new_hidden += guessed_char
        else:
            new_hidden += hidden_word[idx]
    return new_hidden

while lifes > 0 and hidden_word != word:
    print(f"Word: {hidden_word}")
    guess = input('Guess a letter: ').lower()
    
    if guess in prev_guesses:
        print('You already guessed that letter.')
        continue
    
    prev_guesses.append(guess)
    
    if guess in word:
        print(f"Good job! '{guess}' is in the word.")
        hidden_word = open_char(hidden_word, guess)
    else:
        lifes -= 1
        print(f"Nope! '{guess}' is not in the word. Lives remaining: {lifes}")
        
if lifes == 0:
    print(f"You lose! The word was: {word}")
else:
    print(f"Congratulations! You guessed the word: {word}")
