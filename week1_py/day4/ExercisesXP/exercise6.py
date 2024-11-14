# Write a while loop that will 
# continuously ask the user for 
# their name, unless the input is equal to your name.

my_name = 'elena'
answer = input('tell me your name ')

while answer != my_name:
    answer = input('tell me your name ')

print('Hello, elena!')