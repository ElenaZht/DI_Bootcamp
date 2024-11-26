# Draw the following pattern using for loops:
#   *
#  ***
# *****

def pyramide(rows=3):
    for i in range(1, rows + 1):
        stars = '*' * (2 * i - 1)
        print(stars.center(2 * rows - 1))

pyramide(5)

# Draw the following pattern using for loops:
#     *
#    **
#   ***
#  ****
# *****
def pyramide_left(rows=3):
    for i in range(1, rows + 1):
        stars = '*'* i
        print(stars.rjust(rows))

pyramide_left(7)
# Draw the following pattern using for loops:
# *
# **
# ***
# ****
# *****
# *****
#  ****
#   ***
#    **
#     *
def pyramide_right(rows=5):
    for i in range(1, rows + 1):
        stars = '*'* i
        print(stars.ljust(rows))

def pyramide_left_upside_down(rows=5):
    for i in range(rows, 0, -1):
        stars = '*'* i
        print(stars.rjust(rows))

pyramide_right()
pyramide_left_upside_down()