--Fetch all of the students first_names and last_names.
SELECT first_name, last_name FROM students;

--questions
SELECT first_name, last_name FROM students WHERE student_id=2;

--last_name is Benichou AND first_name is Marc
SELECT first_name, last_name FROM students WHERE last_name='Benichou' AND first_name='Marc';

--last_names are Benichou OR first_names are Marc
SELECT first_name, last_name FROM students WHERE last_name='Benichou' OR first_name='Marc';

--irst_names contain the letter a.
SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a%';

--Fetch the students whose first_names start with the letter a.
SELECT first_name, last_name FROM students WHERE first_name ILIKE 'a%';

--Fetch the students whose first_names end with the letter a.
SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a';

--Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT first_name, last_name FROM students WHERE SUBSTRING(first_name FROM LENGTH(first_name) - 1 FOR 1) = 'a';

--Fetch the students whose id’s are equal to 1 AND 3 .
SELECT first_name, last_name FROM students WHERE student_id=1 OR student_id=3;

--Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT * FROM students WHERE birth_date>='2000-01-01';


