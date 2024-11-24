#Write a function that prints elements of a list if
#  the index and the value are even:

def weird_print(alist):
    return [el for idx, el in enumerate(alist) if idx % 2 == 0 and el % 2 == 0]


print(weird_print([1,2,2,3,4,5]))

