#Write a function to find the sum of an array without 
# using the built in function
def my_sum(my_list):
    sum = 0
    for l in my_list:
        sum += l
    return sum

print(my_sum([1, 2, 3, 4]))
    