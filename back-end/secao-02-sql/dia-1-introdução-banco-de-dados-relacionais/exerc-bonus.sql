SELECT Piece, Price FROM Provides
WHERE Provider = 'RBT';

-- Escreva uma query para exibir todas as informações das 
-- cinco peças com os maiores preços.
SELECT Piece, Price FROM Provides
ORDER BY Price DESC
LIMIT 5;

SELECT distinct Provider, Price FROM Provides
ORDER BY Price DESC
LIMIT 4
OFFSET 2;

SELECT * FROM Provides
where Provider = 'HAL'
ORDER BY Price DESC;

SELECT COUNT(Provider) from Provides
WHERE Piece = 1
