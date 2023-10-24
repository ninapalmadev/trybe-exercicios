class Super {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHi():void {
    console.log("Hi!");
  }
}

class Subclass extends Super {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (object: Super) => {
  object.sayHi();

  console.log(object.isSuper ? 'Super!' : 'Sub');
}

const sup = new Super();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);