const newEmployees = (name) => {
  const employees = {
    id1: name('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: name('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: name('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const emailGenerator = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');
  return { fullName, email: `${email}@trybe.com` };
}

console.log(newEmployees(emailGenerator));