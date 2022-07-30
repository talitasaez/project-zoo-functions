const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const colaborador = employees.some((employess) =>
    employess.managers.includes(id));
  return colaborador;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const outros = data.employees.filter((element) =>
    element.managers.includes(managerId));
  return outros.map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
