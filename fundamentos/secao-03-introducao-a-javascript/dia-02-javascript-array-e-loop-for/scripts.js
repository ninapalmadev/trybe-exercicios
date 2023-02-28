let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* parte 1  */
for (let index = 0; index < numbers.length; index += 1) {
   console.log(numbers[index]);
}

/* parte 2  */
console.log('-----parte 2------');

let sum = 0;
for(let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
}
console.log(sum);
/* parte 3 */
console.log('-----parte 3------');

let sum2 = 0;
for(let index = 0; index < numbers.length; index += 1){
    sum2 += numbers[index];
}
let arithmeticAverage = sum2 / numbers.length;
console.log(arithmeticAverage);

/* parte 4 */
console.log('-----parte 4------');

if(arithmeticAverage >= 20){
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor que 20");
}

/* parte 5 */
console.log('-----parte 5------');

let biggerNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] > biggerNumber){
        biggerNumber = numbers[index];
    }
}
console.log("O maior número é: ", biggerNumber);

/* parte 6 */
console.log('-----parte 6------');

let isOdd = [];

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 !== 0){
        isOdd.push(numbers[index])
    } 
}
console.log(isOdd);

/* parte 7 */
console.log('-----parte 7------');

let smallerNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] < smallerNumber){
        smallerNumber = numbers[index];
    }
}
console.log("O menor número é: ", smallerNumber);

/* parte 8 */
console.log('-----parte 8------');

let newArray = [];
let numNewArray = 0;

for (let index = 0; index < 25; index+= 1) {
    numNewArray += 1;
    newArray.push(numNewArray);
}

console.log(newArray);

/* parte 9 */
console.log('-----parte 9------');

for(let index = 0; index < newArray.length; index += 1){
    let division = newArray[index] / 2;
    console.log("A divisão de " + newArray[index] + " por 2 é: " + division);
}