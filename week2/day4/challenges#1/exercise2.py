#Write a script that counts the number of spaces in a string.

def count_whitespaces(string):
    count = list(string).count(" ")
    return count

print(count_whitespaces("i love you so mocha"))