#Write code that asks the user for 
# a number and determines whether this number is odd or even.

num = int(input("Give me a number"))
if num == 0:
    print(num, " is zero")
elif num % 2 == 0:
    print(num, " is even")
else:
    print(num, " is odd")
