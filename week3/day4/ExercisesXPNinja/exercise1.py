# Write a base class called Temperature.
# Implement the following subclasses: Celsius, Kelvin, Fahrenheit.
# Each of the subclasses should have a method which can convert the 
# temperture to another type.
# You must consider different designs and pick the best one 
# according to the SOLID Principle.
from abc import ABC, abstractmethod

class Temperature(ABC):

    @abstractmethod
    def to_celsius(self):
        pass

    @abstractmethod
    def to_kelvin(self):
        pass

    @abstractmethod
    def to_fahrenheit(self):
        pass

class Celsius(Temperature):
    def __init__(self, value = 1):
       self.value = value

    def to_celsius(self):
        return self.value

    def to_fahrenheit(self):
        return (self.value * 9 / 5) + 32
    
    def to_kelvin(self):
        return self.value + 273.15

class Kelvin(Temperature):
    def __init__(self, value = 1):
       self.value = value

    def to_celsius(self):
        return self.value - 273.15
    
    def to_kelvin(self):
        return self.value
    
    def to_fahrenheit(self):
        return (self.value - 273.15) * 9 / 5 + 32

class Fahrenheit(Temperature):
    def __init__(self, value = 1):
       self.value = value

    def to_kelvin(self):
        return (self.value - 32) * 5 / 9 + 273.15
    
    def to_celsius(self):
        return (self.value - 32) * 5 / 9
    
    def to_fahrenheit(self):
        return self.value
    


celsius = Celsius(5)
print(f"5 celsius degree is {celsius.to_kelvin()} kelvin")
print(f"5 celsius degree is {celsius.to_fahrenheit()} fahrenheit")
print(f"5 celsius degree is {celsius.to_celsius()} celsius")

kelvin = Kelvin(200)
print(f"\n200 kelvin degree is {kelvin.to_celsius()} celsius")
print(f"200 kelvin degree is {kelvin.to_fahrenheit()} fahrenheit")
print(f"200 kelvin degree is {kelvin.to_kelvin()} kelvin")

fahrenheit = Fahrenheit(15)
print(f"\n15 fahrenheit degree is {fahrenheit.to_kelvin()} kelvin")
print(f"15 fahrenheit degree is {fahrenheit.to_celsius()} celsius")
print(f"15 fahrenheit degree is {fahrenheit.to_fahrenheit()} fahrenheit")
