# Create a function that displays the amount of time left 
# from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).
from datetime import datetime


def time_till_ny():
    time_now = datetime.now()
    ny_date = datetime(2025, 1, 1, 0, 0, 0, 0)
    diff = ny_date - time_now
    print(f"the 1st of January is in {diff.days} and {diff.seconds // 3600}:{diff.seconds % 3600 // 60 }:{diff.seconds % 60}hours")

time_till_ny()