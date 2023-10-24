class Animal {
/*
  Ao invés de declarar os atributos antes do construtor, receber parâmetros
  no construtor e colocá-los nos atributos da classe, se não formos
  validar, podemos utilizar uma forma simplificada de escrita, simplesmente
  colocando o modificador de visibilidade na frente
  do nome do parâmetro no construtor

    Exemplo
    O seguinte código:

    public x: number
    constructor(x: number) { this.x = x }

    Pode ser substituído por:

    constructor(public x: number) { }
    
    Obs: Usando essa sintaxe é necessário indicar explicitamente 
    logo antes do nome do atributo se ele é public, private, protected ou readonly
  */

  constructor(public name: string, private birthDate: Date) { }

  get age() {
    /*Para operar com datas, vamos operar somente com milissegundos. Uma data
    é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
    const timeDiff = Math.abs(
      Date.now() -
      new Date(this.birthDate).getTime()
    );

    /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
    Tente entender a lógica abaixo: como converter de milissegundos para anos?*/
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}

class Mamma extends Animal {
  walk() {
    console.log(`${this.name} is walking`);
  }
}

const tiger = new Mamma('Tiger', new Date(Date.parse('2015-05-05')));

const main = (animal: Animal) => {
  console.log(animal.name);
  console.log(animal.age);
}

main(tiger);
tiger.walk();


class Bird extends Animal {
  fly() {
    console.log(`${this.name} is flying`);
  }
}

const parrot = new Bird('Parrot', new Date(Date.parse('Jun 07, 2015')));

console.log(parrot.age);
parrot.fly();
