#Predict the output of the following code snippets:
#>>> 5 < 3 
#>>> 3 == "3"
#>>> "3" > 3
#>>> "Hello" == "hello"
print(5 < 3) #False +
print(3 == "3") #False +
print("3" > 3) #depends on ascii value - TypeError: '>' not supported between instances of 'str' and 'int'
print("Hello" == "hello") #False +