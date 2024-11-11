# Predict the output of the following code snippets:
print("3 <= 3 < 9 ", 3 <= 3 < 9) # i think True -> True
print("3 == 3 == 3 ", 3 == 3 == 3) # i think True -> True
print("bool(0) ", bool(0)) # i think False -> False
print(bool(5 == "5")) # i think False -> False
print("bool(bool(None)) ", bool(bool(None))) # i think False or error -> False


x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x) # i think True  -> True
print("y is", y) # i think True -> False
print("a:", a) # i think error -> 5
print("b:", b) # i think error -> 10