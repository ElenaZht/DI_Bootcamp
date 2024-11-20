# Write a function that accepts one parameter (an int: X)
#  and returns the value of X+XX+XXX+XXXX.
# Example:
# If X=3, the output when calling our function should 
# be 3702 (3 + 33 + 333 + 3333)

# Hint: treating our number as a int or a str at different
#  points in our code may be helpful
def x_sum(x):
    x_str = x + "+" + x*2 + "+" + x*3 + "+" + x*4
    summa = 0
    print(sum(list(map(int, x_str.split('+')))))
    return summa


print(x_sum(input('enter a number ')))