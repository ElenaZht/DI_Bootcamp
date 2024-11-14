# Using this list 
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# Remove “Banana” from the list.
if "Banana" in basket:
    basket.remove("Banana")

# Remove “Blueberries” from the list.
if "Blueberries" in basket:
    basket.remove("Blueberries")

# Add “Kiwi” to the end of the list.
basket.append("Kiwi")

# Add “Apples” to the beginning of the list.
basket.insert(0, "Apples")

# Count how many apples are in the basket.
apples_count = basket.count("Apples")
print(apples_count)

# Empty the basket.
basket.clear()

# Print(basket)
print(basket)