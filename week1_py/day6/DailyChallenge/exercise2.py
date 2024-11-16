# Create a program that prints a list of 
# the items you can afford in the store with 
# the money you have in your wallet.

# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything 
# from the store.

# Hint : make sure to convert the amount from 
# dollars to numbers. Create a program that deletes 
# the $ sign, and the comma (for thousands)

items = {
    "coffee": "3$",
    "cinnabon roll": "5$",
    "slice of pizza": "1$",
    "green tee": "2$"
}
cart = []
prices = list(items.values())
prices.sort(reverse=True)
print("shop: ", items)

# 

wallet = int(input("what's your budget? "))
print(f"so you have {wallet}$")
if wallet == 0:
    print("Sorry, you have no money")
else:
    for price in prices:
        price = int(price.replace('$', ''))
        if wallet < price:
            continue
        else:
            wallet -= price
            for key, val in items.items():
                if val == str(price)+'$':
                    cart.append(key)
            
print(f"you can buy : {','.join(cart)}")