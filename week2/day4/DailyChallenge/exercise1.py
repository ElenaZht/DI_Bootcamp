# Write a program that accepts a comma separated sequence 
# of words as input and prints the words in a comma-separated 
# sequence after sorting them alphabetically.
# Use List Comprehension
# Example:

# Suppose the following input is supplied to the program: 
# without,hello,bag,world
# Then, the output should be: bag,hello,without,world
def sort_words(words):
   words.sort()
   return ', '.join(words)

words = (input("enter few words by comma:\n")).split(', ')
print(sort_words(words))