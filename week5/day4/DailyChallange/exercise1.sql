-- In this puzzle you have to go through all the SQL queries and provide us the output of the requests before executing them (ie. make an assumption).
-- Then, execute them to make sure you were correct.
-- Queries:
CREATE TABLE FirstTab (    -- create a table with columns id as integer and name as varchar
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES  -- insert entries to the table, last entry has no id
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab -- display the whole table

CREATE TABLE SecondTab ( -- create another table with column id as integer
    id integer 
)

INSERT INTO SecondTab VALUES -- insert entries to the second table, id of the last is null
(5),
(NULL)

SELECT * FROM SecondTab -- display the whole second table

-- Questions:


-- Q1. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
    -- assumption: will display count of all the rows from FirstTab id of which are not in SecondTab(6 and 7)
    -- result: displays 0
    -- explanation: When NOT IN evaluates a list containing a NULL, 
    -- the entire comparison becomes unknown (NULL) for every row in the outer query. 
    -- This happens because SQL uses three-valued logic (TRUE, FALSE, UNKNOWN) and cannot 
    -- conclusively determine if a value is "not in" a set that includes NULL.

-- Q2. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
    -- assumption: will displaycount of all rows of FirstTab excule row with id = 5
    -- result: 2 from 4
    -- explanation: if you apply a WHERE condition involving a column that may have NULL values, 
    -- the rows with NULL will be excluded if the condition evaluates to FALSE or UNKNOWN.

-- Q3. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
    -- assumption: 2, same as q2, 5 is only valid id in SecondTab, 
    -- and FirstTab contains only 2 rows that have id !=5 and not null
    -- result: 0
    -- explanation: NOT IN compares each value in FirstTab.id with the list [5, NULL].
    -- If the list contains a NULL, any comparison with it results in UNKNOWN because 
    -- SQL uses three-valued logic

-- Q4. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
    -- assumption: 2
    -- result: 2
    -- explanation: The WHERE id IS NOT NULL condition filters out the NULL values from SecondTab.
    -- Result of the subquery: [5]. 
    -- 5 NOT IN (5) → FALSE
    -- 6 NOT IN (5) → TRUE
    -- 7 NOT IN (5) → TRUE
    -- NULL NOT IN (5) → UNKNOWN