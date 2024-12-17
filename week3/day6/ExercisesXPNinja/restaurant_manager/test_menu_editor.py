from menu_manager import MenuManager
from menu_editor import load_manager, show_user_menu

def test():
    test_manager = load_manager()
    show_user_menu(test_manager)


test()