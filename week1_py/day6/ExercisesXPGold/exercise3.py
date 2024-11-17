# Add this new code: before asking the user to 
# input a person’s name to look up, ask the user 
# to add a new birthday:
# Ask the user for a person’s name – store it in a variable.
# Ask the user for this person’s birthday 
# (in the format “YYYY/MM/DD”) - store it in a variable.
# Now add this new data into your dictionary.
# Make sure that if the user types any name that 
# exists in the dictionary – including the name that 
# he entered himself – the corresponding birthday is 
# found and displayed.
birthdays = {"mom": '1966/07/26', 'huby': '1983/09/24', 'Anastasia': '1995/05/23', 'grama': '1945/11/04', 'Simona': '2022/12/01'}
new_name = input('would you like to enter a new bd? enter the name:  ')
while new_name in birthdays:
    print(f"{new_name}'s bd on {birthdays[new_name]}")
    new_name = input('would you like to enter a new bd? enter the name:  ')

new_bd = input('enter a date: ')
birthdays[new_name] = new_bd

name = input(f'''You can look up the birthdays 
             of the people in the list! 
             {','.join(list(name for name in birthdays))}
             Persone? ''')
if name in birthdays:
    print(f"{name} has birthday on {birthdays[name]}")
else:
    print(f"Sorry, we don’t have the birthday information for {name}")