const { employees, species } = require('../data/zoo_data');

const name = (responsibleFor) => species.reduce((acc, curr) => {
  if (responsibleFor.includes(curr.id)) {
    acc.push(curr.name);
  }
  return acc;
}, []);

const local = (responsibleFor) => species.reduce((acc, curr) => {
  if (name(responsibleFor).includes(curr.name)) {
    acc.push(curr.location);
  }
  return acc;
}, []);
const auxiliar = () => employees.map((employee) => {
  const { id, firstName, lastName, responsibleFor } = employee;
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: name(responsibleFor),
    locations: local(responsibleFor),
  };
});

const comEntrada = (todosNomes, entrada) => {
  if (entrada.name) {
    const result = todosNomes.find((element) => (element.fullName.includes(entrada.name)));
    return result;
  }
  if (entrada.id) {
    const bull = todosNomes.some((el) => el.id === entrada.id);
    if (bull === false) throw new Error('Informações inválidas');
    return todosNomes.find((element) => (element.id === entrada.id));
  }
};

function getEmployeesCoverage(entrada) {
  if (!entrada) {
    return auxiliar();
  }
  const todosNomes = auxiliar();
  return comEntrada(todosNomes, entrada);
}

module.exports = getEmployeesCoverage;
