# Ask the user to input a number from 1 to 9 (including).
number = input('input an any nomber from 1 to 9\n')

# Get a random number between 1 and 9. Hint: random module.
import random
random_number = random.randint(1, 9)
games = []
# If the user guesses the correct number print a message 
# that says Winner.# If the user guesses the wrong number 
# print a message that says better luck next time.
while number != 'quit':

    if int(number) == random_number:
        print("Winner!")
        games.append(f'num {random_number} your guess {number} Winner')
    else:
        print('Better luck next time!')
        games.append(f'num {random_number} your guess {number} Looser')
    number = input('input an any nomber from 1 to 9\n')
    
# Bonus: use a loop that allows the user to keep guessing 
# until they want to quit.
# Bonus 2: on exiting the loop tally up and display total 
# games won and lost.
for game in games:
    print(game)