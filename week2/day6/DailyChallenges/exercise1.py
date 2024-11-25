# Create a class called Farm. How should it be 
# implemented?
# Does the Farm class need an __init__ method? 
# If so, what parameters should it take?
# How many methods does the Farm class need?
# Do you notice anything interesting about the 
# way we are calling the add_animal method? 
# What parameters should this function have? 
# How many…?
# Test your code and make sure you get the same
#  results as the example above.
# Bonus: nicely line the text in columns as seen 
# in the example above. Use string formatting.

# Add a method called get_animal_types to the Farm class.
#  This method should return a sorted list of all the animal 
# types (names) in the farm. With the example above, 
# the list should be: ['cow', 'goat', 'sheep'].
# Add another method to the Farm class called get_short_info. This method should return the following string: “McDonald’s farm has cows, goats and sheeps.”. The method should call the get_animal_types function to get a list of the animals.
# Note : In English the plural form of the word “sheep” is sheep. But for the purpose of the exercise, let’s say that if there is more than 1 animal, an “s” should be added at the end of the word.

class Farm:
    animals  = {}
    def __init__(self, farm_name):
        self.farm_name = farm_name

    def get_info(self):
        print(f"{self.farm_name}'s farm\n")
        for animal in self.animals:
            print(f"{animal} : {self.animals[animal]}")

        print("\n    E-I-E-I-0!")
        return 

    def add_animal(self, animal, quantity = 1):
        if quantity < 1:
            print("add a proper quantity")
            return
        if animal in self.animals:
            self.animals[animal] += quantity
        else:
            self.animals[animal] = quantity

    def get_animal_types(self):
        animal_types = list(self.animals.keys())
        print("\nanimal types:")
        animal_types.sort()
        return animal_types

    def get_short_info(self):
        animals_with_s = [f"{a}{'s' if self.animals[a] > 1 else ''}" for a in self.get_animal_types()]
        return f"{self.farm_name}'s farm has {', '.join(animals_with_s)}."


macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.add_animal('rubbit')
print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())