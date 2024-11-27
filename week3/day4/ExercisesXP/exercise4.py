# Create a function that displays the current date.
# Hint : Use the datetime module.

from datetime import date

def cur_date():
    today = date.today()
    return f"today is {today.day} of {today.strftime("%B")} {today.year} year"

print(cur_date())