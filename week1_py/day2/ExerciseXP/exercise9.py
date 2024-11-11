#Write code that will ask the user for their height in centimeters.
#If they are over 145cm print a message that states they are tall 
# enough to ride.
#If they are not tall enough print a message that says 
# they need to grow some more to ride.

height = int(input("What's your height in sm? "))
tall = 145

if height >= tall:
    print("you are tall enough to ride.")
else:
    print("you need to grow some more to ride.")