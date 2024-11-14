# Recap – What is a float? What is the difference
# between an integer and a float?

# Answer: float number has both integer 
# part and fractional part

# Create a list containing the following sequence 
# of floats and integers (it should be a list with 
# mixed types): 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 
# (don’t hard-code the sequence).
my_list = list()
hole = 2
unhole = 1.5
for i in range(1,5):
    my_list.append(unhole)
    my_list.append(hole)

    hole += 1
    unhole += 1
    
print(my_list)

# Can you think of another way to generate a sequence 
# of floats?

another_list = [i * 0.5 for i in range(3,11)]
print(another_list) #[1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]