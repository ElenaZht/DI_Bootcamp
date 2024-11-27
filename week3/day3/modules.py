from collections import defaultdict  
nums = defaultdict(int)  
nums['one'] = 1  
nums['two'] = 2
nums['three'] = 3 
print(nums['four']) # 0

from collections import Counter  
list = [1,2,3,4,1,2,6,7,3,8,1,2,2]  
answer=Counter() #This creates an empty Counter object named answer
# When you create an empty Counter first and then immediately 
# overwrite it with Counter(list), the initial empty object is 
# discarded.so this line is unnessesary
answer = Counter(list)  #This creates a Counter object based on the 
# elements in list.
# answer = {1: 3, 2: 4, 3: 2, 4: 1, 6: 1, 7: 1, 8: 1}
print(answer[2])  # 4

from collections import deque  
#initialization
list = ["a","b","c"]  
deq = deque(list)  
print(deq)  #['a', 'b', 'c']

#insertion
deq.append("z")  
deq.appendleft("g")  
print(deq) # ['g', 'a', 'b', 'c', 'z']
#removal
deq.pop()  
deq.popleft()  
print(deq)  #['a', 'b', 'c']

from collections import namedtuple
Student = namedtuple('Student', 'fname, lname, age')  
s1 = Student('Peter', 'James', '13')  
print(s1.fname) # Peter
print(s1.lname) # James
print(s1.age) # 13


import collections
dictionary1 = { 'a' : 1, 'b' : 2 }  
dictionary2 = { 'c' : 3, 'b' : 4 }  
chain_Map = collections.ChainMap(dictionary1, dictionary2)
# ChainMap does not merge the dictionaries
# 'b' appears in both, and dictionary1 will take precedence 
# because it comes first.
print(chain_Map.maps) #[{'a': 1, 'b': 2}, {'c': 3, 'b': 4}]
print(chain_Map['b'])  # Output: 2 (from dictionary1, not dictionary2)
print(chain_Map['a'])  # Output: 1 (from dictionary1)
print(chain_Map['c'])  # Output: 3 (from dictionary2)

from collections import OrderedDict  
order = OrderedDict()  
order['a'] = 1  
order['b'] = 2  
order['c'] = 3  
print(order)  
# Even if you change the value of the key later, 
# the position will remain the same.
#unordered dictionary
unordered=dict()
unordered['a'] = 1  
unordered['b'] = 2  
unordered['c'] = 3 
print("Default dictionary", unordered)