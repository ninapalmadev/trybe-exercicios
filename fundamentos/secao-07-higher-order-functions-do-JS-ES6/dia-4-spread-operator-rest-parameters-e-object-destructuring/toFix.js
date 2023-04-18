
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const trappistEnterprise = { ...user, ...jobInfos }

const logFunction = ({ name, age, nationality, profession, squad , squadInitials}) => {
  return `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`
};

console.log(logFunction(trappistEnterprise));


const userInfos = {
  ...user,
  ...jobInfos,
};
// Aqui podemos desestruturar as chaves do objeto `userInfo` e então criar nossa mensagem diretamente pelas chaves desestruturadas.
const { name, age, nationality, profession, squad, squadInitials } = userInfos;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);