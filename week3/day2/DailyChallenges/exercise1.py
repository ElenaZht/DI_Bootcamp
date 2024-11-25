#Create a class to handle paginated content in a website. 
# A pagination is used to divide long lists of content in 
# a series of pages.The Pagination class will accept 2 
# parameters:
# items (default: None): It will contain a list of contents 
# to paginate.
# pageSize (default: 10): The amount of items to show in 
# each page
#You will have to implement various methods to go through 
# the pages such as:
# prevPage()
# nextPage()
# firstPage()
# lastPage()
# goToPage(pageNum)
class Pagination:
    current_page = 1
    last_page_num = 1 # insted of totalPages
    def __init__(self, items = None, pageSize = 10):
        self.items = items
        self.pageSize = int(pageSize)
        self.last_page_num = len(self.items) / self.pageSize
        if self.last_page_num > int(self.last_page_num):
            self.last_page_num += 1
        self.last_page_num = int(self.last_page_num)
        print(f"created new pagination with page size {self.pageSize}")

    def getVisibleItems(self):
        start_index = (self.current_page - 1) * self.pageSize
        end_index = self.current_page * self.pageSize
        return self.items[start_index:end_index]

    def goToPage(self, pageNum):
        page_num_int = int(pageNum)
        if page_num_int < 1:
            self.current_page = 1
        elif page_num_int > self.last_page_num:
            self.current_page = self.last_page_num
        else:
            self.current_page = page_num_int
        
        return self #for chainability

    def firstPage(self):
        self.goToPage(1)
        return self

    def lastPage(self):
        self.goToPage(self.last_page_num)
        return self

    def prevPage(self):
        self.goToPage(self.current_page - 1)
        return self

    def nextPage(self):
        self.goToPage(self.current_page + 1)
        return self

    def demonstate(self):
        while self.current_page <= self.last_page_num:
            print(self.getVisibleItems())
            self.nextPage()

        print(f"there is {self.last_page_num} pages")
    

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4.4)
print('\nstarting from the 1st page\n', p.getVisibleItems())

p.nextPage()
print(f"\ngo to page {p.current_page}")
print('by next() ', p.getVisibleItems())

p.lastPage()
print(f"\ngo to page {p.current_page}")
print("by last() ", p.getVisibleItems())

p.firstPage()
print(f"go to page {p.current_page}")
print("by first() ", p.getVisibleItems())

p.goToPage(3.8)
print('\ngo to page 3.8 ', p.getVisibleItems())

p.prevPage()
print(f'\ngo to prev page {p.current_page}', p.getVisibleItems())

p.goToPage(0)
print(f'\ntrying to go 0 page, enstead go to {p.current_page}', p.getVisibleItems())

p.goToPage(10)
print(f'\ntrying to go 10 page, enstead go to {p.current_page} ', p.getVisibleItems())

p.prevPage().prevPage()
print(f"\n double prev() - go to {p.current_page}", p.getVisibleItems())

# p.demonstate()
