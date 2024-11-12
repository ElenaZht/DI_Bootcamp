import random

# Using the input function, ask the user for a string. 
# The string must be 10 characters long.
user_str = input("Insert a string 10 chars long ")

# If it’s less than 10 characters, print a message 
# which states “string not long enough”.
if len(user_str) < 10:
    print("string not long enough")

# If it’s more than 10 characters, print a message which states “string too long”.
if len(user_str) > 10:
    print("string too long")

# If it’s 10 characters, print a message 
# which states “perfect string” and continue the exercise.
if len(user_str) == 10:
    print("perfect string")

# Then, print the first and last characters of the given text.
# The user enters "HelloWorld"
# Then you have to print 
# H
# d
first_letter = user_str[0]
last_letter = user_str[-1]
print(first_letter)
print(last_letter)

# 3. Using a for loop, construct the string character by character: 
# Print the first character, then the second, then the third, 
# until the full string is printed. For example:

# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld

pref = ''
for letter in user_str:
    pref += letter
    print(pref)

# 4. Bonus: Swap some characters around then print the newly jumbled string 
# (hint: look into the shuffle method). For example:

# Hlrolelwod

user_list = list(user_str)
random.shuffle(user_list)
print(''.join(user_list))