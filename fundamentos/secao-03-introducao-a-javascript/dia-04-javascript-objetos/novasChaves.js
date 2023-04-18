let customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

let customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
};

/* console.log(customer1.firstName);
console.log(customer1);
customer1.lastName = 'Faria';
console.log(customer1);

console.log(customer2['firstName']);
console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2); */

let newKey = 'lastName';
let lastName = 'Ferreira';

function addProperty(object, key, value) {
  object[key] = value;
};

addProperty(customer1, newKey, lastName);
console.log(customer1);

newKey = 'fullName';
let fullName = customer1.firstName + ' ' + customer1.lastName;

addProperty(customer1, newKey, fullName);
console.log(customer1);



/* Recapitulando, é possível utilizar as duas sintaxes a seguir.

objeto.nomeDaPropriedade

objeto[stringQueContemONomeDaPropriedade] 

CRIAR NOVA PROPRIEDADE
objeto.novaPropriedade = 'valor';
*/

// function addProperty (category, value){
//     for (let index = 0; index < menu[category].length; index += 1){
//         if(menu[category][index].price ){

//         }
//     }
// }

// addProperty('sobremesa', 9.90)
