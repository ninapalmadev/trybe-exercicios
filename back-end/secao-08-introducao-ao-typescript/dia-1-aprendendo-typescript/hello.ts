console.log('Hello, world!');


const firstName: string = 'John';
const age: number = 42;
const brazilian: boolean = false;

function greet(name: string) {
  console.log(`Hello, ${name.toUpperCase}!`);
}

function printPersonalInfo1(data: { name: string; birthYear: number }) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}
printPersonalInfo1({ name: 'Rogerinho', birthYear: 1978 });

const evenNumbers: number[] = [2, 4, 6];
const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
const booleanValues: boolean[] = [true, false];

evenNumbers.push(8) // Funciona
// evenNumbers.push('8') // Erro

function printId(id: number | string) {
  if (typeof id === "string") {
    return console.log(id.toUpperCase());
  }
  return console.log(id);
}

printId(101);

type PersonalInfo = {
  name: string;
  birthYear: number;
};

function printPersonalInfo(data: PersonalInfo) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}

printPersonalInfo({ name: 'Rogerinho', birthYear: 1978});

const person = {
  fistName: 'Frodo',
  lastName: 'Baggins',
  age: 52,
}

function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

console.log(getFullName(person.fistName, person.lastName));


type StatesOfMatter = "liquid" | "solid" | "gaseous";
type IdentifyingDocument = string | number;
type SO = "Linux" | "MacOS" | "Windows";
type ReservationNames = string[] | string;
type Address = {
  publicPlace: string;
  number: number;
  district: string;
  city: string;
  state: string;
}