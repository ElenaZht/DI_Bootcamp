#this will contain functions to 
# show the main menu, 
# handle user’s input, and 
# show the game summary before exiting
from game import Game


def get_user_menu_choice():
    # this should display a simple menu,
    # get the user’s choice (with data validation), 
    # and return the choice. No looping should occur here.
    # The possibles choices are : 
    # Play a new game or Show scores or Quit
    print('''
                **Menu**
              (g) play a new game
              (s) show scores 
              (x) exit
            ''')
    option = input('chose the option: ')
    if option in ['g', 's', 'x']:
        return option
    else:
        print("invalid option")

def print_results(results):
    print("\n ***Your results***\n")
    print(f"you won {results['win']} times")
    print(f"you lose {results['lose']} times")
    print(f"you had draw {results['draw']} times")
    #this should print the results of the games played. 
    # It should have a single parameter named results; 
    # which will be a dictionary of the results of the 
    # games played. It should display these results in a 
    # user-friendly way, and thank the user for playing.
    #Note: results should be in this form: {win: 2,loss: 4,draw: 3}. 
    # Bear in mind that this dictionary will need to be created 
    # and populated in some other part of our code, and 
    # passed in to the print_results function at the right time.


def main():
    option = ''
    score = {}
    while option != 'x':
        option = get_user_menu_choice()
        if option == 'g':
            new_game = Game()
            game_result = new_game.play()
            score = new_game.get_score()
            
        if option == 's':
            if score != {}:
                score = new_game.get_score()
                print_results(score)
            else:
                print("You have no games yet")

    if option == 'x':
        if score != {}: 
            print_results(score)
            print("Thank you for playing!")
        else:
            print("Buy!")
    #the main function. It should take care of 3 things:
    # Displaying the menu repeatedly, 
    # until the user types in the value to exit the 
    # program: ‘x’ or ‘q’, whatever you decide. 
    # (Make use of the get_user_menu_choice function)

    # When the user chooses to play a game:
    # Create a new Game object (see below), 
    # and call its play() function, receiving 
    # the result of the game that is returned.
    # Remember the results of every game that is played.

    # When the user chooses to exit the program, 
    # call the print_results function in order to 
    # display a summary of all the games played.

main()