sentence= input('enter sentence: ')
sentence_reverses = ''
words_list = sentence.split(' ')
words_list_reversed = words_list[::-1]

print(' '.join(words_list_reversed))