# Create a list of numbers 
# from one to one million and 
million_nums = list(range(0, 1_000_001))

# then use min() and max() 
# to make sure your list actually 
# starts at one and ends at one million.
min_num = min(million_nums)
max_num = max(million_nums)

#  Use the sum() function to see how quickly 
# Python can add a million numbers.
num_sum = sum(million_nums)

print(f"min is {min_num} and max is {max_num}\n and sum is {num_sum}")