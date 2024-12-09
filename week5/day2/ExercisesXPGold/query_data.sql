-- fetching data from students DB
-- For the following questions, you have to fetch the first_names, last_names and birth_dates of the students.

-- Fetch the first four students. You have to order the four students alphabetically by last_name.
SELECT first_name, last_name, birth_date FROM students ORDER BY last_name LIMIT 4;

-- Fetch the details of the youngest student.
SELECT first_name, last_name, birth_date FROM students ORDER BY birth_date DESC LIMIT 1;

-- Fetch three students skipping the first two students.
SELECT first_name, last_name, birth_date FROM students LIMIT 3 OFFSET 2;
