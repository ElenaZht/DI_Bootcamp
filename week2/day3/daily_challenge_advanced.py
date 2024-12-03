#create a program that finds, within list_of_numbers 
# all the pairs of number that sum to the target number

import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number   = 3728
pairs = []
dict = {}
for num in list_of_numbers:
    if (target_number - num) in dict:
        pairs.append((num, target_number - num))
        print(f"{num} and {target_number - num} sums to the target_number {target_number}")
    dict[num] = True

print(len(pairs))
