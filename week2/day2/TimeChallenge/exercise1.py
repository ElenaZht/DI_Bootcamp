#Write a program which takes a string and a character as 
# an input, and finds out the number of occurrences the 
# character has in the string.
str = input("enter your string:\n")
char = input("enter character:\n")
char_occurrences = list(str).count(char)
print(f"character {char} occurres in {str} {char_occurrences} times")