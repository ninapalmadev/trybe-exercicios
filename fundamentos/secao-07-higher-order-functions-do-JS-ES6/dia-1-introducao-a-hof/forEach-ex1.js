const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

emailListInData.forEach((email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`));

// MESMA COISA SO QUE FUNÇOES SEPARADAS
// const emailChecker = (email) => {
//   console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
// }

// emailListInData.forEach(emailChecker);