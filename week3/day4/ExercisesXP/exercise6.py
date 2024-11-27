# Create a function that accepts a birthdate as an argument 
# (in the format of your choice), then displays a message 
# stating how many minutes the user lived in his life.
from datetime import datetime

def life_counter(y, m, d, h, min):
    now_time = datetime.now()
    birth_date = datetime(y, m, d, h, min)

    timedelta = now_time - birth_date
    total_minutes = timedelta.days*1440 + timedelta.seconds//60 + timedelta.microseconds / 60000000
    print(f"you have been living already {round(total_minutes)} minutes")


b_year = int(input("enter year "))
b_month = int(input("enter month "))
b_day = int(input("enter day "))
b_hour = int(input("enter hour "))
b_minutes = int(input("enter minutes "))

life_counter(
    b_year, b_month, b_day, b_hour, b_minutes
)
