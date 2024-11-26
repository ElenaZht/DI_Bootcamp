#Write a function that accepts an undefined number of 
# keyworded arguments and return the count of different 
# types

def type_count(**kwargs):
    count = {}
    
    for k in kwargs:
        if type(kwargs[k]) in count:
            count[type(kwargs[k])] += 1
        else:
            count[type(kwargs[k])] = 1

    return count

types = type_count(a=1,b='string',c=1.0,d=True,e=False)
for t in types:
    print(f"{t.__name__}: {types[t]}")