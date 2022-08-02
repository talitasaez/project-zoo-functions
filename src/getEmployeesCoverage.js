const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(id) {
  // seu código aqui
  const ids = employees.find((element) => element.id);
  const nome = employees.find((element) => element.firstName);
  const sobrenome = employees.find((element) => element.lastName);
  const nomes = nome.concat(sobrenome);
  const nomeAnimal = species.find((element) => element.name);
  const especie = employees.find((element) => element.responsibleFor.includes(nomeAnimal));
}

module.exports = getEmployeesCoverage;
