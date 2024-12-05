#handle all other functionality such as adding/removing 
# items from the menu, along with loading and saving the data to a JSON file.
import json


class MenuManager:
    def __init__(self):
        with open('menu.json') as file:
            self.menu = json.load(file)
            self.prev_menu = self.menu

    #__init__() - The function should read the menu from the restaurant_menu.json 
    # file and store it in a variable called menu.
    def add_item(self, name, price):
        if not any(item['name'] == name for item in self.menu['items']):
            self.menu['items'].append({'name': name.lower().capitalize(), 'price': price})
            print(f"{name} added to menu with price {price}")
            return True
        else:
            print(f"{name} already in the menu")
            return False
    #add_item(name, price) – this method should add an item to the menu, although 
    # do not save the changes to the file yet.
    def remove_item(self, name):
        for item in self.menu['items']:
            if item['name'] == name:
                self.menu['items'].remove(item)
                print(f"{name} was deleted successfuly")
                return True
        print(f"there is no {name} in menu")
        return False
    #remove_item(name) – if the item is in the menu, this function should remove it 
    # from the menu (and again do not save the changes to the file yet) and return 
    # True. If the item was not in the menu, return False. (Hint: use Python’s del operator).
    def save_to_file(self):
        if self.menu != self.prev_menu:
            with open('./restaurant_menu.json', 'w') as file:
                json.dump(self.menu, file, indent=4)
                return True
        else: 
            return False
        
    #save_to_file() - When the manager is finished updating the menu this function 
    # should be called and it should save all the updates and write them into the 
    # the restaurant_menu.json file (ie. the file which holds the menu).                           


def test_menu_manager_methods():
    m = MenuManager()
    m.add_item('Cake', 20)
    m.add_item('Cake', 20) #check for duplicates
    
    print(m.remove_item('Cake'))
    print(m.remove_item('Cake'))#check for double remove

    m.add_item('BD Cake', 25)
    m.remove_item('Vegetable soup')
    m.save_to_file()

# test_menu_manager_methods()