import json
import re


class MenuManager:
    def __init__(self):
        with open('menu.json') as file:
            self.menu = json.load(file)
            self.prev_menu = self.menu.copy()

    def add_item(self, name, price):
        if not any(item['name'] == name for item in self.menu['items']):
            self.menu['items'].append({'name': name, 'price': price})
            print(f"{name} added to menu with price {price}")
            return True
        else:
            print(f"{name} already in the menu")
            return False

    def remove_item(self, name):
        for item in self.menu['items']:
            if item['name'] == name:
                self.menu['items'].remove(item)
                print(f"{name} was deleted successfully")
                return True
        print(f"There is no {name} in menu")
        return False

    def save_to_file(self):
        if self.menu != self.prev_menu:
            with open('menu.json', 'w') as file:
                json.dump(self.menu, file, indent=4)
            self.prev_menu = self.menu.copy()
            return True
        return False

    def add_valentine_item(self, name, price):
        if self.validate_valentine_item(name, price):
            self.menu['valentines_day_items'].append({'name': name, 'price': price})
            print(f"{name} added to Valentine's Day menu for {price}$")
            return True
        else:
            print("Invalid item! Make sure the name and price meet the rules.")
            return False

    def validate_valentine_item(self, name, price):
        # Check for at least two 'e's in the name and no numbers
        if not re.search(r'(.*e.*e.*)', name) or re.search(r'\d', name):
            return False

        # Ensure price matches the format XX,14
        if not re.match(r'^\d{2},14$', price):
            return False

        # Ensure first word starts with "V" and other words are correctly capitalized
        words = name.split()
        if not words[0].startswith("V") or not all(
                word[0].isupper() or word.lower() in ["of", "and", "the"] for word in words):
            return False

        return True
