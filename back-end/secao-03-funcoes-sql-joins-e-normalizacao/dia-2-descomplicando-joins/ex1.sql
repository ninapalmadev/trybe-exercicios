USE pixar;

SELECT 
	m.title, b.domestic_sales, b.international_sales
FROM
	movies m
INNER JOIN
	box_office b ON b.movie_id = m.id;
    
    USE pixar;

SELECT
    m.title,
    (b.domestic_sales + b.international_sales) AS "Vendas"
FROM
    movies m
        INNER JOIN
    box_office b ON b.movie_id = m.id
WHERE
    b.international_sales > b.domestic_sales;