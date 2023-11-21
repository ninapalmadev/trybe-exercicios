frase = "CS é bom demais, as dicas pythonicas fazem ficar melhor ainda"

vogais = "aeiou"

# lista_vogais = []
# for letra in frase:
#     if letra.lower() in vogais:
#         lista_vogais.append(letra)

# print(lista_vogais)

lista_vogais = [letra for letra in frase if letra.lower() in vogais]

print(lista_vogais)
# Saída: ['o', 'e', 'a', 'i', 'a', 'i', 'a', 'o', 'i', 'a', 'a', 'e', 'i', 'a', 'e', 'o', 'a', 'i', 'a']

# conjunto_vogais = set()
# for letra in frase:
#     if letra.lower() in vogais:
#         conjunto_vogais.add(letra)

# print(conjunto_vogais)

conjunto_vogais = set(letra for letra in frase if letra.lower() in vogais)
print(conjunto_vogais)  # Saída: {'a', 'e', 'o', 'i'}

nomes_1 = ["Felps", "Carlos", "Will", "Bux"]
nomes_2 = ["Flávio", "Carlos", "Roni", ""]

all(nomes_1)  # Saída: True
all(nomes_2)  # Saída: False

any(nomes_1)  # Saída: True
any(nomes_2)  # Saída: True

for item in enumerate(nomes_1):
    print(item)
# Saída:
# (0, 'Felps')
# (1, 'Carlos')
# (2, 'Will')
# (3, 'Bux')

for index, item in enumerate(nomes_1):
    print(f"{index}: {item}")
# Saída:
# 0: Felps
# 1: Carlos
# 2: Will
# 3: Bux

import random

random_list = random.sample(range(0, 100000), 1000)

len(random_list)  # Saída: 1000
max(random_list)
min(random_list)

import random
from collections import Counter

lista_de_numeros = []
for x in range(10000):
    lista_de_numeros.append(random.randint(0, 1000))

# print(lista_de_numeros)
counter = Counter(lista_de_numeros)

# print(counter)
print(counter[0])

mais_comuns = counter.most_common()
# print(mais_comuns)

numero, vezes_que_repete = mais_comuns[0]
print(
    f"O número mais comum é {numero} e ele se repete {vezes_que_repete} vezes"
)