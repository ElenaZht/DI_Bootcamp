#Write a function named box_printer that takes any amount of
# strings (not in a list) and prints them, one per line, 
# in a rectangular frame.
def box_printer(words):
    longest = max(len(word) for word in words)

    width = longest + 4
    print('*' * width)
    for m in words:
        print(f"* {m.ljust(longest)} *")
    print('*' * (width))

text_toprint = (input("enter word")).split()
box_printer(text_toprint)