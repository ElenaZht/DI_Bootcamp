# Write a program which accepts a sequence of 
# comma-separated numbers. Generate a list 
# and a tuple which contain every number.

num_list = input('write you numbers by "," \n').split(',')
num_tuple = tuple(num_list)
print(f"the list {num_list} \nthe tuple {num_tuple}")
