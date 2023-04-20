const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0
  }
  return -0.5
};

const points = (rightAnswer, studentAnswer, result) => {
  let contador = 0;
  for (let index = 0; index < rightAnswer.length; index += 1) {
    const resultReturn = result(rightAnswer[index], studentAnswer[index]);
    contador += resultReturn
  }
  return `Pontuação final é: ${contador} pontos.`;
}

console.log(points(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));