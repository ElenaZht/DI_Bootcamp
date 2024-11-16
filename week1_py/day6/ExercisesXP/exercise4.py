users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# Use a for loop to recreate the 1st result. 
# Tip : don’t hardcode the numbers.
# {"Mickey": 0, "Minnie": 1, "Donald": 2,
#  "Ariel": 3, "Pluto": 4}
disney_users_A = {}
for user in users:
    name = user
    idx = users.index(user)
    disney_users_A[name] = idx
print(disney_users_A)

# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
disney_users_B = {}
for user in users:
    name = user
    idx = users.index(user)
    disney_users_B[idx] = name
print(disney_users_B)

# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}
disney_users_C = {}
users.sort()
for user in users:
    name = user
    idx = users.index(user)
    disney_users_C[name] = idx

print(disney_users_C)
