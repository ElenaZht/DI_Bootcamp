# Given an age in seconds, 
# calculate how old someone would be on all 
# those planets :

# Earth: orbital period 365.25 Earth days, 
# or 31557600 seconds
# Example : if someone is 1,000,000,000 seconds old,
#  the function should output that they are 31.69 
# Earth-years old.

# Mercury: orbital period 0.2408467 Earth years

# Venus: orbital period 0.61519726 Earth years

# Mars: orbital period 1.8808158 Earth years

# Jupiter: orbital period 11.862615 Earth years

# Saturn: orbital period 29.447498 Earth years

# Uranus: orbital period 84.016846 Earth years

# Neptune: orbital period 164.79132 Earth years
from datetime import datetime, timedelta


def sec_in_year(days):
    return timedelta(days=days).total_seconds()

def years_on_planet(age_sec, year_sec):
    return int(age_sec / year_sec)

earth_year_sec = sec_in_year(365.25)
mercury_year_sec = sec_in_year(365.25 * 0.2408467)
venus_year_sec = sec_in_year(365.25 * 0.61519726)
mars_year_sec = sec_in_year(365.25 * 1.8808158)
jupiter_year_sec = sec_in_year(365.25 * 11.862615)
saturn_year_sec = sec_in_year(365.25 * 29.447498)
uranus_year_sec = sec_in_year(365.25 * 84.016846)
neptune_year_sec = sec_in_year(365.25 * 164.79132)

my_age_sec  = (datetime.now() - datetime(1995, 10, 5)).total_seconds()

print("Earth ", years_on_planet(my_age_sec, earth_year_sec))
print("Mercury ", years_on_planet(my_age_sec, mercury_year_sec))
print("Venus ", years_on_planet(my_age_sec, venus_year_sec))
print("Mars ", years_on_planet(my_age_sec, mars_year_sec))
print("Jupiter ", years_on_planet(my_age_sec, jupiter_year_sec))
print("Saturn ", years_on_planet(my_age_sec, saturn_year_sec))
print("Uranus ", years_on_planet(my_age_sec, uranus_year_sec))
print("Neptune ", years_on_planet(my_age_sec, neptune_year_sec))


