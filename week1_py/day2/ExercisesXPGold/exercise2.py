# Ask the user to input a month (1 to 12).
month = input("Type month from 1 to 12 ")
winter = [1, 2, 12]
spring = [3, 4, 5]
summer = [6, 7, 8]
autumn = [9, 10, 11]

# Display the season of the month received :
# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)

if type(month) == str:
    print("it is not a number")
    exit(1)
    
month = int(month)

if month in winter:
    print("it is winter time")
elif month in spring:
    print("it is spring time")
elif month in summer:
    print("it is summer time")
elif month in autumn:
    print("it is autumn")
else:
    print("wrong month number")