# Given a tuple which value is integers, 
# is it possible to add more integers to the tuple?

my_tuple = (1, 2, 3)
# my_tuple[3] = 4 #'tuple' object does not support item assignment

#Option 1 - convert to list
my_tuple_list = list(my_tuple)
my_tuple_list.append(5)
my_tuple = tuple(my_tuple_list)
print("option 1", my_tuple)

#Option2 - add another tuple
one_more_tuple = (5, 6)
my_tuple += one_more_tuple
print("option2", my_tuple)