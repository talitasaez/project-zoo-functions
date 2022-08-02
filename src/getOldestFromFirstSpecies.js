const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees.find((element) => element.id === id);
  const firstSpecies = employee.responsibleFor.find((element) => element[0]);
  const findResidents = data.species.find((element) => element.id === firstSpecies).residents;
  const ages = findResidents.map((element) => element.age);
  const sortAges = ages.sort((a, b) => a - b);
  const oldest = findResidents.find((element) => element.age === sortAges[sortAges.length - 1]);
  const resultado = Object.values(oldest);
  return resultado;
}

module.exports = getOldestFromFirstSpecies;
