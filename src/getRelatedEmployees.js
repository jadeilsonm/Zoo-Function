const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some(({ managers }) => managers.some((ids) => ids === id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const arrFiltrado = employees.filter((employee) => {
    const { managers } = employee;
    return managers.some((Element) => Element === managerId);
  });
  return arrFiltrado.reduce((acc, curr) => [...acc, `${curr.firstName} ${curr.lastName}`], []);
}
getRelatedEmployees('a200');
module.exports = { isManager, getRelatedEmployees };
