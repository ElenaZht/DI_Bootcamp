# Write a function that finds the longest word in a sentence. 
# If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part 
# of the word (e.g. O’Connor is 8 characters long).

def longest_word(string):
    max_len = 0
    max_word = ''
    for s in string.split():
        if len(s) > max_len:
            max_len = len(s)
            max_word = s
    return max_word

string1 = "Margaret's toy is a pretty doll."
string2 = "A thing of beauty is a joy forever."
string3 = "Forgetfulness is by all means powerless!"

print(longest_word(string1))
print(longest_word(string2))
print(longest_word(string3))