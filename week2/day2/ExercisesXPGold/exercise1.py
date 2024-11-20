# The point of the exercise is to check if a person can 
# retire depending on their age and their gender.
# Note : Let’s say retirement age is 67 for men, and 62 
# for women (born after April, 1947).

# Create a function get_age(year, month, day)
# Hard-code the current year and month in your code 
# (there are better ways of doing this, but for now it will 
# be enough.)
from datetime import datetime
from datetime import date


def get_age(year, month, day):
    now = datetime.now()
    person_bd = date(year, month, day)
    age =  now.year - person_bd.year
    if (now.month, now.day) < (month, day):
        age -= 1
    return age

# After calculating the age of a person, the function should return the age (the age is an integer).
# Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# Calculate. You may need to do a little more hard-coding here.
# Return True if the person can retire, and False if he/she can’t.
def can_retire(gender, date_of_birth):
    date_formated = datetime.strptime(date_of_birth, '%Y/%m/%d')
    age = get_age(date_formated.year, date_formated.month, date_formated.day)
    if gender == 'm':
        return age >= 67
    else:
        return age >= 62

# print(can_retire('women', '1995/10/05')) #young woman
# print(can_retire('women', '1962/10/05')) #old woman
# print(can_retire('men', '1999/10/05')) #young man
# print(can_retire('men', '1940/10/05')) #old woman
def main():
    gender = input("enter your gender - f or m: ")
    birth_date = input("enter your birth date - yyyy/mm/dd: ")
    if_can_retire = can_retire(gender, birth_date)
    if if_can_retire:
        print("Your free now!")
    else:
        print("Your are great solder yet!")

main()
# Some Hints

# Ask for the user’s gender as “m” or “f”.
# Ask for the user’s date of birth in the form of “yyyy/mm/dd”, eg. “1993/09/21”.
# Call can_retire to get a definite value for whether the person can or can’t retire.
# Display a message informing the user whether they can retire or not.
# As always, test your code to ensure it works.