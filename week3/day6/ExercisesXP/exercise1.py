# Create a function called get_words_from_file.
#  This function should read the file’s content and return 
# the words as a collection. What is the correct data type to 
# store the words?
import os
import random


def get_words_from_file(file_name):
    words = []
    with open(file_name) as file:
        for line in file:
            line = file.readline()
            words.append(line.strip())

    return words


script_dir = os.path.dirname(os.path.abspath(__file__))  # Directory of the script
file_name = 'sowpods.txt'
absolute_path = os.path.join(script_dir, file_name)
# print(get_words_from_file(absolute_path))

# Create another function called get_random_sentence which 
# takes a single parameter called length. The length parameter 
# will be used to determine how many words the sentence should
#  have. The function should:
# use the words list to get your random words.
# the amount of words should be the value of the length parameter.
def get_random_sentence(length):
    words = get_words_from_file(absolute_path)
    random_words = random.sample(words, length)
    return random_words

# print(get_random_sentence(3))

# Take the random words and create a sentence (using a python method),
#  the sentence should be lower case.
def make_sentence(words_list):
    return ' '.join(words_list)

# print(make_sentence(get_random_sentence(5)))

# Create a function called main which will:

# Print a message explaining what the program does.

# Ask the user how long they want the sentence to be. Acceptable 
# values are: an integer between 2 and 20. Validate your data and 
# test your validation!
# If the user inputs incorrect data, print an error message and end the program.
# If the user inputs correct data, run your code.
def main():
    print(f'this program reads file {file_name} and combines a sentance from random words')
    length = input("enter a length of sentance (from 2 to 20 words): ")
    try:
        length = int(length)
    except ValueError:
            print("Invalid input. Please enter a valid integer.")
    if length > 20:
        raise ValueError("words limit is 20")
    if length < 2:
        raise ValueError("length minimum is 2")
    
    print(make_sentence(get_random_sentence(length)))
    

main()
