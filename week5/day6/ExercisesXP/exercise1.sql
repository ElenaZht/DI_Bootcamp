--Get a list of all the languages, from the language table.
SELECT name FROM language;

--Get a list of all films joined with their languages – 
--select the following details : film title, description, and language name.
SELECT title, description, language.name FROM film
INNER JOIN language ON language.language_id = film.language_id;

--Get all languages, even if there are no films in those languages – 
-- select the following details : film title, description, and language name.
SELECT name, film.title, film.description  FROM language
FULL JOIN film On language.language_id = film.language_id;

--Create a new table called new_film with the following columns : 
-- id, name. Add some new films to the table.
CREATE TABLE new_film(
	id SERIAL PRIMARY KEY,
	name varchar(50)
);
INSERT INTO new_film (name) VALUES
('Terminator'), ('Batman'), ('Chizik-pizik');

--Create a new table called customer_review, which will contain film reviews that customers will make.
CREATE TABLE customer_review (
	review_id SERIAL PRIMARY KEY,
	film_id INTEGER REFERENCES film(film_id) ON DELETE CASCADE,
	language_id INTEGER REFERENCES language(language_id) ON DELETE CASCADE,
	title varchar(50),
	score INTEGER CHECK (score BETWEEN 1 AND 10),
	review_text TEXT,
	last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
	(1, 2, 'Pupic review', 5, 'Very bad film!'),
	(2, 3, 'Pupic review 2', 7, 'Very good film!');

--Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- film_actor_film_id_fkey foreign key in the film_actor table is preventing the operation because 
-- there are still references to the film_id in the film_actor table.
ALTER TABLE film_actor
ADD CONSTRAINT film_actor_film_id_fkey2 FOREIGN KEY (film_id) REFERENCES film(film_id) ON DELETE CASCADE;
--If you're trying to modify the existing foreign key constraint to add ON 
-- DELETE CASCADE or ON DELETE SET NULL, the process involves dropping the existing 
-- constraint first, then adding the new one with the desired behavior.
ALTER TABLE film_actor
DROP CONSTRAINT film_actor_film_id_fkey;
--film_category table also has film_id as foreign key
ALTER TABLE film_category
ADD CONSTRAINT film_category_film_id_fkey2 FOREIGN KEY (film_id) REFERENCES film(film_id) ON DELETE CASCADE;
ALTER TABLE film_category
DROP CONSTRAINT film_category_film_id_fkey;
-- same for inventory table
ALTER TABLE inventory
ADD CONSTRAINT inventory_film_id_fkey2 FOREIGN KEY (film_id) REFERENCES film(film_id) ON DELETE CASCADE;
ALTER TABLE inventory
DROP CONSTRAINT inventory_film_id_fkey;
--
ALTER TABLE rental
ADD CONSTRAINT rental_inventory_id_fkey2 FOREIGN KEY (inventory_id) REFERENCES inventory(inventory_id) ON DELETE CASCADE;
ALTER TABLE rental
DROP CONSTRAINT rental_inventory_id_fkey;
--payment table has restriction to rental_id not to be null, but we need to remove it
ALTER TABLE payment
ALTER COLUMN rental_id DROP NOT NULL;
--finally, we can remove film with no conflict
DELETE FROM film
WHERE film_id = 1;
--now review 1 is not exists in customer_review table



