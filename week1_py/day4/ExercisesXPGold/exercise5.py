# Create a string of all the letters in the alphabet
alphabet = [chr(i) for i in range(ord('a'), ord('z') + 1)]

# Loop over each letter and print a message that 
# contains the letter and whether its a vowel or a consonant.
vowels = ['a', 'e', 'i', 'o', 'u', 'y']
value = 'consonant'
for letter in alphabet:
    print(f"{letter} is {
        'vowel' if letter in vowels else 'consonant'
        }")