# Write a script that inserts an item at a defined 
# index in a list.

def insert_byindex(destination, item, index):
    if index >= len(destination):
        destination.append(item)
    else:
        for idx, d in enumerate(destination):
            if idx == index:
                destination[idx] = item
    return destination

print(insert_byindex([1, 2, 3, 4], 'A', 2))

