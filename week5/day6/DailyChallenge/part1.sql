-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.

-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : 
-- id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)

CREATE TABLE Customer (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE Customer_profile (
    profile_id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
	customer_id INT UNIQUE NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id) ON DELETE CASCADE
);

--Insert those customers
-- John, Doe
-- Jerome, Lalu
-- Lea, Rive
INSERT INTO Customer(first_name, last_name) 
VALUES
    ('John', 'Doe'),
    ('Jerome', 'Lalu'),
    ('Lea', 'Rive');

--Insert those customer profiles, use subqueries
-- John is loggedIn
-- Jerome is not logged in
INSERT INTO Customer_profile (isLoggedIn, customer_id)
SELECT TRUE, customer_id
FROM Customer
WHERE first_name = 'John';

INSERT INTO Customer_profile (isLoggedIn, customer_id)
SELECT FALSE, customer_id
FROM Customer
WHERE first_name = 'Jerome';

--Use the relevant types of Joins to display:
--The first_name of the LoggedIn customers
SELECT Customer.first_name, Customer_profile.isLoggedIn FROM Customer
INNER JOIN Customer_profile on Customer_profile.customer_id = Customer.customer_id
WHERE Customer_profile.isLoggedIn = TRUE;

--All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT Customer.first_name, Customer_profile.isLoggedIn FROM Customer
FULL JOIN Customer_profile on Customer_profile.customer_id = Customer.customer_id

--The number of customers that are not LoggedIn
SELECT COUNT(*) FROM Customer
INNER JOIN Customer_profile on Customer_profile.customer_id = Customer.customer_id
WHERE Customer_profile.isLoggedIn = FALSE;

