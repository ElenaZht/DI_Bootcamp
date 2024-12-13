--Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film
SET language_id = 4
WHERE film_id = 2;

UPDATE film
SET language_id = 5
WHERE film_id = 3;

--Which foreign keys (references) are defined for the customer table? 
-- address_id
--How does this affect the way in which we INSERT into the customer table?
-- address_id must to point to existing address_id in address table

--We created a new table called customer_review. Drop this table. 
--Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;-- no foreign keys of other tables refferenced to review_id, so it was easy

--Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT count(*) FROM public.rental WHERE return_date IS NULL;

--Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT temp.film_title, temp.inv_id, temp.price FROM public.rental 
INNER JOIN (
	SELECT film.title as film_title, inventory.inventory_id as inv_id, film.title, film.replacement_cost as price FROM inventory 
	INNER JOIN film ON film.film_id = inventory.film_id 
) AS temp
ON rental.inventory_id = temp.inv_id
WHERE return_date IS NULL
ORDER BY price DESC
LIMIT 30;



--Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, 
--but he can’t remember their names. Can you help him find which movies he wants to rent?
--The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT title, description FROM film
INNER JOIN 
	(SELECT film_id FROM film_actor
	INNER JOIN actor ON actor.actor_id = film_actor.actor_id
	WHERE first_name = 'Penelope' AND last_name = 'Monroe') AS PM_films
	ON film.film_id = PM_films.film_id
WHERE description ILIKE '%sumo wrestler%';


--The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT doc_films.film_id, film.title, film.rating FROM film
INNER JOIN (
	SELECT film_id FROM film_category
	INNER JOIN category ON  category.category_id = film_category.category_id
	WHERE category.name = 'Documentary'
) AS doc_films
ON film.film_id = doc_films.film_id
WHERE length < 60 AND rating = 'R'

--The 3rd film : A film that his friend Matthew Mahan rented. 
-- He paid over $4.00 for the rental, and he returned it between the 28th of
-- July and the 1st of August, 2005.
SELECT title FROM film
INNER JOIN 
	(SELECT film_id FROM inventory
	INNER JOIN 
		(SELECT rental_by_payment.rental_id, rental_by_payment.inventory_id FROM customer
		INNER JOIN(
			SELECT rental.customer_id, rental.rental_id, rental.return_date, rental.inventory_id FROM rental
			INNER JOIN payment on payment.customer_id = rental.customer_id AND payment.rental_id = rental.rental_id
			WHERE amount > 4
		) AS rental_by_payment
ON customer.customer_id = rental_by_payment.customer_id
WHERE return_date BETWEEN '2005-07-28' AND '2005-08-01'
AND first_name = 'Matthew' AND last_name = 'Mahan') AS rental_cutomer_date_amount
ON rental_cutomer_date_amount.inventory_id = inventory.inventory_id) AS movie_id
ON film.film_id = movie_id.film_id;

--The 4th film : His friend Matthew Mahan watched this film, as well. 
--It had the word “boat” in the title or description, and it looked 
--like it was a very expensive DVD to replace.
SELECT title, description, replacement_cost FROM film
INNER JOIN
	(SELECT film_id FROM inventory
	INNER JOIN 
		(SELECT rental.rental_id, rental.inventory_id FROM rental
			INNER JOIN customer ON rental.customer_id = customer.customer_id
			WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan') AS temp
	ON inventory.inventory_id = temp.inventory_id) AS MM_films
ON film.film_id = MM_films.film_id
WHERE title ILIKE '% boat %' OR description ILIKE '% boat %'
ORDER BY replacement_cost DESC 
LIMIT 1