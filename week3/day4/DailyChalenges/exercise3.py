# Ask a user for the following inputs 5 times:
# Name (string)
# Age (int)
# Score (int)
# Build a list of tuples using these inputs, each tuple 
# should contain a name, age and score.
# Sort the list by the following priority Name > Age > Score.
def sorting():
    pass

def main():
    alist = []
    for person in range(5):
        name = input("enter a name: ")
        age = int(input("enter an age: "))
        score = int(input("enter a score: "))
        alist.append((name, age, score))

    sorted_list = sorted(alist, key=lambda x: (x[0], x[1], x[2]))

    print(sorted_list)

main()