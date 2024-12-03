# Write a function that displays today’s date.
# The function should also display the amount of 
# time left from now until the next upcoming holiday 
# and print which holiday that is. (Example: the next
#  holiday is New Years’ Eve in 30 days).
# Hint: Use a module to find the datetime and name of 
# the upcoming holiday.
from datetime import datetime


def next_holiday():

    today = datetime.now()
    next_holiday_date = datetime(2024, 12, 26)
    next_holiday_name = 'Hanuka'
    left = next_holiday_date - today
    print(f"Next holiday is {next_holiday_name}!\n We have only {left.days} days to prepare!")

next_holiday() 