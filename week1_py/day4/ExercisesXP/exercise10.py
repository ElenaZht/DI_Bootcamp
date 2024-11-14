sandwich_orders = [
    "Tuna sandwich",
    "Pastrami sandwich",
    "Avocado sandwich",
     "Pastrami sandwich",
     "Egg sandwich",
     "Chicken sandwich",
     "Pastrami sandwich"
                ]
# The deli has run out of pastrami, 
# use a while loop to remove all 
# occurrences of “Pastrami sandwich” from sandwich_orders.
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the 
# sandwich_orders while adding them to the 
# finished_sandwiches list.
finished_sandwich = []

for sandwich in sandwich_orders[:]: #iterate by list copy
    finished_sandwich.append(sandwich)
    sandwich_orders.remove(sandwich)
    print(f"i made your {sandwich} sandwich")

# print("sandwich_orders-->", sandwich_orders)
# print("finished_sandwich-->", finished_sandwich)

# After all the sandwiches have been made, 
# print a message listing each sandwich that was 
# made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich