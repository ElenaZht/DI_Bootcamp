# Ask the user for their birthdate (specify the format,
#  for example: DD/MM/YYYY).
# Display a little cake as seen below:
#        ___iiiii___
#       |:H:a:p:p:y:|
#     __|___________|__
#    |^^^^^^^^^^^^^^^^^|
#    |:B:i:r:t:h:d:a:y:|
#    |                 |
#    ~~~~~~~~~~~~~~~~~~~

# The number of candles on the cake should be the last 
# number of the users age, if they are 53, then add 
# 3 candles.

# Bonus : If they were born on a leap year, 
# display two cakes !
from datetime import datetime

def is_leap_year(year):
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        return True
    else:
        return False

bd_input = input('enter your birthday like DD/MM/YYYY: ')
bd_formated = datetime.strptime(bd_input, '%d/%m/%Y')
today = datetime.today()
age = int((today - bd_formated).days / 365.25)
candeles = int(list(str(age))[-1])


print(f"you are {age} years old! you get {candeles} candels!")

print(
    f'''
       ___{'i'*candeles}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
'''
)
if is_leap_year(bd_formated.year):
    print(f"{bd_formated.year} was leap so you get extra cake!")
    print(
    f'''
       ___{'i'*candeles}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
'''
)