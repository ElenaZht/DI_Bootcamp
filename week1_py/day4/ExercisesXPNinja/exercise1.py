C = 50
H = 30

D_list = input('insert D values by "," \n').split(",")
results = []

for d in D_list:
    Q = ((2 *C * int(d))/H)**0.5
    results.append(int(Q))

# Q = Square root of [(2 * C * D)/H]
print(results)