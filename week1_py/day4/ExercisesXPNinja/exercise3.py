# Find an interesting paragraph of text online. 
# (Please keep it appropriate to the social context 
# of our class.)
# Paste it to your code, and store it in a variable.
paragraph = '''Alex wandered through the forest, 
eager to explore its secrets. Deep among the trees, 
an old map appeared in the dirt, as if waiting to be 
found. With a mix of excitement and curiosity, 
Alex picked it up, ready for the adventure ahead.'''

# Let’s analyze the paragraph. Print out a nicely formatted 
# message saying:
# How many characters it contains (this one is easy…).
# How many sentences it contains.
# How many words it contains.
# How many unique words it contains.
# Bonus: How many non-whitespace characters it contains.
# Bonus: The average amount of words per sentence in the paragraph.
# Bonus: the amount of non-unique words in the paragraph.
# print(f"the paragraph containes {len(paragraph)} characters")
# print(f"the paragraph containes {len(paragraph.split('. '))} sentences")
# print(f"the paragraph containes {len(paragraph.split(' '))} words")
# print(f"the paragraph containes {len(set(paragraph.split(' ')))} unique words")
# print(f"the paragraph containes{paragraph.split('')} non-whitespace characters")
non_white_spaces = [paragraph.split()]
print(non_white_spaces)