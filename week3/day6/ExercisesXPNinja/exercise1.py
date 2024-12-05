# 1)Create a new list of special Valentine’s day items inside the json file. 
# For now the list should be empty.

# 2)Ask to the manager for a new Valentine item to add, if the item is 
# correct (ie. follows the rules below), then add it to the list inside 
# the json file.
# *Each word in the item name should begin with an uppercase letter and 
# because it’s Valentines Day, the first word needs to begin with a capital “V”.

# *If the name contains connection words, they should begin in lowercase.
# Example: Vegetable Soup of Valentines-day

# *The name of the meal needs to contain at least two “e”, and no numbers.

# *The price needs to match the following pattern: XX,14, where X are numbers.

# 3)Create an algorithm that displays a heart made of stars (*), 
# when the menu is showed.
# from 
from menu_editor import MenuManager
from menu_editor import load_manager, add_item_to_menu

def main():
    pass
    manager = load_manager()
    manager.add_item_to_menu()

main()