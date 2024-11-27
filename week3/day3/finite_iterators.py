# Chain: This function accepts a variable number of 
# iterables and loops through all of them, one by one.

# iterate over three lists
import itertools

list_one = ['a', 'b', 'c']
list_two =['d', 'e', 'f']
list_three = ['1', '2', '3']

result = itertools.chain(list_one, list_two, list_three)

for element in result:
  print (element) 
    # a
    # b
    # c
    # d
    # e
    # f
    # 1
    # 2
    # 3

print(result) #<itertools.chain object at 0x786d51da3490>
# print(result[0]) # error
#chain() object itself doesn't directly support indexing 
# like a regular list does, because it's an iterator 
# that generates values on the fly (it doesn't store them in memory).

# Accessing just the first list
first_list = list(itertools.islice(result, len(list_one))) 
 # This will slice the first 'len(list_one)' elements
print(first_list)  # Output: ['a', 'b', 'c']
# Alternatively, if you need a specific element by 
# index (e.g., 1st element in first list):
# index = 1  # The index of the element you want
# specific_element = list(itertools.islice(result, index, index+1))[0]
# print(specific_element)

#find the names of people who have the flu
names = ['Alice', 'James', 'Matt']
have_flu = [True, True, False]

result = itertools.compress(names, have_flu)

for element in result:
  print (element)

#skip elements from the iterable as long as the condition is true.
# Once the condition becomes false, it will yield the rest 
# of the elements, including the one that caused the condition 
# to fail.
my_list = [0, 0, 1, 2, 0]
result = itertools.dropwhile(lambda x: x == 0, my_list)

for elements in result:
  print (elements) # 1, 2, 0