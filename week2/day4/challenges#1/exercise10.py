#Write a function that prints the longest word in a list.

def print_the_longest(alist):
    longest_word = ''
    longest_len = 0
    for a in alist:
        if len(a) > longest_len:
            longest_len = len(a)
            longest_word = a

    return longest_word

print(print_the_longest(['a', 'bbb', 'cc']))