#Write a function to find if an array is monotonic 
# (sorted either ascending of descending)
def is_mono(alist):
    is_ascending = True
    is_descending = True

    if len(alist) <= 1:
        return True
    
    for idx, a in enumerate(alist):
        if idx <= 0:
            continue
        if a > alist[idx - 1]:
            is_descending = False
            # print(alist[idx - 1] ,a, 'not descending')
            
        if a < alist[idx - 1]:
            is_ascending = False
            # print(alist[idx - 1] ,a, 'not ascending')

    # print('is ascending', is_ascending, 'is descending', is_descending)
    return is_descending or is_ascending

print([7], is_mono([7]), 'must be true')
print([], is_mono([]), 'must be true')
print([7,6,5,5,2,0], is_mono([7,6,5,5,2,0]), 'must be true')
print([2,3,3,3], is_mono([2,3,3,3]), 'must be true')
print([1,2,0,4], is_mono([1,2,0,4]), 'must be false')