#print the first four even numbers
import itertools

result = itertools.count(start = 0, step = 2)

for number in result:
# termination condition
    if number < 8:
        print (number)
    else:
        break

# print 2 three times
result = itertools.cycle('12345')
counter = 0
count_2 = 0  # Counter to track how many times 2 is printed


for number in result:
    # Check if the number is '2' and if we've printed it less than 3 times
    if number == '2' and count_2 < 3:
        print(number)
        count_2 += 1
    if count_2 == 3:  # Stop once we've printed '2' 3 times
        break

# Repeat: Takes an optional times parameter that can be used as 
# a termination condition.
# print hello two times
import itertools

result = itertools.repeat('hello', times = 4)

for word in result:
    print (word)