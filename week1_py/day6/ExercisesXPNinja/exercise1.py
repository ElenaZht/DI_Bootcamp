cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
#Convert it into a list using Python (don’t do it by hand!).
car_list = cars.split(',')

#Print out a message saying how many manufacturers
# /companies are in the list.
print(f"there are {len(car_list)} companies in the list")

#Print the list of manufacturers in reverse/descending
#  order (Z-A)
car_list.sort(reverse=True)
print(car_list)

#Using loops or list comprehension:
# Find out how many manufacturers’ names have the letter
#  ‘o’ in them.
has_o_in_name = 0
for car in car_list:
    if 'o' in car:
        has_o_in_name += 1
print(f"{has_o_in_name} cars have 'o'")

# Find out how many manufacturers’ names do not have 
# the letter ‘i’ in them.
has_not_i_in_name = 0
for car in car_list:
    if 'i' not in car:
        has_not_i_in_name += 1
print(f"{has_not_i_in_name} cars have no 'i' in name")


new_cars = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
#remove duplicates with set
new_cars_set = set(new_cars)
new_cars_uniques = list(new_cars_set)

#Print out the companies without duplicates, in a 
# comma-separated string with no line-breaks 
# (eg. “Acura, Alfa Romeo, Aston Martin, …”), 
# also print out a message saying how many companies 
# are now in the list.
cars_per_company = {}
for car in new_cars:
    if car in cars_per_company:
        cars_per_company[car] += 1
    else:
        cars_per_company[car] = 1

print(f"they have duplicates: {','.join(list(c for c in cars_per_company if cars_per_company[c] > 1))}")
print(f"now {len(new_cars_uniques)} companies in the list")

#Bonus: Print out the list of manufacturers in 
# ascending order (A-Z), but reverse the letters 
# of each manufacturer’s name.
new_cars_uniques.sort()
print(','.join(list(c[::-1] for c in new_cars_uniques)))