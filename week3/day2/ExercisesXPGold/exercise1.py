class BankAccount:
    
    authenticated = False

    def __init__(self, balance, user_name, password):
        self.balance = balance
        self.user_name = user_name
        self.password = password
    
    def display_balance(self):
        return self.balance

    def deposit(self, sum):
        if not self.authenticated:
            raise ValueError("you are not authenticated")
        if sum < 1:
            raise ValueError("sum of money must to be positive")
            
        self.balance += sum
        return self.balance

    def withdraw(self, sum):
        if not self.authenticated:
            raise ValueError("you are not authenticated")
        if sum < 1:
            raise ValueError("sum of money must to be positive")
        if (self.balance - sum) < 0:
            raise Exception("balance is less than sum")
        self.balance -= sum
        return self.balance

    def authenticate(self, username, password):
        if username == self.user_name and password == self.password:
            self.authenticated = True
            print("you logged in successfully")
            return True
        else:
            print("username or password is incorrect")
            return False

class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance, minimum_balance, username, password):
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, sum):
        available_to_withdraw = self.balance - self.minimum_balance
        if sum > available_to_withdraw:
            raise ValueError("your balance is too low to withdraw the amount")
        else:
            self.balance -= sum
            return self.balance

# ATM Class

def class_validator(alist, class1, class2):
    for obj in alist:
        if not isinstance(obj, (class1, class2)):
            print("List of accounts contains unknown type object:", obj)
            return False
    return True


class ATM:
    def __init__(self, account_list, try_limit):
        if not class_validator(account_list, BankAccount, MinimumBalanceAccount):
            raise TypeError("account_list contains invalid account type(s)")
        
        self.account_list = account_list
        
        if try_limit < 1:
            self.try_limit = 2  # Default try_limit
            print("Invalid try_limit. Automatically set to 2.")
        else:
            self.try_limit = try_limit
        
        self.current_tries = 0 
        
    def show_account_menu(self, account):
        option = ''
        while option != 'x':
            option = input("choose option: (d)eposit, (w)ithdraw or (x) exit: ").lower()
            if option == 'd':
                sum = int(input("enter sum: "))
                account.deposit(sum)
                
            elif option == 'w':
                sum = int(input("enter sum: "))
                account.withdraw(sum) 

            elif option == 'x':
                print("Exiting the account menu.")
                break
                
            else:
                print("Invalid option, please choose 'd', 'w', or 'x'.")

  

    def log_in(self, username, password):
        for account in self.account_list:
            if account.user_name == username and account.password == password:
                is_auth = account.authenticate(username, password)
                if is_auth:
                    self.show_account_menu(account)
                    return True
        self.current_tries += 1
        if self.current_tries >= self.try_limit:
            print("limit is reached")
            return False
        print(f"no match with any account in the list. you have {self.try_limit - self.current_tries} tries left")
        return False

# Testing

def bank_account_test():
    my_account = BankAccount(100, 'elena', '12345')
    print('balance', my_account.display_balance())
    print("authentication..with wrong pass")
    my_account.authenticate("elena", '123')  # Incorrect password
    print("authentication..with right pass")
    my_account.authenticate("elena", '12345')  # Correct password
    print("try to deposit 50$ auth")
    updated_balance = my_account.deposit(50)
    print(f"now balance is {updated_balance}")
    print("try to withdraw 30$ auth")
    updated_balance = my_account.withdraw(30)
    print(f"now balance is {updated_balance}")
    return True

def minimum_balance_account_test():
    my_min_balance_account = MinimumBalanceAccount(balance=150, minimum_balance=100, username='lena', password='67890')
    print(f"my_min_balance_account balance {my_min_balance_account.balance} minimum {my_min_balance_account.minimum_balance}")
    updated_balance = my_min_balance_account.withdraw(20)
    print('is left', updated_balance)
    return True

def atm_test():
    bank_account = BankAccount(100, 'elena', '12345')
    minbal_account = MinimumBalanceAccount(balance=150, minimum_balance=100, username='lena', password='67890')
    alist = [bank_account, minbal_account]
    caspomat = ATM(account_list=alist, try_limit=3)
    caspomat.log_in('elena', '12345')  # Test login with correct details
    return True

def main():
    if bank_account_test():
        print("bank_account_test passed__v")
    else:
        print("bank_account_test failed __x")

    if minimum_balance_account_test():
        print("minimum_balance_account_test passed__v")
    else:
        print("minimum_balance_account_test __x")
    
    if atm_test():
        print("atm_test passed__v")
    else:
        print("atm_test failed __x")

main()
