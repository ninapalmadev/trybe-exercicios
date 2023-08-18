SELECT * from sakila.film;
SELECT title, release_year, rating from sakila.film;

SELECT count(*) FROM sakila.film;

SELECT distinct last_name FROM sakila.actor;

SELECT COUNT(distinct last_name) FROM sakila.actor;

-- Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
SELECT * FROM sakila.actor
ORDER BY last_name, first_name DESC;

SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;