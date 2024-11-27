# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount  
# Using the code above, implement the relevant methods and dunder methods which
#  will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should 
# raise an error.
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount   

    def __str__(self):
        return f"{self.amount} {self.currency}"

    def __int__(self):
        return int(self.amount) 
    
    def __repr__(self):
        return f"{self.amount} {self.currency}"
    
    def __add__(self, other_num):
        if isinstance(other_num, Currency):
            if self.currency != other_num.currency:
                raise TypeError(f"Cannot add between Currency type {self.currency} and {other_num.currency}")
            return self.amount + other_num.amount
        return self.amount + other_num
    
    def __iadd__(self, other_num):
        if isinstance(other_num, Currency):
            if self.currency != other_num.currency:
                raise TypeError(f"Cannot add between Currency type {self.currency} and {other_num.currency}")
            self.amount += other_num.amount
        else:
            self.amount += other_num
        return self



c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)  

print(str(c1)) #'5 dollars'
print(int(c1)) # 5
print(repr(c1)) # '5 dollars'
print(c1 + 5) # 10
print(c1 + c2) # 15
print(c1) # 5 dollars
c1 += 5
print(c1) #10 dollars
c1 += c2
print(c1) # 20 dollars
print(c1 + c3) # TypeError: Cannot add between Currency type <dollar> and <shekel>

