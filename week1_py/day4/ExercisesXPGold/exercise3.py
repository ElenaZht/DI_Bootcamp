names = [
    'Samus', 
    'Cortana', 
    'V', 
    'Link', 
    'Mario', 
    'Cortana', 
    'Samus'
    ]
# Ask a user for their name, 
# if their name is in the names 
# list print out the index of 
# the first occurence of the name.
name = input('write your name ')
if name in names:
    print(names.index(name))