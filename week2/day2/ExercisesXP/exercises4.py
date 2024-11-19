# Create a function that accepts a number between 
# 1 and 100 and generates another number randomly 
# between 1 and 100. Use the random module.
# Compare the two numbers, if it’s the same number,
#  display a success message, otherwise show a fail 
# message and display both numbers.
import random
def guess_number(num):
    success_message = 'You won!'
    fail_message = 'You loose..'
    while num < 1 or num > 100:
        num = int(input('Guess another number between 1 and 100: '))
    random_num = random.randint(1, 100)

    if num == random_num:
        print(success_message)
    else:
        print(fail_message, random_num)

guess_number(int(input('Guess number between 1 and 100: ')))