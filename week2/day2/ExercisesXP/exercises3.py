# Write a function called describe_city() that accepts 
# the name of a city and its country as parameters.
# The function should print a simple sentence, such as 
# "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.
def describe_city(city, country="USA"):
    print(f"{city} is in {country}")

describe_city("New York")
describe_city("Mogilev", "Belarus")