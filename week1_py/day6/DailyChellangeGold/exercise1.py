# In cryptography, a Caesar cipher is one of the simplest 
# and most widely known encryption techniques.
# It is a type of substitution cipher in which each 
# letter in the plaintext is replaced by a letter some 
# fixed number of positions down the alphabet.

# For example, with a left shift of 3 –> D would be 
# replaced by A,
# –> E would become B, and so on.

# The method is named after Julius Caesar, who used it 
# in his private correspondence.

# Create a python program that encrypts and decrypts 
# messages with ceasar cypher.
# The user enters the program, and then the program asks 
# him if he wants to encrypt or decrypt, and then execute 
# encryption/decryption on a given message and a given shift.
option = ''
option = input('press "a" for encrypt a message:\npress "b" for decrypt\n')
while option != 'quit':
    message = input('enter a message by "_": \n')
    cypher = int(input('enter the cypher code number:\n'))
    result = ''
    if option == 'a':
        #encrypt
        for letter in message:
             result += chr(ord(letter) + cypher)
        
    if option == 'b':
        #decrypt
        for letter in message:
             result += chr(ord(letter) - cypher)

    print(result)
        