class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  protected sayHello() {
    console.log('Hello world!');    
  }
}

class Subclass extends Superclass {
  public sayHello2(): void {
    this.sayHello();
  }
}

const myFunc = (object: Subclass) => {
  object.sayHello2();
}

// const myClass = new Superclass();
const myObject = new Subclass();

// myFunc(myClass);
myFunc(myObject);

