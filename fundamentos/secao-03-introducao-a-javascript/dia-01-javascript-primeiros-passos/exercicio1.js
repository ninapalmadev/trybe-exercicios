/* parte 1 */
let a = 3;
let b = 27;

console.log("Valor de a: " + a + ". Valor de b: " + b);
console.log("A soma de a + b é: " + (a + b));
console.log("A subtração de a - b é: " + (a - b));
console.log("A multiplicação de a X b é: " + (a * b));
console.log("A divisão de a / b é: " + (a / b));
console.log("O módulo de a % b é: " + (a % b));
console.log("-------------------------------------");

/* parte 2 */

// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.
let c = 35;
let d = 54;

if (c > d) {
    console.log("maior número é c " + c);
} else {
    console.log("maior número é d " + d);
}
console.log("-------------------------------------");
console.log("-------------------------------------");
// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.
let num1 = 56;
let num2 = 98;
let num3 = 13;

if (num1 > num2 && num1 > num3) {
    console.log("o maior número é: " + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("o maior número é: " + num2);
} else {
    console.log("o maior número é: " + num3);
}
console.log("-------------------------------------");
console.log("-------------------------------------");

/* Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, 
se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo. */
let num4 = 5;
if (num4 > 0) {
    console.log("positive");
} else if (num4 < 0) {
    console.log("negative");
} else {
    console.log("zero");    
}
console.log("-------------------------------------");
console.log("-------------------------------------");
/* 🚀 Utilize if/else para escrever um código que defina três variaveis com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo. */

let ang1 = 12;
let ang2 = 67;
let ang3 = 130;

let somaAngulos = ang1 + ang2 + ang3;
let valorPositivo = ang1 > 0 && ang2 > 0 && ang3 > 0;

if (valorPositivo) {
    if(somaAngulos === 180){
        console.log(true);
    } else{
        console.log(false);
    }
} else {
    console.log("Valor inválido");
}

/* parte 3  switch/case */


