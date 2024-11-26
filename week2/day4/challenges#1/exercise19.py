# Write a function that mimics the builtin .split() method 
# for strings.

# By default the function uses whitespace but it should be 
# able to take an argument for any character and split with 
# that argument.

def custom_split(string, delimiter=' '):
    result = []
    curr_word = ''

    for s in string:
        if s == delimiter:
            result.append(curr_word)
            curr_word = ''

        else:
            curr_word += s
    if curr_word != '':
        result.append(curr_word)
    return result

string = 'what,do, you like to eat?'
print(custom_split(string, ','))
