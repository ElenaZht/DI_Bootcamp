# Using this class

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest 
# cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, 
# and is <cat_age> years old.”. Use the function previously 
# created.
cat1 = Cat('Alise', 17)
cat2 = Cat('Mika', 2)
cat3 = Cat('Dymka', 1)
cats = [cat1, cat2, cat3]

def oldest_cat(cats):
    oldest_name = ''
    oldest_age = 0
    for cat in cats:
        if cat.age > oldest_age:
            oldest_age = cat.age
            oldest_name = cat.name
    return {'name': oldest_name, 'age': oldest_age}

def main():
    print(f"The oldest cat is {oldest_cat(cats)['name']}, and is {oldest_cat(cats)['age']} years old.”")

main()