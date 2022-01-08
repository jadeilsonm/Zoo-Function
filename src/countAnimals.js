const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const obj = {};
    return (species.reduce((acc, curr) => {
      // console.log('objeto', obj);
      const { name, residents } = curr;
      obj[`${name}`] = residents.length;
      return obj;
    }, obj));
  }
  if (!animal.sex) {
    return species.find((Element) => Element.name === animal.specie).residents.length;
  }
  return species.find((Element) => Element.name === animal.specie).residents.filter((Element) => Element.sex === animal.sex).length;
}

// console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
