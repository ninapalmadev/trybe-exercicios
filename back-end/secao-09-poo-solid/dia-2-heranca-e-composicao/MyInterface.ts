interface MyInterface {
  myNumber: number;

  myFunction(myParam: number) : string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}
  myFunction(myParam: number): string {
    return `myNumber + myParam = ${this.myNumber + myParam}`
  }
}

const myObj = new MyClass(10);
console.log(myObj.myFunction(20));
console.log(myObj.myNumber);

