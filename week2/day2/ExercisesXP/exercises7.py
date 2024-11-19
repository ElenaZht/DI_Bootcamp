# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 
# degrees (Celsius), selected at random.
# Test your function to make sure it generates expected 
# results.
import random
def get_random_temp():
    return random.randint(-10, 40)

#Create a function called main().
# Inside this function, call get_random_temp() to get a 
# temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly 
# message, eg. “The temperature right now is 32 degrees
#  Celsius.”# Let’s add more functionality to the main() function. 
# Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra 
# layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your 
# coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40
def main():
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    if 16 > temp >= 0:
        print("Quite chilly! Don’t forget your coat")
    if 23 > temp >= 16:
        print("It's nice sunny day!")

    if 32 > temp >= 24:
        print("It is getting hit, right?")
    if 40 >= temp > 32:
        print("Grab your water today! it's hell outside")


# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random
#  number between -10 and 40, set lower and upper limits 
# based on the season, eg. if season is ‘winter’, 
# temperatures should only fall between -10 and 16.
def detect_season_bymonth(month):
    season = 'default'
    if month in [1, 2, 12]:
        season = "winter"
    if month in [3,4,5]:
        season = "spring"
    if month in [6, 7, 8]:
        season = "summer"
    if month in [9, 10, 11]:
        season = "autumn"
    print(f"it is {season}")
    return season

def get_random_temp_byseason(season):

    if season == "winter":
        min_temp = -40
        max_temp = 5

    if season == "spring" or season == "autumn":
        min_temp = 6
        max_temp = 20

    if season == "summer":
        min_temp = 21
        max_temp = 40

    return random.uniform(min_temp, max_temp)

# Now that we’ve changed get_random_temp(), let’s 
# change the main() function:
# Before calling get_random_temp(), we will need to decide 
# on a season, so that we can call the function correctly.
#  Ask the user to type in a season - ‘summer’, ‘autumn’ 
# (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().
def main_byseason():
    month = int(input("enter the month number : \n"))
    if  month < 1 or month > 12:
        print("invalid month entered")
        return 
    season = detect_season_bymonth(month)
    temp = get_random_temp_byseason(season)
    print(f"The temperature right now is {temp} degrees Celsius")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    if 16 > temp >= 0:
        print("Quite chilly! Don’t forget your coat")
    if 23 >= temp >= 16:
        print("It's nice sunny day!")

    if 32 > temp >= 24:
        print("It is getting hit, right?")
    if 40 >= temp >= 32:
        print("Grab your water today! it's hell outside")

#Bonus: Give the temperature as a floating-point number 
# instead of an integer.
#Bonus: Instead of asking for the season, ask the user 
# for the number of the month (1 = January, 12 = December). 
# Determine the season according to the month.
main_byseason()