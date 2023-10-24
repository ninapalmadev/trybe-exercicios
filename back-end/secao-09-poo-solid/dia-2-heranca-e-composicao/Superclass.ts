class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  sayHello() {
    console.log('Hello world!');    
  }
}

class Subclass extends Superclass {}

const myFunc = (object: Superclass) => {
  object.sayHello();
}

const myClass = new Superclass();
const myObject = new Subclass();

myFunc(myClass);
myFunc(myObject);