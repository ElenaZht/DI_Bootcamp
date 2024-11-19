# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty 
# squares.
# The first player to get 3 of their marks in a row (up, 
# down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no 
# player has 3 marks in a row, the game ends in a tie.

#a | b | c
#1   | |
#----------
#2    | |
#----------
#3 | |
board = {'a1': '', 'a2': '', 'a3': '','b1': '', 'b2': '', 'b3': '', 'c1': '', 'c2': '', 'c3': ''}
player_x = []
player_o = []
win_combinations = [
    ['a1', 'b1', 'c1'],#horizontals
    ['a2', 'b2', 'c2'],
    ['a3', 'b3', 'c3'],
    ###################
    ['a1', 'a2', 'a3'], #verticals
    ['b1', 'b2', 'b3'],
    ['c1', 'c2', 'c3'],
    ###################
    ['a1', 'b2', 'c3'], #cross
    ['a3', 'b2', 'c1']

    ]
def display_board():
    print(f''' 
          a    b    c  
        1  {board['a1']}  |  {board['b1']}  |  {board['c1']}  
        --------------------
        2  {board['a2']}  |  {board['b2']}  |  {board['c2']}  
        --------------------
        3  {board['a3']}  |  {board['b3']}  |  {board['c3']}  
    '''

    )
def if_intersect(win_combination, player_steps):
    count = 0
    for step in player_steps:
        if step in win_combination:
            count += 1
    if count >= 3:
        print(f"{win_combination} found in {player_steps}")
        return True
    return False

def check_win(player):
    if player == 'x':
        for combination in win_combinations:
            if if_intersect(combination, player_x) == True:
                return True
            
    if player == 'o':
        for combination in win_combinations:
            if if_intersect(combination, player_o) == True:
                return True

    return False
        

def make_step(player):
    row = input("enter a row: ")
    col = input("enter a column: ")
    print(f'{player} step ', col + row)
    
    board[col + row] = player
    if player == 'x':
        player_x.append(col + row)
    else:
        player_o.append(col + row)

def play():
    count = 0
    winner = False
    while winner == False:
        #x turn
        display_board()
        print("Player X's turn..")
        make_step('x')
        winner = check_win('x')
        if winner == True:
            winner_name = 'Player X'
            break
        count += 1

        #o turn
        display_board()
        print("Player O's turn..")
        make_step('o')
        check_win('o')
        winner = check_win('o')
        if winner == True:
            winner_name = 'Player O'
            break
        count += 1

    display_board()
    if count == 9 and winner == False:
        print("oops! frendship wins!")
    else: 
        print(f"{winner_name} is win!!!")
play()