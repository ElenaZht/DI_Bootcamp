# Ask the user for their full name (example: “John Doe”)
# , and check the validity of their answer:
# The name should contain only letters.
# The name should contain only one space.
# The first letter of each name should be upper cased.
import re

def name_validator(name):
    pattern = r"^[A-Z][a-z]+(?: [A-Z][a-z]+)*$"
    if not re.match(pattern, name):
        # print("!name should contain letter only, one white space and every word sould be capitalized")
        return False
        
    return True

def main():

    # name = input("enter your full name: ")
    # print(f"name {name} is {'valid' if name_validator(name) else 'not valid'}")
    print('valid name: Elena Zht', name_validator('Elena Zht'))

    print('invalid name: elena zht', name_validator('elena zht'))
    print('invalid name: Elena8 Zht', name_validator('Elena8 Zht'))
    print('invalid name: ElenaZht', name_validator('ElenaZht'))



main()