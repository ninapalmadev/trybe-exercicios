position = ""
if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"

    restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]
    
    filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

for index in range(5):
    print(index)

    n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

languages = ['Python', 'Java', 'JavaScript']

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]
languages = ['Python', 'Java', 'JavaScript']

for index, language in enumerate(['Python', 'Java']):
    print(f'{index} - {language}')
# Saída:
0 - Python
1 - Java

number = 5
counter = 1
result = 1

while counter <= number:
    result = result * counter
    counter += 1
result

number = 5
result = 1
# Usamos number + 1 pro range ir até o number
for factor in range(1, number+1):
    result *= factor


resultratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)

new_ratings

ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating for rating in ratings]
new_ratings

ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    # o sinal % representa a operação "resto".
    if (rating % 3) == 0: # se o resto é zero, é divisível
        print(f'{rating} é múltiplo de 3')

