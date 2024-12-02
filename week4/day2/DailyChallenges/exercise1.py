#Part 1 : Quizz :
# Answer the following questions

# What is a class?
    #Class is user-defined data structure, that can have own properties and methods, 
    # and implements Inhetitance principe of OOP

# What is an instance?
    #Instance is an object of custom or built-in class that inherits properties 
    # and methods of that class

# What is encapsulation?
    #Encapsulation is one of OOP main principles that means division of code such that between user 
    # logic ang functional realization places abstract(universal) logic, 
    # that doesn't has access to sensitive data

# What is abstraction?
    #Abstraction in OOP principle means creation intermediate logic, that uses 
    # other functionality, so doesn't has access to actual data

# What is inheritance?
    #Inheritance is OOP principle means creation classes with own properties and methods, and instanses of this classes that have access to properties and methods of parent class.
    #creation classes that inherits and extends other classes

# What is multiple inheritance?
    #Situasion when class inherites from 2 and more other classes 
    # or when multiple classes inherite from one common parent class

# What is polymorphism?
    #Polymorphism is OOP principle means posibility of inheritance 
    # by multiple classes of common method and overwriting it adopting 
    # to child class needs.this way multiple sibling classes can have 
    # method with same name but with differente logic inside. that helps to treat siblings classes instances the same way

# What is method resolution order or MRO?
    #Method resolution order is python3 builtin mechanism that 
    # defines order of searching method or property in parent classes

#Part 2: Create a deck of cards class
#The Card class should have a 
# suit (Hearts, Diamonds, Clubs, Spades) and a 
# value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
import random


class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value


class Deck:
    whole_collection = [
    {'suit': 'Hearts', 'value': '2'},
    {'suit': 'Hearts', 'value': '3'},
    {'suit': 'Hearts', 'value': '4'},
    {'suit': 'Hearts', 'value': '5'},
    {'suit': 'Hearts', 'value': '6'},
    {'suit': 'Hearts', 'value': '7'},
    {'suit': 'Hearts', 'value': '8'},
    {'suit': 'Hearts', 'value': '9'},
    {'suit': 'Hearts', 'value': '10'},
    {'suit': 'Hearts', 'value': 'Jack'},
    {'suit': 'Hearts', 'value': 'Queen'},
    {'suit': 'Hearts', 'value': 'King'},
    {'suit': 'Hearts', 'value': 'Ace'},
    {'suit': 'Diamonds', 'value': '2'},
    {'suit': 'Diamonds', 'value': '3'},
    {'suit': 'Diamonds', 'value': '4'},
    {'suit': 'Diamonds', 'value': '5'},
    {'suit': 'Diamonds', 'value': '6'},
    {'suit': 'Diamonds', 'value': '7'},
    {'suit': 'Diamonds', 'value': '8'},
    {'suit': 'Diamonds', 'value': '9'},
    {'suit': 'Diamonds', 'value': '10'},
    {'suit': 'Diamonds', 'value': 'Jack'},
    {'suit': 'Diamonds', 'value': 'Queen'},
    {'suit': 'Diamonds', 'value': 'King'},
    {'suit': 'Diamonds', 'value': 'Ace'},
    {'suit': 'Clubs', 'value': '2'},
    {'suit': 'Clubs', 'value': '3'},
    {'suit': 'Clubs', 'value': '4'},
    {'suit': 'Clubs', 'value': '5'},
    {'suit': 'Clubs', 'value': '6'},
    {'suit': 'Clubs', 'value': '7'},
    {'suit': 'Clubs', 'value': '8'},
    {'suit': 'Clubs', 'value': '9'},
    {'suit': 'Clubs', 'value': '10'},
    {'suit': 'Clubs', 'value': 'Jack'},
    {'suit': 'Clubs', 'value': 'Queen'},
    {'suit': 'Clubs', 'value': 'King'},
    {'suit': 'Clubs', 'value': 'Ace'},
    {'suit': 'Spades', 'value': '2'},
    {'suit': 'Spades', 'value': '3'},
    {'suit': 'Spades', 'value': '4'},
    {'suit': 'Spades', 'value': '5'},
    {'suit': 'Spades', 'value': '6'},
    {'suit': 'Spades', 'value': '7'},
    {'suit': 'Spades', 'value': '8'},
    {'suit': 'Spades', 'value': '9'},
    {'suit': 'Spades', 'value': '10'},
    {'suit': 'Spades', 'value': 'Jack'},
    {'suit': 'Spades', 'value': 'Queen'},
    {'suit': 'Spades', 'value': 'King'},
    {'suit': 'Spades', 'value': 'Ace'}
]
    current_collection = whole_collection    
    
    def shuffle(self):
        if len(self.current_collection) < 52:
            print("deck is not whole")
            return False
        if len(self.current_collection) > 52:
            print("deck is overflowed")
            return False
        
        for card in self.whole_collection:
            if card not in self.current_collection:
                print(f"card {card.value} {card.suit} is absent")
                return False
        #makes sure the deck of cards has all 52 cards 
        random.shuffle(self.current_collection)
        return True
        # and then rearranges them randomly.

    @staticmethod
    def display_card_layout(players):
        print("\n*** Layout ***\n")
        for player in players:
            print(f"{player}")
            for card in players[player]:
                print(f"*{card['value']} {card['suit']}")

    def deal(self):
    
        players = {'player1': [], 'player2': [], 'player3': [], 'player4': []}
        index = 0
        while len(self.current_collection):
            curr_card = self.current_collection.pop()
            players['player' + str(index+1)].append(curr_card)
            index = (index + 1) % 4

        print(f"deck is dealt. rest of cards - {len(self.current_collection)}")
        return players

        # deals a single card from the deck. 
        # After a card is dealt, it should be 
        # removed from the deck.

def main():
    print('lets start the game.')
    deck = Deck()
    shuffled = deck.shuffle()
    if shuffled:
        print("deck is shuffled")
        players = deck.deal()
    deck.display_card_layout(players)


main()