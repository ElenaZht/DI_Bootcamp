# Create a variable called birthdays. Its value should 
# be a dictionary.# Initialize this variable with birthdays 
# of 5 people of your choice. For each entry in the 
# dictionary,the key should be the person’s name, and the 
# value should be their birthday. Tip : Use the 
# format “YYYY/MM/DD”.
birthdays = {"mom": '1966/07/26', 'huby': '1983/09/24', 'Anastasia': '1995/05/23', 'grama': '1945/11/04', 'Simona': '2022/12/01'}

# Print a welcome message for the user. Then tell them: 
# “You can look up the birthdays of the people in the list!”“
# Ask the user to give you a person’s name and store the 
# answer in a variable.
# Get the birthday of the name provided by the user.
# Print out the birthday with a nicely-formatted message.
name = input('Welcome! You can look up the birthdays of the people in the list! Persone? ')
print(f"{name} has birthday on {birthdays[name]}")