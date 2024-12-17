from menu_manager import MenuManager


def load_manager():
    return MenuManager()


def show_user_menu(user_manager):
    option = ''
    options = '''
        MENU
        (a) Add an item
        (d) Delete an item
        (v) View the menu
        (s) Add Valentine's Day Item
        (x) Exit
    '''
    while option != 'x':
        print(options)
        option = input("Please, choose an option: ")
        if option == 'a':
            add_item_to_menu(user_manager)
        elif option == 'd':
            remove_item_from_menu(user_manager)
        elif option == 'v':
            show_restaurant_menu(user_manager)
        elif option == 's':
            add_valentine_item_to_menu(user_manager)

    is_changed = user_manager.save_to_file()
    if is_changed:
        print("Changes were saved. Goodbye!")
    else:
        print("No changes to save")


def add_item_to_menu(user_manager):
    name = input("Enter a new position: ").capitalize()
    price = float(input(f"Enter {name}'s price: "))
    user_manager.add_item(name, price)


def remove_item_from_menu(user_manager):
    item = input("Enter position to delete: ").capitalize()
    user_manager.remove_item(item)


def add_valentine_item_to_menu(user_manager):
    name = input("Enter the name of the Valentine item: ").title()
    price = input("Enter the price (format XX,14): ")
    user_manager.add_valentine_item(name, price)


def show_restaurant_menu(user_manager):
    print("\n ********** Menu ********** \n")
    display_heart()
    print("\nMain Menu:")
    for item in user_manager.menu['items']:
        print(f"- {item['name']} - {item['price']}$")
    
    print("\nValentine's Day Specials:")
    for item in user_manager.menu.get('valentines_day_items', []):
        print(f"- {item['name']} - {item['price']}$")
    print("\n****************************")


def display_heart():
    heart = [
        "  **   **  ",
        " **** **** ",
        "***********",
        " ********* ",
        "  *******  ",
        "   *****   ",
        "    ***    ",
        "     *     "
    ]
    for row in heart:
        print(row)
