# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles
import math  # For using pi (π)


class Circle():
    _radius = 0
    option='radius'
    def __init__(self, option='radius', sm=1):
        self.option = option
        self.sm = sm
        if option == 'diametr':
            self._radius = self.sm / 2
        else:
            self._radius = self.sm

    def __str__(self):
        return f"this is circle with radius {self._radius}sm"
    
    @property
    def radius(self):
        return self._radius
    
    @property
    def diametr(self):
        return self._radius * 2
    
    @property
    def area(self):
        return round(math.pi * (self.radius ** 2))
    
    def __add__(self, other):
        if isinstance(other, Circle):
            new_radius = self.radius + other.radius
        else:
            new_radius = self.radius + other
        return Circle(sm=new_radius)
    
    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        raise TypeError("second object not Circle")
    
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        raise TypeError("second object not Circle")
    
    # def 
    

circle1 = Circle(sm=10)
circle2 = Circle(sm=5)
circle3 = Circle(sm=15)

print("circle radius ", circle1.radius)
print("circle diametr ", circle1.diametr)
print("circle area ", circle1.area)
print("has attributes ", circle1.__dict__)
print("circle1 + circle2 =", circle1 + circle2)
print("circle1 > circle2", circle1 > circle2)
print("circle1 == circle2", circle1 == circle2)

l = sorted([circle1, circle2, circle3])
for i in l:
    print(i)
