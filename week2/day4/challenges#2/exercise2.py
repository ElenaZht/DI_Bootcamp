# Analyse this code before executing it. 
# Write some commnts next to each line. 
# Write the value of each variable and their changes, 
# and add the final output. Try to understand the purpose 
# of this program.
my_list = [2, 24, 12, 354, 233] #list of integers
for i in range(len(my_list) - 1): #for loop by the list from 0 to last
    minimum = i #set var minimum and asigned it to i
    for j in range( i + 1, len(my_list)):#inner for loop starting from next element for i
        if(my_list[j] < my_list[minimum]):#condition
            minimum = j
            if(minimum != i):
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
print(my_list)

#Answer:
#the loop goes from start of the list
#on every item defined var minimut equal to index i
#inner loop goes from index next to i till last element in the list
#so every item in list compared to it's rightmost element
#if rightmost item less than current item
#var minimum asigned to rightmost index
#if minimum not equal to current
#current element and rightmost swithes places
#it is looks like a sorting code