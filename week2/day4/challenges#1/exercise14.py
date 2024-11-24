#Write a function that returns the average value in a 
# dictionary (assume the values are numeric)

def average_value(dictionary):
    length = len(dictionary.keys())
    summa = sum(dictionary.values())
    return summa / length

my_dict = {'a': 2, 'b': 6, 'c': 4}
print(average_value(my_dict))