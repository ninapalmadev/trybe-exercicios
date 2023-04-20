const hydrate = (string) => {
  const split = string.split('');
  let water = 0;

  for (let index = 0; index < split.length; index += 1) {
    const char = parseInt(split[index]);

    if(char){
      water += char
    }
  }

  let glass = 'copo';

  if (water > 1){
    glass = 'copos';
  }

  return `${water} ${glass} de água`;
}

module.exports = hydrate;