#Write a function to find the max number in a list

def maximum(alist):
    max_num = 0
    for a in alist:
        if a > max_num:
            max_num = a
    return max_num

print(maximum([1, 40, 8, 0]))