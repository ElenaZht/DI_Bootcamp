#Write code that asks the user for their name and determines 
# whether or not you have the same name, print out a funny message 
# based on the outcome.

my_name = "Elena"
same_name_message= "Hi! We have much in common!"
not_same_name_message = "Hi!"

answer = input("What's your name? ")
if answer == my_name:
    print(same_name_message)
else:
    print(not_same_name_message)