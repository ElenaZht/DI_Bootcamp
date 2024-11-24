#Write a function that returns the L2-norm 
# (square root of the sum of squares) of the sum of a list
def euclidean_norm(alist):
    return int((sum([x**2 for x in alist]))**0.5)

print(euclidean_norm([1, 2, 2]))