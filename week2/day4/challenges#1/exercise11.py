#Given a list of integers and strings, put all the integers 
# in one list, and all the strings in another one.

def separator(alist):
    result = [[], []]
    for a in alist:
        if isinstance(a, str):
            result[0].append(a)
        elif isinstance(a, int):
            result[1].append(a)

    return result

print(separator(['aa', 1, 2, 3, 'bb', 4, 5, 'cc']))