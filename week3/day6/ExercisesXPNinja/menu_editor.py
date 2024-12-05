#deal with the UI (user interface), eg. showing the user menu and getting user input, etc.
#should not have any details about the menu file itself (encapsulation)
# load_manager()- this function should create a new MenuManager instance.
from menu_manager import MenuManager
import string


def load_manager():
    return MenuManager()

# show_user_menu() - this function should display the program menu 
# (not the restaurant menu!), and ask the user to choose an item. 
# Call the appropriate function that matches the user’s input.
def show_user_menu(user_manager):
    option = ''
    isChanged = False
    options = '''
        MENU
        (a) Add an item
        (d) Delete an item
        (v) View the menu
        (x) Exit
'''
    while option != 'x':
        print(options)
        option = input("Pleace, chose option: ")
        if option == 'a':
            add_item_to_menu(user_manager)
        elif option == 'd':
            remove_item_from_menu(user_manager)
        elif option == 'v':
            show_restaurant_menu(user_manager)
        
    isChanged = user_manager.save_to_file()
    if isChanged:
        print("Changes was saved. Goodbuy!")
    else:
        print("No changes to save")
            

# add_item_to_menu() - this will ask the user to input the item’s name and price. 
# It will not interact with the menu itself, but simply call the appropriate 
# function from the MenuManager object.
# If the item was added successfully print a message which states: 
# item was added successfully.
def add_item_to_menu(user_manager):
    name = input("enter a new posission: ")
    price = int(input(f"enter {name}'s price: "))
    result = user_manager.add_item(name, price)
    if result:
        print(f"{name} was added successfuly")
        
    elif not result:
        print(f"{name} already exist")

# remove_item_from_menu()- this function should ask the user to input the name 
# of the item they want to remove from the restaurant’s menu. The function should
#  not interact with the menu itself, but simply call the appropriate function 
# from the MenuManager object.
# If the item was deleted successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.
def remove_item_from_menu(user_manager):
    item = input("enter posission to delete: ").capitalize()
    return user_manager.remove_item(item)
    
# show_restaurant_menu() - print the restaurant’s menu.
def show_restaurant_menu(user_manager):
    print("\n *******Menu*******\n")
    for item in user_manager.menu['items']:
        print(f"- {item['name']} - {item['price']}$")

# When the user chooses to exit the program, first write the menu 
# to the file and then print a message that states that the menu was 
# saved, finally exit the program.

# After exiting the program the changes should be reflected in the menu 
# (see Part 1.1) and in the JSON file.

# Here’s an example of the menu shown to the user:
# MENU
#(a) Add an item
#(d) Delete an item
#(v) View the menu
#(x) Exit

# def main():
#     manager = load_manager()
#     show_user_menu(manager)

# main()