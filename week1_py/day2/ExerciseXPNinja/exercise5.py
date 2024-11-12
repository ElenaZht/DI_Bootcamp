# Keep asking the user to input the longest sentence 
# they can without the character “A”.Each time a user successfully
#  sets a new longest sentence, print a congratulations message.
is_working = True;
record_len = 0
not_valid_message = 'oh no! sentence contain forbitten "A"..'

#issue: program ends after message
while is_working:
    user_sentence = input("write the longest sentence without 'A'")
    if  user_sentence == 'exit':
        print("goodbye")
        exit()
    if "A" in list(user_sentence):
        print(not_valid_message)
        break
    elif len(user_sentence) > record_len:
        record_len = len(user_sentence)
        print(f"you have a new record - {record_len} chars!")
        break
    else:
        print("try one more time!")