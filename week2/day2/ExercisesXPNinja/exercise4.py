#Analyse this code before executing it. What is the purpose 
# of this code?

#Answer: insertion_sort sorts list by values in place implementing insertion 
# sort algorithm.function iterates by range of indexes because original list 
# is being modified on place to avoid out of index error
# So, we iterate one by one list from the 1st index till the last.
# For every element we compare It with previous one
# if it's bigger than the current, we switch them; process of comparing and 
# switching going left till the 0 index so element finds its right place 
# stopping on position when it's bigger itself then the previous one

def insertion_sort(alist):
   for index in range(1,len(alist)):

     currentvalue = alist[index]
     position = index

     while position>0 and alist[position-1]>currentvalue:
         print(f"position {position} : current {currentvalue} : prev {alist[position-1]} | {alist[position]} becomes {alist[position-1]}, {position} becomes {[position - 1]}")
         alist[position]=alist[position-1]
         position = position-1

     alist[position]=currentvalue

# alist = [54,26,93,17,77,31,44,55,20]
alist = [54,26,93,17,77]
insertion_sort(alist)
print(alist)