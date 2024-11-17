items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}
#Using the dictionary above, each key-value pair 
# represents an item and its price - print all 
# the items and their prices in a sentence.
for i in items:
    print(f"{i} costs {items[i]}$,")

#Using the dictionary below, each value are dictionaries 
# containing both the price and the amount of items 
# in stock - write some code to calculate how much it 
# would cost to buy everything in stock.
items2 = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}
total = 0
for item in items2:
    total += items2[item]['price'] * items2[item]['stock']

print(total, '$')