let coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
};

// for (let key in coolestTvShow){
//     console.log(key);
// }

console.log(Object.keys(coolestTvShow));

let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };

  function showSkills(student){
    let arrayOfSkills = Object.keys(student);
    for(let index in arrayOfSkills){
        console.log(arrayOfSkills[index] + ', nível: ' + student[arrayOfSkills[index]]);
    } 
  }

  console.log('Estudante 1: ');
  showSkills(student1);
  console.log('Estudante 2: ');
  showSkills(student2);