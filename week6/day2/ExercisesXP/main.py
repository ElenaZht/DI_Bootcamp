
# 1) Create a new database and a new table in pgAdmin

#new DB restaurant create

# CREATE TABLE Menu_Items(
# 	item_id SERIAL PRIMARY KEY,
# 	item_name VARCHAR(30) NOT NULL,
# 	item_price SMALLINT DEFAULT 0
# );

# 2) In the file menu_item.py, create a new class 
# called MenuItem, the attributes should be the name 
# and price of each item.
#Create several methods (save, delete, update) these 
    # methods will allow a user to save, delete and update 
    # items from the Menu_Items table. The update method can 
    # update the name as well as the price of an item.

# In the file menu_manager.py, create a new class 
# called MenuManager
# Create a Class Method called get_by_name that 
# will return a single item from the Menu_Items 
# table depending on it’s name, if an object is not 
# found (there is no item matching the name in the 
#        get_by_name method) return None.

# Create a Class Method called all_items which will 
# return a list of all the items from the Menu_Items table.


# Codebox:

# item = MenuItem('Burger', 35)
# item.save()
# item.delete()
# item.update('Veggie Burger', 37)
# item2 = MenuManager.get_by_name('Beef Stew')
# items = MenuManager.all()

import psycopg2
print(psycopg2.__version__)
# Function to connect to the database
def connect_to_db():
    try:
        conn = psycopg2.connect(
            dbname="restaurant",  # your DB name
            user="postgres",      # your username
            password="lena_postgres",  # your password
            host="localhost"      # your host (localhost for local machine)
        )
        print("Connection successful")
        return conn
    except Exception as e:
        print(f"Error: {e}")
        return None

# Function to close the connection
def close_connection(conn):
    if conn:
        conn.close()
        print("Connection closed.")

# Function to fetch and display menu items from the database
def get_menu_items(conn):
    try:
        cursor = conn.cursor()
        
        # Execute SQL query to fetch all menu items
        query = "SELECT * FROM Menu_Items;"
        cursor.execute(query)
        
        # Fetch and print all results
        menu_items = cursor.fetchall()
        for item in menu_items:
            print(f"Item ID: {item[0]}, Name: {item[1]}, Price: {item[2]}")
        
        # Close the cursor
        cursor.close()
        return menu_items
        
    except Exception as e:
        print(f"Error: {e}")

# Main logic to run the script
def run_script():
    conn = connect_to_db()
    if conn:
        get_menu_items(conn)
        close_connection(conn)
