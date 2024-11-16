# A movie theater charges different ticket prices 
# depending on a person’s age.
# - if a person is under the age of 3, the ticket is free.
# - if they are between 3 and 12, the ticket is $10.
# - if they are over the age of 12, the ticket is $15.

# Given the following object:

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
family = {}
while True:
    name = input('enter member name(or quit for stop): ')
    if name == 'quit':
        break
    age = int(input('enter member age: '))
    family[name] = age

# How much does each family member have to pay ?
# Print out the family’s total cost for the movies.
total = 0
for name, age in family.items():
    if age <= 3:
        print(f"{name} is just a baby: 0$")
        continue
    if 12 > age > 3:
        print(f"{name} is a little guy: 10$")
        total += 10
    else:
        print(f"{name} is big enough: 15$")
        total += 15

print(f"{total}$ in total")

# Bonus: Ask the user to input the names and ages 
# instead of using the provided family variable 
# (Hint: ask the user for names and ages and add 
# them into a family dictionary that is initially empty).