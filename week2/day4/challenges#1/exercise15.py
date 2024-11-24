#Write a function that returns common divisors of 2 numbers:

def common_div(num1, num2):
    divs = []
    for r in range(2, min(num1, num2) + 1):
        if num1 % r == 0 and num2 % r == 0:
            divs.append(r)

    return(divs)

print(common_div(20, 10))
    