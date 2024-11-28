from classes import Druid, Warrior, Mage

def test_all():
    druid = Druid('Dima', 25, 15)
    warrior = Warrior('Lena', 40, 5)
    mage = Mage('Sima', 10, 35)

    #Druid testing
    druid.meditate()
    druid.animal_help()
    druid.fight(warrior)
    druid.basic_attack(mage)
    print(druid)

    #Warrior testing
    warrior.brawl(mage)
    warrior.train()
    warrior.roar(druid)
    warrior.basic_attack(druid)

    #Mage testing
    mage.curse(druid)
    mage.summon()
    mage.cast_spell(druid)

    #total
    print(druid)
    print(warrior)
    print(mage)
    

test_all()






