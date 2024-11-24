#Write a function that accepts an undefined number of 
# keyworded arguments and return the count of different 
# types

def type_count(**kwargs):
    count = {}
    for k in kwargs:
        if type(k) in count:
            count[type(k)] += 1
        else:
            count[type(k)] = 1

print(type_count({'a': 1, 'b': 'string', 'c': 1.0, 'd': True, 'e': False}))