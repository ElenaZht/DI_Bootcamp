from menu_item import MenuItem
from menu_manager import MenuManager


def show_user_menu(manager):
    while True:
        print('''
            *** Restaurant Manager System ***
            1. View an Item (V)
            2. Add an Item (A)
            3. Delete an Item (D)
            4. Update an Item (U)
            5. Show the Menu (S)
            6. Exit (X)
        ''')
        option = input("Choose an option: ").lower()
        if option == 'v':
            display_item(manager)

        elif option == 'a':
            add_item_to_menu(manager)

        elif option == 'd':
            remove_item_from_menu(manager)

        elif option == 'u':
            update_item_from_menu(manager)

        elif option == 's':
            show_restaurant_menu(manager)

        elif option == 'x':
            print("Exiting... All changes saved.")
            break
        else:
            print("Invalid option. Please try again.")

def add_item_to_menu(manager):
    name = input("Enter item name: ")
    price = int(input("Enter item price: "))
    new_item = MenuItem(name, price, manager.conn)
    try:
        new_item.save()
        print(f"Item '{name}' was added successfully.")
    except Exception as e:
        print(f"Failed to add item '{name}': {e}")

def remove_item_from_menu(manager):
    name = input("Enter the name of the item to delete: ")
    item_to_delete = manager.get_by_name(name)
    if item_to_delete:
        try:
            menu_item = MenuItem(name, item_to_delete[1], manager.conn)
            menu_item.delete()
            print(f"Item '{name}' was deleted successfully.")
        except Exception as e:
            print(f"Error deleting item '{name}': {e}")
    else:
        print(f"Item '{name}' does not exist.")

def update_item_from_menu(manager):
    name = input("Enter the name of the item to update: ")
    item = manager.get_by_name(name)
    if item:
        new_name = input("Enter new name: ")
        new_price = int(input("Enter new price: "))
        menu_item = MenuItem(name, item[1], manager.conn)
        try:
            menu_item.update(new_name, new_price)
            print(f"Item '{name}' was updated successfully.")
        except Exception as e:
            print(f"Error updating item '{name}': {e}")
    else:
        print(f"Item '{name}' does not exist.")

def show_restaurant_menu(manager):
    items = manager.all_items()
    if items:
        print("Restaurant Menu:")
        for item in items:
            print(f"Name: {item[0]}, Price: {item[1]}")
    else:
        print("The menu is empty.")

def display_item(manager):
    name = input("Enter the item name: ")
    item = manager.get_by_name(name)
    if item != None:
        print(f"Name: {item[0]}, Price: {item[1]}")
    else:
        print(f"Item '{name}' does not exist.")
