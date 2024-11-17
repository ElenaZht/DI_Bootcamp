#A perfect number is a positive integer that is 
# equal to the sum of its divisors.
# However, the number itself is not included in the sum.

# Ask the user for a number and print whether 
# or not it is a perfect number. If yes, print 
# True else False.
# Hint: Google perfect numbers
x = int(input('Enter the Number:')) 
if x <= 0:
    print(False)
divisors = []
for i in range(x-1, 0, -1):
    if x % i == 0:
        divisors.append(i)

if sum(divisors) == x:
    print(True)
else:
    print(False)
