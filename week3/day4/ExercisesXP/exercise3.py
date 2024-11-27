# Generate random String of length 5
# Note: String must be the combination 
# of the UPPER case and lower case letters only. 
# No numbers and a special symbol.
# Hint: use the string module
import random
import string

def string_generator(len):
    all_theletters = string.ascii_letters
    random_letters = random.choices(all_theletters, k=len)
    rand_str = ''.join(random_letters)
    return rand_str

print(string_generator(5))