const { name } = require('faker');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { residents } = data.species.find((specie) => specie.name === animal);
  return residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
