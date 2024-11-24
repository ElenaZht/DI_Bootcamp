# Write a script that calculates the number of upper 
# case letters and lower case letters in a string
string = input("enter your string:\n")
upper = 0
lower = 0

for s in string:
    if not s.isalpha():
        continue
    if s.lower() == s:
        lower += 1
    elif s.upper() == s:
        upper +=1

print(f"string '{string}'\n has {upper} uppercases and {lower} lowercases")