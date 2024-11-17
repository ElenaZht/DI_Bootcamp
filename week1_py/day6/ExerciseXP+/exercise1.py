# You are given a dictionary containing student 
# names as keys and lists of their grades as values. 
# Your task is to create a summary report that calculates 
# the average grade for each student, assigns a letter 
# grade, and determines the class average.
student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}
student_averages = {}
for student in student_grades:
    average = sum(student_grades[student]) / len(student_grades[student])
    student_averages[student] = int(average)

student_letter_grades = {}
for student in student_averages:
    student_class = ''
    if student_averages[student] >= 90:
        student_class = 'A'
    elif student_averages[student] >= 80:
        student_class = 'B'
    elif student_averages[student] >= 70:
        student_class = 'C'
    elif student_averages[student] >= 60:
        student_class = 'D'
    elif student_averages[student] < 60:
        student_class = 'F'
    student_letter_grades[student] = student_class

class_everage = sum(list(student_averages.values())) / len(list(student_averages.values()))
print("class everage grade is ", class_everage)

# Print the name of each student, their average grade, 
# and their letter grade.
for student in student_grades:
    print(f"student {student} has {student_averages[student]} and in {student_letter_grades[student]} class")