#Write a function that test if a number is prime
def if_prime(num):
    for r in range(2, num):
        if num % r == 0:
            return False
    return True

print(11, if_prime(11))
print(6, if_prime(6))

