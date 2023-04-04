const compare = (num1, num2) => num1 === num2;

const lotery = (num1, result) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return result(num1, number) ? 'Parabéns, você ganhou' : 'Tente novamente';
}

console.log(lotery(3, compare));