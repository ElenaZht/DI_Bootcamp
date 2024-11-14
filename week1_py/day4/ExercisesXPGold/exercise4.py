max_num = 0
first_num = int(input('insert 1st number '))
if first_num > max_num:
    max_num = first_num

second_num = int(input('insert 2nd number '))
if second_num > max_num:
    max_num = second_num

third_num = int(input('insert 3rd number '))
if third_num > max_num:
    max_num = third_num

print(f"maximum is {max_num}")
