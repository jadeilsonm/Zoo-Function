const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return (species.reduce((acc, curr) => {
      const { name, residents } = curr;
      acc[`${name}`] = residents.length;
      return acc;
    }, {}));
  }
  if (!animal.sex) {
    return species.find((Element) => Element.name === animal.specie).residents.length;
  }
  const resident = species.find((Element) => Element.name === animal.specie).residents;
  return resident.filter((Element) => Element.sex === animal.sex).length;
}

// console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
