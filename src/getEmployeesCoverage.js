const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function responsavel(par) {
  const employee = employees.find((element) => (
    element.id === par.id) || (element.firstName === par.name)
  || (element.lastName === par.name));
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  }
  const especies = employee.responsibleFor.map((element) => species.find((el) =>
    el.id === element));
  const nome = especies.map((element) => element.name);
  const localizacao = especies.map((element) => element.location);
  const resultado = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: nome,
    locations: localizacao,
  };
  return resultado;
}
function getEmployeesCoverage(parametro) {
  const resultadoTotal = employees.map((element) => responsavel(element));
  if (parametro === undefined) {
    return resultadoTotal;
  } if (parametro.id || parametro.name) {
    return responsavel(parametro);
  }
}

module.exports = getEmployeesCoverage;
