SELECT * FROM sakila.film;

SELECT title, release_year, rating FROM sakila.film;

SELECT count(*) FROM sakila.film;

-- /* Escreva uma query que exiba apenas os sobrenomes únicos cadastrados---- /
SELECT distinct last_name FROM sakila.actor;

SELECT count(distinct last_name) FROM sakila.actor;

-- Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.-- 
SELECT * FROM sakila.actor
ORDER BY last_name, first_name DESC;

SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

-- Selecione todos os dados da tabela. Pronto, fez isso? 1.1 
-- Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes, 
-- incluindo o título, o ano de lançamento, a duração, a classificação indicativa e o custo de substituição. 
-- Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.

SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;