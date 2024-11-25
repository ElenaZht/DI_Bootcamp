# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value 
# should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True

# play: takes a parameter which value is a few names of other Dog instances (use *args). 
# The method should print the following string: “dog_names all play together”.

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.

from exercise2 import Dog
import random


class PetDog(Dog):
    def __init__(self, trained=False):
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True
    
    def play(self, *args):
        dogs_names = []
        for dog in args:
            dogs_names.append(dog.name)
        dogs_names.append(self.name)
        return f"{','.join(dogs_names)} all play together"

    def do_a_trick(self):
        if self.trained:
            commands = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
                ]
            return random.choice(commands)
        else:
            print("train the dog first")
pet1 = PetDog(True)
pet1.name = 'Bob'
pet1.age = 2
pet1.weight = 5
print(pet1.bark())
print(pet1.run_speed())
print(pet1.do_a_trick())

pet2 = PetDog()
pet2.name = 'Molly'
pet3 = PetDog(True)
pet3.name = 'Lucky'

print(pet1.play(pet2, pet3))
