# Install the faker module, and take a look at the 
# documentation and learn how to properly implement 
# faker in your code.
from faker import Faker
# Create an empty list called users. Tip: It should be a 
# list of dictionaries.
users = []
# Create a function that adds new dictionaries to the 
# users list. Each user has the following keys: name, 
# adress, langage_code. Use faker to populate them with fake data.
def create_fake_users(num):
    for i in range(0, num):
        user_name = Faker().name()
        user_addr = Faker().address()
        user_lang = Faker().language_name()
        user = {'name': user_name, 'address': user_addr, 'language': user_lang}
        users.append(user)
    # print(user_name)




create_fake_users(1)
for user in users:
    print (f"{user['name']} lives at {user['address']} and speaks {user['language']}")