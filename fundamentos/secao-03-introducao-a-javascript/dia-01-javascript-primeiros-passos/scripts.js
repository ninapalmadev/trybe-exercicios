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

/* operadores lógicos*/
let currentHour = 16;
let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir”";
    console.log(message);
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
    console.log(message);
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
    console.log(message);
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
    console.log(message);
} else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém-passado";
    console.log(message);
}


let weekDay = 'quarta-feira';
if (weekDay == 'segunda-feira' || weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira') {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
    console.log("FINALMENTE, descanso merecido! UwU!");
}

let statusPessoa = 'aprovada';
switch (statusPessoa) {
    case 'aprovada':
        console.log('Parabéns, você está no grupo de pessoas aprovadas!');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera.');
        break;
    case 'reprovada':
        console.log('Infelizmente você reprovou');
        break;
    default:
        console.log("Informação incorreta");
        break;
}