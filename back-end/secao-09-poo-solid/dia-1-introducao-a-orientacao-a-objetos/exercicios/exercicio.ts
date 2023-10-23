class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = [];
    this._assignmentsGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(newEnrollment: string) {
    this._enrollment = newEnrollment;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._name = newName;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(newGrades: number[]) {
    if(newGrades.length > 4) {
      throw new Error('O número máximo de notas é 4.');
    }
    this._examsGrades = newGrades;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(newGrades: number[]) {
    if(newGrades.length > 2) {
      throw new Error('O número máximo de notas é 2.');
    }
    this._assignmentsGrades = newGrades;
  }

  sumGrades(): number {
    return [...this._examsGrades, ...this._assignmentsGrades]
    .reduce((previousNote, note) => {
      const nextNote = note + previousNote;
      return nextNote;
    }, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const average = this.examsGrades.length + this.assignmentsGrades.length;

    return Math.round(sumGrades / average);
  }
}

const personOne = new Student('202001011', 'Maria da Silva');
console.log(personOne);
personOne.examsGrades = [10, 8, 9, 7];
personOne.assignmentsGrades = [10, 9];
console.log("A soma das notas é: ", personOne.sumGrades());
console.log("A média das notas é: ", personOne.sumAverageGrade());
const personTwo = new Student('202001012', 'João da Silva');
console.log(personTwo);
