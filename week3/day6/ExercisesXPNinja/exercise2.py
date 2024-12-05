import random
import json

class Character:

    @staticmethod
    def rolling_dice():
        #rolling four 6-sided dice and record the sum 
        # of the largest three dice
        tries = []
        for i in range(4):
            tries.append(random.randint(1, 6))

        tries.sort(reverse=True)
        return tries[0] + tries[1] + tries[2]
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.Strength = self.rolling_dice()
        self.Dexterity = self.rolling_dice()
        self.Constitution = self.rolling_dice()
        self.Intelligence = self.rolling_dice()
        self.Wisdom = self.rolling_dice()
        self.Charisma = self.rolling_dice()

    def __str__(self):
        return f'''
                    {self.name} is {self.age} years old created
                    Strength: {self.Strength}
                    Dexterity: {self.Dexterity}
                    Constitution: {self.Constitution}
                    Intelligence: {self.Intelligence}
                    Wisdom: {self.Wisdom}
                    Charisma: {self.Charisma}
                '''


class Game:
    def __init__(self):
        self.num_of_players = int(input("enter number of players: "))
        self.players = {}
        for player in range(self.num_of_players):
            name = input("enter name: ")
            age = input("enter age: ")
            character = Character(name, age)
            new_player = {
                'name': name,
                'age': age,
                'attributes': [
                    {'Strength': character.Strength},
                    {'Dexterity': character.Dexterity},
                    {'Constitution': character.Constitution},
                    {'Intelligence': character.Intelligence},
                    {'Wisdom': character.Wisdom},
                    {'Charisma': character.Charisma}
                ]
            }
            self.players[name] = new_player

        self.save_to_json('players.json')
        self.save_to_txt('players_text.txt')

    def save_to_json(self, filename):
        with open(filename, "w") as file:
            json.dump(self.players, file, indent=4)

    def save_to_txt(self, filename):
        with open(filename, 'w') as text_file:
            text_file.write("***Dungeons & Dragons***\\n\n")
            for player_name, player_info in self.players.items():
                text_file.write(f"Player Name: {player_info['name']}\n")
                text_file.write(f"Age: {player_info['age']}\n")
                text_file.write("Attributes:\n")
                for attribute in player_info['attributes']:
                    for attr_name, attr_value in attribute.items():
                        text_file.write(f"  - {attr_name}: {attr_value}\n")
                text_file.write("\n" + "="*30 + "\n\n")
            

def main():
    new_game = Game()
    with open('players_text.txt') as file:
        content = file.read()
    print(content)


main()