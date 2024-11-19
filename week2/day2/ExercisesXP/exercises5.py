# Write a function called make_shirt() that accepts a size 
# and the text of a message that should be printed on the 
# shirt.
# The function should print a sentence summarizing the 
# size of the shirt and the message printed on it, such 
# as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().

# Modify the make_shirt() function so that shirts are 
# large by default with a message that reads “I love Python” 
# by default.
# Call the function, in order to make a large shirt with the 
# default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.

# Bonus: Call the function make_shirt() using keyword 
# arguments.
def make_shirt(*args):
    size = "medium"
    text = "i love python"
    if len(args) > 0:
        size = args[0]
    if len(args) > 1:
        text = args[1]
    print(f"You coose {size} size, text on the shirt is '{text}'")

make_shirt("xs", "pandas are cute!")
make_shirt()
make_shirt("medium")
make_shirt("extralarge", "i love pizza too much")
