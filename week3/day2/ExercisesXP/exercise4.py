# Create a class called Family and implement the following attributes:
# members: list of dictionaries
# last_name : (string)
# Implement the following methods:
# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating 
# the family.
# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False
#  if not.
# family_presentation: a method that prints the family’s last name and all the members’ details.
class FamilyMember:
    def __init__(self, name, age, gender, is_child):
        self.name = name
        self.age = age
        self.gender = gender
        self.is_child = is_child



class Family:
    members = []
    last_name = ''

    def __init__(self, last_name):
        self.last_name = last_name

    def born(self, **kwargs):
        member = {'name': kwargs['name'], 'age': kwargs['age'], 'gender': kwargs['gender'], 'is_child': kwargs['is_child']}
        self.members.append(member)
        if member['is_child'] == False:
            print(f"{member['name']} added to family")
            return
        else:
         print(f"congratulations! {self.last_name}s have a newborn {member['name']}")

    def is_18(self, member):
        return member.age >= 18
    
    def family_presentation(self):
        print(f"\n{self.last_name}s have:")
        for m in self.members:
            print(f"{m['name']}, {'she' if m['gender'] == 'Female' else 'he'} is {m['age']} years old and is {'child' if m['is_child'] else 'adult'}")

# Create an instance of the Family class, with the last name of your choice, and the below members. 
# Then call all the methods you created in Point 2.

#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#     ]

family = Family('Tompson')
family.born(name = 'Michael', age = 35, gender = 'Male', is_child = False)
family.born(name = 'Sarah', age = 32, gender = 'Female', is_child = False)

family.born(name = "Emma", age = 15, gender = 'Female', is_child = True)
family.born(name = "Tom", age = 5, gender = 'Male', is_child = True)
family.born(name = "Johny", age = 1, gender = 'Male', is_child = True)

family.family_presentation()
