#Write a function that returns factorial of a number

def factorial(num):
    fact = 1
    for i in range(1, num+1):
        fact *= i
    return fact

print("!0 ", factorial(0))
print("!1 ", factorial(1))
print("!5 ", factorial(5))