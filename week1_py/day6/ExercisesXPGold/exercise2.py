# Before asking the user to input a person’s name 
# print out all of the names in the dictionary.
# If the person that the user types is not found 
# in the dictionary, print an error message 
# (“Sorry, we don’t have the birthday information 
# for <person’s name>”)
birthdays = {"mom": '1966/07/26', 'huby': '1983/09/24', 'Anastasia': '1995/05/23', 'grama': '1945/11/04', 'Simona': '2022/12/01'}
name = input(f'''Welcome! You can look up the birthdays 
             of the people in the list! 
             {','.join(list(name for name in birthdays))}
             Persone? ''')
if name in birthdays:
    print(f"{name} has birthday on {birthdays[name]}")
else:
    print(f"Sorry, we don’t have the birthday information for {name}")
