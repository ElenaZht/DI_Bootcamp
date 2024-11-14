# Write a loop that asks a user to enter 
# a series of pizza toppings, when the user 
# inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message 
# saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings 
# on the pizza pie and what the total price is 
# (10 + 2.5 for each topping).

toppings = []
total = 0

topping = input('choose pizza topping ')
while topping != 'quit':
    # topping = input('choose pizza topping ')
    if total == 0:
        total += 10
    toppings.append(topping)
    total += 2.5
    topping = input('choose pizza topping ')

print('you choose toppings: \n')
for top in toppings:
    print(top)
print(f"{total}$ in total")