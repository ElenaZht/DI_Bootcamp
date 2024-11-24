#Write a function to check if a string is a palindrome:

def is_palindrom(string):
    return string == ''.join(list(string)[::-1])

print('radar', is_palindrom('radar'))
print('john', is_palindrom('john'))