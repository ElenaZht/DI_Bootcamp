# Create a function that will simulate the rolling of a dice.
#  Call it throw_dice. It should return an integer between
#  1 and 6.
import random
def throw_dice():
    return random.randint(1,6)

#Create a function called throw_until_doubles.
# It should keep throwing 2 dice (using your throw_dice 
# function) until they both land on the same number, ie. 
# until we reach doubles.
# For example: (1, 2), (3, 1), (5,5) → then stop throwing, 
# because doubles were reached.
# This function should return the number of times it threw 
# the dice in total. In the example above, it should return 3.
def throw_until_doubles():
    global throw_dice
    threws = 0
    dice1 = throw_dice()
    dice2 = throw_dice()
    while dice1 != dice2:
        dice1 = throw_dice()
        dice2 = throw_dice()
        threws += 1

    # print(f"doubles({dice1, dice2})!! it took {threws} threws")
    return threws

# Create a main function.
# It should throw doubles 100 times (ie. call your 
# throw_until_doubles function 100 times), and store the 
# results of those function calls (in other words, how many 
# throws it took until doubles were thrown, each time) in a 
# collection. (What kind of collection? Read below to 
# understand what we will need the data for, and this should 
# help you decide which data structure to use).
def main():
    hundred_doubles = [throw_until_doubles() for _ in range(100)]
    print(f"It took {sum(hundred_doubles)} times to reach 100 doubles!")
    print(f"In average {round(sum(hundred_doubles)/len(hundred_doubles), 2)} times to one double")

main()
# After the 100 doubles are thrown, print out a message 
# telling the user how many throws it took in total to reach 
# 100 doubles.
# Also print out a message telling the user the average amount
#  of throws it took to reach doubles. Round this off to 2 
# decimal places.

