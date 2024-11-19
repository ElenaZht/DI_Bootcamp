#Write a program that asks a string to the user, 
# and display a new string with any duplicate 
# consecutive letters removed.
#F/inal strings won’t include words with double 
# letters (e.g. “passing”, “lottery”).
text = input('enter your string:\n')
answer = ''
for i,letter in enumerate(text):
    if not answer or answer[-1] != letter:
        answer += letter
print(answer)


