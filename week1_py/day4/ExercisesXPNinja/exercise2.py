# Store the list of numbers in a variable.
# nums = [3, 47, 99, -80, 3, 97, 54, -23, 99, 7]

#ask the user for 10 numbers between -100 and 100
# nums = []
# for i in range(1, 11):
#     i = int(input('enter number between -100 and 100 '))
#     nums.append(i)

#generate 10 random integers yourself
# import random
# nums = []
# for i in range(1, 11):
#     nums.append(random.randint(-100, 100))

#Instead of always generating 10 integers, 
# let the amount of integers also be random! 
# Generate a random positive integer no smaller than 50.
import random
lenth = int(random.random())
nums = []
for i in range(lenth):
    nums.append(random.randint(-100, 100))

#Print the following information:
# a. The list of numbers – printed in a single line
print(' '.join(map(str, nums)))

# b. The list of numbers – sorted in descending order
nums.sort(reverse=True)
print(nums)

# c. The sum of all the numbers
nums_sum = sum(nums)
print(nums_sum)

# A list containing the first and the last numbers.
borders = [min(nums), max(nums)]
print(f"the min and max {borders}")

#A list of all the numbers greater than 50.
nums_more_then50 = [x for x in nums if x > 50]
print('all that more than 50', nums_more_then50)

#A list of all the numbers smaller than 10.
nums_less_then10 = [x for x in nums if x < 10]
print('all that less then 10', nums_less_then10)

#A list of all the numbers squared
squared_nums = [x**2 for x in nums]
print("all squared", squared_nums)

#The numbers without any duplicates – 
# also print how many numbers are in the new list.
nums_unique = list(set(nums))
print("unique nums ", nums_unique, f"{len(nums_unique)} in total")

#The average of all the numbers.

average = nums_sum / len(nums_unique)
print(f"average is {average}")

#The largest number.
print("min", min(nums))

#The smallest number.
print("max", max(nums))

#Find the sum, average, largest and smallest number without 
# using built in functions.

my_sum = 0
largest = float('-inf')
smallest = float('inf')
for num in nums:
    my_sum += num
    if num > largest:
        largest = num
    if num < smallest:
        smallest = num
print(f"my sum is {my_sum}, smallest {smallest}, largest {largest}")


