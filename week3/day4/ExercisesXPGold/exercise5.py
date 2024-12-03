# Create a Python program that will generate a 
# good password for yo

# 1)Ask the user to type in the number of characters 
# that the password should have (password length) – 
# between 6 and 30 characters.

# 2)Validate the input. Make sure the user is inputing 
# a number between 6 to 30. Create a loop which will 
# continue to ask the user for an input until they 
# enter a valid one.

# 3)Generate a password with the required length

#4)Print the password with a user-friendly message 
# which reminds the user to keep the password in a safe place!

# Each password should contain:
# At least 1 digit (0-9)
# At least 1 lower-case character (a-z)
# At least 1 upper-case character (A-Z)
# At least 1 special character (eg. !, @, #, $, %, ^, _, …)
# Once there is at least 1 of each, the rest of the 
# password should be composed of more characters from 
# the options presented above.
#Create a test function first!
# Do the following steps 100 times, with different password lengths:
# Generate a password.
# Test the password to ensure that:
# it fulfills all the requirements above (eg. it has at 
# least one digit, etc.)
# it has the specified length: between 6 to 30
import re
import string
import random


def password_generator(len):
    password = []
    char_sets = [
        string.digits,               # '0123456789'
        string.ascii_lowercase,      # 'abcdefghijklmnopqrstuvwxyz'
        string.ascii_uppercase,      # 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        string.punctuation           # '!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~'

    ]
    for i in range(len):
        password.append(random.choice(char_sets[i % 4]))

    random.shuffle(password)
    return ''.join(password)


def test_password_generator(length, password):
    
    if len(password) != length: #not required length
        return False
    if len(password) < 6 or len(password) > 30: #less than 6 or more then 30 chars
        return False
    if not re.search(r'\d', password): #has no digits
        return False
    if not re.search(r'[a-z]', password): #has no lowercase letter
        return False
    if not re.search(r'[A-Z]', password): #has no uppercase letter
        return False
    if not re.search(r'[^a-zA-Z0-9]', password):
        return False
    
    return True
    


# print(test_password_generator(password))
def main():
    for i in range(100):
        length = random.randint(6, 31)
        password = password_generator(length)
        is_valid = test_password_generator(length, password)
        print(f"password: {password} is {'valid' if is_valid else 'invalid'}")


main()