const students = [
  {
    firstName: 'João',
    lastName: 'Silva',
    age: 14,
    period: 'Manhã',
    subjects: [
      { name: 'Matemática', grade: 67 },
      { name: 'Português', grade: 79 },
      { name: 'Química', grade: 70 },
      { name: 'Biologia', grade: 65 },
    ],
  },
  {
    firstName: 'Mario',
    lastName: 'Ferreira',
    age: 15,
    period: 'Tarde',
    subjects: [
      { name: 'Matemática', grade: '59' },
      { name: 'Português', grade: '80' },
      { name: 'Química', grade: '78' },
      { name: 'Biologia', grade: '92' },
    ],
  },
  {
    firstName: 'Jorge',
    lastName: 'Santos',
    age: 15,
    period: 'Manhã',
    subjects: [
      { name: 'Matemática', grade: '76' },
      { name: 'Português', grade: '90' },
      { name: 'Química', grade: '70' },
      { name: 'Biologia', grade: '80' },
    ],
  },
  {
    firstName: 'Maria',
    lastName: 'Silveira',
    age: 14,
    period: 'Manhã',
    subjects: [
      { name: 'Matemática', grade: '91' },
      { name: 'Português', grade: '85' },
      { name: 'Química', grade: '92' },
      { name: 'Biologia', grade: '90' },
    ],
  },
  {
    firstName: 'Natalia',
    lastName: 'Castro',
    age: 14,
    period: 'Manhã',
    subjects: [
      { name: 'Matemática', grade: '70' },
      { name: 'Português', grade: '70' },
      { name: 'Química', grade: '60' },
      { name: 'Biologia', grade: '50' },
    ],
  },
  {
    firstName: 'Wilson',
    lastName: 'Martins',
    age: 14,
    period: 'Manhã',
    subjects: [
      { name: 'Matemática', grade: '80' },
      { name: 'Português', grade: '82' },
      { name: 'Química', grade: '79' },
      { name: 'Biologia', grade: '75' },
    ],
  },
];


// usando FOR
const allNameStudents = [];

for (let index = 0; index < students.length; index += 1) {
  if (students[index].period === 'Manhã') {
    allNameStudents.push(`${students[index].firstName} ${students[index].lastName}`)
  }
}

console.log(allNameStudents);

// usando forEach
const allNameStudents2 = [];

students.forEach((student) => {
  if (student.period === 'Manhã') {
    allNameStudents2.push(`${student.firstName} ${student.lastName}`);
  }
});

console.log(allNameStudents2);

//usando MAP E FILTER
const allNameStudents3 = students.filter((student) => (
  student.period === 'Manhã')).map((student) => `${student.firstName} ${student.lastName}`);

console.log(allNameStudents3);



const reportStatus = (name, students) => {
  // Primeiro, fizemos um find para buscar e retornar os dados do estudante.
  const studentInfo = students.find((student) => student.firstName === name);
  // objeto foi retornado e salvo na variável studentsInfo, depois o map foi usado para percorrer as matérias do objeto retornado e salvar o que se queria em um array da forma desejada.
  return studentInfo.subjects.map((subject) => (
    `${subject.name} - ${(subject.grade >= 60) ? 'Aprovado' : 'Reprovado'}`
  ));
};

console.log(reportStatus('Natalia', students));
