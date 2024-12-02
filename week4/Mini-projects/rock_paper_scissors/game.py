#this will contain a 
# Game class which will have functions 
# to play a single game of rock-paper-scissors against the computer, 
# determine the game’s result, and 
# return the result.
import random


class Game:
    results = {'win': 0, 'lose': 0, 'draw': 0}

    def get_score(self):
        return self.results
    def get_user_item(self):
        user_choise = ''
        while user_choise not in ['r', 's', 'p']:
            user_choise = input("Select (r)ock, (p)aper, or (s)cissors: ")
            if not user_choise in ['r', 's', 'p']:
                print("sorry, invalid option, try again")
                continue
        return user_choise
    #Ask the user to select an item (rock/paper/scissors). 
    # Keep asking until the user has selected one of the 
    # items – use data validation and looping. Return the 
    # item at the end of the function.

    def get_computer_item(self):
        return random.choice(['r', 'p', 's'])
    #Select rock/paper/scissors at random for the computer. 
    # Return the item at the end of the function. Use python’s 
    # random.choice() function (read about it online)

    def get_game_result(self, user_item, computer_item):
        rules = {
            ('r', 's'): 'r',
            ('s', 'p'): 's',
            ('p', 'r'): 'p',
            ('s', 'r'): 'r',
            ('p', 's'): 's',
            ('r', 'p'): 'p'
        }

        if (user_item, computer_item) in rules:
            if rules[(user_item, computer_item)] == user_item:
                return 'win'
            else:
                return 'lose'
        else:
            return 'draw'
        #either win, draw, or loss. Where win means that 
        # the user has won, draw means the user and the 
        # computer got the same item, and loss means that the user has lost

    def play(self):
        user_item = self.get_user_item()
        comp_item = self.get_computer_item()
        result = self.get_game_result(user_item, comp_item)
        print(f"You chose {user_item}. Computer chose {comp_item}. You {result}!")
        self.results[result] += 1
        return result
    #play a single game
    #the function that will be called from outside the class 
    # (ie. from rock-paper-scissors.py). It will do 3 things:
    # Get the user’s item (rock/paper/scissors) and remember it
    # Get a random item for the computer (rock/paper/scissors) 
    # and remember it .Determine the results of the game by 
    # comparing the user’s item and the computer’s item
    # Print the output of the game; something like this: 
    # “You selected rock. The computer selected paper. You lose”, 
    # “You selected scissors. The computer selected scissors. You drew!”
    # Return the results of the game as a string: win;draw;loss;,
    #  where win means that the user has won, draw means the user 
    # and the computer got the same item, and loss means that the 
    # user has lost.