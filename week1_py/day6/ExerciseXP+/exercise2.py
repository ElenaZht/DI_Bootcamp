sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]
# Total Sales Calculation: Calculate the total sales 
# for each product category (i.e., the total revenue 
# generated from each type of product). Use a loop to 
# iterate through the data and a dictionary to store 
# the total sales for each product.

#sales_per_product = {"phone" : 400, "laptop": 300}
sales_per_product = {}
for order in sales_data:
    if order['product'] in sales_per_product:
        sales_per_product[order['product']] += order['price'] * order['quantity']
    else:
        sales_per_product[order['product']] = order['price'] * order['quantity']

# Customer Spending Profile: 
# Determine the total amount spent by each customer. 
# Use a dictionary to maintain the sum of amounts each 
# customer has spent.
spent_per_customer = {}
for order in sales_data:
    if order['customer_id'] in spent_per_customer:
        spent_per_customer[order['customer_id']] += order['price'] * order['quantity']
    else:
        spent_per_customer[order['customer_id']] = order['price'] * order['quantity']

#Sales Data Enhancement:
# Add a new field to each transaction called
#  “total_price” that represents the total price for that 
# transaction (quantity * price).
# Use a loop to modify the sales_data list with this 
# new information.
for order in sales_data:
    total_price = order['price'] * order["quantity"]
    order['total_price'] = total_price

#High-Value Transactions:
# Using list comprehension, create a list of all 
# transactions where the total price is greater than $500.
# Sort this list by the total price in descending order.
high_value_transactions = [order for order in sales_data if order['total_price'] >= 500]
high_value_transactions.sort(key=lambda order: order["total_price"], reverse=True)

# Customer Loyality Identification:
# Identify any customer who has made more than one purchase, 
# suggesting potential loyalty.
# Use a dictionary to count purchases per 
# customer, then use a loop or comprehension
# to identify customers meeting the loyalty criterion.
purchases_per_customer = {}
for order in sales_data:
    if order['customer_id'] in purchases_per_customer:
        purchases_per_customer[order['customer_id']] += 1
    else:
        purchases_per_customer[order['customer_id']] = 1

loyal_customers = []
for p in purchases_per_customer:
    if purchases_per_customer[p] > 1:
        loyal_customers.append(p)

#Bonus: Insights and Analysis:
# Calculate the average transaction value for 
# each product category.
transactions_per_product = {}
for order in sales_data:
    if order["product"] in transactions_per_product:
        transactions_per_product[order["product"]] += order["quantity"]
    else:
        transactions_per_product[order["product"]] = order["quantity"]

everage_transaction_per_product = {}
for product in sales_per_product:
    everage_transaction_per_product[product] = sales_per_product[product] / transactions_per_product[product]

print(everage_transaction_per_product)

# Identify the most popular product based on 
# the quantity sold.
most_popular_product_transaction = 0
most_popular_product = ''
for product in transactions_per_product:
    if transactions_per_product[product] > most_popular_product_transaction:
        most_popular_product_transaction = transactions_per_product[product]
        most_popular_product = product
print(f"most popular {most_popular_product} with {most_popular_product_transaction} transactions")


