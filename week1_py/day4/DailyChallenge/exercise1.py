#Ask the user for a number and a length.
# Create a program that prints a list of multiples 
# of the number until the list length reaches length.
number = int(input('enter number: '))
length = int(input('enter length: '))
multiples = []
for i in range(1, length):
    multiples.append(number**i)
print(f"number:{number} - length: {length} -> {multiples}")