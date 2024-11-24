# Create a class called Zoo.
# In this class create a method __init__ that takes one 
# parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) 
# and name (name of the zoo).
# Create a method called add_animal that takes one parameter 
# new_animal. This method adds the new_animal to the animals
#  list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the 
# animals of the zoo.
# Create a method called sell_animal that takes one parameter
#  animal_sold. This method removes the animal from the list 
# and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals 
# alphabetically and groups them together based on their 
# first letter.
# Create a method called get_groups that prints the 
# animal/animals inside each group.

# Create an object called ramat_gan_safari and call all 
# the methods.
# Tip: The zookeeper is the one who will use this class.
class Zoo:
    
    def __init_(self, zoo_name):
        self.zoo_name = zoo_name

    animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"our zoo bouth {new_animal}!")

    def get_animals(self):
        if len(self.animals) == 0:
            print(f"{self.zoo_name} zoo has NO animals")
            return
        print(f"{self.zoo_name} zoo has animals:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"our zoo sold {animal_sold}!")
        else:
            print(f"there is no {animal_sold}  in {self.zoo_name} zoo")

    def sort_animals(self):
        ramat_gan_safari.animals.sort()
        print("animals after sorting:")
        for animal in self.animals:
            print(animal)

    def get_groups(self):
        animals_groups = {}
        for animal in self.animals:
            if list(animal)[0] in animals_groups:
                animals_groups[list(animal)[0]].append(animal)
            else:
                animals_groups[list(animal)[0]] = [animal]

        print("our groups:\n", animals_groups)
        

ramat_gan_safari = Zoo()
ramat_gan_safari.zoo_name = 'Ramat Gan Safari Park'

def main():
    ramat_gan_safari.get_animals()

    ramat_gan_safari.add_animal('Monkey')
    ramat_gan_safari.add_animal('Crocodile')
    ramat_gan_safari.add_animal('Bear')
    ramat_gan_safari.add_animal('White Bear')
    ramat_gan_safari.add_animal('Mamont')
   
    ramat_gan_safari.get_animals()

    ramat_gan_safari.sell_animal('Giraffe')
    ramat_gan_safari.sell_animal('Bear')
    ramat_gan_safari.sort_animals()
    ramat_gan_safari.get_groups()

main()