let myName = "Nina";
let birthCity = "São Paulo";
let bitrthYear = 1994;

console.log(myName);
console.log(birthCity);
console.log(bitrthYear);

/* operações */
let base = 5;
let height = 8;
let area = base * height;
console.log(area);
let perimeter = base + base + height + height;
console.log(perimeter);

/* condicionais */

let nota = 85;

if (nota >= 80) {
    console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
} else if (nota <= 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
} else {
    console.log("Infelizmente você reprovou");
}