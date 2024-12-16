# 2) In the file menu_item.py, create a new class 
# called MenuItem, the attributes should be the name 
# and price of each item.
from main import connect_to_db, close_connection


class MenuItem:
    def __init__(self, name, price, conn=None):
        self.name = name
        self.price = price
        self.conn = conn

    #Create several methods (save, delete, update) these 
    # methods will allow a user to save, delete and update 
    # items from the Menu_Items table. The update method can 
    # update the name as well as the price of an item.
    def save(self):
        '''saves new item in Menu_Items table db restaurant'''
        query = f'''INSERT INTO menu_items (item_name, item_price)
            SELECT '{self.name}', {self.price}
            WHERE NOT EXISTS (
            SELECT 1 FROM menu_items WHERE item_name = '{self.name}'
        );'''
        try:
            cursor = self.conn.cursor()
            cursor.execute(query)
            self.conn.commit()
            cursor.close()
        except Exception as e:
            print(f"Error: {e}")
            self.conn.rollback()

    def delete(self):
        '''deletes item from Menu_Items table db restaurant'''
        query = f"DELETE FROM menu_items WHERE item_name = '{self.name}';"

        try:
            cursor = self.conn.cursor()
            cursor.execute(query)
            self.conn.commit()
            cursor.close()
        except Exception as e:
            print(f"Error: {e}")
            self.conn.rollback()

    def update(self, new_name, new_price):
        '''updates item in Menu_Items table db restaurant'''
        query = f"UPDATE menu_items SET item_name = '{new_name}', item_price = {new_price} WHERE item_name = '{self.name}';"
        try:
            cursor = self.conn.cursor()
            cursor.execute(query)
            self.conn.commit()
            cursor.close()

            self.name = new_name
            self.price = new_price

        except Exception as e:
            print(f"Error: {e}")
            self.conn.rollback()
    


    
