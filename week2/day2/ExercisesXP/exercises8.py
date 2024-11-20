# This project allows users to take a quiz to test their 
# Star Wars knowledge.The number of correct/incorrect answers
#  are tracked and the user receives different messages 
# depending on how well they did on the quiz.
# Create a function that asks the questions to the user, 
# and check his answers. Track the number of correct, 
# incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number 
# of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, 
# his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.

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

def show_info(correct, wrong_answers):
    print(f"You've got {correct} correct answers and {len(wrong_answers)} incorrect")
    print("Here your wrong answers:\n")
    for ans in wrong_answers:
        question = list(ans.keys())[0]
        user_answer = list(list(ans.values())[0].values())[0]
        right_answer = list(list(ans.values())[0].values())[1]
        print(question)
        print(f"your answer - {user_answer}, the right - {right_answer}\n")

def quizz():
    correct = 0
    wrong_answers = []
    for item in data:
        user_answer = input(item['question'])
        if user_answer == item['answer']:
            correct += 1
        else:
            wrong_answers.append({item['question']: {'user_answer': user_answer, 'right_answer':item['answer']}})
    
    print('\nYou answers on all the questions!\n')
    show_info(correct, wrong_answers)
    if correct <= len(data) - 3:
        play_again = input('do you want to play again?')
        if play_again == 'yes':
            quizz()


quizz()
