#Write a program that prints the frequency of the
#  words from the input.the output should be:

    # 2:2
    # 3.:1
    # 3?:1
    # New:1
    # Python:5
    # Read:1
    # and:1
    # between:1
    # choosing:1
    # or:2
    # to:1

words = {}
text = (input('enter your text: ')).split()
for word in text:
    if word in words:
        words[word] += 1
    else :
        words[word] = 1

for word in words:
    print(f"{word}: {words[word]}")
