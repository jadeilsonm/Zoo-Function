const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const { employees } = data;
  return employees.find((pessoa) => {
    const { firstName, lastName } = pessoa;
    return firstName === employeeName || lastName === employeeName;
  });
}

module.exports = getEmployeeByName;
