# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore the members attributes, 
# will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)
from exercise4 import Family, FamilyMember

class IncredibleMember(FamilyMember):
    def __init__(self, power, incredible_name):
        self.power = power
        self.incredible_name = incredible_name

class TheIncredibles(Family):
    members = []
    # Add a method called use_power, this method should print the power of a member only if they are over 
    # 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 
    # years old.
    def use_power(self, member):
        if member.age >= 18:
            print(f"{member.name}'s power is to {member.power}")

    # Add a method called incredible_presentation which :
    # Print a sentence like “*Here is our powerful family **”
    # Prints the family’s last name and all the members’ details (ie. use the super() function, 
    # to call the family_presentation method)
    def incredible_presentation(self):
        print("\n*Here is our powerful family **")
        super().family_presentation()
        for m in self.members:
            print(f"{m['name']} has power to {m['power']} and called {m['incredible_name']} for that")

    def born(self, **kwargs):
        member = {'name': kwargs['name'], 'age': kwargs['age'], 'gender': kwargs['gender'], 'is_child': kwargs['is_child'], 'power': kwargs['power'], 'incredible_name': kwargs['incredible_name']}
        self.members.append(member)
        if member['is_child'] == False:
            print(f"{member['name']} added to family")
            return
        else:
         print(f"congratulations! {self.last_name}s have a newborn {member['name']}")


# Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.

#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
#     ]
my_family = TheIncredibles('Superstar')
my_family.born(name = 'Michael', age = 35, gender = 'Male', is_child = False, power = 'fly', incredible_name = 'MikeFly')
my_family.born(name = 'Sarah', age = 32, gender = 'Female', is_child = False, power = 'read minds', incredible_name = 'SuperWoman')

# Call the incredible_presentation method.
my_family.incredible_presentation()

# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
my_family.born(name = 'Jack', age = 1, gender = 'Male', is_child = True, power = 'Unknown Power', incredible_name = 'Super Jachy')

# Call the incredible_presentation method again.
my_family.incredible_presentation()
