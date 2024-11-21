# Write a function called get_full_name() that takes three 
# arguments: 1: first_name, 2: middle_name 3: last_name.
# middle_name should be optional, if it’s omitted by the 
# user, the name returned should only contain the first and 
# the last name.
#first_name='', middle_name = '', last_name=''
def get_full_name(*args):
    return ' '.join(list(args))

print(get_full_name('Oliver', 'Jack', 'Patinson'))
print(get_full_name('Olivia', 'Patinson'))