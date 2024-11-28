class Character:
    def __init__(self, name, life=20, attack=10):
        self.name = name
        self.life = life
        self.attack = attack

    def basic_attack(self, another_character):
        if isinstance(another_character, Character):
            another_character.life -= 1
        else: 
            raise Exception("can not attack unknown object")
    
class Druid(Character):
   
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print(f"new Druid {self.name} with {self.attack} power was created!")

    def __str__(self):
        return f"{self.name} with {self.attack} attack and {self.life} lifes"

    def meditate(self):
        self.life += 10
        self.attack -= 2
        print(f"{self.name} meditates, {self.attack}attack, {self.life}lifes")

    def animal_help(self):
        self.attack += 5
        print(f"animal help - attack {self.attack}")

    def fight(self, another_character):
        if isinstance(another_character, Character):
            another_character.life -= int((0.75*another_character.life + 0.75*self.attack))
            print(f"{self.name} fighted {another_character.name}, {another_character.name} lose {0.75*another_character.life + 0.75*self.attack}lifes")
        else: 
            raise Exception("can not fight unknown object")

class Warrior(Character):
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print(f"new Warrior {self.name} with {self.attack} power was created!")

    def __str__(self):
        return f"{self.name} with {self.attack} attack and {self.life} lifes"

    def brawl(self, another_character):
        if isinstance(another_character, Character):
            another_character.life -= self.attack*2
            self.life += self.attack / 2
            print(f"{self.name} brawled {another_character.name}, {self.name} lose {self.attack*2} lifes, {self.name} + {self.attack / 2} lifes")

        else:
            raise Exception("can not brawl unknown object")
        
    def train(self):
        self.attack += 2
        self.life += 2
        print(f"{self.name} trained: +2 attack, +2 life")

    def roar(self, another_character):
        if isinstance(another_character, Character):
            self.attack -= 3
            another_character.attack -= 3
            print(f"{self.name} and {another_character.name} roared: -3attack for each")
        else:
            raise Exception("can not roar to unknown object")
        
class Mage(Character):
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print(f"new Mage {self.name} with {self.attack} power was created!")

    def __str__(self):
        return f"{self.name} with {self.attack} attack and {self.life} lifes"

    def curse(self, another_character):
        if isinstance(another_character, Character):
            self.attack -= 2
            another_character.attack -= 2
            print(f"{self.name} at {another_character.name} curse: -2 attack for each")
        else:
            raise Exception("can not roar to unknown object")
        
    def summon(self):
        self.attack += 3
        print(f"{self.name} was summoned - +3 attack")

    def cast_spell(self, another_character):
        if isinstance(another_character, Character):
            another_character.life -= self.attack/self.life
            print(f"{self.name} spelled {another_character.name} -{self.attack/self.life} lifes to {{another_character.name}}")
        else:
            raise Exception("can not cast_spell to unknown object")

        

    


