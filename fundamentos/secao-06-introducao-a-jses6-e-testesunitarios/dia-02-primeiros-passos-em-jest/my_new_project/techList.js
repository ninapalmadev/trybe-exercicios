const techList = (arrayTech, name) => {
  if (arrayTech.length === 0) return "Vazio!";

  const sort = arrayTech.sort();
  const newArray = [];

  for (let index = 0; index < sort.length; index += 1) {
    newArray.push({
      tech: sort[index],
      name: name,
    })
  }

  return newArray;
}

module.exports = techList;
