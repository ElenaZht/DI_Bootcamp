#To decrypt the matrix, Neo reads each column from top to 
# bottom, starting from the leftmost column, selecting 
# only the alpha characters and connecting them.
#  Then he replaces every group of symbols between two 
# alpha characters by a space.
data_string = '''7ii
    Tsx
    h%?
    i #
    sM 
    $a 
    #t%
    ^r!'''

data_list = data_string.splitlines()
col1 = []
col2 = []
col3 = []
for d in data_list:
    item = d.strip()
    col1.append(item[0] if len(item) > 0 else " ")
    col2.append(item[1] if len(item) > 1 else " ")
    col3.append(item[2] if len(item) > 2 else " ")


matrix = [col1, col2, col3]


answer = ''
for col in matrix:
    for c in col:
        if c.isalpha():
            answer += c
        else:
            if answer != '' and answer[-1] != ' ':
                answer += ' '
print("answer:")
print(answer)