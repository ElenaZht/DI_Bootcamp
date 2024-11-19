# # This project allows users to take a quiz to test their 
# # Star Wars knowledge.
# # The number of correct/incorrect answers are tracked 
# # and the user receives different messages depending on 
# # how well they did on the quiz.
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
# # Create a function that asks the questions to the user, 
# # and check his answers. Track the number of correct, 
# # incorrect answers. Create a list of wrong_answers
# # Create a function that informs the user of his number 
# # of correct/incorrect answers.
# # Bonus : display to the user the questions he answered 
# # wrong, his answer, and the correct answer.
# # If he had more then 3 wrong answers, ask him to play again.
# def quizz_results(correct, incorrect, wrong_answers):
#     if correct == 0:
#         print("you loose all the quizz")
#     else:
#         print(f"you have {correct} right answers!")

#     if incorrect == 0:
#         print("great job!")
#     else:
#         print(f"you have {incorrect} wrong answers")

#     if incorrect > 0:
#         for wa in wrong_answers.keys():
#             print(wa)
#             print(f"answer - {wrong_answers[wa]} is wrong")
#             print(f"right answer - {data[wa]['answer']}")

# def asker(question_list):
#     correct = 0
#     incorrect = 0
#     wrong_answers = {}
#     for q in question_list:
#         answer = input(f"{q['question']}? \n")
#         if answer == q['answer']:
#             correct += 1
#         else:
#             incorrect += 1
#             wrong_answers.update({q['question'], q['ap']})
#     quizz_results(correct, incorrect, wrong_answers)
#     if incorrect > 3:
#         if_redo = input("do you want to do it from the start? ")
#         if if_redo == 'y':
#             asker(data)

# asker(data)

#
#def asker():
#   for q in quas:
#       user_ans = input("q?")
#       analizer(q, user_ans)
# 
#def analizer()  