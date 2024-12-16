# In the file menu_manager.py, create a new class 
# called MenuManager
from menu_item import MenuItem
from main import get_menu_items

class MenuManager:
    def __init__(self,name, conn=None):
        self.name = name
        self.conn = conn

        
    def __str__(self):
        return f'restaurant manager user {self.name}'
    # Create a Class Method called get_by_name that 
    # will return a single item from the Menu_Items 
    # table depending on it’s name, if an object is not 
    # found (there is no item matching the name in the 
    #        get_by_name method) return None.
    def get_by_name(self, item_name):
        '''return a single item from the Menu_Items or None'''

        query = f"SELECT * FROM menu_items WHERE item_name = '{item_name}';"
        try:
            cursor = self.conn.cursor()
            cursor.execute(query)
            menu_item = cursor.fetchone()
            cursor.close()
            return menu_item


        except Exception as e:
            print(f"Error: {e}")

    # Create a Class Method called all_items which will 
    # return a list of all the items from the Menu_Items table.
    def all_items(self):
        '''return a list of all the items from the Menu_Items table'''
        return get_menu_items(self.conn)
