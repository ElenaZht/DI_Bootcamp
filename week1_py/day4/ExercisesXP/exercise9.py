# A movie theater charges different ticket 
# prices depending on a person’s age.
# - if a person is under the age of 3, the ticket is free.
# - if they are between 3 and 12, the ticket is $10.
# - if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s 
# tickets and print it out.
baby = 0
child = 10
adult = 15
total = 0

age = input("what's your age? ")
while age != 'quit':
    if int(age) <= 3:
        total += baby
    elif 12 > int(age) > 3:
        total += child
    else:
        total += adult
    age = input("what's your age? ")
print(f"your tichets in total {total}$")

# A group of teenagers are coming to your
#  movie theater and want to watch a movie 
# that is restricted for people between the 
# ages of 16 and 21.
# Given a list of names, write a program 
# that asks teenager for their age, if 
# they are not permitted to watch the movie,
#  remove them from the list.
# At the end, print the final list.
guests = ["Marine", "Ashton", "Dany", "Julia", "Steve"]
guests_copy = ["Marine", "Ashton", "Dany", "Julia", "Steve"]

for guest in guests:
    person_age = int(input(f'hi, {guest}! how old are you? '))
    if 22 >person_age > 15:
        guests_copy.remove(guest)

for guest in guests_copy:
    print(guest)

