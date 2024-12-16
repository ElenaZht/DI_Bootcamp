from menu_item import MenuItem
from menu_manager import MenuManager
from main import connect_to_db, close_connection, get_menu_items
from menu_editor import show_user_menu


def test_menu_item():
    connection = connect_to_db()
    apple = MenuItem('apple', 1, connection)
    pear = MenuItem('pear', 2, connection)

    apple.save()
    apple.save() #check double insert
    pear.save()

    apple.delete()
    apple.delete() #check double delete

    pear.update('pear', 15)
    pear.update('sweet pear', 15)

    close_connection(connection)


def test_manager():
    connection = connect_to_db()
    manager = MenuManager('Lena', connection)

    #inserting items to table
    apple = MenuItem('apple', 1, connection)
    banana = MenuItem('banana', 2, connection)
    orange = MenuItem('orange', 3, connection)
    apple.save()
    banana.save()
    orange.save()

    manager.all_items()

    print('getting banana...', manager.get_by_name('banana'))
    print('getting apple..', manager.get_by_name('apple'))
    close_connection(connection)

def test_menu_editor():
    connection = connect_to_db()
    manager = MenuManager('Lena', connection)

    show_user_menu(manager)
    close_connection(connection)

# test_menu_item()
# test_manager()
test_menu_editor()