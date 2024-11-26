# Convert a string into password format.
# Example:
# input : "mypassword"
# output: "***********"

def hide_pass(password):
    return '*' * len(password)

print(hide_pass('good_password'))