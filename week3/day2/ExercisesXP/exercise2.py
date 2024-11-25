# Create a class called Dog with the following attributes name, age, weight.
# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.
# run_speed: returns the dogs running speed (weight/age*10).
# fight : takes a parameter which value is another Dog instance, called other_dog. 
# This method returns a string stating which dog won the fight. The winner should be the dog with 
# the higher run_speed x weight.
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking!"
    
    def run_speed(self):
        return self.weight / (self.age *10)
    
    def fight(self, other_dog):
        my_dog_forse = self.run_speed() * self.weight
        other_dog_forse = other_dog.run_speed() * other_dog.weight
        if my_dog_forse > other_dog_forse:
           return f"{self.name} won {other_dog.name}!"
        else:
           return f"{other_dog.name} won {self.name}!"

# Create 3 dogs and run them through your class.
dog1 = Dog('Molly', 5, 3)
dog2 = Dog('Hezi', 10, 13)
dog3 = Dog('Bobby', 3, 10)
dogs = [dog1, dog2, dog3]

def bark_the_dogs(dogs):
    for dog in dogs:
        print(dog.bark())

def run_the_dogs(dogs):
    for dog in dogs:
        print(dog.run_speed(), 'm/s')

def fight_the_dogs(dogs):
    print(dogs[0].fight(dogs[1]))
    print(dogs[1].fight(dogs[2]))
    print(dogs[2].fight(dogs[0]))


bark_the_dogs(dogs)
run_the_dogs(dogs)
fight_the_dogs(dogs)