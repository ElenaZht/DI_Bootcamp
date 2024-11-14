# Create a set called my_fav_numbers
#  with all your favorites numbers.
my_fav_numbe = {2, 5, 7, 25}

# Add two new numbers to the set.
my_fav_numbe.add(95)
my_fav_numbe.add(1995)

# Remove the last number.
my_fav_numbe.discard(1995)

# Create a set called friend_fav_numbers
#  with your friend’s favorites numbers.
friend_fav_numbers = {1, 3 ,5, 7, 9}

# Concatenate my_fav_numbers and friend_fav_numbers 
# to a new variable called our_fav_numbers.
our_fav_numbers = my_fav_numbe.union(friend_fav_numbers)
print(our_fav_numbers)