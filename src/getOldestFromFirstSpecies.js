const { species, employees } = require('../data/zoo_data');

const maiorIdade = (name) => {
  let idade = 0;
  const resident = species.find((El) => El.id === name).residents;
  resident.forEach((animal) => {
    if (animal.age > idade) idade = animal.age;
  });
  const animal = resident.find((el) => el.age === idade);
  return [animal.name, animal.sex, animal.age];
};

function getOldestFromFirstSpecies(id) {
  const verificar = employees.find((ids) => ids.id === id).responsibleFor[0];
  return (maiorIdade(verificar));
}

module.exports = getOldestFromFirstSpecies;
