#Write a function that returns the amount of words 
# in a sentence with length > k:

def big_strings(k, sentence):
    count = 0
    for word in sentence.split():
        if len(word) > k:
            count += 1
    return count


print(big_strings(4, 'i love icecreams with nice toppings'))

